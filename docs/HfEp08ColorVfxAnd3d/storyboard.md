# HfEp08ColorVfxAnd3d · 分镜说明（Storyboard）

> **剧集**：EP08 ·《电影感调色与视觉特效：调色管线、`data-vfx-chain` WebGL2 与 3D》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · 固定顺序调色管线、`<hf-color-group>` 与 9 个可动画变量
- **组件**：`Scene01ColorGradingPipeline.tsx`
- **视觉设计**：`HfChapterIntro` 开篇后展示 8 步固定调色管线（`adjust` → `wheels` → `curves` → `hueCurves` → `secondaries` → `lut` → `details` → `effects`）、`<hf-color-group>` 与 9 个 `--hf-color-grading-*` 变量清单，重点红框标注「仅媒体生效（`color_grading_non_media`）」与「`--hf-color-grading-intensity` 不缩放 `details`/`effects`」。

## Scene 02 · `media-treatment`、`grade-compare` 与 18 款视觉效果
- **组件**：`Scene02LooksCliAndRetroEffects.tsx`
- **视觉设计**：左侧 `HfTerminalWindow` 展示 `media-treatment` 与 `grade-compare`（最多 16 方案同屏对照）；右侧展示 18 种效果四家族（含 Tape / CRT / Tube 模拟失真）及抠像分层空间隔离调色。

## Scene 03 · `data-vfx-chain` WebGL2 逐像素特效与 HTML-in-Canvas
- **组件**：`Scene03VfxChainAndHtmlInCanvas.tsx`
- **视觉设计**：左侧 `HfCodeWindow` 解剖 `data-vfx-chain`、`--vfx-<id>-<key>`、`<canvas layoutsubtree class="hf-vfx-src">`、`.hf-vfx-in`、`.hf-vfx-out`（醒目标注 `.hf-vfx-in` 必须明确像素宽高且唯一直接子元素防 0×0）；右侧对比 `none` (`fractal-noise`) / `self` (`wave-warp`, `displacement-map`, `drawElementImage`) / `backdrop`。

## Scene 04 · 真快门运动模糊与互斥边界
- **组件**：`Scene04MotionBlurTiersAndLimits.tsx`
- **视觉设计**：上部 `HfSplitCompare` 对比 `filter` 层级与 `capture` 层级（参数 `data-motion-blur`, `shutter`, `phase`, `samples`, `--page-motion-blur off`）；下部警示卡标注 VFX capture + motion-blur capture 冲突与 `liquid-glass-notification` WebGPU 依赖。

## Scene 05 · 真 3D 渲染与 `@hyperframes/shader-transitions`
- **组件**：`Scene05ThreeJsAndShaderTransitions.tsx`
- **视觉设计**：左侧对比 `Three.js via the adapter` vs CSS 3D；右侧展示 `@hyperframes/shader-transitions` 14 款 `SHADER_NAMES` 与 page-side compositing 渲染原理。
