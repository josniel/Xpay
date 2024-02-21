"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Docs from "@/components/UI/Icons/Docs";
import ChevronDown from "@/components/UI/Icons/ChevronDown";

import { disclaimer } from "@/data/disclaimer";

const Disclaimer = ({ className = "" }: { className?: string }) => {
  const [viewMoreIsActive, setViewMoreIsActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (viewMoreIsActive) {
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 300);
      }
    }
  }, [viewMoreIsActive]);

  return (
    <div
      className={`border-t border-link-water-200 py-4 pb-[21px] md:py-6 ${className}`}
    >
      <div className="flex gap-[5px] text-[13px] md:text-sm leading-normal items-center mb-4 md:mb-6 max-md:justify-center">
        <span className="text-[20px] md:text-[24px]">
          <Docs />
        </span>
        <span>Disclaimer</span>
      </div>

      <div className="text-xs text-navy-gray-500 leading-normal text-justify">
        <p className="max-md:hidden min-h-[97px]">{disclaimer}</p>

        <div className="relative md:hidden">
          <AnimatePresence>
            <motion.div
              className={`relative overflow-hidden`}
              initial={{ height: 75 }}
              animate={{ height: viewMoreIsActive ? "100%" : 75 }}
              transition={{ duration: 0.3 }}
            >
              <p>{disclaimer}</p>
              <div
                className={`absolute left-0 right-0 bottom-0 h-[75px] bg-disclaimer-decorator-mobile transition-opacity ${
                  viewMoreIsActive ? "opacity-0" : "opacity-100"
                }`}
              ></div>
            </motion.div>
          </AnimatePresence>
          <button
            type="button"
            className={`btn flex-col gap-1.5 text-navy-blue-900 font-medium leading-normal mx-auto mt-[27px] !transition-opacity ${
              viewMoreIsActive ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => setViewMoreIsActive(!viewMoreIsActive)}
          >
            <span>View {viewMoreIsActive ? "Less" : "More"}</span>
            <span
              className={`text-sm ${viewMoreIsActive ? "-scale-y-100" : ""}`}
            >
              <ChevronDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
