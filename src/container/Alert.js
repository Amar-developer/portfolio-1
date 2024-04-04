import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ status, message }) => {
  const statusConfig = {
    success: {
      bgColor: "bg-primary",
      borderColor: "border-primary",
      textColor: "text-primary",
    },
    warning: {
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
      textColor: "text-yellow-400",
    },
    danger: {
      bgColor: "bg-red-400",
      borderColor: "border-red-400",
      textColor: "text-red-400",
    },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={` fixed rounded-md w-auto backdrop-blur-md top-12 right-12 px-3 py-2 border ${config.borderColor} overflow-hidden`}
    >
      <p className={config.textColor}>{message}</p>
      <div className="h-1 absolute inset-x-0 bottom-0 bg-[rgba(255,255,255,0.5)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 4, delay: 0.5 }}
          className={`${config.bgColor} h-full`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Alert;
