const MethodologyCard = ({ icon, title, description }) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-4 sm:gap-5 md:gap-6 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black/90 p-4 sm:p-5 md:p-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105">
      {/* Icon Container */}
      <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-full border border-primary/40 bg-primary/10 shadow-[inset_0_4px_16px_rgba(245,189,4,0.7)] backdrop-blur">
        {icon}
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center gap-1 sm:gap-2 text-center">
        <h3 className="font-changa text-card uppercase text-lg sm:text-xl md:text-2xl">
          {title}
        </h3>
        <p className="text-description text-white/70 text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MethodologyCard;