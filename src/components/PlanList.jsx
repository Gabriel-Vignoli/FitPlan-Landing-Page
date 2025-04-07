import PlanCard from "./PlanCard";

const PlanList = () => {
  return (
    <div>
      <PlanCard
        title="Plano Completo"
        description="Ideal para começar agora"
        price="R$ 99,90/mês"
        benefits={[
          "Treino todos os dias da semana",
          "Acompanhamento com personal",
          "Acesso à área de musculação",
          "Avaliação fisica",
          "Acesso ao nosso sistema"
        ]}
      />
    </div>
  );
};

export default PlanList;
