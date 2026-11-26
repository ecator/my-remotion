# HfEp10VariablesAndBatchTemplates · 脚本原稿

> **剧集**：EP10 / 共 12 集 ·《参数化视频模板：`data-composition-variables`、语义槽位与批量渲染》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 15 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`concepts/variables.md`、`studio/assets-and-blocks.md`、`deploy/templates-on-lambda.md`、`prompting/design-systems.md`

---

## 1. 创作概念与叙事弧线

本集系统拆解如何把一条精品视频改造成企业级可复用模板，实现不改一行布局代码即可换肤换文案、批量生成成百上千条个性化视频：
1. **变量声明与七大数据类型**：在根元素声明 `data-composition-variables` JSON 数组，详解全部 7 种类型（`string`、`number`、`color`、`boolean`、`enum`、`font`、`image`），重点点出**没有独立的 `video`/`audio` 类型**，音视频链接一律声明为 `string`。
2. **面向 AI Agent 的语义元数据（`role` 与 8 大 `portrays` 槽位）**：区分决定旋钮维度的 `role` 与决定品牌身份语义的 `portrays`（`subject_name`、`subject_domain`、`subject_tagline`、`subject_logo`、`recommended_position`、`competitor_name`、`authority_badge`、`host_identity`），防止 Remix 时 Agent 错填品牌身份。
3. **免脚本声明式绑定 vs 动态脚本与父子传参**：对比零 JS 绑定（`data-var-text`、`data-var-src`、`var(--id)`；提醒 `data-var-src` 仅对媒体标签生效、务必保留占位 `src` 防 `media_variable_src_no_fallback`、切勿传 `data:` 视频 URI）与复杂脚本读取（`window.__hyperframes.getVariables()` 与父子组合传参 `data-variable-values`）。
4. **CLI 覆盖、本地 `--batch` 沙箱与 Lambda JSONL 批量渲染**：梳理 `--variables`、`--variables-file`、`--strict-variables`，本地 `--batch rows.json --output "renders/{name}.mp4"` 路径防越界沙箱（拦截 `../`）与 `--batch-concurrency`，以及 AWS Lambda `render-batch` JSONL 与 Step Functions `256 KiB` 单任务载荷上限。
5. **CSS `:root` 优先级陷阱、差分化换肤自检与四大编译时不可变量**：警示手写 `:root { --id }` 会覆盖并遮蔽变量默认值；强调四项编译时不可变量（`data-width`、`data-height`、根 `data-duration`、`fps`）绝对不能做成变量。

---

## 2. 分章节旁白文稿（中文配音）

### Scene 01 · `data-composition-variables` 与七大数据类型（`ep10_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第十集。做完一条满意的商业视频后，如果要面向一百个客户替换名称、Logo、主色调甚至专属产品视频，该怎么做？答案是参数化视频模板。只需在组合根元素声明 `data-composition-variables` JSON 数组，就能把允许变更的槽位暴漏出来，浏览器编辑器会自动为每个变量生成可视化表单。系统一共只定义了七种数据类型：`string`、`number`、`color`、`boolean`、`enum`、`font` 和 `image`。这里有个新手极易臆造的坑：框架并不存在单独的 `video` 或 `audio` 变量类型，想要动态替换视频或音轨链接，一律声明为 `string` 类型即可。把固定视觉结构留在源码里，把会变的内容抽成带默认值的类型化变量，一条工程就能裂变出无限版本。

### Scene 02 · 面向 Agent 的语义元数据：`role` 与八大 `portrays` 槽位（`ep10_s02_voice.mp3`）

- **旁白原文**：
  > 如果这个模板将来要交给 AI Agent 自动换品牌 Remix，光靠位置命名比如「右上角小字」绝对不行，AI 会完全猜错业务含义。因此变量的 `label` 和 `description` 必须写清语义职责，并配合两个正交的元数据字段：第一个是 `role`，告诉工具这个旋钮控制内容、样式、时长、运动还是布局；第二个是极其关键的 `portrays` 语义身份标签，它不影响渲染结果，却像护栏一样标明八大业务槽位：`subject_name` 品牌名、`subject_domain` 网址、`subject_tagline` 标语、`subject_logo` 标志、`recommended_position` 榜单推荐位、`competitor_name` 竞品名、`authority_badge` 权威背书，以及 `host_identity` 宿主界面身份。有了 `portrays`，Agent 就能精准分辨哪些该换、哪些绝不能乱编。

### Scene 03 · 零脚本声明式绑定、`getVariables()` 与父子传参（`ep10_s03_voice.mp3`）

- **旁白原文**：
  > 声明完变量后，怎么绑定到画面上？90% 的场景无需写一行 JavaScript，靠三件声明式法宝就能搞定：用 `data-var-text` 替换文字，用 `var(--id)` 在 CSS 里消费颜色、字号等标量变量，用 `data-var-src` 替换图片、视频或音频源。特别惊喜的是，用 `data-var-src` 替换视频时，成片会自动继承新视频的真实时长与原声混音！但要避开两个细节坑：`data-var-src` 只对 `<img>`、`<video>`、`<audio>` 和 `<source>` 生效，而且元素上必须保留静态占位 `src` 作为 fallback，否则 Lint 会报 `media_variable_src_no_fallback` 警告，同时切勿塞入超大 `data:` 视频 URI。只有遇到条件分支、循环或派生计算时，才调用 `window.__hyperframes.getVariables()`；父组合向子组合传参则统一使用 `data-variable-values` 属性。

### Scene 04 · CLI 覆盖、本地 `--batch` 沙箱与 Lambda JSONL 批渲染（`ep10_s04_voice.mp3`）

- **旁白原文**：
  > 模板建好后，单条覆盖渲染只需在命令行传 `--variables` 内联 JSON 或更安全的 `--variables-file`，并建议加上 `--strict-variables` 开启严格校验，拦截拼写错误的未知键或越界类型。要一次性批量产出几十上百条个性化视频，本机直接运行 `--batch rows.json --output "renders/{name}.mp4"`，并用 `--batch-concurrency` 控制并发数；注意输出模板里的 `{key}` 占位符受路径安全沙箱严格保护，任何包含 `../` 的路径越界企图都会被立刻拒绝。如果规模扩张到成千上万条，直接切上 AWS Lambda 的 `render-batch` 流水线：提交 JSONL 批量清单即可扇出并发渲染，唯一要注意的是单条任务事件载荷受限于 AWS Step Functions 的 `256 KiB` 上限，务必传素材 URL 而非内联大文件。

### Scene 05 · `:root` 优先级陷阱、差分换肤与四大编译时不可变量（`ep10_s05_voice.mp3`）

- **旁白原文**：
  > 交付一套经得起生产考验的模板前，必须跨过最后三道架构检验。第一道是 CSS 优先级暗坑：HyperFrames 会把标量变量注入到组合根元素的 `--id` 自定义属性上，如果你自己在样式表里写了 `:root { --accent: #000; }`，就会直接遮蔽并覆盖变量的默认值甚至破坏继承链路，正确做法是只消费 `var(--accent)` 绝不在 `:root` 里重复硬写。第二道是差分换肤测试：上线前至少用默认配色和一套极端高反差色板各渲染一遍，检查长短名字、异形图片和缺失可选项会不会撑爆排版。第三道则是牢记四大编译时不可变量：画布宽高 `data-width` 和 `data-height`、根总时长 `data-duration`，以及帧率 `fps` 都属于渲染管线启动前就锁死的架构常量，无法也不应该做成运行时变量。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / DATA-COMPOSITION-VARIABLES 与七大数据类型` | `[VARIABLES SCHEMA]` | `HfChapterIntro` 开篇 $\rightarrow$ `HfCodeWindow`（`data-composition-variables` JSON）+ 7 大类型卡片矩阵（`string`~`image`，标注音视频用 `string`） |
| **Scene 02** | `02 / 面向 AGENT 的语义元数据：ROLE 与 PORTRAYS` | `[SEMANTIC SLOTS]` | 左栏 `role`（5 维度）+ 位置命名 vs 语义命名对比；右栏 8 大 `portrays` 语义身份槽位全景卡 |
| **Scene 03** | `03 / 零脚本绑定、GETVARIABLES() 与父子传参` | `[DATA BINDINGS]` | `HfSplitCompare` 对比零 JS 绑定（`data-var-text` / `data-var-src` 必留 fallback `src` 防 `media_variable_src_no_fallback` / `var(--id)`）vs 脚本动态读取（`getVariables()` + `data-variable-values`） |
| **Scene 04** | `04 / CLI 覆盖、--BATCH 沙箱与 LAMBDA JSONL` | `[BATCH RENDER]` | `HfTerminalWindow`（`--variables` / `--variables-file` / `--strict-variables` / `--batch` `{name}` 路径沙箱与 `--batch-concurrency`）+ AWS Lambda `render-batch` JSONL 与 Step Functions `256 KiB` 上限卡 |
| **Scene 05** | `05 / :ROOT 优先级陷阱、差分测试与四大不可变量` | `[TEMPLATE GATES]` | 左栏 `:root` 覆盖陷阱与差分换肤验收清单；右栏四大编译时不可变量红框锁（`data-width` / `data-height` / root `data-duration` / `fps`） |
