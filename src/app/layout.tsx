import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description = "Portfolio of Eslam Hesuien: cybersecurity enthusiast, web penetration tester and bug bounty hunter from Egypt.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Web Penetration Tester & Bug Bounty Hunter`, template: `%s | ${site.name}` },
  description,
  keywords: ["Eslam Hesuien", "cybersecurity", "web penetration testing", "bug bounty", "OWASP", "Egypt", "portfolio"],
  authors: [{ name: site.name }],
  openGraph: { type: "website", title: `${site.name} | Cybersecurity Portfolio`, description, url: site.url, siteName: site.name },
  twitter: { card: "summary_large_image", title: `${site.name} | Cybersecurity Portfolio`, description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#05070f", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Web Penetration Tester",
    address: { "@type": "PostalAddress", addressCountry: "EG" },
    sameAs: [site.links.linkedin, site.links.bugcrowd, site.links.yeswehack, site.links.github].filter(Boolean),
  };
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
