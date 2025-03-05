"use client";
import { useRouter } from "next/navigation";

interface CardProps {
  title: React.ReactNode;
  description?: string;
  gradientFrom: string;
  gradientTo: string;
  textColor?: string;
  icon?: React.ReactNode;
  delay?: string;
  col: number;
  row: number;
  buttonText?: string;
  path?: string;
  children?: React.ReactNode;
  hover?: boolean;
  variant?: string;
}

const Card = ({
  title,
  description,
  gradientFrom,
  gradientTo,
  textColor = "text-white",
  icon,
  delay,
  col,
  row,
  buttonText,
  path,
  children,
  hover = false,
  variant,
}: CardProps) => {
  const router = useRouter();

  const hoverClass = hover
    ? `group hover:scale-105 hover:shadow-[${gradientFrom}] shadow-md`
    : "";

  const handleClick = () => {
    if (path) {
      router.prefetch(path);
      router.push(path);
    }
  };

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
      className={`motion motion-preset-pop relative flex flex-col items-center justify-center overflow-hidden rounded-3xl p-6 text-center ${textColor}  col-span-${col} row-span-${row} ${hoverClass} min-h-[150px] sm:min-h-[200px]
      ${
        variant == "sub" &&
        "relative bg-white/30 backdrop-blur-md shadow-xl p-5 border border-white/50"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 transition-opacity duration-500 group-hover:opacity-70 rounded-3xl"></div>
      <div className="z-10 flex flex-col items-center justify-center space-y-4 px-4 py-4 transition-transform duration-500 group-hover:translate-y-[-5%]">
        {icon && <div className="text-4xl">{icon}</div>}
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && (
          <p className="mt-2 text-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
        )}
        {buttonText && (
          <button
            onClick={handleClick}
            className="mt-4 rounded-lg bg-gradient-to-br from-blue-500 to-teal-200 px-4 py-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg hover:scale-105"
          >
            {buttonText}
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
