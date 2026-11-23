> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Remove a video background

> Cut a person or any object out of a clip or picture so titles can pass behind them: in the Studio app with a right-click, or free on your computer with one command.

Cut a person out so titles can pass behind them, lift an object out of a shot, or replace what's behind. The basic
cut-out runs on your computer: no upload, no account, no cost.

<video aria-label="A presenter cut out of a real room, shown against the original and magnified at the hard edges" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/remove-background-demo-v3.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/remove-background-demo-v1.jpg" playsInline preload="metadata" />

*A presenter cut out of a real room, with the hard edges (hair, a shoulder a plant overlapped) magnified.*

## In the Studio app

Right-click a video or picture in the preview:

* **Cut out object here** lifts out whatever you clicked, a person or a thing. On a video it follows that object
  through the clip. Shift-click adds to the selection; on a picture, **B** brushes the edges. It runs on a Mac:
  pictures on Apple silicon with macOS 14 or later, or Intel with macOS 13.3 or later; video on Apple silicon only.
* **Remove background** keeps the person and drops the rest. It's free and runs on your computer, made for people on plain
  backgrounds. With a HeyGen API key you can choose a cloud cut through HeyGen instead, paid from your API balance.

Or just ask: "put the title behind her", "remove the cup from the table", "put her on a rainy street at night".

## On the command line

```bash theme={null}
npx hyperframes remove-background subject.mp4 -o subject.webm
```

The first run downloads the model; it needs FFmpeg. Pick the output by where it goes: `.webm` for HyperFrames and the
web, `.mov` (ProRes 4444) for Premiere, Resolve or Final Cut, `.png` for a single photo.

For text behind the person, make the cut-out and a background plate with a person-shaped hole in one pass, then
stack: plate, your text or graphic, cut-out on top.

```bash theme={null}
npx hyperframes remove-background subject.mp4 -o subject.webm --background-output plate.webm
```

![The original presenter frame beside its transparent cutout over a green background](https://static.heygen.ai/hyperframes-oss/docs/images/showcase/remove-background-before-after-v1.png)

The same real frame before and after the local model. The softer hair and hand edges are the model’s actual limit on this source.

## When it works, and when it won't

The free model is made for people: a clear subject, steady framing, some contrast with the background. Expect trouble
with a held object (a dark mic or phone can vanish), fine hair over a busy background, and fast motion. For objects,
use **Cut out object here** in the app instead.

## Fixes, quality and speed

| Problem | What to check |
| - | - |
| The background is still opaque | Confirm the output is transparent WebM, MOV, or PNG and preview it over a colored background. |
| Edges flicker | Use a cleaner source, reduce fast movement, or use a stronger external matting tool. |
| Processing is slow | Check `--info`; CPU processing works but is much slower than an available accelerated provider. |
| The subject has a color halo | Use `--quality best`, especially when layering over the original source. |
| The “background plate” has a hole | Expected: it is inverse alpha, not an inpainted clean plate. |
| Part of a held object is missing | The model matches people, not what they hold. Use another matting tool for that shot. |

`--quality best` for a cut-out over its own original footage, `fast` for a smaller file over something unrelated;
`--info` shows whether a fast local processor was found. To move the cut-out, animate a wrapper around the video,
not the video itself. Every flag is in the [CLI reference](https://hyperframes.heygen.com/packages/cli.md#remove-background).

## Related topics

* [Add an AI avatar presenter](https://hyperframes.heygen.com/guides/avatar-presenter.md)
* [Use images and video](https://hyperframes.heygen.com/guides/video-components.md)
* [Apply media effects](https://hyperframes.heygen.com/guides/media-effects.md)


## Related topics

- [Add images and video clips](https://hyperframes.heygen.com/guides/video-components.md)
- [Add an AI avatar presenter to a video](https://hyperframes.heygen.com/guides/avatar-presenter.md)
- [CLI](https://hyperframes.heygen.com/packages/cli.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.