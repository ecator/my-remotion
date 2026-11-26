import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene02Props {
  voiceFromFrame: number;
}

export const Scene02DataAttrsAndLayerTraps: React.FC<Scene02Props> = ({
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
          badge: "✗ 避坑 · 废弃写法与解析惨案",
          meta: "LINT ERRORS & SILENT BUGS",
          title: "四大高频工程踩坑写法",
          subtitle: "看似合理，实则触发 lint 报错或直接吞掉后续 DOM 节点",
          tone: "danger",
          activeWindow: [0, 26000],
          items: [
            {
              title: "已废弃 data-end / data-layer",
              description: "旧教程或大模型幻觉常写 data-end 与 data-layer，会直接被 @hyperframes/lint 判错拦截",
              activeWindow: [0, 14000],
            },
            {
              title: "误把 data-track-index 当作视觉层级",
              description: "data-track-index 仅决定编辑器轨道上下排布，绝不改变画面遮挡关系",
              activeWindow: [14000, 28000],
            },
            {
              title: "混淆 data-playback-start 与素材裁切",
              description: "误用不存在或含义混淆的 data-playback-start 代替素材入点偏移，导致音画错位",
              activeWindow: [28000, 41000],
            },
            {
              title: "自闭合 <video /> / <hf-audio-group />",
              description: "HTML 解析器不认非空元素自闭合，会把后面所有兄弟标签吞进子级导致画面凭空消失",
              activeWindow: [41000, 62000],
            },
          ],
        }}
        right={{
          badge: "✓ 正解 · 官方标准 HTML 契约",
          meta: "DETERMINISTIC & SPEC-COMPLIANT",
          title: "四大标准安全写法",
          subtitle: "严格遵守浏览器 HTML5 解析与 CSS 层叠上下文规则",
          tone: "emerald",
          activeWindow: [26000, 62000],
          items: [
            {
              title: '相对表达式 data-start="prev.end - 0.3"',
              description: "用 data-start 搭配 data-duration 描述相对衔接，增删前段镜头无需手动重算所有秒数",
              code: true,
              activeWindow: [0, 14000],
            },
            {
              title: "z-index + isolation: isolate 控制叠层",
              description: "在根容器加 isolation: isolate 建立独立层叠上下文，所有遮挡顺序统一由 CSS z-index 决定",
              code: true,
              activeWindow: [14000, 28000],
            },
            {
              title: '素材入点用 data-media-start="12.5"',
              description: "从源视频第 12.5 秒裁切切入；配合 data-start 精准区分「时间轴出现点」与「素材入点」",
              code: true,
              activeWindow: [28000, 41000],
            },
            {
              title: "显式闭合 <video>...</video> 与 </hf-audio-group>",
              description: "所有视频、音频与自定义 <hf-*> 容器必须成对书写闭合标签，杜绝 DOM 树被意外吞并",
              code: true,
              activeWindow: [41000, 62000],
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
          <strong style={{ color: HF_COLORS.brandNeon }}>核心口诀：</strong>
          轨道归 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentSky }}>data-track-index</span>，
          遮挡归 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>z-index + isolation: isolate</span>，
          素材入点归 <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow }}>data-media-start</span>。
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: HF_COLORS.accentRose }}>
          NO SELF-CLOSING MEDIA TAGS
        </span>
      </div>
    </div>
  );
};
