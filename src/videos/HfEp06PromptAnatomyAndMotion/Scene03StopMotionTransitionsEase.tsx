import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene03Props {
  voiceFromFrame: number;
}

const EASE_WORDS = [
  { word: "smooth", gsap: "power2.out", feel: "自然顺滑减速落位", color: HF_COLORS.brandNeon },
  { word: "snappy", gsap: "power4.out", feel: "利落果断快起急停", color: HF_COLORS.accentSky },
  { word: "bouncy", gsap: "back.out", feel: "过冲回弹（仅物理件）", color: HF_COLORS.accentYellow },
  { word: "springy", gsap: "elastic.out", feel: "弹簧振荡落定", color: HF_COLORS.accentPurple },
  { word: "dramatic", gsap: "expo.out", feel: "爆发起步长距离滑行", color: HF_COLORS.accentRose },
  { word: "dreamy", gsap: "sine.inOut", feel: "舒缓对称柔和过渡", color: HF_COLORS.textPrimary },
];

const TRANSITION_TIERS = [
  { tier: "Calm (0.5–0.8s)", shader: "cross-warp-morph · light-leak", css: "transitions-blur", color: HF_COLORS.accentSky },
  { tier: "Medium (0.3–0.5s)", shader: "whip-pan · cinematic-zoom", css: "transitions-push · cover", color: HF_COLORS.brandNeon },
  { tier: "High (0.15–0.3s)", shader: "ridged-burn · glitch · chromatic-radial-split", css: "transitions-scale · light", color: HF_COLORS.accentPurple },
];

export const Scene03StopMotionTransitionsEase: React.FC<Scene03Props> = ({
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

  const stopMotionActive = voiceMs < 24500;
  const transitionsActive = voiceMs >= 24500 && voiceMs < 44500;
  const easeActive = voiceMs >= 44500;

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
      {/* Top: Deterministic Stop-Motion Banner (two frames vs NOT 0.067s) */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: stopMotionActive ? "rgba(16, 185, 129, 0.12)" : HF_COLORS.bgSurface,
          border: stopMotionActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "16px 24px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 20,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            确定性手工定格动画：固定 Seed + 按帧号量化停留
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, marginTop: 4 }}>
            多次渲染字节级一致（Byte-identical），绝不使用无种子随机。
          </div>
        </div>

        <div
          style={{
            borderRadius: 13,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${HF_COLORS.borderSubtle}`,
            padding: "11px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            ✓ 写 &quot;hold for exactly two frames&quot;（两帧量化）
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.accentRose }}>
            ✗ 切勿写 &quot;0.067 seconds&quot;（按秒估算会漂移为 1 帧 / 3 帧抖动）
          </div>
        </div>
      </div>

      {/* Bottom 2 Columns: Shader vs CSS Transitions + 6 Ease Words */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.02fr 0.98fr",
          gap: 24,
        }}
      >
        {/* LEFT: Transitions */}
        <div
          style={{
            borderRadius: 20,
            backgroundColor: HF_COLORS.bgSurface,
            border: transitionsActive
              ? `2.5px solid ${HF_COLORS.accentSky}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 13,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              动机转场：Shader vs CSS 分级表
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.accentSky }}>
              MOTIVATED SEAMS
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
            {TRANSITION_TIERS.map((t) => (
              <div
                key={t.tier}
                style={{
                  flex: 1,
                  borderRadius: 13,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(t.color, 0.45)}`,
                  padding: "12px 16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: t.color }}>
                  {t.tier}
                </div>
                <div style={{ fontSize: 18, color: HF_COLORS.textPrimary }}>
                  <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentPurple }}>Shader: </span>
                  <span style={{ fontFamily: FONT_MONO }}>{t.shader}</span>
                </div>
                <div style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>
                  <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>CSS: </span>
                  <span style={{ fontFamily: FONT_MONO }}>{t.css}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 18, color: HF_COLORS.accentRose, fontWeight: 700 }}>
            ⚠ 切忌「先淡出黑屏再淡入」：转场本身就是出场，直接声明 A → B 的接缝块！
          </div>
        </div>

        {/* RIGHT: 6 Ease Words */}
        <div
          style={{
            borderRadius: 20,
            backgroundColor: HF_COLORS.bgSurface,
            border: easeActive
              ? `2.5px solid ${HF_COLORS.accentYellow}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 11,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              六大动效形容词 → GSAP 缓动曲线
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.accentYellow }}>
              6 EASE WORDS
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
            {EASE_WORDS.map((e) => (
              <div
                key={e.word}
                style={{
                  flex: 1,
                  borderRadius: 12,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(e.color, 0.45)}`,
                  padding: "10px 16px",
                  display: "grid",
                  gridTemplateColumns: "120px 160px 1fr",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: e.color }}>
                  {e.word}
                </span>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 19,
                    fontWeight: 700,
                    color: HF_COLORS.textPrimary,
                    padding: "3px 10px",
                    borderRadius: 7,
                    backgroundColor: HF_COLORS.bgSurface,
                    textAlign: "center",
                  }}
                >
                  {e.gsap}
                </span>
                <span style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>{e.feel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
