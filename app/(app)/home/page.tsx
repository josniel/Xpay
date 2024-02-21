"use client"
import MainSection from "@/components/Landing/Sections/MainSection";
import Brands from "@/components/Landing/Sections/Brands";
import RoadMap from "@/components/Landing/Sections/RoadMap";
import Explore from "@/components/Landing/Sections/Explore";
import LifeCicleStrategy from "@/components/Landing/Sections/LifeCicleStrategy";
import TakeAction from "@/components/Landing/Sections/TakeAction";
export default function HomePage() {
  return (
    <main>
      <MainSection className="mb-[0px]" />
      <Brands className="mb-[0px] md:mb-[0px]" />
      <Explore className="mb-[0px] md:mb-[0px]" />
      <LifeCicleStrategy className="mb-[0px] md:mb-[0px]" />
      <RoadMap className="mb-[0px] md:mb-[0px]" />
      <TakeAction/>
    </main>
  );
}
