import React, { useState } from "react";

const Button = ({
  children = "Adquirir Plano",
  ariaLabel = "Adquirir Plano",
  onClick,
  variant = "primary",
  icon,
  className = "",
  href, 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "relative rounded-full border px-7 py-4 text-button font-jakarta font-bold text-white transition-all duration-300 ease-in-out overflow-hidden transform";

  const variantStyles = {
    primary: `bg-primary border-white/10 shadow-button ${
      isHovered ? "bg-yellow-500 scale-105 shadow-lg" : ""
    }`,
    secondary: `bg-white/5 border-white/10 shadow-[0_4px_24px_rgba(255,225,219,0.2),inset_0_4px_12px_rgba(255,255,255,0.3)] backdrop-blur ${
      isHovered ? "bg-white/15 scale-105 shadow-xl border-white/20" : ""
    }`,
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 ${
          isHovered ? "animate-pulse opacity-20" : "opacity-0"
        } ${variant === "primary" ? "bg-yellow-300" : "bg-white/30"}`}
      />
      <div className="relative flex items-center justify-center gap-2">
        <span
          className={`transition-all duration-300 ${
            isHovered ? "tracking-wider" : ""
          }`}
        >
          {children}
        </span>
        {icon && (
          <span
            className={`transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            {icon}
          </span>
        )}
      </div>
    </Component>
  );
};

export default Button;
