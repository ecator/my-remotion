import { useState } from "react";
import { Easing, interpolate, random, useCurrentFrame, useVideoConfig } from "remotion";

const getCircumferenceOfArc = (rx: number, ry: number) => {
  return Math.PI * 2 * Math.sqrt((rx * rx + ry * ry) / 2);
};

const rx = 145;
const ry = 305;
const cx = 315;
const cy = 315;
const arcLength = getCircumferenceOfArc(rx, ry);
const strokeWidth = 18;

export const Arc: React.FC<{
  rotation: number;
  color1: string;
  color2: string;
}> = ({ rotation, color1, color2 }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, fps], [0, 1], {
    easing: Easing.spring({ damping: 100, mass: 0.5 }),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Deterministic unique IDs per instance
  const [gradientId] = useState(() => `arc-grad-${String(random(null)).slice(2, 10)}`);
  const [glowId] = useState(() => `arc-glow-${String(random(null)).slice(2, 10)}`);

  // Orbiting electron angle along the ellipse
  const orbitAngle = (frame * 0.045 + rotation * (Math.PI / 180)) % (Math.PI * 2);
  const electronX = cx + rx * Math.cos(orbitAngle);
  const electronY = cy + ry * Math.sin(orbitAngle);
  const antiElectronX = cx - rx * Math.cos(orbitAngle);
  const antiElectronY = cy - ry * Math.sin(orbitAngle);

  return (
    <svg
      viewBox="0 0 630 630"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        rotate: `${rotation * progress}deg`,
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Secondary thin telemetry track */}
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx + 16}
        ry={ry + 16}
        fill="none"
        stroke={color2}
        strokeOpacity={0.22 * progress}
        strokeDasharray="6 14"
        strokeWidth={2}
      />

      {/* Main glowing molecular orbit */}
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeDasharray={arcLength}
        strokeDashoffset={arcLength - arcLength * progress}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        filter={`url(#${glowId})`}
        opacity={0.92}
      />

      {/* Orbiting valence electrons (chemical bond nodes) */}
      <circle
        cx={electronX}
        cy={electronY}
        r={9 * progress}
        fill="#F8FAFC"
        stroke={color1}
        strokeWidth={4}
        filter={`url(#${glowId})`}
      />
      <circle
        cx={antiElectronX}
        cy={antiElectronY}
        r={6 * progress}
        fill={color2}
        opacity={0.85 * progress}
      />
    </svg>
  );
};
