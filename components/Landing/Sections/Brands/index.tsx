import Image from "next/image";
import { brands } from "@/data/brands";
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

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

const Brands = ({ className = "" }: { className?: string }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // Estado para saber el tamaño de la pantalla
  const sliderBrands = [...brands, ...brands]

  return (
    <div className={`border-b-4 border-mystic-100 pb-9 md:pb-[60px] ${className}`}>
      {
        isDesktop ? (<Swiper
          className="max-lg:hidden max-w-[1589px] px-5 mx-auto mt-[71px] py-auto flex gap-[600px] justify-center items-center"
          slidesPerView={6}
          direction="horizontal"
          loop={true}
          speed={3000}
          effect="slide"
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1025: {
              slidesPerView: 5,
            },
            1489: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
        >
          {sliderBrands.map((brand, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center my-auto gap-[60px]">
              <Image className='mx-auto' src={brand.image} alt={brand.name} title={brand.name} />
            </SwiperSlide>
          ))}
        </Swiper>) :
        (<div
          className="max-w-[1489px] px-5 mx-auto pt-[71px] flex gap-[70px] justify-center items-center max-2xl:flex-wrap max-md:gap-[38px] max-sm:flex-col"
          style={{ transition: 'transform 0.5s ease-in-out' }}
          >
          {brands.map((brand, i) => (
            <div key={i} className="max-sm:max-h-[50px] max-sm:object-contain">
              <Image src={brand.image} alt={brand.name} title={brand.name} />
            </div>
          ))}
        </div>)
      }
    </div>
  );
};
// ref={sliderRef}
/* breakpoints={{
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
}} */

export default Brands;
