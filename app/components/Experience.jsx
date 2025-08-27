import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { TbUserStar } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCodesandboxLogoFill } from "react-icons/pi";

function Experience() {
  return (
    <>
      <div>
        <section className="relative py-14 md:mt-0 mt-10 p-4  bg-gray-900 rounded-2xl">
          <div
            className="absolute inset-0 blur-[118px] h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          <div className="relative max-w-screen-xl mx-auto text-gray-300">
            <div className="max-w-xl mx-auto space-y-2 px-4 sm:text-center sm:px-0">
              <h2 className="text-slate-50 text-center font-semibold md:text-4xl text-2xl">
                Education & Experience
              </h2>
              <div className="w-full text-center md:mb-0 mb-5">
                <p>Know more about my professional background and education.</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 items-stretch justify-center md:mt-10 w-full md:px-4 sm:px-6 lg:px-0">
              {/* Professional Experience */}
              <div
                className="rounded-xl p-1 w-full"
                style={{
                  background:
                    "linear-gradient(195deg, #ff00c3, #e11cbe, #c427b6, #a82dad, #8d2fa1, #732e93, #5b2c84, #452874, #312362, #1f1d50, #10163d, #050b2b)",
                }}
              >
                <div className="rounded-lg bg-black/80 backdrop-blur">
                  <div className="flex flex-col w-full gap-4 px-6 sm:px-8 md:px-12 py-10">
                    <div className="w-full">
                      <h2 className="mb-5 text-lg text-orange-300 flex gap-2 items-center font-semibold">
                        <MdWorkOutline className="w-5 h-5" />
                        Professional Experience
                      </h2>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <img
                          src={"/stem_canada.png"}
                          className="md:w-[60px] w-[40px] rounded-sm"
                        />
                        <div className="w-full">
                          <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent md:text-xl sm:text-xs">
                            STEM Montessori Academy of Canada
                          </h2>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <h2>
                              <span className="font-semibold">Role:</span> Full
                              Stack Developer (Co-op)
                            </h2>
                            <h2 className="flex gap-2 items-center">
                              <LuCalendarDays />
                              Jan 2025 - Apr 2025
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div className="md:mt-2">
                        <h2 className="my-4 text-orange-300 text-md flex gap-2 items-center font-semibold">
                          <TbUserStar className="w-5 h-5" />
                          Work Responsibilities
                        </h2>
                        {[
                          "Led a team of 5 developers, coordinating tasks and ensuring efficient delivery, improving team performance.",
                          "Built and customized WordPress CMS themes, enhancing flexibility and reducing content update time by 50%.",
                          "Ensured accessibility compliance by applying WCAG 2.2 standards, contributing to faster delivery of features.",
                          "Implemented unit testing across critical modules, reducing deployment bugs by 35% and improving reliability.",
                          "Integrated third-party services and APIs, improving user interaction by 25% and ensuring seamless data flow.",
                          "Optimized backend logic and server architecture, reducing response times by 40%, ensuring 99.9% uptime.",
                        ].map((point, index) => (
                          <p
                            key={index}
                            className="flex gap-2 my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400"
                          >
                            <GoDotFill className="w-5 h-5 md:mt-1" />
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div
                className="rounded-xl p-1 w-full"
                style={{
                  background:
                    "linear-gradient(150deg, #f9f9f9, #e2e5e2, #cad1cd, #b3beb9, #9baba7, #859896, #6f8587, #5a737a, #46616d, #344f61, #233d56, #142b4e)",
                }}
              >
                <div className="rounded-lg bg-black/80 backdrop-blur">
                  <div className="flex flex-col w-full gap-4 px-6 sm:px-8 md:px-12 py-10">
                    <div className="w-full">
                      <h2 className="mb-5 text-lg text-orange-300 flex gap-2 items-center font-semibold">
                        <FaGraduationCap className="w-5 h-5" />
                        My Qualification
                      </h2>

                      {/* Georgian College */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <img
                          src={"/georgian.png"}
                          className="md:w-[60px] w-[40px] rounded-sm"
                        />
                        <div className="w-full">
                          <h2 className="pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-xl sm:text-xl">
                            Georgian College
                          </h2>
                          <h2>Diploma in Computer Programming (2yr)</h2>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-5 md:mt-3">
                        <h2 className="flex gap-2 items-center">
                          <LuCalendarDays />
                          Toronto, Ontario, Canada
                        </h2>
                        <h2 className="flex gap-2 items-center">
                          <LuCalendarDays />
                          Jan 2024 - Aug 2025
                        </h2>
                      </div>
                      <div className="md:mt-2">
                        <h2 className="my-4 text-orange-300 text-md flex gap-2 items-center font-semibold">
                          <PiCodesandboxLogoFill className="w-5 h-5" />
                          Course Description
                        </h2>
                        <p className="flex gap-2 my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                          <GoDotFill className="w-8 h-8 md:mt-[-4px]" />
                          Gained hands-on experience in programming, web
                          development, and building data-driven systems using
                          languages like Java, C#, JavaScript, PHP, and Swift.
                        </p>
                      </div>

                      {/* GTU */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6">
                        <img
                          src={"/gtu.png"}
                          className="md:w-[60px] w-[40px] rounded-sm bg-white p-2"
                        />
                        <div className="w-full">
                          <h2 className="pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-xl sm:text-xl">
                            Gujarat Technological University
                          </h2>
                          <h2>B.Tech in Computer Engineering (4yr)</h2>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-5 md:mt-3">
                        <h2 className="flex gap-2 items-center">
                          <LuCalendarDays />
                          V.v Nagar, Gujarat, India
                        </h2>
                        <h2 className="flex gap-2 items-center">
                          <LuCalendarDays />
                          Aug 2019 - May 2023
                        </h2>
                      </div>
                      <div className="md:mt-2">
                        <h2 className="my-4 text-orange-300 text-md flex gap-2 items-center font-semibold">
                          <PiCodesandboxLogoFill className="w-5 h-5" />
                          Course Description
                        </h2>
                        <p className="flex gap-2 my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                          <GoDotFill className="w-10 h-10 md:mt-[-5px]" />
                          Gained hands-on experience in programming, web
                          development, and system design using Java, C++, C#,
                          JavaScript, PHP. Also studied Android development,
                          advanced databases, and network security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Education */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Experience;
