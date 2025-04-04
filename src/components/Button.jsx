const Button = ({ children = "Adquirir Plano", ariaLabel = "Adquirir Plano", onClick }) => {
    return (
      <button
        className="pointer-events-auto rounded-full bg-primary px-7 py-3 text-[16px] font-jakarta text-white transition hover:brightness-110 shadow-button"
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  