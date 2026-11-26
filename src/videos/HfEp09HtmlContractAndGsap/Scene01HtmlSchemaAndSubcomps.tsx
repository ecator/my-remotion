import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfChapterIntro } from "../../components/hyperframes/HfChapterIntro";
import { HfCodeWindow } from "../../components/hyperframes/HfCodeWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene01Props {
  voiceFromFrame: number;
  brandColor?: string;
  accentColor?: string;
}

export const Scene01HtmlSchemaAndSubcomps: React.FC<Scene01Props> = ({
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

  const activeLine =
    voiceMs < 14000
      ? 1
      : voiceMs < 22000
        ? 3
        : voiceMs < 32000
          ? 6
          : voiceMs < 40000
            ? 8
            : 10;

  const subcompActive = voiceMs >= 33000;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.09 // HTML SCHEMA & DETERMINISM"
        secondaryBadge="HTML CONTRACT · DATA-* · PAUSED GSAP · QUALITY GATES"
        title="解剖 HyperFrames 工程："
        highlightTitle="HTML Schema、时间属性与确定性寻址渲染"
        subtitle="读懂根契约与嵌套子组合、避开图层与自闭合陷阱、掌握暂停 GSAP 寻址与三大确定性铁律"
        chips={[
          { code: "SCHEMA", label: "data-composition-id & data-no-timeline", color: HF_COLORS.brandNeon },
          { code: "SEEKABLE", label: "gsap.timeline({ paused: true })", color: HF_COLORS.accentSky },
          { code: "3 GATES", label: "doctor · @hyperframes/lint · check", color: HF_COLORS.accentYellow },
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
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.08fr) minmax(0, 0.92fr)",
            gap: 24,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          {/* LEFT: Root HTML Contract */}
          <HfCodeWindow
            title="index.html · Root Composition Contract"
            subtitle="6 个必知根属性"
            accentColor={HF_COLORS.brandNeon}
            activeLineIndex={activeLine}
            lines={[
              { text: '<div id="root"' },
              {
                text: '  data-composition-id="root"',
                highlightColor: HF_COLORS.brandNeon,
                badge: "唯一组合 ID",
              },
              {
                text: '  data-start="0"',
                highlightColor: HF_COLORS.accentSky,
                badge: "起点 0s",
              },
              {
                text: '  data-width="1920" data-height="1080"',
                highlightColor: HF_COLORS.accentSky,
                badge: "画幅像素",
              },
              {
                text: '  data-duration="30"',
                highlightColor: HF_COLORS.accentYellow,
                badge: "总时长(秒)",
              },
              {
                text: "  data-no-timeline",
                highlightColor: HF_COLORS.accentRose,
                badge: "防 45s 超时",
              },
              { text: ">" },
              { text: '  <!-- 嵌套子组合：支持拆分多文件协作 -->' },
              {
                text: '  <div data-composition-src="./scenes/hero.html"',
                highlightColor: HF_COLORS.accentPurple,
                badge: "外部子组合",
              },
              { text: '       data-start="0" data-duration="8"></div>' },
              {
                text: '  <img src="placeholder.jpg" id="cover" />',
                highlightColor: HF_COLORS.brandNeon,
                badge: "assetUrl()",
              },
              { text: "</div>" },
            ]}
          />

          {/* RIGHT: 45s Timeout Pitfall + Subcomp <template> & assetUrl() */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
            <div
              style={{
                borderRadius: 18,
                backgroundColor: "rgba(244, 63, 94, 0.14)",
                border: `2px solid ${HF_COLORS.accentRose}`,
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.accentRose }}>
                  ⚠ 45 秒渲染卡死陷阱（player-ready-timeout）
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.accentRose }}>
                  45s STALL
                </span>
              </div>
              <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, lineHeight: 1.5 }}>
                纯静态或仅靠 CSS/视频驱动、不注册 <span style={{ fontFamily: FONT_MONO }}>window.__timelines</span>{" "}
                的工程，必须声明{" "}
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow, fontWeight: 700 }}>
                  data-no-timeline
                </span>
                ；否则渲染器将空等 45 秒才超时！
              </div>
            </div>

            <div
              style={{
                flex: 1,
                borderRadius: 18,
                backgroundColor: HF_COLORS.bgSurface,
                border: subcompActive
                  ? `2.5px solid ${HF_COLORS.accentPurple}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                  嵌套子组合规范与资源寻址
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.accentPurple }}>
                  SUB-COMPOSITIONS
                </span>
              </div>

              <div
                style={{
                  borderRadius: 12,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(HF_COLORS.accentPurple, 0.45)}`,
                  padding: "13px 16px",
                  fontSize: 19,
                  color: HF_COLORS.textPrimary,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: HF_COLORS.accentPurple }}>1. 子文件封装 &lt;template&gt;：</strong>
                被 <span style={{ fontFamily: FONT_MONO }}>data-composition-src</span> 引用的子 HTML
                用 <span style={{ fontFamily: FONT_MONO }}>&lt;template&gt;</span> 隔离脚本与样式；
                <strong style={{ color: HF_COLORS.accentRose }}>根 index.html 严禁套 &lt;template&gt;</strong>。
              </div>

              <div
                style={{
                  borderRadius: 12,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(HF_COLORS.brandNeon, 0.45)}`,
                  padding: "13px 16px",
                  fontSize: 19,
                  color: HF_COLORS.textPrimary,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: HF_COLORS.brandNeon }}>2. 便携路径 assetUrl()：</strong>
                动态拼装子组合内的图片/字体路径时，调用{" "}
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>
                  window.__hyperframes.assetUrl(&quot;./bg.jpg&quot;)
                </span>
                ，确保无论本地预览还是云端分片都零 404。
              </div>

              <div
                style={{
                  marginTop: "auto",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: `1.5px solid ${HF_COLORS.brandPrimary}`,
                  padding: "11px 16px",
                  fontFamily: FONT_MONO,
                  fontSize: 17,
                  color: HF_COLORS.brandNeon,
                }}
              >
                ✓ 独立时间坐标系：子组合内 data-start 相对自身 0s 起算
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
