"use client";

import Card from "../component/Card";
import Image from "next/image";
import { useNavigate } from "../utils/navigation";

export default function Page() {
  const education = [
    {
      logo: "/images/logo/umassd.svg",
      institution: "University of Massachusetts, Dartmouth",
      degree: "Masters in Computer Science",
      row: 3,
      col: 5,
      variant: "sub",
    },
    {
      logo: "/images/logo/mu.svg",
      institution: "Mumbai University",
      degree: "Bachaelor of Engineering in Computer Engineering",
      row: 3,
      col: 4,
      variant: "sub",
    },
    { institution: "More to Come ...", col: 3, row: 6, variant: "sub" },
    {
      institution: "Education & Certifications",
      degree:
        "Showcasing my academic qualifications and professional achievements.",
      gradientFrom: "#2A9D8F",
      gradientTo: "#A8DADC",
      col: 3,
      row: 3,
      buttonText: "Go Back",
      path: "/",
      variant: "main",
    },
    { institution: "More to Come ...", col: 3, row: 6, variant: "sub" },
    { institution: "More to Come ...", col: 3, row: 3, variant: "sub" },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[url('/images/bg/education.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="grid w-full gap-5 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9 auto-rows-fr grid-cols-1 grid-rows-1">
        {education.map((edu, index) => (
          <Card
            key={index}
            gradientFrom={edu.gradientFrom}
            gradientTo={edu.gradientTo}
            textColor="text-white"
            col={edu.col}
            row={edu.row}
            variant={edu.variant}
            animation={"motion-preset-bounce motion-duration-700"}
          >
            <div className="z-10 flex flex-col items-center justify-center space-y-4 px-4 py-4 transition-transform duration-500 group-hover:translate-y-[-5%]">
              {edu.logo && (
                <Image
                  src={edu.logo}
                  alt={edu.institution}
                  width={60}
                  height={60}
                />
              )}
              <h1 className="text-2xl font-bold">{edu.institution}</h1>

              {edu.degree && (
                <div className="mt-4 text-xl font-bold text-white drop-shadow-md">
                  {edu.degree}
                </div>
              )}

              {edu.buttonText && (
                <button
                  onClick={() => edu.path && navigate(edu.path)}
                  style={{
                    backgroundImage: `linear-gradient(to left, ${edu.gradientFrom}, ${edu.gradientTo})`,
                  }}
                  className="rounded-lg px-4 py-2 text-white shadow-lg hover:scale-105"
                >
                  {edu.buttonText}
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
