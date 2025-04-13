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
      } justify-between gap-8 ${
        isSelected ? "bg-white/10" : "bg-white/5"
      } cursor-pointer rounded-2xl border-2 border-white/10 p-8 transition-all hover:border-white/30`}
      onClick={onClick}
    >
      {/* Número + Pergunta + Resposta */}
      <div className={`flex flex-1 ${isSelected ? "items-start" : "items-center"} gap-6`}>
        {/* Número */}
        <div className="flex h-16 min-w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition-colors">
          {number}
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-4">
          <h3 className="font-changa text-3xl uppercase tracking-wide text-white">
            {question}
          </h3>
          {isSelected && (
            <p className="text-description leading-relaxed text-white/70">
              {answer}
            </p>
          )}
        </div>
      </div>

      {/* Ícone */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border ${
          isSelected
            ? "border-primary/50 bg-primary/10"
            : "border-gray-300 bg-transparent"
        } shrink-0 transition-colors`}
      >
        {isSelected ? (
          <Zap className="text-primary h-6 w-6" />
        ) : (
          <Zap className="text-white/70 h-6 w-6" /> 
        )}
      </div>
    </div>
  );
};

export default FAQCard;
