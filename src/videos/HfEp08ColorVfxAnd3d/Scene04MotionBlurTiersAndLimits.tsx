import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene04Props {
  voiceFromFrame: number;
}

export const Scene04MotionBlurTiersAndLimits: React.FC<Scene04Props> = ({
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

  const limitsActive = voiceMs >= 43500;

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
      {/* Top Attribute Strip */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "13px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.18)",
              fontFamily: FONT_MONO,
              fontSize: 19,
              fontWeight: 800,
              color: HF_COLORS.brandNeon,
            }}
          >
            data-motion-blur=&quot;on&quot;
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textPrimary }}>
            shutter=240° · phase=centred · samples≥32
          </span>
        </div>
        <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 700, color: HF_COLORS.accentYellow }}>
          锐利无模糊输出：--page-motion-blur off
        </span>
      </div>

      {/* Middle: Split Compare Filter vs Capture Tier */}
      <HfSplitCompare
        voiceMs={voiceMs}
        style={{ flex: 1 }}
        left={{
          badge: "FILTER TIER · 默认兼容",
          meta: 'data-motion-blur-tier="auto"',
          title: "SVG 多重残影滤镜层级（Filter）",
          subtitle: "兼容所有 Chrome、WebGL 画布与分布式渲染",
          tone: "emerald",
          activeWindow: [24500, 34500],
          items: [
            {
              title: "覆盖范围广且零 DOM 包裹",
              description: "不包裹根元素，暂停编辑和选区完全无干扰，云端分片渲染默认使用此层级",
            },
            {
              title: "性能与一致性：渲染固定 32 采样",
              description: "平移速度拖影自然；高速旋转与缩放仅表现为柔化而非圆弧/射线拉丝",
            },
          ],
        }}
        right={{
          badge: "CAPTURE TIER · 真物理拖影",
          meta: 'data-motion-blur-tier="capture"',
          title: "HTML-in-Canvas 捕获层级（Capture）",
          subtitle: "高速旋转圆弧、镜头推拉射线物理级拖影",
          tone: "violet",
          activeWindow: [34500, 44500],
          items: [
            {
              title: "按路径重绘每一采样帧",
              description: "旋转方块中心锐利边缘沿圆弧拖尾，缩放元素向外放射拉丝",
            },
            {
              title: "严格降级条件（自动回退至 Filter）",
              description: "遇到 WebGL/WebGPU 画布、根节点 transform 或嵌套 VFX 画布时自动回退",
            },
          ],
        }}
      />

      {/* Bottom: 2 Hard Conflict Warnings */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div
          style={{
            borderRadius: 15,
            backgroundColor: limitsActive ? "rgba(244, 63, 94, 0.16)" : HF_COLORS.bgSurface,
            border: `2px solid ${limitsActive ? HF_COLORS.accentRose : HF_COLORS.borderSubtle}`,
            padding: "13px 18px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.45,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.accentRose }}>
            ⚠ 渲染挂起冲突：
          </span>
          Motion Blur <span style={{ fontFamily: FONT_MONO }}>capture</span> + 嵌套{" "}
          <span style={{ fontFamily: FONT_MONO }}>data-vfx-chain</span> 捕获画布会卡死渲染器，引擎将自动回退{" "}
          <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>filter</span>（可用{" "}
          <span style={{ fontFamily: FONT_MONO }}>hyperframes check</span> 查因）。
        </div>

        <div
          style={{
            borderRadius: 15,
            backgroundColor: limitsActive ? "rgba(245, 158, 11, 0.14)" : HF_COLORS.bgSurface,
            border: `2px solid ${limitsActive ? HF_COLORS.accentYellow : HF_COLORS.borderSubtle}`,
            padding: "13px 18px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.45,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.accentYellow }}>
            ⚠ WebGPU 硬件边界：
          </span>
          Catalog 中的 <span style={{ fontFamily: FONT_MONO }}>liquid-glass-notification</span>{" "}
          强依赖 WebGPU，无 WebGPU 的软件渲染环境下会静默退出！
        </div>
      </div>
    </div>
  );
};
