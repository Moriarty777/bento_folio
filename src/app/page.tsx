"use client";

import Card from "./component/Card";
import { home } from "./constant";
import { useNavigate } from "./utils/navigation";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F8ECD5]">
      <div className="grid w-full gap-5 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9 auto-rows-fr grid-cols-1 grid-rows-1 overflow-hidden">
        {home.map((card, index) => (
          <Card
            key={index}
            gradientFrom={card.gradientFrom}
            gradientTo={card.gradientTo}
            textColor={card.textColor}
            delay={card.delay}
            col={card.col}
            row={card.row}
            hover={card.hover}
            variant={card.variant}
            animation={"motion motion-preset-pop"}
          >
            <div className="z-10 flex flex-col items-center justify-center space-y-4 px-4 py-4 transition-transform duration-500 group-hover:translate-y-[-5%]">
              {card.icon && card.icon}
              <h1 className="text-2xl font-bold">{card.title}</h1>

              {card.children}

              {/* {card.description && (
                <p className="absolute mt-2 text-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {card.description}
                </p>
              )} */}
              {card.buttonText && (
                <button
                  onClick={() => card.path && navigate(card.path)}
                  style={{
                    backgroundImage: `linear-gradient(to left, ${card.gradientFrom}, ${card.gradientTo})`,
                  }}
                  className="mt-4 rounded-lg px-4 py-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg hover:scale-105"
                >
                  {card.buttonText}
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
