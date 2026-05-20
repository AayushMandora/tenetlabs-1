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
import { ServicesSection } from "@/components/sections/services";
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
        className="fixed inset-0 -z-20 bg-[radial-gradient(900px_560px_at_8%_0%,rgba(255,255,255,0.08),transparent_70%),radial-gradient(860px_600px_at_95%_8%,rgba(180,180,180,0.06),transparent_72%),radial-gradient(680px_360px_at_34%_66%,rgba(255,255,255,0.04),transparent_75%),linear-gradient(170deg,var(--bg-950),var(--bg-900))]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:48px_48px] opacity-[0.3]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.88)_0.5px,transparent_0.7px)] bg-[length:3px_3px] opacity-[0.08]"
      />
      <CursorGlow />

      {/* Full-width sharp wrapper — no rounding, flush to viewport edges, solid background to separate from outer starfield */}
      <div className="relative z-20 mx-auto max-w-[1400px] border-x border-white/[0.08] bg-[#060608]">
        <div className="relative border-b border-white/[0.06] bg-[rgba(7,7,9,0.98)]">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_0%_0%,rgba(255,255,255,0.04),transparent_70%),radial-gradient(700px_400px_at_100%_0%,rgba(180,180,180,0.04),transparent_70%)]" />
          <HeaderSection />
        </div>

        {/* Sections stacked with dividers — no vertical gaps between them */}
        <div className="divide-y divide-white/[0.06]">
          <Section><HeroSection /></Section>
          <Section tight><SocialProofSection /></Section>
          <Section><ServicesSection /></Section>
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
