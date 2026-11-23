> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# @hyperframes/shader-transitions

> WebGL shader transitions for HyperFrames scenes and compositions.

The shader transitions package adds GPU-accelerated scene-to-scene transitions to HyperFrames compositions. It captures scene samples, uploads them as WebGL textures, and drives fragment-shader compositing from a GSAP timeline.

```bash theme={null}
npm install @hyperframes/shader-transitions
```

You can also load the browser global build directly:

```html theme={null}
<script src="https://cdn.jsdelivr.net/npm/@hyperframes/shader-transitions/dist/index.global.js"></script>
```

## When to Use

**Use `@hyperframes/shader-transitions` when you need to:**

* Add shader-based scene transitions such as domain warp, whip pan, glitch, iris, light leak, or thermal distortion
* Attach GPU transitions to an existing GSAP timeline
* Build a transition picker or validation UI around the available shader registry
* Feature-detect native HTML-in-canvas capture support
* Use the producer's deterministic page-side compositor for render-mode captures

**Use a different package if you want to:**

* Render the finished composition to video - use the [CLI](https://hyperframes.heygen.com/packages/cli.md) or [producer](https://hyperframes.heygen.com/packages/producer.md)
* Edit composition structure programmatically - use [sdk](https://hyperframes.heygen.com/packages/sdk.md)
* Build a visual editor surface - use [studio](https://hyperframes.heygen.com/packages/studio.md)

## Package Exports

| Import | Description |
| - | - |
| `init()` | Creates or augments a GSAP timeline with shader transitions |
| `SHADER_NAMES` | Array of supported shader names for validation and UI pickers |
| `isHtmlInCanvasCaptureSupported()` | Feature-detects Chrome's native HTML-in-canvas capture path |
| `installPageSideCompositor()` | Installs the render-mode compositor used by the producer path |
| `isPageSideCompositingSupported()` | Checks whether page-side shader compositing is available |

## Quick Start

```typescript theme={null}
import { init } from "@hyperframes/shader-transitions";

const timeline = init({
  bgColor: "#0a0a0a",
  accentColor: "#ff6b2b",
  scenes: ["scene-1", "scene-2", "scene-3"],
  transitions: [
    { time: 3, shader: "domain-warp", duration: 0.8 },
    { time: 8, shader: "light-leak", duration: 0.7 },
  ],
});

window.__timelines ??= {};
window.__timelines.hero = timeline;
```

Pass an existing GSAP timeline when the composition already owns the animation sequence:

```typescript theme={null}
const timeline = gsap.timeline({ paused: true });
timeline.from("#headline", { opacity: 0, y: 40, duration: 0.6 });

init({
  bgColor: "#000000",
  scenes: ["intro", "demo", "outro"],
  transitions: [
    { time: 5, shader: "cinematic-zoom" },
    { time: 12, shader: "glitch", duration: 0.5 },
  ],
  timeline,
});
```

If WebGL is unavailable, the package falls back to normal timeline playback without shader compositing.

## Available Shaders

| Shader | Description |
| - | - |
| `domain-warp` | Organic noise-based warp with a glowing edge |
| `ridged-burn` | Ridged noise burn with sparks and heat glow |
| `whip-pan` | Horizontal motion blur simulating a fast camera pan |
| `sdf-iris` | Circular iris wipe with a glowing ring edge |
| `ripple-waves` | Concentric ripple distortion radiating from center |
| `gravitational-lens` | Warping gravity well with chromatic aberration |
| `cinematic-zoom` | Radial zoom blur with chromatic fringing |
| `chromatic-split` | RGB channel separation expanding from center |
| `glitch` | Digital glitch with block displacement and scanlines |
| `swirl-vortex` | Spiral rotation with noise-based warping |
| `thermal-distortion` | Heat shimmer rising from the bottom |
| `flash-through-white` | Flash to white, then reveal the next scene |
| `cross-warp-morph` | Noise-driven morph blending both scenes |
| `light-leak` | Warm cinematic light leak with lens flare |

Use `SHADER_NAMES` when you need a typed list:

```typescript theme={null}
import { SHADER_NAMES } from "@hyperframes/shader-transitions";
```

## Configuration

```typescript theme={null}
type TransitionConfig = {
  time: number;
  shader?: string;
  duration?: number;
  ease?: string;
};

type HyperShaderConfig = {
  bgColor: string;
  accentColor?: string;
  scenes: string[];
  transitions: TransitionConfig[];
  timeline?: gsap.core.Timeline;
  compositionId?: string;
  previewCaptureFps?: number;
};
```

`shader` is optional. Omit it to use a CSS fallback transition at that point in the timeline.

## Preview and Render Behavior

Browser previews pre-capture transition samples and cache matching snapshots in IndexedDB. Cache keys include the composition ID, scene DOM/style signatures, timing, capture FPS, scale, and dimensions, so normal page refreshes can reuse samples while runtime edits invalidate only adjacent transition caches.

During producer renders, shader transitions use a deterministic page-side compositor instead of preview-time snapshot caching. That keeps frame capture seek-driven and avoids depending on wall-clock playback.

## Related topics

> [card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md)
>
> Renders compositions that include shader transitions.

> [card] [Transition Catalog](https://hyperframes.heygen.com/catalog/blocks/transitions-distortion.md)
>
> Browse installable transition blocks built on the shader system.


## Related topics

- [Per-pixel effects with data-vfx-chain](https://hyperframes.heygen.com/guides/vfx-chain.md)
- [Colour, effects, 3D and generated art](https://hyperframes.heygen.com/prompting/color-grading.md)
- [Verified example prompts](https://hyperframes.heygen.com/prompting/examples.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.