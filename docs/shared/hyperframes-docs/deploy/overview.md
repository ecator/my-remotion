> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Choose a rendering path

> Choose the smallest HyperFrames rendering surface for local work, an application backend, managed cloud, or infrastructure you operate.

Every rendering path starts with the same HyperFrames project. The difference is
who operates Chrome and FFmpeg, how the request is submitted, and how much of the
pipeline your application needs to control.

| Need | Start with | You operate |
| - | - | - |
| Render while creating or in CI | **CLI** | The machine running the command |
| Render from a Node application | **Producer** | The Node service and its runtime |
| Control exact frame capture | **Engine** | Capture, encoding, and orchestration |
| Submit a render without managing infrastructure | **HyperFrames Cloud** | Nothing beyond the request and result |
| Run distributed renders in your AWS account | **AWS Lambda** | The deployed AWS stack |
| Run distributed renders in your Google Cloud account | **Cloud Run** | The deployed GCP resources |
| Deploy a preview and render API from a template | **Hosted templates** | The selected hosting account |

## Local or CI: use the CLI

The CLI owns the complete normal pipeline: project loading, checks, browser
capture, audio mixing, and encoding.

```bash theme={null}
npx hyperframes check
npx hyperframes render --output video.mp4
```

Start here unless an application—not a person or CI job—must initiate the
render. See [Rendering](https://hyperframes.heygen.com/guides/rendering.md) for the normal workflow and the
[complete CLI reference](https://hyperframes.heygen.com/packages/cli.md) for automation flags.

## A Node application: use Producer

`@hyperframes/producer` is the complete programmable render pipeline. It is the
right layer for a backend that needs to provide project input, receive progress,
cancel work, or control encoding without spawning the CLI.

```ts theme={null}
import { createRenderJob, executeRenderJob } from "@hyperframes/producer";

const job = createRenderJob({ fps: 30, quality: "standard" });
await executeRenderJob(job, "./project", "./video.mp4");
```

Use [Producer](https://hyperframes.heygen.com/packages/producer.md) for its current configuration and exported
API. Use Engine only when Producer performs work your application must replace.

## Exact frame capture: use Engine

`@hyperframes/engine` opens a seekable composition and captures exact frames.
It does not replace the complete Producer pipeline.

Use it when building specialized capture, inspection, or rendering
infrastructure. For an ordinary encoded video, stay with CLI or Producer. See
[Engine](https://hyperframes.heygen.com/packages/engine.md).

## No infrastructure: use HyperFrames Cloud

Managed cloud rendering accepts a project, runs the render, and returns the
finished file without requiring local Chrome or FFmpeg.

```bash theme={null}
npx hyperframes cloud render ./project --output video.mp4
```

Authentication, variables, webhooks, and job management are covered in
[Cloud rendering](https://hyperframes.heygen.com/deploy/cloud.md).

## Infrastructure you control

Use [AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md) or [Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)
when renders must run inside your own cloud account. Both paths distribute work
across workers and store intermediate and final media in the corresponding
cloud storage.

Use the [hosted templates](https://hyperframes.heygen.com/guides/deploy.md) when the desired result is a small
preview application plus a render API on Vercel, Cloudflare, or Modal—not a
general distributed-rendering platform.

## The decision

Choose the highest-level surface that completes the job:

```text theme={null}
CLI → Producer → Engine
```

Moving right gives an application more control and more pipeline responsibility.
Managed Cloud, AWS Lambda, Cloud Run, and hosted templates decide where that
pipeline runs.

## Related topics

* [Render with the CLI](https://hyperframes.heygen.com/guides/rendering.md)
* [Render with HyperFrames Cloud](https://hyperframes.heygen.com/deploy/cloud.md)
* [Use Producer from a Node application](https://hyperframes.heygen.com/packages/producer.md)


## Related topics

- [CLI guide](https://hyperframes.heygen.com/developers/cli.md)
- [Deploy a preview and render API](https://hyperframes.heygen.com/guides/deploy.md)
- [HyperFrames vs Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.