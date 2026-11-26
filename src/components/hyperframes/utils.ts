import { FONT_MONO, FONT_SANS, HF_COLORS } from "./tokens";

export type HfSemanticTone =
  | "emerald"
  | "cyan"
  | "amber"
  | "violet"
  | "danger"
  | "neutral";

export interface HfTonePalette {
  main: string;
  bright: string;
  bgTint: string;
  borderTint: string;
}

const CJK_FALLBACK_STACK = FONT_SANS.replace(/,\s*sans-serif\s*$/i, "").trim();

/**
 * Monospace stack that keeps JetBrains Mono primary for ASCII while inserting
 * Noto Sans SC + CJK system fallbacks before generic `monospace` so embedded
 * Chinese characters or symbols never render as tofu boxes (tokens.ts stays untouched).
 */
export const FONT_MONO_CJK = /,\s*monospace\s*$/i.test(FONT_MONO)
  ? FONT_MONO.replace(/,\s*monospace\s*$/i, `, ${CJK_FALLBACK_STACK}, monospace`)
  : `${FONT_MONO}, ${CJK_FALLBACK_STACK}, monospace`;

function formatAlpha(alpha: number): string {
  const clamped = Math.max(0, Math.min(1, Number.isFinite(alpha) ? alpha : 1));
  return String(Number(clamped.toFixed(4)));
}

/**
 * Converts #RGB, #RGBA, #RRGGBB, #RRGGBBAA, rgb(...), or rgba(...) into rgba(...),
 * falling back to CSS color-mix(...) for any other valid CSS color string.
 */
export function hexToRgba(color: string, alpha: number): string {
  const trimmed = color.trim();
  const clampedAlpha = Math.max(
    0,
    Math.min(1, Number.isFinite(alpha) ? alpha : 1),
  );

  // #RGB or #RGBA
  const shortHexMatch = /^#([0-9a-f]{3,4})$/i.exec(trimmed);
  if (shortHexMatch) {
    const hex = shortHexMatch[1];
    const r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    const g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    const b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    const existingAlpha =
      hex.length === 4 ? parseInt(hex.charAt(3) + hex.charAt(3), 16) / 255 : 1;
    return `rgba(${r}, ${g}, ${b}, ${formatAlpha(existingAlpha * clampedAlpha)})`;
  }

  // #RRGGBB or #RRGGBBAA
  const fullHexMatch = /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.exec(trimmed);
  if (fullHexMatch) {
    const hex = fullHexMatch[1];
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const existingAlpha =
      hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
    return `rgba(${r}, ${g}, ${b}, ${formatAlpha(existingAlpha * clampedAlpha)})`;
  }

  // rgb(r, g, b) / rgba(r, g, b, a) (comma-separated or space-separated CSS Color 4)
  const rgbMatch =
    /^rgba?\(\s*([0-9.]+)\s*[,\s]\s*([0-9.]+)\s*[,\s]\s*([0-9.]+)(?:\s*[,/]\s*([0-9.]+%?))?\s*\)$/i.exec(
      trimmed,
    );
  if (rgbMatch) {
    const r = Math.round(Number(rgbMatch[1]));
    const g = Math.round(Number(rgbMatch[2]));
    const b = Math.round(Number(rgbMatch[3]));
    let existingAlpha = 1;
    if (rgbMatch[4] !== undefined) {
      const rawA = rgbMatch[4];
      existingAlpha =
        rawA.charAt(rawA.length - 1) === "%"
          ? Number(rawA.slice(0, -1)) / 100
          : Number(rawA);
      if (!Number.isFinite(existingAlpha)) {
        existingAlpha = 1;
      }
    }
    return `rgba(${r}, ${g}, ${b}, ${formatAlpha(existingAlpha * clampedAlpha)})`;
  }

  return `color-mix(in srgb, ${trimmed} ${Math.round(clampedAlpha * 100)}%, transparent)`;
}

export function padZero(num: number, len: number): string {
  const intVal = Math.floor(Math.abs(num));
  const s = String(intVal);
  const sign = num < 0 ? "-" : "";
  let zeros = "";
  while (zeros.length + s.length < len) {
    zeros += "0";
  }
  return sign + zeros + s;
}

export function padTwo(n: number): string {
  return padZero(n, 2);
}

const TONE_MAP: Record<HfSemanticTone, HfTonePalette> = {
  emerald: {
    main: HF_COLORS.brandPrimary,
    bright: HF_COLORS.brandNeon,
    bgTint: hexToRgba(HF_COLORS.brandPrimary, 0.14),
    borderTint: hexToRgba(HF_COLORS.brandNeon, 0.55),
  },
  cyan: {
    main: HF_COLORS.accentCyan,
    bright: HF_COLORS.accentSky,
    bgTint: hexToRgba(HF_COLORS.accentCyan, 0.14),
    borderTint: hexToRgba(HF_COLORS.accentSky, 0.55),
  },
  amber: {
    main: HF_COLORS.accentAmber,
    bright: HF_COLORS.accentYellow,
    bgTint: hexToRgba(HF_COLORS.accentAmber, 0.14),
    borderTint: hexToRgba(HF_COLORS.accentYellow, 0.55),
  },
  violet: {
    main: HF_COLORS.accentViolet,
    bright: HF_COLORS.accentPurple,
    bgTint: hexToRgba(HF_COLORS.accentViolet, 0.15),
    borderTint: hexToRgba(HF_COLORS.accentPurple, 0.55),
  },
  danger: {
    main: HF_COLORS.accentDanger,
    bright: HF_COLORS.accentRose,
    bgTint: hexToRgba(HF_COLORS.accentDanger, 0.14),
    borderTint: hexToRgba(HF_COLORS.accentRose, 0.55),
  },
  neutral: {
    main: HF_COLORS.textSecondary,
    bright: HF_COLORS.textPrimary,
    bgTint: "rgba(255, 255, 255, 0.06)",
    borderTint: HF_COLORS.borderSubtle,
  },
};

export function resolveToneColors(
  tone: HfSemanticTone = "emerald",
  customColor?: string,
): HfTonePalette {
  if (customColor) {
    const lower = customColor.toLowerCase();
    if (lower === HF_COLORS.brandPrimary.toLowerCase()) {
      return TONE_MAP.emerald;
    }
    if (lower === HF_COLORS.accentCyan.toLowerCase()) {
      return TONE_MAP.cyan;
    }
    if (lower === HF_COLORS.accentAmber.toLowerCase()) {
      return TONE_MAP.amber;
    }
    if (lower === HF_COLORS.accentViolet.toLowerCase()) {
      return TONE_MAP.violet;
    }
    if (lower === HF_COLORS.accentDanger.toLowerCase()) {
      return TONE_MAP.danger;
    }
    return {
      main: customColor,
      bright: customColor,
      bgTint: hexToRgba(customColor, 0.14),
      borderTint: hexToRgba(customColor, 0.55),
    };
  }
  return TONE_MAP[tone];
}

export function isWindowActive(
  voiceMs: number | undefined,
  activeWindow?: [number, number],
  explicitActive?: boolean,
): boolean {
  if (explicitActive !== undefined) {
    return explicitActive;
  }
  if (voiceMs === undefined || !activeWindow) {
    return false;
  }
  return voiceMs >= activeWindow[0] && voiceMs < activeWindow[1];
}
