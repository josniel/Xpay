import { ComponentVisible } from "@/hooks/useVisible";

import SubMenu from "@/components/SubMenu";

import { Link } from "@/interfaces";

const NavbarLinkLanding = ({ link }: { link: Link }) => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  return (
    <div ref={ref} className="relative">
      <a
        href={link.href}
        className={`btn hover:bg-navy-blue-900 hover:text-white px-4 h-11 text-sm flex items-center ${
          isVisible ? "bg-navy-blue-900 text-white" : ""
        }`}
        onClick={(e) => {
          if (link.subLinks) setIsVisible(!isVisible);
          e.preventDefault();
        }}
      >
        {link.icon && <span className="mr-2">{link.icon}</span>}
        {link.name}
      </a>

      {link.subLinks && (
        <SubMenu subLinks={link.subLinks} isVisible={isVisible} />
      )}
    </div>
  );
};

export const NavbarLinkApp = ({ link }: { link: Link }) => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  return (
    <div ref={ref} className="relative">
      <a
        href={link.href}
        className={`btn h-[30px] xl:h-[38px] px-2.5 2xl:px-5 gap-[5px] text-xs xl:text-sm flex hover:bg-shark-950 hover:text-white leading-normal hover:shadow-[0px_10px_15px_0px_rgba(71,_103,_135,_0.20)] !transition-[background,color,box-shadow]`}
      >
        {link.icon}
        {link.name}
      </a>
    </div>
  );
};

export default NavbarLinkLanding;
