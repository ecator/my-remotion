# HyperFrames 12 集「全栈百科」系列视频总体规划

> **项目定位**：基于官方完整文档 `docs/shared/hyperframes-docs`（共 12 个分类目录、120+ 篇文档），打造一套**兼顾 AI 创作者与全栈开发者**的 12 集深度教程系列视频。
> **单集规格**：1920×1080 · 30fps · **3~5 分钟 / 集**（约 5400~9000 帧），包含概念可视化、完整 Prompt / HTML 代码拆解与正反效果对比。
> **配套视觉规范**：参见 [hyperframes-style-guide.md](./hyperframes-style-guide.md)。

---

## 1. 系列整体篇章架构（四部曲 · 共 12 集）

本系列采用**由浅入深、从 AI 创作到架构内幕**的渐进式四部曲结构：

```mermaid
flowchart LR
    P1["第一部分：核心认知与双编辑器生态<br/>EP01 - EP03"] --> P2["第二部分：十大 AI 创作工作流实战<br/>EP04 - EP05"]
    P2 --> P3["第三部分：AI 提示词导演与视听精修<br/>EP06 - EP08"]
    P3 --> P4["第四部分：底层契约、对比与云端架构<br/>EP09 - EP12"]
```

| 集数 | 视频目录 / `<Composition id>` (PascalCase) | 中文标题 | 所属篇章 | 建议时长 | 核心受众 |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **EP01** | `HfEp01IntroAndQuickstart` | **重新定义网页转视频：什么是 HyperFrames 与三大起步路径** | 认知与工具篇 | 3.5 min | 全员必看 |
| **EP02** | `HfEp02StudioDesktopApp` | **零代码 AI 视频工作站：HyperFrames Studio 桌面端全攻略** | 认知与工具篇 | 4.0 min | 创作者 / 设计师 |
| **EP03** | `HfEp03BrowserEditorNle` | **源码级可视化剪辑：Browser Editor 浏览器编辑器与时间轴精修** | 认知与工具篇 | 4.0 min | 创作者 / 开发者 |
| **EP04** | `HfEp04BrandAndExplainerFlows` | **从网页与文稿到成片：产品发布、科普解说与设计稿导入工作流** | 十大工作流篇 | 4.5 min | 创作者 / 增长团队 |
| **EP05** | `HfEp05MediaDataAndDevFlows` | **万物皆可成片：口播粗剪、音乐卡点、数据地图、PR 视频与幻灯片** | 十大工作流篇 | 4.5 min | 创作者 / 开发者 |
| **EP06** | `HfEp06PromptAnatomyAndMotion` | **像导演一样写 Prompt：六段式提示词骨架与七大丝滑运动法则** | 提示词与视听篇 | 4.5 min | 创作者 / 动效师 |
| **EP07** | `HfEp07AudioVoiceAndCaptions` | **声音与字幕工程：TTS 配音、10000+ 曲库、自动闪避与 91 款花字** | 提示词与视听篇 | 4.0 min | 创作者 / 剪辑师 |
| **EP08** | `HfEp08ColorVfxAnd3d` | **电影感调色与视觉特效：调色管线、`data-vfx-chain` WebGL2 与 3D** | 提示词与视听篇 | 4.5 min | 动效师 / 技术美术 |
| **EP09** | `HfEp09HtmlContractAndGsap` | **解剖 HyperFrames 工程：HTML Schema、时间属性与确定性寻址渲染** | 架构与开发者篇 | 4.5 min | 前端 / 全栈开发者 |
| **EP10** | `HfEp10VariablesAndBatchTemplates` | **参数化视频模板：`data-composition-variables`、语义槽位与批量渲染** | 架构与开发者篇 | 4.0 min | 开发者 / 自动化团队 |
| **EP11** | `HfEp11VsRemotionAndMigration` | **巅峰对决与无缝迁移：HyperFrames vs Remotion 源码级对比与转换** | 架构与开发者篇 | 4.5 min | React / Remotion 开发者 |
| **EP12** | `HfEp12SdkPlayerAndCloudDeploy` | **企业级集成与分布式渲染：Headless SDK、Player 与 Lambda/Cloud Run** | 架构与开发者篇 | 5.0 min | 架构师 / 平台工程师 |

---

## 2. 分集详细大纲与官方文档映射

### 第一部分：核心认知与双编辑器生态（EP01 – EP03）

#### EP01 · `HfEp01IntroAndQuickstart`
**《重新定义网页转视频：什么是 HyperFrames 与三大起步路径》**
- **核心解决的问题**：为什么用普通 HTML/CSS/JS + AI Agent 做视频是全新范式？新手如何用最快的方式跑通第一个视频？
- **3~5 分钟章节结构**：
  1. **0:00–0:45 破题与三大核心特性**：Apache 2.0 免费开源、Agent-built（一句话生成 HTML/CSS/JS）、Editable（源码即工程而非黑盒 MP4）、Reliable Render（逐帧寻址渲染，慢机器也绝不掉帧）。
  2. **0:45–1:45 单一事实来源（Source is the Project）**：可视化展示 `index.html`、`compositions/`、`assets/`、`BRIEF.md`、`STORYBOARD.md` 如何被 Agent、桌面端、浏览器编辑器、CLI 和 SDK 共同读写。
  3. **1:45–3:00 三大起步路径实操对比**：
     - 路径 A：HyperFrames Studio 桌面端 App（Mac/Win/Linux 开箱即用 + Framey 引导）。
     - 路径 B：本地 Coding Agent（Claude Code / Codex / Cursor / Antigravity 等安装 `npx skills add heygen-com/hyperframes` 或 Plugin，输入 `/hyperframes` + `npx hyperframes preview`）。
     - 路径 C：零安装 AI Chat（Claude.ai / ChatGPT 挂载 Hosted MCP Connector 云端直出）。
  4. **3:00–3:45 费用与生态边界（FAQ 精华）**：本地渲染与免费模型（OpenCode / Kokoro TTS）完全免费 vs HeyGen 账号增值能力（Voice 1 / Video 1 / Avatars / 云渲染）。
- **覆盖官方文档**：
  - `introduction.md`、`quickstart.md`、`examples.md`、`faq.md`、`concepts/index.md`
  - `guides/with-claude-code.md`、`guides/with-codex.md`、`guides/with-cursor.md`、`guides/mcp.md`、`guides/free-agents.md`、`guides/skills.md`、`guides/plugins.md`、`guides/authentication.md`

---

#### EP02 · `HfEp02StudioDesktopApp`
**《零代码 AI 视频工作站：HyperFrames Studio 桌面端全攻略》**
- **核心解决的问题**：不打开终端、不写一行代码，如何在 Studio 桌面端里与 Agent 协同完成从灵感复刻、分镜审批、像改文档一样剪口播，到团队审阅分享的全流程？
- **3~5 分钟章节结构**：
  1. **0:00–0:50 工作区全景与三大创建入口**：Make（一句话生成 + Storyboard 分镜审批）、Reference（粘贴 YouTube/TikTok 视频复刻剪辑风格）、Script（文稿驱动），以及 Framey 助手与多 Agent 切换（Claude Code / Codex / OpenCode 等）。
  2. **0:50–1:50 聊天框三大神级快捷键（`@` / `#` / `/`）**：
     - `@` 引用素材、场景、Brand Kit、91 款字幕样式、灵感片段；
     - `#` 强制调用工具（`#Storyboard`、`#Brand kit`、`#Remove background`、`#HeyGen Video 1`、`#HeyGen Voice 1`）；
     - `/` 触发命令与格式技能（`/clear`、`/compact`、爆款口播模板）。
  3. **1:50–2:50 革命性交互：Script 文档式剪辑 + 画布指点涂鸦**：
     - 在 Script 面板像删 Word 文档一样划掉废话与气口（Cut / Fix words / Add Zoom or B-roll），进入 Pending video edits 批量发送；
     - 在画面上直接用 Select / Draw（画圈批注）/ Comment 攒齐多条修改一次性交给 Agent。
  4. **2:50–3:50 品牌资产与团队审阅闭环**：从网址一键提取 Brand Kit、接力本地 Claude Code/Codex 现有工程、导出本地 MP4 及一键生成带时间戳评论的 Share Review Link。
- **覆盖官方文档**：
  - `studio-app/index.md`、`studio-app/first-video.md`、`studio-app/workspace.md`、`studio-app/connect-your-agent.md`
  - `studio-app/edit-with-the-agent.md`、`studio-app/reference-video.md`、`studio-app/brand-kits.md`、`studio-app/video-clips.md`
  - `studio-app/existing-project.md`、`studio-app/export.md`、`studio-app/share.md`

---

#### EP03 · `HfEp03BrowserEditorNle`
**《源码级可视化剪辑：Browser Editor 浏览器编辑器与时间轴精修》**
- **核心解决的问题**：当 Agent 生成了初版 HTML 视频，如何通过 `npx hyperframes preview` 在浏览器中像使用 Premiere / After Effects 一样精确调整图层、关键帧、剪辑点与多轨混音，且所有改动实时写回 HTML 源码？
- **3~5 分钟章节结构**：
  1. **0:00–0:50 架构定位与面板布局**：`npx hyperframes preview` 启动，左侧 Compositions/Assets、中间 Canvas 预览、右侧 Design/Layers 属性面板、底部虚拟化 Timeline，以及 `⌘K` 一键复制精准修改指令给 Agent。
  2. **0:50–2:00 画布直接操纵与关键帧录制**：
     - 拖拽平移/缩放/旋转/裁剪、网格对齐（`G`）、动画路径整体平移（`Option/Alt + Drag`）；
     - 关键帧系统（`K` 打关键帧、`Auto-record manual edits as keyframes` 警示）与 **`R` 手势实时录制（Gesture Recording）**（拖拽录位移、滚轮录景深、Shift 拖拽录 3D 旋转）。
  3. **2:00–3:00 专业非线性时间轴（NLE Timeline）与快捷键体系**：
     - 播放控制（`J/K/L`、`Space`、`I/O` 工作区出入点）；
     - 剪辑工具（`V` 选择、`B` 剃刀、`S` 播放头分割、`N` 吸附对齐、Clip 边缘修剪与 `data-playback-start` 自动补偿）。
  4. **3:00–4:00 混音台、Catalog 组件块与质量门禁导出**：音频轨效果器与包络线、Catalog 视觉块拖拽入轨、变量提取、左下角实时 Lint 检查与 Renders 面板导出。
- **覆盖官方文档**：
  - `studio/index.md`、`studio/canvas.md`、`studio/timeline.md`、`studio/audio-effects.md`、`studio/assets-and-blocks.md`、`studio/export.md`、`guides/webmcp.md`

---

### 第二部分：十大 AI 创作工作流实战（EP04 – EP05）

#### EP04 · `HfEp04BrandAndExplainerFlows`
**《从网页与文稿到成片：产品发布、科普解说与设计稿导入工作流》**
- **核心解决的问题**：如何把手头的网址、文章笔记、Figma 设计稿或动态图形需求，高质量地变成商业级视频？
- **3~5 分钟章节结构**：
  1. **0:00–0:40 工作流选型地图（What do you want to make?）**：根据输入源（网址、想法、设计稿、素材、代码、数据）匹配最佳工作流。
  2. **0:40–1:45 工作流 1：Product Launch Video（产品发布大片）**：输入产品 URL 自动抓取真实 UI 截图、提取品牌调色板与核心文案，编排「痛点 Hook → 3 个功能节拍 → 品牌尾卡」结构。
  3. **1:45–2:40 工作流 2 & 3：Faceless Explainer（无真人科普解说）与 Motion Graphics（动态图形）**：将技术文章或抽象概念转化为视觉隐喻动画；快速制作片头 Logo Sting、动态指标卡与遮罩转场。
  4. **2:40–3:40 工作流 4：Design Tools & Figma 深度集成**：从 Figma / Claude Design / Open Design 导入，遵循「静态背景冻结为资产、仅重建需要运动的图层」原则，并将 Figma Motion 时间轴自动翻译为 GSAP 代码。
  5. **3:40–4:20 工作流 5：AI Avatar Presenter（数字人主讲融合）**：引入 HeyGen 数字人出镜口播，让 HyperFrames 围绕人物自动搭建分镜背景、B-roll 与包装图文。
- **覆盖官方文档**：
  - `workflows.md`、`guides/product-launch-video.md`、`guides/faceless-explainer.md`、`guides/motion-graphics.md`
  - `guides/design-tools.md`、`guides/figma.md`、`guides/avatar-presenter.md`、`prompting/design-systems.md`

---

#### EP05 · `HfEp05MediaDataAndDevFlows`
**《万物皆可成片：口播粗剪、音乐卡点、数据地图、PR 视频与幻灯片》**
- **核心解决的问题**：面对实拍口播、音乐音轨、CSV 表格、GitHub Pull Request 甚至现场演讲需求，HyperFrames 如何自动化处理？
- **3~5 分钟章节结构**：
  1. **0:00–1:00 工作流 6：Captions & Recuts（口播字幕与智能粗剪）**：传入实拍 A-roll，自动语音转录并对齐逐词时间戳，自动剔除长停顿与废话气口，插入重点词汇设计卡片。
  2. **1:00–1:50 工作流 7：Music / Lyric Video（音乐节拍网格卡点）**：分析音轨 BPM 与 Beat Grid（节拍网格），将画面切换、歌词动效与重拍严格对齐。
  3. **1:50–2:45 工作流 8：Data & Maps（数据可视化与动态地图）**：从 CSV/JSON 生成动态柱状图竞赛、里程碑数字滚动（Odometer）、区域高亮地图、航线流向与气泡图。
  4. **2:45–3:35 工作流 9：GitHub PR to Video（代码变更转视频）**：输入 PR 链接，自动提炼变更前后对比、核心 Diff 与影响范围，生成发布预告或 Code Review 短片。
  5. **3:35–4:25 工作流 10：Interactive Slideshow（`/slideshow` 交互式演示文稿）**：构建可实时点击推进（Click-to-reveal）、支持分支跳转、热点交互与带计时器演讲者模式（Presenter Mode）的动态 PPT。
- **覆盖官方文档**：
  - `guides/captions-and-recuts.md`、`guides/music-to-video.md`、`prompting/data-and-maps.md`
  - `guides/pr-to-video.md`、`guides/slideshow.md`、`guides/general-video.md`

---

### 第三部分：AI 提示词导演与视听精修（EP06 – EP08）

#### EP06 · `HfEp06PromptAnatomyAndMotion`
**《像导演一样写 Prompt：六段式提示词骨架与七大丝滑运动法则》**
- **核心解决的问题**：为什么别人的一句话视频像廉价 PPT，而高手能一段 Prompt 直出 62 秒一镜到底电影级大片？如何用精准的导演词汇控制运动与迭代？
- **3~5 分钟章节结构**：
  1. **0:00–1:00 强提示词六段式骨架与单拍五槽位**：
     - 宏观六要素：`[route] /hyperframes`、`[spec]`、`[beats]`（含留白停顿指令）、`[copy]`（精确引号与 `/` 换行）、`[technique]`（指定 Catalog 组件名）、`[negatives]`；
     - 微观五槽位：`[element]` + `[motion]` + `[layout]` + `[style]` + `[timing]`，以及三档规格旋钮（Mood words / Style tokens / Full visual spec）。
  2. **1:00–2:30 七大丝滑运动黄金法则（左右分屏正反对比）**：
     - 法则 1：Move only what is live（落地即静止，只动实时变化的数据，拒绝伪呼吸感）；
     - 法则 2：Move the camera to get somewhere（镜头移动必须为了跨越空间连接事物）；
     - 法则 3：Overlap, don't queue（动作重叠交错，前一个未停稳后一个已启动）；
     - 法则 4：One idea per move（拒绝同时旋转+缩放+位移导致文字模糊）；
     - 法则 5：Weight for physical objects only（弹性过冲 Overshoot 只给物理卡牌，绝不给文字和数字计数器）；
     - 法则 6 & 7：视差景深（近快远慢 + 单个前景虚化遮挡）与格式配速（Showreel 1.1s vs Demo 8s）。
  3. **2:30–3:30 场景转场与定格动画确定性**：由画面元素引发的动机转场（Zoom through button / Card flood）；带种子（Seeded）的 2 帧量化定格手绘感。
  4. **3:30–4:30 收敛式迭代心法与 Capstone 62 秒大片拆解**：一次只改一个变量、先剥离再分层叠加、用绝对数值代替相对形容词（`radius = 25%` 代替 `2x finer`）+ 冻结条款（Freeze clause），以及 NLE 剪辑动词映射表。
- **覆盖官方文档**：
  - `prompting/overview.md`、`prompting/motion.md`、`prompting/examples.md`
  - `prompting/editing-existing-videos.md`、`prompting/recreating-references.md`、`prompting/capstone.md`

---

#### EP07 · `HfEp07AudioVoiceAndCaptions`
**《声音与字幕工程：TTS 配音、10000+ 曲库、自动闪避与 91 款花字》**
- **核心解决的问题**：如何为视频打造广播级的配音、背景音乐、音效混音与高颜值动态字幕？底层 HTML 是如何无损承载整套 DAW 混音工程的？
- **3~5 分钟章节结构**：
  1. **0:00–1:00 配音、音乐与音效管线（免费本地 vs HeyGen Pro）**：本地免费 Kokoro TTS 与内置 SFX vs HeyGen 高表现力语音与 10,000+ 曲库；如何用自然语言描述情绪、语速与入点。
  2. **1:00–2:10 四大音频 HTML 属性与专业混音内幕**：
     - `data-fx-chain`（高通滤波去低频隆隆声、Peaking EQ、压缩器、限制器等信号链）；
     - `data-automation`（音量与效果参数随时间变化的包络曲线，解析 Clip 局部时钟 vs `<hf-audio-group>` 全局时钟的致命区别，以及 +12dB 增益上限）；
     - `data-fx-carve`（**Voiceover Carve 智能人声频段雕刻与自动闪避 Ducking**，让 BGM 在人声出现时自动退让）。
  3. **2:10–3:15 字幕目录（Captions Catalog）与屏幕代码动效**：91 款命名花字组件风格映射、逐词高亮强调（Per-word emphasis）、人物抠像后穿插大标题（Remove Background + Behind-head titles）、以及屏幕代码打字机与高亮块。
  4. **3:15–4:00 变速曲线（Speed Ramps）**：在 `data-automation` 中用一条 `rate` 曲线同时驱动预览、渲染与编辑器中的平滑变速（快慢镜头平滑过渡）。
- **覆盖官方文档**：
  - `prompting/media-and-audio.md`、`prompting/captions-catalog.md`
  - `guides/media.md`、`guides/video-components.md`、`guides/voice-and-audio.md`、`guides/remove-background.md`
  - `reference/audio-effects.md`、`reference/speed-ramps.md`

---

#### EP08 · `HfEp08ColorVfxAnd3d`
**《电影感调色与视觉特效：调色管线、`data-vfx-chain` WebGL2 与 3D》**
- **核心解决的问题**：如何在 HTML 视频中实现好莱坞级固定顺序调色、胶片/CRT/ASCII 风格化滤镜、逐像素 WebGL2 扭曲置换特效、运动模糊与真 3D 场景？
- **3~5 分钟章节结构**：
  1. **0:00–1:15 固定顺序调色管线（Color Grading Pipeline）**：
     - 为什么源素材质量比后期参数更重要；
     - 调色管线的严格执行顺序：基础影调（曝光/对比度/高光阴影）$\rightarrow$ 色相键控（Hue Keys）$\rightarrow$ 胶片印片与模拟风格（Halftone 半调网点、ASCII 字符画、CRT 显像管、磁带磨损 Tape Damage）；
     - 空间局部隔离调色（Spatial Isolation 遮罩）与随时间演进的调色自动化。
  2. **1:15–2:30 逐像素 WebGL2 特效链（`data-vfx-chain`）**：
     - 与音频链同构的 JSON 声明式特效链（`fractal-noise` 分形噪波、`wave-warp` 波浪扭曲、`displacement-map` 置换贴图）；
     - 静态参数 `params` 与 GSAP 驱动的 CSS 变量动画 `--vfx-<nodeId>-<key>`；
     - 剖析 `.hf-vfx-src`（`<canvas layoutsubtree>`）与 `none` / `self` / `backdrop` 三种捕获模式及确定性重绘。
  3. **2:30–3:30 HTML-in-Canvas 与运动模糊（Motion Blur）**：
     - 使用 `drawElementImage` 将实时 DOM 作为 WebGL2 材质纹理；
     - 开启帧间运动模糊（Motion Blur），让高速运动的文字与卡牌沿轨迹产生自然拖影。
  4. **3:30–4:30 真 3D 渲染与 Shader 转场**：为什么复杂光影和镜头推拉必须指定 `Three.js via the adapter` 而非 CSS 3D；使用 `@hyperframes/shader-transitions` 实现 WebGL 着色器转场。
- **覆盖官方文档**：
  - `prompting/color-grading.md`、`guides/media-effects.md`、`reference/color-grading.md`
  - `guides/vfx-chain.md`、`guides/html-in-canvas.md`、`guides/motion-blur.md`、`packages/shader-transitions.md`

---

### 第四部分：底层契约、对比与云端架构（EP09 – EP12）

#### EP09 · `HfEp09HtmlContractAndGsap`
**《解剖 HyperFrames 工程：HTML Schema、时间属性与确定性寻址渲染》**
- **核心解决的问题**：手写或让 Agent 生成底层代码时，一个合法的 HyperFrames HTML 到底遵循什么技术契约？为什么它能保证在任何机器上渲染出字节级一致的画面？
- **3~5 分钟章节结构**：
  1. **0:00–1:10 HTML Schema 最小契约与嵌套组合**：
     - Root 节点必备属性（`data-composition-id`、`data-start="0"`、`data-width`、`data-height`、`data-duration`、`data-no-timeline` 防 45s 超时）；
     - 外部子组合（`data-composition-src` + `<template>` 封装 + 相对工程根目录解析）vs 内联子组合，以及局部时间基准与 `window.__hyperframes.assetUrl()`。
  2. **1:10–2:15 时间与图层属性（`data-*`）深度避坑**：
     - `data-start` 的绝对秒数与相对引用表达式（`data-start="intro - 0.5"`）；
     - **Tracks are not layers**：`data-track-index` 仅决定编辑器轨道行，前后遮挡由 CSS `z-index` 决定（详解负 `z-index` 被父级背景遮挡时如何用 `isolation: isolate` 拯救）。
  3. **2:15–3:25 寻址动画（Seekable Animation）与确定性铁律（Determinism）**：
     - GSAP `gsap.timeline({ paused: true })` 注册到 `window.__timelines["id"]` 的工作机制；
     - Frame Sources 与 Frame Adapters 如何对接自定义动画运行时；
     - 确定性三大禁令：严禁系统时钟 `Date.now()`、严禁无种子 `Math.random()`、严禁渲染期未锁定的网络请求，以及严禁用 JS 手动控制媒体播放或显隐。
  4. **3:25–4:30 质量保障三剑客（Doctor / Lint / Check）**：`@hyperframes/lint` 静态规则库（字体声明检查、非法属性拦截）与 `hyperframes check` 真实浏览器门禁。
- **覆盖官方文档**：
  - `concepts/compositions.md`、`concepts/data-attributes.md`、`concepts/determinism.md`、`concepts/frame-adapters.md`
  - `guides/gsap-animation.md`、`guides/frame-sources.md`、`guides/imported-film-html.md`
  - `reference/html-schema.md`、`reference/lint-rules.md`、`packages/lint.md`、`help.md`

---

#### EP10 · `HfEp10VariablesAndBatchTemplates`
**《参数化视频模板：`data-composition-variables`、语义槽位与批量渲染》**
- **核心解决的问题**：如何把一个精心设计好的视频变成可复用模板，不改布局代码就能替换文案、配色、Logo 甚至视频片段，并通过一条命令批量渲染出上百条个性化视频？
- **3~5 分钟章节结构**：
  1. **0:00–1:00 变量声明与七大数据类型**：在根元素声明 `data-composition-variables` JSON 数组，详解 `string`、`number`、`color`、`boolean`、`enum`、`font`、`image` 七种类型在浏览器编辑器中自动生成的表单控件。
  2. **1:00–2:00 面向 AI Agent 的语义元数据（`role` 与 `portrays`）**：
     - 为什么不能只写位置描述（“右上角小字”），而要写语义描述；
     - 详解 `portrays` 八大语义槽位（`subject_name`、`subject_logo`、`competitor_name`、`host_identity` 等），防止 Remix 时 Agent 乱填品牌身份。
  3. **2:00–3:00 免脚本声明式绑定 vs 动态脚本读取**：
     - 零 JS 绑定：`data-var-text`（替换文本）、`data-var-src`（替换图片/音视频且自动继承新视频时长与混音）、CSS 变量 `var(--accent)`；
     - 复杂逻辑：`window.__hyperframes.getVariables()` 与父子组合传参 `data-variable-values`。
  4. **3:00–4:00 CLI 参数覆盖与 JSON 批量并发渲染**：
     - `--variables`、`--variables-file` 与 `--strict-variables` 严格类型校验；
     - `--batch rows.json --output "renders/{name}.mp4"` 批量渲染与路径安全沙箱、`--batch-concurrency` 并发调优，以及哪些属性（分辨率、帧率、总时长）不能作为变量。
- **覆盖官方文档**：
  - `concepts/variables.md`、`studio/assets-and-blocks.md`、`deploy/templates-on-lambda.md`

---

#### EP11 · `HfEp11VsRemotionAndMigration`
**《巅峰对决与无缝迁移：HyperFrames vs Remotion 源码级对比与转换》**
- **核心解决的问题**：同样是网页转视频，HyperFrames 和 Remotion 的底层哲学有何本质不同？各自适合什么团队？如何把现有的 Remotion (React) 项目自动迁移到 HyperFrames 并逐帧比对验收？
- **3~5 分钟章节结构**：
  1. **0:00–1:10 同题实测正面对决（Inkwell 15 秒发布视频）**：
     - 同一段 Prompt 交给 Claude Code 分别用 Remotion 与 HyperFrames 一次生成；
     - 对比产物：10 个 TS 文件 (1037 行) + 950MB `node_modules` vs 4 个 HTML 文件 (822 行) + 0 依赖 + 自动配乐音效。
  2. **1:10–2:25 同一个 3 秒标题卡的源码级解剖**：
     - Remotion 模型：`frame = useCurrentFrame()` + `interpolate(frame, [0, 15, 75, 90], ...)`，以帧为单位的 React 纯函数；
     - HyperFrames 模型：HTML `data-start="0" data-duration="3"` + `gsap.timeline({ paused: true })`，以秒为单位的暂停时间轴寻址（Seekable Runtimes：原生兼容 GSAP、Lottie、Three.js）。
  3. **2:25–3:25 客观选型指南（谁更适合你？）**：
     - Remotion 的优势：生态成熟、原生复用团队现有 React 组件库与 TypeScript 类型系统、心智模型单一；
     - HyperFrames 的优势：Apache 2.0 无席位限制免费商用、零构建步骤直出、专为 AI Agent 与可视化双向编辑设计、直接复用现有网页/GSAP 动画。
  4. **3:25–4:30 官方迁移工作流（`remotion-to-hyperframes` Skill）**：
     - 安装迁移技能自动将 `useCurrentFrame`/`interpolate` 映射为 GSAP Tweens、`<Sequence>` 映射为 Clips；
     - **诚实的拒绝机制**：遇到 `useState`/`useEffect` 状态机或第三方 React UI 库时主动标记而非静默错误翻译，并自动渲染双版本进行逐帧视觉比对评分。
- **覆盖官方文档**：
  - `guides/hyperframes-vs-remotion.md`、`prompting/remotion-migration.md`、`deploy/migrating-to-hyperframes-lambda.md`

---

#### EP12 · `HfEp12SdkPlayerAndCloudDeploy`
**《企业级集成与分布式渲染：Headless SDK、Player 与 Lambda/Cloud Run》**
- **核心解决的问题**：如果要把 HyperFrames 嵌入自己的 SaaS 产品、构建自定义视频编辑器，或者在云端进行高并发 4K/HDR 分布式渲染，该如何设计架构？
- **3~5 分钟章节结构**：
  1. **0:00–1:00 最小集成表面法则（Choose the Smallest Surface）**：
     - 架构分层全景图：`CLI`（工程自动化）$\rightarrow$ `SDK`（源码查询与编辑）$\rightarrow$ `Player`（网页内嵌播放）$\rightarrow$ `Producer`（Node 渲染管线）$\rightarrow$ `Engine`（底层逐帧捕获），以及 `@hyperframes/core`、`@hyperframes/parsers`、`@hyperframes/studio-server`。
  2. **1:00–2:25 `@hyperframes/sdk` 与 `@hyperframes/player` 构建自定义编辑器**：
     - `openComposition` 自动打标 `data-hf-id`、`find()` 作用域查询、`setText`/`setStyle`/`setTiming` 与 `batch()` 事务；
     - 内置 Undo/Redo 历史栈、JSON Patches 订阅、文件系统/内存 `PersistAdapter`、以及 **Embedded Override Mode（稀疏增量覆盖模式，只存 Delta 不改底板）**；
     - 结合 `<hyperframes-player>` Web Component、Canvas 命中测试（Hit-testing）与 `Editing Affordances` 打造元素感知属性面板。
  3. **2:25–3:45 全场景云端渲染与分布式架构**：
     - 零运维托管：`npx hyperframes cloud render`（HeyGen Cloud）；
     - 快速 API 模板：一键部署 Vercel / Cloudflare / Modal 预览与渲染端点；
     - 自托管分布式集群：`@hyperframes/aws-lambda`（Step Functions 分片并发渲染 + JSONL 模板批处理）与 `@hyperframes/gcp-cloud-run`（Cloud Workflows + GCS）。
  4. **3:45–5:00 进阶渲染调优与开源共建**：4K 超采样渲染、10-bit H.265 BT.2020 PQ/HLG HDR 渲染、性能瓶颈排查（`guides/performance.md`）、Catalog 语义搜索原理以及如何向开源社区贡献 Block 与插件。
- **覆盖官方文档**：
  - `developers/overview.md`、`developers/index.md`、`developers/cli.md`、`developers/catalog-search.md`、`developers/harness-tool-context.md`、`developers/share-source.md`
  - `sdk/quickstart.md`、`sdk/guides/*`（7 篇）、`sdk/reference/*`（6 篇）
  - `packages/*`（13 个 npm 包文档）
  - `guides/rendering.md`、`guides/export-and-share.md`、`guides/deploy.md`、`guides/4k-rendering.md`、`guides/hdr.md`、`guides/performance.md`
  - `deploy/overview.md`、`deploy/cloud.md`、`deploy/aws-lambda.md`、`deploy/gcp-cloud-run.md`
  - `contributing.md`、`contributing/*`、`community/adopters.md`

---

## 3. 本仓库工程目录与命名规范落地

遵循 [`AGENTS.md`](../../AGENTS.md) 规范，每集视频在开发时均采用对应的英文大驼峰 `<VideoName>` 建立三端隔离目录：

```text
├── docs/
│   ├── shared/
│   │   ├── hyperframes-docs/             # 官方完整参考文档（只读输入）
│   │   ├── hyperframes-series-plan.md    # 本系列 12 集总体规划文档
│   │   └── hyperframes-style-guide.md    # 跨集通用视觉与动效设计规范
│   ├── HfEp01IntroAndQuickstart/         # EP01 专属脚本 (script.md)、分镜 (storyboard.md)、笔记 (notes.md)
│   ├── HfEp02StudioDesktopApp/           # EP02 专属文档
│   └── ...                               # EP03 ~ EP12 专属文档
├── public/
│   ├── shared/                           # 跨集复用字体、HyperFrames 品牌 Logo、通用转场音效与 BGM
│   ├── HfEp01IntroAndQuickstart/         # EP01 专属 TTS 配音 (.mp3) 与截图素材 (.jpg/.png/.svg)
│   └── ...
└── src/
    ├── Root.tsx                          # 统一注册 12 集顶层 <Composition /> (绑定 Zod Schema)
    ├── components/                       # 跨集复用的百科教程 UI 原语（代码高亮窗、Prompt 拆解卡、章节进度条、正反对比分屏器等）
    └── videos/
        ├── HfEp01IntroAndQuickstart/     # EP01 视频主组件与子场景
        └── ...                           # EP02 ~ EP12 视频组件
```
