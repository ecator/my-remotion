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
  EP10_SCENE_META,
  ep10_s01_captions,
  ep10_s02_captions,
  ep10_s03_captions,
  ep10_s04_captions,
  ep10_s05_captions,
} from "./captions";
import { Scene01VariablesSchemaAndTypes } from "./Scene01VariablesSchemaAndTypes";
import { Scene02RoleAndPortraysSlots } from "./Scene02RoleAndPortraysSlots";
import { Scene03DeclarativeVsScriptBindings } from "./Scene03DeclarativeVsScriptBindings";
import { Scene04CliBatchAndLambdaJsonl } from "./Scene04CliBatchAndLambdaJsonl";
import { Scene05PrecedenceAndImmutables } from "./Scene05PrecedenceAndImmutables";

export const hfEp10Schema = z.object({
  episodeCode: z.string(),
  episodeTitle: z.string(),
  brandColor: zColor(),
  accentColor: zColor(),
  showSubtitles: z.boolean(),
  bgmVolume: z.number().min(0).max(1),
});

export type HfEp10Props = z.infer<typeof hfEp10Schema>;

export const EP10_DEFAULT_PROPS: HfEp10Props = {
  episodeCode: "EP.10",
  episodeTitle: "参数化视频模板：data-composition-variables、语义槽位与批量渲染",
  brandColor: HF_COLORS.brandPrimary,
  accentColor: HF_COLORS.accentCyan,
  showSubtitles: true,
  bgmVolume: 0.18,
};

const CHAPTER_LIST: HfChapterMeta[] = [
  {
    index: 1,
    shortTitle: "七大数据类型",
    breadcrumb: "01 / DATA-COMPOSITION-VARIABLES 与七大数据类型",
    moduleTag: "[SCHEMA & TYPES]",
    fromFrame: EP10_SCENE_META.s01.fromFrame,
    durationInFrames: EP10_SCENE_META.s01.durationInFrames,
  },
  {
    index: 2,
    shortTitle: "八大语义槽位",
    breadcrumb: "02 / ROLE 与 8 大 PORTRAYS 语义槽位",
    moduleTag: "[PORTRAYS SLOTS]",
    fromFrame: EP10_SCENE_META.s02.fromFrame,
    durationInFrames: EP10_SCENE_META.s02.durationInFrames,
  },
  {
    index: 3,
    shortTitle: "免脚本与脚本绑定",
    breadcrumb: "03 / 免脚本三件套 VS GETVARIABLES() 与父子传参",
    moduleTag: "[BINDINGS]",
    fromFrame: EP10_SCENE_META.s03.fromFrame,
    durationInFrames: EP10_SCENE_META.s03.durationInFrames,
  },
  {
    index: 4,
    shortTitle: "批处理与 JSONL",
    breadcrumb: "04 / CLI 覆盖、--BATCH 沙箱与 LAMBDA JSONL",
    moduleTag: "[BATCH & LAMBDA]",
    fromFrame: EP10_SCENE_META.s04.fromFrame,
    durationInFrames: EP10_SCENE_META.s04.durationInFrames,
  },
  {
    index: 5,
    shortTitle: "优先级与不可变量",
    breadcrumb: "05 / :ROOT 优先级陷阱、差分换肤与四大不可变量",
    moduleTag: "[IMMUTABLES]",
    fromFrame: EP10_SCENE_META.s05.fromFrame,
    durationInFrames: EP10_SCENE_META.s05.durationInFrames,
  },
];

export const HfEp10VariablesAndBatchTemplates: React.FC<HfEp10Props> = ({
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
    for (const key of Object.keys(EP10_SCENE_META)) {
      const meta = EP10_SCENE_META[key];
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

  const s01 = EP10_SCENE_META.s01;
  const s02 = EP10_SCENE_META.s02;
  const s03 = EP10_SCENE_META.s03;
  const s04 = EP10_SCENE_META.s04;
  const s05 = EP10_SCENE_META.s05;

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
        name="Scene 01 · Variables Schema & 7 Types"
        from={s01.fromFrame}
        durationInFrames={s01.durationInFrames}
      >
        <Audio
          name="EP10 S01 Voiceover"
          from={s01.voiceFromFrame}
          src={staticFile(s01.audioFile)}
          volume={1}
        />
        <Scene01VariablesSchemaAndTypes
          voiceFromFrame={s01.voiceFromFrame}
          brandColor={brandColor}
          accentColor={accentColor}
        />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep10_s01_captions}
            voiceStartFrame={s01.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 02 · role & 8 portrays Slots"
        from={s02.fromFrame}
        durationInFrames={s02.durationInFrames}
      >
        <Audio
          name="EP10 S02 Voiceover"
          from={s02.voiceFromFrame}
          src={staticFile(s02.audioFile)}
          volume={1}
        />
        <Scene02RoleAndPortraysSlots voiceFromFrame={s02.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep10_s02_captions}
            voiceStartFrame={s02.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 03 · Declarative vs Script Bindings"
        from={s03.fromFrame}
        durationInFrames={s03.durationInFrames}
      >
        <Audio
          name="EP10 S03 Voiceover"
          from={s03.voiceFromFrame}
          src={staticFile(s03.audioFile)}
          volume={1}
        />
        <Scene03DeclarativeVsScriptBindings voiceFromFrame={s03.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep10_s03_captions}
            voiceStartFrame={s03.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 04 · CLI Batch & Lambda JSONL"
        from={s04.fromFrame}
        durationInFrames={s04.durationInFrames}
      >
        <Audio
          name="EP10 S04 Voiceover"
          from={s04.voiceFromFrame}
          src={staticFile(s04.audioFile)}
          volume={1}
        />
        <Scene04CliBatchAndLambdaJsonl voiceFromFrame={s04.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep10_s04_captions}
            voiceStartFrame={s04.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>

      <Sequence
        name="Scene 05 · :root Precedence & 4 Immutables"
        from={s05.fromFrame}
        durationInFrames={s05.durationInFrames}
      >
        <Audio
          name="EP10 S05 Voiceover"
          from={s05.voiceFromFrame}
          src={staticFile(s05.audioFile)}
          volume={1}
        />
        <Scene05PrecedenceAndImmutables voiceFromFrame={s05.voiceFromFrame} />
        {showSubtitles && (
          <HfCaptionBar
            captions={ep10_s05_captions}
            voiceStartFrame={s05.voiceFromFrame}
            brandColor={brandColor}
            accentColor={accentColor}
          />
        )}
      </Sequence>
    </HfSeriesShell>
  );
};
