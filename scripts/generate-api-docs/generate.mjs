#!/usr/bin/env node
/**
 * Generates crawlable HTML API documentation from @openui5/types or @sapui5/types.
 *
 * Pipeline:
 *   1. Preprocess .d.ts files (rename default exports to named exports)
 *   2. Run TypeDoc with markdown plugin
 *   3. Strip inherited members from markdown
 *   4. Render markdown to minimal semantic HTML
 *
 * Usage:
 *   node generate.mjs --package @openui5/types --version 1.149.0 --out ../../api/openui5/1.149
 *   node generate.mjs --package @sapui5/types --version 1.148.1 --out ../../api/sapui5/1.148
 */

import { execSync, spawnSync } from "child_process";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  statSync,
  rmSync,
  existsSync,
  cpSync,
} from "fs";
import { join, dirname, relative, basename } from "path";
import { marked } from "marked";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Sanitize: strip raw HTML from markdown to prevent XSS in published pages
const renderer = new marked.Renderer();
renderer.html = () => "";  // strip raw HTML blocks to prevent XSS
marked.use({ renderer });

// Normalize path separators to POSIX (for Windows compatibility)
const posix = (p) => p.split("\\").join("/");

// Parse args
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 ? args[idx + 1] : undefined;
}

const PKG = getArg("package") || "@openui5/types";
const VERSION = getArg("version") || "latest";
const OUT_DIR = getArg("out") || join(__dirname, "../../api/openui5/latest");
const BASE_URL = getArg("base-url") || "https://ui5.github.io/typescript/api/openui5/latest/";

const WORK_DIR = join(__dirname, ".work");
const TYPES_DIR = join(WORK_DIR, "types-modified");
const MD_DIR = join(WORK_DIR, "docs-md");

console.log(`Generating docs for ${PKG}@${VERSION}`);
console.log(`Output: ${OUT_DIR}`);
console.log();

// --- Step 0: Install the types package ---
// Only @openui5/types and @sapui5/types are allowed — they are pure .d.ts packages
// with no install scripts, no native dependencies, no transitive deps.
const ALLOWED_PACKAGES = ["@openui5/types", "@sapui5/types"];
if (!ALLOWED_PACKAGES.includes(PKG)) {
  console.error(`Error: Only ${ALLOWED_PACKAGES.join(", ")} are supported. Got: ${PKG}`);
  process.exit(1);
}

console.log("Step 0: Installing types package...");
mkdirSync(WORK_DIR, { recursive: true });
writeFileSync(
  join(WORK_DIR, "package.json"),
  JSON.stringify({ name: "work", private: true, dependencies: { [PKG]: VERSION } })
);
// --ignore-scripts: never run install hooks from the types package
// --no-audit: don't phone home
// --no-fund: suppress noise
execSync("npm install --ignore-scripts --no-audit --no-fund", { cwd: WORK_DIR, stdio: "pipe" });

// Find the types directory
const pkgDir = join(WORK_DIR, "node_modules", ...PKG.split("/"));
const typesDir = join(pkgDir, "types");
if (!existsSync(typesDir)) {
  console.error(`Types directory not found: ${typesDir}`);
  process.exit(1);
}

// Get actual installed version
const pkgJson = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));
const actualVersion = pkgJson.version;
console.log(`  Installed: ${PKG}@${actualVersion}`);

// --- Step 1: Preprocess .d.ts files ---
console.log("\nStep 1: Preprocessing .d.ts files (rename default exports)...");
if (existsSync(TYPES_DIR)) rmSync(TYPES_DIR, { recursive: true });
cpSync(typesDir, TYPES_DIR, { recursive: true });

const dtsFiles = readdirSync(TYPES_DIR).filter((f) => f.endsWith(".d.ts"));
let totalReplacements = 0;

// First pass: collect which names are default exports per module
// Maps module path → default export name, e.g. "sap/m/Button" → "Button", "sap/ui/core/Element" → "UI5Element"
const defaultExports = new Map();

// Also collect which module paths are declared in each library file.
// This is used later to exclude cross-library re-exports from the output.
// Maps library name (e.g. "sap.f") → Set of module paths declared in that .d.ts
const libraryModules = new Map();

for (const file of dtsFiles) {
  const filePath = join(TYPES_DIR, file);
  const content = readFileSync(filePath, "utf8");

  // Track which modules are declared in this library file (e.g. "sap.f.d.ts" → "sap.f")
  const libName = file.replace(/\.d\.ts$/, ""); // e.g. "sap.f"
  if (!libraryModules.has(libName)) libraryModules.set(libName, new Set());
  const libModules = libraryModules.get(libName);

  // Find: declare module "sap/m/Button" { ... export default class Button
  const moduleRegex = /^declare module "([^"]+)"/gm;
  let moduleMatch;
  while ((moduleMatch = moduleRegex.exec(content)) !== null) {
    const moduleName = moduleMatch[1];
    libModules.add(moduleName);
    const moduleStart = moduleMatch.index;
    // Find the next declare module to bound our search
    const nextModule = content.indexOf("\ndeclare module ", moduleStart + 1);
    const moduleBody = content.slice(moduleStart, nextModule > 0 ? nextModule : undefined);

    // Look for "export default class X" or "export default abstract class X"
    const defaultClassMatch = moduleBody.match(/export default (?:abstract )?class ([A-Z][A-Za-z0-9_]*)/);
    if (defaultClassMatch) {
      defaultExports.set(moduleName, defaultClassMatch[1]);
      continue;
    }
    // Look for "export default enum X"
    const defaultEnumMatch = moduleBody.match(/export default enum ([A-Z][A-Za-z0-9_]*)/);
    if (defaultEnumMatch) {
      defaultExports.set(moduleName, defaultEnumMatch[1]);
      continue;
    }
    // Look for "export default function X"
    const defaultFuncMatch = moduleBody.match(/export default function ([A-Za-z_][A-Za-z0-9_]*)/);
    if (defaultFuncMatch) {
      defaultExports.set(moduleName, defaultFuncMatch[1]);
      continue;
    }
    // Look for "export default interface X"
    const defaultIfaceMatch = moduleBody.match(/export default interface ([A-Z][A-Za-z0-9_]*)/);
    if (defaultIfaceMatch) {
      defaultExports.set(moduleName, defaultIfaceMatch[1]);
      continue;
    }
    // Look for "export default X;" (re-export)
    const defaultReexportMatch = moduleBody.match(/^\s*export default ([A-Z][A-Za-z0-9_]*);/m);
    if (defaultReexportMatch) {
      defaultExports.set(moduleName, defaultReexportMatch[1]);
    }
  }
}
console.log(`  Found ${defaultExports.size} default exports`);

// Precompute namespace prefixes for all libraries (used to detect augmentations)
// e.g. "sap.f" → "sap/f/", "sap.ui.core" → "sap/ui/core/"
const libNamespacePrefixes = new Map();
for (const lib of libraryModules.keys()) {
  libNamespacePrefixes.set(lib, lib.replace(/\./g, "/") + "/");
}

// Remove cross-library augmentation blocks from .d.ts files.
// E.g. sap.f.d.ts augments "sap/tnt/library" — remove that block so TypeDoc
// sees "sap/tnt/library" only in sap.tnt.d.ts, generating the full content there.
let totalAugmentationsRemoved = 0;
for (const file of dtsFiles) {
  const libName = file.replace(/\.d\.ts$/, "");
  const filePath = join(TYPES_DIR, file);
  let content = readFileSync(filePath, "utf8");

  const moduleRegex = /^declare module "([^"]+)"/gm;
  const blocksToRemove = [];
  let match;
  while ((match = moduleRegex.exec(content)) !== null) {
    const moduleName = match[1]; // e.g. "sap/tnt/library"
    const moduleNs = moduleName + "/";

    // Check if another library owns this module's namespace
    for (const [otherLib, otherNs] of libNamespacePrefixes) {
      if (otherLib !== libName && moduleNs.startsWith(otherNs)) {
        // This is an augmentation of another library's module — mark for removal
        const blockStart = match.index;
        // Find the opening { of this declare module block
        const openBrace = content.indexOf("{", blockStart);
        if (openBrace < 0) break; // malformed — no opening brace, skip
        // Find the closing } by counting brace depth (skip braces inside comments and strings)
        let braceDepth = 0;
        let blockEnd = -1;
        for (let i = openBrace; i < content.length; i++) {
          const ch = content[i];
          // Skip single-line comments
          if (ch === "/" && content[i + 1] === "/") {
            i = content.indexOf("\n", i);
            if (i < 0) break;
            continue;
          }
          // Skip block comments (including JSDoc)
          if (ch === "/" && content[i + 1] === "*") {
            i = content.indexOf("*/", i + 2);
            if (i < 0) break;
            i += 1; // will be incremented by for-loop to skip past '*/'
            continue;
          }
          // Skip string literals (double-quoted)
          if (ch === '"') {
            i++;
            while (i < content.length && content[i] !== '"') {
              if (content[i] === "\\") i++;
              i++;
            }
            continue;
          }
          if (ch === "{") braceDepth++;
          else if (ch === "}") {
            braceDepth--;
            if (braceDepth === 0) { blockEnd = i + 1; break; }
          }
        }
        if (blockEnd <= blockStart) break; // couldn't find matching close brace
        blocksToRemove.push([blockStart, blockEnd]);
        break;
      }
    }
  }

  // Remove blocks in reverse order to preserve indices
  for (const [start, end] of blocksToRemove.reverse()) {
    content = content.slice(0, start) + content.slice(end);
  }

  if (blocksToRemove.length > 0) {
    writeFileSync(filePath, content);
    totalAugmentationsRemoved += blocksToRemove.length;
    console.log(`  Removed ${blocksToRemove.length} cross-library augmentation(s) from ${file}`);
  }
}
if (totalAugmentationsRemoved > 0) {
  console.log(`  Total augmentations removed: ${totalAugmentationsRemoved}`);
}

// Rewrite pass: rename default exports to named exports
for (const file of dtsFiles) {
  const filePath = join(TYPES_DIR, file);
  let content = readFileSync(filePath, "utf8");
  const original = content;
  // Rename all forms of default exports to named exports
  content = content.replace(/export default class /g, "export class ");
  content = content.replace(/export default abstract class /g, "export abstract class ");
  content = content.replace(/export default enum /g, "export enum ");
  content = content.replace(/export default function /g, "export function ");
  content = content.replace(/export default interface /g, "export interface ");
  // "export default Foo;" (re-export of a value/type) → remove the line
  content = content.replace(/^\s*export default [A-Z][A-Za-z0-9_]*;\s*$/gm, "");
  // Fix destructured default imports: { default as Foo } → { Foo }
  // Handles both single-line and multi-line cases
  content = content.replace(/\{ default as ([A-Za-z_][A-Za-z0-9_]*)/g, "{ $1");
  content = content.replace(/^\s*default as ([A-Za-z_][A-Za-z0-9_]*),?/gm, "  $1,");
  // Fix bare default imports: import Foo from "..." → import { Foo } from "..."
  content = content.replace(/^(\s*)import ([A-Z][A-Za-z0-9_]*) from (".*");/gm, '$1import { $2 } from $3;');
  if (content !== original) totalReplacements++;
  writeFileSync(filePath, content);
}
console.log(`  Modified ${totalReplacements}/${dtsFiles.length} files`);

// --- Step 2: Run TypeDoc with markdown plugin ---
console.log("\nStep 2: Running TypeDoc (markdown output)...");
if (existsSync(MD_DIR)) rmSync(MD_DIR, { recursive: true });

// Write tsconfig for TypeDoc
writeFileSync(
  join(WORK_DIR, "tsconfig.json"),
  JSON.stringify({
    compilerOptions: {
      target: "ES2020",
      module: "ES2020",
      moduleResolution: "bundler",
      skipLibCheck: true,
      noEmit: true,
      strict: false,
    },
    include: ["./types-modified/**/*.d.ts"],
  })
);

// Write TypeDoc config
writeFileSync(
  join(WORK_DIR, "typedoc.json"),
  JSON.stringify({
    $schema: "https://typedoc.org/schema.json",
    entryPoints: ["./types-modified"],
    entryPointStrategy: "expand",
    tsconfig: "./tsconfig.json",
    skipErrorChecking: true,
    out: "./docs-md",
    name: `${PKG.includes("openui5") ? "OpenUI5" : "SAPUI5"} TypeScript API (${actualVersion})`,
    readme: "none",
    disableSources: true,
    includeVersion: false,
    excludeExternals: false,
    excludePrivate: true,
    excludeProtected: true,
    plugin: ["typedoc-plugin-markdown"],
  })
);

// Run TypeDoc via its CLI entry point (cross-platform, no npx)
const typedocCli = join(__dirname, "node_modules/typedoc/bin/typedoc");
const typedocResult = spawnSync(process.execPath, [typedocCli], {
  cwd: WORK_DIR,
  stdio: ["pipe", "pipe", "pipe"],
  maxBuffer: 100 * 1024 * 1024, // 100 MB buffer for warnings
});
if (typedocResult.status !== 0 && !typedocResult.stdout.toString().includes("generated at")) {
  console.error("TypeDoc failed:", typedocResult.stderr?.toString().slice(-500));
  process.exit(1);
}
console.log("  TypeDoc complete");

// --- Step 3: Strip inherited members ---
console.log("\nStep 3: Stripping inherited members...");
let strippedCount = 0;

function stripInherited(content) {
  const lines = content.split("\n");
  const output = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check if this is a method/property section (### heading)
    if (line.startsWith("### ")) {
      // Collect the full section until next ### or EOF
      let j = i + 1;
      const sectionLines = [line];
      let hasInherited = false;

      while (j < lines.length && !lines[j].startsWith("### ")) {
        sectionLines.push(lines[j]);
        if (
          lines[j].trim().startsWith("#### Inherited from") ||
          lines[j].trim().startsWith("##### Inherited from")
        ) {
          hasInherited = true;
        }
        j++;
      }

      if (hasInherited) {
        // Skip this entire section
        strippedCount++;
        i = j;
        continue;
      } else {
        output.push(...sectionLines);
        i = j;
        continue;
      }
    } else {
      output.push(line);
      i++;
    }
  }

  return output.join("\n");
}

function stripDefaultListEntries(content) {
  // Remove list items linking to "default" from module READMEs
  // These are ghost entries from the original default export
  // Handles plain, deprecated (~~), and any markdown formatting around "default"
  return content.replace(/^-\s*\[(?:~~)?default(?:~~)?\]\([^)]*default[^)]*\)\s*$/gm, "");
}

function processMarkdownDir(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      processMarkdownDir(full);
    } else if (entry.endsWith(".md")) {
      let content = readFileSync(full, "utf8");
      content = stripInherited(content);
      content = stripDefaultListEntries(content);
      writeFileSync(full, content);
    }
  }
}

processMarkdownDir(MD_DIR);
console.log(`  Stripped ${strippedCount} inherited sections`);

// --- Step 4: Render to minimal HTML ---
console.log("\nStep 4: Rendering to minimal HTML...");
if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true });
mkdirSync(OUT_DIR, { recursive: true });

const frameworkName = PKG.includes("openui5") ? "OpenUI5" : "SAPUI5";

const CSS = `body{font-family:system-ui,-apple-system,sans-serif;max-width:56em;margin:0 auto;padding:1.5em;line-height:1.6;color:#1a1a2e}
pre{background:#f6f8fa;padding:1em;overflow-x:auto;border-radius:6px;border:1px solid #e1e4e8}
code{font-size:0.88em;background:#f6f8fa;padding:0.15em 0.4em;border-radius:3px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
pre code{background:none;padding:0;font-size:0.85em}
a{color:#0366d6;text-decoration:none}a:hover{text-decoration:underline}
h1{border-bottom:2px solid #e1e4e8;padding-bottom:0.3em;margin-top:0}
h2{border-bottom:1px solid #e8e8e8;padding-bottom:0.2em;margin-top:2em}
h3{margin-top:1.8em;color:#24292e}
h4,h5{margin-top:1em}
nav{font-size:0.85em;color:#586069;margin-bottom:1.5em;padding:0.5em 0;border-bottom:1px solid #e1e4e8}
nav a{margin-right:0.3em}
ul{padding-left:1.5em}
blockquote{border-left:3px solid #dfe2e5;padding-left:1em;color:#6a737d;margin:1em 0}
blockquote code{color:#005cc5}
hr{border:none;border-top:1px solid #e1e4e8;margin:2em 0}
footer{margin-top:3em;padding-top:1em;border-top:1px solid #e1e4e8;font-size:0.8em;color:#6a737d}
/* Syntax highlighting for TypeScript signatures */
.sig{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:0.88em;background:#f6f8fa;border:1px solid #e1e4e8;border-radius:6px;padding:0.6em 1em;display:block;overflow-x:auto;margin:0.5em 0}
.kw{color:#d73a49}.tp{color:#6f42c1}.fn{color:#6f42c1}.str{color:#032f62}.cm{color:#6a737d}`;

function htmlTemplate(title, breadcrumb, content, canonicalUrl) {
  const fullTitle = escapeHtml(`${title} — ${frameworkName} TypeScript API`);
  const description = escapeHtml(`${title} — ${frameworkName} TypeScript API Reference (${actualVersion})`);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${fullTitle}</title>
<meta name="description" content="${description}">
<meta name="viewport" content="width=device-width,initial-scale=1">
${canonicalUrl ? `<link rel="canonical" href="${canonicalUrl}">` : ""}
<meta property="og:title" content="${fullTitle}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="article">
${canonicalUrl ? `<meta property="og:url" content="${canonicalUrl}">` : ""}
<meta property="og:site_name" content="UI5 TypeScript API">
<style>${CSS}</style>
</head>
<body>
<nav>${breadcrumb}</nav>
${content}
<footer>Generated from <code>${PKG}@${actualVersion}</code> using TypeDoc. <a href="${BASE_URL}">Back to index</a>.</footer>
</body>
</html>`;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

let fileCount = 0;
let skippedCount = 0;

// Directories/files to exclude from output (not UI5-specific)
const EXCLUDE_PATTERNS = ["interfaces/JQuery", "interfaces/JQuery.", "/JQueryStatic", "JQueryPromise"];

// Link patterns pointing to dead targets (jQuery, QUnit, pseudo-types)
const DEAD_LINK_PATTERNS = [
  /namespaces\/JQuery[./]/i,
  /namespaces\/jQuery[./]/i,
  /interfaces\/JQuery/,
  /\/JQueryStatic/,
  /JQueryPromise/,
  /type-aliases\/jQuery\.html/,
  /variables\/jQuery\.html/,
  /namespaces\/QUnit[./]/,
  /variables\/QUnit\.html/,
  /type-aliases\/(int|float)\.html/,
];

function shouldExclude(relPath) {
  // Exclude jQuery-related pages
  if (EXCLUDE_PATTERNS.some((p) => relPath.includes(p))) return true;
  // Exclude residual "default.html" pages (from un-renamed default exports)
  if (relPath.endsWith("/default.html")) return true;
  // Exclude cross-library re-exports.
  // TypeDoc merges all .d.ts files into one documentation set, so the shared "sap" namespace
  // causes content from other libraries to appear under each library's directory.
  // We exclude a page if:
  //   (a) it doesn't match any module declared in the library's own .d.ts, OR
  //   (b) the module it matches belongs to another library's namespace (an augmentation).
  // For example, sap.f.d.ts augments "sap/tnt/library" — but sap.tnt owns that namespace,
  // so we exclude it from sap.f's output. Meanwhile sap.ui.core.d.ts declares "sap/base/Log"
  // which no other library owns, so it stays.
  const libMatch = relPath.match(/^(sap\.[^/]+)\//);
  if (libMatch) {
    const lib = libMatch[1]; // e.g. "sap.f"
    const afterLib = relPath.slice(lib.length + 1); // path after "sap.f/"
    // Always keep the library's own README (the module index page)
    if (afterLib === "README.html") return false;
    // Check against the definitive module list for this library
    const modules = libraryModules.get(lib);
    if (modules && modules.size > 0) {
      // Derive the module path from afterLib by trying successive directory prefixes.
      // E.g. "sap/f/Avatar/classes/Avatar.html" → try "sap/f/Avatar/classes/Avatar",
      // "sap/f/Avatar/classes", "sap/f/Avatar" until a Set.has() hit (O(1) per check).
      let matchingModule;
      const stripped = afterLib.replace(/\.html$/, "");
      let candidate = stripped;
      while (candidate) {
        if (modules.has(candidate)) {
          matchingModule = candidate;
          break;
        }
        const lastSlash = candidate.lastIndexOf("/");
        if (lastSlash < 0) break;
        candidate = candidate.slice(0, lastSlash);
      }
      if (!matchingModule) return true; // not declared in this library's .d.ts — exclude
      // Check if another library owns this module's namespace (= augmentation)
      const moduleNs = matchingModule + "/"; // e.g. "sap/tnt/library/"
      for (const [otherLib, otherNs] of libNamespacePrefixes) {
        if (otherLib !== lib && moduleNs.startsWith(otherNs)) {
          return true;
        }
      }
    }
  }
  return false;
}

function renderDir(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      renderDir(full);
    } else if (entry.endsWith(".md")) {
      const rel = posix(relative(MD_DIR, full)).replace(/\.md$/, ".html");

      // Skip jQuery-related pages (not UI5 APIs)
      if (shouldExclude(rel)) {
        skippedCount++;
        continue;
      }

      const md = readFileSync(full, "utf8");
      const html = marked(md);
      const outPath = join(OUT_DIR, rel);
      mkdirSync(dirname(outPath), { recursive: true });

      // Extract title from first H1
      const titleMatch = md.match(/^#\s+(.+)/m);
      const title = titleMatch
        ? titleMatch[1].replace(/[`*\[\]]/g, "")
        : basename(full, ".md");

      // Build breadcrumb with clickable segments
      // Only link segments that have a README.html (libraries and modules),
      // skip intermediate filesystem dirs like "sap", "m", "classes", "type-aliases"
      const parts = posix(relative(MD_DIR, full)).replace(/\.md$/, "").split("/");
      const pathParts = parts.slice(0, -1); // directory parts (everything except the filename)
      // Relative path from this file's directory to the output root
      const toRoot = "../".repeat(pathParts.length) || "./";
      let breadcrumbHtml = `<a href="${toRoot}index.html">${frameworkName} API</a>`;
      for (let pi = 0; pi < pathParts.length; pi++) {
        const segment = pathParts[pi];
        const segPath = pathParts.slice(0, pi + 1).join("/");
        // Only make it a link if that level has a page (README.md existed in the source)
        const readmeSrc = join(MD_DIR, segPath, "README.md");
        if (existsSync(readmeSrc)) {
          breadcrumbHtml += ` › <a href="${toRoot}${segPath}/README.html">${segment}</a>`;
        } else {
          breadcrumbHtml += ` › ${segment}`;
        }
      }
      const breadcrumb = breadcrumbHtml;

      // Canonical URL
      const canonicalUrl = BASE_URL + rel;

      // Rewrite .md links to .html (handles href="...md", href="...md#anchor", and markdown-style links)
      let htmlFixed = html.replace(/\.md(["#)'])/g, ".html$1");
      // Also handle href="something.md" without trailing char
      htmlFixed = htmlFixed.replace(/href="([^"]+)\.md"/g, 'href="$1.html"');
      // Remove dangling links to default.html (these were stripped from output)
      // Replace <a href="...default.html"><code>default</code></a> → just the text content
      htmlFixed = htmlFixed.replace(/<a href="[^"]*default\.html[^"]*">([^<]*)<\/a>/g, "$1");
      htmlFixed = htmlFixed.replace(/<a href="[^"]*default\.html[^"]*"><code>([^<]*)<\/code><\/a>/g, "<code>$1</code>");

      // Strip links to ClassInfo (global type alias, no useful page)
      htmlFixed = htmlFixed.replace(
        /<a href="[^"]*\/type-aliases\/ClassInfo\.html(?:#[^"]*)?"[^>]*><code>([^<]+)<\/code><\/a>/g,
        "<code>$1</code>"
      );

      // Strip links whose href points to dead targets (jQuery, QUnit, pseudo-types, nested namespaces)
      htmlFixed = htmlFixed.replace(/<a href="([^"]*)"[^>]*>(<code>[^<]+<\/code>)<\/a>/g, (match, href, content) => {
        if (DEAD_LINK_PATTERNS.some((p) => p.test(href))) return content;
        // Links with nested namespaces/ segments are always dead TypeDoc artifacts
        if ((href.match(/\/namespaces\//g) || []).length >= 2) return content;
        return match;
      });

      // Remove TypeDoc "References" section (global namespace re-export artifacts)
      // This is the raw content before htmlTemplate wraps it, so strip to end of string
      htmlFixed = htmlFixed.replace(/<h2>References<\/h2>[\s\S]*$/, "");

      // Add import hint for class/interface/type-alias pages
      // Path pattern: sap.m/sap/m/Button/classes/Button.html → module "sap/m/Button", class "Button"
      const classMatch = rel.match(/^[^/]+\/(.+)\/(classes|interfaces|type-aliases)\/([^/]+)\.html$/);
      if (classMatch) {
        const modulePath = classMatch[1]; // e.g. "sap/m/Button"
        const exportName = classMatch[3]; // e.g. "Button" or "$AppSettings"

        // Check the actual default export map (collected from the original .d.ts before rewriting)
        // A name is the default export if it matches what was declared as "export default" in that module
        const moduleDefaultExport = defaultExports.get(modulePath);
        const isDefaultExport = exportName === moduleDefaultExport;

        let importHint;
        if (isDefaultExport) {
          importHint = `<pre class="sig"><span class="kw">import</span> ${exportName} <span class="kw">from</span> <span class="str">"${modulePath}"</span>;</pre>`;
        } else {
          importHint = `<pre class="sig"><span class="kw">import</span> { ${exportName} } <span class="kw">from</span> <span class="str">"${modulePath}"</span>;</pre>`;
        }
        // Insert after the first <h1>...</h1> (h1 may contain <del> for deprecated items)
        htmlFixed = htmlFixed.replace(/(<h1>.*?<\/h1>)/, `$1\n${importHint}`);
      }

      writeFileSync(outPath, htmlTemplate(title, breadcrumb, htmlFixed, canonicalUrl));
      fileCount++;
    }
  }
}

renderDir(MD_DIR);
console.log(`  Rendered ${fileCount} HTML files (skipped ${skippedCount} jQuery-related)`);

// Post-processing: prune README entries pointing to non-existent pages
// This covers ambient globals (QUnit, global_Element) and ungenerated web component wrappers
console.log("  Pruning README entries with dead links...");
let prunedEntries = 0;
function pruneReadmes(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      pruneReadmes(full);
    } else if (entry === "README.html") {
      let html = readFileSync(full, "utf8");
      const original = html;
      html = html.replace(/<li><a href="([^"]+)">[^<]+<\/a><\/li>\n?/g, (match, href) => {
        const target = join(dirname(full), href.split("#")[0]);
        if (existsSync(target)) return match;
        prunedEntries++;
        return "";
      });
      if (html !== original) writeFileSync(full, html);
    }
  }
}
pruneReadmes(OUT_DIR);
if (prunedEntries > 0) console.log(`  Removed ${prunedEntries} dead README entries`);

// --- Step 5: Generate sitemap ---
console.log("\nStep 5: Generating sitemap...");
const sitemapEntries = [];
const today = new Date().toISOString().slice(0, 10);

function collectUrls(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      collectUrls(full);
    } else if (entry.endsWith(".html")) {
      const rel = posix(relative(OUT_DIR, full));
      sitemapEntries.push(BASE_URL + rel);
    }
  }
}

collectUrls(OUT_DIR);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map((url) => `  <url><loc>${url}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>`;

writeFileSync(join(OUT_DIR, "sitemap.xml"), sitemap);
console.log(`  Sitemap: ${sitemapEntries.length} URLs`);

// --- Step 6: Generate index page ---
console.log("\nStep 6: Generating index page...");

// Collect top-level library modules
const topLibs = readdirSync(OUT_DIR)
  .filter((d) => d.startsWith("sap.") && statSync(join(OUT_DIR, d)).isDirectory())
  .sort();

const indexHtml = htmlTemplate(
  `${frameworkName} TypeScript API (${actualVersion})`,
  `<a href="../">${frameworkName} versions</a>`,
  `<h1>${frameworkName} TypeScript API</h1>
<p>Version <strong>${actualVersion}</strong> — generated from <code>${PKG}</code></p>
<h2>Libraries</h2>
<ul>
${topLibs.map((lib) => `  <li><a href="${lib}/README.html">${lib}</a></li>`).join("\n")}
</ul>
<p><a href="sitemap.xml">Sitemap</a></p>`,
  BASE_URL
);
writeFileSync(join(OUT_DIR, "index.html"), indexHtml);

// --- Cleanup ---
console.log("\nStep 7: Cleanup...");
rmSync(WORK_DIR, { recursive: true });

// Write version marker (used by CI to detect if regeneration is needed)
writeFileSync(join(OUT_DIR, ".version"), actualVersion);

// Final stats
let totalSize = "?";
try { totalSize = execSync(`du -sh "${OUT_DIR}"`).toString().trim().split("\t")[0]; } catch {}
console.log(`\n✓ Done! Output: ${OUT_DIR} (${totalSize}, ${fileCount} files)`);
