import React from 'react';

const PortfolioHero = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130420]/80 via-[#1E0B2D]/90 to-black/80 z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
          Our Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
        Explore our digital solutions
        </p>

      </div>
    </section>
  );
};

export default PortfolioHero;
