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

export const EP09_TOTAL_FRAMES = 9184;

export const EP09_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp09HtmlContractAndGsap/ep09_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1901,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1835,
    "voiceDurationMs": 61152
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp09HtmlContractAndGsap/ep09_s02_voice.mp3",
    "fromFrame": 1901,
    "durationInFrames": 1917,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1863,
    "voiceDurationMs": 62088
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp09HtmlContractAndGsap/ep09_s03_voice.mp3",
    "fromFrame": 3818,
    "durationInFrames": 1835,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1781,
    "voiceDurationMs": 59352
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp09HtmlContractAndGsap/ep09_s04_voice.mp3",
    "fromFrame": 5653,
    "durationInFrames": 1755,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1701,
    "voiceDurationMs": 56688
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp09HtmlContractAndGsap/ep09_s05_voice.mp3",
    "fromFrame": 7408,
    "durationInFrames": 1776,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1716,
    "voiceDurationMs": 57168
  }
};

export const ep09_s01_captions: Caption[] = [
  {
    "text": "欢迎来到",
    "startMs": 97,
    "endMs": 852,
    "timestampMs": 474,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 852,
    "endMs": 1913,
    "timestampMs": 1382,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第九集",
    "startMs": 1913,
    "endMs": 3316,
    "timestampMs": 2614,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "从这一集起",
    "startMs": 3600,
    "endMs": 4449,
    "timestampMs": 4024,
    "confidence": 1.0
  },
  {
    "text": "我们正式进入架构与",
    "startMs": 4449,
    "endMs": 5887,
    "timestampMs": 5168,
    "confidence": 1.0
  },
  {
    "text": "开发者篇",
    "startMs": 5887,
    "endMs": 6618,
    "timestampMs": 6252,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果你要手写或审查",
    "startMs": 7146,
    "endMs": 8703,
    "timestampMs": 7924,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 8703,
    "endMs": 9186,
    "timestampMs": 8944,
    "confidence": 1.0
  },
  {
    "text": " 产出的底层视频源码",
    "startMs": 9186,
    "endMs": 10637,
    "timestampMs": 9911,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一关就是吃透",
    "startMs": 11061,
    "endMs": 12300,
    "timestampMs": 11680,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 12300,
    "endMs": 12960,
    "timestampMs": 12630,
    "confidence": 1.0
  },
  {
    "text": " Schema",
    "startMs": 12960,
    "endMs": 13373,
    "timestampMs": 13166,
    "confidence": 1.0
  },
  {
    "text": " 最小契约",
    "startMs": 13373,
    "endMs": 14116,
    "timestampMs": 13744,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一个合法的",
    "startMs": 14658,
    "endMs": 15271,
    "timestampMs": 14964,
    "confidence": 1.0
  },
  {
    "text": "根组合容器必须声明",
    "startMs": 15271,
    "endMs": 17158,
    "timestampMs": 16214,
    "confidence": 1.0
  },
  {
    "text": " data-composition-id",
    "startMs": 17158,
    "endMs": 18632,
    "timestampMs": 17895,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-start",
    "startMs": 18880,
    "endMs": 19481,
    "timestampMs": 19180,
    "confidence": 1.0
  },
  {
    "text": " 0、",
    "startMs": 19481,
    "endMs": 19800,
    "timestampMs": 19640,
    "confidence": 1.0
  },
  {
    "text": "data-width、",
    "startMs": 19800,
    "endMs": 20660,
    "timestampMs": 20230,
    "confidence": 1.0
  },
  {
    "text": "data-height",
    "startMs": 20660,
    "endMs": 21580,
    "timestampMs": 21120,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 21580,
    "endMs": 21828,
    "timestampMs": 21704,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-duration",
    "startMs": 21840,
    "endMs": 22618,
    "timestampMs": 22229,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这里藏着新",
    "startMs": 23160,
    "endMs": 24163,
    "timestampMs": 23661,
    "confidence": 1.0
  },
  {
    "text": "手最高频的卡死坑",
    "startMs": 24163,
    "endMs": 25212,
    "timestampMs": 24687,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果你的视频完全是",
    "startMs": 25578,
    "endMs": 27075,
    "timestampMs": 26326,
    "confidence": 1.0
  },
  {
    "text": "纯媒体或纯",
    "startMs": 27075,
    "endMs": 28420,
    "timestampMs": 27747,
    "confidence": 1.0
  },
  {
    "text": "静态画面、",
    "startMs": 28420,
    "endMs": 28833,
    "timestampMs": 28626,
    "confidence": 1.0
  },
  {
    "text": "没有注册任何",
    "startMs": 28833,
    "endMs": 30012,
    "timestampMs": 29422,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "GSAP",
    "startMs": 30106,
    "endMs": 30766,
    "timestampMs": 30436,
    "confidence": 1.0
  },
  {
    "text": " 时间轴",
    "startMs": 30766,
    "endMs": 31344,
    "timestampMs": 31055,
    "confidence": 1.0
  },
  {
    "text": " 一定要在根节点补上",
    "startMs": 31344,
    "endMs": 32748,
    "timestampMs": 32046,
    "confidence": 1.0
  },
  {
    "text": " data-no-timeline",
    "startMs": 32748,
    "endMs": 33573,
    "timestampMs": 33160,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "否则渲染器",
    "startMs": 33685,
    "endMs": 34534,
    "timestampMs": 34109,
    "confidence": 1.0
  },
  {
    "text": "会苦苦等待",
    "startMs": 34534,
    "endMs": 35312,
    "timestampMs": 34923,
    "confidence": 1.0
  },
  {
    "text": "时间轴注册直到",
    "startMs": 35312,
    "endMs": 36704,
    "timestampMs": 36008,
    "confidence": 1.0
  },
  {
    "text": " 45",
    "startMs": 36704,
    "endMs": 37305,
    "timestampMs": 37004,
    "confidence": 1.0
  },
  {
    "text": " 秒超时！",
    "startMs": 37305,
    "endMs": 37836,
    "timestampMs": 37570,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "大型工程需",
    "startMs": 38378,
    "endMs": 39605,
    "timestampMs": 38991,
    "confidence": 1.0
  },
  {
    "text": "要拆分多幕时",
    "startMs": 39605,
    "endMs": 40454,
    "timestampMs": 40029,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "通过",
    "startMs": 40749,
    "endMs": 41126,
    "timestampMs": 40937,
    "confidence": 1.0
  },
  {
    "text": " data-composition-src",
    "startMs": 41126,
    "endMs": 42800,
    "timestampMs": 41963,
    "confidence": 1.0
  },
  {
    "text": " 引入外部子组合",
    "startMs": 42800,
    "endMs": 44039,
    "timestampMs": 43419,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "每个外部子",
    "startMs": 44334,
    "endMs": 44970,
    "timestampMs": 44652,
    "confidence": 1.0
  },
  {
    "text": "组合必须用",
    "startMs": 44970,
    "endMs": 45937,
    "timestampMs": 45453,
    "confidence": 1.0
  },
  {
    "text": " template",
    "startMs": 45937,
    "endMs": 46503,
    "timestampMs": 46220,
    "confidence": 1.0
  },
  {
    "text": " 标签包裹防",
    "startMs": 46503,
    "endMs": 47742,
    "timestampMs": 47122,
    "confidence": 1.0
  },
  {
    "text": "止提前执行",
    "startMs": 47742,
    "endMs": 48520,
    "timestampMs": 48131,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而根文件自",
    "startMs": 48838,
    "endMs": 49829,
    "timestampMs": 49333,
    "confidence": 1.0
  },
  {
    "text": "身绝不能套",
    "startMs": 49829,
    "endMs": 50572,
    "timestampMs": 50200,
    "confidence": 1.0
  },
  {
    "text": " template",
    "startMs": 50572,
    "endMs": 51114,
    "timestampMs": 50843,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "子组合内引",
    "startMs": 51226,
    "endMs": 52299,
    "timestampMs": 51762,
    "confidence": 1.0
  },
  {
    "text": "用相对路径素材时",
    "startMs": 52299,
    "endMs": 53502,
    "timestampMs": 52900,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用",
    "startMs": 53726,
    "endMs": 53997,
    "timestampMs": 53861,
    "confidence": 1.0
  },
  {
    "text": " window.__hyperframes.assetUrl()",
    "startMs": 53997,
    "endMs": 57653,
    "timestampMs": 55825,
    "confidence": 1.0
  },
  {
    "text": " 即可自动按",
    "startMs": 57653,
    "endMs": 58714,
    "timestampMs": 58183,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "工程根目录稳健解析",
    "startMs": 58738,
    "endMs": 60330,
    "timestampMs": 59534,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep09_s02_captions: Caption[] = [
  {
    "text": "接下来盘点",
    "startMs": 97,
    "endMs": 982,
    "timestampMs": 539,
    "confidence": 1.0
  },
  {
    "text": " data-",
    "startMs": 982,
    "endMs": 1548,
    "timestampMs": 1265,
    "confidence": 1.0
  },
  {
    "text": "*时间与图层属性的",
    "startMs": 1548,
    "endMs": 3446,
    "timestampMs": 2497,
    "confidence": 1.0
  },
  {
    "text": "四大工程避坑",
    "startMs": 3446,
    "endMs": 4519,
    "timestampMs": 3982,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一",
    "startMs": 5059,
    "endMs": 5436,
    "timestampMs": 5247,
    "confidence": 1.0
  },
  {
    "text": " 时间排布无",
    "startMs": 5436,
    "endMs": 6781,
    "timestampMs": 6108,
    "confidence": 1.0
  },
  {
    "text": "需手算累加法",
    "startMs": 6781,
    "endMs": 7665,
    "timestampMs": 7223,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-start",
    "startMs": 7854,
    "endMs": 8526,
    "timestampMs": 8190,
    "confidence": 1.0
  },
  {
    "text": " 支持相对表达式",
    "startMs": 8526,
    "endMs": 9800,
    "timestampMs": 9163,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如写",
    "startMs": 10035,
    "endMs": 10566,
    "timestampMs": 10300,
    "confidence": 1.0
  },
  {
    "text": " data-start",
    "startMs": 10566,
    "endMs": 11120,
    "timestampMs": 10843,
    "confidence": 1.0
  },
  {
    "text": " intro",
    "startMs": 11120,
    "endMs": 11675,
    "timestampMs": 11397,
    "confidence": 1.0
  },
  {
    "text": " -",
    "startMs": 11675,
    "endMs": 11769,
    "timestampMs": 11722,
    "confidence": 1.0
  },
  {
    "text": " 0.5",
    "startMs": 11769,
    "endMs": 12276,
    "timestampMs": 12022,
    "confidence": 1.0
  },
  {
    "text": " 就能提前半",
    "startMs": 12276,
    "endMs": 13078,
    "timestampMs": 12677,
    "confidence": 1.0
  },
  {
    "text": "秒交错入场",
    "startMs": 13078,
    "endMs": 13903,
    "timestampMs": 13490,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "但千万不要",
    "startMs": 14210,
    "endMs": 15012,
    "timestampMs": 14611,
    "confidence": 1.0
  },
  {
    "text": "再写早已废弃的",
    "startMs": 15012,
    "endMs": 16215,
    "timestampMs": 15613,
    "confidence": 1.0
  },
  {
    "text": " data-end",
    "startMs": 16215,
    "endMs": 16733,
    "timestampMs": 16474,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 16733,
    "endMs": 17016,
    "timestampMs": 16874,
    "confidence": 1.0
  },
  {
    "text": " data-layer",
    "startMs": 17016,
    "endMs": 17535,
    "timestampMs": 17275,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "静态检查会",
    "startMs": 17683,
    "endMs": 18532,
    "timestampMs": 18107,
    "confidence": 1.0
  },
  {
    "text": "直接报错拦截",
    "startMs": 18532,
    "endMs": 19723,
    "timestampMs": 19127,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二",
    "startMs": 20265,
    "endMs": 20583,
    "timestampMs": 20424,
    "confidence": 1.0
  },
  {
    "text": " 铭记",
    "startMs": 20583,
    "endMs": 21326,
    "timestampMs": 20954,
    "confidence": 1.0
  },
  {
    "text": " Tracks",
    "startMs": 21326,
    "endMs": 21810,
    "timestampMs": 21568,
    "confidence": 1.0
  },
  {
    "text": " are",
    "startMs": 21810,
    "endMs": 21975,
    "timestampMs": 21892,
    "confidence": 1.0
  },
  {
    "text": " not",
    "startMs": 21975,
    "endMs": 22223,
    "timestampMs": 22099,
    "confidence": 1.0
  },
  {
    "text": " layers",
    "startMs": 22223,
    "endMs": 22730,
    "timestampMs": 22476,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-track-index",
    "startMs": 23025,
    "endMs": 24086,
    "timestampMs": 23555,
    "confidence": 1.0
  },
  {
    "text": " 只决定元素在",
    "startMs": 24086,
    "endMs": 25076,
    "timestampMs": 24581,
    "confidence": 1.0
  },
  {
    "text": "编辑器里排在",
    "startMs": 25076,
    "endMs": 26067,
    "timestampMs": 25571,
    "confidence": 1.0
  },
  {
    "text": "第几行轨道",
    "startMs": 26067,
    "endMs": 26857,
    "timestampMs": 26462,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "画面谁压住谁完全由",
    "startMs": 27199,
    "endMs": 28944,
    "timestampMs": 28071,
    "confidence": 1.0
  },
  {
    "text": " CSS",
    "startMs": 28944,
    "endMs": 29664,
    "timestampMs": 29304,
    "confidence": 1.0
  },
  {
    "text": " z-index",
    "startMs": 29664,
    "endMs": 30194,
    "timestampMs": 29929,
    "confidence": 1.0
  },
  {
    "text": " 控制",
    "startMs": 30194,
    "endMs": 30631,
    "timestampMs": 30412,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "当负",
    "startMs": 30961,
    "endMs": 31362,
    "timestampMs": 31161,
    "confidence": 1.0
  },
  {
    "text": " z-index",
    "startMs": 31362,
    "endMs": 32058,
    "timestampMs": 31710,
    "confidence": 1.0
  },
  {
    "text": " 背景层意外",
    "startMs": 32058,
    "endMs": 32989,
    "timestampMs": 32523,
    "confidence": 1.0
  },
  {
    "text": "被父容器底色盖住时",
    "startMs": 32989,
    "endMs": 34558,
    "timestampMs": 33773,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在容器上加一行",
    "startMs": 34669,
    "endMs": 35919,
    "timestampMs": 35294,
    "confidence": 1.0
  },
  {
    "text": " isolation",
    "startMs": 35919,
    "endMs": 36792,
    "timestampMs": 36355,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "isolate",
    "startMs": 37063,
    "endMs": 37724,
    "timestampMs": 37393,
    "confidence": 1.0
  },
  {
    "text": " 建立独立层",
    "startMs": 37724,
    "endMs": 38667,
    "timestampMs": 38195,
    "confidence": 1.0
  },
  {
    "text": "叠上下文即",
    "startMs": 38667,
    "endMs": 39528,
    "timestampMs": 39097,
    "confidence": 1.0
  },
  {
    "text": "可立刻拯救",
    "startMs": 39528,
    "endMs": 40318,
    "timestampMs": 39923,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三",
    "startMs": 40860,
    "endMs": 41344,
    "timestampMs": 41102,
    "confidence": 1.0
  },
  {
    "text": " 区分入点偏移",
    "startMs": 41344,
    "endMs": 42688,
    "timestampMs": 42016,
    "confidence": 1.0
  },
  {
    "text": " 普通音视频用",
    "startMs": 42688,
    "endMs": 44139,
    "timestampMs": 43413,
    "confidence": 1.0
  },
  {
    "text": " data-media-start",
    "startMs": 44139,
    "endMs": 45082,
    "timestampMs": 44610,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "嵌套子组合用",
    "startMs": 45389,
    "endMs": 46592,
    "timestampMs": 45990,
    "confidence": 1.0
  },
  {
    "text": " data-playback-start",
    "startMs": 46592,
    "endMs": 47641,
    "timestampMs": 47116,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第四",
    "startMs": 48184,
    "endMs": 48643,
    "timestampMs": 48413,
    "confidence": 1.0
  },
  {
    "text": " HTML5",
    "startMs": 48643,
    "endMs": 49764,
    "timestampMs": 49203,
    "confidence": 1.0
  },
  {
    "text": " 规范不认自",
    "startMs": 49764,
    "endMs": 50754,
    "timestampMs": 50259,
    "confidence": 1.0
  },
  {
    "text": "定义元素或",
    "startMs": 50754,
    "endMs": 51674,
    "timestampMs": 51214,
    "confidence": 1.0
  },
  {
    "text": "媒体标签的",
    "startMs": 51674,
    "endMs": 52323,
    "timestampMs": 51998,
    "confidence": 1.0
  },
  {
    "text": "斜杠自闭合",
    "startMs": 52323,
    "endMs": 53219,
    "timestampMs": 52771,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "手写",
    "startMs": 53573,
    "endMs": 54056,
    "timestampMs": 53814,
    "confidence": 1.0
  },
  {
    "text": " video",
    "startMs": 54056,
    "endMs": 54481,
    "timestampMs": 54268,
    "confidence": 1.0
  },
  {
    "text": " 自闭合或",
    "startMs": 54481,
    "endMs": 55448,
    "timestampMs": 54964,
    "confidence": 1.0
  },
  {
    "text": " hf-audio-group",
    "startMs": 55448,
    "endMs": 56650,
    "timestampMs": 56049,
    "confidence": 1.0
  },
  {
    "text": " 自闭合会直",
    "startMs": 56650,
    "endMs": 57865,
    "timestampMs": 57257,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "接吞掉后面的",
    "startMs": 57865,
    "endMs": 58573,
    "timestampMs": 58219,
    "confidence": 1.0
  },
  {
    "text": "所有兄弟节点",
    "startMs": 58573,
    "endMs": 59492,
    "timestampMs": 59032,
    "confidence": 1.0
  },
  {
    "text": " 务必写完整",
    "startMs": 59492,
    "endMs": 60554,
    "timestampMs": 60023,
    "confidence": 1.0
  },
  {
    "text": "闭合标签！",
    "startMs": 60554,
    "endMs": 61261,
    "timestampMs": 60907,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep09_s03_captions: Caption[] = [
  {
    "text": "HyperFrames",
    "startMs": 97,
    "endMs": 1064,
    "timestampMs": 580,
    "confidence": 1.0
  },
  {
    "text": " 为什么在老旧电脑上",
    "startMs": 1064,
    "endMs": 2491,
    "timestampMs": 1777,
    "confidence": 1.0
  },
  {
    "text": "渲染复杂动",
    "startMs": 2491,
    "endMs": 3694,
    "timestampMs": 3092,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "效也能一帧不掉？",
    "startMs": 3694,
    "endMs": 4637,
    "timestampMs": 4165,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "秘诀在于外",
    "startMs": 5165,
    "endMs": 6568,
    "timestampMs": 5866,
    "confidence": 1.0
  },
  {
    "text": "部寻址驱动",
    "startMs": 6568,
    "endMs": 7264,
    "timestampMs": 6916,
    "confidence": 1.0
  },
  {
    "text": " Seekable",
    "startMs": 7264,
    "endMs": 7889,
    "timestampMs": 7576,
    "confidence": 1.0
  },
  {
    "text": " Animation",
    "startMs": 7889,
    "endMs": 8514,
    "timestampMs": 8201,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在标准",
    "startMs": 9057,
    "endMs": 9776,
    "timestampMs": 9416,
    "confidence": 1.0
  },
  {
    "text": " GSAP",
    "startMs": 9776,
    "endMs": 10472,
    "timestampMs": 10124,
    "confidence": 1.0
  },
  {
    "text": " 写法中",
    "startMs": 10472,
    "endMs": 11050,
    "timestampMs": 10761,
    "confidence": 1.0
  },
  {
    "text": " 你必须用",
    "startMs": 11050,
    "endMs": 11910,
    "timestampMs": 11480,
    "confidence": 1.0
  },
  {
    "text": " gsap.timeline",
    "startMs": 11910,
    "endMs": 12842,
    "timestampMs": 12376,
    "confidence": 1.0
  },
  {
    "text": " ({",
    "startMs": 12842,
    "endMs": 13031,
    "timestampMs": 12936,
    "confidence": 1.0
  },
  {
    "text": "paused",
    "startMs": 13031,
    "endMs": 13573,
    "timestampMs": 13302,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "true",
    "startMs": 13797,
    "endMs": 14186,
    "timestampMs": 13991,
    "confidence": 1.0
  },
  {
    "text": "})创建一条处于暂停",
    "startMs": 14186,
    "endMs": 15696,
    "timestampMs": 14941,
    "confidence": 1.0
  },
  {
    "text": "状态的时间轴",
    "startMs": 15696,
    "endMs": 16568,
    "timestampMs": 16132,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "然后以根容器",
    "startMs": 16875,
    "endMs": 17901,
    "timestampMs": 17388,
    "confidence": 1.0
  },
  {
    "text": " ID",
    "startMs": 17901,
    "endMs": 18384,
    "timestampMs": 18142,
    "confidence": 1.0
  },
  {
    "text": " 为键名注册到全局",
    "startMs": 18384,
    "endMs": 19894,
    "timestampMs": 19139,
    "confidence": 1.0
  },
  {
    "text": " window.__timelines",
    "startMs": 19894,
    "endMs": 22134,
    "timestampMs": 21014,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "对象上",
    "startMs": 22146,
    "endMs": 22642,
    "timestampMs": 22394,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果涉及自",
    "startMs": 22753,
    "endMs": 23661,
    "timestampMs": 23207,
    "confidence": 1.0
  },
  {
    "text": "定义网络或本地字体",
    "startMs": 23661,
    "endMs": 25147,
    "timestampMs": 24404,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "务必先等",
    "startMs": 25454,
    "endMs": 26161,
    "timestampMs": 25807,
    "confidence": 1.0
  },
  {
    "text": " document.fonts.load",
    "startMs": 26161,
    "endMs": 27565,
    "timestampMs": 26863,
    "confidence": 1.0
  },
  {
    "text": " 就绪再测量",
    "startMs": 27565,
    "endMs": 28579,
    "timestampMs": 28072,
    "confidence": 1.0
  },
  {
    "text": "排版并注册",
    "startMs": 28579,
    "endMs": 29664,
    "timestampMs": 29121,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "window.__timelines",
    "startMs": 29687,
    "endMs": 32046,
    "timestampMs": 30866,
    "confidence": 1.0
  },
  {
    "text": " 否则首帧文",
    "startMs": 32046,
    "endMs": 33260,
    "timestampMs": 32653,
    "confidence": 1.0
  },
  {
    "text": "字宽度会算错",
    "startMs": 33260,
    "endMs": 34109,
    "timestampMs": 33684,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "渲染器逐帧推进时",
    "startMs": 34640,
    "endMs": 36114,
    "timestampMs": 35377,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需调用",
    "startMs": 36338,
    "endMs": 37022,
    "timestampMs": 36680,
    "confidence": 1.0
  },
  {
    "text": " tl.seek",
    "startMs": 37022,
    "endMs": 37753,
    "timestampMs": 37387,
    "confidence": 1.0
  },
  {
    "text": " (",
    "startMs": 37753,
    "endMs": 37942,
    "timestampMs": 37847,
    "confidence": 1.0
  },
  {
    "text": "t",
    "startMs": 37942,
    "endMs": 38249,
    "timestampMs": 38095,
    "confidence": 1.0
  },
  {
    "text": ")精准跳转并",
    "startMs": 38249,
    "endMs": 39440,
    "timestampMs": 38844,
    "confidence": 1.0
  },
  {
    "text": "截帧即可",
    "startMs": 39440,
    "endMs": 40088,
    "timestampMs": 39764,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "除了内置的",
    "startMs": 40631,
    "endMs": 41350,
    "timestampMs": 40990,
    "confidence": 1.0
  },
  {
    "text": " createGSAPFrameAdapter",
    "startMs": 41350,
    "endMs": 43201,
    "timestampMs": 42275,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果你使用",
    "startMs": 43532,
    "endMs": 44286,
    "timestampMs": 43909,
    "confidence": 1.0
  },
  {
    "text": " Three.js、",
    "startMs": 44286,
    "endMs": 45395,
    "timestampMs": 44840,
    "confidence": 1.0
  },
  {
    "text": "Lottie、",
    "startMs": 45395,
    "endMs": 46091,
    "timestampMs": 45743,
    "confidence": 1.0
  },
  {
    "text": "Canvas",
    "startMs": 46091,
    "endMs": 46999,
    "timestampMs": 46545,
    "confidence": 1.0
  },
  {
    "text": " 或外部导出的",
    "startMs": 46999,
    "endMs": 48013,
    "timestampMs": 47506,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HTML",
    "startMs": 48095,
    "endMs": 48685,
    "timestampMs": 48390,
    "confidence": 1.0
  },
  {
    "text": " 影片",
    "startMs": 48685,
    "endMs": 49098,
    "timestampMs": 48891,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "还可以通过标准",
    "startMs": 49310,
    "endMs": 50336,
    "timestampMs": 49823,
    "confidence": 1.0
  },
  {
    "text": " FrameAdapter",
    "startMs": 50336,
    "endMs": 51244,
    "timestampMs": 50790,
    "confidence": 1.0
  },
  {
    "text": " 接口、全局",
    "startMs": 51244,
    "endMs": 52099,
    "timestampMs": 51671,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "registerFrameSource",
    "startMs": 52110,
    "endMs": 53349,
    "timestampMs": 52729,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 53349,
    "endMs": 53714,
    "timestampMs": 53531,
    "confidence": 1.0
  },
  {
    "text": " createFilmBridge",
    "startMs": 53714,
    "endMs": 54846,
    "timestampMs": 54280,
    "confidence": 1.0
  },
  {
    "text": " 把任意自定",
    "startMs": 54846,
    "endMs": 55813,
    "timestampMs": 55329,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "义动画运行",
    "startMs": 55813,
    "endMs": 56485,
    "timestampMs": 56149,
    "confidence": 1.0
  },
  {
    "text": "时接入同一",
    "startMs": 56485,
    "endMs": 57665,
    "timestampMs": 57075,
    "confidence": 1.0
  },
  {
    "text": "套确定性时钟",
    "startMs": 57665,
    "endMs": 58514,
    "timestampMs": 58089,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep09_s04_captions: Caption[] = [
  {
    "text": "为了保证同",
    "startMs": 97,
    "endMs": 793,
    "timestampMs": 445,
    "confidence": 1.0
  },
  {
    "text": "一份源码在",
    "startMs": 793,
    "endMs": 1630,
    "timestampMs": 1211,
    "confidence": 1.0
  },
  {
    "text": "本地预览、多进程并",
    "startMs": 1630,
    "endMs": 3352,
    "timestampMs": 2491,
    "confidence": 1.0
  },
  {
    "text": "发和云端",
    "startMs": 3352,
    "endMs": 3906,
    "timestampMs": 3629,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "AWS Lambda",
    "startMs": 4012,
    "endMs": 5180,
    "timestampMs": 4596,
    "confidence": 1.0
  },
  {
    "text": " 分片渲染中",
    "startMs": 5180,
    "endMs": 6029,
    "timestampMs": 5604,
    "confidence": 1.0
  },
  {
    "text": "产出像素级",
    "startMs": 6029,
    "endMs": 7055,
    "timestampMs": 6542,
    "confidence": 1.0
  },
  {
    "text": "一致的画面",
    "startMs": 7055,
    "endMs": 7762,
    "timestampMs": 7408,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HyperFrames",
    "startMs": 8092,
    "endMs": 9048,
    "timestampMs": 8570,
    "confidence": 1.0
  },
  {
    "text": " 立下了三条",
    "startMs": 9048,
    "endMs": 9967,
    "timestampMs": 9507,
    "confidence": 1.0
  },
  {
    "text": "不可逾越的",
    "startMs": 9967,
    "endMs": 10604,
    "timestampMs": 10285,
    "confidence": 1.0
  },
  {
    "text": "确定性铁律",
    "startMs": 10604,
    "endMs": 11418,
    "timestampMs": 11011,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "禁令一",
    "startMs": 11958,
    "endMs": 12524,
    "timestampMs": 12241,
    "confidence": 1.0
  },
  {
    "text": " 严禁读取真",
    "startMs": 12524,
    "endMs": 13868,
    "timestampMs": 13196,
    "confidence": 1.0
  },
  {
    "text": "实系统时钟",
    "startMs": 13868,
    "endMs": 14564,
    "timestampMs": 14216,
    "confidence": 1.0
  },
  {
    "text": " Date.now()",
    "startMs": 14564,
    "endMs": 15236,
    "timestampMs": 14900,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "也严禁使用",
    "startMs": 15507,
    "endMs": 16333,
    "timestampMs": 15920,
    "confidence": 1.0
  },
  {
    "text": " requestAnimationFrame",
    "startMs": 16333,
    "endMs": 17877,
    "timestampMs": 17105,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 17877,
    "endMs": 18219,
    "timestampMs": 18048,
    "confidence": 1.0
  },
  {
    "text": " setTimeout",
    "startMs": 18219,
    "endMs": 18950,
    "timestampMs": 18584,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "驱动动画",
    "startMs": 18974,
    "endMs": 19634,
    "timestampMs": 19304,
    "confidence": 1.0
  },
  {
    "text": " 一切状态必",
    "startMs": 19634,
    "endMs": 21132,
    "timestampMs": 20383,
    "confidence": 1.0
  },
  {
    "text": "须纯粹是时间参数",
    "startMs": 21132,
    "endMs": 22429,
    "timestampMs": 21780,
    "confidence": 1.0
  },
  {
    "text": " t",
    "startMs": 22429,
    "endMs": 22571,
    "timestampMs": 22500,
    "confidence": 1.0
  },
  {
    "text": " 的确定性函数",
    "startMs": 22571,
    "endMs": 23608,
    "timestampMs": 23089,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "禁令二",
    "startMs": 24151,
    "endMs": 24693,
    "timestampMs": 24422,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "严禁使用无种子的",
    "startMs": 25083,
    "endMs": 26474,
    "timestampMs": 25778,
    "confidence": 1.0
  },
  {
    "text": " Math.random()",
    "startMs": 26474,
    "endMs": 27500,
    "timestampMs": 26987,
    "confidence": 1.0
  },
  {
    "text": " 或随机字符串语法",
    "startMs": 27500,
    "endMs": 29139,
    "timestampMs": 28319,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "所有粒子星空与",
    "startMs": 29481,
    "endMs": 30778,
    "timestampMs": 30129,
    "confidence": 1.0
  },
  {
    "text": "定格抖动必",
    "startMs": 30778,
    "endMs": 31875,
    "timestampMs": 31326,
    "confidence": 1.0
  },
  {
    "text": "须使用固定",
    "startMs": 31875,
    "endMs": 32512,
    "timestampMs": 32193,
    "confidence": 1.0
  },
  {
    "text": "种子的伪随机生成器",
    "startMs": 32512,
    "endMs": 34104,
    "timestampMs": 33308,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "否则不同并",
    "startMs": 34481,
    "endMs": 35354,
    "timestampMs": 34917,
    "confidence": 1.0
  },
  {
    "text": "发节点会画",
    "startMs": 35354,
    "endMs": 36392,
    "timestampMs": 35873,
    "confidence": 1.0
  },
  {
    "text": "出一闪一闪的废片",
    "startMs": 36392,
    "endMs": 37394,
    "timestampMs": 36893,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "禁令三",
    "startMs": 37936,
    "endMs": 38526,
    "timestampMs": 38231,
    "confidence": 1.0
  },
  {
    "text": " 严禁在渲染",
    "startMs": 38526,
    "endMs": 39611,
    "timestampMs": 39068,
    "confidence": 1.0
  },
  {
    "text": "期发起未锁定的外部",
    "startMs": 39611,
    "endMs": 41215,
    "timestampMs": 40413,
    "confidence": 1.0
  },
  {
    "text": " fetch",
    "startMs": 41215,
    "endMs": 41521,
    "timestampMs": 41368,
    "confidence": 1.0
  },
  {
    "text": " 请求",
    "startMs": 41521,
    "endMs": 41993,
    "timestampMs": 41757,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "也不要用",
    "startMs": 42217,
    "endMs": 42712,
    "timestampMs": 42464,
    "confidence": 1.0
  },
  {
    "text": " JavaScript",
    "startMs": 42712,
    "endMs": 43443,
    "timestampMs": 43077,
    "confidence": 1.0
  },
  {
    "text": " 手动调用",
    "startMs": 43443,
    "endMs": 44234,
    "timestampMs": 43838,
    "confidence": 1.0
  },
  {
    "text": " video.play()",
    "startMs": 44234,
    "endMs": 45130,
    "timestampMs": 44682,
    "confidence": 1.0
  },
  {
    "text": " 或切显隐",
    "startMs": 45130,
    "endMs": 46038,
    "timestampMs": 45584,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "媒体播放和",
    "startMs": 46297,
    "endMs": 47134,
    "timestampMs": 46715,
    "confidence": 1.0
  },
  {
    "text": "可见性必须",
    "startMs": 47134,
    "endMs": 48113,
    "timestampMs": 47623,
    "confidence": 1.0
  },
  {
    "text": "交由渲染器统一托管",
    "startMs": 48113,
    "endMs": 49528,
    "timestampMs": 48820,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "同时还要避免在",
    "startMs": 49640,
    "endMs": 50690,
    "timestampMs": 50165,
    "confidence": 1.0
  },
  {
    "text": "舞台上使用",
    "startMs": 50690,
    "endMs": 51503,
    "timestampMs": 51096,
    "confidence": 1.0
  },
  {
    "text": " CSS",
    "startMs": 51503,
    "endMs": 52199,
    "timestampMs": 51851,
    "confidence": 1.0
  },
  {
    "text": " zoom",
    "startMs": 52199,
    "endMs": 52553,
    "timestampMs": 52376,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "因为它会直",
    "startMs": 52930,
    "endMs": 53732,
    "timestampMs": 53331,
    "confidence": 1.0
  },
  {
    "text": "接破坏运动",
    "startMs": 53732,
    "endMs": 54263,
    "timestampMs": 53997,
    "confidence": 1.0
  },
  {
    "text": "模糊与坐标测量精度",
    "startMs": 54263,
    "endMs": 55866,
    "timestampMs": 55064,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep09_s05_captions: Caption[] = [
  {
    "text": "代码写完之后",
    "startMs": 97,
    "endMs": 1076,
    "timestampMs": 586,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "怎么在耗时渲染前把",
    "startMs": 1536,
    "endMs": 3069,
    "timestampMs": 2302,
    "confidence": 1.0
  },
  {
    "text": " 99%",
    "startMs": 3069,
    "endMs": 3824,
    "timestampMs": 3446,
    "confidence": 1.0
  },
  {
    "text": " 的隐蔽故障",
    "startMs": 3824,
    "endMs": 4531,
    "timestampMs": 4177,
    "confidence": 1.0
  },
  {
    "text": "全部揪出来？",
    "startMs": 4531,
    "endMs": 5439,
    "timestampMs": 4985,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "官方配备了",
    "startMs": 5967,
    "endMs": 6863,
    "timestampMs": 6415,
    "confidence": 1.0
  },
  {
    "text": "质量门禁三剑客",
    "startMs": 6863,
    "endMs": 8149,
    "timestampMs": 7506,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一剑",
    "startMs": 8679,
    "endMs": 9186,
    "timestampMs": 8932,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes doctor",
    "startMs": 9186,
    "endMs": 10920,
    "timestampMs": 10053,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "秒级体检本机",
    "startMs": 11285,
    "endMs": 12347,
    "timestampMs": 11816,
    "confidence": 1.0
  },
  {
    "text": " Node",
    "startMs": 12347,
    "endMs": 12606,
    "timestampMs": 12476,
    "confidence": 1.0
  },
  {
    "text": " 版本、",
    "startMs": 12606,
    "endMs": 13019,
    "timestampMs": 12812,
    "confidence": 1.0
  },
  {
    "text": "FFmpeg、",
    "startMs": 13019,
    "endMs": 13998,
    "timestampMs": 13508,
    "confidence": 1.0
  },
  {
    "text": "Chromium",
    "startMs": 13998,
    "endMs": 14858,
    "timestampMs": 14428,
    "confidence": 1.0
  },
  {
    "text": " 与环境依赖",
    "startMs": 14858,
    "endMs": 15672,
    "timestampMs": 15265,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "专治环境玄学",
    "startMs": 15920,
    "endMs": 17005,
    "timestampMs": 16462,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二剑",
    "startMs": 17547,
    "endMs": 18090,
    "timestampMs": 17818,
    "confidence": 1.0
  },
  {
    "text": " @hyperframes/lint",
    "startMs": 18090,
    "endMs": 19434,
    "timestampMs": 18762,
    "confidence": 1.0
  },
  {
    "text": " 毫秒级静态",
    "startMs": 19434,
    "endMs": 20637,
    "timestampMs": 20035,
    "confidence": 1.0
  },
  {
    "text": "源码规则库",
    "startMs": 20637,
    "endMs": 21403,
    "timestampMs": 21020,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "直接拦截漏写",
    "startMs": 21663,
    "endMs": 22606,
    "timestampMs": 22134,
    "confidence": 1.0
  },
  {
    "text": " data-no-timeline",
    "startMs": 22606,
    "endMs": 23479,
    "timestampMs": 23042,
    "confidence": 1.0
  },
  {
    "text": "、误用废弃",
    "startMs": 23479,
    "endMs": 24540,
    "timestampMs": 24009,
    "confidence": 1.0
  },
  {
    "text": " data-end",
    "startMs": 24540,
    "endMs": 25000,
    "timestampMs": 24770,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "字体未声明、",
    "startMs": 25236,
    "endMs": 26108,
    "timestampMs": 25672,
    "confidence": 1.0
  },
  {
    "text": "音频链损坏与",
    "startMs": 26108,
    "endMs": 27335,
    "timestampMs": 26721,
    "confidence": 1.0
  },
  {
    "text": "媒体调色加",
    "startMs": 27335,
    "endMs": 28243,
    "timestampMs": 27789,
    "confidence": 1.0
  },
  {
    "text": "错标签等低级错误",
    "startMs": 28243,
    "endMs": 29469,
    "timestampMs": 28856,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三剑",
    "startMs": 30012,
    "endMs": 30578,
    "timestampMs": 30295,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes check",
    "startMs": 30578,
    "endMs": 32300,
    "timestampMs": 31439,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "启动真实无",
    "startMs": 32559,
    "endMs": 33573,
    "timestampMs": 33066,
    "confidence": 1.0
  },
  {
    "text": "头浏览器执",
    "startMs": 33573,
    "endMs": 34576,
    "timestampMs": 34074,
    "confidence": 1.0
  },
  {
    "text": "行全维度验收",
    "startMs": 34576,
    "endMs": 35436,
    "timestampMs": 35006,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "默认以",
    "startMs": 35708,
    "endMs": 36285,
    "timestampMs": 35996,
    "confidence": 1.0
  },
  {
    "text": " 8",
    "startMs": 36285,
    "endMs": 36498,
    "timestampMs": 36391,
    "confidence": 1.0
  },
  {
    "text": " fps",
    "startMs": 36498,
    "endMs": 37028,
    "timestampMs": 36763,
    "confidence": 1.0
  },
  {
    "text": " 采样进行视",
    "startMs": 37028,
    "endMs": 38219,
    "timestampMs": 37623,
    "confidence": 1.0
  },
  {
    "text": "觉工艺巡检",
    "startMs": 38219,
    "endMs": 38868,
    "timestampMs": 38543,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "输出可供机器分析的",
    "startMs": 39116,
    "endMs": 40554,
    "timestampMs": 39835,
    "confidence": 1.0
  },
  {
    "text": " .motion.json",
    "startMs": 40554,
    "endMs": 41993,
    "timestampMs": 41273,
    "confidence": 1.0
  },
  {
    "text": " 运动图谱",
    "startMs": 41993,
    "endMs": 42606,
    "timestampMs": 42299,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "同步核查",
    "startMs": 42718,
    "endMs": 43425,
    "timestampMs": 43071,
    "confidence": 1.0
  },
  {
    "text": " WCAG",
    "startMs": 43425,
    "endMs": 44522,
    "timestampMs": 43973,
    "confidence": 1.0
  },
  {
    "text": " 文字对比度、",
    "startMs": 44522,
    "endMs": 45395,
    "timestampMs": 44958,
    "confidence": 1.0
  },
  {
    "text": "--safe-zone",
    "startMs": 45395,
    "endMs": 46220,
    "timestampMs": 45807,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "社交平台安全区裁切",
    "startMs": 46244,
    "endMs": 47765,
    "timestampMs": 47004,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "甚至调用",
    "startMs": 48084,
    "endMs": 48756,
    "timestampMs": 48420,
    "confidence": 1.0
  },
  {
    "text": " OpenCV",
    "startMs": 48756,
    "endMs": 49487,
    "timestampMs": 49121,
    "confidence": 1.0
  },
  {
    "text": " 人脸检测确保字幕与",
    "startMs": 49487,
    "endMs": 51114,
    "timestampMs": 50300,
    "confidence": 1.0
  },
  {
    "text": "角标绝不挡",
    "startMs": 51114,
    "endMs": 52341,
    "timestampMs": 51727,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "住主讲人的脸！",
    "startMs": 52341,
    "endMs": 53013,
    "timestampMs": 52677,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "三剑全绿再导出",
    "startMs": 53543,
    "endMs": 55065,
    "timestampMs": 54304,
    "confidence": 1.0
  },
  {
    "text": " 稳如磐石",
    "startMs": 55065,
    "endMs": 56326,
    "timestampMs": 55695,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
