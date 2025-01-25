"use client";
import Card from "../component/Card";
import { workExperience } from "../constant";

export default function WorkExperience() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {workExperience.map((job, index) => (
        <Card
          key={index}
          title={job.company}
          gradientFrom="#6C63FF"
          gradientTo="#9D9DFF"
          textColor="text-white"
          col={1}
          row={1}
          hover={true}
        >
          <div className="mt-4 text-lg font-semibold text-gray-200">
            {job.role} - {job.location}
          </div>
          <div className="mt-2 text-md text-gray-700">{job.description}</div>
        </Card>
      ))}
    </div>
  );
}
