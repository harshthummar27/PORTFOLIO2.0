import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioDetail from "@/components/sections/PortfolioDetail";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    await connectDB();
    const project = await Project.findOne({ slug }).lean();
    
    if (!project) {
      return {
        title: "Project Not Found | Harsh Thummar",
      };
    }

    return {
      title: `${project.title} | Portfolio | Harsh Thummar`,
      description: project.description,
    };
  } catch (error) {
    return {
      title: "Project Not Found | Harsh Thummar",
    };
  }
}

export default async function PortfolioItemPage({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    await connectDB();
    const project = await Project.findOne({ slug }).lean();

    if (!project) {
      notFound();
    }

    // Increment views
    await Project.updateOne({ slug }, { $inc: { views: 1 } });

    // Transform MongoDB document to match PortfolioProject type
    const transformedProject = {
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
    };

    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <PortfolioDetail project={transformedProject} />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error fetching project:', error);
    notFound();
  }
}
