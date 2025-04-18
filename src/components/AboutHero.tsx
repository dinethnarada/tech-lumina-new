import Image from 'next/image';

const AboutHero = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-transparent via-[#1C054D]/50 to-black/50">
      <div className="container mx-auto px-6 pt-32">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            About Tech Lumina
          </h1>
          
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-lg relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                  We are a bunch of innovative and creative minds dedicated to designing and developing scalable, durable web solutions bespoked to meet your unique demands. We bring your dream of stepping into the digital world a reality through bleeding-edge technologies and exceptional design.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                  We are ready to take on the responsibility of driving large-scale digital transformation for your business. We can cater to meeting your budget and timeline requirements. Our out-of-the-box thinking, combined with expertise across all tiers of web application development—including, but not limited to, architectural design, front-end, and back-end implementation—guarantees an enterprise-grade solution.
                </p>
              </div>
              {/* Divider */}
              <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-gray-400/20 to-transparent absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent my-8"></div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-us-1.jpg"
                  alt="Tech Lumina Team"
                  fill
                  className="object-cover"
                  quality={85}
                  loading="eager"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJyEwMTQ5Pzc2ODoyMjpHREZFNjpGOjIxWU9RUV9iXWJfP0FPWnNYWF3/2wBDARUXFx0dHR4eHR0dHV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
