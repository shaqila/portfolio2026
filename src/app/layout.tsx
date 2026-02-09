import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: {
    default: "Erbeliza — Creative Developer",
    template: "%s | Erbeliza",
  },
  description:
    "Creative developer focused on high-converting landing pages, scalable component libraries, and performance-first frontend in Next.js and Angular.",
  applicationName: "Erbeliza Portfolio",
  keywords: [
    "Creative Developer",
    "Frontend",
    "Next.js",
    "Angular",
    "Design System",
    "WordPress",
    "SEO",
    "Lighthouse Performance",
    "Component Libraries",
    "Web Performance",
  ],
  authors: [{ name: "Shaqila Erbeliza" }],
  creator: "Shaqila Erbeliza",
  publisher: "Shaqila Erbeliza",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: { en: "/" },
  },
  openGraph: {
    title: "Erbeliza — Creative Developer",
    description:
      "Creating high-converting landing pages and scalable component libraries that bridge design and engineering.",
    url: "/",
    siteName: "Erbeliza",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/projects/project-paper.webp",
        width: 1200,
        height: 630,
        alt: "Erbeliza Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erbeliza — Creative Developer",
    description:
      "Creating high-converting landing pages and scalable component libraries that bridge design and engineering.",
    creator: "@shaqila",
    images: ["/assets/projects/project-paper.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  referrer: "origin-when-cross-origin",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
