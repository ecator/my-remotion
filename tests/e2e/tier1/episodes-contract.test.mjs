import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import {
  EPISODES,
  HELLO_WORLD_META,
  NEW_EPISODES,
  ROOT_DIR,
  SERIES_DEFAULTS,
  episodePaths,
  normalizeTitle,
} from "../helpers/episodes.mjs";
import { inspectDocTriplet } from "../helpers/doc-inspect.mjs";
import { parseSourceFile } from "../helpers/static-scan.mjs";
import { loadTsModule } from "../helpers/ts-loader.mjs";

test("[EP01] Baseline episode contract: docs triplet, 5 voiceover MP3s, index/captions/Scene01-05, schema, and wiring", async () => {
  const ep = EPISODES[0];
  const paths = episodePaths(ep);
  const triplet = inspectDocTriplet(paths.docsDir);
  assert.equal(triplet.scriptExists, true, "EP01 script.md must exist");
  assert.equal(triplet.storyboardExists, true, "EP01 storyboard.md must exist");
  assert.equal(triplet.notesExists, true, "EP01 notes.md must exist");

  const captionsMod = await loadTsModule(paths.captionsTs);
  assert.equal(typeof captionsMod.EP01_TOTAL_FRAMES, "number");
  assert.ok(captionsMod.EP01_TOTAL_FRAMES > 0);
  const metaKeys = Object.keys(captionsMod.EP01_SCENE_META);
  assert.equal(metaKeys.length, 5);
  for (const key of metaKeys) {
    const meta = captionsMod.EP01_SCENE_META[key];
    const mp3Path = path.join(ROOT_DIR, "public", meta.audioFile);
    assert.equal(fs.existsSync(mp3Path), true, `Missing EP01 audio file ${mp3Path}`);
  }

  const indexMod = await loadTsModule(paths.indexTsx);
  assert.equal(typeof indexMod[ep.id], "function");
  assert.ok(indexMod[ep.schemaName], "EP01 must export hfEp01Schema");

  const { content } = parseSourceFile(paths.indexTsx);
  assert.match(content, /<HfSeriesShell\b/);
  assert.match(content, /shared\/bgm\/hf_tech_ambient\.mp3/);
  assert.match(content, /<Sequence\b/);
  assert.match(content, /<HfCaptionBar\b/);
});

test("[HelloWorld] Baseline composition contract: src/videos/HelloWorld/*, public MP3s, and helloWorldSchema", async () => {
  const hwDir = path.join(ROOT_DIR, HELLO_WORLD_META.srcDir);
  const hwIndex = path.join(hwDir, "index.tsx");
  assert.equal(fs.existsSync(hwIndex), true, "HelloWorld/index.tsx must exist");
  for (const file of HELLO_WORLD_META.requiredPublicFiles) {
    const pubPath = path.join(ROOT_DIR, HELLO_WORLD_META.publicDir, file);
    assert.equal(fs.existsSync(pubPath), true, `Missing HelloWorld audio ${pubPath}`);
  }
  const mod = await loadTsModule(hwIndex);
  assert.equal(typeof mod.HelloWorld, "function");
  assert.ok(mod.helloWorldSchema, "HelloWorld must export helloWorldSchema");
});

for (const ep of NEW_EPISODES) {
  const tag = `[${ep.featureId}][${ep.epTag}]`;
  const paths = episodePaths(ep);

  test(`${tag} Documentation triplet (script.md, storyboard.md, notes.md) exists under docs/${ep.id}/`, () => {
    const triplet = inspectDocTriplet(paths.docsDir);
    assert.equal(triplet.scriptExists, true, `Missing ${paths.scriptMd}`);
    assert.equal(triplet.storyboardExists, true, `Missing ${paths.storyboardMd}`);
    assert.equal(triplet.notesExists, true, `Missing ${paths.notesMd}`);
    assert.ok(triplet.scriptSize >= 500, `script.md for ${ep.id} is too small (${triplet.scriptSize}B)`);
    assert.ok(triplet.storyboardSize >= 300, `storyboard.md for ${ep.id} is too small (${triplet.storyboardSize}B)`);
    assert.ok(triplet.notesSize >= 100, `notes.md for ${ep.id} is too small (${triplet.notesSize}B)`);
  });

  test(`${tag} Source module layout (index.tsx, captions.ts, 4-6 Scene0*.tsx files) exists and loads cleanly`, async () => {
    assert.equal(fs.existsSync(paths.srcDir), true, `Missing src directory ${paths.srcDir}`);
    assert.equal(fs.existsSync(paths.indexTsx), true, `Missing ${paths.indexTsx}`);
    assert.equal(fs.existsSync(paths.captionsTs), true, `Missing ${paths.captionsTs}`);

    const sceneFiles = fs
      .readdirSync(paths.srcDir)
      .filter((f) => /^Scene0\d.*\.tsx$/.test(f))
      .sort();
    assert.ok(
      sceneFiles.length >= ep.minScenes && sceneFiles.length <= ep.maxScenes,
      `${ep.id} must have ${ep.minScenes}-${ep.maxScenes} Scene0*.tsx files (found ${sceneFiles.length})`,
    );

    await loadTsModule(paths.captionsTs);
    await loadTsModule(paths.indexTsx);
  });

  test(`${tag} captions.ts exports ${ep.totalFramesName}, ${ep.sceneMetaName}, per-scene captions, and existing public MP3s`, async () => {
    assert.equal(fs.existsSync(paths.captionsTs), true, `Missing ${paths.captionsTs}`);
    const mod = await loadTsModule(paths.captionsTs);

    assert.equal(
      typeof mod[ep.totalFramesName],
      "number",
      `${ep.id}/captions.ts must export numeric ${ep.totalFramesName}`,
    );
    assert.ok(mod[ep.totalFramesName] > 0, `${ep.totalFramesName} must be > 0`);

    const sceneMeta = mod[ep.sceneMetaName];
    assert.ok(
      sceneMeta && typeof sceneMeta === "object",
      `${ep.id}/captions.ts must export ${ep.sceneMetaName}`,
    );
    const keys = Object.keys(sceneMeta);
    assert.ok(
      keys.length >= ep.minScenes && keys.length <= ep.maxScenes,
      `${ep.sceneMetaName} must have ${ep.minScenes}-${ep.maxScenes} scenes (got ${keys.length})`,
    );

    for (const key of keys) {
      const meta = sceneMeta[key];
      const capExportName = `${ep.prefixLower}_${key}_captions`;
      assert.ok(
        Array.isArray(mod[capExportName]) && mod[capExportName].length > 0,
        `${ep.id}/captions.ts must export non-empty array ${capExportName}`,
      );
      assert.equal(typeof meta.audioFile, "string");
      assert.ok(
        meta.audioFile.startsWith(`${ep.id}/`),
        `${ep.id} audioFile '${meta.audioFile}' must reside under ${ep.id}/`,
      );
      const mp3Abs = path.join(ROOT_DIR, "public", meta.audioFile);
      assert.equal(fs.existsSync(mp3Abs), true, `Missing MP3 voiceover: ${mp3Abs}`);
      assert.ok(fs.statSync(mp3Abs).size > 20_000, `MP3 too small: ${mp3Abs}`);
    }
  });

  test(`${tag} index.tsx exports ${ep.id}, ${ep.schemaName}, and ${ep.defaultPropsName} matching Zod contract`, async () => {
    assert.equal(fs.existsSync(paths.indexTsx), true, `Missing ${paths.indexTsx}`);
    const mod = await loadTsModule(paths.indexTsx);

    assert.equal(typeof mod[ep.id], "function", `Missing component export ${ep.id}`);
    assert.ok(mod[ep.schemaName], `Missing Zod schema export ${ep.schemaName}`);

    const defaults = mod[ep.defaultPropsName];
    assert.ok(
      defaults && typeof defaults === "object",
      `Missing ${ep.defaultPropsName} export in ${ep.id}/index.tsx`,
    );
    assert.equal(defaults.episodeCode, ep.episodeCode);
    assert.equal(
      normalizeTitle(defaults.episodeTitle),
      normalizeTitle(ep.episodeTitle),
      `Mismatch on ${ep.epTag} episodeTitle`,
    );
    assert.equal(defaults.brandColor, SERIES_DEFAULTS.brandColor);
    assert.equal(defaults.accentColor, SERIES_DEFAULTS.accentColor);
    assert.equal(defaults.showSubtitles, SERIES_DEFAULTS.showSubtitles);
    assert.equal(defaults.bgmVolume, SERIES_DEFAULTS.bgmVolume);

    const parsed = mod[ep.schemaName].safeParse(defaults);
    assert.equal(parsed.success, true, `${ep.schemaName} must validate ${ep.defaultPropsName}`);
  });

  test(`${tag} index.tsx wires HfSeriesShell, looped shared BGM Audio with ducking, per-scene Sequence/Audio, and HfCaptionBar`, () => {
    assert.equal(fs.existsSync(paths.indexTsx), true, `Missing ${paths.indexTsx}`);
    const { content } = parseSourceFile(paths.indexTsx);

    assert.match(content, /<HfSeriesShell\b/, `${ep.id} must wrap scenes in <HfSeriesShell>`);
    assert.match(
      content,
      /shared\/bgm\/hf_tech_ambient\.mp3/,
      `${ep.id} must use shared BGM hf_tech_ambient.mp3`,
    );
    assert.match(content, /\bloop\b/, `${ep.id} BGM <Audio> must loop`);
    assert.match(
      content,
      /Math\.min\(\s*0\.45\s*,\s*bgmVolume\s*\*\s*2\.1\s*\)/,
      `${ep.id} must use EP01 BGM gap-ducking formula Math.min(0.45, bgmVolume * 2.1)`,
    );
    assert.match(content, /<Sequence\b/, `${ep.id} must place each scene inside <Sequence>`);
    assert.match(content, /<Audio\b/, `${ep.id} must mount per-scene voiceover <Audio>`);
    assert.match(content, /<HfCaptionBar\b/, `${ep.id} must render <HfCaptionBar> inside scene <Sequence>`);
    assert.match(content, /showSubtitles/, `${ep.id} must gate <HfCaptionBar> on showSubtitles`);
  });
}
