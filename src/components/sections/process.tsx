"use client";

import { useState } from "react";
import { m } from "framer-motion";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { cn } from "@/lib/cn";

const stepChecklists: Record<string, string[]> = {
  "01": ["Identify core goals & scope", "Map technology stack dependencies", "Milestone roadmap alignment"],
  "02": ["High-fidelity Figma wireframes", "Database schema specifications", "Technical architecture plan"],
  "03": ["Weekly demo feedback loops", "Continuous edge build pipeline", "Automated integration testing"],
  "04": ["Production DNS & CDN provisioning", "SEO & performance audits", "Handover and 30-day monitor launch"],
};

const stepIndexMap: Record<string, number> = {
  "01": 1,
  "02": 2,
  "03": 3,
  "04": 4,
};

export function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const activeIdx = hoveredStep ? stepIndexMap[hoveredStep] : 0;

  return (
    <section id="process" className="space-y-8">
      <Reveal>
        <SectionHeading eyebrow="How It Works" title={siteContent.process.heading} className="max-w-4xl" />
      </Reveal>

      <div className="relative">
        {/* Desktop Interactive Horizontal Timeline Connector */}
        <div className="absolute top-[100px] left-[12.5%] right-[12.5%] h-[1px] bg-[var(--border-color)] hidden xl:block z-0">
          {/* Glowing Track Segment */}
          <m.div
            className="h-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]"
            initial={{ width: "0%" }}
            animate={{
              width:
                activeIdx === 2 ? "33.33%" :
                activeIdx === 3 ? "66.66%" :
                activeIdx === 4 ? "100%" : "0%"
            }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
          />

          {/* Dots */}
          {([1, 2, 3, 4] as const).map((dotNum) => {
            const isLit = activeIdx >= dotNum || (activeIdx === 0 && dotNum === 1);
            const position = `${(dotNum - 1) * 33.33}%`;

            return (
              <div
                key={dotNum}
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border bg-[var(--bg-950)] transition-all duration-300 z-10",
                  isLit
                    ? "border-[var(--accent-primary)] bg-[var(--text-100)] shadow-[0_0_10px_var(--accent-primary)] scale-110"
                    : "border-[var(--panel-border)]"
                )}
                style={{ left: position, transform: "translate(-50%, -50%)" }}
              />
            );
          })}
        </div>

        <Stagger className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4" delayChildren={0.07}>
          {siteContent.process.items.map((step) => {
            const isHovered = hoveredStep === step.step;

            return (
              <StaggerItem key={step.step} className="h-full">
                <div
                  className="h-full transition-transform duration-300 ease-out"
                  style={{
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)"
                  }}
                  onMouseEnter={() => setHoveredStep(step.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <MouseGlow
                    className={cn(
                      "h-full rounded-none border transition-colors duration-300 bg-[var(--panel-bg)]",
                      isHovered ? "border-[var(--panel-hover-border)]" : "border-[var(--panel-border)]"
                    )}
                    containerClassName="relative h-full flex flex-col p-6 sm:p-8 overflow-hidden"
                    glowColor="var(--glow-color)"
                  >
                    <m.div
                      className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-[9rem] font-bold leading-none text-[var(--text-100)] z-0"
                      animate={{
                        y: isHovered ? -12 : 0,
                        opacity: isHovered ? 0.045 : 0.015,
                        scale: isHovered ? 1.06 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.step}
                    </m.div>

                    <div className="relative z-10">
                      <p className="font-display text-2xl text-[var(--accent-primary)]">{step.step}</p>
                      <h3 className="mt-4 font-display text-xl font-semibold text-[var(--text-100)]">{step.title}</h3>
                      <p className="mt-1.5 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">{step.timeline}</p>
                      <p className="mt-4 text-[0.92rem] leading-relaxed text-[var(--text-soft)] font-medium md:min-h-[85px]">{step.description}</p>
                    </div>

                    {/* Sprint Checklist - always visible and stable */}
                    <div className="mt-6 border-t border-[var(--border-color)] pt-4 space-y-2 text-left z-10 md:min-h-[110px]">
                      <p className="text-[0.62rem] font-black uppercase tracking-widest text-[var(--text-muted)]">Sprint Checklist</p>
                      <ul className="space-y-2 text-[0.68rem] text-[var(--text-soft)]">
                        {stepChecklists[step.step].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg
                              className={cn(
                                "mt-0.5 h-3.5 w-3.5 shrink-0 transition-colors duration-250",
                                isHovered ? "text-[var(--accent-primary)]" : "text-[var(--text-muted)]/30"
                              )}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={cn("transition-colors duration-250 font-medium", isHovered ? "text-[var(--text-100)]" : "text-[var(--text-soft)]/70")}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative z-10 mt-8 rounded-none border border-[var(--border-color)] bg-[var(--bg-900)]/40 p-4 backdrop-blur-sm">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                        Deliverable
                      </p>
                      <p className="mt-1.5 text-sm font-semibold text-[var(--text-100)]">{step.deliverable}</p>
                    </div>
                  </MouseGlow>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
