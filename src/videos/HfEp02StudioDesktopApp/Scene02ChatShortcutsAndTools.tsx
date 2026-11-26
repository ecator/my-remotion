import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene02Props {
  voiceFromFrame: number;
}

const AT_ITEMS = [
  { group: "Media", detail: "项目素材 / Mac 或 PC 本地文件" },
  { group: "Scenes & brand kit", detail: "精准锁定子场景与品牌套件" },
  { group: "Captions · 91 款", detail: "右侧 91 款字幕样式一键挂载" },
  { group: "Inspirations & Voices", detail: "真实视频灵感片段 / 声线 / 其他项目" },
];

const HASH_TOOLS = [
  { cmd: "#Storyboard", desc: "先生成逐镜静态分镜，审批后再构建" },
  { cmd: "#Brand kit", desc: "强制套用项目品牌色板、字体与 Logo" },
  { cmd: "#Remove background", desc: "主体抠像，支持人物背后穿插大字" },
  { cmd: "#HeyGen Voice 1", desc: "高表现力配音合成" },
  { cmd: "#HeyGen Video 1", desc: "直接生成 5–60s 一镜到底 AI 视频" },
  { cmd: "#Reference video", desc: "复刻参考视频剪辑与动效结构" },
];

const SLASH_CMDS = [
  { cmd: "/clear", desc: "开启干净新会话（上方历史记录仍保留）" },
  { cmd: "/compact", desc: "Claude Code 专属：压缩长上下文释放额度" },
  { cmd: "Talking-head formats", desc: "点亮 founder take / AI breakdown / behind-head captions" },
  { cmd: "Your Skills", desc: "启用 Claude Code / Codex 已安装的外部技能包" },
];

export const Scene02ChatShortcutsAndTools: React.FC<Scene02Props> = ({
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

  const activeCol =
    voiceMs < 26000 ? 0 : voiceMs < 43500 ? 1 : voiceMs < 56000 ? 2 : -1;
  const steerQueueActive = voiceMs >= 56000;

  const columns = [
    {
      keyChar: "@",
      title: "引用精准上下文",
      badge: "TAB 跳组 · 生成芯片",
      color: HF_COLORS.brandNeon,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {AT_ITEMS.map((item) => (
            <div
              key={item.group}
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "11px 14px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  fontWeight: 700,
                  color: HF_COLORS.brandNeon,
                }}
              >
                @{item.group}
              </span>
              <span style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      keyChar: "#",
      title: "强制调用专有工具",
      badge: "HYPERFRAMES TOOLS",
      color: HF_COLORS.accentSky,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {HASH_TOOLS.map((tool) => (
            <div
              key={tool.cmd}
              style={{
                borderRadius: 11,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "9px 14px",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 19,
                  fontWeight: 700,
                  color: HF_COLORS.accentSky,
                }}
              >
                {tool.cmd}
              </span>
              <span style={{ fontSize: 18, color: HF_COLORS.textSecondary }}>{tool.desc}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      keyChar: "/",
      title: "执行命令与开关技能",
      badge: "COMMANDS & SKILLS",
      color: HF_COLORS.accentPurple,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {SLASH_CMDS.map((item) => (
            <div
              key={item.cmd}
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "11px 14px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  fontWeight: 700,
                  color: HF_COLORS.accentPurple,
                }}
              >
                {item.cmd}
              </span>
              <span style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.4 }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* 3-Column Chat Key Matrix */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {columns.map((col, idx) => {
          const isActive = activeCol === idx;
          return (
            <div
              key={col.keyChar}
              style={{
                borderRadius: 20,
                backgroundColor: HF_COLORS.bgSurface,
                border: isActive
                  ? `2.5px solid ${col.color}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                boxShadow: isActive
                  ? `0 0 36px ${hexToRgba(col.color, 0.22)}`
                  : "0 14px 32px rgba(0,0,0,0.45)",
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      backgroundColor: hexToRgba(col.color, 0.2),
                      border: `2px solid ${col.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: FONT_MONO,
                      fontSize: 32,
                      fontWeight: 900,
                      color: col.color,
                    }}
                  >
                    {col.keyChar}
                  </span>
                  <div>
                    <div style={{ fontSize: 25, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                      {col.title}
                    </div>
                    <div
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 17,
                        fontWeight: 700,
                        color: col.color,
                        marginTop: 2,
                      }}
                    >
                      {col.badge}
                    </div>
                  </div>
                </div>
              </div>

              {col.content}
            </div>
          );
        })}
      </div>

      {/* Bottom Running-Agent Dispatch Bar: Enter vs Ctrl+Enter */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: steerQueueActive ? "rgba(245, 158, 11, 0.12)" : HF_COLORS.bgSurface,
          border: steerQueueActive
            ? `2.5px solid ${HF_COLORS.accentYellow}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "16px 24px",
          display: "grid",
          gridTemplateColumns: "auto 1fr 1fr",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            padding: "8px 14px",
            borderRadius: 10,
            backgroundColor: "rgba(245, 158, 11, 0.18)",
            fontFamily: FONT_MONO,
            fontSize: 20,
            fontWeight: 800,
            color: HF_COLORS.accentYellow,
          }}
        >
          WHILE AGENT RUNS
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              backgroundColor: "rgba(244, 63, 94, 0.2)",
              border: `1.5px solid ${HF_COLORS.accentRose}`,
              fontFamily: FONT_MONO,
              fontSize: 21,
              fontWeight: 800,
              color: HF_COLORS.accentRose,
            }}
          >
            Enter
          </span>
          <span style={{ fontSize: 21, color: HF_COLORS.textPrimary, fontWeight: 600 }}>
            立即打断当前任务并按新指令重跑（Steer）
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              border: `1.5px solid ${HF_COLORS.brandNeon}`,
              fontFamily: FONT_MONO,
              fontSize: 21,
              fontWeight: 800,
              color: HF_COLORS.brandNeon,
            }}
          >
            Ctrl+Enter
          </span>
          <span style={{ fontSize: 21, color: HF_COLORS.textPrimary, fontWeight: 600 }}>
            不打断当前运行，稳妥排入下一轮队列（Queue）
          </span>
        </div>
      </div>
    </div>
  );
};
