# E2E Test Infrastructure (`tests/e2e/`)

## 1. Overview & Design Goals
This directory houses an independent, opaque-box, zero-extra-dependency **4-Tier E2E Verification Suite** written in Node `v22.23.5` ESM (`.mjs` files ONLY) to verify all 14 project features (`F1`–`F14` in `PROJECT.md`), preserving `EP01` (`HfEp01IntroAndQuickstart`) and `HelloWorld` non-regression while validating `EP02`–`EP12` deliverables against `AGENTS.md`, `PROJECT.md`, `hyperframes-series-plan.md`, and `docs/shared/hyperframes-docs/`.

Because `tsconfig.json` compiles TypeScript without `allowJs` and `package.json` runs `eslint src && tsc`, keeping the entire E2E suite in `.mjs` under `tests/e2e/` ensures zero impact on `pnpm lint` and zero extra npm dependencies.

---

## 2. Directory & Module Architecture

```text
tests/e2e/
├── run.mjs                                  # Unified sequential CLI runner (--tier, --filter, exit codes 0/1/2)
├── helpers/
│   ├── episodes.mjs                         # Authoritative EP01..EP12 & HelloWorld metadata + F3..F13 Doc-Truth Oracles
│   ├── ts-loader.mjs                        # In-memory ts.transpileModule + ESM preload + RemotionRoot() extractor
│   ├── static-scan.mjs                      # TypeScript AST scanner (imports, staticFile(), determinism, CSS anims, /30, regex flags)
│   ├── doc-inspect.mjs                      # docs/<VideoName>/script.md narration parser (scoped under ## 2. ### Scene)
│   ├── media-probe.mjs                      # Compositor ffprobe wrapper (LD_LIBRARY_PATH) + pnpm exec remotion ffprobe
│   └── png-inspect.mjs                      # Pure-Node zlib 5-filter PNG decoder, luminance entropy, & raw RGBA SHA-256
├── tier1/                                   # Tier 1: Feature Contracts & Structural Completeness (78 tests; >= 5 per F1..F14)
│   ├── f1-shared-ui.test.mjs                # F1: tokens.ts, 4 upgraded + 4 new §6 primitives, EP01 compatibility (9 tests)
│   ├── f2-audio-pipeline.test.mjs           # F2: scratch/gen_hf_episode_audio.py PEP 723/CLI/ffprobe/captions & BGM (6 tests)
│   ├── episodes-contract.test.mjs           # EP01 + HelloWorld baselines + 5 checks/episode across EP02..EP12 (57 tests)
│   └── f14-root-registry.test.mjs           # F14: src/Root.tsx 13 top-level compositions, PascalCase IDs, defaults (6 tests)
├── tier2/                                   # Tier 2: Boundaries, Remotion Purity & Doc-Truth Oracles (85 tests; >= 5 per F1..F14)
│   ├── captions-invariants.test.mjs         # F2 & F3..F13: visual width <= 30, <= 100ms overlap, midpoint ts, ceil(ms*30/1000) (16 tests)
│   ├── remotion-compliance.test.mjs         # F1, EP01, HelloWorld, F14, F3..F13: AST purity & live Zod schema rejections (35 tests)
│   └── docs-grounding.test.mjs              # EP01 + F3..F13: narration depth, >= 7 doc facts/ep, anti-hallucination traps (34 tests)
├── tier3/                                   # Tier 3: Cross-Feature Integration & CLI Parity (17 tests; >= 15)
│   ├── cli-lint-compositions.test.mjs       # pnpm lint, remotion compositions, §6 adoption, CODE_TERM_REGEX, counts (11 tests)
│   └── audio-ffprobe-sync.test.mjs          # remotion ffprobe + compositor ffprobe sync <= 50ms & shared BGM ducking (6 tests)
└── tier4/                                   # Tier 4: Live Rendering & Pixel Determinism (10 tests; >= 8, concurrency: 1)
    └── stills-visual-determinism.test.mjs   # Multi-frame remotion still PNGs under scratch/e2e_tmp/<runId>, entropy & SHA-256
```

---

## 3. Feature-to-Test Coverage Matrix (`F1`–`F14`)

| Feature | Scope | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **F1** | Shared UI Primitives & Upgrades | 9 | 6 | 4 | — |
| **F2** | Deterministic Audio & Caption Pipeline | 6 | 5 | 4 | — |
| **F3** | `EP02` `HfEp02StudioDesktopApp` | 5 | 6 | 6 | 1 |
| **F4** | `EP03` `HfEp03BrowserEditorNle` | 5 | 6 | 6 | 1 |
| **F5** | `EP04` `HfEp04BrandAndExplainerFlows` | 5 | 6 | 5 | — |
| **F6** | `EP05` `HfEp05MediaDataAndDevFlows` | 5 | 6 | 5 | 1 |
| **F7** | `EP06` `HfEp06PromptAnatomyAndMotion` | 5 | 6 | 6 | 1 |
| **F8** | `EP07` `HfEp07AudioVoiceAndCaptions` | 5 | 6 | 5 | — |
| **F9** | `EP08` `HfEp08ColorVfxAnd3d` | 5 | 6 | 6 | 1 |
| **F10** | `EP09` `HfEp09HtmlContractAndGsap` | 5 | 6 | 5 | — |
| **F11** | `EP10` `HfEp10VariablesAndBatchTemplates` | 5 | 6 | 5 | 1 |
| **F12** | `EP11` `HfEp11VsRemotionAndMigration` | 5 | 6 | 6 | — |
| **F13** | `EP12` `HfEp12SdkPlayerAndCloudDeploy` | 5 | 6 | 5 | 1 |
| **F14** | Full Series Root Registration & Visual Checks | 6 | 5 | 2 | (covers all 7+3) |
| **Baselines** | `EP01` + `HelloWorld` Non-Regression | 2 | 4 | 6 | 3 |
| **TOTAL** | **All Tests** | **78** (`>=70`) | **85** (`>=70`) | **17** (`>=15`) | **10** (`>=8`) |

---

## 4. Runner CLI Specification (`tests/e2e/run.mjs`)

- **Flags**:
  - `--tier=<1|2|3|4|all>` or `--tier <val>` (default: `all`)
  - `--filter=<pattern>` or `--filter <val>`: `/pattern/flags` parsed directly as `RegExp`; plain strings escape regex metacharacters and match case-insensitively (`new RegExp(escaped, "i")`), so `--filter=EP01`, `--filter=EP.01`, `--filter=F3`, and `--filter=HelloWorld` all work cleanly.
  - Invalid tiers, missing flag values, invalid regexes, or unknown flags exit with **code `2`**.
- **Exit Code Rules**:
  - Exits **`0`** only when every selected tier succeeds AND (if `--filter` is supplied) `>= 1` test actually executed (bypassing `node:test`'s quirk of setting `counts.tests` to include filtered/skipped tests).
  - Exits **`1`** on any `test:fail`, failed/cancelled root `test:summary`, or zero-match `--filter`.
- **Direct File Execution**: Every `tests/e2e/tier*/*.test.mjs` file is standalone and directly runnable via `node --test <file>`.

---

## 5. Key Engineering Design Notes
1. **In-Memory TS/TSX Evaluation (`ts-loader.mjs`)**: Preloads ESM-only & dual-load-sensitive packages (`@remotion/media`, `@remotion/media-utils`, `@remotion/light-leaks`, `@remotion/sfx`, `three`) via `await import(...)` into `esmCache` before `ts.transpileModule` + `vm.Script`, eliminating Mediabunny dual-load warnings and `[THREE_CJS_DEPRECATED]` stderr noise.
2. **AST Compliance & Calibrated Exemptions (`static-scan.mjs`)**: Uses TypeScript's AST parser (`ts.createSourceFile`) rather than brittle grep patterns, preventing false positives on URL comments (`src/Root.tsx:42`) while strictly forbidding `Math.random()`, timers, `fetch()`, CSS transitions/animations, `docs/` imports/`staticFile()`, and hardcoded `/ 30` or `* 30` in `src/components/hyperframes/*` and `EP02`–`EP12` (explicitly preserving `EP01` `Scene01IntroParadigm.tsx:57`).
3. **Pedagogical Trap Verification (`docs-grounding.test.mjs`)**: Distinguishes between unwarned hallucinations and explicit "Avoid X vs Use Y" comparisons (e.g. `navigator.modelContext` vs `document.modelContext`, `0.067` vs `two frames`, `401` vs `403`) via context-window negation checks plus required authoritative caveats.
4. **Tier 4 Ephemeral Hygiene (`stills-visual-determinism.test.mjs`)**: Runs with `concurrency: 1` to avoid Chromium/Rspack contention, outputs `--image-format=png --overwrite` strictly inside `scratch/e2e_tmp/<runId>/`, verifies PNG signature + `1920x1080` IHDR + non-blank luminance entropy (`stdDevLum > 8`, `uniqueColorBuckets >= 12`, `nonBgRatio > 0.03`) + repeat-render pixel SHA-256 identity, and cleans up `scratch/e2e_tmp/<runId>/` inside `try ... finally`.
