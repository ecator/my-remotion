import assert from "node:assert/strict";
import test from "node:test";
import {
  EPISODES,
  HELLO_WORLD_META,
  NEW_EPISODES,
  SERIES_DEFAULTS,
  episodePaths,
  normalizeTitle,
} from "../helpers/episodes.mjs";
import { extractRootCompositions, loadTsModule } from "../helpers/ts-loader.mjs";

const PASCAL_CASE_ID_RE = /^[A-Z][A-Za-z0-9]+$/;

test("[F14][EP01] src/Root.tsx registers HfEp01IntroAndQuickstart (EP.01) at 1920x1080@30fps with valid hfEp01Schema defaultProps", async () => {
  const { compositions } = await extractRootCompositions();
  const ep01Meta = EPISODES[0];
  const comp = compositions.find((c) => c.id === ep01Meta.id);
  assert.ok(comp, "HfEp01IntroAndQuickstart must be registered in src/Root.tsx");

  const capMod = await loadTsModule(episodePaths(ep01Meta).captionsTs);
  assert.equal(comp.width, SERIES_DEFAULTS.width);
  assert.equal(comp.height, SERIES_DEFAULTS.height);
  assert.equal(comp.fps, SERIES_DEFAULTS.fps);
  assert.equal(comp.durationInFrames, capMod.EP01_TOTAL_FRAMES);

  const parsed = comp.schema.safeParse(comp.defaultProps);
  assert.equal(parsed.success, true, "hfEp01Schema must validate Root.tsx defaultProps");
  assert.equal(comp.defaultProps.episodeCode, "EP.01");
  assert.equal(
    normalizeTitle(comp.defaultProps.episodeTitle),
    normalizeTitle(ep01Meta.episodeTitle),
  );
});

test("[F14][HelloWorld] src/Root.tsx registers HelloWorld at 1920x1080@30fps (240 frames) with valid helloWorldSchema defaultProps", async () => {
  const { compositions } = await extractRootCompositions();
  const comp = compositions.find((c) => c.id === HELLO_WORLD_META.id);
  assert.ok(comp, "HelloWorld must remain registered in src/Root.tsx");

  assert.equal(comp.width, HELLO_WORLD_META.width);
  assert.equal(comp.height, HELLO_WORLD_META.height);
  assert.equal(comp.fps, HELLO_WORLD_META.fps);
  assert.equal(comp.durationInFrames, HELLO_WORLD_META.durationInFrames);

  const parsed = comp.schema.safeParse(comp.defaultProps);
  assert.equal(parsed.success, true, "helloWorldSchema must validate HelloWorld defaultProps");
});

test("[F14] src/Root.tsx registers all 13 top-level series and legacy compositions and zero extra sub-components", async () => {
  const { compositions, unexpectedElements } = await extractRootCompositions();
  assert.deepEqual(unexpectedElements, [], "RemotionRoot must not render non-Composition elements");

  const expectedIds = [...EPISODES.map((e) => e.id), HELLO_WORLD_META.id];
  const actualIds = compositions.map((c) => c.id);

  assert.equal(
    actualIds.length,
    13,
    `src/Root.tsx must register exactly 13 top-level compositions (found ${actualIds.length}: ${actualIds.join(", ")})`,
  );
  for (const id of expectedIds) {
    assert.ok(actualIds.includes(id), `Missing <Composition id="${id}"> in src/Root.tsx`);
  }
});

test("[F14] Every composition id in src/Root.tsx is valid PascalCase (no underscores, spaces, or non-ASCII)", async () => {
  const { compositions } = await extractRootCompositions();
  for (const comp of compositions) {
    assert.match(
      comp.id,
      PASCAL_CASE_ID_RE,
      `Composition id '${comp.id}' must be strict ASCII PascalCase`,
    );
  }
  const epIds = new Set(compositions.map((c) => c.id));
  for (const ep of EPISODES) {
    assert.ok(epIds.has(ep.id), `Missing ${ep.id} in src/Root.tsx`);
  }
});

test("[F14] Every EP02-EP12 composition in src/Root.tsx binds matching 1920x1080, 30fps, EPXX_TOTAL_FRAMES, schema, and defaultProps", async () => {
  const { compositions } = await extractRootCompositions();
  const byId = new Map(compositions.map((c) => [c.id, c]));

  for (const ep of NEW_EPISODES) {
    const comp = byId.get(ep.id);
    assert.ok(comp, `Missing <Composition id="${ep.id}"> in src/Root.tsx`);

    const paths = episodePaths(ep);
    const capMod = await loadTsModule(paths.captionsTs);
    const idxMod = await loadTsModule(paths.indexTsx);

    assert.equal(comp.width, SERIES_DEFAULTS.width, `${ep.id} width must be 1920`);
    assert.equal(comp.height, SERIES_DEFAULTS.height, `${ep.id} height must be 1080`);
    assert.equal(comp.fps, SERIES_DEFAULTS.fps, `${ep.id} fps must be 30`);
    assert.equal(
      comp.durationInFrames,
      capMod[ep.totalFramesName],
      `${ep.id} durationInFrames must equal ${ep.totalFramesName}`,
    );
    assert.equal(comp.component, idxMod[ep.id], `${ep.id} component reference mismatch`);
    assert.equal(comp.schema, idxMod[ep.schemaName], `${ep.id} schema reference mismatch`);
    assert.deepEqual(
      comp.defaultProps,
      idxMod[ep.defaultPropsName],
      `${ep.id} defaultProps must match ${ep.defaultPropsName}`,
    );
  }
});

test("[F14] All 12 series compositions in src/Root.tsx share consistent default theme and valid Zod parses", async () => {
  const { compositions } = await extractRootCompositions();
  const byId = new Map(compositions.map((c) => [c.id, c]));

  for (const ep of EPISODES) {
    const comp = byId.get(ep.id);
    assert.ok(comp, `Missing ${ep.id} in src/Root.tsx`);
    const parsed = comp.schema.safeParse(comp.defaultProps);
    assert.equal(parsed.success, true, `${ep.id} defaultProps failed schema validation`);
    assert.equal(comp.defaultProps.episodeCode, ep.episodeCode);
    assert.equal(comp.defaultProps.brandColor, SERIES_DEFAULTS.brandColor);
    assert.equal(comp.defaultProps.accentColor, SERIES_DEFAULTS.accentColor);
    assert.equal(comp.defaultProps.showSubtitles, SERIES_DEFAULTS.showSubtitles);
    assert.equal(comp.defaultProps.bgmVolume, SERIES_DEFAULTS.bgmVolume);
  }
});
