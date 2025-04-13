interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 rounded-lg border border-violet-500/20 bg-violet-900/5 hover:border-violet-500/40 hover:bg-violet-900/10 transition-all duration-300 h-auto md:h-[128px] overflow-hidden">
      <div className="w-16 h-16 md:w-12 md:h-12 rounded-lg bg-[#6B17ED]/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0 text-center md:text-left">
        <h3 className="text-sm md:text-base font-bold mb-2 truncate">{title}</h3>
        <p className="text-gray-300 text-sm md:text-sm line-clamp-2 md:line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
