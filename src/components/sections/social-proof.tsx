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
    <div className="space-y-8">
      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-left text-base sm:text-lg">
        {siteContent.socialProof.heading}
      </p>

      <div className="grid grid-cols-2 gap-px overflow-hidden border border-[var(--line-soft)] bg-[var(--line-soft)] sm:grid-cols-3 lg:grid-cols-6">
        {siteContent.config.clientLogos.map((logo) => (
          <div
            key={logo}
            className="flex min-h-20 items-center justify-center bg-[var(--module-bg)] px-3 text-center text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)] opacity-70 transition hover:bg-[var(--module-hover)] hover:opacity-100"
          >
            {logo}
          </div>
        ))}
      </div>

      <div className="grid gap-[24px] sm:grid-cols-3">
        {siteContent.socialProof.stats.map((stat) => (
          <article key={stat.label} className="modern-card p-5 sm:p-6 text-left">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 text-[14px] font-bold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">{stat.label}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
