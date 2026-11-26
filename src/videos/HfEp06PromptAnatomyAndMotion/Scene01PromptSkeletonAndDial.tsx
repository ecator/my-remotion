import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfChapterIntro } from "../../components/hyperframes/HfChapterIntro";
import { HfPromptAnatomy } from "../../components/hyperframes/HfPromptAnatomy";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";
import { hexToRgba } from "../../components/hyperframes/utils";

export interface Scene01Props {
  voiceFromFrame: number;
  brandColor?: string;
  accentColor?: string;
}

const MICRO_SLOTS = [
  { tag: "[element]", desc: "主体对象（巨型数字 / 推文卡 / 标题）", color: HF_COLORS.brandNeon },
  { tag: "[motion]", desc: "动作形态（里程表滚动 / 上浮 / 逐字淡入）", color: HF_COLORS.accentSky },
  { tag: "[layout]", desc: "空间位置（top-center / 下半区 / 右下）", color: HF_COLORS.accentYellow },
  { tag: "[style]", desc: "视觉材质（dark navy / 8-bit pixel）", color: HF_COLORS.accentPurple },
  { tag: "[timing]", desc: "拍内时间（at 1s / over 3s / stagger 0.1s）", color: HF_COLORS.accentRose },
];

export const Scene01PromptSkeletonAndDial: React.FC<Scene01Props> = ({
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

  const microActive = voiceMs >= 39000 && voiceMs < 54000;
  const dialActive = voiceMs >= 54000;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <HfChapterIntro
        episodeBadge="EP.06 // PROMPT ANATOMY & MOTION LAWS"
        secondaryBadge="6-PART SKELETON · 7 MOTION LAWS · 62S CAPSTONE"
        title="像导演一样写 Prompt："
        highlightTitle="六段式骨架与七大丝滑运动法则"
        subtitle="把模糊的审美形容词升级为可复现的导演语法：槽位结构、运动物理、缓动词与 62 秒一镜到底契约"
        chips={[
          { code: "6 SLOTS", label: "[route] → [negatives]", color: HF_COLORS.brandNeon },
          { code: "7 LAWS", label: "落地即静止 · 动作重叠 · 禁文字过冲", color: HF_COLORS.accentSky },
          { code: "62S FILM", label: "The Timeline 9 区域全景", color: HF_COLORS.accentPurple },
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
            display: "grid",
            gridTemplateColumns: "1.14fr 0.86fr",
            gap: 24,
            padding: "4px 0 12px 0",
            opacity: boardEnter,
            transform: `translateY(${interpolate(boardEnter, [0, 1], [22, 0])}px)`,
          }}
        >
          {/* LEFT: HfPromptAnatomy 6-Part Macro Skeleton */}
          <HfPromptAnatomy
            title="宏观六段式强提示词骨架（One-Shot Skeleton）"
            subtitle="封堵 AI 首轮最容易猜错的六大决策点"
            voiceMs={voiceMs}
            brandColor={brandColor}
            slots={[
              {
                tag: "[route]",
                content: "/hyperframes",
                badge: "加载契约",
                tone: "emerald",
                activeWindow: [12000, 16500],
                explanation: "终端 Agent 必写 /hyperframes（演示文稿写 /slideshow）；Studio 桌面端自动挂载。",
              },
              {
                tag: "[spec]",
                content: "8-second 1920x1080 video.",
                badge: "时长画幅",
                tone: "cyan",
                activeWindow: [16500, 20000],
                explanation: "前置锁定片长与画幅（默认 1920x1080 @ 30fps）。",
              },
              {
                tag: "[beats]",
                content: "Beat 1 (0-4s): terminal types ... then hold on cursor.",
                badge: "时间戳+留白",
                tone: "amber",
                activeWindow: [20000, 24500],
                explanation: "给每拍写清起止时间与呼吸停顿（hold），否则 Agent 会跳过留白。",
              },
              {
                tag: "[copy]",
                content: '"YOU JUST MADE THIS / WITH HYPERFRAMES."',
                badge: "引号+斜杠换行",
                tone: "violet",
                activeWindow: [24500, 29000],
                explanation: "未加引号的文案会被改写；斜杠 / 精确控制屏幕换行断点。",
              },
              {
                tag: "[technique]",
                content: "Adapt `code-typing` & `vfx-shatter` registry blocks.",
                badge: "点名复用块",
                tone: "cyan",
                activeWindow: [29000, 33000],
                explanation: "按 Catalog 精确命名复用块，先安装再改写，杜绝随意发挥。",
              },
              {
                tag: "[negatives]",
                content: "No narration, no image or media files.",
                badge: "负向封堵",
                tone: "danger",
                activeWindow: [33000, 39000],
                explanation: "注意区分：no narration 仅不要人声旁白，彻底静音必须写 no audio！",
              },
            ]}
          />

          {/* RIGHT: 5-Slot Micro Beat + 3-Level Specification Dial */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                borderRadius: 18,
                backgroundColor: HF_COLORS.bgSurface,
                border: microActive
                  ? `2.5px solid ${HF_COLORS.accentSky}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.textPrimary }}>
                  单拍微观五槽位（Inside Each Beat）
                </span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 17, fontWeight: 700, color: HF_COLORS.accentSky }}>
                  5 SLOTS
                </span>
              </div>

              {MICRO_SLOTS.map((s) => (
                <div
                  key={s.tag}
                  style={{
                    borderRadius: 10,
                    backgroundColor: HF_COLORS.bgElevated,
                    border: `1.5px solid ${hexToRgba(s.color, 0.4)}`,
                    padding: "8px 13px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontFamily: FONT_MONO, fontSize: 18, fontWeight: 800, color: s.color, minWidth: 112 }}>
                    {s.tag}
                  </span>
                  <span style={{ fontSize: 18, color: HF_COLORS.textPrimary }}>{s.desc}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                flex: 1,
                borderRadius: 18,
                backgroundColor: dialActive ? "rgba(139, 92, 246, 0.14)" : HF_COLORS.bgSurface,
                border: dialActive
                  ? `2.5px solid ${HF_COLORS.accentPurple}`
                  : `2px solid ${HF_COLORS.borderSubtle}`,
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 23, fontWeight: 800, color: HF_COLORS.accentPurple }}>
                三档规格旋钮 &amp; 真 3D 锁死咒语
              </div>
              <div style={{ fontSize: 18, color: HF_COLORS.textSecondary, lineHeight: 1.55 }}>
                1. <strong style={{ color: HF_COLORS.textPrimary }}>Mood words</strong>：一句话定氛围，审美交给 Agent
                <br />2. <strong style={{ color: HF_COLORS.textPrimary }}>Style tokens</strong>：精确色值、材质纹理与字体方向
                <br />3. <strong style={{ color: HF_COLORS.textPrimary }}>Full visual spec</strong>：全元素几何、坐标与逐秒时间轴
              </div>
              <div
                style={{
                  marginTop: "auto",
                  borderRadius: 11,
                  backgroundColor: "rgba(16, 185, 129, 0.14)",
                  border: `1.5px solid ${HF_COLORS.brandNeon}`,
                  padding: "10px 14px",
                  fontSize: 18,
                  color: HF_COLORS.textPrimary,
                }}
              >
                真 3D 光影/镜头深度必写：
                <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon, fontWeight: 800 }}>
                  {" "}Three.js via the adapter
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
