"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import { Safari } from "@/components/magicui/safari";
import { FaCode, FaRegCopy } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { LuSquareTerminal } from "react-icons/lu";

function About_Page() {
  const features = [
    "Drag & Drop Layout Builder",
    "AI-Powered Template Generation",
    "Save & Reuse Templates",
    "Google OAuth Authentication",
    "Realtime Data Management",
  ];
  const [copied, setCopied] = useState(false);
  const cloneCommand =
    "git clone https://github.com/utsavpatel562/AutoCompose.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col md:flex-row md:p-10 p-4 items-start gap-6 md:gap-10 bg-gradient-to-t from-slate-950 to-slate-900">
          {/* Left Section */}
          <div className="w-full">
            <div>
              <div className="md:p-3 mb-6 md:mb-5">
                <h2 className="text-purple-300 text-lg md:text-left text-center md:text-3xl font-semibold">
                  AutoCompose - AI Email Template Builder
                </h2>
                <p className="text-slate-100 text-justify text-sm md:text-[18px] mt-2">
                  AutoCompose is a powerful AI-powered Email Template Generator
                  🚀 - featuring an intuitive drag & drop layout builder, save &
                  reuse templates, and custom branding options, all built with a
                  modern tech stack.
                </p>
              </div>
              <div className="w-full">
                <Safari
                  url={"https://auto-compose.vercel.app"}
                  videoSrc={"/autocompose.mp4"}
                  className="w-full h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Tech Stack Card */}
              <div className="group relative md:w-[50%] w-full">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
                <div className="relative flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950 p-3 md:p-5 pr-4 md:pb-8">
                  <h2 className="flex items-center gap-2 text-orange-300 text-lg md:text-xl font-semibold">
                    <FaCode className="w-5 h-5" />
                    Tech Stack
                  </h2>
                  <div className="mt-4 md:mt-5 grid grid-cols-4 sm:grid-cols-4 gap-3 items-center">
                    {[
                      { src: "/nextjs2.png", label: "Next.js" },
                      { src: "/nodejs.png", label: "Node.js" },
                      { src: "/react.png", label: "React.js" },
                      { src: "/convex.png", label: "Convex" },
                      { src: "/gemini.png", label: "Gemini AI" },
                      { src: "/tailwind.png", label: "Tailwind" },
                      { src: "/gcp.png", label: "GCP" },
                      { src: "/js.png", label: "Javascript" },
                    ].map((tech, i) => (
                      <div key={i} className="justify-center text-center">
                        <img
                          src={tech.src}
                          className="bg-slate-900 border border-slate-800 object-contain p-1 rounded-md w-[40px] h-[40px] mx-auto"
                          alt={tech.label}
                        />
                        <h3 className="text-slate-50 font-light mt-1 text-xs md:text-sm">
                          {tech.label}
                        </h3>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Features Card */}
              <div className="group relative md:w-[50%] w-full">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
                <div className="relative flex flex-col items-start gap-2 rounded-xl border border-slate-800 bg-slate-950 p-3 md:p-5 pr-4">
                  <h2 className="flex items-center gap-2 text-orange-300 text-lg md:text-xl font-semibold">
                    <RxDashboard className="w-5 h-5" />
                    Top Features
                  </h2>
                  <div className="mt-4 md:mt-5 w-full">
                    <ul className="text-slate-100 space-y-2 text-sm md:text-base">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center font-light gap-2"
                        >
                          <TiTick className="w-5 h-5 text-orange-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </div>
            {/*Code installation*/}
            <div>
              <div className="group relative w-full mt-3">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
                <div className="relative flex flex-col items-start gap-2 rounded-xl border border-slate-800 bg-slate-950 p-3 md:p-5 pr-4">
                  <h2 className="flex items-center gap-2 text-orange-300 text-lg md:text-xl font-semibold">
                    <LuSquareTerminal className="w-5 h-5" />
                    Installation
                  </h2>
                  <p className="text-slate-50">
                    Run the following command in your terminal to install the
                    project
                  </p>
                  <div className="mt-4 md:mt-2 w-full">
                    <span className="bg-zinc-800 flex gap-5 items-center justify-between py-3 px-5 rounded-full">
                      <code className="text-slate-50 text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
                        git clone{" "}
                        <span className="text-amber-100">
                          https://github.com/utsavpatel562/AutoCompose.git
                        </span>
                      </code>
                      <button
                        onClick={handleCopy}
                        className="text-slate-50 cursor-pointer hover:text-orange-300 transition-colors"
                        aria-label="Copy to clipboard"
                      >
                        {copied ? (
                          <TiTick className="w-5 h-5 text-orange-300" />
                        ) : (
                          <FaRegCopy className="w-5 h-5" />
                        )}
                      </button>
                    </span>
                  </div>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </div>
            {/*end*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default About_Page;
