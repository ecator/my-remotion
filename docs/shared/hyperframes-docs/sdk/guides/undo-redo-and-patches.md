> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Undo, Redo & Patches

> Use the SDK's built-in undo stack, subscribe to patch events, and integrate with a host application's own history.

The SDK ships undo/redo by default for standalone sessions and emits RFC 6902 JSON patches on every change. Patch events are the integration seam for host application history, collaborative editing, audit logs, and embedded override mode.

## Built-in Undo and Redo

Standalone sessions (those without an `overrides` option) automatically attach a history module. You call `undo()` and `redo()` directly on the composition, and guard UI state with `canUndo()` and `canRedo()`.

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";

const comp = await openComposition(html);

comp.setText("hf-title", "Draft A");
comp.setText("hf-title", "Draft B");

comp.canUndo(); // true
comp.undo();    // reverts "Draft B" → "Draft A"
comp.redo();    // reapplies "Draft B"
comp.canRedo(); // false — already at tip
```

> [!TIP]
>
> `canUndo()` and `canRedo()` return `false` when the stack is empty and also when `history: false` was passed to `openComposition`. Check them before showing undo/redo controls.

### Opting out of the built-in history

Pass `history: false` when the host application owns the undo stack and you want the SDK to emit patches without building a parallel internal stack:

```typescript theme={null}
const comp = await openComposition(html, {
  overrides: storedOverrides,
  history: false,
});
// comp.undo() / comp.redo() are no-ops — host drives history via applyPatches()
```

> [!NOTE]
>
> `history: false` only disables the SDK undo stack. Persistence (auto-save) is independent — passing `history: false` does not suppress disk writes.

### Coalescing rapid edits

The history module coalesces patch events into one undo entry when two conditions are met: the same op types and same element paths are touched within a configurable window. This prevents a slider drag from flooding the stack with hundreds of individual entries.

The default coalesce window is 300 ms. Override it in `openComposition`:

```typescript theme={null}
const comp = await openComposition(html, {
  coalesceMs: 500, // ms — increase for slower interactions
});
```

For more on the coalesce contract and the `HistoryOptions` type, see [Utilities](https://hyperframes.heygen.com/sdk/reference/utilities.md).

***

## Patch Events

Every committed change emits a `patch` event. Subscribe to mirror SDK edits into your host state, audit log, or collaboration channel.

```typescript theme={null}
const off = comp.on("patch", ({ formatVersion, patches, inversePatches, origin, opTypes }) => {
  if (formatVersion !== 1) throw new Error("Unexpected patch format version");
  saveToDB({ patches, inversePatches, origin, opTypes });
});

// Unsubscribe when done
off();
```

### PatchEvent fields

**formatVersion** `1`

Always `1` in the current SDK. Check this and reject unknown versions — a bump means a breaking change.

**patches** `JsonPatchOp[]`

Forward patches that were applied: the add/remove/replace ops describing how the document changed.

**inversePatches** `JsonPatchOp[]`

Inverse patches that undo this change. Store these alongside `patches` to support host-owned undo.

**origin** `unknown`

The origin tag that was passed to `dispatch()` or `batch()`. Use it to route or filter events.

**opTypes** `string[]`

Semantic names of the operations that produced this event (e.g. `["setStyle"]`). Useful for analytics and history labels. Not versioned — treat as informational.

### JsonPatchOp

The SDK emits and accepts only the add/remove/replace subset of RFC 6902:

```typescript theme={null}
interface JsonPatchOp {
  op: "add" | "remove" | "replace";
  path: string;   // JSON Pointer (RFC 6901), e.g. "/elements/hf-title/style/color"
  value?: unknown;
}
```

The SDK never emits `move`, `copy`, or `test` ops, and `applyPatches()` ignores them if passed.

***

## Origin Model

Every mutation is tagged with an origin string. The SDK defines two built-in origins:

| Constant | Value | When used |
| - | - | - |
| `ORIGIN_LOCAL` | `"local"` | Default for all `dispatch()` and `batch()` calls |
| `ORIGIN_APPLY_PATCHES` | `"@hyperframes/sdk:applyPatches"` | Automatically applied by `applyPatches()` |

Both are exported from `@hyperframes/sdk`.

### Setting a custom origin

Pass `origin` in the options to `dispatch()` or `batch()` to tag the event for downstream routing:

```typescript theme={null}
import { ORIGIN_LOCAL } from "@hyperframes/sdk";

comp.dispatch(
  { type: "setStyle", target: "hf-title", styles: { color: "#0EA5E9" } },
  { origin: "ui:color-picker" },
);

comp.batch(() => {
  comp.setText("hf-cta", "Buy Now");
  comp.setStyle("hf-cta", { backgroundColor: "#22C55E" });
}, { origin: "template-wizard" });
```

***

## Host-Owned History with applyPatches

When `history: false`, the host maintains its own undo stack from the patch events the SDK emits. To replay an undo step back into the SDK, call `applyPatches()` with the inverse patches from that stack entry:

```typescript theme={null}
// Host undo stack entry (built from PatchEvent)
type HostEntry = {
  patches: JsonPatchOp[];
  inversePatches: JsonPatchOp[];
};

let history: HostEntry[] = [];

comp.on("patch", ({ patches, inversePatches, origin }) => {
  // Skip — this is the SDK replaying a host-initiated undo
  if (origin === ORIGIN_APPLY_PATCHES) return;
  history.push({ patches, inversePatches });
});

function hostUndo() {
  const entry = history.pop();
  if (!entry) return;
  comp.applyPatches(entry.inversePatches);
}
```

### Preventing undo loops

`applyPatches()` auto-tags its patch event with `ORIGIN_APPLY_PATCHES`. Your listener **must** skip that origin or you create an infinite loop:

```typescript theme={null}
import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";

comp.on("patch", ({ patches, inversePatches, origin }) => {
  if (origin === ORIGIN_APPLY_PATCHES) return; // <-- required guard
  history.push({ patches, inversePatches });
});
```

> [!WARNING]
>
> Omitting the `ORIGIN_APPLY_PATCHES` guard causes every `applyPatches()` call to push a new entry onto the host stack, which triggers another `applyPatches()`, and so on. Always check `origin` first.

`ORIGIN_APPLY_PATCHES` is a namespaced string (`"@hyperframes/sdk:applyPatches"`) rather than a `Symbol` so it survives `postMessage`, structured clone, and JSON round-trips — important when the host forwards patch events across frames or workers.

### applyPatches with a custom origin

If you want downstream listeners to receive an explicit marker different from the default:

```typescript theme={null}
comp.applyPatches(entry.inversePatches, { origin: "host:undo" });
```

Any origin other than `ORIGIN_APPLY_PATCHES` will enter the history module if `history` is still attached. Use `history: false` or a `trackedOrigins` filter when running host-owned history to avoid double-stacking.

***

## Embedded Override Mode Integration

In embedded (T3) mode, the host stores only the sparse override delta for each user. Pair `history: false` with `applyPatches()` to let the host drive undo while the SDK updates the composition state:

```typescript theme={null}
import { openComposition, ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";

const comp = await openComposition(baseTemplateHtml, {
  overrides: storedUserOverrides,
  history: false,
});

let hostStack: HostEntry[] = [];

comp.on("patch", ({ patches, inversePatches, origin }) => {
  if (origin === ORIGIN_APPLY_PATCHES) return;
  hostStack.push({ patches, inversePatches });
  // Persist the updated override set
  saveOverrides(comp.getOverrides());
});

function undo() {
  const entry = hostStack.pop();
  if (entry) comp.applyPatches(entry.inversePatches);
}
```

See [Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md) for the full T3 integration pattern.

***

> [card] [Composition API](https://hyperframes.heygen.com/sdk/reference/composition.md)
>
> Full method signatures for `undo`, `redo`, `canUndo`, `canRedo`, `on`, `applyPatches`, `dispatch`, and `batch`.

> [card] [Types](https://hyperframes.heygen.com/sdk/reference/types.md)
>
> `PatchEvent`, `JsonPatchOp`, `ORIGIN_APPLY_PATCHES`, `ORIGIN_LOCAL`, and related types.

> [card] [Utilities](https://hyperframes.heygen.com/sdk/reference/utilities.md)
>
> `HistoryOptions`, `coalesceMs`, `trackedOrigins`, and `createHistory` internals.

> [card] [Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)
>
> Full T3 embedded integration with host-owned history.


## Related topics

- [Utilities & Constants](https://hyperframes.heygen.com/sdk/reference/utilities.md)
- [Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)
- [Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.