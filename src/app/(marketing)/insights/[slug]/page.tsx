import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePageTemplate } from "@/components/templates/article-page-template";
import { getAllInsights, getInsightBySlug } from "@/content/insights";
import { getRelatedArticles } from "@/lib/insights/utils";
import { generateArticleMetadata } from "@/lib/seo/metadata";

type InsightArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllInsights().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return {};
  }

  return generateArticleMetadata(article);
}

export default async function InsightArticlePage({ params }: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, getAllInsights());

  return <ArticlePageTemplate article={article} relatedArticles={relatedArticles} />;
}
