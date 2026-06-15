import { ecosystemConfig, subsidiaries } from "@/lib/subsidiaries";
import { getServicePath, getSubsidiaryServicesPath } from "@/lib/services/paths";
import { categoryToAnchor } from "@/lib/services/utils";
import { getSubsidiary } from "@/lib/subsidiaries";
import type { ServicePage } from "@/types/service";

import type { BreadcrumbItem, JsonLdObject } from "./types";
import type { InsightArticle } from "@/types/insight";

export function buildOrganizationSchema(): JsonLdObject {
  const socialProfiles = Object.values(ecosystemConfig.social).filter((url) =>
    url.startsWith("http"),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ecosystemConfig.name,
    alternateName: ecosystemConfig.shortName,
    url: ecosystemConfig.url,
    logo: `${ecosystemConfig.url}/assets/gptc_logo2.png`,
    description: ecosystemConfig.description,
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
    subOrganization: Object.values(subsidiaries).map((org) => ({
      "@type": "Organization",
      name: org.name,
      url: `${ecosystemConfig.url}/${org.slug}`,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-604-727-6553",
      email: ecosystemConfig.contact.email,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: ["English"],
    },
  };
}

export function buildLocalBusinessSchema(): JsonLdObject {
  const { address, phone, email } = ecosystemConfig.contact;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: ecosystemConfig.name,
    url: `${ecosystemConfig.url}/contact`,
    telephone: phone,
    email,
    image: `${ecosystemConfig.url}/assets/gptc_logo2.png`,
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
      name: ecosystemConfig.name,
      url: ecosystemConfig.url,
    },
  };
}

export function buildBreadcrumbList(
  items: BreadcrumbItem[],
  baseUrl: string = ecosystemConfig.url,
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

export function buildFaqPageSchema(faq: ServicePage["faq"]): JsonLdObject {
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
  const org = getSubsidiary(service.subsidiary);
  const servicesPath = getSubsidiaryServicesPath(service.subsidiary);

  return [
    { label: "Home", href: "/" },
    { label: org.shortName, href: `/${service.subsidiary}` },
    { label: "Services", href: servicesPath },
    {
      label: service.category,
      href: `${servicesPath}#${categoryToAnchor(service.category)}`,
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
      name: ecosystemConfig.name,
      url: ecosystemConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: ecosystemConfig.name,
      url: ecosystemConfig.url,
      logo: organization.logo,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${ecosystemConfig.url}/insights/${article.slug}`,
    },
    articleSection: article.category,
    ...(article.coverImage
      ? { image: `${ecosystemConfig.url}${article.coverImage}` }
      : {}),
  };
}
