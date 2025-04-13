import { ArrowDown } from "lucide-react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 flex w-full items-center justify-between border-white/10 bg-black/25 px-16 py-4">
      <img src="/logo.svg" alt="" className="cursor-pointer pointer-events-auto" />

      <nav className="font-jakarta pointer-events-auto flex items-center justify-center gap-5 text-[16px] text-gray-300">
        <a
          href="#"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Para quem é
        </a>
        <a
          href="#"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Sobre
        </a>
        <a
          href="#"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Metodologia
        </a>
        <a
          href="#"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Alunos
        </a>
        <a
          href="#"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          APP
        </a>
        <a
          href="#"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Planos
        </a>
        <a
          href="#"
          className="cursor-pointer transition-colors duration-200 hover:text-white"
        >
          FAQ
        </a>
      </nav>

      <Button variant="primary" className="cursor-pointer pointer-events-auto" icon={<ArrowDown size={18} />}></Button>
    </div>
  );
};

export default Header;
