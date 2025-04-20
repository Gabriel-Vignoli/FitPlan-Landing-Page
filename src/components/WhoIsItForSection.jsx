import React from "react";
import CardList from "./CardList";
import { Trophy } from "lucide-react";

const WhoIsItForSection = () => {
  return (
    <section className="py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-16" id="para-quem-e">
      <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
        {/* Hat */}
        <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 sm:px-4 sm:py-3 backdrop-blur">
          <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium">
            Feita para todos os desafios
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center font-changa text-2xl sm:text-3xl md:text-4xl lg:text-heading uppercase text-white">
          Para quem é a
          <br />
          <span className="text-primary">Montanini</span>?
        </h1>

        {/* Description */}
        <p className="max-w-[720px] text-center font-jakarta text-sm sm:text-base md:text-lg text-white/70">
          Na Montanini Academy, todos têm espaço para evoluir. Do iniciante ao atleta,
          oferecemos treinos e suporte para você alcançar seus objetivos.
        </p>

        {/* Cards */}
        <CardList />
      </div>
    </section>
  );
};

export default WhoIsItForSection;