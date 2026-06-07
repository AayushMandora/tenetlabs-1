import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { cn } from "@/lib/cn";
import { CornerGuides } from "@/components/shared/corner-guides";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="space-y-8">
      <Reveal>
        <SectionHeading eyebrow="Case Studies" title={siteContent.caseStudies.heading} />
      </Reveal>

      <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {siteContent.caseStudies.items.map((project, index) => {
          const isCard1 = index === 0;
          const isCard2 = index === 1;
          const isCard3 = index === 2;

          return (
            <StaggerItem
              key={project.name}
              className={cn(
                isCard1 && "md:col-span-2 lg:col-span-2",
                isCard2 && "md:col-span-1 lg:col-span-1",
                isCard3 && "md:col-span-2 lg:col-span-3"
              )}
            >
              <MouseGlow className="h-full" containerClassName="h-full flex flex-col justify-between relative">
                <CornerGuides label={`case_0${index + 1}`} />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--glow-3),transparent_60%)]" />

                {/* ── CARD 1: Horizontal E-commerce Showcase (Span 2) ── */}
                {isCard1 && (
                  <div className="flex h-full flex-col justify-between lg:flex-row [transform-style:preserve-3d]">
                    {/* Left Column (Details) */}
                    <div 
                      className="flex flex-col p-6 sm:p-8 lg:w-[58%] transition-transform duration-500 [transform-style:preserve-3d]"
                      style={{ transform: "translateZ(35px)" }}
                    >
                      <div className="mb-5 inline-flex w-fit items-center rounded-none border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                        E-commerce MVP
                      </div>
                      <h3 className="font-display text-xl sm:text-[1.65rem] leading-tight text-[var(--text-100)]">{project.name}</h3>
                      <p className="mt-3 text-[0.95rem] font-medium text-[var(--accent-secondary)]">{project.tagline}</p>

                      <div className="mt-6 space-y-4 rounded-xl border border-[var(--border-color)] bg-[var(--text-100)]/[0.02] p-4 backdrop-blur-md">
                        <p className="text-sm text-[var(--text-muted)]">
                          <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-soft)] mb-1">Challenge</span>
                          {project.challenge}
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">
                          <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-soft)] mb-1">Solution</span>
                          {project.solution}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="rounded-none border border-[var(--panel-border)] bg-[var(--text-100)]/[0.05] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.ctaHref}
                        className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--accent-primary)] transition hover:brightness-125"
                      >
                        {project.ctaLabel}
                        <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    {/* Right Column (E-commerce Preview Mockup) */}
                    <div 
                      className="relative border-t border-[var(--border-color)] bg-[var(--text-100)]/[0.01] p-6 flex flex-col justify-center items-center lg:w-[42%] lg:border-t-0 lg:border-l transition-transform duration-500 [transform-style:preserve-3d]"
                      style={{ transform: "translateZ(55px)" }}
                    >
                      <div className="w-full max-w-[210px] space-y-3 bg-[var(--bg-900)] border border-[var(--panel-border)] p-4 shadow-xl rounded-xl">
                        <div className="flex justify-between items-center pb-2 border-b border-[var(--border-color)]">
                          <span className="text-[0.55rem] font-bold text-[var(--text-muted)] uppercase">Recommendation</span>
                          <span className="h-1.5 w-1.5 rounded-none bg-green-500 animate-pulse" />
                        </div>

                        <div className="h-28 bg-[var(--text-100)]/[0.02] border border-[var(--border-color)] flex items-center justify-center relative overflow-hidden rounded-lg">
                          <div className="absolute inset-0 bg-[radial-gradient(120px_circle_at_center,var(--glow-1),transparent)]" />
                          <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-[var(--text-dim)]/50 animate-pulse" stroke="currentColor" strokeWidth="1">
                            <path d="M9.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM3 3h2l3.6 7.59M8.6 13h9.8a2 2 0 0 0 1.9-1.35l3.2-7.2a1 1 0 0 0-.9-1.45H5.4" />
                          </svg>
                        </div>

                        <div className="space-y-1.5">
                          <div className="h-3 w-3/4 bg-[var(--text-100)]/10 rounded-sm" />
                          <div className="h-2.5 w-1/2 bg-[var(--text-100)]/[0.05] rounded-sm" />
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-[0.6rem] font-bold text-[var(--accent-primary)]">$189.00</span>
                            <span className="text-[0.5rem] bg-[var(--text-100)]/10 px-1.5 py-0.5 rounded-none font-bold text-[var(--text-soft)]">98% Match</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── CARD 2: Vertical SaaS Admin Showcase (Span 1) ── */}
                {isCard2 && (
                  <div 
                    className="flex h-full flex-col justify-between p-6 sm:p-8 transition-transform duration-500 [transform-style:preserve-3d]"
                    style={{ transform: "translateZ(35px)" }}
                  >
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="mb-5 inline-flex w-fit items-center rounded-none border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                          SaaS Admin
                        </div>
                        <h3 className="font-display text-xl sm:text-[1.65rem] leading-tight text-[var(--text-100)]">{project.name}</h3>
                        <p className="mt-3 text-[0.95rem] font-medium text-[var(--accent-secondary)]">{project.tagline}</p>
                      </div>

                      <div className="mt-6 space-y-4 rounded-xl border border-[var(--border-color)] bg-[var(--text-100)]/[0.02] p-4 backdrop-blur-md">
                        <p className="text-sm text-[var(--text-muted)]">
                          <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-soft)] mb-1">Challenge</span>
                          {project.challenge}
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">
                          <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-soft)] mb-1">Solution</span>
                          {project.solution}
                        </p>
                      </div>

                      {/* Stats grid for Card 2 */}
                      <div className="mt-6 grid grid-cols-2 gap-2.5">
                        {project.results.slice(0, 2).map((res) => (
                          <div key={res} className="border border-[var(--border-color)] bg-[var(--text-100)]/[0.01] p-3 text-left rounded-xl">
                            <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-[var(--text-dim)] mb-1">Result</span>
                            <span className="text-xs font-bold text-[var(--text-100)] leading-tight">{res}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="rounded-none border border-[var(--panel-border)] bg-[var(--text-100)]/[0.05] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.ctaHref}
                        className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--accent-primary)] transition hover:brightness-125"
                      >
                        {project.ctaLabel}
                        <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}

                {/* ── CARD 3: Wide AI Support Showcase (Span 3) ── */}
                {isCard3 && (
                  <div className="flex h-full flex-col justify-between lg:flex-row [transform-style:preserve-3d]">
                    {/* Left Column (Details) */}
                    <div 
                      className="flex flex-col p-6 sm:p-8 lg:w-[65%] transition-transform duration-500 [transform-style:preserve-3d]"
                      style={{ transform: "translateZ(35px)" }}
                    >
                      <div className="mb-5 inline-flex w-fit items-center rounded-none border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                        AI Chatbot Integration
                      </div>
                      <h3 className="font-display text-xl sm:text-[1.65rem] leading-tight text-[var(--text-100)]">{project.name}</h3>
                      <p className="mt-3 text-[0.95rem] font-medium text-[var(--accent-secondary)]">{project.tagline}</p>

                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--text-100)]/[0.02] p-4 backdrop-blur-md">
                          <p className="text-sm text-[var(--text-muted)]">
                            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-soft)] mb-1">Challenge</span>
                            {project.challenge}
                          </p>
                        </div>
                        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--text-100)]/[0.02] p-4 backdrop-blur-md">
                          <p className="text-sm text-[var(--text-muted)]">
                            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-soft)] mb-1">Solution</span>
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="rounded-none border border-[var(--panel-border)] bg-[var(--text-100)]/[0.05] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.ctaHref}
                        className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--accent-primary)] transition hover:brightness-125"
                      >
                        {project.ctaLabel}
                        <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    {/* Right Column (Metric Panels) */}
                    <div 
                      className="relative border-t border-[var(--border-color)] bg-[var(--text-100)]/[0.01] p-6 flex flex-col justify-center items-center lg:w-[35%] lg:border-t-0 lg:border-l transition-transform duration-500 [transform-style:preserve-3d]"
                      style={{ transform: "translateZ(55px)" }}
                    >
                      <div className="w-full max-w-[240px] space-y-4">
                        {project.results.map((res, i) => (
                          <div key={res} className="border border-[var(--panel-border)] bg-[var(--panel-bg)] p-4 shadow-xl flex items-center justify-between gap-3 rounded-xl">
                            <div className="flex-1">
                              <span className="block text-[0.5rem] font-bold uppercase tracking-wider text-[var(--text-dim)] mb-0.5">Success Metric</span>
                              <span className="text-[0.7rem] font-semibold text-[var(--text-soft)] leading-snug block">{res}</span>
                            </div>
                            <div className="h-7 w-7 rounded-none border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/5 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
