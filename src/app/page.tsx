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
      <div className="relative z-0 px-6 flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="flex-1 pt-32 md:pt-40">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-6 pl-6">
              <div className="space-y-2">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Tech Lumina
                </h1>
                <div>
                  <span className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-500 to-indigo-500 font-bold">
                    Web Solutions
                  </span>
                </div>
              </div>
              <p className="text-xl md:text-2xl font-mono text-gray-300 max-w-3xl relative pl-4 border-l border-indigo-400/30">
                <span className="text-gray-400">/* </span> 
                Crafting Tomorrow's Websites, Today! 
                <span className="text-gray-400"> */</span>
              </p>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="w-full py-16 hidden">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl tracking-wider text-gray-400 pl-12">
              <span className="opacity-50">←</span> OUR CLIENTS <span className="opacity-50">→</span>
            </h2>
          </div>
          <div className="relative w-full overflow-hidden">
            {/* Scrolling Container */}
            <div className="w-fit">
              {/* Scrolling Logos */}
              <div className="flex gap-16 md:gap-16 items-center animate-scroll">
                <Image src="/clients/client2.png" alt="Client 1" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                <Image src="/clients/client2.png" alt="Client 2" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                <Image src="/clients/client2.png" alt="Client 3" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                <Image src="/clients/client2.png" alt="Client 4" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                <Image src="/clients/client2.png" alt="Client 5" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                {/* Duplicate for seamless loop */}
                <Image src="/clients/client2.png" alt="Client 1" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                <Image src="/clients/client2.png" alt="Client 2" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                <Image src="/clients/client2.png" alt="Client 3" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                <Image src="/clients/client2.png" alt="Client 4" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
                <Image src="/clients/client2.png" alt="Client 5" width={140} height={50} className="w-[140px] md:w-[180px] transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
