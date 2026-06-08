"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Floating } from "@/components/motion/floating";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/shared/button";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/cn";

function HeroVisual() {
  const visual = siteContent.hero.visual;

  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <m.div
        className="relative overflow-hidden rounded-[8px] border border-white/[0.14] bg-[rgba(13,13,13,0.76)] shadow-sm backdrop-blur-sm"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.18, 1, 0.32, 1], delay: 0.1 }}
      >
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_34%,rgba(124,58,237,0.09))]" />
        
        <div className="relative border-b border-white/[0.1] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[12px] font-bold uppercase tracking-[0.24em] text-[var(--text-muted)]">
                {visual.boardTitle}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-[var(--text-100)] sm:text-2xl">
                {siteContent.config.agencyName}
              </h3>
            </div>
            <span className="rounded-[8px] border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)]/12 px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--text-100)]">
              {visual.boardStatus}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {visual.boardChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/[0.1] bg-white/[0.045] px-2.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-soft)]"
              >
                <CheckCircle2 className="h-3 w-3 text-[var(--accent-primary)]" />
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="relative grid gap-2.5 p-3.5 sm:grid-cols-3 sm:p-4">
          {visual.miniCards.map((card, index) => (
            <article
              key={card.label}
              className={cn(
                "rounded-[8px] border border-white/[0.1] bg-black/26 p-3 backdrop-blur-sm",
                index === 0 && "sm:translate-y-2",
                index === 2 && "sm:-translate-y-1.5"
              )}
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--text-dim)]">
                {card.label}
              </p>
              <p className="mt-2 font-display text-xl font-bold text-[var(--text-100)]">{card.value}</p>
              <p className="mt-2 text-[12px] font-medium leading-relaxed text-[var(--text-muted)]">{card.note}</p>
            </article>
          ))}
        </div>

        <div className="relative border-t border-white/[0.1] p-3 sm:p-4">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <m.div
              className="h-full rounded-full bg-[linear-gradient(90deg,#ffffff,var(--accent-primary),#ffffff)]"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.8, ease: [0.18, 1, 0.32, 1], delay: 0.3 }}
            />
          </div>
        </div>
      </m.div>
    </div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section id="top" ref={sectionRef} className="relative">
      <div className="grid gap-[32px] lg:gap-[48px] lg:grid-cols-[55%_45%] lg:items-center">
        <m.div
          className="relative z-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.18, 1, 0.32, 1] }}
        >
          <Stagger className="space-y-[32px]" delayChildren={0.03} staggerChildren={0.06}>
            <StaggerItem>
              <p className="max-w-3xl font-mono text-[13px] font-bold uppercase tracking-[0.28em] text-[var(--accent-support)]">
                {siteContent.hero.eyebrow}
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="max-w-[780px] font-display text-[40px] md:text-[56px] lg:text-[80px] font-extrabold leading-[0.95] text-[var(--text-100)]">
                {siteContent.hero.headline}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-2xl text-[18px] font-medium leading-[1.6] text-[var(--text-muted)]">
                {siteContent.hero.subheadline}
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap gap-[24px]">
              <Button href={siteContent.hero.primaryCta.href}>{siteContent.hero.primaryCta.label}</Button>
              <Button href={siteContent.hero.secondaryCta.href} variant="secondary">
                {siteContent.hero.secondaryCta.label}
              </Button>
            </StaggerItem>
          </Stagger>
        </m.div>

        <div className="relative z-10">
          <Reveal distance={15}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
