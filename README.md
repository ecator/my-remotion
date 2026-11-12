# Remotion Lab

一个AI驱动的remotion视频生成模板。

生成视频的时候不建议直接更新这个分支，而是通过`worktree`创建新的分支。

## 启动

可以通过下面命令启动studio可视化预览和导出。

```bash
pnpm dev
```

手动命令导出也可以使用下面的命令。

```bash
pnpm exec remotion render HelloWorld
```

## 多媒体生成

可以使用`.agents\skills\google-genmedia-toolkit`技能生成视频或者配音，前提是要设置好`GEMINI_API_KEY`环境变量以及安装好[uv](https://docs.astral.sh/uv/getting-started/installation/)。