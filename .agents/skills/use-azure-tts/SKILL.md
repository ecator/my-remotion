---
name: use-azure-tts
description: 使用 Azure TTS（语音合成）服务将纯文本或 SSML 转换为 MP3 语音文件，以及查询和过滤支持的语音（Voice）列表。
---

# Azure TTS 语音合成

通过调用 `scripts/azure-tts.py` 使用 Azure Cognitive Services TTS 服务生成 MP3 语音文件，或查询支持的音色列表。

## 依赖与环境配置

所有脚本均通过 `uv` 执行以自动管理依赖：

```bash
uv run scripts/azure-tts.py --help
```

环境变量：
- `AZURE_TTS_KEY`: Azure Speech 资源密钥
- `AZURE_TTS_REGION`: Azure Speech 区域（例如 `eastasia`、`southeastasia` 等）

> 需要在Azure控制台的语音服务（SpeechServices）里面创建。

---

## 1. 查询与过滤可用音色 (`--list-voices`)

通过 `cognitiveservices/voices/list` 接口获取音色列表。由于总音色数量较多，建议配合过滤参数查询：

### 过滤与输出参数
- `-l`, `--list-voices`: 列出支持的音色（也可使用位置参数 `voices`）
- `-k`, `--keyword`: 按关键字过滤（不区分大小写，匹配 `ShortName`、`LocalName`、`DisplayName`、风格、角色等）
- `--locale`, `--lang`: 按语言/地区过滤（例如 `zh-CN`、`zh`、`en-US`、`ja-JP`）
- `-g`, `--gender`: 按性别过滤（支持 `Female`/`Male`/`Neutral` 或 `女`/`男`/`中性`、`f`/`m`/`n`）
- `--style`: 按支持的情感风格过滤（如 `cheerful`、`chat`、`sad`）
- `--role`: 按支持的角色扮演过滤（如 `Narrator`、`Boy`、`Girl`）
- `--include-multilingual`: 包含 `SecondaryLocaleList` 匹配 `--locale` 的多语言音色
- `--json`: 以简化 JSON 格式输出（搭配 `--raw` 可输出接口原始完整 JSON）

### 示例

```bash
# 列出中文（zh-CN）女声中包含“晓”字的音色
uv run scripts/azure-tts.py --list-voices --locale zh-CN --gender 女 --keyword 晓

# 查询支持 cheerful 风格的中文音色并输出 JSON
uv run scripts/azure-tts.py --list-voices --locale zh-CN --style cheerful --json
```

---

## 2. 语音合成生成 MP3

支持传入**纯文本**或 **SSML**，可通过命令行参数、文件或标准输入（`stdin`）传入，输出固定为 `.mp3` 文件。

### 合成参数
- `input`: 位置参数，可直接传入纯文本或 SSML 字符串
- `-t`, `--text`: 要合成的纯文本内容
- `-s`, `--ssml`: 要合成的 SSML 字符串，或作为无值标志声明从文件/标准输入读取的内容为 SSML（若内容以 `<speak` 开头也会自动识别为 SSML）
- `-f`, `--file`: 从指定文件读取纯文本或 SSML
- `-v`, `--voice`: 语音合成使用的音色 `ShortName`（默认：`zh-CN-XiaoyiNeural`）
- `--style`: 纯文本合成时的情感风格（如 `cheerful`、`angry`、`sad`、`affectionate`）
- `--style-degree`: 情感风格强度（`0.01` ~ `2.0`）
- `--role`: 纯文本合成时的角色扮演（如 `Boy`、`Girl`、`Narrator`）
- `--rate`: 纯文本合成时的语速（如 `+10%`、`-20%`、`fast`、`slow`）
- `--pitch`: 纯文本合成时的音调（如 `+5Hz`、`-10%`、`high`、`low`）
- `--volume`: 纯文本合成时的音量（如 `+10%`、`loud`、`soft`）
- `-o`, `--output`, `--out`: **（必填）** 输出音频文件路径，必须以 `.mp3` 结尾

### 示例

**1. 通过参数传入纯文本生成语音（使用默认音色 `zh-CN-XiaoyiNeural`）**
```bash
uv run scripts/azure-tts.py -t "你好，欢迎使用 Azure 语音合成服务。" -o output.mp3
```

**2. 指定音色、情感风格和语速**
```bash
uv run scripts/azure-tts.py -t "今天真是个好日子！" -v zh-CN-XiaoxiaoNeural --style cheerful --rate +10% -o cheerful.mp3
```

**3. 通过参数传入 SSML 生成语音**
```bash
uv run scripts/azure-tts.py --ssml "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='zh-CN'><voice name='zh-CN-YunxiNeural'>你好，这是 SSML 语音合成测试。</voice></speak>" -o ssml.mp3
```

**4. 从文件读取内容生成语音**
```bash
uv run scripts/azure-tts.py -f input.txt -v zh-CN-YunjianNeural -o from_file.mp3
```

**5. 通过标准输入（stdin）传入纯文本或 SSML**
```bash
# 标准输入传入纯文本
echo "这是通过标准输入传入的文本" | uv run scripts/azure-tts.py -o stdin_text.mp3

# 标准输入传入 SSML
cat input.ssml | uv run scripts/azure-tts.py --ssml -o stdin_ssml.mp3
```
