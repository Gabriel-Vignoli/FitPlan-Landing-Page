const SystemSection = () => {
    return ( 
      <section className="flex flex-col gap-16 p-16 items-center justify-center">
        {/* Title */}
        <h1 className="font-changa text-heading uppercase">
          Nosso Sistema
        </h1>
  
        <div className="w-full h-[70vh] border-white/10 border-2 rounded-3xl shadow-[0_4px_24px_rgba(255,255,255,0.2),inset_0_4px_12px_rgba(255,255,255,0.3)]">
          <img
            src="/assets/system.png"
            alt="Sistema Vortex Fit"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </section>
    );
  };
  
  export default SystemSection;
  