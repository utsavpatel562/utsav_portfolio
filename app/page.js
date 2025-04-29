"use client"
import { Safari } from "@/components/magicui/safari";
import { BentoGridSecondDemo } from "./components/BentoGridDemo";
import HeroSection from "./components/HeroSection";
import AnimatedListDemo from "./components/TechStack";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
   <> 
   <HeroSection/>
   <div className="bg-slate-950 md:p-15 md:flex block gap-5">
   <BentoGridSecondDemo/>
   <AnimatedListDemo className="p-5 md:p-0"/>
   </div>
   <div className="bg-slate-950 md:p-10 p-5">
   <SmoothCursor />
   <h2 className="text-slate-50 text-center font-semibold md:text-5xl mb-8 md:mb-15 text-2xl">My Projects</h2>
    <ProjectCard/>
   </div>
   </>
  );
}
