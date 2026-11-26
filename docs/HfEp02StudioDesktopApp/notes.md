# HfEp02StudioDesktopApp · 制作与文档核对笔记

- **剧集编号**：`EP.02` / `HfEp02StudioDesktopApp`
- **文档依据**：
  - `docs/shared/hyperframes-docs/studio-app/index.md`（Mac/Win/Linux 安装、`.hyperframes-studio` 存储路径）
  - `docs/shared/hyperframes-docs/studio-app/first-video.md`（Home `Make`/`Reference`/`Script`、4-part `Hook`/`Proof`/`Turn`/`Call to action`）
  - `docs/shared/hyperframes-docs/studio-app/connect-your-agent.md`（6 大 Agent、`Auto` vs `Full access`、OpenCode & Copilot 必须 `Full access`）
  - `docs/shared/hyperframes-docs/studio-app/workspace.md`（`@`/`#`/`/`、91 款字幕样式、Script 文档式剪辑、`Pending video edits`、Framey）
  - `docs/shared/hyperframes-docs/studio-app/edit-with-the-agent.md`（`Enter` steer vs `Ctrl+Enter` queue、`V`/`A`/`D`/`C`、Apple Silicon `Cut out object here`）
  - `docs/shared/hyperframes-docs/studio-app/brand-kits.md`（`Scan my site`、5 项资产、复制到项目 `assets/brand-kit`）
  - `docs/shared/hyperframes-docs/studio-app/video-clips.md`（HeyGen Video 1 5–60s、480p/768p、`Match a look`/`Copy a movement`、7.8 MB 1080p 报错需降 720p）
  - `docs/shared/hyperframes-docs/studio-app/reference-video.md`（`Copy editing style` vs `Video brief`、`What to swap`、`Show original` 同步分屏）
  - `docs/shared/hyperframes-docs/studio-app/existing-project.md`（Mac `npx hyperframes open` 与 `npx hyperframes catch-up` 生效边界、`Import projects`）
  - `docs/shared/hyperframes-docs/studio-app/export.md`（`This Mac` 无限免费 vs `Cloud` Free 每月 5 次、200 MB 上限）
  - `docs/shared/hyperframes-docs/studio-app/share.md`（4 级访问权限、`Add this version`、`Turn off link`）
- **组件复用**：采用 `HfSeriesShell`、`HfCaptionBar`、`HfChapterIntro`、`HfTerminalWindow`、`HfSplitCompare`，全部动画严格基于 `useCurrentFrame()` 与 `useVideoConfig().fps`。
