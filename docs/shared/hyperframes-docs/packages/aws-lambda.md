> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# @hyperframes/aws-lambda

> AWS Lambda and Step Functions adapter for distributed HyperFrames rendering.

The AWS Lambda package runs HyperFrames' distributed render primitives on AWS. It ships the Lambda handler, a Node client SDK, and an optional CDK construct for provisioning the render stack inside an adopter's AWS account.

```bash theme={null}
npm install @hyperframes/aws-lambda
```

## When to Use

**Use `@hyperframes/aws-lambda` when you need to:**

* Render large compositions on AWS Lambda instead of one local machine
* Fan out `plan`, `renderChunk`, and `assemble` through Step Functions
* Store render inputs, intermediate chunks, and outputs in S3
* Drive renders from CI, a backend service, or a custom CLI
* Provision the render topology from a CDK app

**Use a different package if you want to:**

* Render locally or inside your own Node process - use the [CLI](https://hyperframes.heygen.com/packages/cli.md) or [producer](https://hyperframes.heygen.com/packages/producer.md)
* Run the same distributed model on Google Cloud - use [gcp-cloud-run](https://hyperframes.heygen.com/packages/gcp-cloud-run.md)
* Build or edit composition HTML - use [studio](https://hyperframes.heygen.com/packages/studio.md), [sdk](https://hyperframes.heygen.com/packages/sdk.md), or [core](https://hyperframes.heygen.com/packages/core.md)

> [!WARNING]
>
> This package is deployment glue for AWS infrastructure. It assumes you control an AWS account, S3 bucket, Step Functions state machine, and Lambda runtime configuration.

## Package Exports

| Import | Description |
| - | - |
| `@hyperframes/aws-lambda` | Handler types, runtime helpers, S3 transport, and client SDK exports |
| `@hyperframes/aws-lambda/handler` | Lambda handler entry point for Step Functions dispatch |
| `@hyperframes/aws-lambda/sdk` | Lightweight Node SDK for deploying sites, starting renders, polling progress, and estimating cost |
| `@hyperframes/aws-lambda/cdk` | Optional CDK construct for provisioning the render bucket, Lambda, and Step Functions stack |

`aws-cdk-lib` and `constructs` are optional peer dependencies. SDK-only consumers do not need them unless they import from `@hyperframes/aws-lambda/cdk`.

## Architecture

The Lambda adapter wraps the distributed producer primitives behind one dispatch boundary:

**1. Plan**

Fetches the project inputs from S3, probes the composition, prepares audio, and publishes the plan artifacts. Plan v2 defers eligible constant-frame-rate SDR video extraction to the chunk workers; variable-frame-rate sources and required HDR color conversions still run during planning.

**2. Render chunks**

Step Functions fans out chunk jobs. Each Lambda invocation downloads the assets it needs, extracts its deferred video frames, renders one chunk, and uploads the result.

**3. Assemble**

Downloads all rendered chunks plus audio assets, assembles the final output, and writes the finished file to S3.

All three phases must fit the configured per-invocation Lambda timeout, at most 15 minutes, and the function's temporary storage. Smaller chunks can reduce each worker's extraction and rendering work, but do not divide video extraction that still happens in Plan. See [long-video planning limits](https://hyperframes.heygen.com/deploy/aws-lambda.md#long-video-planning-times-out) for FFmpeg frame-stall timeouts and how to split jobs that cannot fit.

The x86 handler ZIP uses `@sparticuz/chromium`; a `chrome-headless-shell` ZIP is over Lambda's 250 MiB unzipped limit. The arm64 video image runs Chrome for Testing's linux-arm64 `chrome-headless-shell`, with `@sparticuz/chromium`'s fonts so text resolves as on x86.

### Page network restriction

The handler sets `PRODUCER_RESTRICT_PAGE_NETWORK=true` unless the function already sets it, so a rendered page reaches only its own project files and public internet addresses. Loopback, private, link-local and IPv6 addresses are refused for anything the page loads. An asset on a VPC-only host or behind private DNS is missing from the video.

Keep it on when you render compositions you did not write. To turn it off, set `PRODUCER_RESTRICT_PAGE_NETWORK=false` in the function's environment. Only `false`, `0`, `no` or `off` turn it off. Any other value keeps it on, and a value the handler does not recognise logs a warning.

## Using the SDK

After deploying the AWS resources, use the SDK from Node:

```typescript theme={null}
import { deploySite, getRenderProgress, renderToLambda } from "@hyperframes/aws-lambda/sdk";

const site = await deploySite({
  projectDir: "./my-composition",
  bucketName: "hyperframes-render-bucket",
});

const handle = await renderToLambda({
  siteHandle: site,
  bucketName: site.bucketName,
  stateMachineArn: "arn:aws:states:us-east-1:123456789012:stateMachine:hyperframes-render",
  config: {
    fps: 30,
    width: 1920,
    height: 1080,
    format: "mp4",
    chunkSize: 240,
    maxParallelChunks: 16,
    runtimeCap: "lambda",
  },
});

const progress = await getRenderProgress({ executionArn: handle.executionArn });
console.log(progress.status, progress.overallProgress, progress.costs.displayCost);
```

Plan v2 is the only supported distributed plan transport. Workers fetch
manifest-selected content-addressed artifacts, and the SDK sends explicit v2
without requiring a protocol option.

> [!WARNING]
>
> For an existing installation, pause new renders and drain active Step
> Functions executions. Redeploy the Lambda handler and SAM/CDK state machine
> from the same package version before upgrading the application SDK. Older
> infrastructure may lack the Plan v2-only request and locator contract.

`renderToLambda()` validates the distributed render config before starting the Step Functions execution, so invalid dimensions, formats, chunk sizes, or payload sizes fail synchronously.

## Using the CDK Construct

```typescript theme={null}
import { App, Stack } from "aws-cdk-lib";
import { HyperframesRenderStack } from "@hyperframes/aws-lambda/cdk";

const app = new App();
const stack = new Stack(app, "VideoRender");

const render = new HyperframesRenderStack(stack, "HyperframesRender", {
  // reservedConcurrency: 8,
  // lambdaMemoryMb: 10240,
  // chromeSource: "sparticuz",
});

console.log(render.bucket.bucketName, render.stateMachine.stateMachineArn);
```

## Building the Handler ZIP

From the monorepo:

```bash theme={null}
bun install
bun run --cwd packages/aws-lambda build:zip
bun run --cwd packages/aws-lambda verify:zip-size
```

The build stages Chromium, Puppeteer, FFmpeg, and the handler bundle into `packages/aws-lambda/dist/handler.zip`. The size verifier keeps the unzipped artifact below Lambda's deployment limit.

## Related topics

> [card] [AWS Lambda Deployment](https://hyperframes.heygen.com/deploy/aws-lambda.md)
>
> End-to-end deployment details and operational notes.

> [card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md)
>
> The distributed primitives that the Lambda handler executes.


## Related topics

- [AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)
- [Render templates on Lambda](https://hyperframes.heygen.com/deploy/templates-on-lambda.md)
- [CLI](https://hyperframes.heygen.com/packages/cli.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.