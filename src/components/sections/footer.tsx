import { siteContent } from "@/content/site-content";

import { SiLinkedin, SiX, SiGithub, SiDribbble } from "react-icons/si";

const services = [
  "Custom Web Development",
  "AI Chatbots",
  "AI Automation",
  "MVP Launch Program",
  "Maintenance & Support",
];

const company = ["About Us", "Case Studies", "Blog", "Careers", "Contact"];

const resources = ["How We Work", "Tech Stack", "Pricing", "FAQ", "Privacy Policy", "Terms of Service"];

const SocialIconMap: Record<string, React.ElementType> = {
  LinkedIn: SiLinkedin,
  Twitter: SiX,
  GitHub: SiGithub,
  Dribbble: SiDribbble,
};

export function FooterSection() {
  return (
    <footer className="pt-6">
      <div className="grid gap-4 rounded-none border border-[var(--panel-border)] bg-[var(--panel-bg)] p-4 sm:p-6 md:p-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
        <article className="space-y-4">
          <a href="#top" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="TenetLabs Logo" className="h-6 w-6 object-cover rounded-full" />
            <span className="font-sans font-bold text-2xl tracking-widest text-[var(--text-100)]">TenetLabs</span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">{siteContent.config.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {siteContent.config.socialLinks.map((social) => {
              const Icon = SocialIconMap[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-none border border-[var(--panel-border)] bg-[var(--text-100)]/[0.02] text-[var(--text-muted)] transition-all hover:border-[var(--panel-hover-border)] hover:bg-[var(--text-100)]/[0.10] hover:text-[var(--text-100)]"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : <span className="text-xs">{social.label}</span>}
                </a>
              );
            })}
          </div>
        </article>

        <article className="space-y-2">
          <h3 className="font-display text-lg text-[var(--text-100)]">Services</h3>
          {services.map((item) => (
            <p key={item} className="text-sm text-[var(--text-muted)]">
              {item}
            </p>
          ))}
        </article>

        <article className="space-y-2">
          <h3 className="font-display text-lg text-[var(--text-100)]">Company</h3>
          {company.map((item) => (
            <p key={item} className="text-sm text-[var(--text-muted)]">
              {item}
            </p>
          ))}
        </article>

        <article className="space-y-2">
          <h3 className="font-display text-lg text-[var(--text-100)]">Resources</h3>
          {resources.map((item) => (
            <p key={item} className="text-sm text-[var(--text-muted)]">
              {item}
            </p>
          ))}
        </article>

        <article className="space-y-2">
          <h3 className="font-display text-lg text-[var(--text-100)]">Contact</h3>
          <p className="text-sm text-[var(--text-muted)]">{siteContent.config.email}</p>
          <p className="text-sm text-[var(--text-muted)]">{siteContent.config.location}</p>
          <p className="text-sm text-[var(--text-muted)]">{siteContent.config.responseTime}</p>
        </article>
      </div>

      <p className="px-1 py-4 text-sm text-[var(--text-dim)]">
        (c) {new Date().getFullYear()} {siteContent.config.agencyName}. All rights reserved.
      </p>
    </footer>
  );
}
