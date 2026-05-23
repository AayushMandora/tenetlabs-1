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

    // 3D Perspective Card Tilt & Shadow Shift calculations
    const width = rect.width;
    const height = rect.height;
    const rotateY = ((x - width / 2) / (width / 2)) * 6; // range -6deg to 6deg
    const rotateX = -((y - height / 2) / (height / 2)) * 6; // range -6deg to 6deg
    containerRef.current.style.setProperty("--tilt-x", `${rotateX}deg`);
    containerRef.current.style.setProperty("--tilt-y", `${rotateY}deg`);

    const shadowX = -((x - width / 2) / (width / 2)) * 10; // range -10px to 10px shift
    const shadowY = -((y - height / 2) / (height / 2)) * 10;
    containerRef.current.style.setProperty("--shadow-x", `${shadowX}px`);
    containerRef.current.style.setProperty("--shadow-y", `${shadowY}px`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!containerRef.current) return;
    containerRef.current.style.setProperty("--tilt-x", "0deg");
    containerRef.current.style.setProperty("--tilt-y", "0deg");
    containerRef.current.style.setProperty("--shadow-x", "0px");
    containerRef.current.style.setProperty("--shadow-y", "4px");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group/glow relative overflow-hidden border border-[var(--panel-border)] bg-[var(--panel-bg)] [transition:transform_0.25s_ease-out,box-shadow_0.25s_ease-out,border-color_0.3s_ease,background-color_0.3s_ease] will-change-transform hover:z-30",
        className
      )}
      style={{
        transform: "perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateZ(0)",
        boxShadow: "var(--shadow-x, 0px) var(--shadow-y, 4px) 24px var(--border-color)"
      }}
      {...props}
    >
      {/* Card Content wrapper */}
      <div className={cn("relative z-20 h-full w-full", containerClassName)}>
        {children}
      </div>
    </div>
  );
}
