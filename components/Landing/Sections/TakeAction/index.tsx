import Image from "next/image";

import Decorator2 from "/public/static/images/asset-blockchain-intersection/decorator2.png";
import fluid3 from "/public/static/images/decorators/fluid3.png";
import decorator6 from "/public/static/images/decorators/decorator6.png";
import cube4 from "/public/static/images/decorators/cube4.png";
import takeactionmobile from "/public/static/images/decorators/takeactionmobile.svg";
import takeaction from "/public/static/images/decorators/takeaction2.png";
import Macbook from "/public/static/images/decorators/MacBook.png";
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

const TakeAction = ({ className = "" }: { className?: string }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // Estado para saber el tamaño de la pantalla
  return (
    <section className="relative lg:pt-[100px] px-[80px] max-w-[1920px] mx-auto">
      {<div className="relative top-0 left-0 right-0 bottom-0 z-[-9] select-none pointer-events-none max-3xl:hidden max-lg:hidden">
          <Image
            src={cube4}
            width={600}
            alt="icon"
            className="absolute 2xl:left-[50px] bottom-[-200px]"
          />
      </div>}
      <div className="flex max-lg:flex-col-reverse lg:flex-row lg:items-center lg:h-[635px] w-full">
        <div className="grow max-lg:overflow-hidden max-lg:mb-[100px] max-lg:mt-[70px]">
          <div className="h-full w-full lg:max-w-[666px] flex justify-start lg:justify-center flex-col max-lg:pt-15 max-lg:items-center">
            <div>
              <div className="text-[20px] lg:text-[34px] font-light leading-normal lg:leading-[55px] mb-[23px] max-lg:text-center">
                <div>Elevate on chain yields</div>
                <div className="font-medium">with XPAY</div>
              </div>
            </div>

            <a
              href={"#"}
              className="btn bg-navy-blue-900 w-[150px] lg:w-[166px] h-11 hover:bg-navy-gray-600 text-xs md:text-sm text-white font-medium !rounded-[100px]"
            >
              Launch App
            </a>
          </div>
        </div>
        {isDesktop? 
          (<div className="w-[800px] min-w-[500px]">
            <Image
              src={takeaction}
              alt="icon"
              className="w-full"
            />
          </div>) : 
          (<div className="flex justify-center items-center w-[75%] mx-auto">
            <Image
              src={takeaction}
              alt="icon"
              className="w-full"
            />
          </div>)
        }
      </div>
    </section>
  );
};

export default TakeAction;
