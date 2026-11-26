# HfEp12SdkPlayerAndCloudDeploy · 制作与文档核对笔记

- **剧集编号**：`EP.12` / `HfEp12SdkPlayerAndCloudDeploy`
- **文档核对要点**：
  - 最小集成表面与 13 包架构：`@hyperframes/sdk`, `@hyperframes/player`, `@hyperframes/producer`, `@hyperframes/engine`, `@hyperframes/core`, `@hyperframes/parsers`。
  - SDK：`openComposition`, `OverrideSet`, `scopedId` (`hf-HOST/hf-LEAF`), `dispatch()`, `batch()`, `can()`, `ORIGIN_APPLY_PATCHES`, `createFsAdapter` 必自 `@hyperframes/sdk/adapters/fs`, `resolveElementAffordances` 仅浏览器端。
  - Player：`<hyperframes-player>`, Shadow DOM, `postMessage`, `isProvablyEmptyAt`, `canApplyManualOffset`, `hyperframes share --include-source`。
  - 云部署：`cloud render` (200 MB), Vercel/Cloudflare/Modal, AWS Lambda Plan v2 (Step Functions, 250 MiB, 15 min, `PRODUCER_RESTRICT_PAGE_NETWORK`), GCP Cloud Run。
  - 高阶渲染与社区：4K 整数倍（拒 1080p→1440p）、10-bit H.265 `yuv420p10le` `BT.2020` `PQ`/`HLG` HDR、`--chroma-subsampling 444`、`--resume`、4K+HDR / 4:4:4+GPU 互斥、`bge-small-en-v1.5` 384 维 Catalog 语义搜索、`contributing` 贡献。
