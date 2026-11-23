> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Build on HyperFrames

> Choose the smallest HyperFrames surface for automation, editing, playback, rendering, or generated compositions.

<video aria-label="A HyperFrames composition shown through the CLI, SDK, Player, and rendering infrastructure." src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/journey-developers-v3-v2.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/journey-developers-v3.jpg" playsInline preload="metadata" />

Use this path when you want to write a composition yourself, automate a project,
or add HyperFrames to another product. If you only want an agent to make a
video, start with the [first-video guide](https://hyperframes.heygen.com/quickstart.md).

## Write and render a project yourself

Create a blank project and open it in Studio:

```bash theme={null}
npx hyperframes init my-video --example blank
cd my-video
npx hyperframes preview
```

The project is ordinary HTML. A composition starts with this root:

```html theme={null}
<div
  id="root"
  data-composition-id="main"
  data-start="0"
  data-duration="10"
  data-width="1920"
  data-height="1080"
>
  <div class="clip" data-start="0" data-duration="10" data-track-index="1">
    <!-- Ordinary HTML, CSS, images, and timed media. -->
  </div>
</div>
```

The project template supplies the composition root, viewport, and duration.
HTML and CSS control what appears; `data-*` attributes control when it appears.
When the project is ready:

```bash theme={null}
npx hyperframes check
npx hyperframes render --output video.mp4
```

## Add HyperFrames to an application

Choose the smallest surface that completes the job:

> [card] [CLI](https://hyperframes.heygen.com/developers/cli.md)
>
> Run checks and renders from a script or CI job.

> [card] [SDK quickstart](https://hyperframes.heygen.com/sdk/quickstart.md)
>
> Inspect and change composition HTML from an application.

> [card] [Player](https://hyperframes.heygen.com/packages/player.md)
>
> Embed a composition and control playback.

> [card] [Rendering infrastructure](https://hyperframes.heygen.com/deploy/overview.md)
>
> Render from a Node service, managed cloud, or infrastructure you operate.

Start with the CLI for project-level automation. Add the SDK only when code
must inspect or edit the source, and add the Player only when a page needs live
playback. Producer and Engine are lower rendering layers, not required setup.

## Understand the architecture

The [developer overview](https://hyperframes.heygen.com/developers/overview.md) explains how the composition,
CLI, SDK, Player, Producer, and Engine fit together. Use the
[HTML schema](https://hyperframes.heygen.com/reference/html-schema.md) when generating source directly.

## Related topics

* [Understand the complete application architecture](https://hyperframes.heygen.com/developers/overview.md)
* [Automate a project with the CLI](https://hyperframes.heygen.com/developers/cli.md)
* [Edit composition HTML with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)


## Related topics

- [What is HyperFrames?](https://hyperframes.heygen.com/introduction.md)
- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)
- [Move from Remotion to HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.