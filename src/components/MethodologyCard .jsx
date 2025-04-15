const MethodologyCard = ({ icon, title, description }) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105">
      {/* Icon Container */}
      <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border border-primary/40 bg-primary/10 shadow-[inset_0_4px_16px_rgba(245,189,4,0.7)] backdrop-blur">
        {icon}
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="font-changa text-card uppercase">{title}</h3>
        <p className="text-description text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default MethodologyCard;
