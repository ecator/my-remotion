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
  EP03_SCENE_META,
  ep03_s01_captions,
  ep03_s02_captions,
  ep03_s03_captions,
  ep03_s04_captions,
  ep03_s05_captions,
} from "./captions";
import { Scene01EditorOverviewAndCmdK } from "./Scene01EditorOverviewAndCmdK";
import { Scene02CanvasKeyframesAndGesture } from "./Scene02CanvasKeyframesAndGesture";
import { Scene03NleTimelineAndShortcuts } from "./Scene03NleTimelineAndShortcuts";
import { Scene04AudioRackOverridesAndExport } from "./Scene04AudioRackOverridesAndExport";
import { Scene05WebMcpAgentStudio } from "./Scene05WebMcpAgentStudio";

export const hfEp03Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp03Props = z.infer<typeof hfEp03Schema>;

export const EP03_DEFAULT_PROPS: HfEp03Props = {
  episodeCode: "EP.03",
  episodeTitle: "源码级可视化剪辑：Browser Editor 浏览器编辑器与时间轴精修",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "四栏布局与 ⌘K",
    breadcrumb: "01 / 启动架构、四栏布局与 ⌘K 人机协作",
    moduleTag: "[BROWSER EDITOR]",
    fromFrame: EP03_SCENE_META.s01.fromFrame,
    durationInFrames: EP03_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "画布与关键帧录制",
    breadcrumb: "02 / 画布操纵、LAYERS 遮挡与关键帧手势录制",
    moduleTag: "[CANVAS & MOTION]",
    fromFrame: EP03_SCENE_META.s02.fromFrame,
    durationInFrames: EP03_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "NLE 时间轴与快捷键",
    breadcrumb: "03 / 专业非线性时间轴（NLE）与修剪源码补偿",
    moduleTag: "[NLE TIMELINE]",
    fromFrame: EP03_SCENE_META.s03.fromFrame,
    durationInFrames: EP03_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "混音、变量与导出",
    breadcrumb: "04 / 混音机架、花字覆盖、变量交付与导出",
    moduleTag: "[MIX & DELIVER]",
    fromFrame: EP03_SCENE_META.s04.fromFrame,
    durationInFrames: EP03_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "WebMCP 协议",
    breadcrumb: "05 / WEBMCP：让浏览器内 AGENT 驱动 STUDIO",
    moduleTag: "[WEBMCP PROTOCOL]",
    fromFrame: EP03_SCENE_META.s05.fromFrame,
    durationInFrames: EP03_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp03BrowserEditorNle: React.FC<HfEp03Props> = ({
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
    for (const key of Object.keys(EP03_SCENE_META)) {
      const meta = EP03_SCENE_META[key];
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

  const s01 = EP03_SCENE_META.s01;
  const s02 = EP03_SCENE_META.s02;
  const s03 = EP03_SCENE_META.s03;
  const s04 = EP03_SCENE_META.s04;
  const s05 = EP03_SCENE_META.s05;

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
        name="Scene 01 · Browser Editor Overview & Cmd+K"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP03 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01EditorOverviewAndCmdK
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep03_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Canvas, Layers, Keyframes & Gesture"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP03 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02CanvasKeyframesAndGesture voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep03_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · NLE Timeline & Trim Compensation"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP03 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03NleTimelineAndShortcuts voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep03_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Audio FX, Overrides, Variables & Export"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP03 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04AudioRackOverridesAndExport voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep03_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · WebMCP Agent-Driven Studio"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP03 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05WebMcpAgentStudio voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep03_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
