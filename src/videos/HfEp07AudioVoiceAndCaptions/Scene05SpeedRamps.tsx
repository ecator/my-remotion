import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfCodeWindow } from "../../components/hyperframes/HfCodeWindow";
import { HfTimelineMock } from "../../components/hyperframes/HfTimelineMock";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene05Props {
  voiceFromFrame: number;
}

const SPEED_PRESETS = ["Montage", "Hero", "Bullet", "Jump cut", "Flash in", "Flash out"];

export const Scene05SpeedRamps: React.FC<Scene05Props> = ({
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

  const codeActive = voiceMs < 24500;
  const presetsActive = voiceMs >= 33500;

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
      {/* Top: Full-Width Speed Ramp Curve Timeline */}
      <HfTimelineMock
        title="SPEED RAMPS · LOG-SCALE RATE CURVE (0.1× – 10×)"
        totalDurationSec={4}
        tickStepSec={1}
        trackHeaderWidth={250}
        voiceMs={voiceMs}
        playheadRange={{
          voiceMsRange: [0, 44000],
          startSec: 0.2,
          endSec: 3.8,
        }}
        toolbarBadges={["sourceTimeAt()", "Pitch Kept", "0.1× – 10×"]}
        seekExpression="0.5× → 2× 对数插值中点精准经过 1.0× 原速"
        tracks={[
          {
            id: "t-ramp",
            trackIndex: 0,
            label: "clip.mp4 (rate)",
            kind: "video",
            clips: [
              {
                id: "c-ramp",
                label: 'target: "rate" (1× → 4× → 0.5×)',
                startSec: 0,
                durationSec: 4,
                attrTag: "rate lane",
                automationCurve: [
                  { t: 0, v: 0.35 },
                  { t: 2, v: 0.92 },
                  { t: 4, v: 0.15 },
                ],
                automationColor: HF_COLORS.accentYellow,
                activeWindow: [0, 45000],
              },
            ],
          },
        ]}
      />

      {/* Middle Row: Code Window + Technical Notes side-by-side */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
          gap: 24,
        }}
      >
        <HfCodeWindow
          title="index.html · Speed Ramps"
          subtitle='target: "rate"'
          accentColor={codeActive ? HF_COLORS.brandNeon : HF_COLORS.accentSky}
          activeLineIndex={codeActive ? 3 : undefined}
          lines={[
            { text: '<video src="clip.mp4" data-start="0" data-duration="4"' },
            { text: '  data-automation=\'{"version":1,"lanes":[{' },
            { text: '    "target": "rate",', highlightColor: HF_COLORS.brandNeon, badge: "速率包络" },
            { text: '    "points": [{"t":0,"v":1}, {"t":2,"v":4,"curve":0.4}, {"t":4,"v":0.5}]', highlightColor: HF_COLORS.accentYellow, badge: "1×→4×→0.5×" },
            { text: "  }]}'></video>" },
          ]}
        />

        <div
          style={{
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border: `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            预览、编辑器与渲染共享同一份 sourceTimeAt()
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.55 }}>
            • 仅 <span style={{ fontFamily: FONT_MONO }}>&lt;video&gt; / &lt;audio&gt;</span> 支持{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>rate</span> 曲线，优先级高于静态{" "}
            <span style={{ fontFamily: FONT_MONO }}>data-playback-rate</span>
            <br />• 速度在 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>0.1× – 10×</span> 区间按对数尺度过渡
            <br />• 音频时间拉伸自动保持原音高（Pitch Kept），所见即所渲
          </div>
        </div>
      </div>

      {/* Bottom Bar: 6 Browser Editor Speed Presets */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: presetsActive ? "rgba(139, 92, 246, 0.14)" : HF_COLORS.bgSurface,
          border: presetsActive
            ? `2.5px solid ${HF_COLORS.accentPurple}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "14px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
        }}
      >
        <span style={{ fontSize: 21, fontWeight: 800, color: HF_COLORS.accentPurple, whiteSpace: "nowrap" }}>
          浏览器编辑器 6 款一键变速预设：
        </span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, flex: 1 }}>
          {SPEED_PRESETS.map((p) => (
            <div
              key={p}
              style={{
                borderRadius: 10,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "8px 10px",
                textAlign: "center",
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.textPrimary,
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
