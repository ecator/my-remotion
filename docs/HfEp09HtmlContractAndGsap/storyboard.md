# HfEp09HtmlContractAndGsap · 分镜说明（Storyboard）

> **剧集**：EP09 ·《解剖 HyperFrames 工程：HTML Schema、时间属性与确定性寻址渲染》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · HTML Schema 最小契约、45 秒超时坑与嵌套子组合
- **组件**：`Scene01HtmlSchemaAndSubcomps.tsx`
- **视觉设计**：`HfChapterIntro` 开篇后左侧用 `HfCodeWindow` 解剖 Root 必选属性（`data-composition-id`, `data-start`, `data-width`, `data-height`, `data-duration`, `data-no-timeline` 防 45s 超时）；右侧展示 `data-composition-src` + `<template>` 封装（根文件禁套 `<template>`）与 `window.__hyperframes.assetUrl()`。

## Scene 02 · `data-*` 时间属性、图层遮挡与 HTML 解析惨案
- **组件**：`Scene02DataAttrsAndLayerTraps.tsx`
- **视觉设计**：`HfSplitCompare` 正反对比四大工程陷阱：相对 `data-start` vs 废弃 `data-end`/`data-layer`、`data-track-index` vs `z-index` + `isolation: isolate`、`data-media-start` vs `data-playback-start`、以及严禁自闭合 `<video />` / `<hf-audio-group />`。

## Scene 03 · 暂停 GSAP 寻址与 Frame Adapters
- **组件**：`Scene03GsapAndFrameAdapters.tsx`
- **视觉设计**：左侧 `HfCodeWindow` 展示 `document.fonts.load` 就绪后创建 `gsap.timeline({ paused: true })` 并注册至 `window.__timelines`；右侧展示 `FrameAdapter`、`createGSAPFrameAdapter`、`registerFrameSource` 与 `createFilmBridge` 多运行时接入架构。

## Scene 04 · 确定性渲染三大禁令
- **组件**：`Scene04ThreeDeterminismLaws.tsx`
- **视觉设计**：三列红框禁令卡（禁 `Date.now` / `requestAnimationFrame`、禁 `Math.random`、禁渲染期未锁定 `fetch` / JS 控媒体 / CSS `zoom`），底部亮起确定性纯函数渲染等式。

## Scene 05 · 质量保障三剑客（Doctor / Lint / Check）
- **组件**：`Scene05QualityGatesTrio.tsx`
- **视觉设计**：三列门禁流水线卡：`hyperframes doctor`、`@hyperframes/lint`、`hyperframes check`（标注 `8 fps` 工艺采样、`.motion.json`、WCAG 对比度、`--safe-zone` 与 OpenCV 人脸防遮挡）。
