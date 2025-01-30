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
    hover: true,
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
    hover: true,
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
    hover: true,
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
    hover: true,
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
    hover: true,
  },
  {
    title: "Contact Me",
    gradientFrom: "#264653",
    gradientTo: "#88979e",
    icon: <EnvelopeIcon className="h-8 w-8" />,
    delay: "2.1s",
    col: 3,
    row: 3,
  },
  {
    title: "Blog",
    description: "Sharing insights, ideas, and my journey in tech and beyond.",
    gradientFrom: "#9AD1EA",
    gradientTo: "#e5f5fd",
    textColor: "text-[#2B2D42]",
    icon: <PencilIcon className="size-14" />,
    delay: "1.8s",
    col: 3,
    row: 3,
    buttonText: "See More",
    hover: true,
  },
];

export const workExperience = [
  {
    company: "ParishOnNet",
    location: "Chicago, IL",
    role: "Software Engineer",
    description:
      "Streamlined development and testing processes, designed reusable components, and collaborated on API creation.",
    gradientDirection: "top",
    gradientFrom: "#56B3FA",
    gradientTo: "#2E4053",
    col: 5,
    row: 3,
  },
  {
    company: "Jaia Robotics",
    location: "Bristol, Rhode Island",
    role: "Software Developer Intern",
    description:
      "Designed user dashboards, integrated REST APIs, and enhanced UI/UX for efficient and responsive interfaces.",
    gradientDirection: "top",
    gradientFrom: "#87CEEB",
    gradientTo: "#343A40",
    col: 4,
    row: 3,
  },
  {
    company: "Indian Institute of Technology Bombay",
    location: "Mumbai",
    role: "Sr. Project Technical Assistant",
    description:
      "Enhanced UI functionality, improved code quality, and optimized simulator usability by 25%.",
    gradientDirection: "top",
    gradientFrom: "#4682B4",
    gradientTo: "#2F4F7F",
    col: 3,
    row: 6,
  },
  {
    company: "Work Experience",
    gradientFrom: "#3C91E6",
    gradientTo: "#8CBFAD",
    col: 3,
    row: 3,
    buttonText: "Go Back",
    path: "/",
    hover: true,
  },
  {
    company: "Indian Institute of Technology Bombay",
    location: "Mumbai",
    role: "Project Research Assistant",
    description:
      "Developed a Scilab Converter prototype using Python to migrate block diagram models and implement new regulations.",
    gradientDirection: "top",
    gradientFrom: "#6495ED",
    gradientTo: "#455A64",
    col: 3,
    row: 6,
  },
  {
    company: "More to Come ...",
    gradientDirection: "top",
    gradientFrom: "#3C91E6",
    gradientTo: "#2E6DA4",
    col: 3,
    row: 3,
  },
];
