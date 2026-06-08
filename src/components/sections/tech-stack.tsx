"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";

import { MouseGlow } from "@/components/motion/mouse-glow";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { CornerGuides } from "@/components/shared/corner-guides";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/cn";

const techDescriptions: Record<string, string> = {
  React: "Declarative UI component development for complex frontend structures.",
  "Next.js": "Production React framework for SSR, advanced routing, and SEO optimization.",
  TypeScript: "Type-safe JavaScript ensuring fewer runtime errors and clean interfaces.",
  "Tailwind CSS": "Utility-first modern styling for lightweight, fluid layouts.",
  "Vue.js": "Approachable, lightweight progressive framework for interface builds.",
  "Node.js": "V8 engine runtime for scaling low-latency event-driven microservices.",
  Python: "Robust scripting power behind data science, API pipelines, and AI engineering.",
  FastAPI: "Python web API framework featuring auto OpenAPI interactive documentation.",
  Express: "Highly minimal, flexible REST api builder for Node backend services.",
  PostgreSQL: "Advanced open-source relational database securing mission-critical transactions.",
  MongoDB: "Flexible JSON document store enabling dynamic and fast schema evolution.",
  "OpenAI GPT-4": "SOTA foundational models for reasoning, data processing, and chatbot agents.",
  "Anthropic Claude": "Sophisticated LLM models designed for deep programming logic and coding.",
  LangChain: "Multi-agent workflows orchestration tool chaining LLMs to real utilities.",
  "Vector Databases": "Semantic search database mapping context injections to vector spaces.",
  "Custom Models": "Fine-tuned open-source model architecture targetting specific company domains.",
  AWS: "Secure scalable cloud computing platform powering multi-region deployments.",
  Vercel: "High-performance edge host optimized for frontends and serverless APIs.",
  Docker: "Environmental sandboxing containers creating dev-to-prod exact parity.",
  "CI/CD": "Automated deployment flows to build, test, and release clean code packages.",
  Serverless: "On-demand execution instances scaling immediately down to zero.",
  Stripe: "Leading global payment processor for checkout paths and billing.",
  Zapier: "Codeless pipelines connecting web apps without custom integration builds.",
  Slack: "Automated alert feeds sending notification updates to company workspaces.",
  "CRM APIs": "Synchronize dynamic client profiles with HubSpot, Salesforce, and custom CRMs.",
  "REST & GraphQL": "API specifications resolving data queries cleanly between backend and client.",
};

const techIconFiles: Record<string, string> = {
  React: "react.svg",
  "Next.js": "nextjs.svg",
  TypeScript: "typescript.svg",
  "Tailwind CSS": "tailwindcss.svg",
  "Vue.js": "vue.svg",
  "Node.js": "nodejs.svg",
  Python: "python.svg",
  FastAPI: "fastapi.svg",
  Express: "express.svg",
  PostgreSQL: "postgresql.svg",
  MongoDB: "mongodb.svg",
  "OpenAI GPT-4": "openai.svg",
  "Anthropic Claude": "claude.svg",
  LangChain: "langchain.svg",
  "Vector Databases": "vectordb.svg",
  "Custom Models": "custommodels.svg",
  AWS: "aws.svg",
  Vercel: "vercel.svg",
  Docker: "docker.svg",
  "CI/CD": "cicd.svg",
  Serverless: "serverless.svg",
  Stripe: "stripe.svg",
  Zapier: "zapier.svg",
  Slack: "slack.svg",
  "CRM APIs": "crm.svg",
  "REST & GraphQL": "graphql.svg",
};

const monochromeTechs = new Set([
  "Next.js",
  "Vercel",
  "OpenAI GPT-4",
  "Express",
  "MongoDB",
  "Serverless",
  "CI/CD",
  "Vector Databases",
  "AWS",
]);

function TechIcon({ item }: { item: string }) {
  const fileName = techIconFiles[item];

  if (!fileName) {
    return <span className="text-[0.62rem] font-black text-[var(--text-muted)]">{item.slice(0, 2).toUpperCase()}</span>;
  }

  return (
    <img
      src={`/icons/${fileName}`}
      alt={`${item} logo`}
      loading="lazy"
      className={cn("h-5 w-5 object-contain opacity-85", monochromeTechs.has(item) && "logo-monochrome")}
    />
  );
}

export function TechStackSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="Technology Stack"
          title={siteContent.techStack.heading}
          description={siteContent.techStack.subheading}
        />
      </Reveal>

      <div className="relative rounded-[8px] border border-white/[0.1] bg-white/[0.025] p-3 backdrop-blur-sm sm:p-4">
        <CornerGuides label="tech_spec_03" />
        <Stagger className="grid gap-[24px] md:grid-cols-2 xl:grid-cols-5" delayChildren={0.04}>
          {siteContent.techStack.categories.map((category, categoryIndex) => (
            <StaggerItem
              key={category.title}
              className={cn("h-full", categoryIndex === 1 && "xl:translate-y-8", categoryIndex === 3 && "xl:translate-y-8")}
            >
              <MouseGlow
                className="h-full"
                glowColor="var(--glow-1)"
                containerClassName="relative h-full p-5"
              >
                <p className="relative z-10 font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--accent-support)]">
                  {category.title}
                </p>

                <div className="relative z-10 mt-5 space-y-2">
                  {category.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="group/chip flex w-full items-center gap-3 rounded-[8px] border border-white/[0.08] bg-black/18 px-3 py-3 text-left transition hover:border-white/[0.18] hover:bg-white/[0.06]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[7px] border border-white/[0.08] bg-white/[0.045]">
                        <TechIcon item={item} />
                      </span>
                      <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--text-soft)] transition group-hover/chip:text-[var(--text-100)]">
                        {item}
                      </span>
                    </button>
                  ))}
                </div>
              </MouseGlow>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-4 min-h-20 rounded-[8px] border border-white/[0.08] bg-black/20 px-5 py-4">
          <AnimatePresence mode="wait">
            {hoveredItem ? (
              <m.div
                key={hoveredItem}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="text-sm font-medium leading-relaxed text-[var(--text-muted)]"
              >
                <strong className="mr-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--text-100)]">
                  {hoveredItem}:
                </strong>
                {techDescriptions[hoveredItem] ?? "Modern system integration component."}
              </m.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
