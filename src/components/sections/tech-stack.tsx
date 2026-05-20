import { Brain, Cloud, Database, GitMerge, Users } from "lucide-react";
import {
  SiAmazonwebservices,
  SiAnthropic,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSlack,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiZapier,
} from "react-icons/si";

import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase } from "@/lib/ui-classes";

/* ── Visual icon map for tech items ── */
const techColors: Record<string, string> = {
  React: "#61dafb", "Next.js": "#ffffff", TypeScript: "#3178c6",
  "Tailwind CSS": "#06b6d4", "Vue.js": "#c4c4c4",
  "Node.js": "#d4d4d4", Python: "#ffd343", FastAPI: "#f5f5f5",
  Express: "#c0c0c0", PostgreSQL: "#336791", MongoDB: "#a3a3a3",
  "OpenAI GPT-4": "#e5e7eb", "Anthropic Claude": "#c97c4a",
  LangChain: "#ecb94a", "Vector Databases": "#8b5cf6", "Custom Models": "#a78bfa",
  AWS: "#ff9900", Vercel: "#ffffff", Docker: "#2496ed",
  "CI/CD": "#f5f5f5", Serverless: "#f59e0b",
  Stripe: "#635bff", Zapier: "#ff4a00", Slack: "#4a154b",
  "CRM APIs": "#00aeef", "REST & GraphQL": "#e535ab",
};

const techIcons: Record<string, React.ElementType> = {
  React: SiReact, "Next.js": SiNextdotjs, TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss, "Vue.js": SiVuedotjs,
  "Node.js": SiNodedotjs, Python: SiPython, FastAPI: SiFastapi,
  Express: SiExpress, PostgreSQL: SiPostgresql, MongoDB: SiMongodb,
  "OpenAI GPT-4": SiOpenai, "Anthropic Claude": SiAnthropic,
  LangChain: SiLangchain, "Vector Databases": Database, "Custom Models": Brain,
  AWS: SiAmazonwebservices, Vercel: SiVercel, Docker: SiDocker,
  "CI/CD": GitMerge, Serverless: Cloud,
  Stripe: SiStripe, Zapier: SiZapier, Slack: SiSlack,
  "CRM APIs": Users, "REST & GraphQL": SiGraphql,
};

const techInitials: Record<string, string> = {
  React: "Re", "Next.js": "Nx", TypeScript: "TS", "Tailwind CSS": "TW", "Vue.js": "Vu",
  "Node.js": "No", Python: "Py", FastAPI: "FA", Express: "Ex", PostgreSQL: "PG", MongoDB: "Mo",
  "OpenAI GPT-4": "AI", "Anthropic Claude": "Cl", LangChain: "LC", "Vector Databases": "VD", "Custom Models": "CM",
  AWS: "AW", Vercel: "Ve", Docker: "Do", "CI/CD": "CD", Serverless: "SL",
  Stripe: "St", Zapier: "Za", Slack: "Sl", "CRM APIs": "CR", "REST & GraphQL": "GQ",
};

const categoryAccents: Record<string, string> = {
  Frontend: "rgba(97,218,251,0.18)",
  Backend: "rgba(212,212,212,0.18)",
  "AI & ML": "rgba(245,245,245,0.18)",
  Infrastructure: "rgba(36,150,237,0.18)",
  Integration: "rgba(99,91,255,0.18)",
};
const categoryGlow: Record<string, string> = {
  Frontend: "rgba(97,218,251,0.5)",
  Backend: "rgba(212,212,212,0.5)",
  "AI & ML": "rgba(245,245,245,0.5)",
  Infrastructure: "rgba(36,150,237,0.5)",
  Integration: "rgba(99,91,255,0.5)",
};

export function TechStackSection() {
  return (
    <section className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Technology Stack"
          title={siteContent.techStack.heading}
          description={siteContent.techStack.subheading}
        />
      </Reveal>

      <Stagger className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {siteContent.techStack.categories.map((category) => {
          const bgAccent = categoryAccents[category.title] ?? "rgba(255,255,255,0.06)";
          const glowColor = categoryGlow[category.title] ?? "rgba(255,255,255,0.3)";
          return (
            <StaggerItem key={category.title} className="h-full">
              <article className={cn(panelBase, "group relative h-full flex flex-col overflow-hidden rounded-none p-5 !border-white/5 !bg-[rgba(10,10,12,0.95)] !shadow-none")}>
                {/* Category glow strip */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-full opacity-30 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)` }}
                />
                {/* Category pill header */}
                <div
                  className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-none px-2.5 py-1"
                  style={{ background: bgAccent }}
                >
                  <span className="h-1.5 w-1.5 rounded-none" style={{ background: glowColor }} />
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/70">{category.title}</span>
                </div>

                {/* Tech logo grid */}
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((item) => {
                    const color = techColors[item] ?? "#94a3b8";
                    const initials = techInitials[item] ?? item.slice(0, 2).toUpperCase();
                    const Icon = techIcons[item];
                    return (
                      <div
                        key={item}
                        className="group/chip flex flex-col items-center justify-center gap-2 rounded-none border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.04]"
                      >
                        {/* Logo placeholder: colored monogram tile */}
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-none text-[0.6rem] font-black tracking-tight transition-transform duration-200 group-hover/chip:scale-110"
                          style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                        >
                          {Icon ? <Icon className="h-4 w-4" /> : initials}
                        </div>
                        <span className="text-center text-[0.65rem] font-medium leading-tight text-white/50 group-hover/chip:text-white/75">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
