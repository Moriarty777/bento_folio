"use client";
import Card from "./component/Card";
import { home } from "./constant";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F8ECD5]">
      <div className="grid w-full gap-5 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9 auto-rows-fr grid-cols-1 grid-rows-1">
        {home.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            gradientFrom={card.gradientFrom}
            gradientTo={card.gradientTo}
            textColor={card.textColor}
            icon={card.icon}
            delay={card.delay}
            col={card.col}
            row={card.row}
            buttonText={card.buttonText}
            hover={card.hover}
            path={card.path}
          >
            {card.children}
          </Card>
        ))}
      </div>
    </div>
  );
}
