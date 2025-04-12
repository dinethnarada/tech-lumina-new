"use client";

import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const FeaturedProjects = () => {
  return (
    <section 
      id="featured-projects"
      className="relative min-h-screen bg-gradient-to-b from-transparent via-[#332b00]/30 to-black/50"
    >
      <div id="digital-solutions" className="relative z-10 max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Digital Solutions & Tech Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            imageSrc="/web-development.png"
            title="Web Development"
            description="Let's bring your business into digital space. We deliver web solutions tailored to your business requirements using bleeding-edge solutions."
            priority
          />
          <ServiceCard
            imageSrc="/ui-ux.jpg"
            title="UI/UX Design"
            description="Attract more customers into your business. We enhance customer experiences and engagement in your web application with intuitive user interfaces."
            priority
          />
          <ServiceCard
            imageSrc="/strategy.jpg"
            title="Digital Strategy"
            description="Its your time to lead the digital revolution. We provide consultancy and guidance for your digital transformation journey."
          />
          <ServiceCard
            imageSrc="/seo.jpg"
            title="SEO Optimization"
            description="Mark your place in the digital space. We utilise progressive Search Engine Optimization stratergies to attract more users to your web application."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
