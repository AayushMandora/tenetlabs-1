"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { MouseGlow } from "@/components/motion/mouse-glow";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { CornerGuides } from "@/components/shared/corner-guides";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/cn";

const stepChecklists: Record<string, string[]> = {
  "01": ["Identify core goals & scope", "Map technology stack dependencies", "Milestone roadmap alignment"],
  "02": ["High-fidelity Figma wireframes", "Database schema specifications", "Technical architecture plan"],
  "03": ["Weekly demo feedback loops", "Continuous edge build pipeline", "Automated integration testing"],
  "04": ["Production DNS & CDN provisioning", "SEO & performance audits", "Handover and 30-day monitor launch"],
};

export function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const activeIndex = siteContent.process.items.findIndex((item) => item.step === hoveredStep);
  const progress = hoveredStep ? ((activeIndex + 1) / siteContent.process.items.length) * 100 : 25;

  return (
    <section id="process" className="space-y-12">
      <Reveal>
        <SectionHeading eyebrow="How It Works" title={siteContent.process.heading} className="max-w-5xl" />
      </Reveal>

      <div className="relative">
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-white/[0.08] lg:block">
          <m.div
            className="h-full bg-[var(--accent-primary)] shadow-[0_0_28px_rgba(124,58,237,0.58)]"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          />
        </div>

        <Stagger className="grid gap-[24px] lg:gap-[32px] lg:grid-cols-4" delayChildren={0.05}>
          {siteContent.process.items.map((step, index) => {
            const isActive = hoveredStep === step.step || (!hoveredStep && index === 0);

            return (
              <StaggerItem key={step.step} className="h-full">
                <MouseGlow
                  className="h-full"
                  containerClassName="relative flex h-full flex-col p-5 sm:p-6"
                  onMouseEnter={() => setHoveredStep(step.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <CornerGuides label={step.step} />

                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-[8px] border font-display text-lg font-bold transition",
                        isActive
                          ? "border-[var(--accent-primary)]/55 bg-[var(--accent-primary)]/14 text-[var(--text-100)]"
                          : "border-white/[0.1] bg-white/[0.035] text-[var(--text-muted)]"
                      )}
                    >
                      {step.step}
                    </span>
                    <span className="rounded-[8px] border border-white/[0.1] bg-white/[0.035] px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="relative z-10 mt-6">
                    <h3 className="font-display text-xl font-bold leading-tight text-[var(--text-100)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.6] text-[var(--text-muted)]">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 space-y-3 border-t border-white/[0.08] pt-4">
                    <p className="font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--text-dim)]">
                      Sprint Checklist
                    </p>
                    <ul className="space-y-2.5">
                      {stepChecklists[step.step].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[12px] font-semibold leading-[1.6] text-[var(--text-soft)]/78">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-primary)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 mt-auto pt-6">
                    <div className="rounded-[8px] border border-white/[0.09] bg-black/20 p-3.5">
                      <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--accent-primary)]">
                        Deliverable
                      </p>
                      <p className="mt-1.5 text-[13px] font-bold text-[var(--text-100)]">{step.deliverable}</p>
                    </div>
                  </div>
                </MouseGlow>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
