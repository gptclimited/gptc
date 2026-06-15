import Image from "next/image";

import { AnimatedMotto } from "@/components/motion/animated-motto";
import { FadeInView } from "@/components/motion/fade-in-view";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ImageAsset } from "@/config/types";

type FounderSpotlightProps = {
  name: string;
  title: string;
  quote: string;
  animatedPhrases: readonly string[];
  image: ImageAsset;
};

export function FounderSpotlight({
  name,
  title,
  quote,
  animatedPhrases,
  image,
}: FounderSpotlightProps) {
  return (
    <Section background="white">
      <Container>
        <FadeInView>
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
            <div className="relative hidden aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-lg lg:block">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-top"
                sizes="400px"
                priority
              />
            </div>

            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
                Our Leader
              </p>

              <div className="flex items-start gap-4 sm:gap-5 lg:contents">
                <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-xl border border-border shadow-md sm:w-44 lg:hidden">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 160px, 176px"
                    priority
                    aria-hidden
                  />
                </div>

                <div className="min-w-0 space-y-1.5 lg:space-y-6">
                  <h2 className="text-xl font-semibold tracking-tight text-balance text-gtn-primary sm:text-2xl lg:text-4xl">
                    {name}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground lg:text-xl">
                    {title}
                  </p>
                </div>
              </div>

              <blockquote
                className="border-l-4 border-gtn-accent pl-4 text-base leading-relaxed lg:pl-6 lg:text-xl"
                aria-label={quote}
              >
                &ldquo;
                <AnimatedMotto phrases={animatedPhrases} variant="quote" />
                &rdquo;
              </blockquote>

              <ButtonLink href="/about" variant="outline" analyticsLabel="founder_about">
                Learn more about our story
              </ButtonLink>
            </div>
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
