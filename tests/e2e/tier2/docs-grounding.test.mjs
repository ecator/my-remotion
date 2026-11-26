import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import {
  DOC_TRUTH_ORACLES,
  EPISODES,
  NEW_EPISODES,
  episodePaths,
} from "../helpers/episodes.mjs";
import { inspectDocTriplet, parseScriptNarration } from "../helpers/doc-inspect.mjs";

const NEGATION_RE =
  /(?:not|never|avoid|wrong|don't|do\s+not|instead|rather\s+than|shim|mislead|trap|pitfall|error|fail|refuse|不是|并非|而非|而不是|切勿|不要|别用|禁止|避免|陷阱|误区|错用|误用|失效|失败|报错|假|垫片|误导|✗|×|❌|⚠|🚫|!=|!==|≠)/i;

function gatherEpisodeCorpus(ep) {
  const paths = episodePaths(ep);
  const parts = [];

  for (const mdPath of [paths.scriptMd, paths.storyboardMd]) {
    if (fs.existsSync(mdPath)) {
      parts.push(fs.readFileSync(mdPath, "utf8"));
    }
  }

  if (fs.existsSync(paths.srcDir)) {
    for (const entry of fs.readdirSync(paths.srcDir).sort()) {
      if (/\.(ts|tsx)$/.test(entry)) {
        parts.push(fs.readFileSync(path.join(paths.srcDir, entry), "utf8"));
      }
    }
  }

  return parts.join("\n\n");
}

function hasUnnegatedMatch(corpus, pattern, windowChars) {
  const flags = pattern.flags.includes("g") ? pattern.flags : `${pattern.flags}g`;
  const re = new RegExp(pattern.source, flags);
  let match;
  let foundAny = false;
  while ((match = re.exec(corpus)) !== null) {
    foundAny = true;
    const start = Math.max(0, match.index - windowChars);
    const end = Math.min(corpus.length, match.index + match[0].length + windowChars);
    const context = corpus.slice(start, end);
    if (!NEGATION_RE.test(context)) {
      return { found: true, unnegated: true, excerpt: context.replace(/\s+/g, " ").trim() };
    }
    if (match[0].length === 0) re.lastIndex++;
  }
  return { found: foundAny, unnegated: false, excerpt: "" };
}

test("[EP01] EP01 script.md narration benchmark (>= 4 scenes, >= 1,200 raw chars, >= 750 CJK chars) & docs completeness", () => {
  const ep01 = EPISODES[0];
  const paths = episodePaths(ep01);
  const triplet = inspectDocTriplet(paths.docsDir);
  assert.equal(triplet.scriptExists, true);
  assert.equal(triplet.storyboardExists, true);
  assert.equal(triplet.notesExists, true);

  const narration = parseScriptNarration(paths.scriptMd);
  assert.ok(narration.scenes.length >= 4, `Expected >= 4 scenes, got ${narration.scenes.length}`);
  assert.ok(
    narration.totalRawChars >= 1200,
    `EP01 spoken raw chars (${narration.totalRawChars}) < 1200`,
  );
  assert.ok(
    narration.totalCjkChars >= 750,
    `EP01 spoken CJK chars (${narration.totalCjkChars}) < 750`,
  );
  assert.ok(
    narration.fileCjkChars >= 1200,
    `EP01 total script.md CJK chars (${narration.fileCjkChars}) < 1200`,
  );
});

for (const ep of NEW_EPISODES) {
  const tag = `[${ep.featureId}][${ep.epTag}]`;
  const paths = episodePaths(ep);
  const oracle = DOC_TRUTH_ORACLES[ep.epTag];

  test(`${tag} Narration depth & docs completeness (script >= 4 scenes, >= 1,200 raw chars, >= 750 spoken CJK, >= 1,200 file CJK)`, () => {
    const triplet = inspectDocTriplet(paths.docsDir);
    assert.equal(triplet.scriptExists, true, `Missing ${paths.scriptMd}`);
    assert.equal(triplet.storyboardExists, true, `Missing ${paths.storyboardMd}`);
    assert.equal(triplet.notesExists, true, `Missing ${paths.notesMd}`);

    const narration = parseScriptNarration(paths.scriptMd);
    assert.ok(
      narration.scenes.length >= ep.minScenes && narration.scenes.length <= ep.maxScenes,
      `${ep.id} script.md must define ${ep.minScenes}-${ep.maxScenes} scenes under ## 2. (found ${narration.scenes.length})`,
    );
    for (const sc of narration.scenes) {
      assert.ok(
        sc.cjkChars >= 120,
        `${ep.id} scene '${sc.header}' narration is too sparse (${sc.cjkChars} CJK chars < 120)`,
      );
    }
    assert.ok(
      narration.totalRawChars >= 1200,
      `${ep.id} total spoken raw chars (${narration.totalRawChars}) must be >= 1200`,
    );
    assert.ok(
      narration.totalCjkChars >= 750,
      `${ep.id} total spoken CJK chars (${narration.totalCjkChars}) must be >= 750`,
    );
    assert.ok(
      narration.fileCjkChars >= 1200,
      `${ep.id} script.md total CJK chars (${narration.fileCjkChars}) must be >= 1200`,
    );
  });

  test(`${tag} Authoritative Doc-Truth Oracle (>= 6 verified HyperFrames doc facts in ${ep.id})`, () => {
    assert.equal(fs.existsSync(paths.scriptMd), true, `Missing ${paths.scriptMd}`);
    const corpus = gatherEpisodeCorpus(ep);

    const passedFacts = [];
    const failedFacts = [];
    for (const fact of oracle.factChecks) {
      const missing = fact.allOf.filter((re) => !re.test(corpus));
      if (missing.length === 0) {
        passedFacts.push(fact.name);
      } else {
        failedFacts.push(`${fact.name} [missing: ${missing.map((r) => r.toString()).join(", ")}]`);
      }
    }

    assert.ok(
      passedFacts.length >= 6 && failedFacts.length === 0,
      `${ep.id} Doc-Truth Oracle failed (${passedFacts.length}/${oracle.factChecks.length} matched). Missing:\n- ${failedFacts.join("\n- ")}`,
    );
  });

  test(`${tag} Anti-Hallucination & Doc-Trap checks for ${ep.id}`, () => {
    assert.equal(fs.existsSync(paths.scriptMd), true, `Missing ${paths.scriptMd}`);
    const corpus = gatherEpisodeCorpus(ep);
    const errors = [];

    for (const trap of oracle.trapChecks) {
      if (trap.require) {
        for (const reqRe of trap.require) {
          if (!reqRe.test(corpus)) {
            errors.push(`${trap.name}: missing authoritative caveat/correction ${reqRe}`);
          }
        }
      }
      if (trap.forbid) {
        for (const forbRe of trap.forbid) {
          if (forbRe.test(corpus)) {
            errors.push(`${trap.name}: contains forbidden hallucination/stale claim ${forbRe}`);
          }
        }
      }
      if (trap.forbidIfUnnegated) {
        const res = hasUnnegatedMatch(
          corpus,
          trap.forbidIfUnnegated.pattern,
          trap.forbidIfUnnegated.windowChars ?? 240,
        );
        if (res.unnegated) {
          errors.push(
            `${trap.name}: mentions trap term ${trap.forbidIfUnnegated.pattern} without warning/negation context ('${res.excerpt}')`,
          );
        }
      }
    }

    assert.equal(
      errors.length,
      0,
      `${ep.id} failed Anti-Hallucination trap checks:\n- ${errors.join("\n- ")}`,
    );
  });
}
