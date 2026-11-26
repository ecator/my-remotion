import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfTerminalWindow } from "../../components/hyperframes/HfTerminalWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene04Props {
  voiceFromFrame: number;
}

export const Scene04CliBatchAndLambdaJsonl: React.FC<Scene04Props> = ({
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

  const activeBlock = voiceMs < 13000 ? 0 : voiceMs < 24000 ? 1 : 2;
  const lambdaActive = voiceMs >= 30000;

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
      {/* LEFT: CLI Override & Local --batch Sandbox */}
      <HfTerminalWindow
        title="CLI 单条覆盖与本地 --batch 批量渲染"
        headerBadge="SANDBOXED BATCH"
        activeBlockIndex={activeBlock}
        blocks={[
          {
            comment: "单条变量覆盖 + 严格模式（拦截拼写错位或未知键）",
            command:
              'npx hyperframes render --variables \'{"brand_name":"Nova"}\' --strict-variables',
            output: ["✓ validated against data-composition-variables schema"],
            accentColor: HF_COLORS.brandNeon,
          },
          {
            comment: "从 JSON 文件加载多字段覆盖",
            command: "npx hyperframes render --variables-file ./acme.json -o out/acme.mp4",
            output: ["✓ loaded 12 overrides from acme.json"],
            accentColor: HF_COLORS.accentSky,
          },
          {
            comment: "本地批量渲染：支持 {name} 占位模板与并发数控制",
            command:
              'npx hyperframes render --batch rows.json -o "out/{name}.mp4" --batch-concurrency 4',
            output: [
              "✓ path sandbox active: blocks ../ directory traversal",
              "✓ rendering 24 variants (concurrency=4)...",
            ],
            accentColor: HF_COLORS.accentYellow,
          },
        ]}
      />

      {/* RIGHT: AWS Lambda render-batch JSONL + 256 KiB Cap */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: HF_COLORS.bgSurface,
          border: lambdaActive
            ? `2.5px solid ${HF_COLORS.accentPurple}`
            : `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 24, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            云端 Lambda <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentPurple }}>render-batch</span> JSONL
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentPurple }}>
            CLOUD SCALE
          </span>
        </div>

        <div
          style={{
            borderRadius: 12,
            backgroundColor: "#0A0E17",
            border: `1.5px solid ${hexToRgba(HF_COLORS.accentPurple, 0.45)}`,
            padding: "13px 16px",
            fontFamily: FONT_MONO,
            fontSize: 16,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.55,
          }}
        >
          <div style={{ color: HF_COLORS.textMuted }}># jobs.jsonl (每行一个独立渲染任务)</div>
          <div>&#123;&quot;outputKey&quot;:&quot;acme.mp4&quot;,&quot;variables&quot;:&#123;&quot;brand_name&quot;:&quot;Acme&quot;&#125;&#125;</div>
          <div>&#123;&quot;outputKey&quot;:&quot;nova.mp4&quot;,&quot;variables&quot;:&#123;&quot;brand_name&quot;:&quot;Nova&quot;&#125;&#125;</div>
          <div style={{ marginTop: 8, color: HF_COLORS.brandNeon }}>
            $ npx hyperframes lambda render-batch --input jobs.jsonl
          </div>
        </div>

        <div
          style={{
            borderRadius: 12,
            backgroundColor: HF_COLORS.bgElevated,
            border: `1.5px solid ${HF_COLORS.borderSubtle}`,
            padding: "13px 16px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.45,
          }}
        >
          <strong style={{ color: HF_COLORS.accentSky }}>本地沙箱防越界：</strong>
          <span style={{ fontFamily: FONT_MONO }}>--batch</span> 输出路径中的{" "}
          <span style={{ fontFamily: FONT_MONO }}>{`{name}`}</span> 占位符受沙箱校验，任何含{" "}
          <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>../</span>{" "}
          的路径穿越都会被当场拒绝。
        </div>

        <div
          style={{
            marginTop: "auto",
            borderRadius: 14,
            backgroundColor: "rgba(244, 63, 94, 0.14)",
            border: `2px solid ${HF_COLORS.accentRose}`,
            padding: "14px 16px",
            fontSize: 18,
            color: HF_COLORS.textPrimary,
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: HF_COLORS.accentRose }}>⚠ AWS Step Functions 256 KiB 载荷硬上限：</strong>
          单次工作流状态 JSON 不得超过{" "}
          <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow, fontWeight: 800 }}>256 KiB</span>
          ；超大批量请切分 JSONL 或将资产 URL 存放在 S3 而非内联 Base64！
        </div>
      </div>
    </div>
  );
};
