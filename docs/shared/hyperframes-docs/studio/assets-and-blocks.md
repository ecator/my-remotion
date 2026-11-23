> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Captions, assets and variables

> In the browser editor: import and reuse media, add Catalog visuals, restyle caption words, and turn values into variables for templates.

Use **Assets** for media files. Use **Catalog** for reusable visual scenes and components.

<video src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-assets-catalog-loop-v1.mp4#t=0.1" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-assets-catalog-loop-v1.jpg" autoPlay muted loop playsInline preload="metadata" />

Import project media, then add a compatible Catalog scene at the playhead.

## Import an asset

1. Open **Assets**.
2. Choose **Import media**, or drop files into the panel.
3. Preview it before adding it to the project.
4. Drag it to the timeline or use it from the relevant inspector control.

Keep clear filenames. `product-dashboard-dark.png` is easier to reuse than `Screenshot 42.png`.

## Reuse project assets

**This project** contains the files available to the open project. **All projects** is a read-only
index of the global `~/.media` cache, where resolved media can be found again across projects. It is
not a file manager, so files cannot be deleted or replaced from that view.

If a large video is still preparing a preview or proxy, wait for that process before judging playback performance.

## Add a Catalog item

Open **Catalog**, search or pick a category (**Captions**, **Code Animations**, **VFX**, **Transitions**, **Effects**)
and preview what you need. Choose **Add** where it's offered to place it at the playhead, or **Ask agent** to copy a
ready request for your agent, which adapts the item to your composition. Then swap the sample content for yours and
match the project's timing and look.

Browse the full [Catalog](https://hyperframes.heygen.com/catalog.md) when you want to compare categories and individual examples.

> [!TIP]
>
> Reusable does not mean finished. Remove sample content and decorative motion that does not support
> your story.

## Edit captions

When a composition has captions, the editor switches to caption editing: click a word on the frame, or find it in the
caption track under the preview.

![HyperFrames browser editor with one caption word selected, word blocks in the caption rail, and position and transform controls](https://static.heygen.ai/hyperframes-oss/docs/images/studio-captions-panel-v1.jpg)

A selected word connects the canvas, caption rail, and the controls that the browser editor currently saves.

### What you can change here

Select a word (Shift-click for more), then drag, resize or rotate it on the frame. Arrow keys nudge it by 1 pixel,
Shift + arrow by 10. Color, opacity, font size, weight and family are in the panel. These edits are saved for you, in
`caption-overrides.json`, a moment after you make them.

### What to ask the agent for

Wording, timing, how words are grouped into lines and the caption style itself live in the caption source, not in
the editor. Ask your agent ("break the captions into two-word groups", "fix the spelling of HeyGen") or change the
source.

Then watch once with sound and once muted: names and numbers right, nothing covering a face or a button, and the last
caption clearing cleanly. For reusable styles, browse [caption components](https://hyperframes.heygen.com/catalog/components/caption-highlight.md).

## Use variables

Variables let one project produce many versions without rebuilding its layout or animation.

![HyperFrames browser editor showing a composition beside the Variables panel with Title, Subtitle, and Background inputs](https://static.heygen.ai/hyperframes-oss/docs/images/studio-variables-panel-v1.jpg)

The current Variables panel previews values beside the real composition.

### Create one reusable input

The quickest path starts from the canvas:

1. Select the element.
2. Open **Variables** in the right panel.
3. Bind the text, media source, text color, background, or font property.
4. Create a new variable or choose a compatible existing one.

Before binding to an existing variable, the browser editor shows its saved default, using the font name or image URL for object values.

For a value that is not tied to the selected element, click **Add variable**. The browser editor supports string, number, color, boolean, enum, font, and image variables. Number variables can include minimum, maximum, and step values; enums can define their allowed options.

Name the input by meaning—`customerName`, `headline`, or `brandColor`—rather than by its position in the design.

### Preview without changing the template

Change a value in the Variables panel to preview that version immediately. The preview is an override: it does not replace the saved default.

The panel tells you whether you are previewing defaults or custom values. Use **Reset** to clear all preview overrides. When a scalar preview should become the new default, use **Set default**.

Use **Edit** to change a variable's label, description, or saved default. For font and image objects, **Default** edits the font name or image URL. Saving keeps the font source, image alt text and fit, and any other stored metadata, including when you change only the label or description.

> [!NOTE]
>
> Variables from other compositions are listed separately. You can edit their declarations, but
> their values are not live-previewed in the active composition.

### Hand the project off

At the bottom of the panel, **Use this template** can copy either:

* the effective values as JSON;
* a ready-to-run `npx hyperframes render -c <composition> --variables-file .hyperframes/render-variables.json` command.

Copying the command also saves the values you are previewing to `.hyperframes/render-variables.json`, so run it from the project folder. The values travel in that file rather than in the command, so no value can be read as shell syntax in bash, zsh, fish, PowerShell or Command Prompt. If the composition's file name has characters other than letters, digits, `_`, `.`, `/` and `-`, the browser editor offers only the JSON; rename the file to get the command.

This keeps the values you just reviewed attached to the render request instead of asking the next person to reconstruct them.

### Test the fallback

A useful template survives realistic variation. Before handing it off, test:

* long and short names or headlines;
* image aspect ratios;
* color contrast;
* number formatting;
* missing optional values.

For the schema, HTML bindings, and batch-render examples, read [Variables](https://hyperframes.heygen.com/concepts/variables.md).

## Related topics

* [Work with media](https://hyperframes.heygen.com/guides/video-components.md)
* [Browse the Catalog](https://hyperframes.heygen.com/catalog.md)
* [Add captions to a video](https://hyperframes.heygen.com/guides/captions-and-recuts.md)
* [Voice, sound and captions](https://hyperframes.heygen.com/guides/voice-and-audio.md)
* [Understand the variables contract](https://hyperframes.heygen.com/concepts/variables.md)
* [Render variable-driven versions](https://hyperframes.heygen.com/guides/rendering.md#batch-and-cloud-work)


## Related topics

- [Variable Axis Type](https://hyperframes.heygen.com/catalog/components/variable-axis-type.md)
- [Camera Follow Captions](https://hyperframes.heygen.com/catalog/components/caption-camera-follow.md)
- [Weight Wave](https://hyperframes.heygen.com/catalog/blocks/weight-wave.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.