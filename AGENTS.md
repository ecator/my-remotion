# AGENTS.md - AI Agent 协作与项目开发规范

> **最高优先级声明**：当仓库内置的 `.agents/skills/`（如 `remotion-best-practices` 等官方技能）中的通用默认指令与本文件冲突时（例如自动启动 Studio 预览、使用 `npx`/`bunx`、在 `Root.tsx` 中注册子组件等），**一律以本 `AGENTS.md` 的规定为最高优先级**。

## 1. 项目简介
本仓库是一个使用 [Remotion](https://www.remotion.dev/) 生成视频的工程模板，用于在同一个工作区中开发、维护和生成多个不同的视频项目。

## 2. 包管理与常用命令规范
- **Node.js 包管理工具**：本项目统一使用 **`pnpm`**（请勿使用 `npm`、`npx`、`yarn` 或 `bun`/`bunx` 安装依赖或管理锁文件）。
  - 安装依赖：`pnpm add <pkg>` / `pnpm install`
  - 安装 Remotion 官方包：`pnpm exec remotion add <pkg>`
  - 类型与代码检查：`pnpm lint`
- **Python 临时脚本与依赖管理**：编写 Python 辅助脚本（置于 `scratch/`）时，优先使用 **PEP 723 Script Inline Metadata** 将依赖直接声明在脚本内，并通过 **`uv run scratch/<script>.py`** 运行，避免使用 `pip install` 污染全局环境（详见 3.3 节）。
- **禁止主动启动预览服务**：**请勿主动运行 `pnpm dev` 或 `remotion studio`**（避免后台进程阻塞或端口冲突）。代码编写完成后，请**提示用户在终端自行运行 `pnpm dev`** 在 Remotion Studio 中查看与预览效果。
- **禁止主动导出视频**：在用户**没有明确要求导出/渲染视频**时，**请勿主动运行视频导出命令**（如 `pnpm exec remotion render`）。仅当用户明确发出导出指令时才执行渲染，输出目录默认为 `out/`。
- **单帧截图导出与视觉自检（`remotion still`）**：
  - 开发或调试过程中若需要通过 `pnpm exec remotion still` 导出某一帧画面，**输出文件必须统一放到 `scratch/` 临时文件夹下**（如 `scratch/preview-frame.png`），切勿直接散落在项目根目录或 `out/` 中。
  - **推荐 AI 视觉自检**：由于不主动启动 `pnpm dev`，在完成复杂画面或排版后，鼓励使用 `pnpm exec remotion still <VideoId> scratch/check.png --frame=<N>` 导出关键帧截图至 `scratch/`，并读取该图片自检文字是否溢出、元素是否遮挡、配色是否清晰，确认无误后再交付给用户。

## 3. 目录结构与视频组织规范
由于本仓库会承载多个视频的开发，必须保持清晰、隔离的目录结构：

```text
├── docs/                   # 视频参考文档目录（供人与 AI 参考的脚本、分镜、文献等，不参与渲染）
│   ├── shared/             # 跨视频通用文档（品牌规范、风格指南、写作模板等）
│   └── <VideoName>/        # 对应视频的专属参考文档（script.md、storyboard.md、refs/ 等）
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
1. **命名规范（防止 `<Composition id>` 报错）**：
   - Remotion 的 `<Composition id="...">` 仅允许英文字母、数字和连字符 `-`（**不支持下划线 `_`、空格或中文字符**）。
   - 视频目录名 `<VideoName>`、主组件名以及 `<Composition id>` 统一使用 **英文大驼峰（PascalCase）**（如 `ProductIntro`、`SpringFestival`）。若用户以中文描述需求，请自动映射为语义化的英文 PascalCase 名称。
2. **一个视频对应一个独立组件（仅注册完整视频）**：每个视频项目作为一个独立的顶层组件开发，并在 [`src/Root.tsx`](src/Root.tsx) 中只注册该完整视频对应的顶层 `<Composition />`。**切勿将视频内部拆分的零散子组件、局部元素（Elements）或子场景单独注册到 `src/Root.tsx` 中**，以保持 Remotion Studio 左侧边栏清晰整洁（除非用户明确要求单独调试某个子组件）。
3. **代码集中管理**：每个视频的所有相关组件、子场景（Scenes）、常量和样式等代码，必须集中放在同一个专属文件夹内（统一置于 `src/videos/<VideoName>/` 下），避免不同视频的组件散落在各处。
4. **使用 Zod 包装视频 Props（支持 Studio 可视化调参）**：
   - 当为视频组件配置可调参数或复杂 `props` 时，**必须使用 `zod`（配合 `@remotion/zod-types`，如 `zColor()`）定义 Schema**，并通过 `z.infer<typeof schema>` 推导组件的 Props 类型。
   - 在 `src/Root.tsx` 注册 `<Composition />` 时传入 `schema={...}` 属性，以便在 Remotion Studio 右侧面板中直接通过可视化表单（颜色选择器、输入框、滑块等）实时修改和调试参数。
5. **JSON 与字幕数据最佳实践**：
   - **结构化数据与字幕（`.json` / `.ts`）应放在 `src/videos/<VideoName>/` 下**，通过 ES Module `import` 同步引入，或直接内联（inline）在组件的 JSX 属性中。
   - **原因**：直接 `import` 或内联可由打包器同步编译并提供完整的 TypeScript 类型支持，无需编写异步 `fetch(staticFile(...))` 和 `useDelayRender()` 挂起逻辑，避免渲染丢帧，同时也支持 Remotion Studio 的可视化编辑写回。
   - 若外部提供的是原始 `.srt` 文件，推荐先在 `scratch/` 中通过脚本解析转换为符合 `@remotion/captions` 规范的 JSON/TS 数据后放入 `src/videos/<VideoName>/`；仅在确实需要运行时直接加载 `.srt` 时才放入 `public/<VideoName>/`。

### 3.2 静态媒体素材规范（`public/`）
1. **目录划分规则（专属 vs 共享）**：
   - **视频专属素材（`public/<VideoName>/`）**：在 `public/` 下按照视频名称建立对应的子文件夹，存放仅属于该视频的媒体素材（如专属配音、特定插图、视频片段等）。
   - **跨视频共享素材（`public/shared/`）**：多个视频通用的公共静态资源（如品牌 Logo、片头片尾水印、全局自定义字体 `.woff2/.ttf`、通用转场音效 SFX、常用背景音乐 BGM 等），统一存放在 `public/shared/` 目录下（可按需继续细分如 `public/shared/fonts/`、`public/shared/sfx/`），避免在各个视频目录中重复拷贝。
2. **媒体与二进制素材必须入库 `public/`**：所有最终需要嵌入到视频中的**二进制媒体素材**（包括：**音频 `.mp3/.wav`**、**图片 `.png/.jpg/.svg`**、**视频片段 `.mp4/.webm`**、**自定义字体 `.woff2/.ttf`** 等），必须放置在 `public/<VideoName>/` 或 `public/shared/` 目录下。
3. **媒体格式与体积优化**：
   - **音频优先使用 `.mp3`**：生成的音频（如 TTS 配音、BGM、音效等）应**尽量使用 `.mp3` 格式**以减小文件体积、提升加载速度；若生成工具默认输出为 `.wav` 等未压缩格式，应在移入 `public/` 前先在 `scratch/` 中转换为 `.mp3`。
   - **无透明通道图片优先使用 `.jpg`**：生成或引入的图片素材若**不需要透明通道（Alpha）**（如背景图、全画幅插画、照片等），应**优先使用 `.jpg` 格式**以大幅减小体积；仅在需要透明背景的位图元素（如复杂抠图、贴纸）时使用 `.png`。
   - **简单图标优先直接生成 SVG**：对于简单的图标、徽章、几何图形或矢量装饰元素，**优先直接编写/生成 SVG**（直接作为内联 `<svg>` React 组件或保存为 `.svg` 矢量文件），既能保持极小体积和任意缩放无损清晰度，又便于在 Remotion 中对路径、颜色做逐帧动画控制。
4. **资源引用方式**：在 Remotion 组件中统一使用 `staticFile("<VideoName>/<filename>")` 或 `staticFile("shared/<filename>")` 配合 `<Audio>`、`<Video>`、`<Img>` 等组件进行加载，切勿直接引用 `scratch/` 或外部绝对路径下的文件。

### 3.3 临时文件与脚本规范（`scratch/`）
1. **临时文件集中存放**：开发过程中需要编写的**一次性辅助脚本**（如配音 TTS 生成脚本、Whisper 语音转录脚本、字幕清洗与时间轴对齐脚本、素材预处理脚本等）、产生的**中间临时文件**，以及**通过 `remotion still` 导出的单帧截图**，必须全部放在项目根目录的 `scratch/` 文件夹下。
2. **版本控制忽略**：`scratch/` 文件夹已被写入 `.gitignore` 忽略版本管理，可以在其中自由创建和调试临时内容。
3. **Python 临时脚本规范（Inline Script Metadata + `uv`）**：
   - 编写 Python 临时脚本时，**优先使用 PEP 723（Script Inline Metadata）在脚本头部直接声明依赖**，并通过 **`uv run`** 执行，严禁直接使用 `pip install` 污染全局环境或在项目根目录创建虚拟环境：
     ```python
     # /// script
     # requires-python = ">=3.11"
     # dependencies = [
     #     "pillow",
     #     "requests",
     # ]
     # ///
     ```
   - 运行方式：`uv run scratch/<script_name>.py`（`uv` 会自动在隔离缓存环境中解析并安装头部声明的依赖，也可通过 `uv add --script scratch/<script_name>.py <pkg>` 自动写入依赖）。
4. **产物交接**：当 `scratch/` 中的脚本生成了最终产物后，必须按类型移入正式目录供视频组件引用：
   - **成品媒体文件**（如合成好的 `.mp3`/`.wav` 音频、处理好的图片/视频）$\rightarrow$ 移入 `public/<VideoName>/`（若为通用素材则移入 `public/shared/`）。
   - **成品数据文件**（如转换对齐好的字幕 `.json`/`.ts`、分镜配置数据）$\rightarrow$ 移入 `src/videos/<VideoName>/`（或直接内联到组件代码中）。

### 3.4 参考文档规范（`docs/`）
1. **用途**：`docs/` 用来存放**供人与 AI 共同参考、不参与渲染**的视频参考文档，如脚本/旁白原稿、分镜说明、需求与修改记录、参考文献、参考截图、链接清单等。既可以是 AI 产出供人审阅的文档，也可以是**用户提供给 AI 作为创作依据的输入资料**。
2. **目录划分规则（与 `public/`、`src/videos/` 保持一致）**：
   - **视频专属文档（`docs/<VideoName>/`）**：目录名与 `src/videos/<VideoName>/` 完全一致（英文 PascalCase）。推荐结构：
     ```text
     docs/<VideoName>/
     ├── script.md        # 脚本 / 旁白原稿
     ├── storyboard.md    # 分镜说明
     ├── notes.md         # 需求、沟通与修改记录
     └── refs/            # 参考文献、PDF、参考截图、links.md（外部链接清单）
     ```
   - **跨视频通用文档（`docs/shared/`）**：品牌规范、视觉风格指南、通用脚本模板等。
3. **原稿与渲染数据分离**：`docs/` 中的文档**不得被视频组件 `import` 或通过 `staticFile()` 引用**。从原稿中整理出的、渲染时实际需要的结构化数据（字幕、分镜配置等），必须按 3.1 规范放入 `src/videos/<VideoName>/`。
4. **禁止放入其他目录**：参考文档**不要放进 `public/`**（会被复制进渲染 bundle，增加体积）、**不要放进 `src/`**（与代码混杂）、**不要放进 `scratch/`**（被 Git 忽略，会丢失）。
5. **AI 协作约定**：
   - **先读后做**：开始开发或修改某个视频前，AI 必须先阅读 `docs/<VideoName>/`（及相关的 `docs/shared/`）中的全部资料，将其作为需求、脚本、风格与事实依据；用户放入的参考资料优先级高于 AI 的自行推断。
   - **产出回写**：AI 为视频撰写或修改脚本、分镜、调研资料时，应直接写入 `docs/<VideoName>/` 对应文件，便于用户审阅和后续迭代。
   - **尊重用户原稿**：用户提供的原始资料（尤其是 `refs/` 中的文献与素材）应视为只读输入，如需整理或改写，请另建文件，不要直接覆盖原稿。
6. **大文件处理**：体积较大的二进制参考资料（大型 PDF、参考视频等）应尽量以链接形式记录在 `refs/links.md` 中，避免仓库体积膨胀；确需入库时考虑使用 Git LFS。

## 4. Remotion 动画与编码核心铁律
1. **严禁使用 CSS 动画与非帧驱动定时器**：
   - **禁止**使用 CSS `transition`、`animation`、`@keyframes`、Tailwind `animate-*` 或 `setTimeout` / `requestAnimationFrame` 实现动画（Remotion 渲染时基于帧号逐帧截图，非帧驱动动画会导致导出视频卡顿、掉帧或完全静止）。
   - **所有动画必须由 `useCurrentFrame()` 驱动**，配合 `interpolate()`、`spring()` 或 `Easing` 计算当前帧样式。
2. **时间计算与 `fps` 解耦**：
   - 涉及时间长度或时间节点的计算（如 `from={2 * fps}`、`durationInFrames={5 * fps}`、`interpolate(frame, [0, 1.5 * fps], ...)`），应优先通过 `useVideoConfig()` 获取 `fps` 进行换算，避免大量硬编码帧数，确保调整帧率时动画节奏不变。
3. **确定性渲染（禁止 `Math.random()`）**：
   - 渲染逻辑必须是纯函数（同一帧号在任何时候渲染结果完全一致）。需要随机数（如粒子、星空、抖动）时，**必须使用 Remotion 提供的 `random("seed")`**，严禁使用 `Math.random()`（否则多线程并发渲染时画面会剧烈闪烁）。

### 4.1 中文字体注意事项
1. **优先使用 `@remotion/google-fonts`**：已预装。中文字体按模块导入，如 `import { loadFont } from "@remotion/google-fonts/NotoSansSC"`。常用选择：
   - 黑体：`NotoSansSC`（繁体 `NotoSansTC`）
   - 宋体：`NotoSerifSC`（繁体 `NotoSerifTC`）
   - 手写/艺术体：`MaShanZheng`、`ZCOOLKuaiLe`、`ZCOOLXiaoWei`、`LongCang`、`LiuJianMaoCao`
2. **必须限定字重**：中文字体体积大，务必只加载实际用到的字重，如 `loadFont("normal", { weights: ["400", "700"] })`，切勿加载全部字重。
3. **了解分片（subset）机制**：中文字体被 Google Fonts 拆成大量 unicode-range 分片（如 `"[0]"`、`"[1]"`…）加 `latin`。不传 `subsets` 会加载全部分片（Studio 中请求多、加载慢）；只需渲染固定文案时，可通过 `subsets` 指定所需分片。
4. **在顶层模块加载并带回 `fontFamily`**：在组件文件顶层调用 `loadFont()`，使用其返回的 `fontFamily` 设置样式，不要硬编码字体名；需要确保字体就绪时使用返回的 `waitUntilDone()`。
5. **必须设置回退字体**：`fontFamily` 末尾追加中文系统字体兜底，例如 `` `${fontFamily}, "PingFang SC", "Microsoft YaHei", sans-serif` ``，避免字体加载失败时中文显示为方框。
6. **自定义/商用字体放 `public/`**：若使用本地 `.woff2/.ttf`，放入 `public/shared/fonts/`（或 `public/<VideoName>/`），通过 `@remotion/fonts` 的 `loadFont({ family, url: staticFile(...) })` 加载。注意字体授权，商用须确认可商用。
7. **排版注意**：中文无空格分词，长句请显式控制换行宽度（可配合 `@remotion/layout-utils` 测量文字尺寸防溢出）；中文行高建议 1.4–1.6；中文标点（，。、）注意不要出现在行首。
8. **视觉自检**：涉及中文的画面，用 `remotion still` 导出关键帧到 `scratch/` 检查是否有方框（缺字）、字体未生效或溢出。

## 5. 开发与交付检查清单
在每次完成用户的视频创建或修改任务前，请确认：
- [ ] 视频目录、主组件及 `<Composition id>` 是否使用了合法的英文大驼峰（PascalCase）命名？
- [ ] 视频组件是否已独立收纳在 `src/videos/<VideoName>/` 专属文件夹中，且在 `src/Root.tsx` 中仅注册了完整视频的顶层 `<Composition />`（未注册零散子组件）？
- [ ] 视频组件的复杂 `props` 是否已使用 `zod`（及 `@remotion/zod-types`）定义 Schema 并在 `<Composition schema={...} />` 中绑定？
- [ ] 视频所需的最终音频、图片、视频等媒体素材是否已放入 `public/<VideoName>/`（或 `public/shared/`）并通过 `staticFile()` 引用？
- [ ] 字幕与 JSON 结构化数据是否已放入 `src/videos/<VideoName>/` 并通过 `import` 或内联方式同步使用？
- [ ] 脚本原稿、分镜说明、参考文献等参考文档是否已放入 `docs/<VideoName>/`（或 `docs/shared/`），且未被视频组件引用？
- [ ] 临时脚本、中间文件及 `remotion still` 导出的自检截图是否都放在了 `scratch/` 目录下（Python 脚本是否已使用 Inline Script Metadata 并通过 `uv run` 执行），没有污染全局环境、项目根目录或 `src/`？
- [ ] 是否已运行 `pnpm lint` 确保没有 TypeScript 类型错误或 ESLint 报错？
- [ ] 若用户未要求导出视频，是否遵循了“不主动导出、不主动运行 `pnpm dev`，仅提示用户运行 `pnpm dev` 预览”的原则？
