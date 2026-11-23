> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# How HyperFrames fits into an application

> Understand the composition contract, editing surfaces, Player, CLI, and rendering layers before choosing an integration.

Building on HyperFrames means using an editable HTML composition as the shared source for automation, playback, editing, and rendering.

## Start with the composition contract

A composition is a finite HTML document with an explicit viewport, timed clips,
media, and zero or more seekable animation runtimes.

```html theme={null}
<!doctype html>
<html lang="en">
  <body>
    <div
      id="main"
      data-composition-id="intro"
      data-start="0"
      data-duration="5"
      data-width="1920"
      data-height="1080"
      data-no-timeline
    >
      <img
        id="product"
        class="clip"
        data-start="0"
        data-duration="5"
        data-track-index="1"
        src="./assets/product.png"
      />
    </div>
  </body>
</html>
```

The runtime reads the timing attributes and controls clip visibility and media
playback. When the composition uses an animation runtime, HyperFrames seeks its
registered timeline as well. The HTML remains inspectable and editable by
normal web tooling.

Use the [composition and schema reference](https://hyperframes.heygen.com/reference/html-schema.md) when generating compositions or building a new authoring surface.

## Choose the smallest integration surface

| What the application must do | Start with | First useful result |
| - | - | - |
| Validate, preview, render, or automate projects | CLI | Check and render one known project |
| Query and change composition HTML | SDK | Find one element, change it, and save |
| Embed a seekable composition | Player | Play and seek one composition in a page |
| Build an editor | SDK + Player | Edit the source and reflect it in a live preview |
| Render from a Node service | Producer | Turn one composition into an encoded file |
| Control frame capture or build rendering infrastructure | Engine | Capture exact frames from a seekable page |
| Run managed or distributed renders | Cloud, Lambda, or Cloud Run | Submit one project and retrieve the result |

Do not start with the rendering engine when the CLI already performs the complete job. Do not add the SDK when the application only needs playback.

## CLI: operate complete projects

The CLI is the highest-level technical surface. It creates projects, opens Studio, validates compositions, captures review frames, renders files, publishes projects, and drives cloud render backends.

```bash theme={null}
npx hyperframes check
npx hyperframes render --output video.mp4
```

Use the [CLI guide](https://hyperframes.heygen.com/developers/cli.md) for the everyday commands and the [complete CLI reference](https://hyperframes.heygen.com/packages/cli.md) for flags and automation.

## SDK: inspect and edit

`@hyperframes/sdk` opens composition HTML, gives elements stable `data-hf-id` identifiers, applies typed edit operations, emits JSON patches, supports undo and redo, and persists through adapters.

```ts theme={null}
import { openComposition } from "@hyperframes/sdk";

const html = `<div class="clip" data-start="0" data-duration="5"
  data-hf-id="hf-title">Old title</div>`;

const comp = await openComposition(html);
comp.setText("hf-title", "A new title");
const updatedHtml = comp.serialize();
```

Use it for agents, backend jobs, custom editors, versioned template systems, or any application that must change the source rather than merely play it.

Start with the [SDK quickstart](https://hyperframes.heygen.com/sdk/quickstart.md).

## Player: embed and seek

`@hyperframes/player` is a web component that loads a composition in an isolated iframe and exposes video-like playback controls.

```html title="index.html" theme={null}
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@hyperframes/player"
></script>

<hyperframes-player
  src="/compositions/intro.html"
  controls
></hyperframes-player>
```

Use its JavaScript API to play, pause, seek, change playback rate, and listen for timeline events. It does not edit or render the composition.

See the [Player reference](https://hyperframes.heygen.com/packages/player.md).

## Rendering: choose the layer you need

* **CLI** — complete local and automated rendering.
* **Producer** — the Node rendering pipeline: capture, encode, and audio mix.
* **Engine** — lower-level seekable page capture and exact-frame control.
* **Managed cloud** — hosted rendering without operating Chrome or FFmpeg.
* **AWS Lambda or Google Cloud Run** — infrastructure you deploy and control.

Most applications should begin with the CLI or Producer. Reach for Engine only when building a specialized capture or rendering system.

Use [rendering infrastructure](https://hyperframes.heygen.com/deploy/overview.md) to compare hosted, local, and self-managed paths.

## The complete mental model

```text theme={null}
composition → inspect or edit → play or render
```

Every surface works on the same source. Choose the smallest layer that produces the result your application needs, then move lower only when the higher-level layer removes control you genuinely require.

## Related topics

* [Run complete projects from the CLI](https://hyperframes.heygen.com/developers/cli.md)
* [Edit composition HTML with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)
* [Embed a composition with the Player](https://hyperframes.heygen.com/packages/player.md)


## Related topics

- [Build on HyperFrames](https://hyperframes.heygen.com/developers/index.md)
- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)
- [How a HyperFrames project works](https://hyperframes.heygen.com/concepts/index.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.