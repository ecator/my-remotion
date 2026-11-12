import type React from "react";
import {
  AbsoluteFill,
  interpolate,
  random,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: random(`haibara-px-${i}`) * 1920,
  y: random(`haibara-py-${i}`) * 1080,
  size: 2.5 + random(`haibara-ps-${i}`) * 5.5,
  speedY: 0.4 + random(`haibara-pvy-${i}`) * 1.1,
  phase: random(`haibara-pph-${i}`) * Math.PI * 2,
  isCrimson: random(`haibara-pc-${i}`) > 0.55,
}));

const HEXAGONS = [
  { cx: 240, cy: 260, r: 68, label: "C₁₇H₂₁NO₄" },
  { cx: 358, cy: 328, r: 68, label: "APTX-4869" },
  { cx: 1650, cy: 250, r: 64, label: "TELOMERASE" },
  { cx: 1538, cy: 315, r: 64, label: "SHERRY // 04" },
];

const getHexPoints = (cx: number, cy: number, r: number) => {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
};

export const LabBackground: React.FC<{
  readonly accentCrimson: string;
  readonly accentCyan: string;
}> = ({ accentCrimson, accentCyan }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const hudOpacity = interpolate(frame, [0, Math.round(0.6 * fps)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scanY = interpolate(
    frame % Math.round(3.5 * fps),
    [0, Math.round(3.5 * fps)],
    [0, 1080],
  );

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 42%, #1e1338 0%, #0f0a1e 55%, #07040e 100%)",
        overflow: "hidden",
      }}
    >
      {/* Subtle laboratory grid & molecular hexagons SVG */}
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: "absolute", inset: 0, opacity: 0.35 * hudOpacity }}
      >
        <defs>
          <pattern
            id="haibara-lab-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={accentCyan}
              strokeWidth="0.6"
              strokeOpacity="0.22"
            />
          </pattern>
        </defs>
        <rect width="1920" height="1080" fill="url(#haibara-lab-grid)" />

        {/* Detective Conan Keyhole / Target Ring Watermark in background */}
        <circle
          cx="960"
          cy="430"
          r="370"
          fill="none"
          stroke={accentCyan}
          strokeWidth="1"
          strokeDasharray="10 14"
          strokeOpacity="0.28"
        />
        <circle
          cx="960"
          cy="430"
          r="420"
          fill="none"
          stroke={accentCrimson}
          strokeWidth="1"
          strokeDasharray="4 18"
          strokeOpacity="0.25"
        />

        {/* Chemical Benzene Ring Structures */}
        {HEXAGONS.map((hex, idx) => (
          <g key={idx} opacity={0.65}>
            <polygon
              points={getHexPoints(hex.cx, hex.cy, hex.r)}
              fill="rgba(15, 23, 42, 0.35)"
              stroke={idx % 2 === 0 ? accentCyan : accentCrimson}
              strokeWidth="2"
            />
            <polygon
              points={getHexPoints(hex.cx, hex.cy, hex.r * 0.76)}
              fill="none"
              stroke={idx % 2 === 0 ? accentCyan : accentCrimson}
              strokeWidth="1"
              strokeDasharray="8 6"
            />
            <text
              x={hex.cx}
              y={hex.cy + 5}
              textAnchor="middle"
              fill="#cbd5e1"
              fontSize="13"
              fontFamily="Consolas, 'Courier New', monospace"
              letterSpacing="1"
            >
              {hex.label}
            </text>
          </g>
        ))}

        {/* Floating biochemical data particles */}
        {PARTICLES.map((p) => {
          const curY = (p.y - frame * p.speedY + 1080) % 1080;
          const pulse = 0.4 + 0.6 * Math.sin(frame * 0.08 + p.phase);
          return (
            <circle
              key={p.id}
              cx={p.x}
              cy={curY}
              r={p.size}
              fill={p.isCrimson ? accentCrimson : accentCyan}
              opacity={pulse * 0.65}
            />
          );
        })}
      </svg>

      {/* Horizontal laboratory scanline */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: scanY,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${accentCyan} 50%, transparent 100%)`,
          opacity: 0.25 * hudOpacity,
          boxShadow: `0 0 16px ${accentCyan}`,
        }}
      />

      {/* Top-Left Dossier HUD */}
      <div
        style={{
          position: "absolute",
          top: 44,
          left: 56,
          opacity: hudOpacity,
          fontFamily: "Consolas, 'Courier New', monospace",
          color: "#94A3B8",
          fontSize: 16,
          lineHeight: 1.6,
          borderLeft: `3px solid ${accentCrimson}`,
          paddingLeft: 16,
        }}
      >
        <div
          style={{
            color: accentCrimson,
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: 18,
          }}
        >
          ● CLASSIFIED DOSSIER // APTX-4869
        </div>
        <div>SUBJECT: SHIHO MIYANO (宮野 志保) / AI HAIBARA (灰原 哀)</div>
        <div style={{ color: accentCyan }}>
          CODENAME: SHERRY · BIO-CHEMISTRY LAB ARCHIVE
        </div>
      </div>

      {/* Top-Right Soundtrack & Audio Equalizer HUD */}
      <div
        style={{
          position: "absolute",
          top: 44,
          right: 56,
          opacity: hudOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          fontFamily: "Consolas, 'Courier New', monospace",
        }}
      >
        <div
          style={{
            color: accentCyan,
            fontSize: 15,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          ♫ BGM: SHERRY&apos;S MELANCHOLY (JAZZ SUSPENSE // 112 BPM)
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 5,
            height: 36,
          }}
        >
          {Array.from({ length: 18 }, (_, i) => {
            const barWave =
              0.25 +
              0.45 * Math.abs(Math.sin(frame * 0.22 + i * 0.55)) +
              0.3 * Math.abs(Math.cos(frame * 0.13 - i * 0.4));
            const fadeOut = interpolate(
              frame,
              [durationInFrames - 25, durationInFrames - 5],
              [1, 0.1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            const h = Math.max(4, Math.round(34 * barWave * fadeOut));
            return (
              <div
                key={i}
                style={{
                  width: 5,
                  height: h,
                  borderRadius: 2,
                  backgroundColor: i % 3 === 0 ? accentCrimson : accentCyan,
                  boxShadow:
                    i % 3 === 0
                      ? `0 0 8px ${accentCrimson}`
                      : `0 0 8px ${accentCyan}`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom Corner Decorative Brackets */}
      <div
        style={{
          position: "absolute",
          bottom: 38,
          left: 56,
          opacity: hudOpacity * 0.7,
          fontFamily: "Consolas, 'Courier New', monospace",
          fontSize: 14,
          color: "#64748B",
          letterSpacing: 1.5,
        }}
      >
        [ DETECTIVE CONAN // TEITAN ELEMENTARY CLASS 1-B · BEIKA CITY ]
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 38,
          right: 56,
          opacity: hudOpacity * 0.7,
          fontFamily: "Consolas, 'Courier New', monospace",
          fontSize: 14,
          color: "#64748B",
          letterSpacing: 1.5,
        }}
      >
        [ APOPTOXIN 4869 · VERIFIED BY AGASA LAB ]
      </div>
    </AbsoluteFill>
  );
};
