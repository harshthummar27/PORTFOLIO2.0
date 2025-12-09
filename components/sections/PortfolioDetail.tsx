"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  Github,
  Calendar,
  User,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import type { PortfolioProject } from "@/data/portfolio";

interface PortfolioDetailProps {
  project: PortfolioProject;
}

export default function PortfolioDetail({ project }: PortfolioDetailProps) {
  const Icon = project.icon;

  return (
    <section className="relative min-h-[85vh] pt-24 md:pt-28 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
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
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} border border-white/20 flex items-center justify-center shadow-lg`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs font-medium mb-2">
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-xs font-semibold ml-2">
                  Featured
                </span>
              )}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            {project.title}
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 mb-8">
            {project.year && (
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
            )}
            {project.client && (
              <div className="flex items-center gap-2 text-white/70">
                <User className="w-5 h-5" />
                <span>{project.client}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-purple-500/50"
            >
              <Globe className="w-5 h-5" />
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Long Description */}
            {project.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    About This Project
                  </h2>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.solutions && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>
                <div className="relative z-10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-white/70 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="text-white/70 flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            {project.results && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">Results</h3>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="text-white/80 flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

