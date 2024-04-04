import React from "react";

const ServiceCard = ({ count, text }) => {
  return (
    <div
      className="w-full lg:w-52 h-32 border border-[rgba(255,255,255,0.3)] flex flex-col items-center justify-center rounded-md gap-2 group hover:border-primary cursor-pointer relative bg-bgPrimary"
      style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.4)" }}
    >
      <div className="hidden group-hover:block absolute blur-md -inset-1 bg-gradient-to-br from-primary to-secondary -z-10"></div>
      <p className="text-2xl text-textlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary capitalize font-sans tracking-widest">
        {count}
      </p>
      <p className="text-base text-textlight group-hover:text-white">{text}</p>
    </div>
  );
};

export default ServiceCard;
