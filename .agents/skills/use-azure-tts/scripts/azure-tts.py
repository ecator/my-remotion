# /// script
# dependencies = [
#   "python-dotenv",
#   "requests"
# ]
# ///

import os
import sys
import json
import argparse
from xml.sax.saxutils import escape, quoteattr
import requests
from dotenv import load_dotenv

# Ensure UTF-8 encoding for stdio (especially on Windows)
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")
if hasattr(sys.stdin, "reconfigure"):
    sys.stdin.reconfigure(encoding="utf-8")

# Load environment variables from .env file
load_dotenv(override=True)

AZURE_TTS_KEY = os.getenv("AZURE_TTS_KEY")
if not AZURE_TTS_KEY:
    raise ValueError("AZURE_TTS_KEY environment variable is not set")
AZURE_TTS_REGION = os.getenv("AZURE_TTS_REGION")
if not AZURE_TTS_REGION:
    raise ValueError("AZURE_TTS_REGION environment variable is not set")

BASE_URL = f"https://{AZURE_TTS_REGION}.tts.speech.microsoft.com"
DEFAULT_VOICE = "zh-CN-XiaoyiNeural"
OUTPUT_FORMAT = "audio-24khz-96kbitrate-mono-mp3"


def normalize_gender(gender_str: str) -> str:
    g = gender_str.strip().lower()
    if g in ("female", "f", "女"):
        return "female"
    if g in ("male", "m", "男"):
        return "male"
    if g in ("neutral", "n", "中性"):
        return "neutral"
    return g


def fetch_voices() -> list[dict]:
    url = f"{BASE_URL}/cognitiveservices/voices/list"
    headers = {
        "Ocp-Apim-Subscription-Key": AZURE_TTS_KEY,
        "User-Agent": "azure-tts-cli",
    }
    response = requests.get(url, headers=headers, timeout=30)
    if not response.ok:
        raise RuntimeError(
            f"Failed to fetch voice list (HTTP {response.status_code}): {response.text}"
        )
    return response.json()


def filter_voices(
    voices: list[dict],
    keyword: str | None = None,
    locale: str | None = None,
    gender: str | None = None,
    style: str | None = None,
    role: str | None = None,
    include_multilingual: bool = False,
) -> list[dict]:
    result = voices

    if locale:
        loc_q = locale.strip().lower()
        filtered = []
        for v in result:
            primary_locale = v.get("Locale", "").lower()
            locale_name = v.get("LocaleName", "").lower()
            secondary_locales = [
                s.lower() for s in v.get("SecondaryLocaleList", [])
            ]
            if loc_q in primary_locale or loc_q in locale_name:
                filtered.append(v)
            elif include_multilingual and any(loc_q in s for s in secondary_locales):
                filtered.append(v)
        result = filtered

    if gender:
        gender_q = normalize_gender(gender)
        result = [
            v for v in result if v.get("Gender", "").lower() == gender_q
        ]

    if style:
        style_q = style.strip().lower()
        result = [
            v
            for v in result
            if any(style_q in s.lower() for s in v.get("StyleList", []))
        ]

    if role:
        role_q = role.strip().lower()
        result = [
            v
            for v in result
            if any(role_q in r.lower() for r in v.get("RolePlayList", []))
        ]

    if keyword:
        kw_q = keyword.strip().lower()
        filtered = []
        for v in result:
            searchable_fields = [
                v.get("ShortName", ""),
                v.get("DisplayName", ""),
                v.get("LocalName", ""),
                v.get("Name", ""),
                v.get("Locale", ""),
                v.get("LocaleName", ""),
                " ".join(v.get("StyleList", [])),
                " ".join(v.get("RolePlayList", [])),
            ]
            voice_tag = v.get("VoiceTag", {})
            if isinstance(voice_tag, dict):
                for tag_vals in voice_tag.values():
                    if isinstance(tag_vals, list):
                        searchable_fields.append(" ".join(str(x) for x in tag_vals))
            if any(kw_q in field.lower() for field in searchable_fields):
                filtered.append(v)
        result = filtered

    return result


def print_voices(voices: list[dict], as_json: bool = False, raw: bool = False) -> None:
    if as_json:
        if raw:
            print(json.dumps(voices, indent=2, ensure_ascii=False))
        else:
            simplified = [
                {
                    "ShortName": v.get("ShortName"),
                    "LocalName": v.get("LocalName"),
                    "DisplayName": v.get("DisplayName"),
                    "Gender": v.get("Gender"),
                    "Locale": v.get("Locale"),
                    "LocaleName": v.get("LocaleName"),
                    "StyleList": v.get("StyleList", []),
                    "RolePlayList": v.get("RolePlayList", []),
                    "SecondaryLocaleList": v.get("SecondaryLocaleList", []),
                    "VoicePersonalities": v.get("VoiceTag", {}).get(
                        "VoicePersonalities", []
                    ),
                    "TailoredScenarios": v.get("VoiceTag", {}).get(
                        "TailoredScenarios", []
                    ),
                }
                for v in voices
            ]
            print(json.dumps(simplified, indent=2, ensure_ascii=False))
        return

    if not voices:
        print("No matching voices found.")
        return

    print(
        f"{'ShortName':<38} | {'LocalName':<12} | {'Gender':<7} | {'Locale':<10} | {'Styles / Roles'}"
    )
    print("-" * 105)
    for v in voices:
        short_name = v.get("ShortName", "")
        local_name = v.get("LocalName", "")
        gender = v.get("Gender", "")
        locale = v.get("Locale", "")
        styles = v.get("StyleList", [])
        roles = v.get("RolePlayList", [])
        extras = []
        if styles:
            extras.append(f"styles: {', '.join(styles)}")
        if roles:
            extras.append(f"roles: {', '.join(roles)}")
        extra_str = " | ".join(extras)
        print(
            f"{short_name:<38} | {local_name:<12} | {gender:<7} | {locale:<10} | {extra_str}"
        )
    print("-" * 105)
    print(f"Total matched voices: {len(voices)}")


def is_ssml_content(content: str) -> bool:
    stripped = content.lstrip()
    if stripped.startswith("<speak"):
        return True
    if stripped.startswith("<?xml") and "<speak" in stripped:
        return True
    return False


def build_ssml(
    content: str,
    voice: str = DEFAULT_VOICE,
    force_ssml: bool = False,
    style: str | None = None,
    style_degree: str | None = None,
    role: str | None = None,
    rate: str | None = None,
    pitch: str | None = None,
    volume: str | None = None,
) -> str:
    if is_ssml_content(content):
        return content.strip()

    # Infer xml:lang from voice ShortName (e.g., "zh-CN-XiaoyiNeural" -> "zh-CN")
    parts = voice.split("-")
    xml_lang = f"{parts[0]}-{parts[1]}" if len(parts) >= 2 else "zh-CN"

    if force_ssml:
        inner = content.strip()
    else:
        inner = escape(content)

    # Apply prosody if specified
    prosody_attrs = []
    if rate:
        prosody_attrs.append(f"rate={quoteattr(str(rate))}")
    if pitch:
        prosody_attrs.append(f"pitch={quoteattr(str(pitch))}")
    if volume:
        prosody_attrs.append(f"volume={quoteattr(str(volume))}")
    if prosody_attrs:
        inner = f"<prosody {' '.join(prosody_attrs)}>{inner}</prosody>"

    # Apply mstts:express-as if style or role is specified
    express_attrs = []
    if style:
        express_attrs.append(f"style={quoteattr(style)}")
    if style_degree:
        express_attrs.append(f"styledegree={quoteattr(str(style_degree))}")
    if role:
        express_attrs.append(f"role={quoteattr(role)}")
    if express_attrs:
        inner = f"<mstts:express-as {' '.join(express_attrs)}>{inner}</mstts:express-as>"

    ssml = (
        f"<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' "
        f"xmlns:mstts='https://www.w3.org/2001/mstts' xml:lang={quoteattr(xml_lang)}>"
        f"<voice name={quoteattr(voice)}>{inner}</voice>"
        f"</speak>"
    )
    return ssml


def synthesize_speech(ssml: str, output_path: str) -> str:
    url = f"{BASE_URL}/cognitiveservices/v1"
    headers = {
        "Ocp-Apim-Subscription-Key": AZURE_TTS_KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": OUTPUT_FORMAT,
        "User-Agent": "azure-tts-cli",
    }
    response = requests.post(
        url, headers=headers, data=ssml.encode("utf-8"), timeout=60
    )
    if not response.ok:
        raise RuntimeError(
            f"TTS synthesis failed (HTTP {response.status_code}): {response.text}"
        )

    abs_out = os.path.abspath(output_path)
    parent_dir = os.path.dirname(abs_out)
    if parent_dir:
        os.makedirs(parent_dir, exist_ok=True)

    with open(abs_out, "wb") as f:
        f.write(response.content)

    return output_path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Azure Text-to-Speech (TTS) CLI tool. Supports plain text or SSML via arguments or stdin, outputs MP3, and lists/filters available voices.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""Examples:
  # List Chinese female voices matching keyword '晓'
  uv run azure-tts.py --list-voices --locale zh-CN --gender Female --keyword 晓

  # Synthesize plain text from argument
  uv run azure-tts.py -t "你好，欢迎使用 Azure 语音合成服务。" -v zh-CN-XiaoyiNeural -o hello.mp3

  # Synthesize plain text with speaking style and rate
  uv run azure-tts.py -t "今天真是个好日子！" -v zh-CN-XiaoyiNeural --style cheerful --rate +10% -o cheerful.mp3

  # Synthesize SSML from argument
  uv run azure-tts.py --ssml "<speak version='1.0' xml:lang='zh-CN'><voice name='zh-CN-YunxiNeural'>你好！</voice></speak>" -o ssml.mp3

  # Synthesize from standard input (plain text or SSML auto-detected)
  echo "这是通过标准输入传入的文本" | uv run azure-tts.py -v zh-CN-YunxiNeural -o stdin.mp3
""",
    )

    # Voice listing & filtering options
    voice_group = parser.add_argument_group("Voice Listing & Filtering")
    voice_group.add_argument(
        "-l",
        "--list-voices",
        action="store_true",
        help="List supported voices from cognitiveservices/voices/list",
    )
    voice_group.add_argument(
        "-k",
        "--keyword",
        help="Filter voices by keyword (matches ShortName, LocalName, DisplayName, styles, roles, etc.)",
    )
    voice_group.add_argument(
        "--locale",
        "--lang",
        dest="locale",
        help="Filter voices by language/locale (e.g. zh-CN, zh, en-US, ja-JP)",
    )
    voice_group.add_argument(
        "-g",
        "--gender",
        help="Filter voices by gender (Female/Male/Neutral or 女/男)",
    )
    voice_group.add_argument(
        "--include-multilingual",
        action="store_true",
        help="Include voices whose SecondaryLocaleList matches --locale",
    )
    voice_group.add_argument(
        "--json",
        action="store_true",
        help="Output voice list in JSON format",
    )
    voice_group.add_argument(
        "--raw",
        action="store_true",
        help="When used with --json, output full raw JSON objects from Azure API",
    )

    # TTS synthesis options
    tts_group = parser.add_argument_group("Speech Synthesis (TTS)")
    tts_group.add_argument(
        "input",
        nargs="?",
        help="Input plain text or SSML string (can also use -t, --ssml, -f, or stdin)",
    )
    tts_group.add_argument(
        "-t",
        "--text",
        help="Input plain text to synthesize",
    )
    tts_group.add_argument(
        "-s",
        "--ssml",
        nargs="?",
        const=True,
        default=False,
        help="Input SSML string, or flag indicating the input/stdin is SSML",
    )
    tts_group.add_argument(
        "-f",
        "--file",
        help="Read input text or SSML from a file",
    )
    tts_group.add_argument(
        "-v",
        "--voice",
        default=None,
        help=f"Voice ShortName for synthesis (default: {DEFAULT_VOICE}), or voice keyword filter when used with --list-voices",
    )
    tts_group.add_argument(
        "--style",
        help="Speaking style for plain text synthesis (or filter by style with --list-voices)",
    )
    tts_group.add_argument(
        "--style-degree",
        help="Speaking style intensity (0.01 to 2.0) for plain text synthesis",
    )
    tts_group.add_argument(
        "--role",
        help="Speaking role-play for plain text synthesis (or filter by role with --list-voices)",
    )
    tts_group.add_argument(
        "--rate",
        help="Prosody speaking rate for plain text (e.g. +10%%, -20%%, fast, slow)",
    )
    tts_group.add_argument(
        "--pitch",
        help="Prosody pitch for plain text (e.g. +5Hz, -10%%, high, low)",
    )
    tts_group.add_argument(
        "--volume",
        help="Prosody volume for plain text (e.g. +10%%, loud, soft)",
    )
    tts_group.add_argument(
        "-o",
        "--output",
        "--out",
        dest="output",
        default=None,
        help="Output MP3 file path (required for speech synthesis)",
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    # Support `azure-tts.py --list-voices` or `azure-tts.py voices` / `list-voices`
    is_list_mode = args.list_voices or (
        args.input in ("voices", "list-voices")
        and not args.text
        and not args.ssml
        and not args.file
        and not args.output
    )

    if is_list_mode:
        try:
            voices = fetch_voices()
            keyword = args.keyword or args.voice
            filtered = filter_voices(
                voices,
                keyword=keyword,
                locale=args.locale,
                gender=args.gender,
                style=args.style,
                role=args.role,
                include_multilingual=args.include_multilingual,
            )
            print_voices(filtered, as_json=args.json, raw=args.raw)
        except Exception as e:
            print(f"Error: {e}", file=sys.stderr)
            sys.exit(1)
        return

    if not args.output:
        print(
            "Error: Output file path is required for speech synthesis. Please specify via -o / --output.",
            file=sys.stderr,
        )
        sys.exit(1)

    if not args.output.lower().endswith(".mp3"):
        print(
            "Error: Output file path must end with .mp3.",
            file=sys.stderr,
        )
        sys.exit(1)

    # Resolve input content from arguments, file, or stdin
    content = None
    force_ssml = False

    if isinstance(args.ssml, str):
        content = args.ssml
        force_ssml = True
    elif args.ssml is True:
        force_ssml = True

    if content is None:
        if args.text is not None:
            content = args.text
        elif args.file is not None:
            if not os.path.isfile(args.file):
                print(f"Error: Input file not found: {args.file}", file=sys.stderr)
                sys.exit(1)
            with open(args.file, "r", encoding="utf-8") as f:
                content = f.read()
        elif args.input is not None:
            content = args.input
        elif not sys.stdin.isatty():
            content = sys.stdin.read()

    if not content or not content.strip():
        print(
            "Error: No input text or SSML provided. Pass via -t/--text, -s/--ssml, -f/--file, positional argument, or stdin. Use --help for usage.",
            file=sys.stderr,
        )
        sys.exit(1)

    voice = args.voice or DEFAULT_VOICE
    ssml = build_ssml(
        content=content,
        voice=voice,
        force_ssml=force_ssml,
        style=args.style,
        style_degree=args.style_degree,
        role=args.role,
        rate=args.rate,
        pitch=args.pitch,
        volume=args.volume,
    )

    try:
        saved_path = synthesize_speech(ssml, args.output)
        print(f"Successfully generated MP3: {saved_path}")
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
