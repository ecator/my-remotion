import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene03Props {
  voiceFromFrame: number;
}

const NON_AUTOMATABLE = [
  "compressor",
  "limiter",
  "truepeak",
  "gate",
  "bitcrush",
  "pitchshift",
];

export const Scene03FxChainWorkletsAndLint: React.FC<Scene03Props> = ({
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

  const orderActive = voiceMs < 29000;
  const workletActive = voiceMs >= 29000 && voiceMs < 52500;
  const lintActive = voiceMs >= 52500;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1.02fr 0.98fr",
        gap: 26,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: 16 Effects, 22 Presets & Signal Order */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: orderActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            16 款效果器 · 22 个预设与黄金顺序
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 700,
              color: HF_COLORS.brandNeon,
              padding: "4px 11px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.16)",
            }}
          >
            16 FX · 22 PRESETS
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {[
            { n: "1. Filters（减法清理）", d: "highpass 80–120Hz 去低频隆隆声，peaking 削 250Hz 闷浊", c: HF_COLORS.brandNeon },
            { n: "2. Dynamics（电平均平）", d: "compressor 稳定字间动态，gate 清除句间底噪", c: HF_COLORS.accentSky },
            { n: "3. Carve（声部让位）", d: "在音乐轨执行 Voiceover Carve 雕刻人声频段", c: HF_COLORS.accentYellow },
            { n: "4. Character & Ceiling", d: "饱和/混响/角色预设（voice-clean / voice-broadcast）→ 末尾 limiter 封顶", c: HF_COLORS.accentPurple },
          ].map((step) => (
            <div
              key={step.n}
              style={{
                borderRadius: 13,
                backgroundColor: HF_COLORS.bgElevated,
                borderLeft: `4px solid ${step.c}`,
                padding: "12px 15px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: step.c }}>
                {step.n}
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 3 }}>
                {step.d}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Audio Lint Rules */}
        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: lintActive ? "rgba(6, 182, 212, 0.16)" : HF_COLORS.bgElevated,
            border: `2px solid ${lintActive ? HF_COLORS.accentSky : HF_COLORS.borderSubtle}`,
            padding: "13px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.accentSky }}>
            4 条音频专属 Lint 质量规则
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 16, color: HF_COLORS.textPrimary, lineHeight: 1.5 }}>
            • audio_attribute_unreadable（拦截语法损坏链）
            <br />• audio_carve_ungrouped_sources（提醒多段人声先打组）
          </div>
        </div>
      </div>

      {/* RIGHT: Non-Automatable Worklet Effects Trap */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: workletActive ? "rgba(244, 63, 94, 0.10)" : HF_COLORS.bgSurface,
          border: workletActive
            ? `2.5px solid ${HF_COLORS.accentRose}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.accentRose }}>
            ⚠ 不可自动化 Worklet 静默失效边界
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 17,
              fontWeight: 800,
              color: HF_COLORS.accentRose,
              padding: "4px 10px",
              borderRadius: 8,
              backgroundColor: "rgba(244, 63, 94, 0.18)",
            }}
          >
            SILENTLY INERT
          </span>
        </div>

        <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
          以下 6 类整体配置的音频 Worklet 效果器<strong style={{ color: HF_COLORS.textPrimary }}>全参数不支持自动化包络</strong>，强行写入{" "}
          <span style={{ fontFamily: FONT_MONO }}>data-automation</span> 不会报错但会静默无效：
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 11 }}>
          {NON_AUTOMATABLE.map((fx) => (
            <div
              key={fx}
              style={{
                borderRadius: 12,
                backgroundColor: "rgba(244, 63, 94, 0.14)",
                border: `1.5px solid ${hexToRgba(HF_COLORS.accentRose, 0.6)}`,
                padding: "13px 10px",
                textAlign: "center",
                fontFamily: FONT_MONO,
                fontSize: 19,
                fontWeight: 800,
                color: HF_COLORS.accentRose,
              }}
            >
              ✗ {fx}
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${HF_COLORS.borderSubtle}`,
            padding: "14px 16px",
            fontSize: 18,
            color: HF_COLORS.textSecondary,
            lineHeight: 1.5,
          }}
        >
          另外：<span style={{ fontFamily: FONT_MONO, color: HF_COLORS.textPrimary }}>saturation</span> 的曲线类型与{" "}
          <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.textPrimary }}>reverb</span> 的房间尺寸同样不可自动化（仅干湿比 / 输出增益可动）。
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 15,
            backgroundColor: "rgba(16, 185, 129, 0.14)",
            border: `2px solid ${HF_COLORS.brandNeon}`,
            padding: "15px 18px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            ✓ 工程绕法：前置可自动化 gain 节点
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, marginTop: 4, lineHeight: 1.48 }}>
            想随时间动态改变压缩强度，在 <span style={{ fontFamily: FONT_MONO }}>compressor</span> 前串一级可自动化的{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>gain</span> 节点驱动输入电平即可！
          </div>
        </div>
      </div>
    </div>
  );
};
