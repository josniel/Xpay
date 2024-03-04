import Image from "next/image"

import Play from "@/components/UI/Icons/Play"
import Button from "@/components/UI/Button"

import Background from "/public/static/images/main-section/backgroundDecorator.png"
import fluid1 from "/public/static/images/decorators/fluid1.png"
import fluid2 from "/public/static/images/decorators/fluid2.png"
import decorator8 from "/public/static/images/decorators/decorator8.svg"
// import City from "/public/images/main-section/city.png";
import ChevronSwiper from "@/components/UI/Icons/ChevronSwiper"
import Globe from '@/components/Globe'

const MainSection = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`relative pt-[380px] lg:pb-[220px] max-lg:px-[54px] lg:px-[94px] max-md:flex max-md:flex-col ${className}`}
    >
      {<div className="absolute top-0 left-0 right-0 bottom-0 z-[-9] select-none pointer-events-none max-3xl:hidden">
        <Image
          src={fluid2}
          alt="fluid2"
          className="absolute w-[424px] h-[824px] max-lg:h-[724px] top-[-120px] max-lg:top-[-180px] left-[-20px] z-[-40] rotate-[0deg] max-lg:hidden"
        />
        <div style={{
          width: "194.014px",
          height: "669.417px",
          transform: "rotate(79.615deg)",
          flexShrink: "0",
          borderRadius: "669.417px",
          background: "radial-gradient(50% 50% at 50% 50%, #8795A4 0%, rgba(222, 230, 238, 0.00) 100%)",
          filter: "blur(54.400001525878906px)"
        }} className="absolute top-[-220px] left-[500px] z-[-40] max-lg:hidden"></div>
        <Image
          src={decorator8}
          alt="decorator8"
          className="absolute max-lg:top-[-60px] w-[140px] left-0 z-[-40] lg:hidden"
        />
      </div>}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-10] overflow-hidden select-none pointer-events-none max-3xl:hidden max-lg:hidden flex-sh">
        <Image
          src={Background}
          alt="Spring 1"
          className="absolute opacity-40"
          style={{
            width: '100vw',
            backgroundSize: "cover",
            backgroundPosition: "center",
            background: "url(<path-to-image>), lightgray -1114.571px 0px / 158.081% 228.268% no-repeat",
            mixBlendMode: "color-burn",
            filter: "blur(4.690481662750244px)",
            flexShrink: "0"
          }}
        />
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 overflow-hidden mix-blend-darken'>
        <Globe classname="absolute max-lg:w-[450px] max-lg:h-[450px] max-sm:w-[400px] max-sm:h-[400px] max-lg:top-[-100px] max-lg:right-[-100px] xl1:w-[900px] xl1:h-[900px] xl:w-[700px] xl:h-[700px] lg:w-[600px] lg:h-[600px] lg:top-[-180px] xl1:right-[-150px] lg:right-[-100px]"/>
      </div>
      <div className="absolute top-[-113px] left-0 right-0 bottom-[-500px] z-10 overflow-hidden pointer-events-none">
        <div className="container absolute top-[119px] left-0 right-0 bottom-0 z-10">
          <div className="absolute w-[163px] h-[663px] rotate-[77.809deg] rounded-[663px] bg-main-header-decorator-1 blur-[54.4px] left-[582px] top-[-296px]"></div>
          <div className="absolute w-[163px] h-[663px] rotate-[6.446deg] rounded-[663px] bg-main-header-decorator-1 blur-[54.4px] left-[-145px] top-[118px]"></div>
        </div>
      </div>

      <div className="container relative z-9 lg:!max-w-[700px] lg:!ml-0">
        <div className="flex max-lg:flex-col-reverse justify-between items-center">
          <div className="w-full max-w-[700px]">
            <h1 className="max-md:text-lg md:text-2xl leading-normal mb-3 max-md:mt-[-30px] lg:mt-[-30px] [text-wrap:balance]">
              <span className="font-medium">Where Cross-Border Payments </span>
              <span className="font-light">Meet With Blockchain</span>
            </h1>

            <p className="max-w-[623px] text-xs md:text-sm leading-normal max-sm:max-w-[280px] max-sm:text-justify">
              Put your capital to work provinding Liquidity-as-a-Service to cover Cross-Border Payments Market elastic demand
            </p>

            <div className="flex gap-4 items-start mt-4 md:mt-[25px] flex-wrap">
              {/* <a
                href={"#"}
                className="btn bg-navy-blue-900 w-[120px] md:w-[138px] h-11 hover:bg-navy-gray-600 text-xs md:text-sm text-white gap-[5px] font-medium !rounded-[100px]"
              >
                Launch App
              </a> */}
              <Button>
                Launch App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
