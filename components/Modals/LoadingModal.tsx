"use client";
import React from "react";
import Image from "next/image";

import { XCircleIcon } from "@heroicons/react/24/outline";
import Wallet from "@/components/UI/Icons/Wallet";
import Coins from "@/components/UI/Icons/Coins";
import Buildings from "@/components/UI/Icons/Buildings";
import Bag from "@/components/UI/Icons/Bag";
import ModalOverlay from "@/components/Modals/ModalOverlay";
import StatusAnimation from "@/components/Modals/StatusAnimation";

interface LoadingModalProps {
  openModal: boolean;
  iconHeader: 'coin' | 'wallet' | 'building' | 'bag';
  setOpenModal: (openModal: boolean) => void;
  animations: Record<string, any>;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({
  openModal,
  setOpenModal,
  animations,
  iconHeader,
}: LoadingModalProps) => {
  const handleClose = () => setOpenModal(false);

  const sectionIcon: Record<string, JSX.Element> = {
    wallet: <Wallet width={22} height={22} />,
    coin: <Coins width={22} height={22} />,
    building: <Buildings width={20} height={20} />,
    bag: <Bag width={20} height={20} />,
  };

  return (
    <ModalOverlay openModal={openModal}>
      <div className="w-[417px] min-h-[490px] bg-white shadow-xl p-8 rounded-3xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 border h-7 px-2 py-1 rounded-full border-light-grey-200 cursor-pointer w-[60px] transition-all overflow-hidden">
            <span className="text-navy-gray-500 cursor-pointer">
              {sectionIcon[iconHeader]}
            </span>
            <Image
              alt="logo"
              src="/images/tokens/USDC.svg"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </div>
          <span
            className="text-light-grey-200 cursor-pointer hover:text-navy-blue-900"
            onClick={handleClose}
          >
            <XCircleIcon className="w-7 h-7" />
          </span>
        </div>
        <StatusAnimation animations={animations} />
      </div>
    </ModalOverlay>
  );
};

export default LoadingModal;
