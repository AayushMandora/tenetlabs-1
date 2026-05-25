"use client";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/shared/button";

interface SlabProps {
  z: number;
  width?: number;
  height?: number;
  rx?: number;
  thickness?: number;
  isGlass?: boolean;
  faceColor?: string;
  strokeColor?: string;
  extrusionColor?: string;
  extrusionStroke?: string;
  shadowFilter?: string;
  children?: React.ReactNode;
}

function SvgSlab({ 
  z, 
  width = 220, 
  height = 220, 
  rx = 28, 
  thickness = 10, 
  isGlass = false,
  faceColor = "url(#slab-face-grad)", 
  strokeColor = "url(#slab-stroke-grad)",
  extrusionColor = "url(#slab-extrusion-grad)",
  extrusionStroke = "url(#slab-edge-grad)",
  shadowFilter = "url(#slab-shadow)",
  children 
}: SlabProps) {
  const cx = 270;
  const cy = 310;

  // We draw the extrusion layers from z to z + thickness
  const layers = [];
  for (let i = 0; i < thickness; i++) {
    const applyShadow = i === 0 && shadowFilter;
    layers.push(
      <g 
        key={i} 
        transform={`translate(${cx}, ${cy - (z + i)}) matrix(0.866025, 0.5, -0.866025, 0.5, 0, 0)`} 
        filter={applyShadow ? shadowFilter : undefined}
      >
        <rect 
          x={-width / 2} 
          y={-height / 2} 
          width={width} 
          height={height} 
          rx={rx} 
          fill={isGlass ? "rgba(255, 255, 255, 0.02)" : extrusionColor} 
          stroke={isGlass ? "url(#glass-edge-grad)" : extrusionStroke} 
          strokeWidth={1}
        />
      </g>
    );
  }

  return (
    <g>
      {/* Extrusion thickness layers */}
      {layers}

      {/* Top Face */}
      <g transform={`translate(${cx}, ${cy - (z + thickness)}) matrix(0.866025, 0.5, -0.866025, 0.5, 0, 0)`}>
        <rect 
          x={-width / 2} 
          y={-height / 2} 
          width={width} 
          height={height} 
          rx={rx} 
          fill={isGlass ? "url(#glass-face-grad)" : faceColor} 
          stroke={isGlass ? "url(#glass-stroke-grad)" : strokeColor} 
          strokeWidth={1.5}
        />
        {/* Content */}
        {children}
      </g>
    </g>
  );
}

export function HeroSection() {
  // Floor grid points helper
  const project = (x: number, y: number, z: number) => {
    const cx = 270;
    const cy = 310;
    return {
      x: cx + 0.866025 * (x - y),
      y: cy + 0.5 * (x + y) - z
    };
  };

  const gridLines = [];
  const gridSize = 140; // grid from -140 to 140
  const gridStep = 35; // lines every 35px
  const zFloor = -120;

  for (let i = -gridSize; i <= gridSize; i += gridStep) {
    // Lines along X
    const p1 = project(-gridSize, i, zFloor);
    const p2 = project(gridSize, i, zFloor);
    gridLines.push(
      <line 
        key={`x-${i}`} 
        x1={p1.x} 
        y1={p1.y} 
        x2={p2.x} 
        y2={p2.y} 
        stroke="rgba(255, 85, 17, 0.06)" 
        strokeWidth={1} 
      />
    );

    // Lines along Y
    const p3 = project(i, -gridSize, zFloor);
    const p4 = project(i, gridSize, zFloor);
    gridLines.push(
      <line 
        key={`y-${i}`} 
        x1={p3.x} 
        y1={p3.y} 
        x2={p4.x} 
        y2={p4.y} 
        stroke="rgba(255, 85, 17, 0.06)" 
        strokeWidth={1} 
      />
    );
  }

  // Corner crop marks
  const cropMarks = [];
  const markLen = 15;
  // Corner 1: top-left (-gridSize, -gridSize)
  const c1 = project(-gridSize, -gridSize, zFloor);
  const c1_x = project(-gridSize + markLen, -gridSize, zFloor);
  const c1_y = project(-gridSize, -gridSize + markLen, zFloor);
  cropMarks.push(<line key="c1-x" x1={c1.x} y1={c1.y} x2={c1_x.x} y2={c1_x.y} stroke="rgba(255, 85, 17, 0.25)" strokeWidth={1.5} />);
  cropMarks.push(<line key="c1-y" x1={c1.x} y1={c1.y} x2={c1_y.x} y2={c1_y.y} stroke="rgba(255, 85, 17, 0.25)" strokeWidth={1.5} />);

  // Corner 2: top-right (gridSize, -gridSize)
  const c2 = project(gridSize, -gridSize, zFloor);
  const c2_x = project(gridSize - markLen, -gridSize, zFloor);
  const c2_y = project(gridSize, -gridSize + markLen, zFloor);
  cropMarks.push(<line key="c2-x" x1={c2.x} y1={c2.y} x2={c2_x.x} y2={c2_x.y} stroke="rgba(255, 85, 17, 0.25)" strokeWidth={1.5} />);
  cropMarks.push(<line key="c2-y" x1={c2.x} y1={c2.y} x2={c2_y.x} y2={c2_y.y} stroke="rgba(255, 85, 17, 0.25)" strokeWidth={1.5} />);

  // Corner 3: bottom-right (gridSize, gridSize)
  const c3 = project(gridSize, gridSize, zFloor);
  const c3_x = project(gridSize - markLen, gridSize, zFloor);
  const c3_y = project(gridSize, gridSize - markLen, zFloor);
  cropMarks.push(<line key="c3-x" x1={c3.x} y1={c3.y} x2={c3_x.x} y2={c3_x.y} stroke="rgba(255, 85, 17, 0.25)" strokeWidth={1.5} />);
  cropMarks.push(<line key="c3-y" x1={c3.x} y1={c3.y} x2={c3_y.x} y2={c3_y.y} stroke="rgba(255, 85, 17, 0.25)" strokeWidth={1.5} />);

  // Corner 4: bottom-left (-gridSize, gridSize)
  const c4 = project(-gridSize, gridSize, zFloor);
  const c4_x = project(-gridSize + markLen, gridSize, zFloor);
  const c4_y = project(-gridSize, gridSize - markLen, zFloor);
  cropMarks.push(<line key="c4-x" x1={c4.x} y1={c4.y} x2={c4_x.x} y2={c4_x.y} stroke="rgba(255, 85, 17, 0.25)" strokeWidth={1.5} />);
  cropMarks.push(<line key="c4-y" x1={c4.x} y1={c4.y} x2={c4_y.x} y2={c4_y.y} stroke="rgba(255, 85, 17, 0.25)" strokeWidth={1.5} />);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-transparent pt-12 pb-12 lg:pt-24 lg:pb-20 z-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <Stagger className="space-y-6 flex flex-col items-start" delayChildren={0.05} staggerChildren={0.09}>
              <StaggerItem>
                <h1 className="font-display text-[2.5rem] leading-[1.08] font-black tracking-tight text-[var(--text-100)] sm:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] text-left">
                  Ship Your <span className="font-syne font-black italic tracking-wide text-[var(--accent-primary)]">MVP</span> <br className="hidden sm:inline" />
                  <span className="font-serif font-medium text-[var(--text-soft)] italic tracking-normal">in 28 Days.</span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="max-w-lg text-[0.95rem] md:text-[1rem] leading-relaxed text-[var(--text-muted)] font-medium">
                  {siteContent.hero.subheadline}
                </p>
              </StaggerItem>

              <StaggerItem className="flex flex-wrap items-center gap-4 pt-2">
                <Button href={siteContent.hero.primaryCta.href} className="px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-none shadow-lg">
                  {siteContent.hero.primaryCta.label}
                </Button>
                <Button href={siteContent.hero.secondaryCta.href} variant="secondary" className="px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-none shadow-lg">
                  {siteContent.hero.secondaryCta.label}
                </Button>
              </StaggerItem>
            </Stagger>
          </div>

          {/* Right Column: Mathematical 2D SVG Projected Isometric Stack (Skan AI style) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center pt-12 pb-8 lg:pt-0 lg:pb-0 overflow-visible">
            <Reveal className="w-full flex items-center justify-center overflow-visible">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center overflow-visible">
                
                <svg 
                  viewBox="0 0 540 620" 
                  className="w-full h-full overflow-visible select-none"
                  style={{ filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.45))" }}
                >
                  <defs>
                    {/* Shadow filters */}
                    <filter id="slab-shadow" x="-35%" y="-35%" width="170%" height="170%">
                      <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000000" floodOpacity="0.75" />
                    </filter>
                    <filter id="glass-shadow" x="-35%" y="-35%" width="170%" height="170%">
                      <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.45" />
                    </filter>

                    {/* Gradients */}
                    <linearGradient id="slab-face-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e2330" />
                      <stop offset="50%" stopColor="#121620" />
                      <stop offset="100%" stopColor="#080a0f" />
                    </linearGradient>

                    <linearGradient id="slab-stroke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.22)" />
                      <stop offset="35%" stopColor="rgba(255, 255, 255, 0.08)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.01)" />
                    </linearGradient>

                    <linearGradient id="slab-extrusion-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#151a25" />
                      <stop offset="100%" stopColor="#040507" />
                    </linearGradient>

                    <linearGradient id="slab-edge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#363f54" />
                      <stop offset="30%" stopColor="#171b26" />
                      <stop offset="100%" stopColor="#040506" />
                    </linearGradient>

                    {/* Glass plate gradients */}
                    <linearGradient id="glass-face-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.075)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.01)" />
                    </linearGradient>

                    <linearGradient id="glass-stroke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.38)" />
                      <stop offset="40%" stopColor="rgba(255, 255, 255, 0.15)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.03)" />
                    </linearGradient>

                    <linearGradient id="glass-edge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.18)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
                    </linearGradient>

                    {/* Chrome logo gradients */}
                    <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#d1d5db" />
                      <stop offset="50%" stopColor="#9ca3af" />
                      <stop offset="85%" stopColor="#4b5563" />
                      <stop offset="100%" stopColor="#1f2937" />
                    </linearGradient>

                    <linearGradient id="orange-chrome-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff9f66" />
                      <stop offset="40%" stopColor="#ff7733" />
                      <stop offset="50%" stopColor="#ff5511" />
                      <stop offset="85%" stopColor="#cc3300" />
                      <stop offset="100%" stopColor="#801a00" />
                    </linearGradient>
                  </defs>

                  {/* Floor Grid Base */}
                  <g>
                    {gridLines}
                    {cropMarks}
                  </g>

                  {/* Slab 1: Base Foundation (z = -80) */}
                  <SvgSlab z={-80} thickness={10}>
                    <text 
                      x={-95} 
                      y={85} 
                      fill="rgba(255,255,255,0.18)" 
                      fontSize={9} 
                      fontFamily="monospace" 
                      letterSpacing="0.15em"
                    >
                      STAGE_01_BASE
                    </text>
                  </SvgSlab>

                  {/* Slab 2: Database Schema (z = -45) */}
                  <SvgSlab z={-45} thickness={10}>
                    <text 
                      x={-95} 
                      y={85} 
                      fill="rgba(255,255,255,0.18)" 
                      fontSize={9} 
                      fontFamily="monospace" 
                      letterSpacing="0.15em"
                    >
                      STAGE_02_DATA
                    </text>
                  </SvgSlab>

                  {/* Slab 3: Core Engine (z = -10) */}
                  <SvgSlab z={-10} thickness={10}>
                    <text 
                      x={-95} 
                      y={85} 
                      fill="rgba(255,255,255,0.18)" 
                      fontSize={9} 
                      fontFamily="monospace" 
                      letterSpacing="0.15em"
                    >
                      STAGE_03_ENGN
                    </text>
                  </SvgSlab>

                  {/* Slab 4: Translucent Feature Glass (z = 25) */}
                  <SvgSlab z={25} thickness={4} isGlass={true} shadowFilter="url(#glass-shadow)">
                    {/* Asymmetric rounded capsules representing MVP build stages */}
                    
                    {/* Card 1: Product UI/UX (Top-Left) */}
                    <g>
                      <rect x={-95} y={-95} width={85} height={85} rx={14} fill="#0b0e14" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                      <circle cx={-25} cy={-80} r={2.5} fill="#10b981" />
                      <text x={-80} y={-64} fill="#ffffff" fontSize={9.5} fontFamily="var(--font-sans)" fontWeight="bold" letterSpacing="0.02em">
                        Product
                      </text>
                      <text x={-80} y={-52} fill="#ffffff" fontSize={9.5} fontFamily="var(--font-sans)" fontWeight="bold" letterSpacing="0.02em">
                        UI / UX
                      </text>
                      <text x={-80} y={-25} fill="rgba(255,255,255,0.35)" fontSize={6} fontFamily="monospace" letterSpacing="0.05em">
                        STAGE 01 / FIGMA
                      </text>
                    </g>

                    {/* Card 2: AI Pipelines (Top-Right) */}
                    <g>
                      <rect x={10} y={-95} width={85} height={85} rx={14} fill="#0b0e14" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                      <circle cx={80} cy={-80} r={2.5} fill="#10b981" />
                      <text x={25} y={-64} fill="#ffffff" fontSize={9.5} fontFamily="var(--font-sans)" fontWeight="bold" letterSpacing="0.02em">
                        AI
                      </text>
                      <text x={25} y={-52} fill="#ffffff" fontSize={9.5} fontFamily="var(--font-sans)" fontWeight="bold" letterSpacing="0.02em">
                        Pipelines
                      </text>
                      <text x={25} y={-25} fill="rgba(255,255,255,0.35)" fontSize={6} fontFamily="monospace" letterSpacing="0.05em">
                        STAGE 02 / AGENTS
                      </text>
                    </g>

                    {/* Card 3: Backend & DB (Bottom-Left Pill) */}
                    <g>
                      <rect x={-95} y={10} width={85} height={60} rx={12} fill="#0b0e14" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                      <circle cx={-25} cy={25} r={2.5} fill="#10b981" />
                      <text x={-80} y={34} fill="#ffffff" fontSize={9.5} fontFamily="var(--font-sans)" fontWeight="bold" letterSpacing="0.02em">
                        Backend & DB
                      </text>
                      <text x={-80} y={54} fill="rgba(255,255,255,0.35)" fontSize={6} fontFamily="monospace" letterSpacing="0.05em">
                        STAGE 03 / CORE
                      </text>
                    </g>

                    {/* Card 4: Deploy & Scale (Bottom-Right Pill) */}
                    <g>
                      <rect x={10} y={10} width={85} height={60} rx={12} fill="#0b0e14" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                      <circle cx={80} cy={25} r={2.5} fill="#10b981" />
                      <text x={25} y={34} fill="#ffffff" fontSize={9.5} fontFamily="var(--font-sans)" fontWeight="bold" letterSpacing="0.02em">
                        Deploy & Scale
                      </text>
                      <text x={25} y={54} fill="rgba(255,255,255,0.35)" fontSize={6} fontFamily="monospace" letterSpacing="0.05em">
                        STAGE 04 / CLOUD
                      </text>
                    </g>
                  </SvgSlab>

                  {/* Slab 5: Top Crown Plate (z = 70) */}
                  <SvgSlab z={70} thickness={12} width={200} height={200} rx={26}>
                    {/* Cybernetic Brand Emblem */}
                    <g>
                      <circle cx={0} cy={-32} r={20} fill="#07090d" stroke="rgba(255,255,255,0.12)" strokeWidth={1.5} />
                      <circle cx={0} cy={-32} r={13} fill="none" stroke="#ff5511" strokeWidth={1.5} strokeDasharray="5 3" />
                      <circle cx={0} cy={-32} r={6} fill="url(#chrome-grad)" />
                    </g>

                    {/* 3D Chrome Text Logo */}
                    <g>
                      {/* Logo Shadow Base */}
                      <text 
                        x={0} 
                        y={24} 
                        textAnchor="middle" 
                        fontFamily="var(--font-sans)" 
                        fontWeight={900} 
                        fontSize={20} 
                        letterSpacing="0.12em" 
                        fill="#000000" 
                        opacity={0.8}
                      >
                        TENETLABS
                      </text>
                      {/* Main embossed text */}
                      <text 
                        x={0} 
                        y={22} 
                        textAnchor="middle" 
                        fontFamily="var(--font-sans)" 
                        fontWeight={900} 
                        fontSize={20} 
                        letterSpacing="0.12em"
                      >
                        <tspan fill="url(#chrome-grad)">TENET</tspan>
                        <tspan fill="url(#orange-chrome-grad)">LABS</tspan>
                      </text>
                    </g>

                    {/* Subtext */}
                    <text 
                      x={0} 
                      y={48} 
                      textAnchor="middle" 
                      fill="rgba(255, 255, 255, 0.45)" 
                      fontFamily="monospace" 
                      fontSize={8} 
                      letterSpacing="0.25em"
                    >
                      [ STAGE 04: SHIP ]
                    </text>
                  </SvgSlab>
                </svg>

              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
