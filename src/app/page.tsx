import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#130420] via-[#1C054D] to-[#0B0215] text-white overflow-hidden">
      {/* SVG Curves or overlays (optional subtle effect) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#21064F"
            fillOpacity="0.1"
            d="M0,224L60,218.7C120,213,240,203,360,176C480,149,600,107,720,122.7C840,139,960,213,1080,218.7C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Navbar />
      <div className="relative z-0 px-4 md:px-4 pt-32 md:pt-40 max-w-5xl mx-auto">
        <div className="flex flex-col gap-20">
          {/* Hero Section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              Tech Lumina <br/>
              <span className="text-5xl md:text-6xl lg:text-7xl text-yellow-400">Web Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl font-mono max-w-3xl">
              <span className="text-gray-400">/*</span> Crafting Tomorrow's Websites, Today! <span className="text-gray-400">*/</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="inline-block">
            <a href="/contact" className="group relative inline-flex items-center gap-4 bg-[#6B17ED] hover:bg-[#7929FF] text-white text-xl md:text-2xl font-medium px-8 py-6 rounded-2xl transition-all duration-300">
              Tell us about your project & get a custom quote
              <span className="bg-white/20 p-2 rounded-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
