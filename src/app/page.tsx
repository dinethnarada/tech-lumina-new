import Navbar from "@/components/Navbar";
import PlexusBackground from "@/components/PlexusBackground";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="text-white">
      <div className="relative min-h-screen bg-gradient-to-b from-[#130420] via-[#1C054D] to-black overflow-hidden">
        <PlexusBackground />
        <Navbar />
        <div className="relative z-0 px-6 flex flex-col min-h-screen">
          <HeroSection />
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <FeaturedProjects />
    </main>
  );
}
