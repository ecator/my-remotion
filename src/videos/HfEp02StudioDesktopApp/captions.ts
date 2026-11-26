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

export const EP02_TOTAL_FRAMES = 8149;

export const EP02_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp02StudioDesktopApp/ep02_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1687,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1621,
    "voiceDurationMs": 54024
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp02StudioDesktopApp/ep02_s02_voice.mp3",
    "fromFrame": 1687,
    "durationInFrames": 1617,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1563,
    "voiceDurationMs": 52080
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp02StudioDesktopApp/ep02_s03_voice.mp3",
    "fromFrame": 3304,
    "durationInFrames": 1561,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1507,
    "voiceDurationMs": 50208
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp02StudioDesktopApp/ep02_s04_voice.mp3",
    "fromFrame": 4865,
    "durationInFrames": 1671,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1617,
    "voiceDurationMs": 53880
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp02StudioDesktopApp/ep02_s05_voice.mp3",
    "fromFrame": 6536,
    "durationInFrames": 1613,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1553,
    "voiceDurationMs": 51744
  }
};

export const ep02_s01_captions: Caption[] = [
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
    "endMs": 1901,
    "timestampMs": 1370,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第二集",
    "startMs": 1901,
    "endMs": 3210,
    "timestampMs": 2555,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "今天拆解零",
    "startMs": 3588,
    "endMs": 4767,
    "timestampMs": 4177,
    "confidence": 1.0
  },
  {
    "text": "代码主力工作站",
    "startMs": 4767,
    "endMs": 5439,
    "timestampMs": 5103,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 5439,
    "endMs": 6441,
    "timestampMs": 5940,
    "confidence": 1.0
  },
  {
    "text": " Studio",
    "startMs": 6441,
    "endMs": 6937,
    "timestampMs": 6689,
    "confidence": 1.0
  },
  {
    "text": " 桌面端",
    "startMs": 6937,
    "endMs": 7479,
    "timestampMs": 7208,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它免费支持",
    "startMs": 8019,
    "endMs": 8868,
    "timestampMs": 8443,
    "confidence": 1.0
  },
  {
    "text": " Mac、",
    "startMs": 8868,
    "endMs": 9328,
    "timestampMs": 9098,
    "confidence": 1.0
  },
  {
    "text": "Windows",
    "startMs": 9328,
    "endMs": 10200,
    "timestampMs": 9764,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 10200,
    "endMs": 10401,
    "timestampMs": 10300,
    "confidence": 1.0
  },
  {
    "text": " Linux",
    "startMs": 10401,
    "endMs": 10908,
    "timestampMs": 10654,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "所有工程以",
    "startMs": 11215,
    "endMs": 12111,
    "timestampMs": 11663,
    "confidence": 1.0
  },
  {
    "text": "标准文件夹存在本地",
    "startMs": 12111,
    "endMs": 13538,
    "timestampMs": 12824,
    "confidence": 1.0
  },
  {
    "text": " .hyperframes-studio",
    "startMs": 13538,
    "endMs": 14941,
    "timestampMs": 14239,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "目录",
    "startMs": 14953,
    "endMs": 15283,
    "timestampMs": 15118,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Home",
    "startMs": 15825,
    "endMs": 16167,
    "timestampMs": 15996,
    "confidence": 1.0
  },
  {
    "text": " 主页提供三大入口",
    "startMs": 16167,
    "endMs": 17736,
    "timestampMs": 16951,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一句话创作的",
    "startMs": 18090,
    "endMs": 19068,
    "timestampMs": 18579,
    "confidence": 1.0
  },
  {
    "text": " Make",
    "startMs": 19068,
    "endMs": 19670,
    "timestampMs": 19369,
    "confidence": 1.0
  },
  {
    "text": "、复刻节奏的",
    "startMs": 19670,
    "endMs": 20825,
    "timestampMs": 20247,
    "confidence": 1.0
  },
  {
    "text": " Reference",
    "startMs": 20825,
    "endMs": 21604,
    "timestampMs": 21214,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及文稿驱动的",
    "startMs": 21757,
    "endMs": 22748,
    "timestampMs": 22252,
    "confidence": 1.0
  },
  {
    "text": " Script",
    "startMs": 22748,
    "endMs": 23302,
    "timestampMs": 23025,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "首次打开会",
    "startMs": 23844,
    "endMs": 25024,
    "timestampMs": 24434,
    "confidence": 1.0
  },
  {
    "text": "弹出四步构建器",
    "startMs": 25024,
    "endMs": 26226,
    "timestampMs": 25625,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用",
    "startMs": 26533,
    "endMs": 26816,
    "timestampMs": 26674,
    "confidence": 1.0
  },
  {
    "text": " Hook、",
    "startMs": 26816,
    "endMs": 27288,
    "timestampMs": 27052,
    "confidence": 1.0
  },
  {
    "text": "Proof、",
    "startMs": 27288,
    "endMs": 27925,
    "timestampMs": 27606,
    "confidence": 1.0
  },
  {
    "text": "Turn、",
    "startMs": 27925,
    "endMs": 28526,
    "timestampMs": 28225,
    "confidence": 1.0
  },
  {
    "text": "Call",
    "startMs": 28526,
    "endMs": 29127,
    "timestampMs": 28826,
    "confidence": 1.0
  },
  {
    "text": " to",
    "startMs": 29127,
    "endMs": 29269,
    "timestampMs": 29198,
    "confidence": 1.0
  },
  {
    "text": " action",
    "startMs": 29269,
    "endMs": 29800,
    "timestampMs": 29534,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "拼出第一条发布片",
    "startMs": 29894,
    "endMs": 31061,
    "timestampMs": 30477,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "三栏界面中",
    "startMs": 31604,
    "endMs": 32500,
    "timestampMs": 32052,
    "confidence": 1.0
  },
  {
    "text": " 小向导",
    "startMs": 32500,
    "endMs": 33337,
    "timestampMs": 32918,
    "confidence": 1.0
  },
  {
    "text": " Framey",
    "startMs": 33337,
    "endMs": 33844,
    "timestampMs": 33590,
    "confidence": 1.0
  },
  {
    "text": " 实时提示进度",
    "startMs": 33844,
    "endMs": 34800,
    "timestampMs": 34322,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "可一键切换六大本地",
    "startMs": 35059,
    "endMs": 36580,
    "timestampMs": 35819,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 36580,
    "endMs": 37170,
    "timestampMs": 36875,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Claude Code、",
    "startMs": 37465,
    "endMs": 38219,
    "timestampMs": 37842,
    "confidence": 1.0
  },
  {
    "text": "Codex、",
    "startMs": 38219,
    "endMs": 39151,
    "timestampMs": 38685,
    "confidence": 1.0
  },
  {
    "text": "Grok、",
    "startMs": 39151,
    "endMs": 39917,
    "timestampMs": 39534,
    "confidence": 1.0
  },
  {
    "text": "Antigravity、",
    "startMs": 39917,
    "endMs": 41002,
    "timestampMs": 40459,
    "confidence": 1.0
  },
  {
    "text": "GitHub",
    "startMs": 41002,
    "endMs": 41769,
    "timestampMs": 41385,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Copilot",
    "startMs": 41781,
    "endMs": 42417,
    "timestampMs": 42099,
    "confidence": 1.0
  },
  {
    "text": " 与免费",
    "startMs": 42417,
    "endMs": 43149,
    "timestampMs": 42783,
    "confidence": 1.0
  },
  {
    "text": " OpenCode",
    "startMs": 43149,
    "endMs": 43750,
    "timestampMs": 43449,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "注意权限规则",
    "startMs": 44281,
    "endMs": 45413,
    "timestampMs": 44847,
    "confidence": 1.0
  },
  {
    "text": " 默认",
    "startMs": 45413,
    "endMs": 46191,
    "timestampMs": 45802,
    "confidence": 1.0
  },
  {
    "text": " Auto",
    "startMs": 46191,
    "endMs": 46710,
    "timestampMs": 46450,
    "confidence": 1.0
  },
  {
    "text": " 会拦截高危操作",
    "startMs": 46710,
    "endMs": 47983,
    "timestampMs": 47346,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而",
    "startMs": 48314,
    "endMs": 48502,
    "timestampMs": 48408,
    "confidence": 1.0
  },
  {
    "text": " OpenCode",
    "startMs": 48502,
    "endMs": 49163,
    "timestampMs": 48832,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 49163,
    "endMs": 49304,
    "timestampMs": 49233,
    "confidence": 1.0
  },
  {
    "text": " GitHub",
    "startMs": 49304,
    "endMs": 49741,
    "timestampMs": 49522,
    "confidence": 1.0
  },
  {
    "text": " Copilot",
    "startMs": 49741,
    "endMs": 50401,
    "timestampMs": 50071,
    "confidence": 1.0
  },
  {
    "text": " 必须在设置开启",
    "startMs": 50401,
    "endMs": 51592,
    "timestampMs": 50996,
    "confidence": 1.0
  },
  {
    "text": " Full",
    "startMs": 51592,
    "endMs": 51993,
    "timestampMs": 51792,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "access",
    "startMs": 52005,
    "endMs": 52476,
    "timestampMs": 52240,
    "confidence": 1.0
  },
  {
    "text": " 才能运行",
    "startMs": 52476,
    "endMs": 53184,
    "timestampMs": 52830,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep02_s02_captions: Caption[] = [
  {
    "text": "让",
    "startMs": 97,
    "endMs": 333,
    "timestampMs": 215,
    "confidence": 1.0
  },
  {
    "text": " Studio",
    "startMs": 333,
    "endMs": 805,
    "timestampMs": 569,
    "confidence": 1.0
  },
  {
    "text": " 效率翻倍的",
    "startMs": 805,
    "endMs": 1630,
    "timestampMs": 1217,
    "confidence": 1.0
  },
  {
    "text": " 是左侧聊天框的",
    "startMs": 1630,
    "endMs": 2974,
    "timestampMs": 2302,
    "confidence": 1.0
  },
  {
    "text": "三把快捷键",
    "startMs": 2974,
    "endMs": 3859,
    "timestampMs": 3416,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "@、#和/",
    "startMs": 5203,
    "endMs": 5510,
    "timestampMs": 5356,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一把@用",
    "startMs": 6026,
    "endMs": 7052,
    "timestampMs": 6539,
    "confidence": 1.0
  },
  {
    "text": "于注入精准上下文",
    "startMs": 7052,
    "endMs": 8255,
    "timestampMs": 7653,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "直接引用素材、",
    "startMs": 8502,
    "endMs": 9646,
    "timestampMs": 9074,
    "confidence": 1.0
  },
  {
    "text": "品牌套件、",
    "startMs": 9646,
    "endMs": 10531,
    "timestampMs": 10088,
    "confidence": 1.0
  },
  {
    "text": "灵感片段、",
    "startMs": 10531,
    "endMs": 11521,
    "timestampMs": 11026,
    "confidence": 1.0
  },
  {
    "text": "Voices",
    "startMs": 11521,
    "endMs": 12205,
    "timestampMs": 11863,
    "confidence": 1.0
  },
  {
    "text": " 声线和",
    "startMs": 12205,
    "endMs": 12983,
    "timestampMs": 12594,
    "confidence": 1.0
  },
  {
    "text": " 91",
    "startMs": 12983,
    "endMs": 13349,
    "timestampMs": 13166,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "款字幕样式",
    "startMs": 13349,
    "endMs": 14269,
    "timestampMs": 13809,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按",
    "startMs": 14552,
    "endMs": 14788,
    "timestampMs": 14670,
    "confidence": 1.0
  },
  {
    "text": " Tab",
    "startMs": 14788,
    "endMs": 15224,
    "timestampMs": 15006,
    "confidence": 1.0
  },
  {
    "text": " 快速切分组",
    "startMs": 15224,
    "endMs": 16167,
    "timestampMs": 15695,
    "confidence": 1.0
  },
  {
    "text": " 生成标签芯片",
    "startMs": 16167,
    "endMs": 17417,
    "timestampMs": 16792,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "彻底杜绝",
    "startMs": 17642,
    "endMs": 18455,
    "timestampMs": 18048,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 18455,
    "endMs": 18974,
    "timestampMs": 18714,
    "confidence": 1.0
  },
  {
    "text": " 猜错文件名",
    "startMs": 18974,
    "endMs": 19823,
    "timestampMs": 19398,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二把#强",
    "startMs": 20366,
    "endMs": 21462,
    "timestampMs": 20914,
    "confidence": 1.0
  },
  {
    "text": "制点名专有工具",
    "startMs": 21462,
    "endMs": 22394,
    "timestampMs": 21928,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "包括#",
    "startMs": 22665,
    "endMs": 22948,
    "timestampMs": 22806,
    "confidence": 1.0
  },
  {
    "text": "Storyboard",
    "startMs": 22948,
    "endMs": 24198,
    "timestampMs": 23573,
    "confidence": 1.0
  },
  {
    "text": " 出分镜、#",
    "startMs": 24198,
    "endMs": 24682,
    "timestampMs": 24440,
    "confidence": 1.0
  },
  {
    "text": "Brand",
    "startMs": 24682,
    "endMs": 25649,
    "timestampMs": 25165,
    "confidence": 1.0
  },
  {
    "text": " kit",
    "startMs": 25649,
    "endMs": 25967,
    "timestampMs": 25808,
    "confidence": 1.0
  },
  {
    "text": " 套品牌、#",
    "startMs": 25967,
    "endMs": 26568,
    "timestampMs": 26267,
    "confidence": 1.0
  },
  {
    "text": "Remove",
    "startMs": 26568,
    "endMs": 27830,
    "timestampMs": 27199,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "background",
    "startMs": 27842,
    "endMs": 28373,
    "timestampMs": 28107,
    "confidence": 1.0
  },
  {
    "text": " 抠像、#",
    "startMs": 28373,
    "endMs": 28833,
    "timestampMs": 28603,
    "confidence": 1.0
  },
  {
    "text": "HeyGen",
    "startMs": 28833,
    "endMs": 29929,
    "timestampMs": 29381,
    "confidence": 1.0
  },
  {
    "text": " Voice",
    "startMs": 29929,
    "endMs": 30177,
    "timestampMs": 30053,
    "confidence": 1.0
  },
  {
    "text": " 1",
    "startMs": 30177,
    "endMs": 30283,
    "timestampMs": 30230,
    "confidence": 1.0
  },
  {
    "text": " 配音与#",
    "startMs": 30283,
    "endMs": 30955,
    "timestampMs": 30619,
    "confidence": 1.0
  },
  {
    "text": "HeyGen",
    "startMs": 30955,
    "endMs": 31734,
    "timestampMs": 31344,
    "confidence": 1.0
  },
  {
    "text": " Video",
    "startMs": 31734,
    "endMs": 32028,
    "timestampMs": 31881,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "1",
    "startMs": 32040,
    "endMs": 32205,
    "timestampMs": 32122,
    "confidence": 1.0
  },
  {
    "text": " 生成视频",
    "startMs": 32205,
    "endMs": 32925,
    "timestampMs": 32565,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三把/支持",
    "startMs": 33467,
    "endMs": 34693,
    "timestampMs": 34080,
    "confidence": 1.0
  },
  {
    "text": " /clear",
    "startMs": 34693,
    "endMs": 35248,
    "timestampMs": 34970,
    "confidence": 1.0
  },
  {
    "text": " 开新对话、在",
    "startMs": 35248,
    "endMs": 36568,
    "timestampMs": 35908,
    "confidence": 1.0
  },
  {
    "text": " Claude Code",
    "startMs": 36568,
    "endMs": 37217,
    "timestampMs": 36892,
    "confidence": 1.0
  },
  {
    "text": " 里用",
    "startMs": 37217,
    "endMs": 37759,
    "timestampMs": 37488,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "/compact",
    "startMs": 37771,
    "endMs": 38337,
    "timestampMs": 38054,
    "confidence": 1.0
  },
  {
    "text": " 压缩上下文",
    "startMs": 38337,
    "endMs": 39245,
    "timestampMs": 38791,
    "confidence": 1.0
  },
  {
    "text": " 还能唤起口",
    "startMs": 39245,
    "endMs": 40554,
    "timestampMs": 39899,
    "confidence": 1.0
  },
  {
    "text": "播模板与外部",
    "startMs": 40554,
    "endMs": 41368,
    "timestampMs": 40961,
    "confidence": 1.0
  },
  {
    "text": " Skills",
    "startMs": 41368,
    "endMs": 41863,
    "timestampMs": 41615,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "牢记防踩坑快捷键",
    "startMs": 42394,
    "endMs": 43833,
    "timestampMs": 43113,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Agent",
    "startMs": 44127,
    "endMs": 44587,
    "timestampMs": 44357,
    "confidence": 1.0
  },
  {
    "text": " 运行中按",
    "startMs": 44587,
    "endMs": 45259,
    "timestampMs": 44923,
    "confidence": 1.0
  },
  {
    "text": " Enter",
    "startMs": 45259,
    "endMs": 45743,
    "timestampMs": 45501,
    "confidence": 1.0
  },
  {
    "text": " 会立刻打断转向重跑",
    "startMs": 45743,
    "endMs": 47453,
    "timestampMs": 46598,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按",
    "startMs": 47724,
    "endMs": 47936,
    "timestampMs": 47830,
    "confidence": 1.0
  },
  {
    "text": " Ctrl",
    "startMs": 47936,
    "endMs": 48538,
    "timestampMs": 48237,
    "confidence": 1.0
  },
  {
    "text": " +",
    "startMs": 48538,
    "endMs": 48774,
    "timestampMs": 48656,
    "confidence": 1.0
  },
  {
    "text": " Enter",
    "startMs": 48774,
    "endMs": 49222,
    "timestampMs": 48998,
    "confidence": 1.0
  },
  {
    "text": " 才会稳妥排",
    "startMs": 49222,
    "endMs": 50401,
    "timestampMs": 49811,
    "confidence": 1.0
  },
  {
    "text": "入下一轮队列",
    "startMs": 50401,
    "endMs": 51250,
    "timestampMs": 50825,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep02_s03_captions: Caption[] = [
  {
    "text": "初版成片怎",
    "startMs": 97,
    "endMs": 1394,
    "timestampMs": 745,
    "confidence": 1.0
  },
  {
    "text": "么改最快？",
    "startMs": 1394,
    "endMs": 1984,
    "timestampMs": 1689,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Studio",
    "startMs": 2512,
    "endMs": 3219,
    "timestampMs": 2865,
    "confidence": 1.0
  },
  {
    "text": " 提供两种零门槛交互",
    "startMs": 3219,
    "endMs": 5035,
    "timestampMs": 4127,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一种在右侧",
    "startMs": 5578,
    "endMs": 6663,
    "timestampMs": 6120,
    "confidence": 1.0
  },
  {
    "text": " Script",
    "startMs": 6663,
    "endMs": 7064,
    "timestampMs": 6863,
    "confidence": 1.0
  },
  {
    "text": " 面板像改",
    "startMs": 7064,
    "endMs": 8019,
    "timestampMs": 7541,
    "confidence": 1.0
  },
  {
    "text": " Word",
    "startMs": 8019,
    "endMs": 8302,
    "timestampMs": 8160,
    "confidence": 1.0
  },
  {
    "text": " 一样剪口播",
    "startMs": 8302,
    "endMs": 9057,
    "timestampMs": 8679,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "选中废话点",
    "startMs": 9363,
    "endMs": 10342,
    "timestampMs": 9852,
    "confidence": 1.0
  },
  {
    "text": " Cut",
    "startMs": 10342,
    "endMs": 10814,
    "timestampMs": 10578,
    "confidence": 1.0
  },
  {
    "text": " 或退格键加删除线",
    "startMs": 10814,
    "endMs": 12229,
    "timestampMs": 11521,
    "confidence": 1.0
  },
  {
    "text": " 任务不会立刻重算",
    "startMs": 12229,
    "endMs": 13750,
    "timestampMs": 12989,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而是暂存进",
    "startMs": 14033,
    "endMs": 14988,
    "timestampMs": 14510,
    "confidence": 1.0
  },
  {
    "text": " Pending video edits",
    "startMs": 14988,
    "endMs": 16250,
    "timestampMs": 15619,
    "confidence": 1.0
  },
  {
    "text": " 待处理清单",
    "startMs": 16250,
    "endMs": 17087,
    "timestampMs": 16668,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "选中词句还能点",
    "startMs": 17630,
    "endMs": 19175,
    "timestampMs": 18402,
    "confidence": 1.0
  },
  {
    "text": " Fix",
    "startMs": 19175,
    "endMs": 19564,
    "timestampMs": 19369,
    "confidence": 1.0
  },
  {
    "text": " words",
    "startMs": 19564,
    "endMs": 20012,
    "timestampMs": 19788,
    "confidence": 1.0
  },
  {
    "text": " 只改错字不动原声",
    "startMs": 20012,
    "endMs": 21333,
    "timestampMs": 20672,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "或插入",
    "startMs": 21545,
    "endMs": 22028,
    "timestampMs": 21786,
    "confidence": 1.0
  },
  {
    "text": " Zoom",
    "startMs": 22028,
    "endMs": 22394,
    "timestampMs": 22211,
    "confidence": 1.0
  },
  {
    "text": " in",
    "startMs": 22394,
    "endMs": 22559,
    "timestampMs": 22476,
    "confidence": 1.0
  },
  {
    "text": " 推镜、",
    "startMs": 22559,
    "endMs": 22972,
    "timestampMs": 22765,
    "confidence": 1.0
  },
  {
    "text": "B-roll",
    "startMs": 22972,
    "endMs": 23774,
    "timestampMs": 23373,
    "confidence": 1.0
  },
  {
    "text": " 与标题卡",
    "startMs": 23774,
    "endMs": 24505,
    "timestampMs": 24139,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "系统还会自",
    "startMs": 24858,
    "endMs": 25873,
    "timestampMs": 25365,
    "confidence": 1.0
  },
  {
    "text": "动标出冗余气口",
    "startMs": 25873,
    "endMs": 26828,
    "timestampMs": 26350,
    "confidence": 1.0
  },
  {
    "text": " 一键",
    "startMs": 26828,
    "endMs": 27441,
    "timestampMs": 27134,
    "confidence": 1.0
  },
  {
    "text": " Keep",
    "startMs": 27441,
    "endMs": 27700,
    "timestampMs": 27570,
    "confidence": 1.0
  },
  {
    "text": " all",
    "startMs": 27700,
    "endMs": 28007,
    "timestampMs": 27853,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 28007,
    "endMs": 28325,
    "timestampMs": 28166,
    "confidence": 1.0
  },
  {
    "text": " Cut",
    "startMs": 28325,
    "endMs": 28608,
    "timestampMs": 28466,
    "confidence": 1.0
  },
  {
    "text": " all",
    "startMs": 28608,
    "endMs": 28927,
    "timestampMs": 28767,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二种在画布下方",
    "startMs": 29446,
    "endMs": 30708,
    "timestampMs": 30077,
    "confidence": 1.0
  },
  {
    "text": " 按",
    "startMs": 30708,
    "endMs": 31179,
    "timestampMs": 30943,
    "confidence": 1.0
  },
  {
    "text": " V",
    "startMs": 31179,
    "endMs": 31415,
    "timestampMs": 31297,
    "confidence": 1.0
  },
  {
    "text": " 键",
    "startMs": 31415,
    "endMs": 31686,
    "timestampMs": 31550,
    "confidence": 1.0
  },
  {
    "text": " Select",
    "startMs": 31686,
    "endMs": 32193,
    "timestampMs": 31939,
    "confidence": 1.0
  },
  {
    "text": " 选图层",
    "startMs": 32193,
    "endMs": 32842,
    "timestampMs": 32517,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按",
    "startMs": 33160,
    "endMs": 33384,
    "timestampMs": 33272,
    "confidence": 1.0
  },
  {
    "text": " A",
    "startMs": 33384,
    "endMs": 33573,
    "timestampMs": 33478,
    "confidence": 1.0
  },
  {
    "text": " 键触发",
    "startMs": 33573,
    "endMs": 34139,
    "timestampMs": 33856,
    "confidence": 1.0
  },
  {
    "text": " Prompt",
    "startMs": 34139,
    "endMs": 34576,
    "timestampMs": 34357,
    "confidence": 1.0
  },
  {
    "text": " to",
    "startMs": 34576,
    "endMs": 34705,
    "timestampMs": 34640,
    "confidence": 1.0
  },
  {
    "text": " edit",
    "startMs": 34705,
    "endMs": 35142,
    "timestampMs": 34923,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Apple",
    "startMs": 35472,
    "endMs": 35778,
    "timestampMs": 35625,
    "confidence": 1.0
  },
  {
    "text": " Silicon",
    "startMs": 35778,
    "endMs": 36179,
    "timestampMs": 35978,
    "confidence": 1.0
  },
  {
    "text": " Mac",
    "startMs": 36179,
    "endMs": 36509,
    "timestampMs": 36344,
    "confidence": 1.0
  },
  {
    "text": " 右键还能本地",
    "startMs": 36509,
    "endMs": 37712,
    "timestampMs": 37110,
    "confidence": 1.0
  },
  {
    "text": " Cut",
    "startMs": 37712,
    "endMs": 37972,
    "timestampMs": 37842,
    "confidence": 1.0
  },
  {
    "text": " out",
    "startMs": 37972,
    "endMs": 38184,
    "timestampMs": 38078,
    "confidence": 1.0
  },
  {
    "text": " object",
    "startMs": 38184,
    "endMs": 38644,
    "timestampMs": 38414,
    "confidence": 1.0
  },
  {
    "text": " here",
    "startMs": 38644,
    "endMs": 38939,
    "timestampMs": 38791,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "抠像",
    "startMs": 38939,
    "endMs": 39399,
    "timestampMs": 39169,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按",
    "startMs": 39670,
    "endMs": 39870,
    "timestampMs": 39770,
    "confidence": 1.0
  },
  {
    "text": " D",
    "startMs": 39870,
    "endMs": 40083,
    "timestampMs": 39976,
    "confidence": 1.0
  },
  {
    "text": " 键",
    "startMs": 40083,
    "endMs": 40342,
    "timestampMs": 40212,
    "confidence": 1.0
  },
  {
    "text": " Draw",
    "startMs": 40342,
    "endMs": 40696,
    "timestampMs": 40519,
    "confidence": 1.0
  },
  {
    "text": " 画圈批注",
    "startMs": 40696,
    "endMs": 41368,
    "timestampMs": 41032,
    "confidence": 1.0
  },
  {
    "text": " 按",
    "startMs": 41368,
    "endMs": 41816,
    "timestampMs": 41592,
    "confidence": 1.0
  },
  {
    "text": " C",
    "startMs": 41816,
    "endMs": 42123,
    "timestampMs": 41969,
    "confidence": 1.0
  },
  {
    "text": " 键",
    "startMs": 42123,
    "endMs": 42358,
    "timestampMs": 42240,
    "confidence": 1.0
  },
  {
    "text": " Comment",
    "startMs": 42358,
    "endMs": 42995,
    "timestampMs": 42676,
    "confidence": 1.0
  },
  {
    "text": " 钉住时间戳",
    "startMs": 42995,
    "endMs": 43868,
    "timestampMs": 43431,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "所有修改汇总进",
    "startMs": 44399,
    "endMs": 45625,
    "timestampMs": 45012,
    "confidence": 1.0
  },
  {
    "text": " Pending video edits",
    "startMs": 45625,
    "endMs": 46969,
    "timestampMs": 46297,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一次发送让",
    "startMs": 47229,
    "endMs": 48172,
    "timestampMs": 47700,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 48172,
    "endMs": 48667,
    "timestampMs": 48419,
    "confidence": 1.0
  },
  {
    "text": " 批量改完",
    "startMs": 48667,
    "endMs": 49387,
    "timestampMs": 49027,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep02_s04_captions: Caption[] = [
  {
    "text": "商业制作离",
    "startMs": 97,
    "endMs": 1500,
    "timestampMs": 798,
    "confidence": 1.0
  },
  {
    "text": "不开三大高阶模块",
    "startMs": 1500,
    "endMs": 2656,
    "timestampMs": 2078,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一是",
    "startMs": 3196,
    "endMs": 3726,
    "timestampMs": 3461,
    "confidence": 1.0
  },
  {
    "text": " Brand",
    "startMs": 3726,
    "endMs": 4116,
    "timestampMs": 3921,
    "confidence": 1.0
  },
  {
    "text": " Kits",
    "startMs": 4116,
    "endMs": 4564,
    "timestampMs": 4340,
    "confidence": 1.0
  },
  {
    "text": " 点",
    "startMs": 4564,
    "endMs": 5094,
    "timestampMs": 4829,
    "confidence": 1.0
  },
  {
    "text": " Scan",
    "startMs": 5094,
    "endMs": 5366,
    "timestampMs": 5230,
    "confidence": 1.0
  },
  {
    "text": " my",
    "startMs": 5366,
    "endMs": 5495,
    "timestampMs": 5430,
    "confidence": 1.0
  },
  {
    "text": " site",
    "startMs": 5495,
    "endMs": 5849,
    "timestampMs": 5672,
    "confidence": 1.0
  },
  {
    "text": " 输网址或传文件",
    "startMs": 5849,
    "endMs": 7087,
    "timestampMs": 6468,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "自动提取色板、",
    "startMs": 7288,
    "endMs": 8208,
    "timestampMs": 7748,
    "confidence": 1.0
  },
  {
    "text": "Logo",
    "startMs": 8208,
    "endMs": 8927,
    "timestampMs": 8567,
    "confidence": 1.0
  },
  {
    "text": "、字体与规则",
    "startMs": 8927,
    "endMs": 10118,
    "timestampMs": 9522,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "绑定项目后",
    "startMs": 10531,
    "endMs": 11333,
    "timestampMs": 10932,
    "confidence": 1.0
  },
  {
    "text": "会完整拷贝进",
    "startMs": 11333,
    "endMs": 12441,
    "timestampMs": 11887,
    "confidence": 1.0
  },
  {
    "text": " assets/brand-kit",
    "startMs": 12441,
    "endMs": 13561,
    "timestampMs": 13001,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "迁移环境也",
    "startMs": 13774,
    "endMs": 14764,
    "timestampMs": 14269,
    "confidence": 1.0
  },
  {
    "text": "能原样渲染",
    "startMs": 14764,
    "endMs": 15495,
    "timestampMs": 15129,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二是",
    "startMs": 16026,
    "endMs": 16604,
    "timestampMs": 16315,
    "confidence": 1.0
  },
  {
    "text": " HeyGen",
    "startMs": 16604,
    "endMs": 17205,
    "timestampMs": 16904,
    "confidence": 1.0
  },
  {
    "text": " Video",
    "startMs": 17205,
    "endMs": 17535,
    "timestampMs": 17370,
    "confidence": 1.0
  },
  {
    "text": " 1",
    "startMs": 17535,
    "endMs": 17783,
    "timestampMs": 17659,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "输入#",
    "startMs": 18113,
    "endMs": 18502,
    "timestampMs": 18307,
    "confidence": 1.0
  },
  {
    "text": "HeyGen",
    "startMs": 18502,
    "endMs": 19540,
    "timestampMs": 19021,
    "confidence": 1.0
  },
  {
    "text": " Video",
    "startMs": 19540,
    "endMs": 19988,
    "timestampMs": 19764,
    "confidence": 1.0
  },
  {
    "text": " 1",
    "startMs": 19988,
    "endMs": 20118,
    "timestampMs": 20053,
    "confidence": 1.0
  },
  {
    "text": " 生成",
    "startMs": 20118,
    "endMs": 20495,
    "timestampMs": 20306,
    "confidence": 1.0
  },
  {
    "text": " 5",
    "startMs": 20495,
    "endMs": 20683,
    "timestampMs": 20589,
    "confidence": 1.0
  },
  {
    "text": " 到",
    "startMs": 20683,
    "endMs": 20957,
    "timestampMs": 20820,
    "confidence": 1.0
  },
  {
    "text": " 60",
    "startMs": 20957,
    "endMs": 21285,
    "timestampMs": 21121,
    "confidence": 1.0
  },
  {
    "text": " 秒一镜到底视频",
    "startMs": 21285,
    "endMs": 22276,
    "timestampMs": 21780,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "支持",
    "startMs": 22453,
    "endMs": 22854,
    "timestampMs": 22653,
    "confidence": 1.0
  },
  {
    "text": " 480",
    "startMs": 22854,
    "endMs": 23302,
    "timestampMs": 23078,
    "confidence": 1.0
  },
  {
    "text": " p",
    "startMs": 23302,
    "endMs": 23550,
    "timestampMs": 23426,
    "confidence": 1.0
  },
  {
    "text": " 与默认",
    "startMs": 23550,
    "endMs": 24104,
    "timestampMs": 23827,
    "confidence": 1.0
  },
  {
    "text": " 768",
    "startMs": 24104,
    "endMs": 24564,
    "timestampMs": 24334,
    "confidence": 1.0
  },
  {
    "text": " p",
    "startMs": 24564,
    "endMs": 24799,
    "timestampMs": 24681,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "既能首帧生片、",
    "startMs": 24988,
    "endMs": 25991,
    "timestampMs": 25489,
    "confidence": 1.0
  },
  {
    "text": "上传最多",
    "startMs": 25991,
    "endMs": 27016,
    "timestampMs": 26503,
    "confidence": 1.0
  },
  {
    "text": " 9",
    "startMs": 27016,
    "endMs": 27358,
    "timestampMs": 27187,
    "confidence": 1.0
  },
  {
    "text": " 张图",
    "startMs": 27358,
    "endMs": 27653,
    "timestampMs": 27505,
    "confidence": 1.0
  },
  {
    "text": " Match",
    "startMs": 27653,
    "endMs": 28007,
    "timestampMs": 27830,
    "confidence": 1.0
  },
  {
    "text": " a",
    "startMs": 28007,
    "endMs": 28125,
    "timestampMs": 28066,
    "confidence": 1.0
  },
  {
    "text": " look",
    "startMs": 28125,
    "endMs": 28432,
    "timestampMs": 28278,
    "confidence": 1.0
  },
  {
    "text": " 锁画风",
    "startMs": 28432,
    "endMs": 28962,
    "timestampMs": 28697,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "也能用",
    "startMs": 29074,
    "endMs": 29440,
    "timestampMs": 29257,
    "confidence": 1.0
  },
  {
    "text": " 5",
    "startMs": 29440,
    "endMs": 29734,
    "timestampMs": 29587,
    "confidence": 1.0
  },
  {
    "text": " 秒内参考视频做",
    "startMs": 29734,
    "endMs": 31043,
    "timestampMs": 30388,
    "confidence": 1.0
  },
  {
    "text": " Copy",
    "startMs": 31043,
    "endMs": 31409,
    "timestampMs": 31226,
    "confidence": 1.0
  },
  {
    "text": " a",
    "startMs": 31409,
    "endMs": 31492,
    "timestampMs": 31450,
    "confidence": 1.0
  },
  {
    "text": " movement",
    "startMs": 31492,
    "endMs": 32069,
    "timestampMs": 31780,
    "confidence": 1.0
  },
  {
    "text": " 动作迁移",
    "startMs": 32069,
    "endMs": 32907,
    "timestampMs": 32488,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "避坑提示",
    "startMs": 33449,
    "endMs": 34192,
    "timestampMs": 33820,
    "confidence": 1.0
  },
  {
    "text": " 5",
    "startMs": 34192,
    "endMs": 34718,
    "timestampMs": 34455,
    "confidence": 1.0
  },
  {
    "text": " 秒",
    "startMs": 34718,
    "endMs": 34947,
    "timestampMs": 34832,
    "confidence": 1.0
  },
  {
    "text": " 7.8",
    "startMs": 34947,
    "endMs": 35314,
    "timestampMs": 35130,
    "confidence": 1.0
  },
  {
    "text": " MB",
    "startMs": 35314,
    "endMs": 35572,
    "timestampMs": 35443,
    "confidence": 1.0
  },
  {
    "text": " 的",
    "startMs": 35572,
    "endMs": 35737,
    "timestampMs": 35654,
    "confidence": 1.0
  },
  {
    "text": " 1080",
    "startMs": 35737,
    "endMs": 36338,
    "timestampMs": 36037,
    "confidence": 1.0
  },
  {
    "text": " p",
    "startMs": 36338,
    "endMs": 36598,
    "timestampMs": 36468,
    "confidence": 1.0
  },
  {
    "text": " 参考片会报体积过大",
    "startMs": 36598,
    "endMs": 38166,
    "timestampMs": 37382,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "压到",
    "startMs": 38532,
    "endMs": 38897,
    "timestampMs": 38714,
    "confidence": 1.0
  },
  {
    "text": " 720",
    "startMs": 38897,
    "endMs": 39357,
    "timestampMs": 39127,
    "confidence": 1.0
  },
  {
    "text": " p",
    "startMs": 39357,
    "endMs": 39628,
    "timestampMs": 39492,
    "confidence": 1.0
  },
  {
    "text": " 即可通过",
    "startMs": 39628,
    "endMs": 40253,
    "timestampMs": 39940,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三是",
    "startMs": 40796,
    "endMs": 41456,
    "timestampMs": 41126,
    "confidence": 1.0
  },
  {
    "text": " Reference",
    "startMs": 41456,
    "endMs": 42034,
    "timestampMs": 41745,
    "confidence": 1.0
  },
  {
    "text": " Video",
    "startMs": 42034,
    "endMs": 42529,
    "timestampMs": 42281,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "粘贴最长",
    "startMs": 42930,
    "endMs": 43744,
    "timestampMs": 43337,
    "confidence": 1.0
  },
  {
    "text": " 30",
    "startMs": 43744,
    "endMs": 43987,
    "timestampMs": 43865,
    "confidence": 1.0
  },
  {
    "text": " 分钟",
    "startMs": 43987,
    "endMs": 44392,
    "timestampMs": 44189,
    "confidence": 1.0
  },
  {
    "text": " YouTube、",
    "startMs": 44392,
    "endMs": 45006,
    "timestampMs": 44699,
    "confidence": 1.0
  },
  {
    "text": "TikTok",
    "startMs": 45006,
    "endMs": 45831,
    "timestampMs": 45418,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 45831,
    "endMs": 46067,
    "timestampMs": 45949,
    "confidence": 1.0
  },
  {
    "text": " X",
    "startMs": 46067,
    "endMs": 46374,
    "timestampMs": 46220,
    "confidence": 1.0
  },
  {
    "text": " 链接",
    "startMs": 46374,
    "endMs": 46786,
    "timestampMs": 46580,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "自动判断",
    "startMs": 46999,
    "endMs": 47777,
    "timestampMs": 47388,
    "confidence": 1.0
  },
  {
    "text": " Copy",
    "startMs": 47777,
    "endMs": 48237,
    "timestampMs": 48007,
    "confidence": 1.0
  },
  {
    "text": " editing",
    "startMs": 48237,
    "endMs": 48579,
    "timestampMs": 48408,
    "confidence": 1.0
  },
  {
    "text": " style",
    "startMs": 48579,
    "endMs": 49003,
    "timestampMs": 48791,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 49003,
    "endMs": 49369,
    "timestampMs": 49186,
    "confidence": 1.0
  },
  {
    "text": " Video",
    "startMs": 49369,
    "endMs": 49711,
    "timestampMs": 49540,
    "confidence": 1.0
  },
  {
    "text": " brief",
    "startMs": 49711,
    "endMs": 50159,
    "timestampMs": 49935,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并用",
    "startMs": 50418,
    "endMs": 50772,
    "timestampMs": 50595,
    "confidence": 1.0
  },
  {
    "text": " Show",
    "startMs": 50772,
    "endMs": 51079,
    "timestampMs": 50925,
    "confidence": 1.0
  },
  {
    "text": " original",
    "startMs": 51079,
    "endMs": 51668,
    "timestampMs": 51373,
    "confidence": 1.0
  },
  {
    "text": " 同轴分屏对照原片",
    "startMs": 51668,
    "endMs": 53036,
    "timestampMs": 52352,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep02_s05_captions: Caption[] = [
  {
    "text": "最后看协作与",
    "startMs": 97,
    "endMs": 1583,
    "timestampMs": 840,
    "confidence": 1.0
  },
  {
    "text": "交付闭环",
    "startMs": 1583,
    "endMs": 2373,
    "timestampMs": 1978,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "若在终端",
    "startMs": 2913,
    "endMs": 3715,
    "timestampMs": 3314,
    "confidence": 1.0
  },
  {
    "text": " Claude Code、",
    "startMs": 3715,
    "endMs": 4493,
    "timestampMs": 4104,
    "confidence": 1.0
  },
  {
    "text": "Codex",
    "startMs": 4493,
    "endMs": 5354,
    "timestampMs": 4923,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 5354,
    "endMs": 5660,
    "timestampMs": 5507,
    "confidence": 1.0
  },
  {
    "text": " Grok",
    "startMs": 5660,
    "endMs": 6026,
    "timestampMs": 5843,
    "confidence": 1.0
  },
  {
    "text": " 起盘",
    "startMs": 6026,
    "endMs": 6474,
    "timestampMs": 6250,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Mac",
    "startMs": 6745,
    "endMs": 7052,
    "timestampMs": 6898,
    "confidence": 1.0
  },
  {
    "text": " 上运行",
    "startMs": 7052,
    "endMs": 7642,
    "timestampMs": 7347,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes open",
    "startMs": 7642,
    "endMs": 9234,
    "timestampMs": 8438,
    "confidence": 1.0
  },
  {
    "text": " 即可用",
    "startMs": 9234,
    "endMs": 9717,
    "timestampMs": 9475,
    "confidence": 1.0
  },
  {
    "text": " Studio",
    "startMs": 9717,
    "endMs": 10200,
    "timestampMs": 9958,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "原地打开并",
    "startMs": 10224,
    "endMs": 11144,
    "timestampMs": 10684,
    "confidence": 1.0
  },
  {
    "text": "继承上下文",
    "startMs": 11144,
    "endMs": 11993,
    "timestampMs": 11568,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "改完回终端跑",
    "startMs": 12406,
    "endMs": 13644,
    "timestampMs": 13025,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes catch-up",
    "startMs": 13644,
    "endMs": 15330,
    "timestampMs": 14487,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Agent",
    "startMs": 15542,
    "endMs": 16073,
    "timestampMs": 15807,
    "confidence": 1.0
  },
  {
    "text": " 立刻读懂桌面端改动",
    "startMs": 16073,
    "endMs": 17630,
    "timestampMs": 16851,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "注意",
    "startMs": 18172,
    "endMs": 18644,
    "timestampMs": 18408,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只有从",
    "startMs": 19104,
    "endMs": 19552,
    "timestampMs": 19328,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 19552,
    "endMs": 19953,
    "timestampMs": 19752,
    "confidence": 1.0
  },
  {
    "text": " 会话通过",
    "startMs": 19953,
    "endMs": 20967,
    "timestampMs": 20460,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes open",
    "startMs": 20967,
    "endMs": 22606,
    "timestampMs": 21786,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "交接的工程才支持",
    "startMs": 22618,
    "endMs": 24045,
    "timestampMs": 23331,
    "confidence": 1.0
  },
  {
    "text": " catch-up",
    "startMs": 24045,
    "endMs": 24623,
    "timestampMs": 24334,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "普通终端打开或",
    "startMs": 24882,
    "endMs": 26250,
    "timestampMs": 25566,
    "confidence": 1.0
  },
  {
    "text": " Import",
    "startMs": 26250,
    "endMs": 26840,
    "timestampMs": 26545,
    "confidence": 1.0
  },
  {
    "text": " projects",
    "startMs": 26840,
    "endMs": 27476,
    "timestampMs": 27158,
    "confidence": 1.0
  },
  {
    "text": " 导入的不会同步历史",
    "startMs": 27476,
    "endMs": 28892,
    "timestampMs": 28184,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "导出支持",
    "startMs": 29434,
    "endMs": 30236,
    "timestampMs": 29835,
    "confidence": 1.0
  },
  {
    "text": " MP4、",
    "startMs": 30236,
    "endMs": 30979,
    "timestampMs": 30607,
    "confidence": 1.0
  },
  {
    "text": "WebM",
    "startMs": 30979,
    "endMs": 32087,
    "timestampMs": 31533,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 32087,
    "endMs": 32276,
    "timestampMs": 32181,
    "confidence": 1.0
  },
  {
    "text": " MOV",
    "startMs": 32276,
    "endMs": 32854,
    "timestampMs": 32565,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "This",
    "startMs": 33196,
    "endMs": 33432,
    "timestampMs": 33314,
    "confidence": 1.0
  },
  {
    "text": " Mac",
    "startMs": 33432,
    "endMs": 33762,
    "timestampMs": 33597,
    "confidence": 1.0
  },
  {
    "text": " 本地渲染全",
    "startMs": 33762,
    "endMs": 34634,
    "timestampMs": 34198,
    "confidence": 1.0
  },
  {
    "text": "计划免费且",
    "startMs": 34634,
    "endMs": 35625,
    "timestampMs": 35129,
    "confidence": 1.0
  },
  {
    "text": "不限次数与体积",
    "startMs": 35625,
    "endMs": 36804,
    "timestampMs": 36214,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Cloud",
    "startMs": 37182,
    "endMs": 37571,
    "timestampMs": 37376,
    "confidence": 1.0
  },
  {
    "text": " 云端免费版每月",
    "startMs": 37571,
    "endMs": 38797,
    "timestampMs": 38184,
    "confidence": 1.0
  },
  {
    "text": " 5",
    "startMs": 38797,
    "endMs": 39222,
    "timestampMs": 39009,
    "confidence": 1.0
  },
  {
    "text": " 次、上限",
    "startMs": 39222,
    "endMs": 39823,
    "timestampMs": 39522,
    "confidence": 1.0
  },
  {
    "text": " 200",
    "startMs": 39823,
    "endMs": 40193,
    "timestampMs": 40008,
    "confidence": 1.0
  },
  {
    "text": " MB",
    "startMs": 40193,
    "endMs": 40366,
    "timestampMs": 40279,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "超出可让",
    "startMs": 40625,
    "endMs": 41274,
    "timestampMs": 40949,
    "confidence": 1.0
  },
  {
    "text": " Framey",
    "startMs": 41274,
    "endMs": 41745,
    "timestampMs": 41509,
    "confidence": 1.0
  },
  {
    "text": " 托管至云端资产库",
    "startMs": 41745,
    "endMs": 43113,
    "timestampMs": 42429,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "点顶部",
    "startMs": 43656,
    "endMs": 44210,
    "timestampMs": 43933,
    "confidence": 1.0
  },
  {
    "text": " Share",
    "startMs": 44210,
    "endMs": 44729,
    "timestampMs": 44469,
    "confidence": 1.0
  },
  {
    "text": " 一键生成审",
    "startMs": 44729,
    "endMs": 45814,
    "timestampMs": 45271,
    "confidence": 1.0
  },
  {
    "text": "阅链接并控权限",
    "startMs": 45814,
    "endMs": 47075,
    "timestampMs": 46444,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "后续重导点",
    "startMs": 47417,
    "endMs": 48396,
    "timestampMs": 47906,
    "confidence": 1.0
  },
  {
    "text": " Add",
    "startMs": 48396,
    "endMs": 48691,
    "timestampMs": 48543,
    "confidence": 1.0
  },
  {
    "text": " this",
    "startMs": 48691,
    "endMs": 48915,
    "timestampMs": 48803,
    "confidence": 1.0
  },
  {
    "text": " version",
    "startMs": 48915,
    "endMs": 49399,
    "timestampMs": 49157,
    "confidence": 1.0
  },
  {
    "text": " 即可同链接迭代版本",
    "startMs": 49399,
    "endMs": 50920,
    "timestampMs": 50159,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
