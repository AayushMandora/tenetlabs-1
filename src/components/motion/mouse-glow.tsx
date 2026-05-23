"use client";

import React, { useRef, useState } from "react";
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
  glowColor = "rgba(255, 255, 255, 0.08)",
  glowSize = 400,
  containerClassName,
  ...props
}: MouseGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group/glow relative overflow-hidden border border-[var(--panel-border)] bg-[var(--panel-bg)] transition-all duration-300 ease-out hover:border-[var(--panel-hover-border)] hover:bg-[var(--panel-hover-bg)]",
        className
      )}
      {...props}
    >
      {/* Card Content wrapper */}
      <div className={cn("relative z-20 h-full w-full", containerClassName)}>
        {children}
      </div>
    </div>
  );
}
