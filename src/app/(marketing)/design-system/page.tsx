import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CtaBanner } from "@/components/sections/cta-banner";
import { LogoMeaningSection } from "@/components/sections/logo-meaning";
import { LogoUsageSection } from "@/components/sections/logo-usage";
import { TypographySection } from "@/components/sections/typography-system";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { StatCounter } from "@/components/sections/stat-counter";
import { consultationHref } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { serviceRegistry } from "@/lib/services/registry";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Design System",
  description:
    "GPTC brand colors, logo meaning, typography, and UI components for client review during development.",
  path: "/design-system",
  noIndex: true,
});

export default function DesignSystemPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <PageHeader
        title="Design System"
        description="Brand colors, logo meaning, typography, and core UI patterns for client review. This page is for development reference and will remain available throughout the build."
        breadcrumb={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Design System" },
            ]}
          />
        }
      />

      <Section background="white" spacing="compact">
        <Container className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="secondary">Phase 1 — Foundation</Badge>
            <p className="text-muted-foreground">
              The sections below showcase the GTN design tokens and reusable components that
              power the site. Full page content will be built in upcoming phases.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={consultationHref} variant="accent" size="lg">
              Book Consultation
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg">
              Explore Services
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <LogoMeaningSection />

      <LogoUsageSection />

      <TypographySection />

      <Section background="muted">
        <Container>
          <h2 className="mb-8 text-gtn-primary">Brand Colors</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TokenSwatch label="Primary" className="bg-gtn-primary text-white" hex="#0B3C5D" />
            <TokenSwatch label="Secondary" className="bg-gtn-secondary text-white" hex="#1D70B8" />
            <TokenSwatch
              label="Accent"
              className="bg-gtn-accent text-gtn-neutral-800"
              hex="#F4B400"
            />
            <TokenSwatch
              label="Neutral 50"
              className="border border-gtn-neutral-200 bg-gtn-neutral-50 text-gtn-neutral-800"
              hex="#F8FAFC"
            />
            <TokenSwatch
              label="Neutral 200"
              className="bg-gtn-neutral-200 text-gtn-neutral-800"
              hex="#E5E7EB"
            />
            <TokenSwatch
              label="Neutral 800"
              className="bg-gtn-neutral-800 text-white"
              hex="#1F2937"
            />
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container className="space-y-8">
          <h2 className="text-gtn-primary">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={consultationHref}>Primary</ButtonLink>
            <ButtonLink href={consultationHref} variant="accent">
              Accent
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Secondary
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Outline
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Ghost
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="compact">
        <Container className="overflow-hidden rounded-2xl border border-border bg-white">
          <Hero
            eyebrow="Component preview"
            headline="Hero Section"
            subheadline="Reusable hero block used on landing pages and service pages."
            primaryCta={{ label: "Primary action", href: consultationHref }}
            secondaryCta={{ label: "Secondary action", href: "/services" }}
          />
        </Container>
      </Section>

      <StatCounter
        stats={[
          { label: "Students Supported", value: "—" },
          { label: "Programs Delivered", value: "—" },
          { label: "Community Partnerships", value: "—" },
          { label: "Countries Served", value: "—" },
        ]}
      />

      <FeatureGrid
        eyebrow="What Sets Us Apart"
        title="Why Choose Us"
        description="Feature grid pattern for key differentiators."
        features={[
          {
            title: "Personalized Guidance",
            description: "Tailored support for every learner and community partner.",
          },
          {
            title: "Global Perspective",
            description: "Experience supporting students and newcomers across borders.",
          },
          {
            title: "Holistic Support",
            description: "Academic, personal, and community-centered pathways.",
          },
        ]}
      />

      <Section background="white">
        <Container>
          <Card className="max-w-3xl">
            <CardHeader>
              <CardTitle className="text-gtn-primary">Project Status</CardTitle>
              <CardDescription>
                Phase 2 layout shell is complete. {serviceRegistry.length} services are
                registered for static page rollout in Phase 4.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <li>Header, footer, and mobile navigation</li>
                <li>Container, Section, PageHeader primitives</li>
                <li>shadcn/ui components themed to GTN</li>
                <li>Section component stubs for Phase 3</li>
              </ul>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <CtaBanner />
    </main>
  );
}

function TokenSwatch({
  label,
  hex,
  className,
}: {
  label: string;
  hex: string;
  className: string;
}) {
  return (
    <div className={cn("flex flex-col justify-between rounded-xl p-6 shadow-sm", className)}>
      <span className="font-medium">{label}</span>
      <span className="font-mono text-sm opacity-90">{hex}</span>
    </div>
  );
}
