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
  const shouldReduceMotion = useHydratedReducedMotion();
  const hasFinePointer = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getPointerSnapshotServer
  );
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 150, damping: 26, mass: 0.16 });
  const springY = useSpring(y, { stiffness: 150, damping: 26, mass: 0.16 });

  useEffect(() => {
    if (shouldReduceMotion || !hasFinePointer) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [hasFinePointer, shouldReduceMotion, x, y]);

  if (!hasFinePointer || shouldReduceMotion) {
    return null;
  }

  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-10 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(255,255,255,0.03),transparent_72%)] blur-xl lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}
