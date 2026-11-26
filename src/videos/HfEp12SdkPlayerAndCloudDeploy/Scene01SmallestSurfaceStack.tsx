import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfChapterIntro } from "../../components/hyperframes/HfChapterIntro";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene01Props {
  voiceFromFrame: number;
  brandColor?: string;
  accentColor?: string;
}

const STACK_LAYERS = [
  {
    level: "L1 · 最轻入口",
    pkg: "hyperframes CLI",
    zh: "命令行批处理与 CI/CD 渲染",
    desc: "90% 自动化任务只需 CLI（render / batch / check / lambda），零代码集成成本。",
    color: HF_COLORS.brandNeon,
    window: [8000, 17000] as [number, number],
  },
  {
    level: "L2 · 无头编辑",
    pkg: "@hyperframes/sdk",
    zh: "源码级 AST 修改、增量覆盖与 Undo 栈",
    desc: "在后端或自定义编辑器里以编程方式读写组合源码与 OverrideSet。",
    color: HF_COLORS.accentSky,
    window: [17000, 26000] as [number, number],
  },
  {
    level: "L3 · 网页播放",
    pkg: "@hyperframes/player",
    zh: "<hyperframes-player> Web Component",
    desc: "Shadow DOM 隔离嵌入任意 Web/SaaS 应用，提供框架无关的实时预览与寻址。",
    color: HF_COLORS.accentPurple,
    window: [26000, 35000] as [number, number],
  },
  {
    level: "L4 · 渲染编排",
    pkg: "@hyperframes/producer",
    zh: "Headless Chromium 抓帧 + FFmpeg 编码器",
    desc: "把本地/云端 Worker 封装成可嵌入 Node 服务的工业级渲染管线。",
    color: HF_COLORS.accentYellow,
    window: [35000, 44000] as [number, number],
  },
  {
    level: "L5 · 底层内核",
    pkg: "@hyperframes/engine",
    zh: "时间轴寻址内核与运行时桥接",
    desc: "深度定制自定义画布或专有浏览器内核时的底层扩展入口。",
    color: HF_COLORS.accentRose,
    window: [44000, 56000] as [number, number],
  },
];

export const Scene01SmallestSurfaceStack: React.FC<Scene01Props> = ({
  voiceFromFrame,
  brandColor = HF_COLORS.brandPrimary,
  accentColor = HF_COLORS.accentCyan,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;
  const boardEnter = interpolate(voiceMs, [4800, 5800], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.12 // ENTERPRISE SDK & CLOUD DEPLOY"
        secondaryBadge="13 PACKAGES · HEADLESS SDK · WEB PLAYER · LAMBDA & CLOUD RUN · 4K HDR"
        title="企业级集成与分布式渲染："
        highlightTitle="Headless SDK、Player 与 Lambda/Cloud Run"
        subtitle="最小集成表面法则、13 包架构栈、Shadow DOM 播放器、全云端集群与 4K 10-bit HDR 专业导出"
        chips={[
          { code: "13 PKGS", label: "CLI → sdk → player → producer → engine", color: HF_COLORS.brandNeon },
          { code: "CLOUD", label: "HeyGen · AWS Lambda Plan v2 · Cloud Run", color: HF_COLORS.accentSky },
          { code: "PRO EXPORT", label: "4K · 10-bit HDR · 4:4:4 · Finale", color: HF_COLORS.accentYellow },
        ]}
        voiceMs={voiceMs}
        exitVoiceMsRange={[4400, 5200]}
        brandColor={brandColor}
        accentColor={accentColor}
      />

      {boardEnter > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 27, fontWeight: 900, color: HF_COLORS.textPrimary }}>
              最小集成表面法则（Smallest Integration Surface Law）· 13 包分层栈
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.brandNeon }}>
              PICK THE HIGHEST LAYER THAT FITS
            </span>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 11 }}>
            {STACK_LAYERS.map((layer) => {
              const active = voiceMs >= layer.window[0] && voiceMs < layer.window[1];
              return (
                <div
                  key={layer.pkg}
                  style={{
                    flex: 1,
                    borderRadius: 15,
                    backgroundColor: active ? hexToRgba(layer.color, 0.14) : HF_COLORS.bgSurface,
                    border: active
                      ? `2.5px solid ${layer.color}`
                      : `2px solid ${HF_COLORS.borderSubtle}`,
                    padding: "12px 22px",
                    display: "grid",
                    gridTemplateColumns: "155px 290px 340px 1fr",
                    alignItems: "center",
                    gap: 18,
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 8,
                      backgroundColor: hexToRgba(layer.color, 0.16),
                      fontFamily: FONT_MONO,
                      fontSize: 15,
                      fontWeight: 800,
                      color: layer.color,
                      textAlign: "center",
                    }}
                  >
                    {layer.level}
                  </span>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 21, fontWeight: 800, color: layer.color }}>
                    {layer.pkg}
                  </span>
                  <span style={{ fontSize: 19, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                    {layer.zh}
                  </span>
                  <span style={{ fontSize: 17, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
                    {layer.desc}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Shared Base Packages */}
          <div
            style={{
              borderRadius: 14,
              backgroundColor: HF_COLORS.bgElevated,
              border: `2px solid ${HF_COLORS.accentCyan}`,
              padding: "12px 22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 19,
            }}
          >
            <span>
              <strong style={{ color: HF_COLORS.accentSky }}>共享无依赖基座：</strong>
              <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon, fontWeight: 800 }}>
                @hyperframes/core
              </span>{" "}
              （类型/时间模型/契约常量）+{" "}
              <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow, fontWeight: 800 }}>
                @hyperframes/parsers
              </span>{" "}
              （HTML AST 与属性解析）
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.textMuted }}>
              SHARED FOUNDATION
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
