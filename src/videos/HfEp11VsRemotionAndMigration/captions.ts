import type { Caption } from "@remotion/captions";

export interface SceneTimingMeta {
  id: string;
  audioFile: string;
  fromFrame: number;
  durationInFrames: number;
  voiceFromFrame: number;
  voiceDurationInFrames: number;
  voiceDurationMs: number;
}

export const EP11_TOTAL_FRAMES = 9134;

export const EP11_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp11VsRemotionAndMigration/ep11_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1919,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1853,
    "voiceDurationMs": 61752
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp11VsRemotionAndMigration/ep11_s02_voice.mp3",
    "fromFrame": 1919,
    "durationInFrames": 1793,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1739,
    "voiceDurationMs": 57936
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp11VsRemotionAndMigration/ep11_s03_voice.mp3",
    "fromFrame": 3712,
    "durationInFrames": 1602,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1548,
    "voiceDurationMs": 51600
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp11VsRemotionAndMigration/ep11_s04_voice.mp3",
    "fromFrame": 5314,
    "durationInFrames": 1929,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1875,
    "voiceDurationMs": 62472
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp11VsRemotionAndMigration/ep11_s05_voice.mp3",
    "fromFrame": 7243,
    "durationInFrames": 1891,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1831,
    "voiceDurationMs": 61032
  }
};

export const ep11_s01_captions: Caption[] = [
  {
    "text": "欢迎来到",
    "startMs": 97,
    "endMs": 864,
    "timestampMs": 480,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 864,
    "endMs": 1901,
    "timestampMs": 1382,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第十一集",
    "startMs": 1901,
    "endMs": 3423,
    "timestampMs": 2662,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "既然本系列",
    "startMs": 3950,
    "endMs": 4646,
    "timestampMs": 4298,
    "confidence": 1.0
  },
  {
    "text": "视频本身就是用",
    "startMs": 4646,
    "endMs": 6026,
    "timestampMs": 5336,
    "confidence": 1.0
  },
  {
    "text": " Remotion",
    "startMs": 6026,
    "endMs": 6651,
    "timestampMs": 6338,
    "confidence": 1.0
  },
  {
    "text": " 工程制作的",
    "startMs": 6651,
    "endMs": 7429,
    "timestampMs": 7040,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这一集我们",
    "startMs": 7618,
    "endMs": 8561,
    "timestampMs": 8089,
    "confidence": 1.0
  },
  {
    "text": "必须用最客观、",
    "startMs": 8561,
    "endMs": 9575,
    "timestampMs": 9068,
    "confidence": 1.0
  },
  {
    "text": "最硬核的源码视角",
    "startMs": 9575,
    "endMs": 10991,
    "timestampMs": 10283,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "把",
    "startMs": 11238,
    "endMs": 11415,
    "timestampMs": 11326,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 11415,
    "endMs": 12323,
    "timestampMs": 11869,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 12323,
    "endMs": 12559,
    "timestampMs": 12441,
    "confidence": 1.0
  },
  {
    "text": " Remotion",
    "startMs": 12559,
    "endMs": 13137,
    "timestampMs": 12848,
    "confidence": 1.0
  },
  {
    "text": " 拉到同一张",
    "startMs": 13137,
    "endMs": 13974,
    "timestampMs": 13555,
    "confidence": 1.0
  },
  {
    "text": "实验台正面对比",
    "startMs": 13974,
    "endMs": 15000,
    "timestampMs": 14487,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "两个框架都",
    "startMs": 15542,
    "endMs": 16380,
    "timestampMs": 15961,
    "confidence": 1.0
  },
  {
    "text": "会打开真实",
    "startMs": 16380,
    "endMs": 17087,
    "timestampMs": 16733,
    "confidence": 1.0
  },
  {
    "text": "浏览器逐帧截图编码",
    "startMs": 17087,
    "endMs": 18703,
    "timestampMs": 17895,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "本质分歧在于写法",
    "startMs": 19045,
    "endMs": 20318,
    "timestampMs": 19681,
    "confidence": 1.0
  },
  {
    "text": " Remotion",
    "startMs": 20318,
    "endMs": 21274,
    "timestampMs": 20796,
    "confidence": 1.0
  },
  {
    "text": " 让你写",
    "startMs": 21274,
    "endMs": 21875,
    "timestampMs": 21574,
    "confidence": 1.0
  },
  {
    "text": " React",
    "startMs": 21875,
    "endMs": 22347,
    "timestampMs": 22111,
    "confidence": 1.0
  },
  {
    "text": " 组件",
    "startMs": 22347,
    "endMs": 22771,
    "timestampMs": 22559,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HyperFrames",
    "startMs": 23066,
    "endMs": 23974,
    "timestampMs": 23520,
    "confidence": 1.0
  },
  {
    "text": " 让你写标准",
    "startMs": 23974,
    "endMs": 24870,
    "timestampMs": 24422,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 24870,
    "endMs": 25708,
    "timestampMs": 25289,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "官方做过一",
    "startMs": 26250,
    "endMs": 27134,
    "timestampMs": 26692,
    "confidence": 1.0
  },
  {
    "text": "次零重试同题实测",
    "startMs": 27134,
    "endMs": 28373,
    "timestampMs": 27753,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "把同一段",
    "startMs": 28738,
    "endMs": 29245,
    "timestampMs": 28991,
    "confidence": 1.0
  },
  {
    "text": " 15",
    "startMs": 29245,
    "endMs": 29552,
    "timestampMs": 29398,
    "confidence": 1.0
  },
  {
    "text": " 秒",
    "startMs": 29552,
    "endMs": 29788,
    "timestampMs": 29670,
    "confidence": 1.0
  },
  {
    "text": " Inkwell",
    "startMs": 29788,
    "endMs": 30389,
    "timestampMs": 30088,
    "confidence": 1.0
  },
  {
    "text": " 笔记应用发",
    "startMs": 30389,
    "endMs": 31427,
    "timestampMs": 30908,
    "confidence": 1.0
  },
  {
    "text": "布视频需求交给",
    "startMs": 31427,
    "endMs": 32630,
    "timestampMs": 32028,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Claude Code",
    "startMs": 32653,
    "endMs": 33349,
    "timestampMs": 33001,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "结果",
    "startMs": 33892,
    "endMs": 34375,
    "timestampMs": 34133,
    "confidence": 1.0
  },
  {
    "text": " Remotion",
    "startMs": 34375,
    "endMs": 34988,
    "timestampMs": 34681,
    "confidence": 1.0
  },
  {
    "text": " 耗时",
    "startMs": 34988,
    "endMs": 35425,
    "timestampMs": 35206,
    "confidence": 1.0
  },
  {
    "text": " 12",
    "startMs": 35425,
    "endMs": 35686,
    "timestampMs": 35555,
    "confidence": 1.0
  },
  {
    "text": " 分",
    "startMs": 35686,
    "endMs": 35884,
    "timestampMs": 35785,
    "confidence": 1.0
  },
  {
    "text": " 30",
    "startMs": 35884,
    "endMs": 36161,
    "timestampMs": 36022,
    "confidence": 1.0
  },
  {
    "text": " 秒",
    "startMs": 36161,
    "endMs": 36391,
    "timestampMs": 36276,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "产出",
    "startMs": 36592,
    "endMs": 36993,
    "timestampMs": 36792,
    "confidence": 1.0
  },
  {
    "text": " 10",
    "startMs": 36993,
    "endMs": 37211,
    "timestampMs": 37102,
    "confidence": 1.0
  },
  {
    "text": " 个",
    "startMs": 37211,
    "endMs": 37382,
    "timestampMs": 37296,
    "confidence": 1.0
  },
  {
    "text": " TypeScript",
    "startMs": 37382,
    "endMs": 37972,
    "timestampMs": 37677,
    "confidence": 1.0
  },
  {
    "text": " 文件共",
    "startMs": 37972,
    "endMs": 38726,
    "timestampMs": 38349,
    "confidence": 1.0
  },
  {
    "text": " 1,037",
    "startMs": 38726,
    "endMs": 39587,
    "timestampMs": 39156,
    "confidence": 1.0
  },
  {
    "text": " 行代码、安装约",
    "startMs": 39587,
    "endMs": 40991,
    "timestampMs": 40289,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "950",
    "startMs": 41002,
    "endMs": 41419,
    "timestampMs": 41210,
    "confidence": 1.0
  },
  {
    "text": " MB",
    "startMs": 41419,
    "endMs": 41627,
    "timestampMs": 41523,
    "confidence": 1.0
  },
  {
    "text": " 的",
    "startMs": 41627,
    "endMs": 41757,
    "timestampMs": 41692,
    "confidence": 1.0
  },
  {
    "text": " node_modules",
    "startMs": 41757,
    "endMs": 43255,
    "timestampMs": 42506,
    "confidence": 1.0
  },
  {
    "text": " 且未配音轨",
    "startMs": 43255,
    "endMs": 44068,
    "timestampMs": 43661,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HyperFrames",
    "startMs": 44399,
    "endMs": 45259,
    "timestampMs": 44829,
    "confidence": 1.0
  },
  {
    "text": " 耗时",
    "startMs": 45259,
    "endMs": 45837,
    "timestampMs": 45548,
    "confidence": 1.0
  },
  {
    "text": " 11",
    "startMs": 45837,
    "endMs": 46086,
    "timestampMs": 45961,
    "confidence": 1.0
  },
  {
    "text": " 分",
    "startMs": 46086,
    "endMs": 46274,
    "timestampMs": 46180,
    "confidence": 1.0
  },
  {
    "text": " 50",
    "startMs": 46274,
    "endMs": 46530,
    "timestampMs": 46402,
    "confidence": 1.0
  },
  {
    "text": " 秒",
    "startMs": 46530,
    "endMs": 46734,
    "timestampMs": 46632,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "仅产出",
    "startMs": 46845,
    "endMs": 47317,
    "timestampMs": 47081,
    "confidence": 1.0
  },
  {
    "text": " 4",
    "startMs": 47317,
    "endMs": 47501,
    "timestampMs": 47409,
    "confidence": 1.0
  },
  {
    "text": " 个",
    "startMs": 47501,
    "endMs": 47789,
    "timestampMs": 47645,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 47789,
    "endMs": 48473,
    "timestampMs": 48131,
    "confidence": 1.0
  },
  {
    "text": " 文件共",
    "startMs": 48473,
    "endMs": 49216,
    "timestampMs": 48844,
    "confidence": 1.0
  },
  {
    "text": " 822",
    "startMs": 49216,
    "endMs": 49782,
    "timestampMs": 49499,
    "confidence": 1.0
  },
  {
    "text": " 行代码、零依赖",
    "startMs": 49782,
    "endMs": 50961,
    "timestampMs": 50371,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "还顺手配好",
    "startMs": 51138,
    "endMs": 52022,
    "timestampMs": 51580,
    "confidence": 1.0
  },
  {
    "text": "了背景音乐与",
    "startMs": 52022,
    "endMs": 53036,
    "timestampMs": 52529,
    "confidence": 1.0
  },
  {
    "text": "五段音效",
    "startMs": 53036,
    "endMs": 53673,
    "timestampMs": 53354,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "当然单次运",
    "startMs": 54216,
    "endMs": 55583,
    "timestampMs": 54899,
    "confidence": 1.0
  },
  {
    "text": "行不代表谁",
    "startMs": 55583,
    "endMs": 56338,
    "timestampMs": 55960,
    "confidence": 1.0
  },
  {
    "text": "画质碾压谁",
    "startMs": 56338,
    "endMs": 57305,
    "timestampMs": 56821,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "真正长远的",
    "startMs": 57718,
    "endMs": 58449,
    "timestampMs": 58083,
    "confidence": 1.0
  },
  {
    "text": "区别在于你",
    "startMs": 58449,
    "endMs": 59463,
    "timestampMs": 58956,
    "confidence": 1.0
  },
  {
    "text": "手里留下的资产形态",
    "startMs": 59463,
    "endMs": 60914,
    "timestampMs": 60188,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep11_s02_captions: Caption[] = [
  {
    "text": "把显微镜对",
    "startMs": 97,
    "endMs": 1170,
    "timestampMs": 633,
    "confidence": 1.0
  },
  {
    "text": "准一个最简单的",
    "startMs": 1170,
    "endMs": 1913,
    "timestampMs": 1541,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 1913,
    "endMs": 2397,
    "timestampMs": 2155,
    "confidence": 1.0
  },
  {
    "text": " 秒淡入淡出标题卡",
    "startMs": 2397,
    "endMs": 3529,
    "timestampMs": 2963,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "就能一眼看",
    "startMs": 3800,
    "endMs": 4708,
    "timestampMs": 4254,
    "confidence": 1.0
  },
  {
    "text": "清两种哲学",
    "startMs": 4708,
    "endMs": 5498,
    "timestampMs": 5103,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在",
    "startMs": 6038,
    "endMs": 6297,
    "timestampMs": 6167,
    "confidence": 1.0
  },
  {
    "text": " Remotion",
    "startMs": 6297,
    "endMs": 6792,
    "timestampMs": 6544,
    "confidence": 1.0
  },
  {
    "text": " 里",
    "startMs": 6792,
    "endMs": 7016,
    "timestampMs": 6904,
    "confidence": 1.0
  },
  {
    "text": " 组件是当前帧号",
    "startMs": 7016,
    "endMs": 8467,
    "timestampMs": 7741,
    "confidence": 1.0
  },
  {
    "text": " frame",
    "startMs": 8467,
    "endMs": 8785,
    "timestampMs": 8626,
    "confidence": 1.0
  },
  {
    "text": " 的纯函数",
    "startMs": 8785,
    "endMs": 9422,
    "timestampMs": 9103,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "你通过",
    "startMs": 9717,
    "endMs": 10177,
    "timestampMs": 9947,
    "confidence": 1.0
  },
  {
    "text": " useCurrentFrame()",
    "startMs": 10177,
    "endMs": 11132,
    "timestampMs": 10654,
    "confidence": 1.0
  },
  {
    "text": " 拿到整数帧号",
    "startMs": 11132,
    "endMs": 12300,
    "timestampMs": 11716,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "再用",
    "startMs": 12476,
    "endMs": 12866,
    "timestampMs": 12671,
    "confidence": 1.0
  },
  {
    "text": " interpolate",
    "startMs": 12866,
    "endMs": 13620,
    "timestampMs": 13243,
    "confidence": 1.0
  },
  {
    "text": " 做帧级插值计算",
    "startMs": 13620,
    "endMs": 14788,
    "timestampMs": 14204,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并在另一个",
    "startMs": 15059,
    "endMs": 15696,
    "timestampMs": 15377,
    "confidence": 1.0
  },
  {
    "text": "注册文件里声明",
    "startMs": 15696,
    "endMs": 17028,
    "timestampMs": 16362,
    "confidence": 1.0
  },
  {
    "text": " 90",
    "startMs": 17028,
    "endMs": 17370,
    "timestampMs": 17199,
    "confidence": 1.0
  },
  {
    "text": " 帧的",
    "startMs": 17370,
    "endMs": 17594,
    "timestampMs": 17482,
    "confidence": 1.0
  },
  {
    "text": " Composition",
    "startMs": 17594,
    "endMs": 18302,
    "timestampMs": 17948,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "逻辑纯净透明",
    "startMs": 18455,
    "endMs": 19599,
    "timestampMs": 19027,
    "confidence": 1.0
  },
  {
    "text": " 完全可以在",
    "startMs": 19599,
    "endMs": 20324,
    "timestampMs": 19961,
    "confidence": 1.0
  },
  {
    "text": "脑海里推演任意一帧",
    "startMs": 20324,
    "endMs": 22116,
    "timestampMs": 21220,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而在",
    "startMs": 22647,
    "endMs": 22942,
    "timestampMs": 22794,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 22942,
    "endMs": 23685,
    "timestampMs": 23313,
    "confidence": 1.0
  },
  {
    "text": " 里",
    "startMs": 23685,
    "endMs": 23897,
    "timestampMs": 23791,
    "confidence": 1.0
  },
  {
    "text": " 时间和动画",
    "startMs": 23897,
    "endMs": 25135,
    "timestampMs": 24516,
    "confidence": 1.0
  },
  {
    "text": "全写在同一份",
    "startMs": 25135,
    "endMs": 26185,
    "timestampMs": 25660,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 26185,
    "endMs": 26869,
    "timestampMs": 26527,
    "confidence": 1.0
  },
  {
    "text": " 中",
    "startMs": 26869,
    "endMs": 27140,
    "timestampMs": 27004,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "class",
    "startMs": 27458,
    "endMs": 27836,
    "timestampMs": 27647,
    "confidence": 1.0
  },
  {
    "text": " clip",
    "startMs": 27836,
    "endMs": 28331,
    "timestampMs": 28083,
    "confidence": 1.0
  },
  {
    "text": " 配合",
    "startMs": 28331,
    "endMs": 28767,
    "timestampMs": 28549,
    "confidence": 1.0
  },
  {
    "text": " data-start",
    "startMs": 28767,
    "endMs": 29345,
    "timestampMs": 29056,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 29345,
    "endMs": 29687,
    "timestampMs": 29516,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 29687,
    "endMs": 30006,
    "timestampMs": 29846,
    "confidence": 1.0
  },
  {
    "text": " data-duration",
    "startMs": 30006,
    "endMs": 30749,
    "timestampMs": 30377,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 30749,
    "endMs": 31032,
    "timestampMs": 30890,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以秒声明在场时间",
    "startMs": 31032,
    "endMs": 32388,
    "timestampMs": 31710,
    "confidence": 1.0
  },
  {
    "text": " 下方用",
    "startMs": 32388,
    "endMs": 33260,
    "timestampMs": 32824,
    "confidence": 1.0
  },
  {
    "text": " gsap.timeline",
    "startMs": 33260,
    "endMs": 34558,
    "timestampMs": 33909,
    "confidence": 1.0
  },
  {
    "text": " ({",
    "startMs": 34558,
    "endMs": 34770,
    "timestampMs": 34664,
    "confidence": 1.0
  },
  {
    "text": "paused",
    "startMs": 34770,
    "endMs": 35289,
    "timestampMs": 35029,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "true",
    "startMs": 35513,
    "endMs": 35902,
    "timestampMs": 35707,
    "confidence": 1.0
  },
  {
    "text": "})编写暂停时间轴并",
    "startMs": 35902,
    "endMs": 37683,
    "timestampMs": 36792,
    "confidence": 1.0
  },
  {
    "text": "注册到",
    "startMs": 37683,
    "endMs": 38131,
    "timestampMs": 37907,
    "confidence": 1.0
  },
  {
    "text": " window.__timelines",
    "startMs": 38131,
    "endMs": 40507,
    "timestampMs": 39319,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "渲染器在截图前把",
    "startMs": 40813,
    "endMs": 42476,
    "timestampMs": 41644,
    "confidence": 1.0
  },
  {
    "text": "时间轴精准",
    "startMs": 42476,
    "endMs": 43325,
    "timestampMs": 42900,
    "confidence": 1.0
  },
  {
    "text": " seek",
    "startMs": 43325,
    "endMs": 43691,
    "timestampMs": 43508,
    "confidence": 1.0
  },
  {
    "text": " 到目标秒数",
    "startMs": 43691,
    "endMs": 44492,
    "timestampMs": 44091,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "漏写",
    "startMs": 45035,
    "endMs": 45424,
    "timestampMs": 45229,
    "confidence": 1.0
  },
  {
    "text": " paused",
    "startMs": 45424,
    "endMs": 45955,
    "timestampMs": 45689,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "true",
    "startMs": 46191,
    "endMs": 46580,
    "timestampMs": 46385,
    "confidence": 1.0
  },
  {
    "text": " 或忘记注册",
    "startMs": 46580,
    "endMs": 47500,
    "timestampMs": 47040,
    "confidence": 1.0
  },
  {
    "text": " window.__timelines",
    "startMs": 47500,
    "endMs": 49905,
    "timestampMs": 48702,
    "confidence": 1.0
  },
  {
    "text": " 画面就会静止不动",
    "startMs": 49905,
    "endMs": 51285,
    "timestampMs": 50595,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而一旦遵守契约",
    "startMs": 51627,
    "endMs": 52759,
    "timestampMs": 52193,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "GSAP、",
    "startMs": 52924,
    "endMs": 53643,
    "timestampMs": 53283,
    "confidence": 1.0
  },
  {
    "text": "Lottie",
    "startMs": 53643,
    "endMs": 54339,
    "timestampMs": 53991,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 54339,
    "endMs": 54551,
    "timestampMs": 54445,
    "confidence": 1.0
  },
  {
    "text": " Three.js",
    "startMs": 54551,
    "endMs": 55306,
    "timestampMs": 54928,
    "confidence": 1.0
  },
  {
    "text": " 都能原地享",
    "startMs": 55306,
    "endMs": 56250,
    "timestampMs": 55778,
    "confidence": 1.0
  },
  {
    "text": "受确定性寻址",
    "startMs": 56250,
    "endMs": 57099,
    "timestampMs": 56674,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep11_s03_captions: Caption[] = [
  {
    "text": "两个框架没有绝对的",
    "startMs": 97,
    "endMs": 1713,
    "timestampMs": 905,
    "confidence": 1.0
  },
  {
    "text": "谁淘汰谁",
    "startMs": 1713,
    "endMs": 2491,
    "timestampMs": 2102,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "关键看你的",
    "startMs": 2857,
    "endMs": 3493,
    "timestampMs": 3175,
    "confidence": 1.0
  },
  {
    "text": "团队基因与商业场景",
    "startMs": 3493,
    "endMs": 5203,
    "timestampMs": 4348,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Remotion",
    "startMs": 5743,
    "endMs": 6226,
    "timestampMs": 5984,
    "confidence": 1.0
  },
  {
    "text": " 的强项非常扎实",
    "startMs": 6226,
    "endMs": 7417,
    "timestampMs": 6821,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果你的团队深耕",
    "startMs": 7759,
    "endMs": 9222,
    "timestampMs": 8490,
    "confidence": 1.0
  },
  {
    "text": " React",
    "startMs": 9222,
    "endMs": 9776,
    "timestampMs": 9499,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 9776,
    "endMs": 9988,
    "timestampMs": 9882,
    "confidence": 1.0
  },
  {
    "text": " TypeScript",
    "startMs": 9988,
    "endMs": 10814,
    "timestampMs": 10401,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "已经拥有现成的",
    "startMs": 11002,
    "endMs": 12016,
    "timestampMs": 11509,
    "confidence": 1.0
  },
  {
    "text": "设计系统组件库",
    "startMs": 12016,
    "endMs": 13090,
    "timestampMs": 12553,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "希望用统一的",
    "startMs": 13361,
    "endMs": 14340,
    "timestampMs": 13850,
    "confidence": 1.0
  },
  {
    "text": "类型检查与",
    "startMs": 14340,
    "endMs": 15389,
    "timestampMs": 14864,
    "confidence": 1.0
  },
  {
    "text": "单向纯函数",
    "startMs": 15389,
    "endMs": 16333,
    "timestampMs": 15861,
    "confidence": 1.0
  },
  {
    "text": "心智模型构",
    "startMs": 16333,
    "endMs": 17559,
    "timestampMs": 16946,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "建数据驱动视频",
    "startMs": 17559,
    "endMs": 18514,
    "timestampMs": 18036,
    "confidence": 1.0
  },
  {
    "text": " Remotion",
    "startMs": 18514,
    "endMs": 19027,
    "timestampMs": 18770,
    "confidence": 1.0
  },
  {
    "text": " 的成熟生态",
    "startMs": 19027,
    "endMs": 19935,
    "timestampMs": 19481,
    "confidence": 1.0
  },
  {
    "text": "极具吸引力",
    "startMs": 19935,
    "endMs": 20855,
    "timestampMs": 20395,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "其开源协议对",
    "startMs": 21161,
    "endMs": 22399,
    "timestampMs": 21780,
    "confidence": 1.0
  },
  {
    "text": "个人与三人",
    "startMs": 22399,
    "endMs": 23296,
    "timestampMs": 22847,
    "confidence": 1.0
  },
  {
    "text": "及以下公司免费",
    "startMs": 23296,
    "endMs": 24440,
    "timestampMs": 23868,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "四人及以上",
    "startMs": 24664,
    "endMs": 25583,
    "timestampMs": 25123,
    "confidence": 1.0
  },
  {
    "text": "团队则需按",
    "startMs": 25583,
    "endMs": 26562,
    "timestampMs": 26072,
    "confidence": 1.0
  },
  {
    "text": "席位购买商业授权",
    "startMs": 26562,
    "endMs": 27977,
    "timestampMs": 27269,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而",
    "startMs": 28520,
    "endMs": 28708,
    "timestampMs": 28614,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 28708,
    "endMs": 29440,
    "timestampMs": 29074,
    "confidence": 1.0
  },
  {
    "text": " 的核心优势在于",
    "startMs": 29440,
    "endMs": 30501,
    "timestampMs": 29970,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "采用",
    "startMs": 30701,
    "endMs": 31114,
    "timestampMs": 30907,
    "confidence": 1.0
  },
  {
    "text": " Apache 2.0",
    "startMs": 31114,
    "endMs": 32034,
    "timestampMs": 31574,
    "confidence": 1.0
  },
  {
    "text": " 协议彻底免",
    "startMs": 32034,
    "endMs": 33237,
    "timestampMs": 32635,
    "confidence": 1.0
  },
  {
    "text": "费商用且无席位限制",
    "startMs": 33237,
    "endMs": 34758,
    "timestampMs": 33997,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "无需",
    "startMs": 35112,
    "endMs": 35548,
    "timestampMs": 35330,
    "confidence": 1.0
  },
  {
    "text": " Webpack",
    "startMs": 35548,
    "endMs": 36161,
    "timestampMs": 35854,
    "confidence": 1.0
  },
  {
    "text": " 或打包构建",
    "startMs": 36161,
    "endMs": 37093,
    "timestampMs": 36627,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "浏览器直接",
    "startMs": 37305,
    "endMs": 38048,
    "timestampMs": 37676,
    "confidence": 1.0
  },
  {
    "text": "双击就能用",
    "startMs": 38048,
    "endMs": 39015,
    "timestampMs": 38531,
    "confidence": 1.0
  },
  {
    "text": " DevTools",
    "startMs": 39015,
    "endMs": 39546,
    "timestampMs": 39280,
    "confidence": 1.0
  },
  {
    "text": " 调试",
    "startMs": 39546,
    "endMs": 39982,
    "timestampMs": 39764,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "能原生承接",
    "startMs": 40171,
    "endMs": 41032,
    "timestampMs": 40601,
    "confidence": 1.0
  },
  {
    "text": "设计师现有的网页、",
    "startMs": 41032,
    "endMs": 42164,
    "timestampMs": 41598,
    "confidence": 1.0
  },
  {
    "text": "SVG",
    "startMs": 42164,
    "endMs": 42971,
    "timestampMs": 42567,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 42971,
    "endMs": 43207,
    "timestampMs": 43089,
    "confidence": 1.0
  },
  {
    "text": " GSAP",
    "startMs": 43207,
    "endMs": 43938,
    "timestampMs": 43572,
    "confidence": 1.0
  },
  {
    "text": " 动效",
    "startMs": 43938,
    "endMs": 44351,
    "timestampMs": 44144,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并且从第一天起就为",
    "startMs": 44634,
    "endMs": 46297,
    "timestampMs": 45465,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 46297,
    "endMs": 46886,
    "timestampMs": 46591,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 46886,
    "endMs": 47417,
    "timestampMs": 47151,
    "confidence": 1.0
  },
  {
    "text": " 与桌面端、",
    "startMs": 47417,
    "endMs": 48278,
    "timestampMs": 47847,
    "confidence": 1.0
  },
  {
    "text": "浏览器双可",
    "startMs": 48278,
    "endMs": 49717,
    "timestampMs": 48997,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "视化编辑量身打造",
    "startMs": 49717,
    "endMs": 50778,
    "timestampMs": 50247,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep11_s04_captions: Caption[] = [
  {
    "text": "如果你手头",
    "startMs": 97,
    "endMs": 923,
    "timestampMs": 510,
    "confidence": 1.0
  },
  {
    "text": "已有现成的",
    "startMs": 923,
    "endMs": 1630,
    "timestampMs": 1276,
    "confidence": 1.0
  },
  {
    "text": " Remotion",
    "startMs": 1630,
    "endMs": 2067,
    "timestampMs": 1848,
    "confidence": 1.0
  },
  {
    "text": " 项目想迁到",
    "startMs": 2067,
    "endMs": 3187,
    "timestampMs": 2627,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 3187,
    "endMs": 4071,
    "timestampMs": 3629,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "官方提供了专属技能",
    "startMs": 4390,
    "endMs": 5946,
    "timestampMs": 5168,
    "confidence": 1.0
  },
  {
    "text": " /remotion-to-hyperframes",
    "startMs": 5946,
    "endMs": 7479,
    "timestampMs": 6712,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "注意这是针对真实",
    "startMs": 8007,
    "endMs": 9858,
    "timestampMs": 8932,
    "confidence": 1.0
  },
  {
    "text": " Remotion",
    "startMs": 9858,
    "endMs": 10554,
    "timestampMs": 10206,
    "confidence": 1.0
  },
  {
    "text": " 源码的单向迁移翻译",
    "startMs": 10554,
    "endMs": 12087,
    "timestampMs": 11320,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "不能反向导出",
    "startMs": 12311,
    "endMs": 13325,
    "timestampMs": 12818,
    "confidence": 1.0
  },
  {
    "text": " 也不能拿来",
    "startMs": 13325,
    "endMs": 14045,
    "timestampMs": 13685,
    "confidence": 1.0
  },
  {
    "text": "替代从零创作",
    "startMs": 14045,
    "endMs": 15130,
    "timestampMs": 14587,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "迁移时需指",
    "startMs": 15672,
    "endMs": 17064,
    "timestampMs": 16368,
    "confidence": 1.0
  },
  {
    "text": "定具体组件文件",
    "startMs": 17064,
    "endMs": 18054,
    "timestampMs": 17559,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "技能会自动把",
    "startMs": 18278,
    "endMs": 19210,
    "timestampMs": 18744,
    "confidence": 1.0
  },
  {
    "text": " Sequence",
    "startMs": 19210,
    "endMs": 19965,
    "timestampMs": 19587,
    "confidence": 1.0
  },
  {
    "text": " 转为",
    "startMs": 19965,
    "endMs": 20413,
    "timestampMs": 20189,
    "confidence": 1.0
  },
  {
    "text": " Clips",
    "startMs": 20413,
    "endMs": 20967,
    "timestampMs": 20690,
    "confidence": 1.0
  },
  {
    "text": "、把",
    "startMs": 20967,
    "endMs": 21415,
    "timestampMs": 21191,
    "confidence": 1.0
  },
  {
    "text": " interpolate",
    "startMs": 21415,
    "endMs": 22146,
    "timestampMs": 21780,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "映射为暂停的",
    "startMs": 22241,
    "endMs": 23302,
    "timestampMs": 22771,
    "confidence": 1.0
  },
  {
    "text": " GSAP",
    "startMs": 23302,
    "endMs": 24080,
    "timestampMs": 23691,
    "confidence": 1.0
  },
  {
    "text": " 时间轴",
    "startMs": 24080,
    "endMs": 24670,
    "timestampMs": 24375,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并将无法完全等价的",
    "startMs": 24870,
    "endMs": 26167,
    "timestampMs": 25518,
    "confidence": 1.0
  },
  {
    "text": "字体或转场",
    "startMs": 26167,
    "endMs": 27276,
    "timestampMs": 26721,
    "confidence": 1.0
  },
  {
    "text": "细节忠实记录进",
    "startMs": 27276,
    "endMs": 28361,
    "timestampMs": 27818,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "TRANSLATION_NOTES.md",
    "startMs": 28455,
    "endMs": 30566,
    "timestampMs": 29510,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最值得点赞的",
    "startMs": 31108,
    "endMs": 32146,
    "timestampMs": 31627,
    "confidence": 1.0
  },
  {
    "text": "是它的诚实拒绝机制",
    "startMs": 32146,
    "endMs": 33679,
    "timestampMs": 32912,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一旦静态检查扫到",
    "startMs": 33998,
    "endMs": 35625,
    "timestampMs": 34811,
    "confidence": 1.0
  },
  {
    "text": " useState、",
    "startMs": 35625,
    "endMs": 36238,
    "timestampMs": 35931,
    "confidence": 1.0
  },
  {
    "text": "useReducer、",
    "startMs": 36238,
    "endMs": 37370,
    "timestampMs": 36804,
    "confidence": 1.0
  },
  {
    "text": "useEffect",
    "startMs": 37370,
    "endMs": 38432,
    "timestampMs": 37901,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这类依赖历史状态的",
    "startMs": 38443,
    "endMs": 39741,
    "timestampMs": 39092,
    "confidence": 1.0
  },
  {
    "text": " React",
    "startMs": 39741,
    "endMs": 40165,
    "timestampMs": 39953,
    "confidence": 1.0
  },
  {
    "text": " Hooks",
    "startMs": 40165,
    "endMs": 40649,
    "timestampMs": 40407,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "或者",
    "startMs": 40884,
    "endMs": 41285,
    "timestampMs": 41084,
    "confidence": 1.0
  },
  {
    "text": " MUI、",
    "startMs": 41285,
    "endMs": 42040,
    "timestampMs": 41662,
    "confidence": 1.0
  },
  {
    "text": "shadcn、",
    "startMs": 42040,
    "endMs": 42795,
    "timestampMs": 42417,
    "confidence": 1.0
  },
  {
    "text": "Chakra、",
    "startMs": 42795,
    "endMs": 43538,
    "timestampMs": 43166,
    "confidence": 1.0
  },
  {
    "text": "Radix",
    "startMs": 43538,
    "endMs": 44328,
    "timestampMs": 43933,
    "confidence": 1.0
  },
  {
    "text": " 等第三方",
    "startMs": 44328,
    "endMs": 45189,
    "timestampMs": 44758,
    "confidence": 1.0
  },
  {
    "text": " React",
    "startMs": 45189,
    "endMs": 45672,
    "timestampMs": 45430,
    "confidence": 1.0
  },
  {
    "text": " UI",
    "startMs": 45672,
    "endMs": 46108,
    "timestampMs": 45890,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "组件库",
    "startMs": 46120,
    "endMs": 46580,
    "timestampMs": 46350,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 46580,
    "endMs": 47069,
    "timestampMs": 46824,
    "confidence": 1.0
  },
  {
    "text": " 会主动拒绝硬翻",
    "startMs": 47069,
    "endMs": 48355,
    "timestampMs": 47712,
    "confidence": 1.0
  },
  {
    "text": " 绝不敷衍瞎猜",
    "startMs": 48355,
    "endMs": 49628,
    "timestampMs": 48991,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而是推荐运",
    "startMs": 49982,
    "endMs": 50878,
    "timestampMs": 50430,
    "confidence": 1.0
  },
  {
    "text": "行时互操作方案",
    "startMs": 50878,
    "endMs": 51916,
    "timestampMs": 51397,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "翻译完成后",
    "startMs": 52458,
    "endMs": 53319,
    "timestampMs": 52888,
    "confidence": 1.0
  },
  {
    "text": "绝不能肉眼验收了事",
    "startMs": 53319,
    "endMs": 54864,
    "timestampMs": 54091,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "必须同时渲",
    "startMs": 55124,
    "endMs": 55984,
    "timestampMs": 55554,
    "confidence": 1.0
  },
  {
    "text": "染双版本并运行",
    "startMs": 55984,
    "endMs": 57293,
    "timestampMs": 56638,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes diff",
    "startMs": 57293,
    "endMs": 58756,
    "timestampMs": 58024,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "输出逐帧",
    "startMs": 58779,
    "endMs": 59640,
    "timestampMs": 59209,
    "confidence": 1.0
  },
  {
    "text": " SSIM",
    "startMs": 59640,
    "endMs": 60348,
    "timestampMs": 59994,
    "confidence": 1.0
  },
  {
    "text": " 结构相似度评分！",
    "startMs": 60348,
    "endMs": 61645,
    "timestampMs": 60996,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep11_s05_captions: Caption[] = [
  {
    "text": "最后来看已经在",
    "startMs": 97,
    "endMs": 1300,
    "timestampMs": 698,
    "confidence": 1.0
  },
  {
    "text": "生产环境跑通@",
    "startMs": 1300,
    "endMs": 2609,
    "timestampMs": 1954,
    "confidence": 1.0
  },
  {
    "text": " remotion/lambda",
    "startMs": 2609,
    "endMs": 3611,
    "timestampMs": 3110,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "的工程团队",
    "startMs": 3611,
    "endMs": 4366,
    "timestampMs": 3988,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如何平滑迁移到",
    "startMs": 4720,
    "endMs": 5840,
    "timestampMs": 5280,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 5840,
    "endMs": 6783,
    "timestampMs": 6311,
    "confidence": 1.0
  },
  {
    "text": " 的云端分布式渲染",
    "startMs": 6783,
    "endMs": 8045,
    "timestampMs": 7414,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在源码翻译阶段",
    "startMs": 8585,
    "endMs": 9741,
    "timestampMs": 9163,
    "confidence": 1.0
  },
  {
    "text": " 原来的",
    "startMs": 9741,
    "endMs": 10507,
    "timestampMs": 10124,
    "confidence": 1.0
  },
  {
    "text": " Lambda",
    "startMs": 10507,
    "endMs": 10896,
    "timestampMs": 10701,
    "confidence": 1.0
  },
  {
    "text": " 部署配置会",
    "startMs": 10896,
    "endMs": 11910,
    "timestampMs": 11403,
    "confidence": 1.0
  },
  {
    "text": "被干净剥离",
    "startMs": 11910,
    "endMs": 12724,
    "timestampMs": 12317,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "不阻塞视频画面转换",
    "startMs": 12901,
    "endMs": 14328,
    "timestampMs": 13614,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在基础设施侧",
    "startMs": 14623,
    "endMs": 15660,
    "timestampMs": 15141,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需把调用入口从",
    "startMs": 15772,
    "endMs": 17223,
    "timestampMs": 16497,
    "confidence": 1.0
  },
  {
    "text": " renderMediaOnLambda",
    "startMs": 17223,
    "endMs": 18284,
    "timestampMs": 17753,
    "confidence": 1.0
  },
  {
    "text": " 切换到",
    "startMs": 18284,
    "endMs": 18944,
    "timestampMs": 18614,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "renderToLambda",
    "startMs": 18968,
    "endMs": 19852,
    "timestampMs": 19410,
    "confidence": 1.0
  },
  {
    "text": " 或命令行",
    "startMs": 19852,
    "endMs": 20642,
    "timestampMs": 20247,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes lambda",
    "startMs": 20642,
    "endMs": 22293,
    "timestampMs": 21467,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "即可复用类似的",
    "startMs": 22694,
    "endMs": 23661,
    "timestampMs": 23177,
    "confidence": 1.0
  },
  {
    "text": "无服务器分片并",
    "startMs": 23661,
    "endMs": 24841,
    "timestampMs": 24251,
    "confidence": 1.0
  },
  {
    "text": "发架构",
    "startMs": 24841,
    "endMs": 25159,
    "timestampMs": 25000,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "排查云端故",
    "startMs": 25701,
    "endMs": 26657,
    "timestampMs": 26179,
    "confidence": 1.0
  },
  {
    "text": "障时重点关",
    "startMs": 26657,
    "endMs": 27859,
    "timestampMs": 27258,
    "confidence": 1.0
  },
  {
    "text": "注两类明确错误码",
    "startMs": 27859,
    "endMs": 29003,
    "timestampMs": 28431,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "BROWSER_GPU_NOT_SOFTWARE",
    "startMs": 29298,
    "endMs": 33095,
    "timestampMs": 31196,
    "confidence": 1.0
  },
  {
    "text": " 提示检查无",
    "startMs": 33095,
    "endMs": 34274,
    "timestampMs": 33684,
    "confidence": 1.0
  },
  {
    "text": "头浏览器软",
    "startMs": 34274,
    "endMs": 35088,
    "timestampMs": 34681,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "件渲染配置",
    "startMs": 35088,
    "endMs": 35760,
    "timestampMs": 35424,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "FONT_FETCH_FAILED",
    "startMs": 35872,
    "endMs": 38313,
    "timestampMs": 37092,
    "confidence": 1.0
  },
  {
    "text": " 则提示把远端字体本",
    "startMs": 38313,
    "endMs": 40247,
    "timestampMs": 39280,
    "confidence": 1.0
  },
  {
    "text": "地化打包避",
    "startMs": 40247,
    "endMs": 41073,
    "timestampMs": 40660,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "免冷启动超时",
    "startMs": 41073,
    "endMs": 42063,
    "timestampMs": 41568,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "同时也请客观评估",
    "startMs": 42606,
    "endMs": 44056,
    "timestampMs": 43331,
    "confidence": 1.0
  },
  {
    "text": " AWS Lambda",
    "startMs": 44056,
    "endMs": 45247,
    "timestampMs": 44651,
    "confidence": 1.0
  },
  {
    "text": " 的硬性边界",
    "startMs": 45247,
    "endMs": 46037,
    "timestampMs": 45642,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "受",
    "startMs": 46250,
    "endMs": 46591,
    "timestampMs": 46420,
    "confidence": 1.0
  },
  {
    "text": " Step Functions",
    "startMs": 46591,
    "endMs": 47535,
    "timestampMs": 47063,
    "confidence": 1.0
  },
  {
    "text": " 256",
    "startMs": 47535,
    "endMs": 48266,
    "timestampMs": 47900,
    "confidence": 1.0
  },
  {
    "text": " KiB",
    "startMs": 48266,
    "endMs": 48561,
    "timestampMs": 48413,
    "confidence": 1.0
  },
  {
    "text": " 事件上限约束",
    "startMs": 48561,
    "endMs": 49551,
    "timestampMs": 49056,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "且暂不支持真",
    "startMs": 49882,
    "endMs": 50990,
    "timestampMs": 50436,
    "confidence": 1.0
  },
  {
    "text": " HDR",
    "startMs": 50990,
    "endMs": 51556,
    "timestampMs": 51273,
    "confidence": 1.0
  },
  {
    "text": " 与硬件",
    "startMs": 51556,
    "endMs": 52193,
    "timestampMs": 51874,
    "confidence": 1.0
  },
  {
    "text": " GPU",
    "startMs": 52193,
    "endMs": 52700,
    "timestampMs": 52446,
    "confidence": 1.0
  },
  {
    "text": " 加速",
    "startMs": 52700,
    "endMs": 53077,
    "timestampMs": 52888,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "需要超大",
    "startMs": 53325,
    "endMs": 53997,
    "timestampMs": 53661,
    "confidence": 1.0
  },
  {
    "text": " 4K",
    "startMs": 53997,
    "endMs": 54504,
    "timestampMs": 54250,
    "confidence": 1.0
  },
  {
    "text": " 或复杂特效时",
    "startMs": 54504,
    "endMs": 55683,
    "timestampMs": 55093,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "结合下集要讲的",
    "startMs": 55795,
    "endMs": 57057,
    "timestampMs": 56426,
    "confidence": 1.0
  },
  {
    "text": " Cloud Run",
    "startMs": 57057,
    "endMs": 57989,
    "timestampMs": 57523,
    "confidence": 1.0
  },
  {
    "text": " 或本地渲染",
    "startMs": 57989,
    "endMs": 59038,
    "timestampMs": 58513,
    "confidence": 1.0
  },
  {
    "text": "才是最佳拍档",
    "startMs": 59038,
    "endMs": 60206,
    "timestampMs": 59622,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
