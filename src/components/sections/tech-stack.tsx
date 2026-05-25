"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";

import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { CornerGuides } from "@/components/shared/corner-guides";

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

import { cn } from "@/lib/cn";

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

function renderTechIcon(item: string) {
  const fileName = techIconFiles[item];
  if (!fileName) {
    return (
      <span className="text-[0.6rem] font-bold text-[var(--text-muted)]">
        {item.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  const isMonochrome = monochromeTechs.has(item);
  return (
    <img
      src={`/icons/${fileName}`}
      alt={`${item} logo`}
      className={cn("h-5 w-5 object-contain", isMonochrome && "logo-monochrome")}
    />
  );
}

export function TechStackSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Flatten all tech items from all categories
  const allTechItems = siteContent.techStack.categories.flatMap((category) => category.items);

  return (
    <section className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Technology Stack"
          title={siteContent.techStack.heading}
          description={siteContent.techStack.subheading}
        />
      </Reveal>

      <div className="relative border border-[var(--border-color)] bg-[var(--surface-800)]/5 p-6 sm:p-8 overflow-hidden space-y-6 rounded-2xl">
        <CornerGuides label="tech_spec_03" />
        <Stagger className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {allTechItems.map((item) => {
            return (
              <StaggerItem key={item}>
                <div
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group/chip flex items-center gap-2.5 py-2 px-1 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-200 group-hover/chip:scale-115">
                    {renderTechIcon(item)}
                  </div>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--text-soft)]/60 group-hover/chip:text-[var(--text-100)] transition-colors duration-200">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Live Metadata Display Box - unified below the grid */}
        <div className="min-h-[36px] flex items-center justify-center border-t border-[var(--border-color)] pt-4">
          <AnimatePresence mode="wait">
            {hoveredItem ? (
              <m.div
                key={hoveredItem}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.12 }}
                className="text-[0.68rem] font-mono leading-relaxed text-[var(--text-soft)]/60 text-center max-w-2xl"
              >
                <strong className="text-[var(--text-100)] font-bold mr-2 uppercase tracking-widest">{hoveredItem}:</strong>
                {techDescriptions[hoveredItem] ?? "Modern system integration component."}
              </m.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
