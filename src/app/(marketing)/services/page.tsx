import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/layout/page-header";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SubsidiaryCards } from "@/components/sections/subsidiary-cards";
import { ecosystemHomeConfig } from "@/config/ecosystem/home";
import { ecosystemConfig } from "@/lib/subsidiaries";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Services & Programs",
  description: `Explore programs and services across the ${ecosystemConfig.shortName} ecosystem—peacebuilding, training, and care.`,
  path: "/services",
});

export default function ServicesPage() {
  const { organizations } = ecosystemHomeConfig;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <PageHeader
        title="Services & Programs"
        description="Three organizations, one ecosystem—find the programs and services that match your needs."
        breadcrumb={
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        }
      />
      <SubsidiaryCards
        eyebrow={organizations.eyebrow}
        title="Browse by Organization"
        description="Each organization specializes in a distinct area of human transformation. Select one to explore its full range of programs and services."
        items={organizations.items.map((org) => ({
          ...org,
          description: `${org.description} Visit our services hub to browse all programs.`,
          href: `${org.href}/services`,
        }))}
      />
      <CtaBanner
        headline="Not sure where to start?"
        description="Contact us and we will connect you with the right organization and program for your needs."
      />
    </main>
  );
}
