"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { heroContainer, heroItem } from "@/lib/motion/variants";
import type { CtaLink, ImageAsset } from "@/config/types";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  backgroundImage?: ImageAsset;
  backgroundPosition?: string;
  imageCaption?: { name: string; title: string };
  trustBadges?: readonly string[];
  breadcrumb?: ReactNode;
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundPosition = "center",
  imageCaption,
  trustBadges,
  breadcrumb,
}: HeroProps) {
  return (
    <Section
      background="white"
      spacing="none"
      className="relative overflow-hidden border-b border-border"
    >
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_30%] sm:object-[70%_35%] lg:[object-position:var(--hero-bg-pos)]"
            style={{ "--hero-bg-pos": backgroundPosition } as CSSProperties}
          />
          {/* Strong scrim on the left for text; fades out so the wing stays visible on the right */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-gtn-primary/92 from-0% via-gtn-primary/45 via-45% to-transparent to-85%"
          />
          {/* Light top vignette only — avoids darkening the wing along the bottom edge */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-gtn-primary/25 via-transparent to-transparent"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgb(29_112_184/0.12),transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 top-1/4 size-96 rounded-full bg-gtn-accent/10 blur-3xl"
          />
        </>
      )}

      <Container className="relative flex min-h-[max(36rem,78dvh)] flex-col py-12 sm:min-h-[36rem] sm:py-14 lg:min-h-[40rem] lg:py-24">
        {breadcrumb ? <div className="mb-6 sm:mb-8">{breadcrumb}</div> : null}
        <div className="flex w-full max-w-2xl flex-1 flex-col justify-center">
          <motion.div
            className="flex flex-col gap-5 sm:gap-6 lg:gap-8"
            initial="hidden"
            animate="visible"
            variants={heroContainer}
          >
            {eyebrow ? (
              <motion.p
                variants={heroItem}
                className="inline-flex w-fit max-w-full items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm"
              >
                {eyebrow}
              </motion.p>
            ) : null}

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <motion.h1
                variants={heroItem}
                className="text-[1.65rem] leading-[1.15] text-white drop-shadow-[0_2px_8px_rgba(11,60,93,0.5)] sm:text-3xl sm:leading-tight md:text-4xl lg:text-[2.75rem]"
              >
                {headline}
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="max-w-xl text-[0.9375rem] leading-relaxed text-white/90 drop-shadow-[0_1px_4px_rgba(11,60,93,0.45)] sm:text-base lg:text-xl"
              >
                {subheadline}
              </motion.p>
            </div>

            {trustBadges && trustBadges.length > 0 ? (
              <motion.ul
                variants={heroItem}
                className="flex flex-wrap gap-1.5 sm:gap-2"
                aria-label="Who we serve"
              >
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-sm"
                  >
                    {badge}
                  </li>
                ))}
              </motion.ul>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <motion.div
                variants={heroItem}
                className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-0"
              >
                {primaryCta ? (
                  <ButtonLink
                    href={primaryCta.href}
                    variant="accent"
                    size="lg"
                    className="h-11 w-full sm:w-auto sm:min-w-[11rem]"
                    analyticsLabel={primaryCta.analyticsLabel ?? "hero_primary"}
                  >
                    {primaryCta.label}
                  </ButtonLink>
                ) : null}
                {secondaryCta ? (
                  <ButtonLink
                    href={secondaryCta.href}
                    variant="outline"
                    size="lg"
                    className="h-11 w-full border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto sm:min-w-[11rem]"
                    analyticsLabel={secondaryCta.analyticsLabel ?? "hero_secondary"}
                  >
                    {secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </motion.div>
            )}
          </motion.div>
        </div>

        {imageCaption ? (
          <div className="mt-8 hidden text-right text-white/80 sm:block lg:absolute lg:bottom-8 lg:right-8 lg:mt-0">
            <p className="font-semibold text-white">{imageCaption.name}</p>
            <p className="text-sm">{imageCaption.title}</p>
          </div>
        ) : null}

        <div id="hero-sentinel" className="absolute bottom-0 h-px w-full" aria-hidden />
      </Container>
    </Section>
  );
}
