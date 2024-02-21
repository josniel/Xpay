import { useState } from "react";

import { menuLinksLanding } from "@/data/menuLinks";
import { menuLinksApp } from "@/data/menuLinks";

import NavbarLinkLanding, { NavbarLinkApp } from "@/components/NavbarLink";
import SelectorAccoundHandler from "@/components/SelectorAccoundHandler";
import SelectorAccoundHandlerSmall from "@/components/SelectorAccoundHandlerSmall";
import ConnectYourWallet from "@/components/Modals/ConnectYourWallet";
import Modal from "@/components/Modals/ModalOverlay";

import GoTo from "@/components/UI/Icons/GoTo";
import Wallet from "@/components/UI/Icons/Wallet";

export const NavbarLanding = () => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex gap-1.5 lg:gap-10">
        {menuLinksLanding.map((link, i) => (
          <li key={i}>
            <NavbarLinkLanding link={link} />
          </li>
        ))}

        <li>
          <a
            href={"#"}
            className="btn bg-navy-blue-900 w-[143px] h-11 hover:bg-navy-gray-600 text-sm text-white gap-[5px] font-medium !rounded-[100px]"
          >
            <span className="text-lg leading-normal">
              <GoTo />
            </span>
            Launch App
          </a>
        </li>
      </ul>
    </nav>
  );
};

export const NavbarApp = () => {
  const [connectYourWalletModal, setConnectYourWalletModal] = useState(false);
  const [status, setStatus] = useState<
    "unverified" | "connected" | "verfied" | null
  >(null);

  return (
    <nav className="max-lg:hidden relative">
      <ul className="flex gap-1.5 2xl:gap-5 items-center">
        {menuLinksApp.map((link, i) => (
          <li key={i}>
            <NavbarLinkApp link={link} />
          </li>
        ))}

        <ConnectYourWallet
          openModal={connectYourWalletModal}
          setOpenModal={setConnectYourWalletModal}
        />

        {status === null ? (
          <li className="2xl:pl-[3px]">
            <button
              aria-label="Connect Wallet"
              type="button"
              className="btn bg-shark-950 max-xl:w-[30px] xl:w-[180px] 2xl:w-[237px] h-[30px] xl:h-[38px] hover:bg-regent-gray-600 text-xs leading-[14px] text-white gap-[5px] !rounded-[100px]"
              onClick={() => setConnectYourWalletModal(true)}
            >
              <span className="text-sm leading-normal">
                <Wallet />
              </span>
              <span className="max-xl:hidden">Connect Wallet</span>
            </button>
          </li>
        ) : (
          <li>
            <SelectorAccoundHandler className="max-xl:hidden" />
            <SelectorAccoundHandlerSmall className="xl:hidden" />
          </li>
        )}
      </ul>
    </nav>
  );
};
