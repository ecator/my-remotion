import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

const THREE_LAWS = [
  {
    num: "禁令 01",
    en: "NO WALL-CLOCK / rAF",
    title: "严禁时钟与异步循环驱动",
    banned: ["Date.now()", "performance.now()", "requestAnimationFrame()", "setInterval / setTimeout"],
    why: "分布式渲染会乱序并行抓取第 10 帧、第 240 帧，挂钟时间与异步回调会导致帧间跳跃和完全不可复现。",
    fix: "一切动画必须由引擎传入的精确时间 t（或 paused GSAP / registerFrameSource）驱动。",
    window: [4000, 22000] as [number, number],
  },
  {
    num: "禁令 02",
    en: "NO UNSEEDED RANDOM",
    title: "严禁不可控随机数",
    banned: ["Math.random()", "gsap.utils.random() (未定种子)", "crypto.getRandomValues()"],
    why: "同一帧在两个 Worker 上跑出不同粒子坐标或抖动偏移，导出成片会出现剧烈噪点闪烁。",
    fix: "使用固定种子 PRNG（如 Mulberry32）或预计算确定性数组，确保同一帧坐标毫秒不差。",
    window: [22000, 38000] as [number, number],
  },
  {
    num: "禁令 03",
    en: "NO UNPINNED SIDE EFFECTS",
    title: "严禁渲染期外部波动与 CSS zoom",
    banned: ["渲染期未锁定 fetch()", "JS 手动 video.play()", "CSS zoom 属性"],
    why: "未锁定网络请求会超时丢帧；JS 播视频破坏帧精准解码；CSS zoom 会破坏坐标测算与选区命中。",
    fix: "数据构建前预注入，媒体交给声明式标签由引擎寻址解码，缩放统一用 transform: scale()。",
    window: [38000, 62000] as [number, number],
  },
];

export const Scene04ThreeDeterminismLaws: React.FC<Scene04Props> = ({
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

  const formulaGlow = voiceMs >= 46000;

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
          gap: 20,
        }}
      >
        {THREE_LAWS.map((law) => {
          const active = voiceMs >= law.window[0] && voiceMs < law.window[1];
          return (
            <div
              key={law.num}
              style={{
                borderRadius: 20,
                backgroundColor: active ? "rgba(244, 63, 94, 0.12)" : HF_COLORS.bgSurface,
                border: active
                  ? `2.5px solid ${HF_COLORS.accentRose}`
                  : `2px solid ${hexToRgba(HF_COLORS.accentRose, 0.4)}`,
                padding: "20px 20px",
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
                    backgroundColor: "rgba(244, 63, 94, 0.2)",
                    fontFamily: FONT_MONO,
                    fontSize: 17,
                    fontWeight: 800,
                    color: HF_COLORS.accentRose,
                  }}
                >
                  ✗ {law.num}
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 14, fontWeight: 700, color: HF_COLORS.textMuted }}>
                  {law.en}
                </span>
              </div>

              <div style={{ fontSize: 25, fontWeight: 900, color: HF_COLORS.textPrimary, lineHeight: 1.3 }}>
                {law.title}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {law.banned.map((code) => (
                  <span
                    key={code}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 8,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1.5px solid ${hexToRgba(HF_COLORS.accentRose, 0.55)}`,
                      fontFamily: FONT_MONO,
                      fontSize: 16,
                      fontWeight: 700,
                      color: HF_COLORS.accentRose,
                    }}
                  >
                    {code}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
                {law.why}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: `1.5px solid ${hexToRgba(HF_COLORS.brandNeon, 0.5)}`,
                  padding: "12px 14px",
                  fontSize: 18,
                  color: HF_COLORS.textPrimary,
                  lineHeight: 1.45,
                }}
              >
                <strong style={{ color: HF_COLORS.brandNeon }}>✓ 正解：</strong>
                {law.fix}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Deterministic Pure Function Equation */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: formulaGlow ? "rgba(16, 185, 129, 0.16)" : HF_COLORS.bgSurface,
          border: `2px solid ${formulaGlow ? HF_COLORS.brandNeon : HF_COLORS.borderSubtle}`,
          padding: "16px 26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ fontFamily: FONT_MONO, fontSize: 24, fontWeight: 800, color: HF_COLORS.brandNeon }}>
          PixelFrame(t) = PureRender(HTML, LockedAssets, FixedSeed, t)
        </div>
        <div style={{ fontSize: 19, fontWeight: 700, color: HF_COLORS.textPrimary }}>
          同一时间戳 t，在任意机器并发渲染出 100% 相同像素
        </div>
      </div>
    </div>
  );
};
