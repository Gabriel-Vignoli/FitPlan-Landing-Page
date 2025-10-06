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

      <div className="w-full rounded-[8px] border-2 border-white/10 shadow-[0_8px_30px_rgba(255,255,255,0.06)]">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[8px] shadow-[0_4px_20px_rgba(255,255,255,0.08)] sm:aspect-[16/8] md:aspect-[16/7]">
          <img
            src="/sistema.png"
            alt="Sistema Montanini Academy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SystemSection;