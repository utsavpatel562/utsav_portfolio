import { AvatarCircles } from "@/components/magicui/avatar-circles";
import React from "react";
import { FaCodepen } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";
function ProjectCard() {
  const autocompose = [
    {
      imageUrl: "/js.png",
    },
    {
      imageUrl: "/convex.png",
    },
    {
      imageUrl: "/gcp.png",
    },
    {
      imageUrl: "/react.png",
    },
    {
      imageUrl: "/ts.png",
    },
    {
      imageUrl: "/nextjs.png",
    },
  ];
  const carrerboost = [
    {
      imageUrl: "/js.png",
    },
    {
      imageUrl: "/node.png",
    },
    {
      imageUrl: "/gemini.png",
    },
    {
      imageUrl: "/react.png",
    },
    {
      imageUrl: "/git.png",
    },
    {
      imageUrl: "/ts.png",
    },
  ];
  const carconnect = [
    {
      imageUrl: "/git.png",
    },
    {
      imageUrl: "/tailwind.png",
    },
    {
      imageUrl: "/node.png",
    },
    {
      imageUrl: "/react.png",
    },
    {
      imageUrl: "/firebase.png",
    },
    {
      imageUrl: "/ts.png",
    },
  ];
  const zoomclone = [
    {
      imageUrl: "/videocall.png",
    },
    {
      imageUrl: "/tailwind.png",
    },
    {
      imageUrl: "/node.png",
    },
    {
      imageUrl: "/npm.png",
    },
    {
      imageUrl: "/prisma.png",
    },
    {
      imageUrl: "/react.png",
    },
  ];
  const arduino = [
    {
      imageUrl: "/system.png",
    },
    {
      imageUrl: "/setting.png",
    },
    {
      imageUrl: "/c++.png",
    },
    {
      imageUrl: "/arduino.png",
    },
  ];
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 md:p-5"
        id="Projects"
      >
        {/* Project Card 1 */}
        <div className="bg-zinc-800 w-full h-fit rounded-lg">
          <div className="flex justify-between">
            <div className="flex p-2 gap-1">
              <div className="">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <a
              href="https://auto-compose.vercel.app/"
              className=""
              target="_blank"
            >
              <h2 className="p-2 md:pr-4 text-slate-50 hover:text-purple-300">
                autocompose.github.com
              </h2>
            </a>
          </div>
          <div className="card__content">
            <div className="p-3">
              <img src="/autocompose.png" className="rounded-lg" />
            </div>
            <div className="p-4 md:pt-0 mt-1">
              <h2 className="text-purple-200 font-semibold text-lg">
                AutoCompose - AI Email Template Builder
              </h2>
              <p className="text-slate-100 mt-1">
                Featuring an intuitive drag & drop layout builder, save & reuse
                templates, and custom branding options, all built with a modern
                tech stack.
              </p>
              <div className="md:flex block items-center justify-between mt-5">
                <AvatarCircles avatarUrls={autocompose} />
                <a href="#" target="_blank">
                  <button className="relative cursor-pointer md:mt-0 mt-3 w-full md:w-fit opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                    <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                      Know More
                      <FaCodepen className="w-4 h-4" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-neutral-800 w-full h-fit rounded-lg">
          <div className="flex justify-between">
            <div className="flex p-2 gap-1">
              <div className="">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <a
              href="https://career-boost-ai.vercel.app/"
              className=""
              target="_blank"
            >
              <h2 className="p-2 md:pr-4 text-slate-50 hover:text-purple-300">
                career-boost-ai.github.com
              </h2>
            </a>
          </div>
          <div className="card__content">
            <div className="p-3">
              <img src="/carrerboost.png" className="rounded-lg" />
            </div>
            <div className="p-4 md:pt-0 mt-1">
              <h2 className="text-purple-200 font-semibold text-lg">
                CareerBoost-AI: Your Mock Interviewer
              </h2>
              <p className="text-slate-100 mt-1">
                Full Stack AI Mock Interview App project! A powerful AI-driven
                mock interview application using modern technologies, provide an
                interactive and realistic interview.
              </p>
              <div className="md:flex block items-center justify-between mt-5">
                <AvatarCircles avatarUrls={carrerboost} />
                <a href="#" target="_blank">
                  <button className="relative cursor-pointer md:mt-0 mt-3 w-full md:w-fit opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                    <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                      Know More
                      <FaCodepen className="w-4 h-4" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="bg-neutral-800 w-full h-fit rounded-lg">
          <div className="flex justify-between">
            <div className="flex p-2 gap-1">
              <div className="">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <a
              href="https://car-connect-marketplace.netlify.app"
              className=""
              target="_blank"
            >
              <h2 className="p-2 md:pr-4 text-slate-50 hover:text-purple-300">
                car-connect.github.com
              </h2>
            </a>
          </div>
          <div className="card__content">
            <div className="p-3">
              <img src="/carconnect.png" className="rounded-lg" />
            </div>
            <div className="p-4 md:pt-0 mt-1">
              <h2 className="text-purple-200 font-semibold text-lg">
                CarConnect: A Marketplace for Cars
              </h2>
              <p className="text-slate-100 mt-1">
                the ultimate marketplace for buying and selling cars! This
                full-stack application is designed with performance,
                scalability, and user engagement in mind.
              </p>
              <div className="md:flex block items-center justify-between mt-5">
                <AvatarCircles avatarUrls={carconnect} />
                <a href="#" target="_blank">
                  <button className="relative cursor-pointer md:mt-0 mt-3 w-full md:w-fit opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                    <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                      Know More
                      <FaCodepen className="w-4 h-4" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Card 4 */}
        <div className="bg-neutral-800 w-full h-fit rounded-lg">
          <div className="flex justify-between">
            <div className="flex p-2 gap-1">
              <div className="">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <a
              href="https://zoom-clone-iota-six.vercel.app"
              className=""
              target="_blank"
            >
              <h2 className="p-2 md:pr-4 text-slate-50 hover:text-purple-300">
                zoom-clone.github.com
              </h2>
            </a>
          </div>
          <div className="card__content">
            <div className="p-3">
              <img src="/zoomclone.png" className="rounded-lg" />
            </div>
            <div className="p-4 md:pt-0 mt-1">
              <h2 className="text-purple-200 font-semibold text-lg">
                Zoom Clone - Full Stack Project
              </h2>
              <p className="text-slate-100 mt-1">
                A feature-rich Zoom clone built with modern technologies such as
                TypeScript, Next.js, Tailwind CSS, Shadcn, GetStream, Clerk, and
                Node.js.
              </p>
              <div className="md:flex block items-center justify-between mt-5">
                <AvatarCircles avatarUrls={zoomclone} />
                <a href="#" target="_blank">
                  <button className="relative cursor-pointer md:mt-0 mt-3 w-full md:w-fit opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                    <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                      Know More
                      <FaCodepen className="w-4 h-4" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Card 5 */}
        <div className="bg-neutral-800 w-full h-fit rounded-lg">
          <div className="flex justify-between">
            <div className="flex p-2 gap-1">
              <div className="">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <a
              href="https://www.tinkercad.com/things/hMNGaY5Yu2w-home-automation-system"
              className=""
              target="_blank"
            >
              <h2 className="p-2 md:pr-4 text-slate-50 hover:text-purple-300">
                home-automation.tinkercad.com
              </h2>
            </a>
          </div>
          <div className="card__content">
            <div className="p-3">
              <img src="/iot.png" className="rounded-lg" />
            </div>
            <div className="p-4 md:pt-0 mt-1">
              <h2 className="text-purple-200 font-semibold text-lg">
                Home Automation System using Arduino
              </h2>
              <p className="text-slate-100 text-justify mt-1">
                Home Automation System using Arduino" is a C++-based project
                developed using Tinkercad. It enables remote control of home
                appliances like lights, sensor input, etc.
              </p>
              <div className="md:flex block items-center justify-between mt-5">
                <AvatarCircles avatarUrls={arduino} />
                <a href="#" target="_blank">
                  <button className="relative cursor-pointer md:mt-0 mt-3 w-full md:w-fit opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                    <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                      Know More
                      <FaCodepen className="w-4 h-4" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
