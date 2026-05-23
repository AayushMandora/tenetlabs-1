"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Button } from "@/components/shared/button";

export function HeaderSection() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--header-bg)] backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-10 md:px-16">
        <a href="#top" className="inline-flex items-center gap-2 sm:gap-3">
          <img src="/logo.png" alt="TenetLabs Logo" className="h-6.5 w-6.5 sm:h-8 sm:w-8 object-cover rounded-full" />
          <span className="font-sans font-bold text-lg sm:text-2xl tracking-widest text-[var(--text-100)]">
            TenetLabs
          </span>
        </a>

        <nav className="hidden items-center gap-0 border border-[var(--border-color)] bg-[var(--text-100)]/[0.02] md:flex">
          {siteContent.config.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-r border-[var(--border-color)] px-5 py-3 text-sm font-medium text-[var(--text-muted)] transition duration-200 last:border-r-0 hover:bg-[var(--text-100)]/[0.04] hover:text-[var(--text-100)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 sm:h-10 sm:w-10 cursor-pointer items-center justify-center border border-[var(--border-color)] bg-[var(--text-100)]/[0.02] text-[var(--text-soft)] transition duration-200 hover:bg-[var(--text-100)]/[0.06] hover:text-[var(--text-100)] focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            ) : (
              <Moon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            )}
          </button>

          <Button
            href={siteContent.config.calendlyUrl}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            className="max-[400px]:hidden text-xs py-2 px-3 sm:text-sm"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
