import Card from "./Card";
import { HeartPulse, Trophy, Dumbbell, Timer, Shield } from "lucide-react";

const CardList = () => {
  return (
    <div className="mt-6 grid w-full max-w-[1300px] grid-cols-12 gap-6">
      <Card
        size="large"
        image="/hero-section-img.png"
        title="Para Quem Quer Saúde"
        description="Melhore sua disposição, aumente sua energia e fortaleça seu corpo com treinos adaptados à sua rotina."
        icon={<HeartPulse className="h-6 w-6 text-primary" />}
      />

      <Card
        size="large"
        image=""
        title="Para Quem Quer Ser Campeão"
        description="Hipertrofia, intensidade e estratégia! Treinos focados em ganho de massa muscular e definição máxima."
        icon={<Trophy className="h-6 w-6 text-primary" />}
      />

      <Card
        size="medium"
        image=""
        title="Para Quem Vive o Esporte"
        description="Potencialize seu desempenho com treinos específicos para força, resistência e explosão muscular."
        icon={<Dumbbell className="h-6 w-6 text-primary" />}
      />

      <Card
        size="medium"
        image=""
        title="Para Quem Vai Longe"
        description="Ganhe velocidade, resistência e preparo físico para encarar qualquer distância e superar seus tempos."
        icon={<Timer className="h-6 w-6 text-primary" />}
      />

      <Card
        size="medium"
        image=""
        title="Para Quem Quer Dominar"
        description="Força, agilidade e explosão! Treinos voltados para aprimorar seu desempenho nos combates."
        icon={<Shield className="h-6 w-6 text-primary" />}
      />
    </div>
  );
};

export default CardList;
