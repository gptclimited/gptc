#!/usr/bin/env node

/**
 * Regenerates src/content/services/index.ts from all service content files.
 * Usage: node scripts/regenerate-services-index.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, "../src/content/services");
const indexPath = path.join(contentDir, "index.ts");

const skipFiles = new Set(["index.ts", "gpn-new.ts", "acs-new.ts", "gtn-new.ts"]);

function slugToExportName(slug) {
  return slug
    .split("-")
    .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join("");
}

const files = fs
  .readdirSync(contentDir)
  .filter((f) => f.endsWith(".ts") && !skipFiles.has(f))
  .sort();

const batchImports = [
  { file: "gpn-new", exports: "gpnNewServices" },
  { file: "acs-new", exports: "acsNewServices" },
  { file: "gtn-new", exports: "gtnNewServices" },
];

const imports = [
  ...files.map((file) => {
    const slug = file.replace(".ts", "");
    const exportName = slugToExportName(slug);
    return `import { ${exportName} } from "@/content/services/${slug}";`;
  }),
  ...batchImports.map(
    ({ file, exports }) => `import { ${exports} } from "@/content/services/${file}";`,
  ),
];

const individualEntries = files.map((file) => {
  const slug = file.replace(".ts", "");
  return `  "${slug}": ${slugToExportName(slug)},`;
});

const batchSpreads = batchImports.map(({ exports }) => `  ...${exports},`);

const content = `${imports.join("\n")}
import type { ServicePage } from "@/types/service";
import type { SubsidiarySlug } from "@/lib/subsidiaries";

const individualServices: ServicePage[] = [
${files.map((file) => `  ${slugToExportName(file.replace(".ts", ""))},`).join("\n")}
];

const batchServices: ServicePage[] = [
${batchSpreads.join("\n")}
];

export const allServices: ServicePage[] = [...individualServices, ...batchServices];

export const servicesBySlug: Record<string, ServicePage> = Object.fromEntries(
  allServices.map((service) => [service.slug, service]),
);

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicesBySlug[slug];
}

export function getAllServices(): ServicePage[] {
  return allServices;
}

export function getServicesByCategory(category: ServicePage["category"]): ServicePage[] {
  return allServices.filter((service) => service.category === category);
}

export function getServicesBySubsidiary(subsidiary: SubsidiarySlug): ServicePage[] {
  return allServices.filter((service) => service.subsidiary === subsidiary);
}
`;

fs.writeFileSync(indexPath, content);
console.log(`Regenerated index with ${files.length} individual + batch services.`);
