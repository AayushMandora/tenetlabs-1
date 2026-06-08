"use client";

import { ArrowUpRight, BotMessageSquare, Check, MonitorSmartphone, Rocket, Workflow } from "lucide-react";

import type { ServiceIcon } from "@/content/site-content";
import { siteContent } from "@/content/site-content";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { CornerGuides } from "@/components/shared/corner-guides";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";

function Icon({ type }: { type: ServiceIcon }) {
  const iconClass = "h-5 w-5";

  if (type === "web") return <MonitorSmartphone className={iconClass} />;
  if (type === "chat") return <BotMessageSquare className={iconClass} />;
  if (type === "automation") return <Workflow className={iconClass} />;
  return <Rocket className={iconClass} />;
}

export function ServicesSection() {
  return (
    <section id="services" className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <SectionHeading
          eyebrow="Services"
          title={siteContent.services.heading}
          description={siteContent.services.subheading}
        />
        <div aria-hidden className="hidden h-px bg-[linear-gradient(90deg,var(--accent-primary),transparent)] lg:block" />
      </div>

      <Stagger className="grid gap-[24px] lg:gap-[32px] lg:grid-cols-12" delayChildren={0.04}>
        {siteContent.services.items.map((service, index) => (
          <StaggerItem
            key={service.title}
            className={cn(
              "h-full",
              index === 0 && "lg:col-span-7",
              index === 1 && "lg:col-span-5",
              index === 2 && "lg:col-span-5",
              index === 3 && "lg:col-span-7"
            )}
          >
            <MouseGlow
              className="h-full"
              containerClassName="relative flex h-full flex-col p-6 sm:p-8"
            >
              <CornerGuides label={`srv_${service.icon}`} />
              <div className="relative z-10 flex items-start justify-between gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-white/[0.12] bg-white/[0.055] text-[var(--text-100)]">
                  <Icon type={service.icon} />
                </span>
                <span className="font-mono text-[12px] font-bold text-[var(--text-dim)]">
                  0{index + 1}
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="max-w-xl font-display text-2xl font-bold leading-tight text-[var(--text-100)]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[18px] font-medium leading-[1.6] text-[var(--text-muted)]">
                  {service.description}
                </p>
              </div>

              <ul className="relative z-10 mt-6 grid gap-3 text-[14px] text-[var(--text-soft)] sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                    <span className="font-semibold leading-[1.6]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={service.ctaHref}
                className="relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-[8px] border border-white/[0.1] bg-white/[0.045] px-4 py-3 text-[14px] font-bold text-[var(--text-100)] transition hover:border-white/[0.22] hover:bg-white/[0.08]"
              >
                {service.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </MouseGlow>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
