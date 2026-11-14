# Remotion Lab

一个AI Agent工具驱动的[Remotion](https://www.remotion.dev/)视频生成模板，几乎所有支持Skill的Agent工具都可以直接套用这个模板生成视频。

生成视频的时候不建议直接更新这个分支，而是通过`worktree`创建新的分支。

## 启动

首先通过下面命令安装好依赖。

```bash
pnpm install
```

然后就可以通过下面命令启动studio可视化预览和导出。

```bash
pnpm dev
```

有时候studio可能导出失败可以尝试手动命令导出。

```bash
pnpm exec remotion render HelloWorld
```

## 多媒体生成以及临时脚本

建议提前安装好[uv](https://docs.astral.sh/uv/getting-started/installation/)这样AI可以方便生成一些Python临时脚本进行自动化人物。

AI可以使用`.agents\skills\use-gemini-api-cli`技能生成视频或者配音，前提是要安装[gemini-api-cli](https://aistudio.google.com/docs/cli#get-started)并设置好`GEMINI_API_KEY`环境变量。

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
