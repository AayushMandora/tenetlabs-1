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
    <section id="pricing" className="space-y-10">
      <Reveal>
        <SectionHeading
          eyebrow="Pricing"
          title={siteContent.pricing.heading}
          description={siteContent.pricing.subheading}
        />
      </Reveal>

      <Stagger className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {siteContent.pricing.plans.map((plan) => {
          return (
            <StaggerItem key={plan.name}>
              <MouseGlow
                className={cn(
                  "relative flex h-full flex-col",
                  plan.featured && "shadow-[0_0_40px_var(--glow-1)]"
                )}
                containerClassName="p-5 sm:p-6 lg:p-8 flex flex-col h-full justify-between relative"
                glowColor="var(--glow-color)"
              >
                <CornerGuides label={`price_${plan.name.split(" ")[0].toLowerCase()}`} />
                {/* Top visual banner */}
                <div 
                  className="relative flex flex-col items-start gap-4 mb-8 transition-transform duration-500 [transform-style:preserve-3d]"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <div className="flex w-full items-start justify-between">
                    <div className="flex flex-col gap-3">
                      {plan.featured && (
                        <span className="w-fit rounded-none border border-[var(--panel-border)] bg-[var(--text-100)]/[0.08] px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-[var(--accent-primary)] uppercase">
                          Popular
                        </span>
                      )}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--text-100)]/[0.08] text-[var(--accent-primary)]">
                        <PlanIcon name={plan.name} />
                      </div>
                    </div>
                    {/* Abstract three lines logo */}
                    <svg className="h-6 w-6 text-[var(--text-100)]/[0.08]" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="8" width="4" height="12" />
                      <rect x="10" y="4" width="4" height="16" />
                      <rect x="18" y="10" width="4" height="10" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text-100)]">{plan.name}</h3>
                    <p className="mt-1.5 text-xs text-[var(--text-dim)] font-medium">{plan.perfectFor}</p>
                  </div>

                  <div className="mt-4 flex flex-col justify-end min-h-[64px]">
                    {plan.price.includes("$") ? (
                      <>
                        <span className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-[var(--text-dim)]">
                          Starting at
                        </span>
                        <span className="font-display text-4xl font-extrabold tracking-tight text-[var(--text-100)] mt-1">
                          {plan.price.replace(/^starting\s+at\s+/i, "")}
                        </span>
                      </>
                    ) : (
                      <span className="font-display text-4xl font-extrabold tracking-tight text-[var(--text-100)]">
                        {plan.price}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div 
                  className="flex flex-1 flex-col justify-between border-t border-[var(--border-color)] pt-8 transition-transform duration-500 [transform-style:preserve-3d]"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <ul className="grid grid-cols-1 gap-3.5">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <svg className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[0.85rem] text-[var(--text-soft)] font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <a
                      href={plan.ctaHref}
                      className={cn(
                        "flex w-full items-center justify-center rounded-none px-4 py-3 text-sm font-semibold transition-all duration-200",
                        plan.featured
                          ? "border border-[var(--panel-border)] bg-[var(--bg-900)] text-[var(--text-100)] hover:border-[var(--panel-hover-border)] hover:bg-[var(--surface-800)]"
                          : "border border-transparent bg-[var(--text-100)]/[0.05] text-[var(--text-100)] hover:bg-[var(--text-100)]/[0.10]"
                      )}
                    >
                      {plan.ctaLabel}
                    </a>
                  </div>
                </div>
              </MouseGlow>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal className="flex flex-wrap justify-center gap-3 pt-4">
        {siteContent.pricing.addons.map((addon) => {
          const split = addon.split(":");
          return (
            <div
              key={addon}
              className="flex items-center gap-2 rounded-xl border border-[var(--panel-border)] bg-[var(--panel-bg)] px-4 py-2.5 transition-colors hover:border-[var(--panel-hover-border)]"
            >
              <span className="text-[var(--accent-primary)] font-bold text-lg leading-none">+</span>
              <span className="text-[0.85rem] font-semibold text-[var(--text-100)]">{split[0]}</span>
              {split[1] && <span className="text-[0.85rem] text-[var(--text-muted)]">:{split[1]}</span>}
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
