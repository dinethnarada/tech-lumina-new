const Approach = () => {
  const steps = [
    {
      icon: (
        <svg className="w-16 h-16 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'DISCOVERY & PLANNING',
      description: "It's talking time! We will have thorough discussions with you to understand your business, budget, and timeline requirements. We will work closely with you throughout the development process to ensure alignment with your evolving needs."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      title: 'DESIGN & DEVELOPMENT',
      description: "It's show time! Our experts will begin building your dream using cutting-edge technologies and industry best practices, all while brainstorming innovative ideas."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'TESTING & DEPLOYMENT',
      description: "It's rehearsal time and opening night! We will rigorously test the application for all its functional and non-functional requirements and obtain your approval. Once you're satisfied, your application will go live!"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: 'SUPPORT & MAINTENANCE',
      description: "It's time for encore! We are still with you. We will make sure your application runs smoothly and optimally while seamlessly integrating any new requirements and changes."
    }
  ];

  return (
    <section id="approach" className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
          <p className="text-xl text-gray-300">A systematic process that ensures success in every project</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 px-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
