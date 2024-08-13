import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "FRAME - Foundational Reasoning and Macrostrategy Engagement",
    template: "%s | FRAME",
  },
  description: "Foundational Reasoning and Macrostrategy Engagement.",
  openGraph: {
    title: "FRAME - Foundational Reasoning and Macrostrategy Engagement",
    description: "Foundational Reasoning and Macrostrategy Engagement.",
    url: baseUrl,
    siteName: "FRAME",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

const jetFont = JetBrains_Mono({ subsets: ["latin"] });
// const canela = localFont({
//   src: "public/font/canelaweb.ttf",
//   variable: "--font-canela",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        jetFont
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
