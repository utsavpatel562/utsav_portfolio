import SpotlightCard from "@/components/ui/SpotLightCard";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { TbDatabaseCog } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { LuWorkflow } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineSettingsSuggest } from "react-icons/md";
function Services() {
  return (
    <>
      <div className="w-full">
        <h2 className="text-slate-50 md:text-5xl md:mb-5 hidden md:block text-right font-semibold md:mr-10">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(73, 11, 95, 0.8)"
          >
            <div>
              <FaLaptopCode className="text-purple-200 bg-slate-900 border border-slate-500 mb-3 w-10 h-10 p-2 rounded-full" />
              <h2 className="text-purple-200 font-semibold text-xl">
                Full Stack Development
              </h2>
              <p className="text-slate-100 mt-3">
                I develop custom, scalable web applications tailored to your
                business, ensuring security and seamless user experiences.
              </p>
              <div className="w-full flex mt-5">
                <a
                  href="https://www.linkedin.com/in/utsav-patel-coder"
                  target="_blank"
                  className="cursor-none"
                >
                  <button className="relative cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                    <span className="w-full h-full flex items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                      Contact Me
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(73, 11, 95, 0.8)"
          >
            <div>
              <TbDatabaseCog className="text-purple-200 bg-slate-900 border border-slate-500 mb-3 w-10 h-10 p-2 rounded-full" />
              <h2 className="text-purple-200 font-semibold text-xl">
                Database Management
              </h2>
              <p className="text-slate-100 mt-3">
                I specialize in code optimization, enhancing performance,
                efficiency, and maintainability. I ensures faster, more reliable
                applications.
              </p>
              <div className="w-full flex mt-5">
                <a
                  href="https://www.linkedin.com/in/utsav-patel-coder"
                  target="_blank"
                  className="cursor-none"
                >
                  <button className="relative cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                    <span className="w-full h-full flex items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                      Contact Me
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(73, 11, 95, 0.8)"
          >
            <div>
              <CgWorkAlt className="text-purple-200 bg-slate-900 border border-slate-500 mb-3 w-10 h-10 p-2 rounded-full" />
              <h2 className="text-purple-200 font-semibold text-xl">
                Freelancer
              </h2>
              <p className="text-slate-100 mt-3">
                I offer freelancer full stack development services, creating
                custom, scalable solutions to meet your business needs.
              </p>
              <div className="w-full flex mt-5">
                <a
                  href="https://www.linkedin.com/in/utsav-patel-coder"
                  target="_blank"
                  className="cursor-none"
                >
                  <button className="relative cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                    <span className="w-full h-full flex items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                      Contact Me
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(73, 11, 95, 0.8)"
          >
            <div>
              <LuWorkflow className="text-purple-200 bg-slate-900 border border-slate-500 mb-3 w-10 h-10 p-2 rounded-full" />
              <h2 className="text-purple-200 font-semibold text-xl">
                Code Optimization
              </h2>
              <p className="text-slate-100 mt-3">
                Enhance your code's performance and maintainability with expert
                optimization tailored to your project’s needs.
              </p>
              <div className="w-full flex mt-5">
                <a
                  href="https://www.linkedin.com/in/utsav-patel-coder"
                  target="_blank"
                  className="cursor-none"
                >
                  <button className="relative cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                    <span className="w-full h-full flex items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                      Contact Me
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(73, 11, 95, 0.8)"
          >
            <div>
              <MdOutlineSettingsSuggest className="text-purple-200 bg-slate-900 border border-slate-500 mb-3 w-10 h-10 p-2 rounded-full" />
              <h2 className="text-purple-200 font-semibold text-xl">
                Consultation Services
              </h2>
              <p className="text-slate-100 mt-3">
                Providing insights and solutions to optimize your projects.
                Ensuring efficient and high-quality code development.
              </p>
              <div className="w-full flex mt-5">
                <a
                  href="https://www.linkedin.com/in/utsav-patel-coder"
                  target="_blank"
                  className="cursor-none"
                >
                  <button className="relative cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                    <span className="w-full h-full flex items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                      Contact Me
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(73, 11, 95, 0.8)"
          >
            <div>
              <LuUserRound className="text-purple-200 bg-slate-900 border border-slate-500 mb-3 w-10 h-10 p-2 rounded-full" />
              <h2 className="text-purple-200 font-semibold text-xl">
                Technical Support
              </h2>
              <p className="text-slate-100 mt-3">
                I provide reliable technical support, ensuring your systems run
                smoothly and efficiently. I resolve issues and offer expert
                guidance.
              </p>
              <div className="w-full flex mt-5">
                <a
                  href="https://www.linkedin.com/in/utsav-patel-coder"
                  target="_blank"
                  className="cursor-none"
                >
                  <button className="relative cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                    <span className="w-full h-full flex items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                      Contact Me
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </>
  );
}

export default Services;
