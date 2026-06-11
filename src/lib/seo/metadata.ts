import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { seoConfig } from "@/lib/seo/constants";
import type { PageMetaInput } from "@/lib/seo/types";
import type { InsightArticle } from "@/types/insight";
import type { ServicePage } from "@/types/service";

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  absoluteTitle = false,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? seoConfig.defaultOgImagePath;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: seoConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: seoConfig.defaultOgImageWidth,
          height: seoConfig.defaultOgImageHeight,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function generateServiceMetadata(service: ServicePage): Metadata {
  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${service.slug}`,
  });
}

export function generateHomeMetadata(): Metadata {
  return generatePageMetadata({
    title: `${siteConfig.name} | Guiding Learners and Leaders to Achievement`,
    description: siteConfig.description,
    path: "/",
    absoluteTitle: true,
  });
}

export function generateArticleMetadata(article: InsightArticle): Metadata {
  return generatePageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
    ogImage: article.coverImage,
  });
}
