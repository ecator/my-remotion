import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfTerminalWindow } from "../../components/hyperframes/HfTerminalWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene05Props {
  voiceFromFrame: number;
}

const CUSTOM_MODES = [
  {
    name: "Build it for me",
    zh: "全权托付模式",
    desc: "由 Agent 独立决策视觉、节奏与配乐，快速产出完整可看初版",
    color: HF_COLORS.brandNeon,
  },
  {
    name: "Review the story first",
    zh: "分镜审批模式",
    desc: "先审批 Storyboard 与粗略版式，方向达成一致后再进入精制作",
    color: HF_COLORS.accentSky,
  },
  {
    name: "Co-direct it",
    zh: "深度共创导演模式",
    desc: "与 Agent 逐项打磨叙事、视觉系统、转场、音画与收尾镜头",
    color: HF_COLORS.accentPurple,
  },
];

export const Scene05SlideshowAndCustom: React.FC<Scene05Props> = ({
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

  const renderTrapActive = voiceMs >= 26000 && voiceMs < 49500;
  const customActive = voiceMs >= 49500;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1.08fr 0.92fr",
        gap: 26,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: Workflow 10 — /slideshow Interactive Presentation + CRITICAL render trap */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div
          style={{
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border: `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              工作流 10 · <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>/slideshow</span> 交互式演示文稿
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.accentSky,
                padding: "4px 10px",
                borderRadius: 8,
                backgroundColor: "rgba(6, 182, 212, 0.16)",
              }}
            >
              PORT 3004
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {[
              { k: "Fragments", v: "点击逐条揭示要点" },
              { k: "Branches & Hotspots", v: "点击热点跳转分支并精确返回" },
              { k: "Presenter Mode (P)", v: "观众全屏 + 讲者备注计时器" },
            ].map((f) => (
              <div
                key={f.k}
                style={{
                  borderRadius: 11,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                  padding: "10px 12px",
                }}
              >
                <div style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 800, color: HF_COLORS.brandNeon }}>
                  {f.k}
                </div>
                <div style={{ fontSize: 17, color: HF_COLORS.textSecondary, marginTop: 3 }}>
                  {f.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <HfTerminalWindow
          title="现场演示 vs 静态截图命令"
          headerBadge="localhost:3004"
          activeBlockIndex={0}
          blocks={[
            {
              comment: "启动活态演讲模式（端口 3004，按 P 打开同步观众视图）",
              command: "npx hyperframes present ./my-deck",
              accentColor: HF_COLORS.brandNeon,
              output: ["▸ Presenter console ready at http://localhost:3004"],
            },
            {
              comment: "需要逐页静态图导出时使用 snapshot",
              command: "npx hyperframes snapshot ./my-deck",
              accentColor: HF_COLORS.accentSky,
            },
          ]}
        />

        {/* CRITICAL SLIDE-1 TRAP */}
        <div
          style={{
            marginTop: "auto",
            borderRadius: 16,
            backgroundColor: renderTrapActive
              ? "rgba(244, 63, 94, 0.20)"
              : "rgba(244, 63, 94, 0.10)",
            border: `2.5px solid ${HF_COLORS.accentRose}`,
            padding: "14px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 900, color: HF_COLORS.accentRose }}>
            🚫 致命陷阱：切勿对 /slideshow 运行 hyperframes render！
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.48 }}>
            它不会报错，而是因没有主根组合，静默只渲染{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow, fontWeight: 800 }}>
              第一页（slide 1）
            </span>{" "}
            产出几秒截断 MP4！现场演示用{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>hyperframes present</span>，
            静图用 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>hyperframes snapshot</span>。
          </div>
        </div>
      </div>

      {/* RIGHT: Custom Video (general-video) 3 Collaboration Modes */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: customActive
            ? `2.5px solid ${HF_COLORS.accentPurple}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: customActive
            ? "0 0 36px rgba(139, 92, 246, 0.22)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            兜底定制流 · Custom Video
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 700,
              color: HF_COLORS.accentPurple,
              padding: "4px 11px",
              borderRadius: 8,
              backgroundColor: "rgba(139, 92, 246, 0.16)",
            }}
          >
            general-video
          </span>
        </div>

        <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
          当项目混合多种素材、需要重排实拍或长篇多幕结构时，走定制流并直接声明协作模式：
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
          {CUSTOM_MODES.map((m, idx) => (
            <div
              key={m.name}
              style={{
                flex: 1,
                borderRadius: 15,
                backgroundColor: HF_COLORS.bgElevated,
                border: `2px solid ${hexToRgba(m.color, 0.5)}`,
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 21, fontWeight: 800, color: m.color }}>
                  0{idx + 1}. {m.name}
                </span>
                <span style={{ fontSize: 19, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                  {m.zh}
                </span>
              </div>
              <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
