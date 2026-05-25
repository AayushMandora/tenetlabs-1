import React from "react";
import { cn } from "@/lib/cn";

interface CornerGuidesProps {
  className?: string;
  label?: string; // Optional technical label (e.g., coordinates, section code)
}

export function CornerGuides({ className, label }: CornerGuidesProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 pointer-events-none select-none z-30 font-mono text-[9px] text-[var(--border-color)]",
        className
      )}
    >
      {/* Top Left Crosshair */}
      <span className="absolute left-2 top-2 font-bold leading-none opacity-50 hover:opacity-100 transition-opacity">+</span >
      
      {/* Top Right Crosshair */}
      <span className="absolute right-2 top-2 font-bold leading-none opacity-50 hover:opacity-100 transition-opacity">+</span >
      
      {/* Bottom Left Crosshair */}
      <span className="absolute left-2 bottom-2 font-bold leading-none opacity-50 hover:opacity-100 transition-opacity">+</span >
      
      {/* Bottom Right Crosshair */}
      <span className="absolute right-2 bottom-2 font-bold leading-none opacity-50 hover:opacity-100 transition-opacity">+</span >
      
      {/* Optional technical label */}
      {label && (
        <span className="absolute right-6 top-2.5 text-[6.5px] uppercase tracking-widest text-[var(--text-dim)]/50 font-mono leading-none">
          [{label}]
        </span>
      )}
    </div>
  );
}
