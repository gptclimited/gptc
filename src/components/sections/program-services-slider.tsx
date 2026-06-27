"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { slideFade } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

type ProgramService = {
  title: string;
  shortTitle: string;
  goal: string;
  activities: readonly string[];
  outcomes: readonly string[];
};

type ProgramServicesSliderProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly ProgramService[];
  consultingAreas: readonly string[];
  expectedImpact: readonly string[];
};

export function ProgramServicesSlider({
  eyebrow,
  title,
  description,
  items,
  consultingAreas,
  expectedImpact,
}: ProgramServicesSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = items[index];

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + items.length) % items.length);
    },
    [items.length],
  );

  const goToPrevious = useCallback(() => {
    goTo(index - 1);
  }, [goTo, index]);

  const goToNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  useEffect(() => {
    if (paused || items.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 9000);

    return () => window.clearInterval(timer);
  }, [paused, items.length]);

  if (!current) return null;

  const panelId = `program-service-panel-${index}`;

  return (
    <Section background="white" id="programs">
      <Container className="space-y-10">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">{eyebrow}</p>
          <h2 className="text-gtn-primary">{title}</h2>
          <p className="text-lead">{description}</p>
        </FadeInView>

        <FadeInView>
          <div
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
            role="tablist"
            aria-label="Program services"
          >
            {items.map((item, itemIndex) => {
              const isActive = itemIndex === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  id={`program-service-tab-${itemIndex}`}
                  onClick={() => goTo(itemIndex)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-gtn-secondary bg-gtn-secondary text-white shadow-sm"
                      : "border-border bg-white text-gtn-primary hover:border-gtn-secondary/40 hover:bg-gtn-neutral-50",
                  )}
                >
                  <span className="sr-only">{item.title}</span>
                  <span aria-hidden>{item.shortTitle}</span>
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
              key={current.title}
              id={panelId}
              role="tabpanel"
              aria-labelledby={`program-service-tab-${index}`}
              variants={slideFade}
              initial="enter"
              animate="center"
              exit="exit"
              aria-live={paused ? "off" : "polite"}
              className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-white via-gtn-neutral-50 to-gtn-secondary/5 p-6 shadow-sm sm:p-8 lg:p-10"
            >
              <div className="space-y-8">
                <div className="space-y-3 text-center">
                  <p className="text-sm font-medium tabular-nums text-gtn-secondary">
                    Service {index + 1} of {items.length}
                  </p>
                  <h3 className="text-2xl font-semibold text-gtn-primary sm:text-3xl">
                    {current.title}
                  </h3>
                </div>

                <div className="mx-auto max-w-3xl space-y-3 rounded-2xl border border-gtn-secondary/15 bg-white/80 p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-gtn-secondary">
                    Goal
                  </p>
                  <p className="text-lead leading-relaxed text-gtn-primary">{current.goal}</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gtn-secondary">
                      Activities
                    </p>
                    <ul className="space-y-2.5">
                      {current.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-gtn-secondary"
                          />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gtn-secondary">
                      Outcomes
                    </p>
                    <ul className="space-y-2.5">
                      {current.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <CheckIcon
                            className="mt-0.5 size-4 shrink-0 text-gtn-secondary"
                            aria-hidden
                          />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous service"
                onClick={goToPrevious}
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next service"
                onClick={goToNext}
              >
                <ChevronRightIcon />
              </Button>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              {items.map((item, itemIndex) => {
                const isActive = itemIndex === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Go to ${item.title}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => goTo(itemIndex)}
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
              {index + 1} / {items.length}
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeInView className="space-y-4 rounded-2xl border border-border bg-gtn-neutral-50 p-6">
            <h3 className="text-lg font-semibold text-gtn-primary">Consulting Services</h3>
            <p className="text-sm text-muted-foreground">
              We provide professional consulting in:
            </p>
            <ul className="space-y-2">
              {consultingAreas.map((area) => (
                <li key={area} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-gtn-secondary" aria-hidden />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </FadeInView>

          <FadeInView className="space-y-4 rounded-2xl border border-gtn-secondary/15 bg-white p-6">
            <h3 className="text-lg font-semibold text-gtn-primary">Expected Impact</h3>
            <p className="text-sm text-muted-foreground">
              Through our programs and consulting services, we aim to:
            </p>
            <StaggerChildren className="space-y-2">
              {expectedImpact.map((impact) => (
                <StaggerItem key={impact}>
                  <p className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-gtn-accent" aria-hidden />
                    <span>{impact}</span>
                  </p>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeInView>
        </div>
      </Container>
    </Section>
  );
}
