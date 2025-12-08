import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioDetail from "@/components/sections/PortfolioDetail";
import { getProjectBySlug } from "@/data/portfolio";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Harsh Thummar",
    };
  }

  return {
    title: `${project.title} | Portfolio | Harsh Thummar`,
    description: project.description,
  };
}

export default function PortfolioItemPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <PortfolioDetail project={project} />
      <Footer />
    </main>
  );
}

