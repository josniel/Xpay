import { useEffect, useState, useRef } from "react";

import DoubleChevronLeft from "@/components/UI/Icons/DoubleChevronLeft";
import LifeCicle from "./LifeCicle";

import Image from "next/image";
import cube2 from "/public/static/images/decorators/cube2.png";

import WindowSize from "@/hooks/useWindowSize";

const centerDiagram = (scrollRef: any) => {
  if (scrollRef.current) {
    const element = scrollRef.current;
    element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2;
  }
};

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

const Diagram = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // Estado para saber el tamaño de la pantalla
  const { innerWidth } = WindowSize();
  const [showSwipe, setShowSwipe] = useState<boolean>(false);
  const scrollRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setShowSwipe(!!innerWidth && innerWidth < 1340);
  }, [innerWidth]);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseEnd = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.9; //scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    setShowSwipe(!!innerWidth && innerWidth < 1340);

    centerDiagram(scrollRef);
  }, [innerWidth]);

  return (
    <div className="text-bunker-950">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-[-10] overflow-hidden select-none pointer-events-none max-3xl:hidden">
        <Image
          src={cube2}
          alt="Spring 2"
          className="absolute h-[624px] bottom-[20px] left-[-30px] rotate-[0deg]"
        />
      </div> */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseEnd}
        onMouseUp={onMouseEnd}
        onMouseMove={onMouseMove}
        className={`scrollbar-hide mx-auto w-full max-w-[1698px] overflow-x-auto px-5 lg:flex lg:justify-center ${
          showSwipe ? "cursor-grab active:cursor-grabbing" : ""
        }`}
      >
        <LifeCicle className="max-md:h-[496px] max-md:w-[911px] mx-auto" width={isDesktop ? "1617" : "1050"} height={isDesktop ? "714" : "464"} />
      </div>

      {/* {showSwipe && (
        <div className="flex gap-4 items-center justify-center mt-[43px] animate-swipe-slow">
          <span className="text-[18px] leading-normal animate-swipe-slow-icon-diagram-left">
            <DoubleChevronLeft />
          </span>

          <span className="text-[15.661px]">Swipe</span>

          <span className="text-[18px] leading-normal animate-swipe-slow-icon-diagram-right">
            <DoubleChevronLeft />
          </span>
        </div>
      )} */}
    </div>
  );
};

export default Diagram;
