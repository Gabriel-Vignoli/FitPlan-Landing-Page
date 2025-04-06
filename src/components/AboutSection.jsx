import Button from "./Button";

const AboutSection = () => {
  return (
    <section className="mt-12 flex w-full">
      {/* Left side: Content */}
      <div className="flex w-1/2 flex-col gap-6 p-16">
        {/* Hat */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-3 backdrop-blur">
          <span className="text-hat font-medium">Mais que uma academia</span>
        </div>

        {/* Title */}
        <h1 className="font-changa text-heading uppercase">
          Sua Evolução <br />
          Começa Aqui
        </h1>

        {/* Description */}
        <p className="max-w-[580px] font-jakarta text-description text-white/70">
          Somos um espaço para quem busca transformação, superação e resultados
          reais. Com treinos eficazes, estrutura de ponta e suporte
          profissional, ajudamos você a atingir seus objetivos, seja qual for o
          seu nível. Na Vortex Fit, cada treino é um passo rumo à sua melhor
          versão!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-6">
          <Button variant="primary">Adquirir Plano</Button>
          <Button variant="secondary">Entrar em contato</Button>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="flex w-1/2 items-center justify-center">
        <img
          src="/hero-section-img.png"
          alt="Sobre nós"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
