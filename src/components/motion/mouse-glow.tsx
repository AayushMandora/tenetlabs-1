"use client";

import React from "react";

import { cn } from "@/lib/cn";

interface MouseGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  glowSize?: number;
  containerClassName?: string;
}

export function MouseGlow({
  children,
  className,
  containerClassName,
  glowColor,
  glowSize,
  ...props
}: MouseGlowProps) {
  return (
    <div
      className={cn(
        "group/glow relative rounded-[8px] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {/* Subtle hover outline wrapper */}
      <div className="absolute -inset-px rounded-[8px] bg-white/[0.08] opacity-100 transition-opacity duration-300 group-hover/glow:bg-white/[0.18]" />
      
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[8px] border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-sm transition-colors duration-300 group-hover/glow:border-[var(--panel-hover-border)] group-hover/glow:bg-[var(--panel-hover-bg)]",
          containerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
