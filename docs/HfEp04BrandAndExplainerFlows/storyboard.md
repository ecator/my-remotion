# HfEp04BrandAndExplainerFlows · 分镜说明（Storyboard）

> **剧集**：EP04 ·《从网页与文稿到成片：产品发布、科普解说与设计稿导入工作流》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · 工作流路由与 Product Launch 产品发布大片
- **组件**：`Scene01RouterAndProductLaunch.tsx`
- **视觉设计**：`HfChapterIntro` 开篇（`0–5.2s`）后进入双栏架构：左侧展示输入源工作流路由器（URL / Notes / Design / Footage / Code / Data → `/hyperframes`）；右侧展示 Product Launch 黄金结构（`Hook → 3 Feature Beats → CTA`、`BGM < -18dB`、`~130 words/min` 与 `~45s` 近似时长避坑警示）。

## Scene 02 · Faceless Explainer 无真人科普解说
- **组件**：`Scene02FacelessExplainer.tsx`
- **视觉设计**：上部四张等宽叙事视角卡（`Concept` / `How-to` / `Listicle` / `Story`）；下部 `HfSplitCompare` 对比「一幕塞多点文字墙 + 硬写死 `60s`」与「`one idea per scene` + `~60s` 近似时长 + 品牌高亮嵌入式字幕」。

## Scene 03 · Motion Graphics 动态图形与透明通道
- **组件**：`Scene03MotionGraphicsAlpha.tsx`
- **视觉设计**：顶部强调 `<10s` 无旁白与官方 Block 复用（`apple-money-count` / `code-typing` / `x-post` / `nyc-paris-flight`）；下部 `HfSplitCompare` 对比全画幅背景（`MP4`）与无底色叠加层（`WebM / MOV alpha overlay`）。

## Scene 04 · Design Tools 与 Figma 深度集成
- **组件**：`Scene04DesignToolsAndFigma.tsx`
- **视觉设计**：左侧 `HfTerminalWindow` 演示正确顺序（`hyperframes figma tokens KEY` → `figma-tokens.json` → `hyperframes figma component`），标注漏先导 tokens 触发 `data-figma-unresolved` 与 ID 匹配规则；右侧展示 3 个只读 PAT 权限（`File content`、`File metadata`、`Library content`）、`403 Invalid token`（而非 `401`）排错卡以及 `/figma` 将 Figma Motion 译为暂停 GSAP。

## Scene 05 · AI Avatar 数字人主讲与 `frame.md` 品牌真理
- **组件**：`Scene05AvatarAndFrameMd.tsx`
- **视觉设计**：左栏展示 Avatar Presenter 工作流（`heygen auth login --oauth` + `remove-background` 背景/大字/前景三层遮挡）；右栏使用 `HfCodeWindow` 呈现 `frame.md` Frontmatter 锁死品牌色/字体，以及针对 1080p H.264 压缩放大字号、对比度与描边的双轨原则。
