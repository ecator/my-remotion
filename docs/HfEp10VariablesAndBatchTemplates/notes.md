# HfEp10VariablesAndBatchTemplates · 制作与文档核对笔记

- **剧集编号**：`EP.10` / `HfEp10VariablesAndBatchTemplates`
- **文档核对要点**：
  - `data-composition-variables` 与 7 大类型（`string`, `number`, `color`, `boolean`, `enum`, `font`, `image`；音视频链接用 `string`）。
  - `role` 与 8 大 `portrays`（`subject_name`, `subject_domain`, `subject_tagline`, `subject_logo`, `recommended_position`, `competitor_name`, `authority_badge`, `host_identity`）。
  - 零 JS 绑定（`data-var-text`, `data-var-src` 仅媒体+必留 fallback `src` 防 `media_variable_src_no_fallback`, `var(--id)`）vs `getVariables()` & `data-variable-values`。
  - CLI `--variables`, `--variables-file`, `--strict-variables`, `--batch` `{name}` 路径沙箱（拦 `../`）, `--batch-concurrency`, Lambda `render-batch` JSONL & `256 KiB` 限制。
  - `:root` 遮蔽陷阱、差分换肤测试、4 大编译时不可变量（`data-width`, `data-height`, root `data-duration`, `fps`）。
