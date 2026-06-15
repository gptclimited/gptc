import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type OrganizationCard = {
  slug: "gpn" | "gtn" | "acs";
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  href: string;
  accentClass: string;
};

type SubsidiaryCardsProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly OrganizationCard[];
};

const slugStyles: Record<OrganizationCard["slug"], string> = {
  gpn: "hover:border-gpn-secondary group-hover:text-gpn-secondary",
  gtn: "hover:border-gtn-secondary group-hover:text-gtn-secondary",
  acs: "hover:border-acs-secondary group-hover:text-acs-secondary",
};

const badgeStyles: Record<OrganizationCard["slug"], string> = {
  gpn: "bg-gpn-secondary/10 text-gpn-primary",
  gtn: "bg-gtn-secondary/10 text-gtn-primary",
  acs: "bg-acs-secondary/10 text-acs-primary",
};

export function SubsidiaryCards({ id, eyebrow, title, description, items }: SubsidiaryCardsProps) {
  return (
    <Section id={id} background="muted">
      <Container className="space-y-12">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">{eyebrow}</p>
          <h2 className="text-gtn-primary">{title}</h2>
          <p className="text-lead">{description}</p>
        </FadeInView>

        <StaggerChildren className="grid gap-6 lg:grid-cols-3">
          {items.map((org) => (
            <StaggerItem key={org.slug}>
              <Link
                href={org.href}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border-2 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                  org.accentClass,
                  slugStyles[org.slug],
                )}
              >
                <span
                  className={cn(
                    "mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
                    badgeStyles[org.slug],
                  )}
                >
                  {org.shortName}
                </span>
                <h3 className="mb-2 text-gtn-primary transition-colors group-hover:text-inherit">
                  {org.name}
                </h3>
                <p className="mb-3 text-sm font-medium text-gtn-secondary">{org.tagline}</p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {org.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gtn-primary transition-colors group-hover:gap-3">
                  Explore {org.shortName}
                  <ArrowRightIcon className="size-4" aria-hidden />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
