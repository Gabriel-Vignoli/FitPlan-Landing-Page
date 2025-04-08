import Button from "./Button";
import MethodologyCard from "./MethodologyCard ";

const MethodologySection = () => {
  return (
    <section className="flex flex-col gap-16 bg-primary/70 p-16">
      <div>
        {/* Hat */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-black/90 px-4 py-3 backdrop-blur">
          <span className="text-hat font-medium">Mais que uma academia</span>
        </div>

        <div className="mt-6 flex items-end justify-between">
          {/* Title */}
          <h1 className="font-changa text-heading uppercase text-white">
            Conheça a Nossa <br />
            Metodologia
          </h1>

          {/* Button */}
          <Button variant="primary" className="min-w-[220px] px-6 py-3">
            Fazer Parte
          </Button>
        </div>
      </div>

      <div>
        {/* Cards */}
        <div className="mt-6 grid w-full gap-6  grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <MethodologyCard
                icon="/icons/energy-icon.svg"
                title="Energia"
                description="Treinos planejados para garantir disposição durante e após os exercícios, sem quedas bruscas de energia."
                />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <MethodologyCard
                icon="/icons/health-icon.svg"
                title="PERFORMANCE"
                description="Métodos baseados na ciência do movimento para maximizar força, resistência e explosão muscular."
                />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <MethodologyCard
                icon="/icons/mind-icon.svg"
                title="FOCO"
                description="Técnicas de concentração e respiração para melhorar a conexão mente-músculo e manter o ritmo."
                />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <MethodologyCard
                icon="/icons/mind-icon.svg"
                title="DESEMPENHO"
                description=" Métodos progressivos para superar limites e transformar treino em resultado."
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
