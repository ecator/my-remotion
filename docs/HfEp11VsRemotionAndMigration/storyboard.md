# HfEp11VsRemotionAndMigration · 分镜说明（Storyboard）

> **剧集**：EP11 ·《巅峰对决与无缝迁移：HyperFrames vs Remotion 源码级对比与转换》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · Inkwell 15 秒发布视频同题实测
- **组件**：`Scene01InkwellBenchmark.tsx`
- **视觉设计**：`HfChapterIntro` 开篇后通过 `HfSplitCompare` 直观呈现同 Prompt 零重试实测指标（Remotion: 10 TS / 1,037 行 / ~950 MB `node_modules` / 12m30s / 无声 vs HyperFrames: 4 HTML / 822 行 / 0 依赖 / 11m50s / BGM+5 SFX）。

## Scene 02 · 同一个 3 秒标题卡源码级对比
- **组件**：`Scene02TitleCardCodeCompare.tsx`
- **视觉设计**：左右双 `HfCodeWindow` 并排展示同一个 3 秒淡入淡出标题卡：左侧 Remotion `useCurrentFrame()` + `interpolate(frame, [0, 15, 75, 90], ...)`，右侧 HyperFrames `data-start="0"` + `gsap.timeline({ paused: true })` + `window.__timelines`。

## Scene 03 · 客观选型决策矩阵
- **组件**：`Scene03ObjectiveDecisionMatrix.tsx`
- **视觉设计**：`HfSplitCompare` 客观列出 Remotion 优势（React/TS 组件复用、单心智模型、≤3 人免费）与 HyperFrames 优势（Apache 2.0 免费商用无席位限制、零构建、原生 Web/GSAP/Lottie/Three.js、双向可视化编辑）。

## Scene 04 · `remotion-to-hyperframes` 迁移与诚实拒绝
- **组件**：`Scene04MigrationAndHonestRefusal.tsx`
- **视觉设计**：左栏展示单向真实源码迁移流程（`<Sequence>` → Clips、`TRANSLATION_NOTES.md`、`npx hyperframes diff` 强制 SSIM 验收）；右栏红框标出诚实拒绝清单（`useState` / `useReducer` / `useEffect` 与 MUI / shadcn / Chakra / Radix）。

## Scene 05 · AWS Lambda 渲染迁移与客观限制
- **组件**：`Scene05LambdaMigrationMap.tsx`
- **视觉设计**：左栏展示 `@remotion/lambda` → `renderToLambda` / `npx hyperframes lambda` 映射；右栏展示常见错误码（`BROWSER_GPU_NOT_SOFTWARE`, `FONT_FETCH_FAILED`）及 Lambda 限制（256 KiB / 无 HDR / 无硬件 GPU）。
