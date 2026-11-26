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

export const EP12_TOTAL_FRAMES = 9031;

export const EP12_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp12SdkPlayerAndCloudDeploy/ep12_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1632,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1566,
    "voiceDurationMs": 52200
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp12SdkPlayerAndCloudDeploy/ep12_s02_voice.mp3",
    "fromFrame": 1632,
    "durationInFrames": 2006,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1952,
    "voiceDurationMs": 65064
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp12SdkPlayerAndCloudDeploy/ep12_s03_voice.mp3",
    "fromFrame": 3638,
    "durationInFrames": 1608,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1554,
    "voiceDurationMs": 51768
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp12SdkPlayerAndCloudDeploy/ep12_s04_voice.mp3",
    "fromFrame": 5246,
    "durationInFrames": 1685,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1631,
    "voiceDurationMs": 54336
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp12SdkPlayerAndCloudDeploy/ep12_s05_voice.mp3",
    "fromFrame": 6931,
    "durationInFrames": 2100,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 2040,
    "voiceDurationMs": 67992
  }
};

export const ep12_s01_captions: Caption[] = [
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
    "endMs": 1878,
    "timestampMs": 1365,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第十二集",
    "startMs": 1878,
    "endMs": 3375,
    "timestampMs": 2626,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "也是我们整个系列的",
    "startMs": 3611,
    "endMs": 4755,
    "timestampMs": 4183,
    "confidence": 1.0
  },
  {
    "text": "收官架构大结局",
    "startMs": 4755,
    "endMs": 6029,
    "timestampMs": 5392,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "当你要把视频生成、",
    "startMs": 6557,
    "endMs": 7901,
    "timestampMs": 7229,
    "confidence": 1.0
  },
  {
    "text": "可视化编辑",
    "startMs": 7901,
    "endMs": 8986,
    "timestampMs": 8443,
    "confidence": 1.0
  },
  {
    "text": "或批量渲染",
    "startMs": 8986,
    "endMs": 9870,
    "timestampMs": 9428,
    "confidence": 1.0
  },
  {
    "text": "能力集成进",
    "startMs": 9870,
    "endMs": 10837,
    "timestampMs": 10353,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "自己的企业级",
    "startMs": 10861,
    "endMs": 11675,
    "timestampMs": 11268,
    "confidence": 1.0
  },
  {
    "text": " SaaS",
    "startMs": 11675,
    "endMs": 11969,
    "timestampMs": 11822,
    "confidence": 1.0
  },
  {
    "text": " 产品时",
    "startMs": 11969,
    "endMs": 12571,
    "timestampMs": 12270,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一条架构",
    "startMs": 12925,
    "endMs": 13514,
    "timestampMs": 13219,
    "confidence": 1.0
  },
  {
    "text": "师法则就是",
    "startMs": 13514,
    "endMs": 14564,
    "timestampMs": 14039,
    "confidence": 1.0
  },
  {
    "text": "选择最小集成表面",
    "startMs": 14564,
    "endMs": 15955,
    "timestampMs": 15259,
    "confidence": 1.0
  },
  {
    "text": " Choose",
    "startMs": 15955,
    "endMs": 16392,
    "timestampMs": 16173,
    "confidence": 1.0
  },
  {
    "text": " the",
    "startMs": 16392,
    "endMs": 16486,
    "timestampMs": 16439,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Smallest",
    "startMs": 16498,
    "endMs": 17040,
    "timestampMs": 16769,
    "confidence": 1.0
  },
  {
    "text": " Surface",
    "startMs": 17040,
    "endMs": 17594,
    "timestampMs": 17317,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "官方把整个",
    "startMs": 18137,
    "endMs": 18998,
    "timestampMs": 18567,
    "confidence": 1.0
  },
  {
    "text": "生态拆分为",
    "startMs": 18998,
    "endMs": 20083,
    "timestampMs": 19540,
    "confidence": 1.0
  },
  {
    "text": " 13",
    "startMs": 20083,
    "endMs": 20566,
    "timestampMs": 20324,
    "confidence": 1.0
  },
  {
    "text": " 个职责清晰的",
    "startMs": 20566,
    "endMs": 21238,
    "timestampMs": 20902,
    "confidence": 1.0
  },
  {
    "text": " npm",
    "startMs": 21238,
    "endMs": 21698,
    "timestampMs": 21468,
    "confidence": 1.0
  },
  {
    "text": " 包",
    "startMs": 21698,
    "endMs": 21969,
    "timestampMs": 21833,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需自动化出片",
    "startMs": 22229,
    "endMs": 23361,
    "timestampMs": 22795,
    "confidence": 1.0
  },
  {
    "text": " 直接调",
    "startMs": 23361,
    "endMs": 24139,
    "timestampMs": 23750,
    "confidence": 1.0
  },
  {
    "text": " CLI",
    "startMs": 24139,
    "endMs": 24599,
    "timestampMs": 24369,
    "confidence": 1.0
  },
  {
    "text": " 命令行",
    "startMs": 24599,
    "endMs": 25177,
    "timestampMs": 24888,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "要在后台或",
    "startMs": 25389,
    "endMs": 26321,
    "timestampMs": 25855,
    "confidence": 1.0
  },
  {
    "text": "前端无头修改",
    "startMs": 26321,
    "endMs": 27252,
    "timestampMs": 26786,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 27252,
    "endMs": 27960,
    "timestampMs": 27606,
    "confidence": 1.0
  },
  {
    "text": " 工程",
    "startMs": 27960,
    "endMs": 28420,
    "timestampMs": 28190,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "引入",
    "startMs": 28608,
    "endMs": 29009,
    "timestampMs": 28808,
    "confidence": 1.0
  },
  {
    "text": " @hyperframes/sdk",
    "startMs": 29009,
    "endMs": 30649,
    "timestampMs": 29829,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只想在网页",
    "startMs": 30760,
    "endMs": 31433,
    "timestampMs": 31096,
    "confidence": 1.0
  },
  {
    "text": "里内嵌可寻址播放器",
    "startMs": 31433,
    "endMs": 33119,
    "timestampMs": 32276,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "挂上",
    "startMs": 33414,
    "endMs": 33838,
    "timestampMs": 33626,
    "confidence": 1.0
  },
  {
    "text": " @hyperframes/player",
    "startMs": 33838,
    "endMs": 35088,
    "timestampMs": 34463,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "需要在",
    "startMs": 35418,
    "endMs": 35902,
    "timestampMs": 35660,
    "confidence": 1.0
  },
  {
    "text": " Node",
    "startMs": 35902,
    "endMs": 36173,
    "timestampMs": 36037,
    "confidence": 1.0
  },
  {
    "text": " 服务内深度",
    "startMs": 36173,
    "endMs": 37140,
    "timestampMs": 36656,
    "confidence": 1.0
  },
  {
    "text": "编排渲染管线与",
    "startMs": 37140,
    "endMs": 38555,
    "timestampMs": 37847,
    "confidence": 1.0
  },
  {
    "text": "自定义逐帧捕获",
    "startMs": 38555,
    "endMs": 39605,
    "timestampMs": 39080,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "才下沉到",
    "startMs": 39817,
    "endMs": 40536,
    "timestampMs": 40176,
    "confidence": 1.0
  },
  {
    "text": " @hyperframes/producer",
    "startMs": 40536,
    "endMs": 42058,
    "timestampMs": 41297,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 42058,
    "endMs": 42305,
    "timestampMs": 42181,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "@hyperframes/engine",
    "startMs": 42470,
    "endMs": 43567,
    "timestampMs": 43018,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "底层由",
    "startMs": 43679,
    "endMs": 44103,
    "timestampMs": 43891,
    "confidence": 1.0
  },
  {
    "text": " @hyperframes/core",
    "startMs": 44103,
    "endMs": 45448,
    "timestampMs": 44775,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 45448,
    "endMs": 45684,
    "timestampMs": 45566,
    "confidence": 1.0
  },
  {
    "text": " @hyperframes/parsers",
    "startMs": 45684,
    "endMs": 47075,
    "timestampMs": 46379,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "提供统一契约解析",
    "startMs": 47169,
    "endMs": 48502,
    "timestampMs": 47835,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "分层越薄",
    "startMs": 49044,
    "endMs": 49858,
    "timestampMs": 49451,
    "confidence": 1.0
  },
  {
    "text": " 升级维护成本越低",
    "startMs": 49858,
    "endMs": 51391,
    "timestampMs": 50624,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep12_s02_captions: Caption[] = [
  {
    "text": "如果你要打造专属的",
    "startMs": 97,
    "endMs": 1335,
    "timestampMs": 716,
    "confidence": 1.0
  },
  {
    "text": "在线视频编辑器",
    "startMs": 1335,
    "endMs": 2479,
    "timestampMs": 1907,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "@hyperframes/sdk",
    "startMs": 2998,
    "endMs": 4449,
    "timestampMs": 3723,
    "confidence": 1.0
  },
  {
    "text": " 就是核心引擎",
    "startMs": 4449,
    "endMs": 5604,
    "timestampMs": 5026,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "调用异步的",
    "startMs": 6144,
    "endMs": 6816,
    "timestampMs": 6480,
    "confidence": 1.0
  },
  {
    "text": " openComposition()",
    "startMs": 6816,
    "endMs": 7889,
    "timestampMs": 7352,
    "confidence": 1.0
  },
  {
    "text": " 会自动给缺失标识的",
    "startMs": 7889,
    "endMs": 9410,
    "timestampMs": 8649,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "元素打上稳定",
    "startMs": 9422,
    "endMs": 10637,
    "timestampMs": 10029,
    "confidence": 1.0
  },
  {
    "text": " data-hf-id",
    "startMs": 10637,
    "endMs": 11781,
    "timestampMs": 11209,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "对于嵌套子",
    "startMs": 12123,
    "endMs": 12948,
    "timestampMs": 12535,
    "confidence": 1.0
  },
  {
    "text": "组合里的节点",
    "startMs": 12948,
    "endMs": 13726,
    "timestampMs": 13337,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "必须使用",
    "startMs": 13903,
    "endMs": 14575,
    "timestampMs": 14239,
    "confidence": 1.0
  },
  {
    "text": " scopedId",
    "startMs": 14575,
    "endMs": 15554,
    "timestampMs": 15064,
    "confidence": 1.0
  },
  {
    "text": " 如",
    "startMs": 15554,
    "endMs": 15802,
    "timestampMs": 15678,
    "confidence": 1.0
  },
  {
    "text": " hf-HOST/hf-LEAF",
    "startMs": 15802,
    "endMs": 17901,
    "timestampMs": 16851,
    "confidence": 1.0
  },
  {
    "text": " 精确寻址",
    "startMs": 17901,
    "endMs": 18750,
    "timestampMs": 18325,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "SDK",
    "startMs": 19292,
    "endMs": 20000,
    "timestampMs": 19646,
    "confidence": 1.0
  },
  {
    "text": " 支持直改、",
    "startMs": 20000,
    "endMs": 20637,
    "timestampMs": 20318,
    "confidence": 1.0
  },
  {
    "text": "持久化与面向",
    "startMs": 20637,
    "endMs": 21993,
    "timestampMs": 21315,
    "confidence": 1.0
  },
  {
    "text": " SaaS",
    "startMs": 21993,
    "endMs": 22335,
    "timestampMs": 22164,
    "confidence": 1.0
  },
  {
    "text": " 模板的",
    "startMs": 22335,
    "endMs": 22818,
    "timestampMs": 22576,
    "confidence": 1.0
  },
  {
    "text": " OverrideSet",
    "startMs": 22818,
    "endMs": 23833,
    "timestampMs": 23325,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "稀疏增量覆",
    "startMs": 23856,
    "endMs": 24870,
    "timestampMs": 24363,
    "confidence": 1.0
  },
  {
    "text": "盖三种模式",
    "startMs": 24870,
    "endMs": 25613,
    "timestampMs": 25241,
    "confidence": 1.0
  },
  {
    "text": " 只存",
    "startMs": 25613,
    "endMs": 26368,
    "timestampMs": 25990,
    "confidence": 1.0
  },
  {
    "text": " Delta",
    "startMs": 26368,
    "endMs": 26863,
    "timestampMs": 26615,
    "confidence": 1.0
  },
  {
    "text": " 绝不篡改原始母版",
    "startMs": 26863,
    "endMs": 28290,
    "timestampMs": 27576,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "通过",
    "startMs": 28821,
    "endMs": 29198,
    "timestampMs": 29009,
    "confidence": 1.0
  },
  {
    "text": " dispatch()",
    "startMs": 29198,
    "endMs": 29929,
    "timestampMs": 29563,
    "confidence": 1.0
  },
  {
    "text": " 执行原子操作、用",
    "startMs": 29929,
    "endMs": 31580,
    "timestampMs": 30754,
    "confidence": 1.0
  },
  {
    "text": " can()",
    "startMs": 31580,
    "endMs": 31993,
    "timestampMs": 31786,
    "confidence": 1.0
  },
  {
    "text": " 探测能力边界",
    "startMs": 31993,
    "endMs": 33219,
    "timestampMs": 32606,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并用",
    "startMs": 33455,
    "endMs": 33738,
    "timestampMs": 33596,
    "confidence": 1.0
  },
  {
    "text": " batch()",
    "startMs": 33738,
    "endMs": 34210,
    "timestampMs": 33974,
    "confidence": 1.0
  },
  {
    "text": " 把多步修改合并",
    "startMs": 34210,
    "endMs": 35731,
    "timestampMs": 34970,
    "confidence": 1.0
  },
  {
    "text": "为单次",
    "startMs": 35731,
    "endMs": 36309,
    "timestampMs": 36020,
    "confidence": 1.0
  },
  {
    "text": " Undo",
    "startMs": 36309,
    "endMs": 36781,
    "timestampMs": 36545,
    "confidence": 1.0
  },
  {
    "text": " 与单次落盘",
    "startMs": 36781,
    "endMs": 37700,
    "timestampMs": 37240,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这里有三条",
    "startMs": 38243,
    "endMs": 39198,
    "timestampMs": 38720,
    "confidence": 1.0
  },
  {
    "text": "极易踩坑的生产红线",
    "startMs": 39198,
    "endMs": 40531,
    "timestampMs": 39864,
    "confidence": 1.0
  },
  {
    "text": " 第一",
    "startMs": 40531,
    "endMs": 41215,
    "timestampMs": 40873,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "createFsAdapter",
    "startMs": 41521,
    "endMs": 42960,
    "timestampMs": 42240,
    "confidence": 1.0
  },
  {
    "text": " 必须从子路径",
    "startMs": 42960,
    "endMs": 44057,
    "timestampMs": 43508,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "@hyperframes/sdk/adapters/fs",
    "startMs": 44328,
    "endMs": 46969,
    "timestampMs": 45648,
    "confidence": 1.0
  },
  {
    "text": " 单独引入",
    "startMs": 46969,
    "endMs": 47630,
    "timestampMs": 47299,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "绝不能从主入口导入",
    "startMs": 48007,
    "endMs": 49387,
    "timestampMs": 48697,
    "confidence": 1.0
  },
  {
    "text": " 以免污染浏览器打包",
    "startMs": 49387,
    "endMs": 50955,
    "timestampMs": 50171,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二",
    "startMs": 51179,
    "endMs": 51486,
    "timestampMs": 51332,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "监听补丁同",
    "startMs": 51598,
    "endMs": 52388,
    "timestampMs": 51993,
    "confidence": 1.0
  },
  {
    "text": "步时必须判断",
    "startMs": 52388,
    "endMs": 53331,
    "timestampMs": 52859,
    "confidence": 1.0
  },
  {
    "text": " ORIGIN_APPLY_PATCHES",
    "startMs": 53331,
    "endMs": 56244,
    "timestampMs": 54787,
    "confidence": 1.0
  },
  {
    "text": " 拦截无限",
    "startMs": 56244,
    "endMs": 56940,
    "timestampMs": 56592,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Undo",
    "startMs": 57034,
    "endMs": 57423,
    "timestampMs": 57228,
    "confidence": 1.0
  },
  {
    "text": " 死循环",
    "startMs": 57423,
    "endMs": 58048,
    "timestampMs": 57735,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三",
    "startMs": 58402,
    "endMs": 58850,
    "timestampMs": 58626,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用于动态渲",
    "startMs": 59086,
    "endMs": 60017,
    "timestampMs": 59551,
    "confidence": 1.0
  },
  {
    "text": "染属性面板的",
    "startMs": 60017,
    "endMs": 60878,
    "timestampMs": 60447,
    "confidence": 1.0
  },
  {
    "text": " resolveElementAffordances",
    "startMs": 60878,
    "endMs": 62553,
    "timestampMs": 61715,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "仅限浏览器环境运行",
    "startMs": 62647,
    "endMs": 64239,
    "timestampMs": 63443,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep12_s03_captions: Caption[] = [
  {
    "text": "编辑器有了内核",
    "startMs": 97,
    "endMs": 1265,
    "timestampMs": 681,
    "confidence": 1.0
  },
  {
    "text": " 前台播放与",
    "startMs": 1265,
    "endMs": 2456,
    "timestampMs": 1860,
    "confidence": 1.0
  },
  {
    "text": "画布交互怎么搭建？",
    "startMs": 2456,
    "endMs": 3871,
    "timestampMs": 3163,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "官方提供了",
    "startMs": 4410,
    "endMs": 5200,
    "timestampMs": 4805,
    "confidence": 1.0
  },
  {
    "text": "零框架依赖的",
    "startMs": 5200,
    "endMs": 6132,
    "timestampMs": 5666,
    "confidence": 1.0
  },
  {
    "text": " hyperframes-player",
    "startMs": 6132,
    "endMs": 7311,
    "timestampMs": 6721,
    "confidence": 1.0
  },
  {
    "text": " Web",
    "startMs": 7311,
    "endMs": 7583,
    "timestampMs": 7447,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Component",
    "startMs": 7594,
    "endMs": 8231,
    "timestampMs": 7912,
    "confidence": 1.0
  },
  {
    "text": " 内部通过",
    "startMs": 8231,
    "endMs": 9198,
    "timestampMs": 8714,
    "confidence": 1.0
  },
  {
    "text": " Shadow",
    "startMs": 9198,
    "endMs": 9717,
    "timestampMs": 9457,
    "confidence": 1.0
  },
  {
    "text": " DOM",
    "startMs": 9717,
    "endMs": 10130,
    "timestampMs": 9923,
    "confidence": 1.0
  },
  {
    "text": " 彻底隔离样式",
    "startMs": 10130,
    "endMs": 11285,
    "timestampMs": 10707,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "既支持独立",
    "startMs": 11474,
    "endMs": 12241,
    "timestampMs": 11857,
    "confidence": 1.0
  },
  {
    "text": "时间轴播控",
    "startMs": 12241,
    "endMs": 12948,
    "timestampMs": 12594,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "也能通过标准",
    "startMs": 13060,
    "endMs": 13968,
    "timestampMs": 13514,
    "confidence": 1.0
  },
  {
    "text": " postMessage",
    "startMs": 13968,
    "endMs": 14675,
    "timestampMs": 14321,
    "confidence": 1.0
  },
  {
    "text": " 协议与",
    "startMs": 14675,
    "endMs": 15348,
    "timestampMs": 15011,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "createIframePreviewAdapter",
    "startMs": 15359,
    "endMs": 17034,
    "timestampMs": 16196,
    "confidence": 1.0
  },
  {
    "text": " 实现外部同步寻址",
    "startMs": 17034,
    "endMs": 18543,
    "timestampMs": 17788,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "构建拖拽画布时",
    "startMs": 19086,
    "endMs": 20407,
    "timestampMs": 19746,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "千万别天真",
    "startMs": 20701,
    "endMs": 21598,
    "timestampMs": 21149,
    "confidence": 1.0
  },
  {
    "text": "地直接用原生",
    "startMs": 21598,
    "endMs": 22517,
    "timestampMs": 22057,
    "confidence": 1.0
  },
  {
    "text": " elementsFromPoint",
    "startMs": 22517,
    "endMs": 23697,
    "timestampMs": 23107,
    "confidence": 1.0
  },
  {
    "text": " 判断空白处",
    "startMs": 23697,
    "endMs": 24664,
    "timestampMs": 24180,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "或能否拖动",
    "startMs": 24758,
    "endMs": 25619,
    "timestampMs": 25188,
    "confidence": 1.0
  },
  {
    "text": " 面对透明遮罩与",
    "startMs": 25619,
    "endMs": 27211,
    "timestampMs": 26415,
    "confidence": 1.0
  },
  {
    "text": "复杂合成层极易误判",
    "startMs": 27211,
    "endMs": 28944,
    "timestampMs": 28077,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "正确做法是调用",
    "startMs": 29056,
    "endMs": 30176,
    "timestampMs": 29616,
    "confidence": 1.0
  },
  {
    "text": " SDK",
    "startMs": 30176,
    "endMs": 30837,
    "timestampMs": 30506,
    "confidence": 1.0
  },
  {
    "text": " 提供的",
    "startMs": 30837,
    "endMs": 31297,
    "timestampMs": 31067,
    "confidence": 1.0
  },
  {
    "text": " isProvablyEmptyAt",
    "startMs": 31297,
    "endMs": 32688,
    "timestampMs": 31992,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 32688,
    "endMs": 32912,
    "timestampMs": 32800,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "canApplyManualOffset",
    "startMs": 32924,
    "endMs": 34292,
    "timestampMs": 33608,
    "confidence": 1.0
  },
  {
    "text": " 做严谨几何与",
    "startMs": 34292,
    "endMs": 35283,
    "timestampMs": 34787,
    "confidence": 1.0
  },
  {
    "text": "能力校验",
    "startMs": 35283,
    "endMs": 35813,
    "timestampMs": 35548,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最后在分享",
    "startMs": 36356,
    "endMs": 37275,
    "timestampMs": 36815,
    "confidence": 1.0
  },
  {
    "text": "交付侧牢记",
    "startMs": 37275,
    "endMs": 38242,
    "timestampMs": 37758,
    "confidence": 1.0
  },
  {
    "text": "一条安全默认行为",
    "startMs": 38242,
    "endMs": 39481,
    "timestampMs": 38861,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "执行",
    "startMs": 39858,
    "endMs": 40342,
    "timestampMs": 40100,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes share",
    "startMs": 40342,
    "endMs": 41863,
    "timestampMs": 41102,
    "confidence": 1.0
  },
  {
    "text": " 默认只上传",
    "startMs": 41863,
    "endMs": 42983,
    "timestampMs": 42423,
    "confidence": 1.0
  },
  {
    "text": "渲染成品",
    "startMs": 42983,
    "endMs": 43679,
    "timestampMs": 43331,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "绝不泄露工程源码",
    "startMs": 43950,
    "endMs": 45200,
    "timestampMs": 44575,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只有当你显式加上",
    "startMs": 45424,
    "endMs": 46485,
    "timestampMs": 45954,
    "confidence": 1.0
  },
  {
    "text": " --include-source",
    "startMs": 46485,
    "endMs": 47393,
    "timestampMs": 46939,
    "confidence": 1.0
  },
  {
    "text": " 参数时",
    "startMs": 47393,
    "endMs": 48007,
    "timestampMs": 47700,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "才会连同",
    "startMs": 48118,
    "endMs": 48791,
    "timestampMs": 48454,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 48791,
    "endMs": 49675,
    "timestampMs": 49233,
    "confidence": 1.0
  },
  {
    "text": " 源码一并打包分享",
    "startMs": 49675,
    "endMs": 50949,
    "timestampMs": 50312,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep12_s04_captions: Caption[] = [
  {
    "text": "接下来进入",
    "startMs": 97,
    "endMs": 982,
    "timestampMs": 539,
    "confidence": 1.0
  },
  {
    "text": "企业级高并",
    "startMs": 982,
    "endMs": 1984,
    "timestampMs": 1483,
    "confidence": 1.0
  },
  {
    "text": "发分布式渲染架构",
    "startMs": 1984,
    "endMs": 3199,
    "timestampMs": 2591,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "根据团队运维能力",
    "startMs": 3738,
    "endMs": 5012,
    "timestampMs": 4375,
    "confidence": 1.0
  },
  {
    "text": " 官方提供四",
    "startMs": 5012,
    "endMs": 6368,
    "timestampMs": 5690,
    "confidence": 1.0
  },
  {
    "text": "级阶梯方案",
    "startMs": 6368,
    "endMs": 6922,
    "timestampMs": 6645,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一级零运维托管",
    "startMs": 7217,
    "endMs": 8432,
    "timestampMs": 7824,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "直接运行",
    "startMs": 8679,
    "endMs": 9410,
    "timestampMs": 9044,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes cloud render",
    "startMs": 9410,
    "endMs": 11580,
    "timestampMs": 10495,
    "confidence": 1.0
  },
  {
    "text": " 交由",
    "startMs": 11580,
    "endMs": 12158,
    "timestampMs": 11869,
    "confidence": 1.0
  },
  {
    "text": " HeyGen",
    "startMs": 12158,
    "endMs": 12594,
    "timestampMs": 12376,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Cloud",
    "startMs": 12606,
    "endMs": 12960,
    "timestampMs": 12783,
    "confidence": 1.0
  },
  {
    "text": " 渲染",
    "startMs": 12960,
    "endMs": 13396,
    "timestampMs": 13178,
    "confidence": 1.0
  },
  {
    "text": " 适合",
    "startMs": 13396,
    "endMs": 14104,
    "timestampMs": 13750,
    "confidence": 1.0
  },
  {
    "text": " 200",
    "startMs": 14104,
    "endMs": 14402,
    "timestampMs": 14253,
    "confidence": 1.0
  },
  {
    "text": " MB",
    "startMs": 14402,
    "endMs": 14540,
    "timestampMs": 14471,
    "confidence": 1.0
  },
  {
    "text": " 以内的轻量工程",
    "startMs": 14540,
    "endMs": 15719,
    "timestampMs": 15129,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二级快速",
    "startMs": 15955,
    "endMs": 16781,
    "timestampMs": 16368,
    "confidence": 1.0
  },
  {
    "text": " API",
    "startMs": 16781,
    "endMs": 17323,
    "timestampMs": 17052,
    "confidence": 1.0
  },
  {
    "text": " 模板",
    "startMs": 17323,
    "endMs": 17653,
    "timestampMs": 17488,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "官方提供开箱即用的",
    "startMs": 17765,
    "endMs": 19333,
    "timestampMs": 18549,
    "confidence": 1.0
  },
  {
    "text": " Vercel、",
    "startMs": 19333,
    "endMs": 19970,
    "timestampMs": 19651,
    "confidence": 1.0
  },
  {
    "text": "Cloudflare",
    "startMs": 19970,
    "endMs": 20890,
    "timestampMs": 20430,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 20890,
    "endMs": 21102,
    "timestampMs": 20996,
    "confidence": 1.0
  },
  {
    "text": " Modal",
    "startMs": 21102,
    "endMs": 21456,
    "timestampMs": 21279,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "部署模板",
    "startMs": 21480,
    "endMs": 22117,
    "timestampMs": 21798,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三级自托管",
    "startMs": 22458,
    "endMs": 23473,
    "timestampMs": 22965,
    "confidence": 1.0
  },
  {
    "text": " AWS Lambda",
    "startMs": 23473,
    "endMs": 24628,
    "timestampMs": 24050,
    "confidence": 1.0
  },
  {
    "text": " Plan",
    "startMs": 24628,
    "endMs": 25006,
    "timestampMs": 24817,
    "confidence": 1.0
  },
  {
    "text": " v2",
    "startMs": 25006,
    "endMs": 25324,
    "timestampMs": 25165,
    "confidence": 1.0
  },
  {
    "text": " 集群",
    "startMs": 25324,
    "endMs": 25749,
    "timestampMs": 25536,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "通过",
    "startMs": 26079,
    "endMs": 26444,
    "timestampMs": 26261,
    "confidence": 1.0
  },
  {
    "text": " Step Functions",
    "startMs": 26444,
    "endMs": 27305,
    "timestampMs": 26874,
    "confidence": 1.0
  },
  {
    "text": " 将整条视频",
    "startMs": 27305,
    "endMs": 28142,
    "timestampMs": 27723,
    "confidence": 1.0
  },
  {
    "text": "拆片扇出并",
    "startMs": 28142,
    "endMs": 29216,
    "timestampMs": 28679,
    "confidence": 1.0
  },
  {
    "text": "发渲染再拼装",
    "startMs": 29216,
    "endMs": 30124,
    "timestampMs": 29670,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "部署时要严守",
    "startMs": 30383,
    "endMs": 31539,
    "timestampMs": 30961,
    "confidence": 1.0
  },
  {
    "text": " Lambda",
    "startMs": 31539,
    "endMs": 31881,
    "timestampMs": 31710,
    "confidence": 1.0
  },
  {
    "text": " 硬边界",
    "startMs": 31881,
    "endMs": 32352,
    "timestampMs": 32116,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "单函数包",
    "startMs": 32464,
    "endMs": 33054,
    "timestampMs": 32759,
    "confidence": 1.0
  },
  {
    "text": " 250",
    "startMs": 33054,
    "endMs": 33596,
    "timestampMs": 33325,
    "confidence": 1.0
  },
  {
    "text": " MiB",
    "startMs": 33596,
    "endMs": 33808,
    "timestampMs": 33702,
    "confidence": 1.0
  },
  {
    "text": " 上限、单次执行",
    "startMs": 33808,
    "endMs": 35235,
    "timestampMs": 34521,
    "confidence": 1.0
  },
  {
    "text": " 15",
    "startMs": 35235,
    "endMs": 35790,
    "timestampMs": 35512,
    "confidence": 1.0
  },
  {
    "text": " 分钟超时",
    "startMs": 35790,
    "endMs": 36320,
    "timestampMs": 36055,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并在生产环境开启",
    "startMs": 36485,
    "endMs": 37830,
    "timestampMs": 37157,
    "confidence": 1.0
  },
  {
    "text": " PRODUCER_RESTRICT_PAGE_NETWORK",
    "startMs": 37830,
    "endMs": 42087,
    "timestampMs": 39958,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "禁止渲染期",
    "startMs": 42099,
    "endMs": 42971,
    "timestampMs": 42535,
    "confidence": 1.0
  },
  {
    "text": "外网访问防",
    "startMs": 42971,
    "endMs": 43903,
    "timestampMs": 43437,
    "confidence": 1.0
  },
  {
    "text": " SSRF",
    "startMs": 43903,
    "endMs": 44740,
    "timestampMs": 44321,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第四级",
    "startMs": 44852,
    "endMs": 45383,
    "timestampMs": 45117,
    "confidence": 1.0
  },
  {
    "text": " GCP",
    "startMs": 45383,
    "endMs": 46055,
    "timestampMs": 45719,
    "confidence": 1.0
  },
  {
    "text": " Cloud Run",
    "startMs": 46055,
    "endMs": 46750,
    "timestampMs": 46402,
    "confidence": 1.0
  },
  {
    "text": " 搭配",
    "startMs": 46750,
    "endMs": 47222,
    "timestampMs": 46986,
    "confidence": 1.0
  },
  {
    "text": " Cloud Workflows",
    "startMs": 47222,
    "endMs": 48437,
    "timestampMs": 47829,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 48437,
    "endMs": 48661,
    "timestampMs": 48549,
    "confidence": 1.0
  },
  {
    "text": " GCS",
    "startMs": 48661,
    "endMs": 49368,
    "timestampMs": 49014,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "单容器算力与",
    "startMs": 49628,
    "endMs": 50548,
    "timestampMs": 50088,
    "confidence": 1.0
  },
  {
    "text": "超时弹性更大",
    "startMs": 50548,
    "endMs": 51597,
    "timestampMs": 51072,
    "confidence": 1.0
  },
  {
    "text": " 完美承接重度长视频",
    "startMs": 51597,
    "endMs": 53508,
    "timestampMs": 52552,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep12_s05_captions: Caption[] = [
  {
    "text": "收官之前",
    "startMs": 97,
    "endMs": 946,
    "timestampMs": 521,
    "confidence": 1.0
  },
  {
    "text": " 我们把最后几把",
    "startMs": 946,
    "endMs": 2232,
    "timestampMs": 1589,
    "confidence": 1.0
  },
  {
    "text": "高阶渲染与",
    "startMs": 2232,
    "endMs": 3399,
    "timestampMs": 2815,
    "confidence": 1.0
  },
  {
    "text": "社区利器收入囊中",
    "startMs": 3399,
    "endMs": 4826,
    "timestampMs": 4112,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "追求极致画质时",
    "startMs": 5366,
    "endMs": 6698,
    "timestampMs": 6032,
    "confidence": 1.0
  },
  {
    "text": " 4K",
    "startMs": 6698,
    "endMs": 7358,
    "timestampMs": 7028,
    "confidence": 1.0
  },
  {
    "text": " 渲染只接受",
    "startMs": 7358,
    "endMs": 8219,
    "timestampMs": 7788,
    "confidence": 1.0
  },
  {
    "text": "整数倍超采样缩放",
    "startMs": 8219,
    "endMs": 9611,
    "timestampMs": 8915,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "会明确拒绝",
    "startMs": 9835,
    "endMs": 10743,
    "timestampMs": 10289,
    "confidence": 1.0
  },
  {
    "text": " 1080",
    "startMs": 10743,
    "endMs": 11309,
    "timestampMs": 11026,
    "confidence": 1.0
  },
  {
    "text": " p",
    "startMs": 11309,
    "endMs": 11580,
    "timestampMs": 11444,
    "confidence": 1.0
  },
  {
    "text": " 放大到",
    "startMs": 11580,
    "endMs": 12241,
    "timestampMs": 11910,
    "confidence": 1.0
  },
  {
    "text": " 1440",
    "startMs": 12241,
    "endMs": 12901,
    "timestampMs": 12571,
    "confidence": 1.0
  },
  {
    "text": " p",
    "startMs": 12901,
    "endMs": 13160,
    "timestampMs": 13030,
    "confidence": 1.0
  },
  {
    "text": " 这类非整数",
    "startMs": 13160,
    "endMs": 14175,
    "timestampMs": 13667,
    "confidence": 1.0
  },
  {
    "text": "倍模糊缩放",
    "startMs": 14175,
    "endMs": 15000,
    "timestampMs": 14587,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "真",
    "startMs": 15307,
    "endMs": 15601,
    "timestampMs": 15454,
    "confidence": 1.0
  },
  {
    "text": " HDR",
    "startMs": 15601,
    "endMs": 16215,
    "timestampMs": 15908,
    "confidence": 1.0
  },
  {
    "text": " 输出支持",
    "startMs": 16215,
    "endMs": 16969,
    "timestampMs": 16592,
    "confidence": 1.0
  },
  {
    "text": " 10",
    "startMs": 16969,
    "endMs": 17276,
    "timestampMs": 17122,
    "confidence": 1.0
  },
  {
    "text": " -",
    "startMs": 17276,
    "endMs": 17370,
    "timestampMs": 17323,
    "confidence": 1.0
  },
  {
    "text": " bit",
    "startMs": 17370,
    "endMs": 17559,
    "timestampMs": 17464,
    "confidence": 1.0
  },
  {
    "text": " H.265",
    "startMs": 17559,
    "endMs": 18661,
    "timestampMs": 18110,
    "confidence": 1.0
  },
  {
    "text": " yuv420p10le",
    "startMs": 18661,
    "endMs": 20477,
    "timestampMs": 19569,
    "confidence": 1.0
  },
  {
    "text": " 搭配",
    "startMs": 20477,
    "endMs": 20867,
    "timestampMs": 20672,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "BT.2020",
    "startMs": 20961,
    "endMs": 22152,
    "timestampMs": 21556,
    "confidence": 1.0
  },
  {
    "text": " PQ",
    "startMs": 22152,
    "endMs": 22659,
    "timestampMs": 22405,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 22659,
    "endMs": 22942,
    "timestampMs": 22800,
    "confidence": 1.0
  },
  {
    "text": " HLG",
    "startMs": 22942,
    "endMs": 23708,
    "timestampMs": 23325,
    "confidence": 1.0
  },
  {
    "text": " 色域",
    "startMs": 23708,
    "endMs": 24074,
    "timestampMs": 23891,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "锐利文字与",
    "startMs": 24451,
    "endMs": 25336,
    "timestampMs": 24893,
    "confidence": 1.0
  },
  {
    "text": " UI",
    "startMs": 25336,
    "endMs": 25713,
    "timestampMs": 25524,
    "confidence": 1.0
  },
  {
    "text": " 录屏可加",
    "startMs": 25713,
    "endMs": 26444,
    "timestampMs": 26078,
    "confidence": 1.0
  },
  {
    "text": " --chroma-subsampling",
    "startMs": 26444,
    "endMs": 27671,
    "timestampMs": 27057,
    "confidence": 1.0
  },
  {
    "text": " 444",
    "startMs": 27671,
    "endMs": 28473,
    "timestampMs": 28072,
    "confidence": 1.0
  },
  {
    "text": " 启用",
    "startMs": 28473,
    "endMs": 28944,
    "timestampMs": 28708,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "4",
    "startMs": 28968,
    "endMs": 29318,
    "timestampMs": 29143,
    "confidence": 1.0
  },
  {
    "text": " 4",
    "startMs": 29318,
    "endMs": 29667,
    "timestampMs": 29492,
    "confidence": 1.0
  },
  {
    "text": " 4",
    "startMs": 29667,
    "endMs": 30017,
    "timestampMs": 29842,
    "confidence": 1.0
  },
  {
    "text": " 无色度抽样",
    "startMs": 30017,
    "endMs": 30819,
    "timestampMs": 30418,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "注意",
    "startMs": 31161,
    "endMs": 31621,
    "timestampMs": 31391,
    "confidence": 1.0
  },
  {
    "text": " 4K",
    "startMs": 31621,
    "endMs": 32293,
    "timestampMs": 31957,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 32293,
    "endMs": 32458,
    "timestampMs": 32375,
    "confidence": 1.0
  },
  {
    "text": " HDR",
    "startMs": 32458,
    "endMs": 33013,
    "timestampMs": 32735,
    "confidence": 1.0
  },
  {
    "text": "、以及",
    "startMs": 33013,
    "endMs": 33384,
    "timestampMs": 33198,
    "confidence": 1.0
  },
  {
    "text": " 4",
    "startMs": 33384,
    "endMs": 33718,
    "timestampMs": 33551,
    "confidence": 1.0
  },
  {
    "text": " 4",
    "startMs": 33718,
    "endMs": 34029,
    "timestampMs": 33873,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "4",
    "startMs": 34029,
    "endMs": 34339,
    "timestampMs": 34184,
    "confidence": 1.0
  },
  {
    "text": " 与硬件",
    "startMs": 34339,
    "endMs": 34929,
    "timestampMs": 34634,
    "confidence": 1.0
  },
  {
    "text": " GPU",
    "startMs": 34929,
    "endMs": 35459,
    "timestampMs": 35194,
    "confidence": 1.0
  },
  {
    "text": " 编码存在互斥限制",
    "startMs": 35459,
    "endMs": 36827,
    "timestampMs": 36143,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "遇到超长视",
    "startMs": 37370,
    "endMs": 38478,
    "timestampMs": 37924,
    "confidence": 1.0
  },
  {
    "text": "频渲染中断",
    "startMs": 38478,
    "endMs": 39186,
    "timestampMs": 38832,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "加上",
    "startMs": 39528,
    "endMs": 39952,
    "timestampMs": 39740,
    "confidence": 1.0
  },
  {
    "text": " --resume",
    "startMs": 39952,
    "endMs": 40459,
    "timestampMs": 40205,
    "confidence": 1.0
  },
  {
    "text": " 即可按分段断点续渲",
    "startMs": 40459,
    "endMs": 42040,
    "timestampMs": 41249,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而在幕后支撑",
    "startMs": 42582,
    "endMs": 43584,
    "timestampMs": 43083,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 43584,
    "endMs": 44068,
    "timestampMs": 43826,
    "confidence": 1.0
  },
  {
    "text": " 秒级搜到官方组件的",
    "startMs": 44068,
    "endMs": 45778,
    "timestampMs": 44923,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "是内置",
    "startMs": 45966,
    "endMs": 46533,
    "timestampMs": 46249,
    "confidence": 1.0
  },
  {
    "text": " bge-small-en-v1",
    "startMs": 46533,
    "endMs": 48160,
    "timestampMs": 47346,
    "confidence": 1.0
  },
  {
    "text": " .",
    "startMs": 48160,
    "endMs": 48172,
    "timestampMs": 48166,
    "confidence": 1.0
  },
  {
    "text": " 5",
    "startMs": 48172,
    "endMs": 48313,
    "timestampMs": 48242,
    "confidence": 1.0
  },
  {
    "text": " 384",
    "startMs": 48313,
    "endMs": 48962,
    "timestampMs": 48637,
    "confidence": 1.0
  },
  {
    "text": " 维向量的本地",
    "startMs": 48962,
    "endMs": 49823,
    "timestampMs": 49392,
    "confidence": 1.0
  },
  {
    "text": " Catalog",
    "startMs": 49823,
    "endMs": 50554,
    "timestampMs": 50188,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "语义搜索引擎",
    "startMs": 50566,
    "endMs": 51639,
    "timestampMs": 51102,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HyperFrames",
    "startMs": 52181,
    "endMs": 53007,
    "timestampMs": 52594,
    "confidence": 1.0
  },
  {
    "text": " 采用",
    "startMs": 53007,
    "endMs": 53467,
    "timestampMs": 53237,
    "confidence": 1.0
  },
  {
    "text": " Apache 2.0",
    "startMs": 53467,
    "endMs": 54434,
    "timestampMs": 53950,
    "confidence": 1.0
  },
  {
    "text": " 开源共建",
    "startMs": 54434,
    "endMs": 55129,
    "timestampMs": 54781,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "欢迎大家查阅",
    "startMs": 55483,
    "endMs": 56485,
    "timestampMs": 55984,
    "confidence": 1.0
  },
  {
    "text": " contributing",
    "startMs": 56485,
    "endMs": 57323,
    "timestampMs": 56904,
    "confidence": 1.0
  },
  {
    "text": " 指南贡献",
    "startMs": 57323,
    "endMs": 57995,
    "timestampMs": 57659,
    "confidence": 1.0
  },
  {
    "text": " Block",
    "startMs": 57995,
    "endMs": 58467,
    "timestampMs": 58231,
    "confidence": 1.0
  },
  {
    "text": " 与适配器",
    "startMs": 58467,
    "endMs": 59080,
    "timestampMs": 58773,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "至此",
    "startMs": 59622,
    "endMs": 60094,
    "timestampMs": 59858,
    "confidence": 1.0
  },
  {
    "text": " 12",
    "startMs": 60094,
    "endMs": 60731,
    "timestampMs": 60412,
    "confidence": 1.0
  },
  {
    "text": " 集",
    "startMs": 60731,
    "endMs": 60966,
    "timestampMs": 60848,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 60966,
    "endMs": 61768,
    "timestampMs": 61367,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科全",
    "startMs": 61768,
    "endMs": 63113,
    "timestampMs": 62440,
    "confidence": 1.0
  },
  {
    "text": "部圆满收官",
    "startMs": 63113,
    "endMs": 63844,
    "timestampMs": 63478,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "感谢一路同行",
    "startMs": 64033,
    "endMs": 65117,
    "timestampMs": 64575,
    "confidence": 1.0
  },
  {
    "text": " 祝你用代码",
    "startMs": 65117,
    "endMs": 66014,
    "timestampMs": 65565,
    "confidence": 1.0
  },
  {
    "text": "导演无限精彩！",
    "startMs": 66014,
    "endMs": 67169,
    "timestampMs": 66591,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
