import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { cn } from "@/lib/cn";
import { CornerGuides } from "@/components/shared/corner-guides";

function PlanIcon({ name }: { name: string }) {
  if (name.toLowerCase().includes("mvp")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (name.toLowerCase().includes("full") || name.toLowerCase().includes("product")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z M4 10h16 M10 4v16" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
    </svg>
  );
}

export function PricingSection() {
  return (
    <div className="space-y-12 text-left">
      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
        {siteContent.pricing.subheading}
      </p>

      <div className="grid gap-[24px] lg:gap-[32px] md:grid-cols-2 lg:grid-cols-3">
        {siteContent.pricing.plans.map((plan) => {
          return (
            <div
              key={plan.name}
              className="modern-card p-5 sm:p-6 flex flex-col justify-between h-full"
            >
              {/* Top visual banner */}
              <div className="relative flex flex-col items-start gap-4 mb-6">
                <div className="flex w-full items-start justify-between">
                  <div className="flex flex-col gap-3">
                    {plan.featured && (
                      <span className="w-fit border border-[var(--line-soft)] bg-[var(--module-hover)] px-2.5 py-1 text-[11px] font-bold tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">
                        Popular
                      </span>
                    )}
                    <div className="flex h-10 w-10 items-center justify-center border border-[var(--line-soft)] bg-[var(--module-hover)] text-neutral-500">
                      <PlanIcon name={plan.name} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-lg font-bold tracking-tight text-[var(--foreground)]">{plan.name}</h3>
                  <p className="mt-1.5 text-[12px] text-neutral-400 font-medium">{plan.perfectFor}</p>
                </div>

                <div className="mt-4 flex flex-col justify-end min-h-[56px]">
                  {plan.price.includes("$") ? (
                    <>
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                        Starting at
                      </span>
                      <span className="font-sans text-2xl font-extrabold tracking-tight text-[var(--foreground)] mt-1">
                        {plan.price.replace(/^starting\s+at\s+/i, "")}
                      </span>
                    </>
                  ) : (
                    <span className="font-sans text-2xl font-extrabold tracking-tight text-[var(--foreground)]">
                      {plan.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-1 flex-col justify-between border-t border-[var(--line-soft)] pt-6">
                <ul className="grid grid-cols-1 gap-3.5">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
                      <svg className="h-4 w-4 shrink-0 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[13px] font-medium leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={plan.ctaHref}
                    className="flex w-full items-center justify-center border border-[var(--line-soft)] bg-[var(--module-hover)] px-4 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--foreground)] transition hover:bg-neutral-500 hover:text-white"
                  >
                    {plan.ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-4">
        {siteContent.pricing.addons.map((addon) => {
          const split = addon.split(":");
          return (
            <div
              key={addon}
              className="flex items-center gap-2 border border-[var(--line-soft)] bg-[var(--module-bg)] px-4 py-2 hover:bg-[var(--module-hover)] transition-colors"
            >
              <span className="text-neutral-400 font-bold text-base leading-none">+</span>
              <span className="text-[13px] font-bold text-[var(--foreground)]">{split[0]}</span>
              {split[1] && <span className="text-[13px] text-neutral-400">{split[1]}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
