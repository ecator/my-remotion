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

const SEVEN_TYPES = [
  { name: "string", desc: "标题、文案、音视频 URL 均用 string", color: HF_COLORS.brandNeon },
  { name: "number", desc: "数值、字号、倍率、倒计时秒数", color: HF_COLORS.accentSky },
  { name: "color", desc: "品牌主色 / 背景色 Hex/RGB", color: HF_COLORS.accentYellow },
  { name: "boolean", desc: "开关徽章、水印、角标显隐", color: HF_COLORS.accentPurple },
  { name: "enum", desc: "受控枚举主题/布局档位", color: HF_COLORS.brandNeon },
  { name: "font", desc: "可切换品牌主字体族", color: HF_COLORS.accentSky },
  { name: "image", desc: "Logo、产品截图、封面位图", color: HF_COLORS.accentYellow },
];

export const Scene01VariablesSchemaAndTypes: React.FC<Scene01Props> = ({
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
    voiceMs < 14000 ? 1 : voiceMs < 24000 ? 4 : voiceMs < 35000 ? 7 : 9;

  const trapActive = voiceMs >= 37000;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.10 // VARIABLES & BATCH TEMPLATES"
        secondaryBadge="7 TYPES · 8 PORTRAYS · ZERO-JS BINDING · BATCH & LAMBDA JSONL"
        title="参数化视频模板："
        highlightTitle="data-composition-variables、语义槽位与批量渲染"
        subtitle="一套 HTML 模板驱动千人千面：七大数据类型、八大语义槽位、本地沙箱批处理与云端 JSONL 并发"
        chips={[
          { code: "7 TYPES", label: "string · number · color · boolean · enum · font · image", color: HF_COLORS.brandNeon },
          { code: "8 SLOTS", label: "role & portrays 语义契约", color: HF_COLORS.accentPurple },
          { code: "BATCH", label: "--batch 沙箱 & Lambda JSONL", color: HF_COLORS.accentYellow },
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
            gridTemplateColumns: "minmax(0, 1.02fr) minmax(0, 0.98fr)",
            gap: 24,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          {/* LEFT: data-composition-variables JSON */}
          <HfCodeWindow
            title="index.html · data-composition-variables"
            subtitle="声明式变量 Schema"
            accentColor={HF_COLORS.brandNeon}
            activeLineIndex={activeLine}
            lines={[
              { text: '<div id="root" data-composition-id="launch"' },
              {
                text: "  data-composition-variables='[",
                highlightColor: HF_COLORS.brandNeon,
                badge: "根容器声明",
              },
              { text: '    {"id":"brand_name","type":"string",' },
              { text: '     "default":"Acme AI","portrays":"subject_name"},' },
              {
                text: '    {"id":"brand_color","type":"color","default":"#10B981"},',
                highlightColor: HF_COLORS.accentYellow,
                badge: "自动映射 --brand_color",
              },
              { text: '    {"id":"hero_logo","type":"image","default":"./logo.png"},' },
              { text: '    {"id":"theme","type":"enum","options":["dark","light"]},' },
              {
                text: '    {"id":"bgm_url","type":"string","default":"./bgm.mp3"}',
                highlightColor: HF_COLORS.accentRose,
                badge: "音视频用 string",
              },
              { text: "  ]'>" },
              { text: "  <h1 data-var-text=\"brand_name\">Acme AI</h1>" },
              { text: "</div>" },
            ]}
          />

          {/* RIGHT: 7 Types Matrix + No video/audio type warning */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
            <div
              style={{
                flex: 1,
                borderRadius: 18,
                backgroundColor: HF_COLORS.bgSurface,
                border: `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                  官方严格限定的 7 大数据类型
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.brandNeon }}>
                  EXACTLY 7 TYPES
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1 }}>
                {SEVEN_TYPES.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      borderRadius: 12,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1.5px solid ${hexToRgba(t.color, 0.45)}`,
                      padding: "10px 14px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 4,
                    }}
                  >
                    <span style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: t.color }}>
                      {t.name}
                    </span>
                    <span style={{ fontSize: 16, color: HF_COLORS.textSecondary, lineHeight: 1.35 }}>
                      {t.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 16,
                backgroundColor: trapActive ? "rgba(244, 63, 94, 0.16)" : "rgba(244, 63, 94, 0.1)",
                border: `2px solid ${HF_COLORS.accentRose}`,
                padding: "15px 20px",
                fontSize: 19,
                color: HF_COLORS.textPrimary,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: HF_COLORS.accentRose }}>⚠ 切勿臆造类型：</strong>
              Schema 中<strong>不存在</strong> <span style={{ fontFamily: FONT_MONO }}>video</span> 或{" "}
              <span style={{ fontFamily: FONT_MONO }}>audio</span> 类型！视频片段、配音或 BGM 路径一律声明为{" "}
              <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon, fontWeight: 800 }}>string</span>。
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
