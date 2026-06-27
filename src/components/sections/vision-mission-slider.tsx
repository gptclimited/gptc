"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { slideFade } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

type SlideVariant = "vision" | "mission";

type VisionMissionSlide = {
  variant: SlideVariant;
  eyebrow: string;
  title: string;
  description: string;
};

type VisionMissionSliderProps = {
  vision: {
    eyebrow: string;
    title: string;
    description: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

const panelStyles: Record<
  SlideVariant,
  {
    panel: string;
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  vision: {
    panel: "border-2 border-gtn-secondary bg-white bg-gtn-secondary/5",
    eyebrow: "text-gtn-secondary",
    title: "text-gtn-primary",
    description: "text-lead",
  },
  mission: {
    panel: "border-gtn-primary/20 bg-gtn-primary text-white",
    eyebrow: "text-gtn-accent",
    title: "text-white",
    description: "text-lg text-white/90",
  },
};

function buildSlides({ vision, mission }: VisionMissionSliderProps): VisionMissionSlide[] {
  return [
    {
      variant: "vision",
      eyebrow: vision.eyebrow,
      title: vision.title,
      description: vision.description,
    },
    {
      variant: "mission",
      eyebrow: mission.eyebrow,
      title: mission.title,
      description: mission.description,
    },
  ];
}

export function VisionMissionSlider({ vision, mission }: VisionMissionSliderProps) {
  const slides = buildSlides({ vision, mission });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = slides[index];

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + slides.length) % slides.length);
    },
    [slides.length],
  );

  const goToPrevious = useCallback(() => {
    goTo(index - 1);
  }, [goTo, index]);

  const goToNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  if (!current) return null;

  const styles = panelStyles[current.variant];

  return (
    <Section background="muted">
      <Container className="space-y-8">
        <FadeInView className="flex flex-col items-center gap-6">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Vision and mission"
          >
            {slides.map((slide, slideIndex) => {
              const isActive = slideIndex === index;

              return (
                <button
                  key={slide.variant}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`vision-mission-panel-${slide.variant}`}
                  id={`vision-mission-tab-${slide.variant}`}
                  onClick={() => goTo(slideIndex)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-gtn-secondary bg-gtn-secondary text-white shadow-sm"
                      : "border-border bg-white text-gtn-primary hover:border-gtn-secondary/40 hover:bg-gtn-neutral-50",
                  )}
                >
                  {slide.eyebrow}
                </button>
              );
            })}
          </div>
        </FadeInView>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.variant}
              id={`vision-mission-panel-${current.variant}`}
              role="tabpanel"
              aria-labelledby={`vision-mission-tab-${current.variant}`}
              variants={slideFade}
              initial="enter"
              animate="center"
              exit="exit"
              aria-live={paused ? "off" : "polite"}
              className={cn(
                "overflow-hidden rounded-3xl border p-6 shadow-sm sm:p-8 lg:p-10",
                styles.panel,
              )}
            >
              <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
                <p className={cn("text-sm font-medium uppercase tracking-wider", styles.eyebrow)}>
                  {current.eyebrow}
                </p>
                <h2 className={styles.title}>{current.title}</h2>
                <p className={cn("leading-relaxed", styles.description)}>{current.description}</p>
              </FadeInView>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous slide"
                onClick={goToPrevious}
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next slide"
                onClick={goToNext}
              >
                <ChevronRightIcon />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              {slides.map((slide, slideIndex) => {
                const isActive = slideIndex === index;

                return (
                  <button
                    key={slide.variant}
                    type="button"
                    aria-label={`Go to ${slide.eyebrow}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => goTo(slideIndex)}
                    className={cn(
                      "size-2.5 rounded-full transition-all duration-300",
                      isActive
                        ? "scale-110 bg-gtn-secondary"
                        : "bg-border hover:bg-gtn-secondary/50",
                    )}
                  />
                );
              })}
            </div>

            <span className="text-sm tabular-nums text-muted-foreground">
              {index + 1} / {slides.length}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
