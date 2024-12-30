"use client";
import {
  BuildingOffice2Icon,
  CpuChipIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  PencilIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Card from "./component/Card";

const cardData = [
  {
    title: "Work Experience",
    description: "Explore my journey in the tech industry.",
    gradientFrom: "#3C91E6",
    gradientTo: "#8CBFAD",
    icon: <BuildingOffice2Icon className="size-16 " />,
    delay: "0.6s",
    col: 3,
    row: 6,
    buttonText: "See More",
  },
  {
    title: "Projects",
    gradientFrom: "#F4A261",
    gradientTo: "#FFE8D6",
    textColor: "text-[#2B2D42]",
    icon: <CodeBracketIcon className="size-16 " />,
    delay: "0.9s",
    col: 3,
    row: 3,
    buttonText: "See More",
  },
  {
    title: "Education",
    gradientFrom: "#2A9D8F",
    gradientTo: "#A8DADC",
    icon: <AcademicCapIcon className="size-16 " />,
    delay: "1.2s",
    col: 3,
    row: 3,
    buttonText: "See More",
  },
  {
    title: (
      <>
        Hi, I&apos;m Eric <br />
        <span className="text-xl font-normal text-[#F8ECD5]">
          a Software Developer
        </span>
      </>
    ),
    gradientFrom: "#e65c3a",
    gradientTo: "#FFA69E",
    delay: "3s",
    col: 4,
    row: 3,
    hover: false,
    children: (
      <div className="relative h-25 w-25 overflow-hidden rounded-full bg-gray-300 mt-2">
        <Image
          src="/images/profile-pic.png"
          alt="My Profile Picture"
          width={200}
          height={200}
          className="shadow-lg scale-125"
          priority
        />
      </div>
    ),
  },
  {
    title: "Technology",
    gradientFrom: "#FFB400",
    gradientTo: "#fde8b7",
    icon: <CpuChipIcon className="size-16 " />,
    delay: "1.5s",
    col: 2,
    row: 4,
    buttonText: "See More",
  },
  {
    title: "Resume",
    gradientFrom: "#E9C46A",
    gradientTo: "#FFE8D6",
    textColor: "text-[#2B2D42]",
    icon: <DocumentTextIcon className="size-16 " />,
    delay: "2.4s",
    col: 2,
    row: 3,
    buttonText: "See More",
  },
  {
    title: "Contact Me",
    gradientFrom: "#264653",
    gradientTo: "#88979e",
    icon: <EnvelopeIcon className="size-16 " />,
    delay: "2.1s",
    col: 5,
    row: 3,
    buttonText: "See More",
    hover: false,
  },
  {
    title: "Blog",
    gradientFrom: "#9AD1EA",
    gradientTo: "#e5f5fd",
    textColor: "text-[#2B2D42]",
    icon: <PencilIcon className="size-16 " />,
    delay: "1.8s",
    col: 2,
    row: 2,
    buttonText: "See More",
  },
];

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F8ECD5]">
      <div className="grid w-screen gap-7 p-5 md:h-screen grid-cols-9 grid-rows-9">
        {cardData.map((card, index) => (
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
          >
            {card.children}
          </Card>
        ))}
      </div>
    </div>
  );
}
