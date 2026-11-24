# HfEp01IntroAndQuickstart · 脚本原稿

> **剧集**：EP01 / 共 12 集 ·《重新定义网页转视频：什么是 HyperFrames 与三大起步路径》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 3 分 10 秒 ~ 3 分 30 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)

---

## 1. 创作概念与叙事弧线

作为《HyperFrames 全栈百科》12 集系列的首发开篇，本集承担**建立第一性原理认知**与**跑通三大上手路径**的双重任务：
1. **打破固有认知**：传统 AI 视频生成的是无法修改局部文字的黑盒像素；而 HyperFrames 用标准 HTML、CSS 和 JavaScript 表达视频，让 AI Agent 成为你的全能剪辑与动效工程师。
2. **讲透核心架构**：为什么“一个 HTML 文件夹就是整部视频”？Agent、桌面端、浏览器编辑器、CLI 与 SDK 如何围绕同一份源码无缝接力？
3. **给出清晰行动指南**：无论是不写代码的设计师、追求极致效率的 AI 玩家，还是深耕终端的全栈工程师，都能在 3 分钟内找到最适合自己的起步路径，并理清开源免费与增值服务的边界。

- **主色调**：黑曜石底色 `#07090E` + Framey 翠绿 `#10B981` / `#34D399` + 时间轴电光青 `#06B6D4` + 动效琥珀金 `#F59E0B` + Agent 紫 `#8B5CF6`

---

## 2. 分章节旁白文稿（中文配音）

> **配音分段原则**：按 5 个独立章节（Scene 01 ~ Scene 05）分别生成 `.mp3` 配音文件与局部时间轴字幕（`startMs` 均从该章节音频 `0ms` 起算），每个章节包裹在独立的 `<Sequence>` 中，确保音画与字幕 100% 同步。

### Scene 01 · 破题与三大核心基因（`ep01_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科系列。作为第一集，我们先回答一个核心问题：什么是 HyperFrames？简单来说，它是 HeyGen 开源的 HTML 转视频框架。你只需用自然语言提出需求，AI Agent 就会自动编写出一个可编辑的 HTML 网页工程，再由 HyperFrames 实时预览或渲染成高清视频。它有三大核心基因：第一，Agent 驱动构建，你不需要手写代码，AI 会自动编排布局、样式与动画；第二，源码级可编辑，它产出的不是黑盒视频，而是标准网页文件夹，任何工具都能随时修改；第三，确定性逐帧寻址渲染，渲染器会暂停时间轴，精准跳转到每一帧的时刻进行捕获，哪怕在慢速机器上也绝不掉帧。

### Scene 02 · 单一事实来源与工程解剖（`ep02_s01` -> `ep01_s02_voice.mp3`）

- **旁白原文**：
  > 在 HyperFrames 中，工程文件夹就是单一事实来源。打开一个标准工程，你会看到记录创作意图的 BRIEF 和 STORYBOARD 分镜文档，定义品牌色彩与字体的 frame.md，以及作为主时间轴入口的 index.html 与子场景目录。最妙的地方在于：AI Agent、桌面端、浏览器编辑器、命令行 CLI 以及嵌入式 SDK，读写的都是同一份 HTML 源码，中间没有任何导出转换环节。在 HTML 里，`data-composition-id` 声明画布容器，`class="clip"` 配合 `data-start` 和 `data-duration` 以秒为单位控制元素出入场，而暂停的 GSAP 时间轴则注册在全局 `__timelines` 上，随时等待渲染器精准寻址。

### Scene 03 · 起步路径一：Studio 桌面端与 AI Chat 云端直出（`ep01_s03_voice.mp3`）

- **旁白原文**：
  > 新手如何跑通第一个视频？官方提供了三条路径，产出完全通用。第一条路径，也是最简单的方式，是下载免费的 HyperFrames Studio 桌面端，支持 Mac、Windows 和 Linux。打开软件并在 Make 面板输入一句话，翠绿小向导 Framey 就会向你确认关键细节，先生成分镜供你审批，再自动构建成片。之后你可以直接打字、在画面上指点或画圈批注，让 Agent 持续精修。如果你连软件都不想装，可以选择第二条路径：在 Claude 或 ChatGPT 网页端挂载官方托管的 MCP 连接器，直接通过聊天在云端生成并下载 MP4，代价则是放弃了本地工程文件夹与浏览器精修能力。

### Scene 04 · 起步路径二：本地 Coding Agent + Skills 全流程实战（`ep01_s04_voice.mp3`）

- **旁白原文**：
  > 如果你习惯在终端或 IDE 里使用 Claude Code、Codex、Cursor 或 Antigravity，第三条本地 Agent 路径将是你的主力武器。第一步，安装官方技能包：在 Claude Code 中可直接安装插件，其他 Agent 则在项目目录下运行 `npx skills add heygen-com/hyperframes` 并选择 Core Skills。第二步，开启新会话，用 `/hyperframes` 斜杠指令发起请求，比如让它为一个网址制作十秒产品片头。加上 `/hyperframes` 至关重要，它会加载框架的渲染契约与四百五十多个内置组件块，防止 AI 凭空猜测。第三步，运行 `npx hyperframes preview` 打开浏览器编辑器微调，再通过 `check` 校验和 `render` 即可在本地导出 MP4。

### Scene 05 · 免费开源边界与全系列 12 集路线图（`ep01_s05_voice.mp3`）

- **旁白原文**：
  > 最后我们来理清大家最关心的费用与商用边界。HyperFrames 核心框架、CLI 与技能包采用 Apache 2.0 协议完全开源，可免费用于商业项目。在本地电脑上预览、无限次导出 MP4、使用内置音效、本地一键抠像以及 Kokoro 语音合成，统统分文不取，甚至连 AI Agent 都可以在 Studio 里切换免费的 OpenCode 模型。只有当你需要调用 HeyGen 顶级语音、数字人、AI 视频生成或云端托管渲染时，才按需消耗 HeyGen 额度。在接下来的十一集中，我们将深入双编辑器实战、十大创作工作流、提示词导演法则以及底层架构与云端部署。下一集，我们不见不散！

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / 什么是 HYPERFRAMES` | `[CORE PARADIGM]` | 开篇片头大字卡 $\rightarrow$ `HTML → Frame → MP4` 转换顶栏 + 三大核心基因卡片矩阵（`Agent-Built` / `Editable` / `Reliable Render`） |
| **Scene 02** | `02 / 单一事实来源 (SOURCE IS THE PROJECT)` | `[ARCHITECTURE]` | 左侧工程目录树（`BRIEF.md` / `STORYBOARD.md` / `frame.md` / `index.html` / `compositions/`）+ 右侧五端双向读写拓扑图 & 最小 HTML 源码解剖窗 |
| **Scene 03** | `03 / 零代码起步：STUDIO 与 AI CHAT` | `[QUICKSTART I]` | 左右双路径对比卡：左栏 **Studio Desktop App**（Make $\rightarrow$ Framey & Storyboard $\rightarrow$ Point & Draw Edit）；右栏 **AI Chat Hosted MCP**（`https://mcp.heygen.com/mcp/hyperframes/` 云端直出与优劣对比） |
| **Scene 04** | `04 / 开发者路径：CODING AGENT + CLI` | `[QUICKSTART II]` | 三步实战流水线：Step 1 安装 Plugin / `npx skills add`（展示 9 大核心技能表） $\rightarrow$ Step 2 `/hyperframes` 提示词终端演示 $\rightarrow$ Step 3 `preview / check / render` 命令流 |
| **Scene 05** | `05 / 免费开源边界与 12 集全栈路线图` | `[ECOSYSTEM & ROADMAP]` | 上半程：`100% Free & Open Source (Apache 2.0)` vs `Optional HeyGen Pro / Cloud` 清单对比；下半程：《HyperFrames 全栈百科》四部曲 12 集全景导航图（高亮 EP01 $\rightarrow$ 预告 EP02） |

---

## 4. 音频生成参数

### 4.1 中文旁白配音（`public/HfEp01IntroAndQuickstart/ep01_s01_voice.mp3` ~ `ep01_s05_voice.mp3`）
- **生成工具**：通过 `scratch/gen_ep01_audio.py`（PEP 723 Inline Metadata，`uv run`）调用 `edge-tts` 生成高音质中文神经语音，并利用 `WordBoundary` / `SentenceBoundary` 自动提取精确到毫秒的 `@remotion/captions` 数据写入 `src/videos/HfEp01IntroAndQuickstart/captions.ts`。
- **声线选择**：`zh-CN-YunxiNeural` 或 `zh-CN-XiaoxiaoNeural`（清晰、富有科技解说感染力），语速 `+6%`。

### 4.2 背景音乐（`public/shared/bgm/hf_tech_ambient.mp3`）
- **风格**：深邃、现代、具有精密脉冲感的 Ambient Tech / Downtempo Electronic 背景音乐（可跨集复用，存放在 `public/shared/bgm/`）。
- **生成方式**：通过 Python + NumPy/SciPy 在 `scratch/` 中程序化合成高品质立体声 `.mp3` 音乐循环，并在视频组件中根据各章节人声区间进行平滑闪避（无人声过场音量 `0.55`，人声解说期间降至 `0.16`）。
