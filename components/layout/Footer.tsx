"use client";

import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const quickLinks = [
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:harshthummar542@gmial.com" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/harrsh.patell" },
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com/HP878700" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/harsh-thummar27/" },
  { name: "GitHub", icon: Github, href: "https://github.com/harshthummar27/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/20 to-transparent"></div>
      </div>

      {/* Main Footer Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glass-morphism Footer Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden mb-8">
          {/* Neon gradient border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 opacity-50 blur-2xl"></div>
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"></div>

          <div className="relative z-10">
            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* First Column - Brand Highlight */}
              <div className="text-center md:text-left">
                {/* Profile Image */}
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-white/20 backdrop-blur-sm p-0.5 overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <Image
                        src="/images/me.JPG"
                        alt="Harsh Thummar"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <h2 className="text-white font-bold text-xl md:text-2xl mb-2 tracking-tight">
                  Portfolio of Harsh Thummar
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Full-Stack Developer & UI Builder
                </p>
              </div>

              {/* Second Column - Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm group flex items-center gap-2 cursor-pointer"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Third Column - Newsletter + Socials */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
                  Get Updates
                </h3>
                {/* Newsletter Form */}
                <form onSubmit={handleSubscribe} className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-200 text-sm"
                      required
                    />
                    <div className="relative inline-block rounded-lg" style={{
                      background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                      padding: "2px",
                    }}>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 text-sm relative overflow-hidden group w-full cursor-pointer"
                        style={{
                          background: "rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Subscribe
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                        ></span>
                      </button>
                    </div>
                  </div>
                </form>

                {/* Social Icons */}
                <div>
                  <h4 className="text-white/70 text-sm mb-4 uppercase tracking-wider">
                    Connect
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200 group"
                          aria-label={social.name}
                        >
                          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left - Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link
                href="#privacy"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="#terms"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>

            {/* Right - Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} Harsh Thummar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
