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
  containerClassName,
  glowColor: _glowColor,
  glowSize: _glowSize,
  ...props
}: MouseGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;
    // 3D Perspective Card Tilt calculations
    const rotateY = ((x - width / 2) / (width / 2)) * 10; // range -10deg to 10deg
    const rotateX = -((y - height / 2) / (height / 2)) * 10; // range -10deg to 10deg
    containerRef.current.style.setProperty("--tilt-x", `${rotateX}deg`);
    containerRef.current.style.setProperty("--tilt-y", `${rotateY}deg`);

    const shadowX = -((x - width / 2) / (width / 2)) * 16;
    const shadowY = -((y - height / 2) / (height / 2)) * 16;
    containerRef.current.style.setProperty("--shadow-x", `${shadowX}px`);
    containerRef.current.style.setProperty("--shadow-y", `${shadowY}px`);

    // CSS variables for high-performance cursor tracking without React state changes
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
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
        "group/glow relative [transition:transform_0.25s_ease-out,box-shadow_0.25s_ease-out] will-change-transform hover:z-30 rounded-none",
        className
      )}
      style={{
        transform: "perspective(1200px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateZ(0)",
        transformStyle: "preserve-3d",
        boxShadow: "var(--shadow-x, 0px) var(--shadow-y, 8px) 36px var(--slab-shadow)"
      }}
      {...props}
    >
      {/* 1. Backplate Layer (Z = 0) with cursor glow */}
      <div 
        className="absolute inset-0 overflow-hidden border border-[var(--panel-border)] bg-[var(--slab-face)]/40 rounded-none"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* CSS Cursor Glow inside backplate */}
        <div 
          className="pointer-events-none absolute z-[1] hidden h-[512px] w-[512px] rounded-none blur-3xl lg:block opacity-0 group-hover/glow:opacity-100 transition-opacity duration-300"
          style={{
            left: "var(--mouse-x, 0px)",
            top: "var(--mouse-y, 0px)",
            transform: "translate(-256px, -256px)",
            background: "radial-gradient(circle, var(--cursor-glow), transparent 70%)",
          }}
        />
      </div>

      {/* 2. 3D Volumetric Side Panels (Depth = 32px, Opaque Directional Shading) */}
      {/* Left side */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[32px] border-r border-[var(--panel-border)] bg-[var(--slab-side-left)] select-none pointer-events-none"
        style={{
          transform: "rotateY(90deg)",
          transformOrigin: "left",
        }}
      />
      {/* Right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[32px] border-l border-[var(--panel-border)] bg-[var(--slab-side-right)] select-none pointer-events-none"
        style={{
          transform: "rotateY(-90deg)",
          transformOrigin: "right",
        }}
      />
      {/* Top side */}
      <div
        className="absolute left-0 right-0 top-0 h-[32px] border-b border-[var(--panel-border)] bg-[var(--slab-side-top)] select-none pointer-events-none"
        style={{
          transform: "rotateX(-90deg)",
          transformOrigin: "top",
        }}
      />
      {/* Bottom side */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[32px] border-t border-[var(--panel-border)] bg-[var(--slab-side-bottom)] select-none pointer-events-none"
        style={{
          transform: "rotateX(90deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* 3. Inner Core / Blueprint Layer (Z = 16px) - "something behind it" */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-10 flex items-center justify-center overflow-hidden"
        style={{
          transform: "translateZ(16px)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-4 rounded-none border border-dashed border-[var(--accent-primary)]/10 animate-[spin_40s_linear_infinite] opacity-60" />
        <div className="absolute inset-8 rounded-none border border-dotted border-[var(--text-muted)]/15 animate-[spin_25s_linear_infinite_reverse] opacity-70" />
        <div className="absolute inset-16 rounded-none border border-[var(--text-dim)]/10 animate-[spin_15s_linear_infinite] opacity-50" />
        <div className="h-28 w-28 rounded-none bg-[radial-gradient(circle,var(--slab-glow)_0%,transparent_75%)] opacity-80" />
      </div>

      {/* 4. Front Panel (Z = 32px) housing the card content - Frosted Glass */}
      <div 
        className={cn(
          "relative z-20 h-full w-full border border-[var(--panel-border)] bg-[var(--slab-face)] backdrop-blur-[6px] [transition:border-color_0.3s_ease,background-color_0.3s_ease] rounded-none shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
          containerClassName
        )}
        style={{
          transform: "translateZ(32px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}
