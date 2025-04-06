const Button = ({
  children = "Adquirir Plano",
  ariaLabel = "Adquirir Plano",
  onClick,
  variant = "primary", // 'primary' ou 'secondary'
  className = "",   
}) => {
  const baseStyles =
    "rounded-full border px-7 py-4 text-button font-jakarta font-bold text-white transition hover:brightness-110";

  const variantStyles = {
    primary: "bg-primary border-white/10 shadow-button",
    secondary:
      "bg-white/5 border-white/10 shadow-[0_4px_24px_rgba(255,225,219,0.2),inset_0_4px_12px_rgba(255,255,255,0.3)] backdrop-blur",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} // 👈 aplicado aqui
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
