import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene05Props {
  voiceFromFrame: number;
}

const QUALITY_GATES = [
  {
    step: "GATE 01",
    cmd: "npx hyperframes doctor",
    title: "环境与依赖健康体检",
    color: HF_COLORS.accentSky,
    window: [2000, 17000] as [number, number],
    checks: [
      "校验 Node ≥ 22、FFmpeg/ffprobe 与编解码器可用性",
      "检测 Chromium / GPU 加速及软件渲染回退状态",
      "排查字体缓存、端口占用与常见权限异常",
    ],
    footer: "开工前先跑一遍，5 秒排除宿主机环境雷区",
  },
  {
    step: "GATE 02",
    cmd: "@hyperframes/lint",
    title: "静态 HTML/CSS/JS 契约扫描",
    color: HF_COLORS.brandNeon,
    window: [17000, 34000] as [number, number],
    checks: [
      "秒级捕获废弃 data-end / data-layer 与缺失 data-no-timeline",
      "拦截自闭合 <video />、<hf-audio-group /> 等解析隐患",
      "检查非媒体节点调色、变量回退与根 <template> 误用",
    ],
    footer: "毫秒级零渲染拦截语法与契约硬伤",
  },
  {
    step: "GATE 03",
    cmd: "npx hyperframes check",
    title: "8 fps 工艺采样与视觉门禁",
    color: HF_COLORS.accentYellow,
    window: [34000, 62000] as [number, number],
    checks: [
      "以 8 fps 快速抽帧并产出 .motion.json 动效节奏报告",
      "自动校验 WCAG 文字对比度与字体溢出错位",
      "支持 --safe-zone 安全区叠加与 OpenCV 人脸防遮挡检测",
    ],
    footer: "导出全量 MP4 前的最后一道 AI + 视觉质检闸门",
  },
];

export const Scene05QualityGatesTrio: React.FC<Scene05Props> = ({
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
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 22,
        }}
      >
        {QUALITY_GATES.map((gate) => {
          const active = voiceMs >= gate.window[0] && voiceMs < gate.window[1];
          return (
            <div
              key={gate.step}
              style={{
                borderRadius: 20,
                backgroundColor: active ? hexToRgba(gate.color, 0.12) : HF_COLORS.bgSurface,
                border: active
                  ? `2.5px solid ${gate.color}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "22px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: hexToRgba(gate.color, 0.18),
                    fontFamily: FONT_MONO,
                    fontSize: 16,
                    fontWeight: 800,
                    color: gate.color,
                  }}
                >
                  {gate.step}
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 15, color: HF_COLORS.textMuted }}>
                  QUALITY GATE
                </span>
              </div>

              <div
                style={{
                  borderRadius: 12,
                  backgroundColor: "#0A0E17",
                  border: `1.5px solid ${hexToRgba(gate.color, 0.45)}`,
                  padding: "11px 14px",
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  fontWeight: 800,
                  color: gate.color,
                }}
              >
                $ {gate.cmd}
              </div>

              <div style={{ fontSize: 25, fontWeight: 900, color: HF_COLORS.textPrimary }}>
                {gate.title}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {gate.checks.map((chk) => (
                  <div
                    key={chk}
                    style={{
                      borderRadius: 10,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1px solid ${HF_COLORS.borderSubtle}`,
                      padding: "10px 13px",
                      fontSize: 18,
                      color: HF_COLORS.textPrimary,
                      lineHeight: 1.45,
                    }}
                  >
                    <span style={{ color: gate.color, fontWeight: 800, marginRight: 8 }}>▸</span>
                    {chk}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  fontSize: 17,
                  fontWeight: 700,
                  color: gate.color,
                }}
              >
                {gate.footer}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CI Pipeline Strip */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.brandPrimary}`,
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: FONT_MONO,
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        <span style={{ color: HF_COLORS.accentSky }}>hyperframes doctor</span>
        <span style={{ color: HF_COLORS.textMuted }}>→</span>
        <span style={{ color: HF_COLORS.brandNeon }}>@hyperframes/lint</span>
        <span style={{ color: HF_COLORS.textMuted }}>→</span>
        <span style={{ color: HF_COLORS.accentYellow }}>hyperframes check --safe-zone</span>
        <span style={{ color: HF_COLORS.textMuted }}>→</span>
        <span style={{ color: HF_COLORS.textPrimary }}>npx hyperframes render</span>
      </div>
    </div>
  );
};
