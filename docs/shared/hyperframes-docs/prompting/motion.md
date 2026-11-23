> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Ask for smooth motion and transitions

> The words that change how a HyperFrames video moves: fix motion you don't like, ask for camera, overlap, depth and pace, and pick transitions between scenes.

Your agent already follows HyperFrames' motion rules: elements land and hold still, moves overlap, cuts happen mid-motion.
Use this page when you want to steer it: what to say when the motion feels wrong, and the ideas worth asking for by name.

## Fix motion you don't like

Watch the video once, then tell your agent what you see in plain words. These phrasings work:

| What you see | Say | What the agent changes |
| - | - | - |
| Everything moves too fast | "Too fast. Slow the zooms and pans." | Slows every camera move to about 0.7× and leaves the rest alone |
| It drags | "Speed this up." | Shortens each beat along with its content, and moves later beats earlier |
| Titles keep floating or growing after they appear | "Land the titles, then hold them still." | Titles arrive, stop dead, and leave with the scene |
| It feels like slides | "It feels like slides. Carry one thing across each cut." | Enters the next scene through something on screen and cuts mid-move |
| Everything appears at once | "Bring things in one after another, on the voice." | Staggers entrances so each starts before the last has settled |
| It looks bouncy or cheap | "No bounce on text or UI." | Uses long, smooth slow-downs; keeps overshoot for physical objects |
| There's a jump at a cut | "There's a jump at 4.2 s." | Matches positions and speeds on both sides of that cut |
| A scene sits there with nothing happening | "Scene 3 is dead. Give it something to do." | Adds real action: the UI working, footage, the camera travelling to the next thing |

Give a timestamp when you can ("at 4.2 s"). Ask for one change at a time and watch again.

> [card] [Practice it: Timing](https://hyperframes.heygen.com/lessons/timing)
>
> Free 16-minute lesson with a short video, a quiz and a brief to try. A beat is a change on screen with a time: a word appears, a card leaves, a cut lands.

## Ideas worth asking for

Each idea below has a side-by-side film: the same scene built twice, where the only difference is one line of the prompt.
Left is without, right is with.

### Move only what is live

Once something lands, it holds still. What keeps moving is what is actually changing: a live number, a feed, a progress bar.
Don't ask for "subtle breathing" to make a scene feel alive; it reads as generated.

> The panel lands by 1.9 s. After that, only what the feed changes moves: a reading arrives every 300 ms, the last digits change, the sparkline extends one segment, `LAST SYNC` restamps. Nothing else moves.

<video controls muted loop playsinline preload="metadata" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule1-nothing-stops.mp4#t=0.1" />

*Left: the whole panel freezes at 2 s, so it looks like a dead connection. Right: only the readings move, and the rest is still.*

### Move the camera to get somewhere

A camera move earns its place by travelling between things, so the viewer sees they live in one space.
A slow creeping push-in for its own sake does not.

> Lay the five pipeline stages out 640 px apart, wider than the frame, and move the camera across the whole run. A packet runs the wire and lights each stage as it arrives.

<video controls muted loop playsinline preload="metadata" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule2-camera-actor-v2.mp4#t=0.1" />

*Left: five stages cross-fade in one spot. Right: you travel to each one, and the neighbours stay in view.*

### Overlap, don't queue

The next element starts while the last is still settling. Stagger things that happen in sequence. Things that already existed show up together.

> The rollout spreads outward from `us-east-1`, reaching each region 0.09 s apart in order of distance. Each region's 0.5 s ignite is still running when the next three begin.

<video controls muted loop playsinline preload="metadata" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule3-overlapping-action.mp4#t=0.1" />

*Left: twelve regions light on one frame, so you can't tell where it started. Right: it visibly spreads.*

### One idea per move

Combine properties only when they say the same thing. Rising and fading in says "arriving". Adding a spin and a zoom makes text unreadable mid-flight.

> The confirmation sheet rises 470 px over 1.2 s while fading in. Rotation, scale and blur are never touched.

<video controls muted loop playsinline preload="metadata" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule4-compound-properties.mp4#t=0.1" />

*Same travel and timing. Left: "Payment confirmed" is a tilted smear. Right: readable the whole way up.*

### Weight for physical objects only

Overshoot says "this has mass". Use it on things that have weight, like flaps, cards and characters. Never use it on text, UI or numbers: a counter that flies past 42 and falls back shows a number that was never true.

> The split-flap plates swing past their rest position and settle; the housing recoils when they land. The gate number never overshoots 42.

<video controls muted loop playsinline preload="metadata" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule5-overshoot.mp4#t=0.1" />

### Depth: near things move faster

Far layers move slower than the camera and near ones faster. One blurred foreground object passing in front of the content is the strongest depth cue. A second one is clutter.

> The horizon row moves at a fifth of the room's rate, the racks at full rate, and one near column sweeps past at six times, blurred, crossing in front of the headline.

<video controls muted loop playsinline preload="metadata" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule6-depth-planes.mp4#t=0.1" />

### Pace to the format

A showreel gives each idea 1–4 seconds; a product demo holds one framing for 7–10 seconds while the UI works. Stretching a 2-second idea to 8 seconds feels slow however well it moves.

> Showreel pace: 1.1 s per beat, cutting hard, all three beats delivered by 3.3 s.

<video controls muted loop playsinline preload="metadata" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule7-pacing.mp4#t=0.1" />

## Handmade, still deterministic

For a stop-motion or hand-animated feel, ask for movement that steps between held positions, with the irregularity coming from a seed.
Every render must give the same frame at the same time, so unseeded randomness is not allowed.

> Paper-cutout shapes on visible wires, like stop-motion. Seed a random offset per element (same seed every render) and hold each position for exactly two frames, quantized on the frame index.

<video controls muted loop playsinline preload="metadata" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-handmade.mp4#t=0.1" />

*Rendered from the prompt above, unedited. Two renders came back byte-identical.*

Say "two frames", not "0.067 seconds": a hold measured in seconds drifts into uneven one- and three-frame steps.

## Between scenes: transitions

A good transition is caused by something on screen: the camera zooms through a button into the next screen, a card grows until it becomes the next scene, the background floods a new colour while the subject stays.
Ask for that kind of handoff and the agent builds it. Use 3–5 kinds in a film, each where it fits, and never a dissolve between two unrelated scenes.

To pin a specific effect, name a block from the catalog and the seam it goes on:

> Six-scene SaaS explainer. Use [`whip-pan`](https://hyperframes.heygen.com/catalog/blocks/whip-pan) between related points, and one [`cinematic-zoom`](https://hyperframes.heygen.com/catalog/blocks/cinematic-zoom) into the final pricing reveal. About 0.4 s each.

<video aria-label="Validate transitions" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-transitions.mp4#t=0.1" loop playsInline preload="metadata" />

*Rendered from the prompt above, unedited.*

| Energy | Shader blocks | CSS blocks | Duration |
| - | - | - | - |
| Calm (wellness, brand story) | [`cross-warp-morph`](https://hyperframes.heygen.com/catalog/blocks/cross-warp-morph), [`light-leak`](https://hyperframes.heygen.com/catalog/blocks/light-leak) | [`transitions-blur`](https://hyperframes.heygen.com/catalog/blocks/transitions-blur) | 0.5–0.8 s |
| Medium (SaaS, explainer) | [`whip-pan`](https://hyperframes.heygen.com/catalog/blocks/whip-pan), [`cinematic-zoom`](https://hyperframes.heygen.com/catalog/blocks/cinematic-zoom) | [`transitions-push`](https://hyperframes.heygen.com/catalog/blocks/transitions-push), [`transitions-cover`](https://hyperframes.heygen.com/catalog/blocks/transitions-cover) | 0.3–0.5 s |
| High (promo, music, launch) | [`ridged-burn`](https://hyperframes.heygen.com/catalog/blocks/ridged-burn), [`glitch`](https://hyperframes.heygen.com/catalog/blocks/glitch), [`chromatic-radial-split`](https://hyperframes.heygen.com/catalog/blocks/chromatic-radial-split) | [`transitions-scale`](https://hyperframes.heygen.com/catalog/blocks/transitions-scale), [`transitions-light`](https://hyperframes.heygen.com/catalog/blocks/transitions-light) | 0.15–0.3 s |

Shader blocks warp and morph both scenes pixel by pixel; use them when the handoff itself is a moment. CSS blocks are lighter and fit ordinary scene changes.
All of them are in the [catalog](https://hyperframes.heygen.com/catalog/blocks/cross-warp-morph.md); a name that isn't there (`page-curl`) leaves the agent guessing.

**Don't ask to fade one scene out and then fade the next one in.** It renders as a jump cut with a dip in the middle. The transition is the exit: ask for "`cross-warp-morph` from scene 1 to scene 2".

> [card] [Practice it: Camera and transitions](https://hyperframes.heygen.com/lessons/camera-and-transitions)
>
> Free 16-minute lesson with a short video, a quiz and a brief to try. Name the cut: a hard cut is an instant switch, a match cut carries a move across it, a zoom cut pushes in and pulls back.

## Related

* [Plan scenes with a storyboard](https://hyperframes.heygen.com/prompting/design-systems.md#storyboards)
* [Add voice, music and sound](https://hyperframes.heygen.com/prompting/media-and-audio.md)
* [A complete film, from prompt to render](https://hyperframes.heygen.com/prompting/capstone.md)

## Words for how motion feels

Describe how motion should *feel* and the agent picks the matching GSAP ease:

| Say this | Agent uses | Feels like |
| - | - | - |
| smooth | `power2.out` | Natural deceleration |
| snappy | `power4.out` | Quick and decisive |
| bouncy | `back.out` | Overshoots then settles |
| springy | `elastic.out` | Oscillates into place |
| dramatic | `expo.out` | Fast start, long glide |
| dreamy | `sine.inOut` | Slow, symmetrical |

**Timing shorthand:** fast (0.2s) = energy, medium (0.4s) = professional, slow (0.6s) = luxury, very slow (1–2s) = cinematic.

Each word, rendered — the same move, only the ease changes:

<video src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-power2-out.mp4#t=0.1" autoPlay muted loop playsInline preload="metadata" aria-label="smooth preview" />

smooth `power2.out`

<video src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-power4-out.mp4#t=0.1" autoPlay muted loop playsInline preload="metadata" aria-label="snappy preview" />

snappy `power4.out`

<video src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-back-out.mp4#t=0.1" autoPlay muted loop playsInline preload="metadata" aria-label="bouncy preview" />

bouncy `back.out`

<video src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-elastic-out.mp4#t=0.1" autoPlay muted loop playsInline preload="metadata" aria-label="springy preview" />

springy `elastic.out`

<video src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-expo-out.mp4#t=0.1" autoPlay muted loop playsInline preload="metadata" aria-label="dramatic preview" />

dramatic `expo.out`

<video src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-sine-inout.mp4#t=0.1" autoPlay muted loop playsInline preload="metadata" aria-label="dreamy preview" />

dreamy `sine.inOut`


## Related topics

- [A full film, prompt by prompt](https://hyperframes.heygen.com/prompting/capstone.md)
- [Colour, effects, 3D and generated art](https://hyperframes.heygen.com/prompting/color-grading.md)
- [Text, captions and code on screen](https://hyperframes.heygen.com/prompting/captions-catalog.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.