import type React from "react";
import { AsciiBackground } from "@/components/motion/ascii-background";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { FooterSection } from "@/components/sections/footer";
import { HeaderSection } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { PricingSection } from "@/components/sections/pricing";
import { ProcessSection } from "@/components/sections/process";
import { SocialProofSection } from "@/components/sections/social-proof";
import { TechStackSection } from "@/components/sections/tech-stack";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyUsSection } from "@/components/sections/why-us";

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      {/* ── Main content container ────────────────────────────────────── */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] border-x border-[var(--border-color)] bg-[var(--bg-950)]/80 backdrop-blur-sm overflow-hidden">
        {/* ── Background layer ──────────────────────────────────────────────
            Includes: radial glows, grid, dots, cursor glow, parallax ASCII art
            All confined to the background (z-0), behind the main content.
            Moved inside the container to remain crisp (not blurred by container's backdrop-blur). */}
        <AsciiBackground />
        <div className="relative z-10 border-b border-[var(--border-color)] bg-[var(--header-bg)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.8]"
            style={{
              backgroundImage: `radial-gradient(900px 500px at 0% 0%, var(--glow-1), transparent 70%),
                                radial-gradient(700px 400px at 100% 0%, var(--glow-2), transparent 70%)`
            }}
          />
          <HeaderSection />
        </div>

        {/* Sections stacked with dividers */}
        <div className="relative z-10 divide-y divide-[var(--border-color)]">
          <Section><HeroSection /></Section>
          <Section tight><SocialProofSection /></Section>
          <Section><ProcessSection /></Section>
          <Section><TechStackSection /></Section>
          <Section><PortfolioSection /></Section>
          <Section><WhyUsSection /></Section>
          <Section><PricingSection /></Section>
          <Section><TestimonialsSection /></Section>
          <Section><FaqSection /></Section>
          <Section><CtaSection /></Section>
          <Section tight><FooterSection /></Section>
        </div>
      </div>
    </div>
  );
}

function Section({ children, tight }: { children: React.ReactNode; tight?: boolean }) {
  return (
    <div className={tight ? "px-4 py-8 sm:px-10 md:px-16" : "px-4 py-16 sm:px-10 md:px-16"}>
      {children}
    </div>
  );
}
