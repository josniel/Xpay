import { useState } from "react";

import ChevronDown from "@/components/UI/Icons/ChevronDown";
import UserAvatarFilled from "@/components/UI/Icons/UserAvatarFilled";

const SelectorAccoundHandler = ({ className = "" }: { className?: string }) => {
  const [status, setStatus] = useState<
    "unverified" | "connected" | "verfied" | null
  >(null);

  return (
    <div
      className={`bg-white rounded-10 px-2.5 h-[58px] flex items-center shadow-[0px_22.34px_17.87px_0px_rgba(43,_77,_102,_0.06),_0px_41.78px_33.42px_0px_rgba(43,_77,_102,_0.07),_0px_100px_80px_0px_rgba(43,_77,_102,_0.10)] hover:bg-wild-sand-50 transition-colors ${className}`}
    >
      <div className="relative mr-2.5">
        {status === "verfied" ? (
          <div className="w-[34px] h-[34px] rounded-full bg-red-500"></div>
        ) : (
          <div className="text-[35px]">
            <UserAvatarFilled />
          </div>
        )}
        <div className="w-[18px] h-[18px] rounded-full bg-geyser-200 absolute -bottom-px -right-1 border-[1px] border-white"></div>
      </div>

      <div className="pr-2">
        {status === "verfied" || status === "unverified" ? (
          <div className="flex gap-1 mb-1">
            <div className="text-sm leading-[14px]">0xData</div>
            {status === "unverified" && (
              <div className="text-navy-gray-500 text-xs leading-[14px]">
                (Not Verified)
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-[11px] mb-[4px]">
            <div className="text-xs leading-[14px] text-navy-gray-500 font-medium">
              Not Signed
            </div>
            <button
              type="button"
              className="btn px-2.5 h-[22px] bg-navy-blue-900 bg-opacity-0 active:bg-opacity-100 text-xs leading-normal !rounded-[100px] border-[1px] border-navy-blue-900 text-navy-blue-900 active:text-white active:shadow-[0px_10px_15px_0px_rgba(71,_103,_135,_0.20)] transition-[background,color,box-shadow]"
            >
              Sign Up
            </button>
          </div>
        )}
        <div className="flex gap-[5px]">
          <div className="w-[8px] h-[8px] rounded-full bg-shamrock-400 mt-px"></div>
          <div className="text-xs leading-[14px] text-navy-gray-500">
            0x34873...1256bc2a2
          </div>
        </div>
      </div>

      {/* <div className="w-px max-w-[1px] h-[34px] bg-red-500 ml-auto"></div> */}

      <div className="text-navy-gray-500 text-[20px] ml-auto border-l border-light-grey-200 pl-[11px] pr-0.5 h-[34px] flex items-center">
        <ChevronDown />
      </div>
    </div>
  );
};

export default SelectorAccoundHandler;
