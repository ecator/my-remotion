import React from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, FONT_SANS, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene01Props {
  voiceFromFrame: number;
  brandColor?: string;
}

export const Scene01IntroParadigm: React.FC<Scene01Props> = ({
  voiceFromFrame,
  brandColor = HF_COLORS.brandPrimary,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;

  // Phase 1: Hero Title Card (voiceMs < 8500)
  // Phase 2: Main Paradigm Pipeline + 3 Core Pillars (voiceMs >= 8500)
  const heroExit = interpolate(voiceMs, [8200, 8900], [0, 1], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const badgeSpring = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 180, mass: 0.8 },
  });

  const titleProgress = interpolate(frame, [6, 26], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pipeline steps activation
  const step1Active = voiceMs >= 13200 && voiceMs < 15400;
  const step2Active = voiceMs >= 15400 && voiceMs < 19700;
  const step3Active = voiceMs >= 19700 && voiceMs < 24500;

  // Three pillars active focus
  const pillar1Active = voiceMs >= 25600 && voiceMs < 32400;
  const pillar2Active = voiceMs >= 32400 && voiceMs < 40600;
  const pillar3Active = voiceMs >= 40600;

  // Deterministic seek counter inside Pillar 3 (Move only what is live!)
  const seekFrameNum = Math.max(
    0,
    Math.min(150, Math.floor(interpolate(voiceMs, [41000, 50000], [0, 150], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }))),
  );
  const seekTimeSec = (seekFrameNum / 30).toFixed(2);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* PHASE 1: HERO EPISODE TITLE CARD */}
      {heroExit < 1 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: 1 - heroExit,
            transform: `translateY(${interpolate(heroExit, [0, 1], [0, -40])}px) scale(${interpolate(heroExit, [0, 1], [1, 0.96])})`,
          }}
        >
          {/* Episode Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 26px",
              borderRadius: 999,
              backgroundColor: "rgba(16, 185, 129, 0.14)",
              border: `2px solid ${brandColor}`,
              boxShadow: "0 0 32px rgba(16, 185, 129, 0.25)",
              transform: `scale(${badgeSpring})`,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 22,
                fontWeight: 700,
                color: HF_COLORS.brandNeon,
                letterSpacing: "0.08em",
              }}
            >
              EPISODE 01 / 12 · HYPERFRAMES 全栈百科
            </span>
            <span
              style={{
                padding: "3px 12px",
                borderRadius: 999,
                backgroundColor: "rgba(6, 182, 212, 0.2)",
                border: `1.5px solid ${HF_COLORS.accentSky}`,
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.accentSky,
              }}
            >
              APACHE 2.0 开源
            </span>
          </div>

          {/* Main Hero Heading */}
          <div
            style={{
              fontFamily: FONT_SANS,
              fontSize: 84,
              fontWeight: 900,
              color: HF_COLORS.textPrimary,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              textAlign: "center",
              opacity: titleProgress,
              transform: `translateY(${interpolate(titleProgress, [0, 1], [28, 0])}px)`,
              marginBottom: 18,
            }}
          >
            重新定义<span style={{ color: HF_COLORS.brandNeon }}>网页转视频</span>
          </div>

          <div
            style={{
              fontFamily: FONT_SANS,
              fontSize: 40,
              fontWeight: 700,
              color: HF_COLORS.textSecondary,
              opacity: titleProgress,
              marginBottom: 44,
            }}
          >
            什么是 HyperFrames 与三大起步路径
          </div>

          {/* Three Keyword Chips */}
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { code: "01", label: "Agent-Built · AI 驱动生成", color: HF_COLORS.brandNeon },
              { code: "02", label: "Editable · HTML 源码即工程", color: HF_COLORS.accentSky },
              { code: "03", label: "Seekable · 确定性逐帧寻址", color: HF_COLORS.accentYellow },
            ].map((chip, idx) => {
              const chipEnter = interpolate(frame, [20 + idx * 5, 36 + idx * 5], [0, 1], {
                easing: Easing.out(Easing.cubic),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={chip.code}
                  style={{
                    padding: "14px 26px",
                    borderRadius: 14,
                    backgroundColor: HF_COLORS.bgSurface,
                    border: `2px solid ${HF_COLORS.borderSubtle}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    opacity: chipEnter,
                    transform: `translateY(${interpolate(chipEnter, [0, 1], [20, 0])}px)`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 20,
                      fontWeight: 700,
                      color: chip.color,
                    }}
                  >
                    {chip.code}
                  </span>
                  <span
                    style={{
                      fontSize: 23,
                      fontWeight: 700,
                      color: HF_COLORS.textPrimary,
                    }}
                  >
                    {chip.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* PHASE 2: PIPELINE + THREE CORE PILLARS */}
      {voiceMs >= 8200 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: heroExit,
            padding: "8px 0 12px 0",
          }}
        >
          {/* Top Pipeline Conversion Banner */}
          <div
            style={{
              borderRadius: 20,
              backgroundColor: HF_COLORS.bgSurface,
              border: `2px solid ${HF_COLORS.borderSubtle}`,
              padding: "20px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: "0 14px 36px rgba(0, 0, 0, 0.45)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(16, 185, 129, 0.16)",
                    border: `1.5px solid ${HF_COLORS.brandPrimary}`,
                    fontFamily: FONT_MONO,
                    fontSize: 19,
                    fontWeight: 700,
                    color: HF_COLORS.brandNeon,
                  }}
                >
                  WHAT IS HYPERFRAMES?
                </span>
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: HF_COLORS.textPrimary,
                  }}
                >
                  HeyGen 开源（Apache 2.0）的 <span style={{ color: HF_COLORS.brandNeon }}>HTML 转视频</span> 框架
                </span>
              </div>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  color: HF_COLORS.textSecondary,
                }}
              >
                HTML + CSS + Paused GSAP ➔ Frame-Exact MP4
              </span>
            </div>

            {/* 3 Pipeline Nodes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 48px 1fr 48px 1fr",
                alignItems: "center",
              }}
            >
              {/* Step 1 */}
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 14,
                  backgroundColor: step1Active
                    ? "rgba(139, 92, 246, 0.16)"
                    : HF_COLORS.bgElevated,
                  border: step1Active
                    ? `2px solid ${HF_COLORS.accentPurple}`
                    : `1.5px solid ${HF_COLORS.borderSubtle}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 700,
                    color: HF_COLORS.accentPurple,
                  }}
                >
                  STEP 1 · 自然语言提需求
                </div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 20,
                    color: HF_COLORS.textPrimary,
                    fontWeight: 700,
                  }}
                >
                  &quot;/hyperframes Make a 10s intro...&quot;
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  fontFamily: FONT_MONO,
                  fontSize: 26,
                  color: HF_COLORS.brandNeon,
                  fontWeight: 700,
                }}
              >
                ➔
              </div>

              {/* Step 2 */}
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 14,
                  backgroundColor: step2Active
                    ? "rgba(16, 185, 129, 0.16)"
                    : HF_COLORS.bgElevated,
                  border: step2Active
                    ? `2px solid ${HF_COLORS.brandNeon}`
                    : `1.5px solid ${HF_COLORS.borderSubtle}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 700,
                    color: HF_COLORS.brandNeon,
                  }}
                >
                  STEP 2 · AI Agent 编写网页工程
                </div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 20,
                    color: HF_COLORS.textPrimary,
                    fontWeight: 700,
                  }}
                >
                  index.html + compositions/ + GSAP
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  fontFamily: FONT_MONO,
                  fontSize: 26,
                  color: HF_COLORS.accentSky,
                  fontWeight: 700,
                }}
              >
                ➔
              </div>

              {/* Step 3 */}
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 14,
                  backgroundColor: step3Active
                    ? "rgba(6, 182, 212, 0.16)"
                    : HF_COLORS.bgElevated,
                  border: step3Active
                    ? `2px solid ${HF_COLORS.accentSky}`
                    : `1.5px solid ${HF_COLORS.borderSubtle}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 700,
                    color: HF_COLORS.accentSky,
                  }}
                >
                  STEP 3 · 实时预览或逐帧渲染
                </div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 20,
                    color: HF_COLORS.textPrimary,
                    fontWeight: 700,
                  }}
                >
                  Browser Editor &amp; renders/final.mp4
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3-Column Grid: Three Core Pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 32,
              height: 560,
            }}
          >
            {/* PILLAR 1: AGENT-BUILT */}
            {(() => {
              const enter1 = interpolate(voiceMs, [24200, 25600], [0, 1], {
                easing: Easing.out(Easing.cubic),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  style={{
                    borderRadius: 20,
                    backgroundColor: HF_COLORS.bgSurface,
                    border: pillar1Active
                      ? `2.5px solid ${HF_COLORS.brandNeon}`
                      : `2px solid ${HF_COLORS.borderSubtle}`,
                    boxShadow: pillar1Active
                      ? "0 0 36px rgba(16, 185, 129, 0.24), 0 16px 40px rgba(0,0,0,0.5)"
                      : "0 14px 34px rgba(0,0,0,0.45)",
                    padding: "26px 26px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: Math.max(0.25, enter1),
                    transform: `translateY(${interpolate(enter1, [0, 1], [24, 0])}px)`,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <span
                        style={{
                          padding: "5px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(16, 185, 129, 0.16)",
                          fontFamily: FONT_MONO,
                          fontSize: 20,
                          fontWeight: 700,
                          color: HF_COLORS.brandNeon,
                        }}
                      >
                        01 // AGENT-BUILT
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 20,
                          color: HF_COLORS.textMuted,
                          fontWeight: 700,
                        }}
                      >
                        零代码门槛
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: 36,
                        fontWeight: 900,
                        color: HF_COLORS.textPrimary,
                        marginBottom: 12,
                      }}
                    >
                      AI Agent 驱动构建
                    </div>

                    <div
                      style={{
                        fontSize: 23,
                        color: HF_COLORS.textSecondary,
                        lineHeight: 1.5,
                      }}
                    >
                      你只管描述创意与节奏，AI Agent 自动编写合规的 HTML 布局、CSS 样式与 GSAP 动画代码。
                    </div>
                  </div>

                  {/* Mini Code Generation Visual */}
                  <div
                    style={{
                      borderRadius: 14,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1.5px solid rgba(16, 185, 129, 0.35)`,
                      padding: "16px 18px",
                      fontFamily: FONT_MONO,
                      fontSize: 19,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div style={{ color: HF_COLORS.brandNeon, fontWeight: 700 }}>
                      ✓ Agent 自动生成产物：
                    </div>
                    <div style={{ color: HF_COLORS.textPrimary }}>
                      • HTML5 语义化场景与轨道标签
                    </div>
                    <div style={{ color: HF_COLORS.textPrimary }}>
                      • CSS3 响应式排版与视觉变量
                    </div>
                    <div style={{ color: HF_COLORS.textPrimary }}>
                      • GSAP 暂停时间轴与音频混音链
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* PILLAR 2: EDITABLE SOURCE */}
            {(() => {
              const enter2 = interpolate(voiceMs, [24600, 26000], [0, 1], {
                easing: Easing.out(Easing.cubic),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  style={{
                    borderRadius: 20,
                    backgroundColor: HF_COLORS.bgSurface,
                    border: pillar2Active
                      ? `2.5px solid ${HF_COLORS.accentSky}`
                      : `2px solid ${HF_COLORS.borderSubtle}`,
                    boxShadow: pillar2Active
                      ? "0 0 36px rgba(6, 182, 212, 0.24), 0 16px 40px rgba(0,0,0,0.5)"
                      : "0 14px 34px rgba(0,0,0,0.45)",
                    padding: "26px 26px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: Math.max(0.25, enter2),
                    transform: `translateY(${interpolate(enter2, [0, 1], [24, 0])}px)`,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <span
                        style={{
                          padding: "5px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(6, 182, 212, 0.16)",
                          fontFamily: FONT_MONO,
                          fontSize: 20,
                          fontWeight: 700,
                          color: HF_COLORS.accentSky,
                        }}
                      >
                        02 // EDITABLE
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 20,
                          color: HF_COLORS.textMuted,
                          fontWeight: 700,
                        }}
                      >
                        告别黑盒
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: 36,
                        fontWeight: 900,
                        color: HF_COLORS.textPrimary,
                        marginBottom: 12,
                      }}
                    >
                      源码级开放可编辑
                    </div>

                    <div
                      style={{
                        fontSize: 23,
                        color: HF_COLORS.textSecondary,
                        lineHeight: 1.5,
                      }}
                    >
                      产出的不是拍扁的黑盒视频，而是标准工程目录。Agent、可视化编辑器与 Git 协同操作同一份文件。
                    </div>
                  </div>

                  {/* Blackbox vs Open Project Mini Comparison */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div
                      style={{
                        padding: "11px 16px",
                        borderRadius: 12,
                        backgroundColor: "rgba(244, 63, 94, 0.12)",
                        border: `1.5px solid ${HF_COLORS.accentDanger}`,
                        fontSize: 20,
                        fontWeight: 700,
                        color: HF_COLORS.accentRose,
                      }}
                    >
                      ✗ 传统生成视频：拍扁像素，改字必须重抽卡
                    </div>
                    <div
                      style={{
                        padding: "11px 16px",
                        borderRadius: 12,
                        backgroundColor: "rgba(6, 182, 212, 0.14)",
                        border: `1.5px solid ${HF_COLORS.accentSky}`,
                        fontSize: 20,
                        fontWeight: 700,
                        color: HF_COLORS.textPrimary,
                      }}
                    >
                      ✓ HyperFrames：DOM 图层随时点选、精准改字
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* PILLAR 3: RELIABLE RENDER */}
            {(() => {
              const enter3 = interpolate(voiceMs, [25000, 26400], [0, 1], {
                easing: Easing.out(Easing.cubic),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  style={{
                    borderRadius: 20,
                    backgroundColor: HF_COLORS.bgSurface,
                    border: pillar3Active
                      ? `2.5px solid ${HF_COLORS.accentYellow}`
                      : `2px solid ${HF_COLORS.borderSubtle}`,
                    boxShadow: pillar3Active
                      ? "0 0 36px rgba(245, 158, 11, 0.24), 0 16px 40px rgba(0,0,0,0.5)"
                      : "0 14px 34px rgba(0,0,0,0.45)",
                    padding: "26px 26px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: Math.max(0.25, enter3),
                    transform: `translateY(${interpolate(enter3, [0, 1], [24, 0])}px)`,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <span
                        style={{
                          padding: "5px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(245, 158, 11, 0.16)",
                          fontFamily: FONT_MONO,
                          fontSize: 20,
                          fontWeight: 700,
                          color: HF_COLORS.accentYellow,
                        }}
                      >
                        03 // DETERMINISTIC
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 20,
                          color: HF_COLORS.textMuted,
                          fontWeight: 700,
                        }}
                      >
                        永不掉帧
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: 36,
                        fontWeight: 900,
                        color: HF_COLORS.textPrimary,
                        marginBottom: 12,
                      }}
                    >
                      确定性逐帧寻址渲染
                    </div>

                    <div
                      style={{
                        fontSize: 23,
                        color: HF_COLORS.textSecondary,
                        lineHeight: 1.5,
                      }}
                    >
                      不依赖实时播放录屏，而是暂停时间轴、主动 Seek 到每一帧精确时刻捕获画面，慢机器也零掉帧。
                    </div>
                  </div>

                  {/* Live Frame-Exact Seeker Demo */}
                  <div
                    style={{
                      borderRadius: 14,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1.5px solid rgba(245, 158, 11, 0.45)`,
                      padding: "16px 18px",
                      fontFamily: FONT_MONO,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 19,
                        fontWeight: 700,
                        color: HF_COLORS.accentYellow,
                      }}
                    >
                      <span>SEEKABLE CAPTURE</span>
                      <span>t = {seekTimeSec}s</span>
                    </div>
                    {/* Seek progress bar */}
                    <div
                      style={{
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${(seekFrameNum / 150) * 100}%`,
                          backgroundColor: HF_COLORS.accentYellow,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 18,
                        color: HF_COLORS.textPrimary,
                      }}
                    >
                      <span>
                        Frame #
                        {seekFrameNum < 10
                          ? `000${seekFrameNum}`
                          : seekFrameNum < 100
                            ? `00${seekFrameNum}`
                            : `0${seekFrameNum}`}{" "}
                        / 0150
                      </span>
                      <span style={{ color: HF_COLORS.brandNeon, fontWeight: 700 }}>
                        ● EXACT PIXEL LOCKED
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};
