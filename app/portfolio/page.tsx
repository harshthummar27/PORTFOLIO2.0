import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioProjects from "@/components/sections/PortfolioProjects";
import { fetchProjects } from "@/lib/api";

export const metadata: Metadata = {
  title: "Portfolio | Harsh Thummar",
  description: "View my portfolio of projects and work",
};

export default async function PortfolioPage() {
  const projects = await fetchProjects();

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <PortfolioProjects projects={projects} />
      <Footer />
    </main>
  );
}
