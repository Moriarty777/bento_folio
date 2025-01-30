"use client";
import Card from "../component/Card";
import { workExperience } from "../constant";

export default function WorkExperience() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F8ECD5]">
      <div className="grid w-full gap-5 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9 auto-rows-fr grid-cols-1 grid-rows-1">
        {workExperience.map((job, index) => (
          <Card
            key={index}
            title={job.company}
            gradientFrom={job.gradientFrom}
            gradientTo={job.gradientTo}
            gradientDirection={job.gradientDirection}
            textColor="text-white"
            col={job.col}
            row={job.row}
            buttonText={job.buttonText}
            hover={job.hover}
            path={job.path}
          >
            {job.role && (
              <div className="mt-4 text-lg font-semibold text-gray-200">
                {job.role} - {job.location}
              </div>
            )}

            <div className="mt-2 text-md text-gray-700">{job.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
