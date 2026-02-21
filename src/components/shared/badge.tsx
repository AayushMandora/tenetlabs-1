import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-[var(--text-muted)]",
        className
      )}
      {...props}
    />
  );
}
