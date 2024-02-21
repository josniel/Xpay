import Image from "next/image";

import Play from "@/components/UI/Icons/Play";
import Button from "@/components/UI/Button";

import Background from "/public/static/images/main-section/backgroundDecorator.png";
import fluid1 from "/public/static/images/decorators/fluid1.png";
import fluid2 from "/public/static/images/decorators/fluid2.png";
// import City from "/public/images/main-section/city.png";
import ChevronSwiper from "@/components/UI/Icons/ChevronSwiper";

const MainSection = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`relative pt-[120px] px-[94px] max-md:h-[calc(100vh-112px)] max-md:flex max-md:flex-col ${className}`}
    >
      {<div className="absolute top-0 left-0 right-0 bottom-0 z-[-9] select-none pointer-events-none max-3xl:hidden max-lg:hidden">
        <Image
          src={fluid1}
          alt="Spring 1"
          className="absolute w-[1000px] top-[-120px] left-[40px] rotate-[-0deg]"
        />
        <Image
          src={fluid2}
          alt="Spring 2"
          className="absolute w-[424px] h-[824px] top-[-120px] left-[-20px] z-[-40] rotate-[0deg]"
        />
      </div>}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-10] overflow-hidden select-none pointer-events-none max-3xl:hidden max-lg:hidden">
        <Image
          src={Background}
          alt="Spring 1"
          className="absolute"
          style={{
            width: '100vw',
            backgroundSize: "cover",
            backgroundPosition: "center",
            background: "url(<path-to-image>), lightgray -1114.571px 0px / 158.081% 228.268% no-repeat",
            mixBlendMode: "color-burn",
            filter: "blur(4.690481662750244px)",
          }}
        />
      </div>
      <div className="absolute top-[-119px] left-0 right-0 bottom-[-500px] z-10 overflow-hidden pointer-events-none">
        <div className="container absolute top-[119px] left-0 right-0 bottom-0 z-10">
          <div className="absolute w-[163px] h-[663px] rotate-[77.809deg] rounded-[663px] bg-main-header-decorator-1 blur-[54.4px] left-[582px] top-[-296px]"></div>
          <div className="absolute w-[163px] h-[663px] rotate-[6.446deg] rounded-[663px] bg-main-header-decorator-1 blur-[54.4px] left-[-145px] top-[118px]"></div>
        </div>
      </div>

      <div className="container reslative z-s20">
        <div className="flex max-lg:flex-col-reverse justify-between items-center">
          <div className="w-full max-w-[700px] max-lg:text-center">
            <h1 className="text-2xl md:text-[40px] leading-normal mb-4 max-md:mt-8 [text-wrap:balance]">
              <span className="font-medium">Where Cross-Border Payments </span>
              <span className="font-light">Meet With Blockchain</span>
            </h1>

            <p className="max-w-[623px] text-xs md:text-sm leading-normal max-lg:mx-auto max-sm:max-w-[280px] max-sm:text-justify">
              Put your capital to work provinding Liquidity-as-a-Service to cover Cross-Border Payments Market elastic demand
            </p>

            <div className="flex gap-4 items-start mt-4 md:mt-[25px] max-lg:justify-center flex-wrap">
              {/* <a
                href={"#"}
                className="btn bg-navy-blue-900 w-[120px] md:w-[138px] h-11 hover:bg-navy-gray-600 text-xs md:text-sm text-white gap-[5px] font-medium !rounded-[100px]"
              >
                Launch App
              </a> */}
              <Button children="Launch App"/>
            </div>
          </div>

          {/* <video
            width={1002}
            height={671}
            loop
            playsInline
            autoPlay
            muted
            className="w-[calc(100vw-10px)] max-w-[700px] max-lg:-translate-x-[5px] lg:max-w-[500px] xl:max-w-[700px] 2xl:max-w-[1002px] flex-shrink"
            style={{ mixBlendMode: "multiply", zIndex: 10 }}
          >
            <source
              src="videos/main-section/city2.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>

      {/* <div className="h-[79px] mt-auto pt-2.5 flex-shrink-0">
        <div className="btn flex-col text-sm leading-normal font-medium md:hidden !p-0 animate-swipe-slow pointer-events-none">
          <span>Swipe</span>
          <div className="text-[30px] animate-swipe-slow-icon">
            <ChevronSwiper />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MainSection;
