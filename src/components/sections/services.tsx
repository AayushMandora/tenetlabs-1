"use client";

import type { AccentTone, ServiceIcon } from "@/content/site-content";
import { siteContent } from "@/content/site-content";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { cn } from "@/lib/cn";

const accentMap: Record<string, string> = {
  bright: "text-[var(--accent-primary)] border-[var(--panel-border)] bg-[var(--text-100)]/[0.02] shadow-[inset_0_0_12px_var(--glow-1)]",
  soft: "text-[var(--accent-secondary)] border-[var(--panel-border)] bg-[var(--text-100)]/[0.01] shadow-[inset_0_0_8px_var(--glow-2)]",
  muted: "text-[var(--accent-support)] border-[var(--panel-border)] bg-[var(--text-100)]/[0.01]",
};

const accentDot: Record<string, string> = {
  bright: "bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]",
  soft: "bg-[var(--accent-secondary)] shadow-[0_0_6px_var(--accent-secondary)]",
  muted: "bg-[var(--accent-support)]",
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
    <section id="services" className="space-y-10">
      <SectionHeading
        eyebrow="Services"
        title={siteContent.services.heading}
        description={siteContent.services.subheading}
      />

      <Stagger className="grid gap-6 md:grid-cols-2" delayChildren={0.05}>
        {siteContent.services.items.map((service) => {
          const tone = service.accent ?? "bright";

          return (
            <StaggerItem key={service.title} className="h-full">
              <MouseGlow
                className="h-full rounded-none border border-[var(--panel-border)] bg-[var(--panel-bg)] transition-all duration-300 hover:border-[var(--panel-hover-border)] hover:bg-[var(--panel-hover-bg)] hover:-translate-y-1"
                containerClassName="h-full flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  <span
                    className={cn(
                      "mb-6 inline-flex h-11 w-11 items-center justify-center rounded-none border",
                      accentMap[tone]
                    )}
                  >
                    <Icon type={service.icon} />
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--text-100)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-[var(--text-muted)] font-medium">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3.5 text-sm text-[var(--text-soft)] mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-none", accentDot[tone])} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.ctaHref}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-[var(--accent-primary)] transition hover:brightness-125"
                >
                  {service.ctaLabel}
                  <svg
                    className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover/glow:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </MouseGlow>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
