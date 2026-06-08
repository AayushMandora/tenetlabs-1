import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[8px] border border-[var(--panel-border)] bg-[rgba(255,255,255,0.045)] px-3 py-1 text-xs font-medium text-[var(--text-muted)] backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
}
