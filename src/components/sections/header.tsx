"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/cn";

export function HeaderSection() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme ?? "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[5000] border-b border-[var(--line-soft)] bg-[var(--page-bg)]/80 backdrop-blur-xl h-14">
      <nav className="site-nav mx-auto h-full w-full max-w-[64rem] border-x border-[var(--line-soft)] grid grid-cols-[2.75rem_1fr_2.75rem]">
        {/* Brand Cell */}
        <a
          href="#top"
          className="pixel-brand flex h-full w-full items-center justify-center border-r border-[var(--line-soft)] text-sm font-black tracking-tight"
          aria-label="TenetLabs home"
        >
          TL
        </a>

        {/* Navigation Cell List */}
        <div className="nav-main flex min-w-0 items-center overflow-x-auto h-full scrollbar-none">
          <a href="#services" className="nav-cell">
            Services
          </a>
          <a href="#process" className="nav-cell">
            Process
          </a>
          <a href="#tech-stack" className="nav-cell">
            Tech Stack
          </a>
          <a href="#portfolio" className="nav-cell">
            Work
          </a>
          <a href="#pricing" className="nav-cell">
            Pricing
          </a>
          <a href="#faq" className="nav-cell">
            FAQ
          </a>
          <a href="#contact" className="nav-cell">
            Contact
          </a>
        </div>

        {/* Theme Toggle Cell */}
        <button
          onClick={toggleTheme}
          type="button"
          aria-label="Switch theme"
          className="flex h-full w-full items-center justify-center border-l border-[var(--line-soft)] text-neutral-600 hover:bg-[var(--module-hover)] dark:text-neutral-300 transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </nav>
    </header>
  );
}
