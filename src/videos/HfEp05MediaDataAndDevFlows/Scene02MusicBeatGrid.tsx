import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { HfTimelineMock } from "../../components/hyperframes/HfTimelineMock";
import { HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene02Props {
  voiceFromFrame: number;
}

export const Scene02MusicBeatGrid: React.FC<Scene02Props> = ({
  voiceFromFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;
  const enterProgress = interpolate(frame, [0, Math.round(0.6 * fps)], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* Top: Beat Grid Timeline Mock */}
      <HfTimelineMock
        title="MUSIC & LYRIC VIDEO · BEAT GRID ANALYSIS"
        totalDurationSec={20}
        tickStepSec={5}
        trackHeaderWidth={250}
        voiceMs={voiceMs}
        playheadRange={{
          voiceMsRange: [0, 56000],
          startSec: 1.0,
          endSec: 18.8,
        }}
        toolbarBadges={[
          "hyperframes beats",
          "hyperframes audio",
          "124 BPM · Onsets",
        ]}
        markers={[
          { sec: 2.0, label: "Bar 1", color: HF_COLORS.brandNeon },
          { sec: 6.5, label: "Drop", color: HF_COLORS.accentYellow },
          { sec: 12.5, label: "Hook", color: HF_COLORS.accentPurple },
          { sec: 17.5, label: "Outro", color: HF_COLORS.accentSky },
        ]}
        seekExpression='pick "the best 20 seconds" → cuts snap to real musical anchors'
        tracks={[
          {
            id: "t-shots",
            trackIndex: 0,
            label: "Photo / Lyric Cuts",
            kind: "video",
            clips: [
              { id: "sh1", label: "shot_01 (punch-in)", startSec: 0, durationSec: 6.5, attrTag: "Bar 1–4" },
              { id: "sh2", label: "shot_02 (whip-pan)", startSec: 6.5, durationSec: 6.0, attrTag: "Drop", activeWindow: [12000, 32000] },
              { id: "sh3", label: "SUMMER '26", startSec: 12.5, durationSec: 7.5, attrTag: "Hook" },
            ],
          },
          {
            id: "t-track",
            trackIndex: 1,
            label: "track.mp3",
            kind: "audio",
            clips: [
              { id: "trk", label: "best 20s musical phrase", startSec: 0, durationSec: 20, showWaveform: true, attrTag: "No TTS" },
            ],
          },
        ]}
      />

      {/* Bottom Split Compare: Hard Timestamps vs Musical Anchors + Calm Flow */}
      <HfSplitCompare
        voiceMs={voiceMs}
        style={{ flex: 1 }}
        left={{
          badge: "✗ AVOID · 破坏乐句",
          meta: "HARD TIMESTAMPS",
          title: "硬写死时间戳 + 对环境乐机械硬切",
          subtitle: "无视真实音乐结构会导致切点生硬突兀",
          tone: "danger",
          activeWindow: [24000, 34500],
          items: [
            {
              title: "手写绝对窗口：use 0:32 to 0:52",
              description: "极易拦腰截断主歌或副歌乐句，与分析出的节拍网格打架",
            },
            {
              title: "舒缓环境乐也按每拍硬切",
              description: "无鼓点音乐的节拍线仅是节拍器估算，机械硬切显得躁动割裂",
            },
          ],
        }}
        right={{
          badge: "✓ INSTEAD · 音乐驱动剪辑",
          meta: "HYPERFRAMES BEATS & AUDIO",
          title: "描述选段意图 + 匹配曲风节奏",
          subtitle: "让分析器自动贴合真实重拍与能量起伏",
          tone: "emerald",
          activeWindow: [34500, 58000],
          items: [
            {
              title: "写 “pick the best 20 seconds” 或 “verse into hook”",
              description: "搭配 one photo per bar / punch-in on downbeats / whip-pan on phrase changes",
            },
            {
              title: "舒缓/环境乐显式要求 “let it flow, no hard cuts”",
              description: "按乐句与能量曲线平滑推进；无素材时纯动态歌词排版即可成片",
            },
          ],
        }}
      />
    </div>
  );
};
