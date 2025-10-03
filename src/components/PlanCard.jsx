import Button from "./Button";
import { Check } from "lucide-react";

const PlanCard = ({
  title,
  price,
  benefits,
  isSelected = false,
  screenSize = "mobile",
}) => {
  const whatsappNumber = "5535992011313";

  const whatsappMessage = `Olá! Estou interessado no plano "${title}" e gostaria de receber mais informações, por favor.`;

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl px-3 pb-2 pt-6 transition-all duration-500 md:rounded-3xl md:px-12 md:pb-6 md:pt-12 lg:rounded-[30px] lg:px-4 lg:pb-4 lg:pt-6 xl:rounded-[50px] xl:px-6 xl:pb-6 xl:pt-10 ${
        isSelected
          ? screenSize === "desktop"
            ? "z-10 h-[380px] w-full scale-100 lg:h-[420px] lg:w-[280px] xl:h-[500px] xl:w-[340px]"
            : "z-10 mx-auto h-[380px] w-full max-w-[700px] scale-100 md:h-[540px]"
          : screenSize === "desktop"
            ? "z-0 h-[330px] w-full scale-95 opacity-80 lg:h-[370px] lg:w-[230px] xl:h-[460px] xl:w-[290px]"
            : "z-0 mx-auto h-[400px] w-full max-w-[600px] scale-95 opacity-80 md:h-[550px]"
      }`}
      style={{
        background: "black",
        position: "relative",
        isolation: "isolate",
        boxShadow: isSelected
          ? "0 12px 24px rgba(245, 189, 4, 0.2), 0 4px 10px rgba(0, 0, 0, 0.2)"
          : "0 8px 16px rgba(255, 255, 255, 0.08), 0 2px 6px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Gradient Effects */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: isSelected
            ? "linear-gradient(to bottom right, rgba(245, 189, 4, 0.4) 5%, rgba(245, 189, 4, 0) 30%)"
            : "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2) 5%, rgba(255, 255, 255, 0) 30%)",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: isSelected
            ? "linear-gradient(to top left, rgba(245, 189, 4, 0.4) 5%, rgba(245, 189, 4, 0) 50%)"
            : "linear-gradient(to top left, rgba(255, 255, 255, 0.2) 5%, rgba(255, 255, 255, 0) 50%)",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 flex h-full flex-col ${
          screenSize === "desktop"
            ? isSelected
              ? "gap-4 lg:gap-5 xl:gap-8"
              : "gap-3 lg:gap-4"
            : isSelected
              ? "gap-4 md:gap-8"
              : "gap-3 md:gap-5"
        }`}
      >
        <div
          className={`flex flex-col text-center ${
            screenSize === "desktop"
              ? isSelected
                ? "gap-4 lg:gap-5 xl:gap-8"
                : "gap-3 lg:gap-4"
              : isSelected
                ? "gap-4 md:gap-8"
                : "gap-3 md:gap-5"
          }`}
        >
          {/* Title */}
          <h3
            className={`font-bold ${
              isSelected
                ? screenSize === "desktop"
                  ? "text-base text-white lg:text-lg xl:text-xl"
                  : "text-base text-white md:text-xl"
                : screenSize === "desktop"
                  ? "text-sm text-white/70 lg:text-base"
                  : "text-sm text-white/70 md:text-lg"
            }`}
          >
            {title}
          </h3>
          {/* Price */}
          <div
            className={`font-extrabold ${
              isSelected
                ? screenSize === "desktop"
                  ? "text-xl text-primary lg:text-2xl xl:text-3xl"
                  : "text-lg text-primary md:text-3xl"
                : screenSize === "desktop"
                  ? "text-lg text-primary/70 lg:text-xl xl:text-2xl"
                  : "text-base text-primary/70 md:text-2xl"
            }`}
          >
            {price}
          </div>
        </div>

        {/* WhatsApp Button */}
        <Button
          as="a"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage,
          )}`}
          variant="primary"
          className={`${
            isSelected
              ? screenSize === "desktop"
                ? "px-3 py-1 text-xs lg:px-4 lg:py-2 lg:text-sm xl:px-6 xl:py-3 xl:text-base"
                : "px-3 py-1 text-xs md:px-6 md:py-3 md:text-base"
              : screenSize === "desktop"
                ? "px-2 py-1 text-xs lg:px-3 lg:py-2"
                : "px-2 py-1 text-xs md:text-sm"
          }`}
          icon={
            <img
              src="/whatsapp-black-icon.svg"
              className={`${
                screenSize === "desktop"
                  ? isSelected
                    ? "h-3 w-3 text-black lg:h-4 lg:w-4 xl:h-5 xl:w-5"
                    : "h-3 w-3 text-black lg:h-4 lg:w-4"
                  : isSelected
                    ? "h-3 w-3 text-black md:h-5 md:w-5"
                    : "h-2 w-2 text-black md:h-4 md:w-4"
              }`}
            />
          }
        >
          Adquirir Plano
        </Button>

        {/* Benefits */}
        <div
          className={`mt-2 flex flex-col md:mt-4 lg:mt-2 xl:mt-4 ${
            screenSize === "desktop" ? "gap-2 lg:gap-3" : "gap-2 md:gap-4"
          }`}
        >
          <h4
            className={`${
              isSelected
                ? screenSize === "desktop"
                  ? "text-sm font-bold text-white lg:text-base xl:text-lg"
                  : "text-sm font-bold text-white md:text-lg"
                : screenSize === "desktop"
                  ? "text-xs font-bold text-white/70 lg:text-sm"
                  : "text-xs font-bold text-white/70 md:text-base"
            }`}
          >
            Benefícios:
          </h4>
          <ul
            className={`flex flex-col ${
              screenSize === "desktop" ? "gap-1 lg:gap-2" : "gap-1 md:gap-2"
            }`}
          >
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-1 md:gap-2">
                <Check
                  className={`${
                    isSelected
                      ? screenSize === "desktop"
                        ? "h-3 w-3 text-primary lg:h-4 lg:w-4"
                        : "h-3 w-3 text-primary md:h-5 md:w-5"
                      : screenSize === "desktop"
                        ? "h-3 w-3 text-primary/70 lg:h-4 lg:w-4"
                        : "h-2 w-2 text-primary/70 md:h-4 md:w-4"
                  }`}
                />
                <span
                  className={`${
                    isSelected
                      ? screenSize === "desktop"
                        ? "text-[10px] text-white/90 lg:text-xs"
                        : "text-[10px] text-white/90 md:text-sm"
                      : screenSize === "desktop"
                        ? "text-[8px] text-white/70 lg:text-[10px]"
                        : "text-[8px] text-white/70 md:text-xs"
                  }`}
                >
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
