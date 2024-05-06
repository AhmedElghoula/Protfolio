import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../images/avatar.jpeg";

import Typewriter from "typewriter-effect";
import Scroll from "./Scroll";
function Home2() {
  const ref = useRef();
  const isInView = useInView(ref, {
    threshold: 0.5,
  });
  return (
    <section ref={ref} className="home">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0px)" : "translateX(-200px)",
                }}
                transition={{
                  duration: 0.5,
                  transition: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                  delay: isInView ? 0.25 : 0,
                }}
                style={{ paddingBottom: 15 }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                className="heading-name"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0px)" : "translateX(-200px)",
                }}
                transition={{
                  duration: 0.5,
                  transition: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                  delay: isInView ? 0.35 : 0,
                }}
              >
                I AM
                <strong className="main-name"> Ahmed ELGHOULA</strong>
              </motion.h1>

              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0px)" : "translateX(-200px)",
                }}
                transition={{
                  duration: 0.5,
                  transition: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                  delay: isInView ? 0.45 : 0,
                }}
              >
                <Typewriter
                  options={{
                    strings: ["Software Engineer", "Freelancer", "Full-stack developer"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0px)" : "translateX(20px)",
                }}
                transition={{
                  duration: 0.5,
                  transition: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                  delay: isInView ? 0.25 : 0,
                }}
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "50%",
                  border: "6px solid #f2f2f2",
                  padding: "5px",
                }}
              />
            </Col>
          </Row>
        </Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Scroll />
        </div>
      </Container>
    </section>
  );
}

export default Home2;
