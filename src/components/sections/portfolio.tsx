import { ArrowUpRight, BarChart3, MessageSquareText, ShoppingCart, TrendingUp } from "lucide-react";

import { MouseGlow } from "@/components/motion/mouse-glow";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { CornerGuides } from "@/components/shared/corner-guides";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/cn";

const caseLabels = ["E-commerce MVP", "SaaS Admin", "AI Chatbot Integration"];

function CaseVisual({ index, results }: { index: number; results: string[] }) {
  if (index === 0) {
    return (
      <div className="relative min-h-[320px] overflow-hidden border-t border-white/[0.08] bg-black/20 p-6 lg:border-l lg:border-t-0">
        <div className="mx-auto max-w-[280px] rounded-[8px] border border-white/[0.12] bg-[rgba(255,255,255,0.045)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Recommendation
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.75)]" />
          </div>
          <div className="relative mt-4 flex aspect-square items-center justify-center overflow-hidden rounded-[8px] border border-white/[0.08] bg-white/[0.035]">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.2),transparent_68%)]" />
            <ShoppingCart className="relative h-16 w-16 text-white/55" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2.5 w-4/5 rounded-full bg-white/[0.12]" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/[0.07]" />
            <div className="flex items-center justify-between pt-3">
              <span className="text-sm font-black text-[var(--accent-primary)]">$189.00</span>
              <span className="rounded-[7px] bg-white/[0.08] px-2 py-1 text-[0.58rem] font-black text-[var(--text-soft)]">
                98% Match
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="mt-7 grid grid-cols-2 gap-3">
        {results.slice(0, 2).map((result) => (
          <div key={result} className="rounded-[8px] border border-white/[0.08] bg-white/[0.035] p-4">
            <span className="block text-[0.58rem] font-black uppercase tracking-[0.18em] text-[var(--text-dim)]">
              Result
            </span>
            <span className="mt-2 block text-xs font-black leading-snug text-[var(--text-100)]">{result}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {results.map((result) => (
        <div key={result} className="flex items-center justify-between gap-4 rounded-[8px] border border-white/[0.1] bg-black/24 p-4">
          <div>
            <span className="block text-[0.56rem] font-black uppercase tracking-[0.2em] text-[var(--text-dim)]">
              Success Metric
            </span>
            <span className="mt-1 block text-sm font-bold leading-snug text-[var(--text-soft)]">{result}</span>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
            <TrendingUp className="h-5 w-5" />
          </span>
        </div>
      ))}
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="space-y-12">
      <Reveal>
        <SectionHeading eyebrow="Case Studies" title={siteContent.caseStudies.heading} />
      </Reveal>

      <Stagger className="grid gap-[24px] lg:gap-[32px] lg:grid-cols-12" delayChildren={0.05}>
        {siteContent.caseStudies.items.map((project, index) => {
          const isWide = index === 0 || index === 2;

          return (
            <StaggerItem
              key={project.name}
              className={cn("h-full", index === 0 && "lg:col-span-8", index === 1 && "lg:col-span-4", index === 2 && "lg:col-span-12")}
            >
              <MouseGlow
                className="h-full"
                containerClassName={cn("relative h-full", isWide ? "lg:grid lg:grid-cols-[1fr_0.56fr]" : "p-5 sm:p-6")}
              >
                <CornerGuides label={`case_0${index + 1}`} />

                <div className={cn("relative z-10", isWide ? "p-5 sm:p-6 lg:p-8" : "")}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--text-100)]">
                      {index === 2 ? <MessageSquareText className="h-3.5 w-3.5" /> : <BarChart3 className="h-3.5 w-3.5" />}
                      {caseLabels[index]}
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-2xl font-display text-2xl font-bold leading-tight text-[var(--text-100)]">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[18px] font-semibold leading-[1.6] text-[var(--accent-secondary)]">
                    {project.tagline}
                  </p>

                  <div className={cn("mt-6 grid gap-4", index === 2 && "md:grid-cols-2")}>
                    <div className="rounded-[8px] border border-white/[0.08] bg-black/20 p-4">
                      <span className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                        Challenge
                      </span>
                      <p className="mt-2 text-[14px] font-medium leading-[1.6] text-[var(--text-muted)]">
                        {project.challenge}
                      </p>
                    </div>
                    <div className="rounded-[8px] border border-white/[0.08] bg-black/20 p-4">
                      <span className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                        Solution
                      </span>
                      <p className="mt-2 text-[14px] font-medium leading-[1.6] text-[var(--text-muted)]">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[8px] border border-white/[0.09] bg-white/[0.04] px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.ctaHref}
                    className="mt-8 inline-flex items-center gap-2 rounded-[8px] border border-white/[0.1] bg-white/[0.045] px-4 py-3 text-[14px] font-bold text-[var(--text-100)] transition hover:border-white/[0.22] hover:bg-white/[0.08]"
                  >
                    {project.ctaLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {isWide ? (
                  <CaseVisual index={index} results={project.results} />
                ) : (
                  <div className="relative z-10">
                    <CaseVisual index={index} results={project.results} />
                  </div>
                )}
              </MouseGlow>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
