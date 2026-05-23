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
  const [selectedNode, setSelectedNode] = useState<string>("brain");
  const [userInteracted, setUserInteracted] = useState(false);

  // Automated node rotation simulation for interactive feel
  useEffect(() => {
    if (userInteracted) return;
    const nodes = ["user", "stt", "brain", "tts", "zapier"];
    const interval = setInterval(() => {
      setSelectedNode((prev) => {
        const nextIdx = (nodes.indexOf(prev) + 1) % nodes.length;
        return nodes[nextIdx];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [userInteracted]);

  const nodeLogs: Record<string, { title: string; phase: string; progress: number; logs: string[] }> = {
    user: {
      title: "user.voice_stream",
      phase: "Pipeline Phase 1: Audio Capture",
      progress: 100,
      logs: [
        "› WebSocket connecting on wss://stream.tenetlabs.dev...",
        "› [WS] Protocol: bi-directional audio stream (Opus)",
        "› Audio stream established. Latency: 120ms.",
        "› [VAD] Voice Activity Detector active (threshold 0.45)",
        "› [VAD] Noise floor: -48dB. Echo cancellation: OK.",
        "✔ Real-time capture stream listening...",
      ]
    },
    stt: {
      title: "whisper.stt_pipeline",
      phase: "Pipeline Phase 2: Speech-to-Text",
      progress: 100,
      logs: [
        "› Deepgram transcription agent initialized.",
        "› Decoding raw PCM audio chunks...",
        "› Processing frame 482 (confidence: 0.994)",
        "› Partial Transcript: 'book a demo...'",
        "› Final Transcript: 'book a demo for next Monday'",
        "✔ Transcription synced to prompt core."
      ]
    },
    brain: {
      title: "tenetlabs.agent_core",
      phase: "Pipeline Phase 3: AI Engine Reasoning",
      progress: 92,
      logs: [
        "› LLM Context injected with workspace schema.",
        "› Routing to Anthropic Claude 3.5 Sonnet.",
        "› Thinking process completed in 420ms.",
        "› Action parsed: [Calendar API check, CRM sync]",
        "› Output token: 'I have scheduled your demo.'",
        "✔ Model execution compiled successfully."
      ]
    },
    tts: {
      title: "cartesia.audio_synth",
      phase: "Pipeline Phase 4: Text-to-Speech",
      progress: 100,
      logs: [
        "› Synthesis pipeline activated.",
        "› Voice preset loaded: 'Sonic Gold' (Warm/Premium)",
        "› Generative sound frame synthesis initiated...",
        "› Playing 24kHz raw PCM stream...",
        "› Streaming audio buffer health: 100%.",
        "✔ Playback active on client device."
      ]
    },
    zapier: {
      title: "zapier.crm_sync",
      phase: "Pipeline Phase 5: CRM & Actions",
      progress: 100,
      logs: [
        "› Sending REST payload to webhook.zapier.com...",
        "› Triggering Zap: 'TenetLabs Calendar Lead'",
        "› Zap Action 1: Create HubSpot contact (Sarah Chen)",
        "› Zap Action 2: Send Gmail intro calendar invite",
        "› Response code from Zapier REST API: 200 OK",
        "✔ Automation pipeline synced successfully."
      ]
    }
  };

  function renderNodeIcon(id: string) {
    if (id === "user") {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 text-teal-400">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8" />
        </svg>
      );
    }
    if (id === "stt") {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 text-teal-400">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    }
    if (id === "brain") {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 text-[var(--accent-primary)]">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
    }
    if (id === "tts") {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 text-violet-400">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      );
    }
    if (id === "zapier") {
      return (
        <svg viewBox="0 0 64 64" fill="#ff4a00" className="h-3.5 w-3.5 shrink-0">
          <path d="M63.207 26.418H44.432l13.193-13.193c-1.015-1.522-2.03-2.537-3.045-4.06a29.025 29.025 0 0 1-4.059-3.552L37.33 18.807V.54a17.252 17.252 0 0 0-5.074-.507A15.629 15.629 0 0 0 27.18.54v18.775l-13.7-13.7A13.7 13.7 0 0 0 9.42 9.166c-1.015 1.522-2.537 2.537-3.552 4.06L19.06 26.418H.794l-.507 5.074a15.629 15.629 0 0 0 .507 5.074H19.57l-13.7 13.7a27.198 27.198 0 0 0 7.611 7.611l13.193-13.193V63.46a17.252 17.252 0 0 0 5.074.507 15.629 15.629 0 0 0 5.074-.507V44.686L50.014 57.88a13.7 13.7 0 0 0 4.059-3.552 29.025 29.025 0 0 0 3.552-4.059L44.432 37.074h18.775A17.252 17.252 0 0 0 63.715 32a19.028 19.028 0 0 0-.507-5.582zm-23.342 5.074a25.726 25.726 0 0 1-1.015 6.597 15.223 15.223 0 0 1-6.597 1.015 25.726 25.726 0 0 1-6.597-1.015 15.223 15.223 0 0 1-1.015-6.597 25.726 25.726 0 0 1 1.015-6.597 15.223 15.223 0 0 1 6.597-1.015 25.726 25.726 0 0 1 6.597 1.015 29.684 29.684 0 0 1 1.015 6.597z" />
        </svg>
      );
    }
    return null;
  }

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
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="h-2 w-2 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[0.62rem] text-[var(--text-soft)]/70 select-none">pipeline_stream.sh</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[0.6rem] text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-semibold uppercase tracking-wider text-green-400">Agent Connected</span>
                  </div>
                </div>

                {/* Dashboard Workspace */}
                <div className="grid md:grid-cols-[1fr_1.1fr] divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] bg-[var(--bg-950)]/95">
                  {/* Left Column: Stage Details & Terminal */}
                  <div className="p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[0.62rem] font-black uppercase tracking-wider text-[var(--text-muted)]">Active Pipeline Stage</span>
                        <Badge className="border-green-500/20 bg-green-500/5 text-green-400 font-mono text-[0.6rem] font-bold tracking-wider px-2 py-0.5 animate-pulse">
                          Active
                        </Badge>
                      </div>
                      <h4 className="mt-2 text-md font-bold text-[var(--text-100)] text-left">
                        {nodeLogs[selectedNode].phase}
                      </h4>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <div className="flex justify-between text-[0.65rem]">
                        <span className="text-[var(--text-soft)]/65 font-medium">Stage Completeness</span>
                        <span className="font-bold text-[var(--accent-primary)]">{nodeLogs[selectedNode].progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[var(--text-100)]/[0.04] border border-[var(--border-color)] relative overflow-hidden">
                        <m.div
                          className="h-full bg-[var(--text-100)]/70 relative"
                          initial={{ width: "0%" }}
                          animate={{ width: `${nodeLogs[selectedNode].progress}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          key={selectedNode}
                        >
                          {nodeLogs[selectedNode].progress < 100 && (
                            <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_1.5s_infinite] bg-[length:100px_100%]" />
                          )}
                        </m.div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between font-mono text-[0.65rem] text-left border border-[var(--border-color)] bg-[var(--surface-800)]/30 p-4 mt-2">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2 mb-3">
                          <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                            {nodeLogs[selectedNode].title}
                          </span>
                          <span className="text-[0.6rem] text-[var(--text-dim)]/50 select-none">STREAMING</span>
                        </div>
                        <div className="space-y-1.5 min-h-[135px] text-[var(--text-soft)]/90">
                          <AnimatePresence mode="popLayout">
                            {nodeLogs[selectedNode].logs.map((log, i) => (
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

                  {/* Right Column: Node Graph */}
                  <div className="relative p-6 min-h-[300px] flex items-center justify-center bg-[var(--surface-800)]/10 overflow-hidden">
                    <style dangerouslySetInnerHTML={{ __html: `
                      @keyframes march-left {
                        to {
                          stroke-dashoffset: -24;
                        }
                      }
                      @keyframes march-right {
                        to {
                          stroke-dashoffset: -24;
                        }
                      }
                      .animate-dash-left {
                        stroke-dasharray: 8 8;
                        animation: march-left 1.2s linear infinite;
                      }
                      .animate-dash-right {
                        stroke-dasharray: 8 8;
                        animation: march-right 1.2s linear infinite;
                      }
                    `}} />

                    {/* Canvas Background Grid Lines */}
                    <div className="absolute inset-0 opacity-[0.25] pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(var(--border-color) 1.5px, transparent 1.5px)`,
                        backgroundSize: "20px 20px"
                      }}
                    />

                    {/* SVG Connector Wires */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="flow-left-to-center" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--accent-support)" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.8" />
                        </linearGradient>
                        <linearGradient id="flow-center-to-right" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0.25" />
                        </linearGradient>
                      </defs>
                      
                      {/* Background static lines */}
                      <path d="M 22 25 C 36 25, 36 46, 48 46" stroke="var(--border-color)" strokeWidth="1.5" fill="none" />
                      <path d="M 22 75 C 36 75, 36 46, 48 46" stroke="var(--border-color)" strokeWidth="1.5" fill="none" />
                      <path d="M 52 46 C 64 46, 64 25, 78 25" stroke="var(--border-color)" strokeWidth="1.5" fill="none" />
                      <path d="M 52 46 C 64 46, 64 75, 78 75" stroke="var(--border-color)" strokeWidth="1.5" fill="none" />
                      
                      {/* Flowing animated lines (marching dashes) */}
                      <path d="M 22 25 C 36 25, 36 46, 48 46" stroke="url(#flow-left-to-center)" strokeWidth="2.2" fill="none" className="animate-dash-left" />
                      <path d="M 22 75 C 36 75, 36 46, 48 46" stroke="url(#flow-left-to-center)" strokeWidth="2.2" fill="none" className="animate-dash-left" />
                      <path d="M 52 46 C 64 46, 64 25, 78 25" stroke="url(#flow-center-to-right)" strokeWidth="2.2" fill="none" className="animate-dash-right" />
                      <path d="M 52 46 C 64 46, 64 75, 78 75" stroke="url(#flow-center-to-right)" strokeWidth="2.2" fill="none" className="animate-dash-right" />
                    </svg>

                    {/* Interactive Node Items absolute overlays */}
                    {[
                      { id: "user", label: "User Input", sub: "Audio Stream", left: "20%", top: "25%", color: "teal" },
                      { id: "stt", label: "Whisper V3", sub: "Speech-to-Text", left: "20%", top: "75%", color: "teal" },
                      { id: "brain", label: "Tenet Core", sub: "Agent Reasoning", left: "50%", top: "46%", color: "vermilion" },
                      { id: "tts", label: "Cartesia", sub: "Voice Synth", left: "80%", top: "25%", color: "violet" },
                      { id: "zapier", label: "Zapier Flow", sub: "CRM Actions", left: "80%", top: "75%", color: "violet" },
                    ].map((node) => {
                      const isSelected = selectedNode === node.id;
                      let borderClass = "";
                      
                      if (isSelected) {
                        if (node.color === "teal") {
                          borderClass = "border-[var(--accent-support)] bg-[var(--text-100)]/10 shadow-[0_0_16px_rgba(0,128,128,0.35)] scale-105 z-20";
                        } else if (node.color === "violet") {
                          borderClass = "border-[var(--accent-secondary)] bg-[var(--text-100)]/10 shadow-[0_0_16px_rgba(88,86,214,0.35)] scale-105 z-20";
                        } else {
                          borderClass = "border-[var(--accent-primary)] bg-[var(--text-100)]/10 shadow-[0_0_16px_rgba(255,85,17,0.35)] scale-105 z-20";
                        }
                      } else {
                        borderClass = "border-[var(--panel-border)] bg-[var(--panel-bg)]/80 hover:border-[var(--text-100)]/30 hover:bg-[var(--text-100)]/[0.04] scale-100 z-10";
                      }
                      
                      return (
                        <div
                          key={node.id}
                          onClick={() => {
                            setSelectedNode(node.id);
                            setUserInteracted(true);
                          }}
                          className={cn(
                            "absolute px-3 py-1.5 border transition-all duration-300 flex items-center gap-2 cursor-pointer select-none rounded-none",
                            borderClass
                          )}
                          style={{
                            left: node.left,
                            top: node.top,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                            {renderNodeIcon(node.id)}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-[0.6rem] font-bold tracking-wide text-[var(--text-100)]">
                              {node.label}
                            </span>
                            <span className="text-[0.45rem] uppercase tracking-wider text-[var(--text-muted)] font-mono">
                              {node.sub}
                            </span>
                          </div>
                        </div>
                      );
                    })}
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
