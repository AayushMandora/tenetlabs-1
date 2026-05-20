import type { AccentTone, ServiceIcon } from "@/content/site-content";
import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase, panelHover } from "@/lib/ui-classes";

const accentMap: Record<string, string> = {
  blue: "text-[var(--accent-primary)] border-white/20 shadow-[inset_0_0_12px_rgba(255,255,255,0.08)]",
  muted: "text-[var(--accent-primary)] border-white/20 shadow-[inset_0_0_12px_rgba(255,255,255,0.08)]",
  soft: "text-[var(--accent-primary)] border-white/20 shadow-[inset_0_0_12px_rgba(255,255,255,0.08)]",
  bright: "text-[var(--accent-primary)] border-white/20 shadow-[inset_0_0_12px_rgba(255,255,255,0.08)]",
};

const accentDot: Record<string, string> = {
  blue: "bg-[var(--accent-primary)] shadow-[0_0_8px_rgba(255,255,255,0.35)]",
  muted: "bg-[var(--accent-primary)] shadow-[0_0_8px_rgba(255,255,255,0.35)]",
  soft: "bg-[var(--accent-primary)] shadow-[0_0_8px_rgba(255,255,255,0.35)]",
  bright: "bg-[var(--accent-primary)] shadow-[0_0_8px_rgba(255,255,255,0.35)]",
};

function Icon({ type }: { type: ServiceIcon }) {
  if (type === "web") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 9.5h8M8 13.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "chat") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v5A2.5 2.5 0 0 1 16.5 15H10l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 12.5v-5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "automation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4.5 12h6m-6 0 2.5-2.5M4.5 12l2.5 2.5M19.5 12h-6m6 0-2.5-2.5m2.5 2.5-2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M6 14.5c0-4.4 2.3-7.2 6-9 3.7 1.8 6 4.6 6 9 0 2.7-1.7 4.7-4.3 5.2L12 22l-1.7-2.3C7.7 19.2 6 17.2 6 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title={siteContent.services.heading}
          description={siteContent.services.subheading}
        />
      </Reveal>

      <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" delayChildren={0.05}>
        {siteContent.services.items.map((service, index) => {
          const tone = service.accent ?? "bright";
          const isWide = index === 0 || index === 3;

          return (
            <StaggerItem key={service.title} className={cn(isWide && "md:col-span-2 lg:col-span-2")}>
              <article className={cn(panelBase, panelHover, "group relative h-full overflow-hidden rounded-none p-0")}>
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-none opacity-[0.12] blur-[50px] transition-opacity duration-700 group-hover:opacity-[0.25]",
                    accentDot[tone]
                  )}
                />

                <div className={cn("flex h-full flex-col", isWide && "md:flex-row")}>
                  <div className={cn("flex flex-col p-6 sm:p-8", isWide && "md:w-[55%]")}>
                    <span
                      className={cn(
                        "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-none border bg-white/[0.02] backdrop-blur-md",
                        accentMap[tone]
                      )}
                    >
                      <Icon type={service.icon} />
                    </span>
                    <h3 className="font-display text-2xl leading-tight text-[var(--text-100)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
                      {service.description}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--text-soft)]">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-none", accentDot[tone])} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.ctaHref}
                      className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--accent-primary)] transition hover:brightness-125"
                    >
                      {service.ctaLabel}
                      <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Skeletons for Wide Cards */}
                  {isWide && (
                    <div className="relative hidden w-[45%] overflow-hidden border-l border-white/5 bg-white/[0.01] md:block">
                      {index === 0 && (
                        // Web Development Dashboard Skeleton
                        <div className="absolute inset-0 p-8">
                          <div className="h-full w-full rounded-none border border-white/10 bg-[#0f0f14] shadow-2xl overflow-hidden animate-[float_6s_ease-in-out_infinite]">
                            {/* Header */}
                            <div className="flex h-10 items-center gap-2 border-b border-white/5 px-4 bg-white/[0.02]">
                              <div className="flex gap-1.5">
                                <div className="h-2.5 w-2.5 rounded-none bg-red-500/80" />
                                <div className="h-2.5 w-2.5 rounded-none bg-yellow-500/80" />
                                <div className="h-2.5 w-2.5 rounded-none bg-neutral-300/80" />
                              </div>
                            </div>
                            {/* Content Grid */}
                            <div className="p-5 grid grid-cols-3 gap-4">
                              <div className="col-span-2 h-24 rounded-none bg-white/5 animate-pulse" />
                              <div className="col-span-1 h-24 rounded-none border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 shadow-[0_0_15px_rgba(255,255,255,0.12)]" />
                              <div className="col-span-3 space-y-3 pt-4">
                                <div className="h-4 w-3/4 rounded-none bg-white/10" />
                                <div className="h-4 w-1/2 rounded-none bg-white/5" />
                                <div className="h-4 w-2/3 rounded-none bg-white/5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        // MVP Launch Sprint Skeleton
                        <div className="absolute inset-x-8 top-12 bottom-0">
                          <div className="h-full w-full rounded-none border-x border-t border-white/10 bg-[#0f0f14] p-5 shadow-2xl">
                            {/* Sprint Board Columns */}
                            <div className="flex h-full gap-4">
                              <div className="w-1/3 space-y-3">
                                <div className="h-6 w-full rounded bg-white/5" />
                                <div className="h-20 w-full rounded-none border border-white/10 bg-white/[0.02] p-3 animate-[float_4s_ease-in-out_infinite]">
                                  <div className="h-2 w-1/2 rounded-none bg-white/20 mb-2" />
                                  <div className="h-2 w-3/4 rounded-none bg-white/10" />
                                </div>
                                <div className="h-20 w-full rounded-none border border-white/10 bg-white/[0.02] p-3 animate-[float_5s_ease-in-out_infinite_1s]" />
                              </div>
                              <div className="w-1/3 space-y-3">
                                <div className="h-6 w-full rounded bg-white/5" />
                                <div className="h-24 w-full rounded-none border border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/10 p-3 shadow-[0_0_20px_rgba(255,255,255,0.16)] animate-pulse">
                                  <div className="h-2 w-1/3 rounded-none bg-[var(--accent-primary)] mb-2" />
                                </div>
                              </div>
                              <div className="w-1/3 space-y-3">
                                <div className="h-6 w-full rounded bg-white/5" />
                                <div className="h-16 w-full rounded-none border border-white/10 bg-white/[0.02]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
