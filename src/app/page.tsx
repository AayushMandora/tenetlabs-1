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
import { ServicesSection } from "@/components/sections/services";
import { SocialProofSection } from "@/components/sections/social-proof";
import { TechStackSection } from "@/components/sections/tech-stack";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyUsSection } from "@/components/sections/why-us";

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[var(--bg-950)]">
      <AsciiBackground />

      <div className="relative z-10 w-full">
        <HeaderSection />

        <main className="relative">
          <Section hero>
            <HeroSection />
          </Section>
          <Section tight>
            <SocialProofSection />
          </Section>
          <Section>
            <ServicesSection />
          </Section>
          <Section muted>
            <ProcessSection />
          </Section>
          <Section>
            <TechStackSection />
          </Section>
          <Section muted>
            <PortfolioSection />
          </Section>
          <Section>
            <WhyUsSection />
          </Section>
          <Section muted>
            <PricingSection />
          </Section>
          <Section>
            <TestimonialsSection />
          </Section>
          <Section muted>
            <FaqSection />
          </Section>
          <Section>
            <CtaSection />
          </Section>
          <Section tight>
            <FooterSection />
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({
  children,
  hero,
  tight,
  muted,
}: {
  children: React.ReactNode;
  hero?: boolean;
  tight?: boolean;
  muted?: boolean;
}) {
  return (
    <section
      className={[
        "relative overflow-hidden border-t border-white/[0.07] w-full",
        hero ? "pt-[120px] pb-[120px]" : tight ? "py-[48px]" : "py-[120px]",
        muted ? "bg-white/[0.018]" : "bg-transparent",
      ].join(" ")}
    >
      <div aria-hidden className="absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-[20px] md:px-[32px] lg:px-[40px]">{children}</div>
    </section>
  );
}
