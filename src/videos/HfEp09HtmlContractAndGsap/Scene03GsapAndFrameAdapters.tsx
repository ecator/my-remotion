import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfCodeWindow } from "../../components/hyperframes/HfCodeWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene03Props {
  voiceFromFrame: number;
}

const ADAPTER_ITEMS = [
  {
    name: "FrameAdapter",
    tag: "CORE INTERFACE",
    desc: "统一抽象 seek(timeSec) / dispose()，让任意第三方动画引擎变成可随机寻址的时间源。",
    color: HF_COLORS.brandNeon,
    window: [25000, 36000] as [number, number],
  },
  {
    name: "createGSAPFrameAdapter",
    tag: "GSAP BRIDGE",
    desc: "将 gsap.timeline({ paused: true }) 包装成标准帧适配器，精确映射帧号与补间进度。",
    color: HF_COLORS.accentSky,
    window: [36000, 44000] as [number, number],
  },
  {
    name: "registerFrameSource",
    tag: "CUSTOM RUNTIME",
    desc: "为 Three.js、WebGL Shader、Canvas 2D 或 Lottie 注册逐帧回调，与引擎渲染循环零漂移同步。",
    color: HF_COLORS.accentPurple,
    window: [44000, 52000] as [number, number],
  },
  {
    name: "createFilmBridge",
    tag: "MULTI-RUNTIME",
    desc: "统一桥接宿主播放器、Studio 预览与 Headless Chromium 渲染器，保证预览与导出像素一致。",
    color: HF_COLORS.accentYellow,
    window: [52000, 68000] as [number, number],
  },
];

export const Scene03GsapAndFrameAdapters: React.FC<Scene03Props> = ({
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

  const activeLine =
    voiceMs < 11000 ? 1 : voiceMs < 20000 ? 4 : voiceMs < 28000 ? 8 : 10;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: Paused GSAP Timeline & document.fonts.load */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
        <HfCodeWindow
          title="scene-hero.js · 暂停 GSAP 寻址模式"
          subtitle="SEEKABLE BY DESIGN"
          accentColor={HF_COLORS.accentSky}
          activeLineIndex={activeLine}
          style={{ flex: 1 }}
          lines={[
            { text: "// 1. 先等字体加载完成，再测量排版并注册时间线" },
            {
              text: 'await document.fonts.load(\'700 64px "Noto Sans SC"\');',
              highlightColor: HF_COLORS.accentYellow,
              badge: "防回退字体闪烁",
            },
            { text: "" },
            { text: "// 2. 必须创建 paused: true，严禁自动播放" },
            {
              text: "const tl = gsap.timeline({ paused: true });",
              highlightColor: HF_COLORS.brandNeon,
              badge: "PAUSED: TRUE",
            },
            { text: 'tl.from("#title", { y: 40, opacity: 0, duration: 0.8 }, 0);' },
            { text: 'tl.to("#card", { scale: 1.04, duration: 1.2 }, 0.6);' },
            { text: "" },
            { text: "// 3. 挂载至 window.__timelines 交由引擎逐帧 seek" },
            {
              text: "window.__timelines = window.__timelines || {};",
              highlightColor: HF_COLORS.accentSky,
            },
            {
              text: 'window.__timelines["hero"] = tl;',
              highlightColor: HF_COLORS.accentPurple,
              badge: "引擎接管寻址",
            },
          ]}
        />

        <div
          style={{
            borderRadius: 14,
            backgroundColor: "rgba(245, 158, 11, 0.14)",
            border: `2px solid ${HF_COLORS.accentYellow}`,
            padding: "12px 18px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.45,
          }}
        >
          <strong style={{ color: HF_COLORS.accentYellow }}>⚠ 时序顺序铁律：</strong>
          务必在 <span style={{ fontFamily: FONT_MONO }}>document.fonts.load</span> 完成后再写入{" "}
          <span style={{ fontFamily: FONT_MONO }}>window.__timelines</span>，否则首帧可能以系统默认字体提前截图！
        </div>
      </div>

      {/* RIGHT: FrameAdapter Architecture */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            Frame Adapters 多运行时接入层
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.accentSky }}>
            EXTENSIBLE SEEK
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {ADAPTER_ITEMS.map((item) => {
            const active = voiceMs >= item.window[0] && voiceMs < item.window[1];
            return (
              <div
                key={item.name}
                style={{
                  flex: 1,
                  borderRadius: 14,
                  backgroundColor: active ? hexToRgba(item.color, 0.14) : HF_COLORS.bgElevated,
                  border: active
                    ? `2px solid ${item.color}`
                    : `1.5px solid ${HF_COLORS.borderSubtle}`,
                  padding: "13px 16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 21, fontWeight: 800, color: item.color }}>
                    {item.name}
                  </span>
                  <span
                    style={{
                      padding: "2px 10px",
                      borderRadius: 6,
                      backgroundColor: hexToRgba(item.color, 0.16),
                      fontFamily: FONT_MONO,
                      fontSize: 14,
                      fontWeight: 700,
                      color: item.color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
