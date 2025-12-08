"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import BuyTicketButton from "@/components/ui/BuyTicketButton";

const navItems = [
  { name: "Home", href: "#home", hasDropdown: false },
  { name: "About", href: "#about", hasDropdown: false },
  { name: "Technology", href: "#technology", hasDropdown: false },
  { name: "Experience", href: "#experience", hasDropdown: false },
  { name: "Blog", href: "/blog", hasDropdown: false },
  { name: "Contact Us", href: "#contact", hasDropdown: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Force dark theme for IBW-style design
    document.documentElement.classList.add("dark");
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Container with padding - Left and Right padding */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-3 md:pt-4">
        {/* Premium Glass-morphism Navigation Bar - Rounded Full */}
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
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
          
          <div className="relative flex items-center justify-between h-14 md:h-16 px-4 md:px-6 lg:px-8">
            {/* Left: Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2.5 group flex-shrink-0 z-10"
            >
              <span className="text-base md:text-lg lg:text-xl font-bold text-white tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
                HARSH'S
              </span>
            </Link>

            {/* Center: Navigation Links - Evenly Spaced (Desktop Only) */}
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

            {/* Right Side: Get Touch Button + Menu Button */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 z-10">
              {/* Get Touch Button - Visible on all devices */}
              <div className="flex-shrink-0">
                <BuyTicketButton 
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center xl:hidden flex-shrink-0">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-white cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="xl:hidden border-t border-white/10 px-4 py-4 mt-2">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/85 hover:text-white transition-colors duration-200 font-medium py-2 flex items-center gap-2 text-sm"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                ))}
                <div className="pt-2">
                  <BuyTicketButton 
                    variant="mobile"
                    onClick={() => {
                      setIsMenuOpen(false);
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

