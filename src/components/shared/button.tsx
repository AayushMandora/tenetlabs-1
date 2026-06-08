import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/cn";

export interface ButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-white/10 bg-white text-black shadow-[0_0_40px_rgba(124,58,237,0.26)] hover:shadow-[0_0_54px_rgba(124,58,237,0.42)]",
  secondary:
    "border-[var(--panel-border)] bg-[rgba(255,255,255,0.055)] text-[var(--text-100)] backdrop-blur-xl hover:border-[var(--panel-hover-border)] hover:bg-[rgba(255,255,255,0.09)]",
  ghost:
    "border-[var(--panel-border)] bg-transparent text-[var(--text-100)] hover:border-[var(--panel-hover-border)] hover:bg-[rgba(255,255,255,0.045)]",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/button relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-[8px] border px-6 text-sm font-bold transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.015] active:translate-y-0 active:scale-[0.99]",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.32),transparent)] opacity-0 transition duration-700 group-hover/button:translate-x-full group-hover/button:opacity-100"
      />
      <span className="relative z-10">{children}</span>
      <ArrowUpRight aria-hidden className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
    </a>
  );
}
