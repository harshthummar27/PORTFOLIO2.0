import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPosts from "@/components/sections/BlogPosts";
import { fetchBlogPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog | Harsh Thummar",
  description: "Read my latest blog posts about web development, technology, and programming",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <BlogPosts posts={posts} />
      <Footer />
    </main>
  );
}

