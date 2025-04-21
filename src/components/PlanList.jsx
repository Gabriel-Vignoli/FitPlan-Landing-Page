import { useState, useRef, useEffect } from "react";
import PlanCard from "./PlanCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  // Configuração do touch para mobile
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const diff = startX - x;
    
    if (diff > 50) {
      // Swipe para a esquerda (próximo)
      handleNext();
      setIsDragging(false);
    } else if (diff < -50) {
      // Swipe para a direita (anterior)
      handlePrevious();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate para desktop (opcional)
  useEffect(() => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [selectedIndex]);

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden p-4 md:p-6 lg:p-4 xl:p-8">
     {/* Carrossel mobile com swipe */}
<div 
  className="relative w-full lg:hidden"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
  ref={carouselRef}
>
  <div className="flex w-full justify-center px-4"> 
    <PlanCard
      title={plans[selectedIndex].title}
      price={plans[selectedIndex].price}
      benefits={plans[selectedIndex].benefits}
      isSelected={true}
      screenSize="mobile"
    />
  </div>
</div>

      {/* Layout desktop com navegação */}
      <div className="relative hidden w-full max-w-full items-center justify-center px-2 lg:flex">
        <button
          onClick={handlePrevious}
          aria-label="Plano anterior"
          className="z-10 mr-1 flex-shrink-0 rounded-full border-2 border-primary p-1 text-primary transition-all duration-300 hover:bg-primary hover:text-black lg:mr-2 lg:p-2 xl:mr-4 xl:p-3"
        >
          <ChevronLeft size={20} className="lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
        </button>

        <div className="flex flex-grow items-center justify-center gap-1 overflow-visible lg:gap-2 xl:gap-4">
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
          className="z-10 ml-1 flex-shrink-0 rounded-full border-2 border-primary p-1 text-primary transition-all duration-300 hover:bg-primary hover:text-black lg:ml-2 lg:p-2 xl:ml-4 xl:p-3"
        >
          <ChevronRight size={20} className="lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
        </button>
      </div>

      {/* Indicadores de navegação */}
      <div className="mt-4 flex gap-2 md:mt-5">
        {plans.map((_, index) => (
          <button
            key={index}
            aria-label={`Selecionar ${plans[index].title}`}
            onClick={() => setSelectedIndex(index)}
            className={`h-2 rounded-full transition-all md:h-3 ${
              index === selectedIndex
                ? "w-4 bg-yellow-500 md:w-5"
                : "w-2 bg-white md:w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PlanList;