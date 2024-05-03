import React from "react";
import { motion } from "framer-motion";
import Logo from "../images/scroll.png";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Scroll = () => {
  return (
    <motion.img
      variants={textVariants}
      animate="scrollButton"
      src={Logo}
      style={{ width: "35px", height: "35px", zIndex: 1000 }}
    />
  );
};

export default Scroll;
