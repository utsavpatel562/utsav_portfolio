"use client";
import Header from "./Header";

function HeroSection() {
  return (
    <>
      <div className="bg-gray-900">
        <Header />
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
                <button className="relative cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-lg bg-gradient-to-t from-[#b07022] to-[#fde498] active:scale-95">
                  <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#fc8931] text-white rounded-lg bg-gradient-to-t from-[#e27e2c] to-[#fcbc45]">
                    About Me
                  </span>
                </button>
                <a
                  href="/UTSAV_PATEL_RESUME.pdf"
                  download
                  className="relative cursor-none opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-lg bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale- 95"
                >
                  <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-lg bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                    Download Resume
                  </span>
                </a>
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
