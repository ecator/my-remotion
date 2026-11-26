# HfEp11VsRemotionAndMigration · 制作与文档核对笔记

- **剧集编号**：`EP.11` / `HfEp11VsRemotionAndMigration`
- **文档核对要点**：
  - Inkwell 15s 实测：Remotion 10 TS / 1,037 行 / ~950 MB `node_modules` vs HyperFrames 4 HTML / 822 行 / 0 依赖 + BGM & 5 SFX。
  - 3s 标题卡源码对比：`useCurrentFrame` + `interpolate` vs `data-start` + `gsap.timeline({ paused: true })` + `window.__timelines`。
  - 客观选型：肯定 Remotion（React/TS 复用、≤3 人免费）与 HyperFrames（Apache 2.0 免费商用）。
  - `remotion-to-hyperframes` 单向真实源码迁移、`<Sequence>`、`TRANSLATION_NOTES.md`、诚实拒绝（`useState` / `useEffect` / MUI / shadcn / Chakra / Radix）、强制 `hyperframes diff` + SSIM。
  - Lambda 迁移：`renderMediaOnLambda` → `renderToLambda` / `hyperframes lambda`、`BROWSER_GPU_NOT_SOFTWARE` / `FONT_FETCH_FAILED`、256 KiB / 无 HDR / 无硬件 GPU 限制。
