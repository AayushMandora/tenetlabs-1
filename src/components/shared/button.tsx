import { cn } from "@/lib/cn";

export interface ButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-b-4 border-r border-orange-700 bg-[var(--accent-primary)] text-[var(--bg-950)] shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:translate-y-0.5 active:border-b-2 active:border-r-0 hover:opacity-95 select-none",
  secondary:
    "border-b-4 border-r border-[var(--panel-border)] bg-[var(--border-color)] text-[var(--text-100)] hover:-translate-y-0.5 active:translate-y-0.5 active:border-b-2 active:border-r-0 backdrop-blur-sm select-none",
  ghost:
    "border-b-4 border-r border-[var(--panel-border)] bg-[var(--bg-950)]/40 text-[var(--text-100)] hover:border-[var(--panel-hover-border)] hover:-translate-y-0.5 active:translate-y-0.5 active:border-b-2 active:border-r-0 backdrop-blur-md select-none",
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
        "inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold transition duration-200 ease-out rounded-none",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
