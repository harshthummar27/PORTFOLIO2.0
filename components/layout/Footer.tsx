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

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Technology", href: "/technology" },
  { name: "Experience", href: "/experience" },
  { name: "Portfolio", href: "/portfolio" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:harshthummar542@gmial.com" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/harrsh.patell",
  },
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com/HP878700" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harsh-thummar27/",
  },
  { name: "GitHub", icon: Github, href: "https://github.com/harshthummar27/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        {/* Professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-gray-950/50 to-transparent"></div>
        {/* Subtle accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Footer Card */}
        <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden mb-8">
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
          {/* Inner border */}
          <div className="absolute inset-[1px] rounded-2xl border border-white/5"></div>

          <div className="relative z-10">
            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* First Column - Brand Highlight */}
              <div className="text-center md:text-left">
                {/* Profile Image */}
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-white/20 backdrop-blur-sm p-0.5 overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <Image
                        src="/images/me.jpeg"
                        alt="Harsh Thummar"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full grayscale"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <h2 className="text-white font-bold text-xl md:text-2xl mb-2 tracking-tight">
                  Harsh Thummar
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
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
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm group flex items-center gap-2 cursor-pointer font-medium"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200 text-purple-400/60 group-hover:text-purple-400">
                          →
                        </span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Third Column - Blog + Socials */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
                  Blogs
                </h3>
                {/* Blog Link */}
                <div className="mb-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg font-semibold text-white transition-all duration-200 text-sm shadow-lg hover:shadow-purple-500/50 group cursor-pointer"
                  >
                    <span>Read Blog</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Social Icons */}
                <div>
                  <h4 className="text-white/60 text-sm mb-4 uppercase tracking-wider font-medium">
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
                          className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200 group"
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

        {/* Bottom Bar - Professional Styling */}
        <div className="border-t border-white/5 bg-gradient-to-r from-transparent via-white/5 to-transparent py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left - Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link
                href="#privacy"
                className="text-white/50 hover:text-white/80 transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="#terms"
                className="text-white/50 hover:text-white/80 transition-colors duration-200 font-medium"
              >
                Terms & Conditions
              </Link>
            </div>

            {/* Right - Copyright */}
            <div className="text-white/50 text-sm font-medium">
              © {currentYear} Harsh Thummar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
