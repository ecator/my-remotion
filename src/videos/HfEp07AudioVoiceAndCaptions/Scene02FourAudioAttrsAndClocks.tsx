import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene02Props {
  voiceFromFrame: number;
}

const FOUR_ATTRS = [
  {
    attr: "data-fx-chain",
    type: "JSON (双引号 &quot;)",
    desc: "信号链效果器列表（EQ / 压缩 / 限制器）",
    color: HF_COLORS.brandNeon,
  },
  {
    attr: "data-automation",
    type: "JSON · +12 dB 上限",
    desc: "音量与效果参数包络曲线（truepeak -3 dBTP）",
    color: HF_COLORS.accentSky,
  },
  {
    attr: "data-fx-carve",
    type: "JSON · 仅挂音乐轨",
    desc: "Voiceover Carve 人声频段雕刻与自动闪避",
    color: HF_COLORS.accentYellow,
  },
  {
    attr: "data-audio-group",
    type: "纯 ID → <hf-audio-group>",
    desc: "将多段人声汇聚到总线统一挂效果与闪避",
    color: HF_COLORS.accentPurple,
  },
];

export const Scene02FourAudioAttrsAndClocks: React.FC<Scene02Props> = ({
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

  const attrsActive = voiceMs < 36000;

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
      {/* Top Row: 4 Audio HTML Attributes */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {FOUR_ATTRS.map((a) => (
          <div
            key={a.attr}
            style={{
              borderRadius: 16,
              backgroundColor: attrsActive ? hexToRgba(a.color, 0.10) : HF_COLORS.bgSurface,
              border: `2px solid ${attrsActive ? a.color : HF_COLORS.borderSubtle}`,
              padding: "15px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 900, color: a.color }}>
              {a.attr}
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.textPrimary }}>
              {a.type}
            </span>
            <span style={{ fontSize: 17, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
              {a.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom: Split Compare — Critical Traps (Carve Quote Rule + Two Clocks + Backward Hold) */}
      <HfSplitCompare
        voiceMs={voiceMs}
        style={{ flex: 1 }}
        left={{
          badge: "⚠ CARVE & QUOTING TRAP",
          meta: "双引号 &quot; 铁律",
          title: "data-fx-carve 与 JSON 属性写法避坑",
          tone: "amber",
          activeWindow: [36000, 52000],
          items: [
            {
              title: "data-fx-carve 必须挂在音乐轨，绝不挂人声轨",
              description: "指定被退让的音乐轨去监听人声（或人声总线），让人声频段清晰透出",
            },
            {
              title: "JSON 属性一律用双引号 + &quot; 转义",
              description: "carve.mjs 通过 name=\"...\" 匹配属性；单引号属性会隐形导致原有链被覆盖！",
            },
            {
              title: "电平标尺：单轨/总线最高 +12 dB · 母带 -3 dBTP",
              description: "volume 线性增益 1.0 为 0 dB、~3.981 为 +12 dB；truepeak -3 dBTP 防削波",
            },
          ],
        }}
        right={{
          badge: "⚠ TWO CLOCKS & BACKWARD HOLD",
          meta: "t: 0 双时钟基准",
          title: "切片时钟 vs 总线时钟与首点回溯",
          tone: "cyan",
          activeWindow: [52000, 74000],
          items: [
            {
              title: "切片（<audio>/<video>）：t: 0 = 该切片的 data-start",
              description: "移动切片位置时，其包络曲线会跟随切片同步平移",
            },
            {
              title: "总线（<hf-audio-group>）：t: 0 = 整部视频 0 秒起点",
              description: "总线没有自己的 data-start，时间点一律按全局绝对秒数计算",
            },
            {
              title: "首点向前回溯陷阱（Backward-Hold）",
              description: "包络首点会向前保持至切片开头；音乐早于人声时必须在 t: 0 补无衰减点",
            },
          ],
        }}
      />
    </div>
  );
};
