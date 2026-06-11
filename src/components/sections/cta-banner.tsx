import { FadeInView } from "@/components/motion/fade-in-view";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type CtaBannerProps = {
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  analyticsLabel?: string;
};

export function CtaBanner({
  headline = "Book Your Consultation",
  description = "Take the next step with personalized guidance from our team.",
  ctaLabel = "Book Consultation",
  ctaHref = "/contact?type=consultation",
  analyticsLabel = "cta_banner",
}: CtaBannerProps) {
  return (
    <Section background="white" className="border-y border-border">
      <Container>
        <FadeInView>
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-gtn-primary px-8 py-10 text-center text-white lg:flex-row lg:items-center lg:justify-between lg:text-left lg:px-12 lg:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-gtn-accent/20 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-gtn-secondary/30 blur-2xl"
            />
            <div className="relative max-w-2xl space-y-3">
              <h2 className="text-white">{headline}</h2>
              <p className="text-white/80">{description}</p>
            </div>
            <ButtonLink
              href={ctaHref}
              variant="accent"
              size="lg"
              analyticsLabel={analyticsLabel}
            >
              {ctaLabel}
            </ButtonLink>
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
