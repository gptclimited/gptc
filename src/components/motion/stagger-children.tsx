"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { defaultViewport } from "@/lib/motion/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerChildren({ children, className }: StaggerChildrenProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
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
