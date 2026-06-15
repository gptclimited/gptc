import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CheckIcon } from "lucide-react";

type ValuesGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  values: readonly string[];
  variant?: "roots" | "trunk" | "impact";
};

const backgroundMap = {
  roots: "white" as const,
  trunk: "primary" as const,
  impact: "muted" as const,
};

export function ValuesGrid({
  eyebrow,
  title,
  description,
  values,
  variant = "roots",
}: ValuesGridProps) {
  const bg = backgroundMap[variant];

  return (
    <Section background={bg}>
      <Container className="space-y-10">
        {eyebrow || title || description ? (
          <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
            {eyebrow ? (
              <p
                className={
                  variant === "trunk"
                    ? "text-sm font-medium uppercase tracking-wider text-gtn-accent"
                    : "text-sm font-medium uppercase tracking-wider text-gtn-secondary"
                }
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className={variant === "trunk" ? "text-white" : "text-gtn-primary"}>{title}</h2>
            ) : null}
            {description ? (
              <p className={variant === "trunk" ? "text-lg text-white/80" : "text-lead"}>
                {description}
              </p>
            ) : null}
          </FadeInView>
        ) : null}

        <StaggerChildren className="flex flex-wrap justify-center gap-3">
          {values.map((value) => (
            <StaggerItem key={value}>
              <span
                className={
                  variant === "trunk"
                    ? "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                    : variant === "impact"
                      ? "inline-flex items-center gap-2 rounded-full border border-gtn-secondary/20 bg-white px-4 py-2 text-sm font-medium text-gtn-primary shadow-sm"
                      : "inline-flex items-center gap-2 rounded-full border border-border bg-gtn-neutral-50 px-4 py-2 text-sm font-medium text-gtn-primary"
                }
              >
                {variant === "impact" ? (
                  <CheckIcon className="size-4 text-gtn-secondary" aria-hidden />
                ) : null}
                {value}
              </span>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
