import type React from "react";

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
import { cn } from "@/lib/cn";

export default function HomePage() {
  return (
    <div className="site-grid-bg relative w-full min-h-screen overflow-hidden">
      {/* Background signal birds animation */}
      <div aria-hidden="true" className="motion-sky">
        <span className="signal-bird absolute animate-[float_18s_infinite_-4s] left-[10%] top-[20%] opacity-15">~</span>
        <span className="signal-bird absolute animate-[float_24s_infinite_-11s] left-[45%] top-[44%] opacity-15">~</span>
        <span className="signal-bird absolute animate-[float_21s_infinite_-7s] left-[80%] top-[72%] opacity-15">~</span>
      </div>

      {/* Vertical schematic layout rails */}
      <div aria-hidden="true" className="ambient-linework">
        <span className="ambient-rail ambient-rail-left"></span>
        <span className="ambient-rail ambient-rail-right"></span>
      </div>

      <div className="relative z-20">
        <main className="relative flex min-h-screen flex-col items-center pt-14">
          <HeaderSection />

          <div className="portfolio-shell relative z-10 mx-auto w-full max-w-[64rem]">
            {/* Left border strip hatch rail */}
            <div className="portfolio-side-rail hidden lg:block" aria-hidden="true"></div>

            {/* Main content grid column */}
            <div className="portfolio-content min-w-0">
              <HeroSection />

              <Section id="stats">
                <SocialProofSection />
              </Section>

              <Section id="services" title="Services">
                <ServicesSection />
              </Section>

              <Section id="process" title="Process">
                <ProcessSection />
              </Section>

              <Section id="tech-stack" title="Tech Stack">
                <TechStackSection />
              </Section>

              <Section id="portfolio" title="Work">
                <PortfolioSection />
              </Section>

              <Section id="why-us" title="Why Us">
                <WhyUsSection />
              </Section>

              <Section id="pricing" title="Pricing">
                <PricingSection />
              </Section>

              <Section id="testimonials" title="Testimonials">
                <TestimonialsSection />
              </Section>

              <Section id="faq" title="FAQ">
                <FaqSection />
              </Section>

              <Section id="contact" title="Contact" className="mb-20">
                <CtaSection />
              </Section>

              <FooterSection />
            </div>

            {/* Right border strip hatch rail */}
            <div className="portfolio-side-rail hidden lg:block" aria-hidden="true"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Section({
  children,
  id,
  title,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  title?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("linework-section scroll-mt-16 w-full py-10", className)}
    >
      <div aria-hidden="true" className="linework-layer">
        <span className="linework-notch linework-notch-a"></span>
        <span className="linework-notch linework-notch-b"></span>
      </div>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
