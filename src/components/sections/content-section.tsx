import type { ReactNode } from "react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type ContentSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  background?: "default" | "muted" | "white";
  className?: string;
};

export function ContentSection({
  id,
  eyebrow,
  title,
  children,
  background = "white",
  className,
}: ContentSectionProps) {
  return (
    <Section id={id} background={background} className={className}>
      <Container>
        <FadeInView className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-gtn-primary">{title}</h2>
          <div className={cn("space-y-4 text-muted-foreground leading-relaxed")}>{children}</div>
        </FadeInView>
      </Container>
    </Section>
  );
}

type ContentGridProps = {
  title: string;
  eyebrow?: string;
  items: { title: string; description: string }[];
  background?: "default" | "muted" | "white";
};

export function ContentGrid({ title, eyebrow, items, background = "muted" }: ContentGridProps) {
  return (
    <Section background={background}>
      <Container className="space-y-10">
        <FadeInView className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-gtn-primary">{title}</h2>
        </FadeInView>
        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="mb-2 text-gtn-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}

type ObjectivesListProps = {
  title: string;
  objectives: readonly string[];
};

export function ObjectivesList({ title, objectives }: ObjectivesListProps) {
  return (
    <Section background="white">
      <Container>
        <FadeInView className="max-w-3xl space-y-6">
          <h2 className="text-gtn-primary">{title}</h2>
          <ul className="space-y-3">
            {objectives.map((objective) => (
              <li key={objective} className="flex gap-3 text-muted-foreground">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-gtn-accent"
                  aria-hidden
                />
                <span className="leading-relaxed">{objective}</span>
              </li>
            ))}
          </ul>
        </FadeInView>
      </Container>
    </Section>
  );
}
