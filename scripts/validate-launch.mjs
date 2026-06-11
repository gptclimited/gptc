#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const registry = JSON.parse(
  fs.readFileSync(path.join(root, "scripts/service-registry.json"), "utf8"),
);

const contentDir = path.join(root, "src/content/services");
const pagesDir = path.join(root, "src/app/(marketing)");
const insightsIndex = path.join(root, "src/content/insights/index.ts");
const coreRoutes = ["/", "/about", "/services", "/contact", "/insights"];

let errors = 0;
let warnings = 0;

function warn(message) {
  console.warn(`WARN: ${message}`);
  warnings++;
}

function fail(message) {
  console.error(`ERROR: ${message}`);
  errors++;
}

console.log("GTN launch validation\n");

for (const entry of registry) {
  const contentPath = path.join(contentDir, `${entry.slug}.ts`);
  const pagePath = path.join(pagesDir, entry.slug, "page.tsx");

  if (!fs.existsSync(contentPath)) {
    fail(`Missing service content: ${entry.slug}`);
  }

  if (!fs.existsSync(pagePath)) {
    fail(`Missing service page: /${entry.slug}`);
  }
}

if (registry.length !== 49) {
  fail(`Expected 49 services in registry, found ${registry.length}`);
}

if (!fs.existsSync(insightsIndex)) {
  fail("Missing insights content index");
} else {
  const insightFiles = fs
    .readdirSync(path.join(root, "src/content/insights"))
    .filter((file) => file.endsWith(".ts") && file !== "index.ts");

  if (insightFiles.length < 8) {
    fail(`Expected at least 8 insight articles, found ${insightFiles.length}`);
  }
}

for (const route of coreRoutes) {
  const routePath =
    route === "/"
      ? path.join(pagesDir, "page.tsx")
      : path.join(pagesDir, route.slice(1), "page.tsx");

  if (!fs.existsSync(routePath)) {
    fail(`Missing core page: ${route}`);
  }
}

if (!fs.existsSync(path.join(root, "PLANS/BACKLOG.md"))) {
  fail("Missing PLANS/BACKLOG.md post-launch backlog");
}

if (!fs.existsSync(path.join(root, "PLANS/decisions/README.md"))) {
  fail("Missing PLANS/decisions/ architecture decision log");
}

const requiredFiles = [
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/app/insights/feed.xml/route.ts",
  "src/components/analytics/google-analytics.tsx",
  "vercel.json",
  "PLANS/BACKLOG.md",
  "PLANS/TECH-DEBT.md",
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    fail(`Missing launch file: ${file}`);
  }
}

const placeholderPattern = /\[CLIENT CONTENT NEEDED\]/g;
const scannedDirs = [
  path.join(root, "src/lib/content"),
  path.join(root, "src/app/(marketing)/page.tsx"),
];

let placeholderCount = 0;
for (const target of scannedDirs) {
  if (!fs.existsSync(target)) continue;

  const files = fs.statSync(target).isDirectory()
    ? fs.readdirSync(target).map((file) => path.join(target, file))
    : [target];

  for (const file of files) {
    if (!file.endsWith(".ts") && !file.endsWith(".tsx")) continue;
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(placeholderPattern);
    if (matches) {
      placeholderCount += matches.length;
    }
  }
}

if (placeholderCount > 0) {
  warn(
    `${placeholderCount} [CLIENT CONTENT NEEDED] placeholder(s) remain — confirm with client before hard launch`,
  );
}

const envExample = fs.readFileSync(path.join(root, ".env.example"), "utf8");
for (const key of [
  "RESEND_API_KEY",
  "CONTACT_EMAIL",
  "RESEND_FROM_EMAIL",
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_GA_ID",
]) {
  if (!envExample.includes(key)) {
    fail(`.env.example missing ${key}`);
  }
}

console.log(`\nServices: ${registry.length}`);
console.log(`Core routes: ${coreRoutes.length}`);
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  process.exit(1);
}

console.log("\nLaunch validation passed.");
if (warnings > 0) {
  console.log("Review warnings before production sign-off.");
}
