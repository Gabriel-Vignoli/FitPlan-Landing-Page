import Card from "./Card";

const CardList = () => {
  return (
    <div className="grid grid-cols-12 gap-6 w-full mt-6 max-w-[1300px]">
      {/* Top row - 2 cards that take 6 columns each (half the width) */}
      <Card
        size="large"
        image="/hero-section-img.png"
        title="Para Quem Quer Saúde"
        description="Melhore sua disposição, aumente sua energia e fortaleça seu corpo com treinos adaptados à sua rotina."
      />
      <Card
        size="large"
        image=""
        title="Para Quem Ser Campeão"
        description="Hipertrofia, intensidade e estratégia! Treinos focados em ganho de massa muscular e definição máxima."
      />
      
      {/* Bottom row - 3 cards that take 4 columns each (one-third the width) */}
      <Card
        size="medium"
        image=""
        title="Para Quem Vive o Esporte"
        description="Potencialize seu desempenho com treinos específicos para força, resistência e explosão muscular."
      />
      <Card
        size="medium"
        image=""
        title="Para Quem Vai Longe"
        description="Ganhe velocidade, resistência e preparo físico para encarar qualquer distância e superar seus tempos."
      />
      <Card
        size="medium"
        image=""
        title=" Para Quem Quer Dominar"
        description="Força, agilidade e explosão! Treinos voltados para aprimorar seu desempenho nos combates."
      />
    </div>
  );
};

export default CardList;