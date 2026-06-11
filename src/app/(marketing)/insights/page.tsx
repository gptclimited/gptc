import { Suspense } from "react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { InsightsHub } from "@/components/sections/insights-hub";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllInsights } from "@/content/insights";
import { siteConfig } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getCategoryName, type InsightCategorySlug } from "@/types/insight";

export const metadata: Metadata = generatePageMetadata({
  title: "Insights",
  description: `Articles and thought leadership from ${siteConfig.name} on education, leadership, newcomer integration, and community development.`,
  path: "/insights",
});

type InsightsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function InsightsPage({ searchParams }: InsightsPageProps) {
  const { category } = await searchParams;
  const initialCategory = category
    ? getCategoryName(category as InsightCategorySlug)
    : undefined;
  const articles = getAllInsights();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <PageHeader
        title="Insights"
        description="Practical guidance on education, leadership, integration, and community development from the GTN team."
        breadcrumb={
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
        }
      />

      <Suspense fallback={<InsightsHubSkeleton />}>
        <InsightsHub articles={articles} initialCategory={initialCategory} />
      </Suspense>
    </main>
  );
}

function InsightsHubSkeleton() {
  return (
    <Section background="white">
      <Container className="space-y-8">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-28 rounded-full" />
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-72 w-full rounded-xl" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
