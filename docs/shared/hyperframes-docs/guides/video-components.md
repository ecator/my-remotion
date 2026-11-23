> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add images and video clips

> Put a picture or a clip into a HyperFrames video, then place, trim, crop or swap it: ask the agent, drag it in, or write two attributes.

Put a picture or a clip into your video three ways: ask the agent, drag it into the editor, or write it in the HTML.
All three change the same file, so you can mix them.

<video aria-label="The five basic moves: import, place, crop, trim, and swap the source" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/media-basics-demo-v1.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/media-basics-demo-v1.jpg" playsInline preload="metadata" />

*Import, place, crop, trim, then swap the file: the crop, timing and placement stay as they were.*

## Ask the agent

Name the file and say what should happen, in terms of what you see:

```text theme={null}
Use assets/product-tour.mp4 from 00:04 to 00:10, muted.
Crop around the editor canvas and place it under the captions.
```

The agent copies the file into the project if it isn't there yet. In the Studio app, add the file to your message
with **+** or drop it into the chat.

## Drag it in

In the browser editor (`npx hyperframes preview`), open **Assets**, choose **Import media** or drop the file into the
panel, then drag it onto the timeline. Images, SVG, MP4, WebM and MOV work.

<video autoPlay loop muted playsInline preload="metadata" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-media-edit-loop-v1.jpg" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-media-edit-loop-v4.mp4" />

The browser editor today, changing the real project: inspect the source, change Fit and Position, crop on the canvas, then import another local asset.

## Write it in the HTML

A picture on screen for 3 seconds, and a muted clip that plays 6 seconds of its source starting at second 4:

```html theme={null}
<img class="clip" src="assets/logo.svg"
     data-start="0" data-duration="3" data-track-index="1" />

<video class="clip" src="assets/product-tour.mp4" muted playsinline
       data-start="3" data-duration="6" data-media-start="4" data-track-index="0"></video>
```

`class="clip"` lets the timeline show and hide it; `data-start` and `data-duration` say when; `data-media-start`
trims the start of the source. Keep a clip's sound with `data-has-audio="true"` and set its level with
`data-volume`. To move or scale a video, animate a wrapper around it, not the video itself. Every attribute is in
the [HTML schema](https://hyperframes.heygen.com/reference/html-schema.md).

## Swap the file

Ask the agent to use the new file, or change `src`. Then check the crop, the length and anything that moved with
the old picture. If the new file changes the story, ask for that bigger change instead.

## Keep it working everywhere

Copy every file into the project and give it a clear name (`pricing-page-scroll.mp4`). Links that expire or need a
login break the render on another computer. `npx hyperframes check` finds missing and late-loading files.

Before you export, watch once and check the first and last frame of each clip, the crop at the final size, and
that nothing looks stretched.

## More media tasks

> [card] [Avatar presenter](https://hyperframes.heygen.com/guides/avatar-presenter.md)
>
> Generate or reuse a presenter clip and compose around it.

> [card] [Voice, music, and sound](https://hyperframes.heygen.com/guides/voice-and-audio.md)
>
> Build an understandable audio mix.

> [card] [Remove a background](https://hyperframes.heygen.com/guides/remove-background.md)
>
> Isolate a person from a real image or clip.

> [card] [Effects and color grading](https://hyperframes.heygen.com/guides/media-effects.md)
>
> Apply a visual treatment, correct footage, or set a deliberate look.

## Related topics

* [Use Assets and Catalog in the browser editor](https://hyperframes.heygen.com/studio/assets-and-blocks.md)
* [Add effects to images and video](https://hyperframes.heygen.com/guides/media-effects.md)
* [Remove a video background](https://hyperframes.heygen.com/guides/remove-background.md)


## Related topics

- [Add effects to images and video](https://hyperframes.heygen.com/guides/media-effects.md)
- [Make clips with HeyGen Video 1](https://hyperframes.heygen.com/studio-app/video-clips.md)
- [Make a music video or lyric video](https://hyperframes.heygen.com/guides/music-to-video.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.