import QuestionCard from './QuestionCard';

const Questions = () => {
  return (
    <section id="questions" className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
      <div className="relative px-6">
      {/* Divider Line */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="rounded-[32px] border border-white/20 p-8 md:p-12">
          <div className="grid gap-8">
          <QuestionCard
            question="How Do You Handle Ongoing Maintenance And Updates After A Website Launch?"
            answer="We provide comprehensive post-launch support with regular maintenance schedules, security updates, performance monitoring, and content updates. Our team ensures your website stays secure, fast, and up-to-date with the latest web standards."
          />
          <QuestionCard
            question="What Technologies Do You Use For Web Development?"
            answer="We utilize modern technologies like React, Next.js, Node.js and Spring Boot for frontend and backend development. Our tech stack is constantly updated to include the latest and most efficient tools while maintaining stability and performance."
          />
          <QuestionCard
            question="How Do You Ensure Website Security?"
            answer="We implement multiple layers of security including SSL certificates, regular security audits, automated backups, and continuous monitoring. Our team follows the latest security best practices and keeps all systems updated."
          />
          <QuestionCard
            question="What Is Your Development Process?"
            answer="Our development process follows an agile methodology with clear phases: planning, design, development, testing, and deployment. We maintain transparent communication throughout and provide regular updates on progress."
          />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Questions;
