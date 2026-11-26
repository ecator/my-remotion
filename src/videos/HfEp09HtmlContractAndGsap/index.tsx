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
  EP09_SCENE_META,
  ep09_s01_captions,
  ep09_s02_captions,
  ep09_s03_captions,
  ep09_s04_captions,
  ep09_s05_captions,
} from "./captions";
import { Scene01HtmlSchemaAndSubcomps } from "./Scene01HtmlSchemaAndSubcomps";
import { Scene02DataAttrsAndLayerTraps } from "./Scene02DataAttrsAndLayerTraps";
import { Scene03GsapAndFrameAdapters } from "./Scene03GsapAndFrameAdapters";
import { Scene04ThreeDeterminismLaws } from "./Scene04ThreeDeterminismLaws";
import { Scene05QualityGatesTrio } from "./Scene05QualityGatesTrio";

export const hfEp09Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp09Props = z.infer<typeof hfEp09Schema>;

export const EP09_DEFAULT_PROPS: HfEp09Props = {
  episodeCode: "EP.09",
  episodeTitle: "解剖 HyperFrames 工程：HTML Schema、时间属性与确定性寻址渲染",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "HTML Schema 契约",
    breadcrumb: "01 / ROOT HTML SCHEMA、45S 超时坑与嵌套子组合",
    moduleTag: "[HTML CONTRACT]",
    fromFrame: EP09_SCENE_META.s01.fromFrame,
    durationInFrames: EP09_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "时间属性与陷阱",
    breadcrumb: "02 / DATA-* 时间属性、图层遮挡与自闭合解析惨案",
    moduleTag: "[DATA-* TRAPS]",
    fromFrame: EP09_SCENE_META.s02.fromFrame,
    durationInFrames: EP09_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "GSAP 与适配器",
    breadcrumb: "03 / 暂停 GSAP 寻址与 FRAME ADAPTERS",
    moduleTag: "[GSAP & ADAPTERS]",
    fromFrame: EP09_SCENE_META.s03.fromFrame,
    durationInFrames: EP09_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "确定性三大禁令",
    breadcrumb: "04 / 确定性寻址渲染三大禁令",
    moduleTag: "[DETERMINISM]",
    fromFrame: EP09_SCENE_META.s04.fromFrame,
    durationInFrames: EP09_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "质量保障三剑客",
    breadcrumb: "05 / DOCTOR、@HYPERFRAMES/LINT 与 CHECK 8FPS 门禁",
    moduleTag: "[QUALITY GATES]",
    fromFrame: EP09_SCENE_META.s05.fromFrame,
    durationInFrames: EP09_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp09HtmlContractAndGsap: React.FC<HfEp09Props> = ({
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
    for (const key of Object.keys(EP09_SCENE_META)) {
      const meta = EP09_SCENE_META[key];
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

  const s01 = EP09_SCENE_META.s01;
  const s02 = EP09_SCENE_META.s02;
  const s03 = EP09_SCENE_META.s03;
  const s04 = EP09_SCENE_META.s04;
  const s05 = EP09_SCENE_META.s05;

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
        name="Scene 01 · HTML Schema & Sub-Compositions"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP09 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01HtmlSchemaAndSubcomps
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep09_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · data-* Attributes & Layer Traps"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP09 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02DataAttrsAndLayerTraps voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep09_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · Paused GSAP & Frame Adapters"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP09 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03GsapAndFrameAdapters voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep09_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Three Determinism Laws"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP09 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04ThreeDeterminismLaws voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep09_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · Quality Gates Trio"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP09 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05QualityGatesTrio voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep09_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
