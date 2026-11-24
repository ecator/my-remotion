import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";
import { loadFont as loadNotoSansSC } from "@remotion/google-fonts/NotoSansSC";

const { fontFamily: notoSansFamily } = loadNotoSansSC("normal", {
  weights: ["400", "500", "700", "900"],
  ignoreTooManyRequestsWarning: true,
});

const { fontFamily: jetBrainsMonoFamily } = loadJetBrainsMono("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const FONT_SANS = `${notoSansFamily}, "PingFang SC", "Microsoft YaHei", sans-serif`;
export const FONT_MONO = `${jetBrainsMonoFamily}, "Cascadia Code", "Consolas", monospace`;

export const HF_COLORS = {
  bgCanvas: "#07090E",
  bgSurface: "#0F141F",
  bgElevated: "#161D2E",
  bgGlass: "rgba(15, 20, 31, 0.86)",
  borderSubtle: "rgba(255, 255, 255, 0.13)",
  borderActive: "rgba(16, 185, 129, 0.58)",
  brandPrimary: "#10B981",
  brandNeon: "#34D399",
  accentCyan: "#06B6D4",
  accentSky: "#38BDF8",
  accentAmber: "#F59E0B",
  accentYellow: "#FBBF24",
  accentViolet: "#8B5CF6",
  accentPurple: "#A78BFA",
  accentDanger: "#F43F5E",
  accentRose: "#FB7185",
  textPrimary: "#F8FAFC",
  textSecondary: "#CBD5E1",
  textMuted: "#64748B",
} as const;

export interface HfChapterMeta {
  index: number;
  shortTitle: string;
  breadcrumb: string;
  moduleTag: string;
  fromFrame: number;
  durationInFrames: number;
}

/**
 * 1920x1080 global layout coordinates (in px):
 * - Top HUD bar: Y = 22..74 (top: 22, height: 52)
 * - Main Stage safe area: Y = 88..966 (top: 88, bottom: 114, height: 878)
 * - Floating Caption bar: sits in the dedicated Y = 976..1036 band (bottom: 44 from 1080p canvas bottom)
 * - Bottom Chapter Progress bar: Y = 1046..1080 (bottom: 0, height: 34)
 */
export const HF_LAYOUT = {
  stageTop: 88,
  stageLeft: 72,
  stageRight: 72,
  stageBottom: 114,
  progressBarHeight: 34,
  captionBottomFromCanvas: 44,
} as const;

