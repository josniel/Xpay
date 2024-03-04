"use client"
import Diagram from "@/components/Landing/Sections/Explore/Diagram";
import Image from "next/image";
import cube3 from "/public/static/images/decorators/cube 3.png";
import cube2 from "/public/static/images/decorators/cube2.png";
import decorator1 from "/public/static/images/decorators/decorator1.png";
import fluid3 from "/public/static/images/decorators/fluid3.svg";
import finger from "/public/static/images/decorators/finger.svg";
import React, { useEffect, useState } from 'react';

// Función para saber el tamaño de la pantalla
function useMediaQuery(query:any) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const listener = (e:any) => {
      setMatches(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, [query]);
  
  return matches;
}

const Explore = ({ className = "" }: { className?: string }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // Estado para saber el tamaño de la pantalla
  return (
    <section className={`${className} py-[100px]`}>
      <div className="relative top-0 left-0 right-0 bottom-0 z-[-10] max-lg:hidden">
        <Image
          src={cube3}
          alt="Spring 2"
          className="absolute w-[160px] top-[600px] right-0 z-[-10]"
        />
        <Image
          src={decorator1}
          alt="Spring 2"
          className="absolute w-[680px] top-[490px] left-0 z-[-10]"
        />
        <Image
          src={cube2}
          alt="Spring 2"
          className="absolute w-[480px] top-[590px] left-0 z-[-10]"
        />
      </div>
      {!isDesktop && (
        <div className="relative top-0 left-0 right-0 bottom-0 z-[-10]">
        <Image
          src={fluid3}
          alt="Spring 2"
          className="absolute w-[180px] top-[-240px] left-[-330px] max-sm:left-[-0px] z-[-10]"
        />
      </div>
      )}
      <div className="lg:max-w-[897px] max-sm:max-w-[300px] max-md:max-w-[400px] max-lg:max-w-[600px] mx-auto mb-[61px] md:mb-14">
        <h2 className="text-[20px] md:text-[34px] font-light leading-normal md:leading-[55px] text-center mb-4">
          <span className="font-medium">Explore </span> xPAY
        </h2>
        <p className="text-center text-xs md:text-sm font-normal leading-normal">
          XPAY represents a cutting-edge platform, pioneering in the field of Real-World yield generation. It is designed to revolutionize the on-chain yield environment, granting access to lucrative investment opportunities that were once inaccessible to the average investor.
        </p>
      </div>
      <Diagram/>
      <div className="flex justify-center md:hidden mt-4">
        <Image
          src={finger}
          alt="finger"
          width={40}
        />
      </div>
    </section>
  );
};

export default Explore;
