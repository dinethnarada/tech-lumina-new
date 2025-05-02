import { Metadata } from 'next';
import PortfolioCard from '@/components/PortfolioCard';
import { portfolioItems } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Tech Lumina - Crafting Tomorrow\'s Websites, Today | Portfolio',
  description: 'Explore our projects',
  keywords: [
    'tech lumina portfolio', 'web development portfolio',
    'digital solutions showcase', 'web projects',
    'website design portfolio', 'tech lumina work', 'development projects',
    'professional web portfolio'
  ],
};

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
      <div className="mx-auto max-w-5xl px-4 pt-24 sm:pt-32">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center text-white">
            Our Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Explore our digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pb-16 sm:pb-24 md:pb-32">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
