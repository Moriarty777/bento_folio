"use client";
import {
  BuildingOffice2Icon,
  CpuChipIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Card from "./component/Card";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F8ECD5]">
      <div className="grid w-screen grid-cols-1 gap-7 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9">
        {/* Work Experience */}
        <Card
          title="Work Experience"
          description="Explore my journey in the tech industry."
          gradientFrom="#3C91E6"
          gradientTo="#8CBFAD"
          icon={<BuildingOffice2Icon className="size-16 " />}
          delay="0s"
          col="3"
          row="6"
          buttonText="See More"
          // onButtonClick={() => alert("Work Experience Button Clicked!")}
        />

        {/* Projects */}
        <Card
          title="Projects"
          gradientFrom="#F4A261"
          gradientTo="#FFE8D6"
          textColor="text-[#2B2D42]"
          icon={<CodeBracketIcon className="size-16 " />}
          delay="0.9s"
          col="3"
          row="3"
        />

        {/* Education */}
        <Card
          title="Education"
          gradientFrom="#2A9D8F"
          gradientTo="#A8DADC"
          icon={<AcademicCapIcon className="size-16 " />}
          delay="1.2s"
          col="3"
          row="3"
        />

        {/* About Me */}
        <Card
          title={
            <>
              Hi, I&apos;m Eric <br />
              <span className="text-xl font-normal text-[#F8ECD5]">
                a Software Developer
              </span>
            </>
          }
          gradientFrom="#e65c3a"
          gradientTo="#FFA69E"
          delay="3s"
          col="4"
          row="3"
        >
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
        </Card>

        {/* Technology */}
        <Card
          title="Technology"
          gradientFrom="#FFB400"
          gradientTo="#fde8b7"
          icon={<CpuChipIcon className="size-16 " />}
          delay="1.5s"
          col="2"
          row="4"
        />

        {/* Resume */}
        <Card
          title="Resume"
          gradientFrom="#E9C46A"
          gradientTo="#FFE8D6"
          textColor="text-[#2B2D42]"
          icon={<BuildingOffice2Icon className="size-16 " />}
          delay="2.4s"
          col="2"
          row="3"
        />

        {/* Contact Me */}
        <Card
          title="Contact Me"
          gradientFrom="#264653"
          gradientTo="#88979e"
          icon={<EnvelopeIcon className="size-16 " />}
          delay="2.1s"
          col="5"
          row="3"
        />

        {/* Misc */}
        <Card
          title="Blog"
          gradientFrom="#9AD1EA"
          gradientTo="#e5f5fd"
          textColor="text-[#2B2D42]"
          icon={<PencilIcon className="size-16 " />}
          delay="1.8s"
          col="2"
          row="2"
        />
      </div>
    </div>
  );
}
