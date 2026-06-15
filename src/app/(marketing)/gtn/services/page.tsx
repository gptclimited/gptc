import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/layout/page-header";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ServicesHub } from "@/components/sections/services-hub";
import { getServicesBySubsidiary } from "@/content/services";
import { subsidiaries } from "@/lib/subsidiaries";
import { generatePageMetadata } from "@/lib/seo/metadata";

const subsidiary = subsidiaries.gtn;

export const metadata: Metadata = generatePageMetadata({
  title: `Services | ${subsidiary.shortName}`,
  description: `Explore programs and services from ${subsidiary.name}. ${subsidiary.description}`,
  path: "/gtn/services",
});

export default function GtnServicesPage() {
  const services = getServicesBySubsidiary("gtn");

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <PageHeader
        title={`${subsidiary.shortName} Services`}
        description={subsidiary.primaryFocus}
        breadcrumb={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: subsidiary.shortName, href: "/gtn" },
              { label: "Services" },
            ]}
          />
        }
      />
      <ServicesHub services={services} subsidiary="gtn" />
      <CtaBanner
        headline={`Connect with ${subsidiary.shortName}`}
        description={`Book a consultation to discuss how ${subsidiary.name} can support your goals.`}
      />
    </main>
  );
}
