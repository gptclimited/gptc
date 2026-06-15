"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { motionEase } from "@/lib/motion/constants";
import { cn } from "@/lib/utils";

const mottoVariants = {
  hero: {
    activeColor: "rgb(244 180 0)",
    inactiveColor: "rgb(255 255 255)",
    separatorClassName: "text-white/40",
    inactiveOpacity: 0.5,
  },
  quote: {
    activeColor: "rgb(244 180 0)",
    inactiveColor: "rgb(100 116 139)",
    separatorClassName: "text-muted-foreground/40",
    inactiveOpacity: 0.85,
  },
} as const;

type AnimatedMottoProps = {
  phrases: readonly string[];
  className?: string;
  intervalMs?: number;
  variant?: keyof typeof mottoVariants;
};

export function AnimatedMotto({
  phrases,
  className,
  intervalMs = 2800,
  variant = "hero",
}: AnimatedMottoProps) {
  const { activeColor, inactiveColor, separatorClassName, inactiveOpacity } =
    mottoVariants[variant];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % phrases.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [phrases.length, intervalMs]);

  return (
    <span className={cn("inline", className)}>
      {phrases.map((phrase, index) => {
        const isActive = activeIndex === index;

        return (
          <span key={phrase} className="inline">
            <motion.span
              className="inline-block"
              animate={{
                opacity: isActive ? 1 : inactiveOpacity,
                y: isActive ? 0 : 2,
                scale: isActive ? 1 : 0.98,
              }}
              transition={{ duration: 0.55, ease: motionEase }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  color: isActive ? activeColor : inactiveColor,
                }}
                transition={{ duration: 0.55, ease: motionEase }}
              >
                {phrase}
              </motion.span>
            </motion.span>
            {index < phrases.length - 1 ? (
              <span aria-hidden className={cn("inline", separatorClassName)}>
                {" "}
              </span>
            ) : null}
          </span>
        );
      })}
    </span>
  );
}
