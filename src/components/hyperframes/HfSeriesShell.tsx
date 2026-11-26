import React, { useMemo } from "react";
import {
  AbsoluteFill,
  interpolate,
  random,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FONT_SANS,
  HF_COLORS,
  HF_LAYOUT,
  HfChapterMeta,
} from "./tokens";
import { FONT_MONO_CJK, hexToRgba, padZero } from "./utils";

export interface HfSeriesShellProps {
  episodeCode: string;
  episodeTitle: string;
  chapters: HfChapterMeta[];
  brandColor?: string;
  accentColor?: string;
  children: React.ReactNode;
}

function formatTime(seconds: number): string {
  const safeSeconds = Math.max(0, seconds);
  const mins = Math.floor(safeSeconds / 60);
  const secs = Math.floor(safeSeconds % 60);
  return `${padZero(mins, 2)}:${padZero(secs, 2)}`;
}

export const HfSeriesShell: React.FC<HfSeriesShellProps> = ({
  episodeCode,
  chapters,
  brandColor = HF_COLORS.brandPrimary,
  accentColor = HF_COLORS.accentCyan,
  children,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const isDefaultBrand =
    brandColor.toLowerCase() === HF_COLORS.brandPrimary.toLowerCase();
  const isDefaultAccent =
    accentColor.toLowerCase() === HF_COLORS.accentCyan.toLowerCase();
  const brandHighlight = isDefaultBrand ? HF_COLORS.brandNeon : brandColor;
  const accentHighlight = isDefaultAccent ? HF_COLORS.accentSky : accentColor;

  // Deterministic ambient dots
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: random(`hf-shell-x-${i}`) * 1920,
      y: random(`hf-shell-y-${i}`) * 1080,
      size: 2 + random(`hf-shell-s-${i}`) * 3,
      phase: random(`hf-shell-p-${i}`) * Math.PI * 2,
      isCyan: i % 3 === 0,
    }));
  }, []);

  // Determine active chapter (safe for empty chapters)
  const activeChapter = useMemo<HfChapterMeta | undefined>(() => {
    if (chapters.length === 0) {
      return undefined;
    }
    for (let i = chapters.length - 1; i >= 0; i--) {
      if (frame >= chapters[i].fromFrame) {
        return chapters[i];
      }
    }
    return chapters[0];
  }, [chapters, frame]);

  const currentSec = frame / fps;
  const totalSec = durationInFrames / fps;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: HF_COLORS.bgCanvas,
        backgroundImage: `radial-gradient(ellipse at 50% -10%, ${hexToRgba(brandColor, 0.16)} 0%, ${hexToRgba(accentColor, 0.06)} 38%, rgba(7, 9, 14, 1) 75%)`,
        fontFamily: FONT_SANS,
        color: HF_COLORS.textPrimary,
        overflow: "hidden",
      }}
    >
      {/* Subtle architectural coordinate grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Deterministic subtle ambient nodes */}
      {particles.map((p) => {
        const pulse =
          0.18 + 0.14 * Math.sin((frame / fps) * 1.2 + p.phase);
        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.isCyan ? accentColor : brandColor,
              opacity: pulse,
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* Top HUD Bar */}
      <div
        style={{
          position: "absolute",
          top: 22,
          left: HF_LAYOUT.stageLeft,
          right: HF_LAYOUT.stageRight,
          height: 52,
          borderRadius: 14,
          backgroundColor: "rgba(15, 20, 31, 0.82)",
          border: `1.5px solid ${HF_COLORS.borderSubtle}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 22px",
          zIndex: 40,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
        }}
      >
        {/* Left: Series badge & chapter breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 8,
              backgroundColor: hexToRgba(brandColor, 0.16),
              border: `1.5px solid ${brandColor}`,
              fontFamily: FONT_MONO_CJK,
              fontSize: 19,
              fontWeight: 700,
              color: brandHighlight,
              letterSpacing: "0.06em",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: brandHighlight,
              }}
            />
            {episodeCode} // HYPERFRAMES
          </div>

          <span
            style={{
              color: HF_COLORS.textMuted,
              fontFamily: FONT_MONO_CJK,
              fontSize: 20,
            }}
          >
            ▸
          </span>

          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: HF_COLORS.textPrimary,
              letterSpacing: "0.02em",
            }}
          >
            {activeChapter?.breadcrumb ?? ""}
          </div>
        </div>

        {/* Right: Module Tag + Seekable Frame & Time Counter */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {activeChapter?.moduleTag ? (
            <div
              style={{
                padding: "4px 12px",
                borderRadius: 7,
                backgroundColor: hexToRgba(accentColor, 0.15),
                border: `1.5px solid ${hexToRgba(accentHighlight, 0.45)}`,
                fontFamily: FONT_MONO_CJK,
                fontSize: 18,
                fontWeight: 700,
                color: accentHighlight,
                letterSpacing: "0.06em",
              }}
            >
              {activeChapter.moduleTag}
            </div>
          ) : null}

          <div
            style={{
              fontFamily: FONT_MONO_CJK,
              fontSize: 19,
              fontWeight: 700,
              color: HF_COLORS.textSecondary,
              backgroundColor: "rgba(22, 29, 46, 0.9)",
              padding: "4px 12px",
              borderRadius: 7,
              border: `1px solid ${HF_COLORS.borderSubtle}`,
            }}
          >
            ⏱ {formatTime(currentSec)} / {formatTime(totalSec)} · F:
            {padZero(frame, 4)}
          </div>
        </div>
      </div>

      {/* Main Stage Content Area */}
      <div
        style={{
          position: "absolute",
          top: HF_LAYOUT.stageTop,
          left: HF_LAYOUT.stageLeft,
          right: HF_LAYOUT.stageRight,
          bottom: HF_LAYOUT.stageBottom,
        }}
      >
        {children}
      </div>

      {/* Bottom Chapter Progress Bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: HF_LAYOUT.progressBarHeight,
          backgroundColor: "rgba(9, 12, 20, 0.95)",
          borderTop: `1.5px solid ${HF_COLORS.borderSubtle}`,
          display: "grid",
          gridTemplateColumns:
            chapters.length > 0
              ? chapters.map((c) => `${c.durationInFrames}fr`).join(" ")
              : "1fr",
          zIndex: 45,
        }}
      >
        {chapters.map((ch) => {
          const isCurrent = activeChapter?.index === ch.index;
          const isDone = frame >= ch.fromFrame + ch.durationInFrames;
          const localProgress = interpolate(
            frame,
            [ch.fromFrame, ch.fromFrame + ch.durationInFrames],
            [0, 100],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          return (
            <div
              key={ch.index}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: `1px solid rgba(255, 255, 255, 0.1)`,
                overflow: "hidden",
              }}
            >
              {/* Progress fill */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${isDone ? 100 : isCurrent ? localProgress : 0}%`,
                  backgroundColor: isCurrent
                    ? hexToRgba(brandColor, 0.28)
                    : hexToRgba(brandColor, 0.12),
                  borderTop: isCurrent
                    ? `2.5px solid ${brandHighlight}`
                    : isDone
                      ? `2px solid ${brandColor}`
                      : "none",
                }}
              />
              <span
                style={{
                  position: "relative",
                  fontFamily: FONT_SANS,
                  fontSize: 16,
                  fontWeight: isCurrent ? 700 : 500,
                  color: isCurrent
                    ? brandHighlight
                    : isDone
                      ? HF_COLORS.textSecondary
                      : HF_COLORS.textMuted,
                  letterSpacing: "0.03em",
                }}
              >
                {padZero(ch.index, 2)} · {ch.shortTitle}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
