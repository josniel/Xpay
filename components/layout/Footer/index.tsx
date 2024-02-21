"use client";

import Image from "next/image";

import { LogoFooter } from "@/components/Logo";
import Disclaimer from "@/components/Disclaimer";

import { footerLinks } from "@/data/footerLinks";

import spring1 from "/public/static/images/decorators/spring1.png";
import spring2 from "/public/static/images/decorators/spring2.png";
import { useIsMobile } from "@/hooks/useIsMobile";

import NavigationMobile from "./NavigationMobile";
import Xpay from "@/components/UI/Icons/Xpay";

export const FooterLanding = () => {
  return (
    <footer className="pt-[21px] md:pt-[57px] md:pb-[44px] bg-white bg-opacity-70 relative border-[3px] border-white lg:px-[80px] max-lg:px-[30px]">
      <div className="max-lg:hidden absolute top-0 left-0 right-0 bottom-0 z-10 overflow-hidden select-none pointer-events-none max-3xl:hidden">
        <Image
          src={spring1}
          width={329.572}
          height={329.572}
          alt="Spring 1"
          className="absolute w-[329.572px] h-[329.572px] bottom-[221.43px] left-[-229px] -rotate-90"
        />
        <Image
          src={spring2}
          width={424}
          height={424}
          alt="Spring 2"
          className="absolute w-[424px] h-[424px] bottom-[10px] right-[-259px]"
        />
      </div>

      <div className="container relative z-10">
        <div className="flex max-md:flex-col max-md:items-center md:justify-between mb-[26px] md:mb-[70px] max-xxs:w-auto max-sm:w-[305px] max-sm:mx-auto">
          <div className="md:max-w-[250px] flex flex-col max-md:items-center max-md:text-center gap-2 md:gap-4 max-md:mb-8">
            <LogoFooter />

            <p className="text-sm leading-normal text-navy-gray-500 max-md:pt-2">
              Where Cross-Border Payments meet with Blockchain
            </p>

            <p className="text-xs font-medium leading-normal">
              All rights reserved &copy; xPAY
            </p>

            <div className="flex gap-[15px] text-2xl items-center max-md:pt-2">
              {footerLinks.social.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="hover:text-navy-gray-500 transition-colors"
                  rel="nofollow"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-end max-xxs:text-center max-xxs:flex-col max-md:justify-between gap-4 md:gap-[50px] md:text-right md:pt-[5px]">
            {footerLinks.navigations.map((navigation, i) => (
              <div key={i}>
                <p className="text-sm font-medium leading-normal mb-4 md:mb-3.5">
                  {navigation.name}
                </p>
                <ul>
                  {navigation.subLinks.map((link, i) => (
                    <li className="leading-[0] mb-2.5 last:mb-0" key={i}>
                      <a
                        href={link.href}
                        className="mb-2.5 text-navy-gray-500 text-xs leading-normal transition-colors hover:text-nevada-500"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Disclaimer />
      </div>
    </footer>
  );
};

export const FooterApp = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="pt-[52px] pb-[32px] md:pt-[57px] md:pb-[23px] bg-white bg-opacity-70 relative border-[3px] border-white">
      <div className="container relative z-10">
        <div className="max-md:max-w-[280px] max-md:mx-auto flex max-md:flex-col max-md:items-center md:justify-between mb-[26px] md:mb-[57px] max-xxs:w-auto max-sm:w-[305px] max-sm:mx-auto">
          <div className="md:max-w-[250px] w-full flex flex-col max-md:items-center max-md:text-center gap-2 md:gap-4 max-md:mb-5 max-md:border-b max-md:border-light-grey-200 max-md:pb-[19px]">
            <div>
              <Xpay width={180} height={46} />
            </div>

            <p className="text-sm leading-[14px] text-navy-gray-500 max-md:pt-[5px]">
              Cutting-Edge On-Chain Institutional RWA Protocol
            </p>

            <p className="text-xs font-medium leading-[14px]">
              All rights reserved &copy; xPAY
            </p>

            <div className="flex max-md:justify-between md:gap-[15px] text-2xl items-center max-md:pt-1.5 w-full">
              {footerLinks.social.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="transition-[color,background,shadow] w-11 h-11 items-center justify-center flex rounded-full hover:text-white hover:bg-navy-blue-900 hover:shadow-[0px_10px_15px_0px_rgba(71,_103,_135,_0.20)] flex-shrink-0"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-end max-xxs:text-center max-md:flex-col max-md:justify-between gap-4 md:gap-[50px] md:text-right md:pt-[5px] max-md:w-full max-md:hidden">
            {footerLinks.navigations.map((navigation, i) => (
              <div key={i}>
                <p className="text-sm font-medium leading-normal mb-4 md:mb-3.5">
                  {navigation.name}
                </p>

                <ul className="max-md:hidden">
                  {navigation.subLinks.map((link, i) => (
                    <li className="leading-[0] mb-2.5 last:mb-0" key={i}>
                      <a
                        href={link.href}
                        className="mb-2.5 text-navy-gray-500 text-xs leading-normal transition-colors hover:text-nevada-500"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <NavigationMobile className="md:hidden w-full" />
        </div>

        {!isMobile && <Disclaimer />}
      </div>
    </footer>
  );
};
