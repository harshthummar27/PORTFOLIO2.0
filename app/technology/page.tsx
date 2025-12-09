import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Technology from "@/components/sections/Technology";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Technology Stack - Harsh Thummar",
  description: "Explore the technologies, frameworks, and tools I use to build modern applications",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Technology />
      <Footer />
    </main>
  );
}

