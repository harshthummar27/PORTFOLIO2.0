import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/ui/SectionDivider";
import LazySection from "@/components/ui/LazySection";

// Simple loading skeleton component
const SectionSkeleton = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 animate-pulse">
      <div className="h-8 bg-white/5 rounded-lg w-1/3 mb-6"></div>
      <div className="space-y-4">
        <div className="h-4 bg-white/5 rounded-lg w-full"></div>
        <div className="h-4 bg-white/5 rounded-lg w-5/6"></div>
      </div>
    </div>
  </div>
);

// Lazy load components below the fold with code splitting
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <SectionSkeleton />,
});

const Experience = dynamic(() => import("@/components/sections/Experience"), {
  loading: () => <SectionSkeleton />,
});

const Technology = dynamic(() => import("@/components/sections/Technology"), {
  loading: () => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 animate-pulse">
        <div className="h-8 bg-white/5 rounded-lg w-1/3 mb-6"></div>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-10 bg-white/5 rounded-lg w-24"></div>
          ))}
        </div>
      </div>
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <SectionSkeleton />,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  loading: () => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="h-20 bg-white/5 rounded-lg animate-pulse"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SectionDivider />
      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
      </LazySection>
      <SectionDivider />
      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
      </LazySection>
      <SectionDivider />
      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <Technology />
        </Suspense>
      </LazySection>
      <SectionDivider />
      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </LazySection>
      <SectionDivider />
      <LazySection rootMargin="50px">
        <Suspense fallback={<div className="min-h-[200px]"></div>}>
          <Footer />
        </Suspense>
      </LazySection>
    </main>
  );
}
