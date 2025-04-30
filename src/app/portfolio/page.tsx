import { Metadata } from 'next';
import PortfolioCard from '@/components/PortfolioCard';
import { portfolioItems } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Tech Lumina - Our Portfolio | Showcasing Our Digital Excellence',
  description: 'Explore Tech Lumina\'s portfolio of web development projects, UI/UX designs, and digital solutions that demonstrate our expertise and innovation.',
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
      <div className="mx-auto max-w-5xl md:px-4 pt-32">
        <div className="px-6 md:px-0 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            Explore our digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0 pb-32">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
