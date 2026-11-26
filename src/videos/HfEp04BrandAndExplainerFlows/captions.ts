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

export const EP04_TOTAL_FRAMES = 9592;

export const EP04_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp04BrandAndExplainerFlows/ep04_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1974,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1908,
    "voiceDurationMs": 63600
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp04BrandAndExplainerFlows/ep04_s02_voice.mp3",
    "fromFrame": 1974,
    "durationInFrames": 1788,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1734,
    "voiceDurationMs": 57768
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp04BrandAndExplainerFlows/ep04_s03_voice.mp3",
    "fromFrame": 3762,
    "durationInFrames": 1839,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1785,
    "voiceDurationMs": 59472
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp04BrandAndExplainerFlows/ep04_s04_voice.mp3",
    "fromFrame": 5601,
    "durationInFrames": 2191,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 2137,
    "voiceDurationMs": 71232
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp04BrandAndExplainerFlows/ep04_s05_voice.mp3",
    "fromFrame": 7792,
    "durationInFrames": 1800,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1740,
    "voiceDurationMs": 57984
  }
};

export const ep04_s01_captions: Caption[] = [
  {
    "text": "欢迎来到",
    "startMs": 97,
    "endMs": 887,
    "timestampMs": 492,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 887,
    "endMs": 1937,
    "timestampMs": 1412,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第四集",
    "startMs": 1937,
    "endMs": 3281,
    "timestampMs": 2609,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "前两集我们",
    "startMs": 3809,
    "endMs": 4800,
    "timestampMs": 4304,
    "confidence": 1.0
  },
  {
    "text": "掌握了桌面端和",
    "startMs": 4800,
    "endMs": 5873,
    "timestampMs": 5336,
    "confidence": 1.0
  },
  {
    "text": "浏览器双编辑器",
    "startMs": 5873,
    "endMs": 7087,
    "timestampMs": 6480,
    "confidence": 1.0
  },
  {
    "text": " 从这一集开始",
    "startMs": 7087,
    "endMs": 8467,
    "timestampMs": 7777,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "我们正式进入十大",
    "startMs": 8762,
    "endMs": 10236,
    "timestampMs": 9499,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 10236,
    "endMs": 10731,
    "timestampMs": 10483,
    "confidence": 1.0
  },
  {
    "text": " 创作工作流实战",
    "startMs": 10731,
    "endMs": 11781,
    "timestampMs": 11256,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在终端里用",
    "startMs": 12323,
    "endMs": 13420,
    "timestampMs": 12871,
    "confidence": 1.0
  },
  {
    "text": " /hyperframes",
    "startMs": 13420,
    "endMs": 14269,
    "timestampMs": 13844,
    "confidence": 1.0
  },
  {
    "text": " 发起请求前",
    "startMs": 14269,
    "endMs": 15295,
    "timestampMs": 14782,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一步永远",
    "startMs": 15696,
    "endMs": 16498,
    "timestampMs": 16097,
    "confidence": 1.0
  },
  {
    "text": "是按手头输",
    "startMs": 16498,
    "endMs": 17406,
    "timestampMs": 16952,
    "confidence": 1.0
  },
  {
    "text": "入源选对工作流",
    "startMs": 17406,
    "endMs": 18585,
    "timestampMs": 17995,
    "confidence": 1.0
  },
  {
    "text": " 有网址走产品发布",
    "startMs": 18585,
    "endMs": 20059,
    "timestampMs": 19322,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "有文稿走无真人科普",
    "startMs": 20224,
    "endMs": 21675,
    "timestampMs": 20949,
    "confidence": 1.0
  },
  {
    "text": " 有设计稿走",
    "startMs": 21675,
    "endMs": 22889,
    "timestampMs": 22282,
    "confidence": 1.0
  },
  {
    "text": " Figma",
    "startMs": 22889,
    "endMs": 23278,
    "timestampMs": 23083,
    "confidence": 1.0
  },
  {
    "text": " 导入",
    "startMs": 23278,
    "endMs": 23632,
    "timestampMs": 23455,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "先看一号王牌工作流",
    "startMs": 24175,
    "endMs": 25766,
    "timestampMs": 24970,
    "confidence": 1.0
  },
  {
    "text": " Product",
    "startMs": 25766,
    "endMs": 26509,
    "timestampMs": 26137,
    "confidence": 1.0
  },
  {
    "text": " Launch",
    "startMs": 26509,
    "endMs": 26863,
    "timestampMs": 26686,
    "confidence": 1.0
  },
  {
    "text": " 产品发布大片",
    "startMs": 26863,
    "endMs": 27795,
    "timestampMs": 27329,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "你只需粘贴产品官网",
    "startMs": 28337,
    "endMs": 29823,
    "timestampMs": 29080,
    "confidence": 1.0
  },
  {
    "text": " URL",
    "startMs": 29823,
    "endMs": 30590,
    "timestampMs": 30206,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Agent",
    "startMs": 30814,
    "endMs": 31309,
    "timestampMs": 31061,
    "confidence": 1.0
  },
  {
    "text": " 会自动抓取",
    "startMs": 31309,
    "endMs": 32288,
    "timestampMs": 31798,
    "confidence": 1.0
  },
  {
    "text": "真实界面截图、",
    "startMs": 32288,
    "endMs": 33373,
    "timestampMs": 32830,
    "confidence": 1.0
  },
  {
    "text": "提取站点的",
    "startMs": 33373,
    "endMs": 34375,
    "timestampMs": 33874,
    "confidence": 1.0
  },
  {
    "text": "调色板与字体",
    "startMs": 34375,
    "endMs": 35448,
    "timestampMs": 34911,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而不是凭空捏造假",
    "startMs": 35731,
    "endMs": 37052,
    "timestampMs": 36391,
    "confidence": 1.0
  },
  {
    "text": " UI",
    "startMs": 37052,
    "endMs": 37559,
    "timestampMs": 37305,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "高质量发布",
    "startMs": 38090,
    "endMs": 39033,
    "timestampMs": 38561,
    "confidence": 1.0
  },
  {
    "text": "片必须明确四件事",
    "startMs": 39033,
    "endMs": 40377,
    "timestampMs": 39705,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "采用",
    "startMs": 40637,
    "endMs": 41014,
    "timestampMs": 40825,
    "confidence": 1.0
  },
  {
    "text": " Hook",
    "startMs": 41014,
    "endMs": 41344,
    "timestampMs": 41179,
    "confidence": 1.0
  },
  {
    "text": " 抛痛点、",
    "startMs": 41344,
    "endMs": 41887,
    "timestampMs": 41615,
    "confidence": 1.0
  },
  {
    "text": "3",
    "startMs": 41887,
    "endMs": 42465,
    "timestampMs": 42176,
    "confidence": 1.0
  },
  {
    "text": " 个带字幕的",
    "startMs": 42465,
    "endMs": 43031,
    "timestampMs": 42748,
    "confidence": 1.0
  },
  {
    "text": " Feature",
    "startMs": 43031,
    "endMs": 43384,
    "timestampMs": 43207,
    "confidence": 1.0
  },
  {
    "text": " Beats",
    "startMs": 43384,
    "endMs": 43750,
    "timestampMs": 43567,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "展示实证、",
    "startMs": 43774,
    "endMs": 44469,
    "timestampMs": 44121,
    "confidence": 1.0
  },
  {
    "text": "加品牌尾卡",
    "startMs": 44469,
    "endMs": 45625,
    "timestampMs": 45047,
    "confidence": 1.0
  },
  {
    "text": " CTA",
    "startMs": 45625,
    "endMs": 45979,
    "timestampMs": 45802,
    "confidence": 1.0
  },
  {
    "text": " 的标准结构",
    "startMs": 45979,
    "endMs": 46769,
    "timestampMs": 46374,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "把背景音乐限制在",
    "startMs": 47075,
    "endMs": 48491,
    "timestampMs": 47783,
    "confidence": 1.0
  },
  {
    "text": " -18",
    "startMs": 48491,
    "endMs": 48864,
    "timestampMs": 48677,
    "confidence": 1.0
  },
  {
    "text": " dB",
    "startMs": 48864,
    "endMs": 49127,
    "timestampMs": 48995,
    "confidence": 1.0
  },
  {
    "text": " 以下防盖过人声",
    "startMs": 49127,
    "endMs": 50413,
    "timestampMs": 49770,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果提供现成逐字稿",
    "startMs": 50525,
    "endMs": 51904,
    "timestampMs": 51214,
    "confidence": 1.0
  },
  {
    "text": " 要按英语每分钟约",
    "startMs": 51904,
    "endMs": 53437,
    "timestampMs": 52670,
    "confidence": 1.0
  },
  {
    "text": " 130",
    "startMs": 53437,
    "endMs": 54015,
    "timestampMs": 53726,
    "confidence": 1.0
  },
  {
    "text": " 词估算时长",
    "startMs": 54015,
    "endMs": 55065,
    "timestampMs": 54540,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并且务必写大约~",
    "startMs": 55324,
    "endMs": 56385,
    "timestampMs": 55854,
    "confidence": 1.0
  },
  {
    "text": "45s",
    "startMs": 56385,
    "endMs": 57175,
    "timestampMs": 56780,
    "confidence": 1.0
  },
  {
    "text": " 而非写死精确",
    "startMs": 57175,
    "endMs": 58260,
    "timestampMs": 57717,
    "confidence": 1.0
  },
  {
    "text": " 45",
    "startMs": 58260,
    "endMs": 58606,
    "timestampMs": 58433,
    "confidence": 1.0
  },
  {
    "text": " 秒",
    "startMs": 58606,
    "endMs": 58874,
    "timestampMs": 58740,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "避免",
    "startMs": 59145,
    "endMs": 59593,
    "timestampMs": 59369,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 59593,
    "endMs": 60159,
    "timestampMs": 59876,
    "confidence": 1.0
  },
  {
    "text": " 为凑秒数强",
    "startMs": 60159,
    "endMs": 61267,
    "timestampMs": 60713,
    "confidence": 1.0
  },
  {
    "text": "行裁剪或注水台词",
    "startMs": 61267,
    "endMs": 62765,
    "timestampMs": 62016,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep04_s02_captions: Caption[] = [
  {
    "text": "如果手头没有可拍的",
    "startMs": 97,
    "endMs": 1571,
    "timestampMs": 834,
    "confidence": 1.0
  },
  {
    "text": "产品界面",
    "startMs": 1571,
    "endMs": 2267,
    "timestampMs": 1919,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只有一篇技术文章、",
    "startMs": 2467,
    "endMs": 3658,
    "timestampMs": 3062,
    "confidence": 1.0
  },
  {
    "text": "笔记或抽象概念",
    "startMs": 3658,
    "endMs": 5286,
    "timestampMs": 4472,
    "confidence": 1.0
  },
  {
    "text": " 就该切换二号工作流",
    "startMs": 5286,
    "endMs": 6913,
    "timestampMs": 6099,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Faceless",
    "startMs": 7149,
    "endMs": 7727,
    "timestampMs": 7438,
    "confidence": 1.0
  },
  {
    "text": " Explainer",
    "startMs": 7727,
    "endMs": 8364,
    "timestampMs": 8045,
    "confidence": 1.0
  },
  {
    "text": " 无真人科普解说",
    "startMs": 8364,
    "endMs": 9543,
    "timestampMs": 8953,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HyperFrames",
    "startMs": 10083,
    "endMs": 10932,
    "timestampMs": 10507,
    "confidence": 1.0
  },
  {
    "text": " 不会把你的",
    "startMs": 10932,
    "endMs": 11710,
    "timestampMs": 11321,
    "confidence": 1.0
  },
  {
    "text": "文章机械地",
    "startMs": 11710,
    "endMs": 12677,
    "timestampMs": 12193,
    "confidence": 1.0
  },
  {
    "text": "按自然段做成幻灯片",
    "startMs": 12677,
    "endMs": 14340,
    "timestampMs": 13508,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而是先提炼教学主轴",
    "startMs": 14623,
    "endMs": 16191,
    "timestampMs": 15407,
    "confidence": 1.0
  },
  {
    "text": " 再围绕四种",
    "startMs": 16191,
    "endMs": 17170,
    "timestampMs": 16680,
    "confidence": 1.0
  },
  {
    "text": "经典视角重构剧本",
    "startMs": 17170,
    "endMs": 18656,
    "timestampMs": 17913,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "讲透一个底层机制用",
    "startMs": 18950,
    "endMs": 20601,
    "timestampMs": 19775,
    "confidence": 1.0
  },
  {
    "text": " Concept",
    "startMs": 20601,
    "endMs": 21368,
    "timestampMs": 20984,
    "confidence": 1.0
  },
  {
    "text": " 一步步演示流程用",
    "startMs": 21368,
    "endMs": 22901,
    "timestampMs": 22134,
    "confidence": 1.0
  },
  {
    "text": " How-to",
    "startMs": 22901,
    "endMs": 23491,
    "timestampMs": 23196,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "盘点要点用",
    "startMs": 23602,
    "endMs": 24605,
    "timestampMs": 24103,
    "confidence": 1.0
  },
  {
    "text": " Listicle",
    "startMs": 24605,
    "endMs": 25183,
    "timestampMs": 24894,
    "confidence": 1.0
  },
  {
    "text": " 清单体",
    "startMs": 25183,
    "endMs": 25784,
    "timestampMs": 25483,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "或者通过单",
    "startMs": 25984,
    "endMs": 26857,
    "timestampMs": 26420,
    "confidence": 1.0
  },
  {
    "text": "个真实案例",
    "startMs": 26857,
    "endMs": 27506,
    "timestampMs": 27181,
    "confidence": 1.0
  },
  {
    "text": "推导出通用结论的",
    "startMs": 27506,
    "endMs": 28909,
    "timestampMs": 28207,
    "confidence": 1.0
  },
  {
    "text": " Story",
    "startMs": 28909,
    "endMs": 29534,
    "timestampMs": 29221,
    "confidence": 1.0
  },
  {
    "text": " 故事体",
    "startMs": 29534,
    "endMs": 29982,
    "timestampMs": 29758,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在这里",
    "startMs": 30525,
    "endMs": 31055,
    "timestampMs": 30790,
    "confidence": 1.0
  },
  {
    "text": " 决定成片高",
    "startMs": 31055,
    "endMs": 32447,
    "timestampMs": 31751,
    "confidence": 1.0
  },
  {
    "text": "级感的最大",
    "startMs": 32447,
    "endMs": 32895,
    "timestampMs": 32671,
    "confidence": 1.0
  },
  {
    "text": "杠杆只有一句咒语",
    "startMs": 32895,
    "endMs": 34357,
    "timestampMs": 33626,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "one",
    "startMs": 34569,
    "endMs": 34876,
    "timestampMs": 34722,
    "confidence": 1.0
  },
  {
    "text": " idea",
    "startMs": 34876,
    "endMs": 35253,
    "timestampMs": 35064,
    "confidence": 1.0
  },
  {
    "text": " per",
    "startMs": 35253,
    "endMs": 35418,
    "timestampMs": 35335,
    "confidence": 1.0
  },
  {
    "text": " scene",
    "startMs": 35418,
    "endMs": 35784,
    "timestampMs": 35601,
    "confidence": 1.0
  },
  {
    "text": " 每一幕只服",
    "startMs": 35784,
    "endMs": 37081,
    "timestampMs": 36432,
    "confidence": 1.0
  },
  {
    "text": "务一个视觉焦点",
    "startMs": 37081,
    "endMs": 37918,
    "timestampMs": 37499,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "把动态排版、",
    "startMs": 38119,
    "endMs": 38956,
    "timestampMs": 38537,
    "confidence": 1.0
  },
  {
    "text": "机制示意图",
    "startMs": 38956,
    "endMs": 40100,
    "timestampMs": 39528,
    "confidence": 1.0
  },
  {
    "text": "或数据图表做透",
    "startMs": 40100,
    "endMs": 41315,
    "timestampMs": 40707,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一旦塞进两个概念",
    "startMs": 41539,
    "endMs": 42671,
    "timestampMs": 42105,
    "confidence": 1.0
  },
  {
    "text": " 画面就会沦为",
    "startMs": 42671,
    "endMs": 43691,
    "timestampMs": 43181,
    "confidence": 1.0
  },
  {
    "text": "大段文字堆砌",
    "startMs": 43691,
    "endMs": 44728,
    "timestampMs": 44209,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "同样记住",
    "startMs": 45271,
    "endMs": 45955,
    "timestampMs": 45613,
    "confidence": 1.0
  },
  {
    "text": " 科普解说由",
    "startMs": 45955,
    "endMs": 47169,
    "timestampMs": 46562,
    "confidence": 1.0
  },
  {
    "text": "真实配音决",
    "startMs": 47169,
    "endMs": 48337,
    "timestampMs": 47753,
    "confidence": 1.0
  },
  {
    "text": "定最终片长",
    "startMs": 48337,
    "endMs": 49209,
    "timestampMs": 48773,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "提示词里务必写~",
    "startMs": 49587,
    "endMs": 50825,
    "timestampMs": 50206,
    "confidence": 1.0
  },
  {
    "text": "60s",
    "startMs": 50825,
    "endMs": 51521,
    "timestampMs": 51173,
    "confidence": 1.0
  },
  {
    "text": " 这样的近似时长",
    "startMs": 51521,
    "endMs": 52865,
    "timestampMs": 52193,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "同时指定嵌",
    "startMs": 53172,
    "endMs": 54363,
    "timestampMs": 53767,
    "confidence": 1.0
  },
  {
    "text": "入式字幕并",
    "startMs": 54363,
    "endMs": 54976,
    "timestampMs": 54669,
    "confidence": 1.0
  },
  {
    "text": "按品牌强调",
    "startMs": 54976,
    "endMs": 55825,
    "timestampMs": 55400,
    "confidence": 1.0
  },
  {
    "text": "色高亮关键词",
    "startMs": 55825,
    "endMs": 56957,
    "timestampMs": 56391,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep04_s03_captions: Caption[] = [
  {
    "text": "当你不需要",
    "startMs": 97,
    "endMs": 758,
    "timestampMs": 427,
    "confidence": 1.0
  },
  {
    "text": "完整旁白叙事",
    "startMs": 758,
    "endMs": 1819,
    "timestampMs": 1288,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只想做一条",
    "startMs": 2066,
    "endMs": 2739,
    "timestampMs": 2402,
    "confidence": 1.0
  },
  {
    "text": " 10",
    "startMs": 2739,
    "endMs": 3081,
    "timestampMs": 2910,
    "confidence": 1.0
  },
  {
    "text": " 秒以内的片头",
    "startMs": 3081,
    "endMs": 3894,
    "timestampMs": 3487,
    "confidence": 1.0
  },
  {
    "text": " Logo",
    "startMs": 3894,
    "endMs": 4307,
    "timestampMs": 4100,
    "confidence": 1.0
  },
  {
    "text": " Sting",
    "startMs": 4307,
    "endMs": 4696,
    "timestampMs": 4501,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "数字滚动统计、",
    "startMs": 4920,
    "endMs": 6041,
    "timestampMs": 5480,
    "confidence": 1.0
  },
  {
    "text": "数据图表或",
    "startMs": 6041,
    "endMs": 7444,
    "timestampMs": 6742,
    "confidence": 1.0
  },
  {
    "text": "角标包装时",
    "startMs": 7444,
    "endMs": 8352,
    "timestampMs": 7898,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "就进入三号工作流",
    "startMs": 8517,
    "endMs": 9826,
    "timestampMs": 9171,
    "confidence": 1.0
  },
  {
    "text": " Motion",
    "startMs": 9826,
    "endMs": 10451,
    "timestampMs": 10138,
    "confidence": 1.0
  },
  {
    "text": " Graphics",
    "startMs": 10451,
    "endMs": 10970,
    "timestampMs": 10710,
    "confidence": 1.0
  },
  {
    "text": " 动态图形",
    "startMs": 10970,
    "endMs": 11701,
    "timestampMs": 11335,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "动态图形的",
    "startMs": 12241,
    "endMs": 12925,
    "timestampMs": 12583,
    "confidence": 1.0
  },
  {
    "text": "本质是运动",
    "startMs": 12925,
    "endMs": 14045,
    "timestampMs": 13485,
    "confidence": 1.0
  },
  {
    "text": "本身就是信息",
    "startMs": 14045,
    "endMs": 15035,
    "timestampMs": 14540,
    "confidence": 1.0
  },
  {
    "text": " 因此默认不加旁白",
    "startMs": 15035,
    "endMs": 16993,
    "timestampMs": 16014,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并且切忌把",
    "startMs": 17288,
    "endMs": 18019,
    "timestampMs": 17653,
    "confidence": 1.0
  },
  {
    "text": " 2",
    "startMs": 18019,
    "endMs": 18278,
    "timestampMs": 18148,
    "confidence": 1.0
  },
  {
    "text": " 秒的创意硬拉到",
    "startMs": 18278,
    "endMs": 19422,
    "timestampMs": 18850,
    "confidence": 1.0
  },
  {
    "text": " 30",
    "startMs": 19422,
    "endMs": 19953,
    "timestampMs": 19687,
    "confidence": 1.0
  },
  {
    "text": " 秒以上",
    "startMs": 19953,
    "endMs": 20283,
    "timestampMs": 20118,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "实战中可以",
    "startMs": 20825,
    "endMs": 21875,
    "timestampMs": 21350,
    "confidence": 1.0
  },
  {
    "text": "直接点名复",
    "startMs": 21875,
    "endMs": 22795,
    "timestampMs": 22335,
    "confidence": 1.0
  },
  {
    "text": "用官方注册",
    "startMs": 22795,
    "endMs": 23538,
    "timestampMs": 23166,
    "confidence": 1.0
  },
  {
    "text": "表里的经典",
    "startMs": 23538,
    "endMs": 24009,
    "timestampMs": 23773,
    "confidence": 1.0
  },
  {
    "text": " Block",
    "startMs": 24009,
    "endMs": 24458,
    "timestampMs": 24233,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如用",
    "startMs": 24764,
    "endMs": 25259,
    "timestampMs": 25011,
    "confidence": 1.0
  },
  {
    "text": " apple-money-count",
    "startMs": 25259,
    "endMs": 26156,
    "timestampMs": 25707,
    "confidence": 1.0
  },
  {
    "text": " 做里程碑数字滚动、",
    "startMs": 26156,
    "endMs": 27476,
    "timestampMs": 26816,
    "confidence": 1.0
  },
  {
    "text": "用",
    "startMs": 27476,
    "endMs": 27936,
    "timestampMs": 27706,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "code-typing",
    "startMs": 27936,
    "endMs": 28691,
    "timestampMs": 28313,
    "confidence": 1.0
  },
  {
    "text": " 做终端打字、用",
    "startMs": 28691,
    "endMs": 30130,
    "timestampMs": 29410,
    "confidence": 1.0
  },
  {
    "text": " x-post",
    "startMs": 30130,
    "endMs": 30849,
    "timestampMs": 30489,
    "confidence": 1.0
  },
  {
    "text": " 做社媒贴文动效",
    "startMs": 30849,
    "endMs": 32064,
    "timestampMs": 31456,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Agent",
    "startMs": 32175,
    "endMs": 32659,
    "timestampMs": 32417,
    "confidence": 1.0
  },
  {
    "text": " 会先安装组",
    "startMs": 32659,
    "endMs": 33803,
    "timestampMs": 33231,
    "confidence": 1.0
  },
  {
    "text": "件再按你的文案改写",
    "startMs": 33803,
    "endMs": 35017,
    "timestampMs": 34410,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "导出格式上",
    "startMs": 35560,
    "endMs": 36444,
    "timestampMs": 36002,
    "confidence": 1.0
  },
  {
    "text": "有一个极易踩错的坑",
    "startMs": 36444,
    "endMs": 37918,
    "timestampMs": 37181,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "带完整背景色的",
    "startMs": 38249,
    "endMs": 39298,
    "timestampMs": 38773,
    "confidence": 1.0
  },
  {
    "text": "全画幅动态",
    "startMs": 39298,
    "endMs": 40076,
    "timestampMs": 39687,
    "confidence": 1.0
  },
  {
    "text": "图形一定要导出",
    "startMs": 40076,
    "endMs": 41338,
    "timestampMs": 40707,
    "confidence": 1.0
  },
  {
    "text": " MP4",
    "startMs": 41338,
    "endMs": 42022,
    "timestampMs": 41680,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只有当你制",
    "startMs": 42352,
    "endMs": 43201,
    "timestampMs": 42776,
    "confidence": 1.0
  },
  {
    "text": "作需要叠加在",
    "startMs": 43201,
    "endMs": 44168,
    "timestampMs": 43684,
    "confidence": 1.0
  },
  {
    "text": "实拍素材上的",
    "startMs": 44168,
    "endMs": 45183,
    "timestampMs": 44675,
    "confidence": 1.0
  },
  {
    "text": "无背景角标",
    "startMs": 45183,
    "endMs": 45996,
    "timestampMs": 45589,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "字幕条或",
    "startMs": 46185,
    "endMs": 47152,
    "timestampMs": 46668,
    "confidence": 1.0
  },
  {
    "text": " Logo",
    "startMs": 47152,
    "endMs": 47458,
    "timestampMs": 47305,
    "confidence": 1.0
  },
  {
    "text": " 贴片",
    "startMs": 47458,
    "endMs": 47836,
    "timestampMs": 47647,
    "confidence": 1.0
  },
  {
    "text": " overlay",
    "startMs": 47836,
    "endMs": 48402,
    "timestampMs": 48119,
    "confidence": 1.0
  },
  {
    "text": " 时",
    "startMs": 48402,
    "endMs": 48744,
    "timestampMs": 48573,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "才要求导出带",
    "startMs": 48856,
    "endMs": 49882,
    "timestampMs": 49369,
    "confidence": 1.0
  },
  {
    "text": " alpha",
    "startMs": 49882,
    "endMs": 50259,
    "timestampMs": 50070,
    "confidence": 1.0
  },
  {
    "text": " 透明通道的",
    "startMs": 50259,
    "endMs": 51025,
    "timestampMs": 50642,
    "confidence": 1.0
  },
  {
    "text": " WebM",
    "startMs": 51025,
    "endMs": 51780,
    "timestampMs": 51402,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 51780,
    "endMs": 52087,
    "timestampMs": 51933,
    "confidence": 1.0
  },
  {
    "text": " MOV",
    "startMs": 52087,
    "endMs": 52665,
    "timestampMs": 52376,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "对全屏带背",
    "startMs": 52900,
    "endMs": 53808,
    "timestampMs": 53354,
    "confidence": 1.0
  },
  {
    "text": "景画面强行索要透明",
    "startMs": 53808,
    "endMs": 55424,
    "timestampMs": 54616,
    "confidence": 1.0
  },
  {
    "text": " WebM",
    "startMs": 55424,
    "endMs": 56179,
    "timestampMs": 55801,
    "confidence": 1.0
  },
  {
    "text": " 只会得到不",
    "startMs": 56179,
    "endMs": 56957,
    "timestampMs": 56568,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "透明或边缘",
    "startMs": 56957,
    "endMs": 57924,
    "timestampMs": 57440,
    "confidence": 1.0
  },
  {
    "text": "异常的废片",
    "startMs": 57924,
    "endMs": 58643,
    "timestampMs": 58283,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep04_s04_captions: Caption[] = [
  {
    "text": "接下来看设",
    "startMs": 97,
    "endMs": 1194,
    "timestampMs": 645,
    "confidence": 1.0
  },
  {
    "text": "计师最关心的",
    "startMs": 1194,
    "endMs": 1831,
    "timestampMs": 1512,
    "confidence": 1.0
  },
  {
    "text": "四号工作流",
    "startMs": 1831,
    "endMs": 2680,
    "timestampMs": 2255,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "从",
    "startMs": 3045,
    "endMs": 3375,
    "timestampMs": 3210,
    "confidence": 1.0
  },
  {
    "text": " Figma、",
    "startMs": 3375,
    "endMs": 3941,
    "timestampMs": 3658,
    "confidence": 1.0
  },
  {
    "text": "Claude Design",
    "startMs": 3941,
    "endMs": 5156,
    "timestampMs": 4548,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 5156,
    "endMs": 5474,
    "timestampMs": 5315,
    "confidence": 1.0
  },
  {
    "text": " Open Design",
    "startMs": 5474,
    "endMs": 6312,
    "timestampMs": 5893,
    "confidence": 1.0
  },
  {
    "text": " 导入设计稿",
    "startMs": 6312,
    "endMs": 7125,
    "timestampMs": 6718,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "贯穿所有设计工具的",
    "startMs": 7665,
    "endMs": 8939,
    "timestampMs": 8302,
    "confidence": 1.0
  },
  {
    "text": "铁律只有一句话",
    "startMs": 8939,
    "endMs": 10283,
    "timestampMs": 9611,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "静态不动的",
    "startMs": 10625,
    "endMs": 11356,
    "timestampMs": 10990,
    "confidence": 1.0
  },
  {
    "text": "插画和图标",
    "startMs": 11356,
    "endMs": 12300,
    "timestampMs": 11828,
    "confidence": 1.0
  },
  {
    "text": "保持图片资产",
    "startMs": 12300,
    "endMs": 13432,
    "timestampMs": 12866,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "任何在视频",
    "startMs": 13762,
    "endMs": 14516,
    "timestampMs": 14139,
    "confidence": 1.0
  },
  {
    "text": "里需要动起",
    "startMs": 14516,
    "endMs": 15649,
    "timestampMs": 15082,
    "confidence": 1.0
  },
  {
    "text": "来或改变状态的图层",
    "startMs": 15649,
    "endMs": 17052,
    "timestampMs": 16350,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "必须重建为真正的",
    "startMs": 17229,
    "endMs": 18608,
    "timestampMs": 17918,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 18608,
    "endMs": 19351,
    "timestampMs": 18979,
    "confidence": 1.0
  },
  {
    "text": " 代码",
    "startMs": 19351,
    "endMs": 19729,
    "timestampMs": 19540,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "使用官方",
    "startMs": 20271,
    "endMs": 21073,
    "timestampMs": 20672,
    "confidence": 1.0
  },
  {
    "text": " Figma",
    "startMs": 21073,
    "endMs": 21427,
    "timestampMs": 21250,
    "confidence": 1.0
  },
  {
    "text": " CLI",
    "startMs": 21427,
    "endMs": 21828,
    "timestampMs": 21627,
    "confidence": 1.0
  },
  {
    "text": " 时",
    "startMs": 21828,
    "endMs": 22182,
    "timestampMs": 22005,
    "confidence": 1.0
  },
  {
    "text": " 所有导入都会冻结为",
    "startMs": 22182,
    "endMs": 23774,
    "timestampMs": 22978,
    "confidence": 1.0
  },
  {
    "text": "本地文件",
    "startMs": 23774,
    "endMs": 24469,
    "timestampMs": 24121,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "渲染期零依赖",
    "startMs": 24658,
    "endMs": 25613,
    "timestampMs": 25135,
    "confidence": 1.0
  },
  {
    "text": " Figma",
    "startMs": 25613,
    "endMs": 26038,
    "timestampMs": 25825,
    "confidence": 1.0
  },
  {
    "text": " 网络",
    "startMs": 26038,
    "endMs": 26439,
    "timestampMs": 26238,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "非企业版账号申请",
    "startMs": 26981,
    "endMs": 28420,
    "timestampMs": 27700,
    "confidence": 1.0
  },
  {
    "text": " Personal",
    "startMs": 28420,
    "endMs": 28950,
    "timestampMs": 28685,
    "confidence": 1.0
  },
  {
    "text": " Access",
    "startMs": 28950,
    "endMs": 29375,
    "timestampMs": 29162,
    "confidence": 1.0
  },
  {
    "text": " Token",
    "startMs": 29375,
    "endMs": 29717,
    "timestampMs": 29546,
    "confidence": 1.0
  },
  {
    "text": " 时",
    "startMs": 29717,
    "endMs": 30047,
    "timestampMs": 29882,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "必须勾选全",
    "startMs": 30354,
    "endMs": 31333,
    "timestampMs": 30843,
    "confidence": 1.0
  },
  {
    "text": "部三个只读权限",
    "startMs": 31333,
    "endMs": 32264,
    "timestampMs": 31798,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "File",
    "startMs": 32583,
    "endMs": 32972,
    "timestampMs": 32777,
    "confidence": 1.0
  },
  {
    "text": " content、",
    "startMs": 32972,
    "endMs": 33550,
    "timestampMs": 33261,
    "confidence": 1.0
  },
  {
    "text": "File",
    "startMs": 33550,
    "endMs": 34387,
    "timestampMs": 33968,
    "confidence": 1.0
  },
  {
    "text": " metadata",
    "startMs": 34387,
    "endMs": 35047,
    "timestampMs": 34717,
    "confidence": 1.0
  },
  {
    "text": " 以及最容易漏掉的",
    "startMs": 35047,
    "endMs": 36344,
    "timestampMs": 35695,
    "confidence": 1.0
  },
  {
    "text": " Library",
    "startMs": 36344,
    "endMs": 37193,
    "timestampMs": 36768,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "content",
    "startMs": 37205,
    "endMs": 37783,
    "timestampMs": 37494,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "排错时切记",
    "startMs": 38090,
    "endMs": 38962,
    "timestampMs": 38526,
    "confidence": 1.0
  },
  {
    "text": " 无效或过期",
    "startMs": 38962,
    "endMs": 39911,
    "timestampMs": 39436,
    "confidence": 1.0
  },
  {
    "text": " PAT",
    "startMs": 39911,
    "endMs": 40277,
    "timestampMs": 40094,
    "confidence": 1.0
  },
  {
    "text": " 会返回",
    "startMs": 40277,
    "endMs": 40914,
    "timestampMs": 40595,
    "confidence": 1.0
  },
  {
    "text": " 403",
    "startMs": 40914,
    "endMs": 41657,
    "timestampMs": 41285,
    "confidence": 1.0
  },
  {
    "text": " Invalid",
    "startMs": 41657,
    "endMs": 42282,
    "timestampMs": 41969,
    "confidence": 1.0
  },
  {
    "text": " token",
    "startMs": 42282,
    "endMs": 42730,
    "timestampMs": 42506,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而不是常见的",
    "startMs": 42977,
    "endMs": 43874,
    "timestampMs": 43425,
    "confidence": 1.0
  },
  {
    "text": " 401",
    "startMs": 43874,
    "endMs": 44605,
    "timestampMs": 44239,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "执行顺序更",
    "startMs": 45147,
    "endMs": 46150,
    "timestampMs": 45648,
    "confidence": 1.0
  },
  {
    "text": "是重中之重",
    "startMs": 46150,
    "endMs": 46928,
    "timestampMs": 46539,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "务必先运行",
    "startMs": 47329,
    "endMs": 48237,
    "timestampMs": 47783,
    "confidence": 1.0
  },
  {
    "text": " hyperframes figma tokens",
    "startMs": 48237,
    "endMs": 50112,
    "timestampMs": 49174,
    "confidence": 1.0
  },
  {
    "text": " 生成",
    "startMs": 50112,
    "endMs": 50607,
    "timestampMs": 50359,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "figma-tokens",
    "startMs": 50631,
    "endMs": 51550,
    "timestampMs": 51090,
    "confidence": 1.0
  },
  {
    "text": " .",
    "startMs": 51550,
    "endMs": 51670,
    "timestampMs": 51610,
    "confidence": 1.0
  },
  {
    "text": " json",
    "startMs": 51670,
    "endMs": 52152,
    "timestampMs": 51911,
    "confidence": 1.0
  },
  {
    "text": " 变量索引",
    "startMs": 52152,
    "endMs": 52800,
    "timestampMs": 52476,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "再运行",
    "startMs": 53048,
    "endMs": 53638,
    "timestampMs": 53343,
    "confidence": 1.0
  },
  {
    "text": " hyperframes figma component",
    "startMs": 53638,
    "endMs": 55631,
    "timestampMs": 54634,
    "confidence": 1.0
  },
  {
    "text": " 导入组件",
    "startMs": 55631,
    "endMs": 56220,
    "timestampMs": 55925,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "否则组件颜",
    "startMs": 56332,
    "endMs": 57382,
    "timestampMs": 56857,
    "confidence": 1.0
  },
  {
    "text": "色无法按精确",
    "startMs": 57382,
    "endMs": 58360,
    "timestampMs": 57871,
    "confidence": 1.0
  },
  {
    "text": " Figma",
    "startMs": 58360,
    "endMs": 58761,
    "timestampMs": 58560,
    "confidence": 1.0
  },
  {
    "text": " ID",
    "startMs": 58761,
    "endMs": 59198,
    "timestampMs": 58979,
    "confidence": 1.0
  },
  {
    "text": " 绑定品牌变量",
    "startMs": 59198,
    "endMs": 60247,
    "timestampMs": 59722,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "会被打上",
    "startMs": 60601,
    "endMs": 61308,
    "timestampMs": 60954,
    "confidence": 1.0
  },
  {
    "text": " data-figma-unresolved",
    "startMs": 61308,
    "endMs": 62794,
    "timestampMs": 62051,
    "confidence": 1.0
  },
  {
    "text": " 警告标记",
    "startMs": 62794,
    "endMs": 63490,
    "timestampMs": 63142,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "配合",
    "startMs": 64033,
    "endMs": 64386,
    "timestampMs": 64209,
    "confidence": 1.0
  },
  {
    "text": " /figma",
    "startMs": 64386,
    "endMs": 64787,
    "timestampMs": 64586,
    "confidence": 1.0
  },
  {
    "text": " 技能",
    "startMs": 64787,
    "endMs": 65224,
    "timestampMs": 65005,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "还能把",
    "startMs": 65436,
    "endMs": 65860,
    "timestampMs": 65648,
    "confidence": 1.0
  },
  {
    "text": " Figma",
    "startMs": 65860,
    "endMs": 66250,
    "timestampMs": 66055,
    "confidence": 1.0
  },
  {
    "text": " Motion",
    "startMs": 66250,
    "endMs": 66627,
    "timestampMs": 66438,
    "confidence": 1.0
  },
  {
    "text": " 时间轴直接",
    "startMs": 66627,
    "endMs": 67771,
    "timestampMs": 67199,
    "confidence": 1.0
  },
  {
    "text": "翻译为可寻址的暂停",
    "startMs": 67771,
    "endMs": 69363,
    "timestampMs": 68567,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "GSAP",
    "startMs": 69457,
    "endMs": 70047,
    "timestampMs": 69752,
    "confidence": 1.0
  },
  {
    "text": " 动画",
    "startMs": 70047,
    "endMs": 70412,
    "timestampMs": 70229,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep04_s05_captions: Caption[] = [
  {
    "text": "本集压轴是",
    "startMs": 97,
    "endMs": 923,
    "timestampMs": 510,
    "confidence": 1.0
  },
  {
    "text": "五号工作流",
    "startMs": 923,
    "endMs": 1772,
    "timestampMs": 1347,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 1772,
    "endMs": 2338,
    "timestampMs": 2055,
    "confidence": 1.0
  },
  {
    "text": " Avatar",
    "startMs": 2338,
    "endMs": 2857,
    "timestampMs": 2597,
    "confidence": 1.0
  },
  {
    "text": " Presenter",
    "startMs": 2857,
    "endMs": 3529,
    "timestampMs": 3193,
    "confidence": 1.0
  },
  {
    "text": " 数字人主讲",
    "startMs": 3529,
    "endMs": 4413,
    "timestampMs": 3971,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及贯穿全",
    "startMs": 4696,
    "endMs": 5569,
    "timestampMs": 5132,
    "confidence": 1.0
  },
  {
    "text": "系列的品牌真理文件",
    "startMs": 5569,
    "endMs": 7090,
    "timestampMs": 6329,
    "confidence": 1.0
  },
  {
    "text": " frame.md",
    "startMs": 7090,
    "endMs": 8033,
    "timestampMs": 7561,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "需要真人出",
    "startMs": 8561,
    "endMs": 9623,
    "timestampMs": 9092,
    "confidence": 1.0
  },
  {
    "text": "镜讲解产品",
    "startMs": 9623,
    "endMs": 10330,
    "timestampMs": 9976,
    "confidence": 1.0
  },
  {
    "text": "更新或基准评测时",
    "startMs": 10330,
    "endMs": 11993,
    "timestampMs": 11161,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需配置",
    "startMs": 12276,
    "endMs": 12960,
    "timestampMs": 12618,
    "confidence": 1.0
  },
  {
    "text": " HeyGen",
    "startMs": 12960,
    "endMs": 13396,
    "timestampMs": 13178,
    "confidence": 1.0
  },
  {
    "text": " 账号或在终端运行",
    "startMs": 13396,
    "endMs": 14941,
    "timestampMs": 14168,
    "confidence": 1.0
  },
  {
    "text": " heygen auth login",
    "startMs": 14941,
    "endMs": 16120,
    "timestampMs": 15530,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "--oauth",
    "startMs": 16132,
    "endMs": 16545,
    "timestampMs": 16338,
    "confidence": 1.0
  },
  {
    "text": " 就能召唤专",
    "startMs": 16545,
    "endMs": 17783,
    "timestampMs": 17164,
    "confidence": 1.0
  },
  {
    "text": "属数字孪生",
    "startMs": 17783,
    "endMs": 18514,
    "timestampMs": 18148,
    "confidence": 1.0
  },
  {
    "text": "或官方虚拟",
    "startMs": 18514,
    "endMs": 19528,
    "timestampMs": 19021,
    "confidence": 1.0
  },
  {
    "text": "主讲出镜口播",
    "startMs": 19528,
    "endMs": 20425,
    "timestampMs": 19976,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "由",
    "startMs": 20536,
    "endMs": 20713,
    "timestampMs": 20624,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 20713,
    "endMs": 21562,
    "timestampMs": 21137,
    "confidence": 1.0
  },
  {
    "text": " 在人物周围",
    "startMs": 21562,
    "endMs": 22411,
    "timestampMs": 21986,
    "confidence": 1.0
  },
  {
    "text": "搭建可编辑的图表、",
    "startMs": 22411,
    "endMs": 23779,
    "timestampMs": 23095,
    "confidence": 1.0
  },
  {
    "text": "B-roll",
    "startMs": 23779,
    "endMs": 24546,
    "timestampMs": 24162,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "与逐词字幕",
    "startMs": 24640,
    "endMs": 25430,
    "timestampMs": 25035,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "结合",
    "startMs": 25772,
    "endMs": 26161,
    "timestampMs": 25966,
    "confidence": 1.0
  },
  {
    "text": " remove-background",
    "startMs": 26161,
    "endMs": 27164,
    "timestampMs": 26662,
    "confidence": 1.0
  },
  {
    "text": " 本地抠像",
    "startMs": 27164,
    "endMs": 27918,
    "timestampMs": 27541,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "还能把巨型",
    "startMs": 28190,
    "endMs": 28885,
    "timestampMs": 28537,
    "confidence": 1.0
  },
  {
    "text": "标题穿插在",
    "startMs": 28885,
    "endMs": 29970,
    "timestampMs": 29427,
    "confidence": 1.0
  },
  {
    "text": "主讲人身后",
    "startMs": 29970,
    "endMs": 30784,
    "timestampMs": 30377,
    "confidence": 1.0
  },
  {
    "text": " 实现电影级景深遮挡",
    "startMs": 30784,
    "endMs": 32576,
    "timestampMs": 31680,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最后",
    "startMs": 33119,
    "endMs": 33626,
    "timestampMs": 33372,
    "confidence": 1.0
  },
  {
    "text": " 如何让整个",
    "startMs": 33626,
    "endMs": 34746,
    "timestampMs": 34186,
    "confidence": 1.0
  },
  {
    "text": "系列视频保",
    "startMs": 34746,
    "endMs": 35937,
    "timestampMs": 35341,
    "confidence": 1.0
  },
  {
    "text": "持绝对品牌一致？",
    "startMs": 35937,
    "endMs": 37022,
    "timestampMs": 36479,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "永远不要空",
    "startMs": 37565,
    "endMs": 38567,
    "timestampMs": 38066,
    "confidence": 1.0
  },
  {
    "text": "喊做得高级有品牌感",
    "startMs": 38567,
    "endMs": 39888,
    "timestampMs": 39227,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而是在工程",
    "startMs": 40218,
    "endMs": 40937,
    "timestampMs": 40577,
    "confidence": 1.0
  },
  {
    "text": "根目录写一份",
    "startMs": 40937,
    "endMs": 41621,
    "timestampMs": 41279,
    "confidence": 1.0
  },
  {
    "text": " frame.md",
    "startMs": 41621,
    "endMs": 42541,
    "timestampMs": 42081,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用",
    "startMs": 42871,
    "endMs": 43166,
    "timestampMs": 43018,
    "confidence": 1.0
  },
  {
    "text": " Frontmatter",
    "startMs": 43166,
    "endMs": 43862,
    "timestampMs": 43514,
    "confidence": 1.0
  },
  {
    "text": " 锁死精确色值与",
    "startMs": 43862,
    "endMs": 45100,
    "timestampMs": 44481,
    "confidence": 1.0
  },
  {
    "text": "字体族",
    "startMs": 45100,
    "endMs": 45725,
    "timestampMs": 45412,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并在视频化",
    "startMs": 45984,
    "endMs": 46727,
    "timestampMs": 46355,
    "confidence": 1.0
  },
  {
    "text": "阶段遵循针对",
    "startMs": 46727,
    "endMs": 47966,
    "timestampMs": 47346,
    "confidence": 1.0
  },
  {
    "text": " 1080",
    "startMs": 47966,
    "endMs": 48484,
    "timestampMs": 48225,
    "confidence": 1.0
  },
  {
    "text": " p",
    "startMs": 48484,
    "endMs": 48720,
    "timestampMs": 48602,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 48720,
    "endMs": 48968,
    "timestampMs": 48844,
    "confidence": 1.0
  },
  {
    "text": " H.264",
    "startMs": 48968,
    "endMs": 50047,
    "timestampMs": 49507,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "压缩适当放大描边、",
    "startMs": 50058,
    "endMs": 51757,
    "timestampMs": 50907,
    "confidence": 1.0
  },
  {
    "text": "对比度与字号的原则",
    "startMs": 51757,
    "endMs": 53490,
    "timestampMs": 52623,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "让网页级品",
    "startMs": 53750,
    "endMs": 54681,
    "timestampMs": 54215,
    "confidence": 1.0
  },
  {
    "text": "牌规范真正",
    "startMs": 54681,
    "endMs": 55625,
    "timestampMs": 55153,
    "confidence": 1.0
  },
  {
    "text": "经得起视频",
    "startMs": 55625,
    "endMs": 56426,
    "timestampMs": 56025,
    "confidence": 1.0
  },
  {
    "text": "压缩的考验",
    "startMs": 56426,
    "endMs": 57158,
    "timestampMs": 56792,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
