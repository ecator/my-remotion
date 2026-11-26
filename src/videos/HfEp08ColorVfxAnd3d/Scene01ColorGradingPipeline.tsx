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

const EIGHT_STAGES = [
  { id: "adjust", zh: "基础影调", color: HF_COLORS.brandNeon },
  { id: "wheels", zh: "三路色轮", color: HF_COLORS.brandNeon },
  { id: "curves", zh: "RGB 曲线", color: HF_COLORS.accentSky },
  { id: "hueCurves", zh: "色相曲线", color: HF_COLORS.accentSky },
  { id: "secondaries", zh: "HSL 键控", color: HF_COLORS.accentYellow },
  { id: "lut", zh: ".cube LUT", color: HF_COLORS.accentYellow },
  { id: "details", zh: "颗粒暗角", color: HF_COLORS.accentPurple },
  { id: "effects", zh: "风格滤镜", color: HF_COLORS.accentPurple },
];

const NINE_CSS_VARS = [
  "--hf-color-grading-ascii",
  "--hf-color-grading-bloom",
  "--hf-color-grading-blur",
  "--hf-color-grading-dither",
  "--hf-color-grading-exposure",
  "--hf-color-grading-intensity",
  "--hf-color-grading-kuwahara",
  "--hf-color-grading-pixelate",
  "--hf-color-grading-lut-intensity",
];

export const Scene01ColorGradingPipeline: React.FC<Scene01Props> = ({
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

  const pipelineActive = voiceMs >= 13500 && voiceMs < 35500;
  const rulesActive = voiceMs >= 35500 && voiceMs < 55500;
  const varsActive = voiceMs >= 55500;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.08 // COLOR GRADING, VFX & 3D"
        secondaryBadge="8-STAGE GRADE · WEBGL2 VFX · MOTION BLUR · THREE.JS"
        title="电影感调色与视觉特效："
        highlightTitle="调色管线、data-vfx-chain 与 3D"
        subtitle="八步固定顺序非破坏性调色、逐像素 WebGL2 特效链、真快门运动模糊与 14 款着色器转场"
        chips={[
          { code: "8 STAGES", label: "adjust → ... → effects", color: HF_COLORS.brandNeon },
          { code: "WEBGL2", label: "data-vfx-chain & drawElementImage", color: HF_COLORS.accentPurple },
          { code: "3D + SHADER", label: "Three.js + 14 Shader Transitions", color: HF_COLORS.accentSky },
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
            gap: 18,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          {/* Top: 8-Stage Fixed-Order Pipeline */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: HF_COLORS.bgSurface,
              border: pipelineActive
                ? `2.5px solid ${HF_COLORS.brandNeon}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
              padding: "16px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>data-color-grading</span>{" "}
                八步固定顺序非破坏性调色管线
              </span>
              <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 700, color: HF_COLORS.accentSky }}>
                FIXED EXECUTION ORDER
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 10 }}>
              {EIGHT_STAGES.map((st, idx) => (
                <div
                  key={st.id}
                  style={{
                    borderRadius: 12,
                    backgroundColor: HF_COLORS.bgElevated,
                    border: `1.5px solid ${hexToRgba(st.color, 0.5)}`,
                    padding: "10px 8px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <span style={{ fontFamily: FONT_MONO, fontSize: 15, color: HF_COLORS.textMuted }}>
                    0{idx + 1}
                  </span>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 800, color: st.color }}>
                    {st.id}
                  </span>
                  <span style={{ fontSize: 16, color: HF_COLORS.textPrimary }}>{st.zh}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom 2 Columns: Rules & <hf-color-group> + 9 Tweenable CSS Vars */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "0.96fr 1.04fr",
              gap: 24,
            }}
          >
            {/* LEFT: 3 Iron Rules & <hf-color-group> */}
            <div
              style={{
                borderRadius: 18,
                backgroundColor: HF_COLORS.bgSurface,
                border: rulesActive
                  ? `2.5px solid ${HF_COLORS.accentRose}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                三条硬约束与 &lt;hf-color-group&gt; 机位分组
              </div>

              <div
                style={{
                  borderRadius: 12,
                  backgroundColor: "rgba(244, 63, 94, 0.12)",
                  border: `1.5px solid ${HF_COLORS.accentRose}`,
                  padding: "12px 15px",
                  fontSize: 19,
                  color: HF_COLORS.textPrimary,
                  lineHeight: 1.45,
                }}
              >
                <strong style={{ color: HF_COLORS.accentRose }}>1. 仅限媒体元素：</strong>
                只支持 <span style={{ fontFamily: FONT_MONO }}>&lt;img&gt; / &lt;video&gt; / &lt;canvas&gt; / &lt;hf-color-group&gt;</span>，加在文本或 div 上触发{" "}
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>color_grading_non_media</span>。
              </div>

              <div
                style={{
                  borderRadius: 12,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                  padding: "12px 15px",
                  fontSize: 19,
                  color: HF_COLORS.textPrimary,
                  lineHeight: 1.45,
                }}
              >
                <strong style={{ color: HF_COLORS.accentYellow }}>2. 必须命名分段嵌套：</strong>
                扁平 JSON（如 <span style={{ fontFamily: FONT_MONO }}>&#123;&quot;exposure&quot;:0.15&#125;</span>）静默无效，必须写入{" "}
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>adjust / details / effects</span>。
              </div>

              <div
                style={{
                  marginTop: "auto",
                  borderRadius: 12,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(HF_COLORS.accentSky, 0.45)}`,
                  padding: "12px 15px",
                  fontSize: 18,
                  color: HF_COLORS.textSecondary,
                  lineHeight: 1.45,
                }}
              >
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky, fontWeight: 700 }}>
                  &lt;hf-color-group&gt;
                </span>{" "}
                一键统一多段同机位素材；单切片自带的 <span style={{ fontFamily: FONT_MONO }}>data-color-grading</span> 优先级更高。
              </div>
            </div>

            {/* RIGHT: 9 Tweenable --hf-color-grading-* CSS Variables */}
            <div
              style={{
                borderRadius: 18,
                backgroundColor: HF_COLORS.bgSurface,
                border: varsActive
                  ? `2.5px solid ${HF_COLORS.accentYellow}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                  9 个可被 GSAP 缓动的 CSS 变量
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.accentYellow }}>
                  9 TWEENABLE VARS
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {NINE_CSS_VARS.map((v) => (
                  <div
                    key={v}
                    style={{
                      borderRadius: 9,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1.5px solid ${
                        v === "--hf-color-grading-intensity"
                          ? HF_COLORS.accentYellow
                          : HF_COLORS.borderSubtle
                      }`,
                      padding: "7px 11px",
                      fontFamily: FONT_MONO,
                      fontSize: 15,
                      fontWeight: 700,
                      color:
                        v === "--hf-color-grading-intensity"
                          ? HF_COLORS.accentYellow
                          : HF_COLORS.accentSky,
                    }}
                  >
                    {v}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  borderRadius: 12,
                  backgroundColor: "rgba(245, 158, 11, 0.14)",
                  border: `2px solid ${HF_COLORS.accentYellow}`,
                  padding: "11px 15px",
                  fontSize: 18,
                  color: HF_COLORS.textPrimary,
                  lineHeight: 1.45,
                }}
              >
                <strong style={{ color: HF_COLORS.accentYellow }}>⚠ 避坑：</strong>
                <span style={{ fontFamily: FONT_MONO }}>--hf-color-grading-intensity</span> 只缩放基础调色与 LUT，
                <strong>绝不缩放 details（颗粒暗角）或 effects（滤镜）</strong>！
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
