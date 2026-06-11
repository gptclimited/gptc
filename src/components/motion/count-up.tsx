"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { motionDurations, motionEase } from "@/lib/motion/constants";
import { cn } from "@/lib/utils";

type CountUpProps = {
  value: number | string;
  className?: string;
};

function parseNumericValue(value: number | string): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  const match = String(value).match(/[\d,]+/);
  if (!match) return null;

  const parsed = Number(match[0].replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function formatAnimatedValue(original: number | string, current: number): string {
  if (typeof original === "number") {
    return Math.round(current).toLocaleString("en-CA");
  }

  const originalText = String(original);
  const suffix = originalText.replace(/^[\d,]+/, "");
  return `${Math.round(current).toLocaleString("en-CA")}${suffix}`;
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const numericTarget = parseNumericValue(value);
  const [animatedValue, setAnimatedValue] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView || numericTarget === null) {
      return;
    }

    const controls = animate(0, numericTarget, {
      duration: motionDurations.slow * 4,
      ease: motionEase,
      onUpdate: (latest) => setAnimatedValue(latest),
    });

    return () => controls.stop();
  }, [isInView, numericTarget]);

  const display =
    numericTarget === null
      ? String(value)
      : animatedValue === null
        ? String(value)
        : formatAnimatedValue(value, animatedValue);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
    </span>
  );
}
