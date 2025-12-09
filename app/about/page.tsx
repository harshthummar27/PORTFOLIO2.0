import { Metadata } from "next";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Me - Harsh Thummar",
  description: "Learn more about Harsh Thummar, a full-stack developer and UI builder",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <About />
      <Footer />
    </main>
  );
}

