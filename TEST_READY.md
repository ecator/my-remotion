# E2E Verification Suite Ready (`TEST_READY.md`)

**Status**: `READY` — All 4 E2E tiers (`190` tests across `F1`–`F14`, `EP01`, and `HelloWorld`) are implemented, verified with zero harness/loader/syntax errors, clean `pnpm lint` impact (`exit 0`), deterministic Tier 4 pixel SHA-256 verification, and clean `scratch/e2e_tmp/` teardown.

---

## 1. Canonical Execution Commands

```bash
# Full 4-tier E2E gate (Milestone M7 Phase 1 target: 190/190 pass, exit 0)
node tests/e2e/run.mjs --tier=all

# Run a single tier
node tests/e2e/run.mjs --tier=1
node tests/e2e/run.mjs --tier=2
node tests/e2e/run.mjs --tier=3
node tests/e2e/run.mjs --tier=4

# Filter by feature, episode, or regex
node tests/e2e/run.mjs --tier=all --filter=EP01
node tests/e2e/run.mjs --tier=all --filter=EP.01
node tests/e2e/run.mjs --tier=all --filter=HelloWorld
node tests/e2e/run.mjs --tier=1 --filter='/\[F1\]/'
node tests/e2e/run.mjs --tier=1 --filter='/\[F2\]/'
node tests/e2e/run.mjs --tier=all --filter=F3

# Direct single-file execution via Node test runner
node --test tests/e2e/tier1/f1-shared-ui.test.mjs
```

### Exit Code Semantics
- `0`: All executed tests across selected tiers passed (`executed >= 1`, `failed === 0`).
- `1`: Any test failed, root `test:summary` reported failure/cancellation, or `--filter` matched `0` executed tests.
- `2`: Invalid CLI flag, invalid `--tier`, invalid `--filter` RegExp, or missing option value.

---

## 2. Exact Test & Assertion Counts

| Tier | Files | Test Cases | Coverage Scope | Threshold |
|---|---:|---:|---|---|
| **Tier 1** (`tier1/*.test.mjs`) | 4 | **78** | Feature contracts (`F1`: 9, `F2`: 6, `F3`–`F13`: 5/ep = 55, `F14`: 6, `EP01` + `HelloWorld`: 2) | `>= 70`, `>= 5` per `F1`–`F14` |
| **Tier 2** (`tier2/*.test.mjs`) | 3 | **85** | Boundaries, AST purity, Zod rejections & Doc-Truth Oracles (`F1`: 6, `F2`: 5, `F3`–`F13`: 6/ep = 66, `F14`: 5, Baselines: 3 extra) | `>= 70`, `>= 5` per `F1`–`F14` |
| **Tier 3** (`tier3/*.test.mjs`) | 2 | **17** | `pnpm lint`, `remotion compositions`, `remotion ffprobe` + compositor `ffprobe` sync (`<= 50 ms`), §6 adoption, `CODE_TERM_REGEX`, BGM parity | `>= 15` |
| **Tier 4** (`tier4/*.test.mjs`) | 1 | **10** | Live `pnpm exec remotion still` (`1920x1080` PNG, luminance entropy `stdDevLum > 8`, repeat-render pixel SHA-256 identity, `concurrency: 1`) | `>= 8` |
| **Total** | **10** | **190** | Full `F1`–`F14` + `EP01` & `HelloWorld` non-regression | — |

---

## 3. Verified Baseline Snapshot (Pre-`M2`–`M6` Build)

Verified at handoff (`2026-11-25T14:30Z`) with concurrent `M1` deliverables (`src/components/hyperframes/*`, `scratch/gen_hf_episode_audio.py`) already landed on disk and `M2`–`M6` not yet built:

| Command | Result | Exact Counts / Notes |
|---|---|---|
| `node tests/e2e/run.mjs --tier=all --filter=EP01` | **PASS (`exit 0`)** | `executed=19 passed=19 failed=0` (T1: 5/5, T2: 7/7, T3: 5/5 incl. `pnpm lint`, `remotion compositions`, `remotion ffprobe`, T4: 2/2 live `remotion still` frames 60 & 2200 + pixel SHA-256) |
| `node tests/e2e/run.mjs --tier=all --filter=EP.01` | **PASS (`exit 0`)** | `executed=1 passed=1 failed=0` |
| `node tests/e2e/run.mjs --tier=all --filter=HelloWorld` | **PASS (`exit 0`)** | `executed=7 passed=7 failed=0` (T1: 2/2, T2: 1/1, T3: 3/3, T4: 1/1 live `remotion still` frame 90 + pixel SHA-256) |
| `node tests/e2e/run.mjs --tier=1 --filter='/\[F1\]/'` | **PASS (`exit 0`)** | `executed=9 passed=9 failed=0` |
| `node tests/e2e/run.mjs --tier=2 --filter='/\[F1\]/'` | **PASS (`exit 0`)** | `executed=6 passed=6 failed=0` |
| `node tests/e2e/run.mjs --tier=1 --filter='/\[F2\]/'` | **PASS (`exit 0`)** | `executed=6 passed=6 failed=0` |
| `node tests/e2e/run.mjs --tier=all --filter=NONEXISTENT_XYZ_PATTERN` | **FAIL (`exit 1`)** | `executed=0` zero-match guard exits `1` as required |
| `node tests/e2e/run.mjs --tier=5` / `--unknown` / `--tier` | **ERR (`exit 2`)** | Invalid/missing CLI arguments cleanly rejected with code `2` |
| `node tests/e2e/run.mjs --tier=1` | **EXPECTED BASELINE (`exit 1`)** | `executed=78 passed=19 failed=59` (`F1` 9/9, `F2` 6/6, `EP01`, `HelloWorld`, `[F14][EP01]`, `[F14][HelloWorld]` pass; 55 `EP02`–`EP12` contract + 4 full-series `Root.tsx` assertions fail cleanly on missing `M2`–`M6` deliverables) |
| `node tests/e2e/run.mjs --tier=2` | **EXPECTED BASELINE (`exit 1`)** | `executed=85 passed=15 failed=70` (`F1` 6/6, `F2` 3/5, `EP01`, `HelloWorld`, `F14` static Root checks pass; 70 fail cleanly on missing `M2`–`M6` deliverables) |
| `node tests/e2e/run.mjs --tier=3` | **EXPECTED BASELINE (`exit 1`)** | `executed=17 passed=7 failed=10` (all 7 `EP01`/`HelloWorld`/`pnpm lint`/`ffprobe` checks pass; 10 fail cleanly on missing `M2`–`M6` deliverables) |
| `node tests/e2e/run.mjs --tier=4` | **EXPECTED BASELINE (`exit 1`)** | `executed=10 passed=3 failed=7` (`EP01` frames 60 & 2200 + `HelloWorld` frame 90 pass; 7 fail cleanly on unregistered `EP02`–`EP12` in `Root.tsx`) |
| `pnpm lint` (`eslint src && tsc`) | **PASS (`exit 0`)** | Zero errors; `tests/e2e/*.mjs` causes zero lint/type interference |
| `scratch/e2e_tmp/` check | **CLEAN** | Ephemeral Tier 4 run directory absent after teardown |
