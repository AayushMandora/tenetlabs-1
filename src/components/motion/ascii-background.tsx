"use client";

export function AsciiBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg-950)]" />

      {/* Simplified, static gradient */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(900px 520px at 50% 0%, rgba(124,58,237,0.15), transparent 65%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--dots-color) 0.7px, transparent 0.8px)",
          backgroundSize: "9px 9px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[var(--bg-950)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[var(--bg-950)] to-transparent" />
    </div>
  );
}
