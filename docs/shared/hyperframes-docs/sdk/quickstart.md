> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Edit a composition with the SDK

> Open composition HTML, query and edit elements, serialize the result, and add persistence.

Use `@hyperframes/sdk` when an application must inspect or change composition
HTML without opening Studio. If you only need playback, use the
[Player](https://hyperframes.heygen.com/packages/player.md). If you only need a rendered file, use the
[CLI](https://hyperframes.heygen.com/developers/cli.md) or [Producer](https://hyperframes.heygen.com/packages/producer.md).

The core loop is open, query, edit, and serialize. The SDK adds stable
`data-hf-id` values where they are missing so later edits target the same
elements.

## Open, edit, serialize

**1. Install the package**

```bash theme={null}
npm install @hyperframes/sdk
```

**2. Open a composition**

`openComposition` parses the HTML, stamps any elements that lack `data-hf-id` attributes, and returns a `Composition` session.

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";

const html = `<div class="clip" data-start="0" data-duration="5"
                data-hf-id="hf-title">Launch day</div>`;

const comp = await openComposition(html);
```

The call is async because it runs the ID-stamping pass over the DOM before returning.

**3. Find elements**

Use `getElements()` for a flat snapshot of everything in the composition, or `find()` to filter by tag, text content, `data-name` attribute, track index, or sub-composition host.

```typescript theme={null}
// All elements
const all = comp.getElements();

// Elements whose text contains "Launch"
const ids = comp.find({ text: "Launch" });

// A specific element by its hf-id
const el = comp.getElement("hf-title");
console.log(el?.text); // "Launch day"
```

`find()` returns an array of `scopedId` strings. For top-level elements, `scopedId === id`. For elements inside inlined sub-compositions, it is `"hf-HOST/hf-LEAF"`.

**4. Edit elements with typed methods**

Typed methods are the most readable way to mutate a composition. Each one translates directly into a dispatched `EditOp` and emits a patch event.

```typescript theme={null}
// Change text
comp.setText("hf-title", "Launch day — we shipped!");

// Change inline styles (camelCase property names)
comp.setStyle("hf-title", {
  color: "#FFD60A",
  fontSize: "96px",
  fontWeight: "700",
});

// Adjust clip timing
comp.setTiming("hf-title", { start: 0.5, duration: 4 });
```

Use `batch()` when several mutations should collapse into one undo entry, one persist write, and one `change` event:

```typescript theme={null}
comp.batch(() => {
  comp.setText("hf-title", "Launch day — we shipped!");
  comp.setStyle("hf-title", { color: "#FFD60A" });
  comp.setTiming("hf-title", { start: 0.5, duration: 4 });
});
```

**5. Serialize and dispose**

`serialize()` returns the full updated HTML string. Call `dispose()` when you are done to release event handlers and any internal state.

```typescript theme={null}
const updatedHtml = comp.serialize();
comp.dispose();

// updatedHtml is ready to write to disk, send to a renderer, or store in a database.
```

## Add a persistence adapter

The headless pattern above is fine for one-shot transforms. When you want the SDK to persist edits,
pass a `PersistAdapter`. Rapid changes are coalesced and written in order, with the latest state
winning rather than one disk write per UI event.

The filesystem adapter (`@hyperframes/sdk/adapters/fs`) writes to a local directory and keeps a rolling version history.

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";
import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";
import { readFile } from "node:fs/promises";

// Load the current HTML from disk (or use a template string on first run).
const html = await readFile("./project/index.html", "utf8").catch(() => "<div></div>");

const comp = await openComposition(html, {
  persist: createFsAdapter({ root: "./project" }),
  persistPath: "index.html",
});

// Persistence failures surface as events, not thrown errors.
comp.on("persist:error", ({ error }) => {
  console.error("Autosave failed:", error.message);
});

comp.setText("hf-title", "Autosaved title");
comp.setStyle("hf-title", { color: "#22C55E" });

// Drain any pending write before the process exits.
await comp.flush();
comp.dispose();
```

The adapter writes `./project/index.html` after every mutation and keeps up to 20 version snapshots under `./project/.hf-versions/`.

> [!NOTE]
>
> Disabling undo (`history: false`) does **not** disable autosave. The two are independent. Passing
> `history: false` is only necessary when you are managing the undo stack yourself.

## Related topics

> [card] [Querying & Editing Elements](https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md)
>
> FindQuery fields, scopedId for sub-compositions, batch semantics, and element handles.

> [card] [Undo, Redo & Patches](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)
>
> History module, patch events for host sync, and applyPatches loop prevention.

> [card] [Persistence](https://hyperframes.heygen.com/sdk/guides/persistence.md)
>
> Adapter selection, version history, and implementing a custom adapter.

> [card] [openComposition reference](https://hyperframes.heygen.com/sdk/reference/open-composition.md)
>
> Full option reference — adapters, overrides, coalesce window, and more.


## Related topics

- [How HyperFrames fits into an application](https://hyperframes.heygen.com/developers/overview.md)
- [Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)
- [@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.