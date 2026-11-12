import { useState } from "react";
import { Easing, interpolate, random, useCurrentFrame, useVideoConfig } from "remotion";

export const Atom: React.FC<{
  color1: string;
  color2: string;
}> = ({ color1, color2 }) => {
  const { durationInFrames, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const [gradientId] = useState(() => `atom-core-${String(random(null)).slice(2, 10)}`);
  const [capsuleClipId] = useState(() => `cap-clip-${String(random(null)).slice(2, 10)}`);

  // Counter-rotate against Logo's 360deg rotation so the APTX-4869 capsule stays poised with a gentle floating tilt
  const counterRotate = interpolate(
    frame,
    [0, durationInFrames],
    [0, -360],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const floatTilt = Math.sin(frame * 0.08) * 6;

  return (
    <svg
      viewBox="0 0 630 630"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        scale: interpolate(frame, [0, fps], [0, 1], {
          easing: Easing.spring({ damping: 100, mass: 0.5 }),
          output: "perceptual-scale",
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        rotate: `${counterRotate + floatTilt}deg`,
      }}
    >
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color2} stopOpacity="0.45" />
          <stop offset="65%" stopColor={color1} stopOpacity="0.18" />
          <stop offset="100%" stopColor="#090514" stopOpacity="0" />
        </radialGradient>
        <clipPath id={capsuleClipId}>
          <rect x="215" y="267" width="200" height="96" rx="48" ry="48" />
        </clipPath>
      </defs>

      {/* Outer biochemical aura */}
      <circle r={125} cx={315} cy={315} fill={`url(#${gradientId})`} />

      {/* Detective Conan Target Crosshair Ring around the core */}
      <circle
        r={96}
        cx={315}
        cy={315}
        fill="rgba(15, 10, 30, 0.78)"
        stroke={color2}
        strokeWidth={2.5}
        strokeDasharray="12 8"
        opacity={0.85}
      />
      <line x1={315} y1={205} x2={315} y2={228} stroke={color2} strokeWidth={2.5} opacity={0.7} />
      <line x1={315} y1={402} x2={315} y2={425} stroke={color2} strokeWidth={2.5} opacity={0.7} />
      <line x1={205} y1={315} x2={228} y2={315} stroke={color2} strokeWidth={2.5} opacity={0.7} />
      <line x1={402} y1={315} x2={425} y2={315} stroke={color2} strokeWidth={2.5} opacity={0.7} />

      {/* APTX-4869 Capsule tilted at -28 degrees */}
      <g transform="rotate(-28 315 315)">
        {/* Drop shadow */}
        <rect
          x="219"
          y="275"
          width="200"
          height="96"
          rx="48"
          ry="48"
          fill="rgba(0, 0, 0, 0.55)"
        />

        {/* Capsule two-tone body (Sherry Crimson Left + Pearl White Right) */}
        <g clipPath={`url(#${capsuleClipId})`}>
          {/* Left half: Crimson Red */}
          <rect x="215" y="267" width="102" height="96" fill={color1} />
          {/* Right half: Clinical White */}
          <rect x="315" y="267" width="100" height="96" fill="#F8FAFC" />
          {/* Center sleeve seam shadow */}
          <rect x="311" y="267" width="6" height="96" fill="rgba(15, 23, 42, 0.22)" />
          {/* Bottom shading for 3D cylindrical volume */}
          <rect x="215" y="335" width="200" height="28" fill="rgba(15, 10, 30, 0.24)" />
        </g>

        {/* Outer capsule rim */}
        <rect
          x="215"
          y="267"
          width="200"
          height="96"
          rx="48"
          ry="48"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth={2.5}
          opacity={0.9}
        />

        {/* Glossy specular highlight strip */}
        <rect
          x="234"
          y="279"
          width="162"
          height="14"
          rx="7"
          ry="7"
          fill="rgba(255, 255, 255, 0.55)"
        />

        {/* Stamped serial code on capsule */}
        <text
          x="266"
          y="323"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="19"
          fontWeight="800"
          fontFamily="Consolas, 'Courier New', monospace"
          letterSpacing="1.5"
        >
          APTX
        </text>
        <text
          x="362"
          y="323"
          textAnchor="middle"
          fill="#be123c"
          fontSize="20"
          fontWeight="900"
          fontFamily="Consolas, 'Courier New', monospace"
          letterSpacing="1.5"
        >
          4869
        </text>
      </g>
    </svg>
  );
};
