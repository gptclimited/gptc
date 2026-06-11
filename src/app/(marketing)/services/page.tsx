import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/layout/page-header";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ServicesHub } from "@/components/sections/services-hub";
import { getAllServices } from "@/content/services";
import { siteConfig } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services",
  description: `Explore consulting, training, and mentorship services from ${siteConfig.name} across education, integration, leadership, and community development.`,
  path: "/services",
});

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <PageHeader
        title="Our Services"
        description="Comprehensive consulting, training, and mentorship across education, newcomer integration, leadership, peacebuilding, and community development."
        breadcrumb={
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        }
      />
      <ServicesHub services={services} />
      <CtaBanner />
    </main>
  );
}
