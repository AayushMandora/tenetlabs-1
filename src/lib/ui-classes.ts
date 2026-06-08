/** Premium glass surfaces shared across sections. */
export const panelBase =
  "rounded-[8px] border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-sm backdrop-blur-sm transition duration-300 ease-out";

export const panelHover =
  "hover:-translate-y-0.5 hover:border-[var(--panel-hover-border)] hover:bg-[var(--panel-hover-bg)] hover:shadow-md";

export const subtlePanel =
  "rounded-[8px] border border-[var(--border-color)] bg-[rgba(255,255,255,0.035)] backdrop-blur-sm";

export const shellFrame =
  "relative overflow-hidden rounded-[8px] border border-[var(--panel-border)] bg-[var(--bg-950)]/90 backdrop-blur-sm";

export const shellBloom =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_0%_0%,var(--glow-1),transparent_70%),radial-gradient(700px_400px_at_100%_0%,var(--glow-2),transparent_70%)]";

export const shimmerLine =
  "h-3 bg-[linear-gradient(120deg,var(--border-color)_10%,rgba(128,128,128,0.1)_45%,var(--border-color)_72%)] bg-[length:220%_100%] animate-[shimmer_1.9s_linear_infinite]";
