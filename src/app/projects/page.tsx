"use client";

import Card from "../component/Card";
import { useNavigate } from "../utils/navigation";
import { projects } from "./constant";

export default function Page() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[url('/images/bg/project.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="grid w-full gap-5 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9 auto-rows-fr grid-cols-1 grid-rows-1">
        {projects.map((project, index) => (
          <Card
            key={index}
            gradientFrom={project.gradientFrom}
            gradientTo={project.gradientTo}
            textColor="text-white"
            col={project.col}
            row={project.row}
            variant={project.variant}
            animation={"motion-preset-bounce motion-duration-700"}
          >
            <div className="z-10 flex flex-col items-center justify-center space-y-4 px-4 py-4 transition-transform duration-500 group-hover:translate-y-[-5%]">
              <h1 className="text-2xl font-bold">{project.title}</h1>

              {project.link && (
                <div className="flex justify-between space-x-4">
                  {/* Link Button */}
                  <button
                    onClick={() =>
                      project.link && window.open(project.link, "_blank")
                    }
                    disabled={!project.link}
                    className={`px-4 py-2 rounded-lg text-white shadow-lg transition-transform transform hover:scale-105 ${
                      project.link
                        ? "bg-gradient-to-l from-blue-500 to-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Link
                  </button>

                  {/* Demo Button */}
                  <button
                    onClick={() =>
                      project.demo && window.open(project.demo, "_blank")
                    }
                    disabled={!project.demo}
                    className={`px-4 py-2 rounded-lg text-white shadow-lg transition-transform transform hover:scale-105 ${
                      project.demo
                        ? "bg-gradient-to-l from-green-500 to-green-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Demo
                  </button>
                </div>
              )}

              {project.buttonText && (
                <button
                  onClick={() => project.path && navigate(project.path)}
                  style={{
                    backgroundImage: `linear-gradient(to left, ${project.gradientFrom}, ${project.gradientTo})`,
                  }}
                  className="rounded-lg px-4 py-2 text-white shadow-lg hover:scale-105"
                >
                  {project.buttonText}
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
