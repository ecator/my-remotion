import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import {
  EPISODES,
  HELLO_WORLD_META,
  NEW_EPISODES,
  ROOT_DIR,
  SERIES_DEFAULTS,
  SHARED_UI_COMPONENTS,
  episodePaths,
  normalizeTitle,
} from "../helpers/episodes.mjs";
import { parseScriptNarration } from "../helpers/doc-inspect.mjs";
import {
  extractImports,
  listSourceFilesRecursive,
  parseSourceFile,
} from "../helpers/static-scan.mjs";
import { extractRootCompositions, loadTsModule } from "../helpers/ts-loader.mjs";

let cachedCompositionsMap = null;

function getCliCompositions() {
  if (cachedCompositionsMap) return cachedCompositionsMap;
  const stdout = execFileSync("pnpm", ["exec", "remotion", "compositions"], {
    cwd: ROOT_DIR,
    encoding: "utf8",
  });
  const map = new Map();
  const lineRe = /^\s*([A-Z][A-Za-z0-9]+)\s+(\d+)\s+(\d+)x(\d+)\s+(\d+)\b/gm;
  let m;
  while ((m = lineRe.exec(stdout)) !== null) {
    map.set(m[1], {
      id: m[1],
      fps: Number(m[2]),
      width: Number(m[3]),
      height: Number(m[4]),
      durationInFrames: Number(m[5]),
    });
  }
  cachedCompositionsMap = map;
  return map;
}

test("[T3][EP01][HelloWorld] pnpm lint (eslint src && tsc) passes cleanly with exit code 0", () => {
  const output = execFileSync("pnpm", ["lint"], {
    cwd: ROOT_DIR,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  assert.equal(typeof output, "string");
});

test("[T3][EP01] pnpm exec remotion compositions registers HfEp01IntroAndQuickstart at 1920x1080, 30fps, exact EP01_TOTAL_FRAMES", async () => {
  const cliMap = getCliCompositions();
  const ep01 = EPISODES[0];
  const entry = cliMap.get(ep01.id);
  assert.ok(entry, `remotion compositions missing ${ep01.id}`);

  const capMod = await loadTsModule(episodePaths(ep01).captionsTs);
  assert.equal(entry.width, 1920);
  assert.equal(entry.height, 1080);
  assert.equal(entry.fps, 30);
  assert.equal(entry.durationInFrames, capMod.EP01_TOTAL_FRAMES);
});

test("[T3][HelloWorld] pnpm exec remotion compositions registers HelloWorld at 1920x1080, 30fps, 240 frames", () => {
  const cliMap = getCliCompositions();
  const entry = cliMap.get(HELLO_WORLD_META.id);
  assert.ok(entry, "remotion compositions missing HelloWorld");
  assert.equal(entry.width, HELLO_WORLD_META.width);
  assert.equal(entry.height, HELLO_WORLD_META.height);
  assert.equal(entry.fps, HELLO_WORLD_META.fps);
  assert.equal(entry.durationInFrames, HELLO_WORLD_META.durationInFrames);
});

test("[T3][F14] pnpm exec remotion compositions lists all 13 expected compositions matching Root.tsx & captions.ts", async () => {
  const cliMap = getCliCompositions();
  const { compositions } = await extractRootCompositions();

  assert.equal(cliMap.size, 13, `Expected 13 CLI compositions, got ${cliMap.size}`);
  assert.equal(compositions.length, 13, `Expected 13 Root.tsx compositions, got ${compositions.length}`);

  for (const ep of EPISODES) {
    const cliEntry = cliMap.get(ep.id);
    assert.ok(cliEntry, `remotion compositions missing ${ep.id}`);
    const capMod = await loadTsModule(episodePaths(ep).captionsTs);
    assert.equal(cliEntry.width, 1920);
    assert.equal(cliEntry.height, 1080);
    assert.equal(cliEntry.fps, 30);
    assert.equal(cliEntry.durationInFrames, capMod[ep.totalFramesName]);
  }
  assert.ok(cliMap.has(HELLO_WORLD_META.id));
});

test("[T3][F1][EP01] EP01 integrates shared tokens.ts (HF_COLORS/FONT_SANS/FONT_MONO), HfSeriesShell, and BGM ducking envelope", () => {
  const ep01 = EPISODES[0];
  const paths = episodePaths(ep01);
  const idx = parseSourceFile(paths.indexTsx);
  const idxImports = extractImports(idx.sf).map((i) => i.specifier);

  assert.ok(idxImports.some((s) => s.includes("components/hyperframes/HfSeriesShell")));
  assert.ok(idxImports.some((s) => s.includes("components/hyperframes/HfCaptionBar")));
  assert.ok(idxImports.some((s) => s.includes("components/hyperframes/tokens")));
  assert.match(idx.content, /HF_COLORS/);
  assert.match(idx.content, /Math\.min\(\s*0\.45\s*,\s*bgmVolume\s*\*\s*2\.1\s*\)/);

  const scene01 = parseSourceFile(path.join(paths.srcDir, "Scene01IntroParadigm.tsx"));
  assert.match(scene01.content, /FONT_SANS/);
  assert.match(scene01.content, /FONT_MONO/);
  assert.match(scene01.content, /HF_COLORS/);
});

test("[T3][F1][F3-F13] All EP02-EP12 episodes integrate shared tokens.ts, HfSeriesShell, and HfCaptionBar", () => {
  for (const ep of NEW_EPISODES) {
    const paths = episodePaths(ep);
    assert.equal(fs.existsSync(paths.indexTsx), true, `Missing ${paths.indexTsx}`);
    const files = listSourceFilesRecursive(paths.srcDir);
    const allImports = files.flatMap((f) => extractImports(parseSourceFile(f).sf).map((i) => i.specifier));

    assert.ok(
      allImports.some((s) => s.includes("components/hyperframes/tokens")),
      `${ep.id} must import shared tokens.ts`,
    );
    assert.ok(
      allImports.some((s) => s.includes("components/hyperframes/HfSeriesShell")),
      `${ep.id} must import shared HfSeriesShell`,
    );
    assert.ok(
      allImports.some((s) => s.includes("components/hyperframes/HfCaptionBar")),
      `${ep.id} must import shared HfCaptionBar`,
    );
  }
});

test("[T3][F1][F3-F13] Shared HfCaptionBar CODE_TERM_REGEX matches technical tokens across EP02-EP12 captions", async () => {
  const capBarPath = path.join(ROOT_DIR, SHARED_UI_COMPONENTS.dir, "HfCaptionBar.tsx");
  const { sf } = parseSourceFile(capBarPath);
  let regexText = null;
  function findDecl(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "CODE_TERM_REGEX" &&
      node.initializer
    ) {
      regexText = node.initializer.getText(sf);
    }
    ts.forEachChild(node, findDecl);
  }
  findDecl(sf);
  assert.ok(regexText, "CODE_TERM_REGEX missing in HfCaptionBar.tsx");
  const codeRegex = new Function(`return (${regexText});`)();

  for (const ep of NEW_EPISODES) {
    const capPath = episodePaths(ep).captionsTs;
    assert.equal(fs.existsSync(capPath), true, `Missing ${capPath}`);
    const capMod = await loadTsModule(capPath);
    const meta = capMod[ep.sceneMetaName];
    let matchCount = 0;
    for (const key of Object.keys(meta)) {
      const arr = capMod[`${ep.prefixLower}_${key}_captions`] || [];
      for (const tok of arr) {
        codeRegex.lastIndex = 0;
        if (codeRegex.test(tok.text)) matchCount++;
      }
    }
    assert.ok(
      matchCount >= 3,
      `${ep.id} captions only matched ${matchCount} CODE_TERM_REGEX tokens (expected >= 3)`,
    );
  }
});

test("[T3][F1][F7][F9][F12] Style-guide §6 primitives (HfChapterIntro, HfPromptAnatomy, HfSplitCompare, HfTimelineMock) are adopted across EP02-EP12", () => {
  const importedPrimitives = new Set();

  for (const ep of NEW_EPISODES) {
    const paths = episodePaths(ep);
    assert.equal(fs.existsSync(paths.srcDir), true, `Missing ${paths.srcDir}`);
    const files = listSourceFilesRecursive(paths.srcDir);
    for (const f of files) {
      for (const imp of extractImports(parseSourceFile(f).sf)) {
        for (const primFile of SHARED_UI_COMPONENTS.newPrimitives) {
          const primName = primFile.replace(/\.tsx$/, "");
          if (imp.specifier.includes(primName)) {
            importedPrimitives.add(primName);
          }
        }
      }
    }
  }

  for (const primFile of SHARED_UI_COMPONENTS.newPrimitives) {
    const primName = primFile.replace(/\.tsx$/, "");
    assert.ok(
      importedPrimitives.has(primName),
      `New shared primitive ${primName} is not used by any EP02-EP12 episode`,
    );
  }
});

test("[T3][F3-F14] Sequential 12-episode episodeCode and episodeTitle parity across Root.tsx, index.tsx, and plan", async () => {
  const { compositions } = await extractRootCompositions();
  const byId = new Map(compositions.map((c) => [c.id, c]));

  for (const ep of EPISODES) {
    const rootComp = byId.get(ep.id);
    assert.ok(rootComp, `Missing ${ep.id} in src/Root.tsx`);
    assert.equal(rootComp.defaultProps.episodeCode, ep.episodeCode);
    assert.equal(
      normalizeTitle(rootComp.defaultProps.episodeTitle),
      normalizeTitle(ep.episodeTitle),
    );

    if (!ep.isBaseline) {
      const idxMod = await loadTsModule(episodePaths(ep).indexTsx);
      const defaults = idxMod[ep.defaultPropsName];
      assert.equal(defaults.episodeCode, ep.episodeCode);
      assert.equal(
        normalizeTitle(defaults.episodeTitle),
        normalizeTitle(ep.episodeTitle),
      );
    }
  }
});

test("[T3][F3-F13] Every episode in the 12-part series stays within 4-6 scenes and 5400-10500 frame budget (~3-5.8 min)", async () => {
  for (const ep of EPISODES) {
    const capPath = episodePaths(ep).captionsTs;
    assert.equal(fs.existsSync(capPath), true, `Missing ${capPath}`);
    const capMod = await loadTsModule(capPath);
    const total = capMod[ep.totalFramesName];
    const sceneCount = Object.keys(capMod[ep.sceneMetaName]).length;

    assert.ok(
      sceneCount >= ep.minScenes && sceneCount <= ep.maxScenes,
      `${ep.id} scene count ${sceneCount} outside [${ep.minScenes}, ${ep.maxScenes}]`,
    );
    assert.ok(
      total >= 5400 && total <= 10500,
      `${ep.id} total frames ${total} (${(total / SERIES_DEFAULTS.fps).toFixed(1)}s) outside [5400, 10500]`,
    );
  }
});

test("[T3][F2][F3-F13] docs/<VideoName>/script.md scene count matches SCENE_META keys across all 12 series episodes", async () => {
  for (const ep of EPISODES) {
    const paths = episodePaths(ep);
    assert.equal(fs.existsSync(paths.scriptMd), true, `Missing ${paths.scriptMd}`);
    assert.equal(fs.existsSync(paths.captionsTs), true, `Missing ${paths.captionsTs}`);
    const narration = parseScriptNarration(paths.scriptMd);
    const capMod = await loadTsModule(paths.captionsTs);
    const metaKeys = Object.keys(capMod[ep.sceneMetaName]);
    assert.equal(
      narration.scenes.length,
      metaKeys.length,
      `${ep.id}: script.md scene count (${narration.scenes.length}) != ${ep.sceneMetaName} count (${metaKeys.length})`,
    );
  }
});
