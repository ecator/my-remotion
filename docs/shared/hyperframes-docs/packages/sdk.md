> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# @hyperframes/sdk

> Headless, framework-neutral composition editing engine for agents and custom editors.

The SDK package provides a programmatic editing layer for HyperFrames compositions. It opens composition HTML, exposes query and mutation APIs, emits JSON patches, supports undo/redo, and can persist changes through pluggable adapters without requiring React, Studio, or a browser UI.

```bash theme={null}
npm install @hyperframes/sdk
```

## When to Use

**Use `@hyperframes/sdk` when you need to:**

* Build a custom composition editor in your own application
* Let an agent inspect and edit composition HTML without driving a browser UI
* Apply batch text, style, timing, asset, variable, or animation edits from code
* Track undo/redo and patch events for host application history
* Persist edited HTML through memory, filesystem, or custom storage adapters
* Layer sparse overrides on top of a reusable base composition template

**Use a different package if you want to:**

* Render compositions to MP4 or WebM - use the [CLI](https://hyperframes.heygen.com/packages/cli.md) or [producer](https://hyperframes.heygen.com/packages/producer.md)
* Preview and edit visually out of the box - use the [CLI](https://hyperframes.heygen.com/packages/cli.md) (`npx hyperframes preview`) or [studio](https://hyperframes.heygen.com/packages/studio.md)
* Parse composition HTML - use [parsers](https://hyperframes.heygen.com/packages/parsers.md)
* Lint composition HTML or projects - use [lint](https://hyperframes.heygen.com/packages/lint.md)
* Compile or generate low-level composition HTML - use [core](https://hyperframes.heygen.com/packages/core.md)
* Capture frames from a headless browser - use [engine](https://hyperframes.heygen.com/packages/engine.md)

> [!TIP]
>
> The SDK is the right layer for product integrations and agents that need structured edits. The CLI
> and Studio are user-facing tools built around the same composition format; the SDK is the editing
> engine you embed behind your own UI or automation.

> [!NOTE]
>
> This page is the package overview. Start with the [SDK quickstart](https://hyperframes.heygen.com/sdk/quickstart.md), then use the
> focused guides and reference pages for exact methods, operations, types, and adapters.

## Package Exports

| Import | Description |
| - | - |
| `@hyperframes/sdk` | Main editing API, types, memory/headless adapters, iframe preview adapter |
| `@hyperframes/sdk/adapters/memory` | In-memory persistence adapter for tests, demos, and ephemeral sessions |
| `@hyperframes/sdk/adapters/fs` | Node.js filesystem persistence adapter with version history |
| `@hyperframes/sdk/adapters/headless` | No-op preview adapter for agents, CI, and server-side editing |

## Quick Start

Open HTML, edit explicit element IDs, then serialize the updated composition:

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";

const comp = await openComposition(html);

const [headlineId] = comp.find({ text: "Old headline" });
if (headlineId) {
  comp.setText(headlineId, "New headline");
  comp.setStyle(headlineId, {
    color: "#FFD60A",
    fontSize: "96px",
  });
}

const updatedHtml = comp.serialize();
comp.dispose();
```

## Core Concepts

### Explicit Element IDs

All edits target stable HyperFrames element IDs. This makes the SDK safe for headless agents and backend jobs because mutations do not depend on mouse state or a current UI selection.

```typescript theme={null}
const allElements = comp.getElements();
const imageIds = allElements
  .filter((element) => element.tag === "img")
  .map((element) => element.id);

for (const id of imageIds) {
  comp.setAttribute(id, "loading", "eager");
}
```

### Typed Methods

The common editing operations have typed convenience methods:

```typescript theme={null}
comp.setText("hf-title", "Launch day");
comp.setStyle("hf-title", { color: "#ffffff", transform: "translateY(24px)" });
comp.setAttribute("hf-logo", "src", "/assets/logo.png");
comp.setTiming("hf-title", { start: 0.5, duration: 2.5 });
comp.setVariableValue("brandColor", "#6C5CE7");
comp.removeElement("hf-old-caption");
```

Use `batch()` when several mutations should become one undo entry, one persist write, and one change notification:

```typescript theme={null}
comp.batch(() => {
  comp.setText("hf-title", "Version 2");
  comp.setStyle("hf-title", { color: "#22C55E" });
  comp.setTiming("hf-title", { start: 1, duration: 3 });
});
```

### Advanced Dispatch API

Agents and automation can emit data-shaped operations through `dispatch()`:

```typescript theme={null}
comp.dispatch({
  type: "setStyle",
  target: "hf-card",
  styles: { borderRadius: "24px" },
});
```

Before showing a UI control or applying an optional operation, call `can()`:

```typescript theme={null}
const result = comp.can({
  type: "setGsapTween",
  animationId: "anim-1",
  properties: { ease: "power3.out" },
});

if (result.ok) {
  comp.setGsapTween("anim-1", { ease: "power3.out" });
}
```

## Persistence

Pass a persistence adapter to autosave edits. The SDK ships memory and filesystem adapters, and host applications can implement the same `PersistAdapter` interface for S3, HTTP, IndexedDB, or app-specific storage.

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";
import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";

const comp = await openComposition(html, {
  persist: createFsAdapter({ root: "./project" }),
  persistPath: "index.html",
});

comp.setText("hf-title", "Saved title");
await comp.flush();
```

Persistence failures are emitted as events instead of crashing the session:

```typescript theme={null}
comp.on("persist:error", ({ error }) => {
  console.error("Autosave failed:", error.message);
});
```

## Undo, Redo, and Patch Events

Standalone sessions include undo/redo by default:

```typescript theme={null}
comp.setText("hf-title", "Draft");
comp.undo();
comp.redo();
```

Patch events let a host application mirror SDK edits into its own state, collaboration layer, or audit log:

```typescript theme={null}
const unsubscribe = comp.on("patch", ({ patches, inversePatches, origin }) => {
  saveToHostHistory({ patches, inversePatches, origin });
});

unsubscribe();
```

## Embedded Override Mode

For template-driven products, open a composition with an `overrides` object. The SDK applies the sparse override set on top of the base HTML, accumulates additional edits into that override set, and lets the host store only the delta.

```typescript theme={null}
const comp = await openComposition(templateHtml, {
  overrides: {
    "hf-title.text": "Customer-specific title",
    "hf-logo.attr.src": "/customers/acme/logo.png",
  },
  history: false,
});

comp.setStyle("hf-title", { color: "#0EA5E9" });

const nextOverrides = comp.getOverrides();
```

Use `applyPatches()` when the host owns undo/redo and needs to replay inverse patches into the SDK without creating loops.

## Preview Adapters

The SDK can run headlessly, or it can connect to a preview surface:

```typescript theme={null}
import { openComposition, createHeadlessAdapter } from "@hyperframes/sdk";

const comp = await openComposition(html, {
  preview: createHeadlessAdapter(),
});
```

For browser integrations, `createIframePreviewAdapter()` bridges the SDK to a same-origin composition iframe so hit-testing, selection, and draft preview updates can stay outside the model mutation path.

## Related topics

> [card] [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)
>
> Low-level types, HTML utilities, runtime helpers, and linter APIs.

> [card] [@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md)
>
> Ready-made visual editor UI that can embed SDK-driven editing flows.

> [card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md)
>
> Programmatic rendering pipeline for turning edited HTML into video.

> [card] [CLI](https://hyperframes.heygen.com/packages/cli.md)
>
> Command-line create, preview, lint, and render workflows.


## Related topics

- [Adapters](https://hyperframes.heygen.com/sdk/reference/adapters.md)
- [How HyperFrames fits into an application](https://hyperframes.heygen.com/developers/overview.md)
- [Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.