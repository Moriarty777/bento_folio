"use client";

function Card({
  title,
  description,
  gradientFrom,
  gradientTo,
  textColor = "text-white",
  icon,
  delay = "0s",
  col,
  row,
  buttonText,
  onButtonClick,
  children,
  hover = true,
}) {
  const hoverClass = hover
    ? "group hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] "
    : "";
  return (
    <div
      style={{
        "--fade-delay": delay,
        backgroundImage: `linear-gradient(to left, ${gradientFrom}, ${gradientTo})`,
        boxShadow: `0 4px 10px ${gradientTo}`,
      }}
      className={`animate-fadeIn will-change-transform will-change-opacity relative flex items-center justify-center overflow-hidden rounded-3xl p-6 text-center text-lg font-medium ${textColor} shadow-[0_4px_10px_#8CBFAD] transition-all col-span-${col} row-span-${row} ${hoverClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 transition-opacity duration-500 group-hover:opacity-70 rounded-3xl"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:translate-y-[-10%]">
        {icon}
        <h1 className="relative text-3xl font-bold">{title}</h1>
        {description && (
          <p className="mt-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
        )}
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-4 rounded-lg bg-gradient-to-br from-blue-500 to-teal-200 px-4 py-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-3 shadow-lg hover:scale-105"
          >
            {buttonText}
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default Card;
