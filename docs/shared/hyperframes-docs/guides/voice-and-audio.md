> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add voiceover, music, sound effects and captions

> Ask for narration, music, sound effects and captions in plain words: what's free, what HeyGen adds, and how to check the mix.

Ask for sound the way you'd brief an editor. The agent finds or makes each piece, places it on the timeline and
mixes it, with the music dipping under the voice.

<video aria-label="Narration, music ducking under it, and effects landing on the beat" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/voice-audio-demo-v2.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/voice-audio-demo-v2.jpg" playsInline preload="metadata" />

*Sound on: narration, the music ducking under it, and effects landing with the action.*

## Ask for it

In the Studio app or your own agent, in one message or one at a time:

```text theme={null}
Add a warm, unhurried narration of this script: [paste script]
Put a calm piano bed under it, quieter while she speaks.
A soft whoosh on each scene change, nothing else.
Captions: two lines at most, key words in the brand color.
```

Quote the script when the words are approved; otherwise give the points and let the agent write it. Name what you
don't want, too: "no music" and "no sound effects" are followed exactly.

## Free, or HeyGen quality

| | Free, on your computer | With HeyGen |
| - | - | - |
| **Voice** | Kokoro voices, in several languages | HeyGen voices and your own cloned voice |
| **Music** | Tracks you add, or local generation if you install it | A 10,000-track catalog |
| **Sound effects** | A bundled set, plus Openverse | The same |
| **Captions** | Local transcription with your own agent (Parakeet or Whisper) | The Studio app transcribes through HeyGen |

The Studio app uses HeyGen when you add a HeyGen API key (Home says **Add a HeyGen API key to make voiceovers, avatars
and clips**), and a local voice when you don't. With your own agent, sign in to the HeyGen CLI or set an API key. The
words to use for each are on [Voice, music and sound](https://hyperframes.heygen.com/prompting/media-and-audio.md).

## Use your own recording

Add the file and say what it is ("this is the narration", "keep the interview audio"). To get timed words from it
yourself, transcription runs locally and costs nothing:

```bash theme={null}
npx hyperframes transcribe interview.mp4 --language es
```

Pass `--language` when the speech isn't English. It also imports an existing `.srt` or `.vtt`. For a talking-head clip that needs
captions or a tighter cut, see [Captions and recuts](https://hyperframes.heygen.com/guides/captions-and-recuts.md).

## Read a reference soundtrack

To understand an existing recording before making a new soundtrack, run:

```bash theme={null}
npx hyperframes audio reference.mp4 --read --quality best
```

With a HeyGen credential, the recording is separated into six stems: vocals,
drums, bass, guitar, piano and other. The reading describes each audible stem,
then gives an overall description. `voice-free mix:` points to a mix without the
vocal stem. `bgm prompt:` describes the music for a music generator, or says
there is no music. These descriptions use HeyGen; a separate Google or Gemini
API key is not used. Without a HeyGen credential, or if the description service
fails, a warning explains why descriptions are unavailable instead of guessing.

Timed effects are named `effect` and grouped as `S1`, `S2` and so on, without
assigning sound kinds. Each keeps its source stem, time, frequency band, attack,
tail, peak level and level above the surrounding music. Model descriptions can
explain what a sound resembles; their timing is approximate. The timed lines
carry the measurements.

Sign in with `npx hyperframes auth login`, or set `HEYGEN_API_KEY`, before using
the HeyGen services. See [audio analysis](https://hyperframes.heygen.com/packages/cli.md#audio) for transcript,
range and local-analysis options.

## Get captions right

Read the transcript before it goes on screen: names, product terms and numbers are where recognition slips. Keep
lines short and broken on meaning, keep them off faces and buttons, and emphasize the two or three words that carry
the point. To adjust them by hand, open [Captions](https://hyperframes.heygen.com/studio/assets-and-blocks.md#edit-captions) in the browser editor.

## Repeat music inside a slot

Use the native `loop` attribute to repeat a short track for a longer slot:

```html theme={null}
<audio id="music" src="music.wav" data-start="0" data-duration="30" loop></audio>
```

The track repeats until the 30-second slot ends in preview and export. If you
set `data-media-start`, every repeat starts at that source in-point. Playback
speed and rate automation apply to the repeated audio. Looping videos with
`data-has-audio="true"` repeat their sound too, including any silence before
the next cycle.

## Check the mix

Watch once with sound and once muted, then listen once without watching.

* The voice stays clear through the loudest part of the music.
* Each effect lands with the thing it belongs to.
* Nothing cuts off a word or a breath at a scene change.
* The music ends on purpose, not at the end of the file.

The audio analysis gives each sound a first guess of `voice`, `music` or `sfx`.
Voice needs both a speech-like level pattern and voice-range pitch, so a hit
with a speech-like tail is less likely to be mistaken for narration. These are
guesses, not transcript labels. When you inspect a time range, kind uses the
whole source span played by the clip; loudness, hits and the other measurements
still describe the selected range. A short slice of a music bed therefore keeps
the bed’s kind. Repeated range queries reuse that guess until the source or clip
changes. If the whole clip cannot be analyzed, the result warns that kind uses
only the selected range; the range’s other measurements are still returned.
See [audio analysis](https://hyperframes.heygen.com/packages/cli.md#audio) for the command and output.

To dip the music only where the voice sits instead of turning it all down, use a
[voiceover carve](https://hyperframes.heygen.com/studio/audio-effects.md#make-music-sit-under-narration).

Music can start after narration begins: the dip then starts at the right level for that moment, and speech that has
already ended doesn't make a new dip.

> [card] [Practice it: Sound](https://hyperframes.heygen.com/lessons/sound)
>
> Free 20-minute lesson with a short video, a quiz and a brief to try. Say the sound in your brief: the music's mood, the voice, and where the music starts and stops.

## Related topics

* [Add captions to a video with AI](https://hyperframes.heygen.com/guides/captions-and-recuts.md)
* [Make a video to music](https://hyperframes.heygen.com/guides/music-to-video.md)
* [Voice, music and sound: the words to use](https://hyperframes.heygen.com/prompting/media-and-audio.md)


## Related topics

- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)
- [Add voice, music and sound](https://hyperframes.heygen.com/prompting/media-and-audio.md)
- [Add captions to a video with AI](https://hyperframes.heygen.com/guides/captions-and-recuts.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.