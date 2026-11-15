# Remotion Lab

一个AI Agent工具驱动的[Remotion](https://www.remotion.dev/)视频生成模板，几乎所有支持Skill的Agent工具都可以直接套用这个模板生成视频。

> ⚠️生成视频的时候不建议直接更新这个分支，而是通过`worktree`创建新的分支，大的媒体文件也不建议直接托管到Git，可以尝试使用[git-lfs](https://git-lfs.com/)进行管理。

## 启动

准备好[Node.js](https://nodejs.org/en/download)和[pnpm](https://pnpm.io/installation)环境后通过下面命令安装好依赖。

```bash
pnpm install
```

然后就可以通过下面命令启动studio网页端可视化预览和导出。

```bash
pnpm dev
```

有时候studio网页端可能导出失败可以尝试手动命令导出。

```bash
pnpm exec remotion render HelloWorld
```

## 多媒体生成以及临时脚本

建议提前安装好下面的工具，这样方便AI进行一些自动化任务，临时脚本会被放在`scratch/`目录。
- [uv](https://docs.astral.sh/uv/getting-started/installation/)
  - Python环境依赖自动化
- [ffmpeg](https://ffmpeg.org/)
  - 多媒体文件转换
- [gemini-api-cli](https://aistudio.google.com/docs/cli#get-started)
  - Gmeini API的CLI工具，主要用于合成一些图片或者音乐，需要设置`GEMINI_API_KEY`环境变量或者运行`gemini-api configure --api-key "YOUR_API_KEY"`命令配置API Key

下面的环境变量也需要提前设置，否则相关服务可能无法使用。
- Azure TTS相关服务
  - `AZURE_TTS_KEY`
    - Azure语音服务的订阅Key
  - `AZURE_TTS_REGION`
    - Azure语音服务部署的区域，比如`japanwest`
- Gemini相关服务
  - `GEMINI_API_KEY`

## 参考文档与资料存放（`docs/`）

在让 AI 制作或修改视频前，可以将供人与 AI 共同参考的文档和资料（不参与最终视频渲染）放入 `docs/` 目录。其中**最核心的是准备好 `refs/`（原始参考资料）**，其余的脚本、分镜等文档都可以让 AI 根据 `refs/` 中的资料自动帮你撰写：

```text
docs/
├── shared/             # 跨视频通用文档（品牌规范、视觉风格指南、通用模板等）
└── <VideoName>/        # 单个视频专属文档，目录名需使用英文大驼峰（如 ProductIntro）
    ├── refs/           # 【最重要】人工提供的原始参考资料（文献、PDF、截图、links.md 外部链接等）
    ├── script.md       # 脚本 / 旁白原稿（可由 AI 根据 refs 自动撰写）
    ├── storyboard.md   # 分镜说明（可由 AI 自动生成）
    └── notes.md        # 需求说明与修改记录（可由人或 AI 维护）
```

**放置建议：**
- **只需重点准备 `refs/`**：通常你只需要把原始文献、产品介绍、参考截图或外部链接放进 `docs/<VideoName>/refs/`，然后直接让 AI 阅读 `refs/` 并产出 `script.md` 和 `storyboard.md` 供你审阅即可。AI 会将 `refs/` 视为只读输入，不会覆盖你的原始资料。
- **目录命名**：`<VideoName>` 请使用英文大驼峰（PascalCase），AI 会自动在 `src/videos/<VideoName>/` 和 `public/<VideoName>/` 下创建同名的代码与媒体目录。
- **大文件处理**：体积较大的参考资料（如大型 PDF、参考视频）建议将链接记录在 `refs/links.md` 中，避免仓库体积膨胀；若确需入库可考虑使用 Git LFS。
