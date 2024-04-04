import React from "react";
import { Leaf1, Leaf2 } from "../assets";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skils
          </p>
          <img src={Leaf2} alt="" className="w-6 h-auto object-contain" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* main content */}
        <div className="w-full px-8 gap-4 flex flex-col items-start justify-start">
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text">
            My Skills & Works Experience
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
          <p className="text-base text-textlight tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            iste ipsum! Ab qui, fugit itaque voluptatibus ex facilis, vero
            maiores dolores impedit ratione reiciendis vitae. Sunt illo magnam
            maiores cupiditate?
          </p>
        </div>
        {/* image section */}
        <div className="px-10 w-full flex flex-col gap-4 items-center justify-center mx-auto">
          <SkillCard
            skills={"HTML 5"}
            percentage={"95%"}
            color={"#ff3f3f"}
            move={true}
          />
          <SkillCard
            skills={"CSS 3 & TAILWIND"}
            percentage={"75%"}
            color={"#008fff"}
          />
          <SkillCard
            skills={"JAVASCRIPT 3"}
            percentage={"70%"}
            color={"#00fff3"}
            move={true}
          />
          <SkillCard skills={"NODE JS"} percentage={"80%"} color={"#14db00"} />
          <SkillCard
            skills={"REACT JS"}
            percentage={"75%"}
            color={"#ffb900"}
            move={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
