import React from 'react';
import Image from 'next/image';
import { PortfolioItem } from '@/types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#6B17ED]/20">
      {/* Image Container */}
      <div className="relative w-full overflow-hidden aspect-[4/3]">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU0LS0yMi4qIiUiKiIxMS8oLzk2NT47PDw/QUJBODpGR0f/2wBDAR0XFyMeIx4aGkc5IjEnR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        
        <p className="text-sm text-gray-300 mb-4">{item.description}</p>

      </div>
      
      {/* Overlay with Explore button - only visible on hover */}
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#806c00] to-[#6B17ED] text-white rounded-md font-medium text-sm transform transition-transform duration-300 hover:opacity-90"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
