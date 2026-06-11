import { CheckCircle2Icon } from "lucide-react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type ServiceWhoWeServeProps = {
  title: string;
  audiences: string[];
};

export function ServiceWhoWeServe({ title, audiences }: ServiceWhoWeServeProps) {
  return (
    <Section background="muted">
      <Container className="space-y-10">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
            Our Audience
          </p>
          <h2 className="text-gtn-primary">Who We Serve</h2>
          <div
            aria-hidden
            className="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-gtn-secondary to-gtn-accent"
          />
          <p className="text-lead">
            {title} is designed for individuals, families, and organizations seeking trusted
            guidance at every stage of the journey.
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

          <StaggerChildren className="relative grid gap-4 sm:grid-cols-2 lg:gap-5">
            {audiences.map((audience, index) => {
              const accent = index % 2 === 1 ? "accent" : "secondary";

              return (
                <StaggerItem key={audience}>
                  <article
                    className={cn(
                      "group relative flex h-full gap-4 overflow-hidden rounded-2xl border border-border/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-6",
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
                    <div
                      className={cn(
                        "relative mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                        accent === "accent"
                          ? "bg-gtn-accent/15 text-gtn-primary group-hover:bg-gtn-accent group-hover:text-gtn-neutral-800"
                          : "bg-gtn-secondary/10 text-gtn-secondary group-hover:bg-gtn-secondary group-hover:text-white",
                      )}
                    >
                      <CheckCircle2Icon className="size-5" aria-hidden />
                    </div>
                    <p className="relative pt-1 text-sm leading-relaxed text-muted-foreground">
                      {audience}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
