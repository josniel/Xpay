import { ComponentVisible } from "@/hooks/useVisible";

import MenuMobileSubMenu from "@/components/MenuMobile/MenuMobileSubMenu";
import ChevronDown from "@/components/UI/Icons/ChevronDown";

import { Link } from "@/interfaces";

const MenuMobileLink = ({ link }: { link: Link }) => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  return (
    <div ref={ref} className="relative flex flex-col gap-2">
      <a
        href={link.href}
        className={`btn active:text-white px-4 py-2.5 text-sm !justify-between ${
          isVisible ? "bg-navy-blue-900 text-white" : ""
        }`}
        onClick={(e) => {
          if (link.subLinks) setIsVisible(!isVisible);
          e.preventDefault();
        }}
      >
        <span>{link.name}</span>

        <span
          className={`text-lg leading-normal transition-transform ${
            isVisible ? "-scale-y-100" : ""
          }`}
        >
          <ChevronDown />
        </span>
      </a>

      {link.subLinks && (
        <MenuMobileSubMenu subLinks={link.subLinks} isVisible={isVisible} />
      )}
    </div>
  );
};

export default MenuMobileLink;
