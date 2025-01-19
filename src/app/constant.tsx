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

export const home = [
  {
    title: "Work Experience",
    description: "Explore my journey in the tech industry.",
    gradientFrom: "#3C91E6",
    gradientTo: "#8CBFAD",
    icon: <BuildingOffice2Icon className="h-8 w-8" />,
    delay: "0.6s",
    col: 3,
    row: 3,
    buttonText: "See More",
    path: "/work-experience",
  },
  {
    title: "Projects",
    description: "Check out the projects I’ve built and contributed to.",
    gradientFrom: "#F4A261",
    gradientTo: "#FFE8D6",
    textColor: "text-[#2B2D42]",
    icon: <CodeBracketIcon className="h-8 w-8" />,
    delay: "0.9s",
    col: 3,
    row: 3,
    buttonText: "See More",
    path: "/projects",
  },
  {
    title: "Education & Certifications",
    description:
      "Showcasing my academic qualifications and professional achievements.",
    gradientFrom: "#2A9D8F",
    gradientTo: "#A8DADC",
    icon: <AcademicCapIcon className="h-8 w-8" />,
    delay: "1.2s",
    col: 3,
    row: 3,
    buttonText: "See More",
    path: "/education-cert",
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
    col: 6,
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
    description: "Explore the tools and frameworks I work with.",
    gradientFrom: "#FFB400",
    gradientTo: "#fde8b7",
    icon: <CpuChipIcon className="h-8 w-8" />,
    delay: "1.5s",
    col: 3,
    row: 3,
    buttonText: "See More",
    path: "/technology",
  },
  {
    title: "Resume",
    description: "A snapshot of my skills, experience, and achievements.",
    gradientFrom: "#E9C46A",
    gradientTo: "#FFE8D6",
    textColor: "text-[#2B2D42]",
    icon: <DocumentTextIcon className="h-8 w-8" />,
    delay: "2.4s",
    col: 3,
    row: 3,
    buttonText: "See More",
  },
  {
    title: "Contact Me",
    gradientFrom: "#264653",
    gradientTo: "#88979e",
    icon: <EnvelopeIcon className="h-8 w-8" />,
    delay: "2.1s",
    col: 3,
    row: 3,
    buttonText: "See More",
    hover: false,
  },
  {
    title: "Blog",
    gradientFrom: "#9AD1EA",
    description: "Sharing insights, ideas, and my journey in tech and beyond.",
    gradientTo: "#e5f5fd",
    textColor: "text-[#2B2D42]",
    icon: <PencilIcon className="size-14" />,
    delay: "1.8s",
    col: 3,
    row: 3,
    buttonText: "See More",
  },
];
