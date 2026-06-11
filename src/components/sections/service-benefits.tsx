import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type ServiceBenefit = {
  title: string;
  description: string;
};

type ServiceBenefitsProps = {
  title: string;
  benefits: ServiceBenefit[];
};

export function ServiceBenefits({ title, benefits }: ServiceBenefitsProps) {
  const lastRowOffset = benefits.length % 3 === 2;

  return (
    <Section background="muted">
      <Container className="space-y-10">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
            Why It Matters
          </p>
          <h2 className="text-gtn-primary">Benefits</h2>
          <div
            aria-hidden
            className="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-gtn-secondary to-gtn-accent"
          />
          <p className="text-lead">
            Discover the outcomes and advantages you can expect from {title.toLowerCase()}.
          </p>
        </FadeInView>

        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-gtn-neutral-50 via-white to-gtn-secondary/5 p-6 shadow-sm lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-gtn-secondary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-gtn-accent/10 blur-3xl"
          />

          <StaggerChildren className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {benefits.map((benefit, index) => {
              const accent = index % 2 === 1 ? "accent" : "secondary";
              const isSecondToLast = lastRowOffset && index === benefits.length - 2;

              return (
                <StaggerItem
                  key={benefit.title}
                  className={cn("lg:col-span-2", isSecondToLast && "lg:col-start-2")}
                >
                  <article
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8",
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
                      className="absolute right-5 top-5 text-4xl font-bold leading-none text-gtn-primary/[0.04] transition-colors group-hover:text-gtn-secondary/[0.08]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="relative mb-3 pr-10 text-lg font-semibold tracking-tight text-gtn-primary transition-colors group-hover:text-gtn-secondary">
                      {benefit.title}
                    </h3>
                    <p className="relative flex-1 text-justify text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
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
