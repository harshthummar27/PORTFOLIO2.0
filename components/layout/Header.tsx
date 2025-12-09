"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, User, Code, Briefcase, BookOpen } from "lucide-react";
import Link from "next/link";
import BuyTicketButton from "@/components/ui/BuyTicketButton";

const navItems = [
  { name: "About", href: "/about", icon: User, hasDropdown: false },
  { name: "Technology", href: "/technology", icon: Code, hasDropdown: false },
  { name: "Experience", href: "/experience", icon: Briefcase, hasDropdown: false },
  { name: "Blog", href: "/blog", icon: BookOpen, hasDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Force dark theme for IBW-style design
    document.documentElement.classList.add("dark");
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for header styling
      setIsScrolled(currentScrollY > 20);
      
      // Show/hide bottom nav based on scroll direction (mobile only)
      if (window.innerWidth < 1280) { // xl breakpoint
        if (currentScrollY < 10) {
          // At the top, always show
          setShowBottomNav(true);
        } else if (currentScrollY > lastScrollY.current) {
          // Scrolling down - hide
          setShowBottomNav(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - show
          setShowBottomNav(true);
        }
      } else {
        // Desktop - always show (doesn't have bottom nav anyway)
        setShowBottomNav(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Container with padding - Left and Right padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-3 md:pt-4">
          {/* Premium Glass-morphism Navigation Bar */}
          <nav
            className={`rounded-full transition-all duration-500 ${
              isScrolled
                ? "bg-black/70 backdrop-blur-2xl shadow-2xl"
                : "bg-black/50 backdrop-blur-xl"
            }`}
            style={{
              border: '1px solid #fff',
              boxShadow: isScrolled
                ? "0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
                : "0 4px 24px 0 rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
            }}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 rounded-full transition-all duration-500 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            
            {/* Top Row - Mobile: Logo | Button | Desktop: Logo | Links | Button */}
            <div className="relative flex items-center justify-between h-14 md:h-16 px-4 md:px-6 lg:px-8">
              {/* Left: Mobile Logo - Only on Mobile */}
              <div className="xl:hidden flex items-center flex-shrink-0 z-10">
                <Link
                  href="/"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                  aria-label="Home"
                >
                  <span className="text-sm md:text-base font-bold text-white">
                    HARSH'S
                  </span>
                </Link>
              </div>

              {/* Center: Logo - Desktop Only */}
              <Link
                href="/"
                className="hidden xl:flex items-center space-x-2.5 group flex-shrink-0 z-10"
              >
                <span className="text-base md:text-lg lg:text-xl font-bold text-white tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
                  HARSH'S
                </span>
              </Link>

              {/* Center: Navigation Links - Desktop Only */}
              <div className="hidden xl:flex items-center flex-1 justify-center gap-4 2xl:gap-6 mx-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/85 hover:text-white transition-all duration-200 font-medium text-xs 2xl:text-sm flex items-center group whitespace-nowrap relative"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>

              {/* Right Side: Get Touch Button */}
              <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 z-10">
                <div className="flex-shrink-0">
                  <BuyTicketButton 
                    onClick={() => {
                      if (window.location.pathname === '/') {
                        const element = document.querySelector("#contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        window.location.href = "/#contact";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar - Fixed at Bottom */}
      <nav
        className={`xl:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showBottomNav ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container mx-auto px-2">
          <div
            className="bg-black/80 backdrop-blur-2xl border-t border-white/20 rounded-t-3xl shadow-2xl"
            style={{
              boxShadow: "0 -8px 32px 0 rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
            
            {/* Navigation Items */}
            <div className="relative flex items-center justify-around px-2 py-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-200 group min-w-[60px]"
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    <span className="text-[10px] font-medium text-white/70 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

