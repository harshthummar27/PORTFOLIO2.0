import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Technology from "@/components/sections/Technology";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Technology />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </main>
  );
}

