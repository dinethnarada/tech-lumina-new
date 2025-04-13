import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="text-white relative min-h-screen">
      <div className="relative z-10">
        <section className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
          <div className="container mx-auto px-6 pt-32 pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">GET IN TOUCH</h1>
                <p className="text-xl text-gray-300">READY TO START YOUR NEXT PROJECT? CONTACT US TODAY AND LET'S DISCUSS HOW WE CAN HELP BRING YOUR VISION TO LIFE.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
