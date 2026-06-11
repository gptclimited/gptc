import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleCoverImage } from "@/components/sections/article-cover-image";
import { estimateReadTime, formatPublishedDate } from "@/lib/insights/utils";
import type { InsightArticle } from "@/types/insight";

type ArticleCardProps = {
  article: InsightArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const readTime = estimateReadTime(article.body);

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group block h-full focus-visible:outline-none"
    >
      <Card className="h-full overflow-hidden transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md">
        <ArticleCoverImage article={article} className="aspect-video" />
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="text-xs text-muted-foreground">{readTime} min read</span>
          </div>
          <CardTitle className="line-clamp-2 text-gtn-primary group-hover:text-gtn-secondary">
            {article.title}
          </CardTitle>
          <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">{formatPublishedDate(article.publishedAt)}</p>
          <span className="mt-3 inline-block text-sm font-medium text-gtn-secondary">
            Read article →
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
