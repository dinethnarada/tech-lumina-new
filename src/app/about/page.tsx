import AboutHero from '@/components/AboutHero';
import WhoWeAre from '@/components/WhoWeAre';
import Values from '@/components/Values';
import Approach from '@/components/Approach';
import Divider from '@/components/Divider';

export const metadata = {
  title: 'Tech Lumina - Crafting Tomorrow\'s Websites, Today | About',
  description: 'Learn more about us',
};

export default function About() {
  return (
    <main className="text-white relative min-h-screen mx-auto max-w-5xl md:px-4">
      <div className="relative z-10 px-6 md:px-0">
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
