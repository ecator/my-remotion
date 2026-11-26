import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfCodeWindow } from "../../components/hyperframes/HfCodeWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene02Props {
  voiceFromFrame: number;
}

export const Scene02TitleCardCodeCompare: React.FC<Scene02Props> = ({
  voiceFromFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;
  const enterProgress = interpolate(frame, [0, Math.round(0.6 * fps)], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const leftLine = voiceMs < 14000 ? 2 : voiceMs < 26000 ? 4 : -1;
  const rightLine = voiceMs >= 26000 && voiceMs < 38000 ? 2 : voiceMs >= 38000 ? 7 : -1;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: 24,
        }}
      >
        {/* LEFT: Remotion 3s Title Card */}
        <HfCodeWindow
          title="TitleCard.tsx · Remotion (React 帧函数)"
          subtitle="3s @ 30fps = 90 frames"
          accentColor={HF_COLORS.accentSky}
          activeLineIndex={leftLine}
          lines={[
            { text: 'import { interpolate, useCurrentFrame } from "remotion";' },
            { text: "" },
            {
              text: "export const TitleCard: React.FC = () => {",
              highlightColor: HF_COLORS.accentSky,
            },
            {
              text: "  const frame = useCurrentFrame();",
              highlightColor: HF_COLORS.accentSky,
              badge: "当前帧号",
            },
            {
              text: "  const opacity = interpolate(",
              highlightColor: HF_COLORS.accentYellow,
              badge: "手动映射关键帧",
            },
            { text: "    frame, [0, 15, 75, 90], [0, 1, 1, 0]," },
            { text: '    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }' },
            { text: "  );" },
            { text: "  return (" },
            { text: "    <div style={{ opacity }}>" },
            { text: "      <h1>Hello World</h1>" },
            { text: "    </div>" },
            { text: "  );" },
            { text: "};" },
          ]}
        />

        {/* RIGHT: HyperFrames 3s Title Card */}
        <HfCodeWindow
          title="index.html · HyperFrames (HTML + GSAP)"
          subtitle="data-start + 秒级寻址"
          accentColor={HF_COLORS.brandNeon}
          activeLineIndex={rightLine}
          lines={[
            { text: '<div id="root" data-composition-id="title"' },
            {
              text: '     data-start="0" data-duration="3"',
              highlightColor: HF_COLORS.brandNeon,
              badge: "声明式秒数",
            },
            { text: '     data-width="1920" data-height="1080">' },
            { text: '  <h1 id="headline">Hello World</h1>' },
            { text: "</div>" },
            { text: "<script>" },
            {
              text: "  const tl = gsap.timeline({ paused: true });",
              highlightColor: HF_COLORS.accentYellow,
              badge: "PAUSED: TRUE",
            },
            { text: '  tl.fromTo("#headline", { opacity: 0 },' },
            { text: "    { opacity: 1, duration: 0.5 }, 0)" },
            { text: '    .to("#headline", { opacity: 0, duration: 0.5 }, 2.5);' },
            {
              text: '  window.__timelines = { title: tl };',
              highlightColor: HF_COLORS.brandNeon,
              badge: "引擎寻址",
            },
            { text: "</script>" },
          ]}
        />
      </div>

      {/* Bottom Comparison Strip */}
      <div
        style={{
          borderRadius: 15,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "13px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 19,
          color: HF_COLORS.textPrimary,
        }}
      >
        <span>
          <strong style={{ color: HF_COLORS.accentSky }}>Remotion：</strong>
          每一帧重新运行 React 函数，用 <span style={{ fontFamily: FONT_MONO }}>useCurrentFrame + interpolate</span> 算样式。
        </span>
        <span style={{ color: HF_COLORS.textMuted }}>|</span>
        <span>
          <strong style={{ color: HF_COLORS.brandNeon }}>HyperFrames：</strong>
          一次声明 DOM，用 <span style={{ fontFamily: FONT_MONO }}>gsap.timeline(&#123; paused: true &#125;)</span> 交给引擎按秒 seek。
        </span>
      </div>
    </div>
  );
};
