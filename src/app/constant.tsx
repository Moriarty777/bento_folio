import {
  HiOutlineBuildingOffice2,
  HiOutlineCpuChip,
  HiCodeBracket,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiOutlinePencil,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import Image from "next/image";

export const home = [
  {
    title: "Work Experience",
    gradientFrom: "#3C91E6",
    gradientTo: "#c6e7db",
    icon: <HiOutlineBuildingOffice2 className="h-8 w-8" />,
    delay: "800ms",
    col: 3,
    row: 3,
    buttonText: "See More",
    hover: true,
    path: "/work-experience",
    variant: "main",
  },
  {
    title: "Projects",
    description: "Check out the projects I’ve built and contributed to.",
    gradientFrom: "#F4A261",
    gradientTo: "#FFE8D6",
    textColor: "text-[#2B2D42]",
    icon: <HiCodeBracket className="h-8 w-8" />,
    delay: "1000ms",
    col: 3,
    row: 3,
    buttonText: "See More",
    hover: true,
    path: "/projects",
    variant: "main",
  },
  {
    title: "Education & Certifications",
    description:
      "Showcasing my academic qualifications and professional achievements.",
    gradientFrom: "#2A9D8F",
    gradientTo: "#A8DADC",
    icon: <HiOutlineAcademicCap className="h-8 w-8" />,
    delay: "1200ms",
    col: 3,
    row: 3,
    buttonText: "See More",
    hover: true,
    path: "/education-cert",
    variant: "main",
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
    delay: "2500ms",
    col: 6,
    row: 3,
    hover: false,
    children: (
      <div className="relative h-25 w-25 overflow-hidden rounded-full bg-gray-300 mt-2">
        <Image
          src="/images/bg/profile-pic.png"
          alt="My Profile Picture"
          width={200}
          height={200}
          className="shadow-lg scale-125"
          priority
        />
      </div>
    ),
    variant: "main",
  },
  {
    title: "Technology",
    description: "Explore the tools and frameworks I work with.",
    gradientFrom: "#FFB400",
    gradientTo: "#fde8b7",
    icon: <HiOutlineCpuChip className="h-8 w-8" />,
    delay: "1500ms",
    col: 3,
    row: 3,
    buttonText: "See More",
    hover: true,
    path: "/technology",
    variant: "main",
  },
  {
    title: "Resume",
    description: "A snapshot of my skills, experience, and achievements.",
    gradientFrom: "#E9C46A",
    gradientTo: "#FFE8D6",
    textColor: "text-[#2B2D42]",
    icon: <HiOutlineDocumentText className="h-8 w-8" />,
    delay: "2200ms",
    col: 3,
    row: 3,
    buttonText: "Download",
    hover: true,
    variant: "main",
  },
  {
    title: "Contact Me",
    gradientFrom: "#264653",
    gradientTo: "#88979e",
    icon: <HiOutlineEnvelope className="h-8 w-8" />,
    delay: "2000ms",
    col: 3,
    row: 3,
    variant: "main",
  },
  {
    title: "Blog",
    description: "Sharing insights, ideas, and my journey in tech and beyond.",
    gradientFrom: "#9AD1EA",
    gradientTo: "#e5f5fd",
    textColor: "text-[#2B2D42]",
    icon: <HiOutlinePencil className="h-8 w-8" />,
    delay: "1800ms",
    col: 3,
    row: 3,
    buttonText: "See More",
    hover: true,
    variant: "main",
  },
];
