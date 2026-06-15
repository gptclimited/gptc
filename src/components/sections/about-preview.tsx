import { QuoteIcon, SparklesIcon, TargetIcon } from "lucide-react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type AboutPreviewProps = {
  mission: string;
  vision: string;
  founderQuote?: {
    quote: string;
    name: string;
    title: string;
  };
};

export function AboutPreview({ mission, vision, founderQuote }: AboutPreviewProps) {
  return (
    <Section background="white">
      <Container className="space-y-12">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
            Who We Are
          </p>
          <h2 className="text-gtn-primary">Mission &amp; Vision</h2>
          <p className="text-lead">
            Guiding learners and leaders with purpose, clarity, and a commitment to lasting
            transformation.
          </p>
        </FadeInView>

        <StaggerChildren className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <StaggerItem>
            <article className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border bg-white/90 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gtn-secondary/30 hover:shadow-lg">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gtn-secondary to-gtn-primary"
              />
              <div className="relative mb-6 inline-flex rounded-xl bg-gtn-secondary/10 p-3 text-gtn-secondary transition-colors group-hover:bg-gtn-secondary group-hover:text-white">
                <TargetIcon className="size-6" aria-hidden />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gtn-secondary">
                Why We Exist
              </p>
              <h3 className="mb-4 text-gtn-primary">Our Mission</h3>
              <p className="leading-relaxed text-muted-foreground">{mission}</p>
            </article>
          </StaggerItem>

          <StaggerItem>
            <article className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border bg-white/90 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gtn-accent/40 hover:shadow-lg">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gtn-accent to-gtn-secondary"
              />
              <div className="relative mb-6 inline-flex rounded-xl bg-gtn-accent/15 p-3 text-gtn-primary transition-colors group-hover:bg-gtn-accent group-hover:text-gtn-neutral-800">
                <SparklesIcon className="size-6" aria-hidden />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gtn-secondary">
                Looking Ahead
              </p>
              <h3 className="mb-4 text-gtn-primary">Our Vision</h3>
              <p className="leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </StaggerItem>
        </StaggerChildren>

        {founderQuote ? (
          <FadeInView delay={0.15}>
            <figure className="relative overflow-hidden rounded-2xl border border-gtn-primary/10 bg-gtn-primary px-8 py-10 text-white lg:px-12 lg:py-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-gtn-accent/20 blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-10 size-40 rounded-full bg-gtn-secondary/30 blur-2xl"
              />
              <QuoteIcon
                aria-hidden
                className="relative mx-auto mb-6 size-10 text-gtn-accent/80"
              />
              <blockquote className="relative mx-auto max-w-4xl text-center text-lg leading-relaxed text-white/95 lg:text-xl lg:leading-relaxed">
                &ldquo;{founderQuote.quote}&rdquo;
              </blockquote>
              <figcaption className="relative mt-8 border-t border-white/15 pt-6 text-center">
                <p className="font-semibold text-white">{founderQuote.name}</p>
                <p className="text-sm text-white/70">{founderQuote.title}</p>
              </figcaption>
            </figure>
          </FadeInView>
        ) : null}

        <FadeInView className="flex justify-center">
          <ButtonLink href="/about" variant="outline" size="lg" analyticsLabel="about_preview">
            Learn more about us
          </ButtonLink>
        </FadeInView>
      </Container>
    </Section>
  );
}
