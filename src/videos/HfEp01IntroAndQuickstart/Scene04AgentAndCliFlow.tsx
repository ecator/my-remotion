import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfTerminalWindow } from "../../components/hyperframes/HfTerminalWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene04Props {
  voiceFromFrame: number;
}

const OFFICIAL_SKILLS = [
  { name: "/hyperframes", desc: "主入口：渲染契约与工作流", highlight: true },
  { name: "/hyperframes-cli", desc: "CLI 脚手架、检查、预览与渲染", highlight: false },
  { name: "/hyperframes-registry", desc: "450+ 可编辑组件块(转场/图表/3D)", highlight: true },
  { name: "/media-use", desc: "配音/音乐/字幕/抠像/调色混音", highlight: false },
  { name: "/figma", desc: "Figma 资产冻结、Token 与动效重建", highlight: false },
  { name: "/slideshow", desc: "可交互实时点击演示文稿 Deck", highlight: false },
  { name: "/remotion-to-hyperframes", desc: "Remotion 源码迁移与逐帧比对", highlight: false },
  { name: "/reverse-any-video", desc: "复刻任意参考视频为可编辑工程", highlight: false },
  { name: "/style-sampling", desc: "5 大成熟商业叙事视觉风格采样", highlight: false },
];

export const Scene04AgentAndCliFlow: React.FC<Scene04Props> = ({ voiceFromFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;

  const enterProgress = interpolate(frame, [0, 18], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const step1Active = voiceMs >= 10130 && voiceMs < 22241;
  const step2Active = voiceMs >= 22241 && voiceMs < 39811;
  const step3Active = voiceMs >= 39811;

  const activeBlockIdx = step1Active ? 0 : step2Active ? 1 : step3Active ? 2 : -1;

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
      {/* LEFT COLUMN: 3-STEP DEVELOPER & AGENT WORKFLOW */}
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
              marginBottom: 12,
            }}
          >
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(6, 182, 212, 0.16)",
                fontFamily: FONT_MONO,
                fontSize: 18,
                fontWeight: 700,
                color: HF_COLORS.accentSky,
              }}
            >
              PATH 03 // WITH YOUR CODING AGENT
            </span>
          </div>

          <div
            style={{
              fontSize: 33,
              fontWeight: 900,
              color: HF_COLORS.textPrimary,
              marginBottom: 12,
            }}
          >
            本地 Coding Agent 三步实战
          </div>

          {/* Supported Agents Chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 20,
            }}
          >
            {[
              "Claude Code",
              "OpenAI Codex",
              "Cursor",
              "Antigravity",
              "GitHub Copilot",
              "OpenCode",
            ].map((ag) => (
              <span
                key={ag}
                style={{
                  padding: "4px 11px",
                  borderRadius: 7,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1px solid ${HF_COLORS.borderSubtle}`,
                  fontFamily: FONT_MONO,
                  fontSize: 17,
                  fontWeight: 700,
                  color: HF_COLORS.textSecondary,
                }}
              >
                {ag}
              </span>
            ))}
          </div>

          {/* 3 Steps Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                num: "STEP 01",
                title: "安装官方 Plugin 或 Core Skills",
                desc: "Claude Code 推荐安装版本化插件；其他 Agent 运行 npx skills add 选择 Core Skills。",
                active: step1Active,
                color: HF_COLORS.brandNeon,
              },
              {
                num: "STEP 02",
                title: "使用 /hyperframes 路由请求",
                desc: "开启新会话并带上 /hyperframes 斜杠命令，强制加载框架契约与 450+ 组件库，拒绝盲猜。",
                active: step2Active,
                color: HF_COLORS.accentYellow,
              },
              {
                num: "STEP 03",
                title: "浏览器编辑器精修与本地渲染",
                desc: "运行 preview 打开可视化 NLE 微调，通过 check 门禁校验后 render 导出高清 MP4。",
                active: step3Active,
                color: HF_COLORS.accentSky,
              },
            ].map((st) => (
              <div
                key={st.num}
                style={{
                  padding: "16px 18px",
                  borderRadius: 14,
                  backgroundColor: st.active
                    ? "rgba(16, 185, 129, 0.14)"
                    : HF_COLORS.bgElevated,
                  border: st.active
                    ? `2px solid ${st.color}`
                    : `1.5px solid rgba(255, 255, 255, 0.08)`,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 700,
                    color: st.color,
                    marginBottom: 4,
                  }}
                >
                  {st.num} · {st.title}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: HF_COLORS.textSecondary,
                    lineHeight: 1.45,
                  }}
                >
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: "11px 16px",
            borderRadius: 12,
            backgroundColor: "rgba(245, 158, 11, 0.12)",
            border: `1.5px solid ${HF_COLORS.accentAmber}`,
            fontSize: 19,
            fontWeight: 700,
            color: HF_COLORS.accentYellow,
          }}
        >
          ⚡ 环境自检命令：<code style={{ fontFamily: FONT_MONO }}>npx hyperframes doctor</code> (检查 Node≥22 &amp; FFmpeg)
        </div>
      </div>

      {/* RIGHT COLUMN: TERMINAL DEMO + 9 SKILLS MATRIX */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 18,
        }}
      >
        <HfTerminalWindow
          title="Terminal — Local Agent & CLI Workflow"
          activeBlockIndex={activeBlockIdx}
          blocks={[
            {
              comment: "Step 1: 安装 Claude Code 插件 或 独立 Core Skills",
              command:
                "claude plugin marketplace add heygen-com/hyperframes && claude plugin install hyperframes@hyperframes\n# 或通用安装: npx skills add heygen-com/hyperframes  (也可运行 npx hyperframes skills update)",
              accentColor: HF_COLORS.brandNeon,
            },
            {
              comment: "Step 2: 在 Agent 会话中使用 /hyperframes 发起创作",
              command:
                'Using /hyperframes, make a 10-second product intro for https://example.com.',
              output: [
                "✔ Loaded /hyperframes contract & /hyperframes-registry (450+ blocks)",
                "✔ Generated BRIEF.md, index.html, compositions/ & opened local preview",
              ],
              accentColor: HF_COLORS.accentYellow,
            },
            {
              comment: "Step 3: 随时重新打开浏览器编辑器、运行门禁检查并渲染 MP4",
              command:
                "npx hyperframes preview\nnpx hyperframes check && npx hyperframes render --output final.mp4",
              accentColor: HF_COLORS.accentSky,
            },
          ]}
        />

        {/* Bottom Card: What the Skills Cover (9 Official Skills) */}
        <div
          style={{
            borderRadius: 18,
            backgroundColor: HF_COLORS.bgSurface,
            border:
              voiceMs >= 30600 && voiceMs < 39811
                ? `2px solid ${HF_COLORS.accentYellow}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
            padding: "16px 22px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: HF_COLORS.textPrimary,
              }}
            >
              官方 9 大 Agent Skills 能力矩阵（教会 AI 确定性视频规则）
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 17,
                color: HF_COLORS.brandNeon,
                fontWeight: 700,
              }}
            >
              skills/ directory
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 10,
            }}
          >
            {OFFICIAL_SKILLS.map((sk) => (
              <div
                key={sk.name}
                style={{
                  padding: "8px 12px",
                  borderRadius: 10,
                  backgroundColor: sk.highlight
                    ? "rgba(16, 185, 129, 0.14)"
                    : HF_COLORS.bgElevated,
                  border: sk.highlight
                    ? `1.5px solid ${HF_COLORS.brandNeon}`
                    : `1px solid rgba(255,255,255,0.07)`,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 700,
                    color: sk.highlight ? HF_COLORS.brandNeon : HF_COLORS.accentSky,
                  }}
                >
                  {sk.name}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    color: HF_COLORS.textSecondary,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {sk.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
