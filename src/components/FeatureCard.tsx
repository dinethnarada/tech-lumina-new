interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex items-start gap-6 p-6 rounded-lg border border-violet-500/20 bg-violet-900/5 hover:border-violet-500/40 hover:bg-violet-900/10 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-[#6B17ED]/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
