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
  EP06_SCENE_META,
  ep06_s01_captions,
  ep06_s02_captions,
  ep06_s03_captions,
  ep06_s04_captions,
  ep06_s05_captions,
} from "./captions";
import { Scene01PromptSkeletonAndDial } from "./Scene01PromptSkeletonAndDial";
import { Scene02SevenMotionLaws } from "./Scene02SevenMotionLaws";
import { Scene03StopMotionTransitionsEase } from "./Scene03StopMotionTransitionsEase";
import { Scene04ConvergentIterationAndNle } from "./Scene04ConvergentIterationAndNle";
import { Scene05CapstoneTimelineFilm } from "./Scene05CapstoneTimelineFilm";

export const hfEp06Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp06Props = z.infer<typeof hfEp06Schema>;

export const EP06_DEFAULT_PROPS: HfEp06Props = {
  episodeCode: "EP.06",
  episodeTitle: "像导演一样写 Prompt：六段式提示词骨架与七大丝滑运动法则",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "六段骨架与五槽位",
    breadcrumb: "01 / 六段式提示词骨架、五槽位与三档规格旋钮",
    moduleTag: "[PROMPT ANATOMY]",
    fromFrame: EP06_SCENE_META.s01.fromFrame,
    durationInFrames: EP06_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "七大丝滑运动法则",
    breadcrumb: "02 / 七大丝滑运动黄金法则：告别廉价 PPT",
    moduleTag: "[7 MOTION LAWS]",
    fromFrame: EP06_SCENE_META.s02.fromFrame,
    durationInFrames: EP06_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "定格、转场与缓动",
    breadcrumb: "03 / 确定性定格动画、动机转场与六大缓动词",
    moduleTag: "[EASE & SEAMS]",
    fromFrame: EP06_SCENE_META.s03.fromFrame,
    durationInFrames: EP06_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "收敛迭代与 NLE 动词",
    breadcrumb: "04 / 收敛式迭代心法与六大 NLE 动词映射",
    moduleTag: "[ITERATION & NLE]",
    fromFrame: EP06_SCENE_META.s04.fromFrame,
    durationInFrames: EP06_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "62s 大片全景解剖",
    breadcrumb: "05 / 62 秒一镜到底 CAPSTONE《THE TIMELINE》",
    moduleTag: "[CAPSTONE 62S]",
    fromFrame: EP06_SCENE_META.s05.fromFrame,
    durationInFrames: EP06_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp06PromptAnatomyAndMotion: React.FC<HfEp06Props> = ({
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
    for (const key of Object.keys(EP06_SCENE_META)) {
      const meta = EP06_SCENE_META[key];
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

  const s01 = EP06_SCENE_META.s01;
  const s02 = EP06_SCENE_META.s02;
  const s03 = EP06_SCENE_META.s03;
  const s04 = EP06_SCENE_META.s04;
  const s05 = EP06_SCENE_META.s05;

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
        name="Scene 01 · Prompt Skeleton & Spec Dial"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP06 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01PromptSkeletonAndDial
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep06_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Seven Motion Laws"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP06 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02SevenMotionLaws voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep06_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · Stop-Motion, Transitions & Ease Words"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP06 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03StopMotionTransitionsEase voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep06_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Convergent Iteration & NLE Verbs"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP06 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04ConvergentIterationAndNle voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep06_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · 62s Capstone The Timeline"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP06 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05CapstoneTimelineFilm voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep06_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
