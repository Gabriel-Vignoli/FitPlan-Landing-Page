import Button from "./Button";
import FAQList from "./FAQList";
import { Eye, HelpCircle } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="flex flex-col gap-8 p-4 md:gap-12 md:p-8 lg:gap-16 lg:p-16" id="faq">
      <div>
        {/* Hat */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-black/90 px-3 py-2 md:px-4 md:py-3 backdrop-blur">
          <HelpCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
          <span className="text-xs md:text-sm font-medium">Tire Sua Duvida</span>
        </div>

        <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-0">
          {/* Title */}
          <h1 className="font-changa text-2xl sm:text-3xl md:text-4xl lg:text-heading uppercase text-white">
            Perguntas Frequentes
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-10">
            <Button 
              variant="primary" 
              className="w-full sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] px-4 py-2 md:px-6 md:py-3" 
              icon={<Eye size={16} className="md:w-[18px] md:h-[18px]" />} 
              href="#planos"
            >
              Ver Planos
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] px-4 py-2 md:px-6 md:py-3" 
              icon={<img src="/wahtsapp-icon.svg" className="h-4 w-4 md:h-[18px] md:w-[18px]" />}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      <div>
        {/* Cards */}
        <FAQList />
      </div>
    </section>
  );
};

export default FAQSection;