"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";
import { useHydratedReducedMotion } from "@/components/motion/use-hydrated-reduced-motion";

interface FloatingProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
}

function subscribePointer(callback: () => void): () => void {
  const media = window.matchMedia("(pointer: fine)");
  const handler = () => callback();
  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
}

function getPointerSnapshot(): boolean {
  return window.matchMedia("(pointer: fine)").matches;
}

function getPointerSnapshotServer(): boolean {
  return false;
}

export function Floating({
  children,
  className,
  distance = 10,
  duration = 8.6,
  delay = 0,
}: FloatingProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      animate={{ y: [0, -distance, 0], x: [0, distance * 0.15, 0] }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </m.div>
  );
}

export function CursorGlow() {
  return null;
}
