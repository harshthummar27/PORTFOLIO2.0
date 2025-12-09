"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Delay video loading on mobile for better performance
      if (mobile) {
        setTimeout(() => setShouldLoadVideo(true), 500);
      } else {
        setShouldLoadVideo(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Ensure video plays on mobile devices
    if (videoRef.current && shouldLoadVideo) {
      videoRef.current.play().catch(() => {
        // Video autoplay prevented - silent fail
      });
    }
  }, [shouldLoadVideo]);


  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 sm:pt-24 md:pt-32 xl:pt-24 pb-8 sm:pb-12"
    >
      {/* Fallback Background (in case video doesn't load) */}
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Video Background - Lazy load on mobile */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload={isMobile ? "metadata" : "auto"}
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          style={{ objectFit: 'cover' }}
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Blurred Background - Developer Workspace Environment */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 z-[2]">
        {/* Workspace Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          {/* Code-like grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Blurred workspace elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-lg blur-3xl rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-lg blur-3xl -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Gradient Overlays - Cinematic (reduced opacity to show video) */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-purple-900/20"></div>

        {/* Soft Neon Glows */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Depth of Field Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>

      {/* Video Overlay - Darken video for better text readability (darker on mobile) */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/20 z-[3]"></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[4] w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-4 sm:py-8 md:py-12 lg:py-20">
          {/* Left Side - Main Heading */}
          <div className="w-full lg:flex-1 lg:max-w-3xl mb-8 lg:mb-0">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-[0.95] tracking-tight mb-4 sm:mb-6"
              style={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                textShadow: '0 0 30px rgba(168,85,247,0.5), 0 0 60px rgba(59,130,246,0.3)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
              }}
            >
              HARSH
              <br />
              <span className="relative">
                THUMMAR
                {/* Neon gradient glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-blue-400/30 blur-2xl"></span>
              </span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white/90 tracking-tight">
                Full-Stack Developer & UI Builder
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
            >
              Crafting modern web experiences with Next.js, React, Laravel, Node.js, and Framework/Library technologies.
            </motion.p>

            {/* Stats Row - Mobile: Show below description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="lg:hidden w-full mt-8 sm:mt-10"
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="text-center px-2 sm:px-0"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2 leading-none" style={{
                    textShadow: '0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.3)',
                  }}>
                    25+
                  </div>
                  <div className="text-white/70 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider leading-tight">Projects</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="text-center px-2 sm:px-0"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2 leading-none" style={{
                    textShadow: '0 0 20px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.3)',
                  }}>
                    10+
                  </div>
                  <div className="text-white/70 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider leading-tight">Clients</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="text-center px-2 sm:px-0"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2 leading-none" style={{
                    textShadow: '0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.3)',
                  }}>
                    3+
                  </div>
                  <div className="text-white/70 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider leading-tight">Years</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Stats Row (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:flex lg:w-auto lg:flex-col gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-right"
            >
              <div className="text-6xl xl:text-7xl font-black text-white mb-2" style={{
                textShadow: '0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.3)',
              }}>
                05+
              </div>
              <div className="text-white/70 text-base uppercase tracking-wider">Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-right"
            >
              <div className="text-6xl xl:text-7xl font-black text-white mb-2" style={{
                textShadow: '0 0 20px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.3)',
              }}>
                05+
              </div>
              <div className="text-white/70 text-base uppercase tracking-wider">Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-right"
            >
              <div className="text-6xl xl:text-7xl font-black text-white mb-2" style={{
                textShadow: '0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.3)',
              }}>
                2+
              </div>
              <div className="text-white/70 text-base uppercase tracking-wider">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Professional Card Below Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[4] pb-8 sm:pb-12 mt-4 sm:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-2xl border border-white/5 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
            {/* Inner border */}
            <div className="absolute inset-[1px] rounded-2xl border border-white/5"></div>
            
            <div className="relative z-10">
              {/* Portfolio Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm md:text-base font-medium">
                  PORTFOLIO 2025
                </span>
              </div>

              {/* Intro Paragraph */}
              <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-3xl">
                I design and build clean, scalable, and high-performance digital products. Explore my work and see how I bring ideas to life with code.
              </p>

              {/* Button */}
              <div className="flex justify-center sm:justify-start">
                <Link
                  href="/portfolio"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  View Portfolio Projects
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
