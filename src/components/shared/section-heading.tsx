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
        "relative max-w-4xl space-y-[24px] overflow-hidden text-left",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <CornerGuides className="hidden md:block opacity-40" label={numeral || undefined} />
      <p className="font-mono text-[13px] font-bold uppercase tracking-[0.24em] text-[var(--accent-support)]">
        {displayEyebrow}
      </p>
      <h2 className="max-w-4xl font-display text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[1.15] text-[var(--text-100)]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[18px] font-medium leading-[1.6] text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
