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
  EP11_SCENE_META,
  ep11_s01_captions,
  ep11_s02_captions,
  ep11_s03_captions,
  ep11_s04_captions,
  ep11_s05_captions,
} from "./captions";
import { Scene01InkwellBenchmark } from "./Scene01InkwellBenchmark";
import { Scene02TitleCardCodeCompare } from "./Scene02TitleCardCodeCompare";
import { Scene03ObjectiveDecisionMatrix } from "./Scene03ObjectiveDecisionMatrix";
import { Scene04MigrationAndHonestRefusal } from "./Scene04MigrationAndHonestRefusal";
import { Scene05LambdaMigrationMap } from "./Scene05LambdaMigrationMap";

export const hfEp11Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp11Props = z.infer<typeof hfEp11Schema>;

export const EP11_DEFAULT_PROPS: HfEp11Props = {
  episodeCode: "EP.11",
  episodeTitle: "巅峰对决与无缝迁移：HyperFrames vs Remotion 源码级对比与转换",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "Inkwell 实测对比",
    breadcrumb: "01 / INKWELL 15 秒发布视频同题零重试实测",
    moduleTag: "[BENCHMARK]",
    fromFrame: EP11_SCENE_META.s01.fromFrame,
    durationInFrames: EP11_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "3 秒标题卡源码",
    breadcrumb: "02 / 同一个 3 秒标题卡源码级并排对比",
    moduleTag: "[CODE DIFF]",
    fromFrame: EP11_SCENE_META.s02.fromFrame,
    durationInFrames: EP11_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "客观选型矩阵",
    breadcrumb: "03 / 客观选型决策矩阵（REACT VS APACHE 2.0）",
    moduleTag: "[DECISION]",
    fromFrame: EP11_SCENE_META.s03.fromFrame,
    durationInFrames: EP11_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "迁移与诚实拒绝",
    breadcrumb: "04 / REMOTION-TO-HYPERFRAMES、SSIM 验收与诚实拒绝",
    moduleTag: "[MIGRATION]",
    fromFrame: EP11_SCENE_META.s04.fromFrame,
    durationInFrames: EP11_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "Lambda 迁移映射",
    breadcrumb: "05 / AWS LAMBDA 渲染迁移、错误码与客观限制",
    moduleTag: "[LAMBDA MAP]",
    fromFrame: EP11_SCENE_META.s05.fromFrame,
    durationInFrames: EP11_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp11VsRemotionAndMigration: React.FC<HfEp11Props> = ({
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
    for (const key of Object.keys(EP11_SCENE_META)) {
      const meta = EP11_SCENE_META[key];
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

  const s01 = EP11_SCENE_META.s01;
  const s02 = EP11_SCENE_META.s02;
  const s03 = EP11_SCENE_META.s03;
  const s04 = EP11_SCENE_META.s04;
  const s05 = EP11_SCENE_META.s05;

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
        name="Scene 01 · Inkwell 15s Benchmark"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP11 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01InkwellBenchmark
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep11_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Title Card Code Compare"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP11 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02TitleCardCodeCompare voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep11_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · Objective Decision Matrix"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP11 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03ObjectiveDecisionMatrix voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep11_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Migration & Honest Refusal"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP11 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04MigrationAndHonestRefusal voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep11_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · Lambda Migration Map"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP11 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05LambdaMigrationMap voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep11_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
