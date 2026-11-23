> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Composition

> The main editing surface returned by openComposition — query, mutate, animate, and serialize a composition.

`Composition` is the object returned by [`openComposition`](https://hyperframes.heygen.com/sdk/reference/open-composition). Every SDK edit goes through this interface. Typed methods are convenience wrappers over `dispatch()`; all validation runs in `dispatch()` regardless of which entry point you use.

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";
import type { Composition } from "@hyperframes/sdk";

const comp: Composition = await openComposition(html);
```

For a practical walkthrough see [Querying and editing](https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md).

***

## Typed edit methods

Typed methods are the recommended way to apply common edits. Each one calls `dispatch()` internally, so all patch events, history, and persistence behavior is identical.

### `setStyle`

```typescript theme={null}
setStyle(id: HfId, styles: Record<string, string | null>): void
```

Apply inline CSS styles to one element. Use camelCase property names (matching `CSSStyleDeclaration`). Pass `null` as a value to remove that property.

```typescript theme={null}
comp.setStyle("hf-title", { color: "#FFD60A", fontSize: "96px" });
comp.setStyle("hf-card", { borderRadius: null }); // removes border-radius
```

### `setText`

```typescript theme={null}
setText(id: HfId, value: string): void
```

Replace the display text of an element. Targets the element's direct text content, not all descendant text.

```typescript theme={null}
comp.setText("hf-headline", "Product launch — June 2026");
```

### `setAttribute`

```typescript theme={null}
setAttribute(id: HfId, name: string, value: string | null): void
```

Set or remove an HTML attribute. Pass `null` to remove the attribute entirely.

```typescript theme={null}
comp.setAttribute("hf-logo", "src", "/assets/logo-v2.png");
comp.setAttribute("hf-video", "autoplay", null); // removes autoplay
```

### `setTiming`

```typescript theme={null}
setTiming(id: HfId, timing: { start?: number; duration?: number; trackIndex?: number }): void
```

Update the `data-start`, `data-duration`, and/or `data-track-index` attributes of one element. All fields are optional; omitted fields are left unchanged.

```typescript theme={null}
comp.setTiming("hf-title", { start: 0.5, duration: 2.5 });
comp.setTiming("hf-cta", { trackIndex: 1 });
```

### `removeElement`

```typescript theme={null}
removeElement(id: HfId): void
```

Remove an element and all its descendants from the composition. The inverse is an `addElement` of the removed subtree, so `undo()` restores it exactly.

```typescript theme={null}
comp.removeElement("hf-old-badge");
```

### `addElement`

```typescript theme={null}
addElement(parent: HfId | null, index: number, html: string): HfId
```

Insert an HTML fragment as a child of `parent` at zero-based sibling `index`. Pass `null` for `parent` to insert at the document body root. The fragment must be single-root and must not contain `<script>` tags. Returns the minted `hf-id` of the inserted root element.

```typescript theme={null}
const newId = comp.addElement("hf-scene", 0, '<div class="clip">New clip</div>');
comp.setText(newId, "Inserted clip");
```

### `setVariableValue`

```typescript theme={null}
setVariableValue(id: string, value: string | number | boolean | FontValue | ImageValue): void
```

Update a composition variable. Font variables require a `FontValue` object `{ name, source }`; image variables require an `ImageValue` object `{ url, alt?, fit? }`. Scalar variables accept `string | number | boolean`.

```typescript theme={null}
comp.setVariableValue("brandColor", "#6C5CE7");
comp.setVariableValue("brandFont", { name: "Inter", source: "https://fonts.googleapis.com/css2?family=Inter" });
comp.setVariableValue("heroImage", { url: "/assets/hero.jpg", fit: "cover" });
```

> [!NOTE]
>
> `setVariableValue` only updates a variable's current value — it refuses to create an undeclared variable. Use `declareVariable` to create one.

### `getVariableValue`

```typescript theme={null}
getVariableValue(id: string, opts?: { base?: boolean }): string | number | boolean | FontValue | ImageValue | undefined
```

Return a declared variable's current `default` value, or `undefined` if the id is undeclared or has no value set.

```typescript theme={null}
const color = comp.getVariableValue("brandColor"); // "#6C5CE7"
```

Pass `{ base: true }` to read the default **as authored at open** — before the
T3 override-set or any `setVariableValue` folded into the declaration. This is
the value to restore when a host replays an undo that removes a `var.<id>`
override. For a variable declared mid-session, `{ base: true }` returns its
live default (its declaration is its base).

### `listVariables`

```typescript theme={null}
listVariables(): CompositionVariable[]
```

Return every declared variable's full schema — `id`, `type`, `label`, `default`, and any type-specific fields (`min`/`max`/`step` for numbers, `options` for enums, `source` for fonts, etc). Returns `[]` when the composition declares no variables.

```typescript theme={null}
for (const v of comp.listVariables()) {
  console.log(v.id, v.type, v.default);
}
```

### `declareVariable` / `updateVariableDeclaration` / `removeVariableDeclaration`

```typescript theme={null}
declareVariable(declaration: CompositionVariable): void
updateVariableDeclaration(id: string, declaration: CompositionVariable): void
removeVariableDeclaration(id: string): void
```

Manage the `data-composition-variables` schema itself. `declareVariable` adds a new
typed declaration (creating the attribute when the composition has none);
`updateVariableDeclaration` replaces an existing declaration wholesale — the id is
immutable, rename by remove + declare; `removeVariableDeclaration` deletes a
declaration (the last removal drops the whole attribute). All three validate via
`can()` (`E_DUPLICATE_VARIABLE`, `E_VARIABLE_NOT_FOUND`, `E_INVALID_ARGS`,
`E_INVALID_VARIABLE_ID` — the id must match `/^[A-Za-z_][A-Za-z0-9_-]*$/` since it
becomes a CSS custom-property name, `data-var-*` value, and CLI `--variables` key;
and `E_FRAGMENT_COMPOSITION`). Declarations live on the composition's declaration
root: the `<html>` element for a full document, or the composition root element
(`[data-composition-id]`) for a template / fragment sub-composition. Despite its
name, `E_FRAGMENT_COMPOSITION` now fires only when the source has **no** root
element at all to carry the schema — a fragment that has a composition root
accepts declarations. (The code is kept for compatibility; the fix is "add a
composition root element", not necessarily "add an `<html>`".)

```typescript theme={null}
comp.declareVariable({ id: "title", type: "string", label: "Title", default: "Hello" });
comp.updateVariableDeclaration("title", { id: "title", type: "string", label: "Headline", default: "Hello" });
comp.removeVariableDeclaration("title");
```

> [!NOTE]
>
> `removeVariable(id)` is a shorthand alias of `removeVariableDeclaration(id)`.

### `getVariableDeclarations` / `getVariableValues` / `validateVariableValues` / `getVariableUsage`

```typescript theme={null}
getVariableDeclarations(): CompositionVariable[]
getVariableValues(overrides?: Record<string, unknown>): Record<string, unknown>
validateVariableValues(values: Record<string, unknown>): VariableValidationIssue[]
getVariableUsage(): VariableUsageReport
```

Read-only variable APIs (no dispatch). `getVariableDeclarations` returns the typed
schema (same strict filter the render pipeline uses). `getVariableValues` resolves
values for this composition file — its declared defaults merged under the given overrides. The
runtime additionally walks declarations from inlined sub-compositions in an assembled document, so
query each SDK composition separately when you need that wider view. `validateVariableValues` runs the same checks as
`--strict-variables` (`undeclared` / `type-mismatch` / `enum-out-of-range`).
`getVariableUsage` statically scans every inline script for `getVariables()` reads
and cross-references the schema: `{ usedIds, unusedDeclarations, undeclaredReads,
scanIncomplete }` — `scanIncomplete` flips when scripts access variables dynamically,
making `usedIds` a lower bound.

### `setPreviewVariables`

```typescript theme={null}
setPreviewVariables(values: Record<string, unknown> | null): boolean
```

Apply ephemeral variable values to the preview surface (never persisted — use
`setVariableValue` to change a default). Pass `null` to restore declared defaults.
Delegates to the preview adapter's optional `setPreviewVariables`; returns `false`
when no adapter support is available.

### `getElementTimings`

```typescript theme={null}
getElementTimings(): Record<HfId, ElementTimingSnapshot>
```

Return a map of enter/exit times and active GSAP labels for every timed element. The SDK derives `enterAt`/`exitAt` using `data-duration` when present, falling back to `data-end − data-start`. GSAP labels are parsed fresh from the script each call. Elements with no timing attributes are excluded.

```typescript theme={null}
const timings = comp.getElementTimings();
for (const [id, t] of Object.entries(timings)) {
  console.log(id, t.enterAt, t.exitAt, t.labels);
}
```

### `setElementTiming`

```typescript theme={null}
setElementTiming(map: Record<HfId, { start?: number; duration?: number; trackIndex?: number }>): void
```

Apply a sparse timing map in one batch. All entries are dispatched inside a single `batch()` call so the history sees one undo step. Entries for unknown IDs are silently skipped.

```typescript theme={null}
comp.setElementTiming({
  "hf-title":   { start: 0,   duration: 2   },
  "hf-caption": { start: 1.5, duration: 1.5 },
  "hf-cta":     { start: 3,   duration: 2   },
});
```

### `setHold`

```typescript theme={null}
setHold(id: HfId, hold: ElasticHold): void
```

Set an elastic hold window — a `{ start, end, fill }` range that either freezes or loops the element during a pause in the timeline.

```typescript theme={null}
comp.setHold("hf-hero", { start: 2, end: 5, fill: "freeze" });
```

### `addGsapTween`

```typescript theme={null}
addGsapTween(target: HfId, tween: GsapTweenSpec): string
```

Add a GSAP tween to the composition's timeline targeting the given element. Returns the newly assigned `animationId`.

```typescript theme={null}
const animId = comp.addGsapTween("hf-title", {
  method: "from",
  position: 0,
  duration: 0.6,
  ease: "power3.out",
  properties: { opacity: 0, y: 40 },
});
```

### `setGsapTween`

```typescript theme={null}
setGsapTween(animationId: string, properties: Partial<GsapTweenSpec>): void
```

Update properties on an existing tween. Only the fields you supply are changed; the rest remain.

```typescript theme={null}
comp.setGsapTween(animId, { ease: "back.out(1.7)", duration: 0.8 });
```

### `removeGsapTween`

```typescript theme={null}
removeGsapTween(animationId: string): void
```

Remove a tween by animation ID.

```typescript theme={null}
comp.removeGsapTween(animId);
```

### `addWithKeyframes`

```typescript theme={null}
addWithKeyframes(
  targetSelector: string,
  position: number,
  duration: number,
  keyframes: KeyframeSpec[],
  ease?: string,
): string
```

Add a new keyframed tween for `targetSelector` at the given timeline position and duration. Returns the newly minted `animationId`. Position is a number in seconds (not a label-relative string).

```typescript theme={null}
const animId = comp.addWithKeyframes(
  "#hf-logo",
  0.5,
  1.2,
  [
    { percentage: 0,   properties: { opacity: 0, scale: 0.8 } },
    { percentage: 100, properties: { opacity: 1, scale: 1   } },
  ],
  "power2.out",
);
```

### `replaceWithKeyframes`

```typescript theme={null}
replaceWithKeyframes(
  animationId: string,
  targetSelector: string,
  position: number,
  duration: number,
  keyframes: KeyframeSpec[],
  ease?: string,
): string
```

Atomically remove an existing tween and add a replacement keyframed tween. Returns the replacement's `animationId`. Because position-derived IDs renumber after the removal, the returned ID may differ from the input `animationId` — treat the return value as the new canonical ID.

```typescript theme={null}
const newId = comp.replaceWithKeyframes(
  oldAnimId,
  "#hf-card",
  1.0,
  0.8,
  [
    { percentage: 0,   properties: { x: -100 } },
    { percentage: 100, properties: { x: 0     } },
  ],
);
```

### `undo` / `redo`

```typescript theme={null}
undo(): void
redo(): void
```

Step backward or forward through the undo history. No-ops when history is disabled (`history: false` in options) or in embedded mode.

```typescript theme={null}
comp.setText("hf-title", "Draft");
comp.undo(); // reverts to original text
comp.redo(); // re-applies "Draft"
```

### `canUndo` / `canRedo`

```typescript theme={null}
canUndo(): boolean
canRedo(): boolean
```

Return `true` when a step in that direction is available. Use to drive the enabled state of undo/redo UI controls.

```typescript theme={null}
undoButton.disabled = !comp.canUndo();
redoButton.disabled = !comp.canRedo();
```

***

## Query

### `getElements`

```typescript theme={null}
getElements(): ElementSnapshot[]
```

Return a flat array of all elements in the composition, including elements nested inside sub-compositions. Each `ElementSnapshot` carries the element's `id`, `scopedId`, `tag`, `inlineStyles`, `classNames`, `attributes`, `text`, timing fields, and `animationIds`. The array is a fresh copy; mutations to the returned objects have no effect.

```typescript theme={null}
const elements = comp.getElements();
const images = elements.filter((el) => el.tag === "img");
```

> [!NOTE]
>
> For elements inside inlined sub-compositions, use `scopedId` (e.g. `"hf-host/hf-leaf"`) as the dispatch target, not `id`. Top-level elements have `scopedId === id`.

### `getRootElements`

```typescript theme={null}
getRootElements(): ElementSnapshot[]
```

Return only top-level elements, each carrying its full subtree — no id appears twice (unlike `getElements`, which flattens every nested element into the same array). Use this when you need one entry per top-level clip rather than every element in the tree.

```typescript theme={null}
const roots = comp.getRootElements();
```

### `getElement`

```typescript theme={null}
getElement(id: HfId): ElementSnapshot | null
```

Return the snapshot for one element by ID. Accepts both bare IDs (top-level elements) and scoped IDs (sub-composition elements). Returns `null` if no element matches.

```typescript theme={null}
const el = comp.getElement("hf-title");
if (el) {
  console.log(el.tag, el.inlineStyles);
}
```

### `find`

```typescript theme={null}
find(query: FindQuery): string[]
```

Search elements by structured query. Returns an array of `scopedId` strings for matching elements. All fields in `FindQuery` are optional and combined with AND logic.

| Field | Type | Description |
| - | - | - |
| `tag` | `string` | Exact HTML tag name, lowercase (`"div"`, `"img"`). |
| `text` | `string` | Substring match against the element's `text` field. |
| `name` | `string` | Exact match against `data-name` attribute. |
| `track` | `number` | Exact track index (`data-track-index`). |
| `composition` | `string` | Filter to elements inside a specific sub-composition host by its `hf-id`. |

```typescript theme={null}
const headlineIds = comp.find({ name: "headline" });
const allImages   = comp.find({ tag: "img" });
const track1Ids   = comp.find({ track: 1 });
```

### `getAllAnimationIds`

```typescript theme={null}
getAllAnimationIds(): Set<string>
```

Return every GSAP tween id parsed from the composition's script, regardless of whether its target selector currently matches a live DOM element. This differs from a given `ElementSnapshot`'s own `animationIds` field, which only lists tweens whose selector resolves to that specific element.

```typescript theme={null}
const allIds = comp.getAllAnimationIds();
```

***

## Selection

### `selection`

```typescript theme={null}
selection(): SelectionProxy
```

Return a `SelectionProxy` that resolves `getSelection()` at call time and dispatches operations to all selected elements. The proxy captures the ID list when you call `selection()` — subsequent selection changes do not affect an already-captured proxy.

```typescript theme={null}
const sel = comp.selection();
sel.setStyle({ opacity: "0.5" });
sel.removeElement(); // removes all currently selected elements
```

### `element`

```typescript theme={null}
element(id: HfId): ElementHandle
```

Return a curried `ElementHandle` for a single element. The handle stores only the ID string, so there is no stale-reference hazard if the DOM changes between calls.

```typescript theme={null}
const title = comp.element("hf-title");
title.setText("Hello");
title.setStyle({ fontWeight: "700" });
```

### `getSelection`

```typescript theme={null}
getSelection(): string[]
```

Return a copy of the current selection as an array of `hf-id` strings. Returns `[]` when nothing is selected.

```typescript theme={null}
const ids = comp.getSelection();
console.log(`${ids.length} elements selected`);
```

### `setSelection`

```typescript theme={null}
setSelection(ids: string[]): void
```

Replace the current selection. Fires `selectionchange`. Pass `[]` to clear the selection. Duplicate IDs are deduplicated automatically.

```typescript theme={null}
comp.setSelection(["hf-title", "hf-subtitle"]);
comp.setSelection([]); // clear
```

***

## Advanced / agent

### `dispatch`

```typescript theme={null}
dispatch(op: EditOp, opts?: { origin?: unknown }): void
```

Apply a data-shaped edit operation. All typed methods call this internally. Use `dispatch` when you need to apply op types that do not have a typed wrapper, when you are building automation that constructs ops programmatically, or when you need to set a custom `origin`.

```typescript theme={null}
comp.dispatch({ type: "setStyle", target: "hf-card", styles: { borderRadius: "24px" } });
comp.dispatch({ type: "reorderElements", entries: [{ target: "hf-bg", zIndex: 0 }] });
comp.dispatch({ type: "setCompositionMetadata", width: 1920, height: 1080, duration: 30 });
```

For the full op catalog see [Edit operations](https://hyperframes.heygen.com/sdk/reference/edit-operations.md).

You can also target multiple elements with a single `dispatch` by passing an array to `target`:

```typescript theme={null}
comp.dispatch({ type: "setText", target: ["hf-title", "hf-subtitle"], value: "Coming soon" });
```

### `batch`

```typescript theme={null}
batch(fn: () => void, opts?: { origin?: unknown }): void
```

Coalesce multiple dispatches into one undo entry and one `patch` event. If the callback throws, all DOM mutations that ran inside the batch are rolled back atomically and the model is restored to its state before `batch()` was called.

```typescript theme={null}
comp.batch(() => {
  comp.setText("hf-title", "Version 2");
  comp.setStyle("hf-title", { color: "#22C55E" });
  comp.setTiming("hf-title", { start: 1, duration: 3 });
});
```

### `can`

```typescript theme={null}
can(op: EditOp): CanResult
```

Dry-run validation. Returns `{ ok: true }` when `dispatch(op)` would succeed, or `{ ok: false, code, message, hint? }` when it would fail or be a no-op.

Use this as a feature-detection gate before rendering controls that depend on GSAP timeline availability, or before showing UI that applies optional edits.

```typescript theme={null}
const result = comp.can({
  type: "setGsapTween",
  animationId: "anim-1",
  properties: { ease: "power3.out" },
});

if (result.ok) {
  comp.setGsapTween("anim-1", { ease: "power3.out" });
} else {
  console.warn(result.code, result.message);
}
```

Stable error codes: `E_TARGET_NOT_FOUND`, `E_NO_ROOT`, `E_NO_GSAP_TIMELINE`, `E_NO_GSAP_SCRIPT`.

For the full op catalog see [Edit operations](https://hyperframes.heygen.com/sdk/reference/edit-operations.md).

***

## Events

All `on()` overloads return an unsubscribe function. Call it to remove the listener.

```typescript theme={null}
on(event: "change",         handler: () => void): () => void
on(event: "selectionchange", handler: (ids: string[]) => void): () => void
on(event: "patch",           handler: (event: PatchEvent) => void): () => void
on(event: "persist:error",   handler: (event: PersistErrorEvent) => void): () => void
```

### `change`

Fires after every committed mutation (whether typed method, `dispatch`, or `batch`). Use this to refresh a canvas or other derived view.

```typescript theme={null}
const off = comp.on("change", () => {
  canvas.render(comp.getElements());
});

off(); // unsubscribe
```

### `selectionchange`

Fires when the selection changes, with the new ID array as the argument.

```typescript theme={null}
comp.on("selectionchange", (ids) => {
  propertiesPanel.show(ids);
});
```

### `patch`

Fires after every committed change with a `PatchEvent` containing RFC 6902 forward and inverse patches, the `origin`, and semantic `opTypes`. Use this to mirror edits into a host history stack, collaboration layer, or audit log.

```typescript theme={null}
import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";

comp.on("patch", ({ patches, inversePatches, origin, opTypes }) => {
  if (origin !== ORIGIN_APPLY_PATCHES) {
    hostHistory.push({ patches, inversePatches });
  }
});
```

> [!WARNING]
>
> Always guard against `ORIGIN_APPLY_PATCHES` in `patch` listeners. Failing to skip that origin causes an infinite loop when your host replays inverse patches back into the SDK via `applyPatches()`.

### `persist:error`

Fires when the persist adapter fails to write. The session continues; edits accumulate in memory and the queue retries on the next mutation.

```typescript theme={null}
comp.on("persist:error", ({ error }) => {
  toast.error(`Autosave failed: ${error.message}`);
});
```

For undo/redo and patch patterns see [Undo, redo, and patches](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md).

***

## Serialization

### `serialize`

```typescript theme={null}
serialize(): string
```

Return the current composition as an HTML string reflecting all mutations applied since `openComposition`. The base HTML is never modified; this always returns a fresh serialization of the live document.

```typescript theme={null}
const updatedHtml = comp.serialize();
await fs.writeFile("output.html", updatedHtml);
```

***

## Embedded extras

These methods are only meaningful in embedded / override mode. See the [embedded override mode guide](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md).

### `getOverrides`

```typescript theme={null}
getOverrides(): OverrideSet
```

Return a copy of the current override set — the sparse delta accumulated on top of the base template. Store this instead of the full HTML when the base template is shared.

```typescript theme={null}
const delta = comp.getOverrides();
await db.saveUserOverrides(userId, delta);
```

### `applyPatches`

```typescript theme={null}
applyPatches(patches: readonly JsonPatchOp[], opts?: { origin?: unknown }): void
```

Apply RFC 6902 patches directly to the live document. The default origin is `ORIGIN_APPLY_PATCHES`, which prevents `patch` listeners from forwarding these back in an undo loop. Use this when the host owns the undo stack and needs to replay inverse patches from its own history.

```typescript theme={null}
// Host undo: replay inverse patches from the host stack
const { inversePatches } = hostHistory.pop();
comp.applyPatches(inversePatches);
```

***

## Lifecycle

### `flush`

```typescript theme={null}
flush(): Promise<void>
```

Drain the persist queue. Resolves when any pending write has been committed to the adapter. No-op when no persist adapter was provided. Call this before process exit or navigation away to avoid losing queued writes.

```typescript theme={null}
comp.setText("hf-title", "Final title");
await comp.flush();
comp.dispose();
```

### `dispose`

```typescript theme={null}
dispose(): void
```

Tear down the session: unsubscribe preview adapter listeners, stop the persist queue, stop the history module, and clear all event handlers. After `dispose()`, the `Composition` object is inert; continued calls produce no-ops or errors.

```typescript theme={null}
comp.dispose();
```

> [!NOTE]
>
> Always call `dispose()` when you are done with a session. Skipping it leaks listeners attached to the preview adapter.

***

## Related

> [card] [openComposition](https://hyperframes.heygen.com/sdk/reference/open-composition.md)
>
> Session factory — all options and modes.

> [card] [Edit operations](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)
>
> Full op catalog for dispatch() and can().

> [card] [Types reference](https://hyperframes.heygen.com/sdk/reference/types.md)
>
> All exported TypeScript types — ElementSnapshot, PatchEvent, GsapTweenSpec, and more.

> [card] [Querying and editing](https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md)
>
> Practical guide to find, getElements, and typed edits.

> [card] [Undo, redo, and patches](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)
>
> History, patch events, ORIGIN\_APPLY\_PATCHES guard.

> [card] [Embedded override mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)
>
> Template-driven products with host-owned history.


## Related topics

- [Compositions](https://hyperframes.heygen.com/concepts/compositions.md)
- [openComposition](https://hyperframes.heygen.com/sdk/reference/open-composition.md)
- [Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.