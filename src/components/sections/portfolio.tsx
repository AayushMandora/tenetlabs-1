import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase, panelHover } from "@/lib/ui-classes";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="space-y-8">
      <Reveal>
        <SectionHeading eyebrow="Case Studies" title={siteContent.caseStudies.heading} />
      </Reveal>

      <Stagger className="grid gap-3 lg:grid-cols-3">
        {siteContent.caseStudies.items.map((project) => (
          <StaggerItem key={project.name} className="h-full">
            <article className={cn(panelBase, panelHover, "group relative h-full flex flex-col overflow-hidden rounded-none p-0")}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_60%)]" />

              {/* Decorative Abstract Skeleton Header */}
              <div className="relative h-40 w-full border-b border-white/5 bg-[#0f0f14] px-6 pt-6 overflow-hidden">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-none bg-[var(--accent-primary)] opacity-10 blur-[40px] transition-opacity duration-500 group-hover:opacity-20" />
                <div className="flex gap-4 opacity-40 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="h-28 w-40 rounded-none border border-white/10 bg-white/[0.02]" />
                  <div className="space-y-3 pt-4">
                    <div className="h-2.5 w-16 rounded-none bg-[var(--accent-primary)]/20" />
                    <div className="h-2.5 w-24 rounded-none bg-[#10b981]/20" />
                    <div className="h-2.5 w-12 rounded-none bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-5 inline-flex w-fit items-center rounded-none border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  Case Study
                </div>
                <h3 className="font-display text-[1.65rem] leading-tight text-[var(--text-100)]">{project.name}</h3>
                <p className="mt-3 text-[0.95rem] font-medium text-[#10b981]">{project.tagline}</p>

                <div className="mt-6 flex flex-1 flex-col justify-between">
                  <div className="space-y-4 rounded-none border border-white/5 bg-white/[0.02] p-4 backdrop-blur-md">
                    <p className="text-sm text-[var(--text-muted)]">
                      <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-soft)] mb-1">Challenge</span>
                      {project.challenge}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-soft)] mb-1">Solution</span>
                      {project.solution}
                    </p>
                  </div>

                  <div className="mt-6">
                    <ul className="mb-8 space-y-3 text-sm text-[var(--text-soft)]">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-none bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-none border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-[var(--text-muted)] group-hover:bg-white/10 transition">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.ctaHref}
                      className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--accent-primary)] transition hover:brightness-125 hover:translate-x-1"
                    >
                      {project.ctaLabel}
                      <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
