import AboutHero from '@/components/AboutHero';
import WhoWeAre from '@/components/WhoWeAre';
import Values from '@/components/Values';
import Approach from '@/components/Approach';
import Divider from '@/components/Divider';

export default function About() {
  return (
    <main className="text-white relative min-h-screen">
      <div className="relative z-10">
        <AboutHero />
        <Divider />
        <WhoWeAre />
        <Divider />
        <Values />
        <Divider />
        <Approach />
      </div>
    </main>
  );
}
