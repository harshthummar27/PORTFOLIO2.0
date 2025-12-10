import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogDetail from "@/components/sections/BlogDetail";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    await connectDB();
    const post = await BlogPost.findOne({ slug, published: true }).lean();
    
    if (!post) {
      return {
        title: "Post Not Found | Harsh Thummar",
      };
    }

    return {
      title: `${post.title} | Blog | Harsh Thummar`,
      description: post.excerpt,
    };
  } catch (error) {
    return {
      title: "Post Not Found | Harsh Thummar",
    };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    await connectDB();
    const post = await BlogPost.findOne({ slug, published: true }).lean();

    if (!post) {
      notFound();
    }

    // Increment views
    await BlogPost.updateOne({ slug }, { $inc: { views: 1 } });

    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <BlogDetail post={post} />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}

