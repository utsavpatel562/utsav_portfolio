import { BentoGridSecondDemo } from "./components/BentoGridDemo";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
   <> 
   <HeroSection/>
   <div className="bg-slate-950 pt-15 pb-15">
   <BentoGridSecondDemo/>
   </div>
   </>
  );
}
