import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_SANS, HF_COLORS } from "./tokens";
import {
  FONT_MONO_CJK,
  HfSemanticTone,
  hexToRgba,
  isWindowActive,
  resolveToneColors,
} from "./utils";

export type HfSplitTone = HfSemanticTone;

export interface HfSplitCompareItem {
  title: string;
  description?: string;
  badge?: string;
  code?: boolean;
  activeWindow?: [number, number];
  isActive?: boolean;
}

export interface HfSplitColumn {
  badge: string;
  meta?: string;
  title: string;
  subtitle?: string;
  tone?: HfSplitTone;
  color?: string;
  activeWindow?: [number, number];
  isActive?: boolean;
  items?: HfSplitCompareItem[];
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export interface HfSyncRuler {
  currentSec: number;
  totalSec: number;
  label?: string;
  diffCallout?: string;
}

export interface HfSplitCompareProps {
  left: HfSplitColumn;
  right: HfSplitColumn;
  voiceMs?: number;
  columns?: string;
  gap?: number;
  syncRuler?: HfSyncRuler;
  style?: React.CSSProperties;
}

export const HfSplitCompare: React.FC<HfSplitCompareProps> = ({
  left,
  right,
  voiceMs,
  columns = "1fr 1fr",
  gap = 32,
  syncRuler,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterDuration = Math.max(1, Math.round(0.45 * fps));
  const colStagger = Math.round(0.1 * fps);

  const safeRulerTotal =
    syncRuler && syncRuler.totalSec > 0 ? syncRuler.totalSec : 0;
  const rulerRatio =
    syncRuler && safeRulerTotal > 0
      ? Math.max(0, Math.min(1, syncRuler.currentSec / safeRulerTotal))
      : 0;

  const columnEntries: Array<{ col: HfSplitColumn; defaultTone: HfSplitTone }> =
    [
      { col: left, defaultTone: "danger" },
      { col: right, defaultTone: "emerald" },
    ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        ...style,
      }}
    >
      {/* Optional Synchronized Time Ruler Strip */}
      {syncRuler && (
        <div
          style={{
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgSurface,
            border: `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "12px 22px",
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: FONT_MONO_CJK,
              fontSize: 20,
              fontWeight: 700,
              color: HF_COLORS.accentSky,
              flexShrink: 0,
            }}
          >
            {syncRuler.label ?? "SYNC RULER"}
          </span>

          <div
            style={{
              position: "relative",
              flex: 1,
              height: 12,
              borderRadius: 999,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1px solid ${HF_COLORS.borderSubtle}`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: `${rulerRatio * 100}%`,
                borderRadius: 999,
                backgroundImage: `linear-gradient(90deg, ${HF_COLORS.accentCyan}, ${HF_COLORS.brandNeon})`,
              }}
            />
          </div>

          <span
            style={{
              fontFamily: FONT_MONO_CJK,
              fontSize: 20,
              fontWeight: 700,
              color: HF_COLORS.textPrimary,
              flexShrink: 0,
            }}
          >
            t = {syncRuler.currentSec.toFixed(2)}s /{" "}
            {syncRuler.totalSec.toFixed(2)}s
          </span>

          {syncRuler.diffCallout && (
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: hexToRgba(HF_COLORS.accentAmber, 0.16),
                border: `1.5px solid ${HF_COLORS.accentYellow}`,
                fontFamily: FONT_SANS,
                fontSize: 20,
                fontWeight: 700,
                color: HF_COLORS.accentYellow,
                flexShrink: 0,
              }}
            >
              {syncRuler.diffCallout}
            </span>
          )}
        </div>
      )}

      {/* Side-by-Side Comparison Grid */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: columns,
          gap,
        }}
      >
        {columnEntries.map(({ col, defaultTone }, colIdx) => {
          const palette = resolveToneColors(
            col.tone ?? defaultTone,
            col.color,
          );
          const isColActive = isWindowActive(
            voiceMs,
            col.activeWindow,
            col.isActive,
          );

          const startF = colIdx * colStagger;
          const colEnter = interpolate(
            frame,
            [startF, startF + enterDuration],
            [0, 1],
            {
              easing: Easing.out(Easing.cubic),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );

          return (
            <div
              key={`${col.badge}-${colIdx}`}
              style={{
                borderRadius: 22,
                backgroundColor: HF_COLORS.bgSurface,
                border: isColActive
                  ? `2.5px solid ${palette.bright}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                boxShadow: isColActive
                  ? `0 0 38px ${hexToRgba(palette.main, 0.22)}, 0 18px 42px rgba(0, 0, 0, 0.55)`
                  : "0 14px 34px rgba(0, 0, 0, 0.45)",
                padding: "24px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
                opacity: colEnter,
                transform: `translateY(${interpolate(colEnter, [0, 1], [20, 0])}px)`,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 0,
                }}
              >
                {/* Column Header Badge + Meta */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      padding: "5px 14px",
                      borderRadius: 8,
                      backgroundColor: palette.bgTint,
                      border: `1.5px solid ${palette.borderTint}`,
                      fontFamily: FONT_MONO_CJK,
                      fontSize: 20,
                      fontWeight: 700,
                      color: palette.bright,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.badge}
                  </span>

                  {col.meta && (
                    <span
                      style={{
                        fontFamily: FONT_MONO_CJK,
                        fontSize: 20,
                        fontWeight: 700,
                        color: HF_COLORS.textSecondary,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {col.meta}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 34,
                      fontWeight: 900,
                      lineHeight: 1.25,
                      color: HF_COLORS.textPrimary,
                      marginBottom: col.subtitle ? 6 : 0,
                    }}
                  >
                    {col.title}
                  </div>
                  {col.subtitle && (
                    <div
                      style={{
                        fontFamily: FONT_SANS,
                        fontSize: 22,
                        fontWeight: 500,
                        lineHeight: 1.4,
                        color: HF_COLORS.textSecondary,
                      }}
                    >
                      {col.subtitle}
                    </div>
                  )}
                </div>

                {/* Optional Items List */}
                {col.items && col.items.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {col.items.map((item, itemIdx) => {
                      const itemActive = isWindowActive(
                        voiceMs,
                        item.activeWindow,
                        item.isActive,
                      );

                      return (
                        <div
                          key={`${item.title}-${itemIdx}`}
                          style={{
                            padding: "13px 18px",
                            borderRadius: 14,
                            backgroundColor: itemActive
                              ? palette.bgTint
                              : HF_COLORS.bgElevated,
                            border: itemActive
                              ? `2px solid ${palette.bright}`
                              : `1.5px solid rgba(255, 255, 255, 0.08)`,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 12,
                              marginBottom: item.description ? 5 : 0,
                            }}
                          >
                            <span
                              style={{
                                fontFamily: item.code
                                  ? FONT_MONO_CJK
                                  : FONT_SANS,
                                fontSize: 22,
                                fontWeight: 800,
                                color: itemActive
                                  ? palette.bright
                                  : HF_COLORS.textPrimary,
                                lineHeight: 1.35,
                                minWidth: 0,
                                flex: 1,
                                overflowWrap: "anywhere",
                              }}
                            >
                              {item.title}
                            </span>

                            {item.badge && (
                              <span
                                style={{
                                  padding: "2px 10px",
                                  borderRadius: 7,
                                  backgroundColor: "rgba(15, 20, 31, 0.85)",
                                  border: `1.5px solid ${palette.borderTint}`,
                                  fontFamily: FONT_MONO_CJK,
                                  fontSize: 20,
                                  fontWeight: 700,
                                  color: palette.bright,
                                  flexShrink: 0,
                                }}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {item.description && (
                            <div
                              style={{
                                fontFamily: FONT_SANS,
                                fontSize: 20,
                                fontWeight: 500,
                                lineHeight: 1.45,
                                color: HF_COLORS.textSecondary,
                              }}
                            >
                              {item.description}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Optional Embedded Visual / Code Children */}
                {col.children}
              </div>

              {/* Optional Footer */}
              {col.footer && (
                <div
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 20,
                    color: HF_COLORS.textPrimary,
                  }}
                >
                  {col.footer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
