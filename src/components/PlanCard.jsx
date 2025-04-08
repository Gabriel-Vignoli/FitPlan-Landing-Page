import { Check } from "lucide-react";
import Button from "./Button";

const PlanCard = ({ title, price, benefits }) => {
  return (
    <div 
      className="flex h-[598px] w-[453px] flex-col justify-between rounded-[50px] px-8 py-16 shadow-lg relative overflow-hidden"
      style={{
        background: "black",
        position: "relative",
        isolation: "isolate",
      }}
    >
      {/* Gradient from top-left to middle - suavizado */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: "linear-gradient(to bottom right, rgba(245, 189, 4, 0.4) 5%, rgba(245, 189, 4, 0) 30%)"
        }}
      />
      
      {/* Gradient from bottom-right to middle - suavizado */}
      <div 
        className="absolute bottom-0 right-0 w-full h-full z-0"
        style={{
          background: "linear-gradient(to top left, rgba(245, 189, 4, 0.4) 5%, rgba(245, 189, 4, 0) 50%)"
        }}
      />
      
      {/* Content with z-index to appear above gradients */}
      <div className="flex flex-col justify-between h-full z-10 relative">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-14 text-center">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white/70">{title}</h3>
            {/* Price */}
            <div className="text-4xl font-extrabold text-primary">{price}</div>
          </div>
          {/* Button */}
          <Button variant="primary">Adquirir Plano</Button>
        </div>
        {/* Benefits */}
        <div className="mt-6 flex flex-col gap-4">
          <h4 className="text-lg font-bold text-white">Benefícios:</h4>
          <ul className="flex flex-col gap-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm text-white/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;