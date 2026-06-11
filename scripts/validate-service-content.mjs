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

let errors = 0;
const metaTitles = new Map();
const metaDescriptions = new Map();

for (const entry of registry) {
  const contentPath = path.join(contentDir, `${entry.slug}.ts`);
  const pagePath = path.join(pagesDir, entry.slug, "page.tsx");

  if (!fs.existsSync(contentPath)) {
    console.error(`Missing content file: ${entry.slug}`);
    errors++;
    continue;
  }

  if (!fs.existsSync(pagePath)) {
    console.error(`Missing page route: ${entry.slug}`);
    errors++;
  }

  const content = fs.readFileSync(contentPath, "utf8");

  if (content.includes("[DRAFT]")) {
    console.error(`Draft content remaining: ${entry.slug}`);
    errors++;
  }

  const titleMatch = content.match(/metaTitle:\s*"([^"]+)"/);
  const descMatch = content.match(/metaDescription:\s*\n?\s*"([^"]+)"/);

  if (!titleMatch || !descMatch) {
    console.error(`Missing metadata: ${entry.slug}`);
    errors++;
    continue;
  }

  const metaTitle = titleMatch[1];
  const metaDescription = descMatch[1];

  if (metaTitle.length > 60) {
    console.warn(`Warning: metaTitle > 60 chars (${metaTitle.length}): ${entry.slug}`);
  }

  if (metaDescription.length > 160) {
    console.warn(`Warning: metaDescription > 160 chars (${metaDescription.length}): ${entry.slug}`);
  }

  if (metaTitles.has(metaTitle)) {
    console.error(`Duplicate metaTitle "${metaTitle}": ${metaTitles.get(metaTitle)} and ${entry.slug}`);
    errors++;
  } else {
    metaTitles.set(metaTitle, entry.slug);
  }

  if (metaDescriptions.has(metaDescription)) {
    console.error(
      `Duplicate metaDescription: ${metaDescriptions.get(metaDescription)} and ${entry.slug}`,
    );
    errors++;
  } else {
    metaDescriptions.set(metaDescription, entry.slug);
  }

  const faqCount = (content.match(/question:/g) || []).length;
  if (faqCount < 4) {
    console.error(`Fewer than 4 FAQs (${faqCount}): ${entry.slug}`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\nContent validation failed with ${errors} error(s).`);
  process.exit(1);
}

console.log(`Validated ${registry.length} services:`);
console.log(`- All content files and routes present`);
console.log(`- No [DRAFT] markers`);
console.log(`- ${metaTitles.size} unique meta titles`);
console.log(`- ${metaDescriptions.size} unique meta descriptions`);
console.log(`- All pages have ≥ 4 FAQs`);
