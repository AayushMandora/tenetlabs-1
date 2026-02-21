"use client";

import type { ReactNode } from "react";

import { LazyMotion, domAnimation, m } from "framer-motion";

import { cn } from "@/lib/cn";
import { easing } from "@/lib/motion";
import { useHydratedReducedMotion } from "@/components/motion/use-hydrated-reduced-motion";

interface MotionProviderProps {
  children: ReactNode;
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function Stagger({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.1,
}: StaggerProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.986 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.58, ease: easing },
        },
      }}
    >
      {children}
    </m.div>
  );
}
