interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex items-start gap-3 p-2 rounded-lg border border-violet-500/20 bg-violet-900/5 hover:border-violet-500/40 hover:bg-violet-900/10 transition-all duration-300 h-[120px] overflow-hidden">
      <div className="w-10 h-10 rounded-lg bg-[#6B17ED]/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold mb-1.5 truncate">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
