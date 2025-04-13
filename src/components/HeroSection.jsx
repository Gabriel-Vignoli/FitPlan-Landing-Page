import React from "react";
import Button from "./Button";
import { Sparkles, Info, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-start gap-7 bg-[linear-gradient(to_right,rgba(0,0,0,0.85),rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/hero-section-img.png')] bg-cover bg-center bg-no-repeat px-16 pt-[170px]">
      {/* Hat */}
      <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-3 backdrop-blur">
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="text-hat font-medium">
          Seu novo começo Começa Aqui
        </span>
      </div>

      {/* Title */}
      <h1 className="font-changa text-heading uppercase">
        O Primeiro Passo <br />
        Para o Extraordinário <br />
        Começa NA <span className="text-primary">Montanini</span>
      </h1>

      {/* Description */}
      <p className="max-w-[720px] font-jakarta text-description text-white/70">
        Na Montanini Academy, cada treino é uma jornada de força e resistência.
        Supere seus limites, entre no movimento e conquiste seus objetivos como
        nunca antes!
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-6">
        <Button variant="primary" icon={<ArrowRight size={20} color="white" />}>
          Junte-se ao nosso time
        </Button>
        <Button variant="secondary" icon={<Info size={20} color="white" />}>
          Saiba Mais
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
