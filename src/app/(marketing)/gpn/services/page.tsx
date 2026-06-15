import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/layout/page-header";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ServicesHub } from "@/components/sections/services-hub";
import { getServicesBySubsidiary } from "@/content/services";
import { subsidiaries } from "@/lib/subsidiaries";
import { generatePageMetadata } from "@/lib/seo/metadata";

const subsidiary = subsidiaries.gpn;

export const metadata: Metadata = generatePageMetadata({
  title: `Programs | ${subsidiary.shortName}`,
  description: `Explore peacebuilding programs from ${subsidiary.name}. ${subsidiary.description}`,
  path: "/gpn/services",
});

export default function GpnServicesPage() {
  const services = getServicesBySubsidiary("gpn");

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <PageHeader
        title={`${subsidiary.shortName} Programs`}
        description={subsidiary.primaryFocus}
        breadcrumb={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: subsidiary.shortName, href: "/gpn" },
              { label: "Programs" },
            ]}
          />
        }
      />
      <ServicesHub services={services} subsidiary="gpn" />
      <CtaBanner
        headline={`Connect with ${subsidiary.shortName}`}
        description={`Book a consultation to discuss how ${subsidiary.name} can support your community.`}
      />
    </main>
  );
}
