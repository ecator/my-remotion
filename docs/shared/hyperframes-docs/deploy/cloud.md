> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Cloud rendering

> Render on HeyGen's managed cloud without deploying your own infrastructure.

Use managed cloud rendering when you want a finished file without installing Chrome or FFmpeg or maintaining AWS or Google Cloud infrastructure.

## Render a project

Sign in once, then render the current project:

```bash theme={null}
hyperframes auth login
hyperframes cloud render
```

The command packages the project, uploads it, waits for the render, and downloads the finished file to `renders/`.

Choose a composition or output path when the defaults are not right:

```bash theme={null}
hyperframes cloud render . \
  --composition compositions/intro.html \
  --output renders/intro.mp4
```

From an attended SSH or headless terminal, use the device flow. Open the displayed URL in any browser and enter the one-time code:

```bash theme={null}
hyperframes auth login --device
```

Device login requires a TTY and is refused in CI. For unattended agents and CI, save a long-lived API key instead:

```bash theme={null}
echo "$HEYGEN_API_KEY" | hyperframes auth login --api-key
```

See [Authentication and API keys](https://hyperframes.heygen.com/guides/authentication.md) for credential precedence and local alternatives.

## Choose the output

| Option | Values | Default |
| - | - | - |
| `--fps` | 1–240 | `30` |
| `--quality` | `draft`, `standard`, `high` | `standard` |
| `--format` | `mp4`, `webm`, `mov` | `mp4` |
| `--resolution` | `1080p`, `4k` | `1080p` |
| `--aspect-ratio` | `16:9`, `9:16`, `1:1` | detected from a local composition when possible |

```bash theme={null}
hyperframes cloud render --quality high --fps 60
hyperframes cloud render --resolution 4k
```

> [!WARNING]
>
> 4K is billed at 1.5×.

## Check what will upload

When the project fits under the 200 MB project archive limit, it is sent as one zip. When it does not, media no page, script or variable names is left out first, then the largest media files the project names by path upload as HeyGen assets, eight at a time, just enough for the rest to fit, and are referenced by public, unsigned URL. Uploads are cached, so re-rendering uploads only new or changed media. Media is streamed from disk as it uploads, so a large file never has to fit in memory; editing one while the command is preparing it stops the run. Inspect what will upload before starting a render:

```bash theme={null}
hyperframes cloud render --dry-run
```

Add generated or unnecessary files to `.hyperframesignore` when needed:

```gitignore theme={null}
/exports/
/source-masters/
```

Do not exclude media that the composition needs at render time. HyperFrames already omits common development and generated paths, including `.git`, `node_modules`, root-level `renders/`, and root-level `snapshots/`.

## Fill template variables

Use the variables declared by the composition:

```bash theme={null}
hyperframes cloud render \
  --variables '{"title":"Q4 recap","theme":"dark"}' \
  --strict-variables
```

For larger payloads, pass a JSON file with `--variables-file`.

For a local project, variable validation uses the entry selected by
`--composition`, or `index.html` when omitted. `--strict-variables` stops before
upload when a value does not match that entry's declarations.

The first `hyperframes cloud render` that uploads a local project prints an `asset_id`. Reuse it to
render the same uploaded project with different values:

```bash theme={null}
hyperframes cloud render \
  --asset-id asst_abc123 \
  --variables '{"title":"Customer update"}'
```

## Run asynchronously

Submit without waiting and receive a webhook when the render finishes:

```bash theme={null}
hyperframes cloud render \
  --callback-url https://example.com/hyperframes-hook \
  --no-wait
```

Then inspect or manage renders by ID:

```bash theme={null}
hyperframes cloud list
hyperframes cloud get hfr_abc123
hyperframes cloud delete hfr_abc123
```

For automated retries, pass a stable `--idempotency-key` so an interrupted request can be replayed safely.

## Choose another renderer

* Use [`hyperframes render`](https://hyperframes.heygen.com/guides/rendering) while authoring or when the machine running the command should do the work.
* Use [AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md) or [Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md) when you need to own the rendering infrastructure.
* Use a [deployment template](https://hyperframes.heygen.com/guides/deploy.md) when you need a working hosted starting point rather than the full distributed-rendering stack.

See the [CLI reference](https://hyperframes.heygen.com/packages/cli.md#hyperframes-cloud) for every flag and JSON output shape.

## Related topics

* [Compare every rendering path](https://hyperframes.heygen.com/deploy/overview.md)
* [Render locally from the CLI](https://hyperframes.heygen.com/guides/rendering.md)
* [Operate rendering in your own cloud account](https://hyperframes.heygen.com/deploy/aws-lambda.md)


## Related topics

- [Choose a rendering path](https://hyperframes.heygen.com/deploy/overview.md)
- [Render from the command line](https://hyperframes.heygen.com/guides/rendering.md)
- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.