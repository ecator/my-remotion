# HfEp01IntroAndQuickstart · 需求与修改记录

## 1. 视频基本信息

- **视频标识（`<Composition id>` / 目录名）**：`HfEp01IntroAndQuickstart`
- **系列位置**：《HyperFrames 全栈百科》12 集系列 · 第 1 集（EP01）
- **标题**：重新定义网页转视频：什么是 HyperFrames 与三大起步路径
- **参考源文档**：
  - [docs/shared/hyperframes-series-plan.md](../shared/hyperframes-series-plan.md)
  - [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
  - 官方文档：`introduction.md`、`quickstart.md`、`concepts/index.md`、`faq.md`、`guides/with-claude-code.md`、`guides/mcp.md`、`guides/free-agents.md`、`guides/skills.md`

## 2. 文件对照表

| 类别 | 路径 | 说明 |
| :--- | :--- | :--- |
| **脚本原稿** | `docs/HfEp01IntroAndQuickstart/script.md` | 5 大章节旁白全文、视觉文案与音频参数 |
| **分镜说明** | `docs/HfEp01IntroAndQuickstart/storyboard.md` | 逐场时间轴、布局图与动效规范 |
| **跨集公共组件** | `src/components/hyperframes/` | `HfSeriesShell`、`HfCodeWindow`、`HfTerminalWindow`、`HfCaptionBar`、`tokens.ts` 等 |
| **主视频组件** | `src/videos/HfEp01IntroAndQuickstart/index.tsx` | EP01 顶层组件与 Zod Schema |
| **字幕与时间轴数据** | `src/videos/HfEp01IntroAndQuickstart/captions.ts` | 5 个章节的 `@remotion/captions` 词组级时间戳与各场景精确帧长 |
| **子场景组件** | `src/videos/HfEp01IntroAndQuickstart/Scene01~05*.tsx` | 5 个独立章节场景组件 |
| **配音与 BGM 素材** | `public/HfEp01IntroAndQuickstart/ep01_s01~s05_voice.mp3`、`public/shared/bgm/hf_tech_ambient.mp3` | 中文 TTS 配音与跨集通用环境科技 BGM |

## 3. 修改记录

| 日期 | 修改内容 |
| :--- | :--- |
| 2026-11-23 | 初始化 EP01 脚本 `script.md`、分镜 `storyboard.md` 与工程开发实现 |
| 2026-11-24 | 修复底部配音字幕条（`HfCaptionBar`）位置过靠上、遮挡主舞台卡片底部的问题：将 `HfSeriesShell` 主舞台容器 `stageBottom: 114px` 与 `HfCaptionBar` 的画布底边距 `captionBottomFromCanvas: 44px` 统一解算（消除 `<Sequence>` 在主舞台容器内叠加的 `112px` 垂直偏移），使字幕条精确落位于主舞台下方、底部章节进度条上方的专属安全区（距 1080p 画布底边 `44px`） |
