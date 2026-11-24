import React from "react";
import { FONT_MONO, FONT_SANS, HF_COLORS } from "./tokens";

export interface HfTerminalBlock {
  comment?: string;
  command: string;
  output?: string[];
  accentColor?: string;
}

export interface HfTerminalWindowProps {
  title: string;
  blocks: HfTerminalBlock[];
  activeBlockIndex?: number;
  style?: React.CSSProperties;
}

export const HfTerminalWindow: React.FC<HfTerminalWindowProps> = ({
  title,
  blocks,
  activeBlockIndex,
  style,
}) => {
  return (
    <div
      style={{
        borderRadius: 18,
        backgroundColor: "#0A0E17",
        border: `2px solid ${HF_COLORS.borderSubtle}`,
        boxShadow: "0 18px 44px rgba(0, 0, 0, 0.6)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* Terminal Top Bar */}
      <div
        style={{
          height: 46,
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
              width: 11,
              height: 11,
              borderRadius: "50%",
              backgroundColor: "#F43F5E",
            }}
          />
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              backgroundColor: "#F59E0B",
            }}
          />
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              backgroundColor: "#10B981",
            }}
          />
          <span
            style={{
              marginLeft: 10,
              fontFamily: FONT_MONO,
              fontSize: 19,
              fontWeight: 700,
              color: HF_COLORS.textSecondary,
            }}
          >
            {title}
          </span>
        </div>

        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 17,
            color: HF_COLORS.accentSky,
            fontWeight: 700,
          }}
        >
          bash · node ≥ 22
        </span>
      </div>

      {/* Terminal Body */}
      <div
        style={{
          padding: "18px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          fontFamily: FONT_MONO,
          fontSize: 21,
        }}
      >
        {blocks.map((blk, i) => {
          const isActive = activeBlockIndex === i;
          const color = blk.accentColor || HF_COLORS.brandNeon;

          return (
            <div
              key={i}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                backgroundColor: isActive
                  ? "rgba(16, 185, 129, 0.10)"
                  : "rgba(15, 20, 31, 0.65)",
                border: isActive
                  ? `1.5px solid ${color}`
                  : `1.5px solid rgba(255, 255, 255, 0.07)`,
              }}
            >
              {blk.comment && (
                <div
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 18,
                    fontWeight: 600,
                    color: HF_COLORS.textMuted,
                    marginBottom: 4,
                  }}
                >
                  # {blk.comment}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: HF_COLORS.textPrimary,
                  fontWeight: 700,
                }}
              >
                <span style={{ color }}>❯</span>
                <span style={{ whiteSpace: "pre-wrap" }}>{blk.command}</span>
              </div>

              {blk.output && blk.output.length > 0 && (
                <div
                  style={{
                    marginTop: 6,
                    paddingLeft: 22,
                    fontSize: 18,
                    color: HF_COLORS.textSecondary,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {blk.output.map((outLine, j) => (
                    <div key={j}>{outLine}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
