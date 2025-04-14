import { useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import Button from "./Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-black/25 px-4 sm:px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between border-b border-white/10">
      {/* Logo */}
      <a href="#" className="cursor-pointer">
        <img src="/logo.svg" alt="Logo" className="h-8 sm:h-10" />
      </a>

      {/* Menu de navegação (desktop) - aparece só em lg e maiores */}
      <nav className="hidden lg:flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 font-jakarta text-gray-300">
        <a href="#para-quem-e" className="text-sm sm:text-base lg:text-[16px] transition-colors duration-200 hover:text-white">Para quem é</a>
        <a href="#sobre" className="text-sm sm:text-base lg:text-[16px] transition-colors duration-200 hover:text-white">Sobre</a>
        <a href="#metodologia" className="text-sm sm:text-base lg:text-[16px] transition-colors duration-200 hover:text-white">Metodologia</a>
        <a href="#app" className="text-sm sm:text-base lg:text-[16px] transition-colors duration-200 hover:text-white">APP</a>
        <a href="#planos" className="text-sm sm:text-base lg:text-[16px] transition-colors duration-200 hover:text-white">Planos</a>
        <a href="#faq" className="text-sm sm:text-base lg:text-[16px] transition-colors duration-200 hover:text-white">FAQ</a>
      </nav>

      {/* Botão (aparece só em lg e maiores) */}
      <div className="hidden lg:flex">
        <Button
          variant="primary"
          href="#planos"
          icon={<ArrowDown size={18} />}
          className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5"
        />
      </div>

      {/* Menu hambúrguer (aparece em md e menores) */}
      <button
        className="lg:hidden text-white z-50"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu mobile aberto (aparece em md e menores) */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md p-6 flex flex-col items-center gap-6 rounded-b-lg shadow-lg lg:hidden z-40">
          <a
            href="#para-quem-e"
            className="text-white text-lg px-4 py-2 rounded-md w-full text-center transition-colors duration-200 hover:bg-yellow-500 hover:text-black"
            onClick={handleLinkClick}
          >
            Para quem é
          </a>
          <a
            href="#sobre"
            className="text-white text-lg px-4 py-2 rounded-md w-full text-center transition-colors duration-200 hover:bg-yellow-500 hover:text-black"
            onClick={handleLinkClick}
          >
            Sobre
          </a>
          <a
            href="#metodologia"
            className="text-white text-lg px-4 py-2 rounded-md w-full text-center transition-colors duration-200 hover:bg-yellow-500 hover:text-black"
            onClick={handleLinkClick}
          >
            Metodologia
          </a>
          <a
            href="#app"
            className="text-white text-lg px-4 py-2 rounded-md w-full text-center transition-colors duration-200 hover:bg-yellow-500 hover:text-black"
            onClick={handleLinkClick}
          >
            APP
          </a>
          <a
            href="#planos"
            className="text-white text-lg px-4 py-2 rounded-md w-full text-center transition-colors duration-200 hover:bg-yellow-500 hover:text-black"
            onClick={handleLinkClick}
          >
            Planos
          </a>
          <a
            href="#faq"
            className="text-white text-lg px-4 py-2 rounded-md w-full text-center transition-colors duration-200 hover:bg-yellow-500 hover:text-black"
            onClick={handleLinkClick}
          >
            FAQ
          </a>
        </nav>
      )}
    </div>
  );
};

export default Header;
