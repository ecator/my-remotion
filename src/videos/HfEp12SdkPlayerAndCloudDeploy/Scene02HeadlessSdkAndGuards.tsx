import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfCodeWindow } from "../../components/hyperframes/HfCodeWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene02Props {
  voiceFromFrame: number;
}

const THREE_REDLINES = [
  {
    code: "REDLINE 01",
    title: "createFsAdapter 必须从子路径导入",
    highlight: '@hyperframes/sdk/adapters/fs',
    desc: "绝不能从主入口 @hyperframes/sdk 导入 createFsAdapter（防止把 Node fs 模块泄漏进前端打包器导致构建崩溃）。",
    color: HF_COLORS.accentRose,
    window: [28000, 42000] as [number, number],
  },
  {
    code: "REDLINE 02",
    title: "ORIGIN_APPLY_PATCHES 防无限回环",
    highlight: "event.origin === ORIGIN_APPLY_PATCHES",
    desc: "监听状态变更回写远程/协作层时，必须忽略 ORIGIN_APPLY_PATCHES 来源事件，否则会触发无限 Undo/Redo 死循环！",
    color: HF_COLORS.accentYellow,
    window: [42000, 56000] as [number, number],
  },
  {
    code: "REDLINE 03",
    title: "resolveElementAffordances 仅限浏览器端",
    highlight: "BROWSER-ONLY DOM API",
    desc: "计算元素可拖拽/缩放/文本编辑能力依赖真实浏览器布局与 getComputedStyle，禁止在 Node.js / SSR 中调用。",
    color: HF_COLORS.accentPurple,
    window: [56000, 72000] as [number, number],
  },
];

export const Scene02HeadlessSdkAndGuards: React.FC<Scene02Props> = ({
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

  const activeLine =
    voiceMs < 11000 ? 1 : voiceMs < 20000 ? 4 : voiceMs < 28000 ? 8 : 11;

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
      {/* LEFT: @hyperframes/sdk Code Window */}
      <HfCodeWindow
        title="editor-session.ts · @hyperframes/sdk 无头编辑"
        subtitle="OverrideSet · scopedId · batch()"
        accentColor={HF_COLORS.accentSky}
        activeLineIndex={activeLine}
        lines={[
          { text: 'import { openComposition, ORIGIN_APPLY_PATCHES }' },
          { text: '  from "@hyperframes/sdk";' },
          {
            text: 'import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";',
            highlightColor: HF_COLORS.accentRose,
            badge: "子路径专供 Node",
          },
          { text: "" },
          {
            text: 'const doc = await openComposition({',
            highlightColor: HF_COLORS.brandNeon,
            badge: "3 种打开模式",
          },
          { text: '  adapter: createFsAdapter("./proj"), mode: "overrides"' },
          { text: "}); // OverrideSet 非破坏覆盖 / 直接改源码 / 只读" },
          { text: "" },
          {
            text: 'const target = "hf-HERO/hf-TITLE"; // 嵌套必用 scopedId',
            highlightColor: HF_COLORS.accentSky,
            badge: "hf-HOST/hf-LEAF",
          },
          {
            text: 'if (doc.can("setText", target)) {',
            highlightColor: HF_COLORS.accentYellow,
          },
          {
            text: '  doc.batch(() => doc.dispatch("setText", target, "New"));',
            highlightColor: HF_COLORS.brandNeon,
            badge: "原子批提交",
          },
          { text: "}" },
          {
            text: "doc.subscribe((e) => { if (e.origin === ORIGIN_APPLY_PATCHES) return; });",
            highlightColor: HF_COLORS.accentYellow,
            badge: "防回环守卫",
          },
        ]}
      />

      {/* RIGHT: 3 Production Redlines */}
      <div
        style={{
          borderRadius: 18,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 25, fontWeight: 900, color: HF_COLORS.textPrimary }}>
            SDK 集成三大生产红线
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentRose }}>
            PRODUCTION GUARDS
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13, flex: 1 }}>
          {THREE_REDLINES.map((rl) => {
            const active = voiceMs >= rl.window[0] && voiceMs < rl.window[1];
            return (
              <div
                key={rl.code}
                style={{
                  flex: 1,
                  borderRadius: 15,
                  backgroundColor: active ? hexToRgba(rl.color, 0.14) : HF_COLORS.bgElevated,
                  border: active
                    ? `2.5px solid ${rl.color}`
                    : `1.5px solid ${hexToRgba(rl.color, 0.45)}`,
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                    {rl.title}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 13,
                      fontWeight: 800,
                      color: rl.color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {rl.code}
                  </span>
                </div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 700, color: rl.color }}>
                  {rl.highlight}
                </div>
                <div style={{ fontSize: 17, color: HF_COLORS.textSecondary, lineHeight: 1.45 }}>
                  {rl.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
