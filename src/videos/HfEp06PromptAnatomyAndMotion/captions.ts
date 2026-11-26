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

export const EP06_TOTAL_FRAMES = 9919;

export const EP06_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp06PromptAnatomyAndMotion/ep06_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 2063,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1997,
    "voiceDurationMs": 66552
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp06PromptAnatomyAndMotion/ep06_s02_voice.mp3",
    "fromFrame": 2063,
    "durationInFrames": 2060,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 2006,
    "voiceDurationMs": 66840
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp06PromptAnatomyAndMotion/ep06_s03_voice.mp3",
    "fromFrame": 4123,
    "durationInFrames": 1947,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1893,
    "voiceDurationMs": 63096
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp06PromptAnatomyAndMotion/ep06_s04_voice.mp3",
    "fromFrame": 6070,
    "durationInFrames": 1796,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1742,
    "voiceDurationMs": 58056
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp06PromptAnatomyAndMotion/ep06_s05_voice.mp3",
    "fromFrame": 7866,
    "durationInFrames": 2053,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1993,
    "voiceDurationMs": 66408
  }
};

export const ep06_s01_captions: Caption[] = [
  {
    "text": "欢迎来到",
    "startMs": 97,
    "endMs": 875,
    "timestampMs": 486,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 875,
    "endMs": 1960,
    "timestampMs": 1417,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第六集",
    "startMs": 1960,
    "endMs": 3269,
    "timestampMs": 2614,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "为什么同样让",
    "startMs": 3797,
    "endMs": 4705,
    "timestampMs": 4251,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 4705,
    "endMs": 5283,
    "timestampMs": 4994,
    "confidence": 1.0
  },
  {
    "text": " 写视频",
    "startMs": 5283,
    "endMs": 5896,
    "timestampMs": 5589,
    "confidence": 1.0
  },
  {
    "text": " 有人出片像",
    "startMs": 5896,
    "endMs": 6969,
    "timestampMs": 6432,
    "confidence": 1.0
  },
  {
    "text": "廉价幻灯片",
    "startMs": 6969,
    "endMs": 7936,
    "timestampMs": 7452,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "高手却能一段",
    "startMs": 8314,
    "endMs": 9292,
    "timestampMs": 8803,
    "confidence": 1.0
  },
  {
    "text": " Prompt",
    "startMs": 9292,
    "endMs": 9906,
    "timestampMs": 9599,
    "confidence": 1.0
  },
  {
    "text": " 直出电影级大片？",
    "startMs": 9906,
    "endMs": 11002,
    "timestampMs": 10454,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "秘密在于一套严谨的",
    "startMs": 11545,
    "endMs": 12889,
    "timestampMs": 12217,
    "confidence": 1.0
  },
  {
    "text": "六段式提示词骨架",
    "startMs": 12889,
    "endMs": 14292,
    "timestampMs": 13590,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一段",
    "startMs": 14599,
    "endMs": 15035,
    "timestampMs": 14817,
    "confidence": 1.0
  },
  {
    "text": " [route]",
    "startMs": 15035,
    "endMs": 15649,
    "timestampMs": 15342,
    "confidence": 1.0
  },
  {
    "text": " 写明",
    "startMs": 15649,
    "endMs": 16274,
    "timestampMs": 15961,
    "confidence": 1.0
  },
  {
    "text": " /hyperframes",
    "startMs": 16274,
    "endMs": 17182,
    "timestampMs": 16728,
    "confidence": 1.0
  },
  {
    "text": " 加载规则",
    "startMs": 17182,
    "endMs": 17948,
    "timestampMs": 17565,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二段",
    "startMs": 18243,
    "endMs": 18715,
    "timestampMs": 18479,
    "confidence": 1.0
  },
  {
    "text": " [spec]",
    "startMs": 18715,
    "endMs": 19434,
    "timestampMs": 19074,
    "confidence": 1.0
  },
  {
    "text": " 锁定片长与画幅",
    "startMs": 19434,
    "endMs": 21061,
    "timestampMs": 20247,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三段",
    "startMs": 21309,
    "endMs": 21851,
    "timestampMs": 21580,
    "confidence": 1.0
  },
  {
    "text": " [beats]",
    "startMs": 21851,
    "endMs": 22441,
    "timestampMs": 22146,
    "confidence": 1.0
  },
  {
    "text": " 给每一拍标",
    "startMs": 22441,
    "endMs": 23550,
    "timestampMs": 22995,
    "confidence": 1.0
  },
  {
    "text": "上时间戳并",
    "startMs": 23550,
    "endMs": 24399,
    "timestampMs": 23974,
    "confidence": 1.0
  },
  {
    "text": "写清留白停顿",
    "startMs": 24399,
    "endMs": 25495,
    "timestampMs": 24947,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第四段",
    "startMs": 25719,
    "endMs": 26226,
    "timestampMs": 25972,
    "confidence": 1.0
  },
  {
    "text": " [copy]",
    "startMs": 26226,
    "endMs": 26781,
    "timestampMs": 26503,
    "confidence": 1.0
  },
  {
    "text": " 把屏幕文字",
    "startMs": 26781,
    "endMs": 27647,
    "timestampMs": 27214,
    "confidence": 1.0
  },
  {
    "text": "放进精确引号并",
    "startMs": 27647,
    "endMs": 28944,
    "timestampMs": 28295,
    "confidence": 1.0
  },
  {
    "text": "用斜杠标明换行",
    "startMs": 28944,
    "endMs": 30183,
    "timestampMs": 29563,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第五段",
    "startMs": 30442,
    "endMs": 30973,
    "timestampMs": 30707,
    "confidence": 1.0
  },
  {
    "text": " [technique]",
    "startMs": 30973,
    "endMs": 31739,
    "timestampMs": 31356,
    "confidence": 1.0
  },
  {
    "text": " 点名要复用的官方",
    "startMs": 31739,
    "endMs": 33190,
    "timestampMs": 32464,
    "confidence": 1.0
  },
  {
    "text": " Block",
    "startMs": 33190,
    "endMs": 33650,
    "timestampMs": 33420,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第六段",
    "startMs": 33992,
    "endMs": 34510,
    "timestampMs": 34251,
    "confidence": 1.0
  },
  {
    "text": " [negatives]",
    "startMs": 34510,
    "endMs": 35454,
    "timestampMs": 34982,
    "confidence": 1.0
  },
  {
    "text": " 封堵歧义",
    "startMs": 35454,
    "endMs": 36433,
    "timestampMs": 35943,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这里务必分清",
    "startMs": 36739,
    "endMs": 37812,
    "timestampMs": 37275,
    "confidence": 1.0
  },
  {
    "text": " no",
    "startMs": 37812,
    "endMs": 38201,
    "timestampMs": 38006,
    "confidence": 1.0
  },
  {
    "text": " narration",
    "startMs": 38201,
    "endMs": 38803,
    "timestampMs": 38502,
    "confidence": 1.0
  },
  {
    "text": " 只是不加人声旁白",
    "startMs": 38803,
    "endMs": 40100,
    "timestampMs": 39451,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "想要彻底静音必须写",
    "startMs": 40212,
    "endMs": 41898,
    "timestampMs": 41055,
    "confidence": 1.0
  },
  {
    "text": " no",
    "startMs": 41898,
    "endMs": 42122,
    "timestampMs": 42010,
    "confidence": 1.0
  },
  {
    "text": " audio",
    "startMs": 42122,
    "endMs": 42582,
    "timestampMs": 42352,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "进入单拍内部",
    "startMs": 43125,
    "endMs": 44221,
    "timestampMs": 43673,
    "confidence": 1.0
  },
  {
    "text": " 再用五槽位",
    "startMs": 44221,
    "endMs": 45318,
    "timestampMs": 44769,
    "confidence": 1.0
  },
  {
    "text": "精确描述每个物体",
    "startMs": 45318,
    "endMs": 46721,
    "timestampMs": 46019,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "[element]",
    "startMs": 46981,
    "endMs": 47476,
    "timestampMs": 47228,
    "confidence": 1.0
  },
  {
    "text": " 是什么、",
    "startMs": 47476,
    "endMs": 48148,
    "timestampMs": 47812,
    "confidence": 1.0
  },
  {
    "text": "[motion]",
    "startMs": 48148,
    "endMs": 48903,
    "timestampMs": 48525,
    "confidence": 1.0
  },
  {
    "text": " 怎么动、",
    "startMs": 48903,
    "endMs": 49540,
    "timestampMs": 49221,
    "confidence": 1.0
  },
  {
    "text": "[layout]",
    "startMs": 49540,
    "endMs": 50365,
    "timestampMs": 49952,
    "confidence": 1.0
  },
  {
    "text": " 放哪儿",
    "startMs": 50365,
    "endMs": 51238,
    "timestampMs": 50801,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "[style]",
    "startMs": 51462,
    "endMs": 51992,
    "timestampMs": 51727,
    "confidence": 1.0
  },
  {
    "text": " 长什么样、",
    "startMs": 51992,
    "endMs": 52794,
    "timestampMs": 52393,
    "confidence": 1.0
  },
  {
    "text": "[timing]",
    "startMs": 52794,
    "endMs": 53490,
    "timestampMs": 53142,
    "confidence": 1.0
  },
  {
    "text": " 何时起止",
    "startMs": 53490,
    "endMs": 54481,
    "timestampMs": 53985,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "配合三档规格旋钮",
    "startMs": 55023,
    "endMs": 56379,
    "timestampMs": 55701,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "从",
    "startMs": 56592,
    "endMs": 56851,
    "timestampMs": 56721,
    "confidence": 1.0
  },
  {
    "text": " Mood",
    "startMs": 56851,
    "endMs": 57087,
    "timestampMs": 56969,
    "confidence": 1.0
  },
  {
    "text": " words、",
    "startMs": 57087,
    "endMs": 57594,
    "timestampMs": 57340,
    "confidence": 1.0
  },
  {
    "text": "Style",
    "startMs": 57594,
    "endMs": 58195,
    "timestampMs": 57894,
    "confidence": 1.0
  },
  {
    "text": " tokens",
    "startMs": 58195,
    "endMs": 58750,
    "timestampMs": 58472,
    "confidence": 1.0
  },
  {
    "text": " 到",
    "startMs": 58750,
    "endMs": 59044,
    "timestampMs": 58897,
    "confidence": 1.0
  },
  {
    "text": " Full",
    "startMs": 59044,
    "endMs": 59292,
    "timestampMs": 59168,
    "confidence": 1.0
  },
  {
    "text": " visual",
    "startMs": 59292,
    "endMs": 59575,
    "timestampMs": 59433,
    "confidence": 1.0
  },
  {
    "text": " spec",
    "startMs": 59575,
    "endMs": 60035,
    "timestampMs": 59805,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "逐级收紧自由度",
    "startMs": 60129,
    "endMs": 61226,
    "timestampMs": 60677,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "涉及真",
    "startMs": 61497,
    "endMs": 62063,
    "timestampMs": 61780,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 62063,
    "endMs": 62240,
    "timestampMs": 62151,
    "confidence": 1.0
  },
  {
    "text": " D",
    "startMs": 62240,
    "endMs": 62334,
    "timestampMs": 62287,
    "confidence": 1.0
  },
  {
    "text": " 光影时更要写死",
    "startMs": 62334,
    "endMs": 63632,
    "timestampMs": 62983,
    "confidence": 1.0
  },
  {
    "text": " Three.js",
    "startMs": 63632,
    "endMs": 64516,
    "timestampMs": 64074,
    "confidence": 1.0
  },
  {
    "text": " via",
    "startMs": 64516,
    "endMs": 64952,
    "timestampMs": 64734,
    "confidence": 1.0
  },
  {
    "text": " the",
    "startMs": 64952,
    "endMs": 65129,
    "timestampMs": 65040,
    "confidence": 1.0
  },
  {
    "text": " adapter",
    "startMs": 65129,
    "endMs": 65731,
    "timestampMs": 65430,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep06_s02_captions: Caption[] = [
  {
    "text": "写完骨架",
    "startMs": 97,
    "endMs": 970,
    "timestampMs": 533,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "决定画面质感的",
    "startMs": 1312,
    "endMs": 2267,
    "timestampMs": 1789,
    "confidence": 1.0
  },
  {
    "text": "核心是官方",
    "startMs": 2267,
    "endMs": 3446,
    "timestampMs": 2856,
    "confidence": 1.0
  },
  {
    "text": "总结的七大",
    "startMs": 3446,
    "endMs": 4484,
    "timestampMs": 3965,
    "confidence": 1.0
  },
  {
    "text": "丝滑运动法则",
    "startMs": 4484,
    "endMs": 5545,
    "timestampMs": 5014,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "法则一",
    "startMs": 6073,
    "endMs": 6557,
    "timestampMs": 6315,
    "confidence": 1.0
  },
  {
    "text": " Move",
    "startMs": 6557,
    "endMs": 6804,
    "timestampMs": 6680,
    "confidence": 1.0
  },
  {
    "text": " only",
    "startMs": 6804,
    "endMs": 7146,
    "timestampMs": 6975,
    "confidence": 1.0
  },
  {
    "text": " what",
    "startMs": 7146,
    "endMs": 7441,
    "timestampMs": 7293,
    "confidence": 1.0
  },
  {
    "text": " is",
    "startMs": 7441,
    "endMs": 7665,
    "timestampMs": 7553,
    "confidence": 1.0
  },
  {
    "text": " live",
    "startMs": 7665,
    "endMs": 8125,
    "timestampMs": 7895,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "标题和卡片",
    "startMs": 8432,
    "endMs": 9340,
    "timestampMs": 8886,
    "confidence": 1.0
  },
  {
    "text": "落地就必须彻底静止",
    "startMs": 9340,
    "endMs": 11002,
    "timestampMs": 10171,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只让实时数据、",
    "startMs": 11226,
    "endMs": 12300,
    "timestampMs": 11763,
    "confidence": 1.0
  },
  {
    "text": "波形或进度",
    "startMs": 12300,
    "endMs": 13479,
    "timestampMs": 12889,
    "confidence": 1.0
  },
  {
    "text": "条持续变化",
    "startMs": 13479,
    "endMs": 14387,
    "timestampMs": 13933,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "千万别靠伪",
    "startMs": 14682,
    "endMs": 15719,
    "timestampMs": 15200,
    "confidence": 1.0
  },
  {
    "text": "呼吸缩放装活力",
    "startMs": 15719,
    "endMs": 16899,
    "timestampMs": 16309,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "法则二",
    "startMs": 17441,
    "endMs": 18007,
    "timestampMs": 17724,
    "confidence": 1.0
  },
  {
    "text": " Move",
    "startMs": 18007,
    "endMs": 18278,
    "timestampMs": 18142,
    "confidence": 1.0
  },
  {
    "text": " the",
    "startMs": 18278,
    "endMs": 18373,
    "timestampMs": 18325,
    "confidence": 1.0
  },
  {
    "text": " camera",
    "startMs": 18373,
    "endMs": 18950,
    "timestampMs": 18661,
    "confidence": 1.0
  },
  {
    "text": " to",
    "startMs": 18950,
    "endMs": 19174,
    "timestampMs": 19062,
    "confidence": 1.0
  },
  {
    "text": " get",
    "startMs": 19174,
    "endMs": 19375,
    "timestampMs": 19274,
    "confidence": 1.0
  },
  {
    "text": " somewhere",
    "startMs": 19375,
    "endMs": 19906,
    "timestampMs": 19640,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "镜头移动必须为",
    "startMs": 20366,
    "endMs": 21686,
    "timestampMs": 21026,
    "confidence": 1.0
  },
  {
    "text": "了跨越空间",
    "startMs": 21686,
    "endMs": 22429,
    "timestampMs": 22057,
    "confidence": 1.0
  },
  {
    "text": "连接下一个区域",
    "startMs": 22429,
    "endMs": 23502,
    "timestampMs": 22965,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "拒绝漫无目的的慢推",
    "startMs": 23703,
    "endMs": 25142,
    "timestampMs": 24422,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "法则三",
    "startMs": 25684,
    "endMs": 26309,
    "timestampMs": 25996,
    "confidence": 1.0
  },
  {
    "text": " Overlap",
    "startMs": 26309,
    "endMs": 27028,
    "timestampMs": 26668,
    "confidence": 1.0
  },
  {
    "text": " don",
    "startMs": 27028,
    "endMs": 27476,
    "timestampMs": 27252,
    "confidence": 1.0
  },
  {
    "text": " '",
    "startMs": 27476,
    "endMs": 27596,
    "timestampMs": 27536,
    "confidence": 1.0
  },
  {
    "text": " t",
    "startMs": 27596,
    "endMs": 27636,
    "timestampMs": 27616,
    "confidence": 1.0
  },
  {
    "text": " queue",
    "startMs": 27636,
    "endMs": 27830,
    "timestampMs": 27733,
    "confidence": 1.0
  },
  {
    "text": " 动作要交错重叠",
    "startMs": 27830,
    "endMs": 29564,
    "timestampMs": 28697,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "前一个元素",
    "startMs": 29776,
    "endMs": 30613,
    "timestampMs": 30194,
    "confidence": 1.0
  },
  {
    "text": "落定到一半",
    "startMs": 30613,
    "endMs": 31285,
    "timestampMs": 30949,
    "confidence": 1.0
  },
  {
    "text": " 下一个就该启动",
    "startMs": 31285,
    "endMs": 32453,
    "timestampMs": 31869,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "法则四",
    "startMs": 32995,
    "endMs": 33585,
    "timestampMs": 33290,
    "confidence": 1.0
  },
  {
    "text": " One",
    "startMs": 33585,
    "endMs": 33726,
    "timestampMs": 33655,
    "confidence": 1.0
  },
  {
    "text": " idea",
    "startMs": 33726,
    "endMs": 34068,
    "timestampMs": 33897,
    "confidence": 1.0
  },
  {
    "text": " per",
    "startMs": 34068,
    "endMs": 34233,
    "timestampMs": 34150,
    "confidence": 1.0
  },
  {
    "text": " move",
    "startMs": 34233,
    "endMs": 34599,
    "timestampMs": 34416,
    "confidence": 1.0
  },
  {
    "text": " 每次只表达",
    "startMs": 34599,
    "endMs": 35873,
    "timestampMs": 35236,
    "confidence": 1.0
  },
  {
    "text": "单一运动意图",
    "startMs": 35873,
    "endMs": 36792,
    "timestampMs": 36332,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "拒绝同时叠加旋转、",
    "startMs": 36993,
    "endMs": 38620,
    "timestampMs": 37806,
    "confidence": 1.0
  },
  {
    "text": "缩放与模糊让",
    "startMs": 38620,
    "endMs": 40200,
    "timestampMs": 39410,
    "confidence": 1.0
  },
  {
    "text": "文字糊成一团",
    "startMs": 40200,
    "endMs": 41262,
    "timestampMs": 40731,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "法则五",
    "startMs": 41792,
    "endMs": 42465,
    "timestampMs": 42128,
    "confidence": 1.0
  },
  {
    "text": " Weight",
    "startMs": 42465,
    "endMs": 42677,
    "timestampMs": 42571,
    "confidence": 1.0
  },
  {
    "text": " for",
    "startMs": 42677,
    "endMs": 42924,
    "timestampMs": 42800,
    "confidence": 1.0
  },
  {
    "text": " physical",
    "startMs": 42924,
    "endMs": 43408,
    "timestampMs": 43166,
    "confidence": 1.0
  },
  {
    "text": " objects",
    "startMs": 43408,
    "endMs": 43927,
    "timestampMs": 43667,
    "confidence": 1.0
  },
  {
    "text": " only",
    "startMs": 43927,
    "endMs": 44399,
    "timestampMs": 44163,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "带弹性过冲的",
    "startMs": 44776,
    "endMs": 45743,
    "timestampMs": 45259,
    "confidence": 1.0
  },
  {
    "text": " back.out",
    "startMs": 45743,
    "endMs": 46356,
    "timestampMs": 46049,
    "confidence": 1.0
  },
  {
    "text": " 只能给卡牌",
    "startMs": 46356,
    "endMs": 47252,
    "timestampMs": 46804,
    "confidence": 1.0
  },
  {
    "text": "或机械翻页",
    "startMs": 47252,
    "endMs": 48290,
    "timestampMs": 47771,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "板等物理物件",
    "startMs": 48290,
    "endMs": 48998,
    "timestampMs": 48644,
    "confidence": 1.0
  },
  {
    "text": " 严禁套在文字、",
    "startMs": 48998,
    "endMs": 50177,
    "timestampMs": 49587,
    "confidence": 1.0
  },
  {
    "text": "UI",
    "startMs": 50177,
    "endMs": 50943,
    "timestampMs": 50560,
    "confidence": 1.0
  },
  {
    "text": " 和数字计数器上",
    "startMs": 50943,
    "endMs": 51958,
    "timestampMs": 51450,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "因为一个冲",
    "startMs": 52069,
    "endMs": 52588,
    "timestampMs": 52328,
    "confidence": 1.0
  },
  {
    "text": "过头再回退的",
    "startMs": 52588,
    "endMs": 53390,
    "timestampMs": 52989,
    "confidence": 1.0
  },
  {
    "text": "数字会显示从",
    "startMs": 53390,
    "endMs": 54711,
    "timestampMs": 54050,
    "confidence": 1.0
  },
  {
    "text": "未存在过的假数值！",
    "startMs": 54711,
    "endMs": 55843,
    "timestampMs": 55277,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "法则六与",
    "startMs": 56374,
    "endMs": 56940,
    "timestampMs": 56657,
    "confidence": 1.0
  },
  {
    "text": "七则是视差景深",
    "startMs": 56940,
    "endMs": 58449,
    "timestampMs": 57694,
    "confidence": 1.0
  },
  {
    "text": " 仅放一个虚",
    "startMs": 58449,
    "endMs": 59699,
    "timestampMs": 59074,
    "confidence": 1.0
  },
  {
    "text": "化前景遮挡",
    "startMs": 59699,
    "endMs": 60407,
    "timestampMs": 60053,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及按格式配速",
    "startMs": 60642,
    "endMs": 61763,
    "timestampMs": 61202,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "混剪每拍",
    "startMs": 62022,
    "endMs": 63072,
    "timestampMs": 62547,
    "confidence": 1.0
  },
  {
    "text": " 1.1",
    "startMs": 63072,
    "endMs": 63708,
    "timestampMs": 63390,
    "confidence": 1.0
  },
  {
    "text": " 秒、产品演示稳停",
    "startMs": 63708,
    "endMs": 65253,
    "timestampMs": 64480,
    "confidence": 1.0
  },
  {
    "text": " 7",
    "startMs": 65253,
    "endMs": 65396,
    "timestampMs": 65324,
    "confidence": 1.0
  },
  {
    "text": " 到",
    "startMs": 65396,
    "endMs": 65595,
    "timestampMs": 65495,
    "confidence": 1.0
  },
  {
    "text": " 10",
    "startMs": 65595,
    "endMs": 65833,
    "timestampMs": 65714,
    "confidence": 1.0
  },
  {
    "text": " 秒",
    "startMs": 65833,
    "endMs": 66032,
    "timestampMs": 65932,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep06_s03_captions: Caption[] = [
  {
    "text": "除了丝滑运动",
    "startMs": 97,
    "endMs": 1123,
    "timestampMs": 610,
    "confidence": 1.0
  },
  {
    "text": " 如果你想做",
    "startMs": 1123,
    "endMs": 2161,
    "timestampMs": 1642,
    "confidence": 1.0
  },
  {
    "text": "出手工剪纸般的",
    "startMs": 2161,
    "endMs": 3128,
    "timestampMs": 2644,
    "confidence": 1.0
  },
  {
    "text": "定格动画质感",
    "startMs": 3128,
    "endMs": 3989,
    "timestampMs": 3558,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如何在",
    "startMs": 4307,
    "endMs": 4791,
    "timestampMs": 4549,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 4791,
    "endMs": 5510,
    "timestampMs": 5150,
    "confidence": 1.0
  },
  {
    "text": " 里保证多次",
    "startMs": 5510,
    "endMs": 6583,
    "timestampMs": 6046,
    "confidence": 1.0
  },
  {
    "text": "渲染字节级一致？",
    "startMs": 6583,
    "endMs": 7692,
    "timestampMs": 7137,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "答案是绑定",
    "startMs": 8231,
    "endMs": 9505,
    "timestampMs": 8868,
    "confidence": 1.0
  },
  {
    "text": "固定随机种子",
    "startMs": 9505,
    "endMs": 10625,
    "timestampMs": 10065,
    "confidence": 1.0
  },
  {
    "text": " 并按帧号量化停顿",
    "startMs": 10625,
    "endMs": 12182,
    "timestampMs": 11403,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "提示词里有",
    "startMs": 12724,
    "endMs": 13750,
    "timestampMs": 13237,
    "confidence": 1.0
  },
  {
    "text": "一个极容易",
    "startMs": 13750,
    "endMs": 14245,
    "timestampMs": 13997,
    "confidence": 1.0
  },
  {
    "text": "写错的细节",
    "startMs": 14245,
    "endMs": 15012,
    "timestampMs": 14628,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一定要写",
    "startMs": 15259,
    "endMs": 15790,
    "timestampMs": 15524,
    "confidence": 1.0
  },
  {
    "text": " two",
    "startMs": 15790,
    "endMs": 16002,
    "timestampMs": 15896,
    "confidence": 1.0
  },
  {
    "text": " frames",
    "startMs": 16002,
    "endMs": 16568,
    "timestampMs": 16285,
    "confidence": 1.0
  },
  {
    "text": " 也就是精确停留两帧",
    "startMs": 16568,
    "endMs": 18042,
    "timestampMs": 17305,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "千万不要换算成",
    "startMs": 18278,
    "endMs": 19340,
    "timestampMs": 18809,
    "confidence": 1.0
  },
  {
    "text": " 0.067",
    "startMs": 19340,
    "endMs": 20029,
    "timestampMs": 19684,
    "confidence": 1.0
  },
  {
    "text": " 秒",
    "startMs": 20029,
    "endMs": 20307,
    "timestampMs": 20168,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "因为按秒估算在",
    "startMs": 20625,
    "endMs": 21840,
    "timestampMs": 21232,
    "confidence": 1.0
  },
  {
    "text": "帧边界上会",
    "startMs": 21840,
    "endMs": 22866,
    "timestampMs": 22353,
    "confidence": 1.0
  },
  {
    "text": "漂移成忽长忽短的",
    "startMs": 22866,
    "endMs": 24116,
    "timestampMs": 23491,
    "confidence": 1.0
  },
  {
    "text": " 1",
    "startMs": 24116,
    "endMs": 24257,
    "timestampMs": 24186,
    "confidence": 1.0
  },
  {
    "text": " 帧或",
    "startMs": 24257,
    "endMs": 24729,
    "timestampMs": 24493,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 24729,
    "endMs": 24953,
    "timestampMs": 24841,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "帧抖动",
    "startMs": 24953,
    "endMs": 25425,
    "timestampMs": 25189,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "场景衔接方面",
    "startMs": 25967,
    "endMs": 27075,
    "timestampMs": 26521,
    "confidence": 1.0
  },
  {
    "text": " 高级转场应",
    "startMs": 27075,
    "endMs": 28349,
    "timestampMs": 27712,
    "confidence": 1.0
  },
  {
    "text": "由画面元素自然引发",
    "startMs": 28349,
    "endMs": 29858,
    "timestampMs": 29103,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如镜头穿",
    "startMs": 30094,
    "endMs": 31274,
    "timestampMs": 30684,
    "confidence": 1.0
  },
  {
    "text": "过按钮推进下一幕",
    "startMs": 31274,
    "endMs": 32535,
    "timestampMs": 31904,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "点名官方转场块时",
    "startMs": 32877,
    "endMs": 34269,
    "timestampMs": 33573,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Shader",
    "startMs": 34505,
    "endMs": 35071,
    "timestampMs": 34788,
    "confidence": 1.0
  },
  {
    "text": " 类如",
    "startMs": 35071,
    "endMs": 35425,
    "timestampMs": 35248,
    "confidence": 1.0
  },
  {
    "text": " whip-pan、",
    "startMs": 35425,
    "endMs": 35991,
    "timestampMs": 35708,
    "confidence": 1.0
  },
  {
    "text": "cinematic-zoom",
    "startMs": 35991,
    "endMs": 37182,
    "timestampMs": 36586,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "cross-warp-morph",
    "startMs": 37476,
    "endMs": 38550,
    "timestampMs": 38013,
    "confidence": 1.0
  },
  {
    "text": " 适合做视觉高光",
    "startMs": 38550,
    "endMs": 39953,
    "timestampMs": 39251,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "CSS",
    "startMs": 40065,
    "endMs": 40701,
    "timestampMs": 40383,
    "confidence": 1.0
  },
  {
    "text": " 类如",
    "startMs": 40701,
    "endMs": 41043,
    "timestampMs": 40872,
    "confidence": 1.0
  },
  {
    "text": " transitions-push",
    "startMs": 41043,
    "endMs": 42046,
    "timestampMs": 41544,
    "confidence": 1.0
  },
  {
    "text": " 轻量高效",
    "startMs": 42046,
    "endMs": 42859,
    "timestampMs": 42452,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "切忌先淡出",
    "startMs": 43166,
    "endMs": 44027,
    "timestampMs": 43596,
    "confidence": 1.0
  },
  {
    "text": "黑屏再淡入",
    "startMs": 44027,
    "endMs": 44876,
    "timestampMs": 44451,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最后记住六",
    "startMs": 45407,
    "endMs": 46480,
    "timestampMs": 45943,
    "confidence": 1.0
  },
  {
    "text": "大动效形容词与",
    "startMs": 46480,
    "endMs": 47812,
    "timestampMs": 47146,
    "confidence": 1.0
  },
  {
    "text": " GSAP",
    "startMs": 47812,
    "endMs": 48378,
    "timestampMs": 48095,
    "confidence": 1.0
  },
  {
    "text": " 缓动曲线的精确对应",
    "startMs": 48378,
    "endMs": 49782,
    "timestampMs": 49080,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "smooth",
    "startMs": 50041,
    "endMs": 50595,
    "timestampMs": 50318,
    "confidence": 1.0
  },
  {
    "text": " 对应",
    "startMs": 50595,
    "endMs": 50925,
    "timestampMs": 50760,
    "confidence": 1.0
  },
  {
    "text": " power2.out",
    "startMs": 50925,
    "endMs": 51963,
    "timestampMs": 51444,
    "confidence": 1.0
  },
  {
    "text": " snappy",
    "startMs": 51963,
    "endMs": 52730,
    "timestampMs": 52346,
    "confidence": 1.0
  },
  {
    "text": " 对应",
    "startMs": 52730,
    "endMs": 53060,
    "timestampMs": 52895,
    "confidence": 1.0
  },
  {
    "text": " power4.out",
    "startMs": 53060,
    "endMs": 54050,
    "timestampMs": 53555,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "bouncy",
    "startMs": 54298,
    "endMs": 54817,
    "timestampMs": 54557,
    "confidence": 1.0
  },
  {
    "text": " 对应",
    "startMs": 54817,
    "endMs": 55218,
    "timestampMs": 55017,
    "confidence": 1.0
  },
  {
    "text": " back.out",
    "startMs": 55218,
    "endMs": 55914,
    "timestampMs": 55566,
    "confidence": 1.0
  },
  {
    "text": " springy",
    "startMs": 55914,
    "endMs": 56692,
    "timestampMs": 56303,
    "confidence": 1.0
  },
  {
    "text": " 对应",
    "startMs": 56692,
    "endMs": 57140,
    "timestampMs": 56916,
    "confidence": 1.0
  },
  {
    "text": " elastic.out",
    "startMs": 57140,
    "endMs": 58119,
    "timestampMs": 57629,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "dramatic",
    "startMs": 58308,
    "endMs": 58944,
    "timestampMs": 58626,
    "confidence": 1.0
  },
  {
    "text": " 对应",
    "startMs": 58944,
    "endMs": 59416,
    "timestampMs": 59180,
    "confidence": 1.0
  },
  {
    "text": " expo.out",
    "startMs": 59416,
    "endMs": 60348,
    "timestampMs": 59882,
    "confidence": 1.0
  },
  {
    "text": " dreamy",
    "startMs": 60348,
    "endMs": 60984,
    "timestampMs": 60666,
    "confidence": 1.0
  },
  {
    "text": " 对应",
    "startMs": 60984,
    "endMs": 61409,
    "timestampMs": 61196,
    "confidence": 1.0
  },
  {
    "text": " sine.inOut",
    "startMs": 61409,
    "endMs": 62376,
    "timestampMs": 61892,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep06_s04_captions: Caption[] = [
  {
    "text": "真实创作中",
    "startMs": 97,
    "endMs": 911,
    "timestampMs": 504,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "单条",
    "startMs": 1241,
    "endMs": 1583,
    "timestampMs": 1412,
    "confidence": 1.0
  },
  {
    "text": " Prompt",
    "startMs": 1583,
    "endMs": 1996,
    "timestampMs": 1789,
    "confidence": 1.0
  },
  {
    "text": " 一次直出通常能打到",
    "startMs": 1996,
    "endMs": 3482,
    "timestampMs": 2739,
    "confidence": 1.0
  },
  {
    "text": " 75%",
    "startMs": 3482,
    "endMs": 4354,
    "timestampMs": 3918,
    "confidence": 1.0
  },
  {
    "text": " 到",
    "startMs": 4354,
    "endMs": 4508,
    "timestampMs": 4431,
    "confidence": 1.0
  },
  {
    "text": " 90%",
    "startMs": 4508,
    "endMs": 5191,
    "timestampMs": 4849,
    "confidence": 1.0
  },
  {
    "text": " 的还原度",
    "startMs": 5191,
    "endMs": 5722,
    "timestampMs": 5456,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最后",
    "startMs": 5982,
    "endMs": 6335,
    "timestampMs": 6158,
    "confidence": 1.0
  },
  {
    "text": " 10%",
    "startMs": 6335,
    "endMs": 6807,
    "timestampMs": 6571,
    "confidence": 1.0
  },
  {
    "text": " 的电影质感靠的",
    "startMs": 6807,
    "endMs": 7892,
    "timestampMs": 7349,
    "confidence": 1.0
  },
  {
    "text": "是收敛式迭代",
    "startMs": 7892,
    "endMs": 8906,
    "timestampMs": 8399,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "记住三大收敛习惯",
    "startMs": 9446,
    "endMs": 10896,
    "timestampMs": 10171,
    "confidence": 1.0
  },
  {
    "text": " 第一",
    "startMs": 10896,
    "endMs": 11604,
    "timestampMs": 11250,
    "confidence": 1.0
  },
  {
    "text": " 一次只改一个变量",
    "startMs": 11604,
    "endMs": 13137,
    "timestampMs": 12370,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "避免同时调字号、",
    "startMs": 13384,
    "endMs": 14623,
    "timestampMs": 14003,
    "confidence": 1.0
  },
  {
    "text": "配色和速度",
    "startMs": 14623,
    "endMs": 15943,
    "timestampMs": 15283,
    "confidence": 1.0
  },
  {
    "text": "导致无法归因",
    "startMs": 15943,
    "endMs": 16958,
    "timestampMs": 16450,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二",
    "startMs": 17276,
    "endMs": 17665,
    "timestampMs": 17470,
    "confidence": 1.0
  },
  {
    "text": " 用绝对数值",
    "startMs": 17665,
    "endMs": 18986,
    "timestampMs": 18325,
    "confidence": 1.0
  },
  {
    "text": "替代相对形容词",
    "startMs": 18986,
    "endMs": 20389,
    "timestampMs": 19687,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如写明把",
    "startMs": 20501,
    "endMs": 21291,
    "timestampMs": 20896,
    "confidence": 1.0
  },
  {
    "text": "第二幕时长设为",
    "startMs": 21291,
    "endMs": 22223,
    "timestampMs": 21757,
    "confidence": 1.0
  },
  {
    "text": " 4",
    "startMs": 22223,
    "endMs": 22706,
    "timestampMs": 22464,
    "confidence": 1.0
  },
  {
    "text": " 秒而非稍微紧凑一点",
    "startMs": 22706,
    "endMs": 24039,
    "timestampMs": 23372,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三",
    "startMs": 24369,
    "endMs": 24817,
    "timestampMs": 24593,
    "confidence": 1.0
  },
  {
    "text": " 善用",
    "startMs": 24817,
    "endMs": 25501,
    "timestampMs": 25159,
    "confidence": 1.0
  },
  {
    "text": " Freeze",
    "startMs": 25501,
    "endMs": 25867,
    "timestampMs": 25684,
    "confidence": 1.0
  },
  {
    "text": " clause",
    "startMs": 25867,
    "endMs": 26256,
    "timestampMs": 26061,
    "confidence": 1.0
  },
  {
    "text": " 冻结条款",
    "startMs": 26256,
    "endMs": 26999,
    "timestampMs": 26627,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "明确告诉",
    "startMs": 27352,
    "endMs": 28095,
    "timestampMs": 27723,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 28095,
    "endMs": 28650,
    "timestampMs": 28372,
    "confidence": 1.0
  },
  {
    "text": " 只放大",
    "startMs": 28650,
    "endMs": 29227,
    "timestampMs": 28938,
    "confidence": 1.0
  },
  {
    "text": " CTA",
    "startMs": 29227,
    "endMs": 29746,
    "timestampMs": 29486,
    "confidence": 1.0
  },
  {
    "text": " 按钮",
    "startMs": 29746,
    "endMs": 30135,
    "timestampMs": 29940,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "其余构图与",
    "startMs": 30348,
    "endMs": 31138,
    "timestampMs": 30743,
    "confidence": 1.0
  },
  {
    "text": "动画一律冻结不动",
    "startMs": 31138,
    "endMs": 32553,
    "timestampMs": 31845,
    "confidence": 1.0
  },
  {
    "text": " 防止改一处带偏全局",
    "startMs": 32553,
    "endMs": 34251,
    "timestampMs": 33402,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "遇到反复跑偏的镜头",
    "startMs": 34363,
    "endMs": 35801,
    "timestampMs": 35082,
    "confidence": 1.0
  },
  {
    "text": " 先剥离背景与",
    "startMs": 35801,
    "endMs": 37287,
    "timestampMs": 36544,
    "confidence": 1.0
  },
  {
    "text": "运镜回到最",
    "startMs": 37287,
    "endMs": 38573,
    "timestampMs": 37930,
    "confidence": 1.0
  },
  {
    "text": "小可运行版",
    "startMs": 38573,
    "endMs": 39257,
    "timestampMs": 38915,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "再逐层叠加",
    "startMs": 39492,
    "endMs": 40495,
    "timestampMs": 39993,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "因为底层是纯",
    "startMs": 41037,
    "endMs": 42158,
    "timestampMs": 41597,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 42158,
    "endMs": 42924,
    "timestampMs": 42541,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "你在提示词",
    "startMs": 43231,
    "endMs": 43915,
    "timestampMs": 43573,
    "confidence": 1.0
  },
  {
    "text": "里说的每一",
    "startMs": 43915,
    "endMs": 44787,
    "timestampMs": 44351,
    "confidence": 1.0
  },
  {
    "text": "个剪辑动词",
    "startMs": 44787,
    "endMs": 45518,
    "timestampMs": 45152,
    "confidence": 1.0
  },
  {
    "text": "都会落到精确属性",
    "startMs": 45518,
    "endMs": 46768,
    "timestampMs": 46143,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "移动时间改",
    "startMs": 47004,
    "endMs": 48007,
    "timestampMs": 47505,
    "confidence": 1.0
  },
  {
    "text": " data-start",
    "startMs": 48007,
    "endMs": 48620,
    "timestampMs": 48313,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "调层叠改",
    "startMs": 48856,
    "endMs": 49634,
    "timestampMs": 49245,
    "confidence": 1.0
  },
  {
    "text": " data-track-index",
    "startMs": 49634,
    "endMs": 50778,
    "timestampMs": 50206,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 50778,
    "endMs": 51061,
    "timestampMs": 50919,
    "confidence": 1.0
  },
  {
    "text": " z-index",
    "startMs": 51061,
    "endMs": 51792,
    "timestampMs": 51426,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "裁结尾改",
    "startMs": 51969,
    "endMs": 52653,
    "timestampMs": 52311,
    "confidence": 1.0
  },
  {
    "text": " data-duration",
    "startMs": 52653,
    "endMs": 53396,
    "timestampMs": 53024,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "裁媒体入点改",
    "startMs": 53508,
    "endMs": 54522,
    "timestampMs": 54015,
    "confidence": 1.0
  },
  {
    "text": " data-media-start",
    "startMs": 54522,
    "endMs": 55442,
    "timestampMs": 54982,
    "confidence": 1.0
  },
  {
    "text": " 调音量改",
    "startMs": 55442,
    "endMs": 56515,
    "timestampMs": 55978,
    "confidence": 1.0
  },
  {
    "text": " data-volume",
    "startMs": 56515,
    "endMs": 57246,
    "timestampMs": 56880,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep06_s05_captions: Caption[] = [
  {
    "text": "最后我们来",
    "startMs": 97,
    "endMs": 1041,
    "timestampMs": 569,
    "confidence": 1.0
  },
  {
    "text": "膜拜官方提",
    "startMs": 1041,
    "endMs": 1972,
    "timestampMs": 1506,
    "confidence": 1.0
  },
  {
    "text": "示词教程的终极范本",
    "startMs": 1972,
    "endMs": 3458,
    "timestampMs": 2715,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一条",
    "startMs": 3776,
    "endMs": 4130,
    "timestampMs": 3953,
    "confidence": 1.0
  },
  {
    "text": " Prompt",
    "startMs": 4130,
    "endMs": 4519,
    "timestampMs": 4324,
    "confidence": 1.0
  },
  {
    "text": " 零剪辑直出的",
    "startMs": 4519,
    "endMs": 5534,
    "timestampMs": 5026,
    "confidence": 1.0
  },
  {
    "text": " 62",
    "startMs": 5534,
    "endMs": 6135,
    "timestampMs": 5834,
    "confidence": 1.0
  },
  {
    "text": " 秒一镜到底大片",
    "startMs": 6135,
    "endMs": 7019,
    "timestampMs": 6577,
    "confidence": 1.0
  },
  {
    "text": " The",
    "startMs": 7019,
    "endMs": 7184,
    "timestampMs": 7101,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Timeline",
    "startMs": 7196,
    "endMs": 7691,
    "timestampMs": 7443,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "前两版草稿",
    "startMs": 8231,
    "endMs": 9127,
    "timestampMs": 8679,
    "confidence": 1.0
  },
  {
    "text": "虽然通过了",
    "startMs": 9127,
    "endMs": 9823,
    "timestampMs": 9475,
    "confidence": 1.0
  },
  {
    "text": "所有检查却",
    "startMs": 9823,
    "endMs": 10896,
    "timestampMs": 10359,
    "confidence": 1.0
  },
  {
    "text": "依然像幻灯片",
    "startMs": 10896,
    "endMs": 11828,
    "timestampMs": 11362,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "真正拯救全片的",
    "startMs": 12087,
    "endMs": 13396,
    "timestampMs": 12741,
    "confidence": 1.0
  },
  {
    "text": "是写进",
    "startMs": 13396,
    "endMs": 14021,
    "timestampMs": 13708,
    "confidence": 1.0
  },
  {
    "text": " Prompt",
    "startMs": 14021,
    "endMs": 14469,
    "timestampMs": 14245,
    "confidence": 1.0
  },
  {
    "text": " 的电影摄影契约",
    "startMs": 14469,
    "endMs": 15601,
    "timestampMs": 15035,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "全局没有硬切场景",
    "startMs": 15837,
    "endMs": 17205,
    "timestampMs": 16521,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而是用单一",
    "startMs": 17429,
    "endMs": 18149,
    "timestampMs": 17789,
    "confidence": 1.0
  },
  {
    "text": "相机在广阔",
    "startMs": 18149,
    "endMs": 19127,
    "timestampMs": 18638,
    "confidence": 1.0
  },
  {
    "text": "空间内采用",
    "startMs": 19127,
    "endMs": 20047,
    "timestampMs": 19587,
    "confidence": 1.0
  },
  {
    "text": "扫移加停顿的节奏",
    "startMs": 20047,
    "endMs": 21144,
    "timestampMs": 20595,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在每个重点区稳停",
    "startMs": 21256,
    "endMs": 22694,
    "timestampMs": 21975,
    "confidence": 1.0
  },
  {
    "text": " 1.5",
    "startMs": 22694,
    "endMs": 23126,
    "timestampMs": 22910,
    "confidence": 1.0
  },
  {
    "text": " 到",
    "startMs": 23126,
    "endMs": 23466,
    "timestampMs": 23296,
    "confidence": 1.0
  },
  {
    "text": " 2.5",
    "startMs": 23466,
    "endMs": 23874,
    "timestampMs": 23670,
    "confidence": 1.0
  },
  {
    "text": " 秒让信息落",
    "startMs": 23874,
    "endMs": 24829,
    "timestampMs": 24351,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "地再加速滑向下一区",
    "startMs": 24829,
    "endMs": 26409,
    "timestampMs": 25619,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "三条持续线",
    "startMs": 26940,
    "endMs": 28060,
    "timestampMs": 27500,
    "confidence": 1.0
  },
  {
    "text": "索贯穿全片",
    "startMs": 28060,
    "endMs": 28909,
    "timestampMs": 28484,
    "confidence": 1.0
  },
  {
    "text": " 100%",
    "startMs": 28909,
    "endMs": 29628,
    "timestampMs": 29268,
    "confidence": 1.0
  },
  {
    "text": " 帧数",
    "startMs": 29628,
    "endMs": 29994,
    "timestampMs": 29811,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "那根",
    "startMs": 30336,
    "endMs": 30631,
    "timestampMs": 30483,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 30631,
    "endMs": 30843,
    "timestampMs": 30737,
    "confidence": 1.0
  },
  {
    "text": " 像素时间轴线",
    "startMs": 30843,
    "endMs": 31904,
    "timestampMs": 31373,
    "confidence": 1.0
  },
  {
    "text": " Wire",
    "startMs": 31904,
    "endMs": 32494,
    "timestampMs": 32199,
    "confidence": 1.0
  },
  {
    "text": " 依次化作柱",
    "startMs": 32494,
    "endMs": 33567,
    "timestampMs": 33030,
    "confidence": 1.0
  },
  {
    "text": "状图底线",
    "startMs": 33567,
    "endMs": 34098,
    "timestampMs": 33832,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "地图航线、",
    "startMs": 34357,
    "endMs": 35065,
    "timestampMs": 34711,
    "confidence": 1.0
  },
  {
    "text": "音频波形与",
    "startMs": 35065,
    "endMs": 36421,
    "timestampMs": 35743,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 36421,
    "endMs": 36657,
    "timestampMs": 36539,
    "confidence": 1.0
  },
  {
    "text": " D",
    "startMs": 36657,
    "endMs": 36751,
    "timestampMs": 36704,
    "confidence": 1.0
  },
  {
    "text": " 螺旋",
    "startMs": 36751,
    "endMs": 37223,
    "timestampMs": 36987,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "顶部帧标尺",
    "startMs": 37541,
    "endMs": 38449,
    "timestampMs": 37995,
    "confidence": 1.0
  },
  {
    "text": " Ruler",
    "startMs": 38449,
    "endMs": 38980,
    "timestampMs": 38714,
    "confidence": 1.0
  },
  {
    "text": " 同步追踪真",
    "startMs": 38980,
    "endMs": 40194,
    "timestampMs": 39587,
    "confidence": 1.0
  },
  {
    "text": "实播放时间",
    "startMs": 40194,
    "endMs": 40902,
    "timestampMs": 40548,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "开头打出的",
    "startMs": 41014,
    "endMs": 41839,
    "timestampMs": 41426,
    "confidence": 1.0
  },
  {
    "text": " div",
    "startMs": 41839,
    "endMs": 42370,
    "timestampMs": 42104,
    "confidence": 1.0
  },
  {
    "text": " class",
    "startMs": 42370,
    "endMs": 42735,
    "timestampMs": 42552,
    "confidence": 1.0
  },
  {
    "text": " clip",
    "startMs": 42735,
    "endMs": 43136,
    "timestampMs": 42935,
    "confidence": 1.0
  },
  {
    "text": " 主角芯片则",
    "startMs": 43136,
    "endMs": 44115,
    "timestampMs": 43625,
    "confidence": 1.0
  },
  {
    "text": "死死贴着导",
    "startMs": 44115,
    "endMs": 45224,
    "timestampMs": 44669,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "线几何穿越",
    "startMs": 45224,
    "endMs": 45801,
    "timestampMs": 45512,
    "confidence": 1.0
  },
  {
    "text": " Type、",
    "startMs": 45801,
    "endMs": 46179,
    "timestampMs": 45990,
    "confidence": 1.0
  },
  {
    "text": "Mount、",
    "startMs": 46179,
    "endMs": 46875,
    "timestampMs": 46527,
    "confidence": 1.0
  },
  {
    "text": "Measure、",
    "startMs": 46875,
    "endMs": 47594,
    "timestampMs": 47234,
    "confidence": 1.0
  },
  {
    "text": "Everywhere",
    "startMs": 47594,
    "endMs": 48573,
    "timestampMs": 48083,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Material、",
    "startMs": 48891,
    "endMs": 49516,
    "timestampMs": 49203,
    "confidence": 1.0
  },
  {
    "text": "Surface、",
    "startMs": 49516,
    "endMs": 50353,
    "timestampMs": 49934,
    "confidence": 1.0
  },
  {
    "text": "Rhythm、",
    "startMs": 50353,
    "endMs": 51061,
    "timestampMs": 50707,
    "confidence": 1.0
  },
  {
    "text": "Depth",
    "startMs": 51061,
    "endMs": 51650,
    "timestampMs": 51355,
    "confidence": 1.0
  },
  {
    "text": " 到",
    "startMs": 51650,
    "endMs": 51851,
    "timestampMs": 51750,
    "confidence": 1.0
  },
  {
    "text": " Render",
    "startMs": 51851,
    "endMs": 52193,
    "timestampMs": 52022,
    "confidence": 1.0
  },
  {
    "text": " 九大区域",
    "startMs": 52193,
    "endMs": 52924,
    "timestampMs": 52558,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "途中如实亮",
    "startMs": 53278,
    "endMs": 54316,
    "timestampMs": 53797,
    "confidence": 1.0
  },
  {
    "text": "出官方真实规模",
    "startMs": 54316,
    "endMs": 55424,
    "timestampMs": 54870,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "50+",
    "startMs": 55684,
    "endMs": 56143,
    "timestampMs": 55913,
    "confidence": 1.0
  },
  {
    "text": " 个",
    "startMs": 56143,
    "endMs": 56674,
    "timestampMs": 56408,
    "confidence": 1.0
  },
  {
    "text": " Catalog",
    "startMs": 56674,
    "endMs": 57311,
    "timestampMs": 56992,
    "confidence": 1.0
  },
  {
    "text": " Blocks、",
    "startMs": 57311,
    "endMs": 57853,
    "timestampMs": 57582,
    "confidence": 1.0
  },
  {
    "text": "19",
    "startMs": 57853,
    "endMs": 58235,
    "timestampMs": 58044,
    "confidence": 1.0
  },
  {
    "text": " 个",
    "startMs": 58235,
    "endMs": 58460,
    "timestampMs": 58347,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 58460,
    "endMs": 58814,
    "timestampMs": 58637,
    "confidence": 1.0
  },
  {
    "text": " Skills",
    "startMs": 58814,
    "endMs": 59357,
    "timestampMs": 59085,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 59357,
    "endMs": 59592,
    "timestampMs": 59474,
    "confidence": 1.0
  },
  {
    "text": " 7",
    "startMs": 59592,
    "endMs": 59737,
    "timestampMs": 59664,
    "confidence": 1.0
  },
  {
    "text": " 个",
    "startMs": 59737,
    "endMs": 59958,
    "timestampMs": 59847,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Runtime",
    "startMs": 59982,
    "endMs": 60465,
    "timestampMs": 60223,
    "confidence": 1.0
  },
  {
    "text": " Adapters",
    "startMs": 60465,
    "endMs": 61173,
    "timestampMs": 60819,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在片尾以种子",
    "startMs": 61550,
    "endMs": 62635,
    "timestampMs": 62092,
    "confidence": 1.0
  },
  {
    "text": " 42",
    "startMs": 62635,
    "endMs": 63024,
    "timestampMs": 62829,
    "confidence": 1.0
  },
  {
    "text": " 的两帧定格",
    "startMs": 63024,
    "endMs": 63767,
    "timestampMs": 63395,
    "confidence": 1.0
  },
  {
    "text": "礼花定格确",
    "startMs": 63767,
    "endMs": 64781,
    "timestampMs": 64274,
    "confidence": 1.0
  },
  {
    "text": "定性渲染之美",
    "startMs": 64781,
    "endMs": 65595,
    "timestampMs": 65188,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
