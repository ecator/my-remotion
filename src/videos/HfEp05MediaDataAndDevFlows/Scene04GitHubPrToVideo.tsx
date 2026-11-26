import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

const CODE_BLOCKS = [
  {
    name: "code-diff",
    angle: "Feature Reveal · Fix · Changelog",
    color: HF_COLORS.brandNeon,
    summary: "行级增删对比（红删绿增），最适合展示 Bug 根因与精准一行修复",
    snippet: ["- timeout: 5000,", "+ timeout: 30000, // deterministic seek"],
    window: [31500, 38500] as [number, number],
  },
  {
    name: "code-morph",
    angle: "Refactor Walkthrough",
    color: HF_COLORS.accentSky,
    summary: "代码结构平滑变形，直观呈现重构前后形态演进而不必逐行对比",
    snippet: ["// legacy callback tree", "→ async seekable timeline pipeline"],
    window: [38500, 44000] as [number, number],
  },
  {
    name: "code-typing",
    angle: "New API · CLI Intro",
    color: HF_COLORS.accentPurple,
    summary: "逐字打字机演示全新接口或 CLI 命令的诞生，天然制造节奏焦点",
    snippet: ["$ npx hyperframes check", "✓ 0 lint errors · 100% deterministic"],
    window: [44000, 52000] as [number, number],
  },
];

export const Scene04GitHubPrToVideo: React.FC<Scene04Props> = ({
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

  const principleActive = voiceMs < 31500;

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
      {/* Top Story Principle Strip */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: principleActive ? "rgba(16, 185, 129, 0.12)" : HF_COLORS.bgSurface,
          border: principleActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "18px 24px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 20,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            工作流 09 · GitHub PR to Video 核心叙事铁律
          </div>
          <div style={{ fontSize: 20, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
            先讲「用户拿到什么价值」，再用 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>2–4 个高可读核心 Hunk</span> 作为证据，严禁一开场逐文件念完整 Diff！
          </div>
        </div>

        <div
          style={{
            borderRadius: 13,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${HF_COLORS.borderSubtle}`,
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.accentYellow }}>
            自动核验 PR 真实生命周期
          </div>
          <div style={{ fontSize: 18, color: HF_COLORS.textPrimary }}>
            严格区分 <span style={{ fontFamily: FONT_MONO }}>Proposed / Merged / Released</span>，绝不把未发布提案宣传成已上线；片尾落版版本号 + Repo URL。
          </div>
        </div>
      </div>

      {/* 3 Code Block Cards */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {CODE_BLOCKS.map((blk) => {
          const isActive = voiceMs >= blk.window[0] && voiceMs < blk.window[1];
          return (
            <div
              key={blk.name}
              style={{
                borderRadius: 20,
                backgroundColor: HF_COLORS.bgSurface,
                border: isActive
                  ? `2.5px solid ${blk.color}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                boxShadow: isActive
                  ? `0 0 36px ${hexToRgba(blk.color, 0.22)}`
                  : "0 14px 32px rgba(0,0,0,0.45)",
                padding: "22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    padding: "5px 13px",
                    borderRadius: 9,
                    backgroundColor: hexToRgba(blk.color, 0.18),
                    fontFamily: FONT_MONO,
                    fontSize: 22,
                    fontWeight: 900,
                    color: blk.color,
                  }}
                >
                  {blk.name}
                </span>
              </div>

              <div style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 700, color: HF_COLORS.textMuted }}>
                适用：{blk.angle}
              </div>

              <div style={{ fontSize: 21, color: HF_COLORS.textPrimary, lineHeight: 1.5 }}>
                {blk.summary}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  borderRadius: 13,
                  backgroundColor: "#0A0E17",
                  border: `1.5px solid ${hexToRgba(blk.color, 0.4)}`,
                  padding: "14px 16px",
                  fontFamily: FONT_MONO,
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: HF_COLORS.textSecondary,
                }}
              >
                {blk.snippet.map((line, i) => (
                  <div
                    key={line}
                    style={{
                      color:
                        line.startsWith("-")
                          ? HF_COLORS.accentRose
                          : line.startsWith("+") || line.startsWith("✓")
                            ? HF_COLORS.brandNeon
                            : i === 1
                              ? blk.color
                              : HF_COLORS.textSecondary,
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
