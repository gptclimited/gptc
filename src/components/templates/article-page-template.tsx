import Link from "next/link";

import { ArticleProse } from "@/components/markdown/article-prose";
import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ArticleCard } from "@/components/sections/article-card";
import { ArticleCoverImage } from "@/components/sections/article-cover-image";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { Badge } from "@/components/ui/badge";
import { estimateReadTime, formatPublishedDate } from "@/lib/insights/utils";
import { buildArticleSchema } from "@/lib/seo/json-ld";
import { getCategorySlug, type InsightArticle } from "@/types/insight";

type ArticlePageTemplateProps = {
  article: InsightArticle;
  relatedArticles: InsightArticle[];
};

export function ArticlePageTemplate({ article, relatedArticles }: ArticlePageTemplateProps) {
  const categorySlug = getCategorySlug(article.category);
  const readTime = estimateReadTime(article.body);

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <JsonLdScript data={buildArticleSchema(article)} />

      <Section background="white" spacing="compact" className="border-b border-border">
        <Container className="space-y-6 pb-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: article.title },
            ]}
          />
        </Container>
      </Section>

      <Section background="white" spacing="compact">
        <Container size="narrow" className="space-y-4">
          <FadeInView className="text-center">
            <Badge variant="secondary">{article.category}</Badge>
            <h1 className="mt-4 text-gtn-primary">{article.title}</h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              <time dateTime={article.publishedAt}>{formatPublishedDate(article.publishedAt)}</time>
              <span aria-hidden>·</span>
              <span>{readTime} min read</span>
            </div>
            <div id="hero-sentinel" className="h-px w-full" aria-hidden />
          </FadeInView>
        </Container>
      </Section>

      <Section background="white" spacing="compact">
        <Container>
          <FadeInView>
            <ArticleCoverImage
              article={article}
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="mx-auto aspect-[16/9] max-w-4xl rounded-2xl"
            />
          </FadeInView>
        </Container>
      </Section>

      <Section background="white">
        <Container size="narrow">
          <FadeInView>
            <ArticleProse content={article.body} />
          </FadeInView>
        </Container>
      </Section>

      {relatedArticles.length > 0 ? (
        <Section background="muted">
          <Container className="space-y-8">
            <FadeInView className="space-y-2">
              <h2 className="text-gtn-primary">Related Articles</h2>
              <p className="text-sm text-muted-foreground">
                More insights on{" "}
                <Link href={`/insights?category=${categorySlug}`} className="text-gtn-secondary">
                  {article.category}
                </Link>
                .
              </p>
            </FadeInView>
            <StaggerChildren className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <StaggerItem key={related.slug}>
                  <ArticleCard article={related} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </Container>
        </Section>
      ) : null}

      <CtaBanner
        headline="Ready for personalized guidance?"
        description="Book a consultation with GTN to discuss your goals and next steps."
      />
    </main>
  );
}
