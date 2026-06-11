import { siteConfig } from "@/lib/constants";
import { categoryToAnchor } from "@/lib/services/utils";
import type { ServicePage } from "@/types/service";

import type { BreadcrumbItem, JsonLdObject } from "./types";
import type { InsightArticle } from "@/types/insight";

export function buildOrganizationSchema(): JsonLdObject {
  const socialProfiles = Object.values(siteConfig.social).filter(
    (url) => url.startsWith("http"),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-604-727-6553",
      email: siteConfig.contact.email,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: ["English"],
    },
  };
}

export function buildLocalBusinessSchema(): JsonLdObject {
  const { address, phone, email } = siteConfig.contact;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: `${siteConfig.url}/contact`,
    telephone: phone,
    email,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.province,
      postalCode: address.postalCode,
      addressCountry: "CA",
    },
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildBreadcrumbList(
  items: BreadcrumbItem[],
  baseUrl: string = siteConfig.url,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  };
}

export function buildFaqPageSchema(
  faq: ServicePage["faq"],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function getServiceBreadcrumbItems(service: ServicePage): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    {
      label: service.category,
      href: `/services#${categoryToAnchor(service.category)}`,
    },
    { label: service.title },
  ];
}

export function buildServicePageSchemas(service: ServicePage): JsonLdObject[] {
  return [
    buildBreadcrumbList(getServiceBreadcrumbItems(service)),
    buildFaqPageSchema(service.faq),
  ];
}

export function buildArticleSchema(article: InsightArticle): JsonLdObject {
  const organization = buildOrganizationSchema();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: organization.logo,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/insights/${article.slug}`,
    },
    articleSection: article.category,
    ...(article.coverImage
      ? { image: `${siteConfig.url}${article.coverImage}` }
      : {}),
  };
}
