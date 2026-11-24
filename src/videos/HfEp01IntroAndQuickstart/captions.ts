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

export const EP01_TOTAL_FRAMES = 7568;

export const EP01_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp01IntroAndQuickstart/ep01_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1584,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1518,
    "voiceDurationMs": 50592
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp01IntroAndQuickstart/ep01_s02_voice.mp3",
    "fromFrame": 1584,
    "durationInFrames": 1469,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1415,
    "voiceDurationMs": 47160
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp01IntroAndQuickstart/ep01_s03_voice.mp3",
    "fromFrame": 3053,
    "durationInFrames": 1511,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1457,
    "voiceDurationMs": 48552
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp01IntroAndQuickstart/ep01_s04_voice.mp3",
    "fromFrame": 4564,
    "durationInFrames": 1540,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1486,
    "voiceDurationMs": 49512
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp01IntroAndQuickstart/ep01_s05_voice.mp3",
    "fromFrame": 6104,
    "durationInFrames": 1464,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1404,
    "voiceDurationMs": 46800
  }
};

export const ep01_s01_captions: Caption[] = [
  {
    "text": "欢迎来到",
    "startMs": 100,
    "endMs": 753,
    "timestampMs": 426,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames",
    "startMs": 753,
    "endMs": 2549,
    "timestampMs": 1651,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科系列",
    "startMs": 2549,
    "endMs": 3529,
    "timestampMs": 3039,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "作为第一集",
    "startMs": 3479,
    "endMs": 4295,
    "timestampMs": 3887,
    "confidence": 1.0
  },
  {
    "text": " 我们先回答",
    "startMs": 4295,
    "endMs": 5111,
    "timestampMs": 4703,
    "confidence": 1.0
  },
  {
    "text": "一个核心问题",
    "startMs": 5111,
    "endMs": 6091,
    "timestampMs": 5601,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "究竟什么是",
    "startMs": 6091,
    "endMs": 6907,
    "timestampMs": 6499,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames？",
    "startMs": 6907,
    "endMs": 8703,
    "timestampMs": 7805,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "简单来说",
    "startMs": 8703,
    "endMs": 9477,
    "timestampMs": 9090,
    "confidence": 1.0
  },
  {
    "text": " 它是 HeyGen 开源的",
    "startMs": 9477,
    "endMs": 11606,
    "timestampMs": 10541,
    "confidence": 1.0
  },
  {
    "text": " HTML 转视频框架",
    "startMs": 11606,
    "endMs": 13349,
    "timestampMs": 12477,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "你只需用",
    "startMs": 13349,
    "endMs": 14024,
    "timestampMs": 13686,
    "confidence": 1.0
  },
  {
    "text": "自然语言",
    "startMs": 14024,
    "endMs": 14699,
    "timestampMs": 14361,
    "confidence": 1.0
  },
  {
    "text": "提出需求",
    "startMs": 14699,
    "endMs": 15373,
    "timestampMs": 15036,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "AI Agent",
    "startMs": 15373,
    "endMs": 16652,
    "timestampMs": 16012,
    "confidence": 1.0
  },
  {
    "text": " 就会自动编写出",
    "startMs": 16652,
    "endMs": 17931,
    "timestampMs": 17291,
    "confidence": 1.0
  },
  {
    "text": "可编辑的 HTML 工程",
    "startMs": 17931,
    "endMs": 19758,
    "timestampMs": 18844,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "再由 HyperFrames",
    "startMs": 19758,
    "endMs": 21950,
    "timestampMs": 20854,
    "confidence": 1.0
  },
  {
    "text": " 实时预览",
    "startMs": 21950,
    "endMs": 22625,
    "timestampMs": 22287,
    "confidence": 1.0
  },
  {
    "text": "或渲染成高清视频",
    "startMs": 22625,
    "endMs": 23974,
    "timestampMs": 23299,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它拥有",
    "startMs": 23974,
    "endMs": 24606,
    "timestampMs": 24290,
    "confidence": 1.0
  },
  {
    "text": "三大核心基因",
    "startMs": 24606,
    "endMs": 25871,
    "timestampMs": 25238,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一",
    "startMs": 25871,
    "endMs": 26293,
    "timestampMs": 26082,
    "confidence": 1.0
  },
  {
    "text": " Agent 驱动构建",
    "startMs": 26293,
    "endMs": 28190,
    "timestampMs": 27241,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "无需手写代码",
    "startMs": 28190,
    "endMs": 29521,
    "timestampMs": 28855,
    "confidence": 1.0
  },
  {
    "text": " AI 自动编排",
    "startMs": 29521,
    "endMs": 30852,
    "timestampMs": 30186,
    "confidence": 1.0
  },
  {
    "text": "布局、样式与动画",
    "startMs": 30852,
    "endMs": 32406,
    "timestampMs": 31629,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二",
    "startMs": 32406,
    "endMs": 32828,
    "timestampMs": 32617,
    "confidence": 1.0
  },
  {
    "text": " 源码级可编辑",
    "startMs": 32828,
    "endMs": 34093,
    "timestampMs": 33460,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "产出的不是黑盒视频",
    "startMs": 34093,
    "endMs": 36095,
    "timestampMs": 35094,
    "confidence": 1.0
  },
  {
    "text": " 而是标准网页文件夹",
    "startMs": 36095,
    "endMs": 38098,
    "timestampMs": 37096,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "任何工具",
    "startMs": 38098,
    "endMs": 38941,
    "timestampMs": 38519,
    "confidence": 1.0
  },
  {
    "text": "都能随时打开修改",
    "startMs": 38941,
    "endMs": 40628,
    "timestampMs": 39784,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三",
    "startMs": 40628,
    "endMs": 41050,
    "timestampMs": 40839,
    "confidence": 1.0
  },
  {
    "text": " 确定性",
    "startMs": 41050,
    "endMs": 41682,
    "timestampMs": 41366,
    "confidence": 1.0
  },
  {
    "text": "逐帧寻址渲染",
    "startMs": 41682,
    "endMs": 42947,
    "timestampMs": 42314,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "渲染器暂停时间轴",
    "startMs": 42947,
    "endMs": 44886,
    "timestampMs": 43916,
    "confidence": 1.0
  },
  {
    "text": " 精准跳转到每一帧",
    "startMs": 44886,
    "endMs": 46825,
    "timestampMs": 45855,
    "confidence": 1.0
  },
  {
    "text": "进行捕获",
    "startMs": 46825,
    "endMs": 47795,
    "timestampMs": 47310,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "哪怕在慢速机器上",
    "startMs": 47795,
    "endMs": 49482,
    "timestampMs": 48638,
    "confidence": 1.0
  },
  {
    "text": "也绝不掉帧",
    "startMs": 49482,
    "endMs": 50536,
    "timestampMs": 50009,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep01_s02_captions: Caption[] = [
  {
    "text": "在 HyperFrames 中",
    "startMs": 100,
    "endMs": 2304,
    "timestampMs": 1202,
    "confidence": 1.0
  },
  {
    "text": " 工程文件夹",
    "startMs": 2304,
    "endMs": 3152,
    "timestampMs": 2728,
    "confidence": 1.0
  },
  {
    "text": "就是单一事实来源",
    "startMs": 3152,
    "endMs": 4508,
    "timestampMs": 3830,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "打开标准工程",
    "startMs": 4458,
    "endMs": 5379,
    "timestampMs": 4918,
    "confidence": 1.0
  },
  {
    "text": " 会看到记录目标的",
    "startMs": 5379,
    "endMs": 6607,
    "timestampMs": 5993,
    "confidence": 1.0
  },
  {
    "text": " BRIEF.md",
    "startMs": 6607,
    "endMs": 7834,
    "timestampMs": 7220,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "规划分镜的",
    "startMs": 7834,
    "endMs": 8550,
    "timestampMs": 8192,
    "confidence": 1.0
  },
  {
    "text": " STORYBOARD.md",
    "startMs": 8550,
    "endMs": 10412,
    "timestampMs": 9481,
    "confidence": 1.0
  },
  {
    "text": " 与旁白 SCRIPT.md",
    "startMs": 10412,
    "endMs": 12130,
    "timestampMs": 11271,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "定义品牌色彩与字体的",
    "startMs": 12130,
    "endMs": 13664,
    "timestampMs": 12897,
    "confidence": 1.0
  },
  {
    "text": " frame.md",
    "startMs": 13664,
    "endMs": 14892,
    "timestampMs": 14278,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及主入口",
    "startMs": 14892,
    "endMs": 15506,
    "timestampMs": 15199,
    "confidence": 1.0
  },
  {
    "text": " index.html",
    "startMs": 15506,
    "endMs": 16733,
    "timestampMs": 16119,
    "confidence": 1.0
  },
  {
    "text": " 与 compositions 目录",
    "startMs": 16733,
    "endMs": 18574,
    "timestampMs": 17653,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最妙的是",
    "startMs": 18573,
    "endMs": 19433,
    "timestampMs": 19003,
    "confidence": 1.0
  },
  {
    "text": " AI Agent、桌面端",
    "startMs": 19433,
    "endMs": 21584,
    "timestampMs": 20508,
    "confidence": 1.0
  },
  {
    "text": "与浏览器编辑器",
    "startMs": 21584,
    "endMs": 23090,
    "timestampMs": 22337,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "命令行 CLI",
    "startMs": 23090,
    "endMs": 24269,
    "timestampMs": 23679,
    "confidence": 1.0
  },
  {
    "text": " 以及嵌入式 SDK",
    "startMs": 24269,
    "endMs": 25840,
    "timestampMs": 25054,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "读写的都是",
    "startMs": 25840,
    "endMs": 27081,
    "timestampMs": 26460,
    "confidence": 1.0
  },
  {
    "text": "同一份 HTML 源码",
    "startMs": 27081,
    "endMs": 29314,
    "timestampMs": 28197,
    "confidence": 1.0
  },
  {
    "text": " 零转换损耗",
    "startMs": 29314,
    "endMs": 30554,
    "timestampMs": 29934,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在 HTML 里",
    "startMs": 30554,
    "endMs": 31482,
    "timestampMs": 31018,
    "confidence": 1.0
  },
  {
    "text": " data-composition-id",
    "startMs": 31482,
    "endMs": 34112,
    "timestampMs": 32797,
    "confidence": 1.0
  },
  {
    "text": " 声明画布容器",
    "startMs": 34112,
    "endMs": 35040,
    "timestampMs": 34576,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "class=\"clip\"",
    "startMs": 35040,
    "endMs": 37139,
    "timestampMs": 36089,
    "confidence": 1.0
  },
  {
    "text": " 配合 data-start",
    "startMs": 37139,
    "endMs": 39448,
    "timestampMs": 38293,
    "confidence": 1.0
  },
  {
    "text": " 控制秒级出入场",
    "startMs": 39448,
    "endMs": 40917,
    "timestampMs": 40182,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "暂停的 GSAP 时间轴",
    "startMs": 40917,
    "endMs": 42364,
    "timestampMs": 41640,
    "confidence": 1.0
  },
  {
    "text": "注册在",
    "startMs": 42364,
    "endMs": 42798,
    "timestampMs": 42581,
    "confidence": 1.0
  },
  {
    "text": " window.__timelines",
    "startMs": 42798,
    "endMs": 45403,
    "timestampMs": 44100,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "随时等待渲染器",
    "startMs": 45403,
    "endMs": 46485,
    "timestampMs": 45944,
    "confidence": 1.0
  },
  {
    "text": "精准寻址",
    "startMs": 46485,
    "endMs": 47104,
    "timestampMs": 46794,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep01_s03_captions: Caption[] = [
  {
    "text": "新手如何快速跑通",
    "startMs": 100,
    "endMs": 1876,
    "timestampMs": 988,
    "confidence": 1.0
  },
  {
    "text": "第一个视频？",
    "startMs": 1876,
    "endMs": 2986,
    "timestampMs": 2431,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "官方提供三条起步路径",
    "startMs": 2936,
    "endMs": 5445,
    "timestampMs": 4190,
    "confidence": 1.0
  },
  {
    "text": " 产出工程完全通用",
    "startMs": 5445,
    "endMs": 7453,
    "timestampMs": 6449,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一条路径",
    "startMs": 7453,
    "endMs": 8221,
    "timestampMs": 7837,
    "confidence": 1.0
  },
  {
    "text": " 也是最省心的方式",
    "startMs": 8221,
    "endMs": 9451,
    "timestampMs": 8836,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "下载免费的",
    "startMs": 9451,
    "endMs": 10250,
    "timestampMs": 9850,
    "confidence": 1.0
  },
  {
    "text": " HyperFrames Studio",
    "startMs": 10250,
    "endMs": 12967,
    "timestampMs": 11608,
    "confidence": 1.0
  },
  {
    "text": " 桌面端",
    "startMs": 12967,
    "endMs": 13447,
    "timestampMs": 13207,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "全面支持",
    "startMs": 13447,
    "endMs": 14062,
    "timestampMs": 13754,
    "confidence": 1.0
  },
  {
    "text": " Mac、Windows",
    "startMs": 14062,
    "endMs": 15599,
    "timestampMs": 14830,
    "confidence": 1.0
  },
  {
    "text": " 和 Linux",
    "startMs": 15599,
    "endMs": 16521,
    "timestampMs": 16060,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在 Make 输入一句话",
    "startMs": 16521,
    "endMs": 18365,
    "timestampMs": 17443,
    "confidence": 1.0
  },
  {
    "text": " 翠绿向导 Framey",
    "startMs": 18365,
    "endMs": 20209,
    "timestampMs": 19287,
    "confidence": 1.0
  },
  {
    "text": " 就会协助你",
    "startMs": 20209,
    "endMs": 21132,
    "timestampMs": 20670,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "先生成 Storyboard 分镜",
    "startMs": 21132,
    "endMs": 23602,
    "timestampMs": 22367,
    "confidence": 1.0
  },
  {
    "text": "审批通过后",
    "startMs": 23602,
    "endMs": 24425,
    "timestampMs": 24013,
    "confidence": 1.0
  },
  {
    "text": "自动构建成片",
    "startMs": 24425,
    "endMs": 25413,
    "timestampMs": 24919,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "之后可直接打字",
    "startMs": 25413,
    "endMs": 26942,
    "timestampMs": 26177,
    "confidence": 1.0
  },
  {
    "text": " 在画面指点",
    "startMs": 26942,
    "endMs": 28034,
    "timestampMs": 27488,
    "confidence": 1.0
  },
  {
    "text": "或画圈涂鸦批注",
    "startMs": 28034,
    "endMs": 29564,
    "timestampMs": 28799,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "让 Agent 一次性",
    "startMs": 29564,
    "endMs": 31432,
    "timestampMs": 30498,
    "confidence": 1.0
  },
  {
    "text": "完成多处精修",
    "startMs": 31432,
    "endMs": 32677,
    "timestampMs": 32054,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果连软件都不想装",
    "startMs": 32677,
    "endMs": 34527,
    "timestampMs": 33602,
    "confidence": 1.0
  },
  {
    "text": " 可选择第二条路径",
    "startMs": 34527,
    "endMs": 36172,
    "timestampMs": 35349,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在 Claude 或 ChatGPT",
    "startMs": 36172,
    "endMs": 38931,
    "timestampMs": 37551,
    "confidence": 1.0
  },
  {
    "text": " 挂载官方托管的",
    "startMs": 38931,
    "endMs": 40219,
    "timestampMs": 39575,
    "confidence": 1.0
  },
  {
    "text": " MCP 连接器",
    "startMs": 40219,
    "endMs": 41322,
    "timestampMs": 40770,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "直接通过对话",
    "startMs": 41322,
    "endMs": 42426,
    "timestampMs": 41874,
    "confidence": 1.0
  },
  {
    "text": "在云端生成",
    "startMs": 42426,
    "endMs": 43346,
    "timestampMs": 42886,
    "confidence": 1.0
  },
  {
    "text": "并下载 MP4",
    "startMs": 43346,
    "endMs": 44449,
    "timestampMs": 43897,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "代价是放弃了",
    "startMs": 44449,
    "endMs": 45727,
    "timestampMs": 45088,
    "confidence": 1.0
  },
  {
    "text": "本地工程文件夹",
    "startMs": 45727,
    "endMs": 47218,
    "timestampMs": 46472,
    "confidence": 1.0
  },
  {
    "text": "与浏览器精修",
    "startMs": 47218,
    "endMs": 48496,
    "timestampMs": 47857,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep01_s04_captions: Caption[] = [
  {
    "text": "如果你习惯在终端使用",
    "startMs": 100,
    "endMs": 1953,
    "timestampMs": 1026,
    "confidence": 1.0
  },
  {
    "text": " Claude Code",
    "startMs": 1953,
    "endMs": 3806,
    "timestampMs": 2879,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Codex、Cursor",
    "startMs": 3806,
    "endMs": 5436,
    "timestampMs": 4621,
    "confidence": 1.0
  },
  {
    "text": " 或 Antigravity",
    "startMs": 5436,
    "endMs": 7215,
    "timestampMs": 6325,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三条",
    "startMs": 7215,
    "endMs": 7586,
    "timestampMs": 7400,
    "confidence": 1.0
  },
  {
    "text": "本地 Coding Agent 路径",
    "startMs": 7586,
    "endMs": 9439,
    "timestampMs": 8512,
    "confidence": 1.0
  },
  {
    "text": "将是主力武器",
    "startMs": 9439,
    "endMs": 10180,
    "timestampMs": 9809,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一步",
    "startMs": 10130,
    "endMs": 10573,
    "timestampMs": 10351,
    "confidence": 1.0
  },
  {
    "text": " 安装官方技能包",
    "startMs": 10573,
    "endMs": 11607,
    "timestampMs": 11090,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Claude Code 可装插件",
    "startMs": 11607,
    "endMs": 13981,
    "timestampMs": 12794,
    "confidence": 1.0
  },
  {
    "text": " 其他 Agent",
    "startMs": 13981,
    "endMs": 15168,
    "timestampMs": 14574,
    "confidence": 1.0
  },
  {
    "text": " 在项目目录下",
    "startMs": 15168,
    "endMs": 16186,
    "timestampMs": 15677,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "运行 npx skills add",
    "startMs": 16186,
    "endMs": 19446,
    "timestampMs": 17816,
    "confidence": 1.0
  },
  {
    "text": " 选择 Core Skills",
    "startMs": 19446,
    "endMs": 22241,
    "timestampMs": 20843,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二步 开启新会话",
    "startMs": 22241,
    "endMs": 23975,
    "timestampMs": 23108,
    "confidence": 1.0
  },
  {
    "text": " 用 /hyperframes",
    "startMs": 23975,
    "endMs": 26576,
    "timestampMs": 25275,
    "confidence": 1.0
  },
  {
    "text": " 发起请求",
    "startMs": 26576,
    "endMs": 27443,
    "timestampMs": 27009,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "比如为一个网址",
    "startMs": 27443,
    "endMs": 28825,
    "timestampMs": 28134,
    "confidence": 1.0
  },
  {
    "text": "制作 10 秒产品片头",
    "startMs": 28825,
    "endMs": 30602,
    "timestampMs": 29713,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "加上 /hyperframes",
    "startMs": 30601,
    "endMs": 33663,
    "timestampMs": 32132,
    "confidence": 1.0
  },
  {
    "text": " 会加载框架渲染契约",
    "startMs": 33663,
    "endMs": 35782,
    "timestampMs": 34722,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及 450+ 内置组件块",
    "startMs": 35782,
    "endMs": 38115,
    "timestampMs": 36948,
    "confidence": 1.0
  },
  {
    "text": " 防止 AI 凭空猜测",
    "startMs": 38115,
    "endMs": 39811,
    "timestampMs": 38963,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三步 运行",
    "startMs": 39811,
    "endMs": 40588,
    "timestampMs": 40199,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes preview",
    "startMs": 40588,
    "endMs": 43851,
    "timestampMs": 42219,
    "confidence": 1.0
  },
  {
    "text": " 打开浏览器编辑器",
    "startMs": 43851,
    "endMs": 45094,
    "timestampMs": 44472,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "再通过 check 校验",
    "startMs": 45094,
    "endMs": 46907,
    "timestampMs": 46000,
    "confidence": 1.0
  },
  {
    "text": "与 render",
    "startMs": 46907,
    "endMs": 48176,
    "timestampMs": 47541,
    "confidence": 1.0
  },
  {
    "text": " 导出本地 MP4",
    "startMs": 48176,
    "endMs": 49445,
    "timestampMs": 48810,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep01_s05_captions: Caption[] = [
  {
    "text": "最后来理清",
    "startMs": 100,
    "endMs": 1407,
    "timestampMs": 753,
    "confidence": 1.0
  },
  {
    "text": "最关心的费用",
    "startMs": 1407,
    "endMs": 2976,
    "timestampMs": 2191,
    "confidence": 1.0
  },
  {
    "text": "与商用边界",
    "startMs": 2976,
    "endMs": 4283,
    "timestampMs": 3629,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "核心框架、CLI 与技能包",
    "startMs": 4233,
    "endMs": 6940,
    "timestampMs": 5586,
    "confidence": 1.0
  },
  {
    "text": "采用 Apache 2.0 协议",
    "startMs": 6940,
    "endMs": 10140,
    "timestampMs": 8540,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "完全开源",
    "startMs": 10140,
    "endMs": 10815,
    "timestampMs": 10477,
    "confidence": 1.0
  },
  {
    "text": " 可免费用于商业项目",
    "startMs": 10815,
    "endMs": 12334,
    "timestampMs": 11574,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "本地预览",
    "startMs": 12335,
    "endMs": 13198,
    "timestampMs": 12766,
    "confidence": 1.0
  },
  {
    "text": " 无限次导出 MP4",
    "startMs": 13198,
    "endMs": 14925,
    "timestampMs": 14061,
    "confidence": 1.0
  },
  {
    "text": " 使用内置音效",
    "startMs": 14925,
    "endMs": 16220,
    "timestampMs": 15572,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "本地一键抠像",
    "startMs": 16220,
    "endMs": 17431,
    "timestampMs": 16825,
    "confidence": 1.0
  },
  {
    "text": "与 Kokoro 语音合成",
    "startMs": 17431,
    "endMs": 19651,
    "timestampMs": 18541,
    "confidence": 1.0
  },
  {
    "text": " 统统免费",
    "startMs": 19651,
    "endMs": 20458,
    "timestampMs": 20054,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "甚至 AI Agent",
    "startMs": 20458,
    "endMs": 22196,
    "timestampMs": 21327,
    "confidence": 1.0
  },
  {
    "text": " 也能在 Studio 切换",
    "startMs": 22196,
    "endMs": 24321,
    "timestampMs": 23258,
    "confidence": 1.0
  },
  {
    "text": "免费 OpenCode 模型",
    "startMs": 24321,
    "endMs": 26639,
    "timestampMs": 25480,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只有需要调用",
    "startMs": 26639,
    "endMs": 27870,
    "timestampMs": 27254,
    "confidence": 1.0
  },
  {
    "text": " HeyGen 顶级语音",
    "startMs": 27870,
    "endMs": 29922,
    "timestampMs": 28896,
    "confidence": 1.0
  },
  {
    "text": "与数字人",
    "startMs": 29922,
    "endMs": 30743,
    "timestampMs": 30332,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "AI 视频生成",
    "startMs": 30743,
    "endMs": 32039,
    "timestampMs": 31391,
    "confidence": 1.0
  },
  {
    "text": "或云端渲染时",
    "startMs": 32039,
    "endMs": 33335,
    "timestampMs": 32687,
    "confidence": 1.0
  },
  {
    "text": " 才按需消耗额度",
    "startMs": 33335,
    "endMs": 34847,
    "timestampMs": 34091,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "接下来的 11 集中",
    "startMs": 34847,
    "endMs": 36570,
    "timestampMs": 35708,
    "confidence": 1.0
  },
  {
    "text": " 我们将深入",
    "startMs": 36570,
    "endMs": 37647,
    "timestampMs": 37108,
    "confidence": 1.0
  },
  {
    "text": "双编辑器实战",
    "startMs": 37647,
    "endMs": 38940,
    "timestampMs": 38293,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "十大创作工作流",
    "startMs": 38940,
    "endMs": 40825,
    "timestampMs": 39882,
    "confidence": 1.0
  },
  {
    "text": " 提示词导演法则",
    "startMs": 40825,
    "endMs": 42710,
    "timestampMs": 41767,
    "confidence": 1.0
  },
  {
    "text": "与云端架构",
    "startMs": 42710,
    "endMs": 44057,
    "timestampMs": 43383,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "下一集",
    "startMs": 44057,
    "endMs": 44949,
    "timestampMs": 44503,
    "confidence": 1.0
  },
  {
    "text": " 我们不见不散！",
    "startMs": 44949,
    "endMs": 46734,
    "timestampMs": 45841,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
