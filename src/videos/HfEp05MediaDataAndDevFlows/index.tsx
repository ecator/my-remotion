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
  EP05_SCENE_META,
  ep05_s01_captions,
  ep05_s02_captions,
  ep05_s03_captions,
  ep05_s04_captions,
  ep05_s05_captions,
} from "./captions";
import { Scene01CaptionsAndRecuts } from "./Scene01CaptionsAndRecuts";
import { Scene02MusicBeatGrid } from "./Scene02MusicBeatGrid";
import { Scene03DataAndMaps } from "./Scene03DataAndMaps";
import { Scene04GitHubPrToVideo } from "./Scene04GitHubPrToVideo";
import { Scene05SlideshowAndCustom } from "./Scene05SlideshowAndCustom";

export const hfEp05Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp05Props = z.infer<typeof hfEp05Schema>;

export const EP05_DEFAULT_PROPS: HfEp05Props = {
  episodeCode: "EP.05",
  episodeTitle: "万物皆可成片：口播粗剪、音乐卡点、数据地图、PR 视频与幻灯片",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "口播粗剪与字幕",
    breadcrumb: "01 / 口播字幕、智能粗剪与 RAIL / EMBED 法则",
    moduleTag: "[WORKFLOW 06]",
    fromFrame: EP05_SCENE_META.s01.fromFrame,
    durationInFrames: EP05_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "音乐节拍卡点",
    breadcrumb: "02 / 音乐节拍网格卡点与歌词视频",
    moduleTag: "[WORKFLOW 07]",
    fromFrame: EP05_SCENE_META.s02.fromFrame,
    durationInFrames: EP05_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "数据与六大地图",
    breadcrumb: "03 / 数据图表、里程碑滚动与六大动态地图",
    moduleTag: "[WORKFLOW 08]",
    fromFrame: EP05_SCENE_META.s03.fromFrame,
    durationInFrames: EP05_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "GitHub PR 转视频",
    breadcrumb: "04 / GITHUB PR 转视频与三大代码动效块",
    moduleTag: "[WORKFLOW 09]",
    fromFrame: EP05_SCENE_META.s04.fromFrame,
    durationInFrames: EP05_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "/slideshow 与定制流",
    breadcrumb: "05 / /SLIDESHOW 交互演示与定制综合视频",
    moduleTag: "[WORKFLOW 10]",
    fromFrame: EP05_SCENE_META.s05.fromFrame,
    durationInFrames: EP05_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp05MediaDataAndDevFlows: React.FC<HfEp05Props> = ({
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
    for (const key of Object.keys(EP05_SCENE_META)) {
      const meta = EP05_SCENE_META[key];
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

  const s01 = EP05_SCENE_META.s01;
  const s02 = EP05_SCENE_META.s02;
  const s03 = EP05_SCENE_META.s03;
  const s04 = EP05_SCENE_META.s04;
  const s05 = EP05_SCENE_META.s05;

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
        name="Scene 01 · Captions & Recuts"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP05 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01CaptionsAndRecuts
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep05_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Music & Beat Grid"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP05 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02MusicBeatGrid voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep05_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · Data & Maps"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP05 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03DataAndMaps voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep05_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · GitHub PR to Video"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP05 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04GitHubPrToVideo voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep05_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · Slideshow & Custom Video"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP05 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05SlideshowAndCustom voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep05_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
