"use client";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/shared/button";

/* ────────────────────────────────────────────────────────────────────────
   Premium Layered Card Stack – a clean, readable, CSS-only 3D stack
   that looks great at every viewport width. No SVG projection needed.
   ──────────────────────────────────────────────────────────────────────── */

const stages = [
  { label: "Product UI/UX", tag: "DESIGN", color: "#10b981" },
  { label: "AI Pipelines", tag: "AGENTS", color: "#6366f1" },
  { label: "Backend & DB", tag: "CORE", color: "#f59e0b" },
  { label: "Deploy & Scale", tag: "CLOUD", color: "#ef4444" },
];

function StageCard({ label, tag, color, index }: { label: string; tag: string; color: string; index: number }) {
  return (
    <div
      className="rounded-card group relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 bg-[#0a0d14]/90 border border-white/[0.07] backdrop-blur-sm transition-all duration-300"
      style={{ borderRadius: "14px" }}
    >
      {/* Status dot */}
      <span
        className="flex-shrink-0 w-2 h-2 rounded-full shadow-[0_0_6px_var(--dot-color)]"
        style={{ backgroundColor: color, "--dot-color": color } as React.CSSProperties}
      />
      {/* Label */}
      <span className="text-[0.8rem] sm:text-[0.85rem] font-semibold text-white/90 leading-tight">
        {label}
      </span>
      {/* Tag */}
      <span
        className="ml-auto text-[0.55rem] sm:text-[0.6rem] font-mono font-bold tracking-widest uppercase px-2 py-0.5"
        style={{ color, borderRadius: "6px", backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
      >
        {tag}
      </span>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="rounded-card relative w-full max-w-[420px] mx-auto">
      {/* ── Ambient glow behind the stack ── */}
      <div
        className="absolute -inset-8 sm:-inset-12 opacity-40 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 85, 17, 0.15), transparent 70%)",
        }}
      />

      {/* ── Back plates (the 3 bottom slabs peeking out) ── */}
      <div
        className="absolute left-4 right-4 sm:left-5 sm:right-5 bottom-0 h-full bg-gradient-to-br from-[#0e111a] to-[#070810] border border-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        style={{ borderRadius: "28px", transform: "translateY(24px) scale(0.92)" }}
      />
      <div
        className="absolute left-3 right-3 sm:left-4 sm:right-4 bottom-0 h-full bg-gradient-to-br from-[#111520] to-[#080b13] border border-white/[0.06] shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
        style={{ borderRadius: "30px", transform: "translateY(16px) scale(0.95)" }}
      />
      <div
        className="absolute left-2 right-2 sm:left-3 sm:right-3 bottom-0 h-full bg-gradient-to-br from-[#141926] to-[#0a0d15] border border-white/[0.07] shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
        style={{ borderRadius: "32px", transform: "translateY(8px) scale(0.975)" }}
      />

      {/* ── Main front card ── */}
      <div
        className="relative z-10 bg-gradient-to-br from-[#171d2e] via-[#0f1320] to-[#080a11] border border-white/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden"
        style={{ borderRadius: "32px" }}
      >
        {/* Top-left subtle light reflection */}
        <div
          className="absolute top-0 left-0 w-2/3 h-1/2 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 20% 0%, rgba(255, 255, 255, 0.03), transparent 70%)",
          }}
        />

        {/* Card header */}
        <div className="relative px-5 pt-5 pb-4 sm:px-7 sm:pt-7 sm:pb-5 border-b border-white/[0.06]">
          {/* TenetLabs brand cluster */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div>
              <div className="text-[0.9rem] sm:text-[1rem] font-extrabold tracking-wide text-white leading-none">
                TENET<span className="text-[var(--accent-primary)]">LABS</span>
              </div>
              <div className="text-[0.55rem] sm:text-[0.6rem] font-mono text-white/35 tracking-[0.15em] uppercase mt-0.5">
                BUILD · SHIP · SCALE
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[#ff8844]"
                style={{ width: "100%" }}
              />
            </div>
            <span className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-[var(--accent-primary)] tracking-wider">
              28 DAYS
            </span>
          </div>
        </div>

        {/* Stage cards grid */}
        <div className="relative px-4 py-4 sm:px-6 sm:py-5 space-y-2 sm:space-y-2.5">
          {stages.map((s, i) => (
            <StageCard key={i} index={i} {...s} />
          ))}
        </div>

        {/* Card footer with metrics */}
        <div className="relative px-5 py-3 sm:px-7 sm:py-4 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <div>
              <div className="text-[0.95rem] sm:text-[1.1rem] font-extrabold text-white leading-none">4</div>
              <div className="text-[0.5rem] sm:text-[0.55rem] font-mono text-white/30 tracking-wider uppercase mt-0.5">Stages</div>
            </div>
            <div className="w-px h-6 bg-white/[0.06]" />
            <div>
              <div className="text-[0.95rem] sm:text-[1.1rem] font-extrabold text-white leading-none">28</div>
              <div className="text-[0.5rem] sm:text-[0.55rem] font-mono text-white/30 tracking-wider uppercase mt-0.5">Days</div>
            </div>
            <div className="w-px h-6 bg-white/[0.06]" />
            <div>
              <div className="text-[0.95rem] sm:text-[1.1rem] font-extrabold text-[var(--accent-primary)] leading-none">MVP</div>
              <div className="text-[0.5rem] sm:text-[0.55rem] font-mono text-white/30 tracking-wider uppercase mt-0.5">Ready</div>
            </div>
          </div>
          <div className="text-[0.5rem] sm:text-[0.55rem] font-mono text-white/25 tracking-wider uppercase">
            v2.0
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-transparent pt-8 pb-10 sm:pt-12 sm:pb-12 lg:pt-20 lg:pb-16 z-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6 text-center lg:text-left">
            <Stagger className="space-y-5 sm:space-y-6 flex flex-col items-center lg:items-start" delayChildren={0.05} staggerChildren={0.09}>
              <StaggerItem>
                <h1 className="font-display text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.08] font-black tracking-tight text-[var(--text-100)]">
                  Ship Your <span className="font-syne font-black italic tracking-wide text-[var(--accent-primary)]">MVP</span> <br className="hidden sm:inline" />
                  <span className="font-serif font-medium text-[var(--text-soft)] italic tracking-normal">in 28 Days.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="max-w-lg text-[0.88rem] sm:text-[0.95rem] md:text-[1rem] leading-relaxed text-[var(--text-muted)] font-medium">
                  {siteContent.hero.subheadline}
                </p>
              </StaggerItem>

              <StaggerItem className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
                <Button href={siteContent.hero.primaryCta.href} className="px-6 sm:px-8 py-3 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest rounded-none shadow-lg">
                  {siteContent.hero.primaryCta.label}
                </Button>
                <Button href={siteContent.hero.secondaryCta.href} variant="secondary" className="px-6 sm:px-8 py-3 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest rounded-none shadow-lg">
                  {siteContent.hero.secondaryCta.label}
                </Button>
              </StaggerItem>
            </Stagger>
          </div>

          {/* Right Column: Premium Layered Card Stack */}
          <div className="lg:col-span-7 w-full flex items-center justify-center pt-4 pb-8 sm:pt-8 sm:pb-8 lg:pt-0 lg:pb-0">
            <Reveal className="w-full flex items-center justify-center">
              <HeroCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
