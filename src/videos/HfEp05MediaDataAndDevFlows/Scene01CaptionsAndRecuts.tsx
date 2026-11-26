import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfChapterIntro } from "../../components/hyperframes/HfChapterIntro";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene01Props {
  voiceFromFrame: number;
  brandColor?: string;
  accentColor?: string;
}

export const Scene01CaptionsAndRecuts: React.FC<Scene01Props> = ({
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

  const orderHighlight = voiceMs >= 11000 && voiceMs < 29000;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.05 // WORKFLOWS PART II (6–10)"
        secondaryBadge="RECUTS · BEATS · DATA/MAPS · PR · /SLIDESHOW"
        title="万物皆可成片："
        highlightTitle="口播、音乐、数据地图、PR 与幻灯片"
        subtitle="打通实拍粗剪、节拍网格、烘焙地理数据、GitHub PR 变更视频与交互式演示文稿全链路"
        chips={[
          { code: "TRANSCRIBE", label: "Parakeet / Whisper 先剪后字幕", color: HF_COLORS.brandNeon },
          { code: "DATA & MAPS", label: "data-chart + 6 大烘焙地图", color: HF_COLORS.accentSky },
          { code: "/slideshow", label: "present:3004 避开 render 截断坑", color: HF_COLORS.accentRose },
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
          {/* Top Critical Order Strip */}
          <div
            style={{
              borderRadius: 16,
              backgroundColor: orderHighlight ? "rgba(16, 185, 129, 0.14)" : HF_COLORS.bgSurface,
              border: orderHighlight
                ? `2.5px solid ${HF_COLORS.brandNeon}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: 8,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  fontFamily: FONT_MONO,
                  fontSize: 19,
                  fontWeight: 800,
                  color: HF_COLORS.brandNeon,
                  whiteSpace: "nowrap",
                }}
              >
                STEP 1 → STEP 2
              </span>
              <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                铁律：先剔除 &gt;0.8s 长停顿再加字幕（防时间轴漂移）
              </span>
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 19,
                fontWeight: 700,
                color: HF_COLORS.accentSky,
              }}
            >
              hyperframes transcribe (Parakeet / Whisper)
            </span>
          </div>

          {/* Main Rail vs Embed Split Compare */}
          <HfSplitCompare
            voiceMs={voiceMs}
            style={{ flex: 1 }}
            left={{
              badge: "RAIL · 常规逐字轨道",
              meta: "VERBATIM DEFAULT",
              title: "人物下方标准可读字幕轨",
              subtitle: "承载绝大部分台词，安全清晰不遮人脸",
              tone: "emerald",
              activeWindow: [29000, 39000],
              items: [
                {
                  title: "适用场景：访谈 / 科普 / 必须看清文字的口播",
                  description: "默认放行内关键词 emphasis 高亮，同时保留完整逐字可读性",
                },
                {
                  title: "搭配设计卡片（Designed Cards）",
                  description: "同步弹出 Lower Third、数据计数卡、金句卡或将人物缩至画中画 PiP",
                },
                {
                  title: "明亮户外防吞字（Bright Scene）",
                  description: "背景亮度 >180 时改用深色不透明字体，避免浅色字在亮底发白消失",
                },
              ],
            }}
            right={{
              badge: "EMBED · 人物背后高光大字",
              meta: "ONE PEAK WORD · SINGLE SUBJECT",
              title: "抠像穿插人物背后的视觉爆点",
              subtitle: "克制使用：每一拍最多一个最强金句词",
              tone: "violet",
              activeWindow: [39000, 62000],
              items: [
                {
                  title: "反例避坑：绝不把整段字幕全做成 Embed",
                  description: "所有台词都藏在人物背后既遮挡阅读，又透支了高潮冲击力",
                },
                {
                  title: "单主体限制（Single-Subject Only）",
                  description: "严禁对双人播客多主体画面整段直接 Embed，否则抠像边缘剧烈闪烁",
                },
                {
                  title: "多说话人正确解法",
                  description: "先按镜头与说话人拆分单人片段，再分别应用 Rail 与高光 Embed",
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};
