import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene03Props {
  voiceFromFrame: number;
}

export const Scene03ObjectiveDecisionMatrix: React.FC<Scene03Props> = ({
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
      <HfSplitCompare
        voiceMs={voiceMs}
        style={{ flex: 1 }}
        left={{
          badge: "什么时候优先选 REMOTION",
          meta: "REACT ECOSYSTEM · ≤ 3 SEATS FREE",
          title: "Remotion 的核心主场",
          subtitle: "重度 React / TypeScript 团队与成熟组件复用",
          tone: "cyan",
          activeWindow: [0, 24000],
          items: [
            {
              title: "直接复用现有 React / Tailwind / TS 业务组件",
              description: "已有 SaaS 仪表盘或设计系统，直接把 React 组件搬进视频无需重写 HTML",
              activeWindow: [0, 9000],
            },
            {
              title: "单一函数式心智模型与强类型 Schema",
              description: "全链路 TypeScript + Zod 校验，Props 驱动纯函数渲染，前端工程师零切换成本",
              activeWindow: [9000, 17000],
            },
            {
              title: "许可模式：个人与 ≤ 3 人小团队免费",
              description: "4 人及以上企业商用需购买 Remotion 商业席位许可（含成熟云渲染与官方支持）",
              activeWindow: [17000, 25000],
            },
          ],
        }}
        right={{
          badge: "什么时候优先选 HYPERFRAMES",
          meta: "APACHE 2.0 · ZERO BUILD",
          title: "HyperFrames 的核心主场",
          subtitle: "AI Agent 批量出片、无席位商用与双向可视化剪辑",
          tone: "emerald",
          activeWindow: [24000, 56000],
          items: [
            {
              title: "Apache 2.0 彻底免费商用（无团队人数上限）",
              description: "无论 5 人工作室还是千人企业、内嵌 SaaS 产品，都无按席位商业授权费",
              activeWindow: [24000, 34000],
            },
            {
              title: "零构建打包 + 原生 Web / GSAP / Lottie / Three.js",
              description: "摆脱 React 打包开销，直接驾驭浏览器全部原生动效生态与 WebGL2 着色器",
              activeWindow: [34000, 44000],
            },
            {
              title: "源码级双向可视化编辑（Studio & Browser Editor）",
              description: "AI 生成后，非程序员可像剪映一样拖拽时间轴，所有改动精准写回干净 HTML 源码",
              activeWindow: [44000, 56000],
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
          <strong style={{ color: HF_COLORS.brandNeon }}>客观选型结论：</strong>
          不存在绝对碾压——强绑定 React 组件库选 Remotion，追求 AI 原生 / 零构建 / Apache 2.0 自由商用选 HyperFrames。
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentYellow }}>
          NO SILVER BULLET
        </span>
      </div>
    </div>
  );
};
