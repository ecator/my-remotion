# HfEp01IntroAndQuickstart · 分镜说明

> **规格**：1920×1080 · 30fps · 共 5 个章节场景（Scenes）。
> **时间基准**：每个章节由其真实配音音频时长 + 前导/尾随过渡留白决定；字幕采用章节内局部时间（`0ms` 对齐该章节配音起点）。

---

## 1. 全片时间轴与场景划分总览

| 场次 | 场景组件名 | 顶部章节标题 | 核心视觉内容 | 音频与字幕绑定 |
| :---: | :--- | :--- | :--- | :--- |
| **Scene 01** | `Scene01IntroParadigm` | `01 / 什么是 HYPERFRAMES` | 片头徽标揭示（前 3.5s）$\rightarrow$ `Request → HTML Project → Exact Frame Render` 流程条 + 三大核心基因卡片（Agent-Built / Editable / Reliable Render）交错入场与焦点高亮 | `ep01_s01_voice.mp3` + `s01Captions` |
| **Scene 02** | `Scene02SingleSource` | `02 / 单一事实来源 (SOURCE IS THE PROJECT)` | 左 5:右 7 分栏：左侧工程文件树逐项点亮（`BRIEF.md`、`STORYBOARD.md`、`frame.md`、`index.html`、`compositions/`）；右侧五端协同拓扑图切换为 `index.html` 最小契约代码窗（高亮 `data-composition-id`、`data-start`、`window.__timelines`） | `ep01_s02_voice.mp3` + `s02Captions` |
| **Scene 03** | `Scene03ZeroCodePaths` | `03 / 零代码起步：STUDIO 与 AI CHAT` | 左右 1:1 双路径卡片：左卡演示 **Studio 桌面端 App**（Make 输入框、Framey 问答、Storyboard 审批、画布指点与画圈批注）；右卡演示 **AI Chat (MCP Connector)**（`https://mcp.heygen.com/mcp/hyperframes/` 云端直出与本地/云端取舍对比） | `ep01_s03_voice.mp3` + `s03Captions` |
| **Scene 04** | `Scene04AgentAndCliFlow` | `04 / 开发者路径：CODING AGENT + CLI` | 左 5:右 7 实战工作台：左侧三步向导（1. 安装 Plugin/Skills $\rightarrow$ 2. `/hyperframes` 路由请求 $\rightarrow$ 3. Preview/Check/Render）；右侧仿真终端 + 9 大官方 Skills 矩阵卡（高亮 `/hyperframes`、`/hyperframes-registry` 450+ blocks） | `ep01_s04_voice.mp3` + `s04Captions` |
| **Scene 05** | `Scene05FreeBoundaryAndRoadmap` | `05 / 免费开源边界与 12 集全栈路线图` | 前半段：左右双栏对比 `Apache 2.0 100% 本地免费能力`（含 OpenCode/Kokoro TTS/无限渲染） vs `HeyGen 按需增值能力`；后半段：平滑切换为《HyperFrames 全栈百科》四部曲 12 集路线图，点亮 EP01 并指向 EP02 | `ep01_s05_voice.mp3` + `s05Captions` |

---

## 2. 逐场画面布局与动效细节（1920×1080）

### Scene 01 · 破题与三大核心基因
- **前 3.5 秒（开篇片头态）**：
  - 居中展示 `EPISODE 01 // HYPERFRAMES ENCYCLOPEDIA` 翠绿发光胶囊 + 巨型主标题 **《重新定义网页转视频》** + 副标题 **什么是 HyperFrames 与三大起步路径**。
- **3.5 秒后（主舞台展开态）**：
  - 顶部出现一条横向转换管道：`[ 自然语言 Prompt ] ──(AI Agent)──► [ HTML / CSS / GSAP 工程 ] ──(Seekable Engine)──► [ 确定性 MP4 视频 ]`。
  - 下方三列等宽卡片（宽 `552px`，间距 `36px`）以 `4` 帧交错（Stagger）从 `translateY(28px)` 平滑落位并保持静止（Move only what is live）：
    1. **Card 1 (`#10B981` 翠绿)**：`01 // AGENT-BUILT` · **AI 驱动构建**（展示自然语言自动映射为 HTML + CSS + GSAP，零手写门槛）。
    2. **Card 2 (`#06B6D4` 电光青)**：`02 // EDITABLE SOURCE` · **源码级可编辑**（对比传统 AI 黑盒 MP4 `✗` vs 开放网页工程文件夹 `✓`）。
    3. **Card 3 (`#F59E0B` 琥珀金)**：`03 // RELIABLE RENDER` · **确定性逐帧寻址**（内部带一个实时步进的 `Frame 001 → 002 → 003` 寻址指示器，直观演示“暂停时间轴 + 精确跳转截图”）。

### Scene 02 · 单一事实来源与工程解剖
```text
┌────────────────────────────────────────────────────────────────────────────┐
│ [EP.01 // HYPERFRAMES]  02 / 单一事实来源            [ARCHITECTURE] ⏱ 01:05 │
├────────────────────────────────────────────────────────────────────────────┤
│  ┌─ 工程目录结构 (宽 640px) ───────┐  ┌─ 协同拓扑 & HTML 源码解剖 (1048px) ─┐ │
│  │ 📁 my-hyperframes-video/       │  │  [AI Agent] ◄──┐   ┌──► [Studio/NLE] │ │
│  │  ├─ 📄 BRIEF.md      (沟通目标) │  │                ▼   ▼                 │ │
│  │  ├─ 📄 STORYBOARD.md (分镜状态) │  │        [ 同一份 HTML 工程源码 ]       │ │
│  │  ├─ 📄 SCRIPT.md     (锁定旁白) │  │                ▲   ▲                 │ │
│  │  ├─ 🎨 frame.md      (品牌规范) │  │  [CLI 工具] ◄──┘   └──► [SDK/Player]│ │
│  │  ├─ ⚡ index.html    (主时间轴) │  ├─────────────────────────────────────┤ │
│  │  ├─ 📂 compositions/ (嵌套场景) │  │ <div id="stage" data-composition-id=│ │
│  │  ├─ 📂 assets/       (媒体字体) │  │   "main" data-duration="5">         │ │
│  │  └─ 🎬 renders/final.mp4       │  │   <div class="clip" data-start="0"  │ │
│  └────────────────────────────────┘  │   window.__timelines["main"] = tl;  │ │
│                                      └─────────────────────────────────────┘ │
│                 ┌────────────────────────────────────────┐                 │
│                 │ ● 所有工具读写同一份 HTML 源码，没有任何导出转换 │                 │
└─────────────────┴────────────────────────────────────────┴─────────────────┘
```

### Scene 03 · 起步路径一：Studio 桌面端与 AI Chat 云端直出
- **左右 1:1 双栏大卡片（各宽 `844px`）**：
  - **左栏（路径 A · Studio Desktop App — 推荐主力零代码路径）**：
    - 顶部徽章：`PATH 01 // STUDIO DESKTOP APP (Mac · Windows · Linux)`
    - 内部可视化演示三步流：
      1. `Make something` 输入框 + **Framey** 绿色小助手提问；
      2. **Storyboard 审批条**（Scene 1 → Scene 2 → Scene 3 缩略卡）；
      3. **多模态交互标签**：`Chat 对话` · `Point 画面指点` · `Draw 画圈涂鸦` · `Script 文档式剪辑`。
  - **右栏（路径 B · AI Chat Hosted MCP — 零安装云端路径）**：
    - 顶部徽章：`PATH 02 // AI CHAT MCP CONNECTOR (Claude · ChatGPT · Grok)`
    - 展示生产环境 MCP 地址胶囊：`https://mcp.heygen.com/mcp/hyperframes/`
    - 展示对话气泡演示与 **Local vs Hosted 选型表**（免安装 + 云端直出 MP4 `✓` vs 无本地工程目录与浏览器精细编辑 `!`）。

### Scene 04 · 起步路径二：本地 Coding Agent + Skills 全流程实战
- **左 5 : 右 7 开发者工作台**：
  - **左侧（三步流水线导航卡）**：
    - `STEP 01`：安装 Plugin 或 Core Skills（一次配置，全局生效）
    - `STEP 02`：使用 `/hyperframes` 斜杠指令发起构建（加载渲染契约与 450+ 组件块）
    - `STEP 03`：本地预览、门禁校验与确定性渲染（`preview` $\rightarrow$ `check` $\rightarrow$ `render`）
  - **右侧（上方仿真 Terminal 窗口 + 下方 9 大官方 Skills 速查矩阵）**：
    - 终端随旁白进度依次高亮三段真实命令与 Prompt：
      - `# 1. Install plugin or standalone skills`
        `npx skills add heygen-com/hyperframes`
      - `# 2. Prompt your coding agent`
        `Using /hyperframes, make a 10-second product intro for https://example.com.`
      - `# 3. Preview in browser editor, check & render`
        `npx hyperframes preview && npx hyperframes check && npx hyperframes render -o final.mp4`
    - 底部卡片网格展示 `/hyperframes`、`/hyperframes-cli`、`/hyperframes-registry (450+ blocks)`、`/media-use`、`/figma`、`/slideshow`、`/remotion-to-hyperframes`。

### Scene 05 · 免费开源边界与 12 集全栈路线图
- **阶段 A（前半段 · 免费 vs 增值清晰边界）**：
  - 左栏（翠绿 `#10B981` 边框）：**100% 免费开源 & 本地运行（Apache 2.0）**
    - 框架、CLI、Skills & 商业使用权
    - 本地无限次 MP4 渲染与 Browser Editor
    - Studio 桌面端 + **OpenCode 免费模型 / Ollama 本地模型**（附 Code2Video 基准测试：Qwen / DeepSeek / Kimi / GLM 距榜首仅 50 Elo 内）
    - 本地 **Kokoro TTS**、内置音效库、本地一键抠像
  - 右栏（紫金 `#8B5CF6` / `#F59E0B` 边框）：**按需付费 / 账号增值（Optional）**
    - 你自选的 Coding Agent 订阅（Claude Code / Codex / Cursor）
    - HeyGen Voice 1 顶级拟真语音 & 10,000+ 音乐库
    - HeyGen Avatars 数字人 & Video 1 AI 视频生成
    - HeyGen Cloud 云端免运维渲染（免费版含 5 次/月）
- **阶段 B（后半段 · 12 集四部曲全景路线图尾卡）**：
  - 4 列 × 3 行展示 EP01 ~ EP12 全部 12 集卡片，`EP01` 标记为 `✓ COMPLETED`，`EP02 · HyperFrames Studio 桌面端全攻略` 呈现翠绿脉冲高亮（`NEXT UP →`）。
