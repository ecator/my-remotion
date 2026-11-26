import fs from "node:fs";
import path from "node:path";

/**
 * Parse `docs/<VideoName>/script.md` strictly inside section `## 2.` under
 * `### Scene ...` `- **旁白原文**：` blockquotes (ignoring pre-scene note blockquotes).
 */
export function parseScriptNarration(scriptPath) {
  const content = fs.readFileSync(scriptPath, "utf8");
  const lines = content.split(/\r?\n/);

  // Locate Section 2 (`## 2.`) up to next top-level `## `
  let inSec2 = false;
  let currentScene = null;
  let expectingBlockquote = false;
  let collectingBlockquote = false;
  const scenes = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inSec2) {
      if (/^##\s+2\b/.test(line)) {
        inSec2 = true;
      }
      continue;
    }

    // Stop when leaving section 2
    if (/^##\s+[^#]/.test(line)) {
      if (currentScene) {
        scenes.push(currentScene);
        currentScene = null;
      }
      break;
    }

    if (/^###\s+Scene\b/i.test(line)) {
      if (currentScene) {
        scenes.push(currentScene);
      }
      currentScene = {
        header: line.replace(/^###\s+/, "").trim(),
        line: i + 1,
        quoteLines: [],
      };
      expectingBlockquote = false;
      collectingBlockquote = false;
      continue;
    }

    if (!currentScene) {
      // Ignore pre-scene notes (e.g. script.md:22 blockquote)
      continue;
    }

    if (/^\s*-\s*\*\*旁白原文\*\*\s*[:：]/.test(line)) {
      expectingBlockquote = true;
      collectingBlockquote = false;
      // Check if inline blockquote text exists on same line
      const inlineMatch = line.match(/^\s*-\s*\*\*旁白原文\*\*\s*[:：]\s*(.+)$/);
      if (inlineMatch && inlineMatch[1].trim().startsWith(">")) {
        currentScene.quoteLines.push(inlineMatch[1].trim().replace(/^>\s?/, ""));
        collectingBlockquote = true;
      }
      continue;
    }

    if (expectingBlockquote || collectingBlockquote) {
      const trimmed = line.trim();
      if (trimmed.startsWith(">")) {
        currentScene.quoteLines.push(trimmed.replace(/^>\s?/, ""));
        collectingBlockquote = true;
        expectingBlockquote = false;
      } else if (trimmed === "" && expectingBlockquote) {
        // Blank line immediately before first `>` line
        continue;
      } else if (trimmed === "" && collectingBlockquote) {
        // Multi-paragraph blockquote might continue or end; check next non-empty line
        const nextNonEmpty = lines.slice(i + 1).find((l) => l.trim() !== "");
        if (nextNonEmpty && nextNonEmpty.trim().startsWith(">")) {
          continue;
        }
        collectingBlockquote = false;
        expectingBlockquote = false;
      } else {
        collectingBlockquote = false;
        expectingBlockquote = false;
      }
    }
  }

  if (currentScene) {
    scenes.push(currentScene);
  }

  const parsedScenes = scenes.map((sc) => {
    const text = sc.quoteLines.join(" ").replace(/\s+/g, " ").trim();
    const nonWhitespaceChars = text.replace(/\s+/g, "").length;
    const cjkChars = (text.match(/[\u4e00-\u9fff]/g) ?? []).length;
    return {
      header: sc.header,
      line: sc.line,
      text,
      rawChars: text.length,
      nonWhitespaceChars,
      cjkChars,
    };
  });

  const combinedText = parsedScenes.map((s) => s.text).join(" ").trim();
  const totalRawChars = parsedScenes.reduce((sum, s) => sum + s.rawChars, 0);
  const totalNonWhitespaceChars = parsedScenes.reduce(
    (sum, s) => sum + s.nonWhitespaceChars,
    0,
  );
  const totalCjkChars = parsedScenes.reduce((sum, s) => sum + s.cjkChars, 0);
  const fileCjkChars = (content.match(/[\u4e00-\u9fff]/g) ?? []).length;

  return {
    scenes: parsedScenes,
    combinedText,
    totalRawChars,
    totalNonWhitespaceChars,
    totalCjkChars,
    fileCjkChars,
    fullContent: content,
  };
}

export function inspectDocTriplet(docsDir) {
  const scriptPath = path.join(docsDir, "script.md");
  const storyboardPath = path.join(docsDir, "storyboard.md");
  const notesPath = path.join(docsDir, "notes.md");

  return {
    scriptExists: fs.existsSync(scriptPath),
    storyboardExists: fs.existsSync(storyboardPath),
    notesExists: fs.existsSync(notesPath),
    scriptSize: fs.existsSync(scriptPath) ? fs.statSync(scriptPath).size : 0,
    storyboardSize: fs.existsSync(storyboardPath) ? fs.statSync(storyboardPath).size : 0,
    notesSize: fs.existsSync(notesPath) ? fs.statSync(notesPath).size : 0,
    scriptPath,
    storyboardPath,
    notesPath,
  };
}
