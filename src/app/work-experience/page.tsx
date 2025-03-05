"use client";

import Card from "../component/Card";
import { workExperience } from "./constant";

export default function WorkExperience() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/images/workexperience.jpg')] bg-cover bg-center">
      <div className="grid w-full gap-5 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9 auto-rows-fr grid-cols-1 grid-rows-1">
        {workExperience.map((job, index) => (
          <Card
            key={index}
            title={job.company}
            gradientFrom={job.gradientFrom}
            gradientTo={job.gradientTo}
            textColor="text-white"
            col={job.col}
            row={job.row}
            buttonText={job.buttonText}
            hover={job.hover}
            path={job.path}
            variant={job.variant}
          >
            {job.role && (
              <div className="mt-4 text-xl font-bold text-gray-800 drop-shadow-md">
                {job.role} -{" "}
                <span className="text-slate-700">{job.location}</span>
              </div>
            )}

            <div className="mt-2 text-lg text-slate-700">{job.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
