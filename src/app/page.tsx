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
        {/* Hero Section */}
        <div className="min-h-screen bg-gradient-to-b from-transparent via-[#1C054D]/50 to-black/50">
          <HeroSection />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-black/50">
          {/* Featured Projects */}
          <FeaturedProjects />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Tech Lumina Solutions */}
        <div className="min-h-screen bg-gradient-to-b from-black/50 via-[#1C054D]/50 to-black/50">
          <div className="relative px-6">
            <TechLuminaSolutions />
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Questions Section */}
        <div className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
          <div className="relative px-6">
            <Questions />
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <Footer />
      </div>
    </main>
  );
}
