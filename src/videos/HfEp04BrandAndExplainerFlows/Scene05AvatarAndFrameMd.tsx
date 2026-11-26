import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfCodeWindow } from "../../components/hyperframes/HfCodeWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene05Props {
  voiceFromFrame: number;
}

export const Scene05AvatarAndFrameMd: React.FC<Scene05Props> = ({
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

  const avatarActive = voiceMs < 31500;
  const frameMdActive = voiceMs >= 31500;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "0.96fr 1.04fr",
        gap: 26,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: Workflow 5 — AI Avatar Presenter */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: avatarActive
            ? `2.5px solid ${HF_COLORS.accentPurple}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: avatarActive
            ? "0 0 36px rgba(139, 92, 246, 0.22)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 26px",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            工作流 05 · AI Avatar 数字人主讲
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 700,
              color: HF_COLORS.accentPurple,
              padding: "4px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(139, 92, 246, 0.16)",
            }}
          >
            HEYGEN OAUTH
          </span>
        </div>

        <div
          style={{
            borderRadius: 13,
            backgroundColor: "#0A0E17",
            border: `1.5px solid ${HF_COLORS.borderSubtle}`,
            padding: "13px 16px",
            fontFamily: FONT_MONO,
            fontSize: 19,
            color: HF_COLORS.brandNeon,
          }}
        >
          $ heygen auth login --oauth
        </div>

        {/* 3-Layer Depth Sandwich Visual */}
        <div
          style={{
            borderRadius: 16,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${HF_COLORS.borderSubtle}`,
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ fontSize: 21, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            remove-background 人物背后穿插大字三层架构
          </div>
          {[
            { layer: "LAYER 3 · 前景抠像人物", desc: "数字人主讲人前景遮挡（Cutout Alpha）", color: HF_COLORS.brandNeon },
            { layer: "LAYER 2 · 巨型动态标题层", desc: "Display 级关键词从主讲人身后穿插滑过", color: HF_COLORS.accentYellow },
            { layer: "LAYER 1 · 品牌背景与图表", desc: "可编辑 HTML 数据图表、B-roll 与品牌底板", color: HF_COLORS.accentSky },
          ].map((l) => (
            <div
              key={l.layer}
              style={{
                borderRadius: 11,
                backgroundColor: HF_COLORS.bgSurface,
                borderLeft: `4px solid ${l.color}`,
                padding: "10px 14px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: l.color }}>
                {l.layer}
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 2 }}>
                {l.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 13,
            backgroundColor: "rgba(139, 92, 246, 0.12)",
            border: `1.5px solid rgba(139, 92, 246, 0.45)`,
            padding: "13px 16px",
            fontSize: 19,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.45,
          }}
        >
          数字人片段本地沉淀进工程文件，支持随时切出全屏产品图与逐词字幕，全片始终保持源码可编辑。
        </div>
      </div>

      {/* RIGHT: frame.md Source of Brand Truth + Video Medium Scale-Up */}
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <HfCodeWindow
          title="frame.md"
          subtitle="Source of Brand Truth"
          accentColor={frameMdActive ? HF_COLORS.brandNeon : HF_COLORS.accentSky}
          activeLineIndex={frameMdActive ? 4 : undefined}
          style={{ flex: 1 }}
          lines={[
            { text: "---" },
            { text: 'brand_name: "Acme Cloud"', badge: "机读 Frontmatter" },
            { text: 'bg_canvas: "#07090E"' },
            { text: 'brand_primary: "#10B981"', highlightColor: HF_COLORS.brandNeon, badge: "严格锁死色值" },
            { text: 'font_display: "Noto Sans SC"', highlightColor: HF_COLORS.accentSky, badge: "锁死字体族" },
            { text: "---" },
            { text: "# Do's & Don'ts" },
            { text: "- Keep palette & font family verbatim." },
            { text: "- Scale borders (1.5-2px) & body (>=20px) for 1080p H.264.", highlightColor: HF_COLORS.accentYellow, badge: "视频媒介放大" },
          ]}
        />

        <div
          style={{
            borderRadius: 16,
            backgroundColor: frameMdActive
              ? "rgba(16, 185, 129, 0.14)"
              : HF_COLORS.bgSurface,
            border: frameMdActive
              ? `2.5px solid ${HF_COLORS.brandNeon}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            视频媒介放大原则（Scaled Up for 1080p &amp; H.264）
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.5 }}>
            Web 的 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>1px 描边 / 0.06 弱阴影 / 14px 正文</span>{" "}
            经 H.264 压缩后会直接糊掉；用{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>frame.md</span>{" "}
            锁死色值与字体，把布局间距、高对比度边框与字号按视频尺度放大！
          </div>
        </div>
      </div>
    </div>
  );
};
