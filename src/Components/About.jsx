import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../images/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Skills from "./Skills";
import Tools from "./Tools";
import { useInView, motion, useAnimation } from "framer-motion";

function About() {
  const ref = useRef();
  const inView = useInView(ref, {
    threshold: 0.5,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: [0, -20, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <Container ref={ref} fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="Blue">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <motion.li className="social-icons" animate={controls}>
                  <a
                    href="https://github.com/AhmedElghoula"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </motion.li>
                <motion.li className="social-icons"animate={controls}>
                  <a
                    href="https://www.linkedin.com/in/elghoula-ahmed/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.li>
              </ul>
            </Col>
          </Col>
          <Col md={8} className="home-about-description">
            <motion.p
              className="home-about-body"
              style={{ textAlign: "justify" }}
              animate={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0px)" : "translateX(-180px)",
              }}
              transition={{
                duration: 0.5,
                transition: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                delay: inView ? 0.25 : 0,
              }}
            >
              Hi Everyone, I am <span className="Blue">Elghoula Ahmed</span>
              <br />
              <br />
              A dedicated Full Stack Developer hailing from Tunisia.
              <br />
              With a dynamic, creative, and autonomous approach, I thrive in collaborative
              environments, valuing teamwork as a cornerstone of successful projects.
              <br />
            </motion.p>
            <motion.p className="home-about-body" animate={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0px)" : "translateX(-180px)",
              }}
              transition={{
                duration: 0.5,
                transition: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                delay: inView ? 0.25 : 0,
              }}>
              <br />
              My primary focus lies in crafting innovative
              <i>
                <b className="Blue">Web Technologies and Products </b>
              </i>
              <br />
              Leveraging my skills, I specialize in developing robust solutions using
              <b className="Blue">Node.js or Django</b> and
              <i>
                <b className="Blue"> Modern Javascript Library and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="Blue"> React.js and Next.js</b>
              </i>
            </motion.p>
          </Col>
        </Row>

        <h1 className="project-heading" style={{ textAlign: "center" }}>
          Professional <strong className="Blue">Skills </strong>
        </h1>
        <Skills />
        <h1 className="project-heading " style={{ textAlign: "center" }}>
          <strong className="Blue">Tools </strong>I use
        </h1>
        <Tools />
      </Container>
    </Container>
  );
}
export default About;
