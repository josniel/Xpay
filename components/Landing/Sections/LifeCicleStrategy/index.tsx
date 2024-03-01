"use client"
import Diagram from "./Diagram"
import Image from "next/image";
import decorator2 from "/public/static/images/decorators/decorator2.png";
import decorator3 from "/public/static/images/decorators/decorator3.png";
import decorator6 from "/public/static/images/decorators/decorator6.png";
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

const LifeCicleStrategy = ({ className = "" }: { className?: string }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // Estado para saber el tamaño de la pantalla
  return (
    <section className={`${className}`}>
      <div className="relative top-0 left-0 right-0 bottom-0 z-[-10] max-lg:hidden">
        <Image
          src={decorator2}
          alt="Spring 2"
          className="absolute w-[524px] top-[-90px] right-0 z-[-40]"
        />
        <Image
          src={decorator3}
          alt="Spring 2"
          className="absolute w-[154px] top-[370px] left-0 z-[-40]"
        />
      </div>
      {!isDesktop && (
        <div className="relative top-0 left-0 right-0 bottom-0 z-[-10]">
        <Image
          src={decorator6}
          alt="Spring 2"
          className="absolute w-[830px] bottom-[-1000px] left-[-630px] z-[-10]"
        />
      </div>
      )}
      <div className="lg:max-w-[897px] max-sm:max-w-[300px] max-md:max-w-[400px] max-lg:max-w-[600px] mx-auto mb-[61px] md:mb-14">
        <h4 className="text-[16px] md:text-[16px] font-normal leading-normal md:leading-[55px] text-center mb-4">
          DISCOVER OUR STRATEGIES
        </h4>
        <h2 className="text-[20px] md:text-[34px] font-light leading-normal md:leading-[55px] text-center mb-4">
          Cross-Border <span className="font-medium"> Payments Pre-Funding</span>
        </h2>
        <p className="text-center text-xs md:text-sm font-normal leading-normal">
          The current pre-funding model used in SWIFT cross-border payments results in delays, increased expenses, and exposes Money Services Businesses to FX risks. XPAY offers Liquidity as a Service and Just-In-Time liquidity, enabling MSBs to adapt swiftly to market demands without pre-funding reliance.
        </p>
        <h2 className="text-[20px] md:text-[34px] font-light leading-normal md:leading-[55px] text-center mb-4 mt-[60px]">
          <span className="font-medium">HOW XPAY POWERS CROSS BORDER PAYMENTS</span>
        </h2>
      </div>
      <Diagram />
      <div className="flex justify-center sm:hidden mt-4">
        <Image
          src={finger}
          alt="finger"
          width={40}
        />
      </div>
    </section>
  );
};

export default LifeCicleStrategy;
