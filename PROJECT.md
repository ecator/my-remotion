# Project: HyperFrames Encyclopedia Series (Episodes 2–12)

## Overview
Complete the remaining **11 episodes** (`EP02`–`EP12`) of the 12-episode **HyperFrames Encyclopedia Video Series** defined in `docs/shared/hyperframes-series-plan.md`, strictly grounded in the authoritative documentation (`docs/shared/hyperframes-docs/`, 136 Markdown files), featuring detailed Chinese technical narration (`详细解说`), and matching the visual, structural, audio-sync, and engineering blueprint of Episode 1 (`HfEp01IntroAndQuickstart`) and `AGENTS.md`.

---

## Architecture
- **Dual-Track Structure**:
  1. **Implementation Track (`M1`–`M7`)**:
     - `M1` upgrades shared HyperFrames UI primitives (`src/components/hyperframes/`) and validates the deterministic Python `edge-tts` + `pnpm exec remotion ffprobe` + `@remotion/captions` generation pipeline (`scratch/gen_hf_episode_audio.py`).
     - `M2`–`M5` (compound milestones delegated to sub-orchestrators, running in parallel after `M1`) author per-episode docs (`docs/<VideoName>/`), generate per-scene MP3 voiceovers (`public/<VideoName>/`), and build audio-driven Remotion compositions (`src/videos/<VideoName>/`) across exclusive per-episode directories.
     - `M6` registers all 11 new top-level `<Composition />` entries in `src/Root.tsx`, verifies `pnpm lint` and `pnpm exec remotion compositions`, and inspects multi-frame `pnpm exec remotion still` renders in `scratch/` across all episodes (`EP01`–`EP12`).
     - `M7` (Final Milestone) executes Phase 1 (passing 100% of E2E Tiers 1–4 against `TEST_READY.md`) followed by Phase 2 (Tier 5 white-box adversarial coverage hardening + whole-project Forensic Audit).
  2. **E2E Testing Track (`E2E_TestingTrack`)**:
     - Runs in parallel from requirements (`ORIGINAL_REQUEST.md`, `AGENTS.md`, `PROJECT.md`, `hyperframes-series-plan.md`, `hyperframes-style-guide.md`, `hyperframes-docs/`), independently designing an opaque-box 4-tier verification suite under `tests/e2e/`, publishing `TEST_INFRA.md` and `TEST_READY.md`.
- **Episode Runtime Architecture (matching `HfEp01IntroAndQuickstart`)**:
  - `1920×1080`, `30 fps`, dark obsidian/emerald theme (`HF_COLORS`), `NotoSansSC` + `JetBrainsMono`.
  - Audio-first timeline: per-scene `edge-tts` mono `24kHz 48kbps` MP3 → `pnpm exec remotion ffprobe` exact ms duration → `EPXX_SCENE_META` (`leadIn` 24–36f, `voiceDurationInFrames = Math.ceil(sec * 30)`, `tailOut` 30–36f) → scene-relative `@remotion/captions` (`pageBreakAfter: true`) → `voiceMs = ((frame - voiceFromFrame) / fps) * 1000` visual choreography.
  - Shared background audio: `public/shared/bgm/hf_tech_ambient.mp3` looped via `@remotion/media` `<Audio>` with speech-gap ducking (`bgmVolume` default `0.18` during speech, `Math.min(0.45, bgmVolume * 2.1)` in gaps, `0.8s` fade-in, `1.2s` fade-out).

---

## Code Layout & Write Ownership
```text
my-remotion/
├── PROJECT.md                          # Top-level architecture, contracts, milestones (Orchestrator)
├── TEST_INFRA.md                       # E2E test architecture & feature checklist (E2E Testing Track)
├── TEST_READY.md                       # E2E suite completion signal & command (E2E Testing Track)
├── docs/
│   ├── shared/                         # Existing read-only specs: hyperframes-series-plan.md, hyperframes-style-guide.md, hyperframes-docs/** (136 docs)
│   ├── HfEp01IntroAndQuickstart/       # Existing EP01 docs (read-only reference)
│   └── <VideoName>/                    # EP02..EP12 exclusive per-episode docs (script.md, storyboard.md, notes.md)
├── public/
│   ├── shared/bgm/hf_tech_ambient.mp3  # Existing reusable ambient BGM (read-only)
│   ├── HfEp01IntroAndQuickstart/       # Existing EP01 MP3s (read-only)
│   └── <VideoName>/                    # EP02..EP12 exclusive voiceovers (epXX_sYY_voice.mp3)
├── scratch/
│   └── gen_hf_episode_audio.py         # Shared PEP 723 uv run TTS + ffprobe + captions generator (M1) + still check PNGs (gitignored)
├── src/
│   ├── index.ts                        # Existing Remotion root entry
│   ├── Root.tsx                        # Exclusive write ownership: M6 (after M2-M5 finish; existing EP01 & HelloWorld preserved)
│   ├── components/hyperframes/         # Exclusive write ownership: M1
│   │   ├── tokens.ts                   # Authoritative layout & color tokens (preserve EP01 layout fix!)
│   │   ├── HfSeriesShell.tsx           # Global HUD shell + stage + bottom chapter progress bar
│   │   ├── HfCaptionBar.tsx            # Single-line page-grouped caption bar + expanded CODE_TERM_REGEX
│   │   ├── HfCodeWindow.tsx            # Code window with line highlights & badges
│   │   ├── HfTerminalWindow.tsx        # Terminal window (add optional headerBadge prop)
│   │   ├── HfChapterIntro.tsx          # NEW (style-guide §6)
│   │   ├── HfPromptAnatomy.tsx         # NEW (style-guide §6)
│   │   ├── HfSplitCompare.tsx          # NEW (style-guide §6)
│   │   └── HfTimelineMock.tsx          # NEW (style-guide §6)
│   └── videos/
│       ├── HfEp01IntroAndQuickstart/   # Existing EP01 (read-only reference; preserve backward compatibility)
│       └── <VideoName>/                # EP02..EP12 exclusive per-episode folders: index.tsx, captions.ts, Scene01..0N.tsx
└── tests/
    └── e2e/                            # Exclusive write ownership: E2E Testing Track (and M7 Phase 2 Tier 5 hardening)
```

---

## Feature Inventory
Every Survey feature is assigned a Milestone below (zero unassigned features):

| # | Feature | Description | Milestone | Source |
|---|---|---|---|---|
| F1 | Shared UI Primitives & Upgrades | Extend `HfCaptionBar` (`CODE_TERM_REGEX` covering EP02–EP12 terms + optional `extraCodeTerms`/`brandColor`), `HfSeriesShell` (`brandColor`/`accentColor` theming + backward compat), `HfTerminalWindow` (`headerBadge?`), and implement missing style-guide §6 primitives: `HfChapterIntro`, `HfPromptAnatomy`, `HfSplitCompare`, `HfTimelineMock` | M1 | `hyperframes-style-guide.md §6`, Survey `explorer_survey_1` |
| F2 | Deterministic Audio & Caption Pipeline | PEP 723 `uv run` script `scratch/gen_hf_episode_audio.py` calling `edge-tts` (`zh-CN-YunxiNeural`, `+6%`, 24kHz mono MP3), measuring exact ms via `pnpm exec remotion ffprobe`, emitting scene-relative `@remotion/captions` arrays (`pageBreakAfter`, trailing punctuation stripped), plus live `remotion still` smoke verification | M1 | `explorer_survey_2`, `docs/HfEp01IntroAndQuickstart/script.md` |
| F3 | EP02 `HfEp02StudioDesktopApp` | 《零代码 AI 视频工作站：HyperFrames Studio 桌面端全攻略》: Home (`Make`/`Reference`/`Script`, 4-part builder), Framey, `@`/`#`/`/` (91 captions), Script doc-editing + Pending edits, `V`/`A`/`D`/`C` + Mac cutout, Brand Kits, Video 1 & 7.8MB ref rule, Reference Video, `open` + `catch-up`, Local vs Cloud (5/mo, 200MB) & Review Share | M2 | `hyperframes-series-plan.md`, `studio-app/*.md` |
| F4 | EP03 `HfEp03BrowserEditorNle` | 《源码级可视化剪辑：Browser Editor 浏览器编辑器与时间轴精修》: `preview` port `3002`, `⌘K`, Auto-record keyframes warning, `K`/`R` gestures & path drag, `J/K/L`, `B` razor vs `S` split, `I/O`, `N`, `[/]`, Linked/Ripple, `Audio FX` vs `Effects`, Voiceover Carve & `+12dB`, `caption-overrides.json`, `.hyperframes/render-variables.json`, WebMCP `document.modelContext` (12 tools, 5 receipts) | M2 | `hyperframes-series-plan.md`, `studio/*.md`, `guides/webmcp.md` |
| F5 | EP04 `HfEp04BrandAndExplainerFlows` | 《从网页与文稿到成片：产品发布、科普解说与设计稿导入工作流》: Workflow router; Product Launch (`capture`, Hook→3 Beats→CTA); Faceless Explainer (`one idea per scene`, 4 angles); Motion Graphics (`<10s`, WebM alpha vs MP4); Figma/Claude/Open Design (`tokens` before `component`, 3 PAT scopes + 403 pitfall); Avatar Presenter + `frame.md` Brand Truth | M3 | `hyperframes-series-plan.md`, `workflows.md`, `guides/{product-launch-video,faceless-explainer,motion-graphics,design-tools,figma,avatar-presenter}.md`, `prompting/design-systems.md` |
| F6 | EP05 `HfEp05MediaDataAndDevFlows` | 《万物皆可成片：口播粗剪、音乐卡点、数据地图、PR 视频与幻灯片》: Captions & Recuts (cut pauses BEFORE captioning, Parakeet/Whisper, Rail vs 1-subject Embed); Music/Lyric (`beats` & `audio`, `"best 20s"`, calm flow); Data & Maps (`data-chart`, `apple-money-count`, 6 map blocks + baked geo); GitHub PR (`code-diff`/`code-morph`/`code-typing`); `/slideshow` (`present` port `3004` vs `render` silent slide-1 trap) + Custom Video | M3 | `hyperframes-series-plan.md`, `guides/{captions-and-recuts,music-to-video,pr-to-video,slideshow,general-video}.md`, `prompting/data-and-maps.md` |
| F7 | EP06 `HfEp06PromptAnatomyAndMotion` | 《像导演一样写 Prompt：六段式提示词骨架与七大丝滑运动法则》: 6-Part Macro Skeleton + 5-Slot Micro Beat + 3-Level Specification Dial; 7 Motion Laws (Avoid vs Instead splits); 2-frame stop-motion (`two frames` not `0.067s`); Shader vs CSS transitions + 6 ease words; Convergent Iteration (1-var, absolute targets, Freeze clause, NLE verbs, 75–90% ceiling); Storyboard & 62s Capstone ("The Timeline" 9 regions + Spectacle Beat) | M3 | `hyperframes-series-plan.md`, `prompting/{overview,motion,examples,editing-existing-videos,recreating-references,capstone}.md` |
| F8 | EP07 `HfEp07AudioVoiceAndCaptions` | 《声音与字幕工程：TTS 配音、10000+ 曲库、自动闪避与 91 款花字》: Voice cascade (HeyGen→ElevenLabs→Kokoro 54 voices, Gemini TTS), 10k music + 19 SFX + Openverse; 4 audio attrs (`data-fx-chain`, `data-automation` clip vs group clock + `+12dB`, `data-fx-carve` music-only double-quoted JSON, `data-audio-group`), Master `-3dBTP`, 16 effects (worklet limits) + 22 presets + 4 lint rules; `remove-background` (`u2net_human_seg` + `--background-output`); Captions Catalog + Code blocks + Speed Ramps (`target:"rate"`) | M4 | `hyperframes-series-plan.md`, `prompting/{media-and-audio,captions-catalog}.md`, `guides/{media,video-components,voice-and-audio,remove-background}.md`, `reference/{audio-effects,speed-ramps}.md` |
| F9 | EP08 `HfEp08ColorVfxAnd3d` | 《电影感调色与视觉特效：调色管线、data-vfx-chain WebGL2 与 3D》: Fixed-order Color Grading Pipeline + `data-color-grading` + `media-treatment` + `grade-compare` (A-roll caution); `data-vfx-chain` WebGL2 (`--vfx-<id>-<key>`, `none/self/backdrop`, `<canvas layoutsubtree>` `.hf-vfx-src`); HTML-in-Canvas `drawElementImage`; Motion Blur (`filter` vs `capture` tier, `phase`, `--page-motion-blur off`); `Three.js via the adapter` vs CSS 3D + `@hyperframes/shader-transitions` | M4 | `hyperframes-series-plan.md`, `prompting/color-grading.md`, `guides/{media-effects,vfx-chain,html-in-canvas,motion-blur}.md`, `reference/color-grading.md`, `packages/shader-transitions.md` |
| F10 | EP09 `HfEp09HtmlContractAndGsap` | 《解剖 HyperFrames 工程：HTML Schema、时间属性与确定性寻址渲染》: HTML root attrs (`data-no-timeline` 45s fix), `<template>` sub-compositions & `assetUrl()`, relative `data-start`, Tracks != Layers (`z-index` + `isolation: isolate`), `gsap.timeline({paused:true})` -> `window.__timelines`, `registerFrameSource` / Frame Adapter, 3 Determinism Laws, Quality Gates (`doctor`, `@hyperframes/lint`, `check` w/ `.motion.json`/WCAG/8fps craft/`--safe-zone`/OpenCV face) | M5 | `hyperframes-series-plan.md`, `concepts/{compositions,data-attributes,determinism,frame-adapters}.md`, `guides/{gsap-animation,frame-sources,imported-film-html}.md`, `reference/{html-schema,lint-rules}.md`, `packages/lint.md`, `help.md` |
| F11 | EP10 `HfEp10VariablesAndBatchTemplates` | 《参数化视频模板：data-composition-variables、语义槽位与批量渲染》: `data-composition-variables` JSON & 7 types, `role` + 8 `portrays` semantic slots, zero-JS `data-var-text`/`data-var-src`/`var(--id)` vs `getVariables()` + `data-variable-values`, `--variables`/`--variables-file`/`--strict-variables`, `--batch` `{key}` sandbox + Lambda JSONL, CSS precedence trap & differential test, compile-time immutables | M5 | `hyperframes-series-plan.md`, `concepts/variables.md`, `studio/assets-and-blocks.md`, `deploy/templates-on-lambda.md`, `prompting/design-systems.md` |
| F12 | EP11 `HfEp11VsRemotionAndMigration` | 《巅峰对决与无缝迁移：HyperFrames vs Remotion 源码级对比与转换》: Inkwell 15s benchmark (10 TS/1037 lines/950MB vs 4 HTML/822 lines/0 deps), 3s Title Card side-by-side (`useCurrentFrame`+`interpolate` frames vs `data-start`+paused GSAP seconds), Objective decision matrix, `remotion-to-hyperframes` + Honest Refusal (`useState`/`useEffect`/Redux) + `diff`/SSIM verification, Lambda migration | M5 | `hyperframes-series-plan.md`, `guides/hyperframes-vs-remotion.md`, `prompting/remotion-migration.md`, `deploy/migrating-to-hyperframes-lambda.md` |
| F13 | EP12 `HfEp12SdkPlayerAndCloudDeploy` | 《企业级集成与分布式渲染：Headless SDK、Player 与 Lambda/Cloud Run》: Smallest Surface Law; `@hyperframes/sdk` (`openComposition`, `scopedId`, 3 modes incl. `OverrideSet`, `dispatch`/`batch`/`can`, `ORIGIN_APPLY_PATCHES`, `createFsAdapter` subpath, `createIframePreviewAdapter`, `resolveElementAffordances`); `<hyperframes-player>`; Cloud (`cloud render` 200MB, Vercel/Cloudflare/Modal, AWS Lambda Plan v2 + SFN + 250MiB/15m/256KiB + `PRODUCER_RESTRICT_PAGE_NETWORK`, GCP Cloud Run); 4K integer scaling, 10-bit H.265 HDR, 4:4:4, `--resume`, catalog search, contributing | M5 | `hyperframes-series-plan.md`, `developers/*`, `sdk/**/*`, `packages/*`, `guides/{rendering,export-and-share,deploy,4k-rendering,hdr,performance}.md`, `deploy/*`, `contributing.md`, `contributing/*`, `community/adopters.md` |
| F14 | Full Series Root Registration & Visual Checks | Register all 11 new compositions (`HfEp02`–`HfEp12`) directly in `src/Root.tsx` (preserving `HfEp01IntroAndQuickstart` & `HelloWorld`, registering zero sub-components), verify `pnpm lint`, `pnpm exec remotion compositions`, and multi-frame `pnpm exec remotion still` visual inspection in `scratch/` across EP02–EP12 (no CJK tofu, clipping, or HUD/caption overlap) | M6 | `AGENTS.md` §§2–5, `Root.tsx` |
| F15 | Full E2E Suite Pass & Tier 5 Hardening | Pass 100% of E2E Tiers 1–4 (`TEST_READY.md`), complete Tier 5 white-box adversarial coverage hardening, and pass Whole-Project Forensic Audit (including `EP01` non-regression) | M7 | Project Pattern Dual Track |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | `M1_SharedUiAndTtsPipeline` | Upgrade `HfCaptionBar`, `HfSeriesShell`, `HfTerminalWindow`; build `HfChapterIntro`, `HfPromptAnatomy`, `HfSplitCompare`, `HfTimelineMock`; create & verify `scratch/gen_hf_episode_audio.py` + `remotion still` smoke check | none | IN_PROGRESS (`sub_orch_m1_r2`: `9f4fee783f540b7d178c8ae7903c03f1`) |
| 2 | `E2E_TestingTrack` | Independent opaque-box 4-tier E2E suite (`tests/e2e/`), `TEST_INFRA.md`, `TEST_READY.md` covering F1–F14 | none | IN_PROGRESS (`sub_orch_e2e_r2`: `37a275aa1047e5f99820dd758b57ba7d`) |
| 3 | `M2_Part1Editors_Ep02Ep03` | Compound milestone (sub-orchestrator): F3 (`HfEp02StudioDesktopApp`) & F4 (`HfEp03BrowserEditorNle`) | M1 | PLANNED |
| 4 | `M3_Part2WorkflowsPrompting_Ep04Ep05Ep06` | Compound milestone (sub-orchestrator): F5 (`HfEp04BrandAndExplainerFlows`), F6 (`HfEp05MediaDataAndDevFlows`), F7 (`HfEp06PromptAnatomyAndMotion`) | M1 | PLANNED |
| 5 | `M4_Part3AudioVfx3d_Ep07Ep08` | Compound milestone (sub-orchestrator): F8 (`HfEp07AudioVoiceAndCaptions`) & F9 (`HfEp08ColorVfxAnd3d`) | M1 | PLANNED |
| 6 | `M5_Part4CoreVarsMigrationSdk_Ep09ToEp12` | Compound milestone (sub-orchestrator): F10 (`EP09`), F11 (`EP10`), F12 (`EP11`), F13 (`EP12`) | M1 | PLANNED |
| 7 | `M6_RootRegistrationAndVisualCheck` | Register all 11 episodes in `src/Root.tsx`, run `pnpm lint`, `remotion compositions`, and multi-frame `remotion still` visual inspection + layout fixes | M2, M3, M4, M5 | PLANNED |
| 8 | `M7_FinalE2eAndHardening` | Final Milestone: Phase 1 (Tiers 1–4 E2E pass via `TEST_READY.md`) + Phase 2 (Tier 5 adversarial hardening + Whole-Project Forensic Audit) | M6, E2E_TestingTrack (`TEST_READY.md`) | PLANNED |

*(Note: Implementation milestones = 7 [`M1`..`M7`] + parallel `E2E_TestingTrack`.)*

---

## Interface Contracts

### 1. Episode Composition & Zod Schema Contract (`src/videos/<VideoName>/index.tsx` ↔ `src/Root.tsx`)
Every episode (`EP02`–`EP12`) MUST export from `src/videos/<VideoName>/index.tsx`:
- Component: `export const <VideoName>: React.FC<<VideoName>Props>`
- Schema (`zod` + `@remotion/zod-types`):
  ```ts
  export const <camelPrefix>Schema = z.object({
    episodeCode: z.string(),        // e.g. "EP.02" .. "EP.12" (matches HfSeriesShellProps!)
    episodeTitle: z.string(),       // Exact episode title
    brandColor: zColor(),           // Default "#10B981"
    accentColor: zColor(),          // Default "#06B6D4"
    showSubtitles: z.boolean(),     // Default true
    bgmVolume: z.number().min(0).max(1), // Default 0.18
  });
  ```
- Exported defaults/constants for `src/Root.tsx` registration:
  - `EPXX_TOTAL_FRAMES` from `captions.ts` (`durationInFrames`, `fps = 30`, `width = 1920`, `height = 1080`)
  - `EPXX_DEFAULT_PROPS` matching `<camelPrefix>Schema`
- `src/Root.tsx` MUST register ONLY top-level complete compositions (`HfEp01IntroAndQuickstart`..`HfEp12SdkPlayerAndCloudDeploy` + `HelloWorld`), never sub-scenes or shared UI components.

### 2. Audio, Timing & Caption Contract (`scratch/gen_hf_episode_audio.py` ↔ `captions.ts` ↔ `Scene01..0N.tsx`)
- **Voiceover Audio**: `public/<VideoName>/epXX_s0Y_voice.mp3` (`24000 Hz`, mono, `48 kbps` via `edge-tts`, default voice `zh-CN-YunxiNeural`, rate `+6%`).
- **BGM**: Reuse `public/shared/bgm/hf_tech_ambient.mp3` with `@remotion/media` `<Audio loop>` and EP01 ducking envelope (`0.8*fps` fade-in, `1.2*fps` fade-out, `bgmVolume` during voiceover, `Math.min(0.45, bgmVolume * 2.1)` in lead/tail gaps).
- **Scene Frame Arithmetic (`captions.ts`)**:
  - `EPXX_SCENE_META`: contiguous scenes `s01..s0N`, `fromFrame` cumulative starting at `0`.
  - `voiceFromFrame`: `36` (`1.2s`) on `s01` (or `24`–`36`), `24` (`0.8s`) on `s02+`; `tailOut`: `30` (`1.0s`) on intermediate scenes, `36` (`1.2s`) on final scene.
  - `voiceDurationMs`: exact millisecond duration measured by `pnpm exec remotion ffprobe` on the generated `.mp3`.
  - `voiceDurationInFrames = Math.ceil((voiceDurationMs / 1000) * 30)`.
  - `durationInFrames = voiceFromFrame + voiceDurationInFrames + tailOut`.
  - `EPXX_TOTAL_FRAMES = sum(scene.durationInFrames)`.
- **Captions (`captions.ts` + `HfCaptionBar`)**:
  - `@remotion/captions` `Caption[]` per scene with scene-audio-relative `startMs`/`endMs` starting near `100ms`, `timestampMs = Math.floor((startMs + endMs) / 2)`, `confidence: 1.0`.
  - Single-line paging via `pageBreakAfter: true` (`14–26` CJK chars / visual equivalent per line, trailing `。，、` stripped).
  - Each scene `<Sequence from={meta.fromFrame} durationInFrames={meta.durationInFrames}>` contains `<Audio from={meta.voiceFromFrame} ... />`, `<Scene0Y voiceFromFrame={meta.voiceFromFrame} />`, and `{showSubtitles && <HfCaptionBar captions={...} voiceStartFrame={meta.voiceFromFrame} brandColor={brandColor} />}`.

### 3. Shared Component Contracts (`src/components/hyperframes/*`)
All changes MUST remain 100% backward-compatible with `src/videos/HfEp01IntroAndQuickstart/`:
- **`tokens.ts`**: Preserve exact `HF_LAYOUT` (`stageTop: 88, stageLeft: 72, stageRight: 72, stageBottom: 114, progressBarHeight: 34, captionBottomFromCanvas: 44`), `HF_COLORS`, `FONT_SANS`, `FONT_MONO`, `HfChapterMeta`.
- **`HfSeriesShell.tsx`**: Accept optional `brandColor?: string` (default `HF_COLORS.brandPrimary`) and `accentColor?: string` (default `HF_COLORS.accentCyan`), applying them cleanly to HUD badges/glows/progress bars while preserving EP01 defaults.
- **`HfCaptionBar.tsx`**: Expand `CODE_TERM_REGEX` to cover EP02–EP12 terms (`data-[a-z-]+`, `window.__[a-zA-Z0-9_]+`, `@hyperframes/[a-z-]+`, `--vfx-[a-z0-9-]+`, `hyperframes ...`, `npx ...`, `Three.js`, `GSAP`, `WebMCP`, `Studio`, `Browser Editor`, `Kokoro`, `Framey`, `Figma`, `Lambda`, `Cloud Run`, `SSIM`, `OverrideSet`, `ORIGIN_APPLY_PATCHES`, `document.modelContext`, etc.) AND support optional `extraCodeTerms?: RegExp` + `brandColor?: string` + `accentColor?: string`.
- **`HfTerminalWindow.tsx`**: Add optional `headerBadge?: string` (default `"bash · node ≥ 22"`).
- **New Style-Guide §6 Primitives** (props typed cleanly, zero `Math.random()`, zero CSS transitions/animations, `useCurrentFrame()` + `useVideoConfig()` driven):
  - `HfChapterIntro.tsx`: Reusable hero/chapter opening card (episode badge, split-tone title, subtitle, keyword chips, exit/fade timing).
  - `HfPromptAnatomy.tsx`: Interactive annotated prompt skeleton block highlighting `[role/slot]` tags and synced `voiceMs` active slot explanations.
  - `HfSplitCompare.tsx`: Side-by-side comparison container (e.g., Avoid vs Instead, Remotion vs HyperFrames, Local vs Cloud) with semantic header badges and active-column `voiceMs` focus.
  - `HfTimelineMock.tsx`: Multi-track NLE timeline visualizer (playhead synced to frame/`voiceMs`, named tracks, colored clip blocks with `data-start`/`data-duration`/waveform/keyframe markers).

### 4. Editorial Depth, Style & Determinism Contract (EP02–EP12)
- **Doc Grounding (`基于文档`)**: Every CLI command, attribute name, keyboard shortcut, API symbol, count, and constraint MUST come directly from `docs/shared/hyperframes-docs/` (verified against Episode spec traps in `spec_miner_survey_1/analysis.md` §2).
- **Detailed Narration (`详细解说`)**: Each episode targets **4–6 scenes**, **`~3.5–5.0 min`**, **`~1,400–2,100` Chinese narration characters** (`~300–420` chars per scene), delivered in clear technical Chinese matching Episode 1's pedagogical pacing (`docs/HfEp01IntroAndQuickstart/script.md`).
- **Docs Completeness**: Every episode MUST have `docs/<VideoName>/{script.md, storyboard.md, notes.md}` (never imported by `src/`).
- **Remotion Compliance (`AGENTS.md`)**:
  - `useCurrentFrame()` + `interpolate()`/`spring()`/`Easing` scaled by `useVideoConfig().fps` (avoid hardcoded `/ 30` in new scenes).
  - Deterministic `random("seed")` only; zero `Math.random()`, zero CSS `transition`/`animation`/`@keyframes`/`animate-*`, zero `setTimeout`/`requestAnimationFrame`.
  - Minimum readable stage body font `>= 20px` wherever feasible (respecting `HfSeriesShell` HUD geometry), line-height `1.4–1.6`, CJK fallback fonts included via `FONT_SANS` / `FONT_MONO`.

### 5. Concurrent Workspace Discipline (`M2`–`M5`)
- `M2`–`M5` workers MUST write files bottom-up (`captions.ts` → `Scene01..0N.tsx` → `index.tsx`) and NEVER edit `src/Root.tsx`, `src/components/hyperframes/*`, or another milestone's `docs/`/`public/`/`src/videos/` directories.
- Timestamp any active/queued `pnpm lint` or `remotion still` invocation in agent `progress.md` before running.
