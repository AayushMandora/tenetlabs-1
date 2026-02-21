"use client";

import { useEffect, useRef, useState } from "react";

import { useInView } from "framer-motion";

import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase, panelHover, subtlePanel } from "@/lib/ui-classes";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let raf = 0;
    const duration = 1300;
    const start = performance.now();

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <p ref={ref} className="font-display text-[2.15rem] text-[var(--text-100)] sm:text-[2.55rem]">
      {displayValue}
      {suffix}
    </p>
  );
}

export function SocialProofSection() {
  return (
    <section aria-labelledby="social-proof-heading" className="space-y-6">
      <Reveal>
        <SectionHeading eyebrow="Social Proof" title={siteContent.socialProof.heading} className="max-w-4xl" />
      </Reveal>

      <Reveal className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        {siteContent.config.clientLogos.map((logo) => (
          <div
            key={logo}
            className={cn(
              subtlePanel,
              "flex min-h-16 items-center justify-center px-3 text-center text-xs font-semibold tracking-[0.12em] text-[var(--text-soft)] sm:text-sm"
            )}
          >
            {logo}
          </div>
        ))}
      </Reveal>

      <Reveal className="grid gap-3 sm:grid-cols-3">
        {siteContent.socialProof.stats.map((stat) => (
          <article key={stat.label} className={cn(panelBase, panelHover, "rounded-none p-5 sm:p-6")}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label}</p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
