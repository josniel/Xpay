import { useState } from "react";

import ChevronDown from "@/components/UI/Icons/ChevronDown";
import UserAvatarFilled from "@/components/UI/Icons/UserAvatarFilled";
import Wallet from "@/components/UI/Icons/Wallet";

const SelectorAccoundHandlerSmall = ({
  className = "",
}: {
  className?: string;
}) => {
  const [status, setStatus] = useState<
    "unverified" | "connected" | "verfied" | null
  >(null);

  return (
    <div className={`flex ${className}`}>
      <div className="rounded-l-[8px] border-[1px] border-r-0 border-[#CBD5E0] bg-white w-[35px] h-[34px] flex items-center justify-center">
        {status === null ? (
          <div className="text-white w-5 h-5 rounded-full flex items-center justify-center bg-navy-blue-900 text-[12px]">
            <Wallet />
          </div>
        ) : (
          <div className="relative w-5 h-5">
            <div className="h-1.5 w-1.5 rounded-full border-[1px] border-navy-blue-900 bg-shamrock-400 absolute top-0 right-0"></div>
            {status === "verfied" ? (
              <div className="w-[20px] h-[20px] rounded-full bg-red-500" />
            ) : (
              <div className="text-[20px] text-navy-blue-900">
                <UserAvatarFilled />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="rounded-r-[8px] border-[1px] border-[#CBD5E0] bg-white w-[35px] h-[34px] text-[18px] flex items-center justify-center">
        <span className="opacity-30">
          <ChevronDown />
        </span>
      </div>
    </div>
  );
};

export default SelectorAccoundHandlerSmall;
