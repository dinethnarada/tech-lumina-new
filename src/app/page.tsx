import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechLuminaSolutions from "@/components/TechLuminaSolutions";
import Questions from "@/components/Questions";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main className="text-white relative min-h-screen">
      <div className="relative z-10">
        <HeroSection />
        <Divider />
        
        <FeaturedProjects />
        <Divider />
        
        <TechLuminaSolutions />
        <Divider />
        
        <Questions />
      </div>
    </main>
  );
}
