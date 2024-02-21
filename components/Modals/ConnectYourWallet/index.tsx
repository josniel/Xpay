"use client";

import React, { useState } from "react";
import Image from "next/image";

import ModalOverlay from "@/components/Modals/ModalOverlay";
import LoadingModal from "@/components/Modals/LoadingModal";

import { XCircleIcon } from "@heroicons/react/24/outline";

import SuccessAnimation from "../../../public/static/animation/success.json";
import FailedAnimation from "../../../public/static/animation/failed.json";
import LoadingAnimation from "../../../public/static/animation/loading.json";
import LoadAnimation from "../../../public/static/animation/load.json";
import CheckAnimation from "../../../public/static/animation/check.json";

interface IWallet {
  name: string;
  image: string;
}

interface ConnectYourWalletProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

const MAIN_WALLETS = [
  {
    name: "Metamask",
    image: "metamask",
  },
  {
    name: "Coinbase Wallet",
    image: "coinbase",
  },
  {
    name: "Wallet Connect",
    image: "wallet-connect",
  },
  {
    name: "BitKeep",
    image: "bitKeep",
  },
  {
    name: "Blue Wallet",
    image: "blue-wallet",
  },
];

const OTHER_WALLETS = [
  {
    name: "Rabby Wallet",
    image: "rabby-wallet",
  },
  {
    name: "Rainbow",
    image: "rainbow",
  },
  {
    name: "Trust Wallet",
    image: "trust-wallet",
  },
  {
    name: "Ledger Live",
    image: "ledger-live",
  },
];

const STATUS_ANIMATION: Record<string, any> = {
  success: {
    name: "success",
    animation: SuccessAnimation,
    title: "Wallet Connected",
    text: "You have connected to xPAY successfully",
    footerAnimation: CheckAnimation,
  },
  failed: {
    name: "failed",
    animation: FailedAnimation,
    title: "Failed connecting Wallet",
    text: "Something was wrong with your approval",
    footerAnimation: CheckAnimation,
  },
  loading: {
    name: "loading",
    animation: LoadingAnimation,
    title: "Connecting Wallet",
    text: "Approve the transaction in order to Sign In",
    footerAnimation: LoadAnimation,
  },
};

const ConnectYourWallet: React.FC<ConnectYourWalletProps> = ({
  setOpenModal,
  openModal,
}: ConnectYourWalletProps) => {

  const [walletSelected, setWalletSelected] = useState<IWallet | null>(null);

  const handleSelectWallet = (wallet: IWallet) => setWalletSelected(wallet);

  const handleClose = () => setOpenModal(false);

  if (walletSelected !== null)
    return (
      <LoadingModal
        iconHeader="wallet"
        openModal={openModal}
        setOpenModal={setOpenModal}
        animations={STATUS_ANIMATION}
      />
    );

  return (
    <ModalOverlay openModal={openModal}>
      <div className="w-[550px] bg-white shadow-xl p-8 rounded-3xl">
        <div className="flex justify-end">
          <span
            className="text-light-grey-200 cursor-pointer hover:text-navy-blue-900"
            onClick={handleClose}
          >
            <XCircleIcon className="w-7 h-7" />
          </span>
        </div>
        <h6 className="text-navy-blue-900 text-center text-xl font-medium mb-2">
          Connect your Wallet
        </h6>
        <p className="text-navy-gray-500 text-center mb-8">
          Choose how you want connect. There are several wallet
        </p>

        <ul className="max-h-[150px] overflow-y-auto py-5">
          {MAIN_WALLETS.map((wallet, index) => (
            <li
              key={index}
              onClick={() => handleSelectWallet(wallet)}
              className="flex items-center gap-5 mb-3 mr-2 cursor-pointer hover:bg-light-grey-200 hover:bg-opacity-60 px-4 py-2 rounded-full"
            >
              <Image
                alt="logo"
                src={`/images/wallets/${wallet.image}.png`}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h5 className="text-navy-blue-900 text-sm">{wallet.name}</h5>
            </li>
          ))}
        </ul>
        <p className="text-navy-blue-900 text-sm py-3">Others</p>
        <ul className="max-h-[150px] overflow-y-auto py-5">
          {OTHER_WALLETS.map((wallet, index) => (
            <li
              key={index}
              onClick={() => handleSelectWallet(wallet)}
              className="flex items-center gap-5 mb-3 mr-2 cursor-pointer hover:bg-light-grey-200 hover:bg-opacity-60 px-4 py-2 rounded-full"
            >
              <Image
                alt="logo"
                src={`/images/wallets/${wallet.image}.png`}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h5 className="text-navy-blue-900 text-sm">{wallet.name}</h5>
            </li>
          ))}
        </ul>
      </div>
    </ModalOverlay>
  );
};

export default ConnectYourWallet;
