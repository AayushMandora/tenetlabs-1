import { siteContent } from "@/content/site-content";

import { Floating } from "@/components/motion/floating";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase, panelHover, shimmerLine } from "@/lib/ui-classes";

export function CtaSection() {
  return (
    <section id="contact">
      <Reveal className="relative overflow-hidden rounded-none border border-white/5 bg-[#0a0a0b] p-6 sm:p-8 lg:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_220px_at_100%_0%,rgba(255,255,255,0.06),transparent_68%),radial-gradient(420px_200px_at_0%_100%,rgba(255,255,255,0.06),transparent_70%)]"
        />

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Ready to Build?"
              title={siteContent.cta.heading}
              description={siteContent.cta.subheading}
            />

            <div className="flex flex-wrap items-center gap-3">
              <Button href={siteContent.cta.primaryCta.href} target="_blank" rel="noreferrer">
                {siteContent.cta.primaryCta.label}
              </Button>
              <a
                href={`mailto:${siteContent.config.email}`}
                className="text-sm font-medium text-[var(--accent-primary)] transition hover:text-white"
              >
                {siteContent.cta.secondaryText}
              </a>
            </div>
          </div>

          <Floating distance={7} duration={8.8}>
            <div className="space-y-4 rounded-none border border-white/5 bg-[#09090a] p-6">
              <p className="font-display text-sm font-semibold tracking-wide text-white">Consultation Slot Preview</p>
              <div className="space-y-2">
                <span className={cn(shimmerLine, "block h-2 w-[93%]")} />
                <span className={cn(shimmerLine, "block h-2 w-[81%]")} />
                <span className={cn(shimmerLine, "block h-2 w-full")} />
                <span className={cn(shimmerLine, "block h-2 w-[67%]")} />
              </div>
            </div>
          </Floating>
        </div>
      </Reveal>
    </section>
  );
}
