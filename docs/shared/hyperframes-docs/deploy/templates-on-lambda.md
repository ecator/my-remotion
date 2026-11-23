> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Render templates on Lambda

> Render one HyperFrames composition with different variable values, individually or from a JSONL batch.

A HyperFrames template is a composition with declared variables. The same
project can produce many videos without rewriting its HTML.

Use this guide after deploying the [AWS Lambda render stack](https://hyperframes.heygen.com/deploy/aws-lambda.md).

## Declare the inputs

Declare variables on the document, then bind them in the composition. This
example exposes a headline and accent color:

```html theme={null}
<!doctype html>
<html
  data-composition-variables='[
    {"id":"title","type":"string","label":"Headline","default":"Welcome"},
    {"id":"accent","type":"color","label":"Accent","default":"#6d5dfc"}
  ]'
>
  <body>
    <div
      id="stage"
      data-composition-id="welcome"
      data-start="0"
      data-width="1920"
      data-height="1080"
      data-duration="5"
      data-no-timeline
      style="color:var(--accent)"
    >
      <h1 data-var-text="title">Welcome</h1>
    </div>
  </body>
</html>
```

See [Variables](https://hyperframes.heygen.com/concepts/variables.md) for every type and binding method.

## Test locally

Render one realistic payload before using cloud infrastructure:

```bash theme={null}
hyperframes render ./my-template \
  --variables '{"title":"Hello Ada","accent":"#ff4d67"}' \
  --strict-variables \
  --output renders/ada-preview.mp4
```

`--strict-variables` rejects undeclared keys and values with the wrong type.

## Render one version on Lambda

```bash theme={null}
hyperframes lambda render ./my-template \
  --width 1920 \
  --height 1080 \
  --variables '{"title":"Hello Ada","accent":"#ff4d67"}' \
  --output-key renders/ada.mp4 \
  --wait
```

Without `--wait`, the command returns a render ID. Check it later with:

```bash theme={null}
hyperframes lambda progress <render-id>
```

## Reuse the project upload

`lambda render` can upload the project for each call. For repeated renders,
create a content-addressed site once:

```bash theme={null}
hyperframes lambda sites create ./my-template
```

Pass the returned ID with later renders:

```bash theme={null}
hyperframes lambda render ./my-template \
  --site-id <site-id> \
  --width 1920 \
  --height 1080 \
  --variables '{"title":"Hello Lin"}'
```

An unchanged project keeps the same site ID and skips another S3 upload.

## Render a batch

Create one JSON object per line. `outputKey` is required; `variables` and
`executionName` are optional.

```jsonl theme={null}
{"outputKey":"renders/ada.mp4","variables":{"title":"Hello Ada","accent":"#ff4d67"}}
{"outputKey":"renders/lin.mp4","variables":{"title":"Hello Lin","accent":"#36b37e"}}
```

Start the batch:

```bash theme={null}
hyperframes lambda render-batch ./my-template \
  --batch ./recipients.jsonl \
  --width 1920 \
  --height 1080 \
  --max-concurrent 10
```

The command uploads the project once and returns one manifest row per input
line. A failure to start one row does not discard the other started renders.

Validate the file without starting AWS executions:

```bash theme={null}
hyperframes lambda render-batch ./my-template \
  --batch ./recipients.jsonl \
  --width 1920 \
  --height 1080 \
  --strict-variables \
  --dry-run \
  --json
```

## Keep variables small

The complete Step Functions Standard execution input is limited to 256 KiB.
HyperFrames checks this before starting the execution.

Use variables for JSON data. Store images, audio, and video separately and
pass their URLs instead of base64 content.

```json theme={null}
{
  "title": "Hello Ada",
  "avatarUrl": "https://cdn.example.com/avatars/ada.png"
}
```

## Migrating from Remotion Lambda inputProps

HyperFrames variables fill the role that `inputProps` serves in a Remotion
Lambda render:

| Remotion pattern | HyperFrames equivalent |
| - | - |
| `defaultProps` | A `default` value in `data-composition-variables` |
| `inputProps` | `--variables` or the SDK render config's `variables` |
| `props.title` | `data-var-text="title"`, a CSS variable, or `getVariables().title` |
| `renderMediaOnLambda()` | `renderToLambda()` |

Declare the allowed values in the composition, pass only the per-render data,
and keep large media outside the execution payload. Use `--strict-variables`
while migrating so an old or misspelled input fails before the render begins.

## Control concurrency

Three settings control different layers:

| Setting | Controls |
| - | - |
| `lambda deploy --concurrency` | Maximum concurrent invocations for the deployed Lambda function |
| `lambda render --max-parallel-chunks` | Maximum chunk workers used by one render |
| `lambda render-batch --max-concurrent` | Maximum render executions started concurrently by the batch command |

Start conservatively and measure a real composition before increasing them.

## Use the SDK

For a backend service, `@hyperframes/aws-lambda/sdk` exposes `deploySite`,
`renderToLambda`, and `getRenderProgress`. See the
[AWS package reference](https://hyperframes.heygen.com/packages/aws-lambda.md) for the current types and a
working example.

## Related topics

* [Deploy the AWS Lambda stack](https://hyperframes.heygen.com/deploy/aws-lambda.md)
* [Use the AWS Lambda package](https://hyperframes.heygen.com/packages/aws-lambda.md)
* [Understand composition variables](https://hyperframes.heygen.com/concepts/variables.md)


## Related topics

- [Migrating to HyperFrames Lambda](https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md)
- [Brand, templates and storyboards](https://hyperframes.heygen.com/prompting/design-systems.md)
- [CLI](https://hyperframes.heygen.com/packages/cli.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.