/** Cursor-style: flat, sharp, connected panels */
export const panelBase =
  "rounded-none border border-[var(--panel-border)] bg-[var(--panel-bg)] transition duration-200 ease-out";

export const panelHover =
  "hover:border-[var(--panel-hover-border)] hover:bg-[var(--panel-hover-bg)]";

export const subtlePanel =
  "rounded-none border border-[var(--border-color)] bg-[var(--bg-900)]/80";

export const shellFrame =
  "relative overflow-hidden rounded-none border border-[var(--panel-border)] bg-[var(--bg-950)]/99";

export const shellBloom =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_0%_0%,var(--glow-color),transparent_70%),radial-gradient(700px_400px_at_100%_0%,var(--glow-color),transparent_70%)]";

export const shimmerLine =
  "h-3 bg-[linear-gradient(120deg,var(--border-color)_10%,rgba(128,128,128,0.1)_45%,var(--border-color)_72%)] bg-[length:220%_100%] animate-[shimmer_1.9s_linear_infinite]";
