"use client";

import React from "react";
import { techStackData } from "./tech-data";

export function TechStackSection() {
  return (
    <div className="space-y-6">
      {/* Section Subtext description */}
      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-left text-base sm:text-lg">
        We use the tools that power the world&apos;s fastest-growing companies.
      </p>

      {/* Tech showcase container */}
      <div className="tech-showcase">
        <div className="tech-card-grid" aria-label="Featured technology logos">
          {techStackData.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="tech-card"
                style={{ "--tech-color": tech.color } as React.CSSProperties}
                title={tech.name}
              >
                <Icon className="h-8 w-8" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
