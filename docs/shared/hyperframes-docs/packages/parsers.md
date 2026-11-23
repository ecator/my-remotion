> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# @hyperframes/parsers

> The GSAP + HTML parser/writer suite — standalone, zero @hyperframes/* dependencies.

The parsers package owns the GSAP animation parser/writer, HTML composition
parser, hf-id stamping, and spring-ease generation. It has no
`@hyperframes/*` runtime dependencies, so it can be used without the rest of
the framework.

```bash theme={null}
npm install @hyperframes/parsers
```

## When to Use

> [!TIP]
>
> **Most users do not need to install `@hyperframes/parsers` directly.** [`@hyperframes/core`](https://hyperframes.heygen.com/packages/core) re-exports the parser API it needs, and the [CLI](https://hyperframes.heygen.com/packages/cli.md) / [studio](https://hyperframes.heygen.com/packages/studio.md) depend on it transitively. Reach for it directly only when you want the parsing layer **without** pulling in the rest of core.

**Use `@hyperframes/parsers` when you need to:**

* Parse HTML compositions into structured TypeScript objects
* Parse, edit, and re-serialize GSAP timeline scripts (AST round-trip)
* Stamp deterministic `hf-id` attributes onto a document
* Build tooling that touches the parsing layer but doesn't need core's runtime, compiler, or generators

## Package Exports

| Import | Description |
| - | - |
| `@hyperframes/parsers` | HTML parser, GSAP serialize/validate helpers, hf-ids, shared types |
| `@hyperframes/parsers/gsap-parser` | GSAP parser exports, `parseGsapScript`, `SUPPORTED_PROPS`, `SUPPORTED_EASES` |
| `@hyperframes/parsers/gsap-parser-acorn` | Acorn-based GSAP parser (browser-safe, read path) |
| `@hyperframes/parsers/gsap-writer-acorn` | Acorn-based GSAP writer (mutation helpers) |
| `@hyperframes/parsers/gsap-parser-recast` | Recast-based GSAP parser/writer (legacy implementation) |
| `@hyperframes/parsers/gsap-constants` | `SUPPORTED_PROPS`, `SUPPORTED_EASES`, property groups |
| `@hyperframes/parsers/spring-ease` | Spring-ease curve generation |
| `@hyperframes/parsers/hf-ids` | Deterministic element id stamping |
| `@hyperframes/parsers/slideshow` | Slideshow manifest parser (`parseSlideshowManifest`, `resolveSlideshow`) |
| `@hyperframes/parsers/composition` | Pure, browser-safe composition primitives (data types, font aliases, URL helper) |
| `@hyperframes/parsers/asset-paths` | Node-only asset-path rewriting helpers (`rewriteAssetPath`, …) |
| `@hyperframes/parsers/sub-composition-validity` | Sub-composition validation utilities |

> [!NOTE]
>
> The package ships focused subpath entries. Import
> `@hyperframes/parsers/hf-ids` when you do not need the GSAP AST machinery.

## HTML Parsing

Round-trip between HTML and structured data:

```typescript theme={null}
import {
  parseHtml,
  extractCompositionMetadata,
  validateCompositionHtml,
} from '@hyperframes/parsers';
import type { ParsedHtml, CompositionMetadata } from '@hyperframes/parsers';

// Parse HTML into structured data
const parsed: ParsedHtml = parseHtml(htmlString);
// parsed.elements, parsed.gsapScript, parsed.styles, parsed.resolution, parsed.keyframes

// Extract composition metadata (id, duration, dimensions, variables)
const meta: CompositionMetadata = extractCompositionMetadata(htmlString);

// Validate HTML structure
const result = validateCompositionHtml(htmlString);
// result.valid, result.errors
```

### Modifying HTML

```typescript theme={null}
import {
  updateElementInHtml,
  addElementToHtml,
  removeElementFromHtml,
} from '@hyperframes/parsers';

const updated = updateElementInHtml(html, 'el-1', { start: 5 });
const added = addElementToHtml(html, newElement);
const cleaned = removeElementFromHtml(html, 'el-1');
```

## GSAP Script Parsing

The acorn parser/writer is the primary path (browser-safe). Parse a timeline script, mutate it, and serialize it back without losing surrounding code:

```typescript theme={null}
import { parseGsapScriptAcorn, extractGsapLabels } from '@hyperframes/parsers/gsap-parser-acorn';
import {
  updateAnimationInScript,
  addAnimationToScript,
  removeAnimationFromScript,
  updateKeyframeInScript,
  addKeyframeToScript,
  shiftPositionsInScript,
  scalePositionsInScript,
} from '@hyperframes/parsers/gsap-writer-acorn';
import type { GsapAnimation, GsapMethod, ParsedGsap } from '@hyperframes/parsers';

const parsed: ParsedGsap = parseGsapScriptAcorn(scriptContent);
// parsed.animations, parsed.timelineVar, parsed.preamble, parsed.postamble

// Mutation helpers operate on the script text and preserve unrelated code
const next = updateAnimationInScript(scriptContent, animationId, { duration: 2 });
```

Simple-array keyframes distribute each property's values across the full tween,
even when the arrays have different lengths. For example,
`keyframes: { x: [0, 100, 200], opacity: [0, 1] }` places `x: 100` at 50%
and `opacity: 1` at 100%. Unrolling a helper into editable tweens keeps those
positions.

High-level serialize / validate / keyframe-conversion helpers are on the main entry:

```typescript theme={null}
import {
  serializeGsapAnimations,
  getAnimationsForElementId,
  validateCompositionGsap,
  keyframesToGsapAnimations,
  gsapAnimationsToKeyframes,
} from '@hyperframes/parsers';
```

### GSAP Constants

```typescript theme={null}
import {
  SUPPORTED_PROPS,    // animatable properties
  SUPPORTED_EASES,    // available easing functions
  PROPERTY_GROUPS,
} from '@hyperframes/parsers/gsap-constants';
import type { PropertyGroupName } from '@hyperframes/parsers/gsap-constants';
```

## hf-ids

Deterministic element identity for stable diffing and editing:

```typescript theme={null}
import { ensureHfIds, mintHfId } from '@hyperframes/parsers/hf-ids';

// Stamp hf-id attributes onto every editable element in a document
const withIds = ensureHfIds(htmlString);
```

## Spring Ease

```typescript theme={null}
import { generateSpringEaseData, SPRING_PRESETS } from '@hyperframes/parsers/spring-ease';
```

## Related topics

> [card] [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)
>
> Types, generators, runtime, and compiler — re-exports the parser API it needs.

> [card] [@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md)
>
> The composition linter, built on the parsers.

> [card] [@hyperframes/studio-server](https://hyperframes.heygen.com/packages/studio-server.md)
>
> The studio preview server, built on the parsers.

> [card] [CLI](https://hyperframes.heygen.com/packages/cli.md)
>
> Create, preview, lint, and render compositions.


## Related topics

- [@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md)
- [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)
- [Changelog](https://hyperframes.heygen.com/changelog.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.