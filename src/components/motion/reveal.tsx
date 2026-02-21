"use client";

import type { ReactNode } from "react";

import { m } from "framer-motion";

import { cn } from "@/lib/cn";
import { easing } from "@/lib/motion";
import { useHydratedReducedMotion } from "@/components/motion/use-hydrated-reduced-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 20,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: 0, y: distance, scale: 0.986 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.18 }}
      transition={{ duration: 0.66, delay, ease: easing }}
    >
      {children}
    </m.div>
  );
}
