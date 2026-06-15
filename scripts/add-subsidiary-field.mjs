#!/usr/bin/env node

/**
 * Adds subsidiary field to existing service content files based on category.
 * Usage: node scripts/add-subsidiary-field.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, "../src/content/services");

const GPN_CATEGORIES = new Set([
  "Peacebuilding & Reconciliation",
  "Peacebuilding Programs",
  "Peacebuilding Workshops",
  "Peacebuilding Initiatives",
]);
const ACS_CATEGORIES = new Set([
  "Newcomer Integration",
  "Care Programs",
  "Employment & Staffing",
  "Settlement & Integration",
]);

function subsidiaryForCategory(category) {
  if (GPN_CATEGORIES.has(category)) return "gpn";
  if (ACS_CATEGORIES.has(category)) return "acs";
  return "gtn";
}

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".ts") && f !== "index.ts");

for (const file of files) {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes("subsidiary:")) {
    continue;
  }

  const categoryMatch = content.match(/category:\s*"([^"]+)"/);
  if (!categoryMatch) {
    console.warn(`Skipping ${file}: no category found`);
    continue;
  }

  const subsidiary = subsidiaryForCategory(categoryMatch[1]);
  content = content.replace(/(slug: "[^"]+",)\n/, `$1\n  subsidiary: "${subsidiary}",\n`);

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file} → ${subsidiary}`);
}

console.log("Done.");
