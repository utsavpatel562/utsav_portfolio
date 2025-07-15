import React from "react";
import { MdWorkOutline } from "react-icons/md";

function Experience() {
  return (
    <>
      <div>
        <section className="relative py-14 bg-gray-900 rounded-2xl">
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
              <div className="max-w-xl">
                <p>Know more about my professional background and education.</p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center md:mt-10">
              <div className="w-full border-2 border-cyan-400 rounded-xl p-4">
                <h2 className="flex gap-2 items-center text-lg">
                  <MdWorkOutline />
                  Professional Experience
                </h2>
              </div>
              <div className="w-full p-4">Part-2</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Experience;
