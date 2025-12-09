import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Me - Harsh Thummar",
  description: "Get in touch with Harsh Thummar for your next project. Let's work together to bring your ideas to life.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}

