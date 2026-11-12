# AGENTS.md - AI Agent 协作与项目开发规范

## 1. 项目简介
本仓库是一个使用 [Remotion](https://www.remotion.dev/) 生成视频的工程模板，用于在同一个工作区中开发、维护和生成多个不同的视频项目。

## 2. 包管理与常用命令规范
- **包管理工具**：本项目统一使用 **`pnpm`**（请勿使用 `npm`、`yarn` 或 `bun` 安装依赖或管理锁文件）。
  - 安装依赖：`pnpm add <pkg>` / `pnpm install`
  - 安装 Remotion 官方包：`pnpm exec remotion add <pkg>`
  - 类型与代码检查：`pnpm lint`
- **禁止主动启动预览服务**：**请勿主动运行 `pnpm dev`**（避免后台阻塞或端口冲突）。代码编写完成后，请**提示用户在终端自行运行 `pnpm dev`** 在 Remotion Studio 中查看与预览效果。
- **禁止主动导出视频**：在用户**没有明确要求导出/渲染视频**时，**请勿主动运行视频导出命令**（如 `pnpm remotion render`）。仅当用户明确发出导出指令时才执行渲染，输出目录默认为 `out/`。
- **单帧截图导出（`remotion still`）**：开发或调试过程中若需要通过 `pnpm exec remotion still` 导出某一帧画面（例如用于自检排版效果或生成临时预览图），**输出文件必须统一放到 `scratch/` 临时文件夹下**（如 `scratch/preview-frame.png`），切勿直接散落在项目根目录或 `out/` 中。

## 3. 目录结构与视频组织规范
由于本仓库会承载多个视频的开发，必须保持清晰、隔离的目录结构：

```text
├── public/                 # 最终嵌入视频的静态媒体资源目录
│   ├── shared/             # 跨视频复用的公共静态资源（通用字体、品牌 Logo、通用音效/BGM 等）
│   └── <VideoName>/        # 对应视频的专属媒体素材（配音、专属图片、视频片段等）
├── scratch/                # 临时文件与一次性脚本目录（已被 Git 忽略）
├── src/
│   ├── Root.tsx            # Remotion Composition 统一注册入口
│   ├── index.ts            # Remotion 根入口文件
│   ├── components/         # （可选）跨视频复用的公共组件或动效原语
│   └── videos/             # 集中存放各个独立视频组件的目录
│       └── <VideoName>/    # 单个视频的专属代码与数据目录
│           ├── index.tsx   # 该视频的主组件入口
│           ├── captions.ts # （或 .json）该视频的结构化字幕与配置数据
│           └── ...         # 该视频内部拆分的子组件、场景文件
└── out/                    # 渲染导出的成品视频目录（已被 Git 忽略）
```

### 3.1 视频组件与结构化数据规范（`src/videos/<VideoName>/`）
1. **一个视频对应一个独立组件（仅注册完整视频）**：每个视频项目作为一个独立的顶层组件开发，并在 [`src/Root.tsx`](src/Root.tsx) 中只注册该完整视频对应的顶层 `<Composition />`。**切勿将视频内部拆分的零散子组件、局部元素（Elements）或子场景单独注册到 `src/Root.tsx` 中**，以保持 Remotion Studio 左侧边栏清晰整洁（除非用户明确要求单独调试某个子组件）。
2. **代码集中管理**：每个视频的所有相关组件、子场景（Scenes）、常量和样式等代码，必须集中放在同一个专属文件夹内（统一置于 `src/videos/<VideoName>/` 下），避免不同视频的组件散落在各处。
3. **使用 Zod 包装视频 Props（支持 Studio 可视化调参）**：
   - 当为视频组件配置可调参数或复杂 `props` 时，**必须使用 `zod`（配合 `@remotion/zod-types`，如 `zColor()`）定义 Schema**，并通过 `z.infer<typeof schema>` 推导组件的 Props 类型。
   - 在 `src/Root.tsx` 注册 `<Composition />` 时传入 `schema={...}` 属性，以便在 Remotion Studio 右侧面板中直接通过可视化表单（颜色选择器、输入框、滑块等）实时修改和调试参数。
4. **JSON 与字幕数据最佳实践**：
   - **结构化数据与字幕（`.json` / `.ts`）应放在 `src/videos/<VideoName>/` 下**，通过 ES Module `import` 同步引入，或直接内联（inline）在组件的 JSX 属性中。
   - **原因**：直接 `import` 或内联可由打包器同步编译并提供完整的 TypeScript 类型支持，无需编写异步 `fetch(staticFile(...))` 和 `useDelayRender()` 挂起逻辑，避免渲染丢帧，同时也支持 Remotion Studio 的可视化编辑写回。
   - 若外部提供的是原始 `.srt` 文件，推荐先在 `scratch/` 中通过脚本解析转换为符合 `@remotion/captions` 规范的 JSON/TS 数据后放入 `src/videos/<VideoName>/`；仅在确实需要运行时直接加载 `.srt` 时才放入 `public/<VideoName>/`。

### 3.2 静态媒体素材规范（`public/`）
1. **目录划分规则（专属 vs 共享）**：
   - **视频专属素材（`public/<VideoName>/`）**：在 `public/` 下按照视频名称建立对应的子文件夹，存放仅属于该视频的媒体素材（如专属配音、特定插图、视频片段等）。
   - **跨视频共享素材（`public/shared/`）**：多个视频通用的公共静态资源（如品牌 Logo、片头片尾水印、全局自定义字体 `.woff2/.ttf`、通用转场音效 SFX、常用背景音乐 BGM 等），统一存放在 `public/shared/` 目录下（可按需继续细分如 `public/shared/fonts/`、`public/shared/sfx/`），避免在各个视频目录中重复拷贝。
2. **媒体与二进制素材必须入库 `public/`**：所有最终需要嵌入到视频中的**二进制媒体素材**（包括：**音频 `.mp3/.wav`**、**图片 `.png/.jpg/.svg`**、**视频片段 `.mp4/.webm`**、**自定义字体 `.woff2/.ttf`** 等），必须放置在 `public/<VideoName>/` 或 `public/shared/` 目录下。
3. **资源引用方式**：在 Remotion 组件中统一使用 `staticFile("<VideoName>/<filename>")` 或 `staticFile("shared/<filename>")` 配合 `<Audio>`、`<Video>`、`<Img>` 等组件进行加载，切勿直接引用 `scratch/` 或外部绝对路径下的文件。

### 3.3 临时文件与脚本规范（`scratch/`）
1. **临时文件集中存放**：开发过程中需要编写的**一次性辅助脚本**（如配音 TTS 生成脚本、Whisper 语音转录脚本、字幕清洗与时间轴对齐脚本、素材预处理脚本等）、产生的**中间临时文件**，以及**通过 `remotion still` 导出的单帧截图**，必须全部放在项目根目录的 `scratch/` 文件夹下。
2. **版本控制忽略**：`scratch/` 文件夹已被写入 `.gitignore` 忽略版本管理，可以在其中自由创建和调试临时内容。
3. **产物交接**：当 `scratch/` 中的脚本生成了最终产物后，必须按类型移入正式目录供视频组件引用：
   - **成品媒体文件**（如合成好的 `.mp3`/`.wav` 音频、处理好的图片/视频）$\rightarrow$ 移入 `public/<VideoName>/`（若为通用素材则移入 `public/shared/`）。
   - **成品数据文件**（如转换对齐好的字幕 `.json`/`.ts`、分镜配置数据）$\rightarrow$ 移入 `src/videos/<VideoName>/`（或直接内联到组件代码中）。

## 4. 开发与交付检查清单
在每次完成用户的视频创建或修改任务前，请确认：
- [ ] 视频组件是否已独立收纳在 `src/videos/<VideoName>/` 专属文件夹中，且在 `src/Root.tsx` 中仅注册了完整视频的顶层 `<Composition />`（未注册零散子组件）？
- [ ] 视频组件的复杂 `props` 是否已使用 `zod`（及 `@remotion/zod-types`）定义 Schema 并在 `<Composition schema={...} />` 中绑定？
- [ ] 视频所需的最终音频、图片、视频等媒体素材是否已放入 `public/<VideoName>/`（或 `public/shared/`）并通过 `staticFile()` 引用？
- [ ] 字幕与 JSON 结构化数据是否已放入 `src/videos/<VideoName>/` 并通过 `import` 或内联方式同步使用？
- [ ] 临时脚本与中间文件是否都放在了 `scratch/` 目录下，没有污染项目根目录或 `src/`？
- [ ] 是否已运行 `pnpm lint` 确保没有 TypeScript 类型错误或 ESLint 报错？
- [ ] 若用户未要求导出视频，是否遵循了“不主动导出、不主动运行 `pnpm dev`，仅提示用户运行 `pnpm dev` 预览”的原则？
