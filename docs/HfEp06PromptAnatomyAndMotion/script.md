# HfEp06PromptAnatomyAndMotion · 脚本原稿

> **剧集**：EP06 / 共 12 集 ·《像导演一样写 Prompt：六段式提示词骨架与七大丝滑运动法则》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 30 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`prompting/{overview,motion,examples,editing-existing-videos,recreating-references,capstone}.md`

---

## 1. 创作概念与叙事弧线

作为第三部分「AI 提示词导演与视听精修」的开篇，本集把 HyperFrames 官方 Prompting 体系提炼为一套可直接落地的导演语法：
1. **宏观六段式骨架与微观五槽位**：用 `HfPromptAnatomy` 拆解 `[route]`、`[spec]`、`[beats]`、`[copy]`、`[technique]`、`[negatives]`（辨析 `no narration` 与 `no audio`），串联微观五槽位 `[element]`/`[motion]`/`[layout]`/`[style]`/`[timing]` 与三档规格旋钮（Mood words / Style tokens / Full visual spec，含 `Three.js via the adapter`）。
2. **七大丝滑运动黄金法则（上 & 下）**：采用 `HfSplitCompare` 左右正反对照，彻底吃透 `Move only what is live`、`Move the camera to get somewhere`、`Overlap, don't queue`、`One idea per move`、`Weight for physical objects only`（绝不给文字与数字计数器加 `back.out` 弹性过冲）、视差景深（仅 1 个虚化前景遮挡）与格式配速。
3. **定格动画确定性、动机转场与 6 大缓动词**：强调定格动画必须写 `two frames`（两帧量化）而非飘忽的秒数 `0.067`；拆解 Shader 与 CSS 转场及 6 大缓动词映射（`power2.out` / `power4.out` / `back.out` / `elastic.out` / `expo.out` / `sine.inOut`）。
4. **收敛式迭代与 6 大 NLE 动词映射**：单变量修改、绝对目标值、冻结条款（Freeze clause）、75–90% 一次直出天花板，以及 NLE 动词如何精准映射至 `data-start`、`data-track-index`、`data-duration`、`data-media-start`、`data-volume`。
5. **62 秒一镜到底 Capstone《The Timeline》全景解剖**：展示 9 大连续区域、3 个永不离场的主角元素（Wire / Ruler / Clip Card）以及官方真实规模指标（`50+` Catalog Blocks、`19` Agent Skills、`7` Runtime Adapters）。

---

## 2. 分章节旁白文稿（中文配音）

### Scene 01 · 六段式提示词骨架、五槽位与三档规格旋钮（`ep06_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第六集。为什么同样让 AI 写视频，有人出片像廉价幻灯片，高手却能一段 Prompt 直出电影级大片？秘密在于一套严谨的六段式提示词骨架：第一段 `[route]` 写明 `/hyperframes` 加载规则；第二段 `[spec]` 锁定片长与画幅；第三段 `[beats]` 给每一拍标上时间戳并写清留白停顿；第四段 `[copy]` 把屏幕文字放进精确引号并用斜杠标明换行；第五段 `[technique]` 点名要复用的官方 Block；第六段 `[negatives]` 封堵歧义，这里务必分清 `no narration` 只是不加人声旁白，想要彻底静音必须写 `no audio`。进入单拍内部，再用五槽位精确描述每个物体：`[element]` 是什么、`[motion]` 怎么动、`[layout]` 放哪儿、`[style]` 长什么样、`[timing]` 何时起止。配合三档规格旋钮，从 Mood words、Style tokens 到 Full visual spec 逐级收紧自由度，涉及真 3D 光影时更要写死 `Three.js via the adapter`。

### Scene 02 · 七大丝滑运动黄金法则：告别廉价 PPT 感（`ep06_s02_voice.mp3`）

- **旁白原文**：
  > 写完骨架，决定画面质感的核心是官方总结的七大丝滑运动法则。法则一 `Move only what is live`：标题和卡片落地就必须彻底静止，只让实时数据、波形或进度条持续变化，千万别靠伪呼吸缩放装活力。法则二 `Move the camera to get somewhere`：镜头移动必须为了跨越空间连接下一个区域，拒绝漫无目的的慢推。法则三 `Overlap, don't queue`：动作要交错重叠，前一个元素落定到一半，下一个就该启动。法则四 `One idea per move`：每次只表达单一运动意图，拒绝同时叠加旋转、缩放与模糊让文字糊成一团。法则五 `Weight for physical objects only`：带弹性过冲的 `back.out` 只能给卡牌或机械翻页板等物理物件，严禁套在文字、UI 和数字计数器上，因为一个冲过头再回退的数字会显示从未存在过的假数值！法则六与七则是视差景深（仅放一个虚化前景遮挡）与按格式配速（混剪每拍 1.1 秒、产品演示稳停 7 到 10 秒）。

### Scene 03 · 确定性定格动画、动机转场与六大缓动词表（`ep06_s03_voice.mp3`）

- **旁白原文**：
  > 除了丝滑运动，如果你想做出手工剪纸般的定格动画质感，如何在 HyperFrames 里保证多次渲染字节级一致？答案是绑定固定随机种子，并按帧号量化停顿。提示词里有一个极容易写错的细节：一定要写 `two frames` 也就是精确停留两帧，千万不要换算成 `0.067` 秒，因为按秒估算在帧边界上会漂移成忽长忽短的 1 帧或 3 帧抖动。场景衔接方面，高级转场应由画面元素自然引发，比如镜头穿过按钮推进下一幕；点名官方转场块时，Shader 类如 `whip-pan`、`cinematic-zoom`、`cross-warp-morph` 适合做视觉高光，CSS 类如 `transitions-push` 轻量高效，切忌先淡出黑屏再淡入。最后记住六大动效形容词与 GSAP 缓动曲线的精确对应：smooth 对应 `power2.out`，snappy 对应 `power4.out`，bouncy 对应 `back.out`，springy 对应 `elastic.out`，dramatic 对应 `expo.out`，dreamy 对应 `sine.inOut`。

### Scene 04 · 收敛式迭代心法与六大 NLE 剪辑动词映射（`ep06_s04_voice.mp3`）

- **旁白原文**：
  > 真实创作中，单条 Prompt 一次直出通常能打到 75% 到 90% 的还原度，最后 10% 的电影质感靠的是收敛式迭代。记住三大收敛习惯：第一，一次只改一个变量，避免同时调字号、配色和速度导致无法归因；第二，用绝对数值替代相对形容词，比如写明「把第二幕时长设为 4 秒」而非「稍微紧凑一点」；第三，善用 Freeze clause 冻结条款，明确告诉 Agent「只放大 CTA 按钮，其余构图与动画一律冻结不动」，防止改一处带偏全局；遇到反复跑偏的镜头，先剥离背景与运镜回到最小可运行版，再逐层叠加。因为底层是纯 HTML，你在提示词里说的每一个剪辑动词都会落到精确属性：移动时间改 `data-start`，调层叠改 `data-track-index` 和 `z-index`，裁结尾改 `data-duration`，裁媒体入点改 `data-media-start`，调音量改 `data-volume`。

### Scene 05 · 62 秒一镜到底 Capstone《The Timeline》全景解剖（`ep06_s05_voice.mp3`）

- **旁白原文**：
  > 最后我们来膜拜官方提示词教程的终极范本：一条 Prompt 零剪辑直出的 62 秒一镜到底大片《The Timeline》。前两版草稿虽然通过了所有检查却依然像幻灯片，真正拯救全片的是写进 Prompt 的「电影摄影契约」：全局没有硬切场景，而是用单一相机在广阔空间内采用「扫移加停顿」的节奏，在每个重点区稳停 1.5 到 2.5 秒让信息落地再加速滑向下一区。三条持续线索贯穿全片 100% 帧数：那根 3 像素时间轴线 Wire 依次化作柱状图底线、地图航线、音频波形与 3D 螺旋；顶部帧标尺 Ruler 同步追踪真实播放时间；开头打出的 `<div class="clip">` 主角芯片则死死贴着导线几何穿越 Type、Mount、Measure、Everywhere、Material、Surface、Rhythm、Depth 到 Render 九大区域，途中如实亮出官方真实规模：`50+` 个 Catalog Blocks、`19` 个 Agent Skills 与 `7` 个 Runtime Adapters，在片尾以种子 42 的两帧定格礼花定格确定性渲染之美。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / 六段式提示词骨架、五槽位与三档规格旋钮` | `[PROMPT ANATOMY]` | `HfChapterIntro` 开篇 $\rightarrow$ `HfPromptAnatomy` 拆解 `[route]`/`[spec]`/`[beats]`/`[copy]`/`[technique]`/`[negatives]`（含 `no narration` vs `no audio`）+ 右侧 5 槽位与 3 档旋钮（`Three.js via the adapter`） |
| **Scene 02** | `02 / 七大丝滑运动黄金法则：告别廉价 PPT` | `[7 MOTION LAWS]` | `HfSplitCompare` 正反双栏对比前 5 大法则（`Move only what is live` / `Camera` / `Overlap` / `One idea per move` / `Weight` 禁给文字数字加 `back.out`）+ 底部法则 6 & 7（视差景深 + 格式配速） |
| **Scene 03** | `03 / 确定性定格动画、动机转场与六大缓动词` | `[EASE & SEAMS]` | 顶部定格动画红绿对照（`✓ two frames` vs `✗ 非 0.067s`）+ 左下 Shader vs CSS 转场分级表 + 右下 6 大缓动词与 GSAP 曲线映射（`power2.out` ~ `sine.inOut`） |
| **Scene 04** | `04 / 收敛式迭代心法与六大 NLE 动词映射` | `[ITERATION & NLE]` | 左侧收敛式迭代三法（单变量 / 绝对值 / Freeze 冻结条款 / 75–90% 天花板）+ 右侧 6 大 NLE 动词 → HTML 属性精确映射表（`data-start` / `data-track-index` / `data-duration` / `data-media-start` / `data-volume`） |
| **Scene 05** | `05 / 62 秒一镜到底 CAPSTONE《THE TIMELINE》` | `[CAPSTONE 62S]` | 9 大连续区域旅程轨道图（Type → Mount → Measure → Everywhere → Material → Surface → Rhythm → Depth → Render）+ 3 大永驻主角（Wire / Ruler / Clip Card）+ 真实指标卡（`50+` Blocks / `19` Skills / `7` Adapters） |
