import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FONT_SANS, HF_COLORS } from "./tokens";
import { FONT_MONO_CJK, hexToRgba } from "./utils";

export interface HfChapterKeywordChip {
  code?: string;
  label: string;
  color?: string;
}

export interface HfChapterIntroProps {
  episodeBadge: string;
  secondaryBadge?: string;
  title: string;
  highlightTitle?: string;
  titleSuffix?: string;
  subtitle: string;
  chips?: HfChapterKeywordChip[];
  voiceMs?: number;
  exitVoiceMsRange?: [number, number];
  brandColor?: string;
  accentColor?: string;
  style?: React.CSSProperties;
}

export const HfChapterIntro: React.FC<HfChapterIntroProps> = ({
  episodeBadge,
  secondaryBadge,
  title,
  highlightTitle,
  titleSuffix,
  subtitle,
  chips,
  voiceMs,
  exitVoiceMsRange,
  brandColor = HF_COLORS.brandPrimary,
  accentColor = HF_COLORS.accentCyan,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isDefaultBrand =
    brandColor.toLowerCase() === HF_COLORS.brandPrimary.toLowerCase();
  const isDefaultAccent =
    accentColor.toLowerCase() === HF_COLORS.accentCyan.toLowerCase();
  const brandHighlight = isDefaultBrand ? HF_COLORS.brandNeon : brandColor;
  const accentHighlight = isDefaultAccent ? HF_COLORS.accentSky : accentColor;

  let heroExit = 0;
  if (
    voiceMs !== undefined &&
    exitVoiceMsRange &&
    exitVoiceMsRange[1] > exitVoiceMsRange[0]
  ) {
    heroExit = interpolate(
      voiceMs,
      [exitVoiceMsRange[0], exitVoiceMsRange[1]],
      [0, 1],
      {
        easing: Easing.inOut(Easing.cubic),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      },
    );
  }

  if (heroExit >= 1) {
    return null;
  }

  const badgeSpring = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 180, mass: 0.8 },
  });

  const sweepEndFrame = Math.max(1, Math.round(1.2 * fps));
  const sweepLeftPct = interpolate(frame, [0, sweepEndFrame], [-35, 135], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sweepOpacity = interpolate(
    frame,
    [0, Math.round(0.25 * fps), sweepEndFrame],
    [0, 0.55, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const titleStart = Math.round(0.2 * fps);
  const titleEnd = Math.max(titleStart + 1, Math.round(0.85 * fps));
  const titleProgress = interpolate(frame, [titleStart, titleEnd], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const chipsBaseStart = Math.round(0.65 * fps);
  const chipStagger = Math.round(0.15 * fps);
  const chipDuration = Math.max(1, Math.round(0.45 * fps));

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 48px",
        opacity: 1 - heroExit,
        transform: `translateY(${interpolate(heroExit, [0, 1], [0, -40])}px) scale(${interpolate(heroExit, [0, 1], [1, 0.96])})`,
        ...style,
      }}
    >
      {/* Episode Pill Badge */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          padding: "10px 26px",
          borderRadius: 999,
          backgroundColor: hexToRgba(brandColor, 0.14),
          border: `2px solid ${brandColor}`,
          boxShadow: `0 0 32px ${hexToRgba(brandColor, 0.25)}`,
          transform: `scale(${badgeSpring})`,
          marginBottom: 28,
        }}
      >
        {/* Single bounded entrance light sweep */}
        {sweepOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${sweepLeftPct}%`,
              width: "28%",
              backgroundImage: `linear-gradient(90deg, transparent 0%, ${hexToRgba(brandHighlight, 0.45)} 50%, transparent 100%)`,
              opacity: sweepOpacity,
              pointerEvents: "none",
            }}
          />
        )}

        <span
          style={{
            position: "relative",
            fontFamily: FONT_MONO_CJK,
            fontSize: 22,
            fontWeight: 700,
            color: brandHighlight,
            letterSpacing: "0.08em",
          }}
        >
          {episodeBadge}
        </span>

        {secondaryBadge && (
          <span
            style={{
              position: "relative",
              padding: "4px 14px",
              borderRadius: 999,
              backgroundColor: hexToRgba(accentColor, 0.2),
              border: `1.5px solid ${accentHighlight}`,
              fontFamily: FONT_MONO_CJK,
              fontSize: 20,
              fontWeight: 700,
              color: accentHighlight,
            }}
          >
            {secondaryBadge}
          </span>
        )}
      </div>

      {/* Main Hero Heading */}
      <div
        style={{
          maxWidth: 1620,
          fontFamily: FONT_SANS,
          fontSize: 76,
          fontWeight: 900,
          color: HF_COLORS.textPrimary,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          textAlign: "center",
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [28, 0])}px)`,
          marginBottom: 18,
        }}
      >
        {title}
        {highlightTitle && (
          <span style={{ color: brandHighlight }}>{highlightTitle}</span>
        )}
        {titleSuffix}
      </div>

      {/* Subtitle */}
      <div
        style={{
          maxWidth: 1520,
          fontFamily: FONT_SANS,
          fontSize: 38,
          fontWeight: 700,
          lineHeight: 1.35,
          textAlign: "center",
          color: HF_COLORS.textSecondary,
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [18, 0])}px)`,
          marginBottom: chips && chips.length > 0 ? 44 : 0,
        }}
      >
        {subtitle}
      </div>

      {/* Keyword Chips */}
      {chips && chips.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 22,
            maxWidth: 1620,
          }}
        >
          {chips.map((chip, idx) => {
            const startF = chipsBaseStart + idx * chipStagger;
            const endF = startF + chipDuration;
            const chipEnter = interpolate(frame, [startF, endF], [0, 1], {
              easing: Easing.out(Easing.cubic),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const codeColor = chip.color || brandHighlight;

            return (
              <div
                key={`${chip.code ?? ""}-${chip.label}-${idx}`}
                style={{
                  padding: "14px 26px",
                  borderRadius: 14,
                  backgroundColor: HF_COLORS.bgSurface,
                  border: `2px solid ${HF_COLORS.borderSubtle}`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  opacity: chipEnter,
                  transform: `translateY(${interpolate(chipEnter, [0, 1], [20, 0])}px)`,
                  boxShadow: "0 10px 26px rgba(0, 0, 0, 0.35)",
                }}
              >
                {chip.code && (
                  <span
                    style={{
                      fontFamily: FONT_MONO_CJK,
                      fontSize: 20,
                      fontWeight: 700,
                      color: codeColor,
                    }}
                  >
                    {chip.code}
                  </span>
                )}
                <span
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 23,
                    fontWeight: 700,
                    color: HF_COLORS.textPrimary,
                  }}
                >
                  {chip.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
