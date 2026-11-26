import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene02Props {
  voiceFromFrame: number;
}

const GESTURE_BINDINGS = [
  { input: "Drag", prop: "Position (X / Y)", color: HF_COLORS.brandNeon },
  { input: "Scroll", prop: "Depth (Z 景深)", color: HF_COLORS.accentSky },
  { input: "Shift + Drag", prop: "3D Rotation", color: HF_COLORS.accentPurple },
  { input: "Option/Alt + Drag", prop: "2D Rotation", color: HF_COLORS.accentYellow },
  { input: "Cmd/Ctrl + Drag / Scroll", prop: "Opacity / Scale", color: HF_COLORS.textPrimary },
];

export const Scene02CanvasKeyframesAndGesture: React.FC<Scene02Props> = ({
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

  const layersHighlight = voiceMs < 19500;
  const autoRecordHighlight = voiceMs >= 19500 && voiceMs < 36500;
  const keyframeHighlight = voiceMs >= 36500 && voiceMs < 49500;
  const gestureHighlight = voiceMs >= 49500;

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
      {/* Top Critical Warning Banner: Auto-record manual edits as keyframes */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: autoRecordHighlight
            ? "rgba(244, 63, 94, 0.18)"
            : "rgba(245, 158, 11, 0.10)",
          border: `2.5px solid ${autoRecordHighlight ? HF_COLORS.accentRose : HF_COLORS.accentYellow}`,
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              padding: "5px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(244, 63, 94, 0.22)",
              fontFamily: FONT_MONO,
              fontSize: 19,
              fontWeight: 800,
              color: HF_COLORS.accentRose,
            }}
          >
            ⚠ DEFAULT ON
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>
              Auto-record manual edits as keyframes
            </span>{" "}
            默认开启！
          </span>
        </div>
        <div style={{ fontSize: 20, color: HF_COLORS.textPrimary, fontWeight: 600 }}>
          在播放头随手拖位置会生成关键帧动画 · 全局静态微调前务必先关闭此开关
        </div>
      </div>

      {/* Main 2-column grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 26,
        }}
      >
        {/* LEFT: Layers vs Timeline Tracks + Canvas Manipulation */}
        <div
          style={{
            borderRadius: 20,
            backgroundColor: HF_COLORS.bgSurface,
            border: layersHighlight
              ? `2.5px solid ${HF_COLORS.brandNeon}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow: layersHighlight
              ? "0 0 36px rgba(16, 185, 129, 0.2)"
              : "0 14px 32px rgba(0,0,0,0.45)",
            padding: "22px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              画布直操与 Layers 遮挡铁律
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.brandNeon,
                padding: "4px 11px",
                borderRadius: 8,
                backgroundColor: "rgba(16, 185, 129, 0.16)",
              }}
            >
              LAYERS = Z-INDEX
            </span>
          </div>

          <div
            style={{
              borderRadius: 14,
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: `1.5px solid rgba(52, 211, 153, 0.45)`,
              padding: "14px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: HF_COLORS.brandNeon }}>
              轨道管时间 · Layers（z-index）管前后遮挡
            </div>
            <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.45 }}>
              Timeline 轨道上下顺序绝不决定谁盖住谁；调整元素前后层叠必须在右侧{" "}
              <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>Layers</span>{" "}
              面板拖拽或修改 CSS{" "}
              <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>z-index</span>。
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { k: "G", t: "画布参考网格", d: "开启/关闭对齐辅助网格与磁吸参考线" },
              { k: "⌘G / ⌘⇧G", t: "编组与解组", d: "把共同移动的多个元素打组同步操作" },
              { k: "Shift + 拖拽", t: "等比缩放", d: "拖动手柄时锁定元素原始宽高比" },
              { k: "方向键", t: "像素级微调", d: "单按移动 1px，Shift + 方向键步进 10px" },
            ].map((item) => (
              <div
                key={item.k}
                style={{
                  borderRadius: 13,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                  padding: "13px 15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <span style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentSky }}>
                  {item.k}
                </span>
                <span style={{ fontSize: 20, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                  {item.t}
                </span>
                <span style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.38 }}>
                  {item.d}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Keyframes (K), Path Drag (Option/Alt), Gesture Recording (R), Unroll */}
        <div
          style={{
            borderRadius: 20,
            backgroundColor: HF_COLORS.bgSurface,
            border:
              keyframeHighlight || gestureHighlight
                ? `2.5px solid ${gestureHighlight ? HF_COLORS.accentPurple : HF_COLORS.accentYellow}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow:
              keyframeHighlight || gestureHighlight
                ? `0 0 36px ${hexToRgba(gestureHighlight ? HF_COLORS.accentPurple : HF_COLORS.accentYellow, 0.22)}`
                : "0 14px 32px rgba(0,0,0,0.45)",
            padding: "22px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              关键帧路径与 R 键手势实时录制
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.accentPurple,
                padding: "4px 11px",
                borderRadius: 8,
                backgroundColor: "rgba(139, 92, 246, 0.16)",
              }}
            >
              K · OPTION/ALT · R
            </span>
          </div>

          {/* K + Option/Alt + Unroll */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div
              style={{
                borderRadius: 13,
                backgroundColor: keyframeHighlight
                  ? "rgba(245, 158, 11, 0.14)"
                  : HF_COLORS.bgElevated,
                border: `1.5px solid ${keyframeHighlight ? HF_COLORS.accentYellow : HF_COLORS.borderSubtle}`,
                padding: "13px 15px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentYellow }}>
                K · 关键帧菱形
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 4, lineHeight: 1.4 }}>
                选中画布元素按 K 在播放头增删关键帧；未选中元素时 K 键停止播放。
              </div>
            </div>

            <div
              style={{
                borderRadius: 13,
                backgroundColor: keyframeHighlight
                  ? "rgba(245, 158, 11, 0.14)"
                  : HF_COLORS.bgElevated,
                border: `1.5px solid ${keyframeHighlight ? HF_COLORS.accentYellow : HF_COLORS.borderSubtle}`,
                padding: "13px 15px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentSky }}>
                Option/Alt + Drag
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 4, lineHeight: 1.4 }}>
                整体平移整条运动路径；代码循环动效可点{" "}
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>Unroll to edit</span> 展开微调。
              </div>
            </div>
          </div>

          {/* Gesture Recording R table */}
          <div
            style={{
              marginTop: "auto",
              borderRadius: 15,
              backgroundColor: gestureHighlight
                ? "rgba(139, 92, 246, 0.14)"
                : HF_COLORS.bgElevated,
              border: `2px solid ${gestureHighlight ? HF_COLORS.accentPurple : HF_COLORS.borderSubtle}`,
              padding: "14px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: FONT_MONO, fontSize: 21, fontWeight: 800, color: HF_COLORS.accentPurple }}>
                R · Gesture Recording 手势实时录制
              </span>
              <span style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>
                按 R 开始 / 再按 R 结束录制
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {GESTURE_BINDINGS.map((b) => (
                <div
                  key={b.input}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 12px",
                    borderRadius: 9,
                    backgroundColor: HF_COLORS.bgSurface,
                  }}
                >
                  <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 700, color: b.color }}>
                    {b.input}
                  </span>
                  <span style={{ fontSize: 19, fontWeight: 600, color: HF_COLORS.textPrimary }}>
                    {b.prop}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
