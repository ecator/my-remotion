import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT_DIR = path.resolve(__dirname, "../../..");

export const SERIES_DEFAULTS = {
  width: 1920,
  height: 1080,
  fps: 30,
  brandColor: "#10B981",
  accentColor: "#06B6D4",
  showSubtitles: true,
  bgmVolume: 0.18,
  bgmStaticPath: "shared/bgm/hf_tech_ambient.mp3",
  ttsVoice: "zh-CN-YunxiNeural",
  ttsRate: "+6%",
  ttsSampleRate: 24000,
  ttsChannels: 1,
  ttsBitRate: 48000,
};

export const HELLO_WORLD_META = {
  id: "HelloWorld",
  schemaName: "helloWorldSchema",
  durationInFrames: 240,
  fps: 30,
  width: 1920,
  height: 1080,
  srcDir: "src/videos/HelloWorld",
  publicDir: "public/HelloWorld",
  requiredPublicFiles: ["haibara_bgm.mp3", "haibara_voice.mp3"],
};

export const SHARED_UI_COMPONENTS = {
  dir: "src/components/hyperframes",
  existing: [
    "tokens.ts",
    "HfSeriesShell.tsx",
    "HfCaptionBar.tsx",
    "HfCodeWindow.tsx",
    "HfTerminalWindow.tsx",
  ],
  newPrimitives: [
    "HfChapterIntro.tsx",
    "HfPromptAnatomy.tsx",
    "HfSplitCompare.tsx",
    "HfTimelineMock.tsx",
  ],
  all() {
    return [...this.existing, ...this.newPrimitives];
  },
};

export const EPISODES = [
  {
    num: 1,
    epTag: "EP01",
    featureId: "EP01",
    id: "HfEp01IntroAndQuickstart",
    episodeCode: "EP.01",
    episodeTitle: "重新定义网页转视频：什么是 HyperFrames 与三大起步路径",
    schemaName: "hfEp01Schema",
    defaultPropsName: "EP01_DEFAULT_PROPS",
    totalFramesName: "EP01_TOTAL_FRAMES",
    sceneMetaName: "EP01_SCENE_META",
    prefixLower: "ep01",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: true,
  },
  {
    num: 2,
    epTag: "EP02",
    featureId: "F3",
    id: "HfEp02StudioDesktopApp",
    episodeCode: "EP.02",
    episodeTitle: "零代码 AI 视频工作站：HyperFrames Studio 桌面端全攻略",
    schemaName: "hfEp02Schema",
    defaultPropsName: "EP02_DEFAULT_PROPS",
    totalFramesName: "EP02_TOTAL_FRAMES",
    sceneMetaName: "EP02_SCENE_META",
    prefixLower: "ep02",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 3,
    epTag: "EP03",
    featureId: "F4",
    id: "HfEp03BrowserEditorNle",
    episodeCode: "EP.03",
    episodeTitle: "源码级可视化剪辑：Browser Editor 浏览器编辑器与时间轴精修",
    schemaName: "hfEp03Schema",
    defaultPropsName: "EP03_DEFAULT_PROPS",
    totalFramesName: "EP03_TOTAL_FRAMES",
    sceneMetaName: "EP03_SCENE_META",
    prefixLower: "ep03",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 4,
    epTag: "EP04",
    featureId: "F5",
    id: "HfEp04BrandAndExplainerFlows",
    episodeCode: "EP.04",
    episodeTitle: "从网页与文稿到成片：产品发布、科普解说与设计稿导入工作流",
    schemaName: "hfEp04Schema",
    defaultPropsName: "EP04_DEFAULT_PROPS",
    totalFramesName: "EP04_TOTAL_FRAMES",
    sceneMetaName: "EP04_SCENE_META",
    prefixLower: "ep04",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 5,
    epTag: "EP05",
    featureId: "F6",
    id: "HfEp05MediaDataAndDevFlows",
    episodeCode: "EP.05",
    episodeTitle: "万物皆可成片：口播粗剪、音乐卡点、数据地图、PR 视频与幻灯片",
    schemaName: "hfEp05Schema",
    defaultPropsName: "EP05_DEFAULT_PROPS",
    totalFramesName: "EP05_TOTAL_FRAMES",
    sceneMetaName: "EP05_SCENE_META",
    prefixLower: "ep05",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 6,
    epTag: "EP06",
    featureId: "F7",
    id: "HfEp06PromptAnatomyAndMotion",
    episodeCode: "EP.06",
    episodeTitle: "像导演一样写 Prompt：六段式提示词骨架与七大丝滑运动法则",
    schemaName: "hfEp06Schema",
    defaultPropsName: "EP06_DEFAULT_PROPS",
    totalFramesName: "EP06_TOTAL_FRAMES",
    sceneMetaName: "EP06_SCENE_META",
    prefixLower: "ep06",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 7,
    epTag: "EP07",
    featureId: "F8",
    id: "HfEp07AudioVoiceAndCaptions",
    episodeCode: "EP.07",
    episodeTitle: "声音与字幕工程：TTS 配音、10000+ 曲库、自动闪避与 91 款花字",
    schemaName: "hfEp07Schema",
    defaultPropsName: "EP07_DEFAULT_PROPS",
    totalFramesName: "EP07_TOTAL_FRAMES",
    sceneMetaName: "EP07_SCENE_META",
    prefixLower: "ep07",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 8,
    epTag: "EP08",
    featureId: "F9",
    id: "HfEp08ColorVfxAnd3d",
    episodeCode: "EP.08",
    episodeTitle: "电影感调色与视觉特效：调色管线、data-vfx-chain WebGL2 与 3D",
    schemaName: "hfEp08Schema",
    defaultPropsName: "EP08_DEFAULT_PROPS",
    totalFramesName: "EP08_TOTAL_FRAMES",
    sceneMetaName: "EP08_SCENE_META",
    prefixLower: "ep08",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 9,
    epTag: "EP09",
    featureId: "F10",
    id: "HfEp09HtmlContractAndGsap",
    episodeCode: "EP.09",
    episodeTitle: "解剖 HyperFrames 工程：HTML Schema、时间属性与确定性寻址渲染",
    schemaName: "hfEp09Schema",
    defaultPropsName: "EP09_DEFAULT_PROPS",
    totalFramesName: "EP09_TOTAL_FRAMES",
    sceneMetaName: "EP09_SCENE_META",
    prefixLower: "ep09",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 10,
    epTag: "EP10",
    featureId: "F11",
    id: "HfEp10VariablesAndBatchTemplates",
    episodeCode: "EP.10",
    episodeTitle: "参数化视频模板：data-composition-variables、语义槽位与批量渲染",
    schemaName: "hfEp10Schema",
    defaultPropsName: "EP10_DEFAULT_PROPS",
    totalFramesName: "EP10_TOTAL_FRAMES",
    sceneMetaName: "EP10_SCENE_META",
    prefixLower: "ep10",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 11,
    epTag: "EP11",
    featureId: "F12",
    id: "HfEp11VsRemotionAndMigration",
    episodeCode: "EP.11",
    episodeTitle: "巅峰对决与无缝迁移：HyperFrames vs Remotion 源码级对比与转换",
    schemaName: "hfEp11Schema",
    defaultPropsName: "EP11_DEFAULT_PROPS",
    totalFramesName: "EP11_TOTAL_FRAMES",
    sceneMetaName: "EP11_SCENE_META",
    prefixLower: "ep11",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
  {
    num: 12,
    epTag: "EP12",
    featureId: "F13",
    id: "HfEp12SdkPlayerAndCloudDeploy",
    episodeCode: "EP.12",
    episodeTitle: "企业级集成与分布式渲染：Headless SDK、Player 与 Lambda/Cloud Run",
    schemaName: "hfEp12Schema",
    defaultPropsName: "EP12_DEFAULT_PROPS",
    totalFramesName: "EP12_TOTAL_FRAMES",
    sceneMetaName: "EP12_SCENE_META",
    prefixLower: "ep12",
    minScenes: 4,
    maxScenes: 6,
    isBaseline: false,
  },
];

export const NEW_EPISODES = EPISODES.filter((ep) => !ep.isBaseline);

export const EPISODE_BY_ID = new Map(EPISODES.map((ep) => [ep.id, ep]));
export const EPISODE_BY_TAG = new Map(EPISODES.map((ep) => [ep.epTag, ep]));

/**
 * Strip optional markdown backticks or Chinese book-title brackets `《》` when comparing
 * plan table titles vs plain runtime titles.
 */
export function normalizeTitle(title) {
  if (typeof title !== "string") return "";
  return title
    .trim()
    .replace(/^《(.+)》$/, "$1")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function episodePaths(ep) {
  return {
    docsDir: path.join(ROOT_DIR, "docs", ep.id),
    scriptMd: path.join(ROOT_DIR, "docs", ep.id, "script.md"),
    storyboardMd: path.join(ROOT_DIR, "docs", ep.id, "storyboard.md"),
    notesMd: path.join(ROOT_DIR, "docs", ep.id, "notes.md"),
    publicDir: path.join(ROOT_DIR, "public", ep.id),
    srcDir: path.join(ROOT_DIR, "src", "videos", ep.id),
    indexTsx: path.join(ROOT_DIR, "src", "videos", ep.id, "index.tsx"),
    captionsTs: path.join(ROOT_DIR, "src", "videos", ep.id, "captions.ts"),
  };
}

/**
 * Authoritative Doc-Truth Oracles for EP02-EP12 (F3-F13), sourced strictly from
 * docs/shared/hyperframes-docs/**, docs/shared/hyperframes-series-plan.md, and
 * spec_miner_e2e_r2_1 + spec_miner_e2e_r2_2 analyses.
 *
 * Each episode defines:
 * - factChecks: >= 7 concrete technical facts (`allOf`: array of RegExp that must all match)
 * - trapChecks: >= 4 anti-hallucination / doc-trap checks:
 *     - require: RegExp[] that MUST match in episode text (ensuring the right rule/caveat is taught)
 *     - forbid: RegExp[] that MUST NOT match un-negated (optional `allowIfNegatedWithin` window)
 */
export const DOC_TRUTH_ORACLES = {
  EP02: {
    factChecks: [
      {
        name: "Home 3 tabs (Make/Reference/Script) & 4-part builder (Hook/Proof/Turn/Call to action)",
        allOf: [/Make/i, /Reference/i, /Script/i, /Hook/i, /Proof/i, /Turn/i, /Call to action/i],
      },
      {
        name: "Framey mascot guide & 6 supported agents (incl. OpenCode, Claude Code, Codex)",
        allOf: [/Framey/i, /Claude\s*Code/i, /Codex/i, /OpenCode/i, /Copilot/i],
      },
      {
        name: "Chat box shortcuts @ / # / / and 91 caption styles",
        allOf: [/91/, /Storyboard/i, /Brand\s*kit/i, /\/clear/i, /\/compact/i],
      },
      {
        name: "Script panel document editing & Pending video edits batching",
        allOf: [/Pending\s+video\s+edits/i, /Fix\s*words/i, /Cut/i],
      },
      {
        name: "Preview interaction tools V / A / D / C & Apple Silicon cutout",
        allOf: [/Select/i, /Draw/i, /Comment/i, /Apple\s*silicon|Cut\s*out/i],
      },
      {
        name: "Brand Kits extraction & local assets/brand-kit copy",
        allOf: [/Brand\s*Kit/i, /assets\/brand-kit|Scan\s*my\s*site/i],
      },
      {
        name: "HeyGen Video 1 (5-60s, Match a look / Copy a movement) & Reference video modes",
        allOf: [/Video\s*1/i, /480p|768p/i, /Show\s*original|Copy\s*editing\s*style|Video\s*brief/i],
      },
      {
        name: "CLI handoff (hyperframes open / catch-up), Local vs Cloud (5/mo, 200 MB), & Share",
        allOf: [/hyperframes\s+open/i, /catch-up/i, /200\s*MB/i, /Share/i],
      },
    ],
    trapChecks: [
      {
        name: "7.8 MB 1080p reference clip limit trap (720p downsizing guidance)",
        require: [/7\.8\s*MB/i, /720p|too\s*large|太大|压缩|降/i],
      },
      {
        name: "OpenCode & GitHub Copilot require Full access (cannot run under Auto mode)",
        require: [/Full\s*access/i, /OpenCode/i],
      },
      {
        name: "Enter steers vs Ctrl+Enter queues while agent is running",
        require: [/Ctrl\+Enter/i, /Enter/],
      },
      {
        name: "catch-up only works from Mac agent session opened via hyperframes open",
        require: [/catch-up/i, /hyperframes\s+open/i],
      },
      {
        name: "Free plan 5 cloud exports/month cap & 200 MB cloud limit (not unlimited cloud)",
        require: [/5\s*次|5\s*cloud/i, /200\s*MB/i],
      },
    ],
  },

  EP03: {
    factChecks: [
      {
        name: "Launch command npx hyperframes preview on default port 3002 & ⌘K handoff",
        allOf: [/hyperframes\s+preview/i, /3002/, /⌘K|Cmd\+K|Command\+K/i],
      },
      {
        name: "Auto-record manual edits as keyframes ON by default warning",
        allOf: [/Auto-record/i, /keyframe/i],
      },
      {
        name: "Keyframe K, grid G, Option/Alt path drag, & Gesture Recording R",
        allOf: [/Gesture\s*Recording|手势录制/i, /Option\/Alt|Alt/i],
      },
      {
        name: "NLE playback (J/K/L, I/O) & timeline tools (V/B/S/N, Linked/Ripple)",
        allOf: [/J\s*[/／]\s*K\s*[/／]\s*L|JKL/i, /Razor|剃刀/i, /Split|分割/i, /Ripple/i],
      },
      {
        name: "Audio FX rack, Voiceover Carve on music track, & +12 dB gain ceiling",
        allOf: [/Audio\s*FX/i, /Voiceover\s*Carve/i, /\+12\s*dB|12\s*dB/i],
      },
      {
        name: "caption-overrides.json & .hyperframes/render-variables.json template handoff",
        allOf: [/caption-overrides\.json/, /\.hyperframes\/render-variables\.json/],
      },
      {
        name: "In-editor Lint/check & MP4/WebM/MOV ProRes export",
        allOf: [/WebM/i, /ProRes|MOV/i, /lint|check/i],
      },
      {
        name: "WebMCP document.modelContext (12 tools, 5 receipt stages)",
        allOf: [/document\.modelContext/, /12/, /studio_look|studio_inspect|studio_frame/],
      },
    ],
    trapChecks: [
      {
        name: "Authoritative WebMCP API is document.modelContext (NOT navigator.modelContext)",
        require: [/document\.modelContext/],
        forbidIfUnnegated: { pattern: /navigator\.modelContext/, windowChars: 240 },
      },
      {
        name: "B (Razor tool) vs S (Split at playhead) distinction",
        require: [/\bB\b/, /\bS\b/, /Razor|剃刀/i, /Split|分割/i],
      },
      {
        name: "Audio FX rack vs visual Effects panel distinction",
        require: [/Audio\s*FX/i, /Effects/i],
      },
      {
        name: "Tracks govern time, Layers (z-index) govern visual stacking order",
        require: [/z-index/i, /Layers|图层/i],
      },
      {
        name: "data-media-start (media elements) vs data-playback-start (nested compositions)",
        require: [/data-media-start/, /data-playback-start/],
      },
    ],
  },

  EP04: {
    factChecks: [
      {
        name: "Workflow router & /hyperframes entry command",
        allOf: [/\/hyperframes/],
      },
      {
        name: "Product Launch capture, ~130 words/min (~45s), Hook -> 3 beats -> CTA, -18dB BGM",
        allOf: [/Product\s*Launch|产品发布/i, /Hook/i, /CTA/i, /-18\s*dB|130/i],
      },
      {
        name: "Faceless Explainer 4 angles & 'one idea per scene'",
        allOf: [/Faceless\s*Explainer|无真人|科普/i, /one\s+idea\s+per\s+scene/i],
      },
      {
        name: "Motion Graphics (<10s, unnarrated) MP4 vs WebM/MOV alpha overlay",
        allOf: [/Motion\s*Graphics|动态图形/i, /WebM/i, /alpha|透明/i],
      },
      {
        name: "Design Tools rule & Figma CLI (tokens before component, figma-tokens.json, 3 PAT scopes)",
        allOf: [/hyperframes\s+figma\s+tokens/i, /hyperframes\s+figma\s+component/i, /figma-tokens\.json|Library\s*content/i],
      },
      {
        name: "Avatar Presenter HeyGen auth + remove-background behind-presenter titles",
        allOf: [/Avatar|数字人/i, /remove-background|HeyGen/i],
      },
      {
        name: "Brand truth frame.md & video-medium scale-up for H.264",
        allOf: [/frame\.md/, /H\.264|1080p|对比度|border|描边/i],
      },
    ],
    trapChecks: [
      {
        name: "Figma invalid PAT returns 403 Invalid token (NOT 401)",
        require: [/403/],
        forbidIfUnnegated: { pattern: /\b401\b/, windowChars: 240 },
      },
      {
        name: "Figma tokens MUST be imported BEFORE component (else data-figma-unresolved & hex matching trap)",
        require: [/tokens/i, /component/i, /data-figma-unresolved|先.*tokens|before\s+component|优先导入/i],
      },
      {
        name: "Approximate timing (~45s / ~60s) vs hard verbatim script duration trap",
        require: [/~45|~60|约\s*45|约\s*60|130/i],
      },
      {
        name: "Alpha WebM only for overlays (not full-frame motion graphic backgrounds)",
        require: [/WebM/i, /overlay|叠加|透明/i],
      },
    ],
  },

  EP05: {
    factChecks: [
      {
        name: "Captions & Recuts: cut pauses BEFORE captioning, Parakeet/Whisper, Rail vs Embed",
        allOf: [/Parakeet/i, /Whisper/i, /Rail/i, /Embed/i],
      },
      {
        name: "Music / Lyric Video: hyperframes beats & audio commands, 'best 20s', calm flow",
        allOf: [/hyperframes\s+beats/i, /hyperframes\s+audio/i],
      },
      {
        name: "Data & Maps: data-chart, apple-money-count, 6 map blocks + nyc-paris-flight + baked geo",
        allOf: [/data-chart/, /apple-money-count/, /us-map/, /world-map/, /nyc-paris-flight/],
      },
      {
        name: "GitHub PR to Video: code-diff, code-morph, code-typing",
        allOf: [/code-diff/, /code-morph/, /code-typing/],
      },
      {
        name: "Interactive Slideshow: /slideshow, fragments/branches/hotspots, hyperframes present port 3004",
        allOf: [/\/slideshow/, /hyperframes\s+present/i, /3004/],
      },
      {
        name: "Custom Video (/general-video) 3 collaboration modes",
        allOf: [/general-video|Build\s*it\s*for\s*me|Co-direct/i],
      },
      {
        name: "Transcript import CLI hyperframes transcribe",
        allOf: [/hyperframes\s+transcribe|beats\//i],
      },
    ],
    trapChecks: [
      {
        name: "CRITICAL: hyperframes render on /slideshow silently renders only slide 1 (use present / snapshot)",
        require: [/hyperframes\s+render/i, /present|snapshot/i, /第一页|首张|slide\s*1|first\s*slide|截断|静默/i],
      },
      {
        name: "Cut pauses BEFORE captioning (prevent caption drift)",
        require: [/剪|删|cut|剔除/i, /字幕|caption/i],
      },
      {
        name: "Embed behind ONE speaker only (never multi-subject) & bright-scene washout",
        require: [/Embed/i, /单人|单主体|single-subject|多主体|multi-subject/i],
      },
      {
        name: "Baked geometry (no runtime geo CDN fetches) & avoid $0 odometer start",
        require: [/烘焙|baked|内嵌|本地/i],
      },
    ],
  },

  EP06: {
    factChecks: [
      {
        name: "6-Part Macro Skeleton ([route], [spec], [beats], [copy], [technique], [negatives])",
        allOf: [/\[route\]|route/i, /\[spec\]|spec/i, /\[beats\]|beats/i, /\[copy\]|copy/i, /\[technique\]|technique/i, /\[negatives\]|negatives/i],
      },
      {
        name: "5-Slot Micro Beat & 3-Level Specification Dial",
        allOf: [/\[element\]|element/i, /\[motion\]|motion/i, /\[layout\]|layout/i, /\[style\]|style/i, /\[timing\]|timing/i, /Three\.js\s+via\s+the\s+adapter/i],
      },
      {
        name: "All 7 Smooth Motion Laws",
        allOf: [/Move\s+only\s+what\s+is\s+live/i, /Overlap/i, /One\s+idea\s+per\s+move/i, /Weight/i],
      },
      {
        name: "Motivated Shader vs CSS transitions & 6 Ease Words (power2.out..sine.inOut)",
        allOf: [/power2\.out/, /power4\.out/, /back\.out/, /elastic\.out/, /expo\.out/, /sine\.inOut/],
      },
      {
        name: "Convergent Iteration (1 variable, absolute targets, Freeze clause) & ~75-90% ceiling",
        allOf: [/75|80|90/, /Freeze|冻结/i],
      },
      {
        name: "6 NLE Edit Verbs (data-start, data-track-index, data-duration, data-media-start, data-volume)",
        allOf: [/data-start/, /data-duration/, /data-media-start/, /data-volume/],
      },
      {
        name: "62s Capstone ('The Timeline') + live doc counts (50+ blocks, 19 skills, 7 adapters)",
        allOf: [/62/, /50\+/, /19/, /7/],
      },
    ],
    trapChecks: [
      {
        name: "Stop-motion specifies 'two frames' (NOT '0.067 seconds')",
        require: [/two\s*frames|2\s*帧|两帧/i],
        forbidIfUnnegated: { pattern: /0\.067/, windowChars: 240 },
      },
      {
        name: "'no narration' vs 'no audio' distinction",
        require: [/no\s+narration/i, /no\s+audio/i],
      },
      {
        name: "Never apply overshoot (back.out) to text or numbers/counters",
        require: [/back\.out|过冲|overshoot/i, /数字|文字|计数器|text|counter|number/i],
      },
      {
        name: "Must NOT fabricate stale 450+ block count in EP06 (authoritative count is 50+)",
        require: [/50\+/],
        forbid: [/450\+/],
      },
    ],
  },

  EP07: {
    factChecks: [
      {
        name: "Voice cascade (HeyGen -> ElevenLabs -> Kokoro 54 voices) + Gemini TTS",
        allOf: [/HeyGen/i, /ElevenLabs/i, /Kokoro/i, /54/, /Gemini/i],
      },
      {
        name: "10,000+ music library, 19 bundled SFX, Openverse credits",
        allOf: [/10,?000|一万|万首/, /19/, /Openverse/i],
      },
      {
        name: "4 audio HTML attrs (data-fx-chain, data-automation, data-fx-carve, data-audio-group) & <hf-audio-group>",
        allOf: [/data-fx-chain/, /data-automation/, /data-fx-carve/, /data-audio-group/, /hf-audio-group/],
      },
      {
        name: "+12 dB gain ceiling & -3 dBTP truepeak master target",
        allOf: [/\+12\s*dB|12\s*dB/i, /-3\s*dBTP|truepeak/i],
      },
      {
        name: "16 audio effects, 22 presets, 4 audio lint rules, & non-automatable worklet limits",
        allOf: [/22/, /audio_attribute_unreadable|audio_carve_ungrouped_sources|highpass|compressor/],
      },
      {
        name: "remove-background (u2net_human_seg, --background-output inverse alpha plate)",
        allOf: [/remove-background/, /u2net_human_seg/, /--background-output/],
      },
      {
        name: "91 caption styles catalog, code animation blocks, & Speed Ramps (target: rate)",
        allOf: [/91/, /caption-/, /code-typing|code-diff|code-morph/, /rate/],
      },
    ],
    trapChecks: [
      {
        name: "data-fx-carve belongs on music bed (never voice track) & JSON attrs must be double-quoted",
        require: [/data-fx-carve/, /&quot;|双引号|double-quot/i],
      },
      {
        name: "Non-automatable worklet effects (compressor/limiter/truepeak/gate/bitcrush/pitchshift)",
        require: [/compressor|limiter|gate|bitcrush|pitchshift/i, /自动化|automate|静默|无效|不支持/i],
      },
      {
        name: "Group clock (t=0 at composition start) vs clip clock (t=0 at data-start) & backward-hold trap",
        require: [/hf-audio-group/, /t:\s*0|t=0|时钟|clock|回溯|backward/i],
      },
      {
        name: "u2net_human_seg fails on non-human products/objects & animating wrapper div",
        require: [/u2net_human_seg/, /人像|人物|human|物体|产品|div/i],
      },
    ],
  },

  EP08: {
    factChecks: [
      {
        name: "Fixed-order Color Grading Pipeline (adjust -> wheels -> curves -> hueCurves -> secondaries -> lut -> details -> effects)",
        allOf: [/data-color-grading/, /adjust/, /wheels/, /curves/, /hueCurves/, /secondaries/, /lut/, /details/, /effects/],
      },
      {
        name: "<hf-color-group> & 9 tweenable --hf-color-grading-* CSS custom properties",
        allOf: [/hf-color-group/, /--hf-color-grading-/],
      },
      {
        name: "CLI media-treatment, grade-compare (up to 16 looks), 18 effects, 3 analogue failure modes",
        allOf: [/media-treatment/, /grade-compare/, /Tape|CRT|Tube/i],
      },
      {
        name: "data-vfx-chain WebGL2, --vfx-<id>-<key>, capture modes (none/self/backdrop)",
        allOf: [/data-vfx-chain/, /--vfx-/, /fractal-noise|wave-warp|displacement-map/],
      },
      {
        name: "VFX canvas layoutsubtree markup (.hf-vfx-src, .hf-vfx-in, .hf-vfx-out) & drawElementImage",
        allOf: [/layoutsubtree/, /hf-vfx-src/, /drawElementImage/],
      },
      {
        name: "Motion Blur (data-motion-blur, shutter/phase/samples/tier, filter vs capture, --page-motion-blur off)",
        allOf: [/data-motion-blur/, /capture/i, /filter/i, /--page-motion-blur/],
      },
      {
        name: "Three.js via the adapter & @hyperframes/shader-transitions (14 shaders, page-side compositing)",
        allOf: [/Three\.js\s+via\s+the\s+adapter/i, /@hyperframes\/shader-transitions/, /14|SHADER_NAMES/],
      },
    ],
    trapChecks: [
      {
        name: "data-color-grading only applies to media/hf-color-group (not text/div) & requires named sections",
        require: [/data-color-grading/, /<img>|<video>|<canvas>|hf-color-group|color_grading_non_media/i],
      },
      {
        name: "--hf-color-grading-intensity does NOT scale details or effects",
        require: [/--hf-color-grading-intensity|intensity/i, /details|effects/i],
      },
      {
        name: ".hf-vfx-in requires explicit pixel width/height & single direct child (avoid 0x0 silent empty)",
        require: [/hf-vfx-in/, /width|height|尺寸|宽高/i],
      },
      {
        name: "liquid-glass-notification requires WebGPU (silent bail) & VFX capture + motion-blur capture conflict",
        require: [/WebGPU|liquid-glass|motion-blur/i],
      },
    ],
  },

  EP09: {
    factChecks: [
      {
        name: "Root HTML contract (data-composition-id, data-start, data-width, data-height, data-duration, data-no-timeline)",
        allOf: [/data-composition-id/, /data-start/, /data-width/, /data-height/, /data-duration/, /data-no-timeline/],
      },
      {
        name: "Sub-compositions (data-composition-src, <template>, assetUrl())",
        allOf: [/data-composition-src/, /<template>/, /assetUrl/],
      },
      {
        name: "Relative data-start expressions & z-index + isolation: isolate",
        allOf: [/data-track-index/, /z-index/, /isolation:\s*isolate/],
      },
      {
        name: "Paused GSAP timeline registered on window.__timelines",
        allOf: [/gsap\.timeline/, /paused:\s*true/, /window\.__timelines/],
      },
      {
        name: "FrameAdapter, createGSAPFrameAdapter, registerFrameSource, & createFilmBridge",
        allOf: [/registerFrameSource/, /FrameAdapter|createGSAPFrameAdapter/i],
      },
      {
        name: "3 Determinism Laws (no Date.now/rAF, no Math.random/gsap random, no mid-render fetch)",
        allOf: [/Date\.now|requestAnimationFrame/, /Math\.random/],
      },
      {
        name: "Quality gates: doctor, @hyperframes/lint, & hyperframes check (8fps craft / WCAG / .motion.json)",
        allOf: [/@hyperframes\/lint/, /hyperframes\s+doctor/i, /hyperframes\s+check/i, /motion\.json|WCAG|8\s*fps/i],
      },
    ],
    trapChecks: [
      {
        name: "Tracks are not layers (data-track-index != z-index) & deprecated data-end/data-layer lint errors",
        require: [/data-track-index/, /z-index/, /data-end|data-layer/],
      },
      {
        name: "Missing data-no-timeline stalls renders for 45 seconds (player-ready-timeout)",
        require: [/data-no-timeline/, /45/],
      },
      {
        name: "Self-closing <video /> / <hf-audio-group /> swallows siblings & data-playback-start vs data-media-start",
        require: [/data-media-start/, /data-playback-start/],
      },
      {
        name: "document.fonts.load before window.__timelines registration & no root <template> / CSS zoom",
        require: [/window\.__timelines/, /fonts|template|zoom/i],
      },
    ],
  },

  EP10: {
    factChecks: [
      {
        name: "data-composition-variables & all 7 variable types",
        allOf: [/data-composition-variables/, /string/, /number/, /color/, /boolean/, /enum/, /font/, /image/],
      },
      {
        name: "Semantic metadata role & 8 portrays slots (subject_name, subject_logo, etc.)",
        allOf: [/portrays/, /subject_name/, /subject_logo/, /competitor_name|host_identity/],
      },
      {
        name: "Zero-JS bindings (data-var-text, data-var-src, var(--id)) vs getVariables() & data-variable-values",
        allOf: [/data-var-text/, /data-var-src/, /getVariables/, /data-variable-values/],
      },
      {
        name: "CLI overrides (--variables, --variables-file, --strict-variables)",
        allOf: [/--variables/, /--variables-file/, /--strict-variables/],
      },
      {
        name: "Local --batch path sandbox & --batch-concurrency",
        allOf: [/--batch/, /\{[a-zA-Z0-9_]+\}/, /沙箱|sandbox|越界|\.\.\//i],
      },
      {
        name: "Lambda render-batch JSONL & 256 KiB Step Functions limit",
        allOf: [/render-batch|jsonl/i, /256\s*KiB|256KB|256\s*KB/i],
      },
      {
        name: "CSS :root precedence trap, differential reskin testing, & 4 compile-time immutables",
        allOf: [/:root/, /data-width|data-height/, /data-duration/, /fps/i],
      },
    ],
    trapChecks: [
      {
        name: "Compile-time immutables (data-width, data-height, root data-duration, fps) cannot be variables",
        require: [/data-duration/, /不能|无法|不可|cannot|immutable|编译时/i],
      },
      {
        name: "Authored CSS :root { --id } shadows declared variable default",
        require: [/:root/, /覆盖|优先|shadow|override/i],
      },
      {
        name: "data-var-src only works on media elements & warns without fallback src (no data: video URIs)",
        require: [/data-var-src/, /fallback|占位|media_variable_src_no_fallback|<img>|<video>/i],
      },
      {
        name: "Only 7 variable types exist (video/audio URLs use string, not invented 'video'/'audio' types)",
        require: [/string/, /7|七/],
      },
    ],
  },

  EP11: {
    factChecks: [
      {
        name: "Inkwell 15s benchmark (Remotion 10 TS / 1037 lines / ~950MB vs HyperFrames 4 HTML / 822 lines / 0 deps)",
        allOf: [/1037|1,037/, /950/, /822/, /10/, /4/],
      },
      {
        name: "3-second Title Card side-by-side (useCurrentFrame + interpolate vs data-start + paused GSAP)",
        allOf: [/useCurrentFrame/, /interpolate/, /data-start/, /gsap\.timeline/],
      },
      {
        name: "License & runtime matrix (Remotion <=3 free vs Apache 2.0 free commercial)",
        allOf: [/Apache\s*2\.0/i, /React/i],
      },
      {
        name: "remotion-to-hyperframes skill install & translation contract",
        allOf: [/remotion-to-hyperframes/, /TRANSLATION_NOTES\.md|<Sequence>/],
      },
      {
        name: "Honest Refusal (useState, useReducer, useEffect, UI kits like MUI/shadcn/Chakra)",
        allOf: [/useState/, /useEffect/, /MUI|shadcn|Chakra|Radix/i],
      },
      {
        name: "Mandatory frame-by-frame SSIM validation via hyperframes diff",
        allOf: [/SSIM/i, /hyperframes\s+diff/i],
      },
      {
        name: "Lambda migration mapping (renderMediaOnLambda -> renderToLambda / hyperframes lambda)",
        allOf: [/hyperframes\s+lambda|renderToLambda/i, /BROWSER_GPU_NOT_SOFTWARE|FONT_FETCH_FAILED|256/],
      },
    ],
    trapChecks: [
      {
        name: "Refuses state-driven hooks (useState/useEffect) & React UI kits rather than silently approximating",
        require: [/useState/, /拒绝|refuse/i],
      },
      {
        name: "One-way migration requiring real Remotion source (no reverse export or non-Remotion input)",
        require: [/单向|one-way|源码|source/i],
      },
      {
        name: "Never skip SSIM diff validation & never omit paused: true / window.__timelines",
        require: [/SSIM/i, /paused:\s*true/, /window\.__timelines/],
      },
      {
        name: "Objective comparison: credits Remotion strengths & notes Lambda limits (no HDR / hardware GPU / >256KiB)",
        require: [/Remotion/i, /Lambda/i],
      },
    ],
  },

  EP12: {
    factChecks: [
      {
        name: "Smallest Integration Surface Law & 13-package stack",
        allOf: [/@hyperframes\/sdk/, /@hyperframes\/player/, /@hyperframes\/producer|@hyperframes\/engine/, /@hyperframes\/core|@hyperframes\/parsers/],
      },
      {
        name: "@hyperframes/sdk openComposition, 3 modes (OverrideSet), scopedId, batch(), dispatch(), can()",
        allOf: [/openComposition/, /OverrideSet|overrides/i, /scopedId|hf-.*\/hf-/i, /batch\(/, /dispatch\(/],
      },
      {
        name: "ORIGIN_APPLY_PATCHES loop guard, @hyperframes/sdk/adapters/fs, & resolveElementAffordances",
        allOf: [/ORIGIN_APPLY_PATCHES/, /@hyperframes\/sdk\/adapters\/fs/, /createFsAdapter/, /resolveElementAffordances/],
      },
      {
        name: "<hyperframes-player> Web Component Shadow DOM & postMessage API",
        allOf: [/<hyperframes-player>/, /Shadow\s*DOM|postMessage/i],
      },
      {
        name: "HeyGen Cloud (200 MB), Hosting templates, AWS Lambda Plan v2 (250 MiB, 15 min, PRODUCER_RESTRICT_PAGE_NETWORK), & GCP Cloud Run",
        allOf: [/cloud\s+render/i, /200\s*MB/i, /Plan\s*v2|Step\s*Functions/i, /Cloud\s*Run/i, /PRODUCER_RESTRICT_PAGE_NETWORK/],
      },
      {
        name: "4K integer scaling, 10-bit H.265 HDR, 4:4:4 (--chroma-subsampling 444), & segmented --resume",
        allOf: [/4[kK]/, /yuv420p10le|BT\.2020|PQ|HLG|HDR/i, /444|4:4:4/, /--resume/],
      },
      {
        name: "Catalog semantic search (bge-small-en-v1.5 / 384-dim) & open-source contributing",
        allOf: [/catalog/i, /384|bge-small/i, /contributing|贡献/i],
      },
    ],
    trapChecks: [
      {
        name: "createFsAdapter MUST come from @hyperframes/sdk/adapters/fs (not main barrel) & resolveElementAffordances is browser-only",
        require: [/@hyperframes\/sdk\/adapters\/fs/, /resolveElementAffordances/],
      },
      {
        name: "ORIGIN_APPLY_PATCHES check prevents infinite undo loop & scopedId required for nested elements",
        require: [/ORIGIN_APPLY_PATCHES/, /scopedId|hf-/i],
      },
      {
        name: "Non-integer 1080p->1440p upscaling refused & 4K + HDR / 4:4:4 + GPU mutually exclusive",
        require: [/1080p|1440p|整数倍|integer/i, /4K/i, /HDR/i],
      },
      {
        name: "hyperframes share excludes source unless --include-source & preview isProvablyEmptyAt vs elementsFromPoint",
        require: [/--include-source|isProvablyEmptyAt|canApplyManualOffset/],
      },
    ],
  },
};
