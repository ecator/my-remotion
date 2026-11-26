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

export const EP05_TOTAL_FRAMES = 9154;

export const EP05_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp05MediaDataAndDevFlows/ep05_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1887,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1821,
    "voiceDurationMs": 60696
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp05MediaDataAndDevFlows/ep05_s02_voice.mp3",
    "fromFrame": 1887,
    "durationInFrames": 1764,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1710,
    "voiceDurationMs": 56976
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp05MediaDataAndDevFlows/ep05_s03_voice.mp3",
    "fromFrame": 3651,
    "durationInFrames": 1883,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1829,
    "voiceDurationMs": 60960
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp05MediaDataAndDevFlows/ep05_s04_voice.mp3",
    "fromFrame": 5534,
    "durationInFrames": 1582,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1528,
    "voiceDurationMs": 50904
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp05MediaDataAndDevFlows/ep05_s05_voice.mp3",
    "fromFrame": 7116,
    "durationInFrames": 2038,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1978,
    "voiceDurationMs": 65928
  }
};

export const ep05_s01_captions: Caption[] = [
  {
    "text": "欢迎来到",
    "startMs": 97,
    "endMs": 840,
    "timestampMs": 468,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 840,
    "endMs": 1842,
    "timestampMs": 1341,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第五集",
    "startMs": 1842,
    "endMs": 3187,
    "timestampMs": 2514,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "继续攻克十",
    "startMs": 3493,
    "endMs": 4401,
    "timestampMs": 3947,
    "confidence": 1.0
  },
  {
    "text": "大工作流的",
    "startMs": 4401,
    "endMs": 5026,
    "timestampMs": 4713,
    "confidence": 1.0
  },
  {
    "text": "后五项硬核实战",
    "startMs": 5026,
    "endMs": 6312,
    "timestampMs": 5669,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "先看六号工作流",
    "startMs": 6851,
    "endMs": 8101,
    "timestampMs": 7476,
    "confidence": 1.0
  },
  {
    "text": " Captions",
    "startMs": 8101,
    "endMs": 9057,
    "timestampMs": 8579,
    "confidence": 1.0
  },
  {
    "text": "&",
    "startMs": 9057,
    "endMs": 9292,
    "timestampMs": 9174,
    "confidence": 1.0
  },
  {
    "text": "Recuts",
    "startMs": 9292,
    "endMs": 9800,
    "timestampMs": 9546,
    "confidence": 1.0
  },
  {
    "text": " 口播粗剪与包装",
    "startMs": 9800,
    "endMs": 11097,
    "timestampMs": 10448,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "把实拍访谈丢给",
    "startMs": 11639,
    "endMs": 12724,
    "timestampMs": 12181,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 12724,
    "endMs": 13042,
    "timestampMs": 12883,
    "confidence": 1.0
  },
  {
    "text": " 时",
    "startMs": 13042,
    "endMs": 13384,
    "timestampMs": 13213,
    "confidence": 1.0
  },
  {
    "text": " 有一条必须",
    "startMs": 13384,
    "endMs": 14245,
    "timestampMs": 13814,
    "confidence": 1.0
  },
  {
    "text": "死守的先后铁律",
    "startMs": 14245,
    "endMs": 15377,
    "timestampMs": 14811,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一定要先剪掉超过",
    "startMs": 15684,
    "endMs": 16958,
    "timestampMs": 16321,
    "confidence": 1.0
  },
  {
    "text": " 0.8",
    "startMs": 16958,
    "endMs": 17547,
    "timestampMs": 17252,
    "confidence": 1.0
  },
  {
    "text": " 秒的长停顿与废话",
    "startMs": 17547,
    "endMs": 18726,
    "timestampMs": 18136,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "再给精剪后的",
    "startMs": 18903,
    "endMs": 19682,
    "timestampMs": 19292,
    "confidence": 1.0
  },
  {
    "text": "片段加字幕",
    "startMs": 19682,
    "endMs": 20601,
    "timestampMs": 20141,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果先加字幕再粗剪",
    "startMs": 20932,
    "endMs": 22370,
    "timestampMs": 21651,
    "confidence": 1.0
  },
  {
    "text": " 时间戳就会",
    "startMs": 22370,
    "endMs": 23432,
    "timestampMs": 22901,
    "confidence": 1.0
  },
  {
    "text": "彻底错位漂移",
    "startMs": 23432,
    "endMs": 24410,
    "timestampMs": 23921,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "转录环节通过",
    "startMs": 24953,
    "endMs": 26167,
    "timestampMs": 25560,
    "confidence": 1.0
  },
  {
    "text": " hyperframes transcribe",
    "startMs": 26167,
    "endMs": 27583,
    "timestampMs": 26875,
    "confidence": 1.0
  },
  {
    "text": " 调用",
    "startMs": 27583,
    "endMs": 27972,
    "timestampMs": 27777,
    "confidence": 1.0
  },
  {
    "text": " Parakeet",
    "startMs": 27972,
    "endMs": 28573,
    "timestampMs": 28272,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 28573,
    "endMs": 28856,
    "timestampMs": 28714,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Whisper",
    "startMs": 28868,
    "endMs": 29233,
    "timestampMs": 29050,
    "confidence": 1.0
  },
  {
    "text": " 引擎精准对",
    "startMs": 29233,
    "endMs": 30330,
    "timestampMs": 29781,
    "confidence": 1.0
  },
  {
    "text": "齐逐词时间",
    "startMs": 30330,
    "endMs": 31156,
    "timestampMs": 30743,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "画面编排上",
    "startMs": 31698,
    "endMs": 32571,
    "timestampMs": 32134,
    "confidence": 1.0
  },
  {
    "text": "要分清两个专业概念",
    "startMs": 32571,
    "endMs": 34033,
    "timestampMs": 33302,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Rail",
    "startMs": 34351,
    "endMs": 34764,
    "timestampMs": 34557,
    "confidence": 1.0
  },
  {
    "text": " 是位于人物",
    "startMs": 34764,
    "endMs": 35483,
    "timestampMs": 35123,
    "confidence": 1.0
  },
  {
    "text": "下方的常规逐字轨道",
    "startMs": 35483,
    "endMs": 37052,
    "timestampMs": 36267,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "负责承载绝",
    "startMs": 37370,
    "endMs": 38561,
    "timestampMs": 37965,
    "confidence": 1.0
  },
  {
    "text": "大部分台词",
    "startMs": 38561,
    "endMs": 39045,
    "timestampMs": 38803,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Embed",
    "startMs": 39387,
    "endMs": 39953,
    "timestampMs": 39670,
    "confidence": 1.0
  },
  {
    "text": " 则是用抠像",
    "startMs": 39953,
    "endMs": 40932,
    "timestampMs": 40442,
    "confidence": 1.0
  },
  {
    "text": "穿插在人物",
    "startMs": 40932,
    "endMs": 41710,
    "timestampMs": 41321,
    "confidence": 1.0
  },
  {
    "text": "背后的巨型高光词",
    "startMs": 41710,
    "endMs": 43066,
    "timestampMs": 42388,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "每一拍最多",
    "startMs": 43290,
    "endMs": 44198,
    "timestampMs": 43744,
    "confidence": 1.0
  },
  {
    "text": "只放一个最强金句",
    "startMs": 44198,
    "endMs": 45401,
    "timestampMs": 44799,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而且只适用",
    "startMs": 45513,
    "endMs": 46138,
    "timestampMs": 45825,
    "confidence": 1.0
  },
  {
    "text": "于单人单主体镜头",
    "startMs": 46138,
    "endMs": 47576,
    "timestampMs": 46857,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "遇到双人播",
    "startMs": 47977,
    "endMs": 48874,
    "timestampMs": 48425,
    "confidence": 1.0
  },
  {
    "text": "客多主体画",
    "startMs": 48874,
    "endMs": 49770,
    "timestampMs": 49322,
    "confidence": 1.0
  },
  {
    "text": "面必须先按",
    "startMs": 49770,
    "endMs": 50454,
    "timestampMs": 50112,
    "confidence": 1.0
  },
  {
    "text": "说话人拆段再处理",
    "startMs": 50454,
    "endMs": 51704,
    "timestampMs": 51079,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "否则抠像边",
    "startMs": 52069,
    "endMs": 53142,
    "timestampMs": 52605,
    "confidence": 1.0
  },
  {
    "text": "缘会剧烈闪烁",
    "startMs": 53142,
    "endMs": 54168,
    "timestampMs": 53655,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "面对明亮户",
    "startMs": 54499,
    "endMs": 55430,
    "timestampMs": 54964,
    "confidence": 1.0
  },
  {
    "text": "外白底画面时",
    "startMs": 55430,
    "endMs": 56374,
    "timestampMs": 55902,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "也要改用深",
    "startMs": 56485,
    "endMs": 57452,
    "timestampMs": 56968,
    "confidence": 1.0
  },
  {
    "text": "色不透明字",
    "startMs": 57452,
    "endMs": 58372,
    "timestampMs": 57912,
    "confidence": 1.0
  },
  {
    "text": "体防止亮底发白吞字",
    "startMs": 58372,
    "endMs": 59882,
    "timestampMs": 59127,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep05_s02_captions: Caption[] = [
  {
    "text": "七号工作流是",
    "startMs": 97,
    "endMs": 1194,
    "timestampMs": 645,
    "confidence": 1.0
  },
  {
    "text": " Music",
    "startMs": 1194,
    "endMs": 2019,
    "timestampMs": 1606,
    "confidence": 1.0
  },
  {
    "text": "&",
    "startMs": 2019,
    "endMs": 2291,
    "timestampMs": 2155,
    "confidence": 1.0
  },
  {
    "text": "Lyric",
    "startMs": 2291,
    "endMs": 2621,
    "timestampMs": 2456,
    "confidence": 1.0
  },
  {
    "text": " Video",
    "startMs": 2621,
    "endMs": 3069,
    "timestampMs": 2845,
    "confidence": 1.0
  },
  {
    "text": " 音乐卡点与歌词视频",
    "startMs": 3069,
    "endMs": 4826,
    "timestampMs": 3947,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在这里",
    "startMs": 5366,
    "endMs": 5955,
    "timestampMs": 5660,
    "confidence": 1.0
  },
  {
    "text": " 音轨本身就",
    "startMs": 5955,
    "endMs": 7394,
    "timestampMs": 6674,
    "confidence": 1.0
  },
  {
    "text": "是整部视频的",
    "startMs": 7394,
    "endMs": 8113,
    "timestampMs": 7753,
    "confidence": 1.0
  },
  {
    "text": "叙事骨架",
    "startMs": 8113,
    "endMs": 8892,
    "timestampMs": 8502,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "不需要额外旁白",
    "startMs": 9175,
    "endMs": 10259,
    "timestampMs": 9717,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Agent",
    "startMs": 10802,
    "endMs": 11203,
    "timestampMs": 11002,
    "confidence": 1.0
  },
  {
    "text": " 会先运行",
    "startMs": 11203,
    "endMs": 11946,
    "timestampMs": 11574,
    "confidence": 1.0
  },
  {
    "text": " hyperframes beats",
    "startMs": 11946,
    "endMs": 13160,
    "timestampMs": 12553,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 13160,
    "endMs": 13384,
    "timestampMs": 13272,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "hyperframes audio",
    "startMs": 13396,
    "endMs": 14446,
    "timestampMs": 13921,
    "confidence": 1.0
  },
  {
    "text": " 深度剖析歌曲的",
    "startMs": 14446,
    "endMs": 15755,
    "timestampMs": 15100,
    "confidence": 1.0
  },
  {
    "text": " BPM",
    "startMs": 15755,
    "endMs": 16333,
    "timestampMs": 16044,
    "confidence": 1.0
  },
  {
    "text": "、重拍落点",
    "startMs": 16333,
    "endMs": 17300,
    "timestampMs": 16816,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "强弱能量曲线与",
    "startMs": 17630,
    "endMs": 19021,
    "timestampMs": 18325,
    "confidence": 1.0
  },
  {
    "text": "乐段边界",
    "startMs": 19021,
    "endMs": 19670,
    "timestampMs": 19345,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "再把你的照片、",
    "startMs": 19870,
    "endMs": 20672,
    "timestampMs": 20271,
    "confidence": 1.0
  },
  {
    "text": "视频或动态",
    "startMs": 20672,
    "endMs": 22087,
    "timestampMs": 21379,
    "confidence": 1.0
  },
  {
    "text": "歌词严丝合缝地卡在",
    "startMs": 22087,
    "endMs": 23809,
    "timestampMs": 22948,
    "confidence": 1.0
  },
  {
    "text": "节拍网格上",
    "startMs": 23809,
    "endMs": 24564,
    "timestampMs": 24186,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "提示词里切",
    "startMs": 25094,
    "endMs": 26250,
    "timestampMs": 25672,
    "confidence": 1.0
  },
  {
    "text": "忌手写死板的",
    "startMs": 26250,
    "endMs": 27040,
    "timestampMs": 26645,
    "confidence": 1.0
  },
  {
    "text": "绝对时间戳",
    "startMs": 27040,
    "endMs": 27866,
    "timestampMs": 27453,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如强行指定截取",
    "startMs": 28101,
    "endMs": 29658,
    "timestampMs": 28879,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 29658,
    "endMs": 29781,
    "timestampMs": 29719,
    "confidence": 1.0
  },
  {
    "text": " 分",
    "startMs": 29781,
    "endMs": 29965,
    "timestampMs": 29873,
    "confidence": 1.0
  },
  {
    "text": " 32",
    "startMs": 29965,
    "endMs": 30590,
    "timestampMs": 30277,
    "confidence": 1.0
  },
  {
    "text": " 秒到",
    "startMs": 30590,
    "endMs": 30849,
    "timestampMs": 30719,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 30849,
    "endMs": 30964,
    "timestampMs": 30906,
    "confidence": 1.0
  },
  {
    "text": " 分",
    "startMs": 30964,
    "endMs": 31156,
    "timestampMs": 31060,
    "confidence": 1.0
  },
  {
    "text": " 52",
    "startMs": 31156,
    "endMs": 31488,
    "timestampMs": 31322,
    "confidence": 1.0
  },
  {
    "text": " 秒",
    "startMs": 31488,
    "endMs": 31745,
    "timestampMs": 31616,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "因为硬切极",
    "startMs": 32028,
    "endMs": 32948,
    "timestampMs": 32488,
    "confidence": 1.0
  },
  {
    "text": "易拦腰斩断乐句",
    "startMs": 32948,
    "endMs": 33915,
    "timestampMs": 33431,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "正确写法是直接告诉",
    "startMs": 34210,
    "endMs": 35991,
    "timestampMs": 35100,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 35991,
    "endMs": 36450,
    "timestampMs": 36220,
    "confidence": 1.0
  },
  {
    "text": " pick",
    "startMs": 36450,
    "endMs": 36698,
    "timestampMs": 36574,
    "confidence": 1.0
  },
  {
    "text": " the",
    "startMs": 36698,
    "endMs": 36792,
    "timestampMs": 36745,
    "confidence": 1.0
  },
  {
    "text": " best",
    "startMs": 36792,
    "endMs": 37158,
    "timestampMs": 36975,
    "confidence": 1.0
  },
  {
    "text": " 20",
    "startMs": 37158,
    "endMs": 37453,
    "timestampMs": 37305,
    "confidence": 1.0
  },
  {
    "text": " seconds",
    "startMs": 37453,
    "endMs": 37984,
    "timestampMs": 37718,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "让分析器自",
    "startMs": 38095,
    "endMs": 39027,
    "timestampMs": 38561,
    "confidence": 1.0
  },
  {
    "text": "动贴合音乐锚点起止",
    "startMs": 39027,
    "endMs": 40383,
    "timestampMs": 39705,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "同时要区分音乐气质",
    "startMs": 40925,
    "endMs": 42871,
    "timestampMs": 41898,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "鼓点鲜明的",
    "startMs": 43213,
    "endMs": 43980,
    "timestampMs": 43596,
    "confidence": 1.0
  },
  {
    "text": "节奏型电子",
    "startMs": 43980,
    "endMs": 44935,
    "timestampMs": 44457,
    "confidence": 1.0
  },
  {
    "text": "乐适合按小",
    "startMs": 44935,
    "endMs": 45984,
    "timestampMs": 45459,
    "confidence": 1.0
  },
  {
    "text": "节硬切卡点并",
    "startMs": 45984,
    "endMs": 46940,
    "timestampMs": 46462,
    "confidence": 1.0
  },
  {
    "text": "在重拍推镜",
    "startMs": 46940,
    "endMs": 47753,
    "timestampMs": 47346,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而舒缓的环境乐或抒",
    "startMs": 48060,
    "endMs": 49982,
    "timestampMs": 49021,
    "confidence": 1.0
  },
  {
    "text": "情曲则应该",
    "startMs": 49982,
    "endMs": 50819,
    "timestampMs": 50400,
    "confidence": 1.0
  },
  {
    "text": "顺着乐句与",
    "startMs": 50819,
    "endMs": 51668,
    "timestampMs": 51243,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "能量起伏平滑流动",
    "startMs": 51680,
    "endMs": 52966,
    "timestampMs": 52323,
    "confidence": 1.0
  },
  {
    "text": " 切忌对着强",
    "startMs": 52966,
    "endMs": 54127,
    "timestampMs": 53546,
    "confidence": 1.0
  },
  {
    "text": "行算出来的",
    "startMs": 54127,
    "endMs": 54563,
    "timestampMs": 54345,
    "confidence": 1.0
  },
  {
    "text": "节拍器机械硬切",
    "startMs": 54563,
    "endMs": 56155,
    "timestampMs": 55359,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep05_s03_captions: Caption[] = [
  {
    "text": "手头有",
    "startMs": 97,
    "endMs": 734,
    "timestampMs": 415,
    "confidence": 1.0
  },
  {
    "text": " CSV",
    "startMs": 734,
    "endMs": 1194,
    "timestampMs": 964,
    "confidence": 1.0
  },
  {
    "text": " 表格或地理指标时",
    "startMs": 1194,
    "endMs": 2692,
    "timestampMs": 1943,
    "confidence": 1.0
  },
  {
    "text": " 就进入八号工作流",
    "startMs": 2692,
    "endMs": 4154,
    "timestampMs": 3423,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Data",
    "startMs": 4437,
    "endMs": 4920,
    "timestampMs": 4678,
    "confidence": 1.0
  },
  {
    "text": "&",
    "startMs": 4920,
    "endMs": 5144,
    "timestampMs": 5032,
    "confidence": 1.0
  },
  {
    "text": "Maps",
    "startMs": 5144,
    "endMs": 5486,
    "timestampMs": 5315,
    "confidence": 1.0
  },
  {
    "text": " 数据可视化与",
    "startMs": 5486,
    "endMs": 6583,
    "timestampMs": 6034,
    "confidence": 1.0
  },
  {
    "text": "动态地图",
    "startMs": 6583,
    "endMs": 7232,
    "timestampMs": 6907,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "画图表时请",
    "startMs": 7771,
    "endMs": 8891,
    "timestampMs": 8331,
    "confidence": 1.0
  },
  {
    "text": "明确二选一",
    "startMs": 8891,
    "endMs": 9764,
    "timestampMs": 9327,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "追求省心高",
    "startMs": 10118,
    "endMs": 11203,
    "timestampMs": 10660,
    "confidence": 1.0
  },
  {
    "text": "级排版就直",
    "startMs": 11203,
    "endMs": 12205,
    "timestampMs": 11704,
    "confidence": 1.0
  },
  {
    "text": "接点名复用",
    "startMs": 12205,
    "endMs": 12842,
    "timestampMs": 12523,
    "confidence": 1.0
  },
  {
    "text": " data-chart",
    "startMs": 12842,
    "endMs": 13573,
    "timestampMs": 13207,
    "confidence": 1.0
  },
  {
    "text": " 注册表组件",
    "startMs": 13573,
    "endMs": 14363,
    "timestampMs": 13968,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "需要反超排名的",
    "startMs": 14646,
    "endMs": 15825,
    "timestampMs": 15235,
    "confidence": 1.0
  },
  {
    "text": "柱状图竞赛",
    "startMs": 15825,
    "endMs": 16686,
    "timestampMs": 16255,
    "confidence": 1.0
  },
  {
    "text": "或手绘风格",
    "startMs": 16686,
    "endMs": 17724,
    "timestampMs": 17205,
    "confidence": 1.0
  },
  {
    "text": "则显式要求",
    "startMs": 17724,
    "endMs": 18597,
    "timestampMs": 18160,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "零图表库纯手写",
    "startMs": 18620,
    "endMs": 19823,
    "timestampMs": 19221,
    "confidence": 1.0
  },
  {
    "text": " SVG",
    "startMs": 19823,
    "endMs": 20448,
    "timestampMs": 20135,
    "confidence": 1.0
  },
  {
    "text": " 加",
    "startMs": 20448,
    "endMs": 20731,
    "timestampMs": 20589,
    "confidence": 1.0
  },
  {
    "text": " GSAP",
    "startMs": 20731,
    "endMs": 21498,
    "timestampMs": 21114,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "做单个核心",
    "startMs": 22040,
    "endMs": 22995,
    "timestampMs": 22517,
    "confidence": 1.0
  },
  {
    "text": "数字滚动时",
    "startMs": 22995,
    "endMs": 23892,
    "timestampMs": 23443,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "可调用经典",
    "startMs": 24139,
    "endMs": 24965,
    "timestampMs": 24552,
    "confidence": 1.0
  },
  {
    "text": " apple-money-count",
    "startMs": 24965,
    "endMs": 25719,
    "timestampMs": 25342,
    "confidence": 1.0
  },
  {
    "text": " 组件",
    "startMs": 25719,
    "endMs": 26120,
    "timestampMs": 25919,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "但要避开一个细节坑",
    "startMs": 26309,
    "endMs": 27571,
    "timestampMs": 26940,
    "confidence": 1.0
  },
  {
    "text": " 不要写从",
    "startMs": 27571,
    "endMs": 28314,
    "timestampMs": 27942,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 28314,
    "endMs": 28738,
    "timestampMs": 28526,
    "confidence": 1.0
  },
  {
    "text": " 美元数到",
    "startMs": 28738,
    "endMs": 29269,
    "timestampMs": 29003,
    "confidence": 1.0
  },
  {
    "text": " 4.2M",
    "startMs": 29269,
    "endMs": 29917,
    "timestampMs": 29593,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "否则里程表",
    "startMs": 30153,
    "endMs": 30873,
    "timestampMs": 30513,
    "confidence": 1.0
  },
  {
    "text": "起手会出现难看的",
    "startMs": 30873,
    "endMs": 32347,
    "timestampMs": 31610,
    "confidence": 1.0
  },
  {
    "text": " 0.0M",
    "startMs": 32347,
    "endMs": 33101,
    "timestampMs": 32724,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "直接写数到",
    "startMs": 33337,
    "endMs": 34174,
    "timestampMs": 33755,
    "confidence": 1.0
  },
  {
    "text": " 4.2M",
    "startMs": 34174,
    "endMs": 34788,
    "timestampMs": 34481,
    "confidence": 1.0
  },
  {
    "text": " 即可",
    "startMs": 34788,
    "endMs": 35189,
    "timestampMs": 34988,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "地理场景下",
    "startMs": 35731,
    "endMs": 36486,
    "timestampMs": 36108,
    "confidence": 1.0
  },
  {
    "text": "共有六款专",
    "startMs": 36486,
    "endMs": 37524,
    "timestampMs": 37005,
    "confidence": 1.0
  },
  {
    "text": "职地图组件",
    "startMs": 37524,
    "endMs": 38160,
    "timestampMs": 37842,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "us-map",
    "startMs": 38432,
    "endMs": 39021,
    "timestampMs": 38726,
    "confidence": 1.0
  },
  {
    "text": " 区域填色、",
    "startMs": 39021,
    "endMs": 39729,
    "timestampMs": 39375,
    "confidence": 1.0
  },
  {
    "text": "us-map-bubble",
    "startMs": 39729,
    "endMs": 40861,
    "timestampMs": 40295,
    "confidence": 1.0
  },
  {
    "text": " 气泡大小、",
    "startMs": 40861,
    "endMs": 41580,
    "timestampMs": 41220,
    "confidence": 1.0
  },
  {
    "text": "us-map-flow",
    "startMs": 41580,
    "endMs": 42736,
    "timestampMs": 42158,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "城际连线、",
    "startMs": 42759,
    "endMs": 43432,
    "timestampMs": 43095,
    "confidence": 1.0
  },
  {
    "text": "us-map-hex",
    "startMs": 43432,
    "endMs": 44587,
    "timestampMs": 44009,
    "confidence": 1.0
  },
  {
    "text": " 等权六边形网格",
    "startMs": 44587,
    "endMs": 45896,
    "timestampMs": 45241,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及",
    "startMs": 46108,
    "endMs": 46392,
    "timestampMs": 46250,
    "confidence": 1.0
  },
  {
    "text": " spain-map",
    "startMs": 46392,
    "endMs": 47028,
    "timestampMs": 46710,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 47028,
    "endMs": 47370,
    "timestampMs": 47199,
    "confidence": 1.0
  },
  {
    "text": " world-map",
    "startMs": 47370,
    "endMs": 48078,
    "timestampMs": 47724,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "长途航线演进则用",
    "startMs": 48302,
    "endMs": 49811,
    "timestampMs": 49056,
    "confidence": 1.0
  },
  {
    "text": " nyc-paris-flight",
    "startMs": 49811,
    "endMs": 51026,
    "timestampMs": 50418,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "为遵守确定",
    "startMs": 51557,
    "endMs": 52689,
    "timestampMs": 52123,
    "confidence": 1.0
  },
  {
    "text": "性渲染铁律",
    "startMs": 52689,
    "endMs": 53361,
    "timestampMs": 53025,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Agent",
    "startMs": 53703,
    "endMs": 54198,
    "timestampMs": 53950,
    "confidence": 1.0
  },
  {
    "text": " 会把地图投",
    "startMs": 54198,
    "endMs": 55248,
    "timestampMs": 54723,
    "confidence": 1.0
  },
  {
    "text": "影几何直接",
    "startMs": 55248,
    "endMs": 56167,
    "timestampMs": 55707,
    "confidence": 1.0
  },
  {
    "text": "烘焙内嵌进本地代码",
    "startMs": 56167,
    "endMs": 57807,
    "timestampMs": 56987,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "渲染期零",
    "startMs": 58019,
    "endMs": 59033,
    "timestampMs": 58526,
    "confidence": 1.0
  },
  {
    "text": " CDN",
    "startMs": 59033,
    "endMs": 59410,
    "timestampMs": 59221,
    "confidence": 1.0
  },
  {
    "text": " 地理请求",
    "startMs": 59410,
    "endMs": 60130,
    "timestampMs": 59770,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep05_s04_captions: Caption[] = [
  {
    "text": "对研发和",
    "startMs": 97,
    "endMs": 911,
    "timestampMs": 504,
    "confidence": 1.0
  },
  {
    "text": "开源团队最香的",
    "startMs": 911,
    "endMs": 2031,
    "timestampMs": 1471,
    "confidence": 1.0
  },
  {
    "text": " 莫过于九号工作流",
    "startMs": 2031,
    "endMs": 3493,
    "timestampMs": 2762,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "GitHub",
    "startMs": 3788,
    "endMs": 4260,
    "timestampMs": 4024,
    "confidence": 1.0
  },
  {
    "text": " PR",
    "startMs": 4260,
    "endMs": 4578,
    "timestampMs": 4419,
    "confidence": 1.0
  },
  {
    "text": " to",
    "startMs": 4578,
    "endMs": 4767,
    "timestampMs": 4672,
    "confidence": 1.0
  },
  {
    "text": " Video",
    "startMs": 4767,
    "endMs": 5215,
    "timestampMs": 4991,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "把任意",
    "startMs": 5755,
    "endMs": 6285,
    "timestampMs": 6020,
    "confidence": 1.0
  },
  {
    "text": " Pull",
    "startMs": 6285,
    "endMs": 6521,
    "timestampMs": 6403,
    "confidence": 1.0
  },
  {
    "text": " Request",
    "startMs": 6521,
    "endMs": 7170,
    "timestampMs": 6845,
    "confidence": 1.0
  },
  {
    "text": " 链接交给",
    "startMs": 7170,
    "endMs": 7901,
    "timestampMs": 7535,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 7901,
    "endMs": 8361,
    "timestampMs": 8131,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它会读取真",
    "startMs": 8573,
    "endMs": 9528,
    "timestampMs": 9050,
    "confidence": 1.0
  },
  {
    "text": "实提交记录、",
    "startMs": 9528,
    "endMs": 10153,
    "timestampMs": 9840,
    "confidence": 1.0
  },
  {
    "text": "代码变更和",
    "startMs": 10153,
    "endMs": 11439,
    "timestampMs": 10796,
    "confidence": 1.0
  },
  {
    "text": "贡献者信息",
    "startMs": 11439,
    "endMs": 12241,
    "timestampMs": 11840,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并核对改动",
    "startMs": 12488,
    "endMs": 13396,
    "timestampMs": 12942,
    "confidence": 1.0
  },
  {
    "text": "究竟处于提案、",
    "startMs": 13396,
    "endMs": 14292,
    "timestampMs": 13844,
    "confidence": 1.0
  },
  {
    "text": "已合并还是",
    "startMs": 14292,
    "endMs": 15495,
    "timestampMs": 14893,
    "confidence": 1.0
  },
  {
    "text": "已发布状态",
    "startMs": 15495,
    "endMs": 16285,
    "timestampMs": 15890,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "绝不把未上",
    "startMs": 16545,
    "endMs": 17382,
    "timestampMs": 16963,
    "confidence": 1.0
  },
  {
    "text": "线功能吹成已发布",
    "startMs": 17382,
    "endMs": 18691,
    "timestampMs": 18036,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "拍好",
    "startMs": 19234,
    "endMs": 19658,
    "timestampMs": 19446,
    "confidence": 1.0
  },
  {
    "text": " PR",
    "startMs": 19658,
    "endMs": 19929,
    "timestampMs": 19793,
    "confidence": 1.0
  },
  {
    "text": " 视频的核心",
    "startMs": 19929,
    "endMs": 20708,
    "timestampMs": 20318,
    "confidence": 1.0
  },
  {
    "text": "秘诀是先讲用户价值",
    "startMs": 20708,
    "endMs": 22512,
    "timestampMs": 21610,
    "confidence": 1.0
  },
  {
    "text": " 后抛代码证据",
    "startMs": 22512,
    "endMs": 23833,
    "timestampMs": 23172,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "千万别一开",
    "startMs": 24151,
    "endMs": 25295,
    "timestampMs": 24723,
    "confidence": 1.0
  },
  {
    "text": "场就从头到尾念完整",
    "startMs": 25295,
    "endMs": 26757,
    "timestampMs": 26026,
    "confidence": 1.0
  },
  {
    "text": " Diff",
    "startMs": 26757,
    "endMs": 27158,
    "timestampMs": 26957,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "视频画幅里",
    "startMs": 27441,
    "endMs": 28314,
    "timestampMs": 27877,
    "confidence": 1.0
  },
  {
    "text": "一整屏源码",
    "startMs": 28314,
    "endMs": 29222,
    "timestampMs": 28768,
    "confidence": 1.0
  },
  {
    "text": "根本看不清",
    "startMs": 29222,
    "endMs": 30024,
    "timestampMs": 29623,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "全场只需精选",
    "startMs": 30135,
    "endMs": 31232,
    "timestampMs": 30683,
    "confidence": 1.0
  },
  {
    "text": " 2",
    "startMs": 31232,
    "endMs": 31429,
    "timestampMs": 31330,
    "confidence": 1.0
  },
  {
    "text": " 到",
    "startMs": 31429,
    "endMs": 31719,
    "timestampMs": 31574,
    "confidence": 1.0
  },
  {
    "text": " 4",
    "startMs": 31719,
    "endMs": 31892,
    "timestampMs": 31805,
    "confidence": 1.0
  },
  {
    "text": " 个高可读性的",
    "startMs": 31892,
    "endMs": 32671,
    "timestampMs": 32281,
    "confidence": 1.0
  },
  {
    "text": "核心代码片段",
    "startMs": 32671,
    "endMs": 33732,
    "timestampMs": 33201,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "针对不同变更类型",
    "startMs": 34275,
    "endMs": 35713,
    "timestampMs": 34994,
    "confidence": 1.0
  },
  {
    "text": " 要精准点名对",
    "startMs": 35713,
    "endMs": 37034,
    "timestampMs": 36373,
    "confidence": 1.0
  },
  {
    "text": "应的官方代码块",
    "startMs": 37034,
    "endMs": 37989,
    "timestampMs": 37511,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "展示增删行变化用",
    "startMs": 38213,
    "endMs": 39652,
    "timestampMs": 38932,
    "confidence": 1.0
  },
  {
    "text": " code-diff",
    "startMs": 39652,
    "endMs": 40277,
    "timestampMs": 39964,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "表现架构重",
    "startMs": 40536,
    "endMs": 41433,
    "timestampMs": 40984,
    "confidence": 1.0
  },
  {
    "text": "构前后平滑变形用",
    "startMs": 41433,
    "endMs": 42753,
    "timestampMs": 42093,
    "confidence": 1.0
  },
  {
    "text": " code-morph",
    "startMs": 42753,
    "endMs": 43402,
    "timestampMs": 43077,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "演示新增命",
    "startMs": 43626,
    "endMs": 44723,
    "timestampMs": 44174,
    "confidence": 1.0
  },
  {
    "text": "令或新接口编写则用",
    "startMs": 44723,
    "endMs": 46362,
    "timestampMs": 45542,
    "confidence": 1.0
  },
  {
    "text": " code-typing",
    "startMs": 46362,
    "endMs": 46987,
    "timestampMs": 46674,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最后在片尾",
    "startMs": 47099,
    "endMs": 47959,
    "timestampMs": 47529,
    "confidence": 1.0
  },
  {
    "text": "自然落版版",
    "startMs": 47959,
    "endMs": 49150,
    "timestampMs": 48554,
    "confidence": 1.0
  },
  {
    "text": "本号与仓库地址",
    "startMs": 49150,
    "endMs": 50082,
    "timestampMs": 49616,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep05_s05_captions: Caption[] = [
  {
    "text": "最后来看十号工作流",
    "startMs": 97,
    "endMs": 1701,
    "timestampMs": 899,
    "confidence": 1.0
  },
  {
    "text": " /slideshow",
    "startMs": 1701,
    "endMs": 2503,
    "timestampMs": 2102,
    "confidence": 1.0
  },
  {
    "text": " 交互式演示文稿",
    "startMs": 2503,
    "endMs": 3800,
    "timestampMs": 3151,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及兜底的",
    "startMs": 4166,
    "endMs": 4873,
    "timestampMs": 4519,
    "confidence": 1.0
  },
  {
    "text": " Custom",
    "startMs": 4873,
    "endMs": 5345,
    "timestampMs": 5109,
    "confidence": 1.0
  },
  {
    "text": " Video",
    "startMs": 5345,
    "endMs": 5805,
    "timestampMs": 5575,
    "confidence": 1.0
  },
  {
    "text": " 定制路径",
    "startMs": 5805,
    "endMs": 6406,
    "timestampMs": 6105,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用",
    "startMs": 6946,
    "endMs": 7217,
    "timestampMs": 7081,
    "confidence": 1.0
  },
  {
    "text": " /slideshow",
    "startMs": 7217,
    "endMs": 8019,
    "timestampMs": 7618,
    "confidence": 1.0
  },
  {
    "text": " 制作的不是线性视频",
    "startMs": 8019,
    "endMs": 9623,
    "timestampMs": 8821,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而是支持现",
    "startMs": 9847,
    "endMs": 10767,
    "timestampMs": 10307,
    "confidence": 1.0
  },
  {
    "text": "场点击逐条揭示",
    "startMs": 10767,
    "endMs": 11781,
    "timestampMs": 11274,
    "confidence": 1.0
  },
  {
    "text": " Fragments",
    "startMs": 11781,
    "endMs": 12606,
    "timestampMs": 12193,
    "confidence": 1.0
  },
  {
    "text": "、通过热点按钮",
    "startMs": 12606,
    "endMs": 13962,
    "timestampMs": 13284,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Hotspot",
    "startMs": 14057,
    "endMs": 14741,
    "timestampMs": 14399,
    "confidence": 1.0
  },
  {
    "text": " 跳转到可选分支",
    "startMs": 14741,
    "endMs": 16061,
    "timestampMs": 15401,
    "confidence": 1.0
  },
  {
    "text": " Branches",
    "startMs": 16061,
    "endMs": 16816,
    "timestampMs": 16438,
    "confidence": 1.0
  },
  {
    "text": "、且自带演讲",
    "startMs": 16816,
    "endMs": 17936,
    "timestampMs": 17376,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "者备注与计时器的",
    "startMs": 17936,
    "endMs": 19198,
    "timestampMs": 18567,
    "confidence": 1.0
  },
  {
    "text": "活态演示文稿",
    "startMs": 19198,
    "endMs": 20094,
    "timestampMs": 19646,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "本地演讲只需运行",
    "startMs": 20637,
    "endMs": 22288,
    "timestampMs": 21462,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes present",
    "startMs": 22288,
    "endMs": 24139,
    "timestampMs": 23213,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在默认",
    "startMs": 24458,
    "endMs": 25012,
    "timestampMs": 24735,
    "confidence": 1.0
  },
  {
    "text": " 3004",
    "startMs": 25012,
    "endMs": 25637,
    "timestampMs": 25324,
    "confidence": 1.0
  },
  {
    "text": " 端口按",
    "startMs": 25637,
    "endMs": 26238,
    "timestampMs": 25937,
    "confidence": 1.0
  },
  {
    "text": " P",
    "startMs": 26238,
    "endMs": 26462,
    "timestampMs": 26350,
    "confidence": 1.0
  },
  {
    "text": " 键即可分出",
    "startMs": 26462,
    "endMs": 27441,
    "timestampMs": 26951,
    "confidence": 1.0
  },
  {
    "text": "观众全屏视图与",
    "startMs": 27441,
    "endMs": 28903,
    "timestampMs": 28172,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "讲者控台",
    "startMs": 28915,
    "endMs": 29682,
    "timestampMs": 29298,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这里有一个",
    "startMs": 30224,
    "endMs": 30837,
    "timestampMs": 30530,
    "confidence": 1.0
  },
  {
    "text": "必须标红的致命陷阱",
    "startMs": 30837,
    "endMs": 32288,
    "timestampMs": 31562,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "千万不要对",
    "startMs": 32547,
    "endMs": 33361,
    "timestampMs": 32954,
    "confidence": 1.0
  },
  {
    "text": " /slideshow",
    "startMs": 33361,
    "endMs": 34127,
    "timestampMs": 33744,
    "confidence": 1.0
  },
  {
    "text": " 工程直接执行",
    "startMs": 34127,
    "endMs": 35554,
    "timestampMs": 34840,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "hyperframes render！",
    "startMs": 35649,
    "endMs": 36981,
    "timestampMs": 36315,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它不会报错",
    "startMs": 37524,
    "endMs": 38231,
    "timestampMs": 37877,
    "confidence": 1.0
  },
  {
    "text": " 而是因为",
    "startMs": 38231,
    "endMs": 39045,
    "timestampMs": 38638,
    "confidence": 1.0
  },
  {
    "text": "没有主根组合",
    "startMs": 39045,
    "endMs": 40083,
    "timestampMs": 39564,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "会静默只渲",
    "startMs": 40236,
    "endMs": 41321,
    "timestampMs": 40778,
    "confidence": 1.0
  },
  {
    "text": "染出第一页",
    "startMs": 41321,
    "endMs": 41875,
    "timestampMs": 41598,
    "confidence": 1.0
  },
  {
    "text": " slide",
    "startMs": 41875,
    "endMs": 42300,
    "timestampMs": 42087,
    "confidence": 1.0
  },
  {
    "text": " 1",
    "startMs": 42300,
    "endMs": 42429,
    "timestampMs": 42364,
    "confidence": 1.0
  },
  {
    "text": " 变成几秒截断",
    "startMs": 42429,
    "endMs": 43443,
    "timestampMs": 42936,
    "confidence": 1.0
  },
  {
    "text": " MP4",
    "startMs": 43443,
    "endMs": 44116,
    "timestampMs": 43779,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "现场演示必须用",
    "startMs": 44458,
    "endMs": 45837,
    "timestampMs": 45147,
    "confidence": 1.0
  },
  {
    "text": " hyperframes present",
    "startMs": 45837,
    "endMs": 47028,
    "timestampMs": 46432,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "要单页静态图则用",
    "startMs": 47288,
    "endMs": 48738,
    "timestampMs": 48013,
    "confidence": 1.0
  },
  {
    "text": " hyperframes snapshot",
    "startMs": 48738,
    "endMs": 50236,
    "timestampMs": 49487,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "当你的需求",
    "startMs": 50778,
    "endMs": 51545,
    "timestampMs": 51161,
    "confidence": 1.0
  },
  {
    "text": "混合了多种",
    "startMs": 51545,
    "endMs": 52441,
    "timestampMs": 51993,
    "confidence": 1.0
  },
  {
    "text": "素材与多幕叙事时",
    "startMs": 52441,
    "endMs": 54021,
    "timestampMs": 53231,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "就走",
    "startMs": 54186,
    "endMs": 54552,
    "timestampMs": 54369,
    "confidence": 1.0
  },
  {
    "text": " general-video",
    "startMs": 54552,
    "endMs": 55401,
    "timestampMs": 54976,
    "confidence": 1.0
  },
  {
    "text": " 定制流",
    "startMs": 55401,
    "endMs": 55967,
    "timestampMs": 55684,
    "confidence": 1.0
  },
  {
    "text": " 并在提示词",
    "startMs": 55967,
    "endMs": 56910,
    "timestampMs": 56438,
    "confidence": 1.0
  },
  {
    "text": "里选定协作深度",
    "startMs": 56910,
    "endMs": 58196,
    "timestampMs": 57553,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "全权托付",
    "startMs": 58467,
    "endMs": 59233,
    "timestampMs": 58850,
    "confidence": 1.0
  },
  {
    "text": " Build",
    "startMs": 59233,
    "endMs": 59611,
    "timestampMs": 59422,
    "confidence": 1.0
  },
  {
    "text": " it",
    "startMs": 59611,
    "endMs": 59811,
    "timestampMs": 59711,
    "confidence": 1.0
  },
  {
    "text": " for",
    "startMs": 59811,
    "endMs": 60012,
    "timestampMs": 59911,
    "confidence": 1.0
  },
  {
    "text": " me",
    "startMs": 60012,
    "endMs": 60318,
    "timestampMs": 60165,
    "confidence": 1.0
  },
  {
    "text": "、先审分镜",
    "startMs": 60318,
    "endMs": 61309,
    "timestampMs": 60813,
    "confidence": 1.0
  },
  {
    "text": " Review",
    "startMs": 61309,
    "endMs": 61899,
    "timestampMs": 61604,
    "confidence": 1.0
  },
  {
    "text": " the",
    "startMs": 61899,
    "endMs": 61993,
    "timestampMs": 61946,
    "confidence": 1.0
  },
  {
    "text": " story",
    "startMs": 61993,
    "endMs": 62382,
    "timestampMs": 62187,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "first",
    "startMs": 62394,
    "endMs": 62830,
    "timestampMs": 62612,
    "confidence": 1.0
  },
  {
    "text": " 或全程深度共创",
    "startMs": 62830,
    "endMs": 64351,
    "timestampMs": 63590,
    "confidence": 1.0
  },
  {
    "text": " Co-direct",
    "startMs": 64351,
    "endMs": 65083,
    "timestampMs": 64717,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
