import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene03Props {
  voiceFromFrame: number;
}

export const Scene03ZeroCodePaths: React.FC<Scene03Props> = ({ voiceFromFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;

  const enterProgress = interpolate(frame, [0, 18], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const leftActive = voiceMs >= 7400 && voiceMs < 32677;
  const rightActive = voiceMs >= 32677;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "4px 0 10px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [20, 0])}px)`,
      }}
    >
      {/* Top Overview Strip */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "14px 26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 7,
              backgroundColor: "rgba(16, 185, 129, 0.16)",
              fontFamily: FONT_MONO,
              fontSize: 19,
              fontWeight: 700,
              color: HF_COLORS.brandNeon,
            }}
          >
            THREE WAYS TO START
          </span>
          <span
            style={{
              fontSize: 27,
              fontWeight: 800,
              color: HF_COLORS.textPrimary,
            }}
          >
            三大起步路径产出同构工程：先看两条<span style={{ color: HF_COLORS.brandNeon }}>零终端代码门槛</span>路径
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            fontFamily: FONT_MONO,
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 7,
              backgroundColor: leftActive ? "rgba(16, 185, 129, 0.22)" : HF_COLORS.bgElevated,
              color: leftActive ? HF_COLORS.brandNeon : HF_COLORS.textSecondary,
              border: `1.5px solid ${leftActive ? HF_COLORS.brandNeon : "transparent"}`,
            }}
          >
            ① Studio 桌面端 App
          </span>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 7,
              backgroundColor: rightActive ? "rgba(139, 92, 246, 0.22)" : HF_COLORS.bgElevated,
              color: rightActive ? HF_COLORS.accentPurple : HF_COLORS.textSecondary,
              border: `1.5px solid ${rightActive ? HF_COLORS.accentPurple : "transparent"}`,
            }}
          >
            ② AI Chat 云端 MCP
          </span>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 7,
              backgroundColor: HF_COLORS.bgElevated,
              color: HF_COLORS.textMuted,
            }}
          >
            ③ Coding Agent (下节详解)
          </span>
        </div>
      </div>

      {/* Main 1:1 Split Comparison Cards */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }}
      >
        {/* LEFT CARD: PATH 1 - HYPERFRAMES STUDIO DESKTOP APP */}
        <div
          style={{
            borderRadius: 22,
            backgroundColor: HF_COLORS.bgSurface,
            border: leftActive
              ? `2.5px solid ${HF_COLORS.brandNeon}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow: leftActive
              ? "0 0 38px rgba(16, 185, 129, 0.22), 0 18px 42px rgba(0,0,0,0.55)"
              : "0 14px 34px rgba(0,0,0,0.45)",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Card Header */}
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
                  padding: "5px 14px",
                  borderRadius: 8,
                  backgroundColor: "rgba(16, 185, 129, 0.18)",
                  border: `1.5px solid ${HF_COLORS.brandPrimary}`,
                  fontFamily: FONT_MONO,
                  fontSize: 19,
                  fontWeight: 700,
                  color: HF_COLORS.brandNeon,
                }}
              >
                PATH 01 // STUDIO DESKTOP APP (推荐首选)
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  fontWeight: 700,
                  color: HF_COLORS.accentSky,
                }}
              >
                macOS · Windows · Linux
              </span>
            </div>

            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: HF_COLORS.textPrimary,
                marginBottom: 8,
              }}
            >
              HyperFrames Studio 桌面工作站
            </div>
            <div
              style={{
                fontSize: 22,
                color: HF_COLORS.textSecondary,
                marginBottom: 18,
              }}
            >
              内置 AI Agent + 实时预览画布 + 可视化编辑器，无需打开终端：
            </div>

            {/* 3 Workflow Steps inside Studio App */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Step A */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor:
                    voiceMs >= 16500 && voiceMs < 21132
                      ? "rgba(16, 185, 129, 0.15)"
                      : HF_COLORS.bgElevated,
                  border:
                    voiceMs >= 16500 && voiceMs < 21132
                      ? `2px solid ${HF_COLORS.brandNeon}`
                      : `1.5px solid rgba(255,255,255,0.08)`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 19,
                      fontWeight: 700,
                      color: HF_COLORS.brandNeon,
                    }}
                  >
                    1. Make something + Framey 翠绿向导
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 17,
                      color: HF_COLORS.textMuted,
                    }}
                  >
                    Free HeyGen Sign-in
                  </span>
                </div>
                <div style={{ fontSize: 21, color: HF_COLORS.textPrimary }}>
                  输入一句话描述，小助手 <strong>Framey</strong> 自动追问受众与风格细节。
                </div>
              </div>

              {/* Step B */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor:
                    voiceMs >= 21132 && voiceMs < 25413
                      ? "rgba(16, 185, 129, 0.15)"
                      : HF_COLORS.bgElevated,
                  border:
                    voiceMs >= 21132 && voiceMs < 25413
                      ? `2px solid ${HF_COLORS.brandNeon}`
                      : `1.5px solid rgba(255,255,255,0.08)`,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 19,
                    fontWeight: 700,
                    color: HF_COLORS.accentSky,
                    marginBottom: 4,
                  }}
                >
                  2. Storyboard 分镜审批 ➔ 自动构建成片
                </div>
                <div style={{ fontSize: 21, color: HF_COLORS.textPrimary }}>
                  在动起来之前先审阅静态分镜卡（Storyboard），确认结构后再生成完整视频。
                </div>
              </div>

              {/* Step C */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor:
                    voiceMs >= 25413 && voiceMs < 32677
                      ? "rgba(16, 185, 129, 0.15)"
                      : HF_COLORS.bgElevated,
                  border:
                    voiceMs >= 25413 && voiceMs < 32677
                      ? `2px solid ${HF_COLORS.brandNeon}`
                      : `1.5px solid rgba(255,255,255,0.08)`,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 19,
                    fontWeight: 700,
                    color: HF_COLORS.accentYellow,
                    marginBottom: 4,
                  }}
                >
                  3. 指点、画圈涂鸦与 Script 文档式批量精修
                </div>
                <div style={{ fontSize: 21, color: HF_COLORS.textPrimary }}>
                  用 <strong>Select 指点画面</strong>、<strong>Draw 画圈批注</strong>或删改台词文档，一次性打包发给 Agent。
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Advantage Pill */}
          <div
            style={{
              padding: "12px 18px",
              borderRadius: 12,
              backgroundColor: "rgba(16, 185, 129, 0.14)",
              border: `1.5px solid ${HF_COLORS.brandPrimary}`,
              fontSize: 20,
              fontWeight: 700,
              color: HF_COLORS.brandNeon,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>✓ 保留完整本地工程目录 (.hyperframes-studio)</span>
            <span>✓ 可与 Claude Code 随时接力</span>
          </div>
        </div>

        {/* RIGHT CARD: PATH 2 - AI CHAT HOSTED MCP CONNECTOR */}
        <div
          style={{
            borderRadius: 22,
            backgroundColor: HF_COLORS.bgSurface,
            border: rightActive
              ? `2.5px solid ${HF_COLORS.accentPurple}`
              : `2px solid ${HF_COLORS.borderSubtle}`,
            boxShadow: rightActive
              ? "0 0 38px rgba(139, 92, 246, 0.24), 0 18px 42px rgba(0,0,0,0.55)"
              : "0 14px 34px rgba(0,0,0,0.45)",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Card Header */}
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
                  padding: "5px 14px",
                  borderRadius: 8,
                  backgroundColor: "rgba(139, 92, 246, 0.18)",
                  border: `1.5px solid ${HF_COLORS.accentViolet}`,
                  fontFamily: FONT_MONO,
                  fontSize: 19,
                  fontWeight: 700,
                  color: HF_COLORS.accentPurple,
                }}
              >
                PATH 02 // HOSTED MCP CONNECTOR
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  fontWeight: 700,
                  color: HF_COLORS.accentYellow,
                }}
              >
                Claude.ai · ChatGPT · Grok
              </span>
            </div>

            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: HF_COLORS.textPrimary,
                marginBottom: 8,
              }}
            >
              AI 聊天网页端 · 零安装云端直出
            </div>
            <div
              style={{
                fontSize: 22,
                color: HF_COLORS.textSecondary,
                marginBottom: 18,
              }}
            >
              电脑无法装软件或出门在外？直接挂载官方托管 MCP 服务：
            </div>

            {/* Official MCP Endpoint Box */}
            <div
              style={{
                padding: "14px 18px",
                borderRadius: 14,
                backgroundColor: "#0A0E17",
                border:
                  voiceMs >= 36172 && voiceMs < 41322
                    ? `2px solid ${HF_COLORS.accentPurple}`
                    : `1.5px solid ${HF_COLORS.borderSubtle}`,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 17,
                  color: HF_COLORS.textMuted,
                  marginBottom: 4,
                }}
              >
                OFFICIAL PRODUCTION MCP SERVER URL
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 23,
                  fontWeight: 700,
                  color: HF_COLORS.accentPurple,
                }}
              >
                https://mcp.heygen.com/mcp/hyperframes/
              </div>
            </div>

            {/* Chat Conversation Simulation */}
            <div
              style={{
                padding: "16px 18px",
                borderRadius: 14,
                backgroundColor: HF_COLORS.bgElevated,
                border:
                  voiceMs >= 41322 && voiceMs < 44449
                    ? `2px solid ${HF_COLORS.accentSky}`
                    : `1.5px solid rgba(255,255,255,0.08)`,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 20, color: HF_COLORS.textPrimary }}>
                <strong style={{ color: HF_COLORS.accentSky }}>You:</strong> &quot;Use HyperFrames to make a 15s vertical product intro...&quot;
              </div>
              <div style={{ fontSize: 20, color: HF_COLORS.textSecondary }}>
                <strong style={{ color: HF_COLORS.accentPurple }}>MCP Tool:</strong> 云端构建组合 ➔ 对话修改 ➔ 自动渲染并返回 <code style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>final.mp4</code> 下载链接
              </div>
            </div>
          </div>

          {/* Trade-off Warning Box */}
          <div
            style={{
              padding: "12px 18px",
              borderRadius: 12,
              backgroundColor:
                voiceMs >= 44449
                  ? "rgba(244, 63, 94, 0.16)"
                  : "rgba(245, 158, 11, 0.12)",
              border: `1.5px solid ${voiceMs >= 44449 ? HF_COLORS.accentDanger : HF_COLORS.accentAmber}`,
              fontSize: 20,
              fontWeight: 700,
              color: voiceMs >= 44449 ? HF_COLORS.accentRose : HF_COLORS.accentYellow,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>⚡ 优势：0 本地环境依赖</span>
            <span>⚠️ 取舍：放弃本地工程目录与浏览器编辑器</span>
          </div>
        </div>
      </div>
    </div>
  );
};
