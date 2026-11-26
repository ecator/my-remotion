import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfChapterIntro } from "../../components/hyperframes/HfChapterIntro";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene01Props {
  voiceFromFrame: number;
  brandColor?: string;
  accentColor?: string;
}

export const Scene01InkwellBenchmark: React.FC<Scene01Props> = ({
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

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.11 // HYPERFRAMES VS REMOTION"
        secondaryBadge="INKWELL BENCHMARK · CODE DIFF · DECISION MATRIX · MIGRATION"
        title="巅峰对决与无缝迁移："
        highlightTitle="HyperFrames vs Remotion 源码级对比与转换"
        subtitle="同题 15 秒实测数据、3 秒标题卡源码对照、客观选型矩阵、诚实拒绝清单与 Lambda 迁移映射"
        chips={[
          { code: "BENCHMARK", label: "Inkwell 15s 同 Prompt 零重试实测", color: HF_COLORS.accentSky },
          { code: "FAIR MATRIX", label: "React 生态 vs Apache 2.0 零构建", color: HF_COLORS.brandNeon },
          { code: "MIGRATION", label: "remotion-to-hyperframes + SSIM Diff", color: HF_COLORS.accentYellow },
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
            gap: 16,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          <HfSplitCompare
            voiceMs={voiceMs}
            style={{ flex: 1 }}
            left={{
              badge: "REMOTION · REACT / TS 方案",
              meta: "SAME PROMPT · 0 RETRIES",
              title: "Inkwell 15s 发布视频 · Remotion",
              subtitle: "基于 React 组件树与 Webpack/esbuild 打包链路",
              tone: "cyan",
              activeWindow: [6000, 31000],
              items: [
                {
                  title: "代码体量：10 个 TS/TSX 文件 · 1,037 行",
                  description: "需配置 Root、Composition、组件 props 与每段帧数计算",
                  badge: "1,037 LOC",
                  activeWindow: [8000, 17000],
                },
                {
                  title: "依赖体积：约 950 MB node_modules",
                  description: "需要安装 React、Remotion CLI、Bundler 及编译链依赖",
                  badge: "~950 MB",
                  activeWindow: [17000, 25000],
                },
                {
                  title: "生成耗时与音频：12m 30s · 默认无声输出",
                  description: "模型需兼顾 TS 类型检查与打包构建，本次零重试未自动配乐",
                  badge: "12m 30s",
                  activeWindow: [25000, 33000],
                },
              ],
            }}
            right={{
              badge: "HYPERFRAMES · 原生 HTML 方案",
              meta: "SAME PROMPT · 0 RETRIES",
              title: "Inkwell 15s 发布视频 · HyperFrames",
              subtitle: "声明式 HTML + 暂停 GSAP，零打包直出",
              tone: "emerald",
              activeWindow: [31000, 62000],
              items: [
                {
                  title: "代码体量：4 个纯 HTML 文件 · 822 行",
                  description: "根 index.html 嵌套分镜子文件，打开浏览器即可预览",
                  badge: "822 LOC",
                  activeWindow: [31000, 41000],
                },
                {
                  title: "依赖体积：0 工程依赖（无需 node_modules）",
                  description: "零构建步骤、零锁文件膨胀，纯静态目录即可归档交付",
                  badge: "0 DEPS",
                  activeWindow: [41000, 50000],
                },
                {
                  title: "生成耗时与音频：11m 50s · 内含 BGM + 5 条 SFX",
                  description: "利用内置音库与声明式音频标签，首次成片即带完整声画设计",
                  badge: "BGM + 5 SFX",
                  activeWindow: [50000, 62000],
                },
              ],
            }}
          />

          <div
            style={{
              borderRadius: 14,
              backgroundColor: HF_COLORS.bgSurface,
              border: `1.5px solid ${HF_COLORS.borderSubtle}`,
              padding: "11px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 18,
              color: HF_COLORS.textSecondary,
            }}
          >
            <span>
              <strong style={{ color: HF_COLORS.accentSky }}>基准说明：</strong>
              来自官方文档同一 Prompt 零重试实测；数据反映「AI 首次独立出片」场景下的工程开销差异。
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.brandNeon }}>
              10 TS / 1,037 LOC vs 4 HTML / 822 LOC
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
