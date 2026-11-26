import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

const MIGRATION_STEPS = [
  {
    step: "01",
    title: "单向真实 Remotion 源码输入",
    desc: "安装官方 remotion-to-hyperframes 技能；仅支持单向迁移真实 Remotion 工程源码（不做反向导出，不接非 Remotion 伪代码）。",
    color: HF_COLORS.accentSky,
  },
  {
    step: "02",
    title: "<Sequence> → HTML Clips + 暂停 GSAP",
    desc: "将 <Sequence from durationInFrames> 换算为秒级 data-start/data-duration，补间转为 paused: true 的 GSAP 并注册 window.__timelines。",
    color: HF_COLORS.brandNeon,
  },
  {
    step: "03",
    title: "生成 TRANSLATION_NOTES.md 差异台账",
    desc: "记录每一处字体、缓动曲线与音频偏移的映射说明，方便人工复核与持续维护。",
    color: HF_COLORS.accentPurple,
  },
  {
    step: "04",
    title: "强制逐帧 SSIM 像素比对验收",
    desc: "必须运行 npx hyperframes diff 对齐原片与迁移片计算 SSIM 相似度，严禁跳过视觉验收！",
    color: HF_COLORS.accentYellow,
  },
];

const REFUSAL_ITEMS = [
  {
    category: "状态驱动 React Hooks",
    tags: ["useState", "useReducer", "useEffect"],
    reason: "包含生命周期副作用或交互状态机的组件无法静态等价转译为确定性寻址时间线。",
  },
  {
    category: "重型 React UI 组件库",
    tags: ["MUI", "shadcn/ui", "Chakra UI", "Radix"],
    reason: "深度耦合 React 运行时与 Portal 逻辑，强行近似只会导致样式走样，因此宁可诚实拒绝。",
  },
];

export const Scene04MigrationAndHonestRefusal: React.FC<Scene04Props> = ({
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

  const leftActive = voiceMs < 33000;
  const rightActive = voiceMs >= 33000;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.08fr) minmax(0, 0.92fr)",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: remotion-to-hyperframes 4-Step Pipeline */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: leftActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 24, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>remotion-to-hyperframes</span>{" "}
            迁移契约
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentSky }}>
            ONE-WAY + SSIM
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          {MIGRATION_STEPS.map((st) => (
            <div
              key={st.step}
              style={{
                flex: 1,
                borderRadius: 13,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(st.color, 0.45)}`,
                padding: "11px 15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 800, color: st.color }}>
                  STEP {st.step}
                </span>
                <span style={{ fontSize: 19, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                  {st.title}
                </span>
              </div>
              <div style={{ fontSize: 17, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
                {st.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Honest Refusal Checklist */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: rightActive ? "rgba(244, 63, 94, 0.1)" : HF_COLORS.bgSurface,
          border: rightActive
            ? `2.5px solid ${HF_COLORS.accentRose}`
            : `2px solid ${hexToRgba(HF_COLORS.accentRose, 0.45)}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 24, fontWeight: 900, color: HF_COLORS.accentRose }}>
            ✋ 诚实拒绝清单（Honest Refusal）
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentRose }}>
            NO SILENT APPROX
          </span>
        </div>

        <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
          遇到以下模式，转换器会<strong>直接拒绝并给出原因</strong>，绝不静默降级或生成似是而非的假代码：
        </div>

        {REFUSAL_ITEMS.map((item) => (
          <div
            key={item.category}
            style={{
              borderRadius: 14,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${hexToRgba(HF_COLORS.accentRose, 0.55)}`,
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              ✗ {item.category}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "3px 10px",
                    borderRadius: 7,
                    backgroundColor: "rgba(244, 63, 94, 0.16)",
                    fontFamily: FONT_MONO,
                    fontSize: 16,
                    fontWeight: 700,
                    color: HF_COLORS.accentRose,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ fontSize: 17, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
              {item.reason}
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: "auto",
            borderRadius: 12,
            backgroundColor: "rgba(245, 158, 11, 0.14)",
            border: `2px solid ${HF_COLORS.accentYellow}`,
            padding: "12px 15px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.45,
          }}
        >
          <strong style={{ color: HF_COLORS.accentYellow }}>验收铁律：</strong>
          迁移完毕必须用 <span style={{ fontFamily: FONT_MONO }}>npx hyperframes diff</span> 跑 SSIM 对比，并核验{" "}
          <span style={{ fontFamily: FONT_MONO }}>paused: true</span> 与{" "}
          <span style={{ fontFamily: FONT_MONO }}>window.__timelines</span>。
        </div>
      </div>
    </div>
  );
};
