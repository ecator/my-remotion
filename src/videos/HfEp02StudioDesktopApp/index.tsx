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
  EP02_SCENE_META,
  ep02_s01_captions,
  ep02_s02_captions,
  ep02_s03_captions,
  ep02_s04_captions,
  ep02_s05_captions,
} from "./captions";
import { Scene01HomeAndAgents } from "./Scene01HomeAndAgents";
import { Scene02ChatShortcutsAndTools } from "./Scene02ChatShortcutsAndTools";
import { Scene03ScriptAndCanvasEdit } from "./Scene03ScriptAndCanvasEdit";
import { Scene04BrandKitVideo1AndRef } from "./Scene04BrandKitVideo1AndRef";
import { Scene05HandoffExportAndShare } from "./Scene05HandoffExportAndShare";

export const hfEp02Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp02Props = z.infer<typeof hfEp02Schema>;

export const EP02_DEFAULT_PROPS: HfEp02Props = {
  episodeCode: "EP.02",
  episodeTitle: "零代码 AI 视频工作站：HyperFrames Studio 桌面端全攻略",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "工作区与六大 Agent",
    breadcrumb: "01 / 工作区全景、三大入口与六大本地 AGENT",
    moduleTag: "[STUDIO HOME]",
    fromFrame: EP02_SCENE_META.s01.fromFrame,
    durationInFrames: EP02_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "@ / # / 快捷键",
    breadcrumb: "02 / 聊天框三把钥匙：@、#、/ 与运行调度",
    moduleTag: "[CHAT COMMANDS]",
    fromFrame: EP02_SCENE_META.s02.fromFrame,
    durationInFrames: EP02_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "Script 与画布批注",
    breadcrumb: "03 / SCRIPT 文档式剪辑与画布涂鸦批注",
    moduleTag: "[VISUAL EDITING]",
    fromFrame: EP02_SCENE_META.s03.fromFrame,
    durationInFrames: EP02_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "品牌、Video 1 与复刻",
    breadcrumb: "04 / BRAND KIT、VIDEO 1 与 REFERENCE 复刻",
    moduleTag: "[PRO MODULES]",
    fromFrame: EP02_SCENE_META.s04.fromFrame,
    durationInFrames: EP02_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "接力、导出与审阅",
    breadcrumb: "05 / 终端双向接力、双引擎导出与审阅闭环",
    moduleTag: "[DELIVERY LOOP]",
    fromFrame: EP02_SCENE_META.s05.fromFrame,
    durationInFrames: EP02_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp02StudioDesktopApp: React.FC<HfEp02Props> = ({
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
    for (const key of Object.keys(EP02_SCENE_META)) {
      const meta = EP02_SCENE_META[key];
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

  const s01 = EP02_SCENE_META.s01;
  const s02 = EP02_SCENE_META.s02;
  const s03 = EP02_SCENE_META.s03;
  const s04 = EP02_SCENE_META.s04;
  const s05 = EP02_SCENE_META.s05;

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
        name="Scene 01 · Studio Home & Local Agents"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP02 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01HomeAndAgents
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep02_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · Chat Shortcuts @ # /"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP02 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02ChatShortcutsAndTools voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep02_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · Script Doc Editing & Canvas Tools"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP02 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03ScriptAndCanvasEdit voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep02_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · Brand Kits, Video 1 & Reference"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP02 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04BrandKitVideo1AndRef voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep02_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · CLI Handoff, Export & Share"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP02 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05HandoffExportAndShare voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep02_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
