> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# openComposition

> Open a composition HTML string for editing. Returns a Composition session.

`openComposition` is the single entry point for every SDK session. It parses the composition HTML, stamps stable `hf-id` attributes on any elements that lack them, and returns a [`Composition`](https://hyperframes.heygen.com/sdk/reference/composition) ready to receive edits.

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";

const comp = await openComposition(html, opts?);
```

## Signature

```typescript theme={null}
openComposition(html: string, opts?: OpenCompositionOptions): Promise<Composition>
```

| Parameter | Type | Description |
| - | - | - |
| `html` | `string` | The full composition HTML string. |
| `opts` | `OpenCompositionOptions` | Optional configuration — adapters, overrides, history behavior. |

## Modes

The same function covers three deployment patterns. Which mode you get depends entirely on what you pass in `opts`.

**Standalone (default)** — You own the HTML, and the SDK owns history and persistence. Pass a `persist` adapter to enable autosave; undo/redo attaches automatically unless you opt out with `history: false`.

**Embedded / override mode** — Pass `overrides` to open a shared base template with a user-specific delta applied on top. The SDK accumulates further edits into the override set, and you store only the delta. History is disabled by default in embedded mode (the host's stack drives undo). See the [embedded override mode guide](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md).

**Headless / agent** — Omit both `persist` and `overrides`. The SDK is a pure in-memory transform. Call `serialize()` when done and discard the session.

## Options

**persist** `PersistAdapter`

Storage adapter for autosave. After every committed change the SDK enqueues a write to this adapter. The session fires `persist:error` events instead of throwing on write failures.

Built-in adapters: `createMemoryAdapter()` (tests/demos) and `createFsAdapter()` (Node.js). Custom adapters implement the `PersistAdapter` interface, exported from `@hyperframes/sdk`. (`createHeadlessAdapter()` is a `PreviewAdapter` for the `preview` field below — not a persist adapter.)

See the [persistence guide](https://hyperframes.heygen.com/sdk/guides/persistence.md) for adapter selection and configuration.

**persistPath** `string` (default: "composition.html")

Relative path the persist queue passes to the adapter's `write` call. Immutable for the lifetime of the session — changing it would create a new file on disk without removing the old one. You must close and reopen the session to change the save path.

**preview** `PreviewAdapter`

Live-preview adapter that bridges the SDK model to a rendering surface. When provided, the adapter's selection events update `comp.getSelection()` so pointer-driven hit tests stay in sync with the model without crossing the mutation path.

Built-in: `createIframePreviewAdapter()` for same-origin composition iframes, `createHeadlessAdapter()` when no preview surface exists.

**overrides** `OverrideSet`

Sparse `{ "hfId.prop.path": value }` map that is applied on top of the base HTML before the session starts. Every subsequent edit accumulates into this map. The current map is readable via `comp.getOverrides()`.

Providing `overrides` activates **embedded mode**: history defaults to off, and the SDK emits patches rather than owning the undo stack. The host stores only the delta and replays it on each open, so the base template can be updated independently.

See the [embedded override mode guide](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md).

**trackedOrigins** `unknown[]`

Whitelist of origin values whose mutations enter the undo stack. Defaults to all origins except `ORIGIN_APPLY_PATCHES` (the sentinel used by `applyPatches()`). Use this when you dispatch edits from multiple sources and only want some of them to be undoable — for example, to exclude programmatic bulk updates from user-facing undo history.

**coalesceMs** `number` (default: 300)

Auto-coalesce window in milliseconds. Consecutive mutations arriving within this window are merged into a single undo entry. Increase for slower interactions, decrease for tighter history granularity, or set to `0` to disable coalescing entirely.

**history** `false`

Pass `false` to skip attaching the undo/redo module. The session's `undo()`, `redo()`, `canUndo()`, and `canRedo()` become no-ops.

Use this when the host owns the undo stack and the SDK's history module would duplicate it. Note that disabling history does **not** disable persistence — autosave runs independently so that disabling undo does not silently drop disk writes.

In embedded mode (when `overrides` is provided), history defaults to off and this option is unnecessary.

## Examples

### Headless agent edit

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";

const comp = await openComposition(html);

const [titleId] = comp.find({ name: "headline" });
if (titleId) {
  comp.setText(titleId, "New headline");
  comp.setStyle(titleId, { color: "#FFD60A" });
}

const updatedHtml = comp.serialize();
comp.dispose();
```

### Standalone with filesystem persistence

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";
import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";

const comp = await openComposition(html, {
  persist: createFsAdapter({ root: "./project" }),
  persistPath: "index.html",
});

comp.on("persist:error", ({ error }) => {
  console.error("Autosave failed:", error.message);
});

comp.setText("hf-title", "Launch day");
await comp.flush(); // drain any pending write before process exit
comp.dispose();
```

### Embedded mode with overrides

```typescript theme={null}
import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";

import { openComposition } from "@hyperframes/sdk";

// Stored override delta for one customer
const savedOverrides = {
  "hf-title.text": "Acme — Q3 Review",
  "hf-logo.attr.src": "/customers/acme/logo.png",
};

const comp = await openComposition(baseTemplateHtml, {
  overrides: savedOverrides,
  history: false,
});

// Host drives undo; SDK just accumulates overrides
comp.on("patch", ({ patches, inversePatches, origin }) => {
  if (origin !== ORIGIN_APPLY_PATCHES) {
    hostHistoryStack.push({ patches, inversePatches });
  }
});

comp.setStyle("hf-title", { color: "#0EA5E9" });

// Persist the updated delta only — not the full HTML
const nextOverrides = comp.getOverrides();
await db.save(customerId, nextOverrides);
comp.dispose();
```

### Disabling history to reduce overhead

```typescript theme={null}
const comp = await openComposition(html, {
  persist: createFsAdapter({ root: "./output" }),
  history: false, // host owns undo; persist still runs
});
```

> [!NOTE]
>
> History defaults to **on** in standalone mode and **off** in embedded mode. Passing `history: false` in standalone mode is only necessary when you are managing the undo stack yourself and do not want the SDK to create a parallel copy.

## Related

> [card] [Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)
>
> The full editing surface returned by openComposition.

> [card] [Persistence guide](https://hyperframes.heygen.com/sdk/guides/persistence.md)
>
> Adapter selection, version history, and custom adapters.

> [card] [Embedded override mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)
>
> Template-driven products with host-owned history.


## Related topics

- [Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)
- [Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)
- [Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.