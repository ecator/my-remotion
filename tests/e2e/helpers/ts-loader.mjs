import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import vm from "node:vm";
import React from "react";
import ts from "typescript";
import { ROOT_DIR } from "./episodes.mjs";

const ESM_PRELOAD_PACKAGES = [
  "@remotion/media",
  "@remotion/media-utils",
  "@remotion/light-leaks",
  "@remotion/sfx",
  "three",
];

const esmCache = new Map();
let esmPreloadPromise = null;
const moduleCache = new Map();

export async function ensureEsmPreloaded() {
  if (!esmPreloadPromise) {
    esmPreloadPromise = (async () => {
      for (const pkg of ESM_PRELOAD_PACKAGES) {
        if (!esmCache.has(pkg)) {
          const mod = await import(pkg);
          esmCache.set(pkg, mod);
        }
      }
    })();
  }
  await esmPreloadPromise;
}

export function clearModuleCache() {
  moduleCache.clear();
}

const TS_EXTENSIONS = [".ts", ".tsx", ".mts", ".js", ".jsx", ".mjs", ".json"];
const ASSET_STUB_EXTS = new Set([".css", ".scss", ".sass", ".less", ".svg", ".png", ".jpg", ".jpeg", ".webp"]);

function resolveRelativeFile(fromDir, specifier) {
  const base = path.resolve(fromDir, specifier);
  if (fs.existsSync(base) && fs.statSync(base).isFile()) {
    return base;
  }
  for (const ext of TS_EXTENSIONS) {
    const candidate = base + ext;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  if (fs.existsSync(base) && fs.statSync(base).isDirectory()) {
    for (const ext of TS_EXTENSIONS) {
      const idx = path.join(base, `index${ext}`);
      if (fs.existsSync(idx) && fs.statSync(idx).isFile()) {
        return idx;
      }
    }
  }
  throw new Error(`Cannot resolve relative module '${specifier}' from '${fromDir}'`);
}

function loadModuleSync(absPath) {
  const resolved = path.resolve(absPath);
  if (moduleCache.has(resolved)) {
    return moduleCache.get(resolved).exports;
  }

  const ext = path.extname(resolved).toLowerCase();
  if (ASSET_STUB_EXTS.has(ext)) {
    const stub = { exports: {} };
    moduleCache.set(resolved, stub);
    return stub.exports;
  }

  if (ext === ".json") {
    const parsed = JSON.parse(fs.readFileSync(resolved, "utf8"));
    const modObj = { exports: parsed };
    moduleCache.set(resolved, modObj);
    return parsed;
  }

  const source = fs.readFileSync(resolved, "utf8");
  const transpiled = ts.transpileModule(source, {
    fileName: resolved,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      resolveJsonModule: true,
    },
    reportDiagnostics: false,
  });

  const moduleRecord = { exports: {} };
  moduleCache.set(resolved, moduleRecord);

  const dir = path.dirname(resolved);
  const localRequire = createRequire(resolved);

  function customRequire(specifier) {
    if (esmCache.has(specifier)) {
      return esmCache.get(specifier);
    }
    if (specifier.startsWith(".") || specifier.startsWith("/")) {
      const targetPath = resolveRelativeFile(dir, specifier);
      return loadModuleSync(targetPath);
    }
    return localRequire(specifier);
  }
  customRequire.resolve = localRequire.resolve;
  customRequire.cache = localRequire.cache;

  const wrapped = `(function(exports, require, module, __filename, __dirname) {\n${transpiled.outputText}\n})`;
  const script = new vm.Script(wrapped, { filename: resolved });
  const fn = script.runInThisContext();
  fn(moduleRecord.exports, customRequire, moduleRecord, resolved, dir);
  return moduleRecord.exports;
}

export async function loadTsModule(filePath) {
  await ensureEsmPreloaded();
  const absPath = path.isAbsolute(filePath) ? filePath : path.resolve(ROOT_DIR, filePath);
  return loadModuleSync(absPath);
}

/**
 * Execute src/Root.tsx `RemotionRoot({})` in-memory and collect all <Composition> props.
 */
export async function extractRootCompositions() {
  const rootPath = path.join(ROOT_DIR, "src", "Root.tsx");
  const rootMod = await loadTsModule(rootPath);
  const remotionMod = createRequire(rootPath)("remotion");
  const RemotionRoot = rootMod.RemotionRoot ?? rootMod.default;
  if (typeof RemotionRoot !== "function") {
    throw new Error("src/Root.tsx does not export RemotionRoot component");
  }

  const elementTree = RemotionRoot({});
  const compositions = [];
  const unexpectedElements = [];

  function walk(node) {
    if (node == null || typeof node === "boolean" || typeof node === "string" || typeof node === "number") {
      return;
    }
    if (Array.isArray(node)) {
      for (const item of node) walk(item);
      return;
    }
    if (!React.isValidElement(node)) {
      return;
    }
    if (node.type === React.Fragment) {
      walk(node.props?.children);
      return;
    }
    const isComposition =
      node.type === remotionMod.Composition ||
      (typeof node.type === "function" && node.type.name === "Composition") ||
      (node.props && typeof node.props.id === "string" && "durationInFrames" in node.props);

    if (isComposition) {
      compositions.push({
        id: node.props.id,
        durationInFrames: node.props.durationInFrames,
        fps: node.props.fps,
        width: node.props.width,
        height: node.props.height,
        component: node.props.component,
        schema: node.props.schema,
        defaultProps: node.props.defaultProps,
      });
      return;
    }

    if (typeof node.type === "function" || typeof node.type === "string") {
      const typeName =
        typeof node.type === "string"
          ? node.type
          : node.type.displayName || node.type.name || "Anonymous";
      unexpectedElements.push({ typeName, props: node.props });
    }
    if (node.props?.children !== undefined) {
      walk(node.props.children);
    }
  }

  walk(elementTree);
  return { compositions, unexpectedElements };
}
