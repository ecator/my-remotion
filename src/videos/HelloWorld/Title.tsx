import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";

type TitleProps = {
  readonly titleText: string;
  readonly titleColor: string;
  readonly style?: React.CSSProperties;
};

const TitleInner: React.FC<TitleProps> = ({ titleText, titleColor, style }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <Interactive.H1
      style={{
        fontFamily:
          "'Noto Serif SC', 'Hiragino Mincho ProN', 'Yu Mincho', 'Songti SC', Georgia, serif",
        fontWeight: 900,
        fontSize: 82,
        letterSpacing: 4,
        textAlign: "center",
        position: "absolute",
        bottom: 205,
        width: "100%",
        margin: 0,
        textShadow:
          "0 0 28px rgba(56, 189, 248, 0.45), 0 4px 18px rgba(0, 0, 0, 0.85)",
        ...style,
      }}
    >
      {titleText.split(" ").map((word, index) => {
        const isHighlight =
          word.includes("4869") ||
          word.includes("SHERRY") ||
          word.includes("灰原");
        return (
          <span
            key={`${word}-${index}`}
            style={{
              marginLeft: 14,
              marginRight: 14,
              display: "inline-block",
              color: isHighlight ? "#FB7185" : titleColor,
              borderBottom: isHighlight
                ? "3px solid rgba(225, 29, 72, 0.75)"
                : "none",
              paddingBottom: 4,
              scale: interpolate(
                frame,
                [index * 6, index * 6 + fps],
                [0, 1],
                {
                  easing: Easing.spring({ damping: 180, mass: 0.7 }),
                  output: "perceptual-scale",
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                },
              ),
              opacity: interpolate(
                frame,
                [index * 6, index * 6 + Math.round(fps * 0.45)],
                [0, 1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                },
              ),
            }}
          >
            {word}
          </span>
        );
      })}
    </Interactive.H1>
  );
};

const titleSchema = {
  titleText: {
    type: "string",
    default: "灰原哀 · CODENAME: SHERRY",
    description: "Title",
  },
  titleColor: {
    type: "color",
    default: "#F1F5F9",
    description: "Title color",
  },
} as const satisfies InteractivitySchema;

export const Title = Interactive.withSchema({
  Component: TitleInner,
  componentName: "<Title>",
  schema: titleSchema,
  wrapInSequence: true,
});
