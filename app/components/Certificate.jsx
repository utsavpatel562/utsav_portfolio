import React from "react";
import { LuFileBadge2 } from "react-icons/lu";
import { GrOracle } from "react-icons/gr";
import { SiHackerrank } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
function Certificate() {
  return (
    <>
      <h2 className="text-slate-50 text-center md:mb-10 mb-5 md:text-5xl text-2xl font-semibold">
        My Certification
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-3">
        {/*Certificate 1*/}
        <div className="relative drop-shadow-xl w-full h-64 overflow-hidden rounded-xl bg-[#2e2e2e]">
          <div className="absolute w-56 h-48 bg-slate-300 blur-[50px] -right-1/2 -bottom-1/2" />
          <div className="absolute items-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#101010]">
            <div className="p-5">
              <div className="bg-slate-200 w-fit p-2 rounded-md mb-3 mt-1">
                <SiHackerrank className="text-green-600 w-8 h-8 rounded-sm" />
              </div>
              <h2 className="text-lg font-semibold text-purple-200">
                Frontend Developer (React)
              </h2>
              <h2 className="text-lg mt-2">Issued by HackerRank</h2>
            </div>
            <div className="p-5 md:mt-0 -mt-5">
              <a
                href="https://www.hackerrank.com/certificates/02138479e109"
                target="_blank"
                className="cursor-pointer"
              >
                <button className="relative w-full cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                  <span className="w-full h-full justify-center flex items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                    View Certificate <LuFileBadge2 />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="absolute w-56 h-48 bg-purple-400 blur-[50px] -left-1/2 -top-1/2" />
        </div>
        {/*Certificate 2*/}
        <div className="relative drop-shadow-xl w-full h-64 overflow-hidden rounded-xl bg-[#2e2e2e]">
          <div className="absolute w-56 h-48 bg-slate-300 blur-[50px] -right-1/2 -bottom-1/2" />
          <div className="absolute items-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#101010]">
            <div className="p-5">
              <div className="bg-slate-200 w-fit p-2 rounded-md mb-3 mt-1">
                <GrOracle className="text-red-500 w-8 h-8" />
              </div>
              <h2 className="text-lg font-semibold text-purple-200">
                OCI 2024 Certified AI Foundations Associate
              </h2>
              <h2 className="text-lg mt-2">Issued by Oracle</h2>
            </div>
            <div className="p-5 md:mt-0 -mt-5">
              <a
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=2F38464128DD3C3C7F7F08D004F9349D3C49B2B8036F7572C32D3685D1C8D37E"
                target="_blank"
                className="cursor-pointer"
              >
                <button className="relative w-full cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                  <span className="w-full h-full justify-center flex items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                    View Certificate <LuFileBadge2 />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="absolute w-56 h-48 bg-purple-400 blur-[50px] -left-1/2 -top-1/2" />
        </div>
        {/*Certificate 3*/}
        <div className="relative drop-shadow-xl w-full h-64 overflow-hidden rounded-xl bg-[#2e2e2e]">
          <div className="absolute w-56 h-48 bg-slate-300 blur-[50px] -right-1/2 -bottom-1/2" />
          <div className="absolute items-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#101010]">
            <div className="p-5">
              <div className="bg-slate-200 w-fit p-2 rounded-md mb-3 mt-1">
                <BiLogoMongodb className="text-green-600 w-8 h-8 rounded-sm" />
              </div>
              <h2 className="text-lg font-semibold text-purple-200">
                MongoDB for SQL Experts
              </h2>
              <h2 className="text-lg mt-2">Issued by MongoDB</h2>
            </div>
            <div className="p-5 md:mt-0 -mt-5">
              <button className="relative w-full cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                <span className="w-full h-full justify-center flex items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                  View Certificate <LuFileBadge2 />
                </span>
              </button>
            </div>
          </div>
          <div className="absolute w-56 h-48 bg-purple-400 blur-[50px] -left-1/2 -top-1/2" />
        </div>
        {/*Certificate 4*/}
        <div className="relative drop-shadow-xl w-full h-64 overflow-hidden rounded-xl bg-[#2e2e2e]">
          <div className="absolute w-56 h-48 bg-slate-300 blur-[50px] -right-1/2 -bottom-1/2" />
          <div className="absolute items-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#101010]">
            <div className="p-5">
              <div className="bg-slate-200 w-fit p-2 rounded-md mb-3 mt-1">
                <FcGoogle className="w-8 h-8 rounded-sm" />
              </div>
              <h2 className="text-lg font-semibold text-purple-200">
                Google Analytics 360
              </h2>
              <h2 className="text-lg mt-2">Issued by Google</h2>
            </div>
            <div className="p-5 md:mt-0 -mt-5">
              <button className="relative w-full cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                <span className="w-full h-full justify-center flex items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                  View Certificate <LuFileBadge2 />
                </span>
              </button>
            </div>
          </div>
          <div className="absolute w-56 h-48 bg-purple-400 blur-[50px] -left-1/2 -top-1/2" />
        </div>
        {/*Certificate 5*/}
        <div className="relative drop-shadow-xl w-full h-64 overflow-hidden rounded-xl bg-[#2e2e2e]">
          <div className="absolute w-56 h-48 bg-slate-300 blur-[50px] -right-1/2 -bottom-1/2" />
          <div className="absolute items-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#101010]">
            <div className="p-5">
              <div className="bg-slate-200 w-fit p-2 rounded-md mb-3 mt-1">
                <SiHackerrank className="text-green-600 w-8 h-8 rounded-sm" />
              </div>
              <h2 className="text-lg font-semibold text-purple-200">
                SQL (Advanced)
              </h2>
              <h2 className="text-lg mt-2">Issued by HackerRank</h2>
            </div>
            <div className="p-5 md:mt-0 -mt-5">
              <a
                href="https://www.hackerrank.com/certificates/78bc717730f0"
                target="_blank"
                className="cursor-pointer"
              >
                <button className="relative w-full cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-md bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                  <span className="w-full h-full justify-center flex items-center gap-2 px-8 py-2 bg-[#fc8931] text-white rounded-md bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                    View Certificate <LuFileBadge2 />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="absolute w-56 h-48 bg-purple-400 blur-[50px] -left-1/2 -top-1/2" />
        </div>
      </div>
    </>
  );
}

export default Certificate;
