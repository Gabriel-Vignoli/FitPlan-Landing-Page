const Card = ({ image, title, description, size = "medium" }) => {
    const sizeClasses = {
      large: "col-span-6", 
      medium: "col-span-4", 
      small: "col-span-3"   
    };
    
    const colSpanClass = sizeClasses[size] || "col-span-4";
    
    return (
      <div className={`${colSpanClass} self-start flex flex-col w-full h-full min-h-[620px] rounded-3xl overflow-hidden border border-white/10`}>
        <img
          className="w-full h-[400px] object-cover"
          alt={title}
          src={image}
        />
        <div className="flex-1 h-full bg-white/5 backdrop-blur p-6 flex flex-col gap-2">
          {/* Icon Container */}
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#2c4efb33] bg-[#2c4efb1a] backdrop-blur">
            {/* Icon */}
            <img src="" alt="" />
          </div>
  
          {/* Text Content */}
          <h3 className="text-2xl font-bold mt-2">{title}</h3>
          <p className="text-white/70 text-base">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  