import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Experience - Harsh Thummar",
  description: "My professional experience, key projects, and achievements in the tech industry",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Experience />
      <Footer />
    </main>
  );
}

