import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene03Props {
  voiceFromFrame: number;
}

const PREVIEW_TOOLS = [
  {
    key: "V",
    name: "Select",
    color: HF_COLORS.brandNeon,
    desc: "点选画布元素，按 A 触发 Prompt to edit；再次点击选中父容器",
  },
  {
    key: "D",
    name: "Draw",
    color: HF_COLORS.accentYellow,
    desc: "在画面或时间轴上画圈批注，多笔自动合并为同一条标注",
  },
  {
    key: "C",
    name: "Comment",
    color: HF_COLORS.accentSky,
    desc: "在指定像素与时刻钉住评论：What should change here?",
  },
];

const PENDING_EDITS = [
  { source: "Script", action: "Cut 0:04–0:07 语气停顿与重复口误", color: HF_COLORS.accentRose },
  { source: "Draw (D)", action: "将红圈处的价格卡片放大并改为翡翠绿描边", color: HF_COLORS.accentYellow },
  { source: "Comment (C)", action: "@0:12 在人物背后插入巨型关键词标题", color: HF_COLORS.accentSky },
];

export const Scene03ScriptAndCanvasEdit: React.FC<Scene03Props> = ({
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

  const scriptActive = voiceMs >= 5000 && voiceMs < 39000;
  const canvasActive = voiceMs >= 39000 && voiceMs < 59500;
  const pendingActive = voiceMs >= 59500 || (voiceMs >= 16500 && voiceMs < 24000);
  const cutoutHighlight = voiceMs >= 46000 && voiceMs < 54000;

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
      {/* Main 2-column visual editing showcase */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
        }}
      >
        {/* LEFT: Script Panel Document Editing */}
        <div
          style={{
            borderRadius: 20,
            backgroundColor: HF_COLORS.bgSurface,
            border: scriptActive
              ? `2.5px solid ${HF_COLORS.brandNeon}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow: scriptActive
              ? "0 0 36px rgba(16, 185, 129, 0.18)"
              : "0 14px 32px rgba(0,0,0,0.45)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              ① Script 面板：像改文档一样剪口播
            </span>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(16, 185, 129, 0.16)",
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.brandNeon,
              }}
            >
              DOC-STYLE EDITING
            </span>
          </div>

          {/* AI Suggested Cuts Banner */}
          <div
            style={{
              borderRadius: 12,
              backgroundColor: "rgba(139, 92, 246, 0.12)",
              border: `1.5px solid rgba(139, 92, 246, 0.45)`,
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 19, color: HF_COLORS.textPrimary, fontWeight: 600 }}>
              AI 检测到 3 处冗余气口与重复口误（可缩短 6.4s）
            </span>
            <div style={{ display: "flex", gap: 8, fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700 }}>
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 6,
                  backgroundColor: HF_COLORS.bgElevated,
                  color: HF_COLORS.textSecondary,
                }}
              >
                Keep all
              </span>
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 6,
                  backgroundColor: "rgba(244, 63, 94, 0.2)",
                  color: HF_COLORS.accentRose,
                }}
              >
                Cut all
              </span>
            </div>
          </div>

          {/* Mock Transcript Paragraph */}
          <div
            style={{
              borderRadius: 14,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${HF_COLORS.borderSubtle}`,
              padding: "16px 18px",
              fontSize: 22,
              lineHeight: 1.7,
              color: HF_COLORS.textPrimary,
            }}
          >
            <span>今天我们用三分钟演示 HyperFrames 桌面端，</span>
            <span
              style={{
                textDecoration: "line-through",
                color: HF_COLORS.accentRose,
                backgroundColor: "rgba(244, 63, 94, 0.16)",
                padding: "2px 6px",
                borderRadius: 6,
                margin: "0 4px",
              }}
            >
              呃那个就是说其实非常简单的
            </span>
            <span>，直接选中台词即可</span>
            <span
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.22)",
                border: `1.5px solid ${HF_COLORS.brandNeon}`,
                padding: "2px 8px",
                borderRadius: 6,
                margin: "0 4px",
                color: HF_COLORS.brandNeon,
                fontWeight: 700,
              }}
            >
              一键删减或插入推镜
            </span>
            <span>。</span>
          </div>

          {/* Action Toolbar */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: "auto" }}>
            <div
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "11px 14px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 700, color: HF_COLORS.accentRose }}>
                Cut (⌫) / Restore
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 3 }}>
                文字加删除线并暂存剪辑，随时可恢复
              </div>
            </div>
            <div
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "11px 14px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 700, color: HF_COLORS.accentSky }}>
                Fix words
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 3 }}>
                仅修正字幕识别错字，原声音频保持不变
              </div>
            </div>
            <div
              style={{
                gridColumn: "1 / -1",
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "11px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 700, color: HF_COLORS.accentYellow }}>
                Add + Comment / Ask
              </span>
              <span style={{ fontSize: 19, color: HF_COLORS.textSecondary }}>
                在选中台词处直接插入 Zoom in · B-roll · Title card
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Canvas Preview Tools (V/A/D/C) + Apple Silicon Cutout */}
        <div
          style={{
            borderRadius: 20,
            backgroundColor: HF_COLORS.bgSurface,
            border: canvasActive
              ? `2.5px solid ${HF_COLORS.accentYellow}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow: canvasActive
              ? "0 0 36px rgba(245, 158, 11, 0.2)"
              : "0 14px 32px rgba(0,0,0,0.45)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              ② 预览画布指点、画圈与本地抠像
            </span>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(245, 158, 11, 0.16)",
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.accentYellow,
              }}
            >
              V · A · D · C
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {PREVIEW_TOOLS.map((tool) => (
              <div
                key={tool.key}
                style={{
                  borderRadius: 14,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(tool.color, 0.45)}`,
                  padding: "13px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 11,
                    backgroundColor: hexToRgba(tool.color, 0.2),
                    border: `2px solid ${tool.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT_MONO,
                    fontSize: 24,
                    fontWeight: 900,
                    color: tool.color,
                    flexShrink: 0,
                  }}
                >
                  {tool.key}
                </span>
                <div>
                  <div style={{ fontFamily: FONT_MONO, fontSize: 21, fontWeight: 800, color: tool.color }}>
                    {tool.name}
                  </div>
                  <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
                    {tool.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Apple Silicon Cutout & Quick Timeline */}
          <div
            style={{
              marginTop: "auto",
              borderRadius: 14,
              backgroundColor: cutoutHighlight
                ? "rgba(16, 185, 129, 0.16)"
                : "rgba(6, 182, 212, 0.08)",
              border: `2px solid ${cutoutHighlight ? HF_COLORS.brandNeon : "rgba(6, 182, 212, 0.35)"}`,
              padding: "13px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.brandNeon }}>
              右键快捷菜单 · Apple silicon Mac 本地抠像
            </div>
            <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.45 }}>
              支持 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>Cut out object here</span>、
              Ask Framey、Bring to front、Replace with，以及底部快捷时间轴 Speed / Volume / Fade。
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Unified Pending Video Edits Queue */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: pendingActive ? "rgba(16, 185, 129, 0.12)" : HF_COLORS.bgSurface,
          border: pendingActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "14px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1 }}>
          <span
            style={{
              padding: "7px 14px",
              borderRadius: 10,
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              fontFamily: FONT_MONO,
              fontSize: 19,
              fontWeight: 800,
              color: HF_COLORS.brandNeon,
              whiteSpace: "nowrap",
            }}
          >
            Pending video edits (3)
          </span>
          <div style={{ display: "flex", gap: 10, flex: 1 }}>
            {PENDING_EDITS.map((ed) => (
              <div
                key={ed.source}
                style={{
                  flex: 1,
                  borderRadius: 10,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(ed.color, 0.45)}`,
                  padding: "8px 12px",
                  fontSize: 18,
                  color: HF_COLORS.textPrimary,
                }}
              >
                <span style={{ fontFamily: FONT_MONO, fontWeight: 700, color: ed.color }}>
                  [{ed.source}]{" "}
                </span>
                {ed.action}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: "10px 18px",
            borderRadius: 12,
            backgroundColor: HF_COLORS.brandPrimary,
            fontFamily: FONT_MONO,
            fontSize: 19,
            fontWeight: 800,
            color: "#04120D",
            whiteSpace: "nowrap",
          }}
        >
          Send 3 edits →
        </div>
      </div>
    </div>
  );
};
