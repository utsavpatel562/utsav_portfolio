"use client";
import React from "react";
import Header from "../components/Header";
import { Safari } from "@/components/magicui/safari";

function About_Page() {
  return (
    <>
      <Header />
      <div>
        <div
          className="flex md:p-10 items-start gap-5 bg-gradient-to-b from-slate-950 to-slate-900"
          style={{
            background: "",
          }}
        >
          <div className="">
            <div>
              <div className="md:p-3 md:mb-5">
                <h2 className="text-purple-300 md:text-2xl font-semibold">
                  AutoCompose - AI Email Template Builder
                </h2>
                <p className="text-slate-100 text-justify md:mt-2">
                  AutoCompose is a powerful AI-powered Email Template Generator
                  🚀 - featuring an intuitive drag & drop layout builder, save &
                  reuse templates, and custom branding options, all built with a
                  modern tech stack.
                </p>
              </div>
              <Safari videoSrc={"/autocompose.mp4"} className="w-full h-fit" />
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </>
  );
}

export default About_Page;
