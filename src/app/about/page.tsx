import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';

export default function About() {
  return (
    <main className="text-white relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <AboutHero />
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

        {/* Who We Are Section */}
        <div className="text-center py-16 bg-gradient-to-r from-violet-900/30 via-fuchsia-900/30 to-violet-900/30 rounded-2xl px-4">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-violet-500/20 hover:border-violet-500/50 transition-all">
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
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-violet-500/20 hover:border-violet-500/50 transition-all">
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
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-violet-500/20 hover:border-violet-500/50 transition-all">
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
                  <div className="space-y-4">
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-violet-500/20 hover:border-violet-500/50 transition-all">
                      <Image
                        src="/images/team-member-4.jpg"
                        alt="Technical Lead"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Emily Zhang</h3>
                    <p className="text-violet-400">Technical Lead</p>
                  </div>
                </div>
              </div>
            </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <Footer />
    </main>
  );
}
