> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Types

> Core types exported from @hyperframes/sdk, with pointers to the adapter, history, and persistence types.

This page documents the core types exported from `@hyperframes/sdk`, verified against `packages/sdk/src/types.ts` and the export barrel at `packages/sdk/src/index.ts`. Adapter, history, and persistence types live with the APIs that take them — see [Adapters](https://hyperframes.heygen.com/sdk/reference/adapters.md), [Utilities](https://hyperframes.heygen.com/sdk/reference/utilities.md), [Composition](https://hyperframes.heygen.com/sdk/reference/composition.md), and [openComposition](https://hyperframes.heygen.com/sdk/reference/open-composition.md).

See also: [`Composition`](https://hyperframes.heygen.com/sdk/reference/composition) for the main session interface, [`Edit Operations`](https://hyperframes.heygen.com/sdk/reference/edit-operations) for the `EditOp` catalog.

***

## HfId

```typescript theme={null}
type HfId = string;
```

A stable HyperFrames element identifier — the value of the `data-hf-id` attribute stamped on every editable element by `ensureHfIds`. Use `HfId` wherever you would write a raw `string` to signal that the value is an element id.

***

## HyperFramesElement

Full DOM-level view of one editable element. Returned by `comp.getElements()` and `comp.getElement(id)`.

```typescript theme={null}
interface HyperFramesElement {
  readonly id: string;
  readonly scopedId: string;
  readonly tag: string;
  readonly children: readonly HyperFramesElement[];
  readonly inlineStyles: Readonly<Record<string, string>>;
  readonly classNames: readonly string[];
  readonly attributes: Readonly<Record<string, string>>;
  readonly text: string | null;
  readonly start: number | null;
  readonly duration: number | null;
  readonly trackIndex: number | null;
  readonly animationIds: readonly string[];
}
```

**id** `string`

The element's `data-hf-id` value — unique within the top-level document.

**scopedId** `string`

Fully-qualified scoped identifier: `host-chain-prefix/leaf`, separated by `/`. For top-level elements `scopedId === id`. For elements inside inlined sub-compositions the format is `"hf-HOST/hf-LEAF"` (any depth). Use `scopedId` — not `id` — as the canonical key in `dispatch()` targets, `getElement()`, `find()`, and `OverrideSet` keys when addressing sub-composition elements.

**tag** `string`

Lowercase HTML tag name (`"div"`, `"img"`, `"p"`, …).

**children** `readonly HyperFramesElement[]`

Direct child elements. Build a flat list with `flatElements()` from `@hyperframes/sdk` utilities.

**inlineStyles** `Readonly\<Record\<string, string\>\>`

Inline CSS properties in camelCase, mirroring `CSSStyleDeclaration` convention (`fontSize`, not `font-size`).

**classNames** `readonly string[]`

The element's class list.

**attributes** `Readonly\<Record\<string, string\>\>`

All HTML attributes except `style`, `class`, and `data-hf-*` (those are represented elsewhere in the model).

**text** `string | null`

The element's direct text content, intended as the `setText` target. Not a full descendant-text snapshot.

**start** `number | null`

Timing start in seconds (`data-start`). `null` when the element carries no timing attribute.

**duration** `number | null`

Timing duration in seconds (`data-duration`). `null` when not set.

**trackIndex** `number | null`

Zero-based track index (`data-track-index`). `null` when not set.

**animationIds** `readonly string[]`

IDs of GSAP tweens whose target is this element. Pass these to the GSAP tween ops in `dispatch()`.

***

## ElementSnapshot

```typescript theme={null}
type ElementSnapshot = HyperFramesElement;
```

Type alias for `HyperFramesElement`. Used in return types of `getElements()` and `getElement()` to signal that the value is a read-only snapshot — it does not update after subsequent mutations.

***

## SdkDocument

The SDK's in-memory document model. Returned by `buildDocument()`.

```typescript theme={null}
interface SdkDocument {
  readonly roots: readonly HyperFramesElement[];
  readonly gsapScript: string | null;
  readonly styles: string | null;
  readonly width: number | null;
  readonly height: number | null;
  readonly compositionDuration: number | null;
  readonly html: string;
}
```

**roots** `readonly HyperFramesElement[]`

Top-level elements of the composition body. Walk the tree via `.children`.

**gsapScript** `string | null`

Raw contents of the composition's GSAP `<script>` block, if present.

**styles** `string | null`

Raw contents of the composition's `<style>` block, if present.

**width** `number | null`

Composition width in pixels from `data-width` on the root element. `null` if not set.

**height** `number | null`

Composition height in pixels from `data-height`. `null` if not set.

**compositionDuration** `number | null`

Total duration in seconds from `data-duration` on the root element. `null` if not set.

**html** `string`

Build-time snapshot of the `ensureHfIds`-stamped HTML. This value is **never updated** after mutations — call `comp.serialize()` to get the current document state.

***

## OverrideSet

```typescript theme={null}
type OverrideSet = Record<
  string,
  string | number | boolean | Record<string, unknown> | null
>;
```

A sparse map of overrides layered on top of a base composition template. Used in embedded override mode (T3) — pass as `overrides` to `openComposition()`, or read the accumulated delta with `comp.getOverrides()`.

**Key format:** `hfId.prop.path`, where:

* `hfId.style.fontSize` — inline style property override
* `hfId.text` — text content override
* `hfId.attr.src` — attribute override
* `hfId` (key only, value `null`) — element removed by user
* `var.{id}` — variable override; value is a scalar or an object (`FontValue` / `ImageValue`)

**`null` value** = removal marker: the element or property was deleted by the user.

```typescript theme={null}
const overrides: OverrideSet = {
  "hf-title.text": "Customer headline",
  "hf-logo.attr.src": "/customers/acme/logo.png",
  "hf-title.style.color": "#0EA5E9",
  "hf-old-badge": null,                         // element removed
  "var.brand-font": {                            // font variable
    name: "Inter",
    source: "https://fonts.googleapis.com/css2?family=Inter",
  },
};
```

> [!WARNING]
>
> The value union includes `Record<string, unknown>` to admit object-valued variables (font, image). Code that reads an `OverrideSet` value must narrow before assuming a scalar — an object value type-checks anywhere `unknown` is accepted.

***

## FindQuery

Passed to `comp.find(query)` to search elements by descriptor.

```typescript theme={null}
interface FindQuery {
  tag?: string;
  text?: string;
  name?: string;
  track?: number;
  composition?: string;
}
```

**tag** `string`

Match by lowercase HTML tag name (`"img"`, `"p"`, …).

**text** `string`

Match by the element's direct text content (case-sensitive substring match — implemented with `String.includes`).

**name** `string`

Match by `data-name` attribute value.

**track** `number`

Match by zero-based track index (`data-track-index`).

**composition** `string`

Restrict results to elements inside a specific sub-composition, identified by the host element's hf-id.

All fields are optional; non-null fields are ANDed.

```typescript theme={null}
// Find all text elements on track 2:
const ids = comp.find({ tag: "p", track: 2 });

// Find inside a sub-composition:
const subIds = comp.find({ composition: "hf-scene-2", tag: "img" });
```

***

## GsapTweenSpec

Describes a single GSAP tween entry to create or update.

```typescript theme={null}
interface GsapTweenSpec {
  method: "from" | "to" | "fromTo" | "set";
  position?: number | string;
  duration?: number;
  ease?: string;
  fromProperties?: Record<string, unknown>;
  toProperties?: Record<string, unknown>;
  properties?: Record<string, unknown>;
  repeat?: number;
  yoyo?: boolean;
  stagger?: number | Record<string, unknown>;
}
```

**method** `"from" | "to" | "fromTo" | "set"`

GSAP tween method. `"from"` animates from the given values to the computed values; `"to"` animates toward the given values; `"fromTo"` animates from `fromProperties` to `toProperties`; `"set"` snaps without interpolation.

**position** `number | string`

Timeline insertion position. A number is seconds from the timeline start. A string is a label-relative offset such as `"intro"` or `"outro-=0.5"`. Omit to append.

**duration** `number`

Tween duration in seconds.

**ease** `string`

GSAP ease string, e.g. `"power3.out"`, `"elastic.out(1, 0.3)"`, `"none"`.

**fromProperties** `Record\<string, unknown\>`

Start-state property map for `"fromTo"` tweens.

**toProperties** `Record\<string, unknown\>`

End-state property map — used by `"fromTo"` method.

**properties** `Record\<string, unknown\>`

Starting values for `"from"`, target values for `"to"`, or immediate values for `"set"`.
Also supplies the destination of `"fromTo"` when `toProperties` is omitted.

**repeat** `number`

How many times to repeat. `-1` = infinite.

**yoyo** `boolean`

Reverse direction on alternating repeats.

**stagger** `number | Record\<string, unknown\>`

GSAP stagger config for multi-target tweens.

***

## KeyframeSpec

A single keyframe entry for `addWithKeyframes` and `replaceWithKeyframes`. This is a structural shape, not a runtime export — you pass plain objects of this form to those methods; it is **not** re-exported from the `@hyperframes/sdk` barrel, so there is nothing to import.

```typescript theme={null}
interface KeyframeSpec {
  percentage: number;
  properties: Record<string, number | string>;
  ease?: string;
  auto?: boolean;
}
```

**percentage** `number`

Keyframe stop position within the tween, from 0 to 100.

**properties** `Record\<string, number | string\>`

CSS and GSAP property values at this keyframe stop.

**ease** `string`

Ease applied from this stop to the next.

**auto** `boolean`

GSAP endpoint flag. When `true`, emitted as numeric `_auto: 1` in the generated GSAP script.

***

## ElasticHold

Controls the elastic hold (freeze or loop) window for an element.

```typescript theme={null}
interface ElasticHold {
  start: number;
  end: number;
  fill: "freeze" | "loop";
}
```

**start** `number`

Start of the hold window in seconds.

**end** `number`

End of the hold window in seconds.

**fill** `"freeze" | "loop"`

`"freeze"` holds the last frame statically; `"loop"` cycles the animation within the window.

***

## CompositionVariable

The full schema for one declared variable — used by `comp.declareVariable()`, returned from `comp.listVariables()`. A closed union discriminated on `type`; every variant shares the same base fields plus its own type-specific ones.

```typescript theme={null}
interface CompositionVariableBase {
  id: string;
  type: "string" | "number" | "color" | "boolean" | "enum" | "font" | "image";
  label: string;
  description?: string;
}

interface StringVariable extends CompositionVariableBase {
  type: "string";
  default: string;
  placeholder?: string;
  maxLength?: number;
}

interface NumberVariable extends CompositionVariableBase {
  type: "number";
  default: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

interface ColorVariable extends CompositionVariableBase {
  type: "color";
  default: string;
  brandRole?: string;
}

interface BooleanVariable extends CompositionVariableBase {
  type: "boolean";
  default: boolean;
}

interface EnumVariable extends CompositionVariableBase {
  type: "enum";
  default: string;
  options: { value: string; label: string }[];
}

interface FontVariable extends CompositionVariableBase {
  type: "font";
  default: string | FontValue;
  source?: string;
  default_name?: string;
  default_source?: string;
}

interface ImageVariable extends CompositionVariableBase {
  type: "image";
  default: string | ImageValue;
  brandRole?: string;
}

type CompositionVariable =
  | StringVariable
  | NumberVariable
  | ColorVariable
  | BooleanVariable
  | EnumVariable
  | FontVariable
  | ImageVariable;
```

**id** `string`

Stable identifier, referenced by `setVariableValue`, `getVariableValue`, `removeVariable`, and `var.{id}` override-set keys.

**type** `string`

Discriminant. Determines which variant's extra fields apply and what shape `default` takes.

**label** `string`

Human-readable name for a variables panel UI.

**default** `string | number | boolean | FontValue | ImageValue`

The variable's default value. `font` accepts a font-family string or `FontValue`; `image` accepts a URL string or `ImageValue`. `setVariableValue` persists the whole value here, including font source and image metadata. Declaration reads, validation, and save/reopen preserve these objects.

**brandRole** `string (color, image)`

Optional semantic label for brand-system tooling, e.g. `"color:primary"` or `"logo:primary"`.

**options** `\{ value: string; label: string \}[] (enum only)`

The selectable choices for an `enum` variable.

**source** `string (font only)`

Font stylesheet URL (e.g. a Google Fonts CSS link) paired with the `default` font-family name.

***

## FontValue

Object value for a `font` composition variable. Always an object — never a raw CSS string.

```typescript theme={null}
interface FontValue {
  name: string;
  source: string;
}
```

**name** `string`

CSS `font-family` value, e.g. `"Inter"` or `"'Playfair Display'"`.

**source** `string`

Stylesheet URL to load for this font, e.g. a Google Fonts CSS URL.

***

## ImageValue

Object value for an `image` composition variable. Always an object — never a raw URL string.

```typescript theme={null}
interface ImageValue {
  url: string;
  alt?: string;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}
```

**url** `string`

Image source URL.

**alt** `string`

Alternative text for accessibility.

**fit** `"cover" | "contain" | "fill" | "none" | "scale-down"`

Object-fit behavior for the image within its container. Maps to the CSS `object-fit` property.

***

## JsonPatchOp

An emit-only subset of [RFC 6902](https://datatracker.ietf.org/doc/html/rfc6902) JSON Patch. The SDK never emits `move`, `copy`, or `test` ops, and `applyPatches()` ignores operations outside this subset.

```typescript theme={null}
interface JsonPatchOp {
  op: "add" | "remove" | "replace";
  path: string;
  value?: unknown;
}
```

**op** `"add" | "remove" | "replace"`

The patch operation type.

**path** `string`

RFC 6902 JSON Pointer path to the document location being changed.

**value** `unknown`

New value for `"add"` and `"replace"` ops. Omitted for `"remove"`.

> [!WARNING]
>
> Hosts feeding patches back into `applyPatches()` must restrict themselves to `add`, `remove`, and `replace`. Other RFC 6902 op types are silently ignored.

***

## PatchEvent

Emitted by `comp.on('patch', handler)` after every committed change (single `dispatch()` or completed `batch()`).

```typescript theme={null}
interface PatchEvent {
  readonly formatVersion: 1;
  readonly patches: readonly JsonPatchOp[];
  readonly inversePatches: readonly JsonPatchOp[];
  readonly origin: unknown;
  readonly opTypes: readonly string[];
}
```

**formatVersion** `1`

Always `1`. A bump in `formatVersion` is a breaking change. Hosts should check this value once on startup and reject unknown versions.

**patches** `readonly JsonPatchOp[]`

Forward patches that transform the previous document state into the new state.

**inversePatches** `readonly JsonPatchOp[]`

Inverse patches that undo this change — apply to the new state to return to the previous state. Store these for host-side undo stacks.

**origin** `unknown`

Re-emitted verbatim from the mutation entry. Identify automated patches by checking `origin === ORIGIN_APPLY_PATCHES`.

**opTypes** `readonly string[]`

Semantic op names from the `EditOp.type` field (e.g. `["setStyle", "setText"]`). Intended for analytics and history labels. **Not versioned** — do not use in branching logic.

**Loop prevention.** When a host mirrors patch events into the SDK via `applyPatches()`, it must skip events that originated from that call to avoid infinite loops:

```typescript theme={null}
comp.on("patch", ({ patches, inversePatches, origin }) => {
  if (origin === ORIGIN_APPLY_PATCHES) return;
  saveToHostHistory({ patches, inversePatches });
});
```

***

## CanResult

Returned by `comp.can(op)`. See [`Edit Operations`](https://hyperframes.heygen.com/sdk/reference/edit-operations) for the full usage pattern.

```typescript theme={null}
type CanResult =
  | { ok: true }
  | { ok: false; code: string; message: string; hint?: string };
```

**ok** `boolean`

`true` when `dispatch(op)` would succeed. `false` when it would be a no-op or error.

**code** `string`

Stable error code for `ok: false` — safe to use in `switch` statements. See the code table in [Edit Operations](https://hyperframes.heygen.com/sdk/reference/edit-operations.md#dispatch-batch-and-can).

**message** `string`

Human-readable explanation of why the op cannot proceed.

**hint** `string`

Optional actionable suggestion to resolve the issue.

***

## ElementTimingSnapshot

Resolved timing for one element, returned as values in the `Record<HfId, ElementTimingSnapshot>` from `comp.getElementTimings()`.

```typescript theme={null}
interface ElementTimingSnapshot {
  enterAt: number;
  exitAt: number;
  labels: string[];
}
```

**enterAt** `number`

Time in seconds when the element enters. Derived from `data-duration` (preferred) or `data-end − data-start` as fallback, using the same logic as `setTiming`.

**exitAt** `number`

Time in seconds when the element exits.

**labels** `string[]`

GSAP `addLabel` names whose numeric position falls within `[enterAt, exitAt]` for this element. Parsed fresh from the GSAP script on every `getElementTimings()` call — never cached.

***

## SelectionProxy

Proxy returned by `comp.selection()`. Resolves the current selection at call time and applies ops per-id within a single batch. Selection changes between calls are picked up automatically since `ids` is resolved fresh each time you call `comp.selection()`.

```typescript theme={null}
interface SelectionProxy {
  readonly ids: readonly string[];
  setStyle(styles: Record<string, string | null>): void;
  setText(value: string): void;
  setAttribute(name: string, value: string | null): void;
  setTiming(timing: { start?: number; duration?: number; trackIndex?: number }): void;
  removeElement(): void;
}
```

**ids** `readonly string[]`

The hf-ids in the current selection at the moment `comp.selection()` was called.

```typescript theme={null}
const sel = comp.selection();
if (sel.ids.length > 0) {
  sel.setStyle({ opacity: "0.5" });
}
```

***

## ElementHandle

A curried element handle returned by `comp.element(id)`. Holds only the id string — no stale-reference hazard — and provides the same mutation methods as typed methods on `Composition`.

```typescript theme={null}
interface ElementHandle {
  readonly id: string;
  setStyle(styles: Record<string, string | null>): void;
  setText(value: string): void;
  setAttribute(name: string, value: string | null): void;
  setTiming(timing: { start?: number; duration?: number; trackIndex?: number }): void;
  removeElement(): void;
}
```

```typescript theme={null}
const title = comp.element("hf-title");
title.setText("Launch Day");
title.setStyle({ color: "#FFD60A", fontSize: "96px" });
title.setTiming({ start: 0.5, duration: 3 });
```

***

## CompositionVariableType

```typescript theme={null}
type CompositionVariableType =
  | "string" | "number" | "color" | "boolean" | "enum" | "font" | "image";
```

The declared type of a composition variable. Re-exported from
`@hyperframes/parsers`; `VARIABLE_TYPES` is the matching runtime list, useful
for validators that need the set rather than the union.

## VariableUsageScan

```typescript theme={null}
interface VariableUsageScan {
  usedIds: string[];
  scanIncomplete: boolean;
}
```

The result of statically scanning a composition's script for variable reads.
`usedIds` is in first-seen order. `scanIncomplete` is `true` when the script
reaches variables in a way the scan cannot resolve — computed keys, rest
spreads, the values object escaping into a call — or when it fails to parse;
`usedIds` is then a lower bound, not a complete list, so treat an unlisted id as
unknown rather than unused.

## ORIGIN\_APPLY\_PATCHES / ORIGIN\_LOCAL

```typescript theme={null}
const ORIGIN_APPLY_PATCHES = "@hyperframes/sdk:applyPatches";
const ORIGIN_LOCAL = "local";
```

Reserved `origin` tag constants:

* **`ORIGIN_APPLY_PATCHES`** — automatically set by `comp.applyPatches()`. Listeners **must** skip this origin to prevent undo loops when mirroring patch events back into the SDK. Uses a namespaced string (not a unique Symbol) so the sentinel survives realm boundaries such as `postMessage` and structured clone, which T3 embedded hosts may use to forward patch events.
* **`ORIGIN_LOCAL`** — default origin used when `dispatch()` or `batch()` is called without an explicit `origin` option. Signals UI-driven user edits.

```typescript theme={null}
comp.on("patch", ({ origin }) => {
  if (origin === ORIGIN_APPLY_PATCHES) return; // skip — would loop
  if (origin === ORIGIN_LOCAL) {
    // user-driven edit — sync to collaboration layer
  }
});
```

***

## EditOp

The full union of all dispatchable edit operations. See [Edit Operations](https://hyperframes.heygen.com/sdk/reference/edit-operations.md) for the complete catalog with field descriptions and code examples.

```typescript theme={null}
type EditOp =
  | { type: "setStyle"; target: HfId | HfId[]; styles: Record<string, string | null> }
  | { type: "setText"; target: HfId | HfId[]; value: string }
  | { type: "setAttribute"; target: HfId | HfId[]; name: string; value: string | null }
  | { type: "setTiming"; target: HfId | HfId[]; start?: number; duration?: number; trackIndex?: number }
  | { type: "setHold"; target: HfId | HfId[]; hold: ElasticHold }
  | { type: "moveElement"; target: HfId | HfId[]; x: number; y: number }
  | { type: "removeElement"; target: HfId | HfId[] }
  | { type: "addElement"; parent: HfId | null; index: number; html: string }
  | { type: "reorderElements"; entries: Array<{ target: HfId; zIndex: number }> }
  | { type: "setClassStyle"; selector: string; styles: Record<string, string | null> }
  | { type: "setCompositionMetadata"; width?: number; height?: number; duration?: number }
  | { type: "setVariableValue"; id: string; value: string | number | boolean | FontValue | ImageValue }
  | { type: "declareVariable"; declaration: CompositionVariable }
  | { type: "removeVariable"; id: string }
  | { type: "addGsapTween"; target: HfId; tween: GsapTweenSpec }
  | { type: "setGsapTween"; animationId: string; properties: Partial<GsapTweenSpec> }
  | { type: "removeGsapTween"; animationId: string }
  | { type: "removeGsapProperty"; animationId: string; property: string; from?: boolean }
  | { type: "setGsapKeyframe"; animationId: string; keyframeIndex: number; position?: number; value?: Record<string, unknown>; ease?: string }
  | { type: "addGsapKeyframe"; animationId: string; position: number; value: Record<string, unknown> }
  | { type: "removeGsapKeyframe"; animationId: string; percentage: number }
  | { type: "removeAllKeyframes"; animationId: string }
  | { type: "convertToKeyframes"; animationId: string; resolvedFromValues?: Record<string, number | string> }
  | { type: "materializeKeyframes"; animationId: string; keyframes: Array<{ percentage: number; properties: Record<string, number | string>; ease?: string }>; easeEach?: string; resolvedSelector?: string }
  | { type: "splitIntoPropertyGroups"; animationId: string }
  | { type: "splitAnimations"; originalId: string; newId: string; splitTime: number; elementStart: number; elementDuration: number }
  | { type: "addLabel"; name: string; position: number }
  | { type: "removeLabel"; name: string }
  | { type: "setArcPath"; animationId: string; config: { enabled: boolean; autoRotate: boolean | number; segments: Array<{ curviness?: number; cp1?: { x: number; y: number }; cp2?: { x: number; y: number } }> } }
  | { type: "updateArcSegment"; animationId: string; segmentIndex: number; update: { curviness?: number; cp1?: { x: number; y: number }; cp2?: { x: number; y: number } } }
  | { type: "removeArcPath"; animationId: string }
  | { type: "unrollDynamicAnimations"; animationId: string; elements: Array<{ selector: string; keyframes: Array<{ percentage: number; properties: Record<string, number | string> }>; easeEach?: string }> }
  | { type: "addWithKeyframes"; targetSelector: string; position: number; duration: number; keyframes: KeyframeSpec[]; ease?: string }
  | { type: "replaceWithKeyframes"; animationId: string; targetSelector: string; position: number; duration: number; keyframes: KeyframeSpec[]; ease?: string }
  | { type: "deleteAllForSelector"; selector: string };
```

***

## PersistErrorEvent

Emitted by `comp.on('persist:error', handler)` when an autosave write fails. Failures are non-fatal — the session continues operating normally.

```typescript theme={null}
interface PersistErrorEvent {
  error: { message: string; hint?: string; cause?: unknown };
}
```

**error.message** `string`

Human-readable description of the persist failure.

**error.hint** `string`

Optional suggestion for resolving the failure.

**error.cause** `unknown`

Underlying error object, if available.


## Related topics

- [Background Emphasis Type](https://hyperframes.heygen.com/catalog/components/mk-emphasis-type.md)
- [Variable Axis Type](https://hyperframes.heygen.com/catalog/components/variable-axis-type.md)
- [Type Match Cut](https://hyperframes.heygen.com/catalog/components/type-match-cut.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.