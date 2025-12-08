import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPosts from "@/components/sections/BlogPosts";

export const metadata: Metadata = {
  title: "Blog | Harsh Thummar",
  description: "Read my latest blog posts about web development, technology, and programming",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <BlogPosts />
      <Footer />
    </main>
  );
}

