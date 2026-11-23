> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Make a music video or lyric video

> Cut footage, images, lyrics, and motion to a track’s beat grid.

Start with a music file—or a video whose audio should control the edit. Narration is not added; the track is the spine.

<video aria-label="A complete music-driven film" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/full-music-v2.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/wfv2-music.jpg" playsInline preload="metadata" />

A complete music-driven film. Its sections, visual treatments, and cuts follow the track.

## Make it

Add the track (and any photos or clips that must appear) in **Make something**:

```text theme={null}
Turn this song and the tour photos into a 30-second video cut to the beat.
```

**Have an edit you like?** Paste its link too and say "cut it like this": the agent matches its rhythm and
transitions to your track. Mention a section, lyric or image order only when it can't be chosen freely. With your own agent instead of the app, start the message with `/hyperframes`.

## What should the track drive?

* **Use your photos or video** — cut approved media to the track's phrases, energy, beats, and ending.
* **Make a lyric video** — verify the words first, then synchronize and design each line around the vocal.
* **Invent the visuals** — build the visual arc from typography, graphic elements, and motion when no media is supplied.

A complete video can also be built entirely from type, graphic templates, and
motion.

## The track sets the structure

HyperFrames maps the track’s phrases, energy, onsets, silences, rolls, drops, and hard stops before it plans the visuals.

A rhythmic track can support cuts on its real beat grid. Calm or loose music should flow by phrase and energy instead of forcing a cut onto every measured beat.

The visual treatments change at meaningful musical moments. More beats do not automatically mean more scenes.

## Prompts that work

The verified starting point: photos cut to a track, exported to a square MP4.

> 20-second 1080x1080 video from ./track.mp3 (pick the best 20 seconds of the track) and the 8 photos in ./shots/. Cut on the beat grid, one photo per bar, punch-in on downbeats, `whip-pan` transitions on phrase changes. End on the last photo with "SUMMER '26" in condensed caps. No TTS.

<video aria-label="Example music slideshow" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-music-slideshow-v2.mp4#t=0.1" loop playsInline preload="metadata" />

*Made from the prompt above.*

Every timing decision here is delegated to the track's own analysis — you describe the *treatment* ("one photo per bar", "punch-in on downbeats"), and the beat grid supplies the *times*.

### Say these when they matter

**The beat grid.** The agent analyzes the track (`hyperframes beats`, `hyperframes audio`) for beats, onsets, and sections, then cuts at real musical changes. You steer *how* it cuts, not *when*: "one photo per bar" sets cut density, "punch-in on downbeats" adds the accent, "transitions on phrase changes" reserves the visible moves for structural boundaries. On genuinely rhythmic music the grid is trustworthy and cuts snap to the beat; on calm music the grid is a metronome the analyzer imposed, so the agent paces by phrase and energy instead of hard-cutting — say "let it flow, no hard cuts" if the track is ambient.

**Track section — describe, don't timestamp.** Ask for "the best 20 seconds" or "the verse into the hook" and let the analyzer choose boundaries that land on musical anchors. Hard timestamps ("use 0:32–0:52") cut mid-phrase and fight the grid.

**Asset supply.** Zero assets is valid — typography carries a complete video. Any photos or clips you hand it are woven in *on the same beat grid* (beat-cut or Ken Burns), so more assets means more to cut between, not a different pacing model. Point at a directory ("the 8 photos in ./shots/") and name the end card.

### Variants

> [accordion] Lyric video
>
> > 30-second 1080x1920 lyric video from ./song.mp3 (pick the strongest 30-second section — a verse into the hook). Transcribe the vocals for word timing. Lines rise in one at a time on the beat, big condensed type on a dark grain background; the hook lands with each word punching in on its downbeat. Keyword in each line highlighted in acid green. No photos — typography only. No TTS.
>
> Word-level timing comes from transcribing the track (or from lyrics you paste, placed on the beat grid). No supplied assets needed — type is the whole video.

> [accordion] Kinetic promo from a mood brief (no track)
>
> > 15-second 1080x1080 kinetic promo. No track supplied — generate one: driving synthwave, high energy. Cut hard on the beat: full-frame word cards ("FASTER", "SHARPER", "SHIP IT") slam in on downbeats, alternating black/white with inverted type, a glitch flash on each phrase change. End on the wordmark "NOVA" holding with a subtle ambient idle. No TTS.
>
> With no audio supplied, the track is generated from the mood you describe; the beat grid it produces still drives every cut.

### Common mistakes

**Hard track timestamps.** The whole point of a music video is that the track's structure sets the cuts. A literal time window ignores the analyzed beat grid and lands cuts mid-phrase.

* **Avoid:** `use the section from 0:32 to 0:52`
* **Instead:** `pick the best 20 seconds of the track`

**Expecting an MP4 from a presentation.** A presentation is a live deck you click through; it doesn't export as one video file.

* **Avoid:** `a slideshow deck, then render it to MP4`
* **Instead:** `a music video from these photos` for a file to post, or `a presentation` to click through live

**Wrong deliverable for the output.** Photos set to music that you'll export and post is a video; a thing you click through live is a presentation. Picking by the word "slideshow" alone builds the wrong deliverable.

> [!TIP]
>
> The music prompts here are unnarrated; ask for a voice-over if you want one. For the six-part skeleton these prompts share, see [Prompt anatomy](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt); for adjectives that map to eases and transitions, [Vocabulary](https://hyperframes.heygen.com/prompting/motion.md#words-for-how-motion-feels).

A clause from a longer film prompt that makes the cuts follow the real beats, ready to lift:

> **Rhythm (45–52s).** The wire becomes a waveform: **resolve the BGM first, run `hyperframes beats` on it, and drive this region on the detected grid** — the waveform pulses and compact media cards (a lyric line, a photo card, a chart flash) snap onto the wire on real analyzed beats while the camera keeps traveling; each snap gets a tick SFX. At least six beat-hits. SANCTIONED SEAM #2: the beat-hits may hard-cut card content ON the beat — the sanctioned exception, because the camera itself never stops moving through them.

<video aria-label="Capstone region rhythm" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-rhythm.mp4#t=0.1" loop playsInline preload="metadata" />

*Cuts landing on the detected beats of a real track (`npx hyperframes beats`).*

## Review the rhythm

* The correct section of the track is used.
* Required media appears and lyrics match the vocal.
* The strongest visual changes land on meaningful musical changes.
* Important images and text remain long enough to understand.
* The ending reaches a musical landing or forms a deliberate loop.

For direct timing control, use the [browser editor timeline](https://hyperframes.heygen.com/studio/timeline.md) to refine
cuts, holds, and the ending against the beat markers. Ask the agent when the
section, media plan, or overall treatment must change.

> [card] [Finish and share](https://hyperframes.heygen.com/guides/export-and-share.md)
>
> Check the final project, render through your preferred surface, and review the file.

## Related topics

* [Edit cuts and holds on the browser editor timeline](https://hyperframes.heygen.com/studio/timeline.md)
* [Work with voice, music, sound, and captions](https://hyperframes.heygen.com/guides/voice-and-audio.md)


## Related topics

- [Make your first video](https://hyperframes.heygen.com/quickstart.md)
- [Make any other video](https://hyperframes.heygen.com/guides/general-video.md)
- [Make a product launch video with AI](https://hyperframes.heygen.com/guides/product-launch-video.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.