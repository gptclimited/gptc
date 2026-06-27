"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { slideFade } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

type CoreValue = {
  title: string;
  description: string;
};

type CoreValuesSliderProps = {
  eyebrow?: string;
  title?: string;
  values: readonly CoreValue[];
};

function chunkValues<T>(items: readonly T[], size: number): T[][] {
  const pages: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }

  return pages;
}

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(max-width: 639px)").matches) {
        setItemsPerPage(1);
      } else if (window.matchMedia("(max-width: 1023px)").matches) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return itemsPerPage;
}

function ValueCard({ value, index }: { value: CoreValue; index: number }) {
  const accent = index % 2 === 1 ? "accent" : "secondary";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8",
        accent === "accent" ? "hover:border-gtn-accent/40" : "hover:border-gtn-secondary/30",
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
        className="absolute right-5 top-5 text-3xl font-bold leading-none text-gtn-primary/[0.06] transition-colors group-hover:text-gtn-secondary/[0.1]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="relative mb-3 pr-10 text-lg font-semibold tracking-tight text-gtn-primary transition-colors group-hover:text-gtn-secondary">
        {value.title}
      </h3>
      <p className="relative flex-1 text-sm leading-relaxed text-muted-foreground">
        {value.description}
      </p>
    </article>
  );
}

export function CoreValuesSlider({
  eyebrow,
  title = "Our Core Values",
  values,
}: CoreValuesSliderProps) {
  const itemsPerPage = useItemsPerPage();
  const pages = useMemo(() => chunkValues(values, itemsPerPage), [values, itemsPerPage]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const currentPage = pages[index] ?? [];

  useEffect(() => {
    setIndex(0);
  }, [itemsPerPage]);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(pages.length - 1, 0)));
  }, [pages.length]);

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + pages.length) % pages.length);
    },
    [pages.length],
  );

  const goToPrevious = useCallback(() => {
    goTo(index - 1);
  }, [goTo, index]);

  const goToNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  useEffect(() => {
    if (paused || pages.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % pages.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [paused, pages.length]);

  if (!currentPage.length) return null;

  const pageStartIndex = index * itemsPerPage;

  return (
    <Section background="muted">
      <Container className="space-y-8">
        {(eyebrow || title) && (
          <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
            {eyebrow ? (
              <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className="text-gtn-primary">{title}</h2> : null}
          </FadeInView>
        )}

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
              key={index}
              variants={slideFade}
              initial="enter"
              animate="center"
              exit="exit"
              aria-live={paused ? "off" : "polite"}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentPage.map((value, valueIndex) => (
                <ValueCard key={value.title} value={value} index={pageStartIndex + valueIndex} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous core values"
                onClick={goToPrevious}
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next core values"
                onClick={goToNext}
              >
                <ChevronRightIcon />
              </Button>
              <span className="text-sm tabular-nums text-muted-foreground">
                {index + 1} / {pages.length}
              </span>
            </div>

            <div className="hidden flex-wrap justify-end gap-2 sm:flex">
              {pages.map((page, pageIndex) => {
                const isActive = pageIndex === index;
                const start = pageIndex * itemsPerPage + 1;
                const end = pageIndex * itemsPerPage + page.length;

                return (
                  <button
                    key={page[0]?.title ?? pageIndex}
                    type="button"
                    aria-label={`Show core values ${start} to ${end}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => goTo(pageIndex)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300",
                      isActive
                        ? "border-gtn-secondary bg-gtn-secondary text-white shadow-sm"
                        : "border-border bg-white text-gtn-primary hover:border-gtn-secondary/40 hover:bg-gtn-neutral-50",
                    )}
                  >
                    {start}–{end}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
