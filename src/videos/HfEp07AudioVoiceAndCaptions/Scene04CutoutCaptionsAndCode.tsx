import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfTerminalWindow } from "../../components/hyperframes/HfTerminalWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

const CAPTION_FAMILIES = [
  { tone: "高能社媒", comps: "caption-kinetic-slam · caption-highlight", color: HF_COLORS.brandNeon },
  { tone: "干净企宣", comps: "caption-clip-wipe · caption-weight-shift", color: HF_COLORS.accentSky },
  { tone: "科技极客", comps: "caption-glitch-rgb · caption-matrix-decode", color: HF_COLORS.accentPurple },
  { tone: "复杂背景防吞字", comps: "caption-blend-difference（反相）", color: HF_COLORS.accentYellow },
];

export const Scene04CutoutCaptionsAndCode: React.FC<Scene04Props> = ({
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

  const cutoutActive = voiceMs < 36500;
  const captionsActive = voiceMs >= 36500;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1.02fr 0.98fr",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: remove-background + u2net_human_seg Limits */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <HfTerminalWindow
          title="免费本地人像抠像 · remove-background"
          headerBadge="u2net_human_seg · FFmpeg"
          activeBlockIndex={cutoutActive ? 0 : undefined}
          blocks={[
            {
              comment: "一次输出透明人物前景 + 反相 Alpha 挖空底板（三层夹大字）",
              command: "npx hyperframes remove-background subject.mp4 -o subject.webm --background-output plate.webm",
              accentColor: HF_COLORS.brandNeon,
              output: [
                "✓ cutout foreground: subject.webm (VP9 alpha)",
                "✓ inverse alpha plate: plate.webm (stack: plate -> title -> cutout)",
              ],
            },
          ]}
        />

        <div
          style={{
            flex: 1,
            borderRadius: 18,
            backgroundColor: cutoutActive ? "rgba(244, 63, 94, 0.10)" : HF_COLORS.bgSurface,
            border: cutoutActive
              ? `2.5px solid ${HF_COLORS.accentRose}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 11,
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentRose }}>
            ⚠ u2net_human_seg 两大工程避坑
          </div>
          <div
            style={{
              borderRadius: 12,
              backgroundColor: HF_COLORS.bgElevated,
              padding: "12px 15px",
              fontSize: 19,
              color: HF_COLORS.textPrimary,
              lineHeight: 1.48,
            }}
          >
            <strong style={{ color: HF_COLORS.accentYellow }}>1. 专为清晰人像设计：</strong>
            非人物产品/物体或深色手持麦克风易抠漏；物品请改用 Studio App 的 Apple Silicon{" "}
            <span style={{ fontFamily: FONT_MONO }}>Cut out object here</span>。
          </div>
          <div
            style={{
              borderRadius: 12,
              backgroundColor: HF_COLORS.bgElevated,
              padding: "12px 15px",
              fontSize: 19,
              color: HF_COLORS.textPrimary,
              lineHeight: 1.48,
            }}
          >
            <strong style={{ color: HF_COLORS.brandNeon }}>2. 动外层 &lt;div&gt; 而非 &lt;video&gt;：</strong>
            移动抠像人物位置时，对包裹的容器 <span style={{ fontFamily: FONT_MONO }}>&lt;div&gt;</span>{" "}
            做变换动画，绝不直接对 <span style={{ fontFamily: FONT_MONO }}>&lt;video&gt;</span> 做位移！
          </div>
        </div>
      </div>

      {/* RIGHT: 91 Captions Catalog + Code Animation Blocks */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: captionsActive
            ? `2.5px solid ${HF_COLORS.accentYellow}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: captionsActive
            ? "0 0 36px rgba(245, 158, 11, 0.2)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 13,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            91 款 Captions Catalog 花字选型
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 800,
              color: HF_COLORS.accentYellow,
              padding: "4px 11px",
              borderRadius: 8,
              backgroundColor: "rgba(245, 158, 11, 0.16)",
            }}
          >
            91 STYLES
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {CAPTION_FAMILIES.map((f) => (
            <div
              key={f.tone}
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(f.color, 0.45)}`,
                padding: "11px 15px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 19, fontWeight: 800, color: f.color }}>{f.tone}</span>
              <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textPrimary }}>
                {f.comps}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: "rgba(6, 182, 212, 0.12)",
            border: `1.5px solid ${HF_COLORS.accentSky}`,
            padding: "13px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <div style={{ fontSize: 19, fontWeight: 800, color: HF_COLORS.accentSky }}>
            单节一风格 · 仅强调关键词 + 屏幕代码动效块
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textPrimary }}>
            code-typing · code-diff · code-morph
          </div>
        </div>
      </div>
    </div>
  );
};
