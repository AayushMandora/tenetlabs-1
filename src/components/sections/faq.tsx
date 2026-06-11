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
    <div className="space-y-6">
      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-left text-base sm:text-lg">
        {siteContent.faq.heading}
      </p>

      <div className="space-y-2">
        {siteContent.faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-content-${index}`;

          return (
            <article key={item.question} className="modern-card overflow-hidden text-left">
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-[18px] py-[14px] text-left text-[15px] font-semibold text-[var(--text-100)] transition hover:bg-[var(--text-100)]/[0.02]"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.question}
                  <span
                    className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-none border border-[var(--line-soft)] bg-[var(--text-100)]/[0.05] text-[var(--accent-primary)] font-mono"
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
                    transition={{ duration: 0.2, ease: [0.18, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-[18px] pb-[14px] text-[14px] leading-[1.6] text-neutral-500 dark:text-neutral-400">
                      {item.answer}
                    </p>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </div>
  );
}
