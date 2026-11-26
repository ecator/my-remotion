# HfEp07AudioVoiceAndCaptions · 脚本原稿

> **剧集**：EP07 / 共 12 集 ·《声音与字幕工程：TTS 配音、10000+ 曲库、自动闪避与 91 款花字》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 20 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`prompting/{media-and-audio,captions-catalog}.md`、`guides/{media,video-components,voice-and-audio,remove-background}.md`、`reference/{audio-effects,speed-ramps}.md`

---

## 1. 创作概念与叙事弧线

本集深入 HyperFrames 声音工程与动态字幕底层，彻底讲透如何在纯 HTML 中无损承载广播级 DAW 混音、抠像花字与平滑变速：
1. **配音级联与音乐音效资源库**：梳理 TTS 自动降级链（HeyGen → ElevenLabs → 本地免费 Kokoro 54 款声线）与 Gemini TTS，以及 10,000+ HeyGen 曲库、19 款内置 SFX 与 Openverse 版权署名规范。
2. **四大音频 HTML 属性与双时钟陷阱**：解剖 `data-fx-chain`、`data-automation`、`data-fx-carve`（必须挂在音乐轨而非人声轨，且 JSON 属性必须双引号配合 `&quot;` 转义）和 `data-audio-group` / `<hf-audio-group>`；讲清切片局部时钟与总线全局时钟（`t: 0`）差异、首点向前回溯（backward-hold）陷阱、`+12 dB` 增益上限与 `-3 dBTP` `truepeak` 母带目标。
3. **16 效果器、22 预设与不可自动化边界**：盘点信号链 4 大类别与 4 条音频 Lint 规则（如 `audio_attribute_unreadable`、`audio_carve_ungrouped_sources`），重点标出 `compressor`、`limiter`、`truepeak`、`gate`、`bitcrush`、`pitchshift` 等 Worklet 效果器不支持自动化包络（静默无效）的限制。
4. **本地人像抠像（`remove-background`）与 91 款花字及代码块**：解析 `u2net_human_seg` 模型（仅限人像，非物体/产品）与 `--background-output` 生成反相 Alpha 挖空底板、对包裹 `<div>` 做动画而非直接动 `<video>`；串联 91 款 `caption-*` 花字组件选型法则与 `code-typing`/`code-diff`/`code-morph` 代码动效块。
5. **统一变速曲线（Speed Ramps）**：展示在 `data-automation` 中写入 `target: "rate"` 对数变速曲线，由 `sourceTimeAt` 同步驱动预览、编辑器与渲染。

---

## 2. 分章节旁白文稿（中文配音）

### Scene 01 · TTS 级联配音、10,000+ 曲库与 19 款音效（`ep07_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第七集。画面决定观众愿不愿意点进来，声音和字幕决定观众愿不愿意看到底。先看配音与音乐管线：在 HyperFrames 里，你只需用自然语言描述情绪与性别，底层语音引擎会按优先级自动级联选择：配置了账号或密钥时优先调用 HeyGen 顶级声线或 ElevenLabs，也可以接入 Gemini TTS；如果没有任何云端密钥，框架会自动无缝回落到本机免费运行的 Kokoro 引擎，内置整整 54 款多语言声线，完全零成本离线合成。配乐与音效方面，HeyGen 会员可检索超过 10,000 首正版背景乐，本地则永久内置 19 款高频转场与点击 SFX 音效，还能从 Openverse 检索开源音效，按需自动保留版权署名。只需要在 `<audio>` 标签加上原生 `loop` 属性，短配乐就能在预览与导出中无缝铺满整段时长。

### Scene 02 · 四大音频 HTML 属性、双时钟与自动闪避（`ep07_s02_voice.mp3`）

- **旁白原文**：
  > HyperFrames 最惊艳的工程设计，是把整套专业 DAW 混音台直接无损写进四个 HTML 属性里，不需要任何外部工程文件：`data-fx-chain` 按信号顺序串起均衡器、压缩器与限制器；`data-automation` 存储音量与参数随时间演进的包络曲线，音量上限高达 `+12 dB`，母带总线则推荐通过 `truepeak` 压在 `-3 dBTP` 防削波；`data-fx-carve` 记录智能人声频段雕刻与自动闪避设置；`data-audio-group` 则把多段零散旁白汇聚到 `<hf-audio-group>` 总线上统一混音。这里必须牢记三大避坑铁律：第一，`data-fx-carve` 永远挂在背景音乐轨上而非人声轨，而且所有音频 JSON 属性必须使用双引号并转义 `&quot;`，用单引号会导致雕刻脚本读不到已有链；第二，切片上的自动化 `t: 0` 是相对该切片起点，而 `<hf-audio-group>` 总线的 `t: 0` 是从整部视频 0 秒起算；第三，包络首点会向前回溯保持，音乐早于人声响起时必须在 `t: 0` 显式补一个无衰减起点。

### Scene 03 · 16 效果器、22 预设与 Worklet 不可自动化边界（`ep07_s03_voice.mp3`）

- **旁白原文**：
  > 深入混音机架，HyperFrames 内置 16 种音频效果器，分为滤波 Filters、动态 Dynamics、非线性染色 Non-linear 与空间时间 Time 四大族，并封装了 22 个开箱即用的命名预设，比如一键修复人声的 `voice-clean`、广播质感 `voice-broadcast` 以及无线电、老磁带等趣味声效。遵循「先减法滤除低频嗡鸣与闷浊、再做压缩均平、接着雕刻背景乐、最后放饱和与限制器封顶」的信号顺序，效果立竿见影。但开发者写自动化曲线时一定要避开一个静默陷阱：`compressor`、`limiter`、`truepeak`、`gate`、`bitcrush` 与 `pitchshift` 这类整体配置的音频 Worklet 效果器，其内部参数全部不支持自动化包络，硬写上去不会报错但会静默无效；想动态控制压缩力度，正确做法是在压缩器前面加一级可自动化的 `gain` 节点。渲染前务必跑通 4 条音频 Lint 规则，比如拦截语法损坏的 `audio_attribute_unreadable` 和提醒先打组的 `audio_carve_ungrouped_sources`。

### Scene 04 · 本地抠像、91 款花字目录与屏幕代码动效（`ep07_s04_voice.mp3`）

- **旁白原文**：
  > 搞定声音，再看高颜值动态字幕与人物遮挡大字。想做出巨型关键词从主讲人背后穿插而过的电影感画面，只需在终端免费运行一行 `npx hyperframes remove-background subject.mp4 -o subject.webm --background-output plate.webm`，一次生成透明人物前景与带人形挖空的反相 Alpha 背景底板，再把大字夹在两层之间。注意它的底层本地模型 `u2net_human_seg` 专为清晰人像设计，对非人物产品或手持深色麦克风容易抠漏；并且移动人物位置时，一定要给外层包裹的 `<div>` 做动画，绝不要直接对 `<video>` 本身做位移动画。在 91 款官方 Captions Catalog 花字组件中，按调性选型：高能爆款选 `caption-kinetic-slam` 或 `caption-highlight`，极客风格选 `caption-glitch-rgb`，复杂背景用 `caption-blend-difference` 反相防吞字，且同一章节只守一种花字身份、仅强调关键词；演示代码则搭配 `code-typing`、`code-diff` 与 `code-morph`。

### Scene 05 · 一条 `rate` 曲线统一变速：Speed Ramps（`ep07_s05_voice.mp3`）

- **旁白原文**：
  > 本集最后解锁剪辑师最爱的节奏利器：Speed Ramps 平滑变速曲线。在 HyperFrames 里，你不需要额外引入复杂插件，只需在 `<video>` 或 `<audio>` 的 `data-automation` 属性里新增一条 `target` 为 `"rate"` 的曲线，写上各时间点的倍率节点和弯曲度 `curve`，速度就能在 `0.1` 倍慢动作到 `10` 倍快进之间按对数尺度丝滑过渡，比如从 `0.5` 倍到 `2` 倍的中点恰好精准经过 `1` 倍原速。最稳健的是，预览播放、浏览器编辑器滑块与最终渲染共享同一个 `sourceTimeAt` 寻址映射函数，且自动保持音频音高不变；在浏览器编辑器里还能一键套用 Montage、Hero、Bullet、Flash in 等六款变速预设，让快慢镜卡点所见即所得。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / TTS 级联配音、10,000+ 曲库与 19 款音效` | `[AUDIO PIPELINE]` | `HfChapterIntro` 开篇 $\rightarrow$ TTS 三级自动降级瀑布（HeyGen → ElevenLabs → Kokoro 54 声线 + Gemini TTS）+ 音频资产库（10,000+ 曲库 / 19 SFX / Openverse / `loop`） |
| **Scene 02** | `02 / 四大音频 HTML 属性、双时钟与自动闪避` | `[HTML DAW MIX]` | 四大属性架构卡（`data-fx-chain` / `data-automation` / `data-fx-carve` 必双引号 `&quot;` / `data-audio-group` + `<hf-audio-group>`）+ `+12 dB` & `-3 dBTP` + 双时钟与首点回溯避坑 |
| **Scene 03** | `03 / 16 效果器、22 预设与 WORKLET 边界` | `[FX & LINT]` | 左栏信号链顺序 + 22 预设 + 4 条音频 Lint 规则（`audio_attribute_unreadable` / `audio_carve_ungrouped_sources`）；右栏红框警示不可自动化 Worklet 列表与前置 `gain` 绕法 |
| **Scene 04** | `04 / 本地抠像、91 款花字目录与代码动效` | `[CAPTIONS & CUTOUT]` | 左侧 `HfTerminalWindow`（`remove-background` + `--background-output`、`u2net_human_seg` 仅人像限制与包裹 `<div>` 动效法则）+ 右侧 91 款 `caption-*` 调性映射与 `code-*` 动效块 |
| **Scene 05** | `05 / SPEED RAMPS：一条 RATE 曲线统一变速` | `[SPEED RAMPS]` | 左侧 `HfCodeWindow` 展示 `data-automation` `target: "rate"` JSON 写法 + 右侧 `HfTimelineMock` 对数变速曲线、`0.1×–10×`、`sourceTimeAt` 与 6 大预设 |
