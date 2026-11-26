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

export const EP08_TOTAL_FRAMES = 10347;

export const EP08_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp08ColorVfxAnd3d/ep08_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 2216,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 2150,
    "voiceDurationMs": 71640
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp08ColorVfxAnd3d/ep08_s02_voice.mp3",
    "fromFrame": 2216,
    "durationInFrames": 1918,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1864,
    "voiceDurationMs": 62112
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp08ColorVfxAnd3d/ep08_s03_voice.mp3",
    "fromFrame": 4134,
    "durationInFrames": 2150,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 2096,
    "voiceDurationMs": 69864
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp08ColorVfxAnd3d/ep08_s04_voice.mp3",
    "fromFrame": 6284,
    "durationInFrames": 1930,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1876,
    "voiceDurationMs": 62520
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp08ColorVfxAnd3d/ep08_s05_voice.mp3",
    "fromFrame": 8214,
    "durationInFrames": 2133,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 2073,
    "voiceDurationMs": 69072
  }
};

export const ep08_s01_captions: Caption[] = [
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
    "endMs": 1925,
    "timestampMs": 1394,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第八集",
    "startMs": 1925,
    "endMs": 3246,
    "timestampMs": 2585,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "正式迈入电",
    "startMs": 3505,
    "endMs": 4637,
    "timestampMs": 4071,
    "confidence": 1.0
  },
  {
    "text": "影感视觉精修领域",
    "startMs": 4637,
    "endMs": 5628,
    "timestampMs": 5132,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在",
    "startMs": 6167,
    "endMs": 6391,
    "timestampMs": 6279,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 6391,
    "endMs": 7134,
    "timestampMs": 6762,
    "confidence": 1.0
  },
  {
    "text": " 里",
    "startMs": 7134,
    "endMs": 7370,
    "timestampMs": 7252,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "专业调色完",
    "startMs": 7748,
    "endMs": 8927,
    "timestampMs": 8337,
    "confidence": 1.0
  },
  {
    "text": "全以非破坏",
    "startMs": 8927,
    "endMs": 9634,
    "timestampMs": 9280,
    "confidence": 1.0
  },
  {
    "text": "性方式写入",
    "startMs": 9634,
    "endMs": 10531,
    "timestampMs": 10082,
    "confidence": 1.0
  },
  {
    "text": "媒体元素的",
    "startMs": 10531,
    "endMs": 11238,
    "timestampMs": 10884,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-color-grading",
    "startMs": 11262,
    "endMs": 12252,
    "timestampMs": 11757,
    "confidence": 1.0
  },
  {
    "text": " 属性",
    "startMs": 12252,
    "endMs": 12700,
    "timestampMs": 12476,
    "confidence": 1.0
  },
  {
    "text": " 原始素材毫发无损",
    "startMs": 12700,
    "endMs": 14516,
    "timestampMs": 13608,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "渲染引擎严",
    "startMs": 15059,
    "endMs": 16321,
    "timestampMs": 15690,
    "confidence": 1.0
  },
  {
    "text": "格遵循八步",
    "startMs": 16321,
    "endMs": 17005,
    "timestampMs": 16663,
    "confidence": 1.0
  },
  {
    "text": "固定管线顺序执行",
    "startMs": 17005,
    "endMs": 18396,
    "timestampMs": 17700,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "先做基础影调校正",
    "startMs": 18608,
    "endMs": 19965,
    "timestampMs": 19286,
    "confidence": 1.0
  },
  {
    "text": " adjust",
    "startMs": 19965,
    "endMs": 20660,
    "timestampMs": 20312,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "接着三路色轮",
    "startMs": 20908,
    "endMs": 21887,
    "timestampMs": 21397,
    "confidence": 1.0
  },
  {
    "text": " wheels、",
    "startMs": 21887,
    "endMs": 22335,
    "timestampMs": 22111,
    "confidence": 1.0
  },
  {
    "text": "RGB",
    "startMs": 22335,
    "endMs": 23231,
    "timestampMs": 22783,
    "confidence": 1.0
  },
  {
    "text": " 曲线",
    "startMs": 23231,
    "endMs": 23644,
    "timestampMs": 23437,
    "confidence": 1.0
  },
  {
    "text": " curves",
    "startMs": 23644,
    "endMs": 24151,
    "timestampMs": 23897,
    "confidence": 1.0
  },
  {
    "text": "、色相曲线",
    "startMs": 24151,
    "endMs": 25224,
    "timestampMs": 24687,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "hueCurves",
    "startMs": 25248,
    "endMs": 25932,
    "timestampMs": 25590,
    "confidence": 1.0
  },
  {
    "text": "、最多四组",
    "startMs": 25932,
    "endMs": 26946,
    "timestampMs": 26439,
    "confidence": 1.0
  },
  {
    "text": " HSL",
    "startMs": 26946,
    "endMs": 27759,
    "timestampMs": 27352,
    "confidence": 1.0
  },
  {
    "text": " 局部键控",
    "startMs": 27759,
    "endMs": 28432,
    "timestampMs": 28095,
    "confidence": 1.0
  },
  {
    "text": " secondaries",
    "startMs": 28432,
    "endMs": 29363,
    "timestampMs": 28897,
    "confidence": 1.0
  },
  {
    "text": "、自定义",
    "startMs": 29363,
    "endMs": 30083,
    "timestampMs": 29723,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "cube",
    "startMs": 30194,
    "endMs": 30536,
    "timestampMs": 30365,
    "confidence": 1.0
  },
  {
    "text": " 色彩查找表",
    "startMs": 30536,
    "endMs": 31456,
    "timestampMs": 30996,
    "confidence": 1.0
  },
  {
    "text": " lut",
    "startMs": 31456,
    "endMs": 31857,
    "timestampMs": 31656,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最后才叠加颗粒暗角",
    "startMs": 32128,
    "endMs": 33685,
    "timestampMs": 32906,
    "confidence": 1.0
  },
  {
    "text": " details",
    "startMs": 33685,
    "endMs": 34369,
    "timestampMs": 34027,
    "confidence": 1.0
  },
  {
    "text": " 与风格滤镜",
    "startMs": 34369,
    "endMs": 35289,
    "timestampMs": 34829,
    "confidence": 1.0
  },
  {
    "text": " effects",
    "startMs": 35289,
    "endMs": 36043,
    "timestampMs": 35666,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这里有三条",
    "startMs": 36586,
    "endMs": 37848,
    "timestampMs": 37217,
    "confidence": 1.0
  },
  {
    "text": "必须死守的规则",
    "startMs": 37848,
    "endMs": 38921,
    "timestampMs": 38384,
    "confidence": 1.0
  },
  {
    "text": " 第一",
    "startMs": 38921,
    "endMs": 39534,
    "timestampMs": 39227,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-color-grading",
    "startMs": 39805,
    "endMs": 40867,
    "timestampMs": 40336,
    "confidence": 1.0
  },
  {
    "text": " 只能作用在",
    "startMs": 40867,
    "endMs": 41716,
    "timestampMs": 41291,
    "confidence": 1.0
  },
  {
    "text": " img、",
    "startMs": 41716,
    "endMs": 42400,
    "timestampMs": 42058,
    "confidence": 1.0
  },
  {
    "text": "video、",
    "startMs": 42400,
    "endMs": 43154,
    "timestampMs": 42777,
    "confidence": 1.0
  },
  {
    "text": "canvas",
    "startMs": 43154,
    "endMs": 44015,
    "timestampMs": 43584,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "或用于批量",
    "startMs": 44109,
    "endMs": 44876,
    "timestampMs": 44492,
    "confidence": 1.0
  },
  {
    "text": "统一机位调色的",
    "startMs": 44876,
    "endMs": 45925,
    "timestampMs": 45400,
    "confidence": 1.0
  },
  {
    "text": " hf-color-group",
    "startMs": 45925,
    "endMs": 47140,
    "timestampMs": 46532,
    "confidence": 1.0
  },
  {
    "text": " 上",
    "startMs": 47140,
    "endMs": 47388,
    "timestampMs": 47264,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "绝对不能加在",
    "startMs": 47706,
    "endMs": 48555,
    "timestampMs": 48130,
    "confidence": 1.0
  },
  {
    "text": "普通文字或",
    "startMs": 48555,
    "endMs": 49558,
    "timestampMs": 49056,
    "confidence": 1.0
  },
  {
    "text": " div",
    "startMs": 49558,
    "endMs": 49923,
    "timestampMs": 49740,
    "confidence": 1.0
  },
  {
    "text": " 上",
    "startMs": 49923,
    "endMs": 50112,
    "timestampMs": 50017,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "否则触发",
    "startMs": 50224,
    "endMs": 50837,
    "timestampMs": 50530,
    "confidence": 1.0
  },
  {
    "text": " color_grading_non_media",
    "startMs": 50837,
    "endMs": 54268,
    "timestampMs": 52552,
    "confidence": 1.0
  },
  {
    "text": " 报错",
    "startMs": 54268,
    "endMs": 54693,
    "timestampMs": 54480,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二",
    "startMs": 55023,
    "endMs": 55377,
    "timestampMs": 55200,
    "confidence": 1.0
  },
  {
    "text": " JSON",
    "startMs": 55377,
    "endMs": 56344,
    "timestampMs": 55860,
    "confidence": 1.0
  },
  {
    "text": " 必须按命名分段嵌套",
    "startMs": 56344,
    "endMs": 57830,
    "timestampMs": 57087,
    "confidence": 1.0
  },
  {
    "text": " 写扁平对",
    "startMs": 57830,
    "endMs": 58926,
    "timestampMs": 58378,
    "confidence": 1.0
  },
  {
    "text": "象会静默失效",
    "startMs": 58926,
    "endMs": 59823,
    "timestampMs": 59374,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三",
    "startMs": 60082,
    "endMs": 60471,
    "timestampMs": 60276,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "框架暴露了",
    "startMs": 60583,
    "endMs": 61279,
    "timestampMs": 60931,
    "confidence": 1.0
  },
  {
    "text": " 9",
    "startMs": 61279,
    "endMs": 61454,
    "timestampMs": 61366,
    "confidence": 1.0
  },
  {
    "text": " 个",
    "startMs": 61454,
    "endMs": 61727,
    "timestampMs": 61590,
    "confidence": 1.0
  },
  {
    "text": " --hf-color-grading-",
    "startMs": 61727,
    "endMs": 63059,
    "timestampMs": 62393,
    "confidence": 1.0
  },
  {
    "text": "*",
    "startMs": 63059,
    "endMs": 63684,
    "timestampMs": 63371,
    "confidence": 1.0
  },
  {
    "text": "CSS",
    "startMs": 63684,
    "endMs": 64309,
    "timestampMs": 63996,
    "confidence": 1.0
  },
  {
    "text": " 变量供",
    "startMs": 64309,
    "endMs": 64993,
    "timestampMs": 64651,
    "confidence": 1.0
  },
  {
    "text": " GSAP",
    "startMs": 64993,
    "endMs": 65477,
    "timestampMs": 65235,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "缓动",
    "startMs": 65489,
    "endMs": 65878,
    "timestampMs": 65683,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "但切记",
    "startMs": 66173,
    "endMs": 66786,
    "timestampMs": 66479,
    "confidence": 1.0
  },
  {
    "text": " --hf-color-grading-intensity",
    "startMs": 66786,
    "endMs": 68519,
    "timestampMs": 67652,
    "confidence": 1.0
  },
  {
    "text": " 绝不会缩放",
    "startMs": 68519,
    "endMs": 69427,
    "timestampMs": 68973,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "details",
    "startMs": 69510,
    "endMs": 70005,
    "timestampMs": 69757,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 70005,
    "endMs": 70288,
    "timestampMs": 70146,
    "confidence": 1.0
  },
  {
    "text": " effects",
    "startMs": 70288,
    "endMs": 70831,
    "timestampMs": 70559,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep08_s02_captions: Caption[] = [
  {
    "text": "在工程自动化与",
    "startMs": 97,
    "endMs": 1418,
    "timestampMs": 757,
    "confidence": 1.0
  },
  {
    "text": "审美选型阶段",
    "startMs": 1418,
    "endMs": 2467,
    "timestampMs": 1942,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "命令行工具",
    "startMs": 2880,
    "endMs": 3635,
    "timestampMs": 3257,
    "confidence": 1.0
  },
  {
    "text": "箱能帮你省",
    "startMs": 3635,
    "endMs": 4814,
    "timestampMs": 4224,
    "confidence": 1.0
  },
  {
    "text": "掉大量盲试时间",
    "startMs": 4814,
    "endMs": 5934,
    "timestampMs": 5374,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用",
    "startMs": 6474,
    "endMs": 6816,
    "timestampMs": 6645,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes media-treatment",
    "startMs": 6816,
    "endMs": 8927,
    "timestampMs": 7871,
    "confidence": 1.0
  },
  {
    "text": " 可以先探查",
    "startMs": 8927,
    "endMs": 9800,
    "timestampMs": 9363,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "画面曝光与",
    "startMs": 9823,
    "endMs": 10625,
    "timestampMs": 10224,
    "confidence": 1.0
  },
  {
    "text": "色偏再通过",
    "startMs": 10625,
    "endMs": 11745,
    "timestampMs": 11185,
    "confidence": 1.0
  },
  {
    "text": " --apply",
    "startMs": 11745,
    "endMs": 12335,
    "timestampMs": 12040,
    "confidence": 1.0
  },
  {
    "text": " 写入",
    "startMs": 12335,
    "endMs": 12724,
    "timestampMs": 12529,
    "confidence": 1.0
  },
  {
    "text": " data-color-grading",
    "startMs": 12724,
    "endMs": 13880,
    "timestampMs": 13302,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "更实用的是",
    "startMs": 14269,
    "endMs": 15436,
    "timestampMs": 14852,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes grade-compare",
    "startMs": 15436,
    "endMs": 17512,
    "timestampMs": 16474,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它能把同一",
    "startMs": 17866,
    "endMs": 18561,
    "timestampMs": 18213,
    "confidence": 1.0
  },
  {
    "text": "帧画面连同原片在内",
    "startMs": 18561,
    "endMs": 20059,
    "timestampMs": 19310,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一次性铺出最多",
    "startMs": 20171,
    "endMs": 21598,
    "timestampMs": 20884,
    "confidence": 1.0
  },
  {
    "text": " 16",
    "startMs": 21598,
    "endMs": 21999,
    "timestampMs": 21798,
    "confidence": 1.0
  },
  {
    "text": " 种调色方案的对照图",
    "startMs": 21999,
    "endMs": 23414,
    "timestampMs": 22706,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "让你肉眼拍",
    "startMs": 23744,
    "endMs": 24723,
    "timestampMs": 24233,
    "confidence": 1.0
  },
  {
    "text": "板后再落地",
    "startMs": 24723,
    "endMs": 25348,
    "timestampMs": 25035,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "视觉风格方面",
    "startMs": 25878,
    "endMs": 26928,
    "timestampMs": 26403,
    "confidence": 1.0
  },
  {
    "text": " 引擎内置",
    "startMs": 26928,
    "endMs": 27918,
    "timestampMs": 27423,
    "confidence": 1.0
  },
  {
    "text": " 18",
    "startMs": 27918,
    "endMs": 28213,
    "timestampMs": 28065,
    "confidence": 1.0
  },
  {
    "text": " 款非破坏性特效",
    "startMs": 28213,
    "endMs": 29581,
    "timestampMs": 28897,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "涵盖",
    "startMs": 29817,
    "endMs": 30183,
    "timestampMs": 30000,
    "confidence": 1.0
  },
  {
    "text": " Blur、",
    "startMs": 30183,
    "endMs": 30666,
    "timestampMs": 30424,
    "confidence": 1.0
  },
  {
    "text": "Pixelate、",
    "startMs": 30666,
    "endMs": 31621,
    "timestampMs": 31143,
    "confidence": 1.0
  },
  {
    "text": "Bloom",
    "startMs": 31621,
    "endMs": 32352,
    "timestampMs": 31986,
    "confidence": 1.0
  },
  {
    "text": "、半调网点",
    "startMs": 32352,
    "endMs": 33296,
    "timestampMs": 32824,
    "confidence": 1.0
  },
  {
    "text": " Halftone",
    "startMs": 33296,
    "endMs": 33921,
    "timestampMs": 33608,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "八种风格",
    "startMs": 34168,
    "endMs": 34911,
    "timestampMs": 34539,
    "confidence": 1.0
  },
  {
    "text": " ASCII",
    "startMs": 34911,
    "endMs": 35466,
    "timestampMs": 35188,
    "confidence": 1.0
  },
  {
    "text": " 字符画、",
    "startMs": 35466,
    "endMs": 36008,
    "timestampMs": 35737,
    "confidence": 1.0
  },
  {
    "text": "Kuwahara",
    "startMs": 36008,
    "endMs": 36975,
    "timestampMs": 36491,
    "confidence": 1.0
  },
  {
    "text": " 油画",
    "startMs": 36975,
    "endMs": 37376,
    "timestampMs": 37175,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及自带真实抖动与",
    "startMs": 37647,
    "endMs": 39121,
    "timestampMs": 38384,
    "confidence": 1.0
  },
  {
    "text": "色散的复古",
    "startMs": 39121,
    "endMs": 39899,
    "timestampMs": 39510,
    "confidence": 1.0
  },
  {
    "text": "模拟三剑客",
    "startMs": 39899,
    "endMs": 40619,
    "timestampMs": 40259,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Tape",
    "startMs": 40731,
    "endMs": 41073,
    "timestampMs": 40902,
    "confidence": 1.0
  },
  {
    "text": " 磁带磨损、",
    "startMs": 41073,
    "endMs": 41816,
    "timestampMs": 41444,
    "confidence": 1.0
  },
  {
    "text": "CRT",
    "startMs": 41816,
    "endMs": 42735,
    "timestampMs": 42275,
    "confidence": 1.0
  },
  {
    "text": " 显像管曲率与",
    "startMs": 42735,
    "endMs": 43832,
    "timestampMs": 43283,
    "confidence": 1.0
  },
  {
    "text": " Tube",
    "startMs": 43832,
    "endMs": 44174,
    "timestampMs": 44003,
    "confidence": 1.0
  },
  {
    "text": " 电子管失真",
    "startMs": 44174,
    "endMs": 44952,
    "timestampMs": 44563,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "记住两条导演心法",
    "startMs": 45495,
    "endMs": 46780,
    "timestampMs": 46137,
    "confidence": 1.0
  },
  {
    "text": " 一是对实拍人像",
    "startMs": 46780,
    "endMs": 48419,
    "timestampMs": 47599,
    "confidence": 1.0
  },
  {
    "text": " A-roll",
    "startMs": 48419,
    "endMs": 49009,
    "timestampMs": 48714,
    "confidence": 1.0
  },
  {
    "text": " 务必克制",
    "startMs": 49009,
    "endMs": 49740,
    "timestampMs": 49374,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "先校准再微调",
    "startMs": 49952,
    "endMs": 51226,
    "timestampMs": 50589,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "二是因为调色按像素",
    "startMs": 51603,
    "endMs": 53714,
    "timestampMs": 52658,
    "confidence": 1.0
  },
  {
    "text": "值而非坐标选区",
    "startMs": 53714,
    "endMs": 54988,
    "timestampMs": 54351,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "想只给人物",
    "startMs": 55235,
    "endMs": 56179,
    "timestampMs": 55707,
    "confidence": 1.0
  },
  {
    "text": "或只给背景局部调色",
    "startMs": 56179,
    "endMs": 57735,
    "timestampMs": 56957,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "标准解法是",
    "startMs": 57847,
    "endMs": 58956,
    "timestampMs": 58401,
    "confidence": 1.0
  },
  {
    "text": "用抠像拆成",
    "startMs": 58956,
    "endMs": 59828,
    "timestampMs": 59392,
    "confidence": 1.0
  },
  {
    "text": "多层分别加滤镜",
    "startMs": 59828,
    "endMs": 61279,
    "timestampMs": 60553,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep08_s03_captions: Caption[] = [
  {
    "text": "当",
    "startMs": 97,
    "endMs": 451,
    "timestampMs": 274,
    "confidence": 1.0
  },
  {
    "text": " CSS",
    "startMs": 451,
    "endMs": 1241,
    "timestampMs": 846,
    "confidence": 1.0
  },
  {
    "text": " 滤镜和",
    "startMs": 1241,
    "endMs": 1972,
    "timestampMs": 1606,
    "confidence": 1.0
  },
  {
    "text": " SVG",
    "startMs": 1972,
    "endMs": 2656,
    "timestampMs": 2314,
    "confidence": 1.0
  },
  {
    "text": " 都无法表达",
    "startMs": 2656,
    "endMs": 3458,
    "timestampMs": 3057,
    "confidence": 1.0
  },
  {
    "text": "逐像素扭曲、",
    "startMs": 3458,
    "endMs": 4354,
    "timestampMs": 3906,
    "confidence": 1.0
  },
  {
    "text": "置换贴图或",
    "startMs": 4354,
    "endMs": 5604,
    "timestampMs": 4979,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "分形噪波时",
    "startMs": 5616,
    "endMs": 6465,
    "timestampMs": 6040,
    "confidence": 1.0
  },
  {
    "text": " 就该祭出",
    "startMs": 6465,
    "endMs": 7243,
    "timestampMs": 6854,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 7243,
    "endMs": 8069,
    "timestampMs": 7656,
    "confidence": 1.0
  },
  {
    "text": " 的核武器",
    "startMs": 8069,
    "endMs": 8706,
    "timestampMs": 8387,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-vfx-chain",
    "startMs": 9048,
    "endMs": 10133,
    "timestampMs": 9590,
    "confidence": 1.0
  },
  {
    "text": " WebGL2",
    "startMs": 10133,
    "endMs": 10887,
    "timestampMs": 10510,
    "confidence": 1.0
  },
  {
    "text": " 特效链",
    "startMs": 10887,
    "endMs": 11335,
    "timestampMs": 11111,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它的",
    "startMs": 11875,
    "endMs": 12193,
    "timestampMs": 12034,
    "confidence": 1.0
  },
  {
    "text": " JSON",
    "startMs": 12193,
    "endMs": 12877,
    "timestampMs": 12535,
    "confidence": 1.0
  },
  {
    "text": " 结构与音频",
    "startMs": 12877,
    "endMs": 13762,
    "timestampMs": 13319,
    "confidence": 1.0
  },
  {
    "text": " data-fx-chain",
    "startMs": 13762,
    "endMs": 14823,
    "timestampMs": 14292,
    "confidence": 1.0
  },
  {
    "text": " 完全同构",
    "startMs": 14823,
    "endMs": 15578,
    "timestampMs": 15200,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "静态参数写在",
    "startMs": 15896,
    "endMs": 16863,
    "timestampMs": 16379,
    "confidence": 1.0
  },
  {
    "text": " JSON",
    "startMs": 16863,
    "endMs": 17535,
    "timestampMs": 17199,
    "confidence": 1.0
  },
  {
    "text": " 的",
    "startMs": 17535,
    "endMs": 17653,
    "timestampMs": 17594,
    "confidence": 1.0
  },
  {
    "text": " params",
    "startMs": 17653,
    "endMs": 18160,
    "timestampMs": 17906,
    "confidence": 1.0
  },
  {
    "text": " 中",
    "startMs": 18160,
    "endMs": 18443,
    "timestampMs": 18301,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "动态参数则写成",
    "startMs": 18785,
    "endMs": 20130,
    "timestampMs": 19457,
    "confidence": 1.0
  },
  {
    "text": " --vfx-id-key",
    "startMs": 20130,
    "endMs": 21722,
    "timestampMs": 20926,
    "confidence": 1.0
  },
  {
    "text": " CSS",
    "startMs": 21722,
    "endMs": 21762,
    "timestampMs": 21742,
    "confidence": 1.0
  },
  {
    "text": " 自定义属性交给",
    "startMs": 21762,
    "endMs": 23090,
    "timestampMs": 22426,
    "confidence": 1.0
  },
  {
    "text": " GSAP",
    "startMs": 23090,
    "endMs": 23915,
    "timestampMs": 23502,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "逐帧驱动",
    "startMs": 23927,
    "endMs": 24505,
    "timestampMs": 24216,
    "confidence": 1.0
  },
  {
    "text": " 并且只在时间与参数",
    "startMs": 24505,
    "endMs": 26197,
    "timestampMs": 25351,
    "confidence": 1.0
  },
  {
    "text": "上确定性重绘",
    "startMs": 26197,
    "endMs": 27258,
    "timestampMs": 26727,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "任意倒放寻",
    "startMs": 27588,
    "endMs": 28650,
    "timestampMs": 28119,
    "confidence": 1.0
  },
  {
    "text": "址都能产出",
    "startMs": 28650,
    "endMs": 29381,
    "timestampMs": 29015,
    "confidence": 1.0
  },
  {
    "text": "字节一致的画面",
    "startMs": 29381,
    "endMs": 30418,
    "timestampMs": 29899,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "每个内核会",
    "startMs": 30961,
    "endMs": 31609,
    "timestampMs": 31285,
    "confidence": 1.0
  },
  {
    "text": "声明自己的捕获模式",
    "startMs": 31609,
    "endMs": 32942,
    "timestampMs": 32275,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "none",
    "startMs": 33213,
    "endMs": 33555,
    "timestampMs": 33384,
    "confidence": 1.0
  },
  {
    "text": " 类如",
    "startMs": 33555,
    "endMs": 33885,
    "timestampMs": 33720,
    "confidence": 1.0
  },
  {
    "text": " fractal-noise",
    "startMs": 33885,
    "endMs": 34569,
    "timestampMs": 34227,
    "confidence": 1.0
  },
  {
    "text": " 不读原像素、",
    "startMs": 34569,
    "endMs": 35359,
    "timestampMs": 34964,
    "confidence": 1.0
  },
  {
    "text": "允许并发渲染",
    "startMs": 35359,
    "endMs": 36645,
    "timestampMs": 36002,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "self",
    "startMs": 36975,
    "endMs": 37423,
    "timestampMs": 37199,
    "confidence": 1.0
  },
  {
    "text": " 类如",
    "startMs": 37423,
    "endMs": 37824,
    "timestampMs": 37623,
    "confidence": 1.0
  },
  {
    "text": " wave-warp",
    "startMs": 37824,
    "endMs": 38567,
    "timestampMs": 38195,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 38567,
    "endMs": 38826,
    "timestampMs": 38696,
    "confidence": 1.0
  },
  {
    "text": " displacement-map",
    "startMs": 38826,
    "endMs": 39782,
    "timestampMs": 39304,
    "confidence": 1.0
  },
  {
    "text": " 会通过浏览器",
    "startMs": 39782,
    "endMs": 40737,
    "timestampMs": 40259,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HTML-in-Canvas",
    "startMs": 40819,
    "endMs": 41963,
    "timestampMs": 41391,
    "confidence": 1.0
  },
  {
    "text": " 的",
    "startMs": 41963,
    "endMs": 42223,
    "timestampMs": 42093,
    "confidence": 1.0
  },
  {
    "text": " drawElementImage",
    "startMs": 42223,
    "endMs": 43414,
    "timestampMs": 42818,
    "confidence": 1.0
  },
  {
    "text": " 捕获自身",
    "startMs": 43414,
    "endMs": 44192,
    "timestampMs": 43803,
    "confidence": 1.0
  },
  {
    "text": " DOM",
    "startMs": 44192,
    "endMs": 44746,
    "timestampMs": 44469,
    "confidence": 1.0
  },
  {
    "text": " 像素",
    "startMs": 44746,
    "endMs": 45112,
    "timestampMs": 44929,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并自动锁定",
    "startMs": 45224,
    "endMs": 46084,
    "timestampMs": 45654,
    "confidence": 1.0
  },
  {
    "text": "单工作线程防并",
    "startMs": 46084,
    "endMs": 47405,
    "timestampMs": 46744,
    "confidence": 1.0
  },
  {
    "text": "发竞态",
    "startMs": 47405,
    "endMs": 47806,
    "timestampMs": 47605,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "未来还将支持捕获下",
    "startMs": 48136,
    "endMs": 49846,
    "timestampMs": 48991,
    "confidence": 1.0
  },
  {
    "text": "层画面的",
    "startMs": 49846,
    "endMs": 50400,
    "timestampMs": 50123,
    "confidence": 1.0
  },
  {
    "text": " backdrop",
    "startMs": 50400,
    "endMs": 51061,
    "timestampMs": 50730,
    "confidence": 1.0
  },
  {
    "text": " 模式",
    "startMs": 51061,
    "endMs": 51497,
    "timestampMs": 51279,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "手写捕获结构",
    "startMs": 52040,
    "endMs": 53054,
    "timestampMs": 52547,
    "confidence": 1.0
  },
  {
    "text": " canvas",
    "startMs": 53054,
    "endMs": 53667,
    "timestampMs": 53360,
    "confidence": 1.0
  },
  {
    "text": " layoutsubtree",
    "startMs": 53667,
    "endMs": 54575,
    "timestampMs": 54121,
    "confidence": 1.0
  },
  {
    "text": " class",
    "startMs": 54575,
    "endMs": 55058,
    "timestampMs": 54816,
    "confidence": 1.0
  },
  {
    "text": " hf-vfx-src",
    "startMs": 55058,
    "endMs": 56485,
    "timestampMs": 55771,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "时务必牢记致命坑",
    "startMs": 56580,
    "endMs": 58030,
    "timestampMs": 57305,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "其唯一直接子元素.",
    "startMs": 58337,
    "endMs": 59964,
    "timestampMs": 59150,
    "confidence": 1.0
  },
  {
    "text": " hf-vfx-in",
    "startMs": 59964,
    "endMs": 61509,
    "timestampMs": 60736,
    "confidence": 1.0
  },
  {
    "text": " 必须写死明确的像素",
    "startMs": 61509,
    "endMs": 62924,
    "timestampMs": 62216,
    "confidence": 1.0
  },
  {
    "text": " width",
    "startMs": 62924,
    "endMs": 63325,
    "timestampMs": 63124,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "与",
    "startMs": 63408,
    "endMs": 63514,
    "timestampMs": 63461,
    "confidence": 1.0
  },
  {
    "text": " height",
    "startMs": 63514,
    "endMs": 63903,
    "timestampMs": 63708,
    "confidence": 1.0
  },
  {
    "text": " 如果偷懒用",
    "startMs": 63903,
    "endMs": 64964,
    "timestampMs": 64433,
    "confidence": 1.0
  },
  {
    "text": " inset",
    "startMs": 64964,
    "endMs": 65436,
    "timestampMs": 65200,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 65436,
    "endMs": 65707,
    "timestampMs": 65571,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "元素会塌缩成",
    "startMs": 65819,
    "endMs": 66916,
    "timestampMs": 66367,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 66916,
    "endMs": 67100,
    "timestampMs": 67008,
    "confidence": 1.0
  },
  {
    "text": " 乘",
    "startMs": 67100,
    "endMs": 67368,
    "timestampMs": 67234,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 67368,
    "endMs": 67529,
    "timestampMs": 67448,
    "confidence": 1.0
  },
  {
    "text": " 导致画面静默消失！",
    "startMs": 67529,
    "endMs": 69050,
    "timestampMs": 68289,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep08_s04_captions: Caption[] = [
  {
    "text": "高速飞过的",
    "startMs": 97,
    "endMs": 793,
    "timestampMs": 445,
    "confidence": 1.0
  },
  {
    "text": "卡片或甩镜",
    "startMs": 793,
    "endMs": 1937,
    "timestampMs": 1365,
    "confidence": 1.0
  },
  {
    "text": "标题为什么",
    "startMs": 1937,
    "endMs": 2975,
    "timestampMs": 2456,
    "confidence": 1.0
  },
  {
    "text": "有时显得发涩？",
    "startMs": 2975,
    "endMs": 3883,
    "timestampMs": 3429,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "因为少了真",
    "startMs": 4422,
    "endMs": 5307,
    "timestampMs": 4864,
    "confidence": 1.0
  },
  {
    "text": "实摄像机的快门拖影",
    "startMs": 5307,
    "endMs": 6486,
    "timestampMs": 5896,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在",
    "startMs": 7028,
    "endMs": 7252,
    "timestampMs": 7140,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 7252,
    "endMs": 7995,
    "timestampMs": 7623,
    "confidence": 1.0
  },
  {
    "text": " 根节点加上",
    "startMs": 7995,
    "endMs": 8986,
    "timestampMs": 8490,
    "confidence": 1.0
  },
  {
    "text": " data-motion-blur",
    "startMs": 8986,
    "endMs": 9847,
    "timestampMs": 9416,
    "confidence": 1.0
  },
  {
    "text": " on",
    "startMs": 9847,
    "endMs": 10141,
    "timestampMs": 9994,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "即可一键开",
    "startMs": 10354,
    "endMs": 11215,
    "timestampMs": 10784,
    "confidence": 1.0
  },
  {
    "text": "启真快门运动模糊",
    "startMs": 11215,
    "endMs": 12323,
    "timestampMs": 11769,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并通过",
    "startMs": 12642,
    "endMs": 13137,
    "timestampMs": 12889,
    "confidence": 1.0
  },
  {
    "text": " shutter",
    "startMs": 13137,
    "endMs": 13550,
    "timestampMs": 13343,
    "confidence": 1.0
  },
  {
    "text": " 快门角度默认",
    "startMs": 13550,
    "endMs": 14682,
    "timestampMs": 14116,
    "confidence": 1.0
  },
  {
    "text": " 240",
    "startMs": 14682,
    "endMs": 15137,
    "timestampMs": 14909,
    "confidence": 1.0
  },
  {
    "text": " 度、",
    "startMs": 15137,
    "endMs": 15377,
    "timestampMs": 15257,
    "confidence": 1.0
  },
  {
    "text": "phase",
    "startMs": 15377,
    "endMs": 16073,
    "timestampMs": 15725,
    "confidence": 1.0
  },
  {
    "text": " 快门相位与",
    "startMs": 16073,
    "endMs": 16993,
    "timestampMs": 16533,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "samples",
    "startMs": 17005,
    "endMs": 17453,
    "timestampMs": 17229,
    "confidence": 1.0
  },
  {
    "text": " 采样数精准控感",
    "startMs": 17453,
    "endMs": 18620,
    "timestampMs": 18036,
    "confidence": 1.0
  },
  {
    "text": " Preview",
    "startMs": 18620,
    "endMs": 19399,
    "timestampMs": 19009,
    "confidence": 1.0
  },
  {
    "text": " 与分布式渲",
    "startMs": 19399,
    "endMs": 20389,
    "timestampMs": 19894,
    "confidence": 1.0
  },
  {
    "text": "染自动同步",
    "startMs": 20389,
    "endMs": 21014,
    "timestampMs": 20701,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "需要锐利无",
    "startMs": 21126,
    "endMs": 21857,
    "timestampMs": 21491,
    "confidence": 1.0
  },
  {
    "text": "模糊输出时",
    "startMs": 21857,
    "endMs": 22659,
    "timestampMs": 22258,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需命令行传",
    "startMs": 22895,
    "endMs": 24062,
    "timestampMs": 23478,
    "confidence": 1.0
  },
  {
    "text": " --page-motion-blur",
    "startMs": 24062,
    "endMs": 25513,
    "timestampMs": 24787,
    "confidence": 1.0
  },
  {
    "text": " off",
    "startMs": 25513,
    "endMs": 25553,
    "timestampMs": 25533,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "底层提供两",
    "startMs": 26055,
    "endMs": 27105,
    "timestampMs": 26580,
    "confidence": 1.0
  },
  {
    "text": "套绘制层级",
    "startMs": 27105,
    "endMs": 27954,
    "timestampMs": 27529,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "默认的",
    "startMs": 28308,
    "endMs": 28767,
    "timestampMs": 28537,
    "confidence": 1.0
  },
  {
    "text": " filter",
    "startMs": 28767,
    "endMs": 29216,
    "timestampMs": 28991,
    "confidence": 1.0
  },
  {
    "text": " 层级通过",
    "startMs": 29216,
    "endMs": 29900,
    "timestampMs": 29558,
    "confidence": 1.0
  },
  {
    "text": " SVG",
    "startMs": 29900,
    "endMs": 30701,
    "timestampMs": 30300,
    "confidence": 1.0
  },
  {
    "text": " 多重残影高",
    "startMs": 30701,
    "endMs": 31716,
    "timestampMs": 31208,
    "confidence": 1.0
  },
  {
    "text": "效兼容所有",
    "startMs": 31716,
    "endMs": 32305,
    "timestampMs": 32010,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Chrome",
    "startMs": 32305,
    "endMs": 32659,
    "timestampMs": 32482,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 32659,
    "endMs": 32859,
    "timestampMs": 32759,
    "confidence": 1.0
  },
  {
    "text": " WebGL",
    "startMs": 32859,
    "endMs": 33402,
    "timestampMs": 33130,
    "confidence": 1.0
  },
  {
    "text": " 画布",
    "startMs": 33402,
    "endMs": 33744,
    "timestampMs": 33573,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而开启",
    "startMs": 33856,
    "endMs": 34327,
    "timestampMs": 34091,
    "confidence": 1.0
  },
  {
    "text": " data-motion-blur-tier",
    "startMs": 34327,
    "endMs": 35483,
    "timestampMs": 34905,
    "confidence": 1.0
  },
  {
    "text": " capture",
    "startMs": 35483,
    "endMs": 36108,
    "timestampMs": 35795,
    "confidence": 1.0
  },
  {
    "text": " 则利用",
    "startMs": 36108,
    "endMs": 36733,
    "timestampMs": 36420,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HTML-in-Canvas",
    "startMs": 36816,
    "endMs": 38160,
    "timestampMs": 37488,
    "confidence": 1.0
  },
  {
    "text": " 真正沿旋转",
    "startMs": 38160,
    "endMs": 39174,
    "timestampMs": 38667,
    "confidence": 1.0
  },
  {
    "text": "圆弧与缩放",
    "startMs": 39174,
    "endMs": 40188,
    "timestampMs": 39681,
    "confidence": 1.0
  },
  {
    "text": "射线拉出物理拖影",
    "startMs": 40188,
    "endMs": 41639,
    "timestampMs": 40913,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "但一定要避",
    "startMs": 42181,
    "endMs": 42900,
    "timestampMs": 42540,
    "confidence": 1.0
  },
  {
    "text": "开两个硬性边界",
    "startMs": 42900,
    "endMs": 43820,
    "timestampMs": 43360,
    "confidence": 1.0
  },
  {
    "text": " 第一",
    "startMs": 43820,
    "endMs": 44504,
    "timestampMs": 44162,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Motion",
    "startMs": 44799,
    "endMs": 45176,
    "timestampMs": 44987,
    "confidence": 1.0
  },
  {
    "text": " Blur",
    "startMs": 45176,
    "endMs": 45448,
    "timestampMs": 45312,
    "confidence": 1.0
  },
  {
    "text": " 的",
    "startMs": 45448,
    "endMs": 45554,
    "timestampMs": 45501,
    "confidence": 1.0
  },
  {
    "text": " capture",
    "startMs": 45554,
    "endMs": 46084,
    "timestampMs": 45819,
    "confidence": 1.0
  },
  {
    "text": " 层级若遇到嵌套的",
    "startMs": 46084,
    "endMs": 47594,
    "timestampMs": 46839,
    "confidence": 1.0
  },
  {
    "text": " VFX",
    "startMs": 47594,
    "endMs": 48408,
    "timestampMs": 48001,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "捕获画布会",
    "startMs": 48419,
    "endMs": 49174,
    "timestampMs": 48796,
    "confidence": 1.0
  },
  {
    "text": "导致渲染器挂起",
    "startMs": 49174,
    "endMs": 50294,
    "timestampMs": 49734,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "引擎会自动回退至",
    "startMs": 50625,
    "endMs": 52040,
    "timestampMs": 51332,
    "confidence": 1.0
  },
  {
    "text": " filter",
    "startMs": 52040,
    "endMs": 52464,
    "timestampMs": 52252,
    "confidence": 1.0
  },
  {
    "text": " 层级",
    "startMs": 52464,
    "endMs": 52912,
    "timestampMs": 52688,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二",
    "startMs": 53231,
    "endMs": 53561,
    "timestampMs": 53396,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Catalog",
    "startMs": 53673,
    "endMs": 54180,
    "timestampMs": 53926,
    "confidence": 1.0
  },
  {
    "text": " 中的",
    "startMs": 54180,
    "endMs": 54522,
    "timestampMs": 54351,
    "confidence": 1.0
  },
  {
    "text": " liquid-glass-notification",
    "startMs": 54522,
    "endMs": 56243,
    "timestampMs": 55382,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "液态玻璃组件强依赖",
    "startMs": 56267,
    "endMs": 57847,
    "timestampMs": 57057,
    "confidence": 1.0
  },
  {
    "text": " WebGPU",
    "startMs": 57847,
    "endMs": 58602,
    "timestampMs": 58224,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在无",
    "startMs": 58838,
    "endMs": 59215,
    "timestampMs": 59026,
    "confidence": 1.0
  },
  {
    "text": " WebGPU",
    "startMs": 59215,
    "endMs": 59710,
    "timestampMs": 59462,
    "confidence": 1.0
  },
  {
    "text": " 环境下会静",
    "startMs": 59710,
    "endMs": 60972,
    "timestampMs": 60341,
    "confidence": 1.0
  },
  {
    "text": "默降级退出",
    "startMs": 60972,
    "endMs": 61703,
    "timestampMs": 61337,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep08_s05_captions: Caption[] = [
  {
    "text": "本集压轴来看真",
    "startMs": 97,
    "endMs": 1312,
    "timestampMs": 704,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 1312,
    "endMs": 1489,
    "timestampMs": 1400,
    "confidence": 1.0
  },
  {
    "text": " D",
    "startMs": 1489,
    "endMs": 1583,
    "timestampMs": 1536,
    "confidence": 1.0
  },
  {
    "text": " 场景与",
    "startMs": 1583,
    "endMs": 2326,
    "timestampMs": 1954,
    "confidence": 1.0
  },
  {
    "text": " GPU",
    "startMs": 2326,
    "endMs": 2715,
    "timestampMs": 2520,
    "confidence": 1.0
  },
  {
    "text": " 着色器转场",
    "startMs": 2715,
    "endMs": 3552,
    "timestampMs": 3133,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "很多新手做",
    "startMs": 4092,
    "endMs": 5118,
    "timestampMs": 4605,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 5118,
    "endMs": 5366,
    "timestampMs": 5242,
    "confidence": 1.0
  },
  {
    "text": " D",
    "startMs": 5366,
    "endMs": 5472,
    "timestampMs": 5419,
    "confidence": 1.0
  },
  {
    "text": " 翻转产品或",
    "startMs": 5472,
    "endMs": 6509,
    "timestampMs": 5990,
    "confidence": 1.0
  },
  {
    "text": "镜头环绕时直接让",
    "startMs": 6509,
    "endMs": 8042,
    "timestampMs": 7275,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 8042,
    "endMs": 8679,
    "timestampMs": 8360,
    "confidence": 1.0
  },
  {
    "text": " 写",
    "startMs": 8679,
    "endMs": 8950,
    "timestampMs": 8814,
    "confidence": 1.0
  },
  {
    "text": " CSS",
    "startMs": 8950,
    "endMs": 9564,
    "timestampMs": 9257,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "perspective",
    "startMs": 9575,
    "endMs": 10307,
    "timestampMs": 9941,
    "confidence": 1.0
  },
  {
    "text": " 结果打光生硬、",
    "startMs": 10307,
    "endMs": 11627,
    "timestampMs": 10967,
    "confidence": 1.0
  },
  {
    "text": "深度遮挡处处穿帮",
    "startMs": 11627,
    "endMs": 13432,
    "timestampMs": 12529,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "官方文档反复强调",
    "startMs": 13656,
    "endMs": 15059,
    "timestampMs": 14357,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "凡是涉及真实纵深、",
    "startMs": 15283,
    "endMs": 16769,
    "timestampMs": 16026,
    "confidence": 1.0
  },
  {
    "text": "动态光照或",
    "startMs": 16769,
    "endMs": 17918,
    "timestampMs": 17343,
    "confidence": 1.0
  },
  {
    "text": "自由机位的",
    "startMs": 17918,
    "endMs": 18567,
    "timestampMs": 18242,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 18567,
    "endMs": 18803,
    "timestampMs": 18685,
    "confidence": 1.0
  },
  {
    "text": " D",
    "startMs": 18803,
    "endMs": 18897,
    "timestampMs": 18850,
    "confidence": 1.0
  },
  {
    "text": " 镜头",
    "startMs": 18897,
    "endMs": 19357,
    "timestampMs": 19127,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "必须在",
    "startMs": 19546,
    "endMs": 19935,
    "timestampMs": 19740,
    "confidence": 1.0
  },
  {
    "text": " Prompt",
    "startMs": 19935,
    "endMs": 20418,
    "timestampMs": 20176,
    "confidence": 1.0
  },
  {
    "text": " 中明确指定",
    "startMs": 20418,
    "endMs": 21492,
    "timestampMs": 20955,
    "confidence": 1.0
  },
  {
    "text": " Three.js",
    "startMs": 21492,
    "endMs": 22329,
    "timestampMs": 21910,
    "confidence": 1.0
  },
  {
    "text": " via",
    "startMs": 22329,
    "endMs": 22753,
    "timestampMs": 22541,
    "confidence": 1.0
  },
  {
    "text": " the",
    "startMs": 22753,
    "endMs": 22942,
    "timestampMs": 22847,
    "confidence": 1.0
  },
  {
    "text": " adapter",
    "startMs": 22942,
    "endMs": 23579,
    "timestampMs": 23260,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "通过帧适配器把",
    "startMs": 23885,
    "endMs": 25253,
    "timestampMs": 24569,
    "confidence": 1.0
  },
  {
    "text": " Three.js",
    "startMs": 25253,
    "endMs": 25878,
    "timestampMs": 25565,
    "confidence": 1.0
  },
  {
    "text": " 渲染时钟锁",
    "startMs": 25878,
    "endMs": 27069,
    "timestampMs": 26473,
    "confidence": 1.0
  },
  {
    "text": "死到确定性帧号上",
    "startMs": 27069,
    "endMs": 28449,
    "timestampMs": 27759,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "既支持复杂材质光影",
    "startMs": 28650,
    "endMs": 30289,
    "timestampMs": 29469,
    "confidence": 1.0
  },
  {
    "text": " 又能与",
    "startMs": 30289,
    "endMs": 30754,
    "timestampMs": 30521,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 30754,
    "endMs": 31485,
    "timestampMs": 31119,
    "confidence": 1.0
  },
  {
    "text": " 字幕层无缝合成",
    "startMs": 31485,
    "endMs": 32818,
    "timestampMs": 32151,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "场景切换需",
    "startMs": 33360,
    "endMs": 34587,
    "timestampMs": 33973,
    "confidence": 1.0
  },
  {
    "text": "要视觉高光时",
    "startMs": 34587,
    "endMs": 35495,
    "timestampMs": 35041,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "直接引入",
    "startMs": 35660,
    "endMs": 36332,
    "timestampMs": 35996,
    "confidence": 1.0
  },
  {
    "text": " @hyperframes/shader-transitions",
    "startMs": 36332,
    "endMs": 38962,
    "timestampMs": 37647,
    "confidence": 1.0
  },
  {
    "text": " 官方包",
    "startMs": 38962,
    "endMs": 39492,
    "timestampMs": 39227,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它通过",
    "startMs": 39823,
    "endMs": 40377,
    "timestampMs": 40100,
    "confidence": 1.0
  },
  {
    "text": " SHADER_NAMES",
    "startMs": 40377,
    "endMs": 42051,
    "timestampMs": 41214,
    "confidence": 1.0
  },
  {
    "text": " 内置了整整",
    "startMs": 42051,
    "endMs": 42830,
    "timestampMs": 42440,
    "confidence": 1.0
  },
  {
    "text": " 14",
    "startMs": 42830,
    "endMs": 43148,
    "timestampMs": 42989,
    "confidence": 1.0
  },
  {
    "text": " 款",
    "startMs": 43148,
    "endMs": 43360,
    "timestampMs": 43254,
    "confidence": 1.0
  },
  {
    "text": " WebGL",
    "startMs": 43360,
    "endMs": 43915,
    "timestampMs": 43637,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "片段着色器转场",
    "startMs": 43926,
    "endMs": 45129,
    "timestampMs": 44527,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "涵盖",
    "startMs": 45377,
    "endMs": 45766,
    "timestampMs": 45571,
    "confidence": 1.0
  },
  {
    "text": " domain-warp、",
    "startMs": 45766,
    "endMs": 46509,
    "timestampMs": 46137,
    "confidence": 1.0
  },
  {
    "text": "ridged-burn、",
    "startMs": 46509,
    "endMs": 47441,
    "timestampMs": 46975,
    "confidence": 1.0
  },
  {
    "text": "whip-pan、",
    "startMs": 47441,
    "endMs": 48207,
    "timestampMs": 47824,
    "confidence": 1.0
  },
  {
    "text": "sdf-iris",
    "startMs": 48207,
    "endMs": 49357,
    "timestampMs": 48782,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "gravitational-lens、",
    "startMs": 49569,
    "endMs": 50642,
    "timestampMs": 50105,
    "confidence": 1.0
  },
  {
    "text": "chromatic-split",
    "startMs": 50642,
    "endMs": 51892,
    "timestampMs": 51267,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 51892,
    "endMs": 52104,
    "timestampMs": 51998,
    "confidence": 1.0
  },
  {
    "text": " glitch",
    "startMs": 52104,
    "endMs": 52505,
    "timestampMs": 52304,
    "confidence": 1.0
  },
  {
    "text": " 等",
    "startMs": 52505,
    "endMs": 52694,
    "timestampMs": 52599,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并在渲染期",
    "startMs": 52942,
    "endMs": 53861,
    "timestampMs": 53401,
    "confidence": 1.0
  },
  {
    "text": "启用确定性的",
    "startMs": 53861,
    "endMs": 54828,
    "timestampMs": 54344,
    "confidence": 1.0
  },
  {
    "text": "页内合成器",
    "startMs": 54828,
    "endMs": 55913,
    "timestampMs": 55370,
    "confidence": 1.0
  },
  {
    "text": " page-side",
    "startMs": 55913,
    "endMs": 56503,
    "timestampMs": 56208,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "compositing",
    "startMs": 56515,
    "endMs": 57116,
    "timestampMs": 56815,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "唯一要留意的是",
    "startMs": 57647,
    "endMs": 58661,
    "timestampMs": 58154,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "页内着色器",
    "startMs": 59038,
    "endMs": 59805,
    "timestampMs": 59421,
    "confidence": 1.0
  },
  {
    "text": "转场若与捕获型",
    "startMs": 59805,
    "endMs": 61291,
    "timestampMs": 60548,
    "confidence": 1.0
  },
  {
    "text": " data-vfx-chain",
    "startMs": 61291,
    "endMs": 62493,
    "timestampMs": 61892,
    "confidence": 1.0
  },
  {
    "text": " 同屏混用",
    "startMs": 62493,
    "endMs": 63201,
    "timestampMs": 62847,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "转场窗口外",
    "startMs": 63543,
    "endMs": 64427,
    "timestampMs": 63985,
    "confidence": 1.0
  },
  {
    "text": "可能出现旧纹理残留",
    "startMs": 64427,
    "endMs": 66055,
    "timestampMs": 65241,
    "confidence": 1.0
  },
  {
    "text": " 规划镜头时",
    "startMs": 66055,
    "endMs": 67187,
    "timestampMs": 66621,
    "confidence": 1.0
  },
  {
    "text": "建议错开使用",
    "startMs": 67187,
    "endMs": 68248,
    "timestampMs": 67717,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
