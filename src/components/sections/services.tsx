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
    <div className="space-y-12 text-left">
      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
        {siteContent.services.subheading}
      </p>

      <div className="grid gap-[24px] lg:gap-[32px] lg:grid-cols-12">
        {siteContent.services.items.map((service, index) => (
          <div
            key={service.title}
            className={cn(
              "modern-card p-6 sm:p-8 flex flex-col justify-between h-full",
              index === 0 && "lg:col-span-7",
              index === 1 && "lg:col-span-5",
              index === 2 && "lg:col-span-5",
              index === 3 && "lg:col-span-7"
            )}
          >
            <div>
              <div className="flex items-start justify-between gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--line-soft)] bg-[var(--module-hover)] text-[var(--foreground)]">
                  <Icon type={service.icon} />
                </span>
                <span className="font-mono text-[12px] font-bold text-neutral-400">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="max-w-xl font-sans text-xl font-bold leading-tight text-[var(--foreground)]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] font-medium leading-[1.6] text-neutral-500 dark:text-neutral-400">
                  {service.description}
                </p>
              </div>

              <ul className="mt-6 grid gap-3 text-[13px] text-neutral-600 dark:text-neutral-300 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                    <span className="font-semibold leading-[1.6]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={service.ctaHref}
              className="mt-8 inline-flex w-fit items-center gap-2 border border-[var(--line-soft)] bg-[var(--module-hover)] px-4 py-2.5 text-[13px] font-bold text-[var(--foreground)] transition hover:bg-neutral-500 hover:text-white"
            >
              {service.ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
