import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

const CLOUD_TIERS = [
  {
    tier: "TIER 01",
    name: "HeyGen Cloud",
    cmd: "hyperframes cloud render",
    color: HF_COLORS.brandNeon,
    window: [2000, 15000] as [number, number],
    bullets: [
      "零运维托管集群，免配 AWS/GCP 账号",
      "单工程打包上传上限 ≤ 200 MB",
      "最适合个人创作者与轻量快速出片",
    ],
  },
  {
    tier: "TIER 02",
    name: "SaaS 托管模板",
    cmd: "Vercel · Cloudflare · Modal",
    color: HF_COLORS.accentSky,
    window: [15000, 27000] as [number, number],
    bullets: [
      "官方开箱即用部署模板与 Webhook 队列",
      "Vercel / Cloudflare 接前端 API 与鉴权",
      "Modal 弹性容器拉起无服务器渲染任务",
    ],
  },
  {
    tier: "TIER 03",
    name: "AWS Lambda Plan v2",
    cmd: "Step Functions + S3",
    color: HF_COLORS.accentYellow,
    window: [27000, 42000] as [number, number],
    bullets: [
      "Step Functions 并发扇出 + 分片自动汇总",
      "受单包 250 MiB / 15 min 与 256 KiB 状态约束",
      "务必开启 PRODUCER_RESTRICT_PAGE_NETWORK 锁死 SSRF",
    ],
  },
  {
    tier: "TIER 04",
    name: "GCP Cloud Run",
    cmd: "Cloud Workflows + GCS",
    color: HF_COLORS.accentPurple,
    window: [42000, 60000] as [number, number],
    bullets: [
      "无 15 分钟超时天花板，支持大内存长片",
      "Cloud Workflows 编排并行分片回写 GCS",
      "支持挂载 GPU 实例加速 3D / WebGL 重负载",
    ],
  },
];

export const Scene04CloudLambdaCloudRun: React.FC<Scene04Props> = ({
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

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "4px 0 12px 0",
        opacity: enterProgress,
        transform: `translateY(${interpolate(enterProgress, [0, 1], [18, 0])}px)`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 27, fontWeight: 900, color: HF_COLORS.textPrimary }}>
          四级阶梯式云端分布式渲染架构
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.accentSky }}>
          ZERO-OPS → SERVERLESS → GPU CLOUD
        </span>
      </div>

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 18,
        }}
      >
        {CLOUD_TIERS.map((c) => {
          const active = voiceMs >= c.window[0] && voiceMs < c.window[1];
          return (
            <div
              key={c.tier}
              style={{
                borderRadius: 18,
                backgroundColor: active ? hexToRgba(c.color, 0.14) : HF_COLORS.bgSurface,
                border: active
                  ? `2.5px solid ${c.color}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "18px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "3px 10px",
                  borderRadius: 7,
                  backgroundColor: hexToRgba(c.color, 0.18),
                  fontFamily: FONT_MONO,
                  fontSize: 15,
                  fontWeight: 800,
                  color: c.color,
                }}
              >
                {c.tier}
              </span>

              <div style={{ fontSize: 24, fontWeight: 900, color: HF_COLORS.textPrimary, lineHeight: 1.25 }}>
                {c.name}
              </div>

              <div
                style={{
                  borderRadius: 10,
                  backgroundColor: "#0A0E17",
                  border: `1.5px solid ${hexToRgba(c.color, 0.45)}`,
                  padding: "8px 11px",
                  fontFamily: FONT_MONO,
                  fontSize: 15,
                  fontWeight: 700,
                  color: c.color,
                }}
              >
                {c.cmd}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                {c.bullets.map((b) => (
                  <div
                    key={b}
                    style={{
                      borderRadius: 10,
                      backgroundColor: HF_COLORS.bgElevated,
                      border: `1px solid ${HF_COLORS.borderSubtle}`,
                      padding: "9px 11px",
                      fontSize: 17,
                      color: HF_COLORS.textPrimary,
                      lineHeight: 1.42,
                    }}
                  >
                    <span style={{ color: c.color, fontWeight: 800, marginRight: 6 }}>▸</span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Security Bar */}
      <div
        style={{
          borderRadius: 14,
          backgroundColor: "rgba(244, 63, 94, 0.12)",
          border: `2px solid ${HF_COLORS.accentRose}`,
          padding: "12px 20px",
          fontSize: 18,
          color: HF_COLORS.textPrimary,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          <strong style={{ color: HF_COLORS.accentRose }}>🛡 云端多租户安全红线：</strong>
          渲染不可信用户 HTML 时必须开启{" "}
          <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow, fontWeight: 800 }}>
            PRODUCER_RESTRICT_PAGE_NETWORK=1
          </span>
          ，阻断内网元数据（169.254.169.254）SSRF 探测。
        </span>
      </div>
    </div>
  );
};
