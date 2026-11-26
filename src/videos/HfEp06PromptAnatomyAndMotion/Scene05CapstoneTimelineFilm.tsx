import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene05Props {
  voiceFromFrame: number;
}

const NINE_REGIONS = [
  { id: "Type", time: "0–7s", detail: "逐字打字 + 导线诞生" },
  { id: "Mount", time: "7–14s", detail: "分裂三轨 + data-* 标签" },
  { id: "Measure", time: "14–21s", detail: "data-chart · 50+ Blocks" },
  { id: "Everywhere", time: "21–28s", detail: "world-map · Lambda/Cloud Run" },
  { id: "Material", time: "28–39s", detail: "HEVC 代理 + 抠像背后大字" },
  { id: "Surface", time: "39–45s", detail: "sdf-iris 镜头 + 磨砂面板" },
  { id: "Rhythm", time: "45–52s", detail: "hyperframes beats 节拍卡点" },
  { id: "Depth", time: "52–56s", detail: "Three.js 3D 螺旋真遮挡" },
  { id: "Render", time: "56–62s", detail: "Seed 42 两帧定格礼花" },
];

export const Scene05CapstoneTimelineFilm: React.FC<Scene05Props> = ({
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

  const activeRegionIdx =
    voiceMs >= 36000 && voiceMs < 56000
      ? Math.min(8, Math.floor((voiceMs - 36000) / 2200))
      : -1;
  const statsHighlight = voiceMs >= 52000;

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
      {/* Top: Cinematography Contract + 3 Persistent Elements */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "16px 22px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                padding: "4px 11px",
                borderRadius: 8,
                backgroundColor: "rgba(16, 185, 129, 0.18)",
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 800,
                color: HF_COLORS.brandNeon,
              }}
            >
              62s ONE-SHOT CAPSTONE
            </span>
            <span style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              《The Timeline》电影摄影契约
            </span>
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.48 }}>
            单文件 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>index.html</span> 广阔世界，单一相机
            <strong style={{ color: HF_COLORS.textPrimary }}> 扫移 + 停顿（Dwell &amp; Sweep, 1.5–2.5s）</strong>
            ，抵达换幕零硬切！
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {[
            { k: "1. The Wire", v: "3px 时间线贯穿全片形态演化", c: HF_COLORS.brandNeon },
            { k: "2. The Ruler", v: "顶部标尺同步真实播放时间", c: HF_COLORS.accentSky },
            { k: "3. Clip Card", v: "<div class=\"clip\"> 贴线穿越 9 区", c: HF_COLORS.accentYellow },
          ].map((p) => (
            <div
              key={p.k}
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(p.c, 0.5)}`,
                padding: "10px 12px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 800, color: p.c }}>
                {p.k}
              </div>
              <div style={{ fontSize: 16, color: HF_COLORS.textSecondary, marginTop: 3, lineHeight: 1.35 }}>
                {p.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle: 9 Continuous Regions Grid (3x3) */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
        }}
      >
        {NINE_REGIONS.map((reg, idx) => {
          const isActive = activeRegionIdx === idx;
          return (
            <div
              key={reg.id}
              style={{
                borderRadius: 15,
                backgroundColor: isActive ? "rgba(16, 185, 129, 0.14)" : HF_COLORS.bgSurface,
                border: isActive
                  ? `2.5px solid ${HF_COLORS.brandNeon}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "14px 18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 21, fontWeight: 900, color: isActive ? HF_COLORS.brandNeon : HF_COLORS.textPrimary }}>
                  0{idx + 1} · {reg.id}
                </span>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 17,
                    fontWeight: 700,
                    color: HF_COLORS.accentSky,
                    padding: "2px 9px",
                    borderRadius: 6,
                    backgroundColor: "rgba(6, 182, 212, 0.14)",
                  }}
                >
                  {reg.time}
                </span>
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>{reg.detail}</div>
            </div>
          );
        })}
      </div>

      {/* Bottom: Authoritative Live Registry Counts + Seed 42 Determinism */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: statsHighlight ? "rgba(16, 185, 129, 0.14)" : HF_COLORS.bgSurface,
          border: statsHighlight
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "13px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
        }}
      >
        <div style={{ display: "flex", gap: 18 }}>
          {[
            { num: "50+", label: "CATALOG BLOCKS", color: HF_COLORS.brandNeon },
            { num: "19", label: "AGENT SKILLS", color: HF_COLORS.accentSky },
            { num: "7", label: "RUNTIME ADAPTERS", color: HF_COLORS.accentYellow },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                padding: "6px 16px",
                borderRadius: 10,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(s.color, 0.5)}`,
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontSize: 28, fontWeight: 900, color: s.color }}>
                {s.num}
              </span>
              <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, fontWeight: 700 }}>
          片尾 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>mulberry32 (seed 42)</span>{" "}
          两帧定格礼花 → 每次渲染像素级一致！
        </div>
      </div>
    </div>
  );
};
