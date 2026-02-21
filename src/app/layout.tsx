import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Syne } from "next/font/google";

import { MotionProvider } from "@/components/motion/stagger";
import { seoMetadata } from "@/lib/seo";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = seoMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070B12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${syne.variable} bg-[var(--bg-950)] font-sans text-[var(--text-100)] antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
