import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene03Props {
  voiceFromFrame: number;
}

const REGISTRY_BLOCKS = [
  { id: "apple-money-count", role: "里程碑数字滚动", color: HF_COLORS.brandNeon },
  { id: "code-typing", role: "终端逐字打字", color: HF_COLORS.accentSky },
  { id: "x-post", role: "社媒贴文卡片", color: HF_COLORS.accentPurple },
  { id: "nyc-paris-flight", role: "航线地图路径", color: HF_COLORS.accentYellow },
];

export const Scene03MotionGraphicsAlpha: React.FC<Scene03Props> = ({
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

  const blocksActive = voiceMs >= 16500 && voiceMs < 33500;

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
      {/* Top Strip: <10s Unnarrated + Registry Blocks */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: HF_COLORS.bgSurface,
          border: blocksActive
            ? `2.5px solid ${HF_COLORS.accentPurple}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "18px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                padding: "5px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(139, 92, 246, 0.18)",
                fontFamily: FONT_MONO,
                fontSize: 19,
                fontWeight: 800,
                color: HF_COLORS.accentPurple,
              }}
            >
              &lt; 10s · NO NARRATION
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              Motion Graphics 动态图形：运动本身即信息，优先复用官方 Block
            </span>
          </div>
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textSecondary }}>
            切忌把 2s 创意硬拉至 30s+
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {REGISTRY_BLOCKS.map((b) => (
            <div
              key={b.id}
              style={{
                borderRadius: 13,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(b.color, 0.45)}`,
                padding: "12px 15px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: b.color }}>
                {b.id}
              </span>
              <span style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>{b.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: MP4 vs WebM/MOV Transparent Overlay */}
      <HfSplitCompare
        voiceMs={voiceMs}
        style={{ flex: 1 }}
        left={{
          badge: "FULL-FRAME · MP4",
          meta: "带完整底色背景",
          title: "独立成品动态图形 → 导出 MP4",
          subtitle: "有深色/渐变/纯色全屏背景的片头、数据卡与贴文",
          tone: "emerald",
          activeWindow: [33500, 44500],
          items: [
            {
              title: "适用场景：独立发布或直接剪入主轨道",
              description: "例如 8s 深蓝底 ARR 增长统计、5s 独立 Logo Sting",
            },
            {
              title: "常见避坑：切忌对全画幅设计强要透明 WebM",
              description: "画面无透明区域时要求透明 WebM 只会产出不透明或边缘异常文件",
            },
            {
              title: "默认无旁白（no narration）",
              description: "依靠节奏感 SFX + 缓动词（snappy / bouncy）传达信息",
            },
          ],
        }}
        right={{
          badge: "ALPHA OVERLAY · WEBM / MOV",
          meta: "透明通道叠加层",
          title: "叠加在实拍上的角标 → WebM / MOV Alpha",
          subtitle: "仅在画面本身留空透明区域时使用透明通道导出",
          tone: "cyan",
          activeWindow: [44500, 62000],
          items: [
            {
              title: "适用场景：Lower Third 字幕条 / 角标 / 弹幕标注",
              description: "无背景底板，直接叠在 Premiere / Resolve / HyperFrames 实拍轨上方",
            },
            {
              title: "提示词写法：显式声明 “transparent overlay, alpha channel”",
              description: "同时写明停靠位置、停留时长，且首尾帧必须干净清场",
            },
            {
              title: "交付前务必叠在真实素材上复核边缘",
              description: "确认抗锯齿与文字对比度在复杂实拍画面上清晰可读",
            },
          ],
        }}
      />
    </div>
  );
};
