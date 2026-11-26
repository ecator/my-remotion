import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene05Props {
  voiceFromFrame: number;
}

const LAMBDA_MAP = [
  {
    from: "deploySite() + deployFunction()",
    to: "npx hyperframes lambda deploy",
    note: "一键部署容器镜像与 Step Functions 编排栈",
  },
  {
    from: "renderMediaOnLambda()",
    to: "renderToLambda() / hyperframes lambda render",
    note: "分布式切片渲染并在 S3 汇总成品 MP4",
  },
  {
    from: "getRenderProgress()",
    to: "hyperframes lambda status --execution-arn",
    note: "查询切片并发进度、重试次数与产物预签名地址",
  },
  {
    from: "inputProps (JSON)",
    to: "variables / render-batch JSONL",
    note: "支持单任务参数注入与百条级 JSONL 批量调度",
  },
];

export const Scene05LambdaMigrationMap: React.FC<Scene05Props> = ({
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

  const leftActive = voiceMs < 30000;
  const rightActive = voiceMs >= 30000;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.08fr) minmax(0, 0.92fr)",
        gap: 24,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      {/* LEFT: @remotion/lambda -> HyperFrames Lambda Mapping */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: leftActive
            ? `2.5px solid ${HF_COLORS.brandNeon}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 24, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            @remotion/lambda → HyperFrames Lambda 映射
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.brandNeon }}>
            AWS LAMBDA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
          {LAMBDA_MAP.map((row) => (
            <div
              key={row.from}
              style={{
                flex: 1,
                borderRadius: 13,
                backgroundColor: HF_COLORS.bgElevated,
                border: `1.5px solid ${HF_COLORS.borderSubtle}`,
                padding: "11px 15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.accentSky }}>
                  {row.from}
                </span>
                <span style={{ color: HF_COLORS.textMuted, fontWeight: 800 }}>→</span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 800, color: HF_COLORS.brandNeon }}>
                  {row.to}
                </span>
              </div>
              <div style={{ fontSize: 17, color: HF_COLORS.textSecondary }}>
                {row.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Error Codes & Objective Lambda Limits */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: HF_COLORS.bgSurface,
          border: rightActive
            ? `2.5px solid ${HF_COLORS.accentYellow}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 24, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            高频排障错误码与 Lambda 客观边界
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentYellow }}>
            DIAGNOSTICS & LIMITS
          </span>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentRose, 0.5)}`,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentRose }}>
            BROWSER_GPU_NOT_SOFTWARE
          </span>
          <span style={{ fontSize: 17, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
            容器缺少 SwiftShader / 软件渲染标志导致 Chromium 试图调用不存在的硬件 GPU；检查无头启动参数。
          </span>
        </div>

        <div
          style={{
            borderRadius: 14,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentYellow, 0.5)}`,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontSize: 19, fontWeight: 800, color: HF_COLORS.accentYellow }}>
            FONT_FETCH_FAILED
          </span>
          <span style={{ fontSize: 17, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
            VPC 隔离或外网受限时无法拉取远程 Google Fonts；务必把关键字体随 Bundle 打包入工程本地目录。
          </span>
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: "rgba(244, 63, 94, 0.14)",
            border: `2px solid ${HF_COLORS.accentRose}`,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.45,
          }}
        >
          <strong style={{ color: HF_COLORS.accentRose }}>AWS Lambda 三大客观限制：</strong>
          <div>• Step Functions 单次载荷上限 <strong>256 KiB</strong>（大资产走 S3）</div>
          <div>• <strong>不支持</strong> 10-bit HDR 输出与硬编解码加速</div>
          <div>• <strong>无硬件 GPU</strong>（重度 Three.js / WebGPU 需上 Cloud Run / GPU 机）</div>
        </div>
      </div>
    </div>
  );
};
