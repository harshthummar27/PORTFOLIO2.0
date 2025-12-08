import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioProjects from "@/components/sections/PortfolioProjects";

export const metadata: Metadata = {
  title: "Portfolio Projects | Harsh Thummar",
  description: "View my portfolio of projects and work",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <PortfolioProjects />
      <Footer />
    </main>
  );
}

