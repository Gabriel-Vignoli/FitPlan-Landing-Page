const Header = () => {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 flex w-full items-center justify-between border-white/10 bg-black/25 px-16 py-4">
      <p className="pointer-events-auto text-3xl font-changa font-bold text-white leading-none">
        VORTEX
      </p>

      <nav className="pointer-events-auto flex items-center justify-center gap-5 font-jakarta text-[16px] text-gray-300">
        <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">Para quem é</a>
        <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">Sobre</a>
        <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">Metodologia</a>
        <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">Alunos</a>
        <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">APP</a>
        <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">Planos</a>
        <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">FAQ</a>
      </nav>

      <button
        className="pointer-events-auto rounded-full bg-primary px-7 py-3 text-[16px] font-jakarta text-white transition hover:brightness-110"
        aria-label="Adquirir Plano"
      >
        Adquirir Plano
      </button>
    </div>
  );
};

export default Header;
