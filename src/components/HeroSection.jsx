import React from "react";
import Button from "./Button";
import { Sparkles, Info, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-start justify-center bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3),rgba(0,0,0,0)),linear-gradient(to_top,rgba(0,0,0,0.5),rgba(0,0,0,0.15),rgba(0,0,0,0)),url('/bg-hero.jpeg')] bg-cover bg-center bg-no-repeat px-8 pt-0 sm:h-[80vh] md:h-[90vh] md:px-16 md:pt-0">
      <div className="max-w-7[] flex w-full flex-col items-start gap-4 sm:gap-5 md:gap-7">
        {/* Hat */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 backdrop-blur sm:px-4 sm:py-2">
          <Sparkles className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
          <span className="text-xs font-medium sm:text-sm">
            Seu novo começo Começa Aqui
          </span>
        </div>

        {/* Title */}
        <h1 className="font-changa text-2xl uppercase text-white sm:text-3xl md:text-4xl lg:text-6xl xl:text-heading">
          <span className="whitespace-nowrap">O Primeiro Passo</span> <br />
          <span className="whitespace-nowrap">Para o Extraordinário</span>{" "}
          <br />
          <span className="whitespace-nowrap">
            Começa NA <span className="text-primary">Montanini</span>
          </span>
        </h1>

        {/* Description */}
        <p className="xs:max-w-[360px] line-clamp-3 max-w-[320px] font-jakarta text-sm text-white/70 sm:max-w-[420px] sm:text-base md:max-w-[520px] md:text-lg lg:line-clamp-none lg:max-w-[720px]">
          Na Montanini Academy, cada treino é uma jornada de força e
          resistência. Supere seus limites, entre no movimento e conquiste seus
          objetivos como nunca antes!
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-4 sm:mt-5 sm:gap-6 md:mt-6">
          <Button
            variant="primary"
            href="#planos"
            icon={<ArrowRight size={18} className="md:h-5 md:w-5" />}
            className="w-full sm:w-auto"
          >
            Junte-se ao nosso time
          </Button>
          <Button
            variant="secondary"
            icon={<Info size={18} className="md:h-5 md:w-5" />}
            href="#sobre"
            className="w-full sm:w-auto"
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
