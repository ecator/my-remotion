import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_SANS, HF_COLORS } from "./tokens";
import {
  FONT_MONO_CJK,
  HfSemanticTone,
  hexToRgba,
  resolveToneColors,
} from "./utils";

export type HfPromptSlotTone = HfSemanticTone;

export interface HfPromptSlot {
  tag: string;
  content: string;
  explanation?: string;
  badge?: string;
  tone?: HfPromptSlotTone;
  color?: string;
  activeWindow?: [number, number];
}

export interface HfPromptAnatomyProps {
  title: string;
  subtitle?: string;
  slots: HfPromptSlot[];
  voiceMs?: number;
  activeSlotIndex?: number;
  assembledPrompt?: string;
  assembledLabel?: string;
  brandColor?: string;
  style?: React.CSSProperties;
}

const DEFAULT_SLOT_TONES: HfPromptSlotTone[] = [
  "emerald",
  "cyan",
  "amber",
  "violet",
  "cyan",
  "danger",
];

export const HfPromptAnatomy: React.FC<HfPromptAnatomyProps> = ({
  title,
  subtitle,
  slots,
  voiceMs,
  activeSlotIndex,
  assembledPrompt,
  assembledLabel = "ASSEMBLED PROMPT",
  brandColor = HF_COLORS.brandPrimary,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const brandPalette = resolveToneColors("emerald", brandColor);

  let resolvedActiveIndex = -1;
  if (activeSlotIndex !== undefined) {
    resolvedActiveIndex = activeSlotIndex;
  } else if (voiceMs !== undefined) {
    for (let i = 0; i < slots.length; i++) {
      const win = slots[i].activeWindow;
      if (win && voiceMs >= win[0] && voiceMs < win[1]) {
        resolvedActiveIndex = i;
        break;
      }
    }
  }

  const rowStagger = Math.round(0.08 * fps);
  const rowDuration = Math.max(1, Math.round(0.4 * fps));

  const activeSlot =
    resolvedActiveIndex >= 0 && resolvedActiveIndex < slots.length
      ? slots[resolvedActiveIndex]
      : undefined;
  const activeTone =
    activeSlot?.tone ??
    (resolvedActiveIndex >= 0
      ? DEFAULT_SLOT_TONES[resolvedActiveIndex % DEFAULT_SLOT_TONES.length]
      : "emerald");
  const activePalette = resolveToneColors(activeTone, activeSlot?.color);

  const showFooter = Boolean(activeSlot?.explanation || assembledPrompt);

  return (
    <div
      style={{
        borderRadius: 20,
        backgroundColor: HF_COLORS.bgSurface,
        border: `2px solid ${HF_COLORS.borderSubtle}`,
        boxShadow: "0 18px 44px rgba(0, 0, 0, 0.55)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* Card Header */}
      <div
        style={{
          backgroundColor: HF_COLORS.bgElevated,
          borderBottom: `1.5px solid ${HF_COLORS.borderSubtle}`,
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              backgroundColor: brandPalette.bright,
              boxShadow: `0 0 10px ${brandPalette.bright}`,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: FONT_SANS,
              fontSize: 24,
              fontWeight: 800,
              color: HF_COLORS.textPrimary,
            }}
          >
            {title}
          </span>
        </div>

        {subtitle && (
          <span
            style={{
              fontFamily: FONT_MONO_CJK,
              fontSize: 20,
              fontWeight: 700,
              color: brandPalette.bright,
              backgroundColor: brandPalette.bgTint,
              border: `1.5px solid ${brandPalette.borderTint}`,
              padding: "4px 14px",
              borderRadius: 8,
              flexShrink: 0,
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* Annotated Slot Rows */}
      <div
        style={{
          padding: "16px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 11,
          flex: 1,
        }}
      >
        {slots.map((slot, idx) => {
          const isActive = idx === resolvedActiveIndex;
          const tone =
            slot.tone ?? DEFAULT_SLOT_TONES[idx % DEFAULT_SLOT_TONES.length];
          const palette = resolveToneColors(tone, slot.color);

          const startF = idx * rowStagger;
          const endF = startF + rowDuration;
          const rowEnter = interpolate(frame, [startF, endF], [0, 1], {
            easing: Easing.out(Easing.cubic),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const dimFactor =
            resolvedActiveIndex >= 0 && !isActive ? 0.8 : 1;

          return (
            <div
              key={`${slot.tag}-${idx}`}
              style={{
                padding: "12px 18px",
                borderRadius: 13,
                backgroundColor: isActive
                  ? palette.bgTint
                  : HF_COLORS.bgElevated,
                border: isActive
                  ? `2.5px solid ${palette.bright}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                boxShadow: isActive
                  ? `0 0 22px ${hexToRgba(palette.main, 0.22)}`
                  : "none",
                display: "flex",
                alignItems: "center",
                gap: 16,
                opacity: rowEnter * dimFactor,
                transform: `translateY(${interpolate(rowEnter, [0, 1], [14, 0])}px)`,
              }}
            >
              {/* Slot Tag Pill */}
              <span
                style={{
                  minWidth: 168,
                  padding: "6px 14px",
                  borderRadius: 9,
                  backgroundColor: isActive
                    ? hexToRgba(palette.main, 0.24)
                    : palette.bgTint,
                  border: `1.5px solid ${palette.borderTint}`,
                  fontFamily: FONT_MONO_CJK,
                  fontSize: 20,
                  fontWeight: 700,
                  color: palette.bright,
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                {slot.tag}
              </span>

              {/* Slot Content */}
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  fontFamily: FONT_MONO_CJK,
                  fontSize: 22,
                  fontWeight: isActive ? 700 : 500,
                  lineHeight: 1.45,
                  color: isActive
                    ? HF_COLORS.textPrimary
                    : HF_COLORS.textSecondary,
                  wordBreak: "break-word",
                }}
              >
                {slot.content}
              </div>

              {/* Optional Right Badge */}
              {slot.badge && (
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(15, 20, 31, 0.9)",
                    border: `1.5px solid ${palette.borderTint}`,
                    fontFamily: FONT_MONO_CJK,
                    fontSize: 20,
                    fontWeight: 700,
                    color: palette.bright,
                    flexShrink: 0,
                  }}
                >
                  {slot.badge}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Explanation / Assembled Prompt Banner */}
      {showFooter && (
        <div
          style={{
            borderTop: `1.5px solid ${HF_COLORS.borderSubtle}`,
            backgroundColor: activeSlot?.explanation
              ? activePalette.bgTint
              : "rgba(15, 20, 31, 0.92)",
            padding: "13px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {activeSlot?.explanation && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO_CJK,
                  fontSize: 20,
                  fontWeight: 700,
                  color: activePalette.bright,
                  flexShrink: 0,
                }}
              >
                {activeSlot.tag} ▸
              </span>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: 21,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: HF_COLORS.textPrimary,
                }}
              >
                {activeSlot.explanation}
              </span>
            </div>
          )}

          {assembledPrompt && (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO_CJK,
                  fontSize: 20,
                  fontWeight: 700,
                  color: brandPalette.bright,
                  flexShrink: 0,
                }}
              >
                {assembledLabel}:
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO_CJK,
                  fontSize: 21,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  color: HF_COLORS.textSecondary,
                  minWidth: 0,
                  wordBreak: "break-word",
                }}
              >
                {assembledPrompt}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
