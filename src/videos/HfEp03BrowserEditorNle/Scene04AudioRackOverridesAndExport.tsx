import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

export const Scene04AudioRackOverridesAndExport: React.FC<Scene04Props> = ({
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

  const captionsCardActive = voiceMs >= 36000 && voiceMs < 46000;
  const varsCardActive = voiceMs >= 46000 && voiceMs < 55500;
  const exportCardActive = voiceMs >= 55500;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1.12fr 0.88fr",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: Audio FX vs Visual Effects Split Compare */}
      <HfSplitCompare
        voiceMs={voiceMs}
        gap={16}
        left={{
          badge: "AUDIO FX RACK",
          meta: "+12 dB CEILING",
          title: "音频混音机架（声音专属）",
          subtitle: "直写 HTML 属性，无独立工程文件",
          tone: "emerald",
          activeWindow: [5000, 36000],
          items: [
            {
              title: "一键人声修复预设",
              description: "voice-clean / voice-broadcast / Even Out Levels 自动拉平起伏",
            },
            {
              title: "Voiceover Carve 必须挂在音乐轨",
              description: "绝不挂人声轨！自动写入标准 peaking 滤波与 gain 包络线，静音间隙自然回弹",
            },
            {
              title: "音量自动化包络上限：+12 dB",
              description: "可突破 1.0 增益；注意首点会向前保持至切片开头",
            },
          ],
        }}
        right={{
          badge: "VISUAL EFFECTS",
          meta: "请勿混淆",
          title: "视觉 Effects 面板",
          subtitle: "仅处理画面视觉滤镜，与音频无关",
          tone: "danger",
          activeWindow: [7500, 16000],
          items: [
            {
              title: "常见排错：为何加了效果声音没变？",
              description: "检查节点是否 Bypassed，以及是否误改了视觉 Effects 而非 Audio FX",
            },
            {
              title: "不可自动化的音频参数静默失效",
              description: "Compressor / Limiter / Gate / Pitch shift 等不支持自动化包络",
            },
            {
              title: "导出校验：损坏链在渲染时报错",
              description: "预览时回退干声防崩溃，渲染时严格拦截避免静音错片",
            },
          ],
        }}
      />

      {/* RIGHT: Engineering Persistence & Export Gates */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Card 1: caption-overrides.json */}
        <div
          style={{
            flex: 1,
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border: captionsCardActive
              ? `2.5px solid ${HF_COLORS.accentYellow}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow: captionsCardActive
              ? "0 0 32px rgba(245, 158, 11, 0.2)"
              : "0 12px 28px rgba(0,0,0,0.4)",
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              ① 字幕单字微调持久化
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 17,
                fontWeight: 700,
                color: HF_COLORS.accentYellow,
                padding: "3px 10px",
                borderRadius: 7,
                backgroundColor: "rgba(245, 158, 11, 0.16)",
              }}
            >
              caption-overrides.json
            </span>
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.48 }}>
            画布点选单字拖拽、方向键微调 1px/10px、改色与字号自动写入{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>
              caption-overrides.json
            </span>
            ；修改词句与分组则交由 Agent 改源字幕。
          </div>
        </div>

        {/* Card 2: .hyperframes/render-variables.json */}
        <div
          style={{
            flex: 1,
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border: varsCardActive
              ? `2.5px solid ${HF_COLORS.accentPurple}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow: varsCardActive
              ? "0 0 32px rgba(139, 92, 246, 0.22)"
              : "0 12px 28px rgba(0,0,0,0.4)",
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              ② 变量模板安全交付
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 700,
                color: HF_COLORS.accentPurple,
                padding: "3px 10px",
                borderRadius: 7,
                backgroundColor: "rgba(139, 92, 246, 0.16)",
              }}
            >
              .hyperframes/render-variables.json
            </span>
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.48 }}>
            Variables 面板点 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.textPrimary }}>Use this template</span>{" "}
            自动落盘参数文件并复制带{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentPurple }}>--variables-file</span>{" "}
            的命令，杜绝 Shell 转义注入。
          </div>
        </div>

        {/* Card 3: Lint + Check + Multi-Format Export */}
        <div
          style={{
            flex: 1.15,
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border: exportCardActive
              ? `2.5px solid ${HF_COLORS.accentSky}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow: exportCardActive
              ? "0 0 32px rgba(6, 182, 212, 0.22)"
              : "0 12px 28px rgba(0,0,0,0.4)",
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              ③ 双重门禁与三格式母版导出
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 17,
                fontWeight: 700,
                color: HF_COLORS.brandNeon,
              }}
            >
              Lint + hyperframes check
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: "auto" }}>
            {[
              { fmt: "MP4", desc: "常规分享上传", color: HF_COLORS.brandNeon },
              { fmt: "WebM", desc: "网页 / 透明叠加", color: HF_COLORS.accentSky },
              { fmt: "MOV (ProRes)", desc: "后期无损母版", color: HF_COLORS.accentYellow },
            ].map((item) => (
              <div
                key={item.fmt}
                style={{
                  borderRadius: 12,
                  backgroundColor: hexToRgba(item.color, 0.12),
                  border: `1.5px solid ${hexToRgba(item.color, 0.5)}`,
                  padding: "10px 12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: item.color }}>
                  {item.fmt}
                </div>
                <div style={{ fontSize: 17, color: HF_COLORS.textSecondary, marginTop: 3 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
