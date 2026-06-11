"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { defaultViewport } from "@/lib/motion/constants";
import { fadeInUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

type FadeInViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeInView({ children, className, delay = 0 }: FadeInViewProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
