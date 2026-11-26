import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfCodeWindow } from "../../components/hyperframes/HfCodeWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene03Props {
  voiceFromFrame: number;
}

const CAPTURE_MODES = [
  {
    mode: "none",
    kernels: "fractal-noise",
    worker: "并发无锁（仅需 WebGL2）",
    desc: "仅依赖 (x, y, t, params) 过程生成纹理，不回读 DOM 像素",
    color: HF_COLORS.brandNeon,
  },
  {
    mode: "self",
    kernels: "wave-warp · displacement-map",
    worker: "锁定 1 Worker（防竞态）",
    desc: "通过 drawElementImage 捕获自身 .hf-vfx-in DOM 像素作为纹理",
    color: HF_COLORS.accentPurple,
  },
  {
    mode: "backdrop",
    kernels: "后续阶段支持",
    worker: "锁定 1 Worker",
    desc: "捕获当前层下方的完整背景合成画面进行逐像素折射扭曲",
    color: HF_COLORS.accentSky,
  },
];

export const Scene03VfxChainAndHtmlInCanvas: React.FC<Scene03Props> = ({
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

  const codeActive = voiceMs < 29000;
  const captureActive = voiceMs >= 29000 && voiceMs < 50000;
  const zeroBoxTrapActive = voiceMs >= 50000;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1.06fr 0.94fr",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: data-vfx-chain Markup + .hf-vfx-in 0x0 Trap */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <HfCodeWindow
          title="index.html · data-vfx-chain (WebGL2)"
          subtitle="同构于 data-fx-chain"
          accentColor={codeActive ? HF_COLORS.accentPurple : HF_COLORS.accentSky}
          activeLineIndex={zeroBoxTrapActive ? 5 : codeActive ? 2 : undefined}
          style={{ flex: 1 }}
          lines={[
            { text: '<div class="clip" data-start="0" data-duration="8"' },
            { text: '  data-vfx-chain=\'{"version":1,"nodes":[', highlightColor: HF_COLORS.accentPurple, badge: "WebGL2 链" },
            { text: '    {"type":"wave-warp","id":"n1","params":{"speed":1}}' },
            { text: "  ]}'" },
            { text: '  style="--vfx-n1-height: 21; --vfx-n1-width: 93">' , highlightColor: HF_COLORS.accentYellow, badge: "GSAP 变量" },
            { text: '  <canvas layoutsubtree class="hf-vfx-src">', highlightColor: HF_COLORS.brandNeon, badge: "唯一子元素" },
            { text: '    <div class="hf-vfx-in" style="width:900px;height:240px">' },
            { text: "      ...实时 DOM 内容（drawElementImage 纹理源）..." },
            { text: "    </div>" },
            { text: "  </canvas>" },
            { text: '  <canvas class="hf-vfx-out"></canvas>' },
            { text: "</div>" },
          ]}
        />

        <div
          style={{
            borderRadius: 15,
            backgroundColor: zeroBoxTrapActive
              ? "rgba(244, 63, 94, 0.18)"
              : "rgba(244, 63, 94, 0.10)",
            border: `2px solid ${HF_COLORS.accentRose}`,
            padding: "13px 17px",
            fontSize: 19,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.48,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontWeight: 900, color: HF_COLORS.accentRose }}>
            ⚠ 致命白板坑：
          </span>
          <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>.hf-vfx-in</span>{" "}
          必须写死明确的像素 <span style={{ fontFamily: FONT_MONO }}>width / height</span> 且为{" "}
          <span style={{ fontFamily: FONT_MONO }}>layoutsubtree</span> 的唯一直接子元素，用{" "}
          <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>inset: 0</span> 会塌缩成 0×0 静默消失！
        </div>
      </div>

      {/* RIGHT: 3 Capture Modes + Determinism */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: captureActive
            ? `2.5px solid ${HF_COLORS.accentPurple}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            三种捕获模式与确定性重绘
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.accentPurple }}>
            HTML-IN-CANVAS
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {CAPTURE_MODES.map((m) => (
            <div
              key={m.mode}
              style={{
                flex: 1,
                borderRadius: 14,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(m.color, 0.5)}`,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 21, fontWeight: 900, color: m.color }}>
                  capture: &quot;{m.mode}&quot;
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 16, color: HF_COLORS.textSecondary }}>
                  {m.worker}
                </span>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 17, color: HF_COLORS.textPrimary }}>
                内核：{m.kernels}
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
                {m.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: 13,
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: `1.5px solid ${HF_COLORS.brandNeon}`,
            padding: "12px 15px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.45,
          }}
        >
          纯函数确定性：只读 <span style={{ fontFamily: FONT_MONO }}>(u_size, u_t, u_fps, params, u_src)</span>，任意前后寻址像素字节一致。
        </div>
      </div>
    </div>
  );
};
