import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioProjects from "@/components/sections/PortfolioProjects";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

export const metadata: Metadata = {
  title: "Portfolio | Harsh Thummar",
  description: "View my portfolio of projects and work",
};

export default async function PortfolioPage() {
  let projects: any[] = [];
  
  try {
    await connectDB();
    const dbProjects = await Project.find()
      .sort({ createdAt: -1 })
      .lean();
    
    // Transform MongoDB documents to match PortfolioProject type
    projects = dbProjects.map((project: any) => ({
      id: project.id || Number(project._id),
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      category: project.category,
      technologies: project.technologies,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      featured: project.featured,
      icon: null, // Icon is not stored in DB (React component)
      color: project.color,
      image: project.image,
      slug: project.slug,
      year: project.year,
      client: project.client,
      challenges: project.challenges,
      solutions: project.solutions,
      results: project.results,
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Return empty array if database connection fails
    projects = [];
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <PortfolioProjects projects={projects} />
      <Footer />
    </main>
  );
}
