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

const ROUTES = [
  { input: "产品官网 URL", flow: "Product Launch 发布大片", cmd: "/hyperframes + capture", color: HF_COLORS.brandNeon },
  { input: "笔记 / 文章 / 概念", flow: "Faceless Explainer 科普解说", cmd: "one idea per scene", color: HF_COLORS.accentSky },
  { input: "Figma / 设计稿", flow: "Design Tools & Figma 导入", cmd: "hyperframes figma / /figma", color: HF_COLORS.accentPurple },
  { input: "实拍 / 音乐 / CSV / PR", flow: "Recuts · Beats · Data · PR", cmd: "EP05 下集详解", color: HF_COLORS.accentYellow },
];

export const Scene01RouterAndProductLaunch: React.FC<Scene01Props> = ({
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

  const routerActive = voiceMs < 24000;
  const launchActive = voiceMs >= 24000;
  const durationTrapActive = voiceMs >= 45500;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.04 // WORKFLOWS PART I (1–5)"
        secondaryBadge="PRODUCT · EXPLAINER · MOTION · FIGMA · AVATAR"
        title="从网页与文稿到成片："
        highlightTitle="五大商业创作工作流"
        titleSuffix=" 实战指南"
        subtitle="按输入源路由最匹配工作流：真实网站抓取、无真人科普、透明动态图形、Figma CLI 与数字人主讲"
        chips={[
          { code: "/hyperframes", label: "产品发布与科普工作流", color: HF_COLORS.brandNeon },
          { code: "FIGMA CLI", label: "tokens → component 顺序铁律", color: HF_COLORS.accentPurple },
          { code: "frame.md", label: "单一品牌真理文件", color: HF_COLORS.accentYellow },
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
            display: "grid",
            gridTemplateColumns: "0.88fr 1.12fr",
            gap: 26,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          {/* LEFT: Workflow Router */}
          <div
            style={{
              borderRadius: 20,
              backgroundColor: HF_COLORS.bgSurface,
              border: routerActive
                ? `2.5px solid ${HF_COLORS.brandNeon}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
              boxShadow: routerActive
                ? "0 0 34px rgba(16, 185, 129, 0.18)"
                : "0 14px 32px rgba(0,0,0,0.45)",
              padding: "22px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                工作流选型路由表
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  fontWeight: 700,
                  color: HF_COLORS.brandNeon,
                  padding: "4px 12px",
                  borderRadius: 8,
                  backgroundColor: "rgba(16, 185, 129, 0.16)",
                }}
              >
                /hyperframes
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
              {ROUTES.map((r) => (
                <div
                  key={r.input}
                  style={{
                    flex: 1,
                    borderRadius: 14,
                    backgroundColor: HF_COLORS.bgElevated,
                    border: `1.5px solid ${hexToRgba(r.color, 0.45)}`,
                    padding: "13px 16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 20, fontWeight: 800, color: r.color }}>{r.input}</span>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 17, color: HF_COLORS.textMuted }}>
                      {r.cmd}
                    </span>
                  </div>
                  <div style={{ fontSize: 21, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                    → {r.flow}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Workflow 1 — Product Launch Video */}
          <div
            style={{
              borderRadius: 20,
              backgroundColor: HF_COLORS.bgSurface,
              border: launchActive
                ? `2.5px solid ${HF_COLORS.accentSky}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
              boxShadow: launchActive
                ? "0 0 34px rgba(6, 182, 212, 0.2)"
                : "0 14px 32px rgba(0,0,0,0.45)",
              padding: "22px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 15,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                工作流 01 · Product Launch 产品发布大片
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  fontWeight: 700,
                  color: HF_COLORS.accentSky,
                  padding: "4px 12px",
                  borderRadius: 8,
                  backgroundColor: "rgba(6, 182, 212, 0.16)",
                }}
              >
                URL CAPTURE
              </span>
            </div>

            {/* 3-Step Narrative Spine */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr 1fr", gap: 12 }}>
              {[
                { tag: "BEAT 0 · HOOK", title: "痛点钩子", desc: "一句话直击核心痛点，回答为何要看", color: HF_COLORS.brandNeon },
                { tag: "BEATS 1–3 · PROOF", title: "3 个功能节拍", desc: "抓取真实站点 UI 截图 + 单行字幕实证", color: HF_COLORS.accentSky },
                { tag: "END CARD · CTA", title: "品牌行动号召", desc: "真实站点色板 + Logo + Try it free", color: HF_COLORS.accentPurple },
              ].map((b) => (
                <div
                  key={b.tag}
                  style={{
                    borderRadius: 14,
                    backgroundColor: HF_COLORS.bgElevated,
                    border: `1.5px solid ${hexToRgba(b.color, 0.5)}`,
                    padding: "14px 15px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 800, color: b.color }}>
                    {b.tag}
                  </span>
                  <span style={{ fontSize: 21, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                    {b.title}
                  </span>
                  <span style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
                    {b.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Knobs */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div
                style={{
                  borderRadius: 13,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                  padding: "13px 16px",
                }}
              >
                <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentYellow }}>
                  BGM 上限：under -18dB
                </div>
                <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 4 }}>
                  明确压低背景乐分贝保证旁白清晰；20s 竖屏预告可直接选 no BGM。
                </div>
              </div>
              <div
                style={{
                  borderRadius: 13,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                  padding: "13px 16px",
                }}
              >
                <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.brandNeon }}>
                  语速估算：~130 words/min
                </div>
                <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 4 }}>
                  30 秒逐字稿约 65–70 英文词；无官网时务必显式给出色值与 Logo 路径。
                </div>
              </div>
            </div>

            {/* Duration Trap */}
            <div
              style={{
                marginTop: "auto",
                borderRadius: 14,
                backgroundColor: durationTrapActive
                  ? "rgba(244, 63, 94, 0.16)"
                  : "rgba(244, 63, 94, 0.08)",
                border: `2px solid ${durationTrapActive ? HF_COLORS.accentRose : "rgba(244, 63, 94, 0.45)"}`,
                padding: "14px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentRose }}>
                ⚠ 避坑：逐字稿切勿硬写死精确时长
              </div>
              <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.45 }}>
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>✗ a 45-second video from this exact script</span>
                {"  →  "}
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>✓ a ~45-second launch video</span>（由真实 TTS 时长定最终片长）
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
