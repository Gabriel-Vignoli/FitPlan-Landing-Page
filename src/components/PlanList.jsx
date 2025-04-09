import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import PlanCard from "./PlanCard";

const PlanList = () => {
  const plans = [
    {
      title: "Plano Básico",
      price: "R$ 69,90/mês",
      benefits: [
        "Treino 3x por semana",
        "Acesso à área de musculação",
        "Avaliação física inicial",
      ],
    },
    {
      title: "Plano Completo",
      price: "R$ 99,90/mês",
      benefits: [
        "Treino todos os dias da semana",
        "Acompanhamento com personal",
        "Acesso à área de musculação",
        "Avaliação física trimestral",
        "Acesso ao nosso sistema",
      ],
    },
    {
      title: "Plano Premium",
      price: "R$ 149,90/mês",
      benefits: [
        "Treino todos os dias da semana",
        "Acompanhamento com personal exclusivo",
        "Acesso a todas as modalidades",
        "Avaliação física mensal",
        "Acesso ao nosso sistema VIP",
        "Nutricionista incluso",
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="flex flex-col items-center justify-center p-8">
      {/* Cards */}
      <div className="relative flex w-full items-center justify-center gap-8">
        <button
          onClick={handlePrevious}
          aria-label="Previous Plan"
          className="rounded-full border-2 border-primary p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-black"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex items-center justify-center gap-[16px]">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              benefits={plan.benefits}
              isSelected={index === selectedIndex}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next Plan"
          className="rounded-full border-2 border-primary p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-black"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-[20px] flex gap-[10px]">
        {plans.map((_, index) => (
          <button
            key={index}
            aria-label={`Select ${plans[index].title}`}
            onClick={() => setSelectedIndex(index)}
            className={`h-[12px] w-[12px] rounded-full transition-all ${
              index === selectedIndex ? "w-[20px] bg-yellow-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PlanList;
