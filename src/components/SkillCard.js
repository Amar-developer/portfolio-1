import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const SkillCard = ({ skills, color, percentage, move }) => {
  return (
    <div
      className={`border border-[rgba(255,255,255,0.3)] rounded-md group w-full px-8 py-3 cursor-pointer gap-2 relative items-center flex justify-between`}
      style={{
        boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)",
        marginLeft: move ? -30 : 20,
      }}
    >
      {/* name */}
      <div className="gap-2 flex flex-1 flex-col items-start justify-start">
        <p className="text-base text-white"> {skills}</p>
        <div className="w-full h-1 bg-[rgba(255,255,255,0.2)] overflow-hidden rounded-md relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: percentage }}
            transition={{ duration: 1.5 }}
            className="h-full top-0 left-0 absolute"
            style={{ background: color }}
          ></motion.div>
        </div>
      </div>

      {/* percentage */}
      <div
        className="flex items-center justify-center w-16 h-12 relative overflow-hidden rounded-md"
        style={{ border: `1px solid ${color}` }}
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: percentage }}
          transition={{ duration: 1.5 }}
          style={{ background: color }}
          className="w-full absolute bottom-0 left-0 items-center justify-center flex"
        >
          <p className="text-bgPrimary tracking-wider z-10 font-sans font-bold">
            {percentage}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillCard;
