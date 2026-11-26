import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { EPISODES, ROOT_DIR, SERIES_DEFAULTS } from "../helpers/episodes.mjs";

const PIPELINE_SCRIPT = path.join(ROOT_DIR, "scratch", "gen_hf_episode_audio.py");

test("[F2][EP01] Shared BGM public/shared/bgm/hf_tech_ambient.mp3 and EP01 voiceovers exist with valid sizes", () => {
  const bgmPath = path.join(ROOT_DIR, "public", SERIES_DEFAULTS.bgmStaticPath);
  assert.equal(fs.existsSync(bgmPath), true, "Shared BGM hf_tech_ambient.mp3 must exist");
  assert.ok(fs.statSync(bgmPath).size > 100_000, "Shared BGM file must be non-trivial (>100KB)");

  const ep01 = EPISODES[0];
  for (let s = 1; s <= 5; s++) {
    const mp3 = path.join(ROOT_DIR, "public", ep01.id, `ep01_s0${s}_voice.mp3`);
    assert.equal(fs.existsSync(mp3), true, `Missing EP01 voiceover: ${mp3}`);
    assert.ok(fs.statSync(mp3).size > 50_000, `EP01 voiceover s0${s} must be >50KB`);
  }
});

test("[F2] Shared TTS generator scratch/gen_hf_episode_audio.py exists with PEP 723 metadata and edge-tts", () => {
  assert.equal(
    fs.existsSync(PIPELINE_SCRIPT),
    true,
    "Missing shared audio/caption generator: scratch/gen_hf_episode_audio.py",
  );
  const src = fs.readFileSync(PIPELINE_SCRIPT, "utf8");
  assert.match(src, /^#\s*\/\/\/\s*script/m, "Must include PEP 723 `# /// script` header");
  assert.match(src, /requires-python\s*=/, "Must declare requires-python in PEP 723 metadata");
  assert.match(
    src,
    /dependencies\s*=\s*\[[\s\S]*["']edge-tts(?:[><=!~][^"']*)?["']/,
    "Must declare edge-tts dependency",
  );
  assert.match(src, /^#\s*\/\/\//m, "Must close PEP 723 `# ///` block");
});

test("[F2] scratch/gen_hf_episode_audio.py defaults to zh-CN-YunxiNeural voice and +6% rate", () => {
  assert.equal(fs.existsSync(PIPELINE_SCRIPT), true, "scratch/gen_hf_episode_audio.py must exist");
  const src = fs.readFileSync(PIPELINE_SCRIPT, "utf8");
  assert.match(src, /zh-CN-YunxiNeural/, "Default voice must be zh-CN-YunxiNeural");
  assert.match(src, /\+6%/, "Default TTS rate must be +6%");
});

test("[F2] scratch/gen_hf_episode_audio.py measures exact ms via remotion ffprobe (no guessed durations)", () => {
  assert.equal(fs.existsSync(PIPELINE_SCRIPT), true, "scratch/gen_hf_episode_audio.py must exist");
  const src = fs.readFileSync(PIPELINE_SCRIPT, "utf8");
  assert.match(
    src,
    /remotion["']?\s*,\s*["']ffprobe|pnpm\s+exec\s+remotion\s+ffprobe/,
    "Must invoke `pnpm exec remotion ffprobe` to measure exact MP3 duration",
  );
  assert.match(src, /voiceDurationMs/, "Must emit voiceDurationMs from ffprobe output");
});

test("[F2] scratch/gen_hf_episode_audio.py emits scene-relative @remotion/captions with pageBreakAfter & punctuation rules", () => {
  assert.equal(fs.existsSync(PIPELINE_SCRIPT), true, "scratch/gen_hf_episode_audio.py must exist");
  const src = fs.readFileSync(PIPELINE_SCRIPT, "utf8");
  assert.match(src, /@remotion\/captions/, "Must import Caption type from @remotion/captions");
  assert.match(src, /pageBreakAfter/, "Must mark single-line page breaks via pageBreakAfter");
  assert.match(src, /timestampMs/, "Must emit timestampMs field on Caption tokens");
  assert.match(src, /confidence/, "Must emit confidence field on Caption tokens");
  assert.match(src, /[。，、]/, "Must strip trailing sentence/clause punctuation [。，、]");
});

test("[F2] scratch/gen_hf_episode_audio.py computes voiceDurationInFrames = ceil(ms/1000 * 30) and supports CLI episode targeting", () => {
  assert.equal(fs.existsSync(PIPELINE_SCRIPT), true, "scratch/gen_hf_episode_audio.py must exist");
  const src = fs.readFileSync(PIPELINE_SCRIPT, "utf8");
  assert.match(src, /math\.ceil/, "Must use math.ceil for voiceDurationInFrames");
  assert.match(src, /argparse/, "Must parse CLI arguments cleanly via argparse");
  assert.match(src, /--spec|--episode|episodeCode/i, "Must accept episode/spec CLI selector");
  assert.match(src, /narration/, "Must process per-scene narration text");
});
