#!/usr/bin/env node
/**
 * Generates index pages, sitemap index, and llms.txt for the API documentation site.
 *
 * This script runs after per-version docs have been generated. It scans the api/
 * directory for version folders (identified by a .version marker file) and produces:
 *   - api/index.html           — main landing page listing all frameworks and versions
 *   - api/{framework}/index.html — per-framework version list
 *   - sitemap.xml              — sitemap index referencing all per-version sitemaps
 *   - api/llms.txt             — LLM-friendly structured overview
 *
 * Usage:
 *   node generate-index-pages.mjs --api-dir <path> --site-root <path> --base-url <url>
 *
 * Example (from workflow):
 *   node generate-index-pages.mjs --api-dir api --site-root . --base-url https://ui5.github.io/typescript/api
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "fs";
import { join, basename } from "path";

// --- Argument parsing ---

const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 ? args[idx + 1] : undefined;
}

const API_DIR = getArg("api-dir");
const SITE_ROOT = getArg("site-root");
const BASE_URL = getArg("base-url");

if (!API_DIR || !SITE_ROOT || !BASE_URL) {
  console.error("Usage: generate-index-pages.mjs --api-dir <path> --site-root <path> --base-url <url>");
  process.exit(1);
}

// Derive the site-level URL from the base-url (strip trailing /api or /api/)
const SITE_URL = BASE_URL.replace(/\/api\/?$/, "");

// --- Framework definitions ---

const FRAMEWORKS = [
  { id: "openui5", title: "OpenUI5", pkg: "@openui5/types" },
  { id: "sapui5", title: "SAPUI5", pkg: "@sapui5/types" },
];

// Key libraries to highlight in llms.txt (from OpenUI5)
const KEY_LIBRARIES = [
  { id: "sap.m", desc: "Main UI controls — Button, Input, List, Table, Dialog, MessageBox" },
  { id: "sap.ui.core", desc: "Core framework — Control, Element, Component, Model, routing" },
  { id: "sap.f", desc: "SAP Fiori controls — FlexibleColumnLayout, ShellBar, DynamicPage" },
  { id: "sap.ui.table", desc: "Analytical and tree tables" },
  { id: "sap.ui.layout", desc: "Layout controls — Grid, Splitter, ResponsiveFlowLayout" },
  { id: "sap.uxap", desc: "Object Page pattern" },
  { id: "sap.ui.integration", desc: "Integration Cards" },
  { id: "sap.tnt", desc: "Tool Page, InfoLabel, SideNavigation" },
];

// --- Helpers ---

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * Scan a framework directory for version subdirectories containing a .version marker.
 * Returns sorted array (newest first) of { dir, minor, fullVersion }.
 */
function getVersions(frameworkDir) {
  if (!existsSync(frameworkDir)) return [];

  return readdirSync(frameworkDir)
    .filter((d) => {
      const full = join(frameworkDir, d);
      return statSync(full).isDirectory() && existsSync(join(full, ".version"));
    })
    .map((d) => ({
      dir: d,
      minor: d,
      fullVersion: readFileSync(join(frameworkDir, d, ".version"), "utf8").trim(),
    }))
    .sort((a, b) => {
      // Sort by major.minor descending (e.g. 2.1 > 1.149 > 1.136)
      const [aMaj, aMin] = a.minor.split(".").map(Number);
      const [bMaj, bMin] = b.minor.split(".").map(Number);
      return bMaj - aMaj || bMin - aMin;
    });
}

// --- CSS (shared with generate.mjs — index page style) ---

const CSS = `body{font-family:system-ui,-apple-system,sans-serif;max-width:56em;margin:0 auto;padding:2em;line-height:1.6;color:#1a1a2e}a{color:#0366d6;text-decoration:none}a:hover{text-decoration:underline}h1{border-bottom:2px solid #e1e4e8;padding-bottom:0.3em}h2{margin-top:2em}table{border-collapse:collapse;width:100%}th,td{text-align:left;padding:0.5em 1em;border-bottom:1px solid #e1e4e8}th{background:#f6f8fa}nav{font-size:0.9em;margin-bottom:1.5em}`;

function htmlPage({ title, description, canonicalUrl, nav, content }) {
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="canonical" href="${canonicalUrl}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:site_name" content="UI5 TypeScript API">
<style>${CSS}</style>
</head><body>
<nav>${nav}</nav>
${content}
</body></html>
`;
}

function versionTable(versions, hrefPrefix) {
  const rows = versions
    .map((v) => `<tr><td><a href="${hrefPrefix}${v.dir}/index.html">${v.fullVersion}</a></td><td>${v.minor}</td></tr>`)
    .join("");
  return `<table><thead><tr><th>Version</th><th>Minor</th></tr></thead><tbody>${rows}</tbody></table>`;
}

// --- Generate pages ---

console.log("Generating index pages...");

// Collect all framework data
const frameworkData = FRAMEWORKS.map((fw) => ({
  ...fw,
  versions: getVersions(join(API_DIR, fw.id)),
})).filter((fw) => fw.versions.length > 0);

// 1. Main index: api/index.html
const mainSections = frameworkData
  .map(
    (fw) => `<h2>${fw.title}</h2>
<p>Package: <code>${fw.pkg}</code></p>
${versionTable(fw.versions, `${fw.id}/`)}`
  )
  .join("\n");

writeFileSync(
  join(API_DIR, "index.html"),
  htmlPage({
    title: "UI5 TypeScript API Reference",
    description: "Crawlable TypeScript API documentation for OpenUI5 and SAPUI5",
    canonicalUrl: `${BASE_URL}/`,
    nav: `<a href="../">&larr; UI5 &amp; TypeScript</a>`,
    content: `<h1>UI5 TypeScript API Reference</h1>
<p>Generated from <code>@openui5/types</code> and <code>@sapui5/types</code> type definitions.</p>
${mainSections}`,
  })
);
console.log("  api/index.html");

// 2. Per-framework index: api/{framework}/index.html
for (const fw of frameworkData) {
  writeFileSync(
    join(API_DIR, fw.id, "index.html"),
    htmlPage({
      title: `${fw.title} TypeScript API — Versions`,
      description: `${fw.title} TypeScript API — available versions of ${fw.pkg} type definitions`,
      canonicalUrl: `${BASE_URL}/${fw.id}/`,
      nav: `<a href="../">&larr; All Frameworks</a>`,
      content: `<h1>${fw.title} TypeScript API</h1>
<p>Package: <code>${fw.pkg}</code></p>
${versionTable(fw.versions, "")}`,
    })
  );
  console.log(`  api/${fw.id}/index.html`);
}

// 3. Sitemap index: sitemap.xml (at site root)
const sitemapRefs = [];

// Include the static site sitemap if it exists
const siteSitemapPath = join(SITE_ROOT, "sitemap-site.xml");
if (existsSync(siteSitemapPath)) {
  sitemapRefs.push(`${SITE_URL}/sitemap-site.xml`);
}

// Include all per-version sitemaps
for (const fw of frameworkData) {
  for (const v of fw.versions) {
    const sitemapPath = join(API_DIR, fw.id, v.dir, "sitemap.xml");
    if (existsSync(sitemapPath)) {
      sitemapRefs.push(`${BASE_URL}/${fw.id}/${v.dir}/sitemap.xml`);
    }
  }
}

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRefs.map((url) => `  <sitemap><loc>${url}</loc></sitemap>`).join("\n")}
</sitemapindex>
`;

writeFileSync(join(SITE_ROOT, "sitemap.xml"), sitemapIndex);
console.log(`  sitemap.xml (${sitemapRefs.length} sitemaps)`);

// 4. LLM-friendly overview: api/llms.txt
const latestOpenUI5 = frameworkData.find((fw) => fw.id === "openui5")?.versions[0];

let llmsTxt = `# UI5 TypeScript API Reference

> Complete TypeScript API documentation for the OpenUI5 and SAPUI5 UI frameworks, generated from @openui5/types and @sapui5/types npm packages.

Each class page includes the TypeScript import statement, inheritance hierarchy, constructor signatures, properties, methods, events, and associations. All content is static HTML — no JavaScript required for reading.

## Versions
`;

for (const fw of frameworkData) {
  llmsTxt += `\n### ${fw.title}\n`;
  for (const v of fw.versions) {
    llmsTxt += `- [${fw.title} ${v.minor}](${BASE_URL}/${fw.id}/${v.dir}/index.html): ${v.fullVersion}\n`;
  }
}

if (latestOpenUI5) {
  const latestDir = latestOpenUI5.dir;
  llmsTxt += `\n## Key Libraries (OpenUI5 ${latestDir})\n\n`;
  for (const lib of KEY_LIBRARIES) {
    llmsTxt += `- [${lib.id}](${BASE_URL}/openui5/${latestDir}/${lib.id}/README.html): ${lib.desc}\n`;
  }
}

llmsTxt += `\n## Resources\n
- [Sitemap Index](${SITE_URL}/sitemap.xml): Machine-readable index of all per-version sitemaps
- [UI5 & TypeScript Guide](${SITE_URL}/): Getting started, FAQ, release notes
- [npm: @openui5/types](https://www.npmjs.com/package/@openui5/types): OpenUI5 type definitions package
- [npm: @sapui5/types](https://www.npmjs.com/package/@sapui5/types): SAPUI5 type definitions package
`;

writeFileSync(join(API_DIR, "llms.txt"), llmsTxt);
console.log("  api/llms.txt");

console.log("\nDone.");
