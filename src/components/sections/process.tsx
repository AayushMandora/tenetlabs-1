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
  return (
    <div className="space-y-12 text-left">
      <div className="grid gap-[24px] lg:gap-[32px] lg:grid-cols-4">
        {siteContent.process.items.map((step, index) => {
          return (
            <div
              key={step.step}
              className="modern-card p-5 sm:p-6 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border border-[var(--line-soft)] bg-[var(--module-hover)] font-sans text-base font-bold text-[var(--foreground)]">
                    {step.step}
                  </span>
                  <span className="border border-[var(--line-soft)] bg-[var(--module-hover)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                    {step.timeline}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="font-sans text-lg font-bold leading-tight text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-medium leading-[1.6] text-neutral-500 dark:text-neutral-400">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 space-y-3 border-t border-[var(--line-soft)] pt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                    Checklist
                  </p>
                  <ul className="space-y-2">
                    {stepChecklists[step.step].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[12px] font-semibold leading-[1.6] text-neutral-600 dark:text-neutral-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <div className="border border-[var(--line-soft)] bg-[var(--module-hover)] p-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                    Deliverable
                  </p>
                  <p className="mt-1.5 text-[13px] font-bold text-[var(--foreground)]">{step.deliverable}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
