# HfEp06PromptAnatomyAndMotion · 制作与文档核对笔记

- **剧集编号**：`EP.06` / `HfEp06PromptAnatomyAndMotion`
- **文档核对要点**：
  - `prompting/overview.md`：6 段宏观骨架（`[route]`~`[negatives]`、`no narration` vs `no audio`）、5 槽微观单拍（`[element]`~`[timing]`）、3 档规格旋钮、`Three.js via the adapter`、收敛式迭代（单变量、绝对目标、Freeze clause）。
  - `prompting/motion.md`：7 大运动法则、定格动画写 `two frames` 而非 `0.067` 秒、Shader vs CSS 转场表、6 大缓动词（`power2.out` / `power4.out` / `back.out` / `elastic.out` / `expo.out` / `sine.inOut`）、禁给文字与数字计数器加 `back.out` 过冲。
  - `prompting/editing-existing-videos.md`：6 大 NLE 动词映射（`data-start` / `data-track-index` / `data-duration` / `data-media-start` / `data-volume`）。
  - `prompting/capstone.md`：62s《The Timeline》9 区域与真实计数（`50+` Catalog Blocks、`19` Agent Skills、`7` Runtime Adapters；严格禁止出现过时计数）。
- **组件复用**：采用 `HfPromptAnatomy`、`HfSplitCompare`、`HfChapterIntro`、`HfSeriesShell`、`HfCaptionBar`。
