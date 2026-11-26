import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfChapterIntro } from "../../components/hyperframes/HfChapterIntro";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene01Props {
  voiceFromFrame: number;
  brandColor?: string;
  accentColor?: string;
}

const HOME_TABS = [
  {
    id: "Make",
    label: "Make",
    desc: "一句话描述视频 → 回答追问 → 审批 Storyboard 分镜 → 自动成片",
    color: HF_COLORS.brandNeon,
    window: [16000, 22500] as [number, number],
  },
  {
    id: "Reference",
    label: "Reference",
    desc: "粘贴 YouTube / TikTok / X 链接或本地视频，复刻剪辑节奏与花字风格",
    color: HF_COLORS.accentSky,
    window: [22500, 26000] as [number, number],
  },
  {
    id: "Script",
    label: "Script",
    desc: "直接以文稿驱动叙事，自动编排配音、字幕与分镜画面",
    color: HF_COLORS.accentPurple,
    window: [26000, 29500] as [number, number],
  },
];

const FOUR_PART_SLOTS = [
  { key: "Hook", zh: "钩子开场", detail: "前 2 秒抓住注意力", color: HF_COLORS.brandNeon },
  { key: "Proof", zh: "产品实证", detail: "展示产品真实效果", color: HF_COLORS.accentSky },
  { key: "Turn", zh: "反转破题", detail: "从痛点切入解决方案", color: HF_COLORS.accentYellow },
  { key: "Call to action", zh: "收束行动", detail: "落版品牌与明确号召", color: HF_COLORS.accentPurple },
];

const LOCAL_AGENTS = [
  { name: "Claude Code", auth: "Claude / Console", access: "Auto", free: false },
  { name: "Codex", auth: "ChatGPT 账号", access: "Auto", free: false },
  { name: "Grok", auth: "xAI 验证码", access: "Auto", free: false },
  { name: "Antigravity", auth: "Terminal 登录", access: "Auto", free: false },
  { name: "GitHub Copilot", auth: "Terminal 登录", access: "Full access", free: false },
  { name: "OpenCode", auth: "免登录内置免费模型", access: "Full access", free: true },
];

export const Scene01HomeAndAgents: React.FC<Scene01Props> = ({
  voiceFromFrame,
  brandColor = HF_COLORS.brandPrimary,
  accentColor = HF_COLORS.accentCyan,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;

  const boardEnter = interpolate(voiceMs, [4800, 5800], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const leftHighlight = voiceMs >= 14000 && voiceMs < 40500;
  const builderHighlight = voiceMs >= 29500 && voiceMs < 40500;
  const rightHighlight = voiceMs >= 40500;
  const trapHighlight = voiceMs >= 54500;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.02 // STUDIO DESKTOP APP"
        secondaryBadge="MAC · WINDOWS · LINUX"
        title="零代码 AI 视频工作站："
        highlightTitle="HyperFrames Studio"
        titleSuffix=" 桌面端全攻略"
        subtitle="不打开终端、不写一行代码，在三栏工作台内完成灵感复刻、分镜审批、文档式剪口播与团队审阅交付"
        chips={[
          { code: "HOME", label: "Make / Reference / Script", color: HF_COLORS.brandNeon },
          { code: "GUIDE", label: "Framey 翠绿向导", color: HF_COLORS.accentSky },
          { code: "6 AGENTS", label: "Claude Code · Codex · OpenCode", color: HF_COLORS.accentPurple },
        ]}
        voiceMs={voiceMs}
        exitVoiceMsRange={[4400, 5200]}
        brandColor={brandColor}
        accentColor={accentColor}
      />

      {boardEnter > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          {/* Top Overview Strip */}
          <div
            style={{
              borderRadius: 16,
              backgroundColor: HF_COLORS.bgSurface,
              border: `2px solid ${HF_COLORS.borderSubtle}`,
              padding: "13px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: 8,
                  backgroundColor: hexToRgba(brandColor, 0.18),
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  fontWeight: 700,
                  color: HF_COLORS.brandNeon,
                }}
              >
                FREE DESKTOP APP
              </span>
              <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                本地标准文件夹存储：
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>
                  {" "}~/.hyperframes-studio
                </span>
              </span>
            </div>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 20,
                fontWeight: 700,
                color: HF_COLORS.textSecondary,
              }}
            >
              Mac (Apple Silicon/Intel) · Win x64 · Linux (.deb / AppImage)
            </div>
          </div>

          {/* Main 2-column content */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: 28,
            }}
          >
            {/* LEFT: Home 3 Entries + 4-Part Launch Builder */}
            <div
              style={{
                borderRadius: 20,
                backgroundColor: HF_COLORS.bgSurface,
                border: leftHighlight
                  ? `2.5px solid ${HF_COLORS.brandNeon}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                boxShadow: leftHighlight
                  ? "0 0 36px rgba(16, 185, 129, 0.18)"
                  : "0 14px 32px rgba(0,0,0,0.45)",
                padding: "22px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 28, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                  Home 主页三大创建入口
                </span>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 19,
                    fontWeight: 700,
                    color: HF_COLORS.brandNeon,
                    padding: "4px 12px",
                    borderRadius: 999,
                    backgroundColor: "rgba(16, 185, 129, 0.14)",
                  }}
                >
                  MAKE · REFERENCE · SCRIPT
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {HOME_TABS.map((tab) => {
                  const active = voiceMs >= tab.window[0] && voiceMs < tab.window[1];
                  return (
                    <div
                      key={tab.id}
                      style={{
                        borderRadius: 14,
                        backgroundColor: active ? hexToRgba(tab.color, 0.14) : HF_COLORS.bgElevated,
                        border: `2px solid ${active ? tab.color : HF_COLORS.borderSubtle}`,
                        padding: "13px 18px",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      <span
                        style={{
                          minWidth: 130,
                          textAlign: "center",
                          padding: "6px 12px",
                          borderRadius: 10,
                          backgroundColor: hexToRgba(tab.color, 0.2),
                          fontFamily: FONT_MONO,
                          fontSize: 21,
                          fontWeight: 700,
                          color: tab.color,
                        }}
                      >
                        {tab.label}
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontWeight: active ? 700 : 500,
                          color: active ? HF_COLORS.textPrimary : HF_COLORS.textSecondary,
                          lineHeight: 1.4,
                        }}
                      >
                        {tab.desc}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* 4-part First Video Builder */}
              <div
                style={{
                  marginTop: "auto",
                  borderRadius: 16,
                  backgroundColor: builderHighlight
                    ? "rgba(245, 158, 11, 0.10)"
                    : HF_COLORS.bgElevated,
                  border: `2px solid ${builderHighlight ? HF_COLORS.accentYellow : HF_COLORS.borderSubtle}`,
                  padding: "16px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                    首次启动四步发布大片构建器（Take the step by step）
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                  {FOUR_PART_SLOTS.map((slot, idx) => (
                    <div
                      key={slot.key}
                      style={{
                        borderRadius: 12,
                        backgroundColor: HF_COLORS.bgSurface,
                        border: `1.5px solid ${hexToRgba(slot.color, 0.5)}`,
                        padding: "10px 12px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 18,
                          fontWeight: 700,
                          color: slot.color,
                        }}
                      >
                        0{idx + 1} · {slot.key}
                      </span>
                      <span style={{ fontSize: 20, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                        {slot.zh}
                      </span>
                      <span style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.35 }}>
                        {slot.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Framey + 6 Local Agents + Full access Trap */}
            <div
              style={{
                borderRadius: 20,
                backgroundColor: HF_COLORS.bgSurface,
                border: rightHighlight
                  ? `2.5px solid ${HF_COLORS.accentPurple}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                boxShadow: rightHighlight
                  ? "0 0 36px rgba(139, 92, 246, 0.22)"
                  : "0 14px 32px rgba(0,0,0,0.45)",
                padding: "22px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Framey header */}
              <div
                style={{
                  borderRadius: 14,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: `1.5px solid rgba(52, 211, 153, 0.45)`,
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: HF_COLORS.brandPrimary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: FONT_MONO,
                      fontSize: 24,
                      fontWeight: 900,
                      color: "#04120D",
                    }}
                  >
                    F
                  </div>
                  <div>
                    <div style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.brandNeon }}>
                      Framey 翠绿小向导 · 三栏工作台
                    </div>
                    <div style={{ fontSize: 19, color: HF_COLORS.textSecondary }}>
                      左栏 Agent 聊天 · 中央实时预览 · 右栏 Script / Captions / Layers
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 Local Agents Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {LOCAL_AGENTS.map((ag) => {
                  const needsFull = ag.access === "Full access";
                  const highlightFull = trapHighlight && needsFull;
                  return (
                    <div
                      key={ag.name}
                      style={{
                        borderRadius: 14,
                        backgroundColor: highlightFull
                          ? "rgba(244, 63, 94, 0.14)"
                          : HF_COLORS.bgElevated,
                        border: `2px solid ${
                          highlightFull
                            ? HF_COLORS.accentRose
                            : ag.free
                              ? HF_COLORS.brandNeon
                              : HF_COLORS.borderSubtle
                        }`,
                        padding: "13px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 21,
                            fontWeight: 700,
                            color: HF_COLORS.textPrimary,
                          }}
                        >
                          {ag.name}
                        </span>
                        {ag.free && (
                          <span
                            style={{
                              padding: "2px 9px",
                              borderRadius: 6,
                              backgroundColor: "rgba(16, 185, 129, 0.2)",
                              fontFamily: FONT_MONO,
                              fontSize: 17,
                              fontWeight: 700,
                              color: HF_COLORS.brandNeon,
                            }}
                          >
                            FREE
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 19, color: HF_COLORS.textSecondary }}>{ag.auth}</div>
                      <div
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 18,
                          fontWeight: 700,
                          color: needsFull ? HF_COLORS.accentRose : HF_COLORS.accentSky,
                        }}
                      >
                        权限模式：{ag.access}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Permission Trap Callout */}
              <div
                style={{
                  marginTop: "auto",
                  borderRadius: 14,
                  backgroundColor: trapHighlight
                    ? "rgba(244, 63, 94, 0.16)"
                    : "rgba(244, 63, 94, 0.08)",
                  border: `2px solid ${trapHighlight ? HF_COLORS.accentRose : "rgba(244, 63, 94, 0.4)"}`,
                  padding: "14px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 20,
                    fontWeight: 800,
                    color: HF_COLORS.accentRose,
                  }}
                >
                  ⚠ 权限避坑：Auto vs Full access
                </div>
                <div style={{ fontSize: 20, color: HF_COLORS.textPrimary, lineHeight: 1.45 }}>
                  默认 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>Auto</span> 拦截高危操作，但{" "}
                  <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>OpenCode</span> 与{" "}
                  <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>GitHub Copilot</span>{" "}
                  必须在 Settings → Agent 开启{" "}
                  <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>Full access</span> 才能运行。
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
