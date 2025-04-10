import Button from "./Button";
import { Check } from "lucide-react";

const PlanCard = ({ title, price, benefits, isSelected = false }) => {
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-[50px] px-8 py-16 transition-all duration-500 ${
        isSelected
          ? "z-10 h-[598px] w-[453px] scale-100"
          : "z-0 h-[500px] w-[380px] scale-95 opacity-80"
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
      <div className={`relative z-10 flex h-full flex-col ${isSelected ? "gap-12" : "gap-5"}`}>
        <div className={`flex flex-col text-center ${isSelected ? "gap-12" : "gap-5"}`}>
          {/* Title */}
          <h3
            className={`font-bold ${
              isSelected ? "text-2xl text-white" : "text-xl text-white/70"
            }`}
          >
            {title}
          </h3>
          {/* Price */}
          <div
            className={`font-extrabold ${
              isSelected ? "text-4xl text-primary" : "text-3xl text-primary/70"
            }`}
          >
            {price}
          </div>
        </div>

        {/* Button */}
        <Button
          variant="primary"
          className={`${isSelected ? "px-6 py-3 text-base" : "px-4 py-[10px] text-sm"}`}
        >
          Adquirir Plano
        </Button>

        {/* Benefits */}
        <div className="mt-6 flex flex-col gap-4">
          <h4
            className={`text-lg font-bold ${
              isSelected ? "text-white" : "text-white/70"
            }`}
          >
            Benefícios:
          </h4>
          <ul className="flex flex-col gap-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check
                  className={`h-5 w-5 ${
                    isSelected ? "text-primary" : "text-primary/70"
                  }`}
                />
                <span
                  className={`${
                    isSelected
                      ? "text-sm text-white/90"
                      : "text-[12px] text-white/70"
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
