> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Timing & Animation

> Set clip timing, elastic holds, GSAP tweens, and keyframed animations on composition elements.

Every clip in a HyperFrames composition has a position on the timeline (`data-start`, `data-duration`) and an optional animation attached to it. The SDK exposes typed helpers for both: the timing API controls *when* an element appears and how long it stays on screen; the animation API controls *how* it moves through that window.

## Clip Timing

### Reading timings

`getElementTimings()` returns a `Record<HfId, ElementTimingSnapshot>` — one entry per element that carries timing data. Values are derived from the live DOM on every call (never cached in the snapshot). Keys are `scopedId`: for top-level elements this equals the bare `id`, but for elements inside a sub-composition it is the scoped form `"hf-HOST/hf-LEAF"`.

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";

const comp = await openComposition(html);
const timings = comp.getElementTimings();

for (const [id, t] of Object.entries(timings)) {
  console.log(id, t.enterAt, "→", t.exitAt, "labels:", t.labels);
}
```

Each `ElementTimingSnapshot` contains:

**enterAt** `number`

Absolute timeline position (seconds) at which the element enters.

**exitAt** `number`

Absolute timeline position (seconds) at which the element exits.

**labels** `string[]`

GSAP timeline label names whose numeric position falls within `[enterAt, exitAt]`. Parsed fresh
from the GSAP script on every `getElementTimings()` call — never stale.

> [!NOTE]
>
> `getElementTimings()` only includes elements that have `data-start` and either `data-duration` or
> `data-end` attributes. Untimed elements are omitted. The method prefers `data-duration` over
> `data-end − data-start` when both exist, matching the behavior of `setTiming`.

### Setting timing on one element

```typescript theme={null}
// Move hf-title to start at 1.0 s, last 2.5 s, on track 0
comp.setTiming("hf-title", { start: 1.0, duration: 2.5, trackIndex: 0 });
```

All three fields are optional — pass only what you want to change:

**start** `number`

Clip start time in seconds.

**duration** `number`

Clip duration in seconds.

**trackIndex** `number`

Zero-based track index.

### Updating multiple elements in one batch

`setElementTiming(map)` dispatches one `setTiming` op per entry inside a single batch, so the history records one undo step and patch listeners see one event:

```typescript theme={null}
comp.setElementTiming({
  "hf-title": { start: 0.5, duration: 2.0 },
  "hf-logo": { start: 0.0, duration: 5.0, trackIndex: 1 },
  "hf-cta": { start: 3.0, duration: 2.5 },
});
```

Unknown ids are silently skipped.

### Elastic holds

An elastic hold freezes or loops a portion of an element's timeline window. Use it to hold a static frame between two animated segments without changing clip duration.

```typescript theme={null}
comp.setHold("hf-card", {
  start: 1.5, // hold begins at this time within the composition
  end: 4.0, // hold ends at this time
  fill: "freeze", // "freeze" | "loop"
});
```

`ElasticHold` fields:

**start** `number`

Absolute composition time at which the hold begins.

**end** `number`

Absolute composition time at which the hold ends.

**fill** `"freeze" | "loop"`

`"freeze"` holds the last frame until `end`; `"loop"` repeats the segment from `start` back to
`start`.

***

## GSAP Tweens

GSAP tweens are the primary animation primitive. The SDK reads tween IDs from `element.animationIds` (returned by the query API) and writes through `addGsapTween`, `setGsapTween`, and `removeGsapTween`.

### Adding a tween

```typescript theme={null}
const animId = comp.addGsapTween("hf-title", {
  method: "from",
  position: 0.5,
  duration: 0.6,
  ease: "power3.out",
  properties: { opacity: 0, y: 40 },
});
// animId is the newly-assigned animation ID — store it for subsequent edits
```

`addGsapTween` returns the newly-assigned animation ID as a `string`.

### GsapTweenSpec fields

**method** `"from" | "to" | "fromTo" | "set"`

The GSAP timeline method to call.

**position** `number | string`

Timeline position: a number (seconds) or a label-relative string (e.g. `"intro+=0.3"`).
Number-only is required for `addWithKeyframes` / `replaceWithKeyframes` — see
[Keyframes](#keyframes) below.

**duration** `number`

Tween duration in seconds.

**ease** `string`

GSAP ease string, e.g. `"power2.inOut"`.

**fromProperties** `Record\<string, unknown\>`

Starting properties for `"fromTo"` tweens.

**toProperties** `Record\<string, unknown\>`

Ending properties — used with `"fromTo"`.

**properties** `Record\<string, unknown\>`

Starting values for `"from"`, target values for `"to"`, or immediate values for `"set"`.
Also supplies the destination of `"fromTo"` when `toProperties` is omitted.

**repeat** `number`

Number of repeats (`-1` = infinite). Maps to GSAP's `repeat` option.

**yoyo** `boolean`

When `true`, alternates direction on each repeat.

**stagger** `number | Record\<string, unknown\>`

GSAP stagger amount (seconds) or a full stagger config object.

### Modifying a tween

```typescript theme={null}
// Change ease and duration — all other fields stay as-is
comp.setGsapTween(animId, { ease: "elastic.out(1, 0.5)", duration: 0.9 });
```

`setGsapTween` takes the animation ID and a `Partial<GsapTweenSpec>` — only the keys you pass are updated.

### Removing a tween

```typescript theme={null}
comp.removeGsapTween(animId);
```

### Looking up animation IDs

Query the element snapshot to find animation IDs attached to a given element:

```typescript theme={null}
const el = comp.getElement("hf-title");
const [firstAnimId] = el?.animationIds ?? [];
if (firstAnimId) {
  comp.setGsapTween(firstAnimId, { ease: "none" });
}
```

### Gating an op with `can()`

`dispatch()` does not run validation, so gate any op that can fail with `can()`
first and skip it when the result is not `ok`. Adding a tween or a label attaches
to a timeline — without a `gsap.timeline()` in the script, `can()` returns
`E_NO_GSAP_TIMELINE`:

```typescript theme={null}
const op = {
  type: "addGsapTween",
  target: "hf-title",
  tween: { method: "to", properties: { opacity: 1 }, duration: 0.5 },
} as const;

const check = comp.can(op);
if (!check.ok) {
  if (check.code === "E_NO_GSAP_TIMELINE") {
    // No gsap.timeline() in this composition — add one (var tl = gsap.timeline(...)) or skip
    console.warn("GSAP timeline not available:", check.message);
  }
  return;
}

comp.dispatch(op);
```

Stable error codes returned by `can()`:

| Code | Meaning |
| - | - |
| `E_TARGET_NOT_FOUND` | The target `HfId` does not exist in the document. |
| `E_NO_ROOT` | The document has no root element. |
| `E_NO_GSAP_TIMELINE` | The GSAP script has no `gsap.timeline()` to attach to. Declare one and retry. |
| `E_NO_GSAP_SCRIPT` | The composition has no embedded GSAP script. |

***

## Keyframes

For keyframe-based animations, use `addWithKeyframes` and `replaceWithKeyframes`. Both operate on the GSAP CSS-keyframes layer and return the minted animation ID.

### Adding a keyframed tween

```typescript theme={null}
const animId = comp.addWithKeyframes(
  "#hf-badge", // CSS selector targeting the element
  1.0, // timeline position in seconds (number only)
  0.8, // duration in seconds
  [
    { percentage: 0, properties: { opacity: 0, scale: 0.8 } },
    { percentage: 60, properties: { opacity: 1, scale: 1.05 }, ease: "power2.out" },
    { percentage: 100, properties: { scale: 1 } },
  ],
  "power2.inOut", // optional overall ease
);
```

Returns the new animation ID string, or `""` if the op was rejected.

### Replacing an existing keyframed tween

```typescript theme={null}
const newAnimId = comp.replaceWithKeyframes(oldAnimId, "#hf-badge", 1.0, 1.2, [
  { percentage: 0, properties: { x: -60, opacity: 0 } },
  { percentage: 100, properties: { x: 0, opacity: 1 }, ease: "back.out(1.7)" },
]);
// newAnimId !== oldAnimId — position-derived IDs renumber after the remove
```

> [!WARNING]
>
> `replaceWithKeyframes` is equivalent to `removeGsapTween` + `addWithKeyframes` in one atomic op.
> Because position-derived tween IDs renumber after the removal step, the returned ID is always a
> **new** ID and must not be assumed equal to the input `animationId`. Re-query
> `element.animationIds` after a replace to get the current set.

### KeyframeSpec fields

**percentage** `number`

Position within the tween as a percentage (0–100).

**properties** `Record\<string, number | string\>`

CSS / GSAP properties at this keyframe.

**ease** `string`

Per-keyframe ease applied *from* this keyframe to the next.

**auto** `boolean`

GSAP endpoint flag — when `true`, this keyframe picks up the element's current value
automatically.

### Lower-level keyframe and label ops

For lower-level operations — individual keyframe mutations (`addGsapKeyframe`, `setGsapKeyframe`, `removeGsapKeyframe`), property removal, arc paths, label insertion, and animation splitting — use `dispatch()` directly with the corresponding `EditOp` types. See the [Edit Operations reference](https://hyperframes.heygen.com/sdk/reference/edit-operations.md) for the full op union.

***

> [card] [Edit Operations](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)
>
> Full reference for every op type in the `EditOp` union, including lower-level keyframe and arc
> ops.

> [card] [Types](https://hyperframes.heygen.com/sdk/reference/types.md)
>
> `GsapTweenSpec`, `KeyframeSpec`, `ElasticHold`, `ElementTimingSnapshot`, and all related types.

> [card] [GSAP Animation Guide](https://hyperframes.heygen.com/guides/gsap-animation.md)
>
> Authoring GSAP timelines in composition HTML.

> [card] [Animation in Studio](https://hyperframes.heygen.com/studio/canvas.md#animate-with-keyframes)
>
> Keyframe authoring patterns and best practices.


## Related topics

- [Edit timing on the timeline](https://hyperframes.heygen.com/studio/timeline.md)
- [Imported film HTML](https://hyperframes.heygen.com/guides/imported-film-html.md)
- [Compositions](https://hyperframes.heygen.com/concepts/compositions.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.