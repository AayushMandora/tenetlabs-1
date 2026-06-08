"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/cn";

export function HeaderSection() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme ?? "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-[20px] md:px-[32px] lg:px-[40px] py-3">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-[1280px] items-center justify-between rounded-[8px] border px-3 py-2 transition-all duration-300 sm:px-4",
          scrolled || mobileMenuOpen
            ? "border-white/[0.12] bg-[var(--header-bg)] shadow-md backdrop-blur-sm"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#top" className="group inline-flex items-center gap-3 rounded-[8px] px-2 py-1.5 transition hover:bg-white/[0.055]">
          <img
            src="/logo.png"
            alt="TenetLabs Logo"
            className="h-8 w-8 rounded-full object-cover ring-1 ring-white/15 transition duration-300 group-hover:ring-[var(--accent-primary)]/60"
          />
          <span className="font-display text-sm font-bold uppercase text-[var(--text-100)] sm:text-base">
            TenetLabs
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-[8px] border border-white/[0.08] bg-white/[0.025] p-1 backdrop-blur-sm md:flex">
          {siteContent.config.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[6px] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] transition hover:bg-white/[0.06] hover:text-[var(--text-100)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/[0.1] bg-white/[0.035] text-[var(--text-soft)] transition hover:border-white/[0.2] hover:bg-white/[0.08]"
            aria-label="Toggle Theme"
            type="button"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={siteContent.config.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-10 items-center justify-center rounded-[8px] border border-white/[0.14] bg-white px-4 text-[12px] font-bold uppercase tracking-[0.18em] text-black shadow-sm transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Book a Demo
          </a>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/[0.1] bg-white/[0.035] text-[var(--text-soft)] transition hover:border-white/[0.2] hover:bg-white/[0.08] md:hidden"
            aria-label="Toggle Mobile Menu"
            type="button"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <m.div
            className="pointer-events-auto fixed inset-0 z-40 bg-black/58 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <m.div
              className="mx-4 mt-20 overflow-hidden rounded-[8px] border border-white/[0.12] bg-[var(--surface-800)]/92 shadow-md backdrop-blur-sm"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.18, 1, 0.32, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <nav className="flex flex-col p-2">
                {siteContent.config.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-[6px] px-4 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] transition hover:bg-white/[0.06] hover:text-[var(--text-100)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="border-t border-white/[0.08] p-3">
                <a
                  href={siteContent.config.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-[8px] bg-white px-4 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-black shadow-sm"
                >
                  Book a Demo
                </a>
              </div>
            </m.div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
