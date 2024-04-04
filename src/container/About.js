import React from "react";
import { Leaf1, Leaf2, about } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-12 relative my-12"
    >
      {/* title */}

      <div className="flex w-full items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} alt="" className="w-6 h-auto object-contain" />
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About
          </p>
          <img src={Leaf2} alt="" className="w-6 h-auto object-contain" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image section */}
        <div className="px-10 w-[400px] flex items-center justify-center mx-auto">
          <div className="w-full lg-w-96 p-[2px]   rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              alt=""
              className="w-full h-[400px] object-contain rounded-md "
            />
            <div className="w-full absolute h-[400px] -top-3 -left-2 -z-10 blur-[5px] rounded-md bg-gradient-to-br from-primary to-secondary"></div>
          </div>
        </div>
        {/* main content */}
        <div className="w-full px-8 gap-4 flex flex-col items-start justify-start">
          <p className="text-base text-textlight tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            iste ipsum! Ab qui, fugit itaque voluptatibus ex facilis, vero
            maiores dolores impedit ratione reiciendis vitae. Sunt illo magnam
            maiores cupiditate?
          </p>
          <p className="text-base text-textlight tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            iste ipsum! Ab qui, fugit itaque voluptatibus ex facilis, vero
            maiores dolores impedit ratione reiciendis vitae. Sunt illo magnam
            maiores cupiditate?
          </p>
          <p className="text-base text-textlight tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            iste ipsum! Ab qui, fugit itaque voluptatibus ex facilis, vero
            maiores dolores impedit ratione reiciendis vitae. Sunt illo magnam
            maiores cupiditate?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
