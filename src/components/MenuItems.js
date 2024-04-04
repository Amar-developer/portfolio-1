import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MenuItems = ({ menu, index }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <a
        href={menu.uri}
        className="w-12 h-12 rounded-full flex justify-center items-center group cursor-pointer hover:bg-gradient-to-br hover:from-primary hover:to-secondary relative"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => setIsHover(false)}
      >
        <menu.Icon
          className={`text-textlight group-hover:text-bgPrimary text-xl`}
        />
        {/* tool tip */}
        <AnimatePresence>
          {isHover && (
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: -25 }}
              exit={{ opacity: 0, x: -25 }}
              className="hidden lg:block absolute bg-white rounded-md px-6 py-2 -left-[140px] after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-white after:rotate-45"
              style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)" }}
            >
              <p className="text-bgPrimary ">{menu?.name}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
};

export default MenuItems;
