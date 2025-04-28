import { BentoGridSecondDemo } from "./components/BentoGridDemo";
import HeroSection from "./components/HeroSection";
import AnimatedListDemo from "./components/TechStack";

export default function Home() {
  return (
   <> 
   <HeroSection/>
   <div className="bg-slate-950 p-15 flex gap-5">
   <BentoGridSecondDemo/>
   <AnimatedListDemo/>
   </div>
   </>
  );
}
