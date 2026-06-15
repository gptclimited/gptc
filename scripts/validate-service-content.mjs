#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const contentDir = path.join(root, "src/content/services");

let errors = 0;
const metaTitles = new Map();
const metaDescriptions = new Map();

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

function validateContentFile(filePath, slug) {
  const content = fs.readFileSync(filePath, "utf8");

  if (content.includes("[DRAFT]")) {
    console.error(`Draft content remaining: ${slug}`);
    errors++;
  }

  if (!content.includes("subsidiary:")) {
    console.error(`Missing subsidiary field: ${slug}`);
    errors++;
  }

  const titleMatch = content.match(/metaTitle:\s*"([^"]+)"/);
  const descMatch = content.match(/metaDescription:\s*\n?\s*"([^"]+)"/);
  const subsidiaryMatch = content.match(/subsidiary:\s*"([^"]+)"/);

  if (!titleMatch || !descMatch) {
    console.error(`Missing metadata: ${slug}`);
    errors++;
    return;
  }

  const metaTitle = titleMatch[1];
  const metaDescription = descMatch[1];
  const subsidiary = subsidiaryMatch?.[1] ?? "unknown";
  const scopedTitleKey = `${subsidiary}:${metaTitle}`;
  const scopedDescKey = `${subsidiary}:${metaDescription}`;

  if (metaTitle.length > 70) {
    console.warn(`Warning: metaTitle > 70 chars (${metaTitle.length}): ${slug}`);
  }

  if (metaDescription.length > 160) {
    console.warn(`Warning: metaDescription > 160 chars (${metaDescription.length}): ${slug}`);
  }

  if (metaTitles.has(scopedTitleKey)) {
    console.error(
      `Duplicate metaTitle within ${subsidiary} "${metaTitle}": ${metaTitles.get(scopedTitleKey)} and ${slug}`,
    );
    errors++;
  } else {
    metaTitles.set(scopedTitleKey, slug);
  }

  if (metaDescriptions.has(scopedDescKey)) {
    console.error(
      `Duplicate metaDescription within ${subsidiary}: ${metaDescriptions.get(scopedDescKey)} and ${slug}`,
    );
    errors++;
  } else {
    metaDescriptions.set(scopedDescKey, slug);
  }

  const faqCount = (content.match(/question:/g) || []).length;
  if (faqCount < 4 && !filePath.endsWith("-new.ts")) {
    console.error(`Expected at least 4 FAQ items: ${slug} (found ${faqCount})`);
    errors++;
  }
}

const individualFiles = fs
  .readdirSync(contentDir)
  .filter((file) => file.endsWith(".ts") && file !== "index.ts" && !file.endsWith("-new.ts"));

for (const file of individualFiles) {
  validateContentFile(path.join(contentDir, file), file.replace(".ts", ""));
}

for (const batchFile of ["gpn-new.ts", "acs-new.ts", "gtn-new.ts"]) {
  const batchPath = path.join(contentDir, batchFile);
  if (!fs.existsSync(batchPath)) {
    console.error(`Missing batch service file: ${batchFile}`);
    errors++;
    continue;
  }
  const content = fs.readFileSync(batchPath, "utf8");
  if (content.includes("[DRAFT]")) {
    console.error(`Draft content in batch file: ${batchFile}`);
    errors++;
  }
  if (!content.includes("createServicePage")) {
    console.error(`Batch file missing createServicePage usage: ${batchFile}`);
    errors++;
  }
}

console.log(`Validated ${individualFiles.length} individual + batch service definitions.`);

if (errors > 0) {
  console.error(`\n${errors} validation error(s).`);
  process.exit(1);
}

console.log("Service content validation passed.");
