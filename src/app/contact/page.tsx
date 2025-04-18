import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="text-white relative min-h-screen">
      <div className="relative z-10">
        <section className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
          <div className="container mx-auto px-6 pt-32 pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h1>
                <p className="text-xl text-gray-300">Ready to start your next project?</p>
                <p className="text-xl text-gray-300">Contact us today and let&apos;s discuss how we can help bring your vision to life.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
