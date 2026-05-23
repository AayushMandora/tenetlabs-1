"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { cn } from "@/lib/cn";

function MetricCountUp({ value }: { value: string }) {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffixPart = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isNaN(numericPart)) return;
    let start = 0;
    const end = numericPart;
    const duration = 1.0;
    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 12);

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericPart]);

  return (
    <span>
      {count}
      {suffixPart}
    </span>
  );
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"dev" | "audit" | "deploy">("dev");

  // Automated tab rotation simulation for interactive feel
  useEffect(() => {
    const tabs: ("dev" | "audit" | "deploy")[] = ["dev", "audit", "deploy"];
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const nextIdx = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIdx];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const tabContent = {
    dev: {
      title: "development.sh",
      logs: [
        "› npm run build --production",
        "› Compiling next-edge functions...",
        "› Injecting OpenAI / Anthropic routing middleware...",
        "› Static components analysis: 42 files scanned.",
        "› Bundle size: 68.4kb (100% within SLA bounds)",
        "✔ Build successfully compiled in 1,840ms.",
      ],
      progress: 92,
      phase: "Phase 3: Core AI Build",
    },
    audit: {
      title: "lighthouse.audit",
      logs: [
        "› lighthouse-cli https://tenetlabs.dev/test",
        "› Analyzing performance: FCP 0.4s, LCP 0.8s.",
        "› Accessibility audits: 100% clean check.",
        "› Best Practices: HTTP2, TLS 1.3, modern bundles.",
        "› SEO score: 100/100 indexed, meta tags valid.",
        "✔ Core Web Vitals passed with perfect scores.",
      ],
      progress: 100,
      phase: "Phase 4: Optimization & SEO",
    },
    deploy: {
      title: "deploy.env",
      logs: [
        "› vercel deploy --prod",
        "› Creating build deployment instance...",
        "› Binding production edge domains...",
        "› Warm-up caching global edge nodes...",
        "› SSL credentials validated. CDN synced.",
        "✔ Deployment active at production-tenetlabs.vercel.app",
      ],
      progress: 100,
      phase: "Phase 5: Live Launch",
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-transparent py-12 lg:py-20"
    >
      {/* Two-column split layout */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <Stagger className="space-y-6 flex flex-col items-start" delayChildren={0.05} staggerChildren={0.09}>
              <StaggerItem>
                <h1 className="font-display text-[2.5rem] leading-[1.08] font-black tracking-tight text-[var(--text-100)] sm:text-5xl lg:text-[2.75rem] xl:text-[3.5rem]">
                  {siteContent.hero.headline}
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="max-w-lg text-[0.95rem] md:text-[1rem] leading-relaxed text-[var(--text-muted)] font-medium">
                  {siteContent.hero.subheadline}
                </p>
              </StaggerItem>

              <StaggerItem className="flex flex-wrap items-center gap-4 pt-2">
                <Button href={siteContent.hero.primaryCta.href} className="px-8 py-3 text-xs font-bold uppercase tracking-widest">
                  {siteContent.hero.primaryCta.label}
                </Button>
                <Button href={siteContent.hero.secondaryCta.href} variant="secondary" className="px-8 py-3 text-xs font-bold uppercase tracking-widest">
                  {siteContent.hero.secondaryCta.label}
                </Button>
              </StaggerItem>
            </Stagger>
          </div>

          {/* Right Column: Interactive Dashboard Mockup */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <Reveal className="w-full px-2 sm:px-0">
              <MouseGlow
                className="w-full rounded-none border border-[var(--panel-border)] bg-[var(--panel-bg)]"
                containerClassName="flex flex-col h-full"
              >
                {/* Window Top Navigation Bar */}
                <div className="flex items-center justify-between border-b border-[var(--border-color)] bg-[var(--surface-800)]/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-100)]/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-100)]/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-100)]/10" />
                    <span className="ml-2 font-mono text-[0.62rem] text-[var(--text-muted)] select-none">pipeline.tenetlabs.dev</span>
                  </div>
                  <div className="flex gap-1">
                    {(["dev", "audit", "deploy"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "font-mono text-[0.65rem] px-2.5 py-1 transition-all duration-200 cursor-pointer border",
                          activeTab === tab
                            ? "bg-[var(--text-100)]/10 border-[var(--border-color)] text-[var(--text-100)] font-semibold"
                            : "bg-transparent border-transparent text-[var(--text-muted)] hover:text-[var(--text-soft)]"
                        )}
                      >
                        {tabContent[tab].title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dashboard Workspace */}
                <div className="grid md:grid-cols-[1.1fr_0.9fr] divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] bg-[var(--bg-950)]/95">
                  {/* Build Status Details */}
                  <div className="p-6 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[0.62rem] font-black uppercase tracking-wider text-[var(--text-muted)]">Active Project Phase</span>
                        <Badge className="border-green-500/20 bg-green-500/5 text-green-400 font-mono text-[0.6rem] font-bold tracking-wider px-2 py-0.5 animate-pulse">
                          Live
                        </Badge>
                      </div>
                      <h4 className="mt-2 text-md font-bold text-[var(--text-100)] text-left">{tabContent[activeTab].phase}</h4>
                    </div>

                    {/* Progress Indicators */}
                    <div className="space-y-4 text-left">
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[0.65rem]">
                          <span className="text-[var(--text-soft)]/65 font-medium">Build Completeness</span>
                          <span className="font-bold text-[var(--accent-primary)]">{tabContent[activeTab].progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[var(--text-100)]/[0.04] border border-[var(--border-color)] relative overflow-hidden">
                          <m.div
                            className="h-full bg-[var(--text-100)]/70 relative"
                            initial={{ width: "0%" }}
                            animate={{ width: `${tabContent[activeTab].progress}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          >
                            {tabContent[activeTab].progress < 100 && (
                              <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_1.5s_infinite] bg-[length:100px_100%]" />
                            )}
                          </m.div>
                        </div>
                      </div>

                      <div className="relative h-20 w-full flex items-center justify-between border border-[var(--border-color)] bg-[var(--bg-900)]/40 p-4 overflow-hidden rounded-none">
                        <div className="absolute inset-0 bg-[radial-gradient(140px_circle_at_center,var(--glow-1),transparent)] opacity-40" />
                        
                        <div className="flex flex-col justify-center text-left z-10">
                          <span className="block text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[var(--text-dim)] mb-0.5">Neural Pipeline</span>
                          <span className="text-[var(--text-100)] font-mono text-[0.65rem] font-semibold">Voice & LLM Stream Active</span>
                        </div>

                        {/* Interactive Wave Columns */}
                        <div className="flex items-center gap-1 z-10 h-8 pr-2">
                          {[1.1, 2.2, 1.4, 2.7, 1.8, 2.5, 1.3, 2.1, 1.5, 2.6].map((delay, i) => (
                            <m.span
                              key={i}
                              className="w-1 bg-gradient-to-t from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-none"
                              animate={{
                                height: [4, 26, 4],
                              }}
                              transition={{
                                duration: 0.9,
                                repeat: Infinity,
                                delay: delay * 0.2,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Logger Console */}
                  <div className="p-6 bg-[var(--surface-800)]/30 flex flex-col justify-between font-mono text-[0.65rem] text-left">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2 mb-3">
                        <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[var(--text-muted)]">Terminal Stream</span>
                        <span className="text-[0.6rem] text-[var(--text-dim)]/50 select-none">ESC to Clear</span>
                      </div>
                      <div className="space-y-1.5 min-h-[140px] text-[var(--text-soft)]/90">
                        <AnimatePresence mode="popLayout">
                          {tabContent[activeTab].logs.map((log, i) => (
                            <m.div
                              key={log}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2, delay: i * 0.05 }}
                              className={cn(
                                "leading-relaxed",
                                log.startsWith("✔") && "text-green-400 font-semibold"
                              )}
                            >
                              {log}
                            </m.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Bottom Metric Bar */}
                <div className="grid grid-cols-3 divide-x divide-[var(--border-color)] border-t border-[var(--border-color)] bg-[var(--bg-900)] py-4 text-center">
                  {siteContent.hero.visual.miniCards.map((card) => (
                    <div key={card.label} className="px-2">
                      <p className="text-[0.55rem] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        {card.label}
                      </p>
                      <p className="mt-1 text-lg sm:text-xl font-bold text-[var(--text-100)]">
                        <MetricCountUp value={card.value} />
                      </p>
                      <p className="text-[0.6rem] text-[var(--text-dim)] mt-0.5 hidden sm:block">
                        {card.note}
                      </p>
                    </div>
                  ))}
                </div>
              </MouseGlow>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
