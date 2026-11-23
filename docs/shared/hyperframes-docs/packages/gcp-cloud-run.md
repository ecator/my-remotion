> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# @hyperframes/gcp-cloud-run

> Google Cloud Run and Workflows adapter for distributed HyperFrames rendering.

The GCP Cloud Run package runs HyperFrames' distributed render primitives on Google Cloud. It ships a Cloud Run HTTP service, a Node client SDK, and a Terraform module for provisioning the bucket, service, workflow, and service accounts.

```bash theme={null}
npm install @hyperframes/gcp-cloud-run
```

## When to Use

**Use `@hyperframes/gcp-cloud-run` when you need to:**

* Render large compositions on Google Cloud infrastructure
* Orchestrate `plan`, `renderChunk`, and `assemble` through Cloud Workflows
* Store project archives, chunk outputs, and final videos in GCS
* Deploy the renderer as a Cloud Run service with a pinned Chrome runtime
* Drive renders from CI, a backend service, or custom internal tooling

**Use a different package if you want to:**

* Render locally or inside a single Node process - use the [CLI](https://hyperframes.heygen.com/packages/cli.md) or [producer](https://hyperframes.heygen.com/packages/producer.md)
* Run the same distributed model on AWS - use [aws-lambda](https://hyperframes.heygen.com/packages/aws-lambda.md)
* Build or edit composition HTML - use [studio](https://hyperframes.heygen.com/packages/studio.md), [sdk](https://hyperframes.heygen.com/packages/sdk.md), or [core](https://hyperframes.heygen.com/packages/core.md)

> [!TIP]
>
> Cloud Run uses a container image, so it avoids Lambda ZIP-size pressure and can install the same pinned `chrome-headless-shell` runtime used by the standard renderer.

## Package Exports

| Import | Description |
| - | - |
| `@hyperframes/gcp-cloud-run` | Server handler, event types, GCS transport, and client SDK exports |
| `@hyperframes/gcp-cloud-run/server` | Cloud Run HTTP service entry point |
| `@hyperframes/gcp-cloud-run/sdk` | Lightweight Node SDK for deploying sites, starting renders, polling progress, and estimating cost |

The published package also includes `terraform/` and a `Dockerfile` for deployment.

## Architecture

Cloud Workflows invokes one Cloud Run service with different `Action` values:

**1. Plan**

Downloads the project archive from GCS, runs the producer planner, and uploads the plan directory.

**2. Render chunks**

Cloud Workflows runs parallel `renderChunk` calls against the Cloud Run service. Each request renders one chunk and uploads it to GCS.

**3. Assemble**

Downloads all chunks and audio assets, assembles the deliverable, and uploads the final file.

The service is intentionally close to the AWS Lambda adapter: thin cloud transport around the same `@hyperframes/producer/distributed` primitives.

## Deploying

Build and push the container, then apply the Terraform module:

```bash theme={null}
gcloud builds submit . \
  --tag REGION-docker.pkg.dev/PROJECT/REPO/hyperframes-render:TAG

terraform -chdir=node_modules/@hyperframes/gcp-cloud-run/terraform init
terraform -chdir=node_modules/@hyperframes/gcp-cloud-run/terraform apply \
  -var project_id=PROJECT \
  -var region=us-central1 \
  -var image=REGION-docker.pkg.dev/PROJECT/REPO/hyperframes-render:TAG
```

Terraform outputs the bucket name, service URL, workflow name, and region needed by the SDK.

### Page network restriction

The service sets `PRODUCER_RESTRICT_PAGE_NETWORK=true`, so a rendered page reaches only its own project files and public internet addresses. Loopback, private, link-local and IPv6 addresses are refused for anything the page loads. An asset on a VPC-only host or behind private DNS is missing from the video. ffmpeg's https inputs may open only https, so an https source that redirects to http, or encrypted HLS, does not load.

Keep it on when you render compositions you did not write. To turn it off, apply the module with `-var restrict_page_network=false`, or set `TF_VAR_restrict_page_network=false` before `hyperframes cloudrun deploy`.

## Using the SDK

```typescript theme={null}
import { getRenderProgress, renderToCloudRun } from "@hyperframes/gcp-cloud-run/sdk";

const handle = await renderToCloudRun({
  projectDir: "./my-composition",
  config: { fps: 30, width: 1920, height: 1080, format: "mp4" },
  bucketName: "hyperframes-render-my-project",
  projectId: "my-project",
  location: "us-central1",
  workflowId: "hyperframes-render",
  serviceUrl: "https://hyperframes-render-abc.us-central1.run.app",
});

let progress = await getRenderProgress({ executionName: handle.executionName });
while (progress.status === "running") {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  progress = await getRenderProgress({ executionName: handle.executionName });
}

console.log(progress.status, progress.outputFile, progress.costs.displayCost);
```

Plan v2 is the only supported distributed plan transport. Workers fetch
manifest-selected content-addressed artifacts, and the SDK sends explicit v2
without requiring a protocol option.

> [!WARNING]
>
> For an existing installation, pause new renders and drain active workflow
> executions. Redeploy the Cloud Run image and Cloud Workflows definition from
> the same package version before upgrading the application SDK. Older
> workflows may lack the Plan v2-only request and locator contract.

Pass `projectDir` for one-shot uploads, or call `deploySite()` separately and reuse the returned site handle across many renders.

## Related topics

> [card] [GCP Cloud Run Deployment](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)
>
> End-to-end deployment details and smoke-test notes.

> [card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md)
>
> The distributed primitives that the Cloud Run service executes.


## Related topics

- [Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)
- [Changelog](https://hyperframes.heygen.com/changelog.md)
- [CLI](https://hyperframes.heygen.com/packages/cli.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.