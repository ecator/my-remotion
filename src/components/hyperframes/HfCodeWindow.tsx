import React from "react";
import { FONT_MONO, FONT_SANS, HF_COLORS } from "./tokens";

export interface HfCodeLine {
  text: string;
  highlightColor?: string;
  badge?: string;
}

export interface HfCodeWindowProps {
  title: string;
  subtitle?: string;
  lines: HfCodeLine[];
  activeLineIndex?: number;
  accentColor?: string;
  style?: React.CSSProperties;
}

export const HfCodeWindow: React.FC<HfCodeWindowProps> = ({
  title,
  subtitle,
  lines,
  activeLineIndex,
  accentColor = HF_COLORS.brandPrimary,
  style,
}) => {
  return (
    <div
      style={{
        borderRadius: 18,
        backgroundColor: HF_COLORS.bgSurface,
        border: `2px solid ${HF_COLORS.borderSubtle}`,
        boxShadow: "0 18px 44px rgba(0, 0, 0, 0.55)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* Window Header */}
      <div
        style={{
          height: 48,
          backgroundColor: HF_COLORS.bgElevated,
          borderBottom: `1.5px solid ${HF_COLORS.borderSubtle}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#F43F5E",
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#F59E0B",
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#10B981",
            }}
          />
          <span
            style={{
              marginLeft: 10,
              fontFamily: FONT_MONO,
              fontSize: 20,
              fontWeight: 700,
              color: HF_COLORS.textPrimary,
            }}
          >
            {title}
          </span>
        </div>

        {subtitle && (
          <span
            style={{
              fontFamily: FONT_SANS,
              fontSize: 18,
              fontWeight: 700,
              color: accentColor,
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              padding: "3px 12px",
              borderRadius: 6,
              border: `1px solid ${accentColor}`,
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* Code Lines */}
      <div
        style={{
          padding: "16px 0",
          fontFamily: FONT_MONO,
          fontSize: 21,
          lineHeight: 1.55,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {lines.map((line, i) => {
          const isHighlighted =
            activeLineIndex === i || Boolean(line.highlightColor);
          const barColor = line.highlightColor || accentColor;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "3px 20px",
                backgroundColor: isHighlighted
                  ? "rgba(16, 185, 129, 0.11)"
                  : "transparent",
                borderLeft: isHighlighted
                  ? `4px solid ${barColor}`
                  : "4px solid transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    width: 28,
                    textAlign: "right",
                    color: HF_COLORS.textMuted,
                    fontSize: 18,
                    userSelect: "none",
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    color: isHighlighted
                      ? HF_COLORS.textPrimary
                      : HF_COLORS.textSecondary,
                    fontWeight: isHighlighted ? 700 : 400,
                    whiteSpace: "pre",
                  }}
                >
                  {line.text}
                </span>
              </div>

              {line.badge && (
                <span
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 17,
                    fontWeight: 700,
                    color: barColor,
                    backgroundColor: "rgba(15, 20, 31, 0.9)",
                    border: `1.5px solid ${barColor}`,
                    padding: "2px 10px",
                    borderRadius: 6,
                    marginLeft: 12,
                    flexShrink: 0,
                  }}
                >
                  {line.badge}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
