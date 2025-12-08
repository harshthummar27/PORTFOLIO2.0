import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio 2.0 | Harsh Thummar",
  description: "Full-Stack Developer & UI/UX Builder - Professional portfolio showcasing skills, projects, and experience",
  keywords: ["portfolio", "web developer", "full-stack developer", "UI/UX builder", "Next.js", "React", "Laravel"],
  authors: [{ name: "Harsh Thummar" }],
  icons: {
    icon: "/images/me.JPG",
    shortcut: "/images/me.JPG",
    apple: "/images/me.JPG",
  },
  openGraph: {
    title: "Portfolio 2.0 | Harsh Thummar",
    description: "Full-Stack Developer & UI/UX Builder - Professional portfolio showcasing skills, projects, and experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

