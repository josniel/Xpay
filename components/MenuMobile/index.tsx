import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MenuMobileLink from "@/components/MenuMobile/MenuMobileLink";
import Xpay from "@/components/UI/Icons/Xpay";
import MenuLine from "@/components/UI/Icons/MenuLine";
import CircleClose from "@/components/UI/Icons/CircleClose";
import GoTo from "@/components/UI/Icons/GoTo";
import Close from "@/components/UI/Icons/Close";
import ChevronUpRight from "@/components/UI/Icons/ChevronUpRight";

import SelectorAccoundHandler from "@/components/SelectorAccoundHandler";
import SelectorAccoundHandlerSmall from "@/components/SelectorAccoundHandlerSmall";

import { ComponentVisible } from "@/hooks/useVisible";

import {
  discordLink,
  twitterLink,
  telegramLink,
  mediumLink,
  gitBookLink,
} from "@/data/social";
import { menuLinksLanding, menuLinksApp } from "@/data/menuLinks";

export const MenuMobileLanding = () => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);
  const links = useMemo(
    () => menuLinksLanding.filter((link) => link.subLinks),
    []
  );
  const socialLinks = useMemo(
    () => [discordLink, twitterLink, telegramLink, mediumLink, gitBookLink],
    []
  );

  return (
    <div className="md:hidden flex gap-2.5" ref={ref}>
      <a
        href={"#"}
        className="btn bg-navy-blue-900 w-[82px] h-[34px] hover:bg-navy-gray-600 text-xs text-white gap-[5px] font-medium !rounded-[100px]"
      >
        <span className="text-base leading-normal">
          <GoTo />
        </span>
        Trade
      </a>

      <button
        type="button"
        aria-label={isVisible ? "Close menu" : "Open menu"}
        className={`btn w-[35px] h-[34px] text-[19px] text-white !rounded-[100px] ${
          isVisible ? "bg-navy-gray-600" : "bg-navy-blue-900"
        }`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <MenuLine />
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-[22px] px-1.5 rounded-l-20 border-[2px] border-white bg-white bg-opacity-75 backdrop-blur-[10.10px] absolute top-[calc(100%+15px)] right-0 w-[216px] flex flex-col gap-4 z-50"
          >
            <div className="flex items-center justify-between px-4">
              <Xpay width={80} height={21} />
              <button
                className="btn !p-0 text-lg"
                aria-label="Close menu"
                title="Close menu"
                onClick={() => setIsVisible(false)}
              >
                <CircleClose />
              </button>
            </div>
            <div className="text-[13px] text-navy-blue-900 text-opacity-50 leading-[17px] px-4">
              Main Menu
            </div>

            {links.map((link, i) => (
              <MenuMobileLink key={i} link={link} />
            ))}

            <a
              href={"#"}
              className="btn bg-navy-blue-900 w-full h-[34px] hover:bg-navy-gray-600 text-xs text-white gap-[5px] font-medium !rounded-[100px]"
            >
              Trade
            </a>

            <div className="flex gap-4 mx-auto mt-2">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="hover:text-navy-gray-500 transition-colors text-[20px]"
                  rel="nofollow"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MenuMobileApp = () => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  return (
    <div className="lg:hidden flex gap-2.5" ref={ref}>
      <SelectorAccoundHandlerSmall />

      <button
        type="button"
        aria-label={isVisible ? "Close menu" : "Open menu"}
        className={`btn w-[35px] h-[34px] text-[19px] !rounded-[100px] bg-navy-blue-900 ${
          isVisible ? "bg-opacity-100 text-white" : "bg-opacity-0"
        }`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <MenuLine />
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.5, ease: [0.21, 1.25, 0.64, 1] }}
            initial={{ right: -328 }}
            animate={{ right: 0 }}
            exit={{ right: -328 }}
            className="absolute top-0 w-[330px] h-screen bg-white bg-opacity-5 backdrop-blur-[20px] py-20 px-5 z-50"
          >
            <button
              type="button"
              aria-label="Close menu"
              title="Close menu"
              className="flex items-center right-5 absolute gap-[5px]"
              onClick={() => setIsVisible(false)}
            >
              <span className="text-xs leading-normal">Close</span>
              <span className="text-[20px] leading-normal">
                <Close />
              </span>
            </button>

            <div className="pt-10">
              <SelectorAccoundHandler className="mb-2" />

              <a
                href="#"
                className="btn h-[38px] bg-navy-blue-900 hover:bg-oxford-blue-800 !rounded-10 mb-5 text-white gap-[5px]"
              >
                <span className="text-xs leading-normal">Account manager</span>
                <span className="text-sm">
                  <ChevronUpRight />
                </span>
              </a>

              <div>
                {menuLinksApp.map((link, i) => (
                  <a
                    href={link.href}
                    key={i}
                    className="text-sm leading-[14px] flex gap-[5px] px-5 py-3 mb-2 last:mb-0 hover:bg-shark-950 hover:text-white rounded-[100px] hover:shadow-[0px_10px_15px_0px_rgba(71,_103,_135,_0.20)] !transition-[background,color,box-shadow]"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
