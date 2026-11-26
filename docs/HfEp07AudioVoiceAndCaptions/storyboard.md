# HfEp07AudioVoiceAndCaptions · 分镜说明（Storyboard）

> **剧集**：EP07 ·《声音与字幕工程：TTS 配音、10000+ 曲库、自动闪避与 91 款花字》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · TTS 级联配音、10,000+ 曲库与 19 款音效
- **组件**：`Scene01VoiceCascadeAndLibrary.tsx`
- **视觉设计**：`HfChapterIntro` 开篇后展示左栏 TTS 级联瀑布（HeyGen → ElevenLabs → Kokoro 54 款本地免费声线 + Gemini TTS）与右栏音频资源库（10,000+ HeyGen 音乐、19 款本地 SFX、Openverse 署名规范、`<audio loop>`）。

## Scene 02 · 四大音频 HTML 属性、双时钟与自动闪避
- **组件**：`Scene02FourAudioAttrsAndClocks.tsx`
- **视觉设计**：上部 4 属性结构卡（`data-fx-chain` / `data-automation` / `data-fx-carve` / `data-audio-group` + `<hf-audio-group>`）；下部 `HfSplitCompare` 对比双时钟（切片 `t: 0` = `data-start` vs `<hf-audio-group>` `t: 0` = 0s）+ 首点回溯陷阱 + 双引号 `&quot;` 规范 + `+12 dB` / `-3 dBTP truepeak` 指标。

## Scene 03 · 16 效果器、22 预设与 Worklet 不可自动化边界
- **组件**：`Scene03FxChainWorkletsAndLint.tsx`
- **视觉设计**：左栏展示 4 大信号链家族（16 效果器）、22 预设与 4 条音频 Lint 规则（`audio_attribute_unreadable` / `audio_carve_ungrouped_sources`）；右栏展示不可自动化 Worklet 列表（`compressor`, `limiter`, `truepeak`, `gate`, `bitcrush`, `pitchshift`）与前置 `gain` 替代方案。

## Scene 04 · 本地抠像、91 款花字目录与代码动效
- **组件**：`Scene04CutoutCaptionsAndCode.tsx`
- **视觉设计**：左侧 `HfTerminalWindow`（`remove-background` + `--background-output`）配 `u2net_human_seg` 人像专用限制与外层 `<div>` 动画警示；右侧展示 91 款 `caption-*` 调性选型矩阵与 `code-typing` / `code-diff` / `code-morph`。

## Scene 05 · Speed Ramps 平滑变速曲线
- **组件**：`Scene05SpeedRamps.tsx`
- **视觉设计**：左栏 `HfCodeWindow` 展示 `data-automation` `target: "rate"` 代码；右栏 `HfTimelineMock` 演示对数速率曲线（`0.1×–10×`）、`sourceTimeAt` 同步与 6 款编辑器变速预设。
