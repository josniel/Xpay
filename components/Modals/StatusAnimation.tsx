"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface StatusAnimationProps {
  animations: Record<string, any>;
}

export const StatusAnimation: React.FC<StatusAnimationProps> = ({
  animations,
}: StatusAnimationProps) => {
  const [statusAnimation, setStatusAnimation] = useState(animations["loading"]);

  useEffect(() => {
    setTimeout(() => {
      setStatusAnimation(animations["success"]);
    }, 3000);
  }, []);

  console.log("statusAnimation", statusAnimation);

  return (
    <div>
      <div className={`text-center mx-auto h-[200px] ${statusAnimation.name !== 'loading' ? 'w-44' : ''}`}>
        <Lottie animationData={statusAnimation.animation} loop={true} />
      </div>
      <h6 className="text-navy-blue-900 text-center text-xl font-medium mb-2">
        {statusAnimation.title}
      </h6>
      <p className="text-navy-gray-500 text-center mb-3">
        {statusAnimation.text}
      </p>
      <span className="text-blue-500 text-sm text-center block cursor-pointer">
        View on Explorer
      </span>
      <ul className="flex items-center justify-between mt-20">
        <li className="flex items-center flex-col justify-center">
          <span className="block w-6 h-6 bg-white relative z-20 mb-2">
            <Lottie
              animationData={statusAnimation.footerAnimation}
              loop={true}
            />
          </span>
          <p className="text-sm text-navy-gray-500 text-center">Initialized</p>
        </li>
        <li className="flex items-center flex-col justify-center relative after:content-[''] after:w-[280px] after:h-px after:bg-navy-blue-300 after:absolute after:-left-[105px] after:top-[11px]">
          <span className="block w-6 h-6 bg-white relative z-20 mb-2">
            <Lottie
              animationData={statusAnimation.footerAnimation}
              loop={true}
            />
          </span>
          <p className="text-sm text-navy-gray-500 text-center">Processing</p>
        </li>
        <li className="flex items-center flex-col justify-center">
          <span className="block w-6 h-6 bg-white relative z-20 mb-2">
            <Lottie
              animationData={statusAnimation.footerAnimation}
              loop={true}
            />
          </span>
          <p className="text-sm text-navy-gray-500 text-center">Success</p>
        </li>
      </ul>
    </div>
  );
};

export default StatusAnimation;
