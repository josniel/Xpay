"use client";
import { useEffect } from "react";

interface ModalOverlayProps {
  children: React.ReactNode;
  openModal: boolean;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  openModal,
}: ModalOverlayProps) => {

  useEffect(() => {
    openModal && (document.body.style.overflow = 'hidden');
    !openModal && (document.body.style.overflow = 'unset');
  }, [openModal]);

  if (!openModal) return null;
  return (
    <div className="w-full flex items-center justify-center h-screen bg-navy-blue-900 backdrop-blur-sm bg-opacity-50 fixed top-0 left-0 z-[100]">
      {children}
    </div>
  );
};

export default ModalOverlay;
