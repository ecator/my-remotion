import fs from "node:fs";
import path from "node:path";
import { finished } from "node:stream/promises";
import { run } from "node:test";
import { spec } from "node:test/reporters";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TIER_FILES = {
  1: [
    "tier1/f1-shared-ui.test.mjs",
    "tier1/f2-audio-pipeline.test.mjs",
    "tier1/episodes-contract.test.mjs",
    "tier1/f14-root-registry.test.mjs",
  ],
  2: [
    "tier2/captions-invariants.test.mjs",
    "tier2/remotion-compliance.test.mjs",
    "tier2/docs-grounding.test.mjs",
  ],
  3: [
    "tier3/cli-lint-compositions.test.mjs",
    "tier3/audio-ffprobe-sync.test.mjs",
  ],
  4: [
    "tier4/stills-visual-determinism.test.mjs",
  ],
};

function printUsageAndExit(msg) {
  if (msg) {
    console.error(`Error: ${msg}`);
  }
  console.error(
    "Usage: node tests/e2e/run.mjs [--tier=1|2|3|4|all] [--filter=<pattern>]",
  );
  process.exit(2);
}

function parseFilterRegex(raw) {
  if (!raw) {
    printUsageAndExit("Missing value for --filter");
  }
  const slashMatch = raw.match(/^\/(.+)\/([dgimsuvy]*)$/);
  if (slashMatch) {
    try {
      return new RegExp(slashMatch[1], slashMatch[2]);
    } catch (err) {
      printUsageAndExit(`Invalid regex in --filter: ${err.message}`);
    }
  }
  const escaped = raw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(escaped, "i");
}

function parseArgs(argv) {
  let tierRaw = "all";
  let filterRaw = null;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      console.log(
        "Usage: node tests/e2e/run.mjs [--tier=1|2|3|4|all] [--filter=<pattern>]",
      );
      process.exit(0);
    }
    if (arg === "--tier") {
      const next = argv[i + 1];
      if (!next || next.startsWith("--")) {
        printUsageAndExit("Missing value for --tier");
      }
      tierRaw = next;
      i++;
      continue;
    }
    if (arg.startsWith("--tier=")) {
      const val = arg.slice("--tier=".length);
      if (!val) {
        printUsageAndExit("Missing value for --tier=");
      }
      tierRaw = val;
      continue;
    }
    if (arg === "--filter") {
      const next = argv[i + 1];
      if (!next || next.startsWith("--")) {
        printUsageAndExit("Missing value for --filter");
      }
      filterRaw = next;
      i++;
      continue;
    }
    if (arg.startsWith("--filter=")) {
      const val = arg.slice("--filter=".length);
      if (!val) {
        printUsageAndExit("Missing value for --filter=");
      }
      filterRaw = val;
      continue;
    }
    printUsageAndExit(`Unknown argument: ${arg}`);
  }

  let selectedTiers;
  if (tierRaw === "all") {
    selectedTiers = [1, 2, 3, 4];
  } else if (/^[1-4]$/.test(tierRaw)) {
    selectedTiers = [Number(tierRaw)];
  } else {
    printUsageAndExit(`Invalid --tier value '${tierRaw}' (expected 1|2|3|4|all)`);
  }

  const filterRegex = filterRaw !== null ? parseFilterRegex(filterRaw) : null;
  return { tierRaw, selectedTiers, filterRaw, filterRegex };
}

async function runTier(tierNum, filterRegex) {
  const relFiles = TIER_FILES[tierNum];
  const files = relFiles.map((rel) => {
    const abs = path.join(__dirname, rel);
    if (!fs.existsSync(abs)) {
      throw new Error(`Missing test file: ${abs}`);
    }
    return abs;
  });

  console.log(`\n=== E2E Tier ${tierNum} (${files.length} file${files.length > 1 ? "s" : ""}) ===`);

  let executedPass = 0;
  let executedFail = 0;
  let hasRootFailure = false;

  const stream = run({
    files,
    isolation: "process",
    concurrency: tierNum === 4 ? 1 : undefined,
    timeout: tierNum === 4 ? 300_000 : tierNum === 3 ? 180_000 : 60_000,
    ...(filterRegex ? { testNamePatterns: [filterRegex] } : {}),
  });

  const filesSet = new Set(files);

  stream.on("test:pass", (ev) => {
    if (
      ev.skip === undefined &&
      ev.todo === undefined &&
      ev.details?.type !== "suite" &&
      ev.name !== ev.file &&
      !filesSet.has(ev.name)
    ) {
      executedPass++;
    }
  });

  stream.on("test:fail", (ev) => {
    if (
      ev.skip === undefined &&
      ev.todo === undefined &&
      ev.details?.type !== "suite" &&
      ev.name !== ev.file &&
      !filesSet.has(ev.name)
    ) {
      executedFail++;
    }
  });

  stream.on("test:summary", (ev) => {
    if (ev.file === undefined) {
      if (!ev.success || ev.counts.failed > 0 || ev.counts.cancelled > 0) {
        hasRootFailure = true;
      }
    }
  });

  const reporter = new spec();
  const formatted = stream.compose(reporter);
  formatted.pipe(process.stdout, { end: false });
  await finished(formatted);

  return {
    tierNum,
    executedPass,
    executedFail,
    hasRootFailure,
  };
}

async function main() {
  const { selectedTiers, filterRaw, filterRegex } = parseArgs(process.argv.slice(2));

  let totalPassed = 0;
  let totalFailed = 0;
  let anyFailure = false;

  for (const tierNum of selectedTiers) {
    const res = await runTier(tierNum, filterRegex);
    totalPassed += res.executedPass;
    totalFailed += res.executedFail;
    if (res.executedFail > 0 || res.hasRootFailure) {
      anyFailure = true;
    }
  }

  const totalExecuted = totalPassed + totalFailed;
  console.log(
    `\n[E2E Summary] tiers=[${selectedTiers.join(",")}] executed=${totalExecuted} passed=${totalPassed} failed=${totalFailed}`,
  );

  if (filterRegex && totalExecuted === 0) {
    console.error(
      `Error: --filter=${JSON.stringify(filterRaw)} matched 0 executed tests.`,
    );
    process.exitCode = 1;
    return;
  }

  if (anyFailure || totalFailed > 0) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
