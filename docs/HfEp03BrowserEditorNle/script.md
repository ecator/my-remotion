# HfEp03BrowserEditorNle · 脚本原稿

> **剧集**：EP03 / 共 12 集 ·《源码级可视化剪辑：Browser Editor 浏览器编辑器与时间轴精修》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 00 秒 ~ 4 分 30 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`docs/shared/hyperframes-docs/studio/*.md`（6 篇）与 `docs/shared/hyperframes-docs/guides/webmcp.md`

---

## 1. 创作概念与叙事弧线

本集承接 EP02 的桌面端体验，面向习惯在终端运行 Coding Agent、同时需要像 Premiere Pro 与 After Effects 一样对画布、关键帧、剪辑点与混音进行像素级微调的开发者和剪辑师，全面解剖 **`npx hyperframes preview`** 驱动的 **Browser Editor 浏览器编辑器**：
1. **定位与四栏源码级工作台**：厘清 Browser Editor 默认端口 `3002` 与桌面端的协作分工，展示所见即源码的实时写回机制，以及 `⌘K` 一键把选中元素上下文复制回终端 Agent 的桥梁。
2. **画布操纵、图层遮挡与关键帧录制**：讲透「轨道管时间、Layers 与 `z-index` 管前后遮挡」，重点拆解默认开启的 `Auto-record manual edits as keyframes` 避坑法则、`Option/Alt` 平移整条运动路径、`K` 打帧与 `R` 手势实时录制（Gesture Recording）。
3. **专业非线性时间轴（NLE）与修剪属性**：梳理 `J/K/L`、`I/O` 播控体系，辨析 `B` 剃刀工具与 `S` 播放头分割的区别，演示 `N` 吸附、`[`/`]` 左右全选、`Linked Selection`、`Ripple edit` 以及边缘修剪时自动写回的 `data-media-start` 与 `data-playback-start`。
4. **混音机架、花字覆盖、变量模板与导出门禁**：区分 `Audio FX` 音频机架与视觉 `Effects` 面板，剖析挂在音乐轨上的 `Voiceover Carve` 人声雕刻与 `+12 dB` 包络上限，讲解 `caption-overrides.json`、`.hyperframes/render-variables.json`、内置 Lint / `check` 以及 MP4/WebM/MOV ProRes 导出。
5. **前沿黑科技 WebMCP**：揭秘浏览器内 `document.modelContext`（警惕而非 `navigator.modelContext` 垫片）暴露的 12 个 Studio 工具、5 级回执状态与 Topology Lens 实时协作视觉反馈。

---

## 2. 分章节旁白文稿（中文配音）

> **配音分段原则**：按 5 个独立章节（Scene 01 ~ Scene 05）分别生成 `.mp3` 配音文件与局部时间轴字幕（`startMs` 均从该章节音频 `0ms` 起算），每个章节包裹在独立的 `<Sequence>` 中，确保音画与字幕 100% 同步。

### Scene 01 · 启动架构、四栏布局与 ⌘K 人机协作（`ep03_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎回到 HyperFrames 全栈百科第三集。上一集我们体验了零代码的桌面工作站，但如果你习惯让 Claude Code 或 Codex 在终端里写代码，同时又想亲手微调每一个像素和剪辑点，Browser Editor 浏览器编辑器就是你的终极武器。在任意工程目录下运行 `npx hyperframes preview`，它会在本地默认 3002 端口启动可视化剪辑台。界面采用经典的四栏布局：左侧管理 Compositions、Assets、Code 源码与左下角 Lint 检查，中间是实时画布预览，右侧是 Design、Layers、Variables 与 Renders 面板，底部则是虚拟化渲染的非线性时间轴。这里最核心的哲学是双向写回：你在画布上拖拽的任何改动都会直接保存进 HTML 文件，绝不产生孤立的工程副本。遇到跨场景大改时，按下 `⌘K` 即可自动打包当前选中元素的上下文，一键复制成精准指令交给终端里的 Agent。

### Scene 02 · 画布操纵、Layers 遮挡与关键帧手势录制（`ep03_s02_voice.mp3`）

- **旁白原文**：
  > 进入画布精修，首先要牢记一条核心铁律：时间轴上的轨道只决定出现时间，画面谁盖住谁是由右侧 Layers 面板和 CSS `z-index` 决定的。在画布上，你可以直接拖动元素缩放、旋转、裁剪，按 G 键开启网格对齐，或者用 `⌘G` 将多个元素编组。准备调动画时，请务必盯紧时间轴工具栏里的 `Auto-record manual edits as keyframes` 开关：它默认处于开启状态，意味着你在播放头处随手挪动位置都会自动变成关键帧动画；如果你只想全局静态修位置，一定要先把它关掉。需要手打动画时，选中元素按 K 键即可在当前帧增删关键帧，按住 `Option/Alt` 拖拽元素则能整体平移整条运动路径。更酷的是按 R 键开启 Gesture Recording 手势录制：边播放边拖动记录位移、滚轮记录景深、按住 Shift 拖动还能实时录下 3D 旋转，而代码生成的循环动效也能通过 `Unroll to edit` 展开成普通关键帧继续微调。

### Scene 03 · 专业非线性时间轴（NLE）与修剪源码补偿（`ep03_s03_voice.mp3`）

- **旁白原文**：
  > 接下来看底部虚拟化时间轴，它的快捷键体系完全向专业非编软件看齐。播放控制方面，空格启停，J/K/L 负责倒放、暂停与正放，按 I 和 O 设定工作区出入点，按问号键随时呼出完整快捷键表。剪辑工具上，很多新手容易混淆 B 键和 S 键：按 V 键切回选择工具，按 B 键是开启 Razor 剃刀工具，需要用鼠标去点击切片，配合 Shift 点击可一次切穿所有轨道；而按 S 键则是直接执行 Split，立刻在播放头位置把当前选中的切片一分为二。工具栏还集成了 N 键吸附对齐、中括号键 `[` 和 `]` 一键选中播放头左侧或右侧全部片段、`Linked Selection` 音画联动，以及默认开启的 `Ripple edit` 波纹删除自动填补空隙。拖拽切片左边缘裁剪入点时，编辑器还会精准写回源码补偿：普通音视频媒体写入 `data-media-start`，而嵌套子组合则写入 `data-playback-start`，确保音画起止点分毫不差。

### Scene 04 · 混音机架、花字覆盖、变量交付与多格式导出（`ep03_s04_voice.mp3`）

- **旁白原文**：
  > 浏览器编辑器同样内置了完整的音频混音台与交付工作流。选中音频片段，在右侧面板务必认准 `Audio FX` 音频机架，不要误点旁边的视觉 `Effects` 面板。你可以一键套用 `voice-clean`、`voice-broadcast` 等预设，或用 `Even Out Levels` 自动拉平人声起伏；背景音乐压人声时，千万记得把 `Voiceover Carve` 挂在音乐轨上而非人声轨，它会自动写入标准的 peaking 滤波与增益包络线，让背景乐在人声间隙自然回弹，而且音量包络上限可达 `+12 dB`。对于字幕与模板，在画布微调单字位置和颜色会自动保存进 `caption-overrides.json`，绝不污染字幕原稿；在 Variables 面板预览完参数后，点击 Use this template 会把参数写入 `.hyperframes/render-variables.json` 并复制安全渲染命令。最后点击左下角 Lint 与命令行 `npx hyperframes check` 双重把关，在 Renders 面板即可导出分享用的 MP4、透明通道 WebM 或后期母版 MOV ProRes。

### Scene 05 · WebMCP 黑科技：让浏览器内 Agent 直接驱动 Studio（`ep03_s05_voice.mp3`）

- **旁白原文**：
  > 最后压轴介绍 Browser Editor 最前沿的能力：WebMCP 浏览器内智能体协作。它和第一集讲的云端 Hosted MCP 不同，是让运行在浏览器里的 AI Agent 直接看懂并操作你眼前打开的编辑器。编辑器加载后，会通过标准 API `document.modelContext` 异步注册整整 12 个工具；开发者务必避开一个高频文档陷阱：真实规范是 `document.modelContext`，切勿误用某些兼容垫片才提供的 `navigator.modelContext`。这 12 个工具包含 3 个读取工具：`studio_look` 获取带源码句柄的树结构、`studio_inspect` 读取完整样式与能力、`studio_frame` 在任意时间点截出 PNG 让 Agent 亲眼验收；以及 9 个写入与动画工具。每次写入前 Agent 会先调用 `studio_select` 与你共享选区，画布上会亮起 Topology Lens 事务光框，每次操作还会返回 `refused`、`dispatched`、`saved`、`verified`、`failed` 五级诚实回执，确保人机同屏修改既透明又可回溯。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / 启动架构、四栏布局与 ⌘K 人机协作` | `[BROWSER EDITOR]` | `HfChapterIntro` 开篇 $\rightarrow$ `HfTerminalWindow`（`npx hyperframes preview` → `localhost:3002`）+ Browser Editor 四栏线框拓扑图 + `⌘K` Copy-to-Agent 双向写回流 |
| **Scene 02** | `02 / 画布操纵、LAYERS 遮挡与关键帧手势录制` | `[CANVAS & MOTION]` | 左侧画布与 Layers（`z-index` 决定遮挡 vs 轨道管时间）+ 醒目琥珀警戒框 `Auto-record manual edits as keyframes (默认 ON)` + 右侧关键帧 `K`、`Option/Alt` 整路径拖拽与 `R` Gesture Recording 动作映射卡 |
| **Scene 03** | `03 / 专业非线性时间轴（NLE）与修剪源码补偿` | `[NLE TIMELINE]` | 上部 `HfTimelineMock`（展示多轨切片、播放头、工作区 `I/O`、`data-media-start` vs `data-playback-start` 标注）+ 下部快捷键速查矩阵（`J/K/L`、`V` vs `B` 剃刀 vs `S` 播放头分割、`N`、`[`/`]`、`Linked` / `Ripple`） |
| **Scene 04** | `04 / 混音机架、花字覆盖、变量交付与导出` | `[MIX & DELIVER]` | 左栏 `HfSplitCompare`（`Audio FX` 音频机架 + `Voiceover Carve` 挂音乐轨 + `+12 dB` 上限 vs 视觉 `Effects` 面板隔离）+ 右栏工程交付闭环（`caption-overrides.json` / `.hyperframes/render-variables.json` / `Lint & check` / MP4・WebM・MOV ProRes） |
| **Scene 05** | `05 / WEBMCP：让浏览器内 AGENT 驱动 STUDIO` | `[WEBMCP PROTOCOL]` | 顶部 API 避坑警示（`✓ document.modelContext` vs `✗ 非 navigator.modelContext`）+ 中央 12 工具分类表（3 Read: `studio_look` / `studio_inspect` / `studio_frame` + 9 Change）+ 底部 5 级回执状态机（`refused` / `dispatched` / `saved` / `verified` / `failed`）与 `Topology Lens` |

---

## 4. 音频生成参数

- **生成脚本**：`uv run scratch/gen_hf_episode_audio.py --spec scratch/ep03_audio_spec.json`
- **声线与语速**：`zh-CN-YunxiNeural`，语速 `+6%`，24kHz 单声道 48kbps MP3
- **输出位置**：`public/HfEp03BrowserEditorNle/ep03_s01_voice.mp3` ~ `ep03_s05_voice.mp3`
- **字幕数据**：`src/videos/HfEp03BrowserEditorNle/captions.ts`
