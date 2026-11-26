import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene02Props {
  voiceFromFrame: number;
}

export const Scene02SevenMotionLaws: React.FC<Scene02Props> = ({
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

  const law67Active = voiceMs >= 54000;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* Top Split Compare: Laws 1-5 Avoid vs Instead */}
      <HfSplitCompare
        voiceMs={voiceMs}
        style={{ flex: 1 }}
        left={{
          badge: "✗ AVOID · 廉价 PPT 感元凶",
          meta: "LAWS 1–5 反例",
          title: "为什么 AI 视频看起来飘忽廉价？",
          tone: "danger",
          items: [
            {
              title: "伪呼吸浮动：标题落位后仍缓慢放大缩小",
              activeWindow: [5500, 16500],
            },
            {
              title: "无意义慢推镜头 / 多幕原地叠化切换",
              activeWindow: [16500, 24500],
            },
            {
              title: "串行排队：等前一个彻底停稳才出下一个",
              activeWindow: [24500, 32500],
            },
            {
              title: "同时旋转 + 缩放 + 位移 + 模糊（文字糊成一团）",
              activeWindow: [32500, 40500],
            },
            {
              title: "给文字/数字计数器加 back.out 弹性过冲（冲过 42 再回退造假数！）",
              activeWindow: [40500, 54000],
            },
          ],
        }}
        right={{
          badge: "✓ INSTEAD · 前五大丝滑运动铁律",
          meta: "LAWS 1–5 正解",
          title: "HyperFrames 官方七大运动法则（1–5）",
          tone: "emerald",
          items: [
            {
              title: "1. Move only what is live：落地即静止，只动实时数据/波形",
              activeWindow: [5500, 16500],
            },
            {
              title: "2. Move the camera to get somewhere：镜头移动只为穿越空间连接对象",
              activeWindow: [16500, 24500],
            },
            {
              title: "3. Overlap, don't queue：动作交错重叠（0.09s 级联触发）",
              activeWindow: [24500, 32500],
            },
            {
              title: "4. One idea per move：单一运动意图（上浮+淡入，不旋转不模糊）",
              activeWindow: [32500, 40500],
            },
            {
              title: "5. Weight for physical objects only：过冲只给物理卡牌，绝不给文字与数字",
              activeWindow: [40500, 54000],
            },
          ],
        }}
      />

      {/* Bottom Row: Law 6 & Law 7 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        <div
          style={{
            borderRadius: 16,
            backgroundColor: law67Active ? "rgba(6, 182, 212, 0.14)" : HF_COLORS.bgSurface,
            border: law67Active
              ? `2.5px solid ${HF_COLORS.accentSky}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "14px 20px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentSky }}>
            6. Depth · 近快远慢视差景深
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, marginTop: 4, lineHeight: 1.45 }}>
            远景 0.2× 慢移、中景 1×、仅放{" "}
            <strong style={{ color: HF_COLORS.brandNeon }}>1 个虚化前景（6× 掠过）</strong>{" "}
            做纵深线索——放第二个前景只会变杂乱！
          </div>
        </div>

        <div
          style={{
            borderRadius: 16,
            backgroundColor: law67Active ? "rgba(139, 92, 246, 0.14)" : HF_COLORS.bgSurface,
            border: law67Active
              ? `2.5px solid ${HF_COLORS.accentPurple}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "14px 20px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentPurple }}>
            7. Pace to the format · 按格式精准配速
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, marginTop: 4, lineHeight: 1.45 }}>
            Showreel 混剪每拍 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>1.1s</span> 硬切快节奏；
            产品 Demo 稳停 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>7–10s</span> 展示真实交互。
          </div>
        </div>
      </div>
    </div>
  );
};
