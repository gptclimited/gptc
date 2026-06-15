import Link from "next/link";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type FlowStep = {
  title: string;
  description: string;
  href: string;
};

type EcosystemFlowProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: readonly FlowStep[];
};

export function EcosystemFlow({ eyebrow, title, description, steps }: EcosystemFlowProps) {
  return (
    <Section background="white">
      <Container className="space-y-12">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">{eyebrow}</p>
          <h2 className="text-gtn-primary">{title}</h2>
          <p className="text-lead">{description}</p>
        </FadeInView>

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <Link
                href={step.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gtn-secondary/40 hover:shadow-md"
              >
                <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-gtn-primary text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-gtn-primary group-hover:text-gtn-secondary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
