"use client";

import Card from "../component/Card";
import { workExperience } from "./constant";
import Image from "next/image";
import { useNavigate } from "../utils/navigation";

export default function WorkExperience() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[url('/images/bg/workexperience.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="grid w-full gap-5 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9 auto-rows-fr grid-cols-1 grid-rows-1">
        {workExperience.map((job, index) => (
          <Card
            key={index}
            gradientFrom={job.gradientFrom}
            gradientTo={job.gradientTo}
            textColor="text-white"
            col={job.col}
            row={job.row}
            variant={job.variant}
            animation={"motion-preset-bounce motion-duration-700"}
          >
            <div className="z-10 flex flex-col items-center justify-center space-y-4 px-4 py-4 transition-transform duration-500 group-hover:translate-y-[-5%]">
              {job.icon && (
                <Image
                  src={job.icon}
                  alt={job.company}
                  width={60}
                  height={60}
                />
              )}
              <h1 className="text-2xl font-bold">{job.company}</h1>

              {job.role && (
                <div className="mt-4 text-xl font-bold text-slate-400 drop-shadow-md">
                  {job.role} -{" "}
                  <span className="text-slate-700">{job.location}</span>
                </div>
              )}

              {job.buttonText && (
                <button
                  onClick={() => job.path && navigate(job.path)}
                  style={{
                    backgroundImage: `linear-gradient(to left, ${job.gradientFrom}, ${job.gradientTo})`,
                  }}
                  className="rounded-lg px-4 py-2 text-white shadow-lg hover:scale-105"
                >
                  {job.buttonText}
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
