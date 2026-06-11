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
    <footer className="pt-6 w-full text-left">
      <div className="grid gap-[24px] lg:gap-[32px] rounded-none border border-[var(--panel-border)] bg-[var(--panel-bg)] p-[20px] md:p-[32px] lg:p-[40px] sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
        <article className="space-y-4">
          <a href="#top" className="inline-flex items-center gap-3">
            <span className="font-sans font-black text-[20px] tracking-widest text-[var(--foreground)]">TENETLABS</span>
          </a>
          <p className="max-w-xs text-[14px] leading-[1.6] text-neutral-500 dark:text-neutral-400">{siteContent.config.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {siteContent.config.socialLinks.map((social) => {
              const Icon = SocialIconMap[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-none border border-[var(--panel-border)] bg-[var(--text-100)]/[0.02] text-neutral-500 dark:text-neutral-400 transition-all hover:border-[var(--panel-hover-border)] hover:bg-[var(--text-100)]/[0.10] hover:text-[var(--foreground)]"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : <span className="text-[12px]">{social.label}</span>}
                </a>
              );
            })}
          </div>
        </article>

        <article className="space-y-2">
          <h3 className="font-sans text-[14px] font-bold uppercase tracking-wider text-[var(--foreground)]">Services</h3>
          {services.map((item) => (
            <p key={item} className="text-[13px] text-neutral-500 dark:text-neutral-400">
              {item}
            </p>
          ))}
        </article>

        <article className="space-y-2">
          <h3 className="font-sans text-[14px] font-bold uppercase tracking-wider text-[var(--foreground)]">Company</h3>
          {company.map((item) => (
            <p key={item} className="text-[13px] text-neutral-500 dark:text-neutral-400">
              {item}
            </p>
          ))}
        </article>

        <article className="space-y-2">
          <h3 className="font-sans text-[14px] font-bold uppercase tracking-wider text-[var(--foreground)]">Resources</h3>
          {resources.map((item) => (
            <p key={item} className="text-[13px] text-neutral-500 dark:text-neutral-400">
              {item}
            </p>
          ))}
        </article>

        <article className="space-y-2">
          <h3 className="font-sans text-[14px] font-bold uppercase tracking-wider text-[var(--foreground)]">Contact</h3>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400">{siteContent.config.email}</p>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400">{siteContent.config.location}</p>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400">{siteContent.config.responseTime}</p>
        </article>
      </div>

      {/* Outlined schematic letters spelling T E N E T L A B S */}
      <div className="mt-12 mb-8 select-none text-center overflow-hidden w-full">
        <h1 className="font-['GeistPixelSquare'] text-[clamp(2.2rem,8vw,7.5rem)] font-black uppercase tracking-[0.18em] text-transparent [-webkit-text-stroke:1px_var(--line-strong)] opacity-70 leading-none">
          TENETLABS
        </h1>
      </div>

      <p className="px-1 py-4 text-[12px] text-neutral-400 dark:text-neutral-500 text-center sm:text-left">
        &copy; {new Date().getFullYear()} {siteContent.config.agencyName}. All rights reserved.
      </p>
    </footer>
  );
}
