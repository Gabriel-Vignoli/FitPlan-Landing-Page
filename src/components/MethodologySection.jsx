import Button from "./Button";
import MethodologyCard from "./MethodologyCard ";
import { Users, Zap, Gauge, Eye, BarChart3 } from "lucide-react";

const MethodologySection = () => {
  return (
    <section
      className="flex flex-col gap-8 bg-primary/70 p-4 md:gap-12 md:p-8 lg:gap-16 lg:p-16"
      id="metodologia"
    >
      <div>
        {/* Hat */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-black/90 px-3 py-2 backdrop-blur md:px-4 md:py-3">
          <Users className="h-3 w-3 text-primary md:h-4 md:w-4" />
          <span className="text-xs font-medium md:text-sm">
            Faça parte da Montanini Academy
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-4 md:mt-6 md:flex-row md:items-end md:justify-between md:gap-0">
          {/* Title */}
          <h1 className="font-changa text-2xl uppercase text-white sm:text-3xl md:text-4xl lg:text-heading">
            Conheça a Nossa <br />
            Metodologia
          </h1>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-6 lg:gap-10">
            <Button
              variant="primary"
              className="w-full px-4 py-2 sm:min-w-[180px] md:min-w-[200px] md:px-6 md:py-3 lg:min-w-[220px]"
              icon={<Eye size={16} className="md:h-[18px] md:w-[18px]" />}
            >
              Fazer Parte
            </Button>
          </div>
        </div>
      </div>

      <div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MethodologyCard
            icon={<Zap className="h-6 w-6 text-primary" />}
            title="Energia"
            description="Treinos planejados para garantir disposição durante e após os exercícios, sem quedas bruscas de energia."
          />
          <MethodologyCard
            icon={<Gauge className="h-6 w-6 text-primary" />}
            title="Performance"
            description="Métodos baseados na ciência do movimento para maximizar força, resistência e explosão muscular."
          />
          <MethodologyCard
            icon={<Eye className="h-6 w-6 text-primary" />}
            title="Foco"
            description="Técnicas de concentração e respiração para melhorar a conexão mente-músculo e manter o ritmo."
          />
          <MethodologyCard
            icon={<BarChart3 className="h-6 w-6 text-primary" />}
            title="Desempenho"
            description="Métodos progressivos para superar limites e transformar treino em resultado."
          />
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
