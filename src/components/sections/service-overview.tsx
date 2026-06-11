import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type ServiceOverviewProps = {
  category: string;
  title: string;
  subheadline: string;
  paragraphs: string[];
};

export function ServiceOverview({
  category,
  title,
  subheadline,
  paragraphs,
}: ServiceOverviewProps) {
  const [leadParagraph, ...bodyParagraphs] = paragraphs;

  return (
    <Section background="white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-gtn-neutral-50 via-white to-gtn-secondary/5 p-6 shadow-sm lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-gtn-secondary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-gtn-accent/10 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:items-start lg:gap-12">
            <FadeInView className="space-y-5 lg:sticky lg:top-24">
              <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
                {category}
              </p>
              <div className="space-y-3">
                <h2 className="text-gtn-primary">Overview</h2>
                <div
                  aria-hidden
                  className="h-1 w-12 rounded-full bg-gradient-to-r from-gtn-secondary to-gtn-accent"
                />
              </div>
              <p className="text-lg font-medium leading-snug text-gtn-primary/90">{title}</p>
              <p className="text-justify text-sm leading-relaxed text-muted-foreground">
                {subheadline}
              </p>
            </FadeInView>

            <StaggerChildren className="space-y-6">
              {leadParagraph ? (
                <StaggerItem>
                  <p className="text-justify text-lg leading-relaxed text-foreground">
                    {leadParagraph}
                  </p>
                </StaggerItem>
              ) : null}

              {bodyParagraphs.length > 0 ? (
                <StaggerItem>
                  <div className="space-y-5 rounded-2xl border border-border/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm lg:p-8">
                    {bodyParagraphs.map((paragraph, index) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className={cn(
                          "text-justify leading-relaxed text-muted-foreground",
                          index > 0 && "border-t border-border/60 pt-5",
                        )}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </StaggerItem>
              ) : null}
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </Section>
  );
}
