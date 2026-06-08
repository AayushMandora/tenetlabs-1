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
    <p ref={ref} className="font-display text-4xl font-extrabold leading-none text-[var(--text-100)]">
      {displayValue}
      {suffix}
    </p>
  );
}

export function SocialProofSection() {
  return (
    <section aria-labelledby="social-proof-heading" className="space-y-10">
      <Reveal>
        <SectionHeading eyebrow="Social Proof" title={siteContent.socialProof.heading} className="max-w-4xl" />
      </Reveal>

      <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3 lg:grid-cols-6">
        {siteContent.config.clientLogos.map((logo) => (
          <div
            key={logo}
            className={cn(
              subtlePanel,
              "flex min-h-20 items-center justify-center rounded-none border-0 px-3 text-center text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--text-soft)] transition hover:bg-white/[0.07]"
            )}
          >
            {logo}
          </div>
        ))}
      </Reveal>

      <Reveal className="grid gap-[24px] lg:gap-[32px] sm:grid-cols-3">
        {siteContent.socialProof.stats.map((stat) => (
          <article key={stat.label} className={cn(panelBase, panelHover, "relative overflow-hidden p-5 sm:p-6")}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 text-[14px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{stat.label}</p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
