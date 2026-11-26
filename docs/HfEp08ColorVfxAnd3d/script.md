# HfEp08ColorVfxAnd3d · 脚本原稿

> **剧集**：EP08 / 共 12 集 ·《电影感调色与视觉特效：调色管线、`data-vfx-chain` WebGL2 与 3D》
> **规格**：1920×1080 · 30fps · 5 个章节（目标总时长约 4 分 30 秒，以实际配音时长为准）
> **视觉规范**：遵循 [docs/shared/hyperframes-style-guide.md](../shared/hyperframes-style-guide.md)
> **参考文档**：`prompting/color-grading.md`、`guides/{media-effects,vfx-chain,html-in-canvas,motion-blur}.md`、`reference/color-grading.md`、`packages/shader-transitions.md`

---

## 1. 创作概念与叙事弧线

本集作为第三部分「提示词导演与视听精修」的视觉巅峰篇，系统剖析 HyperFrames 的好莱坞级调色管线、逐像素 WebGL2 特效链、真实快门运动模糊与 3D 着色器转场：
1. **固定顺序调色管线与 `<hf-color-group>`**：拆解 `data-color-grading` 的八段严格顺序（`adjust` → `wheels` → `curves` → `hueCurves` → `secondaries` → `lut` → `details` → `effects`）、仅限 `<img>`/`<video>`/`<canvas>` 或 `<hf-color-group>`（误加在文本/div 上触发 `color_grading_non_media` 且扁平 JSON 静默失效），以及 9 个可被 GSAP 缓动的 `--hf-color-grading-*` 属性（重点警示 `--hf-color-grading-intensity` 绝不缩放 `details` 或 `effects`）。
2. **CLI 批处理、18 款视觉效果与复古模拟风格**：介绍 `npx hyperframes media-treatment` 与 `npx hyperframes grade-compare`（单帧最多对比 16 种风格）、18 种非破坏性视觉效果及 Tape Damage / CRT / Tube 等复古模拟退化，以及分层空间局部隔离调色。
3. **`data-vfx-chain` WebGL2 逐像素特效链与 HTML-in-Canvas**：解析同构于 `data-fx-chain` 的 JSON 特效核（`fractal-noise`、`wave-warp`、`displacement-map`）、`--vfx-<id>-<key>` 变量动画、三种捕获模式（`none` / `self` / `backdrop`）与 `<canvas layoutsubtree class="hf-vfx-src">` + `.hf-vfx-in`（必须给明确像素 `width`/`height` 且为唯一直接子元素，否则塌缩为 0×0 静默白板！）+ `drawElementImage`。
4. **真快门运动模糊（Motion Blur）与互斥避坑**：剖析 `data-motion-blur="on"`、`shutter`/`phase`/`samples`/`tier`，对比 `filter`（默认 SVG 滤镜）与 `capture`（HTML in Canvas 真旋转/缩放拖影）两套层级，提示分布式渲染与 `--page-motion-blur off` 关闭开关，以及嵌套 VFX 捕获画布与 Motion Blur `capture` 的渲染卡死冲突与 `liquid-glass-notification` 依赖 WebGPU 的限制。
5. **真 3D 渲染与 `@hyperframes/shader-transitions`**：对比 CSS 3D 假景深与 `Three.js via the adapter`，介绍 `@hyperframes/shader-transitions` 内置 14 款着色器（`SHADER_NAMES`）及页内合成器（page-side compositing）。

---

## 2. 分章节旁白文稿（中文配音）

### Scene 01 · 固定顺序调色管线、`<hf-color-group>` 与 9 个可动画变量（`ep08_s01_voice.mp3`）

- **旁白原文**：
  > 欢迎来到 HyperFrames 全栈百科第八集，正式迈入电影感视觉精修领域。在 HyperFrames 里，专业调色完全以非破坏性方式写入媒体元素的 `data-color-grading` 属性，原始素材毫发无损。渲染引擎严格遵循八步固定管线顺序执行：先做基础影调校正 `adjust`，接着三路色轮 `wheels`、RGB 曲线 `curves`、色相曲线 `hueCurves`、最多四组 HSL 局部键控 `secondaries`、自定义 `.cube` 色彩查找表 `lut`，最后才叠加颗粒暗角 `details` 与风格滤镜 `effects`。这里有三条必须死守的规则：第一，`data-color-grading` 只能作用在 `<img>`、`<video>`、`<canvas>` 或用于批量统一机位调色的 `<hf-color-group>` 上，绝对不能加在普通文字或 div 上，否则触发 `color_grading_non_media` 报错；第二，JSON 必须按命名分段嵌套，写扁平对象会静默失效；第三，框架暴露了 9 个 `--hf-color-grading-*` CSS 变量供 GSAP 缓动，但切记 `--hf-color-grading-intensity` 绝不会缩放 `details` 或 `effects`。

### Scene 02 · `media-treatment`、`grade-compare` 与 18 款视觉效果（`ep08_s02_voice.mp3`）

- **旁白原文**：
  > 在工程自动化与审美选型阶段，命令行工具箱能帮你省掉大量盲试时间。用 `npx hyperframes media-treatment` 可以先探查画面曝光与色偏再通过 `--apply` 写入 `data-color-grading`；更实用的是 `npx hyperframes grade-compare`，它能把同一帧画面连同原片在内，一次性铺出最多 16 种调色方案的对照图，让你肉眼拍板后再落地。视觉风格方面，引擎内置 18 款非破坏性特效，涵盖 Blur、Pixelate、Bloom、半调网点 Halftone、八种风格 ASCII 字符画、Kuwahara 油画，以及自带真实抖动与色散的复古模拟三剑客：Tape 磁带磨损、CRT 显像管曲率与 Tube 电子管失真。记住两条导演心法：一是对实拍人像 A-roll 务必克制，先校准再微调；二是因为调色按像素值而非坐标选区，想只给人物或只给背景局部调色，标准解法是用抠像拆成多层分别加滤镜。

### Scene 03 · `data-vfx-chain` WebGL2 逐像素特效与 HTML-in-Canvas（`ep08_s03_voice.mp3`）

- **旁白原文**：
  > 当 CSS 滤镜和 SVG 都无法表达逐像素扭曲、置换贴图或分形噪波时，就该祭出 HyperFrames 的核武器：`data-vfx-chain` WebGL2 特效链。它的 JSON 结构与音频 `data-fx-chain` 完全同构，静态参数写在 JSON 的 `params` 中，动态参数则写成 `--vfx-<id>-<key>` CSS 自定义属性交给 GSAP 逐帧驱动，并且只在 `(u_t, params)` 上确定性重绘，任意倒放寻址都能产出字节一致的画面。每个内核会声明自己的捕获模式：`none` 类如 `fractal-noise` 不读原像素、允许并发渲染；`self` 类如 `wave-warp` 与 `displacement-map` 会通过浏览器 HTML-in-Canvas 的 `drawElementImage` 捕获自身 DOM 像素，并自动锁定单工作线程防并发竞态；未来还将支持捕获下层画面的 `backdrop` 模式。手写捕获结构 `<canvas layoutsubtree class="hf-vfx-src">` 时务必牢记致命坑：其唯一直接子元素 `.hf-vfx-in` 必须写死明确的像素 `width` 与 `height`，如果偷懒用 `inset: 0`，元素会塌缩成 0 乘 0 导致画面静默消失！

### Scene 04 · 真快门运动模糊（Motion Blur）与渲染互斥避坑（`ep08_s04_voice.mp3`）

- **旁白原文**：
  > 高速飞过的卡片或甩镜标题为什么有时显得发涩？因为少了真实摄像机的快门拖影。在 HyperFrames 根节点加上 `data-motion-blur="on"`，即可一键开启真快门运动模糊，并通过 `shutter` 快门角度（默认 240 度）、`phase` 快门相位与 `samples` 采样数精准控感，Preview 与分布式渲染自动同步；需要锐利无模糊输出时，只需命令行传 `--page-motion-blur off`。底层提供两套绘制层级：默认的 `filter` 层级通过 SVG 多重残影高效兼容所有 Chrome 与 WebGL 画布；而开启 `data-motion-blur-tier="capture"` 则利用 HTML-in-Canvas 真正沿旋转圆弧与缩放射线拉出物理拖影。但一定要避开两个硬性边界：第一，Motion Blur 的 `capture` 层级若遇到嵌套的 VFX 捕获画布会导致渲染器挂起，引擎会自动回退至 `filter` 层级；第二，Catalog 中的 `liquid-glass-notification` 液态玻璃组件强依赖 WebGPU，在无 WebGPU 环境下会静默降级退出。

### Scene 05 · 真 3D 渲染与 `@hyperframes/shader-transitions` 14 款转场（`ep08_s05_voice.mp3`）

- **旁白原文**：
  > 本集压轴来看真 3D 场景与 GPU 着色器转场。很多新手做 3D 翻转产品或镜头环绕时直接让 AI 写 CSS `perspective`，结果打光生硬、深度遮挡处处穿帮；官方文档反复强调：凡是涉及真实纵深、动态光照或自由机位的 3D 镜头，必须在 Prompt 中明确指定 `Three.js via the adapter`，通过帧适配器把 Three.js 渲染时钟锁死到确定性帧号上，既支持复杂材质光影，又能与 HTML 字幕层无缝合成。场景切换需要视觉高光时，直接引入 `@hyperframes/shader-transitions` 官方包，它通过 `SHADER_NAMES` 内置了整整 14 款 WebGL 片段着色器转场，涵盖 `domain-warp`、`ridged-burn`、`whip-pan`、`sdf-iris`、`gravitational-lens`、`chromatic-split` 与 `glitch` 等，并在渲染期启用确定性的页内合成器 page-side compositing。唯一要留意的是，页内着色器转场若与捕获型 `data-vfx-chain` 同屏混用，转场窗口外可能出现旧纹理残留，规划镜头时建议错开使用。

---

## 3. 画面核心文案与组件对照

| 章节 | 顶部章节面包屑 | 右上角模块标签 | 核心舞台视觉组件 |
| :--- | :--- | :--- | :--- |
| **Scene 01** | `01 / 固定顺序调色管线、COLOR-GROUP 与 9 个动画变量` | `[COLOR PIPELINE]` | `HfChapterIntro` 开篇 $\rightarrow$ 8 步固定管线流程图（`adjust` → `wheels` → `curves` → `hueCurves` → `secondaries` → `lut` → `details` → `effects`）+ `<hf-color-group>` & 9 个 `--hf-color-grading-*` 警示（`intensity` 不缩放 `details`/`effects`） |
| **Scene 02** | `02 / MEDIA-TREATMENT、GRADE-COMPARE 与 18 款特效` | `[LOOKS & RETRO]` | 左栏 `HfTerminalWindow`（`media-treatment` / `grade-compare` 最多 16 种对比）+ 右栏 18 特效四大家族（含 Tape / CRT / Tube 复古三剑客）与抠像分层隔离调色法 |
| **Scene 03** | `03 / DATA-VFX-CHAIN WEBGL2 与 HTML-IN-CANVAS` | `[WEBGL2 VFX]` | 左侧 `HfCodeWindow`（`data-vfx-chain` + `--vfx-<id>-<key>` + `<canvas layoutsubtree class="hf-vfx-src">` + `.hf-vfx-in` 明确像素宽高防 0×0）+ 右侧 `none` / `self` / `backdrop` 捕获模式与 `drawElementImage` |
| **Scene 04** | `04 / 真快门运动模糊（MOTION BLUR）与冲突边界` | `[MOTION BLUR]` | `HfSplitCompare` 对比 `filter` 层级（默认兼容全环境）vs `capture` 层级（真旋转/缩放拖影 + 与 VFX 捕获画布互斥防挂起）+ `--page-motion-blur off` & `liquid-glass-notification` WebGPU 限制 |
| **Scene 05** | `05 / THREE.JS 真 3D 与 14 款 SHADER 转场` | `[3D & SHADERS]` | 左栏 `Three.js via the adapter` vs CSS 3D 对比 + 右栏 `@hyperframes/shader-transitions` 14 款 `SHADER_NAMES` 矩阵与 page-side compositing 架构 |
