> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Edit in the browser editor

> The browser editor: open any HyperFrames project with one command and edit what you see, the timing and the motion by hand.

There are two editors. **The [Studio app](https://hyperframes.heygen.com/studio-app/index.md)** is the desktop app with an agent beside the
preview: you say or draw what to change. **The browser editor**, on this page, opens any project folder in your
browser for editing by hand while your own agent works in its terminal. Both edit the same files.

```bash theme={null}
npx hyperframes preview
```

![The HyperFrames browser editor with the Inkwell project open: compositions, preview, Design panel and timeline](https://mintcdn.com/hyperframes/u4Tzq0wRMlm1q5CS/public/images/studio/editor-overview-v2.jpg?fit=max\&auto=format\&n=u4Tzq0wRMlm1q5CS\&q=85\&s=2cf0881c227b1a12bf5a504dc3e547a3)

The browser editor today: files on the left, the preview in the middle, Design on the right, the timeline below. Open in desktop app moves the project to the Studio app.

## Where to start

| You want to change | Start with |
| - | - |
| Something you can see in this frame | Click it in the preview, then **Design** or **Layers** |
| When something appears or how long it stays | The **Timeline** |
| One movement | The animation controls and keyframes |
| The story, several scenes, the structure | Your agent. **Describe a change to the agent** (⌘K) copies a ready request to paste into it |

Panels can be dragged anywhere; **Window** reopens a closed one or resets the layout.

## Edit what you see

Pause where the problem is, click the element (or pick it in **Layers** when things overlap), and change only that.
Drag to move, resize, rotate or crop; use **Design** for text, layout, style, media, motion and color. Then play
through the moment: a frame that looks right can still collide in motion.

> [!WARNING]
>
> **Auto-record manual edits as keyframes** is on by default, so a change you make at the playhead becomes animation.
> Turn it off in the timeline toolbar for a fix that should stay the same all the way through.

More: [Edit the frame](https://hyperframes.heygen.com/studio/canvas.md).

## Change the timing

Drag a clip to move it, drag an edge to make it longer or shorter, and use **Split at playhead** to cut one clip in
two. Scrub across the cut after each change. More: [the timeline](https://hyperframes.heygen.com/studio/timeline.md).

## Scrub the preview

Click or drag the seek bar above the preview's playback controls to move through
the video. It stays available with the timeline hidden and in fullscreen. Use
the arrow keys while the seek bar has focus, or Home and End to jump to the
start and end. Seeking pauses playback, just like moving the timeline playhead.

## Check and export

Run **Lint** (bottom left) and fix what it reports, then the full check before you deliver:

```bash theme={null}
npx hyperframes check
```

Choose **Export** in the header, or render from your agent or the command line, and watch the file once before you
share it.

## Keyboard shortcuts

Shortcuts depend on the active area. The table below covers the shortcuts
implemented by the browser editor's player, canvas, and timeline.

Press `?` (Shift + /) to open the shortcuts panel from the timeline toolbar, and
press it again or Esc to close it. It does nothing while you are typing in a text
field.

### Playback

| Shortcut | Action |
| - | - |
| Space | Play or pause |
| J / K / L | Play backward, stop, or play forward |
| Left / Right arrow | Step one frame, or nudge a selected canvas element horizontally |
| Up / Down arrow | Nudge a selected canvas element vertically |
| Shift + arrow | Step ten frames horizontally, or nudge a selected element farther |
| M | Mute or unmute |
| Shift + L | Toggle loop playback |
| I / O | Set the work-area in or out point |
| Shift + I / Shift + O | Clear the in or out point |
| A / E | Jump to the in or out point |
| F | Toggle fullscreen |

### Editing

| Shortcut | Action |
| - | - |
| V | Selection tool |
| B | Toggle the razor tool |
| S | Split the selected eligible clip at the playhead |
| N | Toggle timeline snapping |
| Command/Ctrl + Z | Undo |
| Command/Ctrl + Shift + Z, or Ctrl + Y | Redo |
| Command/Ctrl + C / V / X | Copy, paste, or cut the selected element |
| Command/Ctrl + G | Group selected elements |
| Command/Ctrl + Shift + G | Ungroup |
| Delete / Backspace | Delete the selected keyframe or element |

The focused area decides what a shared shortcut does. Arrow keys nudge a selected
canvas element, step through frames when nothing nudgeable is selected, or move
between timeline targets when the timeline has focus (see [Timeline
navigation](#timeline-navigation) below). `K` adds or removes a keyframe at the
playhead when a canvas element is selected, starting an animation on a static
element, and otherwise stops playback. `J` always drives playback.

### Timeline navigation

Tab into the timeline before using these commands. The browser editor keeps one logical timeline target in the Tab order and moves that target without requiring every row or clip to stay mounted.

| Shortcut | Action |
| - | - |
| Left / Right arrow | Move to the previous or next target in the focused row |
| Up / Down arrow | Move to the nearest target at the same time in the previous or next logical row |
| Home / End | Move to the start or end of the focused row |
| Command/Ctrl + Home / End | Move to the first or last logical row |
| Page Up / Page Down | Move by one visible page of logical rows |
| Enter / Space | Expand or collapse keyframe property lanes on a focused track row |
| Context Menu or Shift + F10 | Open the focused target's context menu when available |

On an expandable track row, Right arrow expands collapsed keyframe lanes and Left arrow collapses expanded lanes. From a keyframe property row, Left arrow returns to its parent track row. When no disclosure or parent action applies, those arrows continue moving within the row.

If the destination is outside the virtualized viewport, the browser editor scrolls it into view and restores focus after it mounts.

### Keyframes and recording

| Shortcut | Action |
| - | - |
| K | Add or remove a keyframe at the playhead when the current selection supports it |
| R | Start or stop gesture recording |

During gesture recording, drag records position, scroll records depth,
Shift-drag records 3D rotation, Option/Alt-drag records rotation, and
Command/Ctrl-drag or scroll records opacity or scale.

### Canvas and panels

| Shortcut | Action |
| - | - |
| G | Toggle the canvas grid |
| Command/Ctrl + 1 | Open Compositions |
| Command/Ctrl + 2 | Open Assets |
| Option/Alt + drag | Move an entire animation path |
| Shift + drag a resize handle | Resize uniformly |

> [!WARNING]
>
> A shortcut should not fire while you are typing into a text or source field. If the wrong area has focus, click the canvas or timeline before using an editing shortcut.

Use the **Shortcuts and tools** button beside the playback controls for the
built-in shortcut list, work-area controls, and jump-to-frame field.

## Related topics

* [Edit the frame](https://hyperframes.heygen.com/studio/canvas.md)
* [Edit timing on the timeline](https://hyperframes.heygen.com/studio/timeline.md)
* [The Studio app](https://hyperframes.heygen.com/studio-app/index.md)
* [Edit animation and keyframes](https://hyperframes.heygen.com/studio/canvas.md#animate-with-keyframes)


## Related topics

- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)
- [Reuse a design with variables](https://hyperframes.heygen.com/concepts/variables.md)
- [Motion Blur](https://hyperframes.heygen.com/guides/motion-blur.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.