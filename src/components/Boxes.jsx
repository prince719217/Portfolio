import React from "react";
import { motion } from "motion/react";

const Boxes = ({
  image,
  techName,
  bgColor,
  constraintsRef
}) => {

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      // dragElastic={0}
      // dragMomentum={false}
      whileDrag={{
        scale: 1.15,
        cursor: "grabbing",
      }}
      className={`w-40 relative -bottom-65/100 left-10 h-40 flex-shrink-0 rounded-2xl flex items-center justify-center gap-2 p-8 flex-col ${bgColor}`}
    >

      <div>
        {image}
      </div>

      <h2 className="text-2xl font-bold">
        {techName}
      </h2>

    </motion.div>
  );
};

export default Boxes;