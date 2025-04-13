const Values = () => {
  const values = [
    {
      icon: (
        <svg className="w-12 h-12 text-violet-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: 'INNOVATION',
      description: 'We thrive to keep the technology used at Tech Lumina up-to-date while utilizing modern best practices and solutions.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-violet-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
        </svg>
      ),
      title: 'EXCELLENCE',
      description: 'Excelence is the key at Tech Lumina. We ensure that every project we deliver meets your business, budget, and timeline requirements.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-violet-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 017 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 01-.014.002H7.022zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 004 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z"/>
        </svg>
      ),
      title: 'PARTNERSHIP',
      description: 'We value collaborative relationships with our partners, ensuring mutual respect and understanding as we work toward achieving our shared goals.'
    }
  ];

  return (
    <section id="values" className="min-h-screen bg-gradient-to-b from-black/50 via-[#1C054D]/50 to-black/50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-gray-300">Guided by principles that drive innovation and excellence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/10 transition-all"
            >
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
