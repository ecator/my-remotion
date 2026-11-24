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
  EP01_SCENE_META,
  ep01_s01_captions,
  ep01_s02_captions,
  ep01_s03_captions,
  ep01_s04_captions,
  ep01_s05_captions,
} from "./captions";
import { Scene01IntroParadigm } from "./Scene01IntroParadigm";
import { Scene02SingleSource } from "./Scene02SingleSource";
import { Scene03ZeroCodePaths } from "./Scene03ZeroCodePaths";
import { Scene04AgentAndCliFlow } from "./Scene04AgentAndCliFlow";
import { Scene05FreeBoundaryAndRoadmap } from "./Scene05FreeBoundaryAndRoadmap";

export const hfEp01Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp01Props = z.infer<typeof hfEp01Schema>;

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "什么是 HyperFrames",
    breadcrumb: "01 / 什么是 HYPERFRAMES 与三大核心基因",
    moduleTag: "[CORE PARADIGM]",
    fromFrame: EP01_SCENE_META.s01.fromFrame,
    durationInFrames: EP01_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "单一事实来源",
    breadcrumb: "02 / 单一事实来源 (SOURCE IS THE PROJECT)",
    moduleTag: "[ARCHITECTURE]",
    fromFrame: EP01_SCENE_META.s02.fromFrame,
    durationInFrames: EP01_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "Studio 与 AI Chat",
    breadcrumb: "03 / 零代码起步：STUDIO 桌面端与 AI CHAT MCP",
    moduleTag: "[QUICKSTART I]",
    fromFrame: EP01_SCENE_META.s03.fromFrame,
    durationInFrames: EP01_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "Coding Agent + CLI",
    breadcrumb: "04 / 开发者主力路径：CODING AGENT + SKILLS + CLI",
    moduleTag: "[QUICKSTART II]",
    fromFrame: EP01_SCENE_META.s04.fromFrame,
    durationInFrames: EP01_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "免费边界与 12 集路线图",
    breadcrumb: "05 / 免费开源边界与全系列 12 集路线图",
    moduleTag: "[ECOSYSTEM & ROADMAP]",
    fromFrame: EP01_SCENE_META.s05.fromFrame,
    durationInFrames: EP01_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp01IntroAndQuickstart: React.FC<HfEp01Props> = ({
  episodeCode,
  episodeTitle,
  brandColor = HF_COLORS.brandPrimary,
  accentColor = HF_COLORS.accentCyan,
  showSubtitles = true,
  bgmVolume = 0.18,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Compute BGM ducking envelope: higher during scene transitions, ducked during voiceover
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

    // Check if any scene is currently in its lead-in or tail-out transition gap
    let inGap = false;
    for (const key of Object.keys(EP01_SCENE_META)) {
      const meta = EP01_SCENE_META[key];
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

  const s01 = EP01_SCENE_META.s01;
  const s02 = EP01_SCENE_META.s02;
  const s03 = EP01_SCENE_META.s03;
  const s04 = EP01_SCENE_META.s04;
  const s05 = EP01_SCENE_META.s05;

  return (
    <HfSeriesShell
      episodeCode={episodeCode}
      episodeTitle={episodeTitle}
      chapters={CHAPTER_LIST}
      brandColor={brandColor}
      accentColor={accentColor}
    >
      {/* Looping Ambient Tech BGM with automatic voiceover ducking */}
      <Audio
        name="HyperFrames Ambient Tech BGM"
        src={staticFile("shared/bgm/hf_tech_ambient.mp3")}
        loop
        volume={currentBgmVolume}
      />

      {/* SCENE 01: What is HyperFrames & Three Core Pillars */}
      <Sequence
        name="Scene 01 · What is HyperFrames"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01IntroParadigm
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep01_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
          />
        )}
      </Sequence>

      {/* SCENE 02: Single Source of Truth & HTML Contract */}
      <Sequence
        name="Scene 02 · Single Source of Truth"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02SingleSource voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep01_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
          />
        )}
      </Sequence>

      {/* SCENE 03: Studio Desktop App & AI Chat MCP */}
      <Sequence
        name="Scene 03 · Studio App & AI Chat MCP"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03ZeroCodePaths voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep01_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
          />
        )}
      </Sequence>

      {/* SCENE 04: Coding Agent + Skills + CLI */}
      <Sequence
        name="Scene 04 · Coding Agent & CLI"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04AgentAndCliFlow voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep01_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
          />
        )}
      </Sequence>

      {/* SCENE 05: Free Boundary & 12-Episode Roadmap */}
      <Sequence
        name="Scene 05 · Free Boundary & 12-Episode Roadmap"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05FreeBoundaryAndRoadmap voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep01_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
