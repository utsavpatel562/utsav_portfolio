"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Ensure this utility function is available
import { AnimatedList } from "@/components/magicui/animated-list";
import { RiDrizzleFill, RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { RiFirebaseLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { RiPhpFill } from "react-icons/ri";
import { RiBootstrapFill } from "react-icons/ri";
import { GrOracle } from "react-icons/gr";
import { FaStripe } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
// Ensure this component is available

const notifications = [
  {
    name: "Next.js",
    description: "React framework for server-side rendering",
    time: "Frontend / Fullstack Framework",
    icon: <RiNextjsLine className="text-slate-50" />,
    color: "#000000",
  },
  {
    name: "React.js",
    description: "UI library for building dynamic interfaces",
    time: "Frontend Library",
    icon: <FaReact className="text-slate-50" />,
    color: "#40c4ff",
  },
  {
    name: "TypeScript",
    description: "JavaScript with static typing",
    time: "Frontend/Backend Language",
    icon: <SiTypescript className="text-slate-50" />,
    color: "#1e88e5",
  },
  {
    name: "JavaScript",
    description: "Core web programming language",
    time: "Frontend/Backend Language",
    icon: <IoLogoJavascript className="text-slate-50" />,
    color: "#fdd835",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for styling",
    time: "Frontend Framework",
    icon: <RiTailwindCssFill className="text-slate-50" />,
    color: "#00bcd4",
  },
  {
    name: "SASS",
    description: "Advanced CSS with variables and nesting",
    time: "Frontend Preprocessor",
    icon: <FaSass className="text-slate-50" />,
    color: "#e91e63",
  },
  {
    name: "HTML5",
    description: "Structure and content of web pages",
    time: "Frontend Markup",
    icon: <FaHtml5 className="text-slate-50" />,
    color: "#ff5722",
  },
  {
    name: "CSS3",
    description: "Styles and animations for web pages",
    time: "Frontend Styling",
    icon: <IoLogoCss3 className="text-slate-50" />,
    color: "#3f51b5",
  },
  {
    name: "jQuery",
    description: "Simplifies DOM manipulation and events",
    time: "Frontend Library",
    icon: <DiJqueryLogo className="text-slate-50" />,
    color: "#5c6bc0",
  },
  {
    name: "Angular",
    description: "Full-featured client-side web framework",
    time: "Frontend Framework",
    icon: <FaAngular className="text-slate-50" />,
    color: "#d32f2f",
  },
  {
    name: "Bootstrap",
    description: "Responsive design with prebuilt components",
    time: "Frontend Framework",
    icon: <RiBootstrapFill className="text-slate-50" />,
    color: "#673ab7",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for server-side code",
    time: "Backend Runtime",
    icon: <FaNodeJs className="text-slate-50" />,
    color: "#4caf50",
  },
  {
    name: "PHP",
    description: "Server-side scripting language",
    time: "Backend Language",
    icon: <RiPhpFill className="text-slate-50" />,
    color: "#9575cd",
  },
  {
    name: "Java",
    description: "Object-oriented backend application development",
    time: "Backend Language",
    icon: <FaJava className="text-slate-50" />,
    color: "#546e7a",
  },
  {
    name: "MongoDB",
    description: "Document-based database for flexibility",
    time: "NoSQL Database",
    icon: <BiLogoMongodb className="text-slate-50" />,
    color: "#64dd17",
  },
  {
    name: "PostgreSQL",
    description: "Advanced open-source relational database",
    time: "SQL Database",
    icon: <BiLogoPostgresql className="text-slate-50" />,
    color: "#4a148c",
  },
  {
    name: "MySQL",
    description: "Popular open-source relational database",
    time: "SQL Database",
    icon: <DiMysql className="text-slate-50" />,
    color: "#1565c0",
  },
  {
    name: "Oracle",
    description: "Enterprise-grade relational database system",
    time: "SQL Database",
    icon: <GrOracle className="text-slate-50" />,
    color: "#e53935",
  },
  {
    name: "SQL",
    description: "Language for managing relational databases",
    time: "Query Language",
    icon: <TbSql className="text-slate-50" />,
    color: "#0288d1",
  },
  {
    name: "Firebase",
    description: "Real-time database, auth, and hosting",
    time: "BaaS (Backend-as-a-Service)",
    icon: <RiFirebaseLine className="text-slate-50" />,
    color: "#ff5722",
  },
  {
    name: "Google Cloud Platform",
    description: "Scalable cloud infrastructure and services",
    time: "Cloud Services",
    icon: <SiGooglecloud className="text-slate-50" />,
    color: "#3949ab",
  },
  {
    name: "Convex",
    description: "Reactive backend for web apps",
    time: "Backend Service",
    icon: <RiDrizzleFill className="text-slate-50" />,
    color: "#4caf50",
  },
  {
    name: "Stripe",
    description: "Online payments and subscription billing",
    time: "Payment Service",
    icon: <FaStripe className="text-slate-50" />,
    color: "#673ab7",
  },
  {
    name: "NPM",
    description: "Manage JavaScript libraries and tools",
    time: "Package Manager",
    icon: <FaNpm className="text-slate-50" />,
    color: "#e53935",
  },
  {
    name: "Git Control",
    description: "Track and manage code changes",
    time: "Version Control",
    icon: <FaGitAlt className="text-slate-50" />,
    color: "#ff7043",
  },
  {
    name: "Arduino",
    description: "Build and program electronic devices",
    time: "Hardware/Software Platform",
    icon: <SiArduino className="text-slate-50" />,
    color: "#009688",
  },
];

// Duplicate notifications to create a longer list
const extendedNotifications = Array.from(
  { length: 100 },
  () => notifications
).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const AnimatedListDemo = ({ className }) => {
  return (
    <>
      <div
        className={cn(
          "relative flex h-[650px] w-full flex-col overflow-hidden p-2",
          className
        )}
      >
        <AnimatedList>
          {extendedNotifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4"></div>
      </div>
    </>
  );
};
export default AnimatedListDemo;
