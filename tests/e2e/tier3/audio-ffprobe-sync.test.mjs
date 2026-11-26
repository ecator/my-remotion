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
} from "../helpers/episodes.mjs";
import { probeAudio, runRemotionFfprobe } from "../helpers/media-probe.mjs";
import { parseSourceFile } from "../helpers/static-scan.mjs";
import { loadTsModule } from "../helpers/ts-loader.mjs";

async function verifyEpisodeAudioGroup(episodesList) {
  for (const ep of episodesList) {
    const capPath = episodePaths(ep).captionsTs;
    assert.equal(fs.existsSync(capPath), true, `Missing ${capPath}`);
    const capMod = await loadTsModule(capPath);
    const sceneMeta = capMod[ep.sceneMetaName];
    assert.ok(sceneMeta, `Missing ${ep.sceneMetaName}`);

    for (const key of Object.keys(sceneMeta)) {
      const meta = sceneMeta[key];
      const mp3Abs = path.join(ROOT_DIR, "public", meta.audioFile);
      assert.equal(fs.existsSync(mp3Abs), true, `Missing voiceover MP3: ${mp3Abs}`);
      const info = probeAudio(mp3Abs);

      assert.equal(info.codecName, "mp3", `${meta.audioFile}: expected codec mp3`);
      assert.equal(
        info.sampleRate,
        SERIES_DEFAULTS.ttsSampleRate,
        `${meta.audioFile}: expected 24000 Hz sample rate, got ${info.sampleRate}`,
      );
      assert.equal(
        info.channels,
        SERIES_DEFAULTS.ttsChannels,
        `${meta.audioFile}: expected mono (1 ch), got ${info.channels}`,
      );
      const drift = Math.abs(info.durationMs - meta.voiceDurationMs);
      assert.ok(
        drift <= 50,
        `${ep.id}.${key}: ffprobe duration ${info.durationMs}ms drifts from captions.ts voiceDurationMs ${meta.voiceDurationMs}ms by ${drift}ms (> 50ms)`,
      );
    }
  }
}

test("[T3][EP01] pnpm exec remotion ffprobe confirms EP01 s01 MP3 codec (mp3/24kHz/mono/48kbps) matches EP01_SCENE_META.s01", async () => {
  const ep01 = EPISODES[0];
  const capMod = await loadTsModule(episodePaths(ep01).captionsTs);
  const s01 = capMod.EP01_SCENE_META.s01;
  const info = runRemotionFfprobe(path.join("public", s01.audioFile));

  assert.equal(info.codecName, "mp3");
  assert.equal(info.sampleRate, 24000);
  assert.equal(info.channels, 1);
  assert.equal(info.bitRate, 48000);
  const drift = Math.abs(info.durationMs - s01.voiceDurationMs);
  assert.ok(drift <= 50, `EP01 s01 drift ${drift}ms exceeds 50ms`);
});

test("[T3][EP01] Fast compositor ffprobe validates all 5 EP01 voiceovers & shared BGM stream", async () => {
  await verifyEpisodeAudioGroup([EPISODES[0]]);
  const bgmInfo = probeAudio(path.join("public", SERIES_DEFAULTS.bgmStaticPath));
  assert.equal(bgmInfo.codecName, "mp3");
  assert.ok(bgmInfo.durationMs > 20_000, "Shared BGM duration must be > 20s");
});

test("[T3][HelloWorld] Fast compositor ffprobe validates HelloWorld haibara_voice.mp3 and haibara_bgm.mp3 streams", () => {
  for (const f of HELLO_WORLD_META.requiredPublicFiles) {
    const info = probeAudio(path.join(HELLO_WORLD_META.publicDir, f));
    assert.equal(info.codecName, "mp3", `HelloWorld ${f} must be valid mp3`);
    assert.ok(info.durationMs > 1000, `HelloWorld ${f} duration too short`);
  }
});

test("[T3][F2][F3-F7] Fast compositor ffprobe validates EP02-EP06 voiceovers match EPXX_SCENE_META.voiceDurationMs (<= 50ms)", async () => {
  await verifyEpisodeAudioGroup(NEW_EPISODES.slice(0, 5));
});

test("[T3][F2][F8-F13] Fast compositor ffprobe validates EP07-EP12 voiceovers match EPXX_SCENE_META.voiceDurationMs (<= 50ms)", async () => {
  await verifyEpisodeAudioGroup(NEW_EPISODES.slice(5));
});

test('[T3][F2][F3-F13] All EP02-EP12 index.tsx compositions wire shared staticFile("shared/bgm/hf_tech_ambient.mp3") with standard gap-ducking envelope', () => {
  for (const ep of NEW_EPISODES) {
    const idxPath = episodePaths(ep).indexTsx;
    assert.equal(fs.existsSync(idxPath), true, `Missing ${idxPath}`);
    const { content } = parseSourceFile(idxPath);
    assert.match(content, /staticFile\(\s*["']shared\/bgm\/hf_tech_ambient\.mp3["']\s*\)/);
    assert.match(content, /0\.8\s*\*\s*fps|Math\.round\(\s*0\.8\s*\*\s*fps\s*\)/);
    assert.match(content, /1\.2\s*\*\s*fps|Math\.round\(\s*1\.2\s*\*\s*fps\s*\)/);
    assert.match(content, /Math\.min\(\s*0\.45\s*,\s*bgmVolume\s*\*\s*2\.1\s*\)/);
  }
});
