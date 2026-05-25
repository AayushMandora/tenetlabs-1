"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

// ─── Pointer-fine detector for cursor glow ──────────────────────────────────

function subscribePointer(cb: () => void) {
  const m = window.matchMedia("(pointer: fine)");
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}
function getPointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}
function getPointerSnapshotServer() {
  return false;
}

// ─── Background cursor glow (confined to background layer inside container) ───

function BackgroundCursorGlow() {
  const hasFinePointer = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getPointerSnapshotServer
  );
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const springX = useSpring(x, { stiffness: 80, damping: 30, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 80, damping: 30, mass: 0.2 });

  useEffect(() => {
    if (!hasFinePointer) return;

    let lastClientX = -1000;
    let lastClientY = -1000;

    const updatePosition = (clientX: number, clientY: number) => {
      if (clientX < 0) return;
      const width = window.innerWidth;
      // Container max-width is 1400px, centered
      const leftOffset = width > 1400 ? (width - 1400) / 2 : 0;
      x.set(clientX - leftOffset - 256);
      y.set(clientY + window.scrollY - 256);
    };

    const onMove = (e: MouseEvent) => {
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      updatePosition(e.clientX, e.clientY);
    };

    const onScroll = () => {
      updatePosition(lastClientX, lastClientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hasFinePointer, x, y]);

  if (!hasFinePointer) return null;

  return (
    <m.div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-[1] hidden h-[512px] w-[512px] rounded-none blur-3xl lg:block"
      style={{
        x: springX,
        y: springY,
        background: "radial-gradient(circle, var(--cursor-glow), transparent 70%)",
      }}
    />
  );
}

// ─── Main export ────────────────────────────────────────────────────────────

export function AsciiBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Background cursor glow — lives here, tracks scroll & coordinates perfectly */}
      <BackgroundCursorGlow />

      {/* Subtle radial vignette for depth — Vapi-inspired */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,85,17,0.04), transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(88,86,214,0.03), transparent 70%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(0,128,128,0.025), transparent 70%)
          `,
        }}
      />

      {/* Grid overlay — LiveKit-inspired fine scanlines */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Micro-dots overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--dots-color) 0.5px, transparent 0.7px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Bottom gradient fade-out for smooth visual end */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[20vh]"
        style={{
          background: "linear-gradient(to top, var(--bg-950), transparent)",
        }}
      />

      {/* Top gradient fade for depth */}
      <div
        className="absolute top-0 left-0 right-0 h-[15vh]"
        style={{
          background: "linear-gradient(to bottom, var(--bg-950) 0%, transparent 100%)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
