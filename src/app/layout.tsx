import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";

import { MotionProvider } from "@/components/motion/stagger";
import { seoMetadata } from "@/lib/seo";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = seoMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
