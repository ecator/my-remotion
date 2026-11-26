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
  EP04_SCENE_META,
  ep04_s01_captions,
  ep04_s02_captions,
  ep04_s03_captions,
  ep04_s04_captions,
  ep04_s05_captions,
} from "./captions";
import { Scene01RouterAndProductLaunch } from "./Scene01RouterAndProductLaunch";
import { Scene02FacelessExplainer } from "./Scene02FacelessExplainer";
import { Scene03MotionGraphicsAlpha } from "./Scene03MotionGraphicsAlpha";
import { Scene04DesignToolsAndFigma } from "./Scene04DesignToolsAndFigma";
import { Scene05AvatarAndFrameMd } from "./Scene05AvatarAndFrameMd";

export const hfEp04Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp04Props = z.infer<typeof hfEp04Schema>;

export const EP04_DEFAULT_PROPS: HfEp04Props = {
  episodeCode: "EP.04",
  episodeTitle: "从网页与文稿到成片：产品发布、科普解说与设计稿导入工作流",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "路由与产品发布",
    breadcrumb: "01 / 工作流路由与 PRODUCT LAUNCH 发布大片",
    moduleTag: "[WORKFLOW 01]",
    fromFrame: EP04_SCENE_META.s01.fromFrame,
    durationInFrames: EP04_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "无真人科普解说",
    breadcrumb: "02 / FACELESS EXPLAINER 无真人科普解说",
    moduleTag: "[WORKFLOW 02]",
    fromFrame: EP04_SCENE_META.s02.fromFrame,
    durationInFrames: EP04_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "动态图形与透明层",
    breadcrumb: "03 / MOTION GRAPHICS 动态图形与透明通道",
    moduleTag: "[WORKFLOW 03]",
    fromFrame: EP04_SCENE_META.s03.fromFrame,
    durationInFrames: EP04_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "Figma 深度集成",
    breadcrumb: "04 / DESIGN TOOLS 与 FIGMA CLI 深度集成",
    moduleTag: "[WORKFLOW 04]",
    fromFrame: EP04_SCENE_META.s04.fromFrame,
    durationInFrames: EP04_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "数字人与 frame.md",
    breadcrumb: "05 / AI AVATAR 数字人主讲与 FRAME.MD 品牌真理",
    moduleTag: "[WORKFLOW 05]",
    fromFrame: EP04_SCENE_META.s05.fromFrame,
    durationInFrames: EP04_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp04BrandAndExplainerFlows: React.FC<HfEp04Props> = ({
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
    for (const key of Object.keys(EP04_SCENE_META)) {
      const meta = EP04_SCENE_META[key];
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

  const s01 = EP04_SCENE_META.s01;
  const s02 = EP04_SCENE_META.s02;
  const s03 = EP04_SCENE_META.s03;
  const s04 = EP04_SCENE_META.s04;
  const s05 = EP04_SCENE_META.s05;

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
        name="Scene 01 · Workflow Router & Product Launch"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP04 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01RouterAndProductLaunch
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep04_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Faceless Explainer"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP04 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02FacelessExplainer voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep04_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · Motion Graphics & Alpha Overlay"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP04 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03MotionGraphicsAlpha voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep04_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Design Tools & Figma Integration"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP04 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04DesignToolsAndFigma voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep04_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · Avatar Presenter & frame.md"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP04 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05AvatarAndFrameMd voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep04_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
