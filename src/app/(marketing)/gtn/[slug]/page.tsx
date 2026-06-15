import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { getServiceBySlug, getServicesBySubsidiary } from "@/content/services";
import { generateServiceMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServicesBySubsidiary("gtn").map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.subsidiary !== "gtn") return {};
  return generateServiceMetadata(service);
}

export default async function GtnServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.subsidiary !== "gtn") notFound();
  return <ServicePageTemplate service={service} />;
}
