> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Work with media

> Use footage, images, audio, captions, backgrounds, and color in a HyperFrames project.

Media can come from your project, a captured website, an upload, or a generated
asset. Put anything required for the final result inside the project so preview
and rendering use the same file.

<video aria-label="The five basic moves: import, place, crop, trim, and swap the source" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/media-basics-demo-v1.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/media-basics-demo-v1.jpg" playsInline preload="metadata" />

Each step adds one attribute on the left and shows the result on the right. The
last one swaps the file entirely — everything else about the scene stays put.

## Start with the role, not the effect

| Media | Give it one main job |
| - | - |
| Product capture | Prove how the product behaves |
| Footage | Carry a person, place, action, or emotion |
| Image | Hold one idea long enough to understand it |
| Voice | Carry the explanation or story |
| Music | Shape pace and tone |
| Sound effect | Reinforce a meaningful action |

More layers do not automatically make a stronger video. If two assets do the
same job, keep the clearer one.

## Bring it into the project

In the browser editor, open **Assets**, choose **Import media**, or drop files into the
panel. Preview the file before placing it on the timeline. You can also ask the
agent to capture a website, prepare supplied footage, generate a derivative, or
copy an approved file into the project.

Use names such as `pricing-page-scroll.mp4` or `customer-logo.svg`. Clear names
make later revisions much easier for both people and agents.

## Prepare only what the result needs

* Trim or crop a source when the unused material slows down review.
* Remove a background when the subject must sit over a designed scene.
* Grade footage when sources visibly disagree or the story needs a deliberate look.
* Generate captions from the real speech, then correct words and timing before styling them.
* Keep narration clear above music and use effects only for specific events.

The original and prepared file should remain easy to distinguish.

## Remember confirmed preferences

The media-use skill records confirmed choices in `.media/preferences.json`.
Concurrent records preserve each choice, including confirmations that promote a
preference to your personal defaults after use in two projects.

Add `.media/*.lock` to the project's `.gitignore`, while keeping
`preferences.json` committed. If recording reports "Settings are locked…",
confirm that no HyperFrames process is recording preferences before deleting
the named lock file and retrying. A locked personal tier leaves the project
record intact and postpones personal promotion until a later record.

## Check the final timeline

Watch once from beginning to end and check:

* the first and last frame of every video clip;
* crop and resolution at the intended output size;
* caption timing against the spoken words;
* voice clarity on ordinary headphones and laptop speakers;
* missing files, temporary URLs, and late-loading media.

## Reuse an approved recipe

Ask the agent to save an approved video's design and storyboard as a named
recipe for later projects. Saving the same name again creates a new version
and archives the previous project version.

If the new version has no `BRIEF.md`, importing that recipe into another
project does not restore the older brief. The earlier brief remains available
in the archived version.

## Choose a media task

> [card] [Images and video](https://hyperframes.heygen.com/guides/video-components.md)
>
> Import, place, replace, trim, and review visual media.

> [card] [Avatar presenter](https://hyperframes.heygen.com/guides/avatar-presenter.md)
>
> Generate or reuse a presenter clip and compose around it.

> [card] [Voice, music, and sound](https://hyperframes.heygen.com/guides/voice-and-audio.md)
>
> Build an understandable audio mix.

> [card] [Remove a background](https://hyperframes.heygen.com/guides/remove-background.md)
>
> Isolate a person from a real image or clip.

> [card] [Color grading](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color)
>
> Correct footage or establish a deliberate look.

> [card] [Media effects](https://hyperframes.heygen.com/guides/media-effects.md)
>
> Apply a non-destructive visual treatment.

## Related topics

* [Use assets and Catalog items in the browser editor](https://hyperframes.heygen.com/studio/assets-and-blocks.md)
* [Finish, render, and share](https://hyperframes.heygen.com/guides/export-and-share.md)


## Related topics

- [CLI guide](https://hyperframes.heygen.com/developers/cli.md)
- [Captions, assets and variables](https://hyperframes.heygen.com/studio/assets-and-blocks.md)
- [How a HyperFrames project works](https://hyperframes.heygen.com/concepts/index.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.