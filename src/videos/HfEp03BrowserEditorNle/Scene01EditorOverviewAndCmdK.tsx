import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfChapterIntro } from "../../components/hyperframes/HfChapterIntro";
import { HfTerminalWindow } from "../../components/hyperframes/HfTerminalWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene01Props {
  voiceFromFrame: number;
  brandColor?: string;
  accentColor?: string;
}

export const Scene01EditorOverviewAndCmdK: React.FC<Scene01Props> = ({
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

  const termHighlight = voiceMs >= 16500 && voiceMs < 26000;
  const paneHighlight = voiceMs >= 26000 && voiceMs < 46500;
  const cmdKHighlight = voiceMs >= 46500;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.03 // BROWSER EDITOR & NLE"
        secondaryBadge="LOCALHOST:3002 · LIVE HTML SYNC"
        title="源码级可视化剪辑："
        highlightTitle="Browser Editor"
        titleSuffix=" 浏览器编辑器与时间轴精修"
        subtitle="一行 npx hyperframes preview 启动专业非编工作台，画布、关键帧、多轨混音实时写回 HTML 源码"
        chips={[
          { code: "PORT 3002", label: "npx hyperframes preview", color: HF_COLORS.accentSky },
          { code: "⌘K", label: "打包选中元素回传 Agent", color: HF_COLORS.brandNeon },
          { code: "WEBMCP", label: "12 个浏览器内 Agent 工具", color: HF_COLORS.accentPurple },
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
          {/* Main 2-column row: Terminal Launch + 4-Pane Wireframe */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "0.86fr 1.14fr",
              gap: 26,
            }}
          >
            {/* Left: Terminal + Bidirectional Source-of-Truth */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <HfTerminalWindow
                title="启动 Browser Editor 本地预览台"
                headerBadge="port 3002 · hot write-back"
                activeBlockIndex={termHighlight ? 0 : undefined}
                style={{ flex: 1 }}
                blocks={[
                  {
                    comment: "在任意 HyperFrames 工程目录启动浏览器可视化剪辑台",
                    command: "npx hyperframes preview",
                    accentColor: HF_COLORS.accentSky,
                    output: [
                      "▸ Studio server running at http://localhost:3002",
                      "▸ Watching index.html & compositions/*.html",
                      "▸ All canvas / timeline edits save straight to HTML",
                    ],
                  },
                ]}
              />

              <div
                style={{
                  borderRadius: 16,
                  backgroundColor: cmdKHighlight
                    ? "rgba(16, 185, 129, 0.14)"
                    : HF_COLORS.bgSurface,
                  border: cmdKHighlight
                    ? `2.5px solid ${HF_COLORS.brandNeon}`
                    : `2px solid ${HF_COLORS.borderSubtle}`,
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 8,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: `1.5px solid ${HF_COLORS.brandNeon}`,
                      fontFamily: FONT_MONO,
                      fontSize: 21,
                      fontWeight: 800,
                      color: HF_COLORS.brandNeon,
                    }}
                  >
                    ⌘K
                  </span>
                  <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                    Describe a change to the agent
                  </span>
                </div>
                <div style={{ fontSize: 20, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
                  跨场景大改一键打包当前选中元素源码定位与工程上下文，粘贴回终端{" "}
                  <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>Claude Code / Codex</span>{" "}
                  即可精准接力。
                </div>
              </div>
            </div>

            {/* Right: 4-Pane Browser Editor Layout Diagram */}
            <div
              style={{
                borderRadius: 20,
                backgroundColor: HF_COLORS.bgSurface,
                border: paneHighlight
                  ? `2.5px solid ${HF_COLORS.accentSky}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                boxShadow: paneHighlight
                  ? "0 0 36px rgba(6, 182, 212, 0.2)"
                  : "0 14px 32px rgba(0,0,0,0.45)",
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                  Browser Editor 四栏源码级工作台
                </span>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 700,
                    color: HF_COLORS.accentSky,
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(6, 182, 212, 0.14)",
                  }}
                >
                  ZERO COPY · LIVE HTML
                </span>
              </div>

              {/* Upper 3 columns */}
              <div
                style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: "0.95fr 1.25fr 1fr",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    borderRadius: 14,
                    backgroundColor: HF_COLORS.bgElevated,
                    border: `1.5px solid ${hexToRgba(HF_COLORS.brandNeon, 0.45)}`,
                    padding: "14px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.brandNeon }}>
                    LEFT PANEL
                  </span>
                  <div style={{ fontSize: 20, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                    工程与门禁
                  </div>
                  <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.55 }}>
                    • Compositions (⌘1)
                    <br />• Assets / Catalog (⌘2)
                    <br />• Code 源码直编
                    <br />• 左下角实时 Lint
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: 14,
                    backgroundColor: "rgba(6, 182, 212, 0.08)",
                    border: `2px solid ${hexToRgba(HF_COLORS.accentSky, 0.55)}`,
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.accentSky }}>
                      CENTER CANVAS
                    </span>
                    <div style={{ fontSize: 22, fontWeight: 800, color: HF_COLORS.textPrimary, marginTop: 6 }}>
                      实时互动预览画布
                    </div>
                  </div>
                  <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
                    平移 / 缩放 / 旋转 / 裁剪 / 网格对齐 / 运动路径拖拽 / 关键帧手势录制，每步改动立即写回 HTML DOM。
                  </div>
                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 8,
                      backgroundColor: HF_COLORS.bgSurface,
                      fontFamily: FONT_MONO,
                      fontSize: 17,
                      color: HF_COLORS.brandNeon,
                      textAlign: "center",
                    }}
                  >
                    Seek Bar · Fullscreen (F) · Open in Studio App
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: 14,
                    backgroundColor: HF_COLORS.bgElevated,
                    border: `1.5px solid ${hexToRgba(HF_COLORS.accentPurple, 0.45)}`,
                    padding: "14px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.accentPurple }}>
                    RIGHT INSPECTOR
                  </span>
                  <div style={{ fontSize: 20, fontWeight: 700, color: HF_COLORS.textPrimary }}>
                    属性与交付
                  </div>
                  <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.55 }}>
                    • Design & Audio FX
                    <br />• Layers (z-index)
                    <br />• Variables 参数预览
                    <br />• Renders 导出队列
                  </div>
                </div>
              </div>

              {/* Bottom Timeline Strip */}
              <div
                style={{
                  borderRadius: 14,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(HF_COLORS.accentYellow, 0.5)}`,
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentYellow }}>
                  BOTTOM · VIRTUALIZED NLE TIMELINE
                </span>
                <span style={{ fontSize: 19, color: HF_COLORS.textSecondary }}>
                  虚拟化多轨剪辑 · 音频自动化包络 · 关键帧菱形通道 · 键盘树格导航
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
