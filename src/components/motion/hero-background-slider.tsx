"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { motionEase } from "@/lib/motion/constants";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  src: string;
  alt: string;
  backgroundPosition?: string;
};

type HeroBackgroundSliderProps = {
  slides: readonly HeroSlide[];
  intervalMs?: number;
};

export function HeroBackgroundSlider({
  slides,
  intervalMs = 6000,
}: HeroBackgroundSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <div className="absolute inset-0" aria-hidden>
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1.06 : 1,
            }}
            transition={{
              opacity: { duration: 1.4, ease: motionEase },
              scale: isActive
                ? { duration: intervalMs / 1000, ease: "linear" }
                : { duration: 0 },
            }}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-[65%_30%] sm:object-[70%_35%] lg:[object-position:var(--hero-bg-pos)]"
              style={
                {
                  "--hero-bg-pos": slide.backgroundPosition ?? "center center",
                } as CSSProperties
              }
            />
          </motion.div>
        );
      })}

      {slides.length > 1 ? (
        <div className="absolute bottom-6 right-4 z-10 flex items-center gap-2 sm:right-8">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show hero image ${index + 1} of ${slides.length}: ${slide.alt}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gtn-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gtn-primary",
                index === activeIndex
                  ? "w-7 bg-gtn-accent"
                  : "w-1.5 bg-white/45 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
