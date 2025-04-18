import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[50vh] md:min-h-screen bg-gradient-to-b from-transparent via-[#1C054D]/50 to-black/50">
      <div className="px-6 flex flex-col min-h-[50vh] md:min-h-screen">
        <div className="flex-1 pt-32 md:pt-52 pb-6 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-6 md:gap-16 items-center text-center">
              <div className="space-y-0">
                <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white/80 to-white/80 font-bold">
                  TECH LUMINA
                </h1>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-500 to-indigo-500 font-bold">
                    Web Solutions
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-gray-300 max-w-[320px] md:max-w-3xl mx-auto relative border-b border-indigo-400/30 pb-4 font-regular leading-relaxed">
                  {"/* "}
                  Crafting Tomorrow&apos;s
                  <br className="md:hidden" />
                  Websites, Today! 
                  {" */"}
                </p>
                <div className="mt-4">
                  <Link 
                href="/contact"
                className="bg-transparent text-white px-8 py-3 rounded-full text-sm tracking-widest border border-[#6B17ED] hover:bg-white hover:text-black hover:border-white transition-all uppercase font-regular"
              >
                GET STARTED
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
