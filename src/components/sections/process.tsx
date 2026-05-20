import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase, panelHover } from "@/lib/ui-classes";

export function ProcessSection() {
  return (
    <section id="process" className="space-y-8">
      <Reveal>
        <SectionHeading eyebrow="How It Works" title={siteContent.process.heading} className="max-w-4xl" />
      </Reveal>

      <Stagger className="grid gap-3 md:grid-cols-2 xl:grid-cols-4" delayChildren={0.07}>
        {siteContent.process.items.map((step) => (
          <StaggerItem key={step.step} className="h-full">
            <article className={cn(panelBase, panelHover, "relative h-full flex flex-col overflow-hidden rounded-none p-6 sm:p-8")}>
              <div className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-[9rem] font-bold leading-none text-white/[0.02]">
                {step.step}
              </div>
              <p className="relative z-10 font-display text-2xl text-[var(--accent-primary)]">{step.step}</p>
              <h3 className="relative z-10 mt-4 font-display text-xl text-[var(--text-100)]">{step.title}</h3>
              <p className="relative z-10 mt-1.5 text-sm font-medium text-[var(--text-muted)]">{step.timeline}</p>
              <p className="relative z-10 mt-4 text-[0.95rem] leading-relaxed text-[var(--text-soft)]">{step.description}</p>
              <div className="relative z-10 mt-auto rounded-none border border-white/5 bg-white/[0.02] p-4 backdrop-blur-md">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                  Deliverable
                </p>
                <p className="mt-1.5 text-sm font-medium text-[var(--text-100)]">{step.deliverable}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
