import React, { useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { motion, useInView } from "framer-motion";
import Button from "react-bootstrap/Button";
import { TiHomeOutline } from "react-icons/ti";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiFillGithub } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Resume from "../images/Resume_Ahmed_Elghoula_.pdf";
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, {
    threshold: 0.5,
  });
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      ref={ref}
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <motion.div
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
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0px)" : "translateY(-200px)",
              }}
              transition={{
                duration: 0.5,
                transition: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                delay: isInView ? 0.25 : 0,
              }}
            >
              <strong className="Blue">A</strong>hmed <strong className="Blue">E</strong>lghoula
            </motion.div>
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                <TiHomeOutline style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                <CgProfile style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#projects" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={Resume} target="_blank" onClick={() => updateExpanded(false)}>
                <FaRegFileAlt style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/AhmedElghoula"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiFillGithub size={22} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
