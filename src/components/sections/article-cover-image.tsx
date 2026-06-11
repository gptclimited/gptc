import Image from "next/image";

import { getInsightCoverImage } from "@/config/insight-images";
import { getCategoryGradient } from "@/lib/insights/utils";
import { getCategorySlug, type InsightArticle } from "@/types/insight";
import { cn } from "@/lib/utils";

type ArticleCoverImageProps = {
  article: InsightArticle;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ArticleCoverImage({
  article,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ArticleCoverImageProps) {
  const categorySlug = getCategorySlug(article.category);
  const cover =
    getInsightCoverImage(article.slug) ??
    (article.coverImage
      ? { src: article.coverImage, alt: `Cover image for ${article.title}` }
      : undefined);

  if (cover) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={cn("bg-gradient-to-br", getCategoryGradient(categorySlug), className)}
      aria-hidden
    />
  );
}
