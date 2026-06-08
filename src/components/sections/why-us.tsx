import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { cn } from "@/lib/cn";
import { CornerGuides } from "@/components/shared/corner-guides";

export function WhyUsSection() {
  return (
    <section className="space-y-8">
      <Reveal>
        <SectionHeading eyebrow="Why Choose Us" title={siteContent.whyChooseUs.heading} />
      </Reveal>

      <Stagger className="grid gap-[24px] lg:gap-[32px] md:grid-cols-2">
        {siteContent.whyChooseUs.items.map((item) => (
          <StaggerItem key={item.title}>
            <MouseGlow
              className="h-full"
              containerClassName="group relative h-full flex flex-col p-5 sm:p-6 text-left"
            >
              <CornerGuides label="draft_spec" />
              <h3 className="relative z-10 font-display text-xl font-bold leading-tight text-[var(--text-100)]">
                {item.title}
              </h3>
              <p className="relative z-10 mt-2.5 text-[15px] font-medium leading-[1.6] text-[var(--text-muted)]">
                {item.description}
              </p>
            </MouseGlow>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
