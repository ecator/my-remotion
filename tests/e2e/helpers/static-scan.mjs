import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { ROOT_DIR } from "./episodes.mjs";

const CODE_EXTS = new Set([".ts", ".tsx", ".mts", ".js", ".jsx", ".mjs"]);

export function listSourceFilesRecursive(dirPath) {
  const absDir = path.isAbsolute(dirPath) ? dirPath : path.resolve(ROOT_DIR, dirPath);
  if (!fs.existsSync(absDir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    const full = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listSourceFilesRecursive(full));
    } else if (entry.isFile() && CODE_EXTS.has(path.extname(entry.name).toLowerCase())) {
      results.push(full);
    }
  }
  return results.sort();
}

export function parseSourceFile(filePath) {
  const absPath = path.isAbsolute(filePath) ? filePath : path.resolve(ROOT_DIR, filePath);
  const content = fs.readFileSync(absPath, "utf8");
  const scriptKind = absPath.endsWith(".tsx") || absPath.endsWith(".jsx")
    ? ts.ScriptKind.TSX
    : ts.ScriptKind.TS;
  const sf = ts.createSourceFile(absPath, content, ts.ScriptTarget.Latest, true, scriptKind);
  return { absPath, relPath: path.relative(ROOT_DIR, absPath), content, sf };
}

function getLine(sf, node) {
  return sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1;
}

export function extractImports(sf) {
  const imports = [];
  function visit(node) {
    if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
      imports.push({
        specifier: node.moduleSpecifier.text,
        line: getLine(sf, node),
        kind: "import",
      });
    } else if (
      ts.isExportDeclaration(node) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      imports.push({
        specifier: node.moduleSpecifier.text,
        line: getLine(sf, node),
        kind: "reexport",
      });
    } else if (ts.isCallExpression(node)) {
      const exprText = node.expression.getText(sf);
      if (
        (exprText === "require" || node.expression.kind === ts.SyntaxKind.ImportKeyword) &&
        node.arguments.length === 1 &&
        ts.isStringLiteral(node.arguments[0])
      ) {
        imports.push({
          specifier: node.arguments[0].text,
          line: getLine(sf, node),
          kind: exprText === "require" ? "require" : "dynamic-import",
        });
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return imports;
}

export function extractStaticFileCalls(sf) {
  const calls = [];
  function visit(node) {
    if (ts.isCallExpression(node)) {
      const isDirectStaticFile =
        ts.isIdentifier(node.expression) && node.expression.text === "staticFile";
      const isMemberStaticFile =
        ts.isPropertyAccessExpression(node.expression) &&
        node.expression.name.text === "staticFile";

      if (isDirectStaticFile || isMemberStaticFile) {
        const arg = node.arguments[0];
        if (arg && (ts.isStringLiteral(arg) || ts.isNoSubstitutionTemplateLiteral(arg))) {
          calls.push({
            path: arg.text,
            isLiteral: true,
            line: getLine(sf, node),
          });
        } else {
          calls.push({
            path: arg ? arg.getText(sf) : "",
            isLiteral: false,
            line: getLine(sf, node),
          });
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return calls;
}

const CSS_ANIM_TIMING_PROP_NAMES = new Set([
  "transitionDuration",
  "transitionProperty",
  "transitionDelay",
  "transitionTimingFunction",
  "animationName",
  "animationDuration",
  "animationDelay",
  "animationIterationCount",
  "animationTimingFunction",
]);

const CSS_ANIM_SHORTHAND_PROP_NAMES = new Set(["transition", "animation"]);

/**
 * Inspect a single TS/TSX file via AST for Remotion determinism & hygiene violations.
 */
export function scanCompliance(filePath, options = {}) {
  const { allowHardcoded30Lines = new Set(), allowAllHardcoded30 = false } = options;
  const { absPath, relPath, sf } = parseSourceFile(filePath);

  const mathRandomCalls = [];
  const timerCalls = [];
  const fetchCalls = [];
  const cssAnimations = [];
  const hardcoded30 = [];
  const docsImports = [];
  const docsStaticFiles = [];

  const imports = extractImports(sf);
  for (const imp of imports) {
    if (/(?:^|[/\\])docs(?:[/\\]|$)/.test(imp.specifier)) {
      docsImports.push(imp);
    }
  }

  const staticFileCalls = extractStaticFileCalls(sf);
  for (const call of staticFileCalls) {
    if (call.isLiteral && /^(?:\.?\/)?docs(?:\/|$)/.test(call.path)) {
      docsStaticFiles.push(call);
    }
  }

  function visit(node) {
    // 1. Function calls: Math.random, timers, fetch
    if (ts.isCallExpression(node)) {
      const expr = node.expression;
      const line = getLine(sf, node);

      if (
        ts.isPropertyAccessExpression(expr) &&
        ts.isIdentifier(expr.expression) &&
        expr.expression.text === "Math" &&
        expr.name.text === "random"
      ) {
        mathRandomCalls.push({ line, text: node.getText(sf) });
      }

      if (ts.isIdentifier(expr)) {
        if (
          expr.text === "setTimeout" ||
          expr.text === "setInterval" ||
          expr.text === "requestAnimationFrame"
        ) {
          timerCalls.push({ line, name: expr.text });
        } else if (expr.text === "fetch") {
          fetchCalls.push({ line, name: "fetch" });
        }
      } else if (
        ts.isPropertyAccessExpression(expr) &&
        ts.isIdentifier(expr.expression) &&
        (expr.expression.text === "window" || expr.expression.text === "globalThis")
      ) {
        const fnName = expr.name.text;
        if (
          fnName === "setTimeout" ||
          fnName === "setInterval" ||
          fnName === "requestAnimationFrame"
        ) {
          timerCalls.push({ line, name: `${expr.expression.text}.${fnName}` });
        } else if (fnName === "fetch") {
          fetchCalls.push({ line, name: `${expr.expression.text}.fetch` });
        }
      }
    }

    // 2. CSS transitions / animations / keyframes / Tailwind animate-*
    if (ts.isPropertyAssignment(node)) {
      const propName = ts.isIdentifier(node.name) || ts.isStringLiteral(node.name)
        ? node.name.text
        : null;
      if (propName) {
        const line = getLine(sf, node);
        if (CSS_ANIM_TIMING_PROP_NAMES.has(propName)) {
          cssAnimations.push({ line, kind: `style:${propName}` });
        } else if (CSS_ANIM_SHORTHAND_PROP_NAMES.has(propName)) {
          const valText = node.initializer.getText(sf);
          if (
            /\d+(?:\.\d+)?(?:ms|s)\b|\bease|\blinear\b|\binfinite\b|\bkeyframes\b|\ball\b/i.test(
              valText,
            ) ||
            ts.isTemplateExpression(node.initializer)
          ) {
            cssAnimations.push({ line, kind: `style:${propName}` });
          }
        }
      }
    }

    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node) ||
      ts.isTemplateHead(node) ||
      ts.isTemplateMiddle(node) ||
      ts.isTemplateTail(node)
    ) {
      const txt = node.text;
      const line = getLine(sf, node);
      if (/@keyframes\b/i.test(txt)) {
        cssAnimations.push({ line, kind: "@keyframes" });
      }
      if (/(?:^|[;\s{])(?:transition|animation)\s*:/i.test(txt)) {
        cssAnimations.push({ line, kind: "css-string:transition/animation" });
      }
      // Tailwind animate-* inside className/class attributes
      const parent = node.parent;
      const isClassAttr =
        parent &&
        ((ts.isJsxAttribute(parent) &&
          (parent.name.text === "className" || parent.name.text === "class")) ||
          (ts.isJsxExpression(parent) &&
            parent.parent &&
            ts.isJsxAttribute(parent.parent) &&
            (parent.parent.name.text === "className" || parent.parent.name.text === "class")));
      if (isClassAttr && /\banimate-[a-z0-9-]+\b/.test(txt)) {
        cssAnimations.push({ line, kind: `tailwind:${txt.match(/\banimate-[a-z0-9-]+\b/)[0]}` });
      }
    }

    // 3. Hardcoded / 30 or * 30 in runtime/animation code
    if (!allowAllHardcoded30 && ts.isBinaryExpression(node)) {
      const op = node.operatorToken.kind;
      if (op === ts.SyntaxKind.SlashToken || op === ts.SyntaxKind.AsteriskToken) {
        const rightIs30 =
          ts.isNumericLiteral(node.right) && Number(node.right.text) === 30;
        const leftIs30 =
          op === ts.SyntaxKind.AsteriskToken &&
          ts.isNumericLiteral(node.left) &&
          Number(node.left.text) === 30;
        if (rightIs30 || leftIs30) {
          const line = getLine(sf, node);
          if (!allowHardcoded30Lines.has(line)) {
            hardcoded30.push({ line, text: node.getText(sf) });
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sf);

  return {
    absPath,
    relPath,
    imports,
    staticFileCalls,
    mathRandomCalls,
    timerCalls,
    fetchCalls,
    cssAnimations,
    hardcoded30,
    docsImports,
    docsStaticFiles,
  };
}

/**
 * Inspect a file for stateful RegExp (/g or /y) used with .test().
 */
export function scanStatefulRegexTest(filePath) {
  const { sf } = parseSourceFile(filePath);
  const regexDecls = new Map();
  const statefulTestIssues = [];

  function findRegexFlags(node) {
    if (ts.isRegularExpressionLiteral(node)) {
      const text = node.text;
      const lastSlash = text.lastIndexOf("/");
      const flags = lastSlash >= 0 ? text.slice(lastSlash + 1) : "";
      return { flags, line: getLine(sf, node), text };
    }
    if (ts.isNewExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === "RegExp") {
      const flagsArg = node.arguments?.[1];
      const flags =
        flagsArg && ts.isStringLiteral(flagsArg) ? flagsArg.text : "";
      return { flags, line: getLine(sf, node), text: node.getText(sf) };
    }
    return null;
  }

  function visitCollect(node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      const info = findRegexFlags(node.initializer);
      if (info) {
        regexDecls.set(node.name.text, info);
      }
    }
    ts.forEachChild(node, visitCollect);
  }
  visitCollect(sf);

  function visitCheck(node) {
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.name.text === "test"
    ) {
      const recv = node.expression.expression;
      const inlineInfo = findRegexFlags(recv);
      if (inlineInfo && (inlineInfo.flags.includes("g") || inlineInfo.flags.includes("y"))) {
        statefulTestIssues.push({
          line: getLine(sf, node),
          regex: inlineInfo.text,
          flags: inlineInfo.flags,
        });
      } else if (ts.isIdentifier(recv) && regexDecls.has(recv.text)) {
        const decl = regexDecls.get(recv.text);
        if (decl.flags.includes("g") || decl.flags.includes("y")) {
          statefulTestIssues.push({
            line: getLine(sf, node),
            identifier: recv.text,
            flags: decl.flags,
          });
        }
      }
    }
    ts.forEachChild(node, visitCheck);
  }
  visitCheck(sf);

  return { regexDecls, statefulTestIssues };
}
