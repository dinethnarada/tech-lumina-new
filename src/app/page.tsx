import Navbar from "@/components/Navbar";
import PlexusBackground from "@/components/PlexusBackground";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#130420]/80 via-[#1C054D]/80 to-[#0B0215]/80 text-white overflow-hidden">
      <PlexusBackground />
      <Navbar />
      <div className="relative z-0 px-6 flex flex-col min-h-screen">
        <HeroSection />
      </div>
    </div>
  );
}
