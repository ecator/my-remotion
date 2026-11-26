# HfEp05MediaDataAndDevFlows · 脚本原稿

> **剧集**：EP05 / 共 12 集 ·《万物皆可成片：口播粗剪、音乐卡点、数据地图、PR 视频与幻灯片》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 30 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`guides/{captions-and-recuts,music-to-video,pr-to-video,slideshow,general-video}.md`、`prompting/data-and-maps.md`

---

## 1. 创作概念与叙事弧线

作为十大工作流实战的下篇，本集展示 HyperFrames 如何把实拍口播、音乐音轨、CSV 表格、GitHub Pull Request 以及交互式演讲大纲全自动转化为可编辑视频或可演示交互文稿：
1. **口播字幕与智能粗剪（Captions & Recuts）**：强调先剔除气口停顿再生成字幕防止漂移，介绍 `hyperframes transcribe`（支持 Parakeet / Whisper 引擎），辨析 `Rail` 常规逐字字幕轨道与单主体高光 `Embed` 人物背后大字（严禁多主体混剪或亮底发白吞字）。
2. **音乐卡点与歌词视频（Music / Lyric Video）**：解析 `hyperframes beats` 与 `hyperframes audio` 节拍网格分析，用自然语言选段（如 `pick the best 20 seconds`）替代硬切时间戳，区分律动卡点与舒缓环境乐平滑流动。
3. **数据图表与动态地图（Data & Maps）**：串联 `data-chart`、`apple-money-count`（避开 `$0` 起跳的 `$0.0M` 尴尬）、6 大区域编码地图（`us-map` / `us-map-bubble` / `us-map-flow` / `us-map-hex` / `spain-map` / `world-map`）、`nyc-paris-flight` 航线以及自动将几何数据烘焙进本地工程的确定性机制。
4. **GitHub PR 转视频（PR to Video）**：先讲用户价值再抛核心 2–4 个代码片段，按改动类型选用 `code-diff`、`code-morph`、`code-typing`。
5. **交互式演示文稿（`/slideshow`）与定制综合视频（`general-video`）**：详解 Fragments、Branches 与 Hotspots、本地演讲命令 `npx hyperframes present`（端口 `3004`），重点预警「对 `/slideshow` 运行 `hyperframes render` 会静默只渲染第一页（slide 1）导致截断」陷阱，并收束 Custom Video 三大协作模式（`Build it for me` / `Review the story first` / `Co-direct`）。

---

## 2. 分章节旁白文稿（中文配音）

### Scene 01 · 口播字幕、智能粗剪与 Rail / Embed 法则（`ep05_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第五集，继续攻克十大工作流的后五项硬核实战。先看六号工作流：Captions & Recuts 口播粗剪与包装。把实拍访谈丢给 Agent 时，有一条必须死守的先后铁律：一定要先剪掉超过 0.8 秒的长停顿与废话，再给精剪后的片段加字幕；如果先加字幕再粗剪，时间戳就会彻底错位漂移。转录环节通过 `hyperframes transcribe` 调用 Parakeet 或 Whisper 引擎精准对齐逐词时间。画面编排上要分清两个专业概念：`Rail` 是位于人物下方的常规逐字轨道，负责承载绝大部分台词；`Embed` 则是用抠像穿插在人物背后的巨型高光词，每一拍最多只放一个最强金句，而且只适用于单人单主体镜头，遇到双人播客多主体画面必须先按说话人拆段再处理，否则抠像边缘会剧烈闪烁；面对明亮户外白底画面时，也要改用深色不透明字体防止亮底发白吞字。

### Scene 02 · 音乐节拍网格卡点与歌词视频（`ep05_s02_voice.mp3`）

- **旁白原文**：
  > 七号工作流是 Music & Lyric Video 音乐卡点与歌词视频。在这里，音轨本身就是整部视频的叙事骨架，不需要额外旁白。Agent 会先运行 `hyperframes beats` 与 `hyperframes audio` 深度剖析歌曲的 BPM、重拍落点、强弱能量曲线与乐段边界，再把你的照片、视频或动态歌词严丝合缝地卡在节拍网格上。提示词里切忌手写死板的绝对时间戳，比如强行指定截取 0 分 32 秒到 0 分 52 秒，因为硬切极易拦腰斩断乐句；正确写法是直接告诉 Agent「pick the best 20 seconds」，让分析器自动贴合音乐锚点起止。同时要区分音乐气质：鼓点鲜明的节奏型电子乐适合按小节硬切卡点并在重拍推镜；而舒缓的环境乐或抒情曲则应该顺着乐句与能量起伏平滑流动，切忌对着强行算出来的节拍器机械硬切。

### Scene 03 · 数据图表、里程碑滚动与六大动态地图（`ep05_s03_voice.mp3`）

- **旁白原文**：
  > 手头有 CSV 表格或地理指标时，就进入八号工作流：Data & Maps 数据可视化与动态地图。画图表时请明确二选一：追求省心高级排版就直接点名复用 `data-chart` 注册表组件，需要反超排名的柱状图竞赛或手绘风格则显式要求零图表库纯手写 SVG 加 GSAP。做单个核心数字滚动时，可调用经典 `apple-money-count` 组件，但要避开一个细节坑：不要写从 `$0` 数到 `$4.2M`，否则里程表起手会出现难看的 `$0.0M`，直接写数到 `$4.2M` 即可。地理场景下共有六款专职地图组件：`us-map` 区域填色、`us-map-bubble` 气泡大小、`us-map-flow` 城际连线、`us-map-hex` 等权六边形网格，以及 `spain-map` 和 `world-map`，长途航线演进则用 `nyc-paris-flight`。为遵守确定性渲染铁律，Agent 会把地图投影几何直接烘焙内嵌进本地代码，渲染期零 CDN 地理请求。

### Scene 04 · GitHub PR 转视频与三大代码动效块（`ep05_s04_voice.mp3`）

- **旁白原文**：
  > 对研发和开源团队最香的，莫过于九号工作流：GitHub PR to Video。把任意 Pull Request 链接交给 Agent，它会读取真实提交记录、代码变更和贡献者信息，并核对改动究竟处于提案、已合并还是已发布状态，绝不把未上线功能吹成已发布。拍好 PR 视频的核心秘诀是「先讲用户价值，后抛代码证据」：千万别一开场就从头到尾念完整 Diff，视频画幅里一整屏源码根本看不清，全场只需精选 2 到 4 个高可读性的核心代码片段。针对不同变更类型，要精准点名对应的官方代码块：展示增删行变化用 `code-diff`，表现架构重构前后平滑变形用 `code-morph`，演示新增命令或新接口编写则用 `code-typing`，最后在片尾自然落版版本号与仓库地址。

### Scene 05 · `/slideshow` 交互式演示文稿与定制综合视频（`ep05_s05_voice.mp3`）

- **旁白原文**：
  > 最后来看十号工作流 `/slideshow` 交互式演示文稿，以及兜底的 Custom Video 定制路径。用 `/slideshow` 制作的不是线性视频，而是支持现场点击逐条揭示 Fragments、通过热点按钮 Hotspot 跳转到可选分支 Branches、且自带演讲者备注与计时器的活态演示文稿。本地演讲只需运行 `npx hyperframes present`，在默认 `3004` 端口按 P 键即可分出观众全屏视图与讲者控台。这里有一个必须标红的致命陷阱：千万不要对 `/slideshow` 工程直接执行 `hyperframes render`！它不会报错，而是因为没有主根组合，会静默只渲染出第一页 slide 1 变成几秒截断 MP4；现场演示必须用 `hyperframes present`，要单页静态图则用 `hyperframes snapshot`。当你的需求混合了多种素材与多幕叙事时，就走 `general-video` 定制流，并在提示词里选定协作深度：全权托付 `Build it for me`、先审分镜 `Review the story first`，或全程深度共创 `Co-direct`。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / 口播字幕、智能粗剪与 RAIL / EMBED 法则` | `[WORKFLOW 06]` | `HfChapterIntro` 开篇 $\rightarrow$ 先剪停顿再字幕流程（`hyperframes transcribe` · Parakeet/Whisper）+ `HfSplitCompare`（`Rail` 常规逐字轨 vs 单主体高光 `Embed` 与多主体/亮底避坑） |
| **Scene 02** | `02 / 音乐节拍网格卡点与歌词视频` | `[WORKFLOW 07]` | `HfTerminalWindow`（`hyperframes beats` & `hyperframes audio`）+ `HfTimelineMock` 模拟节拍网格卡点 + `pick the best 20 seconds` vs 硬切时间戳对比 |
| **Scene 03** | `03 / 数据图表、里程碑滚动与六大动态地图` | `[WORKFLOW 08]` | 左栏图表与计数器（`data-chart` / `apple-money-count` / 避开 `$0` 起跳）+ 右栏 6 大地图编码矩阵（`us-map` / `us-map-bubble` / `us-map-flow` / `us-map-hex` / `spain-map` / `world-map`）+ `nyc-paris-flight` 与烘焙本地几何说明 |
| **Scene 04** | `04 / GITHUB PR 转视频与三大代码动效块` | `[WORKFLOW 09]` | 三大代码块卡矩阵（`code-diff` 增删 / `code-morph` 重构变形 / `code-typing` 新增编写）+ 叙事铁律（先用户价值后 2–4 个关键 Hunk + 状态核验） |
| **Scene 05** | `05 / /SLIDESHOW 交互演示与定制综合视频` | `[WORKFLOW 10]` | 左栏 `/slideshow`（Fragments / Branches / Hotspots、`npx hyperframes present` 端口 `3004` + 致命红框预警：`hyperframes render` 静默只渲 slide 1，改用 `present` / `snapshot`）+ 右栏 `general-video` 三协作模式（`Build it for me` / `Review the story first` / `Co-direct`） |
