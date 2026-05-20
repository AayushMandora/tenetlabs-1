import { cn } from "@/lib/cn";

export interface ButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border border-white/20 bg-[#050505] text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:border-white/35 hover:bg-[#111111] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]",
  secondary:
    "border border-white/10 bg-white/[0.04] text-[var(--text-100)] hover:border-white/20 hover:bg-white/[0.09] backdrop-blur-sm",
  ghost:
    "border border-white/5 bg-black/40 text-[var(--text-100)] hover:border-white/15 hover:bg-white/10 backdrop-blur-md",
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
