import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogDetail from "@/components/sections/BlogDetail";
import { getPostBySlug } from "@/data/blog";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Harsh Thummar",
    };
  }

  return {
    title: `${post.title} | Blog | Harsh Thummar`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <BlogDetail post={post} />
      <Footer />
    </main>
  );
}

