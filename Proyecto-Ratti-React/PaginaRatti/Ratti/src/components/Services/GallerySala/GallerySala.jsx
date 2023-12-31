import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { GallegyData } from "../../../data/GallegyData";
import { ExampleContainer, Next, Prev } from "./GalleryStyles";
import { FcPrevious } from "react-icons/fc";
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, GallegyData.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <ExampleContainer paginate={paginate}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={GallegyData[imageIndex].img}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <Next onClick={() => paginate(1)}>
        {" "}
        <FcPrevious />
      </Next>

      <Prev onClick={() => paginate(-1)}>
        <FcPrevious />
      </Prev>
    </ExampleContainer>
  );
};

export default Example;
