"use client";

import { useState } from "react";

import { AnimatePresence, m } from "framer-motion";

import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase } from "@/lib/ui-classes";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="space-y-8">
      <Reveal>
        <SectionHeading eyebrow="FAQ" title={siteContent.faq.heading} />
      </Reveal>

      <div className="space-y-2">
        {siteContent.faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-content-${index}`;

          return (
            <article key={item.question} className={cn(panelBase, "overflow-hidden")}>
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--text-100)] transition hover:bg-[var(--text-100)]/[0.02] sm:text-base"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.question}
                  <span
                    className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-none border border-[var(--panel-border)] bg-[var(--text-100)]/[0.05] text-[var(--accent-primary)]"
                    aria-hidden
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <m.div
                    key="content"
                    id={contentId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.18, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--text-muted)]">
                      {item.answer}
                    </p>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
