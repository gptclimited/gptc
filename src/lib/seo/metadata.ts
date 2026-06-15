import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { ecosystemConfig, getSubsidiary } from "@/lib/subsidiaries";
import { getServicePath } from "@/lib/services/paths";
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
  siteName,
}: PageMetaInput & { siteName?: string }): Metadata {
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
      siteName: siteName ?? siteConfig.name,
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
  const org = getSubsidiary(service.subsidiary);
  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: getServicePath(service),
    siteName: org.name,
  });
}

export function generateHomeMetadata(): Metadata {
  return generatePageMetadata({
    title: `${ecosystemConfig.shortName} | ${ecosystemConfig.motto}`,
    description: ecosystemConfig.description,
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

export function generateSubsidiaryMetadata(
  subsidiary: keyof typeof import("@/lib/subsidiaries").subsidiaries,
  path: string,
  title: string,
  description: string,
): Metadata {
  const org = getSubsidiary(subsidiary);
  return generatePageMetadata({
    title,
    description,
    path,
    absoluteTitle: true,
    siteName: org.name,
  });
}
