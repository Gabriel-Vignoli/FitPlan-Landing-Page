import Button from "./Button";
import FAQList from "./FAQList";
import { Eye, HelpCircle } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="flex flex-col gap-16 p-16">
      <div>
        {/* Hat */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-black/90 px-4 py-3 backdrop-blur">
          <HelpCircle className="h-4 w-4 text-primary" />
          <span className="text-hat font-medium">Tire Sua Duvida</span>
        </div>

        <div className="mt-6 flex items-end justify-between">
          {/* Title */}
          <h1 className="font-changa text-heading uppercase text-white">
            Perguntas Frequentes
          </h1>

          {/* Button */}
          <div className="gap-10 flex">
            <Button variant="primary" className="min-w-[220px] px-6 py-3" icon={<Eye size={18}/>}>
              Ver Planos
            </Button>
            <Button variant="secondary" className="min-w-[220px] px-6 py-3" icon={<img src="/wahtsapp-icon.svg" className="h-[18px] w-[18px]" />}>
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      <div>
        {/* Cards */}
        <FAQList></FAQList>
      </div>
    </section>
  );
};

export default FAQSection;
