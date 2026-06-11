import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import {
  ContactInfoPanel,
  ContactMap,
  OfficeInfoPanel,
} from "@/components/sections/contact-sections";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { mapEmbedUrl, officeInfo } from "@/lib/content/about";
import { consultationHref, siteConfig } from "@/lib/constants";
import { buildLocalBusinessSchema } from "@/lib/seo/json-ld";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { parseInquiryType } from "@/lib/schemas/contact-form";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.name} in Langley, BC. Book a consultation or send us a message.`,
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ type?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { type } = await searchParams;
  const defaultInquiryType = parseInquiryType(type) ?? "general";

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <JsonLdScript data={buildLocalBusinessSchema()} />
      <PageHeader
        title="Contact Us"
        description="We would love to hear from you. Reach out to book a consultation, request information, or explore a partnership."
        breadcrumb={
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        }
      />

      <Section background="white" spacing="compact">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="space-y-8 lg:col-span-2">
              <ContactInfoPanel
                phone={siteConfig.contact.phone}
                email={siteConfig.contact.email}
              />
              <OfficeInfoPanel
                hours={officeInfo.hours}
                directions={officeInfo.directions}
                parking={officeInfo.parking}
              />
              <div className="rounded-xl border border-dashed border-gtn-secondary/30 bg-gtn-neutral-50 p-6">
                <h2 className="mb-2 text-base font-semibold text-gtn-primary">
                  Prefer to book directly?
                </h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Schedule a consultation and tell us how we can support your goals.
                </p>
                <ButtonLink
                  href={consultationHref}
                  variant="accent"
                  size="lg"
                  analyticsLabel="contact_sidebar"
                >
                  Book Consultation
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm defaultInquiryType={defaultInquiryType} />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted">
        <Container className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-gtn-primary">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our office in Langley, British Columbia. In-person meetings are available by
              appointment.
            </p>
          </div>
          <ContactMap embedUrl={mapEmbedUrl} />
        </Container>
      </Section>
    </main>
  );
}
