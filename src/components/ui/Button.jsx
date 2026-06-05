const Button = ({ children, variant = "primary", onClick, className = "", type = "button" }) => {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95",
    outline:
      "border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white hover:scale-105 active:scale-95",
    ghost:
      "text-black underline underline-offset-4 hover:text-gray-600 transition-colors",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;