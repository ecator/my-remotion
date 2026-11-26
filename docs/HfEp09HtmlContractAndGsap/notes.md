# HfEp09HtmlContractAndGsap · 制作与文档核对笔记

- **剧集编号**：`EP.09` / `HfEp09HtmlContractAndGsap`
- **文档核对要点**：
  - Root 契约：`data-composition-id`, `data-start`, `data-width`, `data-height`, `data-duration`, `data-no-timeline`（漏写卡 45 秒超时）。
  - 嵌套子组合：`data-composition-src`, `<template>`（根文件禁套）, `window.__hyperframes.assetUrl()`。
  - 避坑：`data-track-index` != `z-index` + `isolation: isolate`、废弃 `data-end`/`data-layer`、`data-media-start` vs `data-playback-start`、禁用自闭合 `<video />`/`<hf-audio-group />`。
  - 寻址与适配：`document.fonts.load` 先于 `window.__timelines`、`gsap.timeline({ paused: true })`、`FrameAdapter`、`createGSAPFrameAdapter`、`registerFrameSource`、`createFilmBridge`。
  - 三大禁令：禁 `Date.now`/`requestAnimationFrame`、`Math.random`、渲染期 `fetch` 与 CSS `zoom`。
  - 质量门禁：`hyperframes doctor`、`@hyperframes/lint`、`hyperframes check`（`8 fps`、`.motion.json`、WCAG、`--safe-zone`、OpenCV 人脸）。
