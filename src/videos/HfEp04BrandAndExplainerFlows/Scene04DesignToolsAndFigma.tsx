import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfTerminalWindow } from "../../components/hyperframes/HfTerminalWindow";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene04Props {
  voiceFromFrame: number;
}

export const Scene04DesignToolsAndFigma: React.FC<Scene04Props> = ({
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

  const patHighlight = voiceMs >= 24000 && voiceMs < 43500;
  const orderHighlight = voiceMs >= 43500 && voiceMs < 62500;
  const motionHighlight = voiceMs >= 62500;

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
      {/* Top Rule Banner */}
      <div
        style={{
          borderRadius: 16,
          backgroundColor: HF_COLORS.bgSurface,
          border: `2px solid ${HF_COLORS.borderSubtle}`,
          padding: "13px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.16)",
              fontFamily: FONT_MONO,
              fontSize: 19,
              fontWeight: 800,
              color: HF_COLORS.brandNeon,
            }}
          >
            DESIGN TOOLS RULE
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
            Pictures stay pictures · 需要动或改状态的图层必须重建为真实 HTML
          </span>
        </div>
        <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: HF_COLORS.textSecondary }}>
          Figma · Claude Design · Open Design
        </span>
      </div>

      {/* Main 2 Columns */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.06fr 0.94fr",
          gap: 24,
        }}
      >
        {/* LEFT: Figma CLI Order (tokens BEFORE component!) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <HfTerminalWindow
            title="Figma CLI 导入顺序铁律（零运行时网络依赖）"
            headerBadge="FIGMA_TOKEN · REST API"
            activeBlockIndex={orderHighlight ? 0 : undefined}
            style={{ flex: 1 }}
            blocks={[
              {
                comment: "Step 1 · 必须先导入品牌变量，生成 figma-tokens.json 绑定索引",
                command: "hyperframes figma tokens FILE_KEY",
                accentColor: HF_COLORS.brandNeon,
                output: [
                  "✓ wrote figma-tokens.json + data-composition-variables",
                ],
              },
              {
                comment: "Step 2 · 再导入可编辑 HTML 组件（按精确 Figma ID 自动关联 var(--brand)）",
                command: "hyperframes figma component 'https://figma.com/design/KEY/...?node-id=10-20'",
                accentColor: HF_COLORS.accentSky,
                output: [
                  "✓ emitted compositions/components/hero/ (var(--brand-primary))",
                ],
              },
              {
                comment: "Step 3 · 静态 Logo/插画冻结为本地 SVG/PNG（.media/images/）",
                command: "hyperframes figma asset 'https://figma.com/design/KEY/...?node-id=1-2'",
                accentColor: HF_COLORS.accentPurple,
              },
            ]}
          />

          <div
            style={{
              borderRadius: 14,
              backgroundColor: orderHighlight
                ? "rgba(245, 158, 11, 0.16)"
                : "rgba(245, 158, 11, 0.08)",
              border: `2px solid ${orderHighlight ? HF_COLORS.accentYellow : "rgba(245, 158, 11, 0.4)"}`,
              padding: "12px 16px",
              fontSize: 19,
              color: HF_COLORS.textPrimary,
              lineHeight: 1.45,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.accentYellow }}>
              为何 tokens 必须先于 component？
            </span>{" "}
            仅按精确 Figma ID 匹配（绝不按 hex 猜色）；若先导组件，未绑定的颜色会被标为{" "}
            <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose }}>data-figma-unresolved</span>。
          </div>
        </div>

        {/* RIGHT: 3 PAT Scopes + 403 Trap + /figma Motion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              borderRadius: 18,
              backgroundColor: HF_COLORS.bgSurface,
              border: patHighlight
                ? `2.5px solid ${HF_COLORS.accentRose}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
              padding: "18px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 24, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                非企业版 PAT 必选 3 项只读权限
              </span>
              <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.accentSky }}>
                READ-ONLY
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                { s: "File content (Read-only)", note: "读取节点树与组件几何" },
                { s: "File metadata (Read-only)", note: "读取版本与文件元信息" },
                { s: "Library content (Read-only)", note: "最易漏！缺失会导致 tokens 回退样式时报 403" },
              ].map((item, idx) => (
                <div
                  key={item.s}
                  style={{
                    borderRadius: 11,
                    backgroundColor: HF_COLORS.bgElevated,
                    border: `1.5px solid ${idx === 2 ? HF_COLORS.accentYellow : HF_COLORS.borderSubtle}`,
                    padding: "10px 14px",
                  }}
                >
                  <div style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: idx === 2 ? HF_COLORS.accentYellow : HF_COLORS.brandNeon }}>
                    ✓ {item.s}
                  </div>
                  <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, marginTop: 2 }}>
                    {item.note}
                  </div>
                </div>
              ))}
            </div>

            {/* 403 vs 401 Trap */}
            <div
              style={{
                borderRadius: 12,
                backgroundColor: "rgba(244, 63, 94, 0.14)",
                border: `2px solid ${HF_COLORS.accentRose}`,
                padding: "12px 15px",
                fontSize: 19,
                color: HF_COLORS.textPrimary,
                lineHeight: 1.45,
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontWeight: 800, color: HF_COLORS.accentRose }}>
                ⚠ 排错陷阱：
              </span>
              Figma 对无效/过期 PAT 返回的是{" "}
              <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentYellow, fontWeight: 800 }}>
                403 Invalid token
              </span>
              ，而不是常规的{" "}
              <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.accentRose, textDecoration: "line-through" }}>
                401
              </span>
              ！
            </div>
          </div>

          {/* /figma Motion Translation */}
          <div
            style={{
              flex: 1,
              borderRadius: 18,
              backgroundColor: motionHighlight ? "rgba(139, 92, 246, 0.14)" : HF_COLORS.bgSurface,
              border: motionHighlight
                ? `2.5px solid ${HF_COLORS.accentPurple}`
                : `2px solid ${HF_COLORS.borderSubtle}`,
              padding: "18px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <div style={{ fontFamily: FONT_MONO, fontSize: 20, fontWeight: 800, color: HF_COLORS.accentPurple }}>
              /figma Skill · 动画与分镜智能翻译
            </div>
            <div style={{ fontSize: 19, color: HF_COLORS.textSecondary, lineHeight: 1.5 }}>
              通过 Figma Connector 将 Figma Motion 时间轴结构化翻译为暂停、可逐帧寻址的{" "}
              <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon }}>window.__timelines</span>{" "}
              GSAP 动画；连续分镜帧会解析为平滑状态运动而非硬切幻灯片。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
