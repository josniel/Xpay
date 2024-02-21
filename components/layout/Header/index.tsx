"use client";
import { LogoHeader } from "@/components/Logo";
import { MenuMobileApp, MenuMobileLanding } from "@/components/MenuMobile";
import { NavbarApp, NavbarLanding } from "@/components/Navbar";

import HeaderBase from "@/components/layout/Base/HeaderBase";

export const HeaderLanding = () => {
  return (
    <HeaderBase>
      <NavbarLanding />
      <MenuMobileLanding />
    </HeaderBase>
  );
};

export const HeaderApp = () => {
  return (
    <HeaderBase>
      <MenuMobileApp />
      <NavbarApp />
    </HeaderBase>
  );
};
