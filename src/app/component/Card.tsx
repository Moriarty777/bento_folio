"use client";

interface CardProps {
  gradientFrom: string;
  gradientTo: string;
  textColor?: string;
  delay?: string;
  col: number;
  row: number;
  children?: React.ReactNode;
  hover?: boolean;
  variant?: string;
  animation?: string;
}

const Card = ({
  gradientFrom,
  gradientTo,
  textColor = "text-white",
  delay,
  col,
  row,
  children,
  hover = false,
  variant,
  animation,
}: CardProps) => {
  const hoverClass = hover
    ? `group hover:scale-105 hover:shadow-[${gradientFrom}] shadow-md`
    : "";

  return (
    <div
      style={
        {
          animationDelay: `${delay}`,
          backgroundImage:
            variant == "main"
              ? `linear-gradient(to left, ${gradientFrom}, ${gradientTo})`
              : undefined,
          boxShadow:
            variant === "main" ? `0 4px 10px ${gradientTo}` : undefined,
        } as React.CSSProperties
      }
      className={`${animation} relative flex flex-col items-center justify-center overflow-hidden rounded-3xl p-6 text-center ${textColor}  col-span-${col} row-span-${row} ${hoverClass} min-h-[150px] sm:min-h-[200px]
      ${
        variant == "sub" &&
        "relative bg-white/30 backdrop-blur-md shadow-xl p-5 border border-white/50"
      }`}
    >
      {" "}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 transition-opacity duration-500 group-hover:opacity-60 rounded-3xl"></div>
      {children}
    </div>
  );
};

export default Card;
