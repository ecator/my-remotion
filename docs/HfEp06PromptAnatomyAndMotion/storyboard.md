# HfEp06PromptAnatomyAndMotion · 分镜说明（Storyboard）

> **剧集**：EP06 ·《像导演一样写 Prompt：六段式提示词骨架与七大丝滑运动法则》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · 六段式提示词骨架、五槽位与三档规格旋钮
- **组件**：`Scene01PromptSkeletonAndDial.tsx`
- **视觉设计**：`HfChapterIntro` 开篇后进入黄金分栏：左侧使用 `HfPromptAnatomy` 逐槽高亮 `[route]`、`[spec]`、`[beats]`、`[copy]`、`[technique]`、`[negatives]`（标注 `no narration` vs `no audio`）；右侧展示微观 5 槽位（`[element]`/`[motion]`/`[layout]`/`[style]`/`[timing]`）与 3 档规格旋钮（含 `Three.js via the adapter`）。

## Scene 02 · 七大丝滑运动黄金法则
- **组件**：`Scene02SevenMotionLaws.tsx`
- **视觉设计**：上部 `HfSplitCompare` 左红（Avoid）右绿（Instead）对照展示法则 1–5（`Move only what is live`、`Move the camera to get somewhere`、`Overlap, don't queue`、`One idea per move`、`Weight for physical objects only` 强调绝不给文字与数字计数器加 `back.out` 过冲）；底部双卡呈现法则 6（视差景深单前景）与法则 7（格式配速）。

## Scene 03 · 确定性定格动画、动机转场与六大缓动词
- **组件**：`Scene03StopMotionTransitionsEase.tsx`
- **视觉设计**：顶部展示定格动画确定性规则（`✓ two frames` 两帧量化 vs `✗ 切勿写 0.067 秒`）；左下展示 Calm / Medium / High 三档 Shader 与 CSS 转场表；右下展示 6 大形容词与 GSAP 曲线对照（`power2.out`、`power4.out`、`back.out`、`elastic.out`、`expo.out`、`sine.inOut`）。

## Scene 04 · 收敛式迭代与六大 NLE 动词映射
- **组件**：`Scene04ConvergentIterationAndNle.tsx`
- **视觉设计**：左侧展示 75–90% 一次直出天花板与收敛三原则（单变量、绝对目标值、Freeze 冻结条款、剥离重叠加）；右侧展示 6 大 NLE 动词映射到 HTML 属性（`data-start`、`data-track-index` + `z-index`、`data-duration`、`data-media-start`、`data-volume`）。

## Scene 05 · 62 秒一镜到底 Capstone《The Timeline》解剖
- **组件**：`Scene05CapstoneTimelineFilm.tsx`
- **视觉设计**：顶部展示摄影契约（Dwell-and-sweep、3 大永驻元素 Wire / Ruler / Clip Card）；中部 9 节点连续轨道图贯穿 0–62s 九大区域；底部展示真实生态计数（`50+` Catalog Blocks、`19` Agent Skills、`7` Runtime Adapters）及种子 42 两帧定格礼花收尾。
