import { Metadata } from 'next';
import PortfolioCard from '../../components/PortfolioCard';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce solution with integrated payment gateways and inventory management.',
    imageSrc: '/portfolio/ecommerce.jpg'
  },
  {
    id: 2,
    title: 'Hotel Booking Website',
    description: 'A user-friendly hotel booking website with advanced search and filtering capabilities.',
    imageSrc: '/portfolio/hotel.jpg'
  },
  {
    id: 3,
    title: 'Real Estate Website',
    description: 'Property listing and management system with advanced search and filtering capabilities.',
    imageSrc: '/portfolio/realestate.jpg'
  },
  {
    id: 4,
    title: 'Travel Agency Website',
    description: 'User-friendly travel booking interface with itinerary planning and recommendation features.',
    imageSrc: '/portfolio/travel.jpg'
  },
  {
    id: 5,
    title: 'Blog Website',
    description: 'User-friendly blog website with advanced search and filtering capabilities.',
    imageSrc: '/portfolio/blog.jpg'
  }
];

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
    <section className="min-h-screen bg-gradient-to-b from-black/50 via-[#1E0B2D]/50 to-black/50">
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
