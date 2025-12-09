"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

export default function LazySection({
  children,
  fallback,
  rootMargin = "100px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use larger rootMargin on mobile for earlier loading
    const isMobile = window.innerWidth < 768;
    const adjustedRootMargin = isMobile ? "200px" : rootMargin;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          // Small delay on mobile to prevent blocking
          const delay = isMobile ? 100 : 0;
          setTimeout(() => {
            setIsVisible(true);
            setHasLoaded(true);
            // Disconnect observer after loading once
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }, delay);
        }
      },
      {
        rootMargin: adjustedRootMargin,
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasLoaded, rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback || <div className="min-h-[400px]"></div>}
    </div>
  );
}

