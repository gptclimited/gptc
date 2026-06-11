#!/usr/bin/env node

/**
 * Scaffolds stub content files, static page routes, and content index
 * for all services in the registry. Skips slugs that already have content files.
 *
 * Usage: node scripts/scaffold-services.mjs
 *        node scripts/scaffold-services.mjs college-admissions
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const contentDir = path.join(root, "src/content/services");
const pagesDir = path.join(root, "src/app/(marketing)");

const registry = JSON.parse(
  fs.readFileSync(path.join(root, "scripts/service-registry.json"), "utf8"),
);

const PILOT_SLUGS = new Set(["college-admissions", "newcomer-integration"]);
const targetSlug = process.argv[2];

function slugToExportName(slug) {
  return slug
    .split("-")
    .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join("");
}

function slugToComponentName(slug) {
  return slugToExportName(slug).charAt(0).toUpperCase() + slugToExportName(slug).slice(1) + "Page";
}

function getRelatedSlugs(entry, allEntries) {
  const siblings = allEntries
    .filter((item) => item.category === entry.category && item.slug !== entry.slug)
    .map((item) => item.slug)
    .slice(0, 3);
  return siblings;
}

function generateStubContent(entry, allEntries) {
  const exportName = slugToExportName(entry.slug);
  const relatedSlugs = getRelatedSlugs(entry, allEntries);

  return `import type { ServicePage } from "@/types/service";

export const ${exportName}: ServicePage = {
  slug: "${entry.slug}",
  title: "${entry.title}",
  category: "${entry.category}",
  metaTitle: "${entry.title} | Global Training Network",
  metaDescription: "[DRAFT] ${entry.title} services from Global Training Network. Full content coming in Phase 5.",
  hero: {
    headline: "${entry.title}",
    subheadline: "[DRAFT] Personalized ${entry.title.toLowerCase()} support from Global Training Network. Content to be finalized in Phase 5.",
  },
  overview: "[DRAFT] Overview content for ${entry.title} will be added in Phase 5. Global Training Network provides expert consulting, training, and mentorship in this area.",
  whoWeServe: [
    "[DRAFT] Target audience to be confirmed",
    "Students and learners seeking guidance",
    "Families and community organizations",
  ],
  benefits: [
    {
      title: "[DRAFT] Benefit One",
      description: "Detailed benefit description to be added in Phase 5.",
    },
    {
      title: "[DRAFT] Benefit Two",
      description: "Detailed benefit description to be added in Phase 5.",
    },
    {
      title: "[DRAFT] Benefit Three",
      description: "Detailed benefit description to be added in Phase 5.",
    },
    {
      title: "[DRAFT] Benefit Four",
      description: "Detailed benefit description to be added in Phase 5.",
    },
  ],
  process: [
    {
      step: 1,
      title: "Initial Consultation",
      description: "[DRAFT] We assess your needs and goals.",
    },
    {
      step: 2,
      title: "Personalized Plan",
      description: "[DRAFT] We develop a tailored approach.",
    },
    {
      step: 3,
      title: "Guided Support",
      description: "[DRAFT] We deliver structured support and mentorship.",
    },
    {
      step: 4,
      title: "Progress Review",
      description: "[DRAFT] We review outcomes and adjust as needed.",
    },
  ],
  faq: [
    {
      question: "[DRAFT] What does ${entry.title} include?",
      answer: "Full FAQ content will be added in Phase 5.",
    },
    {
      question: "[DRAFT] Who is this service for?",
      answer: "Full FAQ content will be added in Phase 5.",
    },
    {
      question: "[DRAFT] How do I get started?",
      answer: "Book a consultation through our contact page to discuss your needs with our team.",
    },
    {
      question: "[DRAFT] Does GTN serve international clients?",
      answer: "Full FAQ content will be added in Phase 5.",
    },
  ],
  relatedSlugs: ${JSON.stringify(relatedSlugs)},
};
`;
}

function generatePageRoute(entry) {
  const exportName = slugToExportName(entry.slug);
  const componentName = slugToComponentName(entry.slug);

  return `import { ${exportName} } from "@/content/services/${entry.slug}";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(${exportName});

export default function ${componentName}() {
  return <ServicePageTemplate service={${exportName}} />;
}
`;
}

function generateIndex(entries) {
  const imports = entries
    .map((entry) => {
      const exportName = slugToExportName(entry.slug);
      return `import { ${exportName} } from "@/content/services/${entry.slug}";`;
    })
    .join("\n");

  const mapEntries = entries
    .map((entry) => `  "${entry.slug}": ${slugToExportName(entry.slug)},`)
    .join("\n");

  const arrayEntries = entries
    .map((entry) => slugToExportName(entry.slug))
    .join(", ");

  return `${imports}
import type { ServicePage } from "@/types/service";

export const servicesBySlug: Record<string, ServicePage> = {
${mapEntries}
};

export const allServices: ServicePage[] = [${arrayEntries}];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicesBySlug[slug];
}

export function getAllServices(): ServicePage[] {
  return allServices;
}

export function getServicesByCategory(category: ServicePage["category"]): ServicePage[] {
  return allServices.filter((service) => service.category === category);
}
`;
}

function main() {
  fs.mkdirSync(contentDir, { recursive: true });

  const entries = targetSlug
    ? registry.filter((entry) => entry.slug === targetSlug)
    : registry;

  if (targetSlug && entries.length === 0) {
    console.error(`Slug "${targetSlug}" not found in registry.`);
    process.exit(1);
  }

  let created = 0;
  let skipped = 0;

  for (const entry of entries) {
    const contentPath = path.join(contentDir, `${entry.slug}.ts`);
    const pagePath = path.join(pagesDir, entry.slug, "page.tsx");
    const isPilot = PILOT_SLUGS.has(entry.slug);

    if (isPilot && !targetSlug) {
      skipped++;
    } else if (!fs.existsSync(contentPath) || targetSlug) {
      if (!(isPilot && fs.existsSync(contentPath))) {
        fs.writeFileSync(contentPath, generateStubContent(entry, registry));
        created++;
      }
    } else {
      skipped++;
    }

    fs.mkdirSync(path.dirname(pagePath), { recursive: true });
    fs.writeFileSync(pagePath, generatePageRoute(entry));
  }

  if (!targetSlug) {
    fs.writeFileSync(path.join(contentDir, "index.ts"), generateIndex(registry));
  }

  console.log(`Scaffold complete: ${created} content files written, ${skipped} skipped.`);
  console.log(`Generated ${registry.length} page routes${targetSlug ? "" : " and content index"}.`);
}

main();
