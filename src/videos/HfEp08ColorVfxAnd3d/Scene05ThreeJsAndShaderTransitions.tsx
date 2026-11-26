import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene05Props {
  voiceFromFrame: number;
}

const FOURTEEN_SHADERS = [
  "domain-warp",
  "ridged-burn",
  "whip-pan",
  "sdf-iris",
  "ripple-waves",
  "gravitational-lens",
  "cinematic-zoom",
  "chromatic-split",
  "glitch",
  "swirl-vortex",
  "thermal-distortion",
  "flash-through-white",
  "light-leak",
  "cross-warp-morph",
];

export const Scene05ThreeJsAndShaderTransitions: React.FC<Scene05Props> = ({
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

  const threeActive = voiceMs < 33500;
  const shaderActive = voiceMs >= 33500;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "0.92fr 1.08fr",
        gap: 26,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: Three.js via the adapter vs CSS 3D */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: threeActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: threeActive
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
            ① 真 3D 渲染：告别 CSS 假透视
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.brandNeon }}>
            SEEK-SAFE 3D
          </span>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: "rgba(244, 63, 94, 0.10)",
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentRose, 0.5)}`,
            padding: "14px 16px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentRose }}>
            ✗ CSS perspective 假 3D 局限
          </div>
          <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 4, lineHeight: 1.45 }}>
            无真实法线光照与环境反射，复杂几何交叉时 Z-buffer 深度遮挡频繁穿帮。
          </div>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: `2px solid ${HF_COLORS.brandNeon}`,
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flex: 1,
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 900, color: HF_COLORS.brandNeon }}>
            ✓ 明确指定：Three.js via the adapter
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.52 }}>
            • 帧适配器将 Three.js 渲染时钟锁死到确定性帧号 <span style={{ fontFamily: FONT_MONO }}>seek(t)</span>
            <br />• 真实 PBR 材质光照、边缘高光、相机自由运镜与真实深度遮挡
            <br />• 透明 WebGL 画布可与 HTML/CSS 排版和花字层原生混排合成
          </div>
        </div>
      </div>

      {/* RIGHT: @hyperframes/shader-transitions (14 Shaders & Page-Side Compositing) */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: shaderActive
            ? `2.5px solid ${HF_COLORS.accentSky}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: shaderActive
            ? "0 0 36px rgba(6, 182, 212, 0.22)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            ② <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>@hyperframes/shader-transitions</span>
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 800,
              color: HF_COLORS.accentSky,
              padding: "4px 11px",
              borderRadius: 8,
              backgroundColor: "rgba(6, 182, 212, 0.16)",
            }}
          >
            14 SHADER_NAMES
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 9 }}>
          {FOURTEEN_SHADERS.map((sh) => (
            <div
              key={sh}
              style={{
                borderRadius: 10,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(HF_COLORS.accentSky, 0.35)}`,
                padding: "9px 10px",
                textAlign: "center",
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 700,
                color: HF_COLORS.textPrimary,
              }}
            >
              {sh}
            </div>
          ))}
        </div>

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
              borderRadius: 12,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${HF_COLORS.borderSubtle}`,
              padding: "11px 15px",
              fontSize: 18,
              color: HF_COLORS.textPrimary,
              lineHeight: 1.45,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon, fontWeight: 800 }}>
              installPageSideCompositor()：
            </span>
            渲染期启用确定性页内着色器合成，WebGL 不可用时自动平滑回退常规时间轴。
          </div>

          <div
            style={{
              borderRadius: 12,
              backgroundColor: "rgba(245, 158, 11, 0.12)",
              border: `1.5px solid ${HF_COLORS.accentYellow}`,
              padding: "10px 15px",
              fontSize: 18,
              color: HF_COLORS.textPrimary,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow, fontWeight: 800 }}>
              排错提醒：
            </span>
            页内着色器转场与捕获型 <span style={{ fontFamily: FONT_MONO }}>data-vfx-chain</span> 同屏混用可能导致转场外旧纹理残留，建议错开编排。
          </div>
        </div>
      </div>
    </div>
  );
};
