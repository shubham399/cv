import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import React from "react";



export async function generateMetadata(): Promise<Metadata> {
  let data;
  const BASE_URL = "https://api.shubhkumar.in";
  try {
    const res = await fetch(
      `${BASE_URL}/api/publicmetadata`,
      {
        next: { revalidate: 86400 }, // 1 day
      }
    );

    data = await res.json();
  } catch {
    data = {
      title: "Shubham Kumar",
      description: "Associate Lead Engineer",
    };
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    authors: [{ name: data.author, url: data.url }],
    creator: data.author,

    icons: {
      apple: "/apple-touch-icon.png",
      icon: "/favicon.ico",
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      url: data.url,
      title: data.title,
      description: data.description,
      siteName: data.siteName,
      images: data.images,
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      creator: data.twitter,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}




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
