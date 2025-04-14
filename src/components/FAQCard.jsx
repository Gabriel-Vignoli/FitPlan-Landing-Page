import React from "react";
import { Zap } from "lucide-react";

const FAQCard = ({
  number = "01",
  question,
  answer,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex w-full ${
        isSelected ? "items-start" : "items-center"
      } justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 ${
        isSelected ? "bg-white/10" : "bg-white/5"
      } cursor-pointer rounded-lg md:rounded-xl lg:rounded-2xl border-2 border-white/10 p-3 sm:p-4 md:p-6 lg:p-8 transition-all hover:border-white/30`}
      onClick={onClick}
    >
      {/* Número + Pergunta + Resposta */}
      <div className={`flex flex-1 ${isSelected ? "items-start" : "items-center"} gap-2 sm:gap-3 md:gap-4 lg:gap-6`}>
        {/* Número */}
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:min-w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white transition-colors">
          {number}
        </div>
        
        {/* Conteúdo */}
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
          <h3 className="font-changa text-base sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-wide text-white">
            {question}
          </h3>
          {isSelected && (
            <p className="text-xs sm:text-sm md:text-base lg:text-description leading-relaxed text-white/70">
              {answer}
            </p>
          )}
        </div>
      </div>
      
      {/* Ícone */}
      <div
        className={`flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full border ${
          isSelected
            ? "border-primary/50 bg-primary/10"
            : "border-gray-300 bg-transparent"
        } shrink-0 transition-colors`}
      >
        {isSelected ? (
          <Zap className="text-primary h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        ) : (
          <Zap className="text-white/70 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        )}
      </div>
    </div>
  );
};

export default FAQCard;