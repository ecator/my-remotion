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

## 多媒体生成

可以使用`.agents\skills\google-genmedia-toolkit`技能生成视频或者配音，前提是要设置好`GEMINI_API_KEY`环境变量以及安装好[uv](https://docs.astral.sh/uv/getting-started/installation/)。