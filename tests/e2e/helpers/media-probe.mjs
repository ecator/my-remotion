import { execFileSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { ROOT_DIR } from "./episodes.mjs";

let cachedFfprobe = null;

export function resolveCompositorFfprobe() {
  if (cachedFfprobe) return cachedFfprobe;

  const rootReq = createRequire(path.join(ROOT_DIR, "package.json"));
  const cliPkgPath = rootReq.resolve("@remotion/cli/package.json");
  const cliReq = createRequire(cliPkgPath);
  const rendererPkgPath = cliReq.resolve("@remotion/renderer/package.json");
  const rendererReq = createRequire(rendererPkgPath);

  const candidates = [
    `@remotion/compositor-${process.platform}-${process.arch}-gnu/package.json`,
    `@remotion/compositor-${process.platform}-${process.arch}-musl/package.json`,
    `@remotion/compositor-${process.platform}-${process.arch}/package.json`,
  ];

  let compositorDir = null;
  for (const cand of candidates) {
    try {
      const pkg = rendererReq.resolve(cand);
      compositorDir = path.dirname(pkg);
      break;
    } catch {
      // Try next candidate
    }
  }

  if (!compositorDir) {
    throw new Error(
      `Could not resolve @remotion/compositor-* package for ${process.platform}-${process.arch}`,
    );
  }

  const ffprobeName = process.platform === "win32" ? "ffprobe.exe" : "ffprobe";
  const ffprobeBin = path.join(compositorDir, ffprobeName);
  if (!fs.existsSync(ffprobeBin)) {
    throw new Error(`Compositor ffprobe binary missing at ${ffprobeBin}`);
  }

  cachedFfprobe = { ffprobeBin, compositorDir };
  return cachedFfprobe;
}

function parseFfprobeJson(stdout) {
  const data = JSON.parse(stdout);
  const stream = (data.streams || []).find((s) => s.codec_type === "audio") || data.streams?.[0] || {};
  const durationSec = Number.parseFloat(data.format?.duration ?? stream.duration ?? "0");
  return {
    durationSec,
    durationMs: Math.round(durationSec * 1000),
    codecName: stream.codec_name ?? null,
    sampleRate: stream.sample_rate ? Number(stream.sample_rate) : null,
    channels: stream.channels ? Number(stream.channels) : null,
    bitRate: Number(stream.bit_rate || data.format?.bit_rate || 0) || null,
  };
}

export function probeAudio(audioPath) {
  const absPath = path.isAbsolute(audioPath) ? audioPath : path.resolve(ROOT_DIR, audioPath);
  const { ffprobeBin, compositorDir } = resolveCompositorFfprobe();
  const ldLib = process.env.LD_LIBRARY_PATH
    ? `${compositorDir}:${process.env.LD_LIBRARY_PATH}`
    : compositorDir;

  const stdout = execFileSync(
    ffprobeBin,
    [
      "-v",
      "error",
      "-show_entries",
      "format=duration,bit_rate:stream=codec_type,codec_name,sample_rate,channels,bit_rate",
      "-of",
      "json",
      absPath,
    ],
    {
      cwd: ROOT_DIR,
      env: { ...process.env, LD_LIBRARY_PATH: ldLib },
      encoding: "utf8",
    },
  );
  return parseFfprobeJson(stdout);
}

export function runRemotionFfprobe(audioPath) {
  const relOrAbs = path.isAbsolute(audioPath)
    ? path.relative(ROOT_DIR, audioPath)
    : audioPath;
  const stdout = execFileSync(
    "pnpm",
    [
      "exec",
      "remotion",
      "ffprobe",
      "-v",
      "error",
      "-show_entries",
      "format=duration,bit_rate:stream=codec_type,codec_name,sample_rate,channels,bit_rate",
      "-of",
      "json",
      relOrAbs,
    ],
    {
      cwd: ROOT_DIR,
      encoding: "utf8",
    },
  );
  return parseFfprobeJson(stdout);
}
