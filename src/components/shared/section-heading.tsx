import { cn } from "@/lib/cn";
import { CornerGuides } from "./corner-guides";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const ROMAN_NUMERALS: Record<string, string> = {
  "why choose us": "I",
  "our process": "II",
  "tech stack": "III",
  "portfolio": "IV",
  "case studies": "IV",
  "pricing": "V",
  "testimonials": "VI",
  "frequently asked questions": "VII",
  "faq": "VII",
  "our services": "VIII",
  "services": "VIII",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const eyebrowLower = eyebrow.toLowerCase().trim();
  const numeral = ROMAN_NUMERALS[eyebrowLower] || "";
  const displayEyebrow = numeral ? `[ ${numeral} ]  ${eyebrow}` : eyebrow;

  return (
    <header
      className={cn(
        "relative max-w-3xl space-y-3 p-6 sm:p-8 border border-[var(--border-color)] bg-[var(--surface-800)]/10 backdrop-blur-sm overflow-hidden text-left rounded-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <CornerGuides label={numeral || undefined} />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-support)] font-mono">
        {displayEyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight text-[var(--text-100)] sm:text-4xl md:text-5xl pb-1 font-serif">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base font-sans mt-2">
          {description}
        </p>
      ) : null}
    </header>
  );
}
