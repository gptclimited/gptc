"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/sections/service-card";
import { categoryToAnchor } from "@/lib/services/utils";
import type { ServicePage } from "@/types/service";
import { serviceCategories } from "@/types/service";
import { cn } from "@/lib/utils";

type ServicesHubProps = {
  services: ServicePage[];
};

export function ServicesHub({ services }: ServicesHubProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const grouped = useMemo(() => {
    return serviceCategories.map((category) => ({
      category,
      anchor: categoryToAnchor(category),
      services: services.filter((service) => service.category === category),
    }));
  }, [services]);

  const filteredGroups =
    activeCategory === "all"
      ? grouped
      : grouped.filter((group) => group.category === activeCategory);

  const totalVisible = filteredGroups.reduce((count, group) => count + group.services.length, 0);

  return (
    <>
      <Section background="white" spacing="compact">
        <Container className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <FilterButton
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              label="All Services"
            />
            {serviceCategories.map((category) => (
              <FilterButton
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                label={category}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {totalVisible} service{totalVisible === 1 ? "" : "s"}
            {activeCategory !== "all" ? ` in ${activeCategory}` : " across all categories"}.
          </p>
        </Container>
      </Section>

      {filteredGroups.map((group, index) => (
        <Section
          key={group.category}
          id={group.anchor}
          background={index % 2 === 0 ? "muted" : "white"}
          className="scroll-mt-24"
        >
          <Container className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-gtn-primary">{group.category}</h2>
              <Badge variant="secondary">{group.services.length} services</Badge>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.hero.subheadline}
                  href={`/${service.slug}`}
                />
              ))}
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "border-gtn-primary bg-gtn-primary text-white"
          : "border-border bg-white text-muted-foreground hover:border-gtn-secondary hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
