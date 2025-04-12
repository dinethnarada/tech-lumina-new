import Navbar from "@/components/Navbar";
import PlexusBackground from "@/components/PlexusBackground";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechLuminaSolutions from "@/components/TechLuminaSolutions";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-white">
      <div className="relative min-h-screen bg-gradient-to-b from-[#130420] via-[#1C054D] to-black overflow-hidden">
        <PlexusBackground />
        <Navbar />
        <div className="relative z-10 px-6 flex flex-col min-h-screen">
          <HeroSection />
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <FeaturedProjects />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative min-h-screen bg-gradient-to-b from-black via-[#1C054D] to-black overflow-hidden">
        <PlexusBackground />
        <div className="relative z-10">
          <TechLuminaSolutions />
        </div>
      </div>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#332b00] to-[#2b0058]">
        <PlexusBackground />
        <div className="relative z-10">
          <Questions />
        </div>
      </div>
      <Footer />
    </main>
  );
}
