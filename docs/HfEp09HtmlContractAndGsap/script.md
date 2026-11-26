# HfEp09HtmlContractAndGsap · 脚本原稿

> **剧集**：EP09 / 共 12 集 ·《解剖 HyperFrames 工程：HTML Schema、时间属性与确定性寻址渲染》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 30 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`concepts/{compositions,data-attributes,determinism,frame-adapters}.md`、`guides/{gsap-animation,frame-sources,imported-film-html}.md`、`reference/{html-schema,lint-rules}.md`、`packages/lint.md`、`help.md`

---

## 1. 创作概念与叙事弧线

作为第四部分「底层契约、对比与云端架构」的开篇，本集面向前端与全栈开发者，全面剖析 HyperFrames 的底层 HTML Schema 规范、寻址动画运行时与确定性铁律：
1. **根容器最小契约与嵌套子组合**：详解 `data-composition-id`、`data-start`、`data-width`、`data-height`、`data-duration`，重点警示纯静态/纯媒体组合漏写 `data-no-timeline` 会卡死等待整整 45 秒（`player-ready-timeout`）；剖析 `data-composition-src` + `<template>` 封装（根文件严禁套 `<template>`）与 `window.__hyperframes.assetUrl()`。
2. **时间属性、轨道与图层避坑大全**：拆解相对 `data-start` 表达式（如 `intro - 0.5`）、核心铁律「Tracks are not layers」（`data-track-index` 仅管编辑器轨道，`z-index` + `isolation: isolate` 才管前后遮挡）、已废弃报错属性 `data-end` / `data-layer`、`data-media-start` vs `data-playback-start`，以及 HTML 中自闭合 `<video />` / `<hf-audio-group />` 吞掉后续兄弟节点的经典惨案。
3. **暂停 GSAP 寻址与 Frame Adapter 扩展机制**：剖析 `gsap.timeline({ paused: true })` 注册到 `window.__timelines`、必须在 `document.fonts.load` 就绪后再注册时间轴，以及 `FrameAdapter`、`createGSAPFrameAdapter`、`registerFrameSource` 与 `createFilmBridge` 对接自定义动画运行时。
4. **确定性渲染三大禁令**：彻底禁绝 `Date.now` / `requestAnimationFrame`、`Math.random` / 无种子随机、渲染期未锁定 `fetch` 与 CSS `zoom`、严禁 JS 手动控制媒体播放或显隐。
5. **质量门禁三剑客（Doctor / Lint / Check）**：串联 `npx hyperframes doctor`、`@hyperframes/lint` 与 `npx hyperframes check`（8 fps craft 巡检、`.motion.json` 运动图谱、WCAG 对比度、`--safe-zone` 与 OpenCV 人脸防遮挡）。

---

## 2. 分章节旁白文稿（中文配音）

### Scene 01 · HTML Schema 最小契约、45 秒超时坑与嵌套子组合（`ep09_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第九集，从这一集起我们正式进入架构与开发者篇。如果你要手写或审查 Agent 产出的底层视频源码，第一关就是吃透 HTML Schema 最小契约。一个合法的根组合容器必须声明 `data-composition-id`、`data-start="0"`、`data-width`、`data-height` 和 `data-duration`。这里藏着新手最高频的卡死坑：如果你的视频完全是纯媒体或纯静态画面、没有注册任何 GSAP 时间轴，一定要在根节点补上 `data-no-timeline`，否则渲染器会苦苦等待时间轴注册直到 45 秒超时！大型工程需要拆分多幕时，通过 `data-composition-src` 引入外部子组合，每个外部子组合必须用 `<template>` 标签包裹防止提前执行，而根文件自身绝不能套 `<template>`；子组合内引用相对路径素材时，用 `window.__hyperframes.assetUrl()` 即可自动按工程根目录稳健解析。

### Scene 02 · `data-*` 时间属性、图层遮挡与 HTML 解析惨案（`ep09_s02_voice.mp3`）

- **旁白原文**：
  > 接下来盘点 `data-*` 时间与图层属性的四大工程避坑。第一，时间排布无需手算累加法，`data-start` 支持相对表达式，比如写 `data-start="intro - 0.5"` 就能提前半秒交错入场；但千万不要再写早已废弃的 `data-end` 或 `data-layer`，静态检查会直接报错拦截。第二，铭记「Tracks are not layers」：`data-track-index` 只决定元素在编辑器里排在第几行轨道，画面谁压住谁完全由 CSS `z-index` 控制；当负 `z-index` 背景层意外被父容器底色盖住时，在容器上加一行 `isolation: isolate` 建立独立层叠上下文即可立刻拯救。第三，区分入点偏移：普通音视频用 `data-media-start`，嵌套子组合用 `data-playback-start`。第四，HTML5 规范不认自定义元素或媒体标签的斜杠自闭合，手写 `<video />` 或 `<hf-audio-group />` 会直接吞掉后面的所有兄弟节点，务必写完整闭合标签！

### Scene 03 · 暂停 GSAP 寻址、`window.__timelines` 与 Frame Adapters（`ep09_s03_voice.mp3`）

- **旁白原文**：
  > HyperFrames 为什么在老旧电脑上渲染复杂动效也能一帧不掉？秘诀在于「外部寻址驱动（Seekable Animation）」。在标准 GSAP 写法中，你必须用 `gsap.timeline({ paused: true })` 创建一条处于暂停状态的时间轴，然后以根容器 ID 为键名注册到全局 `window.__timelines` 对象上；如果涉及自定义网络或本地字体，务必先等 `document.fonts.load` 就绪再测量排版并注册 `window.__timelines`，否则首帧文字宽度会算错。渲染器逐帧推进时，只需调用 `tl.seek(t)` 精准跳转并截帧即可。除了内置的 `createGSAPFrameAdapter`，如果你使用 Three.js、Lottie、Canvas 或外部导出的 HTML 影片，还可以通过标准 `FrameAdapter` 接口、全局 `registerFrameSource` 或 `createFilmBridge` 把任意自定义动画运行时接入同一套确定性时钟。

### Scene 04 · 确定性渲染三大禁令与排版红线（`ep09_s04_voice.mp3`）

- **旁白原文**：
  > 为了保证同一份源码在本地预览、多进程并发和云端 AWS Lambda 分片渲染中产出像素级一致的画面，HyperFrames 立下了三条不可逾越的确定性铁律。禁令一：严禁读取真实系统时钟 `Date.now()`，也严禁使用 `requestAnimationFrame` 或 `setTimeout` 驱动动画，一切状态必须纯粹是时间参数 `t` 的确定性函数。禁令二：严禁使用无种子的 `Math.random()` 或随机字符串语法，所有粒子星空与定格抖动必须使用固定种子的伪随机生成器，否则不同并发节点会画出一闪一闪的废片。禁令三：严禁在渲染期发起未锁定的外部 `fetch` 请求，也不要用 JavaScript 手动调用 `video.play()` 或切显隐，媒体播放和可见性必须交由渲染器统一托管；同时还要避免在舞台上使用 CSS `zoom`，因为它会直接破坏运动模糊与坐标测量精度。

### Scene 05 · 质量保障三剑客：Doctor、Lint 与 Check（`ep09_s05_voice.mp3`）

- **旁白原文**：
  > 代码写完之后，怎么在耗时渲染前把 99% 的隐蔽故障全部揪出来？官方配备了质量门禁三剑客。第一剑 `npx hyperframes doctor`：秒级体检本机 Node 版本、FFmpeg、Chromium 与环境依赖，专治环境玄学。第二剑 `@hyperframes/lint`：毫秒级静态源码规则库，直接拦截漏写 `data-no-timeline`、误用废弃 `data-end`、字体未声明、音频链损坏与媒体调色加错标签等低级错误。第三剑 `npx hyperframes check`：启动真实无头浏览器执行全维度验收，默认以 `8 fps` 采样进行视觉工艺巡检，输出可供机器分析的 `.motion.json` 运动图谱，同步核查 WCAG 文字对比度、`--safe-zone` 社交平台安全区裁切，甚至调用 OpenCV 人脸检测确保字幕与角标绝不挡住主讲人的脸！三剑全绿再导出，稳如磐石。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / HTML SCHEMA 最小契约、45 秒超时坑与嵌套组合` | `[HTML CONTRACT]` | `HfChapterIntro` 开篇 $\rightarrow$ `HfCodeWindow`（Root 必填属性 + `data-no-timeline` 45s 超时警示）+ 右侧 `data-composition-src` / `<template>` / `assetUrl()` 架构 |
| **Scene 02** | `02 / DATA-* 时间属性、图层遮挡与 HTML 解析惨案` | `[ATTRS & TRAPS]` | `HfSplitCompare` 对比 4 大坑点（`data-start` 相对式 vs 废弃 `data-end`/`data-layer`、`data-track-index` vs `z-index` + `isolation: isolate`、`data-media-start` vs `data-playback-start`、禁用 `<video />` / `<hf-audio-group />` 自闭合） |
| **Scene 03** | `03 / 暂停 GSAP 寻址、__TIMELINES 与 FRAME ADAPTER` | `[SEEKABLE ENGINE]` | 左栏 `HfCodeWindow`（`document.fonts.load` → `gsap.timeline({ paused: true })` → `window.__timelines`）+ 右栏 `FrameAdapter` / `createGSAPFrameAdapter` / `registerFrameSource` / `createFilmBridge` 扩展拓扑 |
| **Scene 04** | `04 / 确定性渲染三大禁令与排版红线` | `[DETERMINISM]` | 三大红框禁令矩阵（禁 `Date.now` / `requestAnimationFrame`、禁 `Math.random`、禁渲染期 `fetch` & JS 手动播媒体 & CSS `zoom`）+ 纯函数 `Frame = f(t)` 公式条 |
| **Scene 05** | `05 / 质量保障三剑客：DOCTOR、LINT 与 CHECK` | `[QUALITY GATES]` | 三列质量门禁卡（`hyperframes doctor` / `@hyperframes/lint` / `hyperframes check` 含 `8 fps` craft、`.motion.json`、WCAG、`--safe-zone`、OpenCV 人脸防遮挡） |
