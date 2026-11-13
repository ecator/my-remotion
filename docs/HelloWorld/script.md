# HelloWorld · 脚本原稿

> 主题：《名侦探柯南》灰原哀（宫野志保 / 代号 Sherry）角色概念短片
> 规格：1920×1080 · 30fps · 240 帧（8 秒）

## 1. 创作概念

以「APTX-4869 机密档案」为视觉母题：深紫色实验室 HUD 背景 + 旋转的分子徽标 + 角色名标题，
配合一句灰原哀风格的日语独白，营造冷静、疏离、带一点宿命感的悬疑氛围。

- **关键词**：冷静、理性、科学、宿命、悬疑爵士
- **主色**：Sherry 绯红 `#E11D48`（主）/ 灰原青 `#38BDF8`（辅）/ 标题白 `#F1F5F9`
- **背景**：深紫黑径向渐变 `#1e1338 → #0f0a1e → #07040e`

## 2. 旁白（日语配音）

| 项目 | 内容 |
|---|---|
| 角色 | 灰原 哀 |
| 日语原文 | 時間は待ってくれないわよ… 科学も、運命もね。 |
| 中文译文 | 时间可不会等人哦……无论是科学，还是命运。 |
| 语气 | 冷静、沉着、略带疏离感的少女声线；「…」处有短暂的沉思停顿 |
| 入点 | 第 55 帧（约 1.83 秒） |

## 3. 画面文案

| 位置 | 文案 |
|---|---|
| 主标题 | 灰原哀 · CODENAME: SHERRY（「灰原」「SHERRY」高亮为绯红色并加下划线） |
| 台词卡主行 | ● JP VOICE ／「時間は待ってくれないわよ… 科学も、運命もね」／ [APTX-4869] |
| 台词卡副行 | “时间可不会等人哦……无论是科学，还是命运。” —— 灰原 哀 |
| 左上档案 HUD | ● CLASSIFIED DOSSIER // APTX-4869<br>SUBJECT: SHIHO MIYANO (宮野 志保) / AI HAIBARA (灰原 哀)<br>CODENAME: SHERRY · BIO-CHEMISTRY LAB ARCHIVE |
| 右上音乐 HUD | ♫ BGM: SHERRY'S MELANCHOLY (JAZZ SUSPENSE // 112 BPM) + 18 根均衡器条 |
| 左下角标 | [ DETECTIVE CONAN // TEITAN ELEMENTARY CLASS 1-B · BEIKA CITY ] |
| 右下角标 | [ APOPTOXIN 4869 · VERIFIED BY AGASA LAB ] |
| 背景六边形标签 | C₁₇H₂₁NO₄ ／ APTX-4869 ／ TELOMERASE ／ SHERRY // 04 |

## 4. 音频

### 4.1 配音 `public/HelloWorld/haibara_voice.mp3`

- 工具：`edge-tts`
- 声线：`ja-JP-NanamiNeural`，语速 `-8%`，音高 `-6Hz`（压低音高、放慢语速，贴近灰原哀的冷静声线）
- 备选 TTS 提示词（用于支持风格指令的 TTS 模型）：

  ```text
  [speaking in a calm, cool, composed and slightly aloof Japanese female anime character voice, like Ai Haibara] 時間は待ってくれないわよ… [short contemplative pause] 科学も、運命もね。
  ```

### 4.2 背景音乐 `public/HelloWorld/haibara_bgm.mp3`

- 曲名设定：*Sherry's Melancholy*（悬疑爵士风，柯南式紧张感）
- 生成方式：Python 程序化合成（8 秒，44.1kHz，立体声）
- 和弦进行：Dm9 → Bbmaj9 → Gm9 → A7b9（每个和弦 2 秒）
- 声部：暗色实验室 Pad（轻微 FM 闪烁）+ 爵士行走低音（Walking Bass）等
- 混音：配音期间自动闪避（Ducking），详见 [storyboard.md](./storyboard.md)
