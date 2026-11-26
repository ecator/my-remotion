# HfEp02StudioDesktopApp · 分镜说明（Storyboard）

> **剧集**：EP02 ·《零代码 AI 视频工作站：HyperFrames Studio 桌面端全攻略》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）
> **全局外壳**：`HfSeriesShell`（顶部剧集角标 `EP.02 // HYPERFRAMES` + 章节面包屑 + 模块标签 + 计时器；底部 5 章节进度条；悬浮单行 `HfCaptionBar`）

---

## Scene 01 · 工作区全景、三大入口与六大本地 Agent

- **组件**：`Scene01HomeAndAgents.tsx`
- **视觉分段**：
  1. **开篇片头（`voiceMs: 0 ~ 5200ms`）**：使用 `HfChapterIntro` 呈现 `EP.02 // STUDIO DESKTOP APP`、`零代码 AI 视频工作站`、`HyperFrames Studio 桌面端全攻略`，展示 `Mac / Win / Linux`、`Make / Reference / Script`、`6 Local Agents` 关键词胶囊，随后平滑淡出进入主舞台。
  2. **Home 三入口与四步构建器（`5200ms ~ 28000ms`）**：左栏展示 Studio App 模拟主页，高亮切换 `Make`、`Reference`、`Script` 三个页签，下方展开首次启动四步引导卡（`Hook` → `Proof` → `Turn` → `Call to action`），并标注本地工程存储目录 `.hyperframes-studio`。
  3. **Framey 向导与六大 Agent 权限矩阵（`28000ms ~ 结束`）**：右栏展示 Framey 翠绿向导状态卡与 6 个本地 Agent 卡片（`Claude Code`、`Codex`、`Grok`、`Antigravity`、`GitHub Copilot`、`OpenCode` 免费标识），底部醒目警示条对比 `Auto` 默认模式 vs `Full access`（特别标注 `OpenCode` 与 `GitHub Copilot` 仅支持 `Full access`）。

## Scene 02 · 聊天框三把钥匙：`@`、`#`、`/` 与运行中调度

- **组件**：`Scene02ChatShortcutsAndTools.tsx`
- **视觉分段**：
  1. **三列命令矩阵（`0 ~ 38000ms`）**：按旁白进度依次聚焦三张等宽卡片：
     - **卡片 1 · `@` 上下文芯片**：列出 `Media`、`Scenes & brand kit`、`Inspirations`、`Captions (91 styles)`、`Voices`、`Projects`、`Tools`，标注 `Tab` 键分组跳转与输入框上方 Chip 形态。
     - **卡片 2 · `#` 专有工具强制调用**：展示 `#Storyboard`、`#Brand kit`、`#Remove background`、`#HeyGen Voice 1`、`#HeyGen Video 1`、`#Reference video`、`#Create assets` 彩色胶囊。
     - **卡片 3 · `/` 命令与 Skills**：展示 `/clear`（新会话）、`/compact`（Claude Code 压缩上下文）、预置口播格式与用户自定义 Skills 开关。
  2. **运行中调度快捷键栏（`38000ms ~ 结束`）**：底部宽幅对照卡对比 Agent 运行中的两个核心按键：`Enter`（琥珀色警示：立即打断并转向 Steer）vs `Ctrl+Enter`（翠绿推荐：入队 Queue 下一轮执行）。

## Scene 03 · Script 文档式剪辑、画布批注与 Pending Edits

- **组件**：`Scene03ScriptAndCanvasEdit.tsx`
- **视觉分段**：
  1. **左栏：Script 文档式视频剪辑（`0 ~ 25000ms`）**：仿真右侧 Script 面板，展示带时间戳的转录文本，演示选中废话点击 `Cut`（文字出现红线删除线）与 `Restore`，上方弹出浮窗工具条（`Comment` / `Cut` / `Fix words` 仅改错字不动原声 / `Add: Zoom in, B-roll, Title card`），顶部附带 AI 建议精简条（`Keep all` / `Cut all`）。
  2. **右栏：预览画布交互与 Apple Silicon 抠像（`25000ms ~ 42000ms`）**：仿真中间视频画布，下方工具栏依次高亮 `V`（Select + `A` Prompt to edit + 右键菜单 `Cut out object here` on Mac Apple Silicon）、`D`（Draw 多笔画合并画圈批注）、`C`（Comment 固定时间点评论）。
  3. **底部统一汇聚队列（`42000ms ~ 结束`）**：亮起 `Pending video edits` 队列栏（显示来自 Script 与 Canvas 的 3 条待发送修改 + `Send 3 edits to Claude Code` 按钮），直观呈现“攒齐一次发给 Agent”的批量工作流。

## Scene 04 · Brand Kit、HeyGen Video 1 与 Reference 复刻

- **组件**：`Scene04BrandKitVideo1AndRef.tsx`
- **视觉分段**：
  1. **卡片 1 · Brand Kits 品牌套件（`0 ~ 18000ms`）**：展示 `Scan my site` / `New kit from your own files` 入口、五大要素（Colors / Logos / Fonts / Files / Rules），以及自动复制到项目本地 `assets/brand-kit` 的路径锁，确保跨设备一致渲染。
  2. **卡片 2 · HeyGen Video 1 与 7.8 MB 避坑指南（`18000ms ~ 41000ms`）**：展示 5–60s 一镜到底参数（`16:9`/`9:16`/`1:1`、`480p`/`768p` 默认）、`Start from a picture`、`Match a look`（≤9 图）、`Copy a movement`（≤5s 参考视频 + 人物照 → ≤15s）。底部红框高亮官方文档真实踩坑案例：`5s 1080p (7.8 MB)` → `"The references are too large to send"`，右侧翠绿箭头指向 `降采样至 720p ✓ 通过`。
  3. **卡片 3 · Reference Video 风格复刻（`41000ms ~ 结束`）**：展示 YouTube/TikTok/IG/X 链接（≤30 min）自动分流两条路径：`Copy editing style`（真人出镜口播）vs `Video brief`（无真人动态图形），下方展示 `What to swap` 槽位替换与 `Show original` 同时间轴左右分屏对比。

## Scene 05 · 终端双向接力、本地与云端导出及团队审阅

- **组件**：`Scene05HandoffExportAndShare.tsx`
- **视觉分段**：
  1. **左侧 `HfTerminalWindow` · Mac 终端双向接力（`0 ~ 24000ms`）**：演示在 Claude Code / Codex / Grok 会话中运行 `npx hyperframes open` 继承对话，再通过 `npx hyperframes catch-up` 同步桌面端改动回终端；底部补充警示：`catch-up` 仅对 Agent 会话执行 `hyperframes open` 交接的工程生效，普通终端或 `Import projects` 不携带历史会话。
  2. **右侧 `HfSplitCompare` · This Mac vs Cloud 双引擎导出（`24000ms ~ 43000ms`）**：左栏（翠绿）`This Mac` 本地渲染（全计划免费无限次、支持任意画幅与时长、文件不出本地）；右栏（青紫）`Cloud` 云端渲染（释放本机算力，但 Free 计划每月仅含 **5 次**云导出、项目体积上限 **200 MB**、启动后不可真正取消计费，超限可让 Framey 托管大文件）。
  3. **底部通栏 · Share 团队审阅闭环（`43000ms ~ 结束`）**：展示 4 级权限胶囊（`Only you` / `Only people you invite` / `Anyone in workspace` / `Anyone with the link`）、`can comment` vs `can only watch`、以及迭代闭环 `Export MP4 → Add this version`（同一链接无缝更新）与 `Turn off link`（关闭链接但保留评论）。
