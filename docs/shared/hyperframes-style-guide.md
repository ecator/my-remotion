---
brand_name: "HyperFrames Encyclopedia Series"
resolution: "1920x1080"
fps: 30
theme_mode: "dark"
colors:
  bg_canvas: "#07090E"
  bg_surface: "#0F141F"
  bg_elevated: "#161D2E"
  bg_glass: "rgba(15, 20, 31, 0.84)"
  border_subtle: "rgba(255, 255, 255, 0.12)"
  border_active: "rgba(16, 185, 129, 0.55)"
  brand_primary: "#10B981"
  brand_neon: "#34D399"
  accent_cyan: "#06B6D4"
  accent_amber: "#F59E0B"
  accent_violet: "#8B5CF6"
  accent_danger: "#F43F5E"
  text_primary: "#F8FAFC"
  text_secondary: "#CBD5E1"
  text_muted: "#64748B"
typography:
  font_sans: "Noto Sans SC"
  font_mono: "JetBrains Mono"
  weights_sans: ["400", "500", "700", "900"]
  weights_mono: ["400", "700"]
---

# HyperFrames 12 集系列视频 · 跨集通用视觉与动效设计规范

> **单一事实来源（Source of Brand Truth）**：本规范吸取 HyperFrames 官方文档 [`prompting/design-systems.md`](./hyperframes-docs/prompting/design-systems.md) 中 `frame.md` 的设计哲学，并严格对齐本仓库 [`AGENTS.md`](../../AGENTS.md) 编码铁律，确保 12 集长视频在色彩、字体、UI 组件、动效节奏与声音质感上保持高度统一。

---

## 1. 视觉母题与品牌调性（"Framey Emerald & Studio Obsidian"）

本系列定位为**专业、高密度、极具现代工程美感的开发者与创作者百科**。视觉母题提炼自 HyperFrames Studio 的暗色工作台与吉祥物助手 **Framey（翠绿向导）**：

- **核心气质**：精确（Deterministic）、通透（Inspectable DOM）、丝滑（Seekable Motion）。
- **针对视频媒介放大原则（Scaled Up for Video Medium）**：
  - Web 页面上的 `1px` 极细边框和 `0.05` 弱阴影经 H.264/MP4 压缩后会完全糊成一片；Web 的 `14px–16px` 正文在 1080p 视频画面中难以看清。
  - **本系列硬性规定**：所有卡片外框统一采用 `1.5px–2px` 半透明高光描边（`rgba(255,255,255,0.12)` 或发光主题色），全片任何可读文字字号 **不得小于 `20px`**。

---

## 2. 色彩系统（Color Tokens）

每一集组件及 `src/components/` 公共原语必须严格引用以下色板，严禁随意硬编码散乱色值：

### 2.1 背景与表面层级（Surfaces）

| Token 名称 | 色值 / 表达式 | 适用场景 |
| :--- | :--- | :--- |
| `bgCanvas` | `#07090E` | 画布最底层黑曜石纯色基底 |
| `bgGradient` | `radial-gradient(ellipse at 50% 0%, #0D211B 0%, #090D16 55%, #05070B 100%)` | 标准全局背景径向光晕（顶部带微弱翠绿环境光） |
| `bgSurface` | `#0F141F` | 一级信息卡片、分屏容器、属性面板底色 |
| `bgElevated` | `#161D2E` | 二级抬升区块、代码块底衬、命令行终端内胆 |
| `bgGlass` | `rgba(15, 20, 31, 0.84)` + `backdropFilter: "blur(16px)"` | 浮动台词字幕卡、顶部/底部 HUD 状态栏、弹窗浮层 |
| `borderSubtle` | `rgba(255, 255, 255, 0.12)` | 默认卡片与网格分隔线（线宽 `1.5px` 或 `2px`） |

### 2.2 语义与语法高亮色（Semantic Accents）

为了在 12 集中建立稳定的视觉条件反射，不同技术维度固定绑定专属色彩：

| Token 名称 | 主色值 | 高亮亮色 | 绑定语义维度 |
| :--- | :--- | :--- | :--- |
| **Framey Emerald（主品牌绿）** | `#10B981` | `#34D399` | HyperFrames 核心概念、HTML DOM 结构、**正例（INSTEAD / RIGHT）**、校验通过 |
| **Timeline Cyan（时间轴青）** | `#06B6D4` | `#38BDF8` | `data-start` / `data-duration` 时间属性、Seek 播放头、CLI 命令行、架构数据流 |
| **Motion Amber（动效与变量金）** | `#F59E0B` | `#FBBF24` | GSAP Timeline、`window.__timelines`、关键帧（Keyframes）、`data-composition-variables` 变量 |
| **Agent Violet（AI 与特效紫）** | `#8B5CF6` | `#A78BFA` | AI Agent、Prompt 槽位、`data-vfx-chain` WebGL2 特效核、SDK API |
| **Danger Crimson（反例与警示红）** | `#F43F5E` | `#FB7185` | **反例（AVOID / WRONG）**、确定性禁令（`Math.random` / `Date.now`）、Lint 报错、对比参照系 |

### 2.3 文字色彩（Text Hierarchy）

- **主标题 / 核心代码（`textPrimary`）**：`#F8FAFC`（对比度 > 15:1）
- **常规正文 / 副标题（`textSecondary`）**：`#CBD5E1`
- **注释 / 行号 / 辅助标尺（`textMuted`）**：`#64748B`

---

## 3. 字体与排版规范（Typography）

严格遵守 [`AGENTS.md` 第 4.1 节](../../AGENTS.md) 中文字体加载规范，所有字体在模块顶层通过 `@remotion/google-fonts` 按需加载指定字重：

### 3.1 字体族定义

1. **中文与 UI 主字体（Sans-serif）**：
   ```ts
   import { loadFont as loadNotoSansSC } from "@remotion/google-fonts/NotoSansSC";
   const { fontFamily: sansFont } = loadNotoSansSC("normal", {
     weights: ["400", "500", "700", "900"],
   });
   export const FONT_SANS = `${sansFont}, "PingFang SC", "Microsoft YaHei", sans-serif`;
   ```
2. **代码、终端、属性与时间标尺字体（Monospace）**：
   ```ts
   import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";
   const { fontFamily: monoFont } = loadJetBrainsMono("normal", {
     weights: ["400", "700"],
     subsets: ["latin"],
   });
   export const FONT_MONO = `${monoFont}, "Cascadia Code", "Consolas", monospace`;
   ```

### 3.2 1080p 视频字号阶梯（Type Scale）

| 级别 | 角色 | 字号 (`px`) | 字重 | 行高 | 字距 (`letterSpacing`) | 字体族 |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Display** | 片头集数编号 / 巨型统计数字 | `80px – 96px` | `900` | `1.10` | `-0.03em` | `FONT_SANS` / `FONT_MONO` |
| **H1** | 章节大标题 / 场景主标题 | `52px – 64px` | `700` | `1.22` | `-0.01em` | `FONT_SANS` |
| **H2** | 模块卡片标题 / 分屏对比栏标题 | `34px – 40px` | `700` | `1.35` | `0` | `FONT_SANS` |
| **Body Large** | 核心观点列表 / Prompt 示范正文 | `28px – 32px` | `500` | `1.50` | `0.01em` | `FONT_SANS` |
| **Body** | 卡片说明文字 / 流程图节点文案 | `24px – 26px` | `400` | `1.50` | `0.01em` | `FONT_SANS` |
| **Code** | HTML / GSAP / SDK 代码块与终端 | `22px – 25px` | `400/700` | `1.55` | `0` | `FONT_MONO` |
| **Badge / HUD** | 顶部剧集角标 / 标签胶囊 / 时间轴刻度 | `20px – 22px` | `700` | `1.20` | `0.08em` | `FONT_MONO` |
| **Subtitle** | 底部同步配音字幕条 | `30px – 32px` | `700` | `1.40` | `0.02em` | `FONT_SANS` |

---

## 4. 画幅网格与全局常驻 HUD 布局（1920×1080）

全系列采用统一的 **三层空间结构**：**背景氛围层（Background） $\rightarrow$ 舞台内容层（Stage Content） $\rightarrow$ 全局常驻 HUD 与字幕层（Series Chrome）**。

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ [EP.01 // HYPERFRAMES]  02 / 单一事实来源            [CONCEPT]  ⏱ 01:12/03:30 │ ← 顶部 HUD 栏 (Top 36px, Height 52px)
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ┌────────────────────────────────────────────────────────────────────┐   │
│   │                                                                    │   │
│   │                        主舞台安全区 (Stage)                         │   │
│   │                   X: 96px ~ 1824px (宽 1728px)                     │   │
│   │                   Y: 112px ~ 930px (高 818px)                      │   │
│   │                                                                    │   │
│   │         （支持：单栏聚焦 / 左右 1:1 分屏 / 左 5:右 7 代码+预览 /      │   │
│   │                 三列卡片矩阵 / 架构流程图 + 时间轴仿真）              │   │
│   │                                                                    │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│                 ┌────────────────────────────────────────┐                 │
│                 │ ● 它的 HTML 就是视频本身，所有工具读写同一份源码 │                 │ ← 悬浮配音字幕卡 (Bottom 56px)
│                 └────────────────────────────────────────┘                 │
├═══════════════════════╦═══════════════════════╦════════════════════════════┤
│ 01 破题与三大特性       ║ 02 单一事实来源 (当前)  ║ 03 三大起步路径  │ 04 生态边界 │ ← 底部章节进度条 (Bottom 0~32px)
└═══════════════════════╩═══════════════════════╩════════════════════════════┘
```

### 4.1 舞台经典栅格模版（Stage Layouts）

1. **左文右码 / 左码右画（5:7 黄金分栏）**：左侧 `680px` 展示概念要点或 Prompt 槽位拆解，右侧 `1008px`（间距 `40px`）展示带语法高亮的 HTML/GSAP 代码窗或模拟预览画布。
2. **正反对比双栏（1:1 Split Compare）**：左右各 `844px`（间距 `40px`）。左栏顶部带红色 `#F43F5E` 胶囊标签 `✗ AVOID / 传统做法`，右栏顶部带翠绿 `#10B981` 胶囊标签 `✓ INSTEAD / HYPERFRAMES`。
3. **三步/三路径卡片矩阵（3-Column Grid）**：三张等宽 `552px` 卡片（间距 `36px`），用于“三大特性”、“三大起步路径”、“Doctor/Lint/Check 三剑客”等并列结构。

---

## 5. 动效设计铁律（Remotion 编码实现 × HyperFrames 运动哲学）

本系列是用 Remotion 制作的 HyperFrames 教程，因此动效必须**同时遵守 [`AGENTS.md` 第 4 节](../../AGENTS.md) Remotion 帧驱动铁律**与 **HyperFrames 官方 [`prompting/motion.md`](./hyperframes-docs/prompting/motion.md) 七大丝滑运动法则**：

1. **100% 帧驱动与 `fps` 解耦**：
   - 严禁任何 CSS `transition`、`animation`、`@keyframes`。
   - 所有时间节点统一通过 `const { fps } = useVideoConfig()` 换算（如 `const enterDuration = Math.round(0.45 * fps)`）。
2. **法则一：落地即静止（Move only what is live）**：
   - 标题、卡片、代码窗入场落定后**必须完全静止（Hold dead still）**，严禁给已经落定的文字或面板添加无意义的持续上下浮动或呼吸缩放。
   - 画面中持续运动的**只能是正在发生变化的焦点**：例如当前正在打字输入的代码行、正在向右推进的 Timeline 播放头游标（Playhead）、正在跳动的音频频谱或计数器。
3. **法则二：动作交错重叠（Overlap, don't queue）**：
   - 多张卡片或多行列表入场时，使用 `stagger = Math.round(0.08 * fps)`（约 2~3 帧）到 `Math.round(0.15 * fps)`（约 4~5 帧）的交错延迟；前一个元素运动到一半时，下一个元素已经开始入场。
4. **法则三：单一运动意图（One idea per move）**：
   - 常规卡片与文字入场统一使用 **`translateY(24px → 0)` + `opacity(0 → 1)`**，或者 **`scale(0.96 → 1)` + `opacity(0 → 1)`**。严禁同时叠加旋转、大幅缩放和位移。
5. **法则四：物理配重区分（Weight for physical objects only）**：
   - **文字、代码窗、数字计数器**：使用临界阻尼或无过冲曲线（`spring({ frame, fps, config: { damping: 200 } })` 或 `Easing.out(Easing.cubic)`），确保数字和文字干净落位、绝不来回弹跳。
   - **独立徽章、印章、物理图标卡**：允许轻微弹性过冲（`spring({ frame, fps, config: { damping: 14, stiffness: 180, mass: 0.8 } })`）。
6. **确定性随机（Seeded Randomness）**：
   - 任何背景星空、噪波、定格抖动必须使用 Remotion 的 `random("hf-ep01-particle-" + i)`，严禁 `Math.random()`。

---

## 6. 跨集公共组件库规划（`src/components/hyperframes/`）

为保证 12 集开发效率与视觉高度一致，在 `src/components/` 下提取以下可复用组件（仅作为内部组件被各集 `src/videos/HfEpXX.../` 引用，**不在 `src/Root.tsx` 中单独注册**）：

| 组件名 | 职责说明 |
| :--- | :--- |
| `HfSeriesShell.tsx` | 全局外壳：提供黑曜石径向渐变背景、微弱坐标网格、顶部剧集/章节 HUD 栏、底部多章节进度条及同步字幕渲染层 |
| `HfChapterIntro.tsx` | 剧集开篇大标题卡与章节切换过场卡（含集数编号 `EP.01`、章节序号、主副标题与扫描光效） |
| `HfCodeWindow.tsx` | 仿真 IDE / HTML 代码窗口：支持 macOS 窗口灯、文件名 Tab、行号、关键字着色、指定行高亮（Highlight Lines）与逐字打字机揭示 |
| `HfTerminalWindow.tsx` | 仿真命令行终端：演示 `npx hyperframes preview / check / render` 及 `/hyperframes` Agent 对话输入输出 |
| `HfPromptAnatomy.tsx` | 提示词解构卡：将 `[route]`、`[spec]`、`[beats]`、`[copy]`、`[technique]`、`[negatives]` 用不同语义色块高亮拆解 |
| `HfSplitCompare.tsx` | 正反对比分屏容器：左红（Avoid / 问题）右绿（Instead / 方案），支持同步时间标尺与视觉差异标注 |
| `HfTimelineMock.tsx` | 仿真 HyperFrames 时间轴与寻址播放头（Seek Playhead）：直观演示 `data-start`、`data-duration`、`data-track-index` 及暂停 GSAP 寻址过程 |

---

## 7. 音频、配音与字幕规范（Audio & Captions）

1. **TTS 配音规范**：
   - 优先使用表现力自然、吐字清晰的中文解说声线（通过仓库内置的 `use-azure-tts` 或 `edge-tts` / Gemini TTS 在 `scratch/` 中生成并转为 `.mp3`，移入 `public/<VideoName>/`）。
   - 每集按章节或自然段落切分音频片段（或生成整轨配音 + 精确词级/句级时间戳数据 `captions.ts` 放入 `src/videos/<VideoName>/`）。
2. **背景音乐（BGM）与自动闪避（Ducking）**：
   - BGM 统一存放在 `public/shared/bgm/`，采用现代科技感 Ambient / Downtempo Electronic 风格（不抢人声频段）。
   - **音量曲线**：片头/章节过场无人声时音量为 `0.60`；旁白配音开始前 `12` 帧平滑闪避（Ducking）降至 `0.16`；旁白结束后平滑回升。
3. **本系列 Remotion 字幕工程与排版铁律（Captions Engineering & Typography）**：
   结合 [`AGENTS.md` 第 3.1.5 / 4.1.7 节](../../AGENTS.md) 与内置技能 [`remotion-captions`](../../.agents/skills/remotion-captions/SKILL.md)，本系列所有剧集的配音字幕必须严格遵守以下 6 条规则：
   - **规则 A · 标准 `Caption` 类型与同步加载（禁止运行时 `fetch`）**：
     - 统一采用 `@remotion/captions` 的 `Caption` 结构（`{ text, startMs, endMs, timestampMs, confidence, pageBreakAfter? }`）。
     - 字幕数据必须保存在 `src/videos/<VideoName>/captions.ts` 中通过 ES Module 同步 `import`，或直接内联（inline）在组件的 `captions={[...]}` 属性字面量中（以支持 Remotion Studio 的可视化 Caption Editor 写回源码），**严禁放入 `public/` 在运行时异步 `fetch`**。
   - **规则 B · 音频与字幕同组绑定及局部时间基准（Sequence Grouping & Clip-Relative Time）**：
     - 每一幕/每一段配音的 `<Audio>`（或 `<Video>`）与其对应的字幕组件必须包裹在**同一个父级 `<Sequence>` 或 `<TransitionSeries.Sequence>`** 中，并将 `from`、`trimBefore`、`durationInFrames`、`playbackRate` 设置在该共享父级 `<Sequence>` 上。
     - 字幕的 `startMs` 和 `endMs` 必须以**该段音频文件自身的 `0ms` 为起点**（局部时间），不得展平为全片全局时间戳。这样在裁剪或调整某一段落的顺序与语速时，音画与字幕永远严格同步。
   - **规则 C · 单行限长、去尾标点与避头尾法则（Single-Line & Punctuation Rules）**：
     - **固定安全区**：1920×1080 画幅下，底部字幕容器宽 `1100px`、水平居中（`left: 410px`）、距离底边 `56px`（位于底部 `32px` 章节进度条上方）。
     - **严控单屏字数（单行不折行）**：每屏字幕严格控制在 **14～26 个汉字以内**（或等效中英混排长度），通过 `pageBreakAfter: true` 或 `createTikTokStyleCaptions` 强制在语义停顿处翻页，**绝不出现两行字幕堆叠遮挡主舞台底部代码/图表**。
     - **标点清洗**：单屏字幕**末尾一律去除句号、逗号、顿号**（仅保留必要的问号 `？`、感叹号 `！` 或引号 `「」`）；句中短停顿优先直接翻页或用单个空格分隔；若保留标点，严禁标点符号出现在行首。
   - **规则 D · 空白符敏感与中英混排间距（Whitespace Preservation）**：
     - `@remotion/captions` 对 `text` 字段中的空白符敏感：英文单词 token 前必须保留前导空格（如 `" timeline"`）；中文汉字与英文术语/数字之间保留半角空格或通过独立样式胶囊自然隔开。
   - **规则 E · 逐词/逐词组焦点高亮与术语胶囊（Active Token & Code Pill）**：
     - 遵循 *"Move only what is live"* 法则：字幕翻页入场仅做 `120ms` 的轻微上浮淡入（`translateY(8px → 0)`），落定后整行位置保持静止，**仅随音频进度高亮当前正在朗读的词组（Token）**（当前词 `#FFFFFF` + 底部 `#10B981` 指示线或 `#34D399` 高亮；未读词 `#CBD5E1`）。
     - 字幕中出现的 HTML 属性、CLI 命令、API 名称（如 `data-start`、`window.__timelines`、`/hyperframes`），统一使用 `FONT_MONO` 等宽字体 + `rgba(16, 185, 129, 0.16)` 圆角代码胶囊渲染。
   - **规则 F · 静音区间自动隐藏（Clean Silence Gaps）**：
     - 当两句旁白之间存在超过 `400ms` 的呼吸停顿或章节过场音乐时，底部字幕胶囊必须完全淡出隐藏，不得让上一句残留在画面上。

4. **HyperFrames 官方字幕设计准则（来自 [`prompting/captions-catalog.md`](./hyperframes-docs/prompting/captions-catalog.md)）**：
   在制作涉及字幕演示的章节（尤其是 EP02、EP05、EP07）及设计画面内嵌动态大字（Kinetic Typography）时，严格遵循官方 Catalog 的 4 条设计戒律：
   - **调性匹配组件（Tone → Component）**：高能社媒用 `caption-kinetic-slam`（单字全屏砸入）或 `caption-highlight`（逐词高亮）；干净企宣用 `caption-clip-wipe` / `caption-weight-shift`；科技极客用 `caption-glitch-rgb` / `caption-matrix-decode`；复杂动态背景防吞字用 `caption-blend-difference`（逐像素差值反相）。
   - **只强调关键词（Emphasize Only Keywords）**：粒子爆发、1.4x 放大或琥珀/霓虹跳色**仅用于核心关键词、品牌名或关键数字**，严禁在每个词上叠加重度特效。
   - **单段落单一视觉身份（One Identity Per Section）**：同一章节内只使用一种花字样式，严禁混搭两种花字组件互相打架。
   - **人物前景遮挡大字（Text-Behind-Subject Cutout）**：演示“人物背后穿插巨型台词关键词”时，必须呈现三层结构：**背景层 $\rightarrow$ Display 级动态大字层 $\rightarrow$ 人物抠像前景层（Cutout）**，直观体现抠像遮挡关系。

---

## 8. 视频 Props 的 Zod Schema 统一约定

每集视频的主组件 Schema 统一包含以下基础可调参数（方便在 Remotion Studio 右侧面板可视化微调）：

```ts
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const hfEpisodeBaseSchema = z.object({
  episodeNumber: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});
```
