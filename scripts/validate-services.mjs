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

for (const entry of registry) {
  const contentPath = path.join(contentDir, `${entry.slug}.ts`);
  const pagePath = path.join(pagesDir, entry.slug, "page.tsx");

  if (!fs.existsSync(contentPath)) {
    console.error(`Missing content file: ${contentPath}`);
    errors++;
  }

  if (!fs.existsSync(pagePath)) {
    console.error(`Missing page route: ${pagePath}`);
    errors++;
  }
}

const indexPath = path.join(contentDir, "index.ts");
if (!fs.existsSync(indexPath)) {
  console.error("Missing content index: src/content/services/index.ts");
  errors++;
}

if (errors > 0) {
  console.error(`Validation failed with ${errors} error(s).`);
  process.exit(1);
}

console.log(`Validated ${registry.length} services — all content files and routes present.`);
