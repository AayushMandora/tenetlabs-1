import type React from "react";
import { CursorGlow } from "@/components/motion/floating";
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
      {/* Restored rich animated background with monochrome gradient */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20"
        style={{
          background: `radial-gradient(900px 560px at 8% 0%, var(--glow-1), transparent 70%),
                       radial-gradient(860px 600px at 95% 8%, var(--glow-2), transparent 72%),
                       radial-gradient(680px 360px at 34% 66%, var(--glow-3), transparent 75%),
                       linear-gradient(170deg, var(--bg-950), var(--bg-900))`
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[length:48px_48px] opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px),
                            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[length:3px_3px] opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(var(--dots-color) 0.5px, transparent 0.7px)`
        }}
      />
      <CursorGlow />

      {/* Full-width sharp wrapper — no rounding, flush to viewport edges, solid background to separate from outer starfield */}
      <div className="relative z-20 mx-auto max-w-[1400px] border-x border-[var(--border-color)] bg-[var(--bg-950)]">
        <div className="relative border-b border-[var(--border-color)] bg-[var(--header-bg)]">
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

        {/* Sections stacked with dividers — no vertical gaps between them */}
        <div className="divide-y divide-[var(--border-color)]">
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
    <section className={tight ? "px-6 py-10 sm:px-10 md:px-16" : "px-6 py-20 sm:px-10 md:px-16"}>
      {children}
    </section>
  );
}
