import React from "react";
import { Menus } from "../utlis/helper";
import MenuItems from "../components/MenuItems";

const Header = () => {
  return (
    <div className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 justify-center flex items-end lg:items-center pb-8 lg:pb-0 z-50">
      <div className="px-4 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-row lg:flex-col items-center justify-center backdrop-blur-md duration-200 gap-12">
        {Menus &&
          Menus.map((item, index) => {
            return <MenuItems key={index} menu={item} index={index} />;
          })}
      </div>
    </div>
  );
};

export default Header;
