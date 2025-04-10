import React from "react";

const FAQCard = ({
  number = "01",
  question,
  answer,
  icon,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex w-full ${
        isSelected ? "items-start" : "items-center"
      } justify-between gap-8 ${
        isSelected ? "bg-white/10" : "bg-white/5"
      } cursor-pointer rounded-2xl border-2 border-white/10 p-8 transition-all hover:border-white/30`}
      onClick={onClick}
    >
      {/* Number + Question + Answer */}
      <div className={`flex flex-1 ${isSelected ? "items-start" : "items-center"} gap-6`}>
        {/* Number Bubble */}
        <div className="flex h-16 min-w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition-colors">
          {number}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <h3 className="font-changa text-3xl uppercase tracking-wide text-white">
            {question}
          </h3>
          {isSelected && (
            <p className="text-description leading-relaxed text-white/70">
              {answer}
            </p>
          )}
        </div>
      </div>

      {/* Icon Container */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border ${
          isSelected
            ? "border-primary/30 bg-primary/20"
            : "border-white/15 bg-white/5"
        } shrink-0 backdrop-blur-sm transition-colors`}
      >
        {icon ? (
          <img src={icon} alt="FAQ Icon" className="h-6 w-6" />
        ) : (
          <span className={`text-xl ${isSelected ? "text-primary" : "text-white"}`}>{isSelected ? "-" : "+"}</span>
        )}
      </div>
    </div>
  );
};

export default FAQCard;