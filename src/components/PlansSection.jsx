import PlanList from "./PlanList";
import { Wallet } from "lucide-react";

const PlansSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-12 border-b-2 border-b-white/10 px-4 py-12 sm:px-6 sm:py-16 md:gap-16 md:px-12 lg:px-20 xl:px-32"
      id="planos"
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-12 md:gap-16">
        {/* Top content */}
        <div className="flex flex-col items-center gap-4 px-2 sm:px-4 md:gap-6 md:px-0">
          {/* Hat */}
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <Wallet className="h-4 w-4 text-primary" />
            <span className="text-hat font-medium">Seu Orçamento</span>
          </div>

          {/* Title */}
          <h1 className="text-center font-changa text-2xl uppercase text-white sm:text-3xl md:text-4xl">
            ESCOLHA O PLANO IDEAL
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-center font-jakarta text-sm text-white/70 sm:text-base md:text-lg">
            Os melhores equipamentos e infraestrutura com mensalidades
            acessíveis.
          </p>
        </div>

        {/* Cards */}
        <PlanList />
      </div>
    </section>
  );
};

export default PlansSection;
