"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14 App Router",
    excerpt: "Learn how to build modern web applications using Next.js 14's new App Router and React Server Components.",
    content: "Full content here...",
    author: "Harsh Thummar",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    slug: "getting-started-with-nextjs-14",
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for building large-scale React applications that are maintainable and performant.",
    content: "Full content here...",
    author: "Harsh Thummar",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "React",
    slug: "building-scalable-react-applications",
  },
  {
    id: 3,
    title: "Laravel Best Practices for API Development",
    excerpt: "Explore advanced Laravel techniques for building robust RESTful APIs with authentication and validation.",
    content: "Full content here...",
    author: "Harsh Thummar",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Backend",
    slug: "laravel-best-practices-api",
  },
];

export default function BlogPosts() {
  return (
    <section className="relative min-h-[90vh] pt-24 md:pt-28 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

        {/* Soft glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm md:text-base font-medium mb-6">
            BLOG
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Latest Articles
            <br />
            <span className="relative">
              & Insights
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-blue-400/30 blur-2xl"></span>
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my thoughts on web development, technology trends, and best practices.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative hover:bg-white/10 transition-all duration-300 h-full flex flex-col cursor-pointer">
                  {/* Gradient border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>

                  {/* Post Image/Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-black text-white">{post.category.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    {/* Post Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-white/50 text-xs mb-4">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors font-semibold text-sm mt-auto">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

