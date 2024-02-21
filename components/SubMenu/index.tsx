import { motion, AnimatePresence } from "framer-motion";

import { SubLink } from "@/interfaces";

interface SubMenuProps {
  subLinks: SubLink[];
  isVisible: boolean;
}

const SubMenu = ({ subLinks, isVisible }: SubMenuProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 0.3, ease: "linear" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="rounded-10 border-[2px] border-white bg-white bg-opacity-40 backdrop-blur-[10px] px-1.5 py-2 absolute top-full mt-3.5 min-w-[163px] left-1/2 -translate-x-1/2 flex flex-col gap-[5px] will-change-transform"
        >
          <ul>
            {subLinks.map((link, i) => (
              <a
                href={link.href}
                className="btn w-full px-2.5 h-[30px] gap-[5px] flex hover:bg-navy-blue-900 hover:text-white text-xs leading-normal !rounded-10 !justify-start mb-[5px] last:mb-0"
                key={i}
              >
                <span className="text-sm leading-normal">{link.icon}</span>
                <span className="text-xs leading-normal whitespace-nowrap">
                  {link.name}
                </span>
              </a>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubMenu;
