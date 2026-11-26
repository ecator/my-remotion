import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

const NLE_VERB_MAP = [
  { verb: "Move", say: "“start scene 2 at 0:06”", attr: "data-start", color: HF_COLORS.brandNeon },
  { verb: "Restack", say: "“put captions on top”", attr: "data-track-index + z-index", color: HF_COLORS.accentSky },
  { verb: "Trim (right)", say: "“end logo at 3.0s”", attr: "data-duration", color: HF_COLORS.accentYellow },
  { verb: "Trim (front)", say: "“skip first 1s of clip”", attr: "data-media-start", color: HF_COLORS.accentPurple },
  { verb: "Retime", say: "“scene 2 = 4s, hold at end”", attr: "data-duration (+ GSAP)", color: HF_COLORS.accentSky },
  { verb: "Level", say: "“audio bed too loud”", attr: "data-volume", color: HF_COLORS.accentRose },
];

export const Scene04ConvergentIterationAndNle: React.FC<Scene04Props> = ({
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

  const iterActive = voiceMs < 38500;
  const nleActive = voiceMs >= 38500;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "0.94fr 1.06fr",
        gap: 26,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: Convergent Iteration Habits */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: iterActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: iterActive
            ? "0 0 36px rgba(16, 185, 129, 0.2)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            收敛式迭代心法
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 800,
              color: HF_COLORS.brandNeon,
              padding: "4px 11px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.16)",
            }}
          >
            75–90% ONE-SHOT
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {[
            {
              num: "01",
              title: "一次只改一个变量（One variable per edit）",
              desc: "改一项 → 渲染 → 验收 → 再改下一项，确保每次改动效果可归因。",
              color: HF_COLORS.brandNeon,
            },
            {
              num: "02",
              title: "用绝对目标值替代相对形容词",
              desc: "✗ “make dots 2× finer / a bit shorter” → ✓ “duration = 4s / radius = 25%”，一次落位不震荡。",
              color: HF_COLORS.accentSky,
            },
            {
              num: "03",
              title: "Freeze clause 冻结条款防漂移",
              desc: "“只将 CTA 放大 1.2×，其余构图与动画一律冻结（leave them untouched）”。",
              color: HF_COLORS.accentYellow,
            },
            {
              num: "04",
              title: "失控时先剥离再分层重叠加",
              desc: "反复跑偏时先冻结运镜和背景回到最小可用版，再逐层叠加定位元凶。",
              color: HF_COLORS.accentPurple,
            },
          ].map((h) => (
            <div
              key={h.num}
              style={{
                flex: 1,
                borderRadius: 13,
                backgroundColor: HF_COLORS.bgElevated,
                borderLeft: `4px solid ${h.color}`,
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                <span style={{ fontFamily: FONT_MONO, color: h.color, marginRight: 8 }}>{h.num}</span>
                {h.title}
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.42 }}>
                {h.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: 6 NLE Verbs -> HTML Attribute Map */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: nleActive
            ? `2.5px solid ${HF_COLORS.accentSky}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: nleActive
            ? "0 0 36px rgba(6, 182, 212, 0.2)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            六大 NLE 剪辑动词 → HTML 精准映射
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 700, color: HF_COLORS.accentSky }}>
            VERB → ATTR
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          {NLE_VERB_MAP.map((row) => (
            <div
              key={row.verb}
              style={{
                flex: 1,
                borderRadius: 13,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(row.color, 0.45)}`,
                padding: "10px 16px",
                display: "grid",
                gridTemplateColumns: "135px 1fr auto",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: row.color }}>
                {row.verb}
              </span>
              <span style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>{row.say}</span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  fontWeight: 700,
                  color: HF_COLORS.textPrimary,
                  padding: "4px 11px",
                  borderRadius: 8,
                  backgroundColor: HF_COLORS.bgSurface,
                }}
              >
                {row.attr}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: 12,
            backgroundColor: "rgba(244, 63, 94, 0.12)",
            border: `1.5px solid ${HF_COLORS.accentRose}`,
            padding: "10px 15px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.accentRose }}>提示：</span>
          渲染时长由 <span style={{ fontFamily: FONT_MONO }}>data-duration</span> 决定，切勿用空{" "}
          <span style={{ fontFamily: FONT_MONO }}>tl.set(&#123;&#125;, &#123;&#125;, sec)</span> 凑时长。
        </div>
      </div>
    </div>
  );
};
