import TeamMemberCard from './TeamMemberCard';

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-black/50">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Who We Are</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <TeamMemberCard
                name="Yasiru Rathnayaka"
                role="Associate Technical Lead at Sysco Labs (PVT) LTD"
                imageUrl="/images/team/yasiru.jpg"
                linkedinUrl="https://www.linkedin.com/in/yasiru-rathnayaka/"
                imagePosition="down"
              />
              <TeamMemberCard
                name="Thisun Dayarathna"
                role="Senior Software Engineer at Sysco Labs (PVT) LTD"
                imageUrl="/images/team/thisun.jpg"
                linkedinUrl="https://www.linkedin.com/in/thisundayarathna/"
              />
              <TeamMemberCard
                name="Savindu Ekanayake"
                role="Senior Software Engineer at Sysco Lab (PVT) LTD"
                imageUrl="/images/team/savindu.jpg"
                linkedinUrl="https://www.linkedin.com/in/savinduekanayake/"
              />
              <TeamMemberCard
                name="Dineth Athapaththu"
                role="Senior Software Engineer at Sysco Labs (Pvt) Ltd"
                imageUrl="/images/team/dineth.jpg"
                linkedinUrl="https://www.linkedin.com/in/dineth-athapaththu/"
              />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
