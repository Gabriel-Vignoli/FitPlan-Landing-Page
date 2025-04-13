import CardList from "./CardList";
import { Trophy } from "lucide-react";

const WhoIsItForSection = () => {
  return (
    <section className="items-center p-16">
      <div className="flex flex-col items-center gap-6">
        {/* Hat */}
        <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-3 backdrop-blur">
          <Trophy className="h-4 w-4 text-primary" />
          <span className="text-hat font-medium">
            Feita para todos os desafios
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center font-changa text-heading uppercase text-white">
          Para quem é a
          <br />
          <span className="text-primary">Montanini</span>?
        </h1>

        {/* Description */}
        <p className="max-w-[720px] text-center font-jakarta text-description text-white/70">
          Na Vortex Fit, todos têm espaço para evoluir. Do iniciante ao atleta,
          oferecemos treinos e suporte para você alcançar seus objetivos.
        </p>

        {/* Cards*/}
        <CardList></CardList>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
