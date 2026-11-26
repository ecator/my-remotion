import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { ROOT_DIR, SHARED_UI_COMPONENTS } from "../helpers/episodes.mjs";
import { parseSourceFile } from "../helpers/static-scan.mjs";
import { loadTsModule } from "../helpers/ts-loader.mjs";

const COMP_DIR = path.join(ROOT_DIR, SHARED_UI_COMPONENTS.dir);

test("[F1][EP01] tokens.ts exports exact FONT_SANS, FONT_MONO, HF_COLORS, and authoritative HF_LAYOUT", async () => {
  const tokensPath = path.join(COMP_DIR, "tokens.ts");
  assert.equal(fs.existsSync(tokensPath), true, "tokens.ts must exist");
  const mod = await loadTsModule(tokensPath);

  assert.equal(typeof mod.FONT_SANS, "string");
  assert.match(mod.FONT_SANS, /PingFang SC/);
  assert.match(mod.FONT_SANS, /Microsoft YaHei/);

  assert.equal(typeof mod.FONT_MONO, "string");
  assert.match(mod.FONT_MONO, /Cascadia Code/);
  assert.match(mod.FONT_MONO, /Consolas/);

  assert.ok(mod.HF_COLORS && typeof mod.HF_COLORS === "object");
  assert.equal(mod.HF_COLORS.bgCanvas, "#07090E");
  assert.equal(mod.HF_COLORS.bgSurface, "#0F141F");
  assert.equal(mod.HF_COLORS.bgElevated, "#161D2E");
  assert.equal(mod.HF_COLORS.brandPrimary, "#10B981");
  assert.equal(mod.HF_COLORS.brandNeon, "#34D399");
  assert.equal(mod.HF_COLORS.accentCyan, "#06B6D4");
  assert.equal(mod.HF_COLORS.accentSky, "#38BDF8");
  assert.equal(mod.HF_COLORS.accentAmber, "#F59E0B");
  assert.equal(mod.HF_COLORS.accentViolet, "#8B5CF6");
  assert.equal(mod.HF_COLORS.accentDanger, "#F43F5E");

  assert.deepEqual(mod.HF_LAYOUT, {
    stageTop: 88,
    stageLeft: 72,
    stageRight: 72,
    stageBottom: 114,
    progressBarHeight: 34,
    captionBottomFromCanvas: 44,
  });
});

test("[F1][EP01] Existing 4 shared UI components export React functions and preserve EP01 compatibility", async () => {
  const expected = [
    ["HfSeriesShell.tsx", "HfSeriesShell"],
    ["HfCaptionBar.tsx", "HfCaptionBar"],
    ["HfCodeWindow.tsx", "HfCodeWindow"],
    ["HfTerminalWindow.tsx", "HfTerminalWindow"],
  ];

  for (const [file, exportName] of expected) {
    const filePath = path.join(COMP_DIR, file);
    assert.equal(fs.existsSync(filePath), true, `${file} must exist`);
    const mod = await loadTsModule(filePath);
    assert.equal(
      typeof mod[exportName],
      "function",
      `${file} must export component '${exportName}'`,
    );
  }
});

test("[F1] HfSeriesShell dynamically applies brandColor and accentColor across HUD badges and progress bar", async () => {
  const shellPath = path.join(COMP_DIR, "HfSeriesShell.tsx");
  const { sf, content } = parseSourceFile(shellPath);
  const mod = await loadTsModule(shellPath);
  assert.equal(typeof mod.HfSeriesShell, "function");

  assert.match(content, /brandColor\s*\??\s*:\s*string/);
  assert.match(content, /accentColor\s*\??\s*:\s*string/);

  // Count runtime identifier references to brandColor and accentColor inside the component body
  let brandRefs = 0;
  let accentRefs = 0;
  function countIdents(node) {
    if (ts.isIdentifier(node)) {
      if (node.text === "brandColor") brandRefs++;
      if (node.text === "accentColor") accentRefs++;
    }
    ts.forEachChild(node, countIdents);
  }
  countIdents(sf);

  // Beyond interface prop + parameter destructuring (~3 occurrences), upgraded shell uses them across HUD & progress bar
  assert.ok(
    brandRefs >= 6,
    `HfSeriesShell must actively apply brandColor in HUD badge & progress bar (found only ${brandRefs} identifier refs)`,
  );
  assert.ok(
    accentRefs >= 4,
    `HfSeriesShell must actively apply accentColor in HUD module tag & ambient accents (found only ${accentRefs} identifier refs)`,
  );
});

test("[F1] HfCaptionBar expands CODE_TERM_REGEX for EP02-EP12 vocabulary and adds extraCodeTerms + accentColor", async () => {
  const captionBarPath = path.join(COMP_DIR, "HfCaptionBar.tsx");
  const { sf, content } = parseSourceFile(captionBarPath);
  const mod = await loadTsModule(captionBarPath);
  assert.equal(typeof mod.HfCaptionBar, "function");

  assert.match(
    content,
    /extraCodeTerms\s*\?:\s*RegExp/,
    "HfCaptionBarProps must declare optional extraCodeTerms?: RegExp",
  );
  assert.match(
    content,
    /accentColor\s*\?:\s*string/,
    "HfCaptionBarProps must declare optional accentColor?: string",
  );

  // Extract CODE_TERM_REGEX literal or RegExp from AST
  let regexLiteralText = null;
  function findRegex(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "CODE_TERM_REGEX" &&
      node.initializer
    ) {
      regexLiteralText = node.initializer.getText(sf);
    }
    ts.forEachChild(node, findRegex);
  }
  findRegex(sf);
  assert.ok(regexLiteralText, "HfCaptionBar.tsx must define CODE_TERM_REGEX");

  const codeRegex = new Function(`return (${regexLiteralText});`)();
  assert.ok(codeRegex instanceof RegExp, "CODE_TERM_REGEX must evaluate to RegExp");

  const ep02To12Terms = [
    "data-vfx-chain",
    "data-composition-variables",
    "data-fx-carve",
    "window.__hyperframes",
    "@hyperframes/sdk",
    "--vfx-wave-warp",
    "Three.js",
    "GSAP",
    "WebMCP",
    "document.modelContext",
    "OverrideSet",
    "ORIGIN_APPLY_PATCHES",
    "Kokoro",
    "Framey",
    "Cloud Run",
    "Lambda",
    "SSIM",
    "Figma",
    "Studio",
    "Browser Editor",
  ];

  const matched = ep02To12Terms.filter((t) => {
    codeRegex.lastIndex = 0;
    return codeRegex.test(t);
  });

  assert.ok(
    matched.length >= 14,
    `Expanded CODE_TERM_REGEX must recognize >= 14 EP02-EP12 terms (matched ${matched.length}/${ep02To12Terms.length}: ${matched.join(", ")})`,
  );
});

test('[F1] HfTerminalWindow supports optional headerBadge prop defaulting to "bash · node ≥ 22"', async () => {
  const termPath = path.join(COMP_DIR, "HfTerminalWindow.tsx");
  const { content } = parseSourceFile(termPath);
  const mod = await loadTsModule(termPath);
  assert.equal(typeof mod.HfTerminalWindow, "function");

  assert.match(
    content,
    /headerBadge\s*\?:\s*string/,
    "HfTerminalWindowProps must declare optional headerBadge?: string",
  );
  assert.match(
    content,
    /headerBadge\s*=\s*["'`]bash · node ≥ 22["'`]/,
    'HfTerminalWindow must default headerBadge to "bash · node ≥ 22"',
  );
  assert.match(
    content,
    /\{headerBadge\}/,
    "HfTerminalWindow must render {headerBadge} in header",
  );
});

for (const primitiveFile of SHARED_UI_COMPONENTS.newPrimitives) {
  const compName = primitiveFile.replace(/\.tsx$/, "");
  test(`[F1] Style-guide §6 primitive ${compName} exists in src/components/hyperframes/${primitiveFile} and exports React component`, async () => {
    const filePath = path.join(COMP_DIR, primitiveFile);
    assert.equal(
      fs.existsSync(filePath),
      true,
      `Missing style-guide §6 primitive: src/components/hyperframes/${primitiveFile}`,
    );
    const mod = await loadTsModule(filePath);
    assert.equal(
      typeof mod[compName],
      "function",
      `${primitiveFile} must export React component '${compName}'`,
    );
    const { content } = parseSourceFile(filePath);
    assert.match(
      content,
      /useCurrentFrame|useVideoConfig/,
      `${primitiveFile} must use Remotion frame/config hooks rather than static/CSS motion`,
    );
  });
}
