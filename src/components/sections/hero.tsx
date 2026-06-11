"use client";

import React from "react";
import { ArrowUpRight, Check, Github, Linkedin, Twitter, Dribbble, Mail } from "lucide-react";
import { siteContent } from "@/content/site-content";

function HeroVisual() {
  const visual = siteContent.hero.visual;

  return (
    <div className="modern-card overflow-hidden bg-[var(--module-bg)] border border-[var(--line-soft)] max-w-[400px] w-full mx-auto">
      <div className="border-b border-[var(--line-soft)] p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-neutral-400">
              {visual.boardTitle}
            </p>
            <h3 className="mt-2 font-sans text-lg font-bold text-[var(--foreground)]">
              {siteContent.config.agencyName}
            </h3>
          </div>
          <span className="border border-[var(--line-soft)] bg-[var(--module-hover)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--foreground)]">
            {visual.boardStatus}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {visual.boardChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-2 border border-[var(--line-soft)] bg-[var(--module-hover)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400"
            >
              <Check className="h-3 w-3" />
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-2.5 p-4 sm:grid-cols-3">
        {visual.miniCards.map((card) => (
          <article
            key={card.label}
            className="border border-[var(--line-soft)] bg-[var(--module-hover)] p-3 text-left"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
              {card.label}
            </p>
            <p className="mt-1 font-sans text-base font-bold text-[var(--foreground)]">{card.value}</p>
            <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-neutral-400">{card.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const socialLinks = siteContent.config.socialLinks;
  
  // Icon helper for social links grid
  const getSocialIcon = (label: string) => {
    const name = label.toLowerCase();
    if (name.includes("github")) return <Github className="h-4 w-4" />;
    if (name.includes("linkedin")) return <Linkedin className="h-4 w-4" />;
    if (name.includes("twitter") || name.includes("x")) return <Twitter className="h-4 w-4" />;
    return <Dribbble className="h-4 w-4" />;
  };

  return (
    <section id="top" className="w-full">
      {/* 2-Column Hero Linework Banner Block */}
      <div className="hero-linework relative w-full">
        <div className="grid gap-8 lg:grid-cols-[58%_42%] items-center pb-8 min-h-[300px]">
          {/* Hero Content Column */}
          <div className="space-y-6 text-left">
            <p className="font-mono text-[12px] font-bold uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
              {siteContent.hero.eyebrow}
            </p>

            <h1 className="hero-name">
              {siteContent.hero.headline}
            </h1>

            <p className="max-w-2xl text-[16px] sm:text-[18px] font-medium leading-[1.6] text-neutral-600 dark:text-neutral-300">
              {siteContent.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-[16px] pt-2">
              <a
                href={siteContent.hero.primaryCta.href}
                className="inline-flex items-center justify-center border border-[var(--line-strong)] bg-[var(--foreground)] text-[var(--page-bg)] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.18em] transition hover:bg-transparent hover:text-[var(--foreground)]"
              >
                {siteContent.hero.primaryCta.label}
              </a>
              <a
                href={siteContent.hero.secondaryCta.href}
                className="inline-flex items-center justify-center border border-[var(--line-soft)] bg-[var(--module-hover)] text-[var(--foreground)] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.18em] transition hover:bg-[var(--foreground)] hover:text-[var(--page-bg)]"
              >
                {siteContent.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="w-full flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Repeating Diagonal Lines Hatch band separator */}
      <div className="hatch-band" aria-hidden="true"></div>

      {/* Social Links Bar aligned to Centered Grid Columns */}
      <div className="hero-links-grid">
        {socialLinks.slice(0, 4).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="box-link"
          >
            <span className="social-icon">
              {getSocialIcon(link.label)}
            </span>
            <span className="min-w-0 flex-1 truncate text-xs font-bold uppercase tracking-[0.15em] text-left">
              {link.label}
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400" />
          </a>
        ))}
      </div>
    </section>
  );
}
