# HfEp08ColorVfxAnd3d · 制作与文档核对笔记

- **剧集编号**：`EP.08` / `HfEp08ColorVfxAnd3d`
- **文档核对要点**：
  - 8 步固定调色管线：`adjust` → `wheels` → `curves` → `hueCurves` → `secondaries` → `lut` → `details` → `effects`；`<hf-color-group>` 与 9 个 `--hf-color-grading-*`；`color_grading_non_media` 与 `--hf-color-grading-intensity` 不缩放 `details`/`effects`。
  - `media-treatment`、`grade-compare`（最多 16 方案）、18 种视觉效果、Tape/CRT/Tube 复古退化。
  - `data-vfx-chain` WebGL2、`--vfx-<id>-<key>`、`none`/`self`/`backdrop`、`fractal-noise`/`wave-warp`/`displacement-map`、`layoutsubtree`、`.hf-vfx-src`/`.hf-vfx-in`（必显式像素宽高）/`.hf-vfx-out`、`drawElementImage`。
  - `data-motion-blur`、`shutter`/`phase`/`samples`/`tier`（`filter` vs `capture`）、`--page-motion-blur off`、WebGPU `liquid-glass-notification` 与 VFX/MotionBlur capture 冲突。
  - `Three.js via the adapter` 与 `@hyperframes/shader-transitions`（14 款 `SHADER_NAMES`、page-side compositing）。
