import type { Metadata } from "next";

import { siteContent } from "@/content/site-content";

export const siteUrl = "https://tenetlabs.dev";

export const seoMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteContent.config.agencyName} | MVPs in 28 Days`,
  description:
    "Custom web platforms and AI product engineering that helps founders ship market-ready MVPs in 28 days.",
  openGraph: {
    title: `${siteContent.config.agencyName} | MVPs in 28 Days`,
    description:
      "Launch your MVP fast with an AI-first product team focused on quality, velocity, and measurable outcomes.",
    url: siteUrl,
    siteName: siteContent.config.agencyName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.config.agencyName} | MVPs in 28 Days`,
    description:
      "AI-powered product engineering for startups and scaleups. Ship in 28 days.",
  },
  alternates: {
    canonical: "/",
  },
};
