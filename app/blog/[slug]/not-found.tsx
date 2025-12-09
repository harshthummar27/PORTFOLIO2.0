import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-6xl font-black text-white mb-4">404</h1>
          <p className="text-xl text-white/70 mb-8">Blog post not found</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

