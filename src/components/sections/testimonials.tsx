import { siteContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/cn";
import { panelBase, panelHover } from "@/lib/ui-classes";

/* Star rating visual */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[var(--accent-primary)]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* Avatar initials */
function Avatar({ name }: { name: string }) {
  const parts = name.split(" ");
  const initials = (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-[#171717] text-sm font-bold text-[var(--accent-primary)]">
      {initials}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="space-y-8">
      <Reveal>
        <SectionHeading eyebrow="Testimonials" title={siteContent.testimonials.heading} />
      </Reveal>

      <Stagger className="grid gap-4 lg:grid-cols-3">
        {siteContent.testimonials.items.map((testimonial) => (
          <StaggerItem key={testimonial.name} className="h-full">
            <article className={cn("group relative flex h-full flex-col overflow-hidden rounded-none border border-white/5 bg-[#0a0a0b] p-7 transition-colors hover:border-white/10")}>
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 h-[2px] w-full bg-white/60 opacity-75" />

              <div className="flex flex-1 flex-col justify-between">
                {/* Stars and big quote */}
                <div>
                  <Stars />
                  <blockquote className="relative mt-5">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-2 -top-4 select-none font-display text-5xl leading-none text-white/[0.03]"
                    >
                      &ldquo;
                    </span>
                    <p className="relative text-[0.95rem] font-medium leading-relaxed text-white/90">
                      {testimonial.quote}
                    </p>
                  </blockquote>
                </div>

                {/* Bottom author and badge row */}
                <div>
                  {/* Author row */}
                  <div className="mt-8 flex flex-col gap-6 border-t border-white/5 pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar name={testimonial.name} />
                      <div className="min-w-0">
                        <p className="font-display text-[0.95rem] font-semibold text-white truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-[0.8rem] text-white/50 truncate">
                          {testimonial.role} · {testimonial.company}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
