# HfEp07AudioVoiceAndCaptions · 制作与文档核对笔记

- **剧集编号**：`EP.07` / `HfEp07AudioVoiceAndCaptions`
- **文档核对要点**：
  - TTS 级联（HeyGen → ElevenLabs → Kokoro 54 voices）+ Gemini TTS；10,000+ 曲库、19 SFX、Openverse。
  - 4 属性：`data-fx-chain`、`data-automation`、`data-fx-carve`（音乐轨专用，双引号 `&quot;`）、`data-audio-group` + `<hf-audio-group>`。
  - `+12 dB` 上限、`-3 dBTP` `truepeak`、16 效果器、22 预设、4 条音频 Lint 规则、不可自动化 Worklet 列表、双时钟与首点回溯陷阱。
  - `remove-background`（`u2net_human_seg` 仅人像、`--background-output`、动外层 `<div>`）、91 款 `caption-*` 花字、`code-typing`/`code-diff`/`code-morph`、Speed Ramps `target: "rate"`。
