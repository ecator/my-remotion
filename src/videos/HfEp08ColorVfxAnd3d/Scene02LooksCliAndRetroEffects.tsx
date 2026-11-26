import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfTerminalWindow } from "../../components/hyperframes/HfTerminalWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene02Props {
  voiceFromFrame: number;
}

const EFFECT_FAMILIES = [
  { name: "Essentials（基础）", items: "Blur · Pixelate · Bloom", color: HF_COLORS.brandNeon },
  { name: "Retro & Glitch（复古三剑客）", items: "Tape 磁带磨损 · CRT 显像管 · Tube 电子管 · Scanlines · Glitch", color: HF_COLORS.accentRose },
  { name: "Print（印刷半调）", items: "Halftone · Two-Ink Print · Ordered Dither · Mono Screen", color: HF_COLORS.accentSky },
  { name: "Art（艺术绘制）", items: "ASCII（8 风格）· Engraving · Crosshatch · Kuwahara Paint", color: HF_COLORS.accentPurple },
];

export const Scene02LooksCliAndRetroEffects: React.FC<Scene02Props> = ({
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

  const cliActive = voiceMs < 24500;
  const fxActive = voiceMs >= 24500 && voiceMs < 46500;
  const isoActive = voiceMs >= 46500;

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
      {/* LEFT: CLI media-treatment & grade-compare */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <HfTerminalWindow
          title="CLI 自动化调色与 16 方案同屏对比"
          headerBadge="media-treatment · grade-compare"
          activeBlockIndex={cliActive ? 0 : undefined}
          style={{ flex: 1 }}
          blocks={[
            {
              comment: "1. 探查画面影调，并用 --apply 写入校验后的 data-color-grading",
              command: "npx hyperframes media-treatment --selector '#interview' --grading '{\"preset\":\"skin-soft\",\"intensity\":0.7}' --apply",
              accentColor: HF_COLORS.brandNeon,
              output: ["✓ validated & applied data-color-grading to #interview"],
            },
            {
              comment: "2. 单帧输出最多 16 种调色风格对比图（含原片首位）",
              command: "npx hyperframes grade-compare --for frame.png --grades grades.json",
              accentColor: HF_COLORS.accentSky,
              output: ["✓ contact sheet ready: 16 looks side-by-side (Rec.709)"],
            },
          ]}
        />

        <div
          style={{
            borderRadius: 16,
            backgroundColor: isoActive ? "rgba(16, 185, 129, 0.14)" : HF_COLORS.bgSurface,
            border: isoActive
              ? `2.5px solid ${HF_COLORS.brandNeon}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div style={{ fontSize: 21, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            空间局部隔离调色（Spatial Isolation）
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.48 }}>
            调色按像素值而非坐标选区：想只调背景或只调主讲人，将干净底片与{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>subject.webm</span>{" "}
            抠像前景叠成双层，分别独立加滤镜；实拍 A-roll 务必克制先校后润。
          </div>
        </div>
      </div>

      {/* RIGHT: 18 Non-Destructive Visual Effects */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: fxActive
            ? `2.5px solid ${HF_COLORS.accentRose}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: fxActive
            ? "0 0 36px rgba(244, 63, 94, 0.2)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            18 款非破坏性视觉特效家族
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 800,
              color: HF_COLORS.accentRose,
              padding: "4px 11px",
              borderRadius: 8,
              backgroundColor: "rgba(244, 63, 94, 0.16)",
            }}
          >
            18 EFFECTS · ZERO MUTATION
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {EFFECT_FAMILIES.map((f) => (
            <div
              key={f.name}
              style={{
                flex: 1,
                borderRadius: 14,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${hexToRgba(f.color, 0.5)}`,
                padding: "14px 18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <span style={{ fontSize: 21, fontWeight: 800, color: f.color }}>{f.name}</span>
              <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textPrimary, lineHeight: 1.45 }}>
                {f.items}
              </span>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>
          注：自定义 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>.cube LUT</span>（最高 65 点）适用于标准 Rec.709；LOG 素材需先自行完成色彩空间还原。
        </div>
      </div>
    </div>
  );
};
