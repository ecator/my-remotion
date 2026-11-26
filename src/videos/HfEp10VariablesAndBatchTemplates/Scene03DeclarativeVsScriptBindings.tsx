import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene03Props {
  voiceFromFrame: number;
}

export const Scene03DeclarativeVsScriptBindings: React.FC<Scene03Props> = ({
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

  const warnActive = voiceMs >= 16000 && voiceMs < 36000;

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
          badge: "ZERO-JS · 免脚本三件套",
          meta: "DECLARATIVE BINDINGS",
          title: "声明式属性绑定（首选）",
          subtitle: "90% 换肤需求零 JS 代码，直接交由运行时注入",
          tone: "emerald",
          activeWindow: [0, 32000],
          items: [
            {
              title: 'data-var-text="brand_name"',
              description: "自动替换节点文本内容，安全转义避免 XSS，同时保留静态占位文本方便脱离引擎打开预览",
              code: true,
              activeWindow: [0, 12000],
            },
            {
              title: 'data-var-src="hero_logo" + 必留占位 src',
              description: "仅支持 <img>/<video>/<audio>/<source> 媒体元素；缺失默认占位 src 会触发 media_variable_src_no_fallback 告警",
              code: true,
              activeWindow: [12000, 24000],
            },
            {
              title: "CSS var(--brand_color) / var(--font_main)",
              description: "所有变量自动同步为 CSS 自定义属性，颜色、字号与字体无需写一行 JS 即可全屏换肤",
              code: true,
              activeWindow: [24000, 34000],
            },
          ],
        }}
        right={{
          badge: "SCRIPT & NESTING · 高级控制",
          meta: "RUNTIME API & SUBCOMPS",
          title: "脚本读取与父子组合传参",
          subtitle: "驱动 Canvas、图表逻辑或向下游子组合透传参数",
          tone: "violet",
          activeWindow: [32000, 65000],
          items: [
            {
              title: "window.__hyperframes.getVariables()",
              description: "在 GSAP / Three.js / Canvas 脚本中同步读取最终解析后的强类型变量字典（已合并 CLI 覆盖值）",
              code: true,
              activeWindow: [32000, 46000],
            },
            {
              title: "data-variable-values='{...}' 父子透传",
              description: "父组合在引用 data-composition-src 子文件时显式传入变量映射，实现同一子组件多实例不同文案",
              code: true,
              activeWindow: [46000, 62000],
            },
          ],
        }}
      />

      <div
        style={{
          borderRadius: 14,
          backgroundColor: warnActive ? "rgba(244, 63, 94, 0.16)" : HF_COLORS.bgSurface,
          border: `2px solid ${warnActive ? HF_COLORS.accentRose : HF_COLORS.borderSubtle}`,
          padding: "12px 20px",
          fontSize: 18,
          color: HF_COLORS.textPrimary,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span>
          <strong style={{ color: HF_COLORS.accentRose }}>⚠ 媒体变量避坑：</strong>
          <span style={{ fontFamily: FONT_MONO }}>data-var-src</span> 只用于媒体标签且必须保留有效占位{" "}
          <span style={{ fontFamily: FONT_MONO }}>src</span>，同时<strong>禁止</strong>塞入超大{" "}
          <span style={{ fontFamily: FONT_MONO }}>data:</span> 视频 URI！
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentYellow, whiteSpace: "nowrap" }}>
          media_variable_src_no_fallback
        </span>
      </div>
    </div>
  );
};
