import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import {
  EPISODES,
  NEW_EPISODES,
  ROOT_DIR,
  SERIES_DEFAULTS,
  episodePaths,
} from "../helpers/episodes.mjs";
import { scanCompliance } from "../helpers/static-scan.mjs";
import { loadTsModule } from "../helpers/ts-loader.mjs";

const PIPELINE_SCRIPT = path.join(ROOT_DIR, "scratch", "gen_hf_episode_audio.py");

function calcVisualWidth(text) {
  let width = 0;
  for (const ch of text) {
    if (/[\u3000-\u303f\u4e00-\u9fff\uff00-\uffef\u2014\u2026]/.test(ch)) {
      width += 1.0;
    } else {
      width += 0.55;
    }
  }
  return width;
}

function groupPages(captions) {
  const pages = [];
  let cur = [];
  for (const tok of captions) {
    cur.push(tok);
    if (tok.pageBreakAfter) {
      pages.push(cur);
      cur = [];
    }
  }
  if (cur.length > 0) {
    pages.push(cur);
  }
  return pages;
}

function assertEpisodeCaptionsAndArithmetic(ep, capMod) {
  const totalFrames = capMod[ep.totalFramesName];
  const sceneMeta = capMod[ep.sceneMetaName];
  assert.equal(typeof totalFrames, "number", `${ep.id}: missing ${ep.totalFramesName}`);
  assert.ok(sceneMeta && typeof sceneMeta === "object", `${ep.id}: missing ${ep.sceneMetaName}`);

  const keys = Object.keys(sceneMeta);
  assert.ok(
    keys.length >= ep.minScenes && keys.length <= ep.maxScenes,
    `${ep.id}: expected ${ep.minScenes}-${ep.maxScenes} scenes, got ${keys.length}`,
  );

  let expectedFrom = 0;
  let totalSum = 0;

  keys.forEach((key, idx) => {
    const meta = sceneMeta[key];
    const isFirst = idx === 0;
    const isLast = idx === keys.length - 1;

    assert.equal(
      meta.fromFrame,
      expectedFrom,
      `${ep.id}.${key}: fromFrame ${meta.fromFrame} != expected ${expectedFrom}`,
    );

    if (isFirst) {
      assert.ok(
        meta.voiceFromFrame >= 24 && meta.voiceFromFrame <= 36,
        `${ep.id}.${key}: s01 voiceFromFrame ${meta.voiceFromFrame} must be in [24, 36]`,
      );
    } else {
      assert.ok(
        meta.voiceFromFrame >= 24 && meta.voiceFromFrame <= 36,
        `${ep.id}.${key}: voiceFromFrame ${meta.voiceFromFrame} must be in [24, 36]`,
      );
    }

    assert.equal(typeof meta.voiceDurationMs, "number");
    assert.ok(meta.voiceDurationMs > 0, `${ep.id}.${key}: voiceDurationMs must be > 0`);

    const expectedVoiceFrames = Math.ceil((meta.voiceDurationMs / 1000) * SERIES_DEFAULTS.fps);
    assert.equal(
      meta.voiceDurationInFrames,
      expectedVoiceFrames,
      `${ep.id}.${key}: voiceDurationInFrames ${meta.voiceDurationInFrames} != ceil((${meta.voiceDurationMs}/1000)*30)=${expectedVoiceFrames}`,
    );

    const expectedTailOut = isLast ? 36 : 30;
    const expectedDuration = meta.voiceFromFrame + meta.voiceDurationInFrames + expectedTailOut;
    assert.equal(
      meta.durationInFrames,
      expectedDuration,
      `${ep.id}.${key}: durationInFrames ${meta.durationInFrames} != voiceFrom(${meta.voiceFromFrame}) + voiceDur(${meta.voiceDurationInFrames}) + tailOut(${expectedTailOut})`,
    );

    expectedFrom += meta.durationInFrames;
    totalSum += meta.durationInFrames;

    // Captions array checks
    const capName = `${ep.prefixLower}_${key}_captions`;
    const captions = capMod[capName];
    assert.ok(Array.isArray(captions) && captions.length > 0, `${ep.id}: missing ${capName}`);

    assert.ok(
      captions[0].startMs >= 0 && captions[0].startMs <= 300,
      `${ep.id}.${key}: first caption startMs=${captions[0].startMs} should be scene-relative near 100ms`,
    );

    let prevEndMs = -Infinity;
    for (let i = 0; i < captions.length; i++) {
      const tok = captions[i];
      assert.equal(typeof tok.text, "string");
      assert.ok(tok.startMs <= tok.endMs, `${ep.id}.${key}[${i}]: startMs > endMs`);
      assert.equal(
        tok.timestampMs,
        Math.floor((tok.startMs + tok.endMs) / 2),
        `${ep.id}.${key}[${i}]: timestampMs must equal Math.floor((startMs+endMs)/2)`,
      );
      assert.ok(
        tok.confidence > 0 && tok.confidence <= 1,
        `${ep.id}.${key}[${i}]: invalid confidence ${tok.confidence}`,
      );
      if (i > 0) {
        assert.ok(
          tok.startMs >= prevEndMs - 100,
          `${ep.id}.${key}[${i}]: startMs=${tok.startMs} overlaps prevEndMs=${prevEndMs} by >100ms`,
        );
      }
      prevEndMs = tok.endMs;
    }

    const lastEndMs = captions[captions.length - 1].endMs;
    assert.ok(
      lastEndMs <= meta.voiceDurationMs + 250,
      `${ep.id}.${key}: last caption endMs (${lastEndMs}) exceeds voiceDurationMs (${meta.voiceDurationMs}) by >250ms`,
    );

    assert.equal(
      captions[captions.length - 1].pageBreakAfter,
      true,
      `${ep.id}.${key}: final caption token must set pageBreakAfter: true`,
    );

    const pages = groupPages(captions);
    for (let pIdx = 0; pIdx < pages.length; pIdx++) {
      const pageText = pages[pIdx].map((t) => t.text).join("").trim();
      assert.ok(pageText.length > 0, `${ep.id}.${key} page ${pIdx}: empty page`);
      assert.equal(
        /[。，、]$/.test(pageText),
        false,
        `${ep.id}.${key} page ${pIdx} ('${pageText}'): trailing sentence punctuation [。，、] must be stripped`,
      );
      assert.equal(
        /^[。，、？！：；,.!?]/.test(pageText),
        false,
        `${ep.id}.${key} page ${pIdx} ('${pageText}'): punctuation must not appear at line start`,
      );
      const vWidth = calcVisualWidth(pageText);
      assert.ok(
        vWidth <= 30,
        `${ep.id}.${key} page ${pIdx} ('${pageText}'): visual width ${vWidth.toFixed(2)} exceeds 30`,
      );
    }
  });

  assert.equal(totalSum, totalFrames, `${ep.id}: scene durations sum ${totalSum} != ${totalFrames}`);
}

test("[F2][EP01] EP01 captions.ts passes zero-fetch, visual width <= 30, <= 100ms overlap, midpoint timestampMs, and punctuation hygiene", async () => {
  const ep01 = EPISODES[0];
  const paths = episodePaths(ep01);
  const scan = scanCompliance(paths.captionsTs, { allowAllHardcoded30: true });
  assert.deepEqual(scan.fetchCalls, [], "EP01 captions.ts must not call fetch()");

  const capMod = await loadTsModule(paths.captionsTs);
  assertEpisodeCaptionsAndArithmetic(ep01, capMod);
});

test("[F2][EP01] EP01 scene frame arithmetic satisfies voiceDurationInFrames = ceil(ms/1000*30), contiguous fromFrame, and sum === EP01_TOTAL_FRAMES", async () => {
  const ep01 = EPISODES[0];
  const capMod = await loadTsModule(episodePaths(ep01).captionsTs);
  assert.equal(capMod.EP01_TOTAL_FRAMES, 7568);
  assert.equal(Object.keys(capMod.EP01_SCENE_META).length, 5);
  assertEpisodeCaptionsAndArithmetic(ep01, capMod);
});

test("[F2] Pipeline script scratch/gen_hf_episode_audio.py validates episode keys and enforces per-VideoName isolation", () => {
  assert.equal(fs.existsSync(PIPELINE_SCRIPT), true, "Missing scratch/gen_hf_episode_audio.py");
  const src = fs.readFileSync(PIPELINE_SCRIPT, "utf8");
  assert.match(src, /sys\.exit|raise\s+ValueError|parser\.error/, "Must fail explicitly on invalid/missing episode args");
  assert.match(src, /public/, "Must output MP3s into public/<VideoName>/");
  assert.match(src, /captions\.ts/, "Must generate src/videos/<VideoName>/captions.ts");
  assert.match(src, /pageBreakAfter/, "Must assign pageBreakAfter breaks in generated TS");
});

test("[F2] All 12 series captions.ts files contain zero fetch() or async subtitle loading", () => {
  for (const ep of EPISODES) {
    const capPath = episodePaths(ep).captionsTs;
    assert.equal(fs.existsSync(capPath), true, `Missing ${capPath}`);
    const scan = scanCompliance(capPath, { allowAllHardcoded30: true });
    assert.deepEqual(scan.fetchCalls, [], `${ep.id}/captions.ts must not call fetch()`);
    assert.equal(
      /\buseDelayRender\b/.test(fs.readFileSync(capPath, "utf8")),
      false,
      `${ep.id}/captions.ts must not use async useDelayRender()`,
    );
  }
});

test("[F2] Caption page visual width (<= 30) and punctuation hygiene hold across all 12 series episodes", async () => {
  for (const ep of EPISODES) {
    const capPath = episodePaths(ep).captionsTs;
    assert.equal(fs.existsSync(capPath), true, `Missing ${capPath}`);
    const capMod = await loadTsModule(capPath);
    assertEpisodeCaptionsAndArithmetic(ep, capMod);
  }
});

for (const ep of NEW_EPISODES) {
  test(`[${ep.featureId}][${ep.epTag}] Scene timing arithmetic and @remotion/captions invariants hold for ${ep.id}`, async () => {
    const capPath = episodePaths(ep).captionsTs;
    assert.equal(fs.existsSync(capPath), true, `Missing ${capPath}`);
    const scan = scanCompliance(capPath, { allowAllHardcoded30: true });
    assert.deepEqual(scan.fetchCalls, [], `${ep.id}/captions.ts must not call fetch()`);
    const capMod = await loadTsModule(capPath);
    assertEpisodeCaptionsAndArithmetic(ep, capMod);
  });
}
