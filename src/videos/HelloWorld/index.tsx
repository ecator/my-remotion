import { Audio } from "@remotion/media";
import { zColor } from "@remotion/zod-types";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { LabBackground } from "./LabBackground";
import { Logo } from "./Logo";
import { Title } from "./Title";

export const helloWorldSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
  logoColor1: zColor(),
  logoColor2: zColor(),
  quoteText: z.string(),
  quoteSubText: z.string(),
});

export type HelloWorldProps = z.infer<typeof helloWorldSchema>;

export const HelloWorld: React.FC<HelloWorldProps> = ({
  titleText,
  titleColor,
  logoColor1,
  logoColor2,
  quoteText,
  quoteSubText,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Voiceover active window (frames 55 to 215)
  const isVoiceActive = frame >= 55 && frame <= 215;

  return (
    <AbsoluteFill style={{ backgroundColor: "#090514" }}>
      {/* Haibara Ai Detective Suspense Jazz BGM (with automatic ducking during voiceover) */}
      <Audio
        name="Haibara Ai BGM"
        src={staticFile("HelloWorld/haibara_bgm.mp3")}
        volume={interpolate(
          frame,
          [
            0,
            Math.round(0.4 * fps),
            50,
            62,
            210,
            222,
            durationInFrames - 5,
            durationInFrames,
          ],
          [0, 0.85, 0.85, 0.38, 0.38, 0.72, 0.25, 0],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        )}
      />

      {/* Haibara Ai Japanese Dialogue Voiceover */}
      <Audio
        name="Haibara Voiceover (JP)"
        from={55}
        src={staticFile("HelloWorld/haibara_voice.mp3")}
        volume={1}
      />

      {/* Scientific Laboratory & Molecular Hexagonal HUD Background */}
      <LabBackground accentCrimson={logoColor1} accentCyan={logoColor2} />

      <Interactive.Div
        name="Content fade"
        premountFor={fps}
        style={{
          position: "absolute",
          inset: 0,
          opacity: interpolate(
            frame,
            [durationInFrames - 20, durationInFrames - 4],
            [1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        <Logo
          name="APTX-4869 Molecular Emblem"
          premountFor={fps}
          logoColor1={logoColor1}
          logoColor2={logoColor2}
          style={{
            translate: interpolate(
              frame,
              [20, 52],
              ["0px 0px", "0px -145px"],
              {
                easing: Easing.spring({ damping: 100 }),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              },
            ),
          }}
        />

        <Title
          name="Haibara Title"
          from={30}
          premountFor={fps}
          titleText={titleText}
          titleColor={titleColor}
        />

        <Interactive.Div
          name="Haibara Quote"
          from={55}
          premountFor={fps}
          style={{
            fontFamily:
              "'Noto Sans SC', 'Hiragino Sans', 'Microsoft YaHei', sans-serif",
            textAlign: "center",
            position: "absolute",
            bottom: 92,
            width: "100%",
            opacity: interpolate(frame, [55, 78], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(
              frame,
              [55, 78],
              ["0px 24px", "0px 0px"],
              {
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              },
            ),
          }}
        >
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: "14px 38px",
              borderRadius: 20,
              backgroundColor: "rgba(15, 23, 42, 0.84)",
              border: isVoiceActive
                ? "1.5px solid rgba(225, 29, 72, 0.78)"
                : "1px solid rgba(56, 189, 248, 0.45)",
              boxShadow: isVoiceActive
                ? "0 0 28px rgba(225, 29, 72, 0.32), 0 8px 30px rgba(0, 0, 0, 0.65)"
                : "0 8px 30px rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* Japanese voiceover line + VOICE indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 31,
                fontWeight: 600,
                letterSpacing: 1.5,
                color: "#F8FAFC",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  fontFamily: "Consolas, 'Courier New', monospace",
                  fontWeight: 700,
                  color: isVoiceActive ? "#FB7185" : "#38BDF8",
                  backgroundColor: isVoiceActive
                    ? "rgba(225, 29, 72, 0.2)"
                    : "rgba(56, 189, 248, 0.15)",
                  padding: "4px 10px",
                  borderRadius: 6,
                  letterSpacing: 1,
                }}
              >
                ● JP VOICE
              </span>
              <span>{quoteText}</span>
              <code
                style={{
                  color: "#FB7185",
                  fontWeight: 700,
                  fontSize: 24,
                  fontFamily: "Consolas, 'Courier New', monospace",
                }}
              >
                [APTX-4869]
              </code>
            </div>

            {/* Chinese translation subtitle */}
            <div
              style={{
                fontSize: 20,
                color: "#94A3B8",
                letterSpacing: 2,
                fontWeight: 400,
              }}
            >
              {quoteSubText}
            </div>
          </div>
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
