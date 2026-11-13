# HelloWorld · 需求与修改记录

## 说明

- HelloWorld 是本仓库的示例视频，用来演示目录规范、Zod 可调参数、音频闪避、`Interactive` 可编辑图层等写法。
- 本目录文档是在视频完成**之后**根据现有实现补写的；之后如果改动视频，请同步更新 [script.md](./script.md) 和 [storyboard.md](./storyboard.md)。

## 文件对照

| 内容 | 位置 |
|---|---|
| 主组件与 Zod Schema | `src/videos/HelloWorld/index.tsx` |
| 子组件 | `src/videos/HelloWorld/`（`Logo` / `Arc` / `Atom` / `Title` / `LabBackground`） |
| 默认文案与配色（defaultProps） | `src/Root.tsx` |
| 配音 / BGM | `public/HelloWorld/haibara_voice.mp3`、`public/HelloWorld/haibara_bgm.mp3` |

> [!NOTE]
> 配音和 BGM 的生成脚本原本放在 `scratch/`（已被 Git 忽略）。关键生成参数已经记录在 [script.md](./script.md) 第 4 节，需要重新生成时以那里为准。

## 修改记录

| 日期 | 内容 |
|---|---|
| 2026-11-14 | 根据现有实现补写 script.md、storyboard.md、notes.md |
