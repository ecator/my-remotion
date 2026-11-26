import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene02Props {
  voiceFromFrame: number;
}

const FOUR_ANGLES = [
  { name: "Concept", zh: "底层机制拆解", desc: "提出核心问题，逐层揭开技术原理与图解", color: HF_COLORS.brandNeon },
  { name: "How-to", zh: "分步流程演示", desc: "保持统一视觉舞台，按步骤递进连线演化", color: HF_COLORS.accentSky },
  { name: "Listicle", zh: "要点清单盘点", desc: "每幕一个大号数字+结论标签，节奏逐级推高", color: HF_COLORS.accentYellow },
  { name: "Story", zh: "案例故事推演", desc: "从具体冲突情境切入，收束为可复用的通用法则", color: HF_COLORS.accentPurple },
];

export const Scene02FacelessExplainer: React.FC<Scene02Props> = ({
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

  const activeAngle =
    voiceMs >= 16500 && voiceMs < 29500
      ? Math.min(3, Math.floor((voiceMs - 16500) / 3200))
      : -1;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* Top Row: 4 Narrative Angles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
        {FOUR_ANGLES.map((a, idx) => {
          const isFocus = activeAngle === idx;
          return (
            <div
              key={a.name}
              style={{
                borderRadius: 18,
                backgroundColor: isFocus ? hexToRgba(a.color, 0.14) : HF_COLORS.bgSurface,
                border: isFocus
                  ? `2.5px solid ${a.color}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 22, fontWeight: 900, color: a.color }}>
                  {a.name}
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 17, color: HF_COLORS.textMuted }}>
                  ANGLE 0{idx + 1}
                </span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                {a.zh}
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
                {a.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom: Split Compare — Text Dump vs "one idea per scene" + ~60s */}
      <HfSplitCompare
        voiceMs={voiceMs}
        style={{ flex: 1 }}
        left={{
          badge: "✗ AVOID · 常见误区",
          meta: "TEXT DUMP",
          title: "按自然段硬切 + 死锁时长",
          subtitle: "没有视觉焦点的科普视频只会沦为念 PPT",
          tone: "danger",
          activeWindow: [30000, 44000],
          items: [
            {
              title: "一幕硬塞两三个知识点",
              description: "“explain all five caching layers in one scene” → 缺乏单一动画焦点",
            },
            {
              title: "写死精确时长 “60 seconds”",
              description: "供稿长度由真实 TTS 决定，硬锁秒数逼迫 Agent 删改或拉长停顿",
            },
            {
              title: "不指定色板与字幕强调色",
              description: "无官网可抓取，缺省色板与默认字幕胶囊缺乏品牌识别度",
            },
          ],
        }}
        right={{
          badge: "✓ INSTEAD · 黄金杠杆",
          meta: "ONE IDEA PER SCENE",
          title: "one idea per scene + 近似时长 ~60s",
          subtitle: "重排教学主轴，每幕做透一个视觉隐喻",
          tone: "emerald",
          activeWindow: [30000, 60000],
          items: [
            {
              title: "咒语：one idea per scene",
              description: "每幕围绕单一动态排版、示意图或图表展开，讲透即切下一幕",
            },
            {
              title: "写 ~60s 近似时长（带波浪号 ~）",
              description: "明确 “use my wording verbatim” 或 “restructure it freely”",
            },
            {
              title: "嵌入式字幕 + 品牌强调色高亮关键词",
              description: "例：brand color #FF5533 on off-black，embedded captions 关键词跳色",
            },
          ],
        }}
      />
    </div>
  );
};
