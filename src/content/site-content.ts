export interface NavItem {
  label: string;
  href: string;
}

export type AccentTone = "bright" | "soft" | "muted";

export interface SiteConfig {
  agencyName: string;
  tagline: string;
  email: string;
  location: string;
  responseTime: string;
  calendlyUrl: string;
  nav: NavItem[];
  trustBadges: string[];
  clientLogos: string[];
  socialLinks: { label: string; href: string }[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export type ServiceIcon = "web" | "chat" | "automation" | "mvp";

export interface ServiceItem {
  icon: ServiceIcon;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  accent?: AccentTone;
}

export interface StepItem {
  step: string;
  title: string;
  timeline: string;
  description: string;
  deliverable: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface CaseStudy {
  name: string;
  tagline: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  perfectFor: string;
  includes: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badgeText?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  result: string;
}

export interface HeroVisualConfig {
  boardTitle: string;
  boardStatus: string;
  boardChips: string[];
  miniCards: { label: string; value: string; note: string; accent: AccentTone }[];
}

interface SiteContent {
  config: SiteConfig;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    visual: HeroVisualConfig;
  };
  socialProof: {
    heading: string;
    stats: StatItem[];
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  process: {
    heading: string;
    items: StepItem[];
  };
  techStack: {
    heading: string;
    subheading: string;
    categories: TechCategory[];
  };
  caseStudies: {
    heading: string;
    items: CaseStudy[];
  };
  whyChooseUs: {
    heading: string;
    items: { title: string; description: string }[];
  };
  pricing: {
    heading: string;
    subheading: string;
    plans: PricingPlan[];
    addons: string[];
  };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  testimonials: {
    heading: string;
    items: Testimonial[];
  };
  cta: {
    heading: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    secondaryText: string;
  };
}

export const siteContent: SiteContent = {
  config: {
    agencyName: "TenetLabs",
    tagline: "Launching tomorrow's products, today.",
    email: "hello@tenetlabs.dev",
    location: "United States",
    responseTime: "Within 24 hours",
    calendlyUrl: "https://calendly.com/tenetlabs/intro-call",
    nav: [
      { label: "Process", href: "#process" },
      { label: "Work", href: "#portfolio" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    trustBadges: ["28-Day Launch", "50+ Products Shipped", "AI-Powered"],
    clientLogos: ["NOVA", "PIVOTLY", "AERON", "CRISP FINTECH", "ZEPHYR AI", "STACKR"],
    socialLinks: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Dribbble", href: "#" },
    ],
  },
  hero: {
    eyebrow: "28-Day Launch | 50+ Products Shipped | AI-Powered",
    headline: "Ship Your MVP in 28 Days.",
    subheadline:
      "We build custom web platforms and intelligent AI solutions that turn your vision into market-ready products - fast.",
    primaryCta: { label: "Start Your Project", href: "#contact" },
    secondaryCta: { label: "View Our Work", href: "#portfolio" },
    visual: {
      boardTitle: "Live Sprint Board",
      boardStatus: "Building",
      boardChips: ["Design Locked", "API Ready", "Launch Prep"],
      miniCards: [
        {
          label: "Average Timeline",
          value: "28 days",
          note: "Market-ready MVP delivery sprint",
          accent: "bright",
        },
        {
          label: "On-Time Delivery",
          value: "95%",
          note: "Weekly milestones and transparent progress",
          accent: "soft",
        },
        {
          label: "Support Cost Reduction",
          value: "60%",
          note: "AI chatbot and automation impact",
          accent: "muted",
        },
      ],
    },
  },
  socialProof: {
    heading: "Trusted by founders and teams building the next big thing",
    stats: [
      { value: 50, suffix: "+", label: "MVPs Launched" },
      { value: 95, suffix: "%", label: "On-Time Delivery" },
      { value: 28, suffix: "-Day", label: "Average Timeline" },
    ],
  },
  services: {
    heading: "Everything You Need to Launch and Scale",
    subheading:
      "From concept to deployment, we handle the technical complexity so you can focus on growth.",
    items: [
      {
        icon: "web",
        title: "Custom Web Development",
        description:
          "Lightning-fast web applications built for scale. E-commerce platforms, SaaS dashboards, admin panels, and custom web solutions that grow with your business.",
        features: [
          "Responsive & mobile-optimized",
          "Scalable architecture",
          "Modern tech stack (React, Next.js, Node.js)",
          "Database design & optimization",
        ],
        ctaLabel: "Explore Web Development",
        ctaHref: "#contact",
        accent: "bright",
      },
      {
        icon: "chat",
        title: "AI Chatbots & Assistants",
        description:
          "Intelligent chatbots that understand context, automate support, and engage customers 24/7. Reduce support costs by 60% while improving satisfaction.",
        features: [
          "Custom-trained on your data",
          "Multi-channel deployment",
          "Natural language understanding",
          "CRM & tool integrations",
        ],
        ctaLabel: "Build Your Chatbot",
        ctaHref: "#contact",
        accent: "soft",
      },
      {
        icon: "automation",
        title: "AI Automation & Workflows",
        description:
          "Automate repetitive tasks and complex workflows with AI. From data processing to decision-making, we build systems that work while you sleep.",
        features: [
          "Process automation",
          "Document processing & OCR",
          "Intelligent routing & triggers",
          "API integrations & custom connectors",
        ],
        ctaLabel: "Automate Your Workflow",
        ctaHref: "#contact",
        accent: "muted",
      },
      {
        icon: "mvp",
        title: "28-Day MVP Launch",
        description:
          "Go from idea to market in just 28 days. Our proven sprint methodology delivers fully-functional MVPs that validate your concept and attract early users.",
        features: [
          "Weekly milestone reviews",
          "Core feature prioritization",
          "Launch-ready deployment",
          "Post-launch support included",
        ],
        ctaLabel: "Launch Your MVP",
        ctaHref: "#contact",
        accent: "bright",
      },
    ],
  },
  process: {
    heading: "From Concept to Launch in 4 Simple Steps",
    items: [
      {
        step: "01",
        title: "Discovery Call",
        timeline: "Day 1-2",
        description:
          "We dive deep into your vision, goals, and requirements. Together, we map out features, prioritize what matters, and create a clear roadmap.",
        deliverable: "Project brief & timeline",
      },
      {
        step: "02",
        title: "Design & Planning",
        timeline: "Day 3-7",
        description:
          "Our team creates wireframes, technical architecture, and visual designs. You'll see exactly what we're building before a single line of code is written.",
        deliverable: "Approved designs & tech spec",
      },
      {
        step: "03",
        title: "Build & Iterate",
        timeline: "Day 8-24",
        description:
          "Rapid development with weekly check-ins. Watch your product take shape in real-time. We build, you review, we refine.",
        deliverable: "Working beta version",
      },
      {
        step: "04",
        title: "Launch & Support",
        timeline: "Day 25-28",
        description:
          "Final testing, deployment, and training. We ensure a smooth launch and stay with you during the critical first weeks.",
        deliverable: "Live product + 30-day support",
      },
    ],
  },
  techStack: {
    heading: "Built with Modern, Battle-Tested Technology",
    subheading: "We use the tools that power the world's fastest-growing companies.",
    categories: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB"],
      },
      {
        title: "AI & ML",
        items: [
          "OpenAI GPT-4",
          "Anthropic Claude",
          "LangChain",
          "Vector Databases",
          "Custom Models",
        ],
      },
      {
        title: "Infrastructure",
        items: ["AWS", "Vercel", "Docker", "CI/CD", "Serverless"],
      },
      {
        title: "Integration",
        items: ["Stripe", "Zapier", "Slack", "CRM APIs", "REST & GraphQL"],
      },
    ],
  },
  caseStudies: {
    heading: "Products We've Launched",
    items: [
      {
        name: "E-commerce Platform for Sustainable Fashion",
        tagline: "Custom storefront with AI-powered recommendations",
        challenge: "What problem needed solving: conversion and retention consistency.",
        solution:
          "What we built: a high-performance storefront with personalized recommendations and a conversion-focused checkout flow.",
        results: ["Launched in 26 days", "500+ users in first month", "60% reduction in support tickets"],
        tech: ["Next.js", "Stripe", "OpenAI", "PostgreSQL"],
        ctaLabel: "View Case Study",
        ctaHref: "#contact",
      },
      {
        name: "SaaS Admin Dashboard for Project Management",
        tagline: "Real-time collaboration tools and analytics",
        challenge: "What problem needed solving: fragmented reporting and delayed decisions.",
        solution:
          "What we built: a centralized dashboard with role-based access, live collaboration, and operational analytics.",
        results: ["Launched in 28 days", "2.3x faster reporting", "44% fewer manual workflows"],
        tech: ["React", "Node.js", "Redis", "AWS"],
        ctaLabel: "View Case Study",
        ctaHref: "#contact",
      },
      {
        name: "AI Customer Support Chatbot for FinTech",
        tagline: "24/7 automated support handling 80% of inquiries",
        challenge: "What problem needed solving: rising support load and response delays.",
        solution:
          "What we built: a context-aware support chatbot with secure escalation and CRM synchronization.",
        results: ["80% inquiries automated", "60% support cost reduction", "Higher customer satisfaction"],
        tech: ["LangChain", "Vector DB", "FastAPI", "HubSpot"],
        ctaLabel: "View Case Study",
        ctaHref: "#contact",
      },
    ],
  },
  whyChooseUs: {
    heading: "Why Startups and Scaleups Choose Us",
    items: [
      {
        title: "Speed Without Compromise",
        description:
          "We've perfected the 28-day sprint. You get market-ready products without cutting corners on quality, security, or scalability.",
      },
      {
        title: "AI-First Approach",
        description:
          "Every solution we build is enhanced with AI where it matters. Smarter products, better user experiences, and competitive advantages baked in.",
      },
      {
        title: "Transparent Process",
        description:
          "No black boxes. You're involved every step with weekly demos, Slack access to the team, and real-time project tracking.",
      },
      {
        title: "Post-Launch Partnership",
        description:
          "We don't disappear after launch. Every project includes 30 days of support, and we're here when you're ready to scale.",
      },
      {
        title: "Technical Excellence",
        description:
          "Our team has built products for Y Combinator startups, enterprise clients, and everything in between. You're in expert hands.",
      },
      {
        title: "Fixed Scope, Fixed Price",
        description:
          "Know exactly what you're getting and what it costs. No surprise fees, no scope creep, no hourly billing ambiguity.",
      },
    ],
  },
  pricing: {
    heading: "Transparent Pricing for Every Stage",
    subheading: "Choose the package that fits your needs. Scale up as you grow.",
    plans: [
      {
        name: "MVP Launch",
        price: "Starting at $12,000",
        perfectFor: "Early-stage startups validating their idea",
        includes: [
          "28-day delivery",
          "Core feature set (3-5 features)",
          "Responsive web application",
          "Database & backend setup",
          "Basic admin panel",
          "30-day post-launch support",
        ],
        ctaLabel: "Get Started",
        ctaHref: "#contact",
      },
      {
        name: "Full Product",
        price: "Starting at $25,000",
        perfectFor: "Established businesses launching new products",
        includes: [
          "45-day delivery",
          "Full feature suite (8-12 features)",
          "Advanced integrations",
          "AI capabilities included",
          "Custom design system",
          "Admin & user dashboards",
          "60-day support + training",
        ],
        ctaLabel: "Get Started",
        ctaHref: "#contact",
        featured: true,
        badgeText: "Popular",
      },
      {
        name: "Enterprise Solution",
        price: "Custom Quote",
        perfectFor: "Complex platforms and scaling companies",
        includes: [
          "Custom timeline",
          "Unlimited features",
          "Advanced AI automation",
          "Multi-platform (web + mobile)",
          "Dedicated team",
          "Priority support",
          "SLA guarantees",
        ],
        ctaLabel: "Contact Sales",
        ctaHref: "#contact",
      },
    ],
    addons: [
      "AI Chatbot Integration: $3,500",
      "Custom Automation Workflow: $2,000/workflow",
      "Mobile App Development: Custom quote",
      "Ongoing Maintenance: From $1,500/month",
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Why 28 days? Can it be faster or slower?",
        answer:
          "Our 28-day sprint is optimized for MVP quality and speed. We can adjust timelines for smaller projects (2 weeks minimum) or more complex builds (6-8 weeks), but 28 days hits the sweet spot for most startups.",
      },
      {
        question: "What happens if the project isn't done in 28 days?",
        answer:
          "We guarantee delivery. If we miss the deadline due to our side, we continue working at no extra cost. If scope changes from your side, we'll discuss timeline adjustments upfront.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Absolutely. We sign NDAs before any detailed discussions and treat all client information with strict confidentiality.",
      },
      {
        question: "What if we need changes after launch?",
        answer:
          "Every project includes 30 days of support for bug fixes and minor adjustments. For new features or major changes, we offer maintenance retainers or project-based pricing.",
      },
      {
        question: "Can you help us scale after the MVP?",
        answer:
          "Yes! Many of our clients start with an MVP and continue with us for Phase 2, 3, and beyond. We're your long-term technical partner.",
      },
      {
        question: "Do you provide hosting and maintenance?",
        answer:
          "We can handle deployment to your preferred platform or our recommended stack. Ongoing hosting and maintenance are available as add-on services.",
      },
      {
        question: "What technologies do you specialize in?",
        answer:
          "We work primarily with modern JavaScript/TypeScript (React, Next.js, Node.js), Python for AI/ML, and cloud infrastructure (AWS, Vercel). We choose the best stack for your specific needs.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes. We're experienced with API integrations, database migrations, and connecting to CRMs, payment processors, and third-party tools.",
      },
    ],
  },
  testimonials: {
    heading: "What Our Clients Say",
    items: [
      {
        quote:
          "We went from concept to paying customers in under a month. The team understood our vision immediately and delivered beyond expectations. The AI chatbot alone has saved us 15 hours a week.",
        name: "Sarah Chen",
        role: "Founder",
        company: "TechFlow Solutions",
        result: "Launched in 26 days | 1,000+ users in Month 1",
      },
      {
        quote:
          "Best development partner we've worked with. Clear communication, no surprises, and they actually care about the product's success. Our MVP led directly to seed funding.",
        name: "Marcus Rodriguez",
        role: "CEO",
        company: "DataSync Pro",
        result: "MVP launch directly supported seed funding",
      },
      {
        quote:
          "The 28-day sprint model is genius. Weekly demos kept us aligned, and having a working product so quickly let us start getting real user feedback while competitors were still in planning.",
        name: "Emily Thompson",
        role: "Product Lead",
        company: "CloudNest",
        result: "Real user feedback started while competitors were still planning",
      },
    ],
  },
  cta: {
    heading: "Ready to Build Your Product?",
    subheading: "Let's turn your idea into reality. Book a free consultation to discuss your project.",
    primaryCta: {
      label: "Book a discovery call",
      href: "https://calendly.com/tenetlabs/intro-call",
    },
    secondaryText: "Or email us at hello@tenetlabs.dev",
  },
};
