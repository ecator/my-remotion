import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT_DIR } from "../helpers/episodes.mjs";
import { inspectPng } from "../helpers/png-inspect.mjs";
import { extractRootCompositions } from "../helpers/ts-loader.mjs";

const STILL_SCENARIOS = [
  {
    tag: "[T4][EP01]",
    id: "HfEp01IntroAndQuickstart",
    frame: 60,
    label: "Hero title card",
  },
  {
    tag: "[T4][EP01]",
    id: "HfEp01IntroAndQuickstart",
    frame: 2200,
    label: "Scene 02 + caption bar",
  },
  {
    tag: "[T4][HelloWorld]",
    id: "HelloWorld",
    frame: 90,
    label: "Molecular emblem + Haibara quote",
  },
  {
    tag: "[T4][F3][EP02]",
    id: "HfEp02StudioDesktopApp",
    frame: 1800,
    label: "EP02 stage + caption bar",
  },
  {
    tag: "[T4][F4][EP03]",
    id: "HfEp03BrowserEditorNle",
    frame: 2200,
    label: "EP03 stage + timeline/caption",
  },
  {
    tag: "[T4][F6][EP05]",
    id: "HfEp05MediaDataAndDevFlows",
    frame: 2200,
    label: "EP05 data/workflow stage",
  },
  {
    tag: "[T4][F7][EP06]",
    id: "HfEp06PromptAnatomyAndMotion",
    frame: 2200,
    label: "EP06 prompt/motion stage",
  },
  {
    tag: "[T4][F9][EP08]",
    id: "HfEp08ColorVfxAnd3d",
    frame: 2200,
    label: "EP08 color/VFX stage",
  },
  {
    tag: "[T4][F11][EP10]",
    id: "HfEp10VariablesAndBatchTemplates",
    frame: 2200,
    label: "EP10 variables/batch stage",
  },
  {
    tag: "[T4][F13][EP12]",
    id: "HfEp12SdkPlayerAndCloudDeploy",
    frame: 2200,
    label: "EP12 SDK/cloud stage",
  },
];

function renderStillPng(compId, frame, relOutPath) {
  execFileSync(
    "pnpm",
    [
      "exec",
      "remotion",
      "still",
      compId,
      relOutPath,
      "--image-format=png",
      "--overwrite",
      `--frame=${frame}`,
    ],
    {
      cwd: ROOT_DIR,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
}

for (const sc of STILL_SCENARIOS) {
  test(`${sc.tag} ${sc.id} frame ${sc.frame} (${sc.label}) renders valid 1920x1080 PNG, non-blank entropy, and identical repeat SHA-256`, async () => {
    const { compositions } = await extractRootCompositions();
    const comp = compositions.find((c) => c.id === sc.id);
    assert.ok(comp, `Composition '${sc.id}' is not registered in src/Root.tsx yet`);

    const targetFrame = Math.min(sc.frame, Math.max(0, comp.durationInFrames - 10));
    const runId = `${sc.id}_f${targetFrame}_${process.pid}_${crypto.randomBytes(4).toString("hex")}`;
    const e2eTmpBase = path.join(ROOT_DIR, "scratch", "e2e_tmp");
    const runDir = path.join(e2eTmpBase, runId);
    fs.mkdirSync(runDir, { recursive: true });

    try {
      const relA = path.relative(ROOT_DIR, path.join(runDir, "render_a.png"));
      const relB = path.relative(ROOT_DIR, path.join(runDir, "render_b.png"));

      renderStillPng(sc.id, targetFrame, relA);
      renderStillPng(sc.id, targetFrame, relB);

      const absA = path.join(ROOT_DIR, relA);
      const absB = path.join(ROOT_DIR, relB);
      assert.equal(fs.existsSync(absA), true, `Missing still render A: ${relA}`);
      assert.equal(fs.existsSync(absB), true, `Missing still render B: ${relB}`);

      const infoA = inspectPng(absA);
      const infoB = inspectPng(absB);

      assert.equal(infoA.width, 1920, `${sc.id} PNG width must be 1920`);
      assert.equal(infoA.height, 1080, `${sc.id} PNG height must be 1080`);
      assert.equal(infoA.bitDepth, 8, `${sc.id} PNG bitDepth must be 8`);

      assert.ok(
        infoA.stdDevLum > 8,
        `${sc.id} frame ${targetFrame} appears blank/low-contrast (stdDevLum=${infoA.stdDevLum.toFixed(2)} <= 8)`,
      );
      assert.ok(
        infoA.uniqueColorBuckets >= 12,
        `${sc.id} frame ${targetFrame} lacks visual richness (uniqueColorBuckets=${infoA.uniqueColorBuckets} < 12)`,
      );
      assert.ok(
        infoA.nonBgRatio > 0.03,
        `${sc.id} frame ${targetFrame} foreground ratio too low (nonBgRatio=${infoA.nonBgRatio.toFixed(4)} <= 0.03)`,
      );

      assert.equal(
        infoA.pixelSha256,
        infoB.pixelSha256,
        `${sc.id} frame ${targetFrame} non-deterministic render: SHA-256 A (${infoA.pixelSha256}) != B (${infoB.pixelSha256})`,
      );
    } finally {
      fs.rmSync(runDir, { recursive: true, force: true });
      try {
        if (fs.existsSync(e2eTmpBase) && fs.readdirSync(e2eTmpBase).length === 0) {
          fs.rmdirSync(e2eTmpBase);
        }
      } catch {
        // Ignore non-empty concurrent directory
      }
    }
  });
}
