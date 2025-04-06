import CardList from "./CardList";

const WhoIsItForSection = () => {
    return (
      <section className="items-center p-16">
        <div className="flex flex-col items-center gap-6">
          {/* Hat */}
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-3 backdrop-blur">
            <span className="text-hat font-medium">Seu novo começo Começa Aqui</span>
          </div>
  
          {/* Title */}
          <h1 className="font-changa text-heading uppercase text-white text-center">
            Para quem é a 
            <br /><span className="text-primary">vortexfit</span>?
          </h1>
  
          {/* Description */}
          <p className="max-w-[720px] font-jakarta text-description text-white/70 text-center">
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
  