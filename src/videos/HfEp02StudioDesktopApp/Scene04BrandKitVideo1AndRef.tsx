import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

export const Scene04BrandKitVideo1AndRef: React.FC<Scene04Props> = ({
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

  const brandActive = voiceMs < 24500;
  const video1Active = voiceMs >= 24500 && voiceMs < 57000;
  const sizeTrapHighlight = voiceMs >= 45500 && voiceMs < 57000;
  const refActive = voiceMs >= 57000;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* COLUMN 1: Brand Kits */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: brandActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: brandActive
            ? "0 0 36px rgba(16, 185, 129, 0.2)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.16)",
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 700,
              color: HF_COLORS.brandNeon,
            }}
          >
            01 · BRAND KITS
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textMuted }}>
            Scan my site
          </span>
        </div>

        <div style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
          一键扫描官网沉淀品牌资产
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { k: "Colors", v: "Main / Secondary / Accent / Background 角色色板" },
            { k: "Logos", v: "Main logo 自动领衔所有片头与品牌尾卡" },
            { k: "Fonts & Styles", v: "WOFF2 / TTF 字体文件与排版样式" },
            { k: "Files & Rules", v: "产品截图、音频素材与自然语言品牌规范 PDF" },
          ].map((row) => (
            <div
              key={row.k}
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "11px 14px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 700, color: HF_COLORS.brandNeon }}>
                {row.k}
              </div>
              <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, marginTop: 2, lineHeight: 1.4 }}>
                {row.v}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: `1.5px solid rgba(52, 211, 153, 0.45)`,
            padding: "13px 15px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            本地自包含目录拷贝
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, marginTop: 4, lineHeight: 1.45 }}>
            绑定项目后自动复制进{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>
              assets/brand-kit
            </span>
            ，换机器或云渲染 100% 一致。
          </div>
        </div>
      </div>

      {/* COLUMN 2: HeyGen Video 1 + 7.8 MB Trap */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: video1Active
            ? `2.5px solid ${HF_COLORS.accentPurple}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: video1Active
            ? "0 0 36px rgba(139, 92, 246, 0.22)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(139, 92, 246, 0.18)",
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 700,
              color: HF_COLORS.accentPurple,
            }}
          >
            02 · HEYGEN VIDEO 1
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textMuted }}>
            5–60s · 480p / 768p
          </span>
        </div>

        <div style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
          一镜到底 AI 视频与动作迁移
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { k: "Start from a picture", v: "指定首帧图片精确起幅，支持 16:9 / 9:16 / 1:1" },
            { k: "Match a look", v: "最多上传 9 张参考图锁定统一画风与光影" },
            { k: "Copy a movement", v: "≤5s 参考视频 + 人物照片 → 最长 15s 动作复刻" },
            { k: "Generate media 表单", v: "支持 Video 1 / H3 Max / Seedance，生成前先显价" },
          ].map((row) => (
            <div
              key={row.k}
              style={{
                borderRadius: 12,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "10px 14px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 700, color: HF_COLORS.accentPurple }}>
                {row.k}
              </div>
              <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, marginTop: 2, lineHeight: 1.38 }}>
                {row.v}
              </div>
            </div>
          ))}
        </div>

        {/* 7.8 MB 1080p vs 720p Trap */}
        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: sizeTrapHighlight
              ? "rgba(244, 63, 94, 0.18)"
              : "rgba(244, 63, 94, 0.10)",
            border: `2px solid ${sizeTrapHighlight ? HF_COLORS.accentRose : "rgba(244, 63, 94, 0.45)"}`,
            padding: "13px 15px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: HF_COLORS.accentRose }}>
            ⚠ 参考视频体积避坑（7.8 MB 实测陷阱）
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, marginTop: 4, lineHeight: 1.45 }}>
            5s 1080p（<span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>7.8 MB</span>）会报{" "}
            <span style={{ fontFamily: FONT_MONO, fontSize: 17 }}>The references are too large</span>，
            压至 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>720p</span> 即可顺利通过。
          </div>
        </div>
      </div>

      {/* COLUMN 3: Reference Video */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: refActive
            ? `2.5px solid ${HF_COLORS.accentSky}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          boxShadow: refActive
            ? "0 0 36px rgba(6, 182, 212, 0.22)"
            : "0 14px 32px rgba(0,0,0,0.45)",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(6, 182, 212, 0.18)",
              fontFamily: FONT_MONO,
              fontSize: 18,
              fontWeight: 700,
              color: HF_COLORS.accentSky,
            }}
          >
            03 · REFERENCE VIDEO
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textMuted }}>
            ≤30 min URL
          </span>
        </div>

        <div style={{ fontSize: 27, fontWeight: 800, color: HF_COLORS.textPrimary }}>
          复刻爆款剪辑与双路自动分流
        </div>

        {/* Two Auto Routes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              borderRadius: 12,
              backgroundColor: hexToRgba(HF_COLORS.accentSky, 0.12),
              border: `1.5px solid ${hexToRgba(HF_COLORS.accentSky, 0.45)}`,
              padding: "12px 14px",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentSky }}>
              路径 A · Copy editing style
            </div>
            <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, marginTop: 3, lineHeight: 1.4 }}>
              识别到真人出镜口播：复制剪辑节奏、花字与特效，换上你的实拍或数字人。
            </div>
          </div>

          <div
            style={{
              borderRadius: 12,
              backgroundColor: hexToRgba(HF_COLORS.accentYellow, 0.10),
              border: `1.5px solid ${hexToRgba(HF_COLORS.accentYellow, 0.45)}`,
              padding: "12px 14px",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentYellow }}>
              路径 B · Video brief
            </div>
            <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, marginTop: 3, lineHeight: 1.4 }}>
              识别到纯动态图形动画：按你的主题与素材重建整套运动编排。
            </div>
          </div>

          <div
            style={{
              borderRadius: 12,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${HF_COLORS.borderSubtle}`,
              padding: "11px 14px",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 700, color: HF_COLORS.textPrimary }}>
              What to swap 逐段替换表
            </div>
            <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 3, lineHeight: 1.4 }}>
              支持 Framey decides / Type yours / Upload / Generate 四种填槽模式。
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: "rgba(6, 182, 212, 0.14)",
            border: `1.5px solid ${HF_COLORS.accentSky}`,
            padding: "13px 15px",
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentSky }}>
            Show original 同轴左右对照
          </div>
          <div style={{ fontSize: 19, color: HF_COLORS.textPrimary, marginTop: 4, lineHeight: 1.45 }}>
            成片后一键将原片与新作绑定在同一时钟下分屏播放，逐拍核对卡点还原度。
          </div>
        </div>
      </div>
    </div>
  );
};
