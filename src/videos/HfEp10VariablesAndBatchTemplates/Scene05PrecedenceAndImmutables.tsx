import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene05Props {
  voiceFromFrame: number;
}

const FOUR_IMMUTABLES = [
  {
    attr: "data-width",
    zh: "画布宽度（像素）",
    reason: "决定 Chromium 视口与视频编码分辨率，必须编译/启动前确定",
  },
  {
    attr: "data-height",
    zh: "画布高度（像素）",
    reason: "横屏 1920×1080 与竖屏 1080×1920 应拆为独立模板而非硬改变量",
  },
  {
    attr: "根 data-duration",
    zh: "根组合总时长",
    reason: "分片规划器依赖静态总时长切分帧段，无法在运行时靠变量动态伸缩",
  },
  {
    attr: "fps",
    zh: "工程帧率",
    reason: "影响音频采样对齐与帧号网格，属于渲染管线不可变参数",
  },
];

export const Scene05PrecedenceAndImmutables: React.FC<Scene05Props> = ({
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

  const leftActive = voiceMs < 26000;
  const rightActive = voiceMs >= 26000;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: :root CSS Precedence Trap & Differential Reskin Test */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: leftActive
            ? `2.5px solid ${HF_COLORS.accentYellow}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 25, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            :root 优先级陷阱与差分换肤验收
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentYellow }}>
            CSS PRECEDENCE
          </span>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: "rgba(244, 63, 94, 0.14)",
            border: `2px solid ${HF_COLORS.accentRose}`,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.accentRose }}>
            ✗ 致命坑：手写 :root &#123; --brand_color: #10B981; &#125;
          </span>
          <span style={{ fontSize: 18, color: HF_COLORS.textPrimary, lineHeight: 1.5 }}>
            作者样式表里的 <span style={{ fontFamily: FONT_MONO }}>:root</span> 会<strong>覆盖/遮蔽</strong>变量声明的默认值甚至未显式内联的回退色，导致换肤表面成功实则色板纹丝不动！
          </span>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: `1.5px solid ${HF_COLORS.brandPrimary}`,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            ✓ 正解：把回退色写在消费处 var(--brand_color, #10B981)
          </span>
          <span style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
            不要在 <span style={{ fontFamily: FONT_MONO }}>:root</span> 重复声明与变量同名的 CSS Custom Property。
          </span>
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentSky, 0.45)}`,
            padding: "14px 16px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: HF_COLORS.accentSky }}>差分换肤检查表（Differential Reskin）：</strong>
          上线前用一套极端对比配色（如纯红 + 长德语标题 + 透明浅色 Logo）跑一遍{" "}
          <span style={{ fontFamily: FONT_MONO }}>--strict-variables</span>，肉眼确认无硬编码残留色或文字爆框。
        </div>
      </div>

      {/* RIGHT: 4 Compile-Time Immutables */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: rightActive
            ? `2.5px solid ${HF_COLORS.accentRose}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 25, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            四大编译时不可变量（禁止变量化）
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentRose }}>
            4 IMMUTABLES
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {FOUR_IMMUTABLES.map((item) => (
            <div
              key={item.attr}
              style={{
                flex: 1,
                borderRadius: 14,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(HF_COLORS.accentRose, 0.45)}`,
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 21, fontWeight: 800, color: HF_COLORS.accentRose }}>
                  🔒 {item.attr}
                </span>
                <span style={{ fontSize: 17, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                  {item.zh}
                </span>
              </div>
              <div style={{ fontSize: 17, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
                {item.reason}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
