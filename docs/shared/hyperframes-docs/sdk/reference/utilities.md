> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Utilities & Constants

> History module, persist queue, document utilities, constants, and error types exported from @hyperframes/sdk.

This page covers everything exported from `@hyperframes/sdk` that is not covered in [`openComposition`](https://hyperframes.heygen.com/sdk/reference/open-composition), the [`Composition` interface](https://hyperframes.heygen.com/sdk/reference/composition), [edit operations](https://hyperframes.heygen.com/sdk/reference/edit-operations.md), [types](https://hyperframes.heygen.com/sdk/reference/types.md), or [adapters](https://hyperframes.heygen.com/sdk/reference/adapters.md).

***

## History Module

```typescript theme={null}
import { createHistory } from "@hyperframes/sdk";
import type { HistoryModule, HistoryOptions, HistoryEntry } from "@hyperframes/sdk";
```

Optional undo/redo module that wires onto a `Composition` session via the `"patch"` event. Standalone sessions created by `openComposition()` attach a history module automatically — you only need `createHistory` directly when you are building a host application that manages its own undo stack, or when you want non-default coalesce/depth settings.

### createHistory

```typescript theme={null}
function createHistory(session: Composition, opts?: HistoryOptions): HistoryModule;
```

Subscribes to `session.on('patch')` and builds an undo/redo stack. Coalesces rapid same-operation bursts on the same element into a single undo entry so a slider drag produces one undo step, not hundreds.

```typescript theme={null}
import { openComposition, createHistory } from "@hyperframes/sdk";

// Custom history — host controls undo/redo buttons
const comp = await openComposition(html, { history: false });
const history = createHistory(comp, { coalesceMs: 500, maxEntries: 50 });

comp.setText("hf-title", "Draft v1");

history.canUndo(); // true
history.undo();    // reverts to original
history.redo();    // re-applies

history.dispose(); // unsubscribes from patch events
```

### HistoryModule

```typescript theme={null}
interface HistoryModule {
  undo(): boolean;
  redo(): boolean;
  canUndo(): boolean;
  canRedo(): boolean;
  dispose(): void;
}
```

**undo** `() =\> boolean`

Pops the top entry from the undo stack and applies its inverse patches via `session.applyPatches()` tagged with `ORIGIN_APPLY_PATCHES`. Returns `true` when an entry was popped, `false` when the stack was empty.

**redo** `() =\> boolean`

Pops the top entry from the redo stack and re-applies its forward patches. Returns `true` when an entry was popped, `false` when the stack was empty. Any new op clears the redo stack.

**canUndo** `() =\> boolean`

Returns `true` when there is at least one entry on the undo stack.

**canRedo** `() =\> boolean`

Returns `true` when there is at least one entry on the redo stack.

**dispose** `() =\> void`

Unsubscribes from the session's `"patch"` event and clears both stacks. Call when the session is closed.

### HistoryOptions

```typescript theme={null}
interface HistoryOptions {
  trackedOrigins?: unknown[];
  coalesceMs?: number;
  maxEntries?: number;
}
```

**trackedOrigins** `unknown[]`

Only ops whose `origin` value appears in this array enter the undo stack. When omitted, all origins are tracked except `ORIGIN_APPLY_PATCHES` (which is always excluded to prevent undo loops). Use this to restrict the undo stack to UI-driven edits while letting programmatic patches pass through silently.

**coalesceMs** `number`

Window in milliseconds within which same-operation bursts on the same paths are merged into a single undo entry. The timestamp slides forward on each coalesced event, so continuous editing keeps merging until there is a gap longer than `coalesceMs`. Default: `300`.

**maxEntries** `number`

Maximum depth of the undo stack. Oldest entries are dropped when the limit is exceeded. Default: `100`.

### HistoryEntry

```typescript theme={null}
interface HistoryEntry {
  readonly patches: readonly JsonPatchOp[];
  readonly inversePatches: readonly JsonPatchOp[];
  readonly opTypes: readonly string[];
  readonly origin: unknown;
  readonly timestamp: number;
}
```

Entries are internal to the history module — you do not create them directly. They mirror the shape of `PatchEvent` fields so the history module can reconstruct the forward and inverse change sets without re-parsing.

> [!NOTE]
>
> Standalone sessions (the default) attach history automatically. Pass `{ history: false }` to `openComposition()` when you want to manage undo/redo yourself via `createHistory` or the host's own stack.

***

## Persist Queue

```typescript theme={null}
import { createPersistQueue } from "@hyperframes/sdk";
import type { PersistQueueModule, PersistQueueOptions } from "@hyperframes/sdk";
```

Optional module that subscribes to `"change"` events on a session and schedules async writes through a `PersistAdapter`. One write is in flight at a time; the latest HTML always wins (last-write-wins coalescing). Standalone sessions wired with a `persist` adapter attach this automatically via `openComposition()`. Use `createPersistQueue` directly only when you are building an embedded host that owns persistence separately from the SDK session.

### createPersistQueue

```typescript theme={null}
function createPersistQueue(
  session: Composition,
  adapter: PersistAdapter,
  opts?: PersistQueueOptions,
): PersistQueueModule;
```

```typescript theme={null}
import { openComposition, createPersistQueue } from "@hyperframes/sdk";
import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";

const adapt = createFsAdapter({ root: "./project" });
const comp = await openComposition(html, { history: false });

const queue = createPersistQueue(comp, adapt, {
  path: "my-comp.html",
  onError: ({ error }) => console.error("Write failed:", error.message),
});

comp.setText("hf-title", "Autosaved");

// Force immediate flush before app close
await queue.flush();
queue.dispose();
```

### PersistQueueModule

```typescript theme={null}
interface PersistQueueModule {
  flush(): Promise<void>;
  dispose(): void;
}
```

**flush** `() =\> Promise\<void\>`

Immediately saves any pending edit, waits for in-flight saves, and flushes the adapter's storage before resolving. With no pending edit, it flushes storage without writing another version. Use before app close or page unload.

**dispose** `() =\> void`

Cancels any pending write and unsubscribes from the session's `"change"` event. Does not flush — call `flush()` first if you need to ensure the final state is written.

### PersistQueueOptions

```typescript theme={null}
interface PersistQueueOptions {
  path?: string;
  onError?: (e: PersistErrorEvent) => void;
}
```

**path** `string`

The adapter path to write to. Passed directly to `adapter.write(path, content)`. Default: `"composition.html"`.

**onError** `(e: PersistErrorEvent) =\> void`

Called when `adapter.write()` or `adapter.flush()` rejects. Receives a `PersistErrorEvent` with `{ error: { message, cause? } }`. Use this to surface persistence failures in your UI or logging layer.

***

## Document Utilities

```typescript theme={null}
import { buildDocument, buildRoots, flatElements } from "@hyperframes/sdk";
```

Low-level utilities for building the `SdkDocument` model and `HyperFramesElement` trees from parsed HTML. These are the same functions the SDK uses internally on every `openComposition()` call. You rarely need them directly — they are exposed for hosts that parse HTML outside of a session, or for testing.

### buildDocument

```typescript theme={null}
function buildDocument(html: string): SdkDocument;
```

Parses an HTML string into the SDK document model. Calls `ensureHfIds` first so every element gets a stable `data-hf-id`. Uses `linkedom` for DOM parsing — node-safe, works in agents, CI, and server-side code. Returns an `SdkDocument` snapshot; mutations on the live session do not update the returned value.

### buildRoots

```typescript theme={null}
function buildRoots(document: Document): HyperFramesElement[];
```

Builds the element tree from an already-parsed (hf-id-stamped) `linkedom` `Document`. Walks the live DOM directly — no serialize/re-parse round trip. This is what the session's query API uses against its mutable document after each op.

### flatElements

```typescript theme={null}
function flatElements(roots: readonly HyperFramesElement[]): HyperFramesElement[];
```

Returns every element from `roots` and all their descendants in document order (depth-first pre-order). Useful for searching across the full element tree without writing your own recursive walk.

```typescript theme={null}
import { buildDocument, flatElements } from "@hyperframes/sdk";

const doc = buildDocument(html);
const all = flatElements(doc.roots);
const images = all.filter((el) => el.tag === "img");
```

***

## Id & Scope Utilities

```typescript theme={null}
import { resolveScoped, findById, bareId, escapeHfId, isNewHostBoundary } from "@hyperframes/sdk";
```

Low-level id-resolution helpers used internally by dispatch, patch replay, and query — exposed for hosts building their own DOM-facing tooling against the same document model.

### resolveScoped

```typescript theme={null}
function resolveScoped(document: Document, id: string): Element | null;
```

Resolve an `HfId` — bare (`"hf-title"`) or scoped (`"hf-host/hf-leaf"`) — to its `Element`. For an ambiguous bare id (the same id appearing both top-level and inside a sub-composition), prefers the canonical top-level match, matching `getElement()`'s own preference. This is the single resolution rule every mutation and patch-replay path shares — using your own `querySelector` instead can silently target the wrong duplicate.

### findById

```typescript theme={null}
function findById(document: Document, id: string): Element | null;
```

Thin alias for `resolveScoped` kept for call-site clarity where "find" reads better than "resolve." Identical behavior.

### bareId

```typescript theme={null}
function bareId(scopedId: string): string;
```

Strip a scoped id down to its leaf segment: `bareId("hf-host/hf-leaf")` returns `"hf-leaf"`. A no-op on an already-bare id.

### escapeHfId

```typescript theme={null}
function escapeHfId(id: string): string;
```

Escape an id for safe interpolation into a `querySelectorAll` attribute-value selector (backslashes and double quotes). Use this if you're writing a raw `[data-hf-id="..."]` selector yourself instead of going through `resolveScoped`/`findById`.

### isNewHostBoundary

```typescript theme={null}
function isNewHostBoundary(el: Element): boolean;
```

Returns `true` when `el` is the root of an inlined sub-composition — that is, it carries a `data-composition-file` attribute whose value differs from its parent's (or the parent has none). Use this to detect "entering a new sub-composition" while walking the tree, without hardcoding the attribute name.

***

## Variable Utilities

```typescript theme={null}
import { readVariableDefault } from "@hyperframes/sdk";
```

### readVariableDefault

```typescript theme={null}
function readVariableDefault(declarationElement: Element | null, id: string): unknown;
```

Read a declared variable's current `default` value from the element that carries
`data-composition-variables`: normally `<html>` for a full document or the composition root for a
template/fragment. Prefer the typed `Composition` method in session code; use this helper when you
already have the declaration element.

***

## Constants

### ORIGIN\_APPLY\_PATCHES

```typescript theme={null}
import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";

const ORIGIN_APPLY_PATCHES = "@hyperframes/sdk:applyPatches";
```

Reserved origin tag emitted by `applyPatches()` and by the history module's `undo()` / `redo()` methods. Host patch listeners **must** skip this origin to avoid undo loops:

```typescript theme={null}
comp.on("patch", ({ origin, patches }) => {
  if (origin === ORIGIN_APPLY_PATCHES) return; // SDK-internal replay — skip
  forwardToCollaborationLayer(patches);
});
```

The value is a namespaced string rather than a `Symbol` so it survives realm boundaries — `postMessage`, structured clone, and JSON serialization all preserve it correctly. T3 embedded hosts that forward patch events across frames or workers rely on this property. The namespace prefix (`@hyperframes/sdk:`) makes accidental collision with a host-chosen origin string negligible.

### ORIGIN\_LOCAL

```typescript theme={null}
import { ORIGIN_LOCAL } from "@hyperframes/sdk";

const ORIGIN_LOCAL = "local";
```

Default origin applied when you call typed methods (`setText`, `setStyle`, …) or `dispatch()` without an explicit `origin` option. You can filter on `"local"` to track only user-driven UI edits in a history module's `trackedOrigins` list.

***

## Errors

### UnsupportedOpError

```typescript theme={null}
import { UnsupportedOpError } from "@hyperframes/sdk";
```

Thrown by `dispatch()` when an op type is not handled by the current engine version. The `code` property is stable and part of the public API contract — switch on it rather than the message string.

```typescript theme={null}
class UnsupportedOpError extends Error {
  readonly code = "E_UNSUPPORTED_OP";
}
```

Feature-detect before dispatching optional ops with `comp.can(op)` to avoid this error in the hot path:

```typescript theme={null}
const result = comp.can({ type: "setGsapTween", animationId: id, properties: { ease: "power2.out" } });
if (!result.ok) {
  console.warn(result.message);
  return;
}
comp.setGsapTween(id, { ease: "power2.out" });
```

***

## resolveNearestHfElement

```typescript theme={null}
import { resolveNearestHfElement } from "@hyperframes/sdk";

function resolveNearestHfElement(
  el: Element | null,
  isVisible: (el: Element) => boolean,
): ElementAtPointResult | null;
```

Walks from `el` upward through `parentElement`, returning the nearest ancestor (inclusive) that carries `[data-hf-id]` and is not `[data-hf-root]`. Returns `null` when the walk exits the DOM without finding a match, when the matched node is the composition root, or when `isVisible(node)` returns `false` for the matched node.

This is a pure function (no `window` or DOM API calls beyond `getAttribute`) and is unit-testable in a plain Node environment. `createIframePreviewAdapter` uses it internally to translate raw hit-test results into SDK element IDs. Full treatment of hit-testing and the visual editor canvas pattern is in the [Canvas Integration guide](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md).

***

## resolveElementAffordances

```typescript theme={null}
import { resolveElementAffordances } from "@hyperframes/sdk/editing";
```

Determines which editing operations are available for a live element given its current DOM state and model. Imported from the `@hyperframes/sdk/editing` subpath. Full documentation is in the [Editing Affordances guide](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md).

***

> [card] [Undo, Redo & Patches](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)
>
> How the history module, ORIGIN\_APPLY\_PATCHES, and applyPatches() work together.

> [card] [Persistence](https://hyperframes.heygen.com/sdk/guides/persistence.md)
>
> Wiring a PersistAdapter, handling errors, and restoring from version history.


## Related topics

- [@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)
- [Speed ramps](https://hyperframes.heygen.com/reference/speed-ramps.md)
- [@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.