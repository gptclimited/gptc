import Link from "next/link";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/sections/service-card";
import { getServicePath, getSubsidiaryServicesPath } from "@/lib/services/paths";
import { categoryToAnchor } from "@/lib/services/utils";
import type { ServicePage } from "@/types/service";
import { cn } from "@/lib/utils";

type ServiceRelatedProps = {
  title: string;
  category: string;
  subsidiary: ServicePage["subsidiary"];
  relatedServices: ServicePage[];
};

export function ServiceRelated({
  title,
  category,
  subsidiary,
  relatedServices,
}: ServiceRelatedProps) {
  const lastRowOffset = relatedServices.length % 3 === 2;
  const servicesHref = getSubsidiaryServicesPath(subsidiary);

  return (
    <Section background="muted">
      <Container className="space-y-10">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
            Explore Further
          </p>
          <h2 className="text-gtn-primary">Related Services</h2>
          <div
            aria-hidden
            className="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-gtn-secondary to-gtn-accent"
          />
          <p className="text-lead">
            Other services that complement {title.toLowerCase()} and support your next steps.
          </p>
          <p className="text-sm text-muted-foreground">
            Browse more in{" "}
            <Link
              href={`${servicesHref}#${categoryToAnchor(category)}`}
              className="font-medium text-gtn-secondary transition-colors hover:text-gtn-primary"
            >
              {category}
            </Link>
            .
          </p>
        </FadeInView>

        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-gtn-neutral-50 to-gtn-secondary/5 p-6 shadow-sm lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-gtn-secondary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-gtn-accent/10 blur-3xl"
          />

          <StaggerChildren className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {relatedServices.map((related, index) => {
              const accent = index % 2 === 1 ? "accent" : "secondary";
              const isSecondToLast = lastRowOffset && index === relatedServices.length - 2;

              return (
                <StaggerItem
                  key={related.slug}
                  className={cn("lg:col-span-2", isSecondToLast && "lg:col-start-2")}
                >
                  <ServiceCard
                    title={related.title}
                    description={related.hero.subheadline}
                    href={getServicePath(related)}
                    variant="featured"
                    accent={accent}
                  />
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
