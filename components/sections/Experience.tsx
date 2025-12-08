"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Metizsoft Solutions Pvt Ltd. - Ahemdabad",
    role: "Junior Software Engineer",
    location: "Onsite",
    period: "2025 - Present",
    description:
      "Leading development of scalable web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Architected and developed 10+ production applications",
      "Improved application performance by 40% through optimization",
      "Mentored junior developers and established coding standards",
      "Led migration to microservices architecture",
    ],
    technologies: [ 
      "UI freameworks & Libraries",
      "javaScript",
      "html-css",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "SQl & MongoDB",
    ],
    icon: Code,
    color: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    company: "Vmukti Solutions Pvt Ltd. - Ahmedabad",
    role: "Javascript Developer",
    location: "Ahemdabad, Gujarat",
    period: "June 2024 - Nov 2024",
    description:
      "Developed and maintained multiple client projects, focusing on responsive design and optimal user experiences.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with designers to create pixel-perfect UIs",
      "Integrated third-party APIs and payment gateways",
    ],
    technologies: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "REST APIs",
      "UI frameworks & Libraries",
      "Docker",
      "Git",
      "Figma",
    ],
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    company: "Desire infoTech - Gandhinagar",
    role: "ReactJs Developer Intern",
    location: "Gandhinagar, Gujarat",
    period: "6 Months",
    description:
      "Built user-facing features for a fast-growing startup, focusing on mobile-first responsive design.",
    achievements: [
      "Developed responsive web applications for 20+ features",
      "Reduced page load time by 50% through optimization",
      "Implemented design system used across all products",
      "Collaborated with product team on feature specifications",
    ],
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
    ],
    icon: Smartphone,
    color: "from-cyan-500 to-purple-500",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "Web3 NFT Marketplace",
    description:
      "Developed a decentralized NFT marketplace with wallet integration and smart contract interactions.",
    tech: ["React", "Web3.js", "Solidity", "Ethereum"],
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Created a comprehensive SaaS dashboard with analytics, user management, and real-time data visualization.",
    tech: ["Next.js", "TypeScript", "Chart.js", "MongoDB"],
    link: "#",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-[90vh] py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

        {/* Soft glows */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm md:text-base font-medium mb-6">
            EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Professional
            <br />
            <span className="relative">
              Journey
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-purple-400/30 blur-2xl"></span>
            </span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional experience, key projects, and
            achievements in the tech industry.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-transparent hidden md:block"></div>
                )}

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden hover:bg-white/10 transition-all duration-300">
                  {/* Gradient border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-6">
                    {/* Left Side - Icon and Timeline */}
                    <div className="flex items-start gap-4 md:flex-col md:items-center md:w-24">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${experience.color} border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="md:hidden">
                        <div className="text-white font-bold text-lg mb-1">
                          {experience.company}
                        </div>
                        <div className="text-white/70 text-sm">
                          {experience.role}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1">
                      {/* Header Info - Desktop */}
                      <div className="hidden md:flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {experience.role}
                          </h3>
                          <div className="text-xl text-white/90 font-semibold mb-2">
                            {experience.company}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-white/70 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Header Info - Mobile */}
                      <div className="md:hidden mb-4">
                        <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-white/70 text-sm md:text-base flex items-start gap-3"
                            >
                              <span className="text-purple-400 mt-1.5">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white/90 font-semibold mb-3 text-sm">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 text-xs md:text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Gradient border glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Database className="w-8 h-8 text-white/70" />
                    <a
                      href={project.link}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">
                    {project.title}
                  </h4>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-white/60 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

