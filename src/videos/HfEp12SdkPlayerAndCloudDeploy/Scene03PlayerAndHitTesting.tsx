import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { HfSplitCompare } from "../../components/hyperframes/HfSplitCompare";
import { FONT_MONO, HF_COLORS } from "../../components/hyperframes/tokens";

export interface Scene03Props {
  voiceFromFrame: number;
}

export const Scene03PlayerAndHitTesting: React.FC<Scene03Props> = ({
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

  const shareActive = voiceMs >= 38000;

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
          badge: "<hyperframes-player> · WEB COMPONENT",
          meta: "SHADOW DOM + POSTMESSAGE",
          title: "零样式污染的跨框架网页播放器",
          subtitle: "React / Vue / Svelte / 原生 HTML 一行标签直接嵌入",
          tone: "cyan",
          activeWindow: [0, 26000],
          items: [
            {
              title: "Shadow DOM 强隔离 + Iframe 沙箱",
              description: "宿主页面 CSS 不会污染视频画面，视频内部字体与全局样式也不会反向击穿 SaaS 控制台",
              activeWindow: [0, 13000],
            },
            {
              title: "postMessage 协议 + createIframePreviewAdapter",
              description: "通过标准 postMessage 同步播放头、变量实时覆写与暂停寻址，无需暴露内部 DOM 引用",
              code: true,
              activeWindow: [13000, 26000],
            },
          ],
        }}
        right={{
          badge: "PRECISION HIT-TESTING · 交互选区",
          meta: "REPLACES elementsFromPoint",
          title: "精准画布命中与手动拖拽守卫",
          subtitle: "解决透明遮罩、文字叠层与复杂动画节点的误选中难题",
          tone: "emerald",
          activeWindow: [26000, 54000],
          items: [
            {
              title: "isProvablyEmptyAt(x, y) 取代原始 elementsFromPoint",
              description: "原生 elementsFromPoint 会被透明铺底容器或全屏滤镜层拦截；isProvablyEmptyAt 逐层穿透精准判定真实可点区域",
              code: true,
              activeWindow: [26000, 39000],
            },
            {
              title: "canApplyManualOffset(target) 拖拽合法性校验",
              description: "拖移前检测元素是否被 GSAP 强锁坐标或属于非自由定位节点，防止手拖偏移后下一帧被动画瞬间弹回",
              code: true,
              activeWindow: [39000, 54000],
            },
          ],
        }}
      />

      {/* Bottom: hyperframes share Privacy Default */}
      <div
        style={{
          borderRadius: 15,
          backgroundColor: shareActive ? "rgba(245, 158, 11, 0.14)" : HF_COLORS.bgSurface,
          border: `2px solid ${shareActive ? HF_COLORS.accentYellow : HF_COLORS.borderSubtle}`,
          padding: "13px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          fontSize: 18,
          color: HF_COLORS.textPrimary,
        }}
      >
        <span>
          <strong style={{ color: HF_COLORS.accentYellow }}>🔒 隐私默认保护：</strong>
          <span style={{ fontFamily: FONT_MONO }}>npx hyperframes share</span>{" "}
          分享审片链接时<strong>默认不打包上传 HTML 源码</strong>；仅当显式传入{" "}
          <span style={{ fontFamily: FONT_MONO, color: HF_COLORS.brandNeon, fontWeight: 800 }}>
            --include-source
          </span>{" "}
          才会附带源码供协作下载。
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 15, fontWeight: 700, color: HF_COLORS.accentYellow, whiteSpace: "nowrap" }}>
          SAFE SHARE DEFAULT
        </span>
      </div>
    </div>
  );
};
