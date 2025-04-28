"use client";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";

function HeroSection() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "About Me", path: "#", icon: <FaRegUser /> },
    { title: "Services", path: "#", icon: <MdOutlineSpaceDashboard /> },
    { title: "Profile", path: "#", icon: <TbFileCv /> },
    { title: "Projects", path: "#", icon: <FaCode /> },
    { title: "Contact Me", path: "#", icon: <MdOutlineEmail /> },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-900">
        <header>
          <nav
            className={`pb-5 md:text-sm ${
              state
                ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="flex-1 mt-5 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="text-gray-300 hover:text-slate-100 hover:font-semibold hover:bg-slate-950 p-2 md:pr-5 md:pl-5 rounded-full"
                      >
                        <a
                          href={item.path}
                          className="block md:flex items-center gap-2 md:text-[16px]"
                        >
                          {item.title}
                          {item.icon}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <section className="relative mt-10">
          <div className="flex flex-col items-center justify-center px-4 md:flex-row">
            <div className="w-full p-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold mx-auto">
                Hi! <span className="text-orange-400">I'm Utsav</span> - AI
                Enthusiast and Full Stack Developer
              </h2>
              <p className="text-gray-400 text-base md:text-lg mt-3 font-semibold">
                A Computer Programmer who enjoys turning creative ideas into
                code.
              </p>
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-lg bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                  <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#fc8931] text-white rounded-lg bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                    About Me
                  </span>
                </button>
                <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-lg bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale- 95">
                  <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-lg bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                    Download Resume
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-4 md:mt-0">
              <img
                src="/programmer.png"
                className="w-[80%] md:w-[70%] lg:w-[60%]"
              />
            </div>
          </div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
