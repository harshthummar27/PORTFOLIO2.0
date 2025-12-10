"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Server,
  Palette,
  Zap,
  Shield,
  Layers,
  Box,
  Cpu,
  GitBranch,
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Palette,
    technologies: [
      { name: "Next.js", level: 95, color: "from-purple-500 to-blue-500" },
      { name: "React", level: 98, color: "from-blue-500 to-cyan-500" },
      { name: "Javascript ", level: 98, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500" },
      {
        name: "Framer Motion",
        level: 85,
        color: "from-pink-500 to-purple-500",
      },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", level: 90, color: "from-green-500 to-emerald-500" },
      { name: "Laravel", level: 88, color: "from-red-500 to-pink-500" },
      { name: "Express.js", level: 92, color: "from-gray-500 to-gray-600" },
      { name: "REST APIs", level: 95, color: "from-blue-500 to-cyan-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    technologies: [
      { name: "MongoDB", level: 85, color: "from-green-500 to-emerald-500" },
      { name: "MySQL", level: 88, color: "from-orange-500 to-amber-500" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Zap,
    technologies: [
      { name: "AI tools", level: 95, color: "from-orange-500 to-red-500" },
      { name: "Docker", level: 85, color: "from-blue-500 to-cyan-500" },
      { name: "Git", level: 95, color: "from-orange-500 to-red-500" },
      { name: "CI/CD", level: 85, color: "from-purple-500 to-pink-500" },
      { name: "Linux", level: 88, color: "from-yellow-500 to-orange-500" },
    ],
  },

  {
    title: "Mobile & Design",
    icon: Smartphone,
    technologies: [
      { name: "Figma", level: 90, color: "from-purple-500 to-pink-500" },
      { name: "UI/UX Design", level: 88, color: "from-pink-500 to-rose-500" },
      {
        name: "Responsive Design",
        level: 95,
        color: "from-cyan-500 to-blue-500",
      },
    ],
  },
];

const featuredTech = [
  {
    name: "Next.js",
    icon: Code,
    description: "React Framework",
    color: "from-purple-500 to-blue-500",
  },
  {
    name: "React.JS",
    icon: Box,
    description: "UI Library",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Javascript, TypeScript",
    icon: Cpu,
    description: "Type Safety",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Node.js",
    icon: Server,
    description: "Runtime",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "MongoDB, SQL",
    icon: Database,
    description: "Database",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Docker, Git",
    icon: Box,
    description: "Containerization",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative min-h-[80vh] py-16 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

        {/* Soft glows */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm md:text-base font-medium mb-6">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Tools & Technologies
            <br />
            <span className="relative">
              I Master
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 blur-2xl"></span>
            </span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies, frameworks, and tools
            I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.15, delay: 0.1 + index * 0.025 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-200 group cursor-default"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-base mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-white/60 text-xs">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-6 md:space-y-8">
          {techCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: categoryIndex * 0.025 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Gradient border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.25,
                          delay: categoryIndex * 0.05 + techIndex * 0.025,
                        }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-semibold">
                            {tech.name}
                          </span>
                          <span className="text-white/60 text-sm">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay:
                                categoryIndex * 0.05 + techIndex * 0.05 + 0.15,
                              ease: "easeOut",
                            }}
                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                            style={{
                              boxShadow: `0 0 10px rgba(168, 85, 247, 0.5)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden inline-block">
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

            <div className="relative z-10">
              <GitBranch className="w-12 h-12 text-white/70 mx-auto mb-4" />
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                Continuously learning and adapting to new technologies to stay
                at the forefront of web development. Always exploring the latest
                tools and best practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
