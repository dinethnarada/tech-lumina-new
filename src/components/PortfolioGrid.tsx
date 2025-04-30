import React from 'react';
import Image from 'next/image';
import PortfolioCard from '@/components/PortfolioCard';

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A fully responsive e-commerce solution with integrated payment gateways and inventory management.',
      imageSrc: '/portfolio/ecommerce.jpg',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      description: 'Interactive dashboard for financial analytics with real-time data visualization and reporting tools.',
      imageSrc: '/portfolio/dashboard.jpg',
      technologies: ['React', 'D3.js', 'Firebase', 'Tailwind CSS'],
      featured: true
    },
    {
      id: 3,
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'Patient management system with appointment scheduling and medical record tracking.',
      imageSrc: '/portfolio/healthcare.jpg',
      technologies: ['React Native', 'Express.js', 'PostgreSQL'],
      featured: false
    },
    {
      id: 4,
      title: 'Educational Platform',
      category: 'Web Development',
      description: 'Online learning platform with course management, video streaming, and progress tracking.',
      imageSrc: '/portfolio/education.jpg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
      featured: true
    },
    {
      id: 5,
      title: 'Real Estate Website',
      category: 'Web Development',
      description: 'Property listing and management system with advanced search and filtering capabilities.',
      imageSrc: '/portfolio/realestate.jpg',
      technologies: ['Next.js', 'GraphQL', 'MongoDB'],
      featured: false
    },
    {
      id: 6,
      title: 'Travel Booking App',
      category: 'UI/UX Design',
      description: 'User-friendly travel booking interface with itinerary planning and recommendation features.',
      imageSrc: '/portfolio/travel.jpg',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      featured: false
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black/50 via-[#1E0B2D]/50 to-black/50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">Featured Projects</h2>
          
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-[#6B17ED] rounded-full text-sm font-bold">
              All Projects
            </button>
            <button className="px-4 py-2 bg-transparent border border-white/20 hover:border-white/40 rounded-full text-sm font-bold transition-all duration-300">
              Web Development
            </button>
            <button className="px-4 py-2 bg-transparent border border-white/20 hover:border-white/40 rounded-full text-sm font-bold transition-all duration-300">
              UI/UX Design
            </button>
            <button className="px-4 py-2 bg-transparent border border-white/20 hover:border-white/40 rounded-full text-sm font-bold transition-all duration-300">
              Mobile Apps
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-transparent border border-[#6B17ED] hover:bg-[#6B17ED]/10 text-white rounded-full transition-all duration-300 font-bold">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
