import {
  CompassIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  compass: CompassIcon,
  globe: GlobeIcon,
  "graduation-cap": GraduationCapIcon,
  "heart-handshake": HeartHandshakeIcon,
  users: UsersIcon,
};

type FeatureGridProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  features: { title: string; description: string; icon?: string }[];
};

export function FeatureGrid({ eyebrow, title, description, features }: FeatureGridProps) {
  const lastRowOffset = features.length % 3 === 2;

  return (
    <Section background="white">
      <Container className="space-y-12">
        {(eyebrow || title || description) && (
          <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
            {eyebrow ? (
              <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className="text-gtn-primary">{title}</h2> : null}
            {description ? <p className="text-lead">{description}</p> : null}
          </FadeInView>
        )}

        <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon ? iconMap[feature.icon] : null;
            const accent = index % 2 === 1 ? "accent" : "secondary";
            const isSecondToLast = lastRowOffset && index === features.length - 2;

            return (
              <StaggerItem
                key={feature.title}
                className={cn("lg:col-span-2", isSecondToLast && "lg:col-start-2")}
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border/80 bg-white/90 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8",
                    accent === "accent"
                      ? "hover:border-gtn-accent/40"
                      : "hover:border-gtn-secondary/30",
                  )}
                >
                  <div
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80 transition-opacity group-hover:opacity-100",
                      accent === "accent"
                        ? "from-gtn-accent to-gtn-secondary"
                        : "from-gtn-secondary to-gtn-primary",
                    )}
                  />
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-5 -translate-x-1/2 text-4xl font-bold leading-none text-gtn-primary/[0.04] transition-colors group-hover:text-gtn-secondary/[0.08]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {Icon ? (
                    <div
                      className={cn(
                        "relative mb-5 inline-flex rounded-xl p-3 transition-colors duration-300",
                        accent === "accent"
                          ? "bg-gtn-accent/15 text-gtn-primary group-hover:bg-gtn-accent group-hover:text-gtn-neutral-800"
                          : "bg-gtn-secondary/10 text-gtn-secondary group-hover:bg-gtn-secondary group-hover:text-white",
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </div>
                  ) : null}
                  <h3 className="relative mb-2 text-lg font-semibold tracking-tight text-gtn-primary transition-colors group-hover:text-gtn-secondary">
                    {feature.title}
                  </h3>
                  <p className="relative flex-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
