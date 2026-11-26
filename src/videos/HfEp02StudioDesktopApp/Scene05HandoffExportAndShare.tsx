import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { HfTerminalWindow } from "../../components/hyperframes/HfTerminalWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene05Props {
  voiceFromFrame: number;
}

const SHARE_ACCESS_LEVELS = [
  { label: "Only you", desc: "仅自己可见（草稿期）", color: HF_COLORS.textSecondary },
  { label: "Only people you invite", desc: "指定邮箱受邀登录", color: HF_COLORS.accentYellow },
  { label: "Anyone in workspace", desc: "默认：工作区成员可评", color: HF_COLORS.brandNeon },
  { label: "Anyone with the link", desc: "免登录输入昵称即评", color: HF_COLORS.accentSky },
];

export const Scene05HandoffExportAndShare: React.FC<Scene05Props> = ({
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

  const activeTermBlock = voiceMs < 15500 ? 0 : voiceMs < 35000 ? 1 : undefined;
  const shareHighlight = voiceMs >= 61000;

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
      {/* Top Row: Left CLI Handoff Terminal + Right Local vs Cloud Export Split */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.92fr 1.08fr",
          gap: 24,
        }}
      >
        {/* LEFT: Mac CLI Handoff */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <HfTerminalWindow
            title="Mac CLI ↔ Studio 双向接力"
            headerBadge="Claude Code · Codex · Grok"
            activeBlockIndex={activeTermBlock}
            style={{ flex: 1 }}
            blocks={[
              {
                comment: "1. 在 Agent 会话中原地打开 Studio，无缝延续对话上下文",
                command: "npx hyperframes open",
                accentColor: HF_COLORS.brandNeon,
                output: [
                  "◇ Opening project in HyperFrames desktop app",
                  "  Its chat picks up this Claude Code conversation.",
                ],
              },
              {
                comment: "2. 桌面端改完回到终端，同步修改记录与变动文件",
                command: "npx hyperframes catch-up",
                accentColor: HF_COLORS.accentSky,
                output: [
                  "✓ Summarized Framey edits & changed files since hand-off",
                ],
              },
            ]}
          />

          <div
            style={{
              borderRadius: 14,
              backgroundColor:
                voiceMs >= 21000 && voiceMs < 36500
                  ? "rgba(245, 158, 11, 0.16)"
                  : "rgba(245, 158, 11, 0.08)",
              border: `2px solid ${
                voiceMs >= 21000 && voiceMs < 36500
                  ? HF_COLORS.accentYellow
                  : "rgba(245, 158, 11, 0.4)"
              }`,
              padding: "12px 16px",
              fontSize: 19,
              color: HF_COLORS.textPrimary,
              lineHeight: 1.45,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.accentYellow }}>
              边界提示：
            </span>
            仅在 Mac 的 Agent 会话内运行{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>hyperframes open</span>{" "}
            交接的项目支持{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>catch-up</span>；普通终端打开或{" "}
            <span style={{ fontFamily: FONT_MONO }}>Import projects</span> 不带会话历史。
          </div>
        </div>

        {/* RIGHT: This Mac vs Cloud Export */}
        <HfSplitCompare
          voiceMs={voiceMs}
          gap={18}
          left={{
            badge: "LOCAL · THIS MAC",
            meta: "MP4 / WebM / MOV",
            title: "本地引擎渲染",
            subtitle: "全计划免费 · 无限导出 · 文件不出本机",
            tone: "emerald",
            activeWindow: [36500, 48000],
            items: [
              {
                title: "费用与次数：完全免费不限量",
                description: "所有订阅计划均可无限次导出至 Downloads 目录",
              },
              {
                title: "规格限制：无画幅、时长与体积上限",
                description: "支持 1080p / 4K / Project size 与自定义帧率",
              },
              {
                title: "数据隐私：100% 留在本地磁盘",
                description: "适合涉密素材与超大本地实拍工程",
              },
            ],
          }}
          right={{
            badge: "CLOUD RENDER",
            meta: "FREE 5 次/月 · ≤200 MB",
            title: "云端托管渲染",
            subtitle: "释放本机算力 · 边渲边继续剪辑",
            tone: "cyan",
            activeWindow: [48000, 61000],
            items: [
              {
                title: "配额：Free 每月 5 次 · Pro 无限次",
                description: "也可走 HeyGen API 余额按分钟计费（4K 约 2× 费率）",
              },
              {
                title: "工程上限：≤ 200 MB（16:9 / 9:16 / 1:1）",
                description: "超 200 MB 可点 Ask Framey 将大素材转存云端资产",
              },
              {
                title: "注意：云端任务启动后不可真正终止计费",
                description: "Cancel 仅停止等待，云端仍可能完成渲染并扣费",
              },
            ],
          }}
        />
      </div>

      {/* Bottom Bar: Share Review Link & Version Loop */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: shareHighlight ? "rgba(139, 92, 246, 0.14)" : HF_COLORS.bgSurface,
          border: shareHighlight
            ? `2.5px solid ${HF_COLORS.accentPurple}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "14px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 280 }}>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 20,
              fontWeight: 800,
              color: HF_COLORS.accentPurple,
            }}
          >
            SHARE · 团队时间戳审阅闭环
          </span>
          <span style={{ fontSize: 19, color: HF_COLORS.textSecondary }}>
            改版导出后点 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>Add this version</span> 同链接更新 · <span style={{ fontFamily: FONT_MONO }}>Turn off link</span> 停访留评
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, flex: 1 }}>
          {SHARE_ACCESS_LEVELS.map((lvl) => (
            <div
              key={lvl.label}
              style={{
                borderRadius: 11,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "9px 12px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 800, color: lvl.color }}>
                {lvl.label}
              </div>
              <div style={{ fontSize: 17, color: HF_COLORS.textSecondary, marginTop: 2 }}>
                {lvl.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
