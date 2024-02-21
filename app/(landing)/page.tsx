import MainSection from "@/components/Landing/Sections/MainSection";
import Brands from "@/components/Landing/Sections/Brands";
// import Brands from "@/components/sections/Brands";
// import Products from "@/components/sections/Products";
// import Explore from "@/components/sections/Explore";
// import PlatformDifference from "@/components/sections/PlatformDifference";
// import AssetBlockchainIntersection from "@/components/sections/AssetBlockchainIntersection";
export default function HomePage() {
  return (
    <main>
      <MainSection className="mb-[15px]" />
      <Brands className="mb-[80px] md:mb-[100px]" />
      {/* <Products className="mb-[80px] md:mb-[100px]" /> */}
      {/* <Explore className="mb-[79px] md:mb-[84px]" /> */}
      {/* <PlatformDifference className="mb-[100px] md:mb-[56px]" /> */}
      {/* <AssetBlockchainIntersection /> */}

      {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-10 overflow-hidden select-none pointer-events-none">
                <div className="absolute w-[384.524px] h-[384.524px] top-[570px] left-[-290px] rotate-[33.256deg] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div>
                <div className="absolute w-[452px] h-[452px] top-[850px] right-[-229.36px] rotate-[-160.205deg] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div>
                <div className="absolute w-[384.524px] h-[384.524px] top-[1779px] right-[-255.07px] rotate-[-42.023deg] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div>
                <div className="absolute w-[393.441px] h-[393.441px] top-[2301px] left-[-254px] rotate-[169.507deg] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div>
                <div className="absolute w-[762.239px] h-[763px] top-[2541px] right-[-459.24px] border border-purple-500 bg-purple-500 bg-opacity-10 animate-pulse"></div>
            </div> */}
    </main>
  );
}
