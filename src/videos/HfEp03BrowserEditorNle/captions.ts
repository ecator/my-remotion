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

export const EP03_TOTAL_FRAMES = 10001;

export const EP03_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp03BrowserEditorNle/ep03_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1917,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1851,
    "voiceDurationMs": 61680
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp03BrowserEditorNle/ep03_s02_voice.mp3",
    "fromFrame": 1917,
    "durationInFrames": 1987,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1933,
    "voiceDurationMs": 64416
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp03BrowserEditorNle/ep03_s03_voice.mp3",
    "fromFrame": 3904,
    "durationInFrames": 1972,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1918,
    "voiceDurationMs": 63912
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp03BrowserEditorNle/ep03_s04_voice.mp3",
    "fromFrame": 5876,
    "durationInFrames": 2009,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1955,
    "voiceDurationMs": 65136
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp03BrowserEditorNle/ep03_s05_voice.mp3",
    "fromFrame": 7885,
    "durationInFrames": 2116,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 2056,
    "voiceDurationMs": 68520
  }
};

export const ep03_s01_captions: Caption[] = [
  {
    "text": "欢迎回到",
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
    "text": " 全栈百科第三集",
    "startMs": 1937,
    "endMs": 3305,
    "timestampMs": 2621,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "上一集我们",
    "startMs": 3833,
    "endMs": 4823,
    "timestampMs": 4328,
    "confidence": 1.0
  },
  {
    "text": "体验了零代码的",
    "startMs": 4823,
    "endMs": 5672,
    "timestampMs": 5247,
    "confidence": 1.0
  },
  {
    "text": "桌面工作站",
    "startMs": 5672,
    "endMs": 6403,
    "timestampMs": 6037,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "但如果你习惯让",
    "startMs": 6710,
    "endMs": 7771,
    "timestampMs": 7240,
    "confidence": 1.0
  },
  {
    "text": " Claude Code",
    "startMs": 7771,
    "endMs": 8608,
    "timestampMs": 8189,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 8608,
    "endMs": 8927,
    "timestampMs": 8767,
    "confidence": 1.0
  },
  {
    "text": " Codex",
    "startMs": 8927,
    "endMs": 9564,
    "timestampMs": 9245,
    "confidence": 1.0
  },
  {
    "text": " 在终端里写代码",
    "startMs": 9564,
    "endMs": 10719,
    "timestampMs": 10141,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "同时又想亲",
    "startMs": 11085,
    "endMs": 12123,
    "timestampMs": 11604,
    "confidence": 1.0
  },
  {
    "text": "手微调每一",
    "startMs": 12123,
    "endMs": 12807,
    "timestampMs": 12465,
    "confidence": 1.0
  },
  {
    "text": "个像素和剪辑点",
    "startMs": 12807,
    "endMs": 13880,
    "timestampMs": 13343,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Browser Editor",
    "startMs": 14163,
    "endMs": 14965,
    "timestampMs": 14564,
    "confidence": 1.0
  },
  {
    "text": " 浏览器编辑",
    "startMs": 14965,
    "endMs": 15884,
    "timestampMs": 15424,
    "confidence": 1.0
  },
  {
    "text": "器就是你的终极武器",
    "startMs": 15884,
    "endMs": 17087,
    "timestampMs": 16485,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在任意工程",
    "startMs": 17630,
    "endMs": 18396,
    "timestampMs": 18013,
    "confidence": 1.0
  },
  {
    "text": "目录下运行",
    "startMs": 18396,
    "endMs": 19399,
    "timestampMs": 18897,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes preview",
    "startMs": 19399,
    "endMs": 21120,
    "timestampMs": 20259,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它会在本地默认",
    "startMs": 21557,
    "endMs": 22665,
    "timestampMs": 22111,
    "confidence": 1.0
  },
  {
    "text": " 3002",
    "startMs": 22665,
    "endMs": 23231,
    "timestampMs": 22948,
    "confidence": 1.0
  },
  {
    "text": " 端口启动可",
    "startMs": 23231,
    "endMs": 24646,
    "timestampMs": 23938,
    "confidence": 1.0
  },
  {
    "text": "视化剪辑台",
    "startMs": 24646,
    "endMs": 25153,
    "timestampMs": 24899,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "界面采用经典的",
    "startMs": 25696,
    "endMs": 26816,
    "timestampMs": 26256,
    "confidence": 1.0
  },
  {
    "text": "四栏布局",
    "startMs": 26816,
    "endMs": 27594,
    "timestampMs": 27205,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "左侧管理",
    "startMs": 27854,
    "endMs": 28608,
    "timestampMs": 28231,
    "confidence": 1.0
  },
  {
    "text": " Compositions、",
    "startMs": 28608,
    "endMs": 29623,
    "timestampMs": 29115,
    "confidence": 1.0
  },
  {
    "text": "Assets、",
    "startMs": 29623,
    "endMs": 30401,
    "timestampMs": 30012,
    "confidence": 1.0
  },
  {
    "text": "Code",
    "startMs": 30401,
    "endMs": 31026,
    "timestampMs": 30713,
    "confidence": 1.0
  },
  {
    "text": " 源码与左下角",
    "startMs": 31026,
    "endMs": 32241,
    "timestampMs": 31633,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Lint",
    "startMs": 32241,
    "endMs": 32512,
    "timestampMs": 32376,
    "confidence": 1.0
  },
  {
    "text": " 检查",
    "startMs": 32512,
    "endMs": 33007,
    "timestampMs": 32759,
    "confidence": 1.0
  },
  {
    "text": " 中间是实时画布预览",
    "startMs": 33007,
    "endMs": 34929,
    "timestampMs": 33968,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "右侧是",
    "startMs": 35212,
    "endMs": 35802,
    "timestampMs": 35507,
    "confidence": 1.0
  },
  {
    "text": " Design、",
    "startMs": 35802,
    "endMs": 36439,
    "timestampMs": 36120,
    "confidence": 1.0
  },
  {
    "text": "Layers、",
    "startMs": 36439,
    "endMs": 37182,
    "timestampMs": 36810,
    "confidence": 1.0
  },
  {
    "text": "Variables",
    "startMs": 37182,
    "endMs": 38090,
    "timestampMs": 37636,
    "confidence": 1.0
  },
  {
    "text": " 与",
    "startMs": 38090,
    "endMs": 38314,
    "timestampMs": 38202,
    "confidence": 1.0
  },
  {
    "text": " Renders",
    "startMs": 38314,
    "endMs": 38738,
    "timestampMs": 38526,
    "confidence": 1.0
  },
  {
    "text": " 面板",
    "startMs": 38738,
    "endMs": 39092,
    "timestampMs": 38915,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "底部则是虚",
    "startMs": 39239,
    "endMs": 40359,
    "timestampMs": 39799,
    "confidence": 1.0
  },
  {
    "text": "拟化渲染的",
    "startMs": 40359,
    "endMs": 40737,
    "timestampMs": 40548,
    "confidence": 1.0
  },
  {
    "text": "非线性时间轴",
    "startMs": 40737,
    "endMs": 41833,
    "timestampMs": 41285,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这里最核心的",
    "startMs": 42364,
    "endMs": 43178,
    "timestampMs": 42771,
    "confidence": 1.0
  },
  {
    "text": "哲学是双向写回",
    "startMs": 43178,
    "endMs": 44676,
    "timestampMs": 43927,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "你在画布上",
    "startMs": 44970,
    "endMs": 45855,
    "timestampMs": 45412,
    "confidence": 1.0
  },
  {
    "text": "拖拽的任何",
    "startMs": 45855,
    "endMs": 46562,
    "timestampMs": 46208,
    "confidence": 1.0
  },
  {
    "text": "改动都会直接保存进",
    "startMs": 46562,
    "endMs": 48178,
    "timestampMs": 47370,
    "confidence": 1.0
  },
  {
    "text": " HTML",
    "startMs": 48178,
    "endMs": 48874,
    "timestampMs": 48526,
    "confidence": 1.0
  },
  {
    "text": " 文件",
    "startMs": 48874,
    "endMs": 49263,
    "timestampMs": 49068,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "绝不产生孤立的",
    "startMs": 49475,
    "endMs": 50642,
    "timestampMs": 50058,
    "confidence": 1.0
  },
  {
    "text": "工程副本",
    "startMs": 50642,
    "endMs": 51303,
    "timestampMs": 50972,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "遇到跨场景大改时",
    "startMs": 51845,
    "endMs": 53249,
    "timestampMs": 52547,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按下",
    "startMs": 53508,
    "endMs": 53862,
    "timestampMs": 53685,
    "confidence": 1.0
  },
  {
    "text": " ⌘K",
    "startMs": 53862,
    "endMs": 54805,
    "timestampMs": 54333,
    "confidence": 1.0
  },
  {
    "text": " 即可自动打",
    "startMs": 54805,
    "endMs": 55831,
    "timestampMs": 55318,
    "confidence": 1.0
  },
  {
    "text": "包当前选中",
    "startMs": 55831,
    "endMs": 56515,
    "timestampMs": 56173,
    "confidence": 1.0
  },
  {
    "text": "元素的上下文",
    "startMs": 56515,
    "endMs": 57494,
    "timestampMs": 57004,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一键复制成",
    "startMs": 57871,
    "endMs": 58791,
    "timestampMs": 58331,
    "confidence": 1.0
  },
  {
    "text": "精准指令交给",
    "startMs": 58791,
    "endMs": 59793,
    "timestampMs": 59292,
    "confidence": 1.0
  },
  {
    "text": "终端里的",
    "startMs": 59793,
    "endMs": 60300,
    "timestampMs": 60046,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 60300,
    "endMs": 60843,
    "timestampMs": 60571,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep03_s02_captions: Caption[] = [
  {
    "text": "进入画布精修",
    "startMs": 97,
    "endMs": 1135,
    "timestampMs": 616,
    "confidence": 1.0
  },
  {
    "text": " 首先要牢记",
    "startMs": 1135,
    "endMs": 2031,
    "timestampMs": 1583,
    "confidence": 1.0
  },
  {
    "text": "一条核心铁律",
    "startMs": 2031,
    "endMs": 2975,
    "timestampMs": 2503,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "时间轴上的",
    "startMs": 3305,
    "endMs": 3989,
    "timestampMs": 3647,
    "confidence": 1.0
  },
  {
    "text": "轨道只决定出现时间",
    "startMs": 3989,
    "endMs": 5616,
    "timestampMs": 4802,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "画面谁盖住",
    "startMs": 5828,
    "endMs": 6666,
    "timestampMs": 6247,
    "confidence": 1.0
  },
  {
    "text": "谁是由右侧",
    "startMs": 6666,
    "endMs": 7927,
    "timestampMs": 7296,
    "confidence": 1.0
  },
  {
    "text": " Layers",
    "startMs": 7927,
    "endMs": 8493,
    "timestampMs": 8210,
    "confidence": 1.0
  },
  {
    "text": " 面板和",
    "startMs": 8493,
    "endMs": 9059,
    "timestampMs": 8776,
    "confidence": 1.0
  },
  {
    "text": " CSS",
    "startMs": 9059,
    "endMs": 9743,
    "timestampMs": 9401,
    "confidence": 1.0
  },
  {
    "text": " z-index",
    "startMs": 9743,
    "endMs": 10262,
    "timestampMs": 10002,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "决定的",
    "startMs": 10274,
    "endMs": 10734,
    "timestampMs": 10504,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在画布上",
    "startMs": 11262,
    "endMs": 11934,
    "timestampMs": 11598,
    "confidence": 1.0
  },
  {
    "text": " 你可以直接",
    "startMs": 11934,
    "endMs": 12913,
    "timestampMs": 12423,
    "confidence": 1.0
  },
  {
    "text": "拖动元素缩放、",
    "startMs": 12913,
    "endMs": 13892,
    "timestampMs": 13402,
    "confidence": 1.0
  },
  {
    "text": "旋转、裁剪",
    "startMs": 13892,
    "endMs": 15401,
    "timestampMs": 14646,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按",
    "startMs": 15613,
    "endMs": 15837,
    "timestampMs": 15725,
    "confidence": 1.0
  },
  {
    "text": " G",
    "startMs": 15837,
    "endMs": 16085,
    "timestampMs": 15961,
    "confidence": 1.0
  },
  {
    "text": " 键开启网格对齐",
    "startMs": 16085,
    "endMs": 17441,
    "timestampMs": 16763,
    "confidence": 1.0
  },
  {
    "text": " 或者用",
    "startMs": 17441,
    "endMs": 18172,
    "timestampMs": 17806,
    "confidence": 1.0
  },
  {
    "text": " ⌘G",
    "startMs": 18172,
    "endMs": 18950,
    "timestampMs": 18561,
    "confidence": 1.0
  },
  {
    "text": " 将多个元素编组",
    "startMs": 18950,
    "endMs": 20248,
    "timestampMs": 19599,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "准备调动画时",
    "startMs": 20790,
    "endMs": 21958,
    "timestampMs": 21374,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "请务必盯紧",
    "startMs": 22158,
    "endMs": 23019,
    "timestampMs": 22588,
    "confidence": 1.0
  },
  {
    "text": "时间轴工具栏里的",
    "startMs": 23019,
    "endMs": 24245,
    "timestampMs": 23632,
    "confidence": 1.0
  },
  {
    "text": " Auto-record",
    "startMs": 24245,
    "endMs": 25083,
    "timestampMs": 24664,
    "confidence": 1.0
  },
  {
    "text": " manual",
    "startMs": 25083,
    "endMs": 25472,
    "timestampMs": 25277,
    "confidence": 1.0
  },
  {
    "text": " edits",
    "startMs": 25472,
    "endMs": 25837,
    "timestampMs": 25654,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "as",
    "startMs": 25849,
    "endMs": 26049,
    "timestampMs": 25949,
    "confidence": 1.0
  },
  {
    "text": " keyframes",
    "startMs": 26049,
    "endMs": 26627,
    "timestampMs": 26338,
    "confidence": 1.0
  },
  {
    "text": " 开关",
    "startMs": 26627,
    "endMs": 27064,
    "timestampMs": 26845,
    "confidence": 1.0
  },
  {
    "text": " 它默认处于开启状态",
    "startMs": 27064,
    "endMs": 28785,
    "timestampMs": 27924,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "意味着你在",
    "startMs": 28974,
    "endMs": 29646,
    "timestampMs": 29310,
    "confidence": 1.0
  },
  {
    "text": "播放头处随",
    "startMs": 29646,
    "endMs": 30884,
    "timestampMs": 30265,
    "confidence": 1.0
  },
  {
    "text": "手挪动位置",
    "startMs": 30884,
    "endMs": 31568,
    "timestampMs": 31226,
    "confidence": 1.0
  },
  {
    "text": "都会自动变",
    "startMs": 31568,
    "endMs": 32594,
    "timestampMs": 32081,
    "confidence": 1.0
  },
  {
    "text": "成关键帧动画",
    "startMs": 32594,
    "endMs": 33443,
    "timestampMs": 33018,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果你只想",
    "startMs": 33555,
    "endMs": 34675,
    "timestampMs": 34115,
    "confidence": 1.0
  },
  {
    "text": "全局静态修位置",
    "startMs": 34675,
    "endMs": 35890,
    "timestampMs": 35282,
    "confidence": 1.0
  },
  {
    "text": " 一定要先把它关掉",
    "startMs": 35890,
    "endMs": 37187,
    "timestampMs": 36538,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "需要手打动画时",
    "startMs": 37718,
    "endMs": 39027,
    "timestampMs": 38372,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "选中元素按",
    "startMs": 39310,
    "endMs": 40230,
    "timestampMs": 39770,
    "confidence": 1.0
  },
  {
    "text": " K",
    "startMs": 40230,
    "endMs": 40466,
    "timestampMs": 40348,
    "confidence": 1.0
  },
  {
    "text": " 键即可在当前帧增删",
    "startMs": 40466,
    "endMs": 42223,
    "timestampMs": 41344,
    "confidence": 1.0
  },
  {
    "text": "关键帧",
    "startMs": 42223,
    "endMs": 42753,
    "timestampMs": 42488,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按住",
    "startMs": 43084,
    "endMs": 43473,
    "timestampMs": 43278,
    "confidence": 1.0
  },
  {
    "text": " Option/Alt",
    "startMs": 43473,
    "endMs": 44322,
    "timestampMs": 43897,
    "confidence": 1.0
  },
  {
    "text": " 拖拽元素则",
    "startMs": 44322,
    "endMs": 45277,
    "timestampMs": 44799,
    "confidence": 1.0
  },
  {
    "text": "能整体平移",
    "startMs": 45277,
    "endMs": 46020,
    "timestampMs": 45648,
    "confidence": 1.0
  },
  {
    "text": "整条运动路径",
    "startMs": 46020,
    "endMs": 46987,
    "timestampMs": 46503,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "更酷的是按",
    "startMs": 47529,
    "endMs": 48614,
    "timestampMs": 48071,
    "confidence": 1.0
  },
  {
    "text": " R",
    "startMs": 48614,
    "endMs": 48933,
    "timestampMs": 48773,
    "confidence": 1.0
  },
  {
    "text": " 键开启",
    "startMs": 48933,
    "endMs": 49558,
    "timestampMs": 49245,
    "confidence": 1.0
  },
  {
    "text": " Gesture",
    "startMs": 49558,
    "endMs": 50183,
    "timestampMs": 49870,
    "confidence": 1.0
  },
  {
    "text": " Recording",
    "startMs": 50183,
    "endMs": 50654,
    "timestampMs": 50418,
    "confidence": 1.0
  },
  {
    "text": " 手势录制",
    "startMs": 50654,
    "endMs": 51362,
    "timestampMs": 51008,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "边播放边拖",
    "startMs": 51704,
    "endMs": 52671,
    "timestampMs": 52187,
    "confidence": 1.0
  },
  {
    "text": "动记录位移、",
    "startMs": 52671,
    "endMs": 53367,
    "timestampMs": 53019,
    "confidence": 1.0
  },
  {
    "text": "滚轮记录景深、按住",
    "startMs": 53367,
    "endMs": 55135,
    "timestampMs": 54251,
    "confidence": 1.0
  },
  {
    "text": " Shift",
    "startMs": 55135,
    "endMs": 55560,
    "timestampMs": 55347,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "拖动还能实时录下",
    "startMs": 55572,
    "endMs": 56975,
    "timestampMs": 56273,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 56975,
    "endMs": 57211,
    "timestampMs": 57093,
    "confidence": 1.0
  },
  {
    "text": " D",
    "startMs": 57211,
    "endMs": 57293,
    "timestampMs": 57252,
    "confidence": 1.0
  },
  {
    "text": " 旋转",
    "startMs": 57293,
    "endMs": 57647,
    "timestampMs": 57470,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而代码生成的",
    "startMs": 57759,
    "endMs": 58502,
    "timestampMs": 58130,
    "confidence": 1.0
  },
  {
    "text": "循环动效也能通过",
    "startMs": 58502,
    "endMs": 59988,
    "timestampMs": 59245,
    "confidence": 1.0
  },
  {
    "text": " Unroll to edit",
    "startMs": 59988,
    "endMs": 61167,
    "timestampMs": 60577,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "展开成普通",
    "startMs": 61261,
    "endMs": 62158,
    "timestampMs": 61709,
    "confidence": 1.0
  },
  {
    "text": "关键帧继续微调",
    "startMs": 62158,
    "endMs": 63596,
    "timestampMs": 62877,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep03_s03_captions: Caption[] = [
  {
    "text": "接下来看底",
    "startMs": 97,
    "endMs": 1064,
    "timestampMs": 580,
    "confidence": 1.0
  },
  {
    "text": "部虚拟化时间轴",
    "startMs": 1064,
    "endMs": 2137,
    "timestampMs": 1600,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它的快捷键",
    "startMs": 2515,
    "endMs": 3269,
    "timestampMs": 2892,
    "confidence": 1.0
  },
  {
    "text": "体系完全向",
    "startMs": 3269,
    "endMs": 4496,
    "timestampMs": 3882,
    "confidence": 1.0
  },
  {
    "text": "专业非编软件看齐",
    "startMs": 4496,
    "endMs": 5993,
    "timestampMs": 5244,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "播放控制方面",
    "startMs": 6533,
    "endMs": 7547,
    "timestampMs": 7040,
    "confidence": 1.0
  },
  {
    "text": " 空格启停",
    "startMs": 7547,
    "endMs": 8656,
    "timestampMs": 8101,
    "confidence": 1.0
  },
  {
    "text": " J/K/L",
    "startMs": 8656,
    "endMs": 9658,
    "timestampMs": 9157,
    "confidence": 1.0
  },
  {
    "text": " 负责倒放、",
    "startMs": 9658,
    "endMs": 10460,
    "timestampMs": 10059,
    "confidence": 1.0
  },
  {
    "text": "暂停与正放",
    "startMs": 10460,
    "endMs": 11592,
    "timestampMs": 11026,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按",
    "startMs": 11946,
    "endMs": 12217,
    "timestampMs": 12081,
    "confidence": 1.0
  },
  {
    "text": " I",
    "startMs": 12217,
    "endMs": 12406,
    "timestampMs": 12311,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 12406,
    "endMs": 12583,
    "timestampMs": 12494,
    "confidence": 1.0
  },
  {
    "text": " O",
    "startMs": 12583,
    "endMs": 12783,
    "timestampMs": 12683,
    "confidence": 1.0
  },
  {
    "text": " 设定工作区出入点",
    "startMs": 12783,
    "endMs": 13974,
    "timestampMs": 13378,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按问号键随",
    "startMs": 14257,
    "endMs": 15495,
    "timestampMs": 14876,
    "confidence": 1.0
  },
  {
    "text": "时呼出完整快捷键表",
    "startMs": 15495,
    "endMs": 16922,
    "timestampMs": 16208,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "剪辑工具上",
    "startMs": 17465,
    "endMs": 18255,
    "timestampMs": 17860,
    "confidence": 1.0
  },
  {
    "text": " 很多新手容易混淆",
    "startMs": 18255,
    "endMs": 19870,
    "timestampMs": 19062,
    "confidence": 1.0
  },
  {
    "text": " B",
    "startMs": 19870,
    "endMs": 20035,
    "timestampMs": 19952,
    "confidence": 1.0
  },
  {
    "text": " 键和",
    "startMs": 20035,
    "endMs": 20307,
    "timestampMs": 20171,
    "confidence": 1.0
  },
  {
    "text": " S",
    "startMs": 20307,
    "endMs": 20566,
    "timestampMs": 20436,
    "confidence": 1.0
  },
  {
    "text": " 键",
    "startMs": 20566,
    "endMs": 20802,
    "timestampMs": 20684,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "按",
    "startMs": 21073,
    "endMs": 21285,
    "timestampMs": 21179,
    "confidence": 1.0
  },
  {
    "text": " V",
    "startMs": 21285,
    "endMs": 21521,
    "timestampMs": 21403,
    "confidence": 1.0
  },
  {
    "text": " 键切回选择工具",
    "startMs": 21521,
    "endMs": 22677,
    "timestampMs": 22099,
    "confidence": 1.0
  },
  {
    "text": " 按",
    "startMs": 22677,
    "endMs": 23160,
    "timestampMs": 22918,
    "confidence": 1.0
  },
  {
    "text": " B",
    "startMs": 23160,
    "endMs": 23349,
    "timestampMs": 23254,
    "confidence": 1.0
  },
  {
    "text": " 键是开启",
    "startMs": 23349,
    "endMs": 24316,
    "timestampMs": 23832,
    "confidence": 1.0
  },
  {
    "text": " Razor",
    "startMs": 24316,
    "endMs": 24870,
    "timestampMs": 24593,
    "confidence": 1.0
  },
  {
    "text": " 剃刀工具",
    "startMs": 24870,
    "endMs": 25519,
    "timestampMs": 25194,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "需要用鼠标",
    "startMs": 25719,
    "endMs": 26521,
    "timestampMs": 26120,
    "confidence": 1.0
  },
  {
    "text": "去点击切片",
    "startMs": 26521,
    "endMs": 27347,
    "timestampMs": 26934,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "配合",
    "startMs": 27594,
    "endMs": 27936,
    "timestampMs": 27765,
    "confidence": 1.0
  },
  {
    "text": " Shift",
    "startMs": 27936,
    "endMs": 28337,
    "timestampMs": 28136,
    "confidence": 1.0
  },
  {
    "text": " 点击可一次",
    "startMs": 28337,
    "endMs": 29198,
    "timestampMs": 28767,
    "confidence": 1.0
  },
  {
    "text": "切穿所有轨道",
    "startMs": 29198,
    "endMs": 30189,
    "timestampMs": 29693,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而按",
    "startMs": 30300,
    "endMs": 30548,
    "timestampMs": 30424,
    "confidence": 1.0
  },
  {
    "text": " S",
    "startMs": 30548,
    "endMs": 30831,
    "timestampMs": 30689,
    "confidence": 1.0
  },
  {
    "text": " 键则是直接执行",
    "startMs": 30831,
    "endMs": 32140,
    "timestampMs": 31485,
    "confidence": 1.0
  },
  {
    "text": " Split",
    "startMs": 32140,
    "endMs": 32694,
    "timestampMs": 32417,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "立刻在播放头位置把",
    "startMs": 32907,
    "endMs": 34463,
    "timestampMs": 33685,
    "confidence": 1.0
  },
  {
    "text": "当前选中的",
    "startMs": 34463,
    "endMs": 35112,
    "timestampMs": 34787,
    "confidence": 1.0
  },
  {
    "text": "切片一分为二",
    "startMs": 35112,
    "endMs": 36350,
    "timestampMs": 35731,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "工具栏还集成了",
    "startMs": 36892,
    "endMs": 38095,
    "timestampMs": 37493,
    "confidence": 1.0
  },
  {
    "text": " N",
    "startMs": 38095,
    "endMs": 38414,
    "timestampMs": 38254,
    "confidence": 1.0
  },
  {
    "text": " 键吸附对齐、",
    "startMs": 38414,
    "endMs": 39275,
    "timestampMs": 38844,
    "confidence": 1.0
  },
  {
    "text": "中括号键[和",
    "startMs": 39275,
    "endMs": 40819,
    "timestampMs": 40047,
    "confidence": 1.0
  },
  {
    "text": "]一键选中",
    "startMs": 40819,
    "endMs": 41857,
    "timestampMs": 41338,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "播放头左侧",
    "startMs": 41881,
    "endMs": 42824,
    "timestampMs": 42352,
    "confidence": 1.0
  },
  {
    "text": "或右侧全部片段、",
    "startMs": 42824,
    "endMs": 44109,
    "timestampMs": 43466,
    "confidence": 1.0
  },
  {
    "text": "Linked Selection",
    "startMs": 44109,
    "endMs": 45277,
    "timestampMs": 44693,
    "confidence": 1.0
  },
  {
    "text": " 音画联动",
    "startMs": 45277,
    "endMs": 45949,
    "timestampMs": 45613,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及默认开启的",
    "startMs": 46208,
    "endMs": 47388,
    "timestampMs": 46798,
    "confidence": 1.0
  },
  {
    "text": " Ripple",
    "startMs": 47388,
    "endMs": 47883,
    "timestampMs": 47635,
    "confidence": 1.0
  },
  {
    "text": " edit",
    "startMs": 47883,
    "endMs": 48237,
    "timestampMs": 48060,
    "confidence": 1.0
  },
  {
    "text": " 波纹删除自",
    "startMs": 48237,
    "endMs": 49239,
    "timestampMs": 48738,
    "confidence": 1.0
  },
  {
    "text": "动填补空隙",
    "startMs": 49239,
    "endMs": 49900,
    "timestampMs": 49569,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "拖拽切片左",
    "startMs": 50442,
    "endMs": 51315,
    "timestampMs": 50878,
    "confidence": 1.0
  },
  {
    "text": "边缘裁剪入点时",
    "startMs": 51315,
    "endMs": 52565,
    "timestampMs": 51940,
    "confidence": 1.0
  },
  {
    "text": " 编辑器还会",
    "startMs": 52565,
    "endMs": 53650,
    "timestampMs": 53107,
    "confidence": 1.0
  },
  {
    "text": "精准写回源码补偿",
    "startMs": 53650,
    "endMs": 54994,
    "timestampMs": 54322,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "普通音视频媒体写入",
    "startMs": 55265,
    "endMs": 56798,
    "timestampMs": 56031,
    "confidence": 1.0
  },
  {
    "text": " data-media-start",
    "startMs": 56798,
    "endMs": 57777,
    "timestampMs": 57287,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而嵌套子组合则写入",
    "startMs": 58060,
    "endMs": 59628,
    "timestampMs": 58844,
    "confidence": 1.0
  },
  {
    "text": " data-playback-start",
    "startMs": 59628,
    "endMs": 60737,
    "timestampMs": 60182,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "确保音画起",
    "startMs": 60949,
    "endMs": 62211,
    "timestampMs": 61580,
    "confidence": 1.0
  },
  {
    "text": "止点分毫不差",
    "startMs": 62211,
    "endMs": 63072,
    "timestampMs": 62641,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep03_s04_captions: Caption[] = [
  {
    "text": "浏览器编辑",
    "startMs": 97,
    "endMs": 1135,
    "timestampMs": 616,
    "confidence": 1.0
  },
  {
    "text": "器同样内置了完整的",
    "startMs": 1135,
    "endMs": 2302,
    "timestampMs": 1718,
    "confidence": 1.0
  },
  {
    "text": "音频混音台与",
    "startMs": 2302,
    "endMs": 3482,
    "timestampMs": 2892,
    "confidence": 1.0
  },
  {
    "text": "交付工作流",
    "startMs": 3482,
    "endMs": 4319,
    "timestampMs": 3900,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "选中音频片段",
    "startMs": 4847,
    "endMs": 6085,
    "timestampMs": 5466,
    "confidence": 1.0
  },
  {
    "text": " 在右侧面板务必认准",
    "startMs": 6085,
    "endMs": 7948,
    "timestampMs": 7016,
    "confidence": 1.0
  },
  {
    "text": " Audio FX",
    "startMs": 7948,
    "endMs": 8986,
    "timestampMs": 8467,
    "confidence": 1.0
  },
  {
    "text": " 音频机架",
    "startMs": 8986,
    "endMs": 9634,
    "timestampMs": 9310,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "不要误点旁边的视觉",
    "startMs": 9988,
    "endMs": 11226,
    "timestampMs": 10607,
    "confidence": 1.0
  },
  {
    "text": " Effects",
    "startMs": 11226,
    "endMs": 11875,
    "timestampMs": 11550,
    "confidence": 1.0
  },
  {
    "text": " 面板",
    "startMs": 11875,
    "endMs": 12264,
    "timestampMs": 12069,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "你可以一键套用",
    "startMs": 12807,
    "endMs": 13797,
    "timestampMs": 13302,
    "confidence": 1.0
  },
  {
    "text": " voice-clean、",
    "startMs": 13797,
    "endMs": 14552,
    "timestampMs": 14174,
    "confidence": 1.0
  },
  {
    "text": "voice-broadcast",
    "startMs": 14552,
    "endMs": 15708,
    "timestampMs": 15130,
    "confidence": 1.0
  },
  {
    "text": " 等预设",
    "startMs": 15708,
    "endMs": 16215,
    "timestampMs": 15961,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "或用",
    "startMs": 16462,
    "endMs": 16840,
    "timestampMs": 16651,
    "confidence": 1.0
  },
  {
    "text": " Even Out Levels",
    "startMs": 16840,
    "endMs": 17901,
    "timestampMs": 17370,
    "confidence": 1.0
  },
  {
    "text": " 自动拉平人声起伏",
    "startMs": 17901,
    "endMs": 19410,
    "timestampMs": 18655,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "背景音乐压人声时",
    "startMs": 19776,
    "endMs": 21026,
    "timestampMs": 20401,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "千万记得把",
    "startMs": 21215,
    "endMs": 22229,
    "timestampMs": 21722,
    "confidence": 1.0
  },
  {
    "text": " Voiceover Carve",
    "startMs": 22229,
    "endMs": 23172,
    "timestampMs": 22700,
    "confidence": 1.0
  },
  {
    "text": " 挂在音乐轨",
    "startMs": 23172,
    "endMs": 24116,
    "timestampMs": 23644,
    "confidence": 1.0
  },
  {
    "text": "上而非人声轨",
    "startMs": 24116,
    "endMs": 24976,
    "timestampMs": 24546,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它会自动写入标准的",
    "startMs": 25088,
    "endMs": 26456,
    "timestampMs": 25772,
    "confidence": 1.0
  },
  {
    "text": " peaking",
    "startMs": 26456,
    "endMs": 26763,
    "timestampMs": 26609,
    "confidence": 1.0
  },
  {
    "text": " 滤波与增益包络线",
    "startMs": 26763,
    "endMs": 28107,
    "timestampMs": 27435,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "让背景乐在",
    "startMs": 28378,
    "endMs": 29133,
    "timestampMs": 28755,
    "confidence": 1.0
  },
  {
    "text": "人声间隙自然回弹",
    "startMs": 29133,
    "endMs": 30642,
    "timestampMs": 29887,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而且音量包",
    "startMs": 30984,
    "endMs": 32105,
    "timestampMs": 31544,
    "confidence": 1.0
  },
  {
    "text": "络上限可达",
    "startMs": 32105,
    "endMs": 32966,
    "timestampMs": 32535,
    "confidence": 1.0
  },
  {
    "text": " +12",
    "startMs": 32966,
    "endMs": 33449,
    "timestampMs": 33207,
    "confidence": 1.0
  },
  {
    "text": " dB",
    "startMs": 33449,
    "endMs": 33767,
    "timestampMs": 33608,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "对于字幕与模板",
    "startMs": 34310,
    "endMs": 35466,
    "timestampMs": 34888,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在画布微调",
    "startMs": 35631,
    "endMs": 36456,
    "timestampMs": 36043,
    "confidence": 1.0
  },
  {
    "text": "单字位置和",
    "startMs": 36456,
    "endMs": 37187,
    "timestampMs": 36821,
    "confidence": 1.0
  },
  {
    "text": "颜色会自动保存进",
    "startMs": 37187,
    "endMs": 38732,
    "timestampMs": 37959,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "caption-overrides",
    "startMs": 38826,
    "endMs": 39947,
    "timestampMs": 39386,
    "confidence": 1.0
  },
  {
    "text": " .",
    "startMs": 39947,
    "endMs": 40067,
    "timestampMs": 40007,
    "confidence": 1.0
  },
  {
    "text": " json",
    "startMs": 40067,
    "endMs": 40548,
    "timestampMs": 40307,
    "confidence": 1.0
  },
  {
    "text": " 绝不污染字幕原稿",
    "startMs": 40548,
    "endMs": 42046,
    "timestampMs": 41297,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在",
    "startMs": 42317,
    "endMs": 42576,
    "timestampMs": 42446,
    "confidence": 1.0
  },
  {
    "text": " Variables",
    "startMs": 42576,
    "endMs": 43084,
    "timestampMs": 42830,
    "confidence": 1.0
  },
  {
    "text": " 面板预览完参数后",
    "startMs": 43084,
    "endMs": 44345,
    "timestampMs": 43714,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "点击",
    "startMs": 44616,
    "endMs": 45041,
    "timestampMs": 44828,
    "confidence": 1.0
  },
  {
    "text": " Use",
    "startMs": 45041,
    "endMs": 45348,
    "timestampMs": 45194,
    "confidence": 1.0
  },
  {
    "text": " this",
    "startMs": 45348,
    "endMs": 45536,
    "timestampMs": 45442,
    "confidence": 1.0
  },
  {
    "text": " template",
    "startMs": 45536,
    "endMs": 46102,
    "timestampMs": 45819,
    "confidence": 1.0
  },
  {
    "text": " 会把参数写入",
    "startMs": 46102,
    "endMs": 47081,
    "timestampMs": 46591,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "hyperframes/render-variables.json",
    "startMs": 47193,
    "endMs": 50389,
    "timestampMs": 48791,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并复制安全渲染命令",
    "startMs": 50495,
    "endMs": 51957,
    "timestampMs": 51226,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "最后点击左下角",
    "startMs": 52500,
    "endMs": 53620,
    "timestampMs": 53060,
    "confidence": 1.0
  },
  {
    "text": " Lint",
    "startMs": 53620,
    "endMs": 54009,
    "timestampMs": 53814,
    "confidence": 1.0
  },
  {
    "text": " 与命令行",
    "startMs": 54009,
    "endMs": 54799,
    "timestampMs": 54404,
    "confidence": 1.0
  },
  {
    "text": " npx hyperframes check",
    "startMs": 54799,
    "endMs": 56379,
    "timestampMs": 55589,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "双重把关",
    "startMs": 56403,
    "endMs": 57193,
    "timestampMs": 56798,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "在",
    "startMs": 57382,
    "endMs": 57617,
    "timestampMs": 57499,
    "confidence": 1.0
  },
  {
    "text": " Renders",
    "startMs": 57617,
    "endMs": 58030,
    "timestampMs": 57823,
    "confidence": 1.0
  },
  {
    "text": " 面板即可导",
    "startMs": 58030,
    "endMs": 58938,
    "timestampMs": 58484,
    "confidence": 1.0
  },
  {
    "text": "出分享用的",
    "startMs": 58938,
    "endMs": 59716,
    "timestampMs": 59327,
    "confidence": 1.0
  },
  {
    "text": " MP4",
    "startMs": 59716,
    "endMs": 60471,
    "timestampMs": 60093,
    "confidence": 1.0
  },
  {
    "text": "、透明通道",
    "startMs": 60471,
    "endMs": 61462,
    "timestampMs": 60966,
    "confidence": 1.0
  },
  {
    "text": " WebM",
    "startMs": 61462,
    "endMs": 62181,
    "timestampMs": 61821,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "或后期母版",
    "startMs": 62275,
    "endMs": 63124,
    "timestampMs": 62699,
    "confidence": 1.0
  },
  {
    "text": " MOV",
    "startMs": 63124,
    "endMs": 63655,
    "timestampMs": 63389,
    "confidence": 1.0
  },
  {
    "text": " ProRes",
    "startMs": 63655,
    "endMs": 64316,
    "timestampMs": 63985,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep03_s05_captions: Caption[] = [
  {
    "text": "最后压轴介绍",
    "startMs": 97,
    "endMs": 1229,
    "timestampMs": 663,
    "confidence": 1.0
  },
  {
    "text": " Browser Editor",
    "startMs": 1229,
    "endMs": 2291,
    "timestampMs": 1760,
    "confidence": 1.0
  },
  {
    "text": " 最前沿的能力",
    "startMs": 2291,
    "endMs": 3352,
    "timestampMs": 2821,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "WebMCP",
    "startMs": 3576,
    "endMs": 4390,
    "timestampMs": 3983,
    "confidence": 1.0
  },
  {
    "text": " 浏览器内智能体协作",
    "startMs": 4390,
    "endMs": 5805,
    "timestampMs": 5097,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它和第一集讲的云端",
    "startMs": 6344,
    "endMs": 7677,
    "timestampMs": 7010,
    "confidence": 1.0
  },
  {
    "text": " Hosted",
    "startMs": 7677,
    "endMs": 8243,
    "timestampMs": 7960,
    "confidence": 1.0
  },
  {
    "text": " MCP",
    "startMs": 8243,
    "endMs": 8726,
    "timestampMs": 8484,
    "confidence": 1.0
  },
  {
    "text": " 不同",
    "startMs": 8726,
    "endMs": 9245,
    "timestampMs": 8985,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "是让运行在",
    "startMs": 9493,
    "endMs": 10224,
    "timestampMs": 9858,
    "confidence": 1.0
  },
  {
    "text": "浏览器里的",
    "startMs": 10224,
    "endMs": 11002,
    "timestampMs": 10613,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 11002,
    "endMs": 11568,
    "timestampMs": 11285,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 11568,
    "endMs": 12099,
    "timestampMs": 11833,
    "confidence": 1.0
  },
  {
    "text": " 直接看懂并",
    "startMs": 12099,
    "endMs": 13160,
    "timestampMs": 12629,
    "confidence": 1.0
  },
  {
    "text": "操作你眼前",
    "startMs": 13160,
    "endMs": 13892,
    "timestampMs": 13526,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "打开的编辑器",
    "startMs": 13903,
    "endMs": 14764,
    "timestampMs": 14333,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "编辑器加载后",
    "startMs": 15307,
    "endMs": 16250,
    "timestampMs": 15778,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "会通过标准",
    "startMs": 16450,
    "endMs": 17347,
    "timestampMs": 16898,
    "confidence": 1.0
  },
  {
    "text": " API",
    "startMs": 17347,
    "endMs": 17866,
    "timestampMs": 17606,
    "confidence": 1.0
  },
  {
    "text": " document.modelContext",
    "startMs": 17866,
    "endMs": 19670,
    "timestampMs": 18768,
    "confidence": 1.0
  },
  {
    "text": " 异步注册整整",
    "startMs": 19670,
    "endMs": 20767,
    "timestampMs": 20218,
    "confidence": 1.0
  },
  {
    "text": " 12",
    "startMs": 20767,
    "endMs": 21097,
    "timestampMs": 20932,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "个工具",
    "startMs": 21097,
    "endMs": 21450,
    "timestampMs": 21273,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "开发者务必",
    "startMs": 21863,
    "endMs": 22795,
    "timestampMs": 22329,
    "confidence": 1.0
  },
  {
    "text": "避开一个高",
    "startMs": 22795,
    "endMs": 23549,
    "timestampMs": 23172,
    "confidence": 1.0
  },
  {
    "text": "频文档陷阱",
    "startMs": 23549,
    "endMs": 24210,
    "timestampMs": 23879,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "真实规范是",
    "startMs": 24375,
    "endMs": 25330,
    "timestampMs": 24852,
    "confidence": 1.0
  },
  {
    "text": " document.modelContext",
    "startMs": 25330,
    "endMs": 27158,
    "timestampMs": 26244,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "切勿误用某",
    "startMs": 27270,
    "endMs": 28225,
    "timestampMs": 27747,
    "confidence": 1.0
  },
  {
    "text": "些兼容垫片才提供的",
    "startMs": 28225,
    "endMs": 29675,
    "timestampMs": 28950,
    "confidence": 1.0
  },
  {
    "text": " navigator.modelContext",
    "startMs": 29675,
    "endMs": 32081,
    "timestampMs": 30878,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这",
    "startMs": 32624,
    "endMs": 32800,
    "timestampMs": 32712,
    "confidence": 1.0
  },
  {
    "text": " 12",
    "startMs": 32800,
    "endMs": 33142,
    "timestampMs": 32971,
    "confidence": 1.0
  },
  {
    "text": " 个工具包含",
    "startMs": 33142,
    "endMs": 34015,
    "timestampMs": 33578,
    "confidence": 1.0
  },
  {
    "text": " 3",
    "startMs": 34015,
    "endMs": 34286,
    "timestampMs": 34150,
    "confidence": 1.0
  },
  {
    "text": " 个读取工具",
    "startMs": 34286,
    "endMs": 34888,
    "timestampMs": 34587,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "studio_look",
    "startMs": 35194,
    "endMs": 36822,
    "timestampMs": 36008,
    "confidence": 1.0
  },
  {
    "text": " 获取带源码",
    "startMs": 36822,
    "endMs": 37789,
    "timestampMs": 37305,
    "confidence": 1.0
  },
  {
    "text": "句柄的树结构、",
    "startMs": 37789,
    "endMs": 38756,
    "timestampMs": 38272,
    "confidence": 1.0
  },
  {
    "text": "studio_inspect",
    "startMs": 38756,
    "endMs": 40796,
    "timestampMs": 39776,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "读取完整样式与",
    "startMs": 40808,
    "endMs": 42081,
    "timestampMs": 41444,
    "confidence": 1.0
  },
  {
    "text": "能力、",
    "startMs": 42081,
    "endMs": 42364,
    "timestampMs": 42222,
    "confidence": 1.0
  },
  {
    "text": "studio_frame",
    "startMs": 42364,
    "endMs": 43785,
    "timestampMs": 43074,
    "confidence": 1.0
  },
  {
    "text": " 在任意时间点截出",
    "startMs": 43785,
    "endMs": 45330,
    "timestampMs": 44557,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "PNG",
    "startMs": 45330,
    "endMs": 45872,
    "timestampMs": 45601,
    "confidence": 1.0
  },
  {
    "text": " 让",
    "startMs": 45872,
    "endMs": 46073,
    "timestampMs": 45972,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 46073,
    "endMs": 46544,
    "timestampMs": 46308,
    "confidence": 1.0
  },
  {
    "text": " 亲眼验收",
    "startMs": 46544,
    "endMs": 47275,
    "timestampMs": 46909,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及",
    "startMs": 47523,
    "endMs": 47794,
    "timestampMs": 47658,
    "confidence": 1.0
  },
  {
    "text": " 9",
    "startMs": 47794,
    "endMs": 48089,
    "timestampMs": 47941,
    "confidence": 1.0
  },
  {
    "text": " 个写入与动画工具",
    "startMs": 48089,
    "endMs": 49162,
    "timestampMs": 48625,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "每次写入前",
    "startMs": 49705,
    "endMs": 50636,
    "timestampMs": 50170,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 50636,
    "endMs": 51084,
    "timestampMs": 50860,
    "confidence": 1.0
  },
  {
    "text": " 会先调用",
    "startMs": 51084,
    "endMs": 51816,
    "timestampMs": 51450,
    "confidence": 1.0
  },
  {
    "text": " studio_select",
    "startMs": 51816,
    "endMs": 53408,
    "timestampMs": 52612,
    "confidence": 1.0
  },
  {
    "text": " 与你共享选区",
    "startMs": 53408,
    "endMs": 54492,
    "timestampMs": 53950,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "画布上会亮起",
    "startMs": 54775,
    "endMs": 55813,
    "timestampMs": 55294,
    "confidence": 1.0
  },
  {
    "text": " Topology Lens",
    "startMs": 55813,
    "endMs": 56839,
    "timestampMs": 56326,
    "confidence": 1.0
  },
  {
    "text": " 事务光框",
    "startMs": 56839,
    "endMs": 57594,
    "timestampMs": 57216,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "每次操作还会返回",
    "startMs": 57900,
    "endMs": 59469,
    "timestampMs": 58684,
    "confidence": 1.0
  },
  {
    "text": " refused、",
    "startMs": 59469,
    "endMs": 60294,
    "timestampMs": 59881,
    "confidence": 1.0
  },
  {
    "text": "dispatched、",
    "startMs": 60294,
    "endMs": 61096,
    "timestampMs": 60695,
    "confidence": 1.0
  },
  {
    "text": "saved",
    "startMs": 61096,
    "endMs": 61910,
    "timestampMs": 61503,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "verified、",
    "startMs": 62205,
    "endMs": 62889,
    "timestampMs": 62547,
    "confidence": 1.0
  },
  {
    "text": "failed",
    "startMs": 62889,
    "endMs": 63549,
    "timestampMs": 63219,
    "confidence": 1.0
  },
  {
    "text": " 五级诚实回执",
    "startMs": 63549,
    "endMs": 64705,
    "timestampMs": 64127,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "确保人机同",
    "startMs": 64816,
    "endMs": 65666,
    "timestampMs": 65241,
    "confidence": 1.0
  },
  {
    "text": "屏修改既透",
    "startMs": 65666,
    "endMs": 66939,
    "timestampMs": 66302,
    "confidence": 1.0
  },
  {
    "text": "明又可回溯",
    "startMs": 66939,
    "endMs": 67706,
    "timestampMs": 67322,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
