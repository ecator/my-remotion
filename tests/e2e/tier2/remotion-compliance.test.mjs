import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import {
  EPISODES,
  HELLO_WORLD_META,
  NEW_EPISODES,
  ROOT_DIR,
  SHARED_UI_COMPONENTS,
  episodePaths,
} from "../helpers/episodes.mjs";
import {
  listSourceFilesRecursive,
  parseSourceFile,
  scanCompliance,
  scanStatefulRegexTest,
} from "../helpers/static-scan.mjs";
import { extractRootCompositions, loadTsModule } from "../helpers/ts-loader.mjs";

const COMP_DIR = path.join(ROOT_DIR, SHARED_UI_COMPONENTS.dir);
const PASCAL_CASE_ID_RE = /^[A-Z][A-Za-z0-9]+$/;

function assertCleanScan(scan, { checkHardcoded30 = true } = {}) {
  assert.deepEqual(scan.mathRandomCalls, [], `${scan.relPath}: forbidden Math.random()`);
  assert.deepEqual(scan.timerCalls, [], `${scan.relPath}: forbidden timer/rAF`);
  assert.deepEqual(scan.fetchCalls, [], `${scan.relPath}: forbidden runtime fetch()`);
  assert.deepEqual(scan.cssAnimations, [], `${scan.relPath}: forbidden CSS transition/animation`);
  assert.deepEqual(scan.docsImports, [], `${scan.relPath}: forbidden docs/ import`);
  assert.deepEqual(scan.docsStaticFiles, [], `${scan.relPath}: forbidden staticFile("docs/...")`);
  if (checkHardcoded30) {
    assert.deepEqual(
      scan.hardcoded30,
      [],
      `${scan.relPath}: hardcoded / 30 or * 30 found (use useVideoConfig().fps)`,
    );
  }
  for (const sfCall of scan.staticFileCalls) {
    if (sfCall.isLiteral) {
      const target = path.join(ROOT_DIR, "public", sfCall.path);
      assert.equal(
        fs.existsSync(target),
        true,
        `${scan.relPath}:${sfCall.line}: staticFile("${sfCall.path}") missing at ${target}`,
      );
    }
  }
}

function assertEpisodeSchemaRejectsBadInputs(schema, validDefaults, label) {
  assert.equal(schema.safeParse(validDefaults).success, true, `${label}: defaults must parse`);
  assert.equal(
    schema.safeParse({ ...validDefaults, brandColor: "not-a-color" }).success,
    false,
    `${label}: must reject invalid brandColor`,
  );
  assert.equal(
    schema.safeParse({ ...validDefaults, accentColor: 12345 }).success,
    false,
    `${label}: must reject non-string accentColor`,
  );
  assert.equal(
    schema.safeParse({ ...validDefaults, bgmVolume: -0.05 }).success,
    false,
    `${label}: must reject bgmVolume < 0`,
  );
  assert.equal(
    schema.safeParse({ ...validDefaults, bgmVolume: 1.05 }).success,
    false,
    `${label}: must reject bgmVolume > 1`,
  );
  assert.equal(
    schema.safeParse({ ...validDefaults, showSubtitles: "yes" }).success,
    false,
    `${label}: must reject non-boolean showSubtitles`,
  );
  const { episodeCode: _omit, ...missingCode } = validDefaults;
  assert.equal(
    schema.safeParse(missingCode).success,
    false,
    `${label}: must reject missing episodeCode`,
  );
}

test("[F1][EP01] Existing 5 shared primitives pass Remotion AST determinism and CSS-animation-free checks", () => {
  for (const file of SHARED_UI_COMPONENTS.existing) {
    const filePath = path.join(COMP_DIR, file);
    assert.equal(fs.existsSync(filePath), true, `Missing ${file}`);
    const scan = scanCompliance(filePath);
    assertCleanScan(scan);
  }
});

test("[F1] All 9 src/components/hyperframes/* primitives exist and all shared module files pass AST compliance", () => {
  for (const file of SHARED_UI_COMPONENTS.all()) {
    const filePath = path.join(COMP_DIR, file);
    assert.equal(fs.existsSync(filePath), true, `Missing shared primitive ${file}`);
  }
  const allSharedFiles = listSourceFilesRecursive(COMP_DIR);
  assert.ok(allSharedFiles.length >= 9);
  for (const filePath of allSharedFiles) {
    const scan = scanCompliance(filePath);
    assertCleanScan(scan);
  }
});

test("[F1] HfSeriesShell uses useCurrentFrame + useVideoConfig without Date.now and preserves EP01 defaults", () => {
  const shellPath = path.join(COMP_DIR, "HfSeriesShell.tsx");
  const { content } = parseSourceFile(shellPath);
  assert.match(content, /\buseCurrentFrame\s*\(/);
  assert.match(content, /\buseVideoConfig\s*\(/);
  assert.equal(/\bDate\.now\s*\(/.test(content), false, "HfSeriesShell must not read Date.now()");
  assert.match(content, /brandColor\s*=\s*HF_COLORS\.brandPrimary/);
  assert.match(content, /accentColor\s*=\s*HF_COLORS\.accentCyan/);
});

test("[F1] HfCaptionBar CODE_TERM_REGEX and extraCodeTerms have zero stateful /g or /y lastIndex alternation bugs", () => {
  const capBarPath = path.join(COMP_DIR, "HfCaptionBar.tsx");
  const { sf } = parseSourceFile(capBarPath);
  const { statefulTestIssues } = scanStatefulRegexTest(capBarPath);
  assert.deepEqual(
    statefulTestIssues,
    [],
    `HfCaptionBar.tsx must not use stateful /g or /y RegExp with .test(): ${JSON.stringify(statefulTestIssues)}`,
  );

  // Also test runtime evaluation of CODE_TERM_REGEX across consecutive matching inputs
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
  assert.ok(regexText, "CODE_TERM_REGEX must be declared in HfCaptionBar.tsx");
  const regex = new Function(`return (${regexText});`)();
  assert.equal(regex.global, false, "CODE_TERM_REGEX must not have /g flag");
  assert.equal(regex.sticky, false, "CODE_TERM_REGEX must not have /y flag");
  for (let i = 0; i < 4; i++) {
    assert.equal(regex.test("data-start"), true, `Consecutive .test() #${i} failed`);
  }
});

test("[F1] New §6 primitives (HfChapterIntro, HfPromptAnatomy, HfSplitCompare, HfTimelineMock) use frame-driven hooks without side effects", () => {
  for (const file of SHARED_UI_COMPONENTS.newPrimitives) {
    const filePath = path.join(COMP_DIR, file);
    assert.equal(fs.existsSync(filePath), true, `Missing ${file}`);
    const { content } = parseSourceFile(filePath);
    assert.match(content, /\buseCurrentFrame\s*\(/, `${file} must call useCurrentFrame()`);
    assert.match(content, /\buseVideoConfig\s*\(/, `${file} must call useVideoConfig()`);
    assert.equal(/\buseEffect\s*\(/.test(content), false, `${file} must not use useEffect()`);
  }
});

test("[F1] tokens.ts loads scoped NotoSansSC and JetBrainsMono weights with CJK fallbacks", () => {
  const { content } = parseSourceFile(path.join(COMP_DIR, "tokens.ts"));
  assert.match(content, /@remotion\/google-fonts\/NotoSansSC/);
  assert.match(content, /@remotion\/google-fonts\/JetBrainsMono/);
  assert.match(content, /subsets:\s*\[\s*["']latin["']\s*\]/);
  assert.match(content, /PingFang SC/);
  assert.match(content, /Microsoft YaHei/);
});

test("[EP01] EP01 complies with Remotion AST rules (Scene01 line 57 exempted) and hfEp01Schema rejects invalid bounds", async () => {
  const ep01 = EPISODES[0];
  const paths = episodePaths(ep01);
  const files = listSourceFilesRecursive(paths.srcDir);
  assert.ok(files.length >= 7);

  for (const f of files) {
    const isS01 = path.basename(f) === "Scene01IntroParadigm.tsx";
    const scan = scanCompliance(f, {
      allowHardcoded30Lines: isS01 ? new Set([57]) : new Set(),
    });
    assertCleanScan(scan);
  }

  const { compositions } = await extractRootCompositions();
  const comp = compositions.find((c) => c.id === ep01.id);
  assert.ok(comp);
  assertEpisodeSchemaRejectsBadInputs(comp.schema, comp.defaultProps, "EP01");
});

test("[HelloWorld] HelloWorld complies with Remotion AST rules and helloWorldSchema rejects invalid colors/types", async () => {
  const hwFiles = listSourceFilesRecursive(path.join(ROOT_DIR, HELLO_WORLD_META.srcDir));
  assert.ok(hwFiles.length >= 4);
  for (const f of hwFiles) {
    const scan = scanCompliance(f);
    assertCleanScan(scan);
  }

  const { compositions } = await extractRootCompositions();
  const hw = compositions.find((c) => c.id === HELLO_WORLD_META.id);
  assert.ok(hw);
  assert.equal(hw.schema.safeParse(hw.defaultProps).success, true);
  assert.equal(hw.schema.safeParse({ ...hw.defaultProps, titleColor: "bad-hex" }).success, false);
  assert.equal(hw.schema.safeParse({ ...hw.defaultProps, logoColor1: 999 }).success, false);
  assert.equal(hw.schema.safeParse({ ...hw.defaultProps, logoColor2: "none" }).success, false);
  assert.equal(hw.schema.safeParse({ ...hw.defaultProps, titleText: 42 }).success, false);
});

test('[F14][EP01] src/Root.tsx contains zero docs/ imports or staticFile("docs/...") while allowing URL comments', () => {
  const rootPath = path.join(ROOT_DIR, "src", "Root.tsx");
  const scan = scanCompliance(rootPath);
  assertCleanScan(scan);
});

test("[F14] src/Root.tsx imports zero sub-scenes or shared UI components and registers only top-level compositions", () => {
  const rootPath = path.join(ROOT_DIR, "src", "Root.tsx");
  const scan = scanCompliance(rootPath);
  for (const imp of scan.imports) {
    assert.equal(
      /components\/hyperframes/.test(imp.specifier),
      false,
      `src/Root.tsx must not import/register shared UI components (${imp.specifier})`,
    );
    assert.equal(
      /\/Scene0\d/.test(imp.specifier),
      false,
      `src/Root.tsx must not import/register sub-scene components (${imp.specifier})`,
    );
  }
});

test("[F14] Every staticFile(...) literal across src/Root.tsx and all src/videos/* resolves to an existing asset under public/", () => {
  const targets = [
    path.join(ROOT_DIR, "src", "Root.tsx"),
    ...listSourceFilesRecursive(path.join(ROOT_DIR, "src", "videos")),
  ];
  for (const f of targets) {
    const scan = scanCompliance(f, { allowAllHardcoded30: true });
    for (const call of scan.staticFileCalls) {
      if (call.isLiteral) {
        const abs = path.join(ROOT_DIR, "public", call.path);
        assert.equal(fs.existsSync(abs), true, `${scan.relPath}:${call.line} missing staticFile '${call.path}'`);
      }
    }
  }
});

test("[F14] Every composition id in src/Root.tsx obeys PascalCase and covers all 12 series episodes", async () => {
  const { compositions } = await extractRootCompositions();
  assert.equal(compositions.length, 13, `Expected 13 compositions, found ${compositions.length}`);
  for (const c of compositions) {
    assert.match(c.id, PASCAL_CASE_ID_RE);
  }
});

test("[F14] All 12 series Zod schemas bound in src/Root.tsx reject out-of-range bgmVolume, bad colors, and invalid types", async () => {
  const { compositions } = await extractRootCompositions();
  const byId = new Map(compositions.map((c) => [c.id, c]));
  for (const ep of EPISODES) {
    const comp = byId.get(ep.id);
    assert.ok(comp, `Missing ${ep.id} in src/Root.tsx`);
    assertEpisodeSchemaRejectsBadInputs(comp.schema, comp.defaultProps, ep.id);
  }
});

for (const ep of NEW_EPISODES) {
  const tag = `[${ep.featureId}][${ep.epTag}]`;
  const paths = episodePaths(ep);

  test(`${tag} Remotion AST purity across src/videos/${ep.id}/ (no Math.random, timers, CSS anims, fetch, /30, or docs/)`, () => {
    assert.equal(fs.existsSync(paths.srcDir), true, `Missing ${paths.srcDir}`);
    const files = listSourceFilesRecursive(paths.srcDir);
    assert.ok(files.length >= 6, `${ep.id}: expected index.tsx, captions.ts, and >= 4 Scene files`);
    for (const f of files) {
      const scan = scanCompliance(f);
      assertCleanScan(scan);
    }
  });

  test(`${tag} Live Zod schema ${ep.schemaName} accepts ${ep.defaultPropsName} and rejects invalid boundary values`, async () => {
    assert.equal(fs.existsSync(paths.indexTsx), true, `Missing ${paths.indexTsx}`);
    const mod = await loadTsModule(paths.indexTsx);
    const schema = mod[ep.schemaName];
    const defaults = mod[ep.defaultPropsName];
    assert.ok(schema, `Missing ${ep.schemaName}`);
    assert.ok(defaults, `Missing ${ep.defaultPropsName}`);
    assertEpisodeSchemaRejectsBadInputs(schema, defaults, ep.id);
  });
}
