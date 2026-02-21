import { siteContent } from "@/content/site-content";

import { Button } from "@/components/shared/button";

export function HeaderSection() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[rgba(7,7,9,0.95)] backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4 px-6 py-3.5 sm:px-10 md:px-16">
        <a href="#top" className="inline-flex items-center gap-3">
          <img src="/logo.png" alt="FAF0 Logo" className="h-8 w-8 object-cover rounded-none" />
          <span className="font-sans font-bold text-2xl tracking-widest text-white">
            FAF0
          </span>
        </a>

        <nav className="hidden items-center gap-0 border border-white/[0.06] bg-white/[0.02] md:flex">
          {siteContent.config.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-r border-white/[0.06] px-5 py-3 text-sm font-medium text-[var(--text-muted)] transition duration-200 last:border-r-0 hover:bg-white/[0.04] hover:text-[var(--text-100)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href={siteContent.config.calendlyUrl} variant="ghost" target="_blank" rel="noreferrer">
          Book a Demo
        </Button>
      </div>
    </header>
  );
}
