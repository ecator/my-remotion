import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene02Props {
  voiceFromFrame: number;
}

const PORTRAYS_SLOTS = [
  { id: "subject_name", zh: "主品牌 / 产品名", example: "Acme Studio", color: HF_COLORS.brandNeon },
  { id: "subject_domain", zh: "官网域名 / 主站", example: "acme.dev", color: HF_COLORS.brandNeon },
  { id: "subject_tagline", zh: "一句话核心标语", example: "Ship videos in HTML", color: HF_COLORS.accentSky },
  { id: "subject_logo", zh: "主品牌 Logo 图", example: "./brand-logo.png", color: HF_COLORS.accentSky },
  { id: "recommended_position", zh: "推荐排名 / 定位", example: "#1 Developer Choice", color: HF_COLORS.accentYellow },
  { id: "competitor_name", zh: "对比竞品名称", example: "Legacy Tool X", color: HF_COLORS.accentRose },
  { id: "authority_badge", zh: "权威背书 / 认证徽章", example: "SOC2 · G2 Leader", color: HF_COLORS.accentPurple },
  { id: "host_identity", zh: "出镜主播 / 频道身份", example: "Alex · DevRel", color: HF_COLORS.accentPurple },
];

export const Scene02RoleAndPortraysSlots: React.FC<Scene02Props> = ({
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

  const leftActive = voiceMs < 22000;
  const rightActive = voiceMs >= 22000;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.78fr) minmax(0, 1.22fr)",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: role & semantic naming contract */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: leftActive
            ? `2.5px solid ${HF_COLORS.accentSky}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 25, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            role 与语义化命名契约
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentSky }}>
            AI-READABLE
          </span>
        </div>

        <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.55 }}>
          当同一套模板交给 Agent 自动换肤或批量投放时，仅靠 <span style={{ fontFamily: FONT_MONO }}>title_1 / text_2</span>{" "}
          无法让模型理解字段的业务含义。
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.brandNeon, 0.45)}`,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            &quot;role&quot;: &quot;headline | cta | accent_bg&quot;
          </span>
          <span style={{ fontSize: 18, color: HF_COLORS.textPrimary, lineHeight: 1.45 }}>
            描述变量在画面中的<strong>视觉与结构职责</strong>（如主标题、行动号召、强调色），指导 UI 表单分组与文案字数约束。
          </span>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentPurple, 0.45)}`,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.accentPurple }}>
            &quot;portrays&quot;: &quot;subject_logo&quot;
          </span>
          <span style={{ fontSize: 18, color: HF_COLORS.textPrimary, lineHeight: 1.45 }}>
            声明变量所<strong>扮演的品牌实体槽位</strong>，让换肤流水线自动把客户官网抓取到的 Logo、标语与域名精准灌入！
          </span>
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 12,
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: `1.5px solid ${HF_COLORS.brandPrimary}`,
            padding: "11px 14px",
            fontSize: 17,
            color: HF_COLORS.brandNeon,
            fontWeight: 700,
          }}
        >
          ✓ 命名清晰 + role + portrays = 零人工对齐全自动换肤
        </div>
      </div>

      {/* RIGHT: All 8 portrays slots grid */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: rightActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 25, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            8 大标准 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>portrays</span> 语义槽位
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.brandNeon }}>
            8 CANONICAL SLOTS
          </span>
        </div>

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          {PORTRAYS_SLOTS.map((slot, idx) => {
            const slotStart = 22000 + idx * 4200;
            const slotActive = voiceMs >= slotStart && voiceMs < slotStart + 5000;
            return (
              <div
                key={slot.id}
                style={{
                  borderRadius: 14,
                  backgroundColor: slotActive ? hexToRgba(slot.color, 0.15) : HF_COLORS.bgElevated,
                  border: slotActive
                    ? `2px solid ${slot.color}`
                    : `1.5px solid ${hexToRgba(slot.color, 0.35)}`,
                  padding: "13px 16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: slot.color }}>
                    {slot.id}
                  </span>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 14, color: HF_COLORS.textMuted }}>
                    0{idx + 1}
                  </span>
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                  {slot.zh}
                </div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 15, color: HF_COLORS.textSecondary }}>
                  e.g. {slot.example}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
