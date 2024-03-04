"use client"
// import RoadMapLine from "@/components/Landing/Sections/RoadMap/RoadMapLine";
import Image from "next/image";
import decorator2 from "/public/static/images/decorators/decorator2.png";
import decorator7 from "/public/static/images/decorators/decorator7.png";
import RoadMapLine from "./RoadMapLine";

const RoadMap = ({ className = "" }: { className?: string }) => {
  return (
    <section className={`${className} pt-[100px] max-md:bg-[#DBE2E9] max-md:my-[30px]`}>
      <div className="relative top-0 left-0 right-0 bottom-0 z-[-10] max-lg:hidden">
        <Image
          src={decorator2}
          alt="Spring 2"
          className="absolute w-[524px] top-[-330px] right-0"
        />
        <Image
          src={decorator7}
          alt="Spring 2"
          className="absolute w-[624px] top-[-430px] left-0"
        />
      </div>
      <div className="lg:max-w-[897px] max-sm:max-w-[300px] max-md:max-w-[400px] max-lg:max-w-[600px] mx-auto mb-[61px] md:mb-14">
        <h2 className="text-[20px] md:text-[34px] font-light leading-normal md:leading-[55px] text-center mb-4">
          <span className="font-medium">Roadmap </span>
        </h2>
        {/* <p className="text-center text-xs md:text-sm font-normal leading-normal">
          Lorem ipsum dolor sit amet consectetur. Cursus est diam vestibulum sagittis tortor egestas pellentesque volutpat. Ac turpis fermentum id eget. Maecenas velit eu integer molestie id id eu vitae nunc. Metus morbi tortor libero accumsan nibh.
        </p> */}
      </div>
      <RoadMapLine />
    </section>
  );
};

export default RoadMap;
