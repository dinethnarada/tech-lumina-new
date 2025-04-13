import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechLuminaSolutions from "@/components/TechLuminaSolutions";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-white relative min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10">
        <HeroSection />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <FeaturedProjects />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <TechLuminaSolutions />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <Questions />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <Footer />
      </div>
    </main>
  );
}
