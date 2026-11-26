# HfEp05MediaDataAndDevFlows · 制作与文档核对笔记

- **剧集编号**：`EP.05` / `HfEp05MediaDataAndDevFlows`
- **文档核对要点**：
  - `guides/captions-and-recuts.md`：先剪气口停顿再加字幕、`hyperframes transcribe`（Parakeet / Whisper）、`Rail` vs 单主体 `Embed`、亮底防吞字。
  - `guides/music-to-video.md`：`hyperframes beats` & `hyperframes audio`、`"pick the best 20 seconds"`、环境乐平滑流动。
  - `prompting/data-and-maps.md`：`data-chart`、`apple-money-count`（避 `$0` 开头）、6 地图块（`us-map`, `us-map-bubble`, `us-map-flow`, `us-map-hex`, `spain-map`, `world-map`）+ `nyc-paris-flight`、烘焙本地几何无运行时 CDN 拉取。
  - `guides/pr-to-video.md`：`code-diff` / `code-morph` / `code-typing`、先讲价值后 2–4 个 Hunk。
  - `guides/slideshow.md` + `guides/general-video.md`：`/slideshow`、`hyperframes present`（端口 `3004`）、`hyperframes render` 静默只渲 slide 1 陷阱（用 `present` / `snapshot`）、`general-video` 三协作模式。
