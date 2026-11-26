import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfTimelineMock } from "../../components/hyperframes/HfTimelineMock";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene03Props {
  voiceFromFrame: number;
}

export const Scene03NleTimelineAndShortcuts: React.FC<Scene03Props> = ({
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

  const playbackActive = voiceMs >= 6500 && voiceMs < 19500;
  const razorSplitActive = voiceMs >= 19500 && voiceMs < 36500;
  const toolbarActive = voiceMs >= 36500 && voiceMs < 50000;
  const trimAttrActive = voiceMs >= 50000;

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
      {/* Top: Interactive Multi-Track NLE Timeline Mock */}
      <HfTimelineMock
        title="BROWSER EDITOR · VIRTUALIZED NLE TIMELINE"
        totalDurationSec={12}
        tickStepSec={3}
        trackHeaderWidth={270}
        voiceMs={voiceMs}
        playheadRange={{
          voiceMsRange: [0, 62000],
          startSec: 1.2,
          endSec: 10.6,
        }}
        workAreaSec={[1.8, 10.2]}
        toolbarBadges={[
          "Linked Selection",
          "Snapping (N)",
          "Ripple edit: ON",
          "I/O Work Area",
        ]}
        markers={[
          { sec: 1.8, label: "I (In)", color: HF_COLORS.accentSky },
          { sec: 5.5, label: "S / Split", color: HF_COLORS.accentRose },
          { sec: 10.2, label: "O (Out)", color: HF_COLORS.accentSky },
        ]}
        seekExpression='data-media-start="1.4" (media)  ·  data-playback-start="0.8" (nested comp)'
        tracks={[
          {
            id: "t-comp",
            trackIndex: 0,
            label: "Nested Intro",
            kind: "dom",
            zIndex: 30,
            clips: [
              {
                id: "c-comp",
                label: "SceneIntro (data-playback-start)",
                startSec: 0.6,
                durationSec: 4.9,
                attrTag: 'data-playback-start="0.8"',
                splitAtSec: 3.1,
                activeWindow: [50000, 66000],
              },
              {
                id: "c-comp-2",
                label: "FeatureCard",
                startSec: 5.5,
                durationSec: 4.8,
                attrTag: 'data-start="5.5"',
                keyframes: [0.4, 2.2, 4.1],
                activeWindow: [19500, 36500],
              },
            ],
          },
          {
            id: "t-vid",
            trackIndex: 1,
            label: "A-Roll Video",
            kind: "video",
            zIndex: 10,
            clips: [
              {
                id: "c-vid",
                label: "presenter.mp4 (data-media-start)",
                startSec: 1.5,
                durationSec: 8.4,
                mediaStartSec: 1.4,
                attrTag: 'data-media-start="1.4"',
                splitAtSec: 5.5,
                activeWindow: [50000, 66000],
              },
            ],
          },
          {
            id: "t-aud",
            trackIndex: 2,
            label: "Voiceover + BGM",
            kind: "audio",
            clips: [
              {
                id: "c-aud",
                label: "narration.mp3 (Linked)",
                startSec: 1.5,
                durationSec: 8.4,
                showWaveform: true,
                attrTag: "Linked Selection",
                activeWindow: [36500, 50000],
              },
            ],
          },
        ]}
      />

      {/* Bottom: 3-Column NLE Shortcuts & Source Trim Attributes */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.1fr 0.95fr",
          gap: 20,
        }}
      >
        {/* Col 1: Playback & Navigation */}
        <div
          style={{
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border: playbackActive
              ? `2.5px solid ${HF_COLORS.accentSky}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.accentSky }}>
            ① 专业播控快捷键
          </div>
          {[
            { k: "J / K / L", v: "倒放 · 停止 · 正放（经典非编三键）" },
            { k: "Space", v: "播放 / 暂停；← / → 单帧步进" },
            { k: "I / O · A / E", v: "设工作区出入点 · 跳至出入点" },
            { k: "? (Shift+/)", v: "呼出/关闭完整内置快捷键速查表" },
          ].map((row) => (
            <div
              key={row.k}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                padding: "7px 12px",
                borderRadius: 10,
                backgroundColor: HF_COLORS.bgElevated,
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.accentSky }}>
                {row.k}
              </span>
              <span style={{ fontSize: 18, color: HF_COLORS.textPrimary, textAlign: "right" }}>
                {row.v}
              </span>
            </div>
          ))}
        </div>

        {/* Col 2: B (Razor) vs S (Split) Distinction */}
        <div
          style={{
            borderRadius: 18,
            backgroundColor: razorSplitActive ? "rgba(244, 63, 94, 0.10)" : HF_COLORS.bgSurface,
            border: razorSplitActive
              ? `2.5px solid ${HF_COLORS.accentRose}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.accentRose }}>
              ② 剪辑工具避混：B 剃刀 vs S 分割
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.brandNeon }}>
              V 回选择
            </span>
          </div>

          <div
            style={{
              borderRadius: 12,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${hexToRgba(HF_COLORS.accentYellow, 0.5)}`,
              padding: "11px 14px",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentYellow }}>
              B · Razor 剃刀工具（点击切片）
            </div>
            <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 3 }}>
              切换至剃刀光标后点击任意切片切断；按住 Shift 点击可一次切穿全轨。
            </div>
          </div>

          <div
            style={{
              borderRadius: 12,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${hexToRgba(HF_COLORS.brandNeon, 0.5)}`,
              padding: "11px 14px",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.brandNeon }}>
              S · Split 播放头即时分割
            </div>
            <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 3 }}>
              无需切工具，直接按 S 在当前播放头位置将选中切片一分为二。
            </div>
          </div>
        </div>

        {/* Col 3: Toolbar + Trim Source Compensation */}
        <div
          style={{
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border:
              toolbarActive || trimAttrActive
                ? `2.5px solid ${trimAttrActive ? HF_COLORS.brandNeon : HF_COLORS.accentPurple}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            ③ 吸附、波纹与源码补偿
          </div>

          <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.48 }}>
            • <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>N</span> 磁吸对齐 ·{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>[ / ]</span> 左右全选
            <br />• <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.textPrimary }}>Linked Selection</span> 音画联动 ·{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>Ripple edit</span> 默认开启自动补空
          </div>

          <div
            style={{
              marginTop: "auto",
              borderRadius: 12,
              backgroundColor: trimAttrActive ? "rgba(16, 185, 129, 0.16)" : HF_COLORS.bgElevated,
              border: `1.5px solid ${trimAttrActive ? HF_COLORS.brandNeon : HF_COLORS.borderSubtle}`,
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700, color: HF_COLORS.textPrimary }}>
              修剪左边缘入点自动写回：
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 17, color: HF_COLORS.brandNeon }}>
              媒体元素 → data-media-start
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 17, color: HF_COLORS.accentYellow }}>
              嵌套组合 → data-playback-start
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
