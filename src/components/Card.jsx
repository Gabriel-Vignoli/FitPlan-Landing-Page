import React from "react";

const Card = ({ image, title, description, icon }) => {
  return (
    <div className="flex flex-col w-full h-full min-h-[300px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[480px] xl:min-h-[520px] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:border-white/20 transition-all">
      {image && (
        <img
          className="w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[280px] object-cover"
          alt={title}
          src={image || "/placeholder-image.png"}
          loading="lazy"
        />
      )}
      <div className="flex-1 h-full p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col gap-1 md:gap-2 lg:gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-primary/30 bg-primary/20">
          {React.cloneElement(icon, { 
            className: "h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary" 
          })}
        </div>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-1 md:mt-2 line-clamp-2 leading-tight md:leading-snug">
          {title}
        </h3>
        <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg line-clamp-3 leading-snug md:leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;