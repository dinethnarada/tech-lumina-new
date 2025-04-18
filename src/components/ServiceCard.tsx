import Image from 'next/image';

interface ServiceCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  priority?: boolean;
}

const ServiceCard = ({ imageSrc = '/placeholder.jpg', title, description, priority = false }: ServiceCardProps) => {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row min-h-[400px] md:h-[400px]">
        {/* Image Container */}
        <div className="w-full md:w-1/2 p-4 md:p-6">
          <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU0LS0yMi4qIiUiKiIxMS8oLzk2NT47PDw/QUJBODpGR0f/2wBDAR0XFyMeIx4aGkc5IjEnR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </div>
        </div>
        
        {/* Divider - Only visible on desktop */}
        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent my-6" />
        
        {/* Content */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl mb-2 md:mb-4 font-bold">{title}</h3>
          <p className="text-sm md:text-base text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
