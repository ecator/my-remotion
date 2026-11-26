import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene05Props {
  voiceFromFrame: number;
}

const READ_TOOLS = [
  {
    name: "studio_look",
    desc: "读取工程树、播放头、选区及源码安全句柄 handle（含 sourceFile / depth）",
  },
  {
    name: "studio_inspect",
    desc: "查看单元素完整计算样式、文案、包围盒、动画及可写能力",
  },
  {
    name: "studio_frame",
    desc: "在任意时间点截出 PNG 画面，让 Agent 亲眼验收修改结果",
  },
];

const CHANGE_TOOLS = [
  "studio_select",
  "studio_seek",
  "studio_set_text",
  "studio_set_style",
  "studio_transform",
  "studio_add_animation",
  "studio_update_animation",
  "studio_add_keyframe",
  "studio_delete_animation",
];

const RECEIPT_STAGES = [
  { stage: "refused", zh: "前置拒绝", desc: "句柄/状态不合法，未执行提交", color: HF_COLORS.textMuted },
  { stage: "dispatched", zh: "已派发", desc: "已接受，需 studio_inspect/frame 复核", color: HF_COLORS.accentYellow },
  { stage: "saved", zh: "已落盘", desc: "收到带版本号的源文件持久化凭证", color: HF_COLORS.accentSky },
  { stage: "verified", zh: "已验真", desc: "落盘且经独立回读确认生效", color: HF_COLORS.brandNeon },
  { stage: "failed", zh: "提交失败", desc: "返回 kind / reason / hint 排错", color: HF_COLORS.accentRose },
];

export const Scene05WebMcpAgentStudio: React.FC<Scene05Props> = ({
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

  const apiTrapActive = voiceMs >= 16500 && voiceMs < 33500;
  const toolsActive = voiceMs >= 33500 && voiceMs < 51500;
  const receiptActive = voiceMs >= 51500;

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
      {/* Top API Specification & Anti-Trap Banner */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: apiTrapActive ? "rgba(16, 185, 129, 0.14)" : HF_COLORS.bgSurface,
          border: apiTrapActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "14px 22px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 20,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              padding: "5px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              fontFamily: FONT_MONO,
              fontSize: 19,
              fontWeight: 800,
              color: HF_COLORS.brandNeon,
            }}
          >
            ✓ STANDARD API
          </span>
          <div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 22, fontWeight: 800, color: HF_COLORS.brandNeon }}>
              document.modelContext.getTools()
            </div>
            <div style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>
              异步注册 12 个工具（等待 toolchange 事件收敛）· 浏览器内 Agent 直连当前编辑器
            </div>
          </div>
        </div>

        <div
          style={{
            borderRadius: 12,
            backgroundColor: "rgba(244, 63, 94, 0.14)",
            border: `1.5px solid ${HF_COLORS.accentRose}`,
            padding: "9px 14px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 20,
              fontWeight: 900,
              color: HF_COLORS.accentRose,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ✗ 避坑
          </span>
          <span style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.35 }}>
            切勿使用{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose, textDecoration: "line-through" }}>
              navigator.modelContext
            </span>
            ：它并非标准规范，仅是部分 polyfill 提供的误导性兼容垫片。
          </span>
        </div>
      </div>

      {/* Middle Row: 12 WebMCP Tools (3 Read + 9 Change) */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.02fr 0.98fr",
          gap: 22,
        }}
      >
        {/* 3 Read Tools */}
        <div
          style={{
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border: toolsActive
              ? `2.5px solid ${HF_COLORS.accentSky}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 11,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              3 个只读感知工具（Read）
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 700, color: HF_COLORS.accentSky }}>
              3 / 12 TOOLS
            </span>
          </div>

          {READ_TOOLS.map((tool) => (
            <div
              key={tool.name}
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(HF_COLORS.accentSky, 0.45)}`,
                padding: "12px 15px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentSky }}>
                {tool.name}
              </span>
              <span style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
                {tool.desc}
              </span>
            </div>
          ))}
        </div>

        {/* 9 Change Tools + Topology Lens */}
        <div
          style={{
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border: toolsActive
              ? `2.5px solid ${HF_COLORS.accentPurple}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              9 个写入与动画工具（Change）
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 700, color: HF_COLORS.accentPurple }}>
              9 / 12 TOOLS
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 9 }}>
            {CHANGE_TOOLS.map((name) => (
              <div
                key={name}
                style={{
                  borderRadius: 10,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(HF_COLORS.accentPurple, 0.4)}`,
                  padding: "9px 10px",
                  fontFamily: FONT_MONO,
                  fontSize: 16,
                  fontWeight: 700,
                  color: name === "studio_select" ? HF_COLORS.brandNeon : HF_COLORS.textPrimary,
                  textAlign: "center",
                }}
              >
                {name}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "auto",
              borderRadius: 12,
              backgroundColor: "rgba(139, 92, 246, 0.14)",
              border: `1.5px solid ${HF_COLORS.accentPurple}`,
              padding: "12px 15px",
              fontSize: 18,
              color: HF_COLORS.textPrimary,
              lineHeight: 1.45,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.accentPurple }}>
              Topology Lens + 显式 Handle 寻址：
            </span>
            先调用 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>studio_select</span>{" "}
            共享选区并亮起事务光框（仅 Studio 视图可见，绝不写入 HTML），每次写操作仍绑定明确 handle 防误改。
          </div>
        </div>
      </div>

      {/* Bottom Row: 5 Honest Receipt Stages */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: receiptActive ? "rgba(16, 185, 129, 0.10)" : HF_COLORS.bgSurface,
          border: receiptActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "14px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 21, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            五级诚实写入回执（Receipt Stages）
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 17, color: HF_COLORS.textSecondary }}>
            将「已接受请求」与「已持久化验真」严格解耦
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
          {RECEIPT_STAGES.map((st, idx) => (
            <div
              key={st.stage}
              style={{
                borderRadius: 11,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(st.color, 0.55)}`,
                padding: "9px 12px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: st.color }}>
                {idx + 1}. {st.stage}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: HF_COLORS.textPrimary, marginTop: 2 }}>
                {st.zh}
              </div>
              <div style={{ fontSize: 16, color: HF_COLORS.textSecondary, marginTop: 2, lineHeight: 1.32 }}>
                {st.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
