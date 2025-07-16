import { Mail } from "lucide-react";
import React from "react";
import { DiGithub } from "react-icons/di";
import { FaHackerrank, FaLinkedin } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { SiHackerrank } from "react-icons/si";
import RotatingLang from "./RotatingLang";

function ContactMe() {
  return (
    <>
      <div className="md:flex block items-center md:gap-20 bg-stone-900 md: rounded-xl p-10 w-full border-2 border-neutral-700">
        <RotatingLang />
        <div>
          <h2 className="text-purple-200 font-light md:text-4xl text-3xl md:mt-0 mt-10">
            Let's build something amazing together! Connect with me...
          </h2>
          <p className="text-slate-200 md:text-lg text-md mt-3 font-light">
            From intuitive user interfaces to powerful server-side logic, I
            offer end-to-end development expertise. I'm dedicated to creating
            impactful digital products that are both functional and visually
            engaging. Let's discuss your project!
          </p>
          <div className="mt-5 md:flex block items-center gap-2">
            <a
              href="https://www.linkedin.com/in/utsav-patel-coder"
              className=""
              target="_blank"
            >
              <button className="relative md:w-fit cursor-pointer w-full md:mb-0 mb-2 opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                  LinkedIn <FaLinkedin />
                </span>
              </button>
            </a>
            <a
              href="https://github.com/utsavpatel562"
              className=""
              target="_blank"
            >
              <button className="relative md:w-fit cursor-pointer w-full md:mb-0 mb-2 opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                  GitHub <GrGithub />
                </span>
              </button>
            </a>
            <a
              href="https://www.hackerrank.com/certificates/02138479e109"
              className=""
              target="_blank"
            >
              <button className="relative md:w-fit cursor-pointer w-full md:mb-0 mb-2 opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                  HackerRank <SiHackerrank />
                </span>
              </button>
            </a>
            <a
              href="mailto:utsavpatel562@gmail.com"
              className=""
              target="_blank"
            >
              <button className="relative md:w-fit cursor-pointer w-full md:mb-0 mb-2 opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                <span className="w-full h-full flex justify-center items-center gap-2 px-8 py-2 bg-[#B931FC] text-white rounded-md bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                  Email <Mail className="w-5 h-5" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
