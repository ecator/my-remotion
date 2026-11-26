# HfEp03BrowserEditorNle · 制作与文档核对笔记

- **剧集编号**：`EP.03` / `HfEp03BrowserEditorNle`
- **文档依据**：
  - `docs/shared/hyperframes-docs/studio/index.md`（`npx hyperframes preview` 端口 3002、`⌘K`、完整快捷键表、`Auto-record` 警告）
  - `docs/shared/hyperframes-docs/studio/canvas.md`（Layers `z-index` vs Timeline tracks、`K` 关键帧、`Option/Alt` 移动整条路径、`R` Gesture Recording、`Unroll to edit`、Code 面板与 Lint）
  - `docs/shared/hyperframes-docs/studio/timeline.md`（`V`/`B` Razor/`S` Split/`N`/`[`/`]`、`Linked Selection`、`Ripple edit`、`data-media-start` vs `data-playback-start`）
  - `docs/shared/hyperframes-docs/studio/audio-effects.md`（`Audio FX` vs 视觉 `Effects`、`voice-clean`/`Even Out Levels`、`Voiceover Carve` 必须挂在音乐轨、`+12 dB` 上限）
  - `docs/shared/hyperframes-docs/studio/assets-and-blocks.md`（`caption-overrides.json`、`.hyperframes/render-variables.json`、`Use this template`）
  - `docs/shared/hyperframes-docs/studio/export.md`（MP4 / WebM / MOV ProRes、Renders 队列）
  - `docs/shared/hyperframes-docs/guides/webmcp.md`（`document.modelContext` 而非 `navigator.modelContext`、12 个工具、5 级回执 `refused`/`dispatched`/`saved`/`verified`/`failed`、Topology Lens）
- **组件复用**：采用 `HfSeriesShell`、`HfCaptionBar`、`HfChapterIntro`、`HfTerminalWindow`、`HfTimelineMock`、`HfSplitCompare`。
