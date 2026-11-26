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
  EP12_SCENE_META,
  ep12_s01_captions,
  ep12_s02_captions,
  ep12_s03_captions,
  ep12_s04_captions,
  ep12_s05_captions,
} from "./captions";
import { Scene01SmallestSurfaceStack } from "./Scene01SmallestSurfaceStack";
import { Scene02HeadlessSdkAndGuards } from "./Scene02HeadlessSdkAndGuards";
import { Scene03PlayerAndHitTesting } from "./Scene03PlayerAndHitTesting";
import { Scene04CloudLambdaCloudRun } from "./Scene04CloudLambdaCloudRun";
import { Scene05ProRenderSearchAndFinale } from "./Scene05ProRenderSearchAndFinale";

export const hfEp12Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp12Props = z.infer<typeof hfEp12Schema>;

export const EP12_DEFAULT_PROPS: HfEp12Props = {
  episodeCode: "EP.12",
  episodeTitle: "企业级集成与分布式渲染：Headless SDK、Player 与 Lambda/Cloud Run",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "最小集成表面栈",
    breadcrumb: "01 / 最小集成表面法则与 13 包架构栈",
    moduleTag: "[13 PACKAGES]",
    fromFrame: EP12_SCENE_META.s01.fromFrame,
    durationInFrames: EP12_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "Headless SDK",
    breadcrumb: "02 / @HYPERFRAMES/SDK 源码编辑、OVERRIDESET 与防环铁律",
    moduleTag: "[HEADLESS SDK]",
    fromFrame: EP12_SCENE_META.s02.fromFrame,
    durationInFrames: EP12_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "Player 与精准命中",
    breadcrumb: "03 / <HYPERFRAMES-PLAYER> SHADOW DOM 与精准命中交互",
    moduleTag: "[WEB PLAYER]",
    fromFrame: EP12_SCENE_META.s03.fromFrame,
    durationInFrames: EP12_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "云端集群部署",
    breadcrumb: "04 / HEYGEN CLOUD、AWS LAMBDA PLAN V2 与 GCP CLOUD RUN",
    moduleTag: "[CLOUD DEPLOY]",
    fromFrame: EP12_SCENE_META.s04.fromFrame,
    durationInFrames: EP12_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "4K HDR 与收官",
    breadcrumb: "05 / 4K、10-BIT HDR、4:4:4、语义搜索与 12 集收官",
    moduleTag: "[FINALE]",
    fromFrame: EP12_SCENE_META.s05.fromFrame,
    durationInFrames: EP12_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp12SdkPlayerAndCloudDeploy: React.FC<HfEp12Props> = ({
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
    for (const key of Object.keys(EP12_SCENE_META)) {
      const meta = EP12_SCENE_META[key];
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

  const s01 = EP12_SCENE_META.s01;
  const s02 = EP12_SCENE_META.s02;
  const s03 = EP12_SCENE_META.s03;
  const s04 = EP12_SCENE_META.s04;
  const s05 = EP12_SCENE_META.s05;

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
        name="Scene 01 · Smallest Integration Surface Stack"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP12 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01SmallestSurfaceStack
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep12_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Headless SDK & Guards"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP12 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02HeadlessSdkAndGuards voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep12_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · Player & Hit Testing"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP12 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03PlayerAndHitTesting voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep12_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Cloud, Lambda & Cloud Run"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP12 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04CloudLambdaCloudRun voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep12_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · 4K HDR, Catalog Search & Finale"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP12 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05ProRenderSearchAndFinale voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep12_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
