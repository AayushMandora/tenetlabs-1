"use client";

import { useState, useEffect } from "react";
import { siteContent } from "@/content/site-content";
import { m, AnimatePresence } from "framer-motion";
import { Clock, Check, ChevronRight, Sparkles } from "lucide-react";

import { Floating } from "@/components/motion/floating";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { MouseGlow } from "@/components/motion/mouse-glow";
import { cn } from "@/lib/cn";

interface DateOption {
  dayName: string;
  dateString: string;
  fullDate: string;
  slots: string[];
}

export function CtaSection() {
  const [mounted, setMounted] = useState(false);
  const [dates, setDates] = useState<DateOption[]>([]);
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const tempDates: DateOption[] = [];
    const startDay = new Date();
    // Start from tomorrow
    startDay.setDate(startDay.getDate() + 1);

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let i = 0; i < 3; i++) {
      const targetDate = new Date(startDay);
      targetDate.setDate(startDay.getDate() + i);

      // Skip weekends to show realistic business consultation availability
      while (targetDate.getDay() === 0 || targetDate.getDay() === 6) {
        targetDate.setDate(targetDate.getDate() + 1);
      }
      
      // Pin startDay offset to prevent overlapping skips
      if (i === 0) {
        startDay.setTime(targetDate.getTime());
      }

      const dayName = dayNames[targetDate.getDay()];
      const fullDayName = fullDayNames[targetDate.getDay()];
      const dateString = `${monthNames[targetDate.getMonth()]} ${targetDate.getDate()}`;
      const fullDate = `${fullDayName}, ${dateString}`;
      
      // Professional consultation timeslots
      const slots = ["09:30 AM", "11:00 AM", "02:00 PM", "04:30 PM"];

      tempDates.push({
        dayName,
        dateString,
        fullDate,
        slots,
      });
    }

    setDates(tempDates);
  }, []);

  return (
    <section id="contact">
      <Reveal className="relative overflow-hidden rounded-none border border-[var(--panel-border)] bg-[var(--panel-bg)] p-6 sm:p-8 lg:p-10">
        {/* Ambient background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_220px_at_100%_0%,var(--glow-1),transparent_68%),radial-gradient(420px_200px_at_0%_100%,var(--glow-2),transparent_70%)]"
        />

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-left">
            <SectionHeading
              eyebrow="Ready to Build?"
              title={siteContent.cta.heading}
              description={siteContent.cta.subheading}
            />

            <div className="flex flex-wrap items-center gap-3">
              <Button href={siteContent.cta.primaryCta.href} target="_blank" rel="noreferrer">
                {siteContent.cta.primaryCta.label}
              </Button>
              <a
                href={`mailto:${siteContent.config.email}`}
                className="text-sm font-medium text-[var(--accent-primary)] transition hover:text-[var(--text-100)]"
              >
                {siteContent.cta.secondaryText}
              </a>
            </div>
          </div>

          <Floating distance={3} duration={10}>
            <div className="w-full max-w-sm mx-auto lg:max-w-none">
              <MouseGlow
                glowColor="var(--glow-1)"
                glowSize={250}
                className="rounded-none border border-[var(--panel-border)] bg-[var(--panel-bg)]"
                containerClassName="p-6 flex flex-col justify-between min-h-[280px]"
              >
                <AnimatePresence mode="wait">
                  {!mounted || dates.length === 0 ? (
                    // Skeleton State
                    <m.div
                      key="skeleton"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-[var(--border-color)]">
                        <span className="text-[0.65rem] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                          Consultation Slot Preview
                        </span>
                        <span className="h-1.5 w-1.5 rounded-none bg-[var(--text-100)]/20" />
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-12 flex-1 bg-[var(--text-100)]/[0.02] border border-[var(--border-color)] animate-pulse" />
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-10 bg-[var(--text-100)]/[0.02] border border-[var(--border-color)] animate-pulse" />
                        ))}
                      </div>
                    </m.div>
                  ) : !isConfirmed ? (
                    // Booking Form Screen
                    <m.div
                      key="booking-form"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col h-full justify-between"
                    >
                      <div>
                        {/* Header */}
                        <div className="flex justify-between items-center pb-2.5 border-b border-[var(--border-color)] mb-4">
                          <span className="text-[0.65rem] font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-none bg-green-500 animate-pulse" />
                            Live Availability
                          </span>
                          <span className="text-[0.55rem] font-bold text-[var(--accent-primary)] uppercase tracking-wider">
                            Calendly Sync
                          </span>
                        </div>

                        {/* Date selectors */}
                        <div className="flex gap-2 mb-4">
                          {dates.map((d, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedDateIdx(idx);
                                setSelectedSlot(null);
                              }}
                              className={cn(
                                "flex flex-col items-center justify-center p-2 border flex-1 transition-all rounded-none cursor-pointer",
                                selectedDateIdx === idx
                                  ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--text-100)]"
                                  : "border-[var(--panel-border)] bg-[var(--text-100)]/[0.01] text-[var(--text-muted)] hover:border-[var(--panel-hover-border)] hover:text-[var(--text-100)]"
                              )}
                            >
                              <span className="text-[0.5rem] font-bold uppercase tracking-wider">{d.dayName}</span>
                              <span className="text-xs font-black mt-0.5">{d.dateString.split(" ")[1]}</span>
                            </button>
                          ))}
                        </div>

                        {/* Timeslots */}
                        <div className="grid grid-cols-2 gap-2">
                          {dates[selectedDateIdx].slots.map((slot) => {
                            const isSelected = selectedSlot === slot;
                            return (
                              <button
                                key={slot}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectedSlot(slot);
                                }}
                                className={cn(
                                  "flex items-center justify-center gap-1.5 p-2.5 border text-[0.62rem] font-bold tracking-wider transition-all rounded-none cursor-pointer",
                                  isSelected
                                    ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--text-100)]"
                                    : "border-[var(--panel-border)] bg-[var(--text-100)]/[0.01] text-[var(--text-soft)] hover:border-[var(--panel-hover-border)] hover:text-[var(--text-100)]"
                                )}
                              >
                                <Clock className="h-3 w-3 opacity-50 shrink-0" />
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Request Slot Button */}
                      <div className="mt-5 pt-3.5 border-t border-[var(--border-color)]">
                        <button
                          disabled={!selectedSlot}
                          onClick={(e) => {
                            e.preventDefault();
                            if (selectedSlot) setIsConfirmed(true);
                          }}
                          className={cn(
                             "w-full py-2.5 flex items-center justify-center gap-1.5 text-[0.65rem] font-black uppercase tracking-widest transition-all rounded-none cursor-pointer",
                             selectedSlot
                               ? "bg-[var(--text-100)] text-[var(--bg-950)] hover:bg-[var(--text-100)]/90 active:scale-[0.98]"
                               : "bg-[var(--text-100)]/[0.05] text-[var(--text-100)]/20 border border-[var(--border-color)] cursor-not-allowed"
                          )}
                        >
                          Request Slot <ChevronRight className="h-3 w-3 shrink-0" />
                        </button>
                      </div>
                    </m.div>
                  ) : (
                    // Success/Confirmation Screen
                    <m.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="flex flex-col items-center justify-between text-center py-2 h-full min-h-[230px]"
                    >
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-none border border-green-500/20 bg-green-500/10 flex items-center justify-center text-green-400 mb-4 animate-bounce">
                          <Check className="h-5 w-5" />
                        </div>
                        <h4 className="text-xs font-black uppercase tracking-wider text-[var(--text-100)]">
                          Time Slot Reserved
                        </h4>
                        <p className="text-[0.62rem] text-[var(--text-muted)] mt-1 uppercase tracking-widest">
                          TenetLabs Discovery Sprint
                        </p>

                        <div className="mt-4 px-4 py-2 bg-[var(--text-100)]/[0.02] border border-[var(--border-color)] rounded-none inline-flex items-center gap-2">
                          <span className="text-[0.65rem] font-bold text-[var(--text-100)]">
                            {dates[selectedDateIdx].fullDate} @ {selectedSlot}
                          </span>
                          <span className="text-[0.55rem] font-bold text-[var(--text-dim)] uppercase tracking-widest">EST</span>
                        </div>
                      </div>

                      <div className="w-full space-y-2 mt-5">
                        <a
                          href={siteContent.config.calendlyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2.5 bg-[var(--text-100)] text-[var(--bg-950)] hover:bg-[var(--text-100)]/90 active:scale-[0.98] flex items-center justify-center gap-1.5 text-[0.65rem] font-black uppercase tracking-widest transition-all rounded-none"
                        >
                          Confirm details on Calendly <Sparkles className="h-3 w-3 shrink-0" />
                        </a>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setIsConfirmed(false);
                            setSelectedSlot(null);
                          }}
                          className="text-[0.55rem] font-bold uppercase tracking-wider text-[var(--text-dim)] hover:text-[var(--text-soft)] transition cursor-pointer"
                        >
                          Choose another slot
                        </button>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </MouseGlow>
            </div>
          </Floating>
        </div>
      </Reveal>
    </section>
  );
}
