import React from "react";
import { BentoGrid } from "@/components/magicui/bento-grid";
import { BentoGridItem } from "@/components/magicui/bento-grid";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaRegFileCode } from "react-icons/fa6";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem] md:p-0 p-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.1] bg-black dark:bg-black"></div>
);
const items = [
  {
    title: "Tech Stack",
    description:
      "React • Next.js • Node.js • TypeScript • Firebase • Tailwind CSS • AI APIs",
    header: (
      <img
        src="/img1.jpg"
        alt="img1"
        className="w-full h-full min-h-[6rem] object-cover rounded-xl border-1 border-neutral-600"
      />
    ),
    className: "md:col-span-2",
    icon: <FaRegFileCode className="h-4 w-4 text-neutral-200" />,
  },
  {
    title: "Latest Project",
    description: "AutoCompose — AI Powered Email Template Builder",
    header: (
      <img
        src="/img2.jpg"
        alt="img2"
        className="w-full h-full min-h-[6rem] object-cover rounded-xl border-1 border-neutral-600"
      />
    ),
    className: "md:col-span-1",
    icon: <HiMiniSquare3Stack3D className="h-4 w-4 text-neutral-200" />,
  },
  {
    title: "What I Do",
    description:
      "Building scalable full stack apps, integrating AI, and delivering exceptional UI/UX.",
    header: (
      <img
        src="/img4.jpg"
        alt="img4"
        className="w-full h-full min-h-[6rem] object-cover rounded-xl border-1 border-neutral-600"
      />
    ),
    className: "md:col-span-1",
    icon: <RiDashboardHorizontalFill className="h-4 w-4 text-neutral-200" />,
  },
  {
    title: "Currently Exploring",
    description:
      "Cloud computing, AI-driven solutions, and cutting-edge frontend architectures.",
    header: (
      <img
        src="/img3.jpg"
        alt="img3"
        className="w-full h-full min-h-[6rem] object-cover rounded-xl border-1 border-neutral-600"
      />
    ),
    className: "md:col-span-2",
    icon: <VscVscode className="h-4 w-4 text-neutral-200" />,
  },
];
