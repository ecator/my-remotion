import type { Caption } from "@remotion/captions";
import React, { useMemo } from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, FONT_SANS, HF_COLORS, HF_LAYOUT } from "./tokens";

interface CaptionPage {
  tokens: Caption[];
  startMs: number;
  endMs: number;
}

export interface HfCaptionBarProps {
  captions: Caption[];
  /** Frame offset within the current Sequence where the voiceover audio starts */
  voiceStartFrame: number;
  brandColor?: string;
}

const CODE_TERM_REGEX =
  /(data-[a-z-]+|window\.__timelines|__timelines|class="clip"|\/hyperframes|npx\s+[a-z0-9-@/ ]+|BRIEF\.md|STORYBOARD\.md|SCRIPT\.md|frame\.md|index\.html|compositions|Apache\s*2\.0|Core\s*Skills|check|render|preview|MCP|HTML|GSAP|CLI|SDK)/i;

export const HfCaptionBar: React.FC<HfCaptionBarProps> = ({
  captions,
  voiceStartFrame,
  brandColor = HF_COLORS.brandNeon,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pages = useMemo<CaptionPage[]>(() => {
    const result: CaptionPage[] = [];
    let currentTokens: Caption[] = [];

    for (const cap of captions) {
      currentTokens.push(cap);
      if (cap.pageBreakAfter) {
        result.push({
          tokens: currentTokens,
          startMs: currentTokens[0].startMs,
          endMs: currentTokens[currentTokens.length - 1].endMs,
        });
        currentTokens = [];
      }
    }
    if (currentTokens.length > 0) {
      result.push({
        tokens: currentTokens,
        startMs: currentTokens[0].startMs,
        endMs: currentTokens[currentTokens.length - 1].endMs,
      });
    }
    return result;
  }, [captions]);

  const currentVoiceMs = ((frame - voiceStartFrame) / fps) * 1000;

  // Find active page (with a small 90ms pre-roll and 240ms hold unless next page started)
  const activePageIndex = useMemo(() => {
    for (let i = 0; i < pages.length; i++) {
      const p = pages[i];
      const nextStart =
        i + 1 < pages.length ? pages[i + 1].startMs : p.endMs + 280;
      const effectiveEnd = Math.min(p.endMs + 240, nextStart);
      if (currentVoiceMs >= p.startMs - 80 && currentVoiceMs < effectiveEnd) {
        return i;
      }
    }
    return -1;
  }, [pages, currentVoiceMs]);

  if (activePageIndex === -1) {
    return null;
  }

  const page = pages[activePageIndex];
  const enterProgress = interpolate(
    currentVoiceMs,
    [page.startMs - 80, page.startMs + 80],
    [0, 1],
    {
      easing: Easing.out(Easing.cubic),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const translateY = interpolate(enterProgress, [0, 1], [8, 0]);

  // HfCaptionBar is rendered inside <Sequence>, which fills HfSeriesShell's Main Stage Content Area
  // (whose bottom sits `HF_LAYOUT.stageBottom` px above the 1080p canvas bottom).
  // Offsetting by `captionBottomFromCanvas - stageBottom` places the subtitle bar in the dedicated
  // bottom band (44px from the 1080p canvas bottom, right above the 34px chapter progress bar)
  // without overlapping the main stage cards.
  const bottomOffsetInStage =
    HF_LAYOUT.captionBottomFromCanvas - HF_LAYOUT.stageBottom;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: bottomOffsetInStage,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1680,
          padding: "8px 26px",
          borderRadius: 14,
          backgroundColor: "rgba(9, 13, 22, 0.92)",
          border: `1.5px solid rgba(16, 185, 129, 0.45)`,
          boxShadow:
            "0 10px 32px rgba(0, 0, 0, 0.72), 0 0 20px rgba(16, 185, 129, 0.14)",
          backdropFilter: "blur(14px)",
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          opacity: enterProgress,
          transform: `translateY(${translateY}px)`,
          whiteSpace: "nowrap",
        }}
      >
        {/* Voice indicator dot */}
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: brandColor,
            boxShadow: `0 0 10px ${brandColor}`,
            flexShrink: 0,
          }}
        />

        {/* Single-line tokens */}
        <div
          style={{
            fontFamily: FONT_SANS,
            fontSize: 29,
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: "0.02em",
            display: "inline-flex",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {page.tokens.map((tok, idx) => {
            const isActive =
              currentVoiceMs >= tok.startMs - 30 &&
              currentVoiceMs <= tok.endMs + 60;
            const isPast = currentVoiceMs > tok.endMs + 60;
            const hasCodeTerm = CODE_TERM_REGEX.test(tok.text);

            const textColor = isActive
              ? brandColor
              : isPast
                ? HF_COLORS.textPrimary
                : "rgba(203, 213, 225, 0.78)";

            return (
              <span
                key={`${tok.startMs}-${idx}`}
                style={{
                  position: "relative",
                  color: textColor,
                  fontFamily: hasCodeTerm ? FONT_MONO : FONT_SANS,
                  fontSize: hasCodeTerm ? 27 : 30,
                  backgroundColor: isActive
                    ? "rgba(16, 185, 129, 0.18)"
                    : hasCodeTerm
                      ? "rgba(6, 182, 212, 0.14)"
                      : "transparent",
                  padding:
                    isActive || hasCodeTerm ? "2px 8px" : "2px 1px",
                  margin: isActive || hasCodeTerm ? "0 2px" : "0",
                  borderRadius: 8,
                  borderBottom: isActive
                    ? `2.5px solid ${brandColor}`
                    : "2.5px solid transparent",
                  textShadow: isActive
                    ? "0 0 16px rgba(52, 211, 153, 0.45)"
                    : "none",
                  whiteSpace: "pre",
                }}
              >
                {tok.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
