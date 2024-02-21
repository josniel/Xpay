import Image from "next/image";

import MainSection from "@/components/sections/MainSection";
import Brands from "@/components/sections/Brands";
import Products from "@/components/sections/Products";
import Explore from "@/components/sections/Explore";
import PlatformDifference from "@/components/sections/PlatformDifference";
import AssetBlockchainIntersection from "@/components/sections/AssetBlockchainIntersection";

import cube1 from "/public/static/images/decorators/cube1.png";
import spring1 from "/public/static/images/decorators/spring1.png";
import circle1 from "/public/static/images/decorators/circle1.png";
import spring2 from "/public/static/images/decorators/spring2.png";

import mobileDecorator1 from "/public/static/images/decorators/mobile-decorator-1.png";
import mobileDecorator1_1 from "/public/static/images/decorators/mobile-decorator-1.1.png";
import mobileDecorator2 from "/public/static/images/decorators/mobile-decorator-2.png";
import mobileDecorator2_2 from "/public/static/images/decorators/mobile-decorator-2.1.png";

const Main = () => {
  return (
    <main className="pt-[88px] md:pt-[119px] relative">
      <MainSection className="mb-[15px]" />
      <Brands className="mb-[80px] md:mb-[100px]" />
      <Products className="mb-[80px] md:mb-[100px]" />
      <Explore className="mb-[79px] md:mb-[84px]" />
      <PlatformDifference className="mb-[100px] md:mb-[56px]" />
      <AssetBlockchainIntersection />

      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden select-none pointer-events-none -z-10 max-md:hidden">
        {/* <div className="absolute w-[384.524px] h-[384.524px] top-[570px] left-[-290px] rotate-[33.256deg] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div> */}
        <Image
          src={cube1}
          width={384.524}
          height={384.524}
          alt="Cube 1"
          className="absolute w-[384.524px] h-[384.524px] top-[570px] left-[-290px] rotate-[33.256deg] max-xl:hidden"
        />
        {/* <div className="absolute w-[452px] h-[452px] top-[850px] right-[-229.36px] rotate-[-160.205deg] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div> */}
        <Image
          src={spring1}
          width={452}
          height={452}
          alt="Spring 1"
          className="absolute w-[452px] h-[452px] top-[850px] right-[-229.36px] rotate-[-160.205deg] max-xl:hidden"
        />
        {/* <div className="absolute w-[384.524px] h-[384.524px] top-[1779px] right-[-255.07px] rotate-[-42.023deg] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div> */}
        <Image
          src={cube1}
          width={384.524}
          height={384.524}
          alt="Cube 2"
          className="absolute w-[384.524px] h-[384.524px] top-[1779px] right-[-255.07px] rotate-[-42.023deg]"
        />
        {/* <div className="absolute w-[393.441px] h-[393.441px] top-[2301px] left-[-254px] rotate-[169.507deg] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div> */}
        <Image
          src={circle1}
          width={393.441}
          height={393.441}
          alt="Circle 1"
          className="absolute w-[393.441px] h-[393.441px] top-[2301px] left-[-254px] rotate-[169.507deg] max-2xl:hidden"
        />
        {/* <div className="absolute w-[762.239px] h-[763px] top-[2541px] right-[-459.24px] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div> */}
        <Image
          src={spring2}
          width={763}
          height={763}
          alt="Spring 3"
          className="absolute w-[762.239px] h-[763px] top-[2541px] right-[-459.24px] max-3xl:hidden"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden select-none pointer-events-none -z-10 sm:hidden">
        <Image
          src={mobileDecorator1}
          width={195}
          height={299}
          alt="Decorator 1"
          className="absolute left-0 top-[800px]"
        />
        <Image
          src={mobileDecorator1_1}
          width={70}
          height={120}
          alt="Decorator 2"
          className="absolute left-0 top-[950px]"
        />
        <Image
          src={mobileDecorator2}
          width={247}
          height={486}
          alt="Decorator 3"
          className="absolute right-0 top-[1050px]"
        />
        <Image
          src={mobileDecorator2_2}
          width={83}
          height={138}
          alt="Decorator 4"
          className="absolute right-0 top-[1250px]"
        />
      </div>
    </main>
  );
};

export default Main;
