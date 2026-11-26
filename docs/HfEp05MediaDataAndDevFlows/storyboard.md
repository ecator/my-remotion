# HfEp05MediaDataAndDevFlows · 分镜说明（Storyboard）

> **剧集**：EP05 ·《万物皆可成片：口播粗剪、音乐卡点、数据地图、PR 视频与幻灯片》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · 口播字幕、智能粗剪与 Rail / Embed 法则
- **组件**：`Scene01CaptionsAndRecuts.tsx`
- **视觉设计**：`HfChapterIntro` 开篇后展示顺序铁律（先剪 >0.8s 停顿 → 再 `hyperframes transcribe` 用 Parakeet/Whisper 加字幕）+ `HfSplitCompare` 对比 `Rail`（常规逐字轨道）与 `Embed`（单主体高光大字、严禁多主体播客、亮底用深色不透明字）。

## Scene 02 · 音乐节拍网格卡点与歌词视频
- **组件**：`Scene02MusicBeatGrid.tsx`
- **视觉设计**：上部 `HfTimelineMock` 演示真实 `hyperframes beats` 节拍标记卡点；下部左右分栏对比 `hyperframes beats` / `hyperframes audio` 命令、自然语言选段（`"pick the best 20 seconds"` 避开硬切时间戳）以及律动硬切 vs 环境乐平滑流动。

## Scene 03 · 数据图表、里程碑滚动与六大动态地图
- **组件**：`Scene03DataAndMaps.tsx`
- **视觉设计**：左栏展示 `data-chart` vs 纯手写 SVG+GSAP 与 `apple-money-count`（避开 `$0` 起跳坑）；右栏展示 6 大地图编码块（`us-map` / `us-map-bubble` / `us-map-flow` / `us-map-hex` / `spain-map` / `world-map`）+ `nyc-paris-flight` 及「几何烘焙内嵌防 CDN 违规」提示条。

## Scene 04 · GitHub PR 转视频与三大代码动效块
- **组件**：`Scene04GitHubPrToVideo.tsx`
- **视觉设计**：顶部强调「先用户价值，后 2–4 个关键 Hunk，严禁混同提案/合并/发布状态」；主体三列展示 `code-diff`、`code-morph`、`code-typing` 适用场景及版本+仓库尾卡规范。

## Scene 05 · `/slideshow` 交互式演示文稿与定制综合视频
- **组件**：`Scene05SlideshowAndCustom.tsx`
- **视觉设计**：左侧 `/slideshow` 架构（Fragments / Branches / Hotspots、`npx hyperframes present` 端口 `3004`）+ 醒目红框警示「切勿执行 `hyperframes render`：静默截断只渲第一页 slide 1，应使用 `present` 或 `snapshot`」；右侧展示 `general-video` 三种协作模式（`Build it for me` / `Review the story first` / `Co-direct`）。
