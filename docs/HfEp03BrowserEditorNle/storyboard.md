# HfEp03BrowserEditorNle · 分镜说明（Storyboard）

> **剧集**：EP03 ·《源码级可视化剪辑：Browser Editor 浏览器编辑器与时间轴精修》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）
> **全局外壳**：`HfSeriesShell`（顶部 `EP.03 // HYPERFRAMES` + 面包屑 + 模块标签 + 计时器；底部 5 章节进度条；单行 `HfCaptionBar`）

---

## Scene 01 · 启动架构、四栏布局与 ⌘K 人机协作

- **组件**：`Scene01EditorOverviewAndCmdK.tsx`
- **视觉分段**：
  1. **开篇片头（`voiceMs: 0 ~ 5200ms`）**：`HfChapterIntro` 展示 `EP.03 // BROWSER EDITOR`、`源码级可视化剪辑`、`Browser Editor 浏览器编辑器与时间轴精修`，配芯片 `localhost:3002`、`NLE Timeline`、`WebMCP 12 Tools`。
  2. **终端启动与四栏拓扑（`5200ms ~ 27000ms`）**：左侧 `HfTerminalWindow` 运行 `npx hyperframes preview`（高亮默认端口 `3002`）；右侧绘制 Browser Editor 四栏 UI 线框图（Left: Compositions/Assets/Code/Lint、Center: Canvas、Right: Design/Layers/Variables/Renders、Bottom: Virtualized Timeline）。
  3. **双向写回与 ⌘K 桥梁（`27000ms ~ 结束`）**：亮起底部双向同步流（Canvas/Timeline 改动直写 HTML 源码）与 `⌘K` 指令打包卡（`Describe a change to the agent` → 复制完整元素上下文粘贴回终端 Agent）。

## Scene 02 · 画布操纵、Layers 遮挡与关键帧手势录制

- **组件**：`Scene02CanvasKeyframesAndGesture.tsx`
- **视觉分段**：
  1. **画布操纵与 Layers `z-index` 铁律（`0 ~ 18000ms`）**：左栏展示画布选区、网格 `G`、编组 `⌘G` 及 Layers 面板层叠卡，醒目标注「Timeline 轨道管时间，Layers / `z-index` 管前后遮挡」。
  2. **`Auto-record` 默认开启警示（`18000ms ~ 30000ms`）**：中央/顶部琥珀红警戒条点亮 `⚠ Auto-record manual edits as keyframes`（默认 ON），对比「开启态：移动自动打帧成动画」vs「关闭态：整段静态微调位置」。
  3. **关键帧 `K`、整路径平移与 `R` 手势录制（`30000ms ~ 结束`）**：右栏展示动画路径贝塞尔曲线与关键帧菱形（`K` 增删关键帧、`Option/Alt + Drag` 平移整条路径、`Unroll to edit` 展开代码循环动画），下方高亮 `R` Gesture Recording 手势录制键位表（Drag 位移 / Scroll 景深 / Shift+Drag 3D 旋转 / Option+Drag 旋转 / Cmd+Drag 透明度与缩放）。

## Scene 03 · 专业非线性时间轴（NLE）与修剪源码补偿

- **组件**：`Scene03NleTimelineAndShortcuts.tsx`
- **视觉分段**：
  1. **仿真多轨时间轴（`0 ~ 28000ms`）**：顶部使用 `HfTimelineMock` 呈现多轨时间轴、移动播放头、工作区 `I/O` 区间与分割标记，展示修剪左边缘时源码自动写入的 **`data-media-start`**（媒体元素）与 **`data-playback-start`**（嵌套子组合）。
  2. **播控与剪辑快捷键辨析（`28000ms ~ 结束`）**：下方三列卡片矩阵：
     - **播控组**：`Space`、`J / K / L`（倒放/停/正放）、`I / O` 工作区、`?` 快捷键表；
     - **工具辨析组（重点对比）**：`V` 选择 vs **`B` Razor 剃刀工具**（点击切片、Shift-click 切穿全轨）vs **`S` Split 播放头分割**（直接按播放头切选中片段）；
     - **高效工具栏**：`N` 吸附、`[` / `]` 左右全选、`Linked Selection`、`Ripple edit`（默认开启）。

## Scene 04 · 混音机架、花字覆盖、变量交付与多格式导出

- **组件**：`Scene04AudioRackOverridesAndExport.tsx`
- **视觉分段**：
  1. **左半区 `HfSplitCompare` · `Audio FX` vs 视觉 `Effects`（`0 ~ 28000ms`）**：明确隔离两者（左侧翠绿 `Audio FX`：信号链顺序、`voice-clean`/`voice-broadcast`/`Even Out Levels`、`Voiceover Carve` 挂在音乐轨而非人声轨、音量包络上限 **`+12 dB`**；右侧警告红 `Effects`：仅用于画面视觉滤镜，与声音无关）。
  2. **右半区 · 工程文件持久化与导出交付流（`28000ms ~ 结束`）**：三张阶梯式文件与交付卡片：
     - 花字单字微调 → 自动保存 **`caption-overrides.json`**；
     - Variables 面板 `Use this template` → 导出 **`.hyperframes/render-variables.json`** + 安全渲染命令；
     - 质量门禁（左下角 **Lint** + `npx hyperframes check`）→ Renders 面板导出 **MP4** / **WebM**（透明）/ **MOV (ProRes)**。

## Scene 05 · WebMCP 黑科技：让浏览器内 Agent 直接驱动 Studio

- **组件**：`Scene05WebMcpAgentStudio.tsx`
- **视觉分段**：
  1. **API 规范与避坑横幅（`0 ~ 18000ms`）**：顶部双态对照横幅：`✓ document.modelContext.getTools()`（标准异步注册 12 工具，监听 `toolchange`）vs `✗ 切勿使用 navigator.modelContext`（仅非标准兼容垫片，会误导特性检测）。
  2. **12 个 WebMCP 工具全景图（`18000ms ~ 36000ms`）**：左列 3 个 Read 工具（`studio_look` 返回源码 handle、`studio_inspect`、`studio_frame` 截帧 PNG 验收）；右列 9 个 Change 工具（`studio_select`、`studio_seek`、`studio_set_text`、`studio_set_style`、`studio_transform`、`studio_add/update/delete_animation`、`studio_add_keyframe`）。
  3. **5 级回执状态机与 Topology Lens（`36000ms ~ 结束`）**：底部五节点状态徽章（`refused` / `dispatched` / `saved` / `verified` / `failed`）配合 `Topology Lens` 事务光框示意，直观诠释人机同屏修改的安全性与可追溯性。
