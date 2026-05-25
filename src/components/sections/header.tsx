"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function HeaderSection() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    const rotateX = ((y - h / 2) / (h / 2)) * 2;
    const rotateY = -((x - w / 2) / (w / 2)) * 2;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <header className="sticky top-0 z-50 w-full pointer-events-none [transform-style:preserve-3d] select-none">
      {/* The main structural beam */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="pointer-events-auto w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] relative"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0px)`,
        }}
      >
        {/* Solid bottom edge (3D thickness of the beam) */}
        <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[var(--slab-side-bottom)] border-b border-[var(--panel-border)] pointer-events-none" style={{ transform: "translateY(100%) rotateX(-90deg)", transformOrigin: "top" }} />
        
        {/* Front Face of the Beam */}
        <div
          className="relative z-20 flex items-center justify-between px-4 sm:px-8 bg-[var(--header-bg)]/95 backdrop-blur-xl border-b border-[var(--panel-border)] shadow-[0_24px_48px_rgba(0,0,0,0.5)] min-h-[64px]"
          style={{
            transform: "translateZ(6px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Brand Badge */}
          <a
            href="#top"
            className="group relative inline-flex items-center gap-3 px-4 py-2 bg-[var(--panel-bg)] border border-[var(--panel-border)] transition-all duration-300 pointer-events-auto hover:bg-[var(--text-100)]/5"
            style={{ transform: "translateZ(8px)" }}
          >
            <img src="/logo.png" alt="TenetLabs Logo" className="h-6 w-6 object-cover rounded-full shadow-[0_0_8px_var(--slab-glow)]" />
            <span className="font-sans font-extrabold text-[0.7rem] sm:text-[0.8rem] tracking-[0.2em] text-[var(--text-100)] uppercase">
              TenetLabs
            </span>
          </a>

          {/* Navigation Slot */}
          <nav
            className={`relative hidden items-center gap-2 border border-[var(--panel-border)] md:flex py-2 px-3 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-[#050505] shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)]"
                : "bg-[var(--bg-900)] shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)]"
            }`}
            style={{ transform: "translateZ(2px)" }}
          >
            {siteContent.config.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative z-10 px-5 py-2 text-[0.68rem] font-bold uppercase tracking-widest text-[var(--text-muted)] transition-all duration-200 hover:text-[var(--text-100)] hover:bg-[var(--text-100)]/[0.05] border border-transparent hover:border-[var(--panel-border)]"
                style={{ transform: "translateZ(4px)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4" style={{ transform: "translateZ(8px)" }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative flex h-10 w-10 cursor-pointer items-center justify-center border border-[var(--panel-border)] bg-[var(--panel-bg)] text-[var(--text-soft)] shadow-md transition-all duration-200 hover:bg-[var(--text-100)]/10"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Book a Demo Button */}
            <a
              href={siteContent.config.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="relative max-[400px]:hidden inline-flex min-h-[40px] items-center justify-center px-6 text-[0.68rem] font-bold uppercase tracking-widest text-white border border-orange-600 bg-[#ff5511] shadow-[0_0_20px_var(--slab-glow)] transition-all duration-200 hover:brightness-110"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
