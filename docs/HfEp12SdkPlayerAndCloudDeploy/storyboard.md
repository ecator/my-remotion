# HfEp12SdkPlayerAndCloudDeploy · 分镜说明（Storyboard）

> **剧集**：EP12 ·《企业级集成与分布式渲染：Headless SDK、Player 与 Lambda/Cloud Run》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · 最小集成表面法则与 13 包架构栈
- **组件**：`Scene01SmallestSurfaceStack.tsx`
- **视觉设计**：`HfChapterIntro` 开篇后展示 5 层最小集成表面架构（`CLI` → `@hyperframes/sdk` → `@hyperframes/player` → `@hyperframes/producer` → `@hyperframes/engine`）以及共享基座 `@hyperframes/core` / `@hyperframes/parsers`。

## Scene 02 · `@hyperframes/sdk` 源码编辑、增量覆盖与防环铁律
- **组件**：`Scene02HeadlessSdkAndGuards.tsx`
- **视觉设计**：左栏 `HfCodeWindow` 展示 `openComposition`、`scopedId` (`hf-HOST/hf-LEAF`)、`OverrideSet`、`dispatch()`/`batch()`/`can()`；右栏突出三大生产红线：`createFsAdapter` 必须来自 `@hyperframes/sdk/adapters/fs`、`ORIGIN_APPLY_PATCHES` 防无限 Undo 循环、`resolveElementAffordances` 仅限浏览器端。

## Scene 03 · `<hyperframes-player>` Web Component 与精准命中交互
- **组件**：`Scene03PlayerAndHitTesting.tsx`
- **视觉设计**：左栏展示 `<hyperframes-player>` Shadow DOM 与 `postMessage` / `createIframePreviewAdapter`；右栏展示 `isProvablyEmptyAt` & `canApplyManualOffset`（取代原始 `elementsFromPoint`）及 `hyperframes share` 默认排除源码（需 `--include-source`）。

## Scene 04 · 全场景云端渲染集群架构
- **组件**：`Scene04CloudLambdaCloudRun.tsx`
- **视觉设计**：四列阶梯架构对比：HeyGen `cloud render`（≤200 MB）、Vercel/Cloudflare/Modal 模板、AWS Lambda Plan v2（Step Functions、250 MiB / 15 min、`PRODUCER_RESTRICT_PAGE_NETWORK`）、GCP Cloud Run（Cloud Workflows + GCS）。

## Scene 05 · 4K、10-bit HDR、4:4:4、语义搜索与 12 集圆满收官
- **组件**：`Scene05ProRenderSearchAndFinale.tsx`
- **视觉设计**：左栏展示 4K 整数倍缩放（拒绝 `1080p`→`1440p`）、10-bit H.265 `yuv420p10le` `BT.2020` `PQ`/`HLG` HDR、`--chroma-subsampling 444`、`--resume` 及互斥警告（4K+HDR、4:4:4+GPU）；右栏展示 `bge-small-en-v1.5` 384 维 Catalog 语义搜索、开源 `contributing` 与 12 集收官致谢。
