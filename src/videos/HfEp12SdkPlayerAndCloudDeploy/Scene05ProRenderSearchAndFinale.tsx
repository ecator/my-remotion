import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene05Props {
  voiceFromFrame: number;
}

export const Scene05ProRenderSearchAndFinale: React.FC<Scene05Props> = ({
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

  const leftActive = voiceMs < 36000;
  const rightActive = voiceMs >= 36000;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.06fr) minmax(0, 0.94fr)",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: Pro Export (4K, 10-bit HDR, 4:4:4, --resume & Mutex Warnings) */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: leftActive
            ? `2.5px solid ${HF_COLORS.accentYellow}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 25, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            专业母版渲染：4K、10-bit HDR、4:4:4 与断点续渲
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentYellow }}>
            PRO MASTERING
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
          <div
            style={{
              borderRadius: 13,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${hexToRgba(HF_COLORS.brandNeon, 0.45)}`,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.brandNeon }}>
              4K 整数倍缩放（2×）
            </div>
            <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 6, lineHeight: 1.45 }}>
              支持 1080p→4K 整数倍 DPR；<strong>拒绝</strong> 1080p→1440p 非整数倍缩放（防亚像素糊字）。
            </div>
          </div>

          <div
            style={{
              borderRadius: 13,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${hexToRgba(HF_COLORS.accentSky, 0.45)}`,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentSky }}>
              10-bit H.265 HDR
            </div>
            <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 6, lineHeight: 1.45 }}>
              支持 <span style={{ fontFamily: FONT_MONO }}>yuv420p10le</span>、<span style={{ fontFamily: FONT_MONO }}>BT.2020</span> 色域与{" "}
              <span style={{ fontFamily: FONT_MONO }}>PQ / HLG</span> 传输曲线。
            </div>
          </div>

          <div
            style={{
              borderRadius: 13,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${hexToRgba(HF_COLORS.accentPurple, 0.45)}`,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentPurple }}>
              --chroma-subsampling 444
            </div>
            <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 6, lineHeight: 1.45 }}>
              4:4:4 无色度抽样，杜绝红字蓝底等高饱和 UI 边缘渗色发虚。
            </div>
          </div>

          <div
            style={{
              borderRadius: 13,
              backgroundColor: HF_COLORS.bgElevated,
              border: `1.5px solid ${hexToRgba(HF_COLORS.accentYellow, 0.45)}`,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentYellow }}>
              --resume 分段断点续渲
            </div>
            <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 6, lineHeight: 1.45 }}>
              长片中途断电或抢占回收时，直接跳过已完成分片续接剩余帧段。
            </div>
          </div>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: "rgba(244, 63, 94, 0.14)",
            border: `2px solid ${HF_COLORS.accentRose}`,
            padding: "14px 16px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.48,
          }}
        >
          <strong style={{ color: HF_COLORS.accentRose }}>⚠ 两大导出互斥边界：</strong>
          ① <strong>4K 与 HDR</strong> 不能同时开启（且 Lambda 不支持 HDR）；
          ② <strong>4:4:4（--chroma-subsampling 444）与硬件 GPU 编码</strong> 互斥，开启 4:4:4 时自动走高保真软件编码。
        </div>
      </div>

      {/* RIGHT: Catalog Semantic Search + Contributing + 12-Episode Series Finale */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: rightActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            flex: 1,
            borderRadius: 15,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentSky, 0.45)}`,
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: HF_COLORS.accentSky }}>
              Catalog 本地语义检索
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 14, fontWeight: 700, color: HF_COLORS.accentSky }}>
              384-DIM EMBEDDINGS
            </span>
          </div>
          <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
            内置 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.textPrimary }}>bge-small-en-v1.5</span>{" "}
            生成 384 维本地向量，零外部 API Key 即可用自然语言检索全部官方模板与转场组件。
          </div>
        </div>

        <div
          style={{
            flex: 1,
            borderRadius: 15,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentPurple, 0.45)}`,
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: HF_COLORS.accentPurple }}>
              Apache 2.0 开源共建（Contributing）
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 14, fontWeight: 700, color: HF_COLORS.accentPurple }}>
              OPEN SOURCE
            </span>
          </div>
          <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
            遵循仓库 <span style={{ fontFamily: FONT_MONO }}>CONTRIBUTING.md</span> 规范提交新 Catalog 片段、Shader 转场与文档修正，人人皆可参与共建。
          </div>
        </div>

        {/* 12-Episode Grand Finale Card */}
        <div
          style={{
            marginTop: "auto",
            borderRadius: 18,
            backgroundImage: `linear-gradient(135deg, ${hexToRgba(HF_COLORS.brandPrimary, 0.2)}, ${hexToRgba(HF_COLORS.accentCyan, 0.16)})`,
            border: `2px solid ${HF_COLORS.brandNeon}`,
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 800, color: HF_COLORS.brandNeon }}>
            SERIES COMPLETE · EP.01 — EP.12
          </div>
          <div style={{ fontSize: 26, fontWeight: 900, color: HF_COLORS.textPrimary, lineHeight: 1.3 }}>
            HyperFrames 全景百科 12 集圆满收官！
          </div>
          <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
            从零代码 Studio、NLE 精修、全场景工作流、导演级提示词、音字调色 VFX，到 HTML 契约、模板批处理、Remotion 迁移与云端集群——现在，就用 HTML 写出你的下一支大片。
          </div>
        </div>
      </div>
    </div>
  );
};
