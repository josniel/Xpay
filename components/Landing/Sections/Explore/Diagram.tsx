import { useEffect, useState, useRef } from "react";

import DoubleChevronLeft from "@/components/UI/Icons/DoubleChevronLeft";
import XpayDiagram from "./XpayDiagram";

import Image from "next/image";
import cube2 from "/public/static/images/decorators/cube2.png";

import WindowSize from "@/hooks/useWindowSize";

const centerDiagram = (scrollRef: any) => {
  if (scrollRef.current) {
    const element = scrollRef.current;
    element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2;
  }
};

const Diagram = () => {
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
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseEnd}
        onMouseUp={onMouseEnd}
        onMouseMove={onMouseMove}
        className={`scrollbar-hide mx-auto w-full max-w-[1698px] overflow-x-auto px-5 lg:flex lg:justify-center${
          showSwipe ? "cursor-grab active:cursor-grabbing" : ""
        }`}
      >
        <XpayDiagram className="max-md:h-[496px] max-md:w-[911px]" />
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
