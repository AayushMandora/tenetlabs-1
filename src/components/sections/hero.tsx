import { siteContent } from "@/content/site-content";

import { Floating } from "@/components/motion/floating";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { cn } from "@/lib/cn";
import { panelBase, panelHover, shimmerLine } from "@/lib/ui-classes";

const accentMap = {
  emerald: "text-[var(--accent-primary)]",
  amber: "text-[#10b981]",
  mint: "text-[var(--accent-support)]",
} as const;

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-transparent"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-6">
        <Stagger className="space-y-6 lg:pt-2" delayChildren={0.05} staggerChildren={0.09}>
          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-support)]">
              {siteContent.hero.eyebrow}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="max-w-xl font-display text-[2.35rem] leading-[1.02] text-[var(--text-100)] sm:text-5xl lg:text-[4.15rem]">
              {siteContent.hero.headline}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-xl text-[1.01rem] leading-relaxed text-[var(--text-muted)]">
              {siteContent.hero.subheadline}
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap items-center gap-3 pt-1">
            <Button href={siteContent.hero.primaryCta.href}>{siteContent.hero.primaryCta.label}</Button>
            <Button href={siteContent.hero.secondaryCta.href} variant="secondary">
              {siteContent.hero.secondaryCta.label}
            </Button>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap gap-2.5 pt-0.5">
            {siteContent.config.trustBadges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </StaggerItem>
        </Stagger>

        <Reveal className="grid grid-cols-2 gap-3">
          <Floating className="col-span-2" distance={8} duration={9.3} delay={0.06}>
            <article
              className={cn(
                panelBase,
                panelHover,
                "min-h-56 space-y-4 border-[color:rgba(16,185,129,0.3)] bg-[radial-gradient(360px_170px_at_100%_0%,rgba(16,185,129,0.15),transparent_66%),linear-gradient(160deg,rgba(15,15,20,0.9),rgba(5,5,10,0.9))] p-5"
              )}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--text-100)]">
                  {siteContent.hero.visual.boardTitle}
                </p>
                <Badge className="border-[color:rgba(16,185,129,0.36)] bg-[rgba(16,185,129,0.12)] text-[var(--accent-primary)]">
                  {siteContent.hero.visual.boardStatus}
                </Badge>
              </div>
              <div className="space-y-3">
                <span className={cn(shimmerLine, "block w-[92%]")} />
                <span className={cn(shimmerLine, "block w-[75%]")} />
                <span className={cn(shimmerLine, "block w-[87%]")} />
              </div>
              <div className="flex flex-wrap gap-2 pt-0.5">
                {siteContent.hero.visual.boardChips.map((chip) => (
                  <Badge key={chip}>{chip}</Badge>
                ))}
              </div>
            </article>
          </Floating>

          {siteContent.hero.visual.miniCards.map((card, index) => {
            const isLast = index === siteContent.hero.visual.miniCards.length - 1;

            return (
              <Floating
                key={card.label}
                className={cn(isLast && "col-span-2")}
                distance={6.8 + index}
                duration={8.2 + index * 0.7}
                delay={0.14 + index * 0.1}
              >
                <article
                  className={cn(
                    panelBase,
                    panelHover,
                    "h-full p-4",
                    isLast &&
                    "bg-[radial-gradient(360px_150px_at_100%_0%,rgba(5,150,105,0.15),transparent_70%),linear-gradient(160deg,rgba(15,15,20,0.9),rgba(5,5,10,0.9))]"
                  )}
                >
                  <p className="text-[0.69rem] uppercase tracking-[0.14em] text-[var(--text-dim)]">
                    {card.label}
                  </p>
                  <p className={cn("mt-2 font-display text-4xl", accentMap[card.accent])}>{card.value}</p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{card.note}</p>
                </article>
              </Floating>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
