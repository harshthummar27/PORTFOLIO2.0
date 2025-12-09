"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioProjects() {

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
            duration: 4,
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
            duration: 5,
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
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm md:text-base font-medium mb-6">
            PORTFOLIO ITEMS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            My Projects
            <br />
            <span className="relative">
              & Work
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-blue-400/30 blur-2xl"></span>
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my skills in full-stack
            development, Web3, and modern web technologies.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  {/* Gradient border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>

                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="relative w-full h-full rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70 text-xs hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Globe className="w-4 h-4" />
                        Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-200 flex items-center justify-center cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
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


