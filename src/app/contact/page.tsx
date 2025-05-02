import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: 'Tech Lumina - Crafting Tomorrow\'s Websites, Today | Contact',
  description: 'Get in touch with us',
};

export default function Contact() {
  return (
    <main className="text-white relative min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
      <div className="relative z-10">
        <div className="mx-auto max-w-5xl px-4 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8">Get In Touch</h1>
            <p className="text-lg sm:text-xl text-gray-300">Ready to start your next project?</p>
            <p className="text-lg sm:text-xl text-gray-300">Contact us today and let&apos;s discuss how we can help bring your vision to life.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
