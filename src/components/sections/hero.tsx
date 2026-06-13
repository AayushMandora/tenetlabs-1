"use client";

import React from "react";
import { ArrowUpRight, Check, Github, Linkedin, Twitter, Dribbble, Mail } from "lucide-react";
import { siteContent } from "@/content/site-content";

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
      {/* Hero Linework Banner Block */}
      <div className="hero-linework relative w-full">
        <div className="pb-8 pt-4 min-h-[220px]">
          {/* Hero Content Column */}
          <div className="space-y-6 text-left max-w-3xl">
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
