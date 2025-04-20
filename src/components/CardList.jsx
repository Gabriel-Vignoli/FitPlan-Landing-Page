import React, { useState, useEffect } from "react";
import Card from "./Card";
import { HeartPulse, Trophy, Dumbbell, Timer, Shield, ChevronLeft, ChevronRight } from "lucide-react";

const CardList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [maxSlides, setMaxSlides] = useState(0);
  
  const cards = [
    {
      image: "/hero-section-img.png",
      title: "Para Quem Quer Saúde",
      description: "Melhore sua disposição e fortaleça seu corpo com treinos adaptados à sua rotina diária.",
      icon: <HeartPulse />
    },
    {
      image: "",
      title: "Para Quem Quer Ser Campeão",
      description: "Programas de hipertrofia e definição muscular com acompanhamento especializado.",
      icon: <Trophy />
    },
    {
      image: "",
      title: "Para Quem Vive o Esporte",
      description: "Treinos específicos para aumento de força, resistência e performance atlética.",
      icon: <Dumbbell />
    },
    {
      image: "./hero-section-img.png",
      title: "Para Quem Vai Longe",
      description: "Desenvolvimento de resistência cardiovascular e preparo físico para longas distâncias.",
      icon: <Timer />
    },
    {
      image: "",
      title: "Para Quem Quer Dominar",
      description: "Treinamento funcional e de explosão muscular para artes marciais e combates.",
      icon: <Shield />
    }
  ];

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1536) { // 2xl screens
        setVisibleCards(3);
      } else if (width >= 1280) { // xl screens
        setVisibleCards(3);
      } else if (width >= 1024) { // lg screens
        setVisibleCards(2);
      } else if (width >= 768) { // md screens
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    setMaxSlides(Math.max(0, cards.length - visibleCards));
  }, [visibleCards, cards.length]);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  return (
    <div className="mt-4 w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] 2xl:max-w-[1400px] mx-auto">
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        <button 
          className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 hover:bg-primary/20 transition-all"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </button>
        
        <div className="flex-grow relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-out" 
            style={{ 
              transform: `translateX(-${currentSlide * (100/visibleCards)}%)`,
              gap: visibleCards > 1 ? '1.5rem' : '0.5rem' // Dynamic gap based on visible cards
            }}
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="flex-shrink-0" 
                style={{ 
                  width: `calc(${100/visibleCards}% - ${visibleCards > 1 ? '1rem' : '0.25rem'})`,
                  padding: '0 0.25rem'
                }}
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 hover:bg-primary/20 transition-all"
          onClick={nextSlide}
          disabled={currentSlide >= maxSlides}
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </button>
      </div>
      
      <div className="flex justify-center mt-3 md:mt-4 lg:mt-6 gap-1 md:gap-2">
        {Array.from({ length: maxSlides + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-1.5 md:h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-4 md:w-6" : "bg-white/30 w-2 md:w-3"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;