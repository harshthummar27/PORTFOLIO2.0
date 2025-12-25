import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"; // 👈 add this
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Thummar | Portfolio",
  description:
    "Full-Stack Developer & UI/UX Builder - Professional portfolio showcasing skills, projects, and experience",
  keywords: [
    "portfolio",
    "web developer",
    "full-stack developer",
    "UI/UX builder",
    "Next.js",
    "React",
    "Laravel",
  ],
  authors: [{ name: "Harsh Thummar" }],
  icons: {
    icon: "/images/favi-icon.png",
    shortcut: "/images/me.jpeg",
    apple: "/images/me.jpeg",
  },
  openGraph: {
    title: "Portfolio 2.0 | Harsh Thummar",
    description:
      "Full-Stack Developer & UI/UX Builder - Professional portfolio showcasing skills, projects, and experience",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} font-sans bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
        <Analytics /> {/* 👈 add this */}
      </body>
    </html>
  );
}
