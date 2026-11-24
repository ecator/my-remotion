import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene05Props {
  voiceFromFrame: number;
}

const SERIES_EPISODES = [
  { ep: "EP01", title: "什么是 HyperFrames 与三大起步路径", part: "第一部 · 认知与双编辑器", status: "done" },
  { ep: "EP02", title: "HyperFrames Studio 桌面端全攻略", part: "第一部 · 认知与双编辑器", status: "next" },
  { ep: "EP03", title: "Browser Editor 浏览器编辑器与时间轴精修", part: "第一部 · 认知与双编辑器", status: "upcoming" },
  { ep: "EP04", title: "产品发布、科普解说与 Figma 设计稿导入", part: "第二部 · 十大创作工作流", status: "upcoming" },
  { ep: "EP05", title: "口播粗剪、音乐卡点、数据地图、PR 与幻灯片", part: "第二部 · 十大创作工作流", status: "upcoming" },
  { ep: "EP06", title: "六段式 Prompt 骨架与七大丝滑运动法则", part: "第三部 · 提示词导演与视听", status: "upcoming" },
  { ep: "EP07", title: "TTS 配音、万首曲库、自动闪避与 91 款花字", part: "第三部 · 提示词导演与视听", status: "upcoming" },
  { ep: "EP08", title: "电影感调色管线、data-vfx-chain WebGL2 与 3D", part: "第三部 · 提示词导演与视听", status: "upcoming" },
  { ep: "EP09", title: "解剖 HTML Schema、时间属性与确定性寻址", part: "第四部 · 底层契约与云架构", status: "upcoming" },
  { ep: "EP10", title: "参数化视频模板：variables、语义槽位与批渲染", part: "第四部 · 底层契约与云架构", status: "upcoming" },
  { ep: "EP11", title: "巅峰对决与迁移：HyperFrames vs Remotion", part: "第四部 · 底层契约与云架构", status: "upcoming" },
  { ep: "EP12", title: "企业级集成：Headless SDK、Player 与云集群", part: "第四部 · 底层契约与云架构", status: "upcoming" },
];

export const Scene05FreeBoundaryAndRoadmap: React.FC<Scene05Props> = ({
  voiceFromFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceMs = ((frame - voiceFromFrame) / fps) * 1000;

  // Phase A (voiceMs < 34800): Free & Open Source vs Optional HeyGen Pro
  // Phase B (voiceMs >= 34800): 12-Episode Series Roadmap
  const roadmapSwitch = interpolate(voiceMs, [34400, 35300], [0, 1], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* PHASE A: FREE & OPEN SOURCE VS OPTIONAL HEYGEN PRO */}
      {roadmapSwitch < 1 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 32,
            padding: "6px 0 12px 0",
            opacity: 1 - roadmapSwitch,
            transform: `translateY(${interpolate(roadmapSwitch, [0, 1], [0, -30])}px)`,
          }}
        >
          {/* LEFT: 100% FREE & APACHE 2.0 OPEN SOURCE */}
          <div
            style={{
              borderRadius: 22,
              backgroundColor: HF_COLORS.bgSurface,
              border:
                voiceMs < 26639
                  ? `2.5px solid ${HF_COLORS.brandNeon}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
              boxShadow:
                voiceMs < 26639
                  ? "0 0 38px rgba(16, 185, 129, 0.22), 0 18px 42px rgba(0,0,0,0.55)"
                  : "0 14px 34px rgba(0,0,0,0.45)",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
                    padding: "5px 14px",
                    borderRadius: 8,
                    backgroundColor: "rgba(16, 185, 129, 0.18)",
                    border: `1.5px solid ${HF_COLORS.brandPrimary}`,
                    fontFamily: FONT_MONO,
                    fontSize: 20,
                    fontWeight: 700,
                    color: HF_COLORS.brandNeon,
                  }}
                >
                  100% FREE &amp; COMMERCIAL-READY
                </span>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 20,
                    fontWeight: 700,
                    color: HF_COLORS.brandNeon,
                  }}
                >
                  Apache 2.0 License
                </span>
              </div>

              <div
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  color: HF_COLORS.textPrimary,
                  marginBottom: 16,
                }}
              >
                完全免费开源与本地零成本能力
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "Apache 2.0 免费商用开源授权",
                    desc: "核心框架、CLI、450+ 组件块与 Skills 全部开源，无团队席位限制，可直接用于商业交付。",
                    active: voiceMs >= 4200 && voiceMs < 12335,
                  },
                  {
                    title: "本地无限次预览、编辑与 MP4 渲染",
                    desc: "无需登录账号即可在本地运行 Browser Editor 与 FFmpeg 渲染，Studio 桌面端本地导出同样无限。",
                    active: voiceMs >= 12335 && voiceMs < 16220,
                  },
                  {
                    title: "内置免费 Kokoro TTS 语音、本地抠像与音效库",
                    desc: "本地运行 Kokoro 语音合成、人物/物体背景移除（Remove Background）与内置转场音效 SFX。",
                    active: voiceMs >= 16220 && voiceMs < 20458,
                  },
                  {
                    title: "零成本 AI Agent：OpenCode 免费模型 & 本地 Ollama",
                    desc: "Code2Video 基准测试：Qwen 3.8 Max、DeepSeek V4.1、Kimi K3、GLM 5.3 距第一名仅 50 Elo 内！",
                    active: voiceMs >= 20458 && voiceMs < 26639,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "13px 18px",
                      borderRadius: 14,
                      backgroundColor: item.active
                        ? "rgba(16, 185, 129, 0.16)"
                        : HF_COLORS.bgElevated,
                      border: item.active
                        ? `2px solid ${HF_COLORS.brandNeon}`
                        : `1.5px solid rgba(255,255,255,0.08)`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: HF_COLORS.brandNeon,
                        marginBottom: 3,
                      }}
                    >
                      ✓ {item.title}
                    </div>
                    <div style={{ fontSize: 19, color: HF_COLORS.textSecondary }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "11px 16px",
                borderRadius: 12,
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: `1.5px solid ${HF_COLORS.brandPrimary}`,
                fontSize: 19,
                fontWeight: 700,
                color: HF_COLORS.textPrimary,
              }}
            >
              🎁 Studio 免费版（Free Plan）每月还额外赠送 5 次云导出 + 3 段 AI 视频片段！
            </div>
          </div>

          {/* RIGHT: OPTIONAL HEYGEN PRO & CLOUD */}
          <div
            style={{
              borderRadius: 22,
              backgroundColor: HF_COLORS.bgSurface,
              border:
                voiceMs >= 26639
                  ? `2.5px solid ${HF_COLORS.accentPurple}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
              boxShadow:
                voiceMs >= 26639
                  ? "0 0 38px rgba(139, 92, 246, 0.24), 0 18px 42px rgba(0,0,0,0.55)"
                  : "0 14px 34px rgba(0,0,0,0.45)",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
                    padding: "5px 14px",
                    borderRadius: 8,
                    backgroundColor: "rgba(139, 92, 246, 0.18)",
                    border: `1.5px solid ${HF_COLORS.accentViolet}`,
                    fontFamily: FONT_MONO,
                    fontSize: 20,
                    fontWeight: 700,
                    color: HF_COLORS.accentPurple,
                  }}
                >
                  OPTIONAL CLOUD &amp; PRO
                </span>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 19,
                    fontWeight: 700,
                    color: HF_COLORS.accentYellow,
                  }}
                >
                  按需开启
                </span>
              </div>

              <div
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  color: HF_COLORS.textPrimary,
                  marginBottom: 16,
                }}
              >
                哪些属于按需增值服务？
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  {
                    title: "你自选的商业 Coding Agent 订阅",
                    desc: "如 Claude Code、OpenAI Codex、Cursor，由对应服务商按自身账号计费。",
                    color: HF_COLORS.accentSky,
                  },
                  {
                    title: "HeyGen Voice 1 拟真语音 & 10,000+ 曲库",
                    desc: "登录 HeyGen 账号后可调用的广播级多情感配音与海量正版配乐目录。",
                    color: HF_COLORS.accentPurple,
                  },
                  {
                    title: "HeyGen Avatars 数字人 & Video 1 视频生成",
                    desc: "在画面中嵌入逼真 AI 数字人主讲，或直接生成长达 1 分钟的 AI 视频素材。",
                    color: HF_COLORS.accentYellow,
                  },
                  {
                    title: "HeyGen Cloud 托管云渲染 & 参考视频复刻",
                    desc: "免本地 Chrome/FFmpeg 的云端极速渲染，以及上传参考视频一键复刻剪辑风格（Pro $25/月）。",
                    color: HF_COLORS.accentRose,
                  },
                ].map((opt) => (
                  <div
                    key={opt.title}
                    style={{
                      padding: "14px 18px",
                      borderRadius: 14,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1.5px solid rgba(255,255,255,0.09)`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: opt.color,
                        marginBottom: 4,
                      }}
                    >
                      ✦ {opt.title}
                    </div>
                    <div style={{ fontSize: 19, color: HF_COLORS.textSecondary }}>
                      {opt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "11px 16px",
                borderRadius: 12,
                backgroundColor: "rgba(139, 92, 246, 0.14)",
                border: `1.5px solid ${HF_COLORS.accentViolet}`,
                fontFamily: FONT_MONO,
                fontSize: 19,
                fontWeight: 700,
                color: HF_COLORS.accentPurple,
              }}
            >
              🔑 终端登录命令：npx hyperframes auth login
            </div>
          </div>
        </div>
      )}

      {/* PHASE B: 12-EPISODE SERIES ROADMAP */}
      {voiceMs >= 34400 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "6px 0 12px 0",
            opacity: roadmapSwitch,
            transform: `translateY(${interpolate(roadmapSwitch, [0, 1], [28, 0])}px)`,
          }}
        >
          {/* Header Banner */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: HF_COLORS.bgSurface,
              border: `2px solid ${HF_COLORS.brandPrimary}`,
              padding: "16px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 0 32px rgba(16, 185, 129, 0.18)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  fontWeight: 700,
                  color: HF_COLORS.brandNeon,
                  marginBottom: 2,
                }}
              >
                HYPERFRAMES 12-EPISODE FULL-STACK ENCYCLOPEDIA ROADMAP
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  color: HF_COLORS.textPrimary,
                }}
              >
                《HyperFrames 全栈百科》12 集深度连载路线图
              </div>
            </div>

            <div
              style={{
                padding: "10px 22px",
                borderRadius: 12,
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                border: `2px solid ${HF_COLORS.brandNeon}`,
                fontFamily: FONT_MONO,
                fontSize: 21,
                fontWeight: 700,
                color: HF_COLORS.brandNeon,
              }}
            >
              NEXT UP ➔ EP02 Studio 桌面端全攻略
            </div>
          </div>

          {/* 12 Episodes Grid (3 rows x 4 columns) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 18,
              flex: 1,
              marginTop: 18,
            }}
          >
            {SERIES_EPISODES.map((item) => {
              const isDone = item.status === "done";
              const isNext = item.status === "next";

              return (
                <div
                  key={item.ep}
                  style={{
                    borderRadius: 16,
                    backgroundColor: isNext
                      ? "rgba(16, 185, 129, 0.18)"
                      : isDone
                        ? "rgba(6, 182, 212, 0.12)"
                        : HF_COLORS.bgSurface,
                    border: isNext
                      ? `2.5px solid ${HF_COLORS.brandNeon}`
                      : isDone
                        ? `2px solid ${HF_COLORS.accentSky}`
                        : `1.5px solid ${HF_COLORS.borderSubtle}`,
                    boxShadow: isNext
                      ? "0 0 28px rgba(16, 185, 129, 0.28)"
                      : "none",
                    padding: "16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
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
                        fontSize: 22,
                        fontWeight: 700,
                        color: isNext
                          ? HF_COLORS.brandNeon
                          : isDone
                            ? HF_COLORS.accentSky
                            : HF_COLORS.accentYellow,
                      }}
                    >
                      {item.ep}
                    </span>
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        padding: "2px 10px",
                        borderRadius: 6,
                        backgroundColor: isNext
                          ? HF_COLORS.brandPrimary
                          : isDone
                            ? "rgba(6, 182, 212, 0.25)"
                            : HF_COLORS.bgElevated,
                        color: isNext
                          ? "#05070B"
                          : isDone
                            ? HF_COLORS.accentSky
                            : HF_COLORS.textMuted,
                      }}
                    >
                      {isDone ? "✓ 本集已学完" : isNext ? "★ 下一集预告" : item.part}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: HF_COLORS.textPrimary,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
