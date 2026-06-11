import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site-content";

const caseLabels = ["E-commerce MVP", "SaaS Admin", "AI Chatbot Integration"];

export function PortfolioSection() {
  return (
    <div className="space-y-6 text-left">
      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
        {siteContent.caseStudies.heading}
      </p>

      <div className="grid gap-[24px] lg:gap-[32px] md:grid-cols-2 lg:grid-cols-3">
        {siteContent.caseStudies.items.map((project, index) => {
          return (
            <div
              key={project.name}
              className="modern-card p-6 sm:p-7 flex flex-col justify-between h-full"
            >
              <div className="space-y-5">
                <span className="inline-flex w-fit items-center gap-2 border border-[var(--line-soft)] bg-[var(--module-hover)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)]">
                  {caseLabels[index]}
                </span>

                <div>
                  <h3 className="font-sans text-lg font-bold leading-tight text-[var(--foreground)]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium leading-[1.6] text-neutral-500 dark:text-neutral-400">
                    {project.tagline}
                  </p>
                </div>

                <div className="space-y-3.5 border-t border-[var(--line-soft)] pt-4">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Challenge
                    </span>
                    <p className="mt-1 text-[13px] leading-[1.6] text-neutral-500 dark:text-neutral-400">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Solution
                    </span>
                    <p className="mt-1 text-[13px] leading-[1.6] text-neutral-500 dark:text-neutral-400">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[var(--line-soft)] pt-4">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-2">
                    Success Metrics
                  </span>
                  <ul className="space-y-2 text-[13px] text-neutral-600 dark:text-neutral-300">
                    {project.results.map((result) => (
                      <li key={result} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-neutral-400 dark:bg-neutral-500" />
                        <span className="font-semibold leading-[1.6]">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--line-soft)] flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[var(--line-soft)] bg-[var(--module-hover)] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.ctaHref}
                  className="inline-flex w-fit items-center gap-2 border border-[var(--line-soft)] bg-[var(--module-hover)] px-4 py-2.5 text-[13px] font-bold text-[var(--foreground)] transition hover:bg-neutral-500 hover:text-white"
                >
                  {project.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
