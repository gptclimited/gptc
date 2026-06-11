import type { InsightArticle, InsightCategoryName } from "@/types/insight";

const WORDS_PER_MINUTE = 200;

export function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatPublishedDate(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getRelatedArticles(
  article: InsightArticle,
  articles: InsightArticle[],
  limit = 3,
): InsightArticle[] {
  const sameCategory = articles.filter(
    (item) => item.slug !== article.slug && item.category === article.category,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = articles.filter(
    (item) => item.slug !== article.slug && item.category !== article.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function filterArticlesByCategory(
  articles: InsightArticle[],
  category?: InsightCategoryName,
): InsightArticle[] {
  if (!category) return articles;
  return articles.filter((article) => article.category === category);
}

export function sortArticlesByDate(articles: InsightArticle[]): InsightArticle[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export const categoryCoverGradients: Record<string, string> = {
  "student-success": "from-gtn-primary to-gtn-secondary",
  admissions: "from-gtn-secondary to-gtn-primary",
  scholarships: "from-gtn-accent/80 to-gtn-primary",
  "international-education": "from-gtn-primary to-[#0e7490]",
  "newcomer-integration": "from-gtn-secondary to-[#0369a1]",
  "leadership-development": "from-gtn-primary to-[#334155]",
  "community-building": "from-[#1d4ed8] to-gtn-primary",
  peacebuilding: "from-gtn-primary to-[#475569]",
  "digital-skills": "from-[#0f766e] to-gtn-secondary",
  "family-development": "from-gtn-secondary to-gtn-accent/70",
};

export function getCategoryGradient(categorySlug: string): string {
  return categoryCoverGradients[categorySlug] ?? "from-gtn-primary to-gtn-secondary";
}
