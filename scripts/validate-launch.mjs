#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const contentDir = path.join(root, "src/content/services");
const pagesDir = path.join(root, "src/app/(marketing)");
const insightsIndex = path.join(root, "src/content/insights/index.ts");
const coreRoutes = ["/", "/about", "/services", "/contact", "/insights", "/gtn", "/gpn", "/acs"];

const subsidiaryRoutes = ["gtn", "gpn", "acs"];

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

function subsidiaryForCategory(category) {
  if (
    category.startsWith("Peacebuilding") ||
    category === "Peacebuilding & Reconciliation"
  ) {
    return "gpn";
  }
  if (
    category.startsWith("Care") ||
    category.startsWith("Employment") ||
    category.startsWith("Settlement") ||
    category === "Newcomer Integration"
  ) {
    return "acs";
  }
  return "gtn";
}

console.log("GPTC launch validation\n");

const contentFiles = fs
  .readdirSync(contentDir)
  .filter((file) => file.endsWith(".ts") && file !== "index.ts" && !file.endsWith("-new.ts"));

for (const file of contentFiles) {
  const slug = file.replace(".ts", "");
  const contentPath = path.join(contentDir, file);
  const content = fs.readFileSync(contentPath, "utf8");

  if (!content.includes("subsidiary:")) {
    fail(`Missing subsidiary field in content: ${slug}`);
  }

  const categoryMatch = content.match(/category:\s*"([^"]+)"/);
  const subsidiaryMatch = content.match(/subsidiary:\s*"([^"]+)"/);

  if (categoryMatch && subsidiaryMatch) {
    const expected = subsidiaryForCategory(categoryMatch[1]);
    if (subsidiaryMatch[1] !== expected) {
      fail(
        `Subsidiary mismatch for ${slug}: expected ${expected}, found ${subsidiaryMatch[1]}`,
      );
    }
  }
}

for (const arm of subsidiaryRoutes) {
  const dynamicRoute = path.join(pagesDir, arm, "[slug]", "page.tsx");
  const servicesRoute = path.join(pagesDir, arm, "services", "page.tsx");
  const homeRoute = path.join(pagesDir, arm, "page.tsx");

  if (!fs.existsSync(dynamicRoute)) {
    fail(`Missing dynamic service route: /${arm}/[slug]`);
  }
  if (!fs.existsSync(servicesRoute)) {
    fail(`Missing services hub: /${arm}/services`);
  }
  if (!fs.existsSync(homeRoute)) {
    fail(`Missing subsidiary home: /${arm}`);
  }
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
  "src/lib/subsidiaries/config.ts",
  "vercel.json",
  "PLANS/BACKLOG.md",
  "PLANS/TECH-DEBT.md",
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    fail(`Missing launch file: ${file}`);
  }
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

console.log(`\nIndividual service content files: ${contentFiles.length}`);
console.log(`Core routes: ${coreRoutes.length}`);
console.log(`Subsidiary arms: ${subsidiaryRoutes.length}`);
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  process.exit(1);
}

console.log("\nLaunch validation passed.");
if (warnings > 0) {
  console.log("Review warnings before production sign-off.");
}
