import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene03Props {
  voiceFromFrame: number;
}

const SIX_MAPS = [
  { id: "us-map", type: "Choropleth 填色", desc: "按数值为美国各州渐变填色（12s）", color: HF_COLORS.brandNeon },
  { id: "us-map-bubble", type: "比例气泡图", desc: "按城市指标等比缩放气泡（12s）", color: HF_COLORS.accentSky },
  { id: "us-map-flow", type: "城际弧线流", desc: "绘制城市间起点→终点连线（12s）", color: HF_COLORS.accentPurple },
  { id: "us-map-hex", type: "等权六边形", desc: "消除面积偏差的六边形州网格（10s）", color: HF_COLORS.accentYellow },
  { id: "spain-map", type: "西班牙自治区", desc: "内置 D3 圆锥等角投影（12s）", color: HF_COLORS.accentSky },
  { id: "world-map", type: "全球国家填色", desc: "内置 Natural Earth 投影（14s）", color: HF_COLORS.brandNeon },
];

export const Scene03DataAndMaps: React.FC<Scene03Props> = ({
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

  const chartActive = voiceMs < 31000;
  const mapsActive = voiceMs >= 31000 && voiceMs < 51500;
  const bakedActive = voiceMs >= 51500;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "0.92fr 1.08fr",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: Charts & Count-Up Stats */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: chartActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: chartActive
            ? "0 0 36px rgba(16, 185, 129, 0.2)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            ① 图表与里程碑数字滚动
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 700,
              color: HF_COLORS.brandNeon,
              padding: "4px 10px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.16)",
            }}
          >
            CSV / JSON
          </span>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.brandNeon, 0.45)}`,
            padding: "14px 16px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            data-chart 官方块 vs 纯手写 SVG + GSAP
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, marginTop: 5, lineHeight: 1.48 }}>
            显式二选一：要开箱即用的纽约时报级柱/折线图就点名{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>data-chart</span>；
            要动态超车排名柱状图竞赛或手绘笔触则写明 “hand-draw everything, no chart library”。
          </div>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentYellow, 0.45)}`,
            padding: "14px 16px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentYellow }}>
            apple-money-count 里程碑计数器
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, marginTop: 5, lineHeight: 1.48 }}>
            Apple 风格金融数字滚轮 + 绿光闪烁 + 音效爆发，适合单指标高光展示。
          </div>
        </div>

        {/* $0 odometer trap */}
        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: "rgba(244, 63, 94, 0.12)",
            border: `2px solid ${HF_COLORS.accentRose}`,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentRose }}>
            ⚠ 里程表起跳格式避坑
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.45 }}>
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>✗ from $0 to $4.2M</span>（起手出现尴尬 $0.0M）
            <br />
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>✓ counts up to $4.2M</span>（固定数位干净滚动）
          </div>
        </div>
      </div>

      {/* RIGHT: 6 Map Blocks + nyc-paris-flight + Baked Geometry */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: mapsActive
            ? `2.5px solid ${HF_COLORS.accentSky}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: mapsActive
            ? "0 0 36px rgba(6, 182, 212, 0.2)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            ② 六大专职地图编码块 + 航线演示
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 700, color: HF_COLORS.accentSky }}>
            6 MAP BLOCKS
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}>
          {SIX_MAPS.map((m) => (
            <div
              key={m.id}
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(m.color, 0.45)}`,
                padding: "11px 14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: m.color }}>
                  {m.id}
                </span>
                <span style={{ fontSize: 16, fontWeight: 700, color: HF_COLORS.textMuted }}>
                  {m.type}
                </span>
              </div>
              <div style={{ fontSize: 17, color: HF_COLORS.textSecondary, marginTop: 3 }}>
                {m.desc}
              </div>
            </div>
          ))}
        </div>

        {/* nyc-paris-flight + baked geometry */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div
            style={{
              borderRadius: 13,
              backgroundColor: "rgba(139, 92, 246, 0.12)",
              border: `1.5px solid rgba(139, 92, 246, 0.45)`,
              padding: "11px 16px",
              fontSize: 19,
              color: HF_COLORS.textPrimary,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.accentPurple }}>
              nyc-paris-flight：
            </span>
            带飞机航迹、起落标记圈与落地音效的点对点航线表演（可改写起止城市）。
          </div>

          <div
            style={{
              borderRadius: 13,
              backgroundColor: bakedActive ? "rgba(16, 185, 129, 0.16)" : "rgba(16, 185, 129, 0.08)",
              border: `2px solid ${bakedActive ? HF_COLORS.brandNeon : "rgba(16, 185, 129, 0.4)"}`,
              padding: "11px 16px",
              fontSize: 19,
              color: HF_COLORS.textPrimary,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.brandNeon }}>
              确定性几何烘焙（Baked Geometry）：
            </span>
            投影地理数据在构建期直接内嵌本地 HTML，渲染期零 CDN 地理拉取！
          </div>
        </div>
      </div>
    </div>
  );
};
