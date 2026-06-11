import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { cn } from "@/lib/cn";
import { CornerGuides } from "@/components/shared/corner-guides";

export function WhyUsSection() {
  return (
    <div className="space-y-8 text-left">
      <div className="grid gap-[24px] lg:gap-[32px] md:grid-cols-2">
        {siteContent.whyChooseUs.items.map((item) => (
          <div
            key={item.title}
            className="modern-card p-5 sm:p-6 flex flex-col justify-start h-full"
          >
            <h3 className="font-sans text-lg font-bold leading-tight text-[var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-2.5 text-[14px] font-medium leading-[1.6] text-neutral-500 dark:text-neutral-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
