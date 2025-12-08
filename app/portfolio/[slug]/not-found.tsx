import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white" style={{ background: '#000000', color: '#ffffff' }}>
      <Header />
      <section className="relative min-h-screen pt-24 md:pt-28 pb-20 md:pb-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

