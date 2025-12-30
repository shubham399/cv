import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import React from "react";



export const metadata: Metadata = {
  title: "CV",
  description: "Resume",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "81cd3bc5c97945c4b8b57909f87a3926"}'></script>
        <Analytics />
        <GoogleTagManager gtmId="G-XG51E8L4ZD" />
        <SpeedInsights />
      </body>
    </html>
  );
}
