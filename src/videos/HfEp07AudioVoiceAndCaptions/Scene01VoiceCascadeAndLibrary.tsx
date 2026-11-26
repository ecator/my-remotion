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

const VOICE_CASCADE = [
  { tier: "PRIORITY 1", name: "HeyGen Voice", desc: "高表现力声线 & 专属克隆音色（HeyGen 账号 / API Key）", color: HF_COLORS.brandNeon },
  { tier: "PRIORITY 2", name: "ElevenLabs / Gemini TTS", desc: "配置对应云端密钥时自动接入专业旁白合成", color: HF_COLORS.accentPurple },
  { tier: "FREE FALLBACK", name: "Kokoro 本地离线（54 款声线）", desc: "无云端密钥时自动无缝回落，多语言零成本本机运行", color: HF_COLORS.accentSky },
];

export const Scene01VoiceCascadeAndLibrary: React.FC<Scene01Props> = ({
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

  const voiceActive = voiceMs < 36000;
  const libraryActive = voiceMs >= 36000;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.07 // AUDIO, VOICE & CAPTIONS"
        secondaryBadge="KOKORO 54 · 10,000+ MUSIC · HTML DAW · 91 CAPTIONS"
        title="声音与字幕工程："
        highlightTitle="配音、自动闪避与 91 款花字"
        subtitle="从零成本本地 Kokoro 配音到 HTML 无损混音台、人物抠像背后大字与统一 Speed Ramps 变速曲线"
        chips={[
          { code: "TTS", label: "HeyGen → ElevenLabs → Kokoro 54", color: HF_COLORS.brandNeon },
          { code: "HTML DAW", label: "4 大属性 · +12 dB · -3 dBTP", color: HF_COLORS.accentSky },
          { code: "91 STYLES", label: "Captions Catalog + Speed Ramps", color: HF_COLORS.accentYellow },
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
            gridTemplateColumns: "1fr 1fr",
            gap: 26,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          {/* LEFT: TTS Voice Cascade */}
          <div
            style={{
              borderRadius: 20,
              backgroundColor: HF_COLORS.bgSurface,
              border: voiceActive
                ? `2.5px solid ${HF_COLORS.brandNeon}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
              boxShadow: voiceActive
                ? "0 0 36px rgba(16, 185, 129, 0.2)"
                : "0 14px 32px rgba(0,0,0,0.45)",
              padding: "22px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 15,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                ① TTS 语音引擎三级自动级联
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  fontWeight: 700,
                  color: HF_COLORS.brandNeon,
                  padding: "4px 11px",
                  borderRadius: 8,
                  backgroundColor: "rgba(16, 185, 129, 0.16)",
                }}
              >
                AUTO CASCADE
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              {VOICE_CASCADE.map((v) => (
                <div
                  key={v.name}
                  style={{
                    flex: 1,
                    borderRadius: 15,
                    backgroundColor: HF_COLORS.bgElevated,
                    border: `2px solid ${hexToRgba(v.color, 0.5)}`,
                    padding: "16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 800, color: v.color }}>
                    {v.tier}
                  </span>
                  <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                    {v.name}
                  </span>
                  <span style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
                    {v.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 10,000+ Music + 19 Bundled SFX + Openverse + loop */}
          <div
            style={{
              borderRadius: 20,
              backgroundColor: HF_COLORS.bgSurface,
              border: libraryActive
                ? `2.5px solid ${HF_COLORS.accentSky}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
              boxShadow: libraryActive
                ? "0 0 36px rgba(6, 182, 212, 0.2)"
                : "0 14px 32px rgba(0,0,0,0.45)",
              padding: "22px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 15,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                ② 曲库、内置音效与无缝循环
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  fontWeight: 700,
                  color: HF_COLORS.accentSky,
                  padding: "4px 11px",
                  borderRadius: 8,
                  backgroundColor: "rgba(6, 182, 212, 0.16)",
                }}
              >
                MUSIC &amp; SFX
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div
                style={{
                  borderRadius: 15,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(HF_COLORS.brandNeon, 0.5)}`,
                  padding: "16px 18px",
                }}
              >
                <div style={{ fontFamily: FONT_MONO, fontSize: 34, fontWeight: 900, color: HF_COLORS.brandNeon }}>
                  10,000+
                </div>
                <div style={{ fontSize: 21, fontWeight: 700, color: HF_COLORS.textPrimary, marginTop: 4 }}>
                  HeyGen 正版音乐目录
                </div>
                <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 4 }}>
                  按情绪、节奏与场景直接检索配乐
                </div>
              </div>

              <div
                style={{
                  borderRadius: 15,
                  backgroundColor: HF_COLORS.bgElevated,
                  border: `1.5px solid ${hexToRgba(HF_COLORS.accentYellow, 0.5)}`,
                  padding: "16px 18px",
                }}
              >
                <div style={{ fontFamily: FONT_MONO, fontSize: 34, fontWeight: 900, color: HF_COLORS.accentYellow }}>
                  19 SFX
                </div>
                <div style={{ fontSize: 21, fontWeight: 700, color: HF_COLORS.textPrimary, marginTop: 4 }}>
                  本地永久免费内置音效
                </div>
                <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 4 }}>
                  Whoosh / Tick / Pop / Hit 开箱即用
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: 14,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "14px 18px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentPurple }}>
                Openverse 开源音效检索 + 版权署名
              </div>
              <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, marginTop: 4, lineHeight: 1.45 }}>
                扩展检索开源社区免费 SFX，并自动记录创作者署名要求。
              </div>
            </div>

            <div
              style={{
                marginTop: "auto",
                borderRadius: 14,
                backgroundColor: "#0A0E17",
                border: `1.5px solid ${hexToRgba(HF_COLORS.accentSky, 0.5)}`,
                padding: "14px 18px",
                fontFamily: FONT_MONO,
                fontSize: 18,
                color: HF_COLORS.accentSky,
                lineHeight: 1.5,
              }}
            >
              &lt;audio src=&quot;bgm.mp3&quot; data-start=&quot;0&quot; data-duration=&quot;30&quot;{" "}
              <span style={{ color: HF_COLORS.brandNeon, fontWeight: 800 }}>loop</span>&gt;&lt;/audio&gt;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
