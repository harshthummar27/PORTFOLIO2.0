import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPosts from "@/components/sections/BlogPosts";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

export const metadata: Metadata = {
  title: "Blog | Harsh Thummar",
  description: "Read my latest blog posts about web development, technology, and programming",
};

export default async function BlogPage() {
  let posts: any[] = [];
  
  try {
    await connectDB();
    posts = await BlogPost.find({ published: true })
      .sort({ date: -1 })
      .lean();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return empty array if database connection fails
    posts = [];
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <BlogPosts posts={posts} />
      <Footer />
    </main>
  );
}

