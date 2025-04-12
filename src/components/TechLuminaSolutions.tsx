import Image from 'next/image';
import FeatureCard from './FeatureCard';

const TechLuminaSolutions = () => {
  return (
    <section 
      id="tech-lumina-solutions"
      className="relative min-h-screen"
    >
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Tech Lumina Solutions</h2>
        {/* Quote Section */}
        <div className="text-center max-w-3xl mx-auto z-10 mb-20">
          <p className="text-2xl md:text-3xl font-regular italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-500 to-indigo-500">
            &ldquo;Some people don&apos;t like change, but you need to embrace change if the alternative is a disaster.&rdquo;
          </p>
          <p className="mt-4 text-gray-300">- Elon Musk</p>
        </div>
        <div className="mt-20 bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-lg relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Left Column - Features */}
          <div className="space-y-4 z-10 flex flex-col justify-between h-[384px]">
            <FeatureCard
              title="Expert Team"
              description="Tech Lumina team consists of experts with years of experience in developing and maintaining enterprise-level eCommerce platforms for industry giants."
              icon={
                <svg className="w-6 h-6 text-[#6B17ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />

            <FeatureCard
              title="Cutting-edge Tech"
              description="At Tech Lumina we always keep our tech stack updated while carefully analyzing what is best for you."
              icon={
                <svg className="w-6 h-6 text-[#6B17ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />

            <FeatureCard
              title="Dedicated Support"
              description="We are not done once the product is live. We guarantee 24/7 support and maintenance for your web applications."
              icon={
                <svg className="w-6 h-6 text-[#6B17ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-gray-400/20 to-transparent absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent my-8"></div>

          {/* Right Column - Image */}
          <div className="relative h-[384px] rounded-lg overflow-hidden z-10 bg-gray-900/50">
            <Image
              src="/images/about-us-2.jpg"
              alt="Modern workspace"
              fill
              className="object-cover transition-opacity duration-300 hover:opacity-95"
              quality={85}
              loading="eager"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechLuminaSolutions;
