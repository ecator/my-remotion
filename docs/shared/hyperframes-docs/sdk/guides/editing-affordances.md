> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Editing Affordances

> Resolve capability flags and inspector sections for a selected element so your editor panel is element-aware.

`resolveElementAffordances` answers the question "what can the user do with this element right now?" given a live DOM element and its SDK model entry. It returns two objects: `capabilities` (boolean flags for each edit action) and `sections` (which inspector panels apply). You use these to conditionally render controls in your editor's detail panel rather than showing a fixed field set for all elements.

> [!NOTE]
>
> This API lives on the `@hyperframes/sdk/editing` subpath, available since `@hyperframes/sdk@0.7.22`. If the import fails to resolve, upgrade: `npm install @hyperframes/sdk@latest`.

## Import

```typescript theme={null}
import { resolveElementAffordances } from "@hyperframes/sdk/editing";
```

## Signature

```typescript theme={null}
function resolveElementAffordances(
  liveEl: HTMLElement,
  modelEl: Pick<HyperFramesElement, "text" | "animationIds" | "start"> | null,
  ctx?: AffordanceContext,
): EditingAffordances
```

* `liveEl` — a live, laid-out `HTMLElement` from the composition iframe. The resolver calls `getComputedStyle` on it, so it must be attached to a rendered document.
* `modelEl` — the SDK model element (`comp.getElement(id)`), or `null` when the element exists in the live DOM but not in the SDK source model (generated elements). Passing `null` restricts affordances: style editing is disabled and `reasonIfDisabled` is set.
* `ctx` — optional context for studio-specific concepts. For most custom editors, omit it or leave all flags at their defaults (`false`).

### `AffordanceContext`

```typescript theme={null}
interface AffordanceContext {
  isCompositionHost?: boolean;      // default false
  isCompositionRoot?: boolean;      // default false
  isInsideLockedComposition?: boolean; // default false
  isMasterView?: boolean;           // default false
}
```

These flags are studio-specific. In a standalone custom editor you can omit `ctx` entirely.

## Return value

```typescript theme={null}
interface EditingAffordances {
  capabilities: DomEditCapabilities;
  sections: EditingSectionApplicability;
}
```

### `capabilities`

```typescript theme={null}
interface DomEditCapabilities {
  canSelect: boolean;
  canEditStyles: boolean;
  /** Apply a non-destructive clip-path crop. */
  canCrop: boolean;
  /** Directly editable authored left/top style fields. */
  canMove: boolean;
  /** Directly editable authored width/height style fields. */
  canResize: boolean;
  /** Canvas translate-drag maps here, not to canMove. */
  canApplyManualOffset: boolean;
  canApplyManualSize: boolean;
  canApplyManualRotation: boolean;
  /** Set when canEditStyles / canMove / canResize is false; explains why. */
  reasonIfDisabled?: string;
}
```

> [!WARNING]
>
> `canMove` and `canResize` indicate that the element has authored `left`/`top`/`width`/`height` style values that can be directly edited as fields. A canvas drag operation maps to `canApplyManualOffset`, not `canMove`. Do not gate drag handles on `canMove`.

### `sections`

```typescript theme={null}
interface EditingSectionApplicability {
  text: boolean;         // true when the element has editable text content
  media: boolean;        // true for <video> and <audio>
  colorGrading: boolean; // true for <video> and <img> — element-level only
  timing: boolean;       // true when data-start is present or animationCount > 0
  animation: boolean;    // true when animationCount > 0
  layout: boolean;       // position, size, rotation, and stacking controls apply
  style: boolean;        // fill, radius, stroke, shadow, blend, and clip controls apply
}
```

`sections.colorGrading` is element-level only: it tells you this particular element supports color grading controls. Studio shows the color grading panel for supported media elements.

## End-to-end example

```typescript theme={null}
import { openComposition, createIframePreviewAdapter } from "@hyperframes/sdk";
import { resolveElementAffordances } from "@hyperframes/sdk/editing";

const iframe = document.querySelector<HTMLIFrameElement>("#composition-frame")!;
const preview = createIframePreviewAdapter(iframe, (op) => comp.dispatch(op));
const comp = await openComposition(compositionHtml, { preview });

function onElementSelected(hfId: string) {
  // 1. Get the live DOM element from the iframe.
  const liveEl = iframe.contentDocument?.querySelector<HTMLElement>(
    `[data-hf-id="${hfId}"]`,
  );
  if (!liveEl) return;

  // 2. Get the SDK model element — null for script-generated elements.
  const modelEl = comp.getElement(hfId);

  // 3. Resolve affordances.
  const { capabilities, sections } = resolveElementAffordances(liveEl, modelEl);

  // 4. Render controls conditionally.
  renderInspector({ capabilities, sections, hfId });
}

function renderInspector({
  capabilities,
  sections,
  hfId,
}: {
  capabilities: ReturnType<typeof resolveElementAffordances>["capabilities"];
  sections: ReturnType<typeof resolveElementAffordances>["sections"];
  hfId: string;
}) {
  // Show a disabled-state tooltip when editing is locked.
  if (!capabilities.canEditStyles && capabilities.reasonIfDisabled) {
    showDisabledBanner(capabilities.reasonIfDisabled);
    return;
  }

  // Style panel — always show when editing is allowed.
  if (capabilities.canEditStyles) {
    showStylePanel(hfId);
  }

  // Position/size fields — only for absolutely positioned elements with px values.
  if (capabilities.canMove) {
    showPositionFields(hfId);
  }
  if (capabilities.canResize) {
    showSizeFields(hfId);
  }

  // Canvas drag handles — use canApplyManualOffset, NOT canMove.
  if (capabilities.canApplyManualOffset) {
    showDragHandles(hfId);
  }

  // Section panels.
  if (sections.text) showTextPanel(hfId);
  if (sections.media) showMediaPanel(hfId);
  if (sections.colorGrading && myFeatureFlags.colorGrading) showColorGradingPanel(hfId);
  if (sections.timing) showTimingPanel(hfId);
  if (sections.animation) showAnimationPanel(hfId);
}
```

## Gotchas

**Browser-only.** `resolveElementAffordances` calls `getComputedStyle` internally. It must not be imported or called in Node, a server action, or any non-browser path. The SDK adapter (`@hyperframes/sdk/editing`) is separate from the pure core resolver precisely to keep the Node SDK path free of browser globals.

**Needs a laid-out DOM.** `canMove` and `canResize` require a live computed `position`, `left`, and `top`. If you call `resolveElementAffordances` before the iframe finishes layout (e.g. synchronously after `srcdoc` assignment), both flags will be `false`. Wait for the iframe's `load` event or the composition's first rendered frame before resolving affordances.

**`null` model means select-only.** When `modelEl` is `null` (the element is generated at runtime and has no source entry), the resolver sets `existsInSource: false`. This gives `canSelect: true` but `canEditStyles: false`, `canMove: false`, and all manual-geometry flags `false`, with `reasonIfDisabled` set to a human-readable explanation. You can still show the selection highlight; just hide or disable all edit controls.

**`canApplyManualOffset` vs `canMove`.** `canMove` is true only when the element has absolute/fixed positioning AND authored `left`/`top` px values AND no transform-driven geometry. `canApplyManualOffset` is true for all non-root non-host elements regardless of positioning. A translate-based canvas drag (the `applyDraft` / `commitPreview` flow in [Canvas Integration](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)) uses `canApplyManualOffset` as its gate — it does not require `canMove`.

**`colorGrading` is element-level, not feature-level.** `sections.colorGrading` tells you the element type supports grading (`<video>` or `<img>`). Your own feature flag is a separate AND condition. Never replace your feature flag with this field.

## Type reference

The full type definitions — `EditingAffordances`, `DomEditCapabilities`, `EditingSectionApplicability`, `AffordanceContext`, `HyperFramesElement` — are documented at [`/sdk/reference/types`](https://hyperframes.heygen.com/sdk/reference/types).

The pure DOM-free resolver (`resolveEditingAffordances`, `EditableElementFacts`) lives in `@hyperframes/core` and is documented at [`/packages/core`](https://hyperframes.heygen.com/packages/core).

> [card] [Canvas Integration](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)
>
> Get the live element and selection via hit-testing and the iframe adapter.

> [card] [Types reference](https://hyperframes.heygen.com/sdk/reference/types.md)
>
> Complete type definitions for the SDK public surface.


## Related topics

- [Utilities & Constants](https://hyperframes.heygen.com/sdk/reference/utilities.md)
- [Canvas & Preview Integration](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)
- [Changelog](https://hyperframes.heygen.com/changelog.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.