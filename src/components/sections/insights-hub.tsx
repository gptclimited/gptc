"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ArticleCard } from "@/components/sections/article-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import {
  insightCategoryDefinitions,
  type InsightCategoryName,
} from "@/types/insight";
import type { InsightArticle } from "@/types/insight";
import { cn } from "@/lib/utils";

type InsightsHubProps = {
  articles: InsightArticle[];
  initialCategory?: InsightCategoryName;
};

export function InsightsHub({ articles, initialCategory }: InsightsHubProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategory
      ? insightCategoryDefinitions.find((item) => item.name === initialCategory)?.slug ?? "all"
      : searchParams.get("category") ?? "all",
  );

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") return articles;
    const categoryName = insightCategoryDefinitions.find((item) => item.slug === activeCategory)
      ?.name;
    if (!categoryName) return articles;
    return articles.filter((article) => article.category === categoryName);
  }, [activeCategory, articles]);

  function handleCategoryChange(slug: string) {
    setActiveCategory(slug);
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    const query = params.toString();
    router.replace(query ? `/insights?${query}` : "/insights", { scroll: false });
  }

  return (
    <Section background="white">
      <Container className="space-y-8">
        <div className="flex flex-wrap gap-2">
          <FilterButton
            active={activeCategory === "all"}
            onClick={() => handleCategoryChange("all")}
            label="All Topics"
          />
          {insightCategoryDefinitions.map((category) => (
            <FilterButton
              key={category.slug}
              active={activeCategory === category.slug}
              onClick={() => handleCategoryChange(category.slug)}
              label={category.name}
            />
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Showing {filteredArticles.length} article
          {filteredArticles.length === 1 ? "" : "s"}
          {activeCategory !== "all"
            ? ` in ${insightCategoryDefinitions.find((item) => item.slug === activeCategory)?.name}`
            : ""}
          .
        </p>

        {filteredArticles.length > 0 ? (
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <StaggerItem key={article.slug}>
                <ArticleCard article={article} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-gtn-neutral-50 px-6 py-12 text-center">
            <p className="text-sm text-muted-foreground">No articles in this category yet.</p>
          </div>
        )}
      </Container>
    </Section>
  );
}

type FilterButtonProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

function FilterButton({ active, label, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "border-gtn-primary bg-gtn-primary text-white"
          : "border-border bg-white text-muted-foreground hover:border-gtn-secondary/40 hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
