const SystemSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 border-b-2 border-b-white/10 p-16" id="app">
      {/* Title */}
      <h1 className="font-changa text-heading uppercase">Nosso Sistema</h1>

      <div className="h-[70vh] w-full rounded-3xl border-2 border-white/10 shadow-[0_4px_24px_rgba(255,255,255,0.2),inset_0_4px_12px_rgba(255,255,255,0.3)]">
        <img
          src="/assets/system.png"
          alt="Sistema Vortex Fit"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
};

export default SystemSection;
