> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Authentication & API keys

> Sign in to HeyGen and understand how agent workflows choose voice, music, sound, and optional capture-description providers.

You can create and render locally without an account. Voice and music can fall
back to local engines when no provider key is available. Sign in when you want
HeyGen voice and music, managed cloud rendering, hosted MCP, or ownership of a
published project that you can update later.

## Sign in

Signing in is the same OAuth step as creating an account — new users land on the sign-up screen.

**1. Sign in**

The default flow opens your browser for OAuth and captures the token on a loopback port:

```bash theme={null}
npx hyperframes auth login
# ✓ Signed in.
```

For CI or headless machines, save a long-lived API key instead:

```bash theme={null}
npx hyperframes auth login --api-key            # hidden-input prompt
echo "$HEYGEN_API_KEY" | npx hyperframes auth login --api-key   # from stdin
```

**2. Confirm what's configured**

```bash theme={null}
npx hyperframes auth status
```

Shows the active credential's source and verified identity, and — when you're signed out — which local engines voice and music will use. Add `--json` for `{ configured, recommended_action, offline_engines }` in scripts.

HyperFrames uses its own public OAuth client and stores credentials in `~/.hyperframes/credentials` (mode `0600`). Sign in again after upgrading from the shared HeyGen login. The separate [`heygen` CLI](https://github.com/heygen-com/heygen-cli) keeps its own login in `~/.heygen`; HyperFrames does not move or delete it. A signed-in HyperFrames session wins over `HEYGEN_API_KEY` in the environment. The environment key is used only when no session is signed in, when HeyGen refuses to refresh the session, or when a host app routes calls through its own gateway. An expired session never selects a saved API key instead. A key from the project `.env` is used only when no session or API key is saved and the environment sets none, and the CLI names that `.env` file on stderr when it uses one. An API key, from the environment or `auth login --api-key`, selects API-key billing.

`auth status` verifies identity. For a dedicated HyperFrames OAuth login it reports the billing product, but the HyperFrames balance is unavailable here: `/v3/users/me` returns generic HeyGen account billing fields. Those raw fields remain in JSON and are not presented as the HyperFrames balance. Host-injected or custom-client OAuth is reported as an unverified billing product.

> [!TIP]
>
> No account is needed to try HyperFrames locally. With no credential, voice can
> use **Kokoro** and music can use **MusicGen** — see [Working
> offline](#working-offline).

## How the HeyGen credential resolves

The bundled audio scripts use the HeyGen credential for hosted TTS and music /
sound retrieval. It resolves first-match-wins:

1. `HEYGEN_API_BASE` with `HEYGEN_API_KEY` — a host app's own gateway, set by the app that started the workflow
2. `HEYGEN_ACCESS_TOKEN` — an OAuth token a host app injects
3. The session `hyperframes auth login` saved in `~/.hyperframes/credentials`, while it is unexpired
4. `HEYGEN_API_KEY` — environment variable
5. `HYPERFRAMES_API_KEY` — alias, for parity with other tools
6. An API key saved in `~/.hyperframes/credentials` by `hyperframes auth login --api-key`
7. A key from a nearby project `.env`, only when nothing is saved

A nearby project `.env` can supply the keys, but never `HEYGEN_API_BASE`. Its key never replaces a saved
session or API key, including an expired session, and the scripts name the `.env` file on stderr when they use it. Point at a different config directory
with `HYPERFRAMES_CONFIG_DIR`. The scripts can't refresh a session; the `hyperframes` CLI's own commands use the same
order and refresh an expired session first. See the [CLI reference](https://hyperframes.heygen.com/packages/cli.md). When `media-use` invokes the separate `heygen` executable, it supplies an isolated temporary credential containing the selected access token. That helper cannot refresh a HyperFrames grant or pick up another HeyGen login.

## Providers used by agent workflows

After the workflow's sign-in preflight, each media capability uses the first
available provider in its order. Voice, music, and sound have offline
fallbacks; capture descriptions are optional and are skipped when no supported
vision key is available.

| Capability | Provider order | Key(s) — first match wins | Local dependency |
| - | - | - | - |
| **Voice (TTS)** | HeyGen → ElevenLabs → Kokoro | HeyGen credential (above) · then `ELEVENLABS_API_KEY` | Kokoro: `pip install kokoro-onnx soundfile` |
| **Music (BGM)** | HeyGen library → Lyria → MusicGen | HeyGen credential (above) · then `GEMINI_API_KEY` → `GOOGLE_API_KEY` | MusicGen: `pip install transformers torch soundfile numpy` |
| **Sound effects** | HeyGen library → bundled library | HeyGen credential (above) | bundled — no deps |
| **Capture descriptions** | OpenRouter → Gemini | `OPENROUTER_API_KEY` → `GEMINI_API_KEY` | None; optional for [website capture](https://hyperframes.heygen.com/guides/product-launch-video.md) |

Run `npx hyperframes doctor` to check which local dependencies are installed.
The media workflows run `hyperframes auth status` before generation and tell
you which path they will use.

For Gemini narration, explicitly ask your agent to use Gemini TTS. The shared
audio workflow supports 3.8 Flash and Flash-Lite, 3.1 Flash Preview, and 2.5 Pro
and Flash Preview. Gemini remains an explicit choice; configuring credentials
does not change the automatic voice-provider order above.

Choose one authentication method:

* **API key:** set `GEMINI_API_KEY` or `GOOGLE_API_KEY` in your environment or
  project `.env`. This path needs no Python dependencies.
* **Service account:** install `google-auth` and `requests` in your Python 3
  environment, then set `GOOGLE_APPLICATION_CREDENTIALS` to the absolute path
  of your service-account JSON file. Alternatively, inject the JSON through
  `GCS_CREDS` from your secret manager. Set `GOOGLE_CLOUD_PROJECT` to the quota
  project when it differs from the service account's project.

Credentials resolve in that order: Gemini key, Google key, service-account file,
then JSON environment variable. Unset API keys when choosing service-account
OAuth. The helper obtains a fresh token for each generation using the
`generative-language.retriever` scope. Keys and tokens
are never placed in compositions or saved audio metadata.

Both methods call the Gemini Developer Interactions API. Your project needs
access to that API and the requested model. Cloud Text-to-Speech and Vertex AI
have separate model availability. This helper accepts service-account JSON,
not user ADC files or metadata-server credentials.

See [Gemini voiceover](https://hyperframes.heygen.com/prompting/media-and-audio.md#gemini-voiceover).

> [!NOTE]
>
> `npx hyperframes tts` itself is the local Kokoro CLI. Hosted HeyGen and
> ElevenLabs and Gemini voices are selected by the bundled media workflow helpers, not by
> that command.

## Working offline

No key configured is a normal state for local work. After their dependencies
and model files are installed, these fallbacks run locally:

* **Voice** — Kokoro-82M (54 voices), with Whisper for word-level caption alignment.
* **Music** — MusicGen (`facebook/musicgen-small`).
* **Sound effects** — a bundled library.

Local engines do not call a hosted generation API after setup. Their first use
may download model files. HeyGen provides managed voices and a produced music
library; sign in when you want those services or cloud rendering.

## Publishing without an account

`npx hyperframes publish` works while signed out. It uploads the project and
prints a URL containing a claim token. Open that URL and authenticate in the web
app to claim the project.

Sign in with `npx hyperframes auth login` before publishing when you want the CLI
to own the project immediately, update the same URL with `--update`, or publish
to a shared space with `--space`.

## Environment variables

| Variable | Used for |
| - | - |
| `HEYGEN_API_KEY` | HeyGen credential — voice + music/SFX retrieval. |
| `HYPERFRAMES_API_KEY` | Alias for `HEYGEN_API_KEY`. |
| `HEYGEN_ACCESS_TOKEN` | OAuth token a host app injects; never refreshed or saved. |
| `HEYGEN_API_BASE` | A host app's gateway for media workflows; never read from a project `.env`. |
| `HEYGEN_API_URL` | API base URL for `hyperframes` CLI commands (default `https://api.heygen.com`). |
| `HYPERFRAMES_CONFIG_DIR` | HyperFrames settings root: credentials, telemetry and update settings, project links (default `~/.hyperframes`). |
| `HYPERFRAMES_ENV` | `prod` (default) or `dev`; `dev` keeps credentials in a separate `dev/` directory under the root. Hosts and the OAuth client id come from `HEYGEN_API_URL`, `HYPERFRAMES_OAUTH_*` and `HYPERFRAMES_PUBLISHED_PROJECTS_API_URL`. |
| `HYPERFRAMES_OAUTH_CLIENT_ID` | Override the public client ID for a controlled OAuth environment. |
| `ELEVENLABS_API_KEY` | ElevenLabs TTS, used when no HeyGen credential is present. A key from a received project's `.env` is never used next to your own HeyGen credential. A note names the file whenever a project `.env` key is used. |
| `GEMINI_API_KEY` / `GOOGLE_API_KEY` | Explicit Gemini TTS selection and Lyria music generation; capture descriptions use `GEMINI_API_KEY`. One from a received project's `.env` is ignored when you set a competing credential yourself: in the CLI, the other Gemini key, a Google service account, OpenRouter or Vertex; in the media-use audio scripts, the other Gemini key or a Google service account. A note names the file whenever a project `.env` key is used. |
| `GOOGLE_APPLICATION_CREDENTIALS` / `GCS_CREDS` | Gemini TTS service-account JSON file path / injected JSON. Used when neither API key is set. |
| `GOOGLE_CLOUD_PROJECT` / `GCLOUD_PROJECT_ID` | Gemini OAuth quota project; first set value wins, then the service account project. |
| `OPENROUTER_API_KEY` | Capture descriptions; takes priority over Gemini for that step. One from a received project's `.env` gives way to your own Gemini or Vertex credential. A note names the file whenever a project `.env` key is used. |

## Related topics

* [Open the authentication command reference](https://hyperframes.heygen.com/packages/cli.md#hyperframes-auth)
* [Render with HyperFrames Cloud](https://hyperframes.heygen.com/deploy/cloud.md)
* [Three ways to start](https://hyperframes.heygen.com/quickstart.md)


## Related topics

- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)
- [CLI](https://hyperframes.heygen.com/packages/cli.md)
- [Cloud rendering](https://hyperframes.heygen.com/deploy/cloud.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.