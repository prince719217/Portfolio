import React from "react";
import { motion } from "motion/react";

const Boxes = ({ image, techName, bgColor, constraintsRef }) => {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      whileDrag={{
        scale: 1.1,
        cursor: "grabbing",
      }}
      className={`w-28 h-28 sm:w-32 sm:h-32 xl:w-40 xl:h-40 flex-shrink-0 rounded-2xl flex items-center justify-center gap-2 p-4 sm:p-6 xl:p-8 flex-col ${bgColor}`}
    >
      <div>{image}</div>
      <h2 className="text-base sm:text-xl xl:text-2xl font-bold text-center">
        {techName}
      </h2>
    </motion.div>
  );
};

export default Boxes
