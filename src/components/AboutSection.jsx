import Button from "./Button";
import { Flame, ArrowDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="mt-6 sm:mt-8 md:mt-12 flex w-full flex-col md:flex-row" id="sobre">
      {/* Left */}
      <div className="flex w-full md:w-1/2 flex-col gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-8 lg:p-12" >
        {/* Hat */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 md:px-4 md:py-3 backdrop-blur">
          <Flame className="h-3 w-3 md:h-4 md:w-4 text-primary" />
          <span className="text-xs md:text-sm font-medium">Mais que uma academia</span>
        </div>

        {/* Title */}
        <h1 className="font-changa text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white whitespace-nowrap">
          Sua Evolução <br className="hidden sm:block" />
          Começa Aqui
        </h1>

        {/* Description */}
        <p className="font-jakarta text-sm sm:text-base md:text-lg text-white/70 max-w-lg">
          Somos um espaço para quem busca transformação, superação e resultados
          reais. Com treinos eficazes, estrutura de ponta e suporte
          profissional, ajudamos você a atingir seus objetivos, seja qual for o
          seu nível. Na Vortex Fit, cada treino é um passo rumo à sua melhor
          versão!
        </p>

        {/* Buttons */}
        <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6">
          <Button 
            variant="primary" 
            className="w-full lg:w-auto px-4 py-2 md:px-4 lg:px-6 md:py-2.5 text-sm md:text-base whitespace-nowrap"
            icon={<ArrowDown size={16} className="md:w-5 md:h-5" />}
          >
            Adquirir Plano
          </Button>
          <Button 
            variant="secondary"
            className="w-full lg:w-auto px-4 py-2 md:px-4 lg:px-6 md:py-2.5 text-sm md:text-base whitespace-nowrap" 
            icon={<img src="/wahtsapp-icon.svg" className="h-4 w-4 md:h-5 md:w-5" />}
          >
            Entrar em contato
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="flex w-full md:w-1/2 h-64 sm:h-80 md:h-auto items-center justify-center">
        <img
          src="/hero-section-img.png"
          alt="Sobre nós"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;