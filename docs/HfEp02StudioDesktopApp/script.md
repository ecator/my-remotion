# HfEp02StudioDesktopApp · 脚本原稿

> **剧集**：EP02 / 共 12 集 ·《零代码 AI 视频工作站：HyperFrames Studio 桌面端全攻略》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 00 秒 ~ 4 分 30 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`docs/shared/hyperframes-docs/studio-app/*.md`（全部 11 篇官方文档）

---

## 1. 创作概念与叙事弧线

作为第一部分「核心认知与双编辑器生态」的第二集，本集聚焦不写代码即可驾驭 HyperFrames 的核心桌面端软件 **HyperFrames Studio App**（支持 Mac、Windows、Linux 免费下载）：
1. **建立三栏工作台心智**：从 Home 主页三大创建入口（Make / Reference / Script）与四步首发构建器（Hook / Proof / Turn / Call to action），讲清翠绿向导 Framey 与六大本地 Agent 的安装与权限边界。
2. **精通聊天框三把钥匙**：拆解 `@`（素材与 91 款字幕样式）、`#`（七大内置工具调用）和 `/`（命令与技能开关），以及 Agent 运行中 `Enter` 转向与 `Ctrl+Enter` 排队的细节。
3. **颠覆传统剪辑交互**：展示像改 Word 文档一样剪口播的 Script 面板、画布上的 V/A/D/C 涂鸦批注与 Apple Silicon 本地抠像，以及全部攒进 `Pending video edits` 一次性批处理的效率飞跃。
4. **贯通品牌、AI 生成与交付闭环**：覆盖 Brand Kit 扫描与本地 `assets/brand-kit` 沉淀、HeyGen Video 1（含 7.8 MB 1080p 体积坑与 720p 避坑法则）、Reference Video 风格复刻、Mac 终端 `npx hyperframes open` 与 `catch-up` 双向接力、本地与云端导出（免费版每月 5 次云导出 / 200 MB 上限）以及 Share 团队审阅链接。

---

## 2. 分章节旁白文稿（中文配音）

> **配音分段原则**：按 5 个独立章节（Scene 01 ~ Scene 05）分别生成 `.mp3` 配音文件与局部时间轴字幕（`startMs` 均从该章节音频 `0ms` 起算），每个章节包裹在独立的 `<Sequence>` 中，确保音画与字幕 100% 同步。

### Scene 01 · 工作区全景、三大入口与六大本地 Agent（`ep02_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第二集。上一集我们认识了网页转视频的底层理念，这一集我们聚焦零代码主力工作站：HyperFrames Studio 桌面端。它免费支持 Mac、Windows 与 Linux，所有工程都以标准文件夹保存在本地的 `.hyperframes-studio` 目录中。打开 Home 主页，你会看到三大创建入口：用一句话开启创作的 Make，复刻爆款节奏的 Reference，以及文稿驱动的 Script。首次打开还会弹出四步构建器，通过 Hook 吸引注意、Proof 展示产品、Turn 反转破题、Call to action 收束品牌，帮你拼出第一条发布大片。在三栏项目界面里，翠绿小向导 Framey 会全程提示进度，你可以一键安装并切换六大本地 Agent：Claude Code、Codex、Grok、Antigravity、GitHub Copilot，以及完全免费的 OpenCode。这里有个关键权限须知：默认 Auto 模式会拦截高危操作，而 OpenCode 与 GitHub Copilot 必须在设置中开启 Full access 才能运行。

### Scene 02 · 聊天框三把钥匙：`@`、`#`、`/` 与运行中调度（`ep02_s02_voice.mp3`）

- **旁白原文**：
  > 真正让 Studio 桌面端效率翻倍的，是左侧聊天框里的三把快捷键：`@`、`#` 和 `/`。第一把钥匙是 `@`，用于把精准上下文塞进提示词：你可以直接引用项目素材、场景与品牌套件、真实视频灵感片段、Voices 声线，以及右侧面板内置的 91 款字幕样式；按下 Tab 键即可在不同分组间快速跳转，选中后会在输入框上方生成标签芯片，彻底杜绝 AI 猜错文件名。第二把钥匙是 `#`，用来强制指定某项 HyperFrames 专有工具，包括 `#Storyboard` 先出分镜图、`#Brand kit` 套用品牌、`#Remove background` 一键抠像、`#HeyGen Voice 1` 配音与 `#HeyGen Video 1` 生成视频片段。第三把钥匙是 `/`，除了用 `/clear` 开启新对话、在 Claude Code 中用 `/compact` 压缩长上下文，还能直接点亮口播模板与外部安装的 Skills。最后记住一个防踩坑快捷键：当 Agent 正在干活时，直接按 Enter 会立刻打断并转向重跑，而按 Ctrl+Enter 才会把新指令稳妥排进下一轮队列。

### Scene 03 · Script 文档式剪辑、画布批注与 Pending Edits（`ep02_s03_voice.mp3`）

- **旁白原文**：
  > 面对初版成片，怎么修改最快？Studio 桌面端把剪辑变成了两种零门槛交互。第一种是在右侧 Script 面板里，像编辑 Word 文档一样剪口播：系统转录出每个字后，你只需选中废话并点击 Cut 或按退格键，文字会加上删除线，而剪辑任务并不会立刻触发重算，而是先暂存到聊天框上方的 Pending video edits 待处理清单里。选中任意词句，还可以点击 Fix words 仅修正识别错字而不改动原声，或者直接插入 Zoom in 推镜、B-roll 与标题卡；系统甚至会自动标出冗余气口，支持一键 Keep all 或 Cut all。第二种交互在中间预览画布下方：按 V 键使用 Select 选中图层，再按 A 键触发 Prompt to edit，在 Apple Silicon 芯片的 Mac 上右键素材还能直接执行 Cut out object here 本地抠像；按 D 键进入 Draw 模式在画面或时间轴上画圈批注，按 C 键用 Comment 钉住具体时刻的修改意见。所有划词、画圈与评论都会汇总进 Pending video edits，最后点一次发送，让 Agent 一次性全量改完。

### Scene 04 · Brand Kit、HeyGen Video 1 与 Reference 复刻（`ep02_s04_voice.mp3`）

- **旁白原文**：
  > 商业制作离不开品牌统一与视觉素材，Studio 桌面端内置了三大高阶生产力模块。首先是 Brand Kits 品牌套件：点击 Scan my site 输入官网网址，或上传自有文件，系统会自动提取主副色板、Logo、字体、截图与品牌规则；一旦绑定到某个项目，Studio 会把套件文件完整拷贝进工程的 `assets/brand-kit` 目录，确保视频迁移到任何环境都能原样渲染。其次是 HeyGen Video 1：输入 `#HeyGen Video 1` 就能在项目里直接生成 5 到 60 秒的一镜到底视频，支持 480p 与默认 768p 分辨率，既能首帧生视频，也能上传最多 9 张图 Match a look 锁定画风，或用 5 秒内参考视频配合人物照片执行 Copy a movement 动作迁移。这里有个极易踩的体积坑：一段 5 秒 7.8 MB 的 1080p 参考视频会触发参考文件过大报错，把它压到 720p 就能顺利通过。第三是 Reference Video 风格复刻：粘贴最长 30 分钟的 YouTube、TikTok 或 X 链接，系统会自动判断采用 Copy editing style 复刻口播剪辑，还是用 Video brief 复刻动态图形，并在成片后用 Show original 同时间轴左右分屏对照原片。

### Scene 05 · 终端双向接力、本地与云端导出及团队审阅（`ep02_s05_voice.mp3`）

- **旁白原文**：
  > 最后来看开发协作与成品交付的完整闭环。如果你之前是在终端里的 Claude Code、Codex 或 Grok 中起盘项目，在 Mac 上只需运行一行 `npx hyperframes open`，Studio 桌面端就会直接原地打开该工程，并无缝继承刚才的对话上下文；改完画面回到终端后，再运行 `npx hyperframes catch-up`，终端里的 Agent 就能瞬间读懂你在桌面端做了哪些调整。需要注意，只有从 Agent 会话中通过 `npx hyperframes open` 交接的项目才支持 `catch-up`，普通终端打开或侧边栏 Import projects 导入的工程不会自动同步会话历史。导出交付时，Export 面板支持 MP4、WebM 和 MOV 格式，并提供本地与云端双引擎：This Mac 本地渲染全计划免费、不限次数、不限画幅与体积；Cloud 云端渲染则不占用本机算力，但免费版每月限额 5 次，且项目体积上限 200 MB，超出时可以让 Framey 自动把大素材托管到云端资产库。点击顶部 Share 还能一键生成团队审阅链接，灵活配置仅自己、受邀人、工作区或公开访问权限，后续重新导出后只需点击 Add this version 即可在同一链接下无缝迭代版本。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / 工作区全景、三大入口与六大本地 AGENT` | `[STUDIO HOME]` | `HfChapterIntro` 开篇 $\rightarrow$ Studio Home 三入口面板（`Make` / `Reference` / `Script` + 4-part `Hook`/`Proof`/`Turn`/`Call to action`）+ 6 大 Agent 权限矩阵（`Auto` vs `Full access` 陷阱警告） |
| **Scene 02** | `02 / 聊天框三把钥匙：@、#、/ 与运行调度` | `[CHAT COMMANDS]` | 三列交互命令卡（`@` 上下文与 91 款字幕 / `#` 七大工具芯片 / `/` 命令与 Skills）+ 底部 `Enter`（转向打断）vs `Ctrl+Enter`（入队等待）快捷键对照栏 |
| **Scene 03** | `03 / SCRIPT 文档式剪辑与画布涂鸦批注` | `[VISUAL EDITING]` | 左侧 Script 逐字文档剪辑界面（划词 `Cut` / `Fix words` / `Add Zoom & B-roll` + `Pending video edits` 批处理队列）+ 右侧预览画布工具栏（`V` Select / `A` Prompt / Apple Silicon `Cut out object here` / `D` Draw / `C` Comment） |
| **Scene 04** | `04 / BRAND KIT、VIDEO 1 与 REFERENCE 复刻` | `[PRO MODULES]` | 三大模块全景图：Brand Kit（`Scan my site` → `assets/brand-kit`） / HeyGen Video 1（5–60s、480p/768p、`7.8 MB` 1080p → `720p` 避坑告警） / Reference Video（`Copy editing style` vs `Video brief` + `Show original` 同步时钟对比） |
| **Scene 05** | `05 / 终端双向接力、双引擎导出与审阅闭环` | `[DELIVERY LOOP]` | 左侧 `HfTerminalWindow`（`npx hyperframes open` ↔ `npx hyperframes catch-up` 条件警示）+ 右侧 `HfSplitCompare`（`This Mac` 本地无限免费 vs `Cloud` 5 次/月与 `200 MB` 上限）+ 底部 Share 4 级权限与版本迭代条 |

---

## 4. 音频生成参数

- **生成脚本**：`uv run scratch/gen_hf_episode_audio.py --spec scratch/ep02_audio_spec.json`
- **声线与语速**：`zh-CN-YunxiNeural`，语速 `+6%`，24kHz 单声道 48kbps MP3
- **输出位置**：`public/HfEp02StudioDesktopApp/ep02_s01_voice.mp3` ~ `ep02_s05_voice.mp3`
- **字幕数据**：`src/videos/HfEp02StudioDesktopApp/captions.ts`（自动由 `pnpm exec remotion ffprobe` 实测时长生成）
