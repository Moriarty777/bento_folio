"use client";
import Image from "next/image";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F8ECD5]">
      <div className="grid w-screen grid-cols-1 gap-7 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9">
        {/* Work Experience */}
        <div className="group relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#3C91E6] to-[#8CBFAD] p-6 text-xl font-bold text-white shadow-[0_4px_10px_#8CBFAD] transition-all hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] md:col-span-3 md:row-span-6">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 transition-opacity duration-500 group-hover:opacity-70 rounded-3xl"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:translate-y-[-10%]">
            <BuildingOffice2Icon className="size-16 " />

            <h1 className="relative text-3xl font-bold text-white mb-5">
              Work Experience
            </h1>

            <p className="mt-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Explore my journey in the tech industry.
            </p>
            <button className="mt-4 rounded-lg bg-gradient-to-br from-blue-500 to-teal-200 px-4 py-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-3 shadow-lg hover:scale-105">
              See More
            </button>
          </div>
        </div>

        {/* Projects */}
        <div
          style={{ "--fade-delay": "0.9s" }}
          className="animate-fadeIn will-change-transform will-change-opacity relative rounded-3xl bg-gradient-to-r from-[#F4A261] to-[#FFE8D6] p-6 text-lg font-bold text-[#2B2D42] shadow-[0_4px_10px_#8CBFAD] transition-all hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] md:col-span-3 md:row-span-3"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-lg"></div>
          <h2 className="relative">Projects</h2>
        </div>

        {/* Education */}
        <div
          style={{ "--fade-delay": "1.2s" }}
          className="animate-fadeIn will-change-transform will-change-opacity relative rounded-3xl bg-gradient-to-r from-[#2A9D8F] to-[#A8DADC] p-6 text-lg font-medium text-white shadow-[0_4px_10px_#8CBFAD] transition-all hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] md:col-span-3 md:row-span-3"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-lg"></div>
          <h2 className="relative">Education</h2>
        </div>

        {/* About Me */}
        <div
          style={{ "--fade-delay": "3s" }}
          className="animate-fadeIn will-change-transform will-change-opacity relative flex flex-col items-center justify-center space-y-4 rounded-3xl bg-gradient-to-r from-[#E76F51] to-[#FFA69E] p-6 text-lg font-medium text-white shadow-[0_4px_10px_#8CBFAD] transition-all hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] md:col-span-4 md:row-span-3"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-lg"></div>
          <div className="relative h-25 w-25 overflow-hidden rounded-full bg-gray-300">
            <Image
              src="/images/profile-pic.png"
              alt="My Profile Picture"
              width={200}
              height={200}
              className="shadow-lg scale-125"
              priority
            />
          </div>
          <p className="relative text-center text-2xl font-bold">
            Hi, I&apos;m Eric <br />
            <span className="text-xl font-normal text-[#F8ECD5]">
              a Software Developer
            </span>
          </p>
        </div>

        {/* Technology */}
        <div
          style={{ "--fade-delay": "1.5s" }}
          className="animate-fadeIn will-change-transform will-change-opacity relative rounded-3xl bg-gradient-to-r from-[#FFB400] to-[#FFD580] p-6 text-lg font-medium text-[#2B2D42] shadow-[0_4px_10px_#8CBFAD] transition-all hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] md:col-span-2 md:row-span-4"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-lg"></div>
          <h2 className="relative">Technology</h2>
        </div>

        {/* Resume */}
        <div
          style={{ "--fade-delay": "2.4s" }}
          className="animate-fadeIn will-change-transform will-change-opacity relative rounded-3xl bg-gradient-to-r from-[#E9C46A] to-[#FFE8D6] p-6 text-lg font-medium text-[#2B2D42] shadow-[0_4px_10px_#8CBFAD] transition-all hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] md:col-span-2 md:row-span-3"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-lg"></div>
          <h2 className="relative">Resume</h2>
        </div>

        {/* Contact Me */}
        <div
          style={{ "--fade-delay": "2.1s" }}
          className="animate-fadeIn will-change-transform will-change-opacity relative rounded-3xl bg-gradient-to-r from-[#264653] to-[#88979e] p-6 text-lg font-medium text-white shadow-[0_4px_10px_#8CBFAD] transition-all hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] md:col-span-5 md:row-span-3"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-lg"></div>
          <h2 className="relative">Contact Me</h2>
        </div>

        {/* Misc */}
        <div
          style={{ "--fade-delay": "1.8s" }}
          className="animate-fadeIn will-change-transform will-change-opacity relative rounded-3xl bg-gradient-to-r from-[#9AD1EA] to-[#cdeefd] p-6 text-lg font-medium text-[#2B2D42] shadow-[0_4px_10px_#8CBFAD] transition-all hover:scale-105 hover:shadow-[0_6px_15px_#8CBFAD] md:col-span-2 md:row-span-2"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-lg"></div>
          <h2 className="relative">Misc</h2>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Card from "./component/Card";

// export default function Home() {
//   return (
//     <div className="flex h-screen w-full items-center justify-center bg-[#F8ECD5]">
//       <div className="grid w-screen grid-cols-1 gap-7 p-5 md:h-screen md:grid-cols-9 md:grid-rows-9">
//         {/* Work Experience */}
//         <Card
//           title="Work Experience"
//           description="Explore my journey in the tech industry."
//           gradientFrom="#3C91E6"
//           gradientTo="#8CBFAD"
//           shadowColor="#8CBFAD"
//           delay="0s"
//           buttonText="See More"
//           onButtonClick={() => alert("Work Experience Button Clicked!")}
//         />

//         {/* Projects */}
//         <Card
//           title="Projects"
//           gradientFrom="#F4A261"
//           gradientTo="#FFE8D6"
//           textColor="text-[#2B2D42]"
//           shadowColor="#8CBFAD"
//           delay="0.9s"
//         />

//         {/* Education */}
//         <Card
//           title="Education"
//           gradientFrom="#2A9D8F"
//           gradientTo="#A8DADC"
//           delay="1.2s"
//         />

//         {/* About Me */}
//         <Card
//           title={
//             <>
//               Hi, I&apos;m Eric <br />
//               <span className="text-xl font-normal text-[#F8ECD5]">
//                 a Software Developer
//               </span>
//             </>
//           }
//           gradientFrom="#E76F51"
//           gradientTo="#FFA69E"
//           delay="3s"
//         >
//           <div className="relative h-25 w-25 overflow-hidden rounded-full bg-gray-300">
//             <Image
//               src="/images/profile-pic.png"
//               alt="My Profile Picture"
//               width={200}
//               height={200}
//               className="shadow-lg scale-125"
//               priority
//             />
//           </div>
//         </Card>

//         {/* Technology */}
//         <Card
//           title="Technology"
//           gradientFrom="#FFB400"
//           gradientTo="#FFD580"
//           delay="1.5s"
//         />

//         {/* Resume */}
//         <Card
//           title="Resume"
//           gradientFrom="#E9C46A"
//           gradientTo="#FFE8D6"
//           textColor="text-[#2B2D42]"
//           shadowColor="#8CBFAD"
//           delay="2.4s"
//         />

//         {/* Contact Me */}
//         <Card
//           title="Contact Me"
//           gradientFrom="#264653"
//           gradientTo="#88979e"
//           delay="2.1s"
//         />

//         {/* Misc */}
//         <Card
//           title="Misc"
//           gradientFrom="#9AD1EA"
//           gradientTo="#cdeefd"
//           textColor="text-[#2B2D42]"
//           delay="1.8s"
//         />
//       </div>
//     </div>
//   );
// }
