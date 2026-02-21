import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl space-y-3",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-support)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight text-[var(--text-100)] sm:text-4xl md:text-5xl pb-1">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
