# HfEp10VariablesAndBatchTemplates · 分镜说明（Storyboard）

> **剧集**：EP10 ·《参数化视频模板：`data-composition-variables`、语义槽位与批量渲染》
> **画幅**：1920×1080 · 30fps · 5 幕（`Scene01` ~ `Scene05`）

## Scene 01 · `data-composition-variables` 与七大数据类型
- **组件**：`Scene01VariablesSchemaAndTypes.tsx`
- **视觉设计**：`HfChapterIntro` 开篇后左侧用 `HfCodeWindow` 展示 `data-composition-variables` JSON；右侧 7 类型卡片矩阵（`string`, `number`, `color`, `boolean`, `enum`, `font`, `image`），底部醒目标注「无独立 video/audio 类型，音视频 URL 统一用 `string`」。

## Scene 02 · `role` 与 8 大 `portrays` 语义槽位
- **组件**：`Scene02RoleAndPortraysSlots.tsx`
- **视觉设计**：左栏展示 `role` 与语义命名示范；右栏 8 张网格卡呈现全部 8 个 `portrays` 值（`subject_name`, `subject_domain`, `subject_tagline`, `subject_logo`, `recommended_position`, `competitor_name`, `authority_badge`, `host_identity`）。

## Scene 03 · 免脚本绑定 vs `getVariables()` 与父子传参
- **组件**：`Scene03DeclarativeVsScriptBindings.tsx`
- **视觉设计**：`HfSplitCompare` 对比免脚本三件套（`data-var-text`, `data-var-src` 必保留占位 `src` 防 `media_variable_src_no_fallback`, `var(--id)`）与脚本模式（`window.__hyperframes.getVariables()`、`data-variable-values`）。

## Scene 04 · CLI 覆盖、本地 `--batch` 沙箱与 Lambda JSONL
- **组件**：`Scene04CliBatchAndLambdaJsonl.tsx`
- **视觉设计**：左侧 `HfTerminalWindow`（`--variables`, `--variables-file`, `--strict-variables`, `--batch` `{name}` 路径沙箱与 `--batch-concurrency`）；右侧展示 AWS Lambda `render-batch` JSONL 并发流水线与 `256 KiB` Step Functions 载荷上限。

## Scene 05 · `:root` 优先级陷阱、差分换肤与四大不可变量
- **组件**：`Scene05PrecedenceAndImmutables.tsx`
- **视觉设计**：左栏拆解 `:root { --id }` 遮蔽变量默认值陷阱与差分换肤检查表；右栏锁死四大编译时不可变量（`data-width`, `data-height`, 根 `data-duration`, `fps`）。
