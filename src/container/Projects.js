import React, { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsData } from "../utlis/helper";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <section
      id="projects"
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
            Projects
          </p>
          <img src={Leaf2} alt="" className="w-6 h-auto object-contain" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {ProjectsData &&
            ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <motion.div
      key={project}
      className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={project.imgSrc}
        className="w-full h-full rounded-lg object-contain "
      />
      {isHoverd && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex flex-col items-center justify-center gap-2">
          <p className="text-xl text-white">{project?.name}</p>
          <a className="" href={project?.gitURL}>
            <FaGithub className="text-xl text-white hover:text-primary" />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
