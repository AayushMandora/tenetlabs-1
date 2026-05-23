import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase, panelHover } from "@/lib/ui-classes";

export function WhyUsSection() {
  return (
    <section className="space-y-8">
      <Reveal>
        <SectionHeading eyebrow="Why Choose Us" title={siteContent.whyChooseUs.heading} />
      </Reveal>

      <Stagger className="grid gap-3 md:grid-cols-2">
        {siteContent.whyChooseUs.items.map((item) => (
          <StaggerItem key={item.title}>
            <article className={cn(panelBase, panelHover, "group relative h-full overflow-hidden rounded-none p-6 sm:p-8")}>
              <div aria-hidden className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,transparent,var(--accent-primary),transparent)] opacity-30 transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="relative z-10 font-display text-2xl leading-tight text-[var(--text-100)]">
                {item.title}
              </h3>
              <p className="relative z-10 mt-3 text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
                {item.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
