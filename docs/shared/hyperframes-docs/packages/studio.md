> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# @hyperframes/studio

> For developers: the React components and hooks behind the HyperFrames browser editor. Looking for the Studio app? See Get the Studio app.

> [!NOTE]
>
> Looking for the **HyperFrames Studio app**, the one you download to make videos? It's here:
> [Get the Studio app](https://hyperframes.heygen.com/studio-app.md). This page is for developers building on the editor's code.

`@hyperframes/studio` contains the React application, editor components, player, timeline, and hooks behind the
HyperFrames browser editor.

To open a project in the browser editor, you don't need this package:

```bash theme={null}
npx hyperframes preview
```

Install the package only when you are extending Studio or building an editor that
uses its lower-level parts:

```bash theme={null}
npm install @hyperframes/studio react react-dom zustand
```

> [!WARNING]
>
> The exported components are building blocks, not a drop-in embedded editor. Components such as
> `EditorShell`, `NLEPreview`, `Timeline`, `PropertyPanel`, and `FileTree` require project state,
> callbacks, or Studio contexts. Use `StudioApp` when you need the whole editor, or inspect
> the component types before composing a custom host.

When you run Studio from the monorepo, its dev server listens on `http://localhost:5190`.

## Entry points

| Import | Contains |
| - | - |
| `@hyperframes/studio` | React components, hooks, utilities, and their public types |
| `@hyperframes/studio/ui` | UI primitives (buttons, menus, popovers, fields) without the editor |
| `@hyperframes/studio/player` | The `Player` component alone, without the timeline |
| `@hyperframes/studio/tailwind-preset` | Tailwind preset used by Studio |

Peer dependencies are React 19, React DOM 19, and Zustand 4 or 5.

## Main exports

### Complete application

| Export | Use |
| - | - |
| `StudioApp` | The complete Studio application |

### Editor structure

| Export | Use |
| - | - |
| `EditorShell` | Preview, side panels, and timeline shell |
| `NLEPreview` | Composition preview surface |
| `CompositionBreadcrumb` | Navigation through nested compositions |
| `SourceEditor` | Source editor |
| `PropertyPanel` | Inspector for the selected element |
| `FileTree` | Project file browser |

### Playback and timeline

| Export | Use |
| - | - |
| `Player` | Composition iframe and playback bridge |
| `PlayerControls` | Playback, seeking, and frame controls |
| `Timeline` | Timeline editing surface |
| `VideoThumbnail` | Video clip thumbnail |
| `CompositionThumbnail` | Nested-composition thumbnail |

### Hooks and utilities

| Export | Use |
| - | - |
| `useTimelinePlayer` | Read and control the shared player state |
| `usePlayerStore` | Access the Zustand player store |
| `useCompositionStack` | Drill into and back out of nested compositions |
| `useElementPicker` | Select and edit an element through the preview iframe |
| `resolveSourceFile`, `applyPatch` | Locate and patch source |
| `parseStyleString`, `mergeStyleIntoTag`, `findElementBlock` | Work with inline source styles and elements |

The package also exports `CompositionLevel`, `TimelineElement`, `PickedElement`,
and `PatchOperation`.

`useElementPicker` remembers the current selection while inspection is active.
Press Escape in either Studio or the preview to cancel and restore that selection. The
hovered target is identified beside the preview as `tag#id`, `tag.class`, or the
tag name alone.

## How Studio stays connected to a project

1. Studio loads the composition in an iframe with the HyperFrames runtime.
2. Player controls communicate with that runtime to play, pause, and seek.
3. The editor and timeline send changes through the Studio API.
4. The Studio server writes those changes back to the project files.
5. External file changes refresh the preview while keeping the current position
   when possible.

Preview and render use the same seekable composition contract. Preview still
depends on the browser playing in real time, while render captures frames one at a
time. A heavy project can therefore stutter during preview and still render every
frame.

Paused video scrubbing decodes and stages the visible video layers before
advancing the composition's animations. Completed frames appear during a drag,
with newer pointer positions coalesced into the next decode. Canvas and GPU
effects consume the same staged pixels. Continuous playback uses native video;
Studio keeps the paused picture visible while those videos catch up before Play.
A native handoff waits for ready frames for up to ten seconds; Pause or a new
seek cancels it. At the deadline, the rest plays while each unready video keeps
its last full-quality picture. During playback, native frame presentation or
playback progress releases that picture; normal transport sync corrects drift.
Paused recovery still waits for its requested frame. A skipped source keeps its
picture on subsequent Play requests until it recovers.
A paused fallback that outlasts its wait retains the presented clock and picture,
while paused sync continues. It can still publish when the video becomes ready;
a new gesture cancels that recovery. Studio requests paused-decoder release
before preparing native playback and reopens readers when paused scrubbing resumes.
Paused-reader release waits up to two seconds for transparent video queries to
drain. After that it cancels their downloads and lets playback continue while
unfinished merges close in the background; input disposal still waits for the
merge to finish. A recovering video more than half a second out of sync with the transport
gets at most one corrective seek per recovery registration before its retained picture is removed.
Scrubbing and paused frame steps decode the original video at source resolution
throughout. Automatic playback quality reductions do not reduce these frames,
and the frame decoder does not substitute re-encoded seek copies. Playback
quality settings do not reduce these paused frames. Browsers or
media that cannot use the frame decoder fall back to native seeking. Long-GOP
sources can take longer to seek, especially backward or across distant cuts.

## Tailwind preset

```typescript theme={null}
import studioPreset from "@hyperframes/studio/tailwind-preset";

export default {
  presets: [studioPreset],
};
```

## Preview guides in your own app

Host apps can compose the same rulers, safe margins, grid, and snap toolbar that
Studio uses over their own preview iframe. The provider owns the iframe geometry
and shared preferences, so the host supplies its current iframe element and chooses the
parts to render:

```tsx theme={null}
import {
  GridOverlay,
  PreviewGuides,
  PreviewOverlayProvider,
  SnapToolbar,
} from "@hyperframes/studio";
function Preview({ iframe }: { iframe: HTMLIFrameElement | null }) {
  return (
    <PreviewOverlayProvider iframe={iframe}>
      <PreviewGuides />
      <GridOverlay />
      <SnapToolbar />
    </PreviewOverlayProvider>
  );
}
```

## Related topics

> [card] [Use Studio](https://hyperframes.heygen.com/studio.md)
>
> Learn the complete editing workflow.

> [card] [Studio server](https://hyperframes.heygen.com/packages/studio-server.md)
>
> Connect project files, media, linting, and render jobs.

> [card] [Player](https://hyperframes.heygen.com/packages/player.md)
>
> Embed playback without the editing interface.

> [card] [SDK](https://hyperframes.heygen.com/sdk/quickstart.md)
>
> Query and edit compositions without Studio.


## Related topics

- [@hyperframes/studio-server](https://hyperframes.heygen.com/packages/studio-server.md)
- [@hyperframes/player](https://hyperframes.heygen.com/packages/player.md)
- [@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.