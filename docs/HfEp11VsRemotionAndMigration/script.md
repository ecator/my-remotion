# HfEp11VsRemotionAndMigration · 脚本原稿

> **剧集**：EP11 / 共 12 集 ·《巅峰对决与无缝迁移：HyperFrames vs Remotion 源码级对比与转换》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 25 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`guides/hyperframes-vs-remotion.md`、`prompting/remotion-migration.md`、`deploy/migrating-to-hyperframes-lambda.md`

---

## 1. 创作概念与叙事弧线

本集以完全客观、源码级的视角正面对比两大网页转视频框架 **HyperFrames** 与 **Remotion**，并拆解官方单向迁移与 Lambda 平滑过渡流程：
1. **同题实测（Inkwell 15 秒发布视频）**：对比同一段 Prompt 交给 Claude Code 的实测产物：Remotion 生成 `10` 个 TypeScript 文件（`1,037` 行）+ 约 `950 MB` `node_modules`（12 分 30 秒，无音效）；HyperFrames 生成 `4` 个 HTML 文件（`822` 行）+ `0` 依赖（11 分 50 秒，自带 BGM 与 5 个 SFX）。
2. **同一个 3 秒标题卡源码级解剖**：左右逐行对比 Remotion 的帧驱动纯函数（`useCurrentFrame()` + `interpolate(frame, [0, 15, 75, 90], ...)`）与 HyperFrames 的秒级声明式寻址（`data-start="0"` + `gsap.timeline({ paused: true })` + `window.__timelines`）。
3. **客观选型决策矩阵**：尊重并肯定 Remotion 的优势（React 组件库复用、TypeScript 严格类型、纯函数单心智模型、3 人及以下免费授权），对比 HyperFrames 的优势（Apache 2.0 无席位限制免费商用、零构建步骤、直接复用现有网页/GSAP/Lottie/Three.js、双向可视化编辑）。
4. **官方单向迁移技能（`remotion-to-hyperframes`）与诚实拒绝机制**：强调必须是真实 Remotion 源码的单向迁移（不支持反向导出或非 Remotion 工程），输出 `TRANSLATION_NOTES.md`，将 `<Sequence>` 映射为 Clips；遇到 `useState` / `useReducer` / `useEffect` 状态机或第三方 React UI 组件库（MUI / shadcn / Chakra / Radix）时主动拒绝翻译而非静默瞎猜，并强制通过 `npx hyperframes diff` 进行逐帧 **SSIM** 视觉相似度验收！
5. **AWS Lambda 渲染平台迁移映射**：梳理从 `@remotion/lambda`（`renderMediaOnLambda`）迁往 `renderToLambda` / `npx hyperframes lambda`，并诚实列出排错码（`BROWSER_GPU_NOT_SOFTWARE` / `FONT_FETCH_FAILED`）及 Lambda 限制（256 KiB Step Functions 上限、暂不支持 HDR / 硬件 GPU）。

---

## 2. 分章节旁白文稿（中文配音）

### Scene 01 · 同题实测：Inkwell 15 秒发布视频正面对决（`ep11_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第十一集。既然本系列视频本身就是用 Remotion 工程制作的，这一集我们必须用最客观、最硬核的源码视角，把 HyperFrames 和 Remotion 拉到同一张实验台正面对比。两个框架都会打开真实浏览器逐帧截图编码，本质分歧在于写法：Remotion 让你写 React 组件，HyperFrames 让你写标准 HTML。官方做过一次零重试同题实测：把同一段 15 秒 Inkwell 笔记应用发布视频需求交给 Claude Code。结果 Remotion 耗时 12 分 30 秒，产出 `10` 个 TypeScript 文件共 `1,037` 行代码、安装约 `950 MB` 的 `node_modules` 且未配音轨；HyperFrames 耗时 11 分 50 秒，仅产出 `4` 个 HTML 文件共 `822` 行代码、零依赖，还顺手配好了背景音乐与五段音效。当然单次运行不代表谁画质碾压谁，真正长远的区别在于你手里留下的资产形态。

### Scene 02 · 同一个 3 秒标题卡的源码级深度解剖（`ep11_s02_voice.mp3`）

- **旁白原文**：
  > 把显微镜对准一个最简单的 3 秒淡入淡出标题卡，就能一眼看清两种哲学。在 Remotion 里，组件是当前帧号 `frame` 的纯函数：你通过 `useCurrentFrame()` 拿到整数帧号，再用 `interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0])` 自己做帧级插值计算，并在另一个注册文件里声明 90 帧的 `<Composition>`，逻辑纯净透明，完全可以在脑海里推演任意一帧。而在 HyperFrames 里，时间和动画全写在同一份 HTML 中：`<div class="clip" data-start="0" data-duration="3">` 以秒声明在场时间，下方用 `gsap.timeline({ paused: true })` 编写暂停时间轴并注册到 `window.__timelines`，渲染器在截图前把时间轴精准 seek 到目标秒数。漏写 `paused: true` 或忘记注册 `window.__timelines` 画面就会静止不动；而一旦遵守契约，GSAP、Lottie 与 Three.js 都能原地享受确定性寻址。

### Scene 03 · 客观选型决策矩阵：谁更适合你的团队？（`ep11_s03_voice.mp3`）

- **旁白原文**：
  > 两个框架没有绝对的谁淘汰谁，关键看你的团队基因与商业场景。Remotion 的强项非常扎实：如果你的团队深耕 React 与 TypeScript，已经拥有现成的设计系统组件库，希望用统一的类型检查与单向纯函数心智模型构建数据驱动视频，Remotion 的成熟生态极具吸引力；其开源协议对个人与三人及以下公司免费，四人及以上团队则需按席位购买商业授权。而 HyperFrames 的核心优势在于：采用 Apache 2.0 协议彻底免费商用且无席位限制；无需 Webpack 或打包构建，浏览器直接双击就能用 DevTools 调试；能原生承接设计师现有的网页、SVG 与 GSAP 动效；并且从第一天起就为 AI Agent 与桌面端、浏览器双可视化编辑量身打造。

### Scene 04 · `remotion-to-hyperframes` 单向迁移与诚实拒绝机制（`ep11_s04_voice.mp3`）

- **旁白原文**：
  > 如果你手头已有现成的 Remotion 项目想迁到 HyperFrames，官方提供了专属技能 `/remotion-to-hyperframes`。注意这是针对真实 Remotion 源码的单向迁移翻译，不能反向导出，也不能拿来替代从零创作。迁移时需指定具体组件文件，技能会自动把 `<Sequence>` 转为 Clips、把 `interpolate` 映射为暂停的 GSAP 时间轴，并将无法完全等价的字体或转场细节忠实记录进 `TRANSLATION_NOTES.md`。最值得点赞的是它的「诚实拒绝机制」：一旦静态检查扫到 `useState`、`useReducer`、`useEffect` 这类依赖历史状态的 React Hooks，或者 MUI、shadcn、Chakra、Radix 等第三方 React UI 组件库，Agent 会主动拒绝硬翻，绝不敷衍瞎猜，而是推荐运行时互操作方案。翻译完成后绝不能肉眼验收了事，必须同时渲染双版本并运行 `npx hyperframes diff` 输出逐帧 SSIM 结构相似度评分！

### Scene 05 · AWS Lambda 渲染平台迁移映射与客观限制（`ep11_s05_voice.mp3`）

- **旁白原文**：
  > 最后来看已经在生产环境跑通 `@remotion/lambda` 的工程团队，如何平滑迁移到 HyperFrames 的云端分布式渲染。在源码翻译阶段，原来的 Lambda 部署配置会被干净剥离，不阻塞视频画面转换；在基础设施侧，只需把调用入口从 `renderMediaOnLambda` 切换到 `renderToLambda` 或命令行 `npx hyperframes lambda`，即可复用类似的无服务器分片并发架构。排查云端故障时重点关注两类明确错误码：`BROWSER_GPU_NOT_SOFTWARE` 提示检查无头浏览器软件渲染配置，`FONT_FETCH_FAILED` 则提示把远端字体本地化打包避免冷启动超时。同时也请客观评估 AWS Lambda 的硬性边界：受 Step Functions 256 KiB 事件上限约束，且暂不支持真 HDR 与硬件 GPU 加速；需要超大 4K 或复杂特效时，结合下集要讲的 Cloud Run 或本地渲染才是最佳拍档。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / 同题实测：INKWELL 15 秒发布视频对决` | `[BENCHMARK 15S]` | `HfChapterIntro` 开篇 $\rightarrow$ `HfSplitCompare` 实测数据对比（Remotion 10 TS / 1,037 行 / ~950 MB vs HyperFrames 4 HTML / 822 行 / 0 依赖 + 音效） |
| **Scene 02** | `02 / 同一个 3 秒标题卡的源码级深度解剖` | `[CODE ANATOMY]` | 左右双 `HfCodeWindow` 逐行源码对比（左：`useCurrentFrame` + `interpolate` 帧纯函数；右：`data-start` + `gsap.timeline({ paused: true })` + `window.__timelines`） |
| **Scene 03** | `03 / 客观选型决策矩阵：谁更适合你的团队？` | `[DECISION MATRIX]` | `HfSplitCompare` 客观呈现 Remotion 强项（React/TS 组件复用、纯函数、≤3 人免费）vs HyperFrames 强项（Apache 2.0 无席位限制、0 构建、GSAP/Web 原生、AI 双向编辑） |
| **Scene 04** | `04 / REMOTION-TO-HYPERFRAMES 迁移与诚实拒绝` | `[MIGRATION & SSIM]` | 左侧单向迁移流水线（`<Sequence>` → Clips、`TRANSLATION_NOTES.md`、`npx hyperframes diff` 强制 **SSIM** 逐帧打分）+ 右侧红框「诚实拒绝清单」（`useState`/`useEffect`、MUI/shadcn/Chakra/Radix） |
| **Scene 05** | `05 / AWS LAMBDA 平台迁移映射与客观限制` | `[LAMBDA MIGRATION]` | 左栏映射表（`renderMediaOnLambda` → `renderToLambda` / `npx hyperframes lambda`）+ 右栏排错码（`BROWSER_GPU_NOT_SOFTWARE` / `FONT_FETCH_FAILED`）与 Lambda 限制（256 KiB / 无 HDR / 无硬件 GPU） |
