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

export const EP10_TOTAL_FRAMES = 8692;

export const EP10_SCENE_META: Record<string, SceneTimingMeta> = {
  "s01": {
    "id": "s01",
    "audioFile": "HfEp10VariablesAndBatchTemplates/ep10_s01_voice.mp3",
    "fromFrame": 0,
    "durationInFrames": 1667,
    "voiceFromFrame": 36,
    "voiceDurationInFrames": 1601,
    "voiceDurationMs": 53352
  },
  "s02": {
    "id": "s02",
    "audioFile": "HfEp10VariablesAndBatchTemplates/ep10_s02_voice.mp3",
    "fromFrame": 1667,
    "durationInFrames": 1775,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1721,
    "voiceDurationMs": 57360
  },
  "s03": {
    "id": "s03",
    "audioFile": "HfEp10VariablesAndBatchTemplates/ep10_s03_voice.mp3",
    "fromFrame": 3442,
    "durationInFrames": 1941,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1887,
    "voiceDurationMs": 62880
  },
  "s04": {
    "id": "s04",
    "audioFile": "HfEp10VariablesAndBatchTemplates/ep10_s04_voice.mp3",
    "fromFrame": 5383,
    "durationInFrames": 1647,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1593,
    "voiceDurationMs": 53088
  },
  "s05": {
    "id": "s05",
    "audioFile": "HfEp10VariablesAndBatchTemplates/ep10_s05_voice.mp3",
    "fromFrame": 7030,
    "durationInFrames": 1662,
    "voiceFromFrame": 24,
    "voiceDurationInFrames": 1602,
    "voiceDurationMs": 53376
  }
};

export const ep10_s01_captions: Caption[] = [
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
    "endMs": 1937,
    "timestampMs": 1406,
    "confidence": 1.0
  },
  {
    "text": " 全栈百科第十集",
    "startMs": 1937,
    "endMs": 3258,
    "timestampMs": 2597,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "做完一条满意的",
    "startMs": 3785,
    "endMs": 4658,
    "timestampMs": 4221,
    "confidence": 1.0
  },
  {
    "text": "商业视频后",
    "startMs": 4658,
    "endMs": 5531,
    "timestampMs": 5094,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果要面向",
    "startMs": 5932,
    "endMs": 6592,
    "timestampMs": 6262,
    "confidence": 1.0
  },
  {
    "text": "一百个客户",
    "startMs": 6592,
    "endMs": 7394,
    "timestampMs": 6993,
    "confidence": 1.0
  },
  {
    "text": "替换名称、",
    "startMs": 7394,
    "endMs": 8160,
    "timestampMs": 7777,
    "confidence": 1.0
  },
  {
    "text": "Logo",
    "startMs": 8160,
    "endMs": 8962,
    "timestampMs": 8561,
    "confidence": 1.0
  },
  {
    "text": "、主色调甚至",
    "startMs": 8962,
    "endMs": 10271,
    "timestampMs": 9616,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "专属产品视频",
    "startMs": 10295,
    "endMs": 11380,
    "timestampMs": 10837,
    "confidence": 1.0
  },
  {
    "text": " 该怎么做？",
    "startMs": 11380,
    "endMs": 12182,
    "timestampMs": 11781,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "答案是参数",
    "startMs": 12712,
    "endMs": 14116,
    "timestampMs": 13414,
    "confidence": 1.0
  },
  {
    "text": "化视频模板",
    "startMs": 14116,
    "endMs": 14823,
    "timestampMs": 14469,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只需在组合",
    "startMs": 15366,
    "endMs": 16156,
    "timestampMs": 15761,
    "confidence": 1.0
  },
  {
    "text": "根元素声明",
    "startMs": 16156,
    "endMs": 16946,
    "timestampMs": 16551,
    "confidence": 1.0
  },
  {
    "text": " data-composition-variables",
    "startMs": 16946,
    "endMs": 18432,
    "timestampMs": 17689,
    "confidence": 1.0
  },
  {
    "text": " JSON",
    "startMs": 18432,
    "endMs": 18785,
    "timestampMs": 18608,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "数组",
    "startMs": 18797,
    "endMs": 19175,
    "timestampMs": 18986,
    "confidence": 1.0
  },
  {
    "text": " 就能把允许",
    "startMs": 19175,
    "endMs": 20059,
    "timestampMs": 19617,
    "confidence": 1.0
  },
  {
    "text": "变更的槽位暴漏出来",
    "startMs": 20059,
    "endMs": 21392,
    "timestampMs": 20725,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "浏览器编辑",
    "startMs": 21663,
    "endMs": 22594,
    "timestampMs": 22128,
    "confidence": 1.0
  },
  {
    "text": "器会自动为",
    "startMs": 22594,
    "endMs": 23149,
    "timestampMs": 22871,
    "confidence": 1.0
  },
  {
    "text": "每个变量生",
    "startMs": 23149,
    "endMs": 24281,
    "timestampMs": 23715,
    "confidence": 1.0
  },
  {
    "text": "成可视化表单",
    "startMs": 24281,
    "endMs": 25047,
    "timestampMs": 24664,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "系统一共只",
    "startMs": 25590,
    "endMs": 26557,
    "timestampMs": 26073,
    "confidence": 1.0
  },
  {
    "text": "定义了七种数据类型",
    "startMs": 26557,
    "endMs": 28031,
    "timestampMs": 27294,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "string、",
    "startMs": 28196,
    "endMs": 28691,
    "timestampMs": 28443,
    "confidence": 1.0
  },
  {
    "text": "number、",
    "startMs": 28691,
    "endMs": 29493,
    "timestampMs": 29092,
    "confidence": 1.0
  },
  {
    "text": "color、",
    "startMs": 29493,
    "endMs": 30177,
    "timestampMs": 29835,
    "confidence": 1.0
  },
  {
    "text": "boolean、",
    "startMs": 30177,
    "endMs": 30920,
    "timestampMs": 30548,
    "confidence": 1.0
  },
  {
    "text": "enum、",
    "startMs": 30920,
    "endMs": 31557,
    "timestampMs": 31238,
    "confidence": 1.0
  },
  {
    "text": "font",
    "startMs": 31557,
    "endMs": 32264,
    "timestampMs": 31910,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 32264,
    "endMs": 32524,
    "timestampMs": 32394,
    "confidence": 1.0
  },
  {
    "text": " image",
    "startMs": 32524,
    "endMs": 33031,
    "timestampMs": 32777,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "这里有个新",
    "startMs": 33561,
    "endMs": 34446,
    "timestampMs": 34003,
    "confidence": 1.0
  },
  {
    "text": "手极易臆造的坑",
    "startMs": 34446,
    "endMs": 35330,
    "timestampMs": 34888,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "框架并不存在单独的",
    "startMs": 35684,
    "endMs": 37193,
    "timestampMs": 36438,
    "confidence": 1.0
  },
  {
    "text": " video",
    "startMs": 37193,
    "endMs": 37712,
    "timestampMs": 37452,
    "confidence": 1.0
  },
  {
    "text": " 或",
    "startMs": 37712,
    "endMs": 38031,
    "timestampMs": 37871,
    "confidence": 1.0
  },
  {
    "text": " audio",
    "startMs": 38031,
    "endMs": 38432,
    "timestampMs": 38231,
    "confidence": 1.0
  },
  {
    "text": " 变量类型",
    "startMs": 38432,
    "endMs": 39198,
    "timestampMs": 38815,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "想要动态替",
    "startMs": 39446,
    "endMs": 40424,
    "timestampMs": 39935,
    "confidence": 1.0
  },
  {
    "text": "换视频或音轨链接",
    "startMs": 40424,
    "endMs": 41804,
    "timestampMs": 41114,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一律声明为",
    "startMs": 42028,
    "endMs": 42783,
    "timestampMs": 42405,
    "confidence": 1.0
  },
  {
    "text": " string",
    "startMs": 42783,
    "endMs": 43290,
    "timestampMs": 43036,
    "confidence": 1.0
  },
  {
    "text": " 类型即可",
    "startMs": 43290,
    "endMs": 43915,
    "timestampMs": 43602,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "把固定视觉",
    "startMs": 44458,
    "endMs": 45189,
    "timestampMs": 44823,
    "confidence": 1.0
  },
  {
    "text": "结构留在源码里",
    "startMs": 45189,
    "endMs": 46509,
    "timestampMs": 45849,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "把会变的内容抽成带",
    "startMs": 46887,
    "endMs": 48502,
    "timestampMs": 47694,
    "confidence": 1.0
  },
  {
    "text": "默认值的类型化变量",
    "startMs": 48502,
    "endMs": 49858,
    "timestampMs": 49180,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "一条工程就",
    "startMs": 50224,
    "endMs": 51179,
    "timestampMs": 50701,
    "confidence": 1.0
  },
  {
    "text": "能裂变出无限版本",
    "startMs": 51179,
    "endMs": 52512,
    "timestampMs": 51845,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep10_s02_captions: Caption[] = [
  {
    "text": "如果这个模板将",
    "startMs": 97,
    "endMs": 1206,
    "timestampMs": 651,
    "confidence": 1.0
  },
  {
    "text": "来要交给",
    "startMs": 1206,
    "endMs": 1760,
    "timestampMs": 1483,
    "confidence": 1.0
  },
  {
    "text": " AI",
    "startMs": 1760,
    "endMs": 2326,
    "timestampMs": 2043,
    "confidence": 1.0
  },
  {
    "text": " Agent",
    "startMs": 2326,
    "endMs": 2786,
    "timestampMs": 2556,
    "confidence": 1.0
  },
  {
    "text": " 自动换品牌",
    "startMs": 2786,
    "endMs": 3788,
    "timestampMs": 3287,
    "confidence": 1.0
  },
  {
    "text": " Remix",
    "startMs": 3788,
    "endMs": 4531,
    "timestampMs": 4159,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "光靠位置命",
    "startMs": 4850,
    "endMs": 5970,
    "timestampMs": 5410,
    "confidence": 1.0
  },
  {
    "text": "名比如右上",
    "startMs": 5970,
    "endMs": 6854,
    "timestampMs": 6412,
    "confidence": 1.0
  },
  {
    "text": "角小字绝对不行",
    "startMs": 6854,
    "endMs": 7927,
    "timestampMs": 7390,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "AI",
    "startMs": 8269,
    "endMs": 8788,
    "timestampMs": 8528,
    "confidence": 1.0
  },
  {
    "text": " 会完全猜错业务含义",
    "startMs": 8788,
    "endMs": 10262,
    "timestampMs": 9525,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "因此变量的",
    "startMs": 10802,
    "endMs": 11922,
    "timestampMs": 11362,
    "confidence": 1.0
  },
  {
    "text": " label",
    "startMs": 11922,
    "endMs": 12358,
    "timestampMs": 12140,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 12358,
    "endMs": 12677,
    "timestampMs": 12517,
    "confidence": 1.0
  },
  {
    "text": " description",
    "startMs": 12677,
    "endMs": 13502,
    "timestampMs": 13089,
    "confidence": 1.0
  },
  {
    "text": " 必须写清语义职责",
    "startMs": 13502,
    "endMs": 14941,
    "timestampMs": 14221,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并配合两个",
    "startMs": 15236,
    "endMs": 15979,
    "timestampMs": 15607,
    "confidence": 1.0
  },
  {
    "text": "正交的元数据字段",
    "startMs": 15979,
    "endMs": 17182,
    "timestampMs": 16580,
    "confidence": 1.0
  },
  {
    "text": " 第一个是",
    "startMs": 17182,
    "endMs": 18007,
    "timestampMs": 17594,
    "confidence": 1.0
  },
  {
    "text": " role",
    "startMs": 18007,
    "endMs": 18384,
    "timestampMs": 18195,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "告诉工具这",
    "startMs": 18550,
    "endMs": 19446,
    "timestampMs": 18998,
    "confidence": 1.0
  },
  {
    "text": "个旋钮控制内容、",
    "startMs": 19446,
    "endMs": 20460,
    "timestampMs": 19953,
    "confidence": 1.0
  },
  {
    "text": "样式、时长、",
    "startMs": 20460,
    "endMs": 21922,
    "timestampMs": 21191,
    "confidence": 1.0
  },
  {
    "text": "运动还是布局",
    "startMs": 21922,
    "endMs": 23479,
    "timestampMs": 22700,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二个是极其关键的",
    "startMs": 23591,
    "endMs": 24888,
    "timestampMs": 24239,
    "confidence": 1.0
  },
  {
    "text": " portrays",
    "startMs": 24888,
    "endMs": 25572,
    "timestampMs": 25230,
    "confidence": 1.0
  },
  {
    "text": " 语义身份标签",
    "startMs": 25572,
    "endMs": 26574,
    "timestampMs": 26073,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "它不影响渲染结果",
    "startMs": 26798,
    "endMs": 28060,
    "timestampMs": 27429,
    "confidence": 1.0
  },
  {
    "text": " 却像护栏一",
    "startMs": 28060,
    "endMs": 29192,
    "timestampMs": 28626,
    "confidence": 1.0
  },
  {
    "text": "样标明八大业务槽位",
    "startMs": 29192,
    "endMs": 30666,
    "timestampMs": 29929,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "subject_name",
    "startMs": 30878,
    "endMs": 32352,
    "timestampMs": 31615,
    "confidence": 1.0
  },
  {
    "text": " 品牌名、",
    "startMs": 32352,
    "endMs": 32954,
    "timestampMs": 32653,
    "confidence": 1.0
  },
  {
    "text": "subject_domain",
    "startMs": 32954,
    "endMs": 34793,
    "timestampMs": 33873,
    "confidence": 1.0
  },
  {
    "text": " 网址",
    "startMs": 34793,
    "endMs": 35194,
    "timestampMs": 34993,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "subject_tagline",
    "startMs": 35383,
    "endMs": 37081,
    "timestampMs": 36232,
    "confidence": 1.0
  },
  {
    "text": " 标语、",
    "startMs": 37081,
    "endMs": 37411,
    "timestampMs": 37246,
    "confidence": 1.0
  },
  {
    "text": "subject_logo",
    "startMs": 37411,
    "endMs": 39092,
    "timestampMs": 38251,
    "confidence": 1.0
  },
  {
    "text": " 标志",
    "startMs": 39092,
    "endMs": 39516,
    "timestampMs": 39304,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "recommended_position",
    "startMs": 39787,
    "endMs": 41650,
    "timestampMs": 40718,
    "confidence": 1.0
  },
  {
    "text": " 榜单推荐位、",
    "startMs": 41650,
    "endMs": 42452,
    "timestampMs": 42051,
    "confidence": 1.0
  },
  {
    "text": "competitor_name",
    "startMs": 42452,
    "endMs": 44528,
    "timestampMs": 43490,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "竞品名、",
    "startMs": 44528,
    "endMs": 45117,
    "timestampMs": 44822,
    "confidence": 1.0
  },
  {
    "text": "authority_badge",
    "startMs": 45117,
    "endMs": 46875,
    "timestampMs": 45996,
    "confidence": 1.0
  },
  {
    "text": " 权威背书",
    "startMs": 46875,
    "endMs": 47606,
    "timestampMs": 47240,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及",
    "startMs": 47900,
    "endMs": 48183,
    "timestampMs": 48041,
    "confidence": 1.0
  },
  {
    "text": " host_identity",
    "startMs": 48183,
    "endMs": 49787,
    "timestampMs": 48985,
    "confidence": 1.0
  },
  {
    "text": " 宿主界面身份",
    "startMs": 49787,
    "endMs": 50967,
    "timestampMs": 50377,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "有了",
    "startMs": 51509,
    "endMs": 51757,
    "timestampMs": 51633,
    "confidence": 1.0
  },
  {
    "text": " portrays",
    "startMs": 51757,
    "endMs": 52511,
    "timestampMs": 52134,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Agent",
    "startMs": 52735,
    "endMs": 53278,
    "timestampMs": 53006,
    "confidence": 1.0
  },
  {
    "text": " 就能精准分",
    "startMs": 53278,
    "endMs": 54433,
    "timestampMs": 53855,
    "confidence": 1.0
  },
  {
    "text": "辨哪些该换、",
    "startMs": 54433,
    "endMs": 55294,
    "timestampMs": 54863,
    "confidence": 1.0
  },
  {
    "text": "哪些绝不能乱编",
    "startMs": 55294,
    "endMs": 56544,
    "timestampMs": 55919,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep10_s03_captions: Caption[] = [
  {
    "text": "声明完变量后",
    "startMs": 97,
    "endMs": 1465,
    "timestampMs": 781,
    "confidence": 1.0
  },
  {
    "text": " 怎么绑定到画面上？",
    "startMs": 1465,
    "endMs": 2821,
    "timestampMs": 2143,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "90%",
    "startMs": 3349,
    "endMs": 4080,
    "timestampMs": 3714,
    "confidence": 1.0
  },
  {
    "text": " 的场景无需写一行",
    "startMs": 4080,
    "endMs": 5519,
    "timestampMs": 4799,
    "confidence": 1.0
  },
  {
    "text": " JavaScript",
    "startMs": 5519,
    "endMs": 6474,
    "timestampMs": 5996,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "靠三件声明",
    "startMs": 6722,
    "endMs": 7724,
    "timestampMs": 7223,
    "confidence": 1.0
  },
  {
    "text": "式法宝就能搞定",
    "startMs": 7724,
    "endMs": 8726,
    "timestampMs": 8225,
    "confidence": 1.0
  },
  {
    "text": " 用",
    "startMs": 8726,
    "endMs": 9257,
    "timestampMs": 8991,
    "confidence": 1.0
  },
  {
    "text": " data-var-text",
    "startMs": 9257,
    "endMs": 10212,
    "timestampMs": 9734,
    "confidence": 1.0
  },
  {
    "text": " 替换文字",
    "startMs": 10212,
    "endMs": 10932,
    "timestampMs": 10572,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用",
    "startMs": 11120,
    "endMs": 11415,
    "timestampMs": 11267,
    "confidence": 1.0
  },
  {
    "text": " var(--id)",
    "startMs": 11415,
    "endMs": 12583,
    "timestampMs": 11999,
    "confidence": 1.0
  },
  {
    "text": " 在",
    "startMs": 12583,
    "endMs": 13019,
    "timestampMs": 12801,
    "confidence": 1.0
  },
  {
    "text": " CSS",
    "startMs": 13019,
    "endMs": 13644,
    "timestampMs": 13331,
    "confidence": 1.0
  },
  {
    "text": " 里消费颜色、",
    "startMs": 13644,
    "endMs": 14693,
    "timestampMs": 14168,
    "confidence": 1.0
  },
  {
    "text": "字号等标量变量",
    "startMs": 14693,
    "endMs": 16132,
    "timestampMs": 15412,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "用",
    "startMs": 16309,
    "endMs": 16616,
    "timestampMs": 16462,
    "confidence": 1.0
  },
  {
    "text": " data-var-src",
    "startMs": 16616,
    "endMs": 17830,
    "timestampMs": 17223,
    "confidence": 1.0
  },
  {
    "text": " 替换图片、",
    "startMs": 17830,
    "endMs": 18526,
    "timestampMs": 18178,
    "confidence": 1.0
  },
  {
    "text": "视频或音频源",
    "startMs": 18526,
    "endMs": 19994,
    "timestampMs": 19260,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "特别惊喜的是",
    "startMs": 20536,
    "endMs": 21480,
    "timestampMs": 21008,
    "confidence": 1.0
  },
  {
    "text": " 用",
    "startMs": 21480,
    "endMs": 22010,
    "timestampMs": 21745,
    "confidence": 1.0
  },
  {
    "text": " data-var-src",
    "startMs": 22010,
    "endMs": 23190,
    "timestampMs": 22600,
    "confidence": 1.0
  },
  {
    "text": " 替换视频时",
    "startMs": 23190,
    "endMs": 24098,
    "timestampMs": 23644,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "成片会自动",
    "startMs": 24286,
    "endMs": 25088,
    "timestampMs": 24687,
    "confidence": 1.0
  },
  {
    "text": "继承新视频的",
    "startMs": 25088,
    "endMs": 25973,
    "timestampMs": 25530,
    "confidence": 1.0
  },
  {
    "text": "真实时长与",
    "startMs": 25973,
    "endMs": 27069,
    "timestampMs": 26521,
    "confidence": 1.0
  },
  {
    "text": "原声混音！",
    "startMs": 27069,
    "endMs": 27765,
    "timestampMs": 27417,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "但要避开两个细节坑",
    "startMs": 28308,
    "endMs": 29687,
    "timestampMs": 28997,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-var-src",
    "startMs": 29935,
    "endMs": 31161,
    "timestampMs": 30548,
    "confidence": 1.0
  },
  {
    "text": " 只对",
    "startMs": 31161,
    "endMs": 31609,
    "timestampMs": 31385,
    "confidence": 1.0
  },
  {
    "text": " img、",
    "startMs": 31609,
    "endMs": 32282,
    "timestampMs": 31945,
    "confidence": 1.0
  },
  {
    "text": "video、",
    "startMs": 32282,
    "endMs": 33072,
    "timestampMs": 32677,
    "confidence": 1.0
  },
  {
    "text": "audio",
    "startMs": 33072,
    "endMs": 33791,
    "timestampMs": 33431,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 33791,
    "endMs": 34039,
    "timestampMs": 33915,
    "confidence": 1.0
  },
  {
    "text": " source",
    "startMs": 34039,
    "endMs": 34404,
    "timestampMs": 34221,
    "confidence": 1.0
  },
  {
    "text": " 生效",
    "startMs": 34404,
    "endMs": 34829,
    "timestampMs": 34616,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "而且元素上",
    "startMs": 35171,
    "endMs": 36291,
    "timestampMs": 35731,
    "confidence": 1.0
  },
  {
    "text": "必须保留静态占位",
    "startMs": 36291,
    "endMs": 37565,
    "timestampMs": 36928,
    "confidence": 1.0
  },
  {
    "text": " src",
    "startMs": 37565,
    "endMs": 38378,
    "timestampMs": 37971,
    "confidence": 1.0
  },
  {
    "text": " 作为",
    "startMs": 38378,
    "endMs": 38815,
    "timestampMs": 38596,
    "confidence": 1.0
  },
  {
    "text": " fallback",
    "startMs": 38815,
    "endMs": 39463,
    "timestampMs": 39139,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "否则",
    "startMs": 39575,
    "endMs": 40011,
    "timestampMs": 39793,
    "confidence": 1.0
  },
  {
    "text": " Lint",
    "startMs": 40011,
    "endMs": 40495,
    "timestampMs": 40253,
    "confidence": 1.0
  },
  {
    "text": " 会报",
    "startMs": 40495,
    "endMs": 40825,
    "timestampMs": 40660,
    "confidence": 1.0
  },
  {
    "text": " media_variable_src_no_fallback",
    "startMs": 40825,
    "endMs": 45754,
    "timestampMs": 43289,
    "confidence": 1.0
  },
  {
    "text": " 警告",
    "startMs": 45754,
    "endMs": 46155,
    "timestampMs": 45954,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "同时切勿塞入超大",
    "startMs": 46474,
    "endMs": 47936,
    "timestampMs": 47205,
    "confidence": 1.0
  },
  {
    "text": " data",
    "startMs": 47936,
    "endMs": 48290,
    "timestampMs": 48113,
    "confidence": 1.0
  },
  {
    "text": " 视频",
    "startMs": 48290,
    "endMs": 49080,
    "timestampMs": 48685,
    "confidence": 1.0
  },
  {
    "text": " URI",
    "startMs": 49080,
    "endMs": 49551,
    "timestampMs": 49315,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "只有遇到条件分支、",
    "startMs": 50094,
    "endMs": 51297,
    "timestampMs": 50695,
    "confidence": 1.0
  },
  {
    "text": "循环或派生计算时",
    "startMs": 51297,
    "endMs": 53018,
    "timestampMs": 52157,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "才调用",
    "startMs": 53184,
    "endMs": 53655,
    "timestampMs": 53419,
    "confidence": 1.0
  },
  {
    "text": " window.__hyperframes.getVariables()",
    "startMs": 53655,
    "endMs": 57476,
    "timestampMs": 55565,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "父组合向子",
    "startMs": 57818,
    "endMs": 58773,
    "timestampMs": 58295,
    "confidence": 1.0
  },
  {
    "text": "组合传参则统一使用",
    "startMs": 58773,
    "endMs": 60495,
    "timestampMs": 59634,
    "confidence": 1.0
  },
  {
    "text": " data-variable-values",
    "startMs": 60495,
    "endMs": 61662,
    "timestampMs": 61078,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "属性",
    "startMs": 61674,
    "endMs": 62075,
    "timestampMs": 61874,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep10_s04_captions: Caption[] = [
  {
    "text": "模板建好后",
    "startMs": 97,
    "endMs": 970,
    "timestampMs": 533,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "单条覆盖渲染只需在",
    "startMs": 1276,
    "endMs": 2845,
    "timestampMs": 2060,
    "confidence": 1.0
  },
  {
    "text": "命令行传",
    "startMs": 2845,
    "endMs": 3658,
    "timestampMs": 3251,
    "confidence": 1.0
  },
  {
    "text": " --variables",
    "startMs": 3658,
    "endMs": 4331,
    "timestampMs": 3994,
    "confidence": 1.0
  },
  {
    "text": " 内联",
    "startMs": 4331,
    "endMs": 4779,
    "timestampMs": 4555,
    "confidence": 1.0
  },
  {
    "text": " JSON",
    "startMs": 4779,
    "endMs": 5628,
    "timestampMs": 5203,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "或更安全的",
    "startMs": 5722,
    "endMs": 6559,
    "timestampMs": 6140,
    "confidence": 1.0
  },
  {
    "text": " --variables-file",
    "startMs": 6559,
    "endMs": 7562,
    "timestampMs": 7060,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "并建议加上",
    "startMs": 7857,
    "endMs": 8682,
    "timestampMs": 8269,
    "confidence": 1.0
  },
  {
    "text": " --strict-variables",
    "startMs": 8682,
    "endMs": 9850,
    "timestampMs": 9266,
    "confidence": 1.0
  },
  {
    "text": " 开启严格校验",
    "startMs": 9850,
    "endMs": 10982,
    "timestampMs": 10416,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "拦截拼写错误的",
    "startMs": 11229,
    "endMs": 12232,
    "timestampMs": 11730,
    "confidence": 1.0
  },
  {
    "text": "未知键或越界类型",
    "startMs": 12232,
    "endMs": 13776,
    "timestampMs": 13004,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "要一次性批",
    "startMs": 14316,
    "endMs": 15212,
    "timestampMs": 14764,
    "confidence": 1.0
  },
  {
    "text": "量产出几十",
    "startMs": 15212,
    "endMs": 15908,
    "timestampMs": 15560,
    "confidence": 1.0
  },
  {
    "text": "上百条个性化视频",
    "startMs": 15908,
    "endMs": 17347,
    "timestampMs": 16627,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "本机直接运行",
    "startMs": 17653,
    "endMs": 18726,
    "timestampMs": 18189,
    "confidence": 1.0
  },
  {
    "text": " --batch",
    "startMs": 18726,
    "endMs": 19505,
    "timestampMs": 19115,
    "confidence": 1.0
  },
  {
    "text": " rows.json",
    "startMs": 19505,
    "endMs": 20000,
    "timestampMs": 19752,
    "confidence": 1.0
  },
  {
    "text": " --output",
    "startMs": 20000,
    "endMs": 20460,
    "timestampMs": 20230,
    "confidence": 1.0
  },
  {
    "text": " renders/",
    "startMs": 20460,
    "endMs": 21038,
    "timestampMs": 20749,
    "confidence": 1.0
  },
  {
    "text": "{",
    "startMs": 21038,
    "endMs": 21203,
    "timestampMs": 21120,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "name",
    "startMs": 21203,
    "endMs": 21722,
    "timestampMs": 21462,
    "confidence": 1.0
  },
  {
    "text": "}",
    "startMs": 21722,
    "endMs": 21842,
    "timestampMs": 21782,
    "confidence": 1.0
  },
  {
    "text": ".mp4",
    "startMs": 21842,
    "endMs": 22571,
    "timestampMs": 22206,
    "confidence": 1.0
  },
  {
    "text": " 并用",
    "startMs": 22571,
    "endMs": 23172,
    "timestampMs": 22871,
    "confidence": 1.0
  },
  {
    "text": " --batch-concurrency",
    "startMs": 23172,
    "endMs": 24092,
    "timestampMs": 23632,
    "confidence": 1.0
  },
  {
    "text": " 控制并发数",
    "startMs": 24092,
    "endMs": 25071,
    "timestampMs": 24581,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "注意输出模板里的{",
    "startMs": 25389,
    "endMs": 26533,
    "timestampMs": 25961,
    "confidence": 1.0
  },
  {
    "text": "name",
    "startMs": 26533,
    "endMs": 27087,
    "timestampMs": 26810,
    "confidence": 1.0
  },
  {
    "text": "}占位符受",
    "startMs": 27087,
    "endMs": 27836,
    "timestampMs": 27461,
    "confidence": 1.0
  },
  {
    "text": "路径安全沙",
    "startMs": 27836,
    "endMs": 29204,
    "timestampMs": 28520,
    "confidence": 1.0
  },
  {
    "text": "箱严格保护",
    "startMs": 29204,
    "endMs": 29900,
    "timestampMs": 29552,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "任何包含..",
    "startMs": 30300,
    "endMs": 30949,
    "timestampMs": 30624,
    "confidence": 1.0
  },
  {
    "text": " /的路径越",
    "startMs": 30949,
    "endMs": 31515,
    "timestampMs": 31232,
    "confidence": 1.0
  },
  {
    "text": "界企图都会",
    "startMs": 31515,
    "endMs": 32411,
    "timestampMs": 31963,
    "confidence": 1.0
  },
  {
    "text": "被立刻拒绝",
    "startMs": 32411,
    "endMs": 33296,
    "timestampMs": 32853,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "如果规模扩",
    "startMs": 33838,
    "endMs": 34923,
    "timestampMs": 34380,
    "confidence": 1.0
  },
  {
    "text": "张到成千上万条",
    "startMs": 34923,
    "endMs": 36043,
    "timestampMs": 35483,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "直接切上",
    "startMs": 36326,
    "endMs": 37022,
    "timestampMs": 36674,
    "confidence": 1.0
  },
  {
    "text": " AWS Lambda",
    "startMs": 37022,
    "endMs": 38284,
    "timestampMs": 37653,
    "confidence": 1.0
  },
  {
    "text": " 的",
    "startMs": 38284,
    "endMs": 38461,
    "timestampMs": 38372,
    "confidence": 1.0
  },
  {
    "text": " render-batch",
    "startMs": 38461,
    "endMs": 39074,
    "timestampMs": 38767,
    "confidence": 1.0
  },
  {
    "text": " 流水线",
    "startMs": 39074,
    "endMs": 39605,
    "timestampMs": 39339,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "提交",
    "startMs": 39911,
    "endMs": 40348,
    "timestampMs": 40129,
    "confidence": 1.0
  },
  {
    "text": " JSONL",
    "startMs": 40348,
    "endMs": 41067,
    "timestampMs": 40707,
    "confidence": 1.0
  },
  {
    "text": " 批量清单即",
    "startMs": 41067,
    "endMs": 42116,
    "timestampMs": 41591,
    "confidence": 1.0
  },
  {
    "text": "可扇出并发渲染",
    "startMs": 42116,
    "endMs": 43166,
    "timestampMs": 42641,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "唯一要注意的",
    "startMs": 43278,
    "endMs": 43832,
    "timestampMs": 43555,
    "confidence": 1.0
  },
  {
    "text": "是单条任务",
    "startMs": 43832,
    "endMs": 44740,
    "timestampMs": 44286,
    "confidence": 1.0
  },
  {
    "text": "事件载荷受限于",
    "startMs": 44740,
    "endMs": 46049,
    "timestampMs": 45394,
    "confidence": 1.0
  },
  {
    "text": " AWS",
    "startMs": 46049,
    "endMs": 46816,
    "timestampMs": 46432,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "Step Functions",
    "startMs": 46816,
    "endMs": 47676,
    "timestampMs": 47246,
    "confidence": 1.0
  },
  {
    "text": " 的",
    "startMs": 47676,
    "endMs": 47794,
    "timestampMs": 47735,
    "confidence": 1.0
  },
  {
    "text": " 256",
    "startMs": 47794,
    "endMs": 48431,
    "timestampMs": 48112,
    "confidence": 1.0
  },
  {
    "text": " KiB",
    "startMs": 48431,
    "endMs": 48714,
    "timestampMs": 48572,
    "confidence": 1.0
  },
  {
    "text": " 上限",
    "startMs": 48714,
    "endMs": 49150,
    "timestampMs": 48932,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "务必传素材",
    "startMs": 49504,
    "endMs": 50483,
    "timestampMs": 49993,
    "confidence": 1.0
  },
  {
    "text": " URL",
    "startMs": 50483,
    "endMs": 51120,
    "timestampMs": 50801,
    "confidence": 1.0
  },
  {
    "text": " 而非内联大文件",
    "startMs": 51120,
    "endMs": 52264,
    "timestampMs": 51692,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];

export const ep10_s05_captions: Caption[] = [
  {
    "text": "交付一套经",
    "startMs": 97,
    "endMs": 1229,
    "timestampMs": 663,
    "confidence": 1.0
  },
  {
    "text": "得起生产考验的",
    "startMs": 1229,
    "endMs": 1866,
    "timestampMs": 1547,
    "confidence": 1.0
  },
  {
    "text": "模板前",
    "startMs": 1866,
    "endMs": 2515,
    "timestampMs": 2190,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "必须跨过最",
    "startMs": 2880,
    "endMs": 3835,
    "timestampMs": 3357,
    "confidence": 1.0
  },
  {
    "text": "后三道架构检验",
    "startMs": 3835,
    "endMs": 4791,
    "timestampMs": 4313,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第一道是",
    "startMs": 5330,
    "endMs": 6073,
    "timestampMs": 5701,
    "confidence": 1.0
  },
  {
    "text": " CSS",
    "startMs": 6073,
    "endMs": 6875,
    "timestampMs": 6474,
    "confidence": 1.0
  },
  {
    "text": " 优先级暗坑",
    "startMs": 6875,
    "endMs": 7795,
    "timestampMs": 7335,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "HyperFrames",
    "startMs": 8090,
    "endMs": 8950,
    "timestampMs": 8520,
    "confidence": 1.0
  },
  {
    "text": " 会把标量变",
    "startMs": 8950,
    "endMs": 10012,
    "timestampMs": 9481,
    "confidence": 1.0
  },
  {
    "text": "量注入到组",
    "startMs": 10012,
    "endMs": 10920,
    "timestampMs": 10466,
    "confidence": 1.0
  },
  {
    "text": "合根元素的",
    "startMs": 10920,
    "endMs": 11427,
    "timestampMs": 11173,
    "confidence": 1.0
  },
  {
    "text": " --id",
    "startMs": 11427,
    "endMs": 11816,
    "timestampMs": 11621,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "自定义属性上",
    "startMs": 11840,
    "endMs": 12724,
    "timestampMs": 12282,
    "confidence": 1.0
  },
  {
    "text": " 如果你自己在",
    "startMs": 12724,
    "endMs": 14057,
    "timestampMs": 13390,
    "confidence": 1.0
  },
  {
    "text": "样式表里写了",
    "startMs": 14057,
    "endMs": 14917,
    "timestampMs": 14487,
    "confidence": 1.0
  },
  {
    "text": " root",
    "startMs": 14917,
    "endMs": 15389,
    "timestampMs": 15153,
    "confidence": 1.0
  },
  {
    "text": " --accent",
    "startMs": 15389,
    "endMs": 15991,
    "timestampMs": 15690,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "就会直接遮蔽并",
    "startMs": 16102,
    "endMs": 17223,
    "timestampMs": 16662,
    "confidence": 1.0
  },
  {
    "text": "覆盖变量的",
    "startMs": 17223,
    "endMs": 17907,
    "timestampMs": 17565,
    "confidence": 1.0
  },
  {
    "text": "默认值甚至",
    "startMs": 17907,
    "endMs": 19015,
    "timestampMs": 18461,
    "confidence": 1.0
  },
  {
    "text": "破坏继承链路",
    "startMs": 19015,
    "endMs": 20053,
    "timestampMs": 19534,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "正确做法是只消费",
    "startMs": 20407,
    "endMs": 22010,
    "timestampMs": 21208,
    "confidence": 1.0
  },
  {
    "text": " var(--accent)",
    "startMs": 22010,
    "endMs": 23201,
    "timestampMs": 22605,
    "confidence": 1.0
  },
  {
    "text": " 绝不在",
    "startMs": 23201,
    "endMs": 24039,
    "timestampMs": 23620,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "root",
    "startMs": 24298,
    "endMs": 24593,
    "timestampMs": 24445,
    "confidence": 1.0
  },
  {
    "text": " 里重复硬写",
    "startMs": 24593,
    "endMs": 25642,
    "timestampMs": 25117,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第二道是差",
    "startMs": 26173,
    "endMs": 27164,
    "timestampMs": 26668,
    "confidence": 1.0
  },
  {
    "text": "分换肤测试",
    "startMs": 27164,
    "endMs": 27942,
    "timestampMs": 27553,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "上线前至少",
    "startMs": 28260,
    "endMs": 29369,
    "timestampMs": 28814,
    "confidence": 1.0
  },
  {
    "text": "用默认配色和",
    "startMs": 29369,
    "endMs": 30548,
    "timestampMs": 29958,
    "confidence": 1.0
  },
  {
    "text": "一套极端高",
    "startMs": 30548,
    "endMs": 31338,
    "timestampMs": 30943,
    "confidence": 1.0
  },
  {
    "text": "反差色板各渲染一遍",
    "startMs": 31338,
    "endMs": 32895,
    "timestampMs": 32116,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "检查长短名字、",
    "startMs": 33225,
    "endMs": 34369,
    "timestampMs": 33797,
    "confidence": 1.0
  },
  {
    "text": "异形图片和",
    "startMs": 34369,
    "endMs": 35666,
    "timestampMs": 35017,
    "confidence": 1.0
  },
  {
    "text": "缺失可选项",
    "startMs": 35666,
    "endMs": 36645,
    "timestampMs": 36155,
    "confidence": 1.0
  },
  {
    "text": "会不会撑爆排版",
    "startMs": 36645,
    "endMs": 37824,
    "timestampMs": 37234,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "第三道则是",
    "startMs": 38366,
    "endMs": 39357,
    "timestampMs": 38861,
    "confidence": 1.0
  },
  {
    "text": "牢记四大编",
    "startMs": 39357,
    "endMs": 40277,
    "timestampMs": 39817,
    "confidence": 1.0
  },
  {
    "text": "译时不可变量",
    "startMs": 40277,
    "endMs": 41303,
    "timestampMs": 40790,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "画布宽高",
    "startMs": 41539,
    "endMs": 42282,
    "timestampMs": 41910,
    "confidence": 1.0
  },
  {
    "text": " data-width",
    "startMs": 42282,
    "endMs": 43036,
    "timestampMs": 42659,
    "confidence": 1.0
  },
  {
    "text": " 和",
    "startMs": 43036,
    "endMs": 43319,
    "timestampMs": 43177,
    "confidence": 1.0
  },
  {
    "text": " data-height",
    "startMs": 43319,
    "endMs": 44003,
    "timestampMs": 43661,
    "confidence": 1.0
  },
  {
    "text": "、根总时长",
    "startMs": 44003,
    "endMs": 45242,
    "timestampMs": 44622,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "data-duration",
    "startMs": 45242,
    "endMs": 46067,
    "timestampMs": 45654,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "以及帧率",
    "startMs": 46326,
    "endMs": 46963,
    "timestampMs": 46644,
    "confidence": 1.0
  },
  {
    "text": " fps",
    "startMs": 46963,
    "endMs": 47694,
    "timestampMs": 47328,
    "confidence": 1.0
  },
  {
    "text": " 都属于渲染",
    "startMs": 47694,
    "endMs": 48874,
    "timestampMs": 48284,
    "confidence": 1.0
  },
  {
    "text": "管线启动前就锁死的",
    "startMs": 48874,
    "endMs": 50065,
    "timestampMs": 49469,
    "confidence": 1.0
  },
  {
    "text": "架构常量",
    "startMs": 50065,
    "endMs": 50678,
    "timestampMs": 50371,
    "confidence": 1.0,
    "pageBreakAfter": true
  },
  {
    "text": "无法也不应",
    "startMs": 50790,
    "endMs": 51426,
    "timestampMs": 51108,
    "confidence": 1.0
  },
  {
    "text": "该做成运行时变量",
    "startMs": 51426,
    "endMs": 52558,
    "timestampMs": 51992,
    "confidence": 1.0,
    "pageBreakAfter": true
  }
];
