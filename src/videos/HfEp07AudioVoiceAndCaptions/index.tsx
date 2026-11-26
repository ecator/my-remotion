import { Audio } from "@remotion/media";
import { zColor } from "@remotion/zod-types";
import React, { useMemo } from "react";
import {
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { HfCaptionBar } from "../../components/hyperframes/HfCaptionBar";
import { HfSeriesShell } from "../../components/hyperframes/HfSeriesShell";
import { HF_COLORS, HfChapterMeta } from "../../components/hyperframes/tokens";
import {
  EP07_SCENE_META,
  ep07_s01_captions,
  ep07_s02_captions,
  ep07_s03_captions,
  ep07_s04_captions,
  ep07_s05_captions,
} from "./captions";
import { Scene01VoiceCascadeAndLibrary } from "./Scene01VoiceCascadeAndLibrary";
import { Scene02FourAudioAttrsAndClocks } from "./Scene02FourAudioAttrsAndClocks";
import { Scene03FxChainWorkletsAndLint } from "./Scene03FxChainWorkletsAndLint";
import { Scene04CutoutCaptionsAndCode } from "./Scene04CutoutCaptionsAndCode";
import { Scene05SpeedRamps } from "./Scene05SpeedRamps";

export const hfEp07Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp07Props = z.infer<typeof hfEp07Schema>;

export const EP07_DEFAULT_PROPS: HfEp07Props = {
  episodeCode: "EP.07",
  episodeTitle: "声音与字幕工程：TTS 配音、10000+ 曲库、自动闪避与 91 款花字",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "TTS 与 10000+ 曲库",
    breadcrumb: "01 / TTS 级联配音、10,000+ 曲库与 19 款音效",
    moduleTag: "[AUDIO PIPELINE]",
    fromFrame: EP07_SCENE_META.s01.fromFrame,
    durationInFrames: EP07_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "四大属性与双时钟",
    breadcrumb: "02 / 四大音频 HTML 属性、双时钟与自动闪避",
    moduleTag: "[HTML DAW MIX]",
    fromFrame: EP07_SCENE_META.s02.fromFrame,
    durationInFrames: EP07_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "效果器与 Worklet 边界",
    breadcrumb: "03 / 16 效果器、22 预设与 WORKLET 边界",
    moduleTag: "[FX & LINT]",
    fromFrame: EP07_SCENE_META.s03.fromFrame,
    durationInFrames: EP07_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "抠像与 91 款花字",
    breadcrumb: "04 / 本地抠像、91 款花字目录与代码动效",
    moduleTag: "[CAPTIONS & CUTOUT]",
    fromFrame: EP07_SCENE_META.s04.fromFrame,
    durationInFrames: EP07_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "Speed Ramps 变速",
    breadcrumb: "05 / SPEED RAMPS：一条 RATE 曲线统一变速",
    moduleTag: "[SPEED RAMPS]",
    fromFrame: EP07_SCENE_META.s05.fromFrame,
    durationInFrames: EP07_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp07AudioVoiceAndCaptions: React.FC<HfEp07Props> = ({
  episodeCode,
  episodeTitle,
  brandColor = HF_COLORS.brandPrimary,
  accentColor = HF_COLORS.accentCyan,
  showSubtitles = true,
  bgmVolume = 0.18,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const currentBgmVolume = useMemo(() => {
    const fadeIn = interpolate(frame, [0, Math.round(0.8 * fps)], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const fadeOut = interpolate(
      frame,
      [durationInFrames - Math.round(1.2 * fps), durationInFrames],
      [1, 0],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      },
    );

    let inGap = false;
    for (const key of Object.keys(EP07_SCENE_META)) {
      const meta = EP07_SCENE_META[key];
      const voiceAbsStart = meta.fromFrame + meta.voiceFromFrame;
      const voiceAbsEnd = voiceAbsStart + meta.voiceDurationInFrames;
      if (
        frame >= meta.fromFrame &&
        frame < meta.fromFrame + meta.durationInFrames
      ) {
        if (frame < voiceAbsStart || frame > voiceAbsEnd) {
          inGap = true;
        }
      }
    }

    const baseLevel = inGap ? Math.min(0.45, bgmVolume * 2.1) : bgmVolume;
    return baseLevel * fadeIn * fadeOut;
  }, [bgmVolume, durationInFrames, fps, frame]);

  const s01 = EP07_SCENE_META.s01;
  const s02 = EP07_SCENE_META.s02;
  const s03 = EP07_SCENE_META.s03;
  const s04 = EP07_SCENE_META.s04;
  const s05 = EP07_SCENE_META.s05;

  return (
    <HfSeriesShell
      episodeCode={episodeCode}
      episodeTitle={episodeTitle}
      chapters={CHAPTER_LIST}
      brandColor={brandColor}
      accentColor={accentColor}
    >
      <Audio
        name="HyperFrames Ambient Tech BGM"
        src={staticFile("shared/bgm/hf_tech_ambient.mp3")}
        loop
        volume={currentBgmVolume}
      />

      <Sequence
        name="Scene 01 · TTS Voice Cascade & Audio Library"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP07 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01VoiceCascadeAndLibrary
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep07_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Four Audio HTML Attrs & Two Clocks"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP07 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02FourAudioAttrsAndClocks voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep07_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · 16 Effects, 22 Presets & Worklet Limits"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP07 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03FxChainWorkletsAndLint voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep07_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Remove Background, 91 Captions & Code"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP07 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04CutoutCaptionsAndCode voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep07_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · Speed Ramps"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP07 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05SpeedRamps voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep07_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
