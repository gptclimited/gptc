"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { defaultViewport } from "@/lib/motion/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  /** When true, stagger animation replays each time the block enters the viewport. */
  replay?: boolean;
};

export function StaggerChildren({ children, className, replay = true }: StaggerChildrenProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...defaultViewport, once: !replay }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={cn(className)} variants={fadeInUp}>
      {children}
    </motion.div>
  );
}
