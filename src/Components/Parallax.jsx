import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{ background: "linear-gradient(to left, rgb(27 20 41), rgb(20 15 35))" }}
    >
      <motion.h1 className="project-heading" style={{ y: yText, fontSize: "2.6em" }}>
        LET ME <span className="Blue"> INTRODUCE </span> MYSELF
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
