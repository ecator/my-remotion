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

export const EP07_TOTAL_FRAMES = 9425;

export const EP07_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp07AudioVoiceAndCaptions/ep07_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1807,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1741,
    "voiceDurationMs": 58008
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp07AudioVoiceAndCaptions/ep07_s02_voice.mp3",
    "fromFrame": 1807,
    "durationInFrames": 2069,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 2015,
    "voiceDurationMs": 67152
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp07AudioVoiceAndCaptions/ep07_s03_voice.mp3",
    "fromFrame": 3876,
    "durationInFrames": 2135,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 2081,
    "voiceDurationMs": 69360
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp07AudioVoiceAndCaptions/ep07_s04_voice.mp3",
    "fromFrame": 6011,
    "durationInFrames": 1980,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1926,
    "voiceDurationMs": 64200
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp07AudioVoiceAndCaptions/ep07_s05_voice.mp3",
    "fromFrame": 7991,
    "durationInFrames": 1434,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1374,
    "voiceDurationMs": 45768
  }
};

export const ep07_s01_captions: Caption[] = [
  {
    "text": "欢迎来到",
    "startMs": 97,
    "endMs": 899,
    "timestampMs": 498,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 899,
    "endMs": 1949,
    "timestampMs": 1424,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第七集",
    "startMs": 1949,
    "endMs": 3222,
    "timestampMs": 2585,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "画面决定观",
    "startMs": 3750,
    "endMs": 4599,
    "timestampMs": 4174,
    "confidence": 1.0
  },
  {
    "text": "众愿不愿意点进来",
    "startMs": 4599,
    "endMs": 5578,
    "timestampMs": 5088,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "声音和字幕",
    "startMs": 5967,
    "endMs": 6875,
    "timestampMs": 6421,
    "confidence": 1.0
  },
  {
    "text": "决定观众愿",
    "startMs": 6875,
    "endMs": 7759,
    "timestampMs": 7317,
    "confidence": 1.0
  },
  {
    "text": "不愿意看到底",
    "startMs": 7759,
    "endMs": 8514,
    "timestampMs": 8136,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "先看配音与音乐管线",
    "startMs": 9057,
    "endMs": 10684,
    "timestampMs": 9870,
    "confidence": 1.0
  },
  {
    "text": " 在",
    "startMs": 10684,
    "endMs": 11167,
    "timestampMs": 10925,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 11167,
    "endMs": 11851,
    "timestampMs": 11509,
    "confidence": 1.0
  },
  {
    "text": " 里",
    "startMs": 11851,
    "endMs": 12040,
    "timestampMs": 11945,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "你只需用自",
    "startMs": 12382,
    "endMs": 13278,
    "timestampMs": 12830,
    "confidence": 1.0
  },
  {
    "text": "然语言描述",
    "startMs": 13278,
    "endMs": 14068,
    "timestampMs": 13673,
    "confidence": 1.0
  },
  {
    "text": "情绪与性别",
    "startMs": 14068,
    "endMs": 15083,
    "timestampMs": 14575,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "底层语音引",
    "startMs": 15271,
    "endMs": 16274,
    "timestampMs": 15772,
    "confidence": 1.0
  },
  {
    "text": "擎会按优先",
    "startMs": 16274,
    "endMs": 17170,
    "timestampMs": 16722,
    "confidence": 1.0
  },
  {
    "text": "级自动级联选择",
    "startMs": 17170,
    "endMs": 18125,
    "timestampMs": 17647,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "配置了账号",
    "startMs": 18408,
    "endMs": 19198,
    "timestampMs": 18803,
    "confidence": 1.0
  },
  {
    "text": "或密钥时优先调用",
    "startMs": 19198,
    "endMs": 20767,
    "timestampMs": 19982,
    "confidence": 1.0
  },
  {
    "text": " HeyGen",
    "startMs": 20767,
    "endMs": 21344,
    "timestampMs": 21055,
    "confidence": 1.0
  },
  {
    "text": " 顶级声线或",
    "startMs": 21344,
    "endMs": 22382,
    "timestampMs": 21863,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "ElevenLabs",
    "startMs": 22394,
    "endMs": 23172,
    "timestampMs": 22783,
    "confidence": 1.0
  },
  {
    "text": " 也可以接入",
    "startMs": 23172,
    "endMs": 23921,
    "timestampMs": 23546,
    "confidence": 1.0
  },
  {
    "text": " Gemini TTS",
    "startMs": 23921,
    "endMs": 25206,
    "timestampMs": 24563,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果没有任",
    "startMs": 25454,
    "endMs": 26232,
    "timestampMs": 25843,
    "confidence": 1.0
  },
  {
    "text": "何云端密钥",
    "startMs": 26232,
    "endMs": 26845,
    "timestampMs": 26538,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "框架会自动",
    "startMs": 27081,
    "endMs": 27918,
    "timestampMs": 27499,
    "confidence": 1.0
  },
  {
    "text": "无缝回落到",
    "startMs": 27918,
    "endMs": 28708,
    "timestampMs": 28313,
    "confidence": 1.0
  },
  {
    "text": "本机免费运行的",
    "startMs": 28708,
    "endMs": 29958,
    "timestampMs": 29333,
    "confidence": 1.0
  },
  {
    "text": " Kokoro",
    "startMs": 29958,
    "endMs": 30548,
    "timestampMs": 30253,
    "confidence": 1.0
  },
  {
    "text": " 引擎",
    "startMs": 30548,
    "endMs": 31055,
    "timestampMs": 30801,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "内置整整",
    "startMs": 31362,
    "endMs": 32046,
    "timestampMs": 31704,
    "confidence": 1.0
  },
  {
    "text": " 54",
    "startMs": 32046,
    "endMs": 32423,
    "timestampMs": 32234,
    "confidence": 1.0
  },
  {
    "text": " 款多语言声线",
    "startMs": 32423,
    "endMs": 33355,
    "timestampMs": 32889,
    "confidence": 1.0
  },
  {
    "text": " 完全零成本离线合成",
    "startMs": 33355,
    "endMs": 35395,
    "timestampMs": 34375,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "配乐与音效方面",
    "startMs": 35937,
    "endMs": 37152,
    "timestampMs": 36544,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HeyGen",
    "startMs": 37517,
    "endMs": 37871,
    "timestampMs": 37694,
    "confidence": 1.0
  },
  {
    "text": " 会员可检索超过",
    "startMs": 37871,
    "endMs": 39239,
    "timestampMs": 38555,
    "confidence": 1.0
  },
  {
    "text": " 10,000",
    "startMs": 39239,
    "endMs": 39522,
    "timestampMs": 39380,
    "confidence": 1.0
  },
  {
    "text": " 首正版背景乐",
    "startMs": 39522,
    "endMs": 40454,
    "timestampMs": 39988,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "本地则永久内置",
    "startMs": 40819,
    "endMs": 42058,
    "timestampMs": 41438,
    "confidence": 1.0
  },
  {
    "text": " 19",
    "startMs": 42058,
    "endMs": 42352,
    "timestampMs": 42205,
    "confidence": 1.0
  },
  {
    "text": " 款高频转场与点击",
    "startMs": 42352,
    "endMs": 43756,
    "timestampMs": 43054,
    "confidence": 1.0
  },
  {
    "text": " SFX",
    "startMs": 43756,
    "endMs": 44546,
    "timestampMs": 44151,
    "confidence": 1.0
  },
  {
    "text": " 音效",
    "startMs": 44546,
    "endMs": 44947,
    "timestampMs": 44746,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "还能从",
    "startMs": 45230,
    "endMs": 45701,
    "timestampMs": 45465,
    "confidence": 1.0
  },
  {
    "text": " Openverse",
    "startMs": 45701,
    "endMs": 46385,
    "timestampMs": 46043,
    "confidence": 1.0
  },
  {
    "text": " 检索开源音效",
    "startMs": 46385,
    "endMs": 47482,
    "timestampMs": 46933,
    "confidence": 1.0
  },
  {
    "text": " 按需自动保",
    "startMs": 47482,
    "endMs": 48744,
    "timestampMs": 48113,
    "confidence": 1.0
  },
  {
    "text": "留版权署名",
    "startMs": 48744,
    "endMs": 49475,
    "timestampMs": 49109,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需要在",
    "startMs": 50017,
    "endMs": 50560,
    "timestampMs": 50288,
    "confidence": 1.0
  },
  {
    "text": " audio",
    "startMs": 50560,
    "endMs": 50926,
    "timestampMs": 50743,
    "confidence": 1.0
  },
  {
    "text": " 标签加上原生",
    "startMs": 50926,
    "endMs": 52223,
    "timestampMs": 51574,
    "confidence": 1.0
  },
  {
    "text": " loop",
    "startMs": 52223,
    "endMs": 52482,
    "timestampMs": 52352,
    "confidence": 1.0
  },
  {
    "text": " 属性",
    "startMs": 52482,
    "endMs": 52954,
    "timestampMs": 52718,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "短配乐就能在",
    "startMs": 53343,
    "endMs": 54499,
    "timestampMs": 53921,
    "confidence": 1.0
  },
  {
    "text": "预览与导出",
    "startMs": 54499,
    "endMs": 55194,
    "timestampMs": 54846,
    "confidence": 1.0
  },
  {
    "text": "中无缝铺满整段时长",
    "startMs": 55194,
    "endMs": 57187,
    "timestampMs": 56190,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep07_s02_captions: Caption[] = [
  {
    "text": "HyperFrames",
    "startMs": 47,
    "endMs": 896,
    "timestampMs": 471,
    "confidence": 1.0
  },
  {
    "text": " 最惊艳的工程设计",
    "startMs": 896,
    "endMs": 2264,
    "timestampMs": 1580,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "是把整套专业",
    "startMs": 2441,
    "endMs": 3538,
    "timestampMs": 2989,
    "confidence": 1.0
  },
  {
    "text": " DAW",
    "startMs": 3538,
    "endMs": 3927,
    "timestampMs": 3732,
    "confidence": 1.0
  },
  {
    "text": " 混音台直接",
    "startMs": 3927,
    "endMs": 4835,
    "timestampMs": 4381,
    "confidence": 1.0
  },
  {
    "text": "无损写进四个",
    "startMs": 4835,
    "endMs": 5849,
    "timestampMs": 5342,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 5849,
    "endMs": 6545,
    "timestampMs": 6197,
    "confidence": 1.0
  },
  {
    "text": " 属性里",
    "startMs": 6545,
    "endMs": 7040,
    "timestampMs": 6792,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "不需要任何",
    "startMs": 7311,
    "endMs": 8054,
    "timestampMs": 7682,
    "confidence": 1.0
  },
  {
    "text": "外部工程文件",
    "startMs": 8054,
    "endMs": 8950,
    "timestampMs": 8502,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-fx-chain",
    "startMs": 9163,
    "endMs": 10165,
    "timestampMs": 9664,
    "confidence": 1.0
  },
  {
    "text": " 按信号顺序",
    "startMs": 10165,
    "endMs": 11179,
    "timestampMs": 10672,
    "confidence": 1.0
  },
  {
    "text": "串起均衡器、",
    "startMs": 11179,
    "endMs": 12276,
    "timestampMs": 11727,
    "confidence": 1.0
  },
  {
    "text": "压缩器与限制器",
    "startMs": 12276,
    "endMs": 13726,
    "timestampMs": 13001,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-automation",
    "startMs": 13838,
    "endMs": 14628,
    "timestampMs": 14233,
    "confidence": 1.0
  },
  {
    "text": " 存储音量与",
    "startMs": 14628,
    "endMs": 15560,
    "timestampMs": 15094,
    "confidence": 1.0
  },
  {
    "text": "参数随时间",
    "startMs": 15560,
    "endMs": 16657,
    "timestampMs": 16108,
    "confidence": 1.0
  },
  {
    "text": "演进的包络曲线",
    "startMs": 16657,
    "endMs": 17777,
    "timestampMs": 17217,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "音量上限高达",
    "startMs": 18119,
    "endMs": 19109,
    "timestampMs": 18614,
    "confidence": 1.0
  },
  {
    "text": " +12",
    "startMs": 19109,
    "endMs": 19558,
    "timestampMs": 19333,
    "confidence": 1.0
  },
  {
    "text": " dB",
    "startMs": 19558,
    "endMs": 19923,
    "timestampMs": 19740,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "母带总线则推荐通过",
    "startMs": 20159,
    "endMs": 21704,
    "timestampMs": 20931,
    "confidence": 1.0
  },
  {
    "text": " truepeak",
    "startMs": 21704,
    "endMs": 22305,
    "timestampMs": 22004,
    "confidence": 1.0
  },
  {
    "text": " 压在",
    "startMs": 22305,
    "endMs": 22742,
    "timestampMs": 22523,
    "confidence": 1.0
  },
  {
    "text": " -3",
    "startMs": 22742,
    "endMs": 23166,
    "timestampMs": 22954,
    "confidence": 1.0
  },
  {
    "text": " dBTP",
    "startMs": 23166,
    "endMs": 23697,
    "timestampMs": 23431,
    "confidence": 1.0
  },
  {
    "text": " 防削波",
    "startMs": 23697,
    "endMs": 24216,
    "timestampMs": 23956,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-fx-carve",
    "startMs": 24327,
    "endMs": 25353,
    "timestampMs": 24840,
    "confidence": 1.0
  },
  {
    "text": " 记录智能人",
    "startMs": 25353,
    "endMs": 26214,
    "timestampMs": 25783,
    "confidence": 1.0
  },
  {
    "text": "声频段雕刻与",
    "startMs": 26214,
    "endMs": 27452,
    "timestampMs": 26833,
    "confidence": 1.0
  },
  {
    "text": "自动闪避设置",
    "startMs": 27452,
    "endMs": 28478,
    "timestampMs": 27965,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-audio-group",
    "startMs": 28808,
    "endMs": 29716,
    "timestampMs": 29262,
    "confidence": 1.0
  },
  {
    "text": " 则把多段零",
    "startMs": 29716,
    "endMs": 31002,
    "timestampMs": 30359,
    "confidence": 1.0
  },
  {
    "text": "散旁白汇聚到",
    "startMs": 31002,
    "endMs": 32087,
    "timestampMs": 31544,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "hf-audio-group",
    "startMs": 32099,
    "endMs": 33278,
    "timestampMs": 32688,
    "confidence": 1.0
  },
  {
    "text": " 总线上统一混音",
    "startMs": 33278,
    "endMs": 34599,
    "timestampMs": 33938,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这里必须牢",
    "startMs": 35141,
    "endMs": 36214,
    "timestampMs": 35677,
    "confidence": 1.0
  },
  {
    "text": "记三大避坑铁律",
    "startMs": 36214,
    "endMs": 37346,
    "timestampMs": 36780,
    "confidence": 1.0
  },
  {
    "text": " 第一",
    "startMs": 37346,
    "endMs": 37959,
    "timestampMs": 37652,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-fx-carve",
    "startMs": 38313,
    "endMs": 39457,
    "timestampMs": 38885,
    "confidence": 1.0
  },
  {
    "text": " 永远挂在背景音乐轨",
    "startMs": 39457,
    "endMs": 40931,
    "timestampMs": 40194,
    "confidence": 1.0
  },
  {
    "text": "上而非人声轨",
    "startMs": 40931,
    "endMs": 42063,
    "timestampMs": 41497,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而且所有音频",
    "startMs": 42417,
    "endMs": 43573,
    "timestampMs": 42995,
    "confidence": 1.0
  },
  {
    "text": " JSON",
    "startMs": 43573,
    "endMs": 44245,
    "timestampMs": 43909,
    "confidence": 1.0
  },
  {
    "text": " 属性必须使",
    "startMs": 44245,
    "endMs": 45224,
    "timestampMs": 44734,
    "confidence": 1.0
  },
  {
    "text": "用双引号并转义&",
    "startMs": 45224,
    "endMs": 46391,
    "timestampMs": 45807,
    "confidence": 1.0
  },
  {
    "text": "quot",
    "startMs": 46391,
    "endMs": 46863,
    "timestampMs": 46627,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用单引号会",
    "startMs": 46975,
    "endMs": 48059,
    "timestampMs": 47517,
    "confidence": 1.0
  },
  {
    "text": "导致雕刻脚",
    "startMs": 48059,
    "endMs": 49109,
    "timestampMs": 48584,
    "confidence": 1.0
  },
  {
    "text": "本读不到已有链",
    "startMs": 49109,
    "endMs": 49970,
    "timestampMs": 49539,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二",
    "startMs": 50265,
    "endMs": 50642,
    "timestampMs": 50453,
    "confidence": 1.0
  },
  {
    "text": " 切片上的自动化",
    "startMs": 50642,
    "endMs": 51939,
    "timestampMs": 51290,
    "confidence": 1.0
  },
  {
    "text": " t",
    "startMs": 51939,
    "endMs": 52222,
    "timestampMs": 52080,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 52222,
    "endMs": 52670,
    "timestampMs": 52446,
    "confidence": 1.0
  },
  {
    "text": " 是相对该切片起点",
    "startMs": 52670,
    "endMs": 54026,
    "timestampMs": 53348,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而",
    "startMs": 54250,
    "endMs": 54510,
    "timestampMs": 54380,
    "confidence": 1.0
  },
  {
    "text": " hf-audio-group",
    "startMs": 54510,
    "endMs": 55689,
    "timestampMs": 55099,
    "confidence": 1.0
  },
  {
    "text": " 总线的",
    "startMs": 55689,
    "endMs": 56043,
    "timestampMs": 55866,
    "confidence": 1.0
  },
  {
    "text": " t",
    "startMs": 56043,
    "endMs": 56338,
    "timestampMs": 56190,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 56338,
    "endMs": 56857,
    "timestampMs": 56597,
    "confidence": 1.0
  },
  {
    "text": " 是从整部视频",
    "startMs": 56857,
    "endMs": 57859,
    "timestampMs": 57358,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 57859,
    "endMs": 58130,
    "timestampMs": 57994,
    "confidence": 1.0
  },
  {
    "text": " 秒起算",
    "startMs": 58130,
    "endMs": 58484,
    "timestampMs": 58307,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三",
    "startMs": 58802,
    "endMs": 59250,
    "timestampMs": 59026,
    "confidence": 1.0
  },
  {
    "text": " 包络首点会",
    "startMs": 59250,
    "endMs": 60394,
    "timestampMs": 59822,
    "confidence": 1.0
  },
  {
    "text": "向前回溯保持",
    "startMs": 60394,
    "endMs": 61491,
    "timestampMs": 60942,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "音乐早于人",
    "startMs": 61603,
    "endMs": 62534,
    "timestampMs": 62068,
    "confidence": 1.0
  },
  {
    "text": "声响起时必须在",
    "startMs": 62534,
    "endMs": 63796,
    "timestampMs": 63165,
    "confidence": 1.0
  },
  {
    "text": " t",
    "startMs": 63796,
    "endMs": 64067,
    "timestampMs": 63931,
    "confidence": 1.0
  },
  {
    "text": " 0",
    "startMs": 64067,
    "endMs": 64598,
    "timestampMs": 64332,
    "confidence": 1.0
  },
  {
    "text": " 显式补一个",
    "startMs": 64598,
    "endMs": 65447,
    "timestampMs": 65022,
    "confidence": 1.0
  },
  {
    "text": "无衰减起点",
    "startMs": 65447,
    "endMs": 66320,
    "timestampMs": 65883,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep07_s03_captions: Caption[] = [
  {
    "text": "深入混音机架",
    "startMs": 47,
    "endMs": 1203,
    "timestampMs": 625,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 1203,
    "endMs": 2429,
    "timestampMs": 1816,
    "confidence": 1.0
  },
  {
    "text": " 内置",
    "startMs": 2429,
    "endMs": 2854,
    "timestampMs": 2641,
    "confidence": 1.0
  },
  {
    "text": " 16",
    "startMs": 2854,
    "endMs": 3184,
    "timestampMs": 3019,
    "confidence": 1.0
  },
  {
    "text": " 种音频效果器",
    "startMs": 3184,
    "endMs": 4222,
    "timestampMs": 3703,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "分为滤波",
    "startMs": 4469,
    "endMs": 5118,
    "timestampMs": 4793,
    "confidence": 1.0
  },
  {
    "text": " Filters",
    "startMs": 5118,
    "endMs": 5849,
    "timestampMs": 5483,
    "confidence": 1.0
  },
  {
    "text": "、动态",
    "startMs": 5849,
    "endMs": 6686,
    "timestampMs": 6267,
    "confidence": 1.0
  },
  {
    "text": " Dynamics",
    "startMs": 6686,
    "endMs": 7524,
    "timestampMs": 7105,
    "confidence": 1.0
  },
  {
    "text": "、非线性染色",
    "startMs": 7524,
    "endMs": 8691,
    "timestampMs": 8107,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Non-linear",
    "startMs": 8785,
    "endMs": 9458,
    "timestampMs": 9121,
    "confidence": 1.0
  },
  {
    "text": " 与空间时间",
    "startMs": 9458,
    "endMs": 10354,
    "timestampMs": 9906,
    "confidence": 1.0
  },
  {
    "text": " Time",
    "startMs": 10354,
    "endMs": 10672,
    "timestampMs": 10513,
    "confidence": 1.0
  },
  {
    "text": " 四大族",
    "startMs": 10672,
    "endMs": 11321,
    "timestampMs": 10996,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并封装了",
    "startMs": 11521,
    "endMs": 12111,
    "timestampMs": 11816,
    "confidence": 1.0
  },
  {
    "text": " 22",
    "startMs": 12111,
    "endMs": 12559,
    "timestampMs": 12335,
    "confidence": 1.0
  },
  {
    "text": " 个开箱即用的",
    "startMs": 12559,
    "endMs": 13491,
    "timestampMs": 13025,
    "confidence": 1.0
  },
  {
    "text": "命名预设",
    "startMs": 13491,
    "endMs": 14092,
    "timestampMs": 13791,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如一键修复人声的",
    "startMs": 14204,
    "endMs": 15642,
    "timestampMs": 14923,
    "confidence": 1.0
  },
  {
    "text": " voice-clean",
    "startMs": 15642,
    "endMs": 16503,
    "timestampMs": 16072,
    "confidence": 1.0
  },
  {
    "text": "、广播质感",
    "startMs": 16503,
    "endMs": 17565,
    "timestampMs": 17034,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "voice-broadcast",
    "startMs": 17659,
    "endMs": 18708,
    "timestampMs": 18183,
    "confidence": 1.0
  },
  {
    "text": " 以及无线电、",
    "startMs": 18708,
    "endMs": 19558,
    "timestampMs": 19133,
    "confidence": 1.0
  },
  {
    "text": "老磁带等趣味声效",
    "startMs": 19558,
    "endMs": 21173,
    "timestampMs": 20365,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "遵循先减法",
    "startMs": 21716,
    "endMs": 22907,
    "timestampMs": 22311,
    "confidence": 1.0
  },
  {
    "text": "滤除低频嗡鸣与",
    "startMs": 22907,
    "endMs": 24381,
    "timestampMs": 23644,
    "confidence": 1.0
  },
  {
    "text": "闷浊、",
    "startMs": 24381,
    "endMs": 24841,
    "timestampMs": 24611,
    "confidence": 1.0
  },
  {
    "text": "再做压缩均平",
    "startMs": 24841,
    "endMs": 26244,
    "timestampMs": 25542,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "接着雕刻背景乐、",
    "startMs": 26433,
    "endMs": 27612,
    "timestampMs": 27022,
    "confidence": 1.0
  },
  {
    "text": "最后放饱和",
    "startMs": 27612,
    "endMs": 28791,
    "timestampMs": 28201,
    "confidence": 1.0
  },
  {
    "text": "与限制器封顶的",
    "startMs": 28791,
    "endMs": 29746,
    "timestampMs": 29268,
    "confidence": 1.0
  },
  {
    "text": "信号顺序",
    "startMs": 29746,
    "endMs": 30454,
    "timestampMs": 30100,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "效果立竿见影",
    "startMs": 30631,
    "endMs": 31657,
    "timestampMs": 31144,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "但开发者写",
    "startMs": 32199,
    "endMs": 33083,
    "timestampMs": 32641,
    "confidence": 1.0
  },
  {
    "text": "自动化曲线",
    "startMs": 33083,
    "endMs": 33791,
    "timestampMs": 33437,
    "confidence": 1.0
  },
  {
    "text": "时一定要避",
    "startMs": 33791,
    "endMs": 34770,
    "timestampMs": 34280,
    "confidence": 1.0
  },
  {
    "text": "开一个静默陷阱",
    "startMs": 34770,
    "endMs": 35701,
    "timestampMs": 35235,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "compressor、",
    "startMs": 35949,
    "endMs": 36645,
    "timestampMs": 36297,
    "confidence": 1.0
  },
  {
    "text": "limiter、",
    "startMs": 36645,
    "endMs": 37388,
    "timestampMs": 37016,
    "confidence": 1.0
  },
  {
    "text": "truepeak、",
    "startMs": 37388,
    "endMs": 38190,
    "timestampMs": 37789,
    "confidence": 1.0
  },
  {
    "text": "gate、",
    "startMs": 38190,
    "endMs": 38862,
    "timestampMs": 38526,
    "confidence": 1.0
  },
  {
    "text": "bitcrush",
    "startMs": 38862,
    "endMs": 39782,
    "timestampMs": 39322,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 39782,
    "endMs": 40006,
    "timestampMs": 39894,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "pitchshift",
    "startMs": 40017,
    "endMs": 40631,
    "timestampMs": 40324,
    "confidence": 1.0
  },
  {
    "text": " 这类整体配置的音频",
    "startMs": 40631,
    "endMs": 42058,
    "timestampMs": 41344,
    "confidence": 1.0
  },
  {
    "text": " Worklet",
    "startMs": 42058,
    "endMs": 42706,
    "timestampMs": 42382,
    "confidence": 1.0
  },
  {
    "text": " 效果器",
    "startMs": 42706,
    "endMs": 43249,
    "timestampMs": 42977,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "其内部参数",
    "startMs": 43579,
    "endMs": 44581,
    "timestampMs": 44080,
    "confidence": 1.0
  },
  {
    "text": "全部不支持",
    "startMs": 44581,
    "endMs": 45536,
    "timestampMs": 45058,
    "confidence": 1.0
  },
  {
    "text": "自动化包络",
    "startMs": 45536,
    "endMs": 46197,
    "timestampMs": 45866,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "硬写上去不",
    "startMs": 46308,
    "endMs": 47358,
    "timestampMs": 46833,
    "confidence": 1.0
  },
  {
    "text": "会报错但会静默无效",
    "startMs": 47358,
    "endMs": 48926,
    "timestampMs": 48142,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "想动态控制压缩力度",
    "startMs": 49245,
    "endMs": 50978,
    "timestampMs": 50111,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "正确做法是在",
    "startMs": 51214,
    "endMs": 52464,
    "timestampMs": 51839,
    "confidence": 1.0
  },
  {
    "text": "压缩器前面",
    "startMs": 52464,
    "endMs": 53337,
    "timestampMs": 52900,
    "confidence": 1.0
  },
  {
    "text": "加一级可自动化的",
    "startMs": 53337,
    "endMs": 54669,
    "timestampMs": 54003,
    "confidence": 1.0
  },
  {
    "text": " gain",
    "startMs": 54669,
    "endMs": 54941,
    "timestampMs": 54805,
    "confidence": 1.0
  },
  {
    "text": " 节点",
    "startMs": 54941,
    "endMs": 55294,
    "timestampMs": 55117,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "渲染前务必跑通",
    "startMs": 55813,
    "endMs": 57110,
    "timestampMs": 56461,
    "confidence": 1.0
  },
  {
    "text": " 4",
    "startMs": 57110,
    "endMs": 57441,
    "timestampMs": 57275,
    "confidence": 1.0
  },
  {
    "text": " 条音频",
    "startMs": 57441,
    "endMs": 57806,
    "timestampMs": 57623,
    "confidence": 1.0
  },
  {
    "text": " Lint",
    "startMs": 57806,
    "endMs": 58077,
    "timestampMs": 57941,
    "confidence": 1.0
  },
  {
    "text": " 规则",
    "startMs": 58077,
    "endMs": 58525,
    "timestampMs": 58301,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如拦截语法损坏的",
    "startMs": 58750,
    "endMs": 60412,
    "timestampMs": 59581,
    "confidence": 1.0
  },
  {
    "text": " audio_attribute_unreadable",
    "startMs": 60412,
    "endMs": 63431,
    "timestampMs": 61921,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "和提醒先打组的",
    "startMs": 63443,
    "endMs": 64728,
    "timestampMs": 64085,
    "confidence": 1.0
  },
  {
    "text": " audio_carve_ungrouped_sources",
    "startMs": 64728,
    "endMs": 68537,
    "timestampMs": 66632,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep07_s04_captions: Caption[] = [
  {
    "text": "搞定声音",
    "startMs": 97,
    "endMs": 876,
    "timestampMs": 486,
    "confidence": 1.0
  },
  {
    "text": " 再看高颜值",
    "startMs": 876,
    "endMs": 2066,
    "timestampMs": 1471,
    "confidence": 1.0
  },
  {
    "text": "动态字幕与",
    "startMs": 2066,
    "endMs": 3092,
    "timestampMs": 2579,
    "confidence": 1.0
  },
  {
    "text": "人物遮挡大字",
    "startMs": 3092,
    "endMs": 4118,
    "timestampMs": 3605,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "想做出巨型关键词从",
    "startMs": 4658,
    "endMs": 6415,
    "timestampMs": 5536,
    "confidence": 1.0
  },
  {
    "text": "主讲人背后",
    "startMs": 6415,
    "endMs": 7146,
    "timestampMs": 6780,
    "confidence": 1.0
  },
  {
    "text": "穿插而过的",
    "startMs": 7146,
    "endMs": 7807,
    "timestampMs": 7476,
    "confidence": 1.0
  },
  {
    "text": "电影感画面",
    "startMs": 7807,
    "endMs": 8538,
    "timestampMs": 8172,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需在终端",
    "startMs": 8833,
    "endMs": 9575,
    "timestampMs": 9204,
    "confidence": 1.0
  },
  {
    "text": "免费运行一行",
    "startMs": 9575,
    "endMs": 10483,
    "timestampMs": 10029,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "npx hyperframes remove-background subject",
    "startMs": 10578,
    "endMs": 13325,
    "timestampMs": 11951,
    "confidence": 1.0
  },
  {
    "text": " .mp4",
    "startMs": 13325,
    "endMs": 14210,
    "timestampMs": 13767,
    "confidence": 1.0
  },
  {
    "text": " -",
    "startMs": 14210,
    "endMs": 14304,
    "timestampMs": 14257,
    "confidence": 1.0
  },
  {
    "text": " o",
    "startMs": 14304,
    "endMs": 14516,
    "timestampMs": 14410,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "subject.webm",
    "startMs": 14516,
    "endMs": 15943,
    "timestampMs": 15229,
    "confidence": 1.0
  },
  {
    "text": " --background-output",
    "startMs": 15943,
    "endMs": 16899,
    "timestampMs": 16421,
    "confidence": 1.0
  },
  {
    "text": " plate.webm",
    "startMs": 16899,
    "endMs": 18178,
    "timestampMs": 17538,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一次生成透",
    "startMs": 18390,
    "endMs": 19322,
    "timestampMs": 18856,
    "confidence": 1.0
  },
  {
    "text": "明人物前景与",
    "startMs": 19322,
    "endMs": 20253,
    "timestampMs": 19787,
    "confidence": 1.0
  },
  {
    "text": "带人形挖空的反相",
    "startMs": 20253,
    "endMs": 21456,
    "timestampMs": 20854,
    "confidence": 1.0
  },
  {
    "text": " Alpha",
    "startMs": 21456,
    "endMs": 22010,
    "timestampMs": 21733,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "背景底板",
    "startMs": 22034,
    "endMs": 22671,
    "timestampMs": 22352,
    "confidence": 1.0
  },
  {
    "text": " 再把大字夹在",
    "startMs": 22671,
    "endMs": 23850,
    "timestampMs": 23260,
    "confidence": 1.0
  },
  {
    "text": "两层之间",
    "startMs": 23850,
    "endMs": 24605,
    "timestampMs": 24227,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "注意它的",
    "startMs": 25147,
    "endMs": 25619,
    "timestampMs": 25383,
    "confidence": 1.0
  },
  {
    "text": "底层本地模型",
    "startMs": 25619,
    "endMs": 26763,
    "timestampMs": 26191,
    "confidence": 1.0
  },
  {
    "text": " u2net_human_seg",
    "startMs": 26763,
    "endMs": 29392,
    "timestampMs": 28077,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "专为清晰人像设计",
    "startMs": 29499,
    "endMs": 30914,
    "timestampMs": 30206,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "对非人物产",
    "startMs": 31208,
    "endMs": 32199,
    "timestampMs": 31703,
    "confidence": 1.0
  },
  {
    "text": "品或手持深",
    "startMs": 32199,
    "endMs": 33131,
    "timestampMs": 32665,
    "confidence": 1.0
  },
  {
    "text": "色麦克风容易抠漏",
    "startMs": 33131,
    "endMs": 34369,
    "timestampMs": 33750,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并且移动人物位置时",
    "startMs": 34593,
    "endMs": 36020,
    "timestampMs": 35306,
    "confidence": 1.0
  },
  {
    "text": " 一定要给外层包裹的",
    "startMs": 36020,
    "endMs": 37494,
    "timestampMs": 36757,
    "confidence": 1.0
  },
  {
    "text": " div",
    "startMs": 37494,
    "endMs": 37954,
    "timestampMs": 37724,
    "confidence": 1.0
  },
  {
    "text": " 做动画",
    "startMs": 37954,
    "endMs": 38449,
    "timestampMs": 38201,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "绝不要直接对",
    "startMs": 38561,
    "endMs": 39410,
    "timestampMs": 38985,
    "confidence": 1.0
  },
  {
    "text": " video",
    "startMs": 39410,
    "endMs": 39787,
    "timestampMs": 39598,
    "confidence": 1.0
  },
  {
    "text": " 本身做位移动画",
    "startMs": 39787,
    "endMs": 41179,
    "timestampMs": 40483,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在",
    "startMs": 41721,
    "endMs": 41957,
    "timestampMs": 41839,
    "confidence": 1.0
  },
  {
    "text": " 91",
    "startMs": 41957,
    "endMs": 42299,
    "timestampMs": 42128,
    "confidence": 1.0
  },
  {
    "text": " 款官方",
    "startMs": 42299,
    "endMs": 42912,
    "timestampMs": 42605,
    "confidence": 1.0
  },
  {
    "text": " Captions",
    "startMs": 42912,
    "endMs": 43514,
    "timestampMs": 43213,
    "confidence": 1.0
  },
  {
    "text": " Catalog",
    "startMs": 43514,
    "endMs": 43974,
    "timestampMs": 43744,
    "confidence": 1.0
  },
  {
    "text": " 花字组件中",
    "startMs": 43974,
    "endMs": 44846,
    "timestampMs": 44410,
    "confidence": 1.0
  },
  {
    "text": " 按调性选型",
    "startMs": 44846,
    "endMs": 46132,
    "timestampMs": 45489,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "高能爆款选",
    "startMs": 46450,
    "endMs": 47275,
    "timestampMs": 46862,
    "confidence": 1.0
  },
  {
    "text": " caption-kinetic-slam",
    "startMs": 47275,
    "endMs": 48525,
    "timestampMs": 47900,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 48525,
    "endMs": 48856,
    "timestampMs": 48690,
    "confidence": 1.0
  },
  {
    "text": " caption-highlight",
    "startMs": 48856,
    "endMs": 49740,
    "timestampMs": 49298,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "极客风格选",
    "startMs": 49964,
    "endMs": 50766,
    "timestampMs": 50365,
    "confidence": 1.0
  },
  {
    "text": " caption-glitch-rgb",
    "startMs": 50766,
    "endMs": 52075,
    "timestampMs": 51420,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "复杂背景用",
    "startMs": 52358,
    "endMs": 53372,
    "timestampMs": 52865,
    "confidence": 1.0
  },
  {
    "text": " caption-blend-difference",
    "startMs": 53372,
    "endMs": 54563,
    "timestampMs": 53967,
    "confidence": 1.0
  },
  {
    "text": " 反相防吞字",
    "startMs": 54563,
    "endMs": 55459,
    "timestampMs": 55011,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "且同一章节",
    "startMs": 55571,
    "endMs": 56526,
    "timestampMs": 56048,
    "confidence": 1.0
  },
  {
    "text": "只守一种花字身份、",
    "startMs": 56526,
    "endMs": 57918,
    "timestampMs": 57222,
    "confidence": 1.0
  },
  {
    "text": "仅强调关键词",
    "startMs": 57918,
    "endMs": 59321,
    "timestampMs": 58619,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "演示代码则搭配",
    "startMs": 59640,
    "endMs": 60972,
    "timestampMs": 60306,
    "confidence": 1.0
  },
  {
    "text": " code-typing、",
    "startMs": 60972,
    "endMs": 61656,
    "timestampMs": 61314,
    "confidence": 1.0
  },
  {
    "text": "code-diff",
    "startMs": 61656,
    "endMs": 62517,
    "timestampMs": 62086,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 62517,
    "endMs": 62717,
    "timestampMs": 62617,
    "confidence": 1.0
  },
  {
    "text": " code-morph",
    "startMs": 62717,
    "endMs": 63378,
    "timestampMs": 63047,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep07_s05_captions: Caption[] = [
  {
    "text": "本集最后解",
    "startMs": 97,
    "endMs": 1099,
    "timestampMs": 598,
    "confidence": 1.0
  },
  {
    "text": "锁剪辑师最爱的",
    "startMs": 1099,
    "endMs": 1984,
    "timestampMs": 1541,
    "confidence": 1.0
  },
  {
    "text": "节奏利器",
    "startMs": 1984,
    "endMs": 2656,
    "timestampMs": 2320,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Speed",
    "startMs": 2916,
    "endMs": 3328,
    "timestampMs": 3122,
    "confidence": 1.0
  },
  {
    "text": " Ramps",
    "startMs": 3328,
    "endMs": 3906,
    "timestampMs": 3617,
    "confidence": 1.0
  },
  {
    "text": " 平滑变速曲线",
    "startMs": 3906,
    "endMs": 5003,
    "timestampMs": 4454,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在",
    "startMs": 5542,
    "endMs": 5766,
    "timestampMs": 5654,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 5766,
    "endMs": 6509,
    "timestampMs": 6137,
    "confidence": 1.0
  },
  {
    "text": " 里",
    "startMs": 6509,
    "endMs": 6710,
    "timestampMs": 6609,
    "confidence": 1.0
  },
  {
    "text": " 你不需要额",
    "startMs": 6710,
    "endMs": 7771,
    "timestampMs": 7240,
    "confidence": 1.0
  },
  {
    "text": "外引入复杂插件",
    "startMs": 7771,
    "endMs": 8750,
    "timestampMs": 8260,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需在",
    "startMs": 8915,
    "endMs": 9375,
    "timestampMs": 9145,
    "confidence": 1.0
  },
  {
    "text": " video",
    "startMs": 9375,
    "endMs": 9906,
    "timestampMs": 9640,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 9906,
    "endMs": 10200,
    "timestampMs": 10053,
    "confidence": 1.0
  },
  {
    "text": " audio",
    "startMs": 10200,
    "endMs": 10531,
    "timestampMs": 10365,
    "confidence": 1.0
  },
  {
    "text": " 的",
    "startMs": 10531,
    "endMs": 10672,
    "timestampMs": 10601,
    "confidence": 1.0
  },
  {
    "text": " data-automation",
    "startMs": 10672,
    "endMs": 11450,
    "timestampMs": 11061,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "属性里新增一条",
    "startMs": 11462,
    "endMs": 12736,
    "timestampMs": 12099,
    "confidence": 1.0
  },
  {
    "text": " target",
    "startMs": 12736,
    "endMs": 13196,
    "timestampMs": 12966,
    "confidence": 1.0
  },
  {
    "text": " 为",
    "startMs": 13196,
    "endMs": 13443,
    "timestampMs": 13319,
    "confidence": 1.0
  },
  {
    "text": " rate",
    "startMs": 13443,
    "endMs": 13679,
    "timestampMs": 13561,
    "confidence": 1.0
  },
  {
    "text": " 的曲线",
    "startMs": 13679,
    "endMs": 14186,
    "timestampMs": 13932,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "写上各时间点的",
    "startMs": 14493,
    "endMs": 15542,
    "timestampMs": 15017,
    "confidence": 1.0
  },
  {
    "text": "倍率节点和弯曲度",
    "startMs": 15542,
    "endMs": 16922,
    "timestampMs": 16232,
    "confidence": 1.0
  },
  {
    "text": " curve",
    "startMs": 16922,
    "endMs": 17358,
    "timestampMs": 17140,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "速度就能在",
    "startMs": 17470,
    "endMs": 18190,
    "timestampMs": 17830,
    "confidence": 1.0
  },
  {
    "text": " 0.1",
    "startMs": 18190,
    "endMs": 18838,
    "timestampMs": 18514,
    "confidence": 1.0
  },
  {
    "text": " 倍慢动作到",
    "startMs": 18838,
    "endMs": 19605,
    "timestampMs": 19221,
    "confidence": 1.0
  },
  {
    "text": " 10",
    "startMs": 19605,
    "endMs": 20017,
    "timestampMs": 19811,
    "confidence": 1.0
  },
  {
    "text": " 倍快进之间按对",
    "startMs": 20017,
    "endMs": 21397,
    "timestampMs": 20707,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "数尺度丝滑过渡",
    "startMs": 21397,
    "endMs": 22447,
    "timestampMs": 21922,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如从",
    "startMs": 22848,
    "endMs": 23284,
    "timestampMs": 23066,
    "confidence": 1.0
  },
  {
    "text": " 0.5",
    "startMs": 23284,
    "endMs": 23897,
    "timestampMs": 23590,
    "confidence": 1.0
  },
  {
    "text": " 倍到",
    "startMs": 23897,
    "endMs": 24050,
    "timestampMs": 23973,
    "confidence": 1.0
  },
  {
    "text": " 2",
    "startMs": 24050,
    "endMs": 24345,
    "timestampMs": 24197,
    "confidence": 1.0
  },
  {
    "text": " 倍的中点恰",
    "startMs": 24345,
    "endMs": 25359,
    "timestampMs": 24852,
    "confidence": 1.0
  },
  {
    "text": "好精准经过",
    "startMs": 25359,
    "endMs": 25937,
    "timestampMs": 25648,
    "confidence": 1.0
  },
  {
    "text": " 1",
    "startMs": 25937,
    "endMs": 26173,
    "timestampMs": 26055,
    "confidence": 1.0
  },
  {
    "text": " 倍原速",
    "startMs": 26173,
    "endMs": 26550,
    "timestampMs": 26361,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最稳健的是",
    "startMs": 27093,
    "endMs": 27942,
    "timestampMs": 27517,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "预览播放、",
    "startMs": 28331,
    "endMs": 29039,
    "timestampMs": 28685,
    "confidence": 1.0
  },
  {
    "text": "浏览器编辑器滑块与",
    "startMs": 29039,
    "endMs": 30819,
    "timestampMs": 29929,
    "confidence": 1.0
  },
  {
    "text": "最终渲染共享同一个",
    "startMs": 30819,
    "endMs": 32246,
    "timestampMs": 31532,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "sourceTimeAt",
    "startMs": 32270,
    "endMs": 33013,
    "timestampMs": 32641,
    "confidence": 1.0
  },
  {
    "text": " 寻址映射函数",
    "startMs": 33013,
    "endMs": 34133,
    "timestampMs": 33573,
    "confidence": 1.0
  },
  {
    "text": " 且自动保持",
    "startMs": 34133,
    "endMs": 35230,
    "timestampMs": 34681,
    "confidence": 1.0
  },
  {
    "text": "音频音高不变",
    "startMs": 35230,
    "endMs": 36126,
    "timestampMs": 35678,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在浏览器编",
    "startMs": 36362,
    "endMs": 37352,
    "timestampMs": 36857,
    "confidence": 1.0
  },
  {
    "text": "辑器里还能一键套用",
    "startMs": 37352,
    "endMs": 38614,
    "timestampMs": 37983,
    "confidence": 1.0
  },
  {
    "text": " Montage、",
    "startMs": 38614,
    "endMs": 39428,
    "timestampMs": 39021,
    "confidence": 1.0
  },
  {
    "text": "Hero、",
    "startMs": 39428,
    "endMs": 40100,
    "timestampMs": 39764,
    "confidence": 1.0
  },
  {
    "text": "Bullet",
    "startMs": 40100,
    "endMs": 40737,
    "timestampMs": 40418,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Flash",
    "startMs": 40849,
    "endMs": 41143,
    "timestampMs": 40996,
    "confidence": 1.0
  },
  {
    "text": " in",
    "startMs": 41143,
    "endMs": 41379,
    "timestampMs": 41261,
    "confidence": 1.0
  },
  {
    "text": " 等六款变速预设",
    "startMs": 41379,
    "endMs": 42676,
    "timestampMs": 42027,
    "confidence": 1.0
  },
  {
    "text": " 让快慢镜卡",
    "startMs": 42676,
    "endMs": 43891,
    "timestampMs": 43283,
    "confidence": 1.0
  },
  {
    "text": "点所见即所得",
    "startMs": 43891,
    "endMs": 44941,
    "timestampMs": 44416,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
