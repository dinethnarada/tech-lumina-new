import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="text-white relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        
        {/* About Us Content */}
        <div className="min-h-screen bg-gradient-to-b from-black/50 via-[#1C054D]/50 to-black/50">
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                About Tech Lumina
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Tech Lumina is a pioneering force in digital innovation, specializing in cutting-edge web development and digital solutions. Our mission is to illuminate the path to digital excellence for businesses worldwide.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Founded with a vision to transform digital landscapes, we combine creativity with technical expertise to deliver exceptional results that drive growth and innovation.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/about-us-2.jpg"
                    alt="Tech Lumina Team"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>

              {/* Values Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-6 rounded-lg border border-violet-500/20 bg-violet-900/5">
                  <h3 className="text-xl font-bold mb-4">Innovation</h3>
                  <p className="text-gray-300">
                    We constantly push boundaries and embrace new technologies to stay ahead of the curve.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-violet-500/20 bg-violet-900/5">
                  <h3 className="text-xl font-bold mb-4">Excellence</h3>
                  <p className="text-gray-300">
                    Quality is at the heart of everything we do, from code to customer service.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-violet-500/20 bg-violet-900/5">
                  <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                  <p className="text-gray-300">
                    We work closely with our clients to ensure their vision becomes reality.
                  </p>
                </div>
              </div>

              {/* Team Section */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  Our Leadership Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-violet-500/20">
                      <Image
                        src="/images/savindu.jpg"
                        alt="CEO"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">John Smith</h3>
                    <p className="text-violet-400">CEO & Founder</p>
                  </div>
                  <div className="space-y-4">
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-violet-500/20">
                      <Image
                        src="/images/thisun.jpg"
                        alt="CTO"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Sarah Johnson</h3>
                    <p className="text-violet-400">CTO</p>
                  </div>
                  <div className="space-y-4">
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-violet-500/20">
                      <Image
                        src="/images/yasiru.jpg"
                        alt="Creative Director"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Michael Chen</h3>
                    <p className="text-violet-400">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <Footer />
      </div>
    </main>
  );
}
