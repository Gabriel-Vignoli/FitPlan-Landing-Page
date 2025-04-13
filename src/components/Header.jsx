import { ArrowDown } from "lucide-react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 flex w-full items-center justify-between border-white/10 bg-black/25 px-16 py-4">
      <a href="#" className="pointer-events-auto">
        <img src="/logo.svg" alt="Logo" className="cursor-pointer" />
      </a>

      <nav className="pointer-events-auto flex items-center justify-center gap-5 font-jakarta text-[16px] text-gray-300">
        <a
          href="#para-quem-e"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Para quem é
        </a>
        <a
          href="#sobre"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Sobre
        </a>
        <a
          href="#metodologia"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Metodologia
        </a>
        <a
          href="#app"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          APP
        </a>
        <a
          href="#planos"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Planos
        </a>
        <a
          href="#faq"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          FAQ
        </a>
      </nav>

      <Button
        variant="primary"
        href="#planos"
        className="pointer-events-auto cursor-pointer"
        icon={<ArrowDown size={18} />}
      ></Button>
    </div>
  );
};

export default Header;
