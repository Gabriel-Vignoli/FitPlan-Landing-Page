const SystemSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8 border-b-2 border-b-white/10 p-4 sm:gap-12 sm:p-8 lg:gap-16 lg:p-16"
      id="app"
    >
      {/* Title */}
      <h1 className="text-center font-changa text-2xl uppercase text-white sm:text-3xl md:text-4xl lg:text-heading">
        Nosso Sistema
      </h1>

      <div className="w-full rounded-2xl border-2 border-white/10 shadow-[0_4px_24px_rgba(255,255,255,0.2),inset_0_4px_12px_rgba(255,255,255,0.3)]">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:aspect-[16/8] md:aspect-[16/7]">
          <img
            src="/assets/system.png"
            alt="Sistema Vortex Fit"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
