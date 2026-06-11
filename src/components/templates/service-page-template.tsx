import { getServiceHeroVisual } from "@/config/service-heroes";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { ServiceOverview } from "@/components/sections/service-overview";
import { ServiceBenefits } from "@/components/sections/service-benefits";
import { ServiceFaq } from "@/components/sections/service-faq";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceRelated } from "@/components/sections/service-related";
import { ServiceWhoWeServe } from "@/components/sections/service-who-we-serve";
import { consultationHref, informationHref } from "@/lib/constants";
import { buildFaqPageSchema, getServiceBreadcrumbItems } from "@/lib/seo/json-ld";
import { getRelatedServices } from "@/lib/services/related";
import type { ServicePage } from "@/types/service";

type ServicePageTemplateProps = {
  service: ServicePage;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const relatedServices = getRelatedServices(service);
  const overviewParagraphs = service.overview.split("\n\n").filter(Boolean);
  const heroVisual = getServiceHeroVisual(service.category);

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <JsonLdScript data={buildFaqPageSchema(service.faq)} />

      <Hero
        eyebrow={service.category}
        headline={service.hero.headline}
        subheadline={service.hero.subheadline}
        backgroundImage={heroVisual.backgroundImage}
        backgroundPosition={heroVisual.backgroundPosition}
        breadcrumb={
          <Breadcrumbs
            items={getServiceBreadcrumbItems(service)}
            variant="inverse"
          />
        }
        primaryCta={{
          label: "Book Consultation",
          href: consultationHref,
          analyticsLabel: "service_hero_consultation",
        }}
        secondaryCta={{
          label: "Request Information",
          href: informationHref,
          analyticsLabel: "service_hero_information",
        }}
      />

      <ServiceOverview
        category={service.category}
        title={service.title}
        subheadline={service.hero.subheadline}
        paragraphs={overviewParagraphs}
      />

      <ServiceWhoWeServe title={service.title} audiences={service.whoWeServe} />

      <ServiceProcess title={service.title} steps={service.process} />

      <ServiceBenefits title={service.title} benefits={service.benefits} />

      <ServiceFaq title={service.title} faq={service.faq} />

      {relatedServices.length > 0 ? (
        <ServiceRelated
          title={service.title}
          category={service.category}
          relatedServices={relatedServices}
        />
      ) : null}

      <CtaBanner
        headline="Ready to get started?"
        description={`Book a consultation to discuss ${service.title.toLowerCase()} with our team.`}
      />
    </main>
  );
}
