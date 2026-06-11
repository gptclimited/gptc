import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  LaptopIcon,
  SearchIcon,
  SparklesIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/sections/service-card";

type ServiceCategoryCard = {
  title: string;
  description: string;
  href: string;
};

type ServicesOverviewProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  categories: ServiceCategoryCard[];
};

const serviceIcons: Record<string, { icon: LucideIcon; accent?: "secondary" | "accent" }> = {
  "Educational Consulting": { icon: GraduationCapIcon },
  "Newcomer Integration": { icon: GlobeIcon, accent: "accent" },
  "Leadership Development": { icon: UsersIcon },
  "Peacebuilding & Reconciliation": { icon: HeartHandshakeIcon, accent: "accent" },
  "Holistic Development": { icon: SparklesIcon },
  "Biblical & Theological Studies": { icon: BookOpenIcon, accent: "accent" },
  "Digital Skills": { icon: LaptopIcon },
  "Research & Policy": { icon: SearchIcon, accent: "accent" },
  Entrepreneurship: { icon: BriefcaseIcon },
};

export function ServicesOverview({
  eyebrow = "What We Offer",
  title = "Services Overview",
  description = "Comprehensive consulting, training, and mentorship across education, integration, leadership, and community development.",
  categories,
}: ServicesOverviewProps) {
  return (
    <Section background="muted">
      <Container className="space-y-12">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
            {eyebrow}
          </p>
          <h2 className="text-gtn-primary">{title}</h2>
          <p className="text-lead">{description}</p>
        </FadeInView>

        <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((category) => {
            const meta = serviceIcons[category.title];

            return (
              <StaggerItem key={category.title}>
                <ServiceCard
                  title={category.title}
                  description={category.description}
                  href={category.href}
                  icon={meta?.icon}
                  accent={meta?.accent}
                  variant="featured"
                />
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <FadeInView className="flex justify-center">
          <ButtonLink href="/services" variant="outline" size="lg" analyticsLabel="services_overview">
            View all services
          </ButtonLink>
        </FadeInView>
      </Container>
    </Section>
  );
}
