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
  EP08_SCENE_META,
  ep08_s01_captions,
  ep08_s02_captions,
  ep08_s03_captions,
  ep08_s04_captions,
  ep08_s05_captions,
} from "./captions";
import { Scene01ColorGradingPipeline } from "./Scene01ColorGradingPipeline";
import { Scene02LooksCliAndRetroEffects } from "./Scene02LooksCliAndRetroEffects";
import { Scene03VfxChainAndHtmlInCanvas } from "./Scene03VfxChainAndHtmlInCanvas";
import { Scene04MotionBlurTiersAndLimits } from "./Scene04MotionBlurTiersAndLimits";
import { Scene05ThreeJsAndShaderTransitions } from "./Scene05ThreeJsAndShaderTransitions";

export const hfEp08Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp08Props = z.infer<typeof hfEp08Schema>;

export const EP08_DEFAULT_PROPS: HfEp08Props = {
  episodeCode: "EP.08",
  episodeTitle: "电影感调色与视觉特效：调色管线、data-vfx-chain WebGL2 与 3D",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "八步调色管线",
    breadcrumb: "01 / 固定顺序调色管线、COLOR-GROUP 与 9 个动画变量",
    moduleTag: "[COLOR PIPELINE]",
    fromFrame: EP08_SCENE_META.s01.fromFrame,
    durationInFrames: EP08_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "CLI 与 18 款特效",
    breadcrumb: "02 / MEDIA-TREATMENT、GRADE-COMPARE 与 18 款特效",
    moduleTag: "[LOOKS & RETRO]",
    fromFrame: EP08_SCENE_META.s02.fromFrame,
    durationInFrames: EP08_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "WebGL2 VFX 链",
    breadcrumb: "03 / DATA-VFX-CHAIN WEBGL2 与 HTML-IN-CANVAS",
    moduleTag: "[WEBGL2 VFX]",
    fromFrame: EP08_SCENE_META.s03.fromFrame,
    durationInFrames: EP08_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "真快门运动模糊",
    breadcrumb: "04 / 真快门运动模糊（MOTION BLUR）与冲突边界",
    moduleTag: "[MOTION BLUR]",
    fromFrame: EP08_SCENE_META.s04.fromFrame,
    durationInFrames: EP08_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "Three.js 与 14 转场",
    breadcrumb: "05 / THREE.JS 真 3D 与 14 款 SHADER 转场",
    moduleTag: "[3D & SHADERS]",
    fromFrame: EP08_SCENE_META.s05.fromFrame,
    durationInFrames: EP08_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp08ColorVfxAnd3d: React.FC<HfEp08Props> = ({
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
    for (const key of Object.keys(EP08_SCENE_META)) {
      const meta = EP08_SCENE_META[key];
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

  const s01 = EP08_SCENE_META.s01;
  const s02 = EP08_SCENE_META.s02;
  const s03 = EP08_SCENE_META.s03;
  const s04 = EP08_SCENE_META.s04;
  const s05 = EP08_SCENE_META.s05;

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
        name="Scene 01 · Color Grading Pipeline"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP08 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01ColorGradingPipeline
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep08_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Looks CLI & 18 Effects"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP08 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02LooksCliAndRetroEffects voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep08_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · data-vfx-chain WebGL2 & HTML-in-Canvas"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP08 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03VfxChainAndHtmlInCanvas voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep08_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Motion Blur Tiers & Limits"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP08 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04MotionBlurTiersAndLimits voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep08_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · Three.js 3D & Shader Transitions"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP08 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05ThreeJsAndShaderTransitions voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep08_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
