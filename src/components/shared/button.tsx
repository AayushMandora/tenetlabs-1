import { cn } from "@/lib/cn";

export interface ButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border border-transparent bg-[var(--accent-primary)] text-[var(--bg-950)] shadow-[0_0_20px_var(--glow-1)] hover:-translate-y-0.5 hover:opacity-90",
  secondary:
    "border border-[var(--panel-border)] bg-[var(--border-color)] text-[var(--text-100)] hover:-translate-y-0.5 hover:bg-[var(--text-100)]/[0.08] backdrop-blur-sm",
  ghost:
    "border border-[var(--panel-border)] bg-[var(--bg-950)]/40 text-[var(--text-100)] hover:border-[var(--panel-hover-border)] hover:bg-[var(--text-100)]/[0.04] backdrop-blur-md",
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
        "inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold transition duration-200 ease-out",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
