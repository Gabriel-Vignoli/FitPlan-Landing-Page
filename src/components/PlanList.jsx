import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PlanCard from "./PlanCard";

const PlanList = () => {
  const plans = [
    {
      title: "Plano Intermidiário",
      price: "R$ 80,00/mês",
      benefits: [
        "Treino 3x por semana",
        "Treino Individualizado",
        "Avaliação Antropométrica",
        "Adipometria",
      ],
    },
    {
      title: "Plano Avançado",
      price: "R$ 100,00/mês",
      benefits: [
        "Treino todos os dias da semana",
        "Treino Individualizado",
        "Avaliação Antropométrica",
        "Adipometria",
      ],
    },
    {
      title: "Funcional",
      price: "R$ 120,00/mês",
      benefits: [
        "Treino funcional com professora",
        "Acompanhamento com profissional",
        "Avaliação Antropométrica",
        "Adipometria",
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="flex flex-col items-center justify-center bg-transparent p-4 md:p-6 lg:p-4 xl:p-8">
      {/* Mobile Version with Smaller Buttons */}
      <div className="relative flex w-full items-center justify-center gap-1 lg:hidden">
        <button
          onClick={handlePrevious}
          aria-label="Plano anterior"
          className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-black p-1 text-primary transition-all duration-300 hover:bg-primary hover:text-black"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="w-full max-w-md">
          <PlanCard
            title={plans[selectedIndex].title}
            price={plans[selectedIndex].price}
            benefits={plans[selectedIndex].benefits}
            isSelected={true}
            screenSize="mobile"
          />
        </div>

        <button
          onClick={handleNext}
          aria-label="Próximo plano"
          className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-black p-1 text-primary transition-all duration-300 hover:bg-primary hover:text-black"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Desktop Version */}
      <div className="hidden w-full max-w-6xl items-center justify-center lg:flex">
        <button
          onClick={handlePrevious}
          aria-label="Plano anterior"
          className="z-10 mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-black p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-black"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex flex-1 justify-center gap-4">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              benefits={plan.benefits}
              isSelected={index === selectedIndex}
              screenSize="desktop"
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Próximo plano"
          className="z-10 ml-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-black p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-black"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {plans.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex ? "w-4 bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Ir para ${plans[index].title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PlanList;
