import type { Caption } from "@remotion/captions";
import React, { useMemo } from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_SANS, HF_COLORS, HF_LAYOUT } from "./tokens";
import { FONT_MONO_CJK, hexToRgba } from "./utils";

interface CaptionPage {
  tokens: Caption[];
  startMs: number;
  endMs: number;
}

export interface CaptionSegment {
  text: string;
  isCode: boolean;
}

export interface HfCaptionBarProps {
  captions: Caption[];
  /** Frame offset within the current Sequence where the voiceover audio starts */
  voiceStartFrame: number;
  brandColor?: string;
  accentColor?: string;
  extraCodeTerms?: RegExp;
}

export const CODE_TERM_REGEX = new RegExp(
  [
    // 1. URLs (first so slashes inside URLs are consumed as one URL)
    String.raw`https?:\/\/[^\s"'<>]+`,

    // 2. HTML data-* attributes (explicit documented attributes + known prefixes; excludes prose like data-driven/data-loss/data-and-maps)
    String.raw`\bdata-(?:composition-(?:id|src|variables|file)|variable-values|var-(?:text|src)|start|duration|end|width|height|fps|no-timeline|timeline-role|track-(?:index|kind)|media-start|playback-(?:start|rate)|has-audio|volume|fade-(?:in|out)|fx-(?:chain|carve)|automation|audio-group|color-(?:grading|group)|vfx-chain|motion-blur(?:-(?:tier|phase|shutter|samples|events))?|figma-(?:id|unresolved)|hf-(?:id|root|media-start-basis)|label|hidden|name|requires-webgpu|gpu-mode|layout-(?:allow-[a-z-]+|ignore)|chart)\b`,
    String.raw`\bdata-(?:hf|var|motion-blur|color|fx|vfx|audio|composition|playback|media|track|layout|figma)-[a-z0-9-]+\b`,

    // 3. Custom elements, special DOM attributes & runtime CSS classes
    String.raw`\b(?:hf-audio-group|hf-color-group|hyperframes-player|hyperframes-slideshow)\b`,
    String.raw`\.hf-[a-z0-9-]+\b`,
    String.raw`class="clip"`,
    String.raw`\blayoutsubtree\b`,

    // 4. CSS custom properties, properties & functions (ES2015 \B boundary)
    String.raw`\B--vfx-[a-zA-Z0-9<>_-]+`,
    String.raw`\B--hf-[a-z0-9-]+`,
    String.raw`var\(--[a-zA-Z0-9_-]+(?:\s*,[^)]+)?\)`,
    String.raw`\bz-index\b|isolation:\s*isolate|\b(?:backdrop-filter|mix-blend-mode|clip-path|devicePixelRatio|deviceScaleFactor|yuva420p|alpha_mode|hvc1)\b`,

    // 5. CLI commands, flags & keyboard shortcuts (bounded subcommands — never greedy over prose words!)
    String.raw`\bnpx(?:\s+--yes)?\s+hyperframes(?:\s+(?:init|add|catalog|capture|transcribe|models|tts|remove-background|media-treatment|grade-compare|media-use|beats|audio|normalize-audio|preview|present|play|publish|open|catch-up|share|lint|check|snapshot|keyframes|compare|reverse|measure|diff|timeline|history|render|benchmark|doctor|clean|info|compositions|update|upgrade|browser|docs|feedback|telemetry|skills|usage|billing|templates|figma|events|cloud|cloudrun|lambda|auth|validate|inspect|layout|help)(?:\s+(?:deploy|render|render-batch|progress|destroy|sites|create|policies|validate|user|role|asset|tokens|component|add|check|update|login|logout|refresh|ensure|list))?)?\b`,
    String.raw`\bhyperframes\s+(?:init|add|catalog|capture|transcribe|models|tts|remove-background|media-treatment|grade-compare|media-use|beats|audio|normalize-audio|preview|present|play|publish|open|catch-up|share|lint|check|snapshot|keyframes|compare|reverse|measure|diff|timeline|history|render|benchmark|doctor|clean|info|compositions|update|upgrade|browser|docs|feedback|telemetry|skills|usage|billing|templates|figma|events|cloud|cloudrun|lambda|auth|validate|inspect|layout|help)(?:\s+(?:deploy|render|render-batch|progress|destroy|sites|create|policies|validate|user|role|asset|tokens|component|add|check|update|login|logout|refresh|ensure|list))?\b`,
    String.raw`\bnpx\s+(?:--yes\s+)?(?:skills(?:\s+(?:add|check|update|list))?(?:\s+heygen-com\/hyperframes)?|@hyperframes\/[a-z0-9-]+(?:\/[a-z0-9-]+)*|remotion(?:\s+[a-z0-9-]+)?)\b`,
    String.raw`\bpnpm(?:\s+(?:exec|add|install|lint|dev|build))?(?:\s+remotion(?:\s+(?:still|compositions|render|add|ffprobe))?)?\b`,
    String.raw`\bnpm\s+install(?:\s+-g)?(?:\s+(?:@hyperframes\/[a-z0-9-]+|hyperframes))?\b`,
    String.raw`\bclaude\s+plugin(?:\s+(?:marketplace\s+add|install|update)(?:\s+heygen-com\/hyperframes|\s+hyperframes@hyperframes)?)?\b`,
    String.raw`\bheygen\s+auth\s+(?:login|logout|status)\b`,
    String.raw`\buv\s+run\b`,
    String.raw`\B--[a-z][a-z0-9]*(?:-[a-z0-9]+)*\b`,
    String.raw`⌘(?:\+?[A-Za-z0-9]+)\b`,
    String.raw`\b[A-Z](?:\/[A-Z]){2,}\b`,
    String.raw`\bI\/O\b`,

    // 6. Slash commands, Codex $hyperframes & Prompt anatomy [slot] tags (ES2015 pure \B boundary)
    String.raw`\B\/(?:hyperframes(?:-[a-z0-9-]+)?|slideshow|media-use|figma|remotion-to-hyperframes|reverse-any-video|style-sampling|clear|compact)(?![a-z0-9-])`,
    String.raw`\B\$hyperframes\b`,
    String.raw`\[(?:route|spec|beats|copy|technique|negatives|element|motion|layout|style|timing)\]`,

    // 7. Packages (@hyperframes/* & @sparticuz/chromium)
    String.raw`@hyperframes\/[a-z0-9-]+(?:\/[a-z0-9-]+)*`,
    String.raw`@sparticuz\/chromium\b`,

    // 8. Files, config filenames & artifact directories (before generic SCREAMING_SNAKE_CASE so TRANSLATION_NOTES.md matches whole)
    String.raw`\b(?:BRIEF|STORYBOARD|SCRIPT|CREDITS|TRANSLATION_NOTES)\.md\b`,
    String.raw`\b(?:frame\.md|index\.html|caption-overrides\.json|figma-tokens\.json|rows\.json|hyperframes\.json|hyperframes-deploy\.json|package\.json|carve\.mjs)\b`,
    String.raw`\.hyperframes\/[a-z0-9_.-]+\b`,
    String.raw`\.(?:hf-versions|hf-segments|motion\.json|hyperframes-studio)\b`,
    String.raw`\b(?:compositions|assets|renders)\/`,
    String.raw`\B\.(?:cube|webm|mov|mp4|srt|vtt|jsonl|woff2)\b`,

    // 9. JS globals, runtime/SDK methods, types, constants, WebMCP tools, portrays & lint rules
    String.raw`window\.[a-zA-Z0-9_$]+(?:\.[a-zA-Z0-9_$]+)*(?:\(\))?`,
    String.raw`\b__timelines\b`,
    String.raw`\b(?:document|navigator)\.modelContext\b`,
    String.raw`\b(?:openComposition|createFsAdapter|createMemoryAdapter|createHeadlessAdapter|createIframePreviewAdapter|resolveElementAffordances|resolveEditingAffordances|resolveNearestHfElement|resolveScoped|scopedId|findById|bareId|escapeHfId|isNewHostBoundary|buildDocument|buildRoots|flatElements|createHistory|createPersistQueue|isProvablyEmptyAt|applyDraft|commitPreview|cancelPreview|attachSync|elementAtPoint|applyPatches|getOverrides|setText|setStyle|setTiming|setVariableValue|declareVariable|addElement|removeElement|injectFault|registerFrameSource|createGSAPFrameAdapter|createFilmBridge|assetUrl|getVariables|drawElementImage|sourceTimeAt|supportsHtmlInCanvas|lintComposition|lintProject|deploySite|renderToLambda|renderToCloudRun|getRenderProgress|installPageSideCompositor)\b(?:\(\))?`,
    String.raw`\bcomp\.(?:batch|can|find|dispatch|flush|serialize|getElement|getElements|getSelection|on)\b(?:\(\))?`,
    String.raw`\b(?:batch|can|find|dispatch|flush|serialize)\(\)`,
    String.raw`\b(?:useCurrentFrame|useVideoConfig|interpolate|useState|useEffect|useLayoutEffect|requestAnimationFrame|Date\.now|Math\.random|crypto\.randomUUID|gsap\.timeline)\b(?:\(\))?`,
    String.raw`\b(?:OverrideSet|PersistAdapter|PreviewAdapter|FrameAdapter|FrameAdapterContext|EditingAffordances|DomEditCapabilities|AffordanceContext|HyperFramesElement|EditOp|CanResult|FontValue|ImageValue|JsonPatchOp|PatchEvent|UnsupportedOpError)\b`,
    String.raw`\b[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+\b`,
    String.raw`\bSHADER_NAMES\b`,
    String.raw`\bstudio_[a-z_]+\b`,
    String.raw`\blibrary_content:read\b`,
    String.raw`"?target"?:\s*"rate"`,
    String.raw`\bfx\.(?:preset|[a-z0-9_-]+)\.[a-z0-9_.-]+\b`,
    String.raw`\b(?:subject_name|subject_domain|subject_tagline|subject_logo|recommended_position|competitor_name|authority_badge|host_identity)\b`,
    String.raw`\b(?:audio_attribute_unreadable|audio_carve_ungrouped_sources|audio_volume_double_automation|audio_volume_tween_overrides_gain|audio_lowered|audio_processing_failed|gsap_non_transform_motion|gsap_animates_clip_element|gsap_infinite_repeat|missing_gsap_script|video_missing_muted|set_inside_tween|crypto_random_uuid|non_deterministic_code|requestanimationframe_in_composition|font_family_without_font_face|text_over_face|canvas_covered|line_unread|dead_stretch|text_below_floor|first_frame_empty|film_silent|sweep_static|negative_z_index|missing_data_no_timeline|missing_timeline_registry|motion_blur_filter_fallback|appearsBy|staysInFrame|keepsMoving|skipContrastInMotion)\b`,

    // 10. Catalog blocks, VFX/Audio kernels, presets & GSAP eases
    String.raw`\b(?:remove-background|media-treatment|grade-compare|apple-money-count|animated-bar-chart|nyc-paris-flight|x-post|reddit-post|spotify-card|macos-notification|instagram-follow|tiktok-follow|yt-lower-third|news-ticker|lower-third-bild|code-diff|code-morph|code-typing|code-highlight|code-scroll|code-3d-extrude|code-shader-dissolve|code-particle-assemble|us-map(?:-(?:bubble|flow|hex))?|spain-map|world-map|morph-text|texture-mask-text|per-word-rise|variable-axis-type|mk-emphasis-type|cross-warp-morph|light-leak|whip-pan(?:-cut)?|cinematic-zoom|ridged-burn|chromatic-radial-split|chromatic-split|domain-warp|sdf-iris|ripple-waves|gravitational-lens|swirl-vortex|thermal-distortion|flash-through-white|beat-freeze-cut|type-match-cut|grid-pixelate-wipe|ios26-liquid-glass|share-sheet-carousel|shimmer-sweep|filmed-screen|grain-overlay|thin-film|parallax-(?:zoom|unzoom)|liquid-glass-(?:notification|widgets)|claude-code-window|shader-wipe|weight-wave|remotion-to-hyperframes)\b`,
    String.raw`\b(?:caption|lt|vfx|transitions)-[a-z0-9-]+\b`,
    String.raw`\b(?:highpass|lowpass|lowshelf|highshelf|compressor|limiter|truepeak|bitcrush|pitchshift|reverb|chorus|phaser|fractal-noise|wave-warp|displacement-map|chromatic-aberration|rgb-split|tape-damage|edge-detect|pixel-sort|kuwahara|halftone(?:-dot)?|pixelate|u2net_human_seg|af_heart|af_sky|am_adam|bf_emma)\b`,
    String.raw`\b(?:voice-clean|voice-broadcast|voice-warm|rumble-cut|room-gate|boom-tame|harsh-tame|lofi-tape|pa-system|slap-echo|dub-throw|skin-soft|radio-am|doofus-worble|room-tight|room-natural)\b`,
    String.raw`\b(?:power[1-4]|back|elastic|expo|sine|circ|quint|quart|cubic)\.(?:in|out|inOut)\b`,

    // 11. Proper nouns, acronyms & product names (strictly Case-sensitive!)
    String.raw`\b(?:Apache\s*2\.0|Core\s*Skills|HTML|GSAP|gsap|MCP|CLI|SDK|Three\.js|Anime\.js|TypeGPU|Lottie|Shiki|WebMCP|WebGL2?|WebGPU|Studio|Browser\s+Editor|Kokoro(?:-82M)?|Framey|Figma|AWS\s+Lambda|Lambda|Cloud\s+Run|Step\s+Functions|Cloud\s+Workflows|SSIM|WCAG|Parakeet|Whisper|whisper\.cpp|Seedance|H3\s+Max|HeyGen|ElevenLabs|Openverse|Lyria|MusicGen|Gemini\s+TTS|OpenCode|Ollama|Claude\s+Code|Claude\s+Design|Open\s+Design|Codex|Cursor|Antigravity|Remotion|React|TypeScript|Vercel|Cloudflare|Modal|ProRes\s*4444|HEVC|BT\.2020|GeoJSON|JSONL|OpenCV|FFmpeg|Topology\s+Lens|Voiceover\s+Carve|Brand\s+Kit|Audio\s+FX|Even\s+Out\s+Levels|Linked\s+Selection|Ripple\s+Edit|Pending\s+video\s+edits|Unroll\s+to\s+edit)\b`,
  ].join("|"),
);

interface MatchSpan {
  start: number;
  end: number;
}

function collectSpans(text: string, regex: RegExp): MatchSpan[] {
  const spans: MatchSpan[] = [];
  const safeFlags = regex.flags.replace(/[gy]/g, "");
  const local = new RegExp(regex.source, safeFlags + "g");
  let match: RegExpExecArray | null = null;
  while ((match = local.exec(text)) !== null) {
    if (match[0].length === 0) {
      local.lastIndex += 1;
      continue;
    }
    spans.push({ start: match.index, end: match.index + match[0].length });
  }
  return spans;
}

/**
 * Splits a caption token into pure plain/code segments without mutating any
 * caller-supplied RegExp or leaking flags between base and extra patterns.
 */
export function segmentCaptionToken(
  text: string,
  baseRegex: RegExp = CODE_TERM_REGEX,
  extraRegex: RegExp | null = null,
): CaptionSegment[] {
  if (!text) {
    return [{ text: "", isCode: false }];
  }

  const spans = collectSpans(text, baseRegex);
  if (extraRegex) {
    const extraSpans = collectSpans(text, extraRegex);
    for (let i = 0; i < extraSpans.length; i++) {
      spans.push(extraSpans[i]);
    }
  }

  if (spans.length === 0) {
    return [{ text, isCode: false }];
  }

  spans.sort((a, b) => a.start - b.start || b.end - a.end);

  const segments: CaptionSegment[] = [];
  let cursor = 0;

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if (span.start < cursor) {
      continue;
    }
    if (span.start > cursor) {
      segments.push({ text: text.slice(cursor, span.start), isCode: false });
    }
    segments.push({ text: text.slice(span.start, span.end), isCode: true });
    cursor = span.end;
  }

  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor), isCode: false });
  }

  return segments;
}

export const HfCaptionBar: React.FC<HfCaptionBarProps> = ({
  captions,
  voiceStartFrame,
  brandColor = HF_COLORS.brandNeon,
  accentColor = HF_COLORS.accentCyan,
  extraCodeTerms,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const safeExtraRegex = useMemo(() => {
    if (!extraCodeTerms) {
      return null;
    }
    return new RegExp(
      extraCodeTerms.source,
      extraCodeTerms.flags.replace(/[gy]/g, ""),
    );
  }, [extraCodeTerms]);

  const isDefaultBrand =
    brandColor.toLowerCase() === HF_COLORS.brandPrimary.toLowerCase() ||
    brandColor.toLowerCase() === HF_COLORS.brandNeon.toLowerCase();
  const borderBrand = isDefaultBrand ? HF_COLORS.brandPrimary : brandColor;
  const highlightBrand = isDefaultBrand ? HF_COLORS.brandNeon : brandColor;

  const pages = useMemo<CaptionPage[]>(() => {
    const result: CaptionPage[] = [];
    let currentTokens: Caption[] = [];

    for (const cap of captions) {
      currentTokens.push(cap);
      if (cap.pageBreakAfter) {
        result.push({
          tokens: currentTokens,
          startMs: currentTokens[0].startMs,
          endMs: currentTokens[currentTokens.length - 1].endMs,
        });
        currentTokens = [];
      }
    }
    if (currentTokens.length > 0) {
      result.push({
        tokens: currentTokens,
        startMs: currentTokens[0].startMs,
        endMs: currentTokens[currentTokens.length - 1].endMs,
      });
    }
    return result;
  }, [captions]);

  const currentVoiceMs = ((frame - voiceStartFrame) / fps) * 1000;

  // Find active page (with a small 80ms pre-roll and 240ms hold unless next page started)
  const activePageIndex = useMemo(() => {
    for (let i = 0; i < pages.length; i++) {
      const p = pages[i];
      const nextStart =
        i + 1 < pages.length ? pages[i + 1].startMs : p.endMs + 280;
      const effectiveEnd = Math.min(p.endMs + 240, nextStart);
      if (currentVoiceMs >= p.startMs - 80 && currentVoiceMs < effectiveEnd) {
        return i;
      }
    }
    return -1;
  }, [pages, currentVoiceMs]);

  if (activePageIndex === -1) {
    return null;
  }

  const page = pages[activePageIndex];
  const enterProgress = interpolate(
    currentVoiceMs,
    [page.startMs - 80, page.startMs + 80],
    [0, 1],
    {
      easing: Easing.out(Easing.cubic),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const translateY = interpolate(enterProgress, [0, 1], [8, 0]);

  // HfCaptionBar is rendered inside <Sequence>, which fills HfSeriesShell's Main Stage Content Area
  // (whose bottom sits `HF_LAYOUT.stageBottom` px above the 1080p canvas bottom).
  // Offsetting by `captionBottomFromCanvas - stageBottom` places the subtitle bar in the dedicated
  // bottom band (44px from the 1080p canvas bottom, right above the 34px chapter progress bar)
  // without overlapping the main stage cards.
  const bottomOffsetInStage =
    HF_LAYOUT.captionBottomFromCanvas - HF_LAYOUT.stageBottom;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: bottomOffsetInStage,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1680,
          padding: "8px 26px",
          borderRadius: 14,
          backgroundColor: "rgba(9, 13, 22, 0.92)",
          border: `1.5px solid ${hexToRgba(borderBrand, 0.45)}`,
          boxShadow: `0 10px 32px rgba(0, 0, 0, 0.72), 0 0 20px ${hexToRgba(borderBrand, 0.14)}`,
          backdropFilter: "blur(14px)",
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          opacity: enterProgress,
          transform: `translateY(${translateY}px)`,
          whiteSpace: "nowrap",
        }}
      >
        {/* Voice indicator dot */}
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: highlightBrand,
            boxShadow: `0 0 10px ${highlightBrand}`,
            flexShrink: 0,
          }}
        />

        {/* Single-line tokens */}
        <div
          style={{
            fontFamily: FONT_SANS,
            fontSize: 29,
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: "0.02em",
            display: "inline-flex",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {page.tokens.map((tok, idx) => {
            const isActive =
              currentVoiceMs >= tok.startMs - 30 &&
              currentVoiceMs <= tok.endMs + 60;
            const isPast = currentVoiceMs > tok.endMs + 60;
            const segments = segmentCaptionToken(
              tok.text,
              CODE_TERM_REGEX,
              safeExtraRegex,
            );
            const hasCodeSegment = segments.some((seg) => seg.isCode);

            const textColor = isActive
              ? highlightBrand
              : isPast
                ? HF_COLORS.textPrimary
                : "rgba(203, 213, 225, 0.78)";

            return (
              <span
                key={`${tok.startMs}-${idx}`}
                style={{
                  position: "relative",
                  color: textColor,
                  fontFamily: FONT_SANS,
                  fontSize: 30,
                  backgroundColor: isActive
                    ? hexToRgba(borderBrand, 0.18)
                    : "transparent",
                  padding: isActive ? "2px 8px" : "2px 1px",
                  margin: isActive ? "0 2px" : "0",
                  borderRadius: 8,
                  borderBottom: isActive
                    ? `2.5px solid ${highlightBrand}`
                    : "2.5px solid transparent",
                  textShadow: isActive
                    ? `0 0 16px ${hexToRgba(highlightBrand, 0.45)}`
                    : "none",
                  whiteSpace: "pre",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {segments.map((seg, segIdx) =>
                  seg.isCode ? (
                    <span
                      key={segIdx}
                      style={{
                        fontFamily: FONT_MONO_CJK,
                        fontSize: 27,
                        backgroundColor: isActive
                          ? "transparent"
                          : hexToRgba(accentColor, 0.14),
                        padding: isActive ? "0 2px" : "2px 8px",
                        margin: isActive
                          ? "0 1px"
                          : hasCodeSegment
                            ? "0 2px"
                            : "0",
                        borderRadius: 7,
                        whiteSpace: "pre",
                      }}
                    >
                      {seg.text}
                    </span>
                  ) : (
                    <span key={segIdx} style={{ whiteSpace: "pre" }}>
                      {seg.text}
                    </span>
                  ),
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
