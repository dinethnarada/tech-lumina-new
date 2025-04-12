import Image from 'next/image';

interface ServiceCardProps {
  imageSrc?: string;
  title: string;
  description: string;
}

const ServiceCard = ({ imageSrc = '/placeholder.jpg', title, description }: ServiceCardProps) => {
  return (
    <div className="group h-[400px] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-1">
      <div className="flex h-full">
        {/* Image Container */}
        <div className="w-1/2 p-6">
          <div className="relative h-full rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-px bg-gradient-to-b from-transparent via-white/10 to-transparent my-6" />
        
        {/* Content */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-2xl mb-4 font-bold">{title}</h3>
          <p className="text-gray-400 mb-6 font-regular text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
