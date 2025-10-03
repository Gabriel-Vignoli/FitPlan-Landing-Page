import React, { useState, useEffect } from "react";
import Card from "./Card";
import {
  HeartPulse,
  Trophy,
  Dumbbell,
  Timer,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CardList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [maxSlides, setMaxSlides] = useState(0);

  const cards = [
    {
      image: "/card-1.jpg",
      title: "Para o Dia a Dia",
      description:
        "Ganhe energia, melhore seu condicionamento e torne seus treinos parte natural da sua rotina.",
      icon: <Dumbbell />,
    },
    {
      image: "/card-2.jpg",
      title: "Para Quem Quer Viver Melhor",
      description:
        "Exercícios seguros e adaptados para manter a mobilidade, força e bem-estar na terceira idade.",
      icon: <Shield />,
    },
    {
      image: "/card-3.jpg",
      title: "Para Quem Vive o Esporte",
      description:
        "Treinos específicos para aumento de força, resistência e performance atlética.",
      icon: <Dumbbell />,
    },
    {
      image: "./card-4.jpg",
      title: "Para Quem Vai Longe",
      description:
        "Desenvolvimento de resistência cardiovascular e preparo físico para longas distâncias.",
      icon: <Timer />,
    },
   {
  image: "/card-5.jpg",
  title: "Para Lutadores",
  description: "Treinos focados em força, resistência e técnica para aprimorar seu desempenho em combates.",
  icon: <Shield />
}

  ];

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        // 2xl screens
        setVisibleCards(3);
      } else if (width >= 1280) {
        // xl screens
        setVisibleCards(3);
      } else if (width >= 1024) {
        // lg screens
        setVisibleCards(2);
      } else if (width >= 768) {
        // md screens
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    setMaxSlides(Math.max(0, cards.length - visibleCards));
  }, [visibleCards, cards.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="mx-auto mt-4 w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] 2xl:max-w-[1400px]">
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 transition-all hover:bg-primary/20 md:h-10 md:w-10 lg:h-12 lg:w-12"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </button>

        <div className="relative flex-grow overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
              gap: visibleCards > 1 ? "1.5rem" : "0.5rem", // Dynamic gap based on visible cards
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `calc(${100 / visibleCards}% - ${visibleCards > 1 ? "1rem" : "0.25rem"})`,
                  padding: "0 0.25rem",
                }}
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>

        <button
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 transition-all hover:bg-primary/20 md:h-10 md:w-10 lg:h-12 lg:w-12"
          onClick={nextSlide}
          disabled={currentSlide >= maxSlides}
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1 md:mt-4 md:gap-2 lg:mt-6">
        {Array.from({ length: maxSlides + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all md:h-2 ${
              index === currentSlide
                ? "w-4 bg-primary md:w-6"
                : "w-2 bg-white/30 md:w-3"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
