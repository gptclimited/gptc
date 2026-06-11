export const insightCategoryDefinitions = [
  { name: "Student Success", slug: "student-success" },
  { name: "Admissions", slug: "admissions" },
  { name: "Scholarships", slug: "scholarships" },
  { name: "International Education", slug: "international-education" },
  { name: "Newcomer Integration", slug: "newcomer-integration" },
  { name: "Leadership Development", slug: "leadership-development" },
  { name: "Community Building", slug: "community-building" },
  { name: "Peacebuilding", slug: "peacebuilding" },
  { name: "Digital Skills", slug: "digital-skills" },
  { name: "Family Development", slug: "family-development" },
] as const;

export type InsightCategoryName = (typeof insightCategoryDefinitions)[number]["name"];
export type InsightCategorySlug = (typeof insightCategoryDefinitions)[number]["slug"];

export interface InsightArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: InsightCategoryName;
  publishedAt: string;
  body: string;
  coverImage?: string;
}

export function getCategorySlug(category: InsightCategoryName): InsightCategorySlug {
  const match = insightCategoryDefinitions.find((item) => item.name === category);
  if (!match) {
    throw new Error(`Unknown insight category: ${category}`);
  }
  return match.slug;
}

export function getCategoryName(slug: InsightCategorySlug): InsightCategoryName | undefined {
  return insightCategoryDefinitions.find((item) => item.slug === slug)?.name;
}
