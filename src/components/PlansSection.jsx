import PlanList from "./PlanList";
import { Wallet } from "lucide-react"

const PlansSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 border-b-2 border-b-white/10 p-16" id="planos">
      <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-6">
        {/* Hat */}
        <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-3 backdrop-blur">
          <Wallet className="h-4 w-4 text-primary" />
          <span className="text-hat font-medium">Seu Orçamento</span>
        </div>

        {/* Title */}
        <h1 className="text-center font-changa text-heading uppercase text-white">
          ESCOLHA O PLANO IDEAL
        </h1>

        {/* Description */}
        <p className="max-w-[720px] text-center font-jakarta text-description text-white/70">
        Os melhores equipamentos e infraestrutura com mensalidades acessíveis.
        </p>
      </div>
      {/* Cards*/}
      <PlanList></PlanList>
      </div>
    </section>
  );
};

export default PlansSection;
