import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { ecosystemConfig } from "@/lib/subsidiaries";
import { seoConfig } from "@/lib/seo/constants";
import { buildOrganizationSchema } from "@/lib/seo/json-ld";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(ecosystemConfig.url),
  title: {
    default: ecosystemConfig.name,
    template: `%s | ${ecosystemConfig.shortName}`,
  },
  description: ecosystemConfig.description,
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    siteName: ecosystemConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <JsonLdScript data={buildOrganizationSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
