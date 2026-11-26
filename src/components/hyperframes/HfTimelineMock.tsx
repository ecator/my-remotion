import React from "react";
import {
  Easing,
  interpolate,
  random,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FONT_SANS, HF_COLORS } from "./tokens";
import { FONT_MONO_CJK, hexToRgba, isWindowActive } from "./utils";

export type HfTimelineTrackKind = "video" | "audio" | "dom" | "fx" | "gsap";

export interface HfTimelineClip {
  id: string;
  label: string;
  startSec: number;
  durationSec: number;
  mediaStartSec?: number;
  color?: string;
  attrTag?: string;
  showWaveform?: boolean;
  keyframes?: number[];
  automationCurve?: Array<{ t: number; v: number }>;
  automationColor?: string;
  splitAtSec?: number;
  activeWindow?: [number, number];
  isActive?: boolean;
}

export interface HfTimelineTrack {
  id: string;
  trackIndex: number;
  label: string;
  kind?: HfTimelineTrackKind;
  zIndex?: number;
  color?: string;
  clips: HfTimelineClip[];
}

export interface HfTimelineMarker {
  sec: number;
  label: string;
  color?: string;
}

export interface HfTimelinePlayheadRange {
  voiceMsRange: [number, number];
  startSec: number;
  endSec: number;
}

export interface HfTimelineMockProps {
  title?: string;
  totalDurationSec: number;
  tracks: HfTimelineTrack[];
  playheadSec?: number;
  voiceMs?: number;
  playheadRange?: HfTimelinePlayheadRange;
  workAreaSec?: [number, number];
  markers?: HfTimelineMarker[];
  toolbarBadges?: string[];
  seekExpression?: string;
  tickStepSec?: number;
  trackHeaderWidth?: number;
  brandColor?: string;
  accentColor?: string;
  style?: React.CSSProperties;
}

const KIND_COLOR_MAP: Record<HfTimelineTrackKind, string> = {
  video: HF_COLORS.brandNeon,
  audio: HF_COLORS.accentSky,
  dom: HF_COLORS.brandPrimary,
  fx: HF_COLORS.accentPurple,
  gsap: HF_COLORS.accentYellow,
};

function chooseAutoTickStep(totalSec: number): number {
  if (totalSec <= 6) {
    return 1;
  }
  if (totalSec <= 15) {
    return 2;
  }
  if (totalSec <= 30) {
    return 5;
  }
  if (totalSec <= 90) {
    return 10;
  }
  return Math.max(10, Math.ceil(totalSec / 8));
}

function formatTickSec(sec: number): string {
  const rounded = Math.round(sec * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}s` : `${rounded.toFixed(1)}s`;
}

export const HfTimelineMock: React.FC<HfTimelineMockProps> = ({
  title = "HYPERFRAMES TIMELINE",
  totalDurationSec,
  tracks,
  playheadSec,
  voiceMs,
  playheadRange,
  workAreaSec,
  markers,
  toolbarBadges,
  seekExpression,
  tickStepSec,
  trackHeaderWidth = 240,
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

  const enterDuration = Math.max(1, Math.round(0.4 * fps));
  const enterProgress = interpolate(frame, [0, enterDuration], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const safeTotal = Math.max(0.1, totalDurationSec);
  const autoStep = chooseAutoTickStep(safeTotal);
  const safeStep = Math.max(
    0.5,
    tickStepSec !== undefined && Number.isFinite(tickStepSec)
      ? tickStepSec
      : autoStep,
  );

  // Build bounded ticks array
  const ticks: number[] = [];
  const maxTicks = 40;
  for (let i = 0; i < maxTicks; i++) {
    const t = i * safeStep;
    if (t > safeTotal + 0.0001) {
      break;
    }
    ticks.push(t);
  }

  // Resolve live playhead position in seconds
  let resolvedPlayheadSec = 0;
  if (playheadSec !== undefined) {
    resolvedPlayheadSec = Math.max(0, Math.min(safeTotal, playheadSec));
  } else if (playheadRange) {
    const [vStart, vEnd] = playheadRange.voiceMsRange;
    if (voiceMs !== undefined && vEnd > vStart) {
      resolvedPlayheadSec = interpolate(
        voiceMs,
        [vStart, vEnd],
        [playheadRange.startSec, playheadRange.endSec],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      );
    } else {
      resolvedPlayheadSec = playheadRange.startSec;
    }
    resolvedPlayheadSec = Math.max(
      0,
      Math.min(safeTotal, resolvedPlayheadSec),
    );
  }

  const playheadPct = Math.max(
    0,
    Math.min(100, (resolvedPlayheadSec / safeTotal) * 100),
  );

  const workStartPct = workAreaSec
    ? Math.max(0, Math.min(100, (workAreaSec[0] / safeTotal) * 100))
    : 0;
  const workEndPct = workAreaSec
    ? Math.max(workStartPct, Math.min(100, (workAreaSec[1] / safeTotal) * 100))
    : 0;

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
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [16, 0])}px)`,
        ...style,
      }}
    >
      {/* Top Toolbar */}
      <div
        style={{
          backgroundColor: HF_COLORS.bgElevated,
          borderBottom: `1.5px solid ${HF_COLORS.borderSubtle}`,
          padding: "12px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            minWidth: 0,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: brandHighlight,
              boxShadow: `0 0 10px ${brandHighlight}`,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO_CJK,
              fontSize: 22,
              fontWeight: 700,
              color: HF_COLORS.textPrimary,
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </span>

          {toolbarBadges &&
            toolbarBadges.map((badge, idx) => (
              <span
                key={`${badge}-${idx}`}
                style={{
                  padding: "3px 12px",
                  borderRadius: 7,
                  backgroundColor: hexToRgba(brandColor, 0.14),
                  border: `1.5px solid ${hexToRgba(brandHighlight, 0.45)}`,
                  fontFamily: FONT_MONO_CJK,
                  fontSize: 20,
                  fontWeight: 700,
                  color: brandHighlight,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {badge}
              </span>
            ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexShrink: 0,
          }}
        >
          {seekExpression && (
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 7,
                backgroundColor: hexToRgba(HF_COLORS.accentViolet, 0.16),
                border: `1.5px solid ${hexToRgba(HF_COLORS.accentPurple, 0.5)}`,
                fontFamily: FONT_MONO_CJK,
                fontSize: 20,
                fontWeight: 700,
                color: HF_COLORS.accentPurple,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {seekExpression}
            </span>
          )}

          <span
            style={{
              padding: "4px 14px",
              borderRadius: 8,
              backgroundColor: "rgba(15, 20, 31, 0.9)",
              border: `1.5px solid ${hexToRgba(accentHighlight, 0.5)}`,
              fontFamily: FONT_MONO_CJK,
              fontSize: 21,
              fontWeight: 700,
              color: accentHighlight,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ⏱ {resolvedPlayheadSec.toFixed(2)}s / {safeTotal.toFixed(1)}s
          </span>
        </div>
      </div>

      {/* Timeline Body (Ruler + Track Lanes + Shared Playhead Overlay) */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
        {/* Time Ruler Row */}
        <div
          style={{
            height: 40,
            display: "flex",
            alignItems: "stretch",
            backgroundColor: "rgba(10, 14, 23, 0.85)",
            borderBottom: `1.5px solid ${HF_COLORS.borderSubtle}`,
          }}
        >
          <div
            style={{
              width: trackHeaderWidth,
              flexShrink: 0,
              borderRight: `1.5px solid ${HF_COLORS.borderSubtle}`,
              padding: "0 16px",
              display: "flex",
              alignItems: "center",
              fontFamily: FONT_MONO_CJK,
              fontSize: 20,
              fontWeight: 700,
              color: HF_COLORS.textMuted,
            }}
          >
            TRACKS ({tracks.length})
          </div>

          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            {/* Work Area Band (I/O) */}
            {workAreaSec && workEndPct > workStartPct && (
              <div
                style={{
                  position: "absolute",
                  left: `${workStartPct}%`,
                  width: `${workEndPct - workStartPct}%`,
                  top: 0,
                  bottom: 0,
                  backgroundColor: hexToRgba(accentColor, 0.16),
                  borderLeft: `2px solid ${accentHighlight}`,
                  borderRight: `2px solid ${accentHighlight}`,
                }}
              />
            )}

            {/* Ruler Ticks */}
            {ticks.map((t, idx) => {
              const pct = (t / safeTotal) * 100;
              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    left: `${pct}%`,
                    top: 0,
                    bottom: 0,
                    borderLeft: `1px solid ${HF_COLORS.borderSubtle}`,
                    paddingLeft: 6,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {pct <= 93 && (
                    <span
                      style={{
                        fontFamily: FONT_MONO_CJK,
                        fontSize: 20,
                        fontWeight: 700,
                        color: HF_COLORS.textMuted,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {formatTickSec(t)}
                    </span>
                  )}
                </div>
              );
            })}

            {/* Ruler Markers */}
            {markers &&
              markers.map((mk, idx) => {
                const mkPct = Math.max(
                  0,
                  Math.min(100, (mk.sec / safeTotal) * 100),
                );
                const mkColor = mk.color || HF_COLORS.accentYellow;
                return (
                  <div
                    key={`${mk.label}-${idx}`}
                    style={{
                      position: "absolute",
                      left: `${mkPct}%`,
                      top: 4,
                      transform:
                        mkPct > 85 ? "translateX(-100%)" : "translateX(4px)",
                      padding: "1px 8px",
                      borderRadius: 6,
                      backgroundColor: hexToRgba(mkColor, 0.22),
                      border: `1.5px solid ${mkColor}`,
                      fontFamily: FONT_MONO_CJK,
                      fontSize: 20,
                      fontWeight: 700,
                      color: mkColor,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {mk.label}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Track Rows */}
        {tracks.map((track, rowIdx) => {
          const trackColor =
            track.color ||
            (track.kind ? KIND_COLOR_MAP[track.kind] : brandHighlight);

          return (
            <div
              key={track.id}
              style={{
                display: "flex",
                alignItems: "stretch",
                minHeight: 74,
                borderBottom:
                  rowIdx === tracks.length - 1
                    ? "none"
                    : `1px solid ${HF_COLORS.borderSubtle}`,
                backgroundColor:
                  rowIdx % 2 === 0
                    ? "rgba(15, 20, 31, 0.55)"
                    : "rgba(10, 14, 23, 0.45)",
              }}
            >
              {/* Track Header */}
              <div
                style={{
                  width: trackHeaderWidth,
                  flexShrink: 0,
                  borderRight: `1.5px solid ${HF_COLORS.borderSubtle}`,
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: hexToRgba(trackColor, 0.16),
                      border: `1.5px solid ${hexToRgba(trackColor, 0.55)}`,
                      fontFamily: FONT_MONO_CJK,
                      fontSize: 20,
                      fontWeight: 700,
                      color: trackColor,
                      flexShrink: 0,
                    }}
                  >
                    T{track.trackIndex}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 20,
                      fontWeight: 700,
                      color: HF_COLORS.textPrimary,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {track.label}
                  </span>
                </div>

                {track.zIndex !== undefined && (
                  <span
                    style={{
                      padding: "2px 7px",
                      borderRadius: 6,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1px solid ${HF_COLORS.borderSubtle}`,
                      fontFamily: FONT_MONO_CJK,
                      fontSize: 20,
                      fontWeight: 700,
                      color: HF_COLORS.textSecondary,
                      flexShrink: 0,
                    }}
                  >
                    z:{track.zIndex}
                  </span>
                )}
              </div>

              {/* Track Clips Lane */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  padding: "10px 0",
                  overflow: "hidden",
                }}
              >
                {/* Vertical Grid Ticks */}
                {ticks.map((t, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      left: `${(t / safeTotal) * 100}%`,
                      top: 0,
                      bottom: 0,
                      borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
                      pointerEvents: "none",
                    }}
                  />
                ))}

                {/* Clip Blocks */}
                {track.clips.map((clip) => {
                  const clampedStart = Math.max(
                    0,
                    Math.min(safeTotal, clip.startSec),
                  );
                  const clampedEnd = Math.max(
                    clampedStart,
                    Math.min(safeTotal, clip.startSec + clip.durationSec),
                  );
                  const clipDur = Math.max(0.05, clampedEnd - clampedStart);
                  const leftPct = (clampedStart / safeTotal) * 100;
                  const widthPct = Math.max(2, (clipDur / safeTotal) * 100);
                  const clipColor = clip.color || trackColor;

                  const clipActive =
                    clip.isActive !== undefined
                      ? clip.isActive
                      : voiceMs !== undefined && clip.activeWindow
                        ? isWindowActive(voiceMs, clip.activeWindow)
                        : resolvedPlayheadSec >= clip.startSec &&
                          resolvedPlayheadSec <=
                            clip.startSec + clip.durationSec;

                  // Automation polyline points (normalized 0..100 x 0..40)
                  let polyPoints = "";
                  if (clip.automationCurve && clip.automationCurve.length > 1) {
                    let maxT = 1;
                    for (let k = 0; k < clip.automationCurve.length; k++) {
                      if (clip.automationCurve[k].t > maxT) {
                        maxT = clip.automationCurve[k].t;
                      }
                    }
                    const tDenom =
                      maxT > 1 ? Math.max(0.1, clip.durationSec) : 1;
                    polyPoints = clip.automationCurve
                      .map((pt) => {
                        const nx = Math.max(
                          0,
                          Math.min(100, (pt.t / tDenom) * 100),
                        );
                        const ny = Math.max(
                          3,
                          Math.min(37, (1 - Math.max(0, Math.min(1, pt.v))) * 34 + 3),
                        );
                        return `${nx.toFixed(1)},${ny.toFixed(1)}`;
                      })
                      .join(" ");
                  }

                  // Split razor line position
                  let splitPct: number | null = null;
                  if (clip.splitAtSec !== undefined && clip.durationSec > 0) {
                    const relSec =
                      clip.splitAtSec >= clip.startSec
                        ? clip.splitAtSec - clip.startSec
                        : clip.splitAtSec;
                    const rawPct = (relSec / clip.durationSec) * 100;
                    if (rawPct > 1 && rawPct < 99) {
                      splitPct = rawPct;
                    }
                  }

                  return (
                    <div
                      key={clip.id}
                      style={{
                        position: "absolute",
                        left: `${leftPct}%`,
                        width: `${widthPct}%`,
                        top: 8,
                        bottom: 8,
                        borderRadius: 10,
                        backgroundColor: hexToRgba(
                          clipColor,
                          clipActive ? 0.24 : 0.13,
                        ),
                        border: clipActive
                          ? `2.5px solid ${clipColor}`
                          : `1.5px solid ${hexToRgba(clipColor, 0.55)}`,
                        boxShadow: clipActive
                          ? `0 0 18px ${hexToRgba(clipColor, 0.25)}`
                          : "none",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 12px",
                        gap: 8,
                      }}
                    >
                      {/* Deterministic Waveform Bars */}
                      {clip.showWaveform && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            padding: "6px 8px",
                            opacity: 0.35,
                            pointerEvents: "none",
                          }}
                        >
                          {Array.from({ length: 24 }).map((_, barIdx) => {
                            const hPct =
                              20 +
                              random(`hf-tl-${clip.id}-${barIdx}`) * 72;
                            return (
                              <div
                                key={barIdx}
                                style={{
                                  width: 3,
                                  height: `${hPct}%`,
                                  borderRadius: 2,
                                  backgroundColor: clipColor,
                                }}
                              />
                            );
                          })}
                        </div>
                      )}

                      {/* Automation Curve Overlay */}
                      {polyPoints && (
                        <svg
                          viewBox="0 0 100 40"
                          preserveAspectRatio="none"
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                          }}
                        >
                          <polyline
                            fill="none"
                            stroke={
                              clip.automationColor || HF_COLORS.accentYellow
                            }
                            strokeWidth={2}
                            points={polyPoints}
                          />
                        </svg>
                      )}

                      {/* Keyframe Diamonds */}
                      {clip.keyframes &&
                        clip.keyframes.map((kf, kfIdx) => {
                          const kfDenom = Math.max(0.01, clip.durationSec);
                          const kfPct = Math.max(
                            3,
                            Math.min(97, (kf / kfDenom) * 100),
                          );
                          return (
                            <span
                              key={kfIdx}
                              style={{
                                position: "absolute",
                                left: `${kfPct}%`,
                                bottom: 2,
                                transform: "translateX(-50%)",
                                fontSize: 20,
                                lineHeight: 1,
                                color: HF_COLORS.accentYellow,
                                pointerEvents: "none",
                              }}
                            >
                              ◆
                            </span>
                          );
                        })}

                      {/* Split Razor Line */}
                      {splitPct !== null && (
                        <div
                          style={{
                            position: "absolute",
                            left: `${splitPct}%`,
                            top: 0,
                            bottom: 0,
                            borderLeft: `2px dashed ${HF_COLORS.accentRose}`,
                            pointerEvents: "none",
                          }}
                        />
                      )}

                      {/* Clip Label & Metadata */}
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          minWidth: 0,
                          flex: 1,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: FONT_SANS,
                            fontSize: 20,
                            fontWeight: 700,
                            color: HF_COLORS.textPrimary,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {clip.label}
                        </span>
                        {clip.mediaStartSec !== undefined && (
                          <span
                            style={{
                              fontFamily: FONT_MONO_CJK,
                              fontSize: 20,
                              fontWeight: 700,
                              color: HF_COLORS.textSecondary,
                              flexShrink: 0,
                            }}
                          >
                            @{clip.mediaStartSec}s
                          </span>
                        )}
                      </div>

                      {clip.attrTag && (
                        <span
                          style={{
                            position: "relative",
                            padding: "2px 8px",
                            borderRadius: 6,
                            backgroundColor: "rgba(9, 13, 22, 0.85)",
                            border: `1px solid ${hexToRgba(clipColor, 0.55)}`,
                            fontFamily: FONT_MONO_CJK,
                            fontSize: 20,
                            fontWeight: 700,
                            color: clipColor,
                            flexShrink: 0,
                          }}
                        >
                          {clip.attrTag}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Shared Playhead Overlay across Ruler + Tracks */}
        <div
          style={{
            position: "absolute",
            left: trackHeaderWidth,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${playheadPct}%`,
              top: 0,
              bottom: 0,
              width: 2.5,
              transform: "translateX(-50%)",
              backgroundColor: accentHighlight,
              boxShadow: `0 0 12px ${accentHighlight}`,
            }}
          >
            {/* Playhead Diamond Cap */}
            <div
              style={{
                position: "absolute",
                top: 2,
                left: "50%",
                width: 14,
                height: 14,
                transform: "translateX(-50%) rotate(45deg)",
                backgroundColor: accentHighlight,
                border: `2px solid ${HF_COLORS.bgCanvas}`,
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
