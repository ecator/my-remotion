import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfCodeWindow } from "../../components/hyperframes/HfCodeWindow";
import { FONT_MONO, FONT_SANS, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene02Props {
  voiceFromFrame: number;
}

const PROJECT_FILES = [
  {
    name: "BRIEF.md",
    icon: "📄",
    role: "沟通目标与受众定义",
    color: HF_COLORS.brandNeon,
    activeWindow: [4400, 7834],
  },
  {
    name: "STORYBOARD.md",
    icon: "🎬",
    role: "规划分镜序列与审阅状态",
    color: HF_COLORS.accentSky,
    activeWindow: [7834, 10412],
  },
  {
    name: "SCRIPT.md",
    icon: "🎙️",
    role: "锁定的旁白配音台词",
    color: HF_COLORS.accentSky,
    activeWindow: [10412, 12130],
  },
  {
    name: "frame.md",
    icon: "🎨",
    role: "机器可读品牌色板与字体规范",
    color: HF_COLORS.accentPurple,
    activeWindow: [12130, 14892],
  },
  {
    name: "index.html",
    icon: "⚡",
    role: "主时间轴组合入口 (Main Composition)",
    color: HF_COLORS.accentYellow,
    activeWindow: [14892, 16733],
  },
  {
    name: "compositions/",
    icon: "📂",
    role: "独立可复用的嵌套子场景 HTML",
    color: HF_COLORS.accentYellow,
    activeWindow: [16733, 18600],
  },
  {
    name: "assets/ & renders/",
    icon: "📦",
    role: "静态音画字体素材与渲染成品 MP4",
    color: HF_COLORS.textSecondary,
    activeWindow: [18600, 21000],
  },
];

const SURFACES = [
  {
    title: "AI Agent",
    desc: "编排故事结构与多场景源码",
    color: HF_COLORS.accentPurple,
    activeWindow: [18600, 21000],
  },
  {
    title: "Studio 桌面端",
    desc: "对话、分镜审批与文档式剪辑",
    color: HF_COLORS.brandNeon,
    activeWindow: [19400, 21600],
  },
  {
    title: "Browser Editor",
    desc: "画布拖拽、时间轴与关键帧写回源码",
    color: HF_COLORS.accentSky,
    activeWindow: [21500, 23100],
  },
  {
    title: "HyperFrames CLI",
    desc: "check 门禁校验、preview 与 render",
    color: HF_COLORS.accentYellow,
    activeWindow: [23100, 24300],
  },
  {
    title: "SDK & Player",
    desc: "在自有产品中查询编辑与内嵌播放",
    color: HF_COLORS.accentRose,
    activeWindow: [24200, 26500],
  },
];

export const Scene02SingleSource: React.FC<Scene02Props> = ({ voiceFromFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;

  const enterProgress = interpolate(frame, [0, 18], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Active line group inside the HTML contract window
  const highlightRoot = voiceMs >= 30500 && voiceMs < 35040;
  const highlightClip = voiceMs >= 35040 && voiceMs < 40917;
  const highlightGsap = voiceMs >= 40917;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "620px 1fr",
        gap: 32,
        padding: "6px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [20, 0])}px)`,
      }}
    >
      {/* LEFT COLUMN: PROJECT FOLDER ANATOMY */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "24px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(16, 185, 129, 0.16)",
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.brandNeon,
              }}
            >
              SOURCE IS THE PROJECT
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 18,
                color: HF_COLORS.textMuted,
              }}
            >
              Git-Trackable
            </span>
          </div>

          <div
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: HF_COLORS.textPrimary,
              marginBottom: 18,
            }}
          >
            📁 project/ 工程目录树
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {PROJECT_FILES.map((file, idx) => {
              const isHighlighted =
                voiceMs >= file.activeWindow[0] &&
                voiceMs <= file.activeWindow[1];
              const isRevealed = voiceMs >= file.activeWindow[0] - 1200 || idx === 0;

              return (
                <div
                  key={file.name}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 13,
                    backgroundColor: isHighlighted
                      ? "rgba(16, 185, 129, 0.14)"
                      : HF_COLORS.bgElevated,
                    border: isHighlighted
                      ? `2px solid ${file.color}`
                      : `1.5px solid rgba(255, 255, 255, 0.08)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    opacity: isRevealed ? 1 : 0.45,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 22 }}>{file.icon}</span>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 21,
                        fontWeight: 700,
                        color: isHighlighted ? file.color : HF_COLORS.textPrimary,
                      }}
                    >
                      {file.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 19,
                      fontWeight: isHighlighted ? 700 : 500,
                      color: isHighlighted
                        ? HF_COLORS.textPrimary
                        : HF_COLORS.textSecondary,
                    }}
                  >
                    {file.role}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            backgroundColor: "rgba(6, 182, 212, 0.12)",
            border: `1.5px solid rgba(56, 189, 248, 0.4)`,
            fontSize: 19,
            color: HF_COLORS.textPrimary,
            fontWeight: 600,
          }}
        >
          💡 仅 <code style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>index.html</code> 为必需；规划文档用于在跨会话审阅中锁定决策。
        </div>
      </div>

      {/* RIGHT COLUMN: 5-SURFACE TOPOLOGY + HTML CONTRACT WINDOW */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        {/* Top Card: 5 Surfaces Read & Write the Same HTML Source */}
        <div
          style={{
            borderRadius: 20,
            backgroundColor: HF_COLORS.bgSurface,
            border:
              voiceMs >= 18500 && voiceMs < 30500
                ? `2px solid ${HF_COLORS.accentSky}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "20px 24px",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.45)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 800, color: HF_COLORS.textPrimary }}>
              五端双向读写同一份 HTML 源码（零导出转换损耗）
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.brandNeon,
              }}
            >
              ◄── 双向实时同步 ──►
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 14,
            }}
          >
            {SURFACES.map((surf) => {
              const isSurfActive =
                voiceMs >= surf.activeWindow[0] &&
                voiceMs <= surf.activeWindow[1];
              return (
                <div
                  key={surf.title}
                  style={{
                    padding: "14px 14px",
                    borderRadius: 14,
                    backgroundColor: isSurfActive
                      ? "rgba(16, 185, 129, 0.15)"
                      : HF_COLORS.bgElevated,
                    border: isSurfActive
                      ? `2px solid ${surf.color}`
                      : `1.5px solid rgba(255, 255, 255, 0.08)`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 20,
                      fontWeight: 700,
                      color: surf.color,
                    }}
                  >
                    {surf.title}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      color: HF_COLORS.textSecondary,
                      lineHeight: 1.4,
                    }}
                  >
                    {surf.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Card: Minimal HTML Composition Contract */}
        <HfCodeWindow
          title="index.html — HyperFrames 最小组合契约"
          subtitle="HTML 管时间 · GSAP 管运动"
          accentColor={HF_COLORS.brandNeon}
          style={{ flex: 1 }}
          lines={[
            {
              text: '<div id="stage" data-composition-id="main" data-start="0"',
              highlightColor: highlightRoot ? HF_COLORS.brandNeon : undefined,
              badge: highlightRoot ? "1. 声明画布根容器 ID" : undefined,
            },
            {
              text: '     data-width="1920" data-height="1080" data-duration="5">',
              highlightColor: highlightRoot ? HF_COLORS.brandNeon : undefined,
              badge: highlightRoot ? "尺寸与总时长(秒)" : undefined,
            },
            {
              text: '  <div id="card" class="clip" data-start="0"',
              highlightColor: highlightClip ? HF_COLORS.accentSky : undefined,
              badge: highlightClip ? "2. 秒级时间槽元素" : undefined,
            },
            {
              text: '       data-duration="3" data-track-index="0">',
              highlightColor: highlightClip ? HF_COLORS.accentSky : undefined,
              badge: highlightClip ? "时长与轨道层级" : undefined,
            },
            {
              text: '    <h1 id="title">HELLO HYPERFRAMES</h1>',
              highlightColor: highlightClip ? HF_COLORS.accentSky : undefined,
            },
            {
              text: "  </div>",
            },
            {
              text: "</div>",
            },
            {
              text: "<script>",
            },
            {
              text: "  const tl = gsap.timeline({ paused: true });",
              highlightColor: highlightGsap ? HF_COLORS.accentYellow : undefined,
              badge: highlightGsap ? "3. 创建暂停的时间轴" : undefined,
            },
            {
              text: '  tl.to("#title", { opacity: 1, y: 0, duration: 0.5 }, 0);',
              highlightColor: highlightGsap ? HF_COLORS.accentYellow : undefined,
            },
            {
              text: '  window.__timelines["main"] = tl;',
              highlightColor: highlightGsap ? HF_COLORS.accentYellow : undefined,
              badge: highlightGsap ? "4. 注册供渲染器寻址" : undefined,
            },
            {
              text: "</script>",
            },
          ]}
        />
      </div>
    </div>
  );
};
