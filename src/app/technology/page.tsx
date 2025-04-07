"use client";

import Card from "../component/Card";
import { technology } from "./constant";
import { useNavigate } from "../utils/navigation";

export default function Page() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[url('/images/bg/technology.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="grid w-full gap-x-4 gap-y-4 p-4 md:grid-cols-10 md:grid-rows-8 grid-cols-1 grid-rows-1">
        {technology.map((tech, index) => (
          <Card
            key={index}
            gradientFrom={tech.gradientFrom}
            gradientTo={tech.gradientTo}
            textColor="text-white"
            col={tech.col}
            row={tech.row}
            hover={tech.hover}
            variant={tech.variant}
            animation={"motion-preset-slide-right  motion-duration-1000"}
          >
            <div className="z-10 flex flex-col items-center justify-center space-y-2 transition-transform duration-500 group-hover:translate-y-[-5%]">
              {tech.icon && (
                <img src={tech.icon} alt={tech.title} width={50} height={50} />
              )}
              <h1 className="text-2xl font-bold">{tech.title}</h1>
              <div className="my-4 text-lg text-slate-700 font-bold">
                {tech.description}
              </div>
              {tech.buttonText && (
                <button
                  onClick={() => tech.path && navigate(tech.path)}
                  style={{
                    backgroundImage: `linear-gradient(to left, ${tech.gradientFrom}, ${tech.gradientTo})`,
                  }}
                  className="z-50 rounded-lg px-4 py-2 text-white shadow-lg hover:scale-105"
                >
                  {tech.buttonText}
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
