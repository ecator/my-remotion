# HfEp04BrandAndExplainerFlows · 脚本原稿

> **剧集**：EP04 / 共 12 集 ·《从网页与文稿到成片：产品发布、科普解说与设计稿导入工作流》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 30 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`workflows.md`、`guides/{product-launch-video,faceless-explainer,motion-graphics,design-tools,figma,avatar-presenter}.md`、`prompting/design-systems.md`

---

## 1. 创作概念与叙事弧线

作为第二部分「十大 AI 创作工作流实战」的上篇，本集系统拆解前五大商业创作工作流与品牌规范核心方法论：
1. **工作流路由与产品发布大片（Product Launch）**：使用 `/hyperframes` 启动，抓取真实网页截图与调色板，落实「Hook → 3 Feature Beats → CTA」结构、`-18dB` BGM 上限，以及逐字稿按约 `130 words/min` 用 `~45s` 近似时长替代硬性锁死时长。
2. **无真人科普解说（Faceless Explainer）**：梳理 4 大叙事视角（Concept / How-to / Listicle / Story），讲透决定成片质量的第一杠杆 `one idea per scene` 与 `~60s` 近似时长法则。
3. **动态图形（Motion Graphics）**：聚焦 `<10s` 无旁白短动效，厘清 **MP4** 成品与 **WebM / MOV 透明 alpha 叠加层**（overlay）的严格边界。
4. **设计稿与 Figma 深度集成**：贯彻「Pictures stay pictures，需要动的元素重建为 HTML」原则，拆解 `hyperframes figma tokens`（生成 `figma-tokens.json`）先于 `hyperframes figma component` 的铁律（防 `data-figma-unresolved`）、3 项必选 PAT 权限（`File content`、`File metadata`、`Library content`）、以及无效 PAT 返回 `403 Invalid token`（而非 `401`）的排错陷阱。
5. **数字人主讲（Avatar Presenter）与 `frame.md` 品牌真理**：串联 `heygen auth login --oauth`、`remove-background` 人物背后穿插大字，以及 `frame.md` 锁定品牌色/字体并在 1080p H.264 视频媒介下放大描边与字号的黄金法则。

---

## 2. 分章节旁白文稿（中文配音）

### Scene 01 · 工作流选型地图与 Product Launch 产品发布大片（`ep04_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第四集。前两集我们掌握了桌面端和浏览器双编辑器，从这一集开始，我们正式进入十大 AI 创作工作流实战。在终端里用 `/hyperframes` 发起请求前，第一步永远是按手头输入源选对工作流：有网址走产品发布，有文稿走无真人科普，有设计稿走 Figma 导入。先看一号王牌工作流：Product Launch 产品发布大片。你只需粘贴产品官网 URL，Agent 会自动抓取真实界面截图、提取站点的调色板与字体，而不是凭空捏造假 UI。高质量发布片必须明确四件事：采用 Hook 抛痛点、3 个带字幕的 Feature Beats 展示实证、加品牌尾卡 CTA 的标准结构；把背景音乐限制在 `-18 dB` 以下防盖过人声；如果提供现成逐字稿，要按英语每分钟约 130 词估算时长，并且务必写大约 `~45s` 而非写死精确 45 秒，避免 AI 为凑秒数强行裁剪或注水台词。

### Scene 02 · Faceless Explainer 无真人科普解说与单镜头原则（`ep04_s02_voice.mp3`）

- **旁白原文**：
  > 如果手头没有可拍的产品界面，只有一篇技术文章、笔记或抽象概念，就该切换二号工作流：Faceless Explainer 无真人科普解说。HyperFrames 不会把你的文章机械地按自然段做成幻灯片，而是先提炼教学主轴，再围绕四种经典视角重构剧本：讲透一个底层机制用 Concept，一步步演示流程用 How-to，盘点要点用 Listicle 清单体，或者通过单个真实案例推导出通用结论的 Story 故事体。在这里，决定成片高级感的最大杠杆只有一句咒语：`one idea per scene`，每一幕只服务一个视觉焦点，把动态排版、机制示意图或数据图表做透；一旦塞进两个概念，画面就会沦为大段文字堆砌。同样记住，科普解说由真实配音决定最终片长，提示词里务必写 `~60s` 这样的近似时长，同时指定嵌入式字幕并按品牌强调色高亮关键词。

### Scene 03 · Motion Graphics 动态图形与透明通道避坑（`ep04_s03_voice.mp3`）

- **旁白原文**：
  > 当你不需要完整旁白叙事，只想做一条 10 秒以内的片头 Logo Sting、数字滚动统计、数据图表或角标包装时，就进入三号工作流：Motion Graphics 动态图形。动态图形的本质是「运动本身就是信息」，因此默认不加旁白，并且切忌把 2 秒的创意硬拉到 30 秒以上。实战中可以直接点名复用官方注册表里的经典 Block，比如用 `apple-money-count` 做里程碑数字滚动、用 `code-typing` 做终端打字、用 `x-post` 做社媒贴文动效，Agent 会先安装组件再按你的文案改写。导出格式上有一个极易踩错的坑：带完整背景色的全画幅动态图形一定要导出 MP4；只有当你制作需要叠加在实拍素材上的无背景角标、字幕条或 Logo 贴片（overlay）时，才要求导出带 alpha 透明通道的 WebM 或 MOV，对全屏带背景画面强行索要透明 WebM 只会得到不透明或边缘异常的废片。

### Scene 04 · Design Tools 与 Figma 深度集成及 403 排错（`ep04_s04_voice.mp3`）

- **旁白原文**：
  > 接下来看设计师最关心的四号工作流：从 Figma、Claude Design 或 Open Design 导入设计稿。贯穿所有设计工具的铁律只有一句话：静态不动的插画和图标保持图片资产，任何在视频里需要动起来或改变状态的图层，必须重建为真正的 HTML 代码。使用官方 Figma CLI 时，所有导入都会冻结为本地文件，渲染期零依赖 Figma 网络。非企业版账号申请 Personal Access Token 时，必须勾选全部三个只读权限：`File content`、`File metadata` 以及最容易漏掉的 `Library content`；排错时切记，无效或过期 PAT 会返回 `403 Invalid token`，而不是常见的 401。执行顺序更是重中之重：务必先运行 `hyperframes figma tokens` 生成 `figma-tokens.json` 变量索引，再运行 `hyperframes figma component` 导入组件，否则组件颜色无法按精确 Figma ID 绑定品牌变量，会被打上 `data-figma-unresolved` 警告标记。配合 `/figma` 技能，还能把 Figma Motion 时间轴直接翻译为可寻址的暂停 GSAP 动画。

### Scene 05 · AI Avatar 数字人主讲与 `frame.md` 品牌真理（`ep04_s05_voice.mp3`）

- **旁白原文**：
  > 本集压轴是五号工作流 AI Avatar Presenter 数字人主讲，以及贯穿全系列的品牌真理文件 `frame.md`。需要真人出镜讲解产品更新或基准评测时，只需配置 HeyGen 账号或在终端运行 `heygen auth login --oauth`，就能召唤专属数字孪生或官方虚拟主讲出镜口播，由 HyperFrames 在人物周围搭建可编辑的图表、B-roll 与逐词字幕；结合 `remove-background` 本地抠像，还能把巨型标题穿插在主讲人身后，实现电影级景深遮挡。最后，如何让整个系列视频保持绝对品牌一致？永远不要空喊「做得高级有品牌感」，而是在工程根目录写一份 `frame.md`，用 Frontmatter 锁死精确色值与字体族，并在视频化阶段遵循「针对 1080p 与 H.264 压缩适当放大描边、对比度与字号」的原则，让网页级品牌规范真正经得起视频压缩的考验。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / 工作流路由与 PRODUCT LAUNCH 发布大片` | `[WORKFLOW 01]` | `HfChapterIntro` 开篇 $\rightarrow$ 输入源工作流路由器（`/hyperframes`）+ Product Launch 结构流（`Capture URL` → `Hook → 3 Beats → CTA`、`-18dB BGM`、`~45s` vs 硬时长避坑） |
| **Scene 02** | `02 / FACELESS EXPLAINER 无真人科普解说` | `[WORKFLOW 02]` | 4 大叙事视角矩阵（`Concept` / `How-to` / `Listicle` / `Story`）+ `HfSplitCompare` 对比「单幕多概念文字墙」vs「`one idea per scene` + `~60s` 近似时长」 |
| **Scene 03** | `03 / MOTION GRAPHICS 动态图形与透明通道` | `[WORKFLOW 03]` | `<10s` 无旁白动效体系 + 注册表 Block 复用卡片 + `HfSplitCompare`（全画幅 `MP4` vs 无底色 `WebM / MOV alpha overlay` 避坑对照） |
| **Scene 04** | `04 / DESIGN TOOLS 与 FIGMA CLI 深度集成` | `[WORKFLOW 04]` | `HfTerminalWindow`（先 `hyperframes figma tokens` → `figma-tokens.json`，再 `hyperframes figma component` 防 `data-figma-unresolved`）+ 3 个 PAT 只读权限与 `403 Invalid token`（而非 `401`）排错警示卡 |
| **Scene 05** | `05 / AI AVATAR 数字人主讲与 FRAME.MD 品牌真理` | `[WORKFLOW 05]` | 左侧 Avatar Presenter 三层抠像穿插示意（`heygen auth login --oauth` + `remove-background`）+ 右侧 `HfCodeWindow` 展示 `frame.md` 规范与 1080p H.264 视频放大原则 |
