"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import { Safari } from "@/components/magicui/safari";
import { FaCode, FaRegCopy } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { LuSquareTerminal } from "react-icons/lu";
import { MdOutlinePreview } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import Footer from "../components/Footer";

function About_Page() {
  const features = [
    "Drag & Drop Layout Builder",
    "AI-Powered Template Generation",
    "Save & Reuse Templates",
    "Google OAuth Authentication",
    "Realtime Data Management",
  ];
  const envVariables = `
CONVEX_DEPLOYMENT=YOUR_API_KEY_HERE
NEXT_PUBLIC_CONVEX_URL=YOUR_API_KEY_HERE
NEXT_PUBLIC_GOOGLE_CLIENT_ID=YOUR_API_KEY_HERE
NEXT_PUBLIC_GEMINI_API_KEY=YOUR_API_KEY_HERE
`;

  const [copied, setCopied] = useState(false);
  const [copiedEnv, setCopiedEnv] = useState(false);
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
                <h2 className="text-purple-300 text-lg md:text-left text-center md:text-3xl font-bold">
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
                  {/*Environment Variables*/}
                  {/*Environment Variables*/}
                  <p className="text-slate-50">
                    Setup your environment variables in the .env file
                  </p>
                  <div className="mt-4 md:mt-2 w-full">
                    <div className="relative bg-zinc-800 rounded-xl p-4 overflow-x-auto">
                      <pre className="text-slate-50 text-sm whitespace-pre-wrap break-words">
                        <code>{envVariables}</code>
                      </pre>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(envVariables);
                          setCopiedEnv(true);
                          setTimeout(() => setCopiedEnv(false), 2000);
                        }}
                        className="absolute cursor-pointer top-3 right-5 text-slate-50 hover:text-orange-300 transition-colors"
                        aria-label="Copy environment variables"
                      >
                        {copiedEnv ? (
                          <TiTick className="w-5 h-5 text-orange-300" />
                        ) : (
                          <FaRegCopy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/*End of Env*/}
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </div>
            {/*end*/}
          </div>
        </div>
        {/*Live Preview and GitHub*/}
        <div className="bg-slate-950 py-24 md:p-0 md:pr-2 md:pl-2 sm:py-32 md:pb-10">
          <div className="mx-auto sm:px-6">
            <div className="relative md:border md:border-zinc-600 isolate overflow-clip bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 -z-10 aspect-square w-full max-w-3xl translate-x-3/4 rounded-full bg-purple-800/60 blur-[10rem] lg:-top-[40rem] lg:left-1/2 lg:-translate-x-1/2"
              ></div>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-start">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Preview the Web App and Quick Setup with Ease
                </h2>
                <p className="mt-6 text-base text-gray-300">
                  Explore the app and set it up locally with a single command.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
                  <a
                    href="https://auto-compose.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-lg bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95"
                  >
                    <span className="flex items-center gap-1 px-8 py-3 bg-[#fc8931] text-white rounded-lg bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                      <MdOutlinePreview className="w-5 h-5 hidden sm:inline" />{" "}
                      Live Preview
                    </span>
                  </a>

                  <a
                    href="https://github.com/utsavpatel562/AutoCompose"
                    target="_blank"
                    className="relative opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-lg bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale- 95"
                  >
                    <span className="w-full h-full flex items-center gap-1 px-8 py-3 bg-[#B931FC] text-white rounded-lg bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                      <IoLogoGithub className="w-5 h-5 hidden sm:inline" />
                      View GitHub
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8 lg:h-auto">
                <img
                  width="1920"
                  height="1139"
                  className="absolute left-0 top-0 w-[85rem] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10 lg:top-14 transition-transform duration-300 ease-in-out hover:scale-95"
                  src="/github_img2.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        {/*End of the section*/}
      </div>
      <div className="bg-slate-950 pb-10 md:pt-1 p-8">
        <Footer />
      </div>
    </>
  );
}

export default About_Page;
